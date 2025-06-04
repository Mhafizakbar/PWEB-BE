import { Hono } from 'hono'
import prisma from '../db'
import * as bcrypt from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import authMiddleware from '../Middleware/authMiddleware'
import { setCookie } from 'hono/cookie'
import { cors } from 'hono/cors'

const SECRET_KEY = 'RAHASIA_USER'
const pengguna = new Hono()

// Pasang CORS agar bisa dipanggil dari browser (jika belum ada di app utama)
pengguna.use('*', cors({
  origin: '*', // kamu bisa ganti sesuai domain yang diizinkan
  allowMethods: ['GET', 'POST', 'PUT', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}))

// Register user baru
pengguna.post('/register', async (c) => {
  const { nama_lengkap, email, no_telepon, password, role = 'USER' } = await c.req.json()

  if (!nama_lengkap || !email || !password) {
    return c.json({ error: 'nama_lengkap, email, dan password wajib diisi' }, 400)
  }

  const existing = await prisma.pengguna.findUnique({ where: { email } })
  if (existing) {
    return c.json({ error: 'Email sudah terdaftar' }, 409)
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const penggunaBaru = await prisma.pengguna.create({
    data: {
      nama_lengkap,
      email,
      no_telepon: no_telepon ?? null,
      password: hashedPassword,
      role: role === 'ADMIN' ? 'ADMIN' : 'USER',
    },
    select: {
      id_pengguna: true,
      nama_lengkap: true,
      email: true,
      no_telepon: true,
      tanggal_dibuat: true,
      role: true,
    },
  })

  return c.json(penggunaBaru, 201)
})

// Login user biasa
pengguna.post('/login', async (c) => {
  const { email, password } = await c.req.json()

  const user = await prisma.pengguna.findUnique({ where: { email } })
  if (!user) return c.json({ error: 'Email tidak ditemukan' }, 404)

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return c.json({ error: 'Password salah' }, 401)

  const token = sign(
    { id: user.id_pengguna, email: user.email, role: user.role },
    SECRET_KEY,
    { expiresIn: '5m' }
  )

  setCookie(c, 'token', token, {
    httpOnly: true,
    secure: false, // ubah ke true jika pakai HTTPS
    sameSite: 'lax',
    maxAge: 60 * 5,
    path: '/',
  })

  return c.json({ message: 'Login berhasil, token disimpan di cookie' })
})

// Login khusus admin
pengguna.post('/loginadmin', async (c) => {
  const { email, password } = await c.req.json()

  const user = await prisma.pengguna.findUnique({ where: { email } })
  if (!user) return c.json({ error: 'Email tidak ditemukan' }, 404)

  if (user.role !== 'ADMIN') {
    return c.json({ error: 'Hanya admin yang bisa login di sini' }, 403)
  }

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

// Dapatkan daftar pengguna (butuh autentikasi)
pengguna.get('/', authMiddleware, async (c) => {
  const users = await prisma.pengguna.findMany({
    select: { id_pengguna: true, nama_lengkap: true, email: true },
    orderBy: { id_pengguna: 'asc' },
  })
  return c.json(users)
})

// Update data pengguna (butuh autentikasi)
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
