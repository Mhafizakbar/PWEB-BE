import { Hono } from 'hono'
import prisma from '../db'
import * as bcrypt from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import authMiddleware from '../Middleware/authMiddleware'
import { setCookie } from 'hono/cookie'
import { cors } from 'hono/cors'

const SECRET_KEY = 'RAHASIA_USER'

const pengguna = new Hono()


pengguna.post('/register', async (c) => {
  const { nama_lengkap, email, no_telepon, password, role = 'USER' } = await c.req.json()
   

  if (!nama_lengkap || !email || !password) {
    return c.json({ error: 'nama_lengkap, email, dan password wajib diisi' }, 400)
  }

  const hashPassword = await bcrypt.hash(password, 10);
    let user;
    let admin;
    const existingUser = await prisma.pengguna.findUnique({
      where: { email: email },
    });
    if (existingUser) {
      return c.json(
        {
          status: "error",
          message: "Email already registered",
        },
        400
      );
    }
    if (email === "admin@gmail.com" || email === "admin1@gmail.com") {
      user = await prisma.pengguna.create({
        data: {
          email : email,
          password : hashPassword,
          nama_lengkap : nama_lengkap.toUpperCase(),
          role : "ADMIN"
        },
      });
     
      return c.json(
        {
          status: "success",
          message: "User registered successfully",
          data: {
            id: user.id_pengguna,
            nama: user.nama_lengkap,
            email: user.email,
          },
        },
        201
      );
    } else {
      user = await prisma.pengguna.create({
        data: {
          nama_lengkap: nama_lengkap.toUpperCase(),
          email: email,
          password: hashPassword,
          role: "USER",
        },
      });
      return c.json(
        {
          status: "success",
          message: "User registered successfully",
          data: {
            id: user.id_pengguna,
            nama: user.nama_lengkap,
            email: user.email,
          },
        },
        201
      );
    }
 
})

pengguna.post('/login', async (c) => {
  const { email, password } = await c.req.json()
  const user = await prisma.pengguna.findUnique({ where: { email } })

  if (!user) return c.json({ error: 'Email tidak ditemukan' }, 404)

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return c.json({ error: 'Password salah' }, 401)

  const token = sign(
    { id: user.id_pengguna, email: user.email, role: user.role },
    SECRET_KEY,
    { expiresIn: '1h' }  
  )

   setCookie(c, 'token', token, {
    httpOnly: true,
    secure: true, // ubah jadi true kalau pakai HTTPS
    sameSite: 'none',
    maxAge: 60 * 60, // 60 menit
    path: '/',
    
  })

  return c.json({ message: 'Login berhasil, token disimpan di cookie' })
})

pengguna.post('/loginadmin', async (c) => {
  const { email, password } = await c.req.json()
  const user = await prisma.pengguna.findUnique({ where: { email } })

  if (!user) return c.json({ error: 'Email tidak ditemukan' }, 404)

  if (user.role !== 'ADMIN') return c.json({ error: 'Hanya admin yang bisa login di sini' }, 403)

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return c.json({ error: 'Password salah' }, 401)

  const token = sign(
    { id: user.id_pengguna, email: user.email, role: user.role },
    SECRET_KEY,
    { expiresIn: '5m' }
  )

  setCookie(c, 'token', token, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: 60 * 5,
    path: '/',
  })

  return c.json({ message: 'Login admin berhasil, token disimpan di cookie' })
})

// contoh endpoint dengan authMiddleware
pengguna.get('/', authMiddleware, async (c) => {
  const users = await prisma.pengguna.findMany({
    select: { id_pengguna: true, nama_lengkap: true, email: true },
    orderBy: { id_pengguna: 'asc' },
  })
  return c.json(users)
})

pengguna.put('/:id', authMiddleware, async (c) => {
  const id = Number(c.req.param('id'))
  const data = await c.req.json()

  const updated = await prisma.pengguna.update({
    where: { id_pengguna: id },
    data,
    select: {
      id_pengguna: true,
      nama_lengkap: true,
      email: true,
      no_telepon: true,
      role: true,
    },
  })

  return c.json(updated)
})

export default pengguna
