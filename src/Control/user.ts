import { Hono } from 'hono'
import prisma from '../db'
import * as bcrypt from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { setCookie } from 'hono/cookie'
import authMiddleware from '../Middleware/authMiddleware'
import { v4 as uuidv4 } from 'uuid'

const SECRET_KEY = 'RAHASIA_USER'
const pengguna = new Hono()

// REGISTER
pengguna.post('/register', async (c) => {
  const { nama_lengkap, email, no_telepon, password, role = 'USER' } = await c.req.json()

  if (!nama_lengkap || !email || !password) {
    return c.json({ error: 'nama_lengkap, email, dan password wajib diisi' }, 400)
  }

  const existing = await prisma.pengguna.findUnique({ where: { email } })
  if (existing) return c.json({ error: 'Email sudah terdaftar' }, 409)

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

// LOGIN USER
pengguna.post('/login', async (c) => {
  const { email, password } = await c.req.json()
  const user = await prisma.pengguna.findUnique({ where: { email } })

  if (!user) return c.json({ error: 'Email tidak ditemukan' }, 404)
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return c.json({ error: 'Password salah' }, 401)

  const token = sign({ id: user.id_pengguna, email: user.email, role: user.role }, SECRET_KEY, {
    expiresIn: '5m',
  })

  setCookie(c, 'token', token, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: 60 * 5,
    path: '/',
  })

  return c.json({ message: 'Login berhasil, token disimpan di cookie' })
})

// LOGIN ADMIN
pengguna.post('/loginadmin', async (c) => {
  const { email, password } = await c.req.json()
  const user = await prisma.pengguna.findUnique({ where: { email } })

  if (!user) return c.json({ error: 'Email tidak ditemukan' }, 404)
  if (user.role !== 'ADMIN') return c.json({ error: 'Hanya admin yang bisa login di sini' }, 403)

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return c.json({ error: 'Password salah' }, 401)

  const token = sign({ id: user.id_pengguna, email: user.email, role: user.role }, SECRET_KEY, {
    expiresIn: '5m',
  })

  setCookie(c, 'token', token, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: 60 * 5,
    path: '/',
  })

  return c.json({ message: 'Login admin berhasil, token disimpan di cookie' })
})

// GET PENGGUNA (AUTH)
pengguna.get('/', authMiddleware, async (c) => {
  const users = await prisma.pengguna.findMany({
    select: { id_pengguna: true, nama_lengkap: true, email: true },
    orderBy: { id_pengguna: 'asc' },
  })
  return c.json(users)
})

// UPDATE PENGGUNA (AUTH)
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

// FORGOT PASSWORD
pengguna.post('/forgotpassword', async (c) => {
  const { email } = await c.req.json()

  const user = await prisma.pengguna.findUnique({ where: { email } })
  if (!user) return c.json({ error: 'Email tidak ditemukan' }, 404)

  const token = uuidv4()
  const expiresAt = new Date(Date.now() + 1000 * 60 * 10) // 10 menit

  await prisma.reset_password_token.create({
    data: {
      email,
      token,
      expires_at: expiresAt,
    },
  })

  console.log(`Link reset: http://localhost:3000/reset-password?token=${token}`)

  return c.json({ message: 'Link reset password telah dikirim ke email (simulasi).' })
})

// RESET PASSWORD
pengguna.post('/resetpassword', async (c) => {
  const { token, newPassword } = await c.req.json()

  const tokenRecord = await prisma.reset_password_token.findUnique({ where: { token } })
  if (!tokenRecord || tokenRecord.used || tokenRecord.expires_at < new Date()) {
    return c.json({ error: 'Token tidak valid atau sudah kedaluwarsa' }, 400)
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10)

  await prisma.pengguna.update({
    where: { email: tokenRecord.email },
    data: { password: hashedPassword },
  })

  await prisma.reset_password_token.update({
    where: { token },
    data: { used: true },
  })

  return c.json({ message: 'Password berhasil direset.' })
})

export default pengguna
