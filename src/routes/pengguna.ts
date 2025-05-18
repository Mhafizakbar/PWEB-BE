import { Hono } from 'hono'
import prisma from '../db'
import { authMiddleware } from '../Middleware/authMiddleware'
import { adminMiddleware } from '../Middleware/Admin'

export const pengguna = new Hono()

// hanya admin bisa akses data semua user
pengguna.get('/pengguna', authMiddleware, adminMiddleware, async (c) => {
  const data = await prisma.pengguna.findMany({
    orderBy: { id_pengguna: 'asc' },
    select: {
      id_pengguna: true,
      nama_lengkap: true,
      email: true,
      no_telepon: true,
      tanggal_dibuat: true,
      role: true,
    },
  })
  return c.json(data)
})
