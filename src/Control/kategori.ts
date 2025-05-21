import { Hono } from 'hono'
import prisma from '../db'
import { authMiddleware } from '../Middleware/authMiddleware'

const kategori = new Hono()

kategori.get('/', async (c) => {
  const data = await prisma.kategori.findMany({ orderBy: { id_kategori: 'asc' } })
  return c.json(data)
})

kategori.post('/', authMiddleware, async (c) => {
  const { nama_kategori } = await c.req.json()
  if (!nama_kategori) return c.json({ error: 'nama_kategori wajib diisi' }, 400)

  const kategoriBaru = await prisma.kategori.create({ data: { nama_kategori } })
  return c.json(kategoriBaru, 201)
})

kategori.get('/:id', async (c) => {
  const id = parseInt(c.req.param('id'))
  const data = await prisma.kategori.findUnique({ where: { id_kategori: id } })
  if (!data) return c.json({ error: 'Kategori tidak ditemukan' }, 404)
  return c.json(data)
})


kategori.put('/:id', authMiddleware, async (c) => {
  const id = parseInt(c.req.param('id'))
  const { nama_kategori } = await c.req.json()
  if (!nama_kategori) return c.json({ error: 'nama_kategori wajib diisi' }, 400)

  try {
    const updated = await prisma.kategori.update({
      where: { id_kategori: id },
      data: { nama_kategori },
    })
    return c.json(updated)
  } catch {
    return c.json({ error: 'Kategori tidak ditemukan atau gagal update' }, 404)
  }
})


kategori.delete('/:id', authMiddleware, async (c) => {
  const id = parseInt(c.req.param('id'))

  try {
    await prisma.kategori.delete({ where: { id_kategori: id } })
    return c.json({ message: 'Kategori berhasil dihapus' })
  } catch {
    return c.json({ error: 'Kategori tidak ditemukan atau gagal dihapus' }, 404)
  }
})


export default kategori
