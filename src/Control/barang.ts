import { Hono } from 'hono'
import prisma from '../db'
import { authMiddleware } from '../Middleware/authMiddleware'

const barang = new Hono()

barang.get('/', authMiddleware, async (c) => {
  const data = await prisma.barang.findMany({
    orderBy: { id_barang: 'asc' },
    include: { kategori: { select: { id_kategori: true, nama_kategori: true } } },
  })
  return c.json(data)
})

barang.post('/', authMiddleware, async (c) => {
  const { nama_barang, id_kategori, jumlah, deskripsi } = await c.req.json()
  if (!nama_barang || !jumlah)
    return c.json({ error: 'nama_barang dan jumlah wajib diisi' }, 400)

  if (id_kategori) {
    const kategoriAda = await prisma.kategori.findUnique({ where: { id_kategori } })
    if (!kategoriAda)
      return c.json({ error: `Kategori dengan id ${id_kategori} tidak ditemukan` }, 404)
  }

  const barangBaru = await prisma.barang.create({
    data: { nama_barang, id_kategori: id_kategori ?? null, jumlah, deskripsi: deskripsi ?? null },
  })

  return c.json(barangBaru, 201)
})

barang.get('/:id', authMiddleware, async (c) => {
  const id = parseInt(c.req.param('id'))
  const data = await prisma.barang.findUnique({
    where: { id_barang: id },
    include: { kategori: true },
  })
  if (!data) return c.json({ error: 'Barang tidak ditemukan' }, 404)
  return c.json(data)
})

barang.put('/:id', authMiddleware, async (c) => {
  const id = parseInt(c.req.param('id'))
  const { nama_barang, id_kategori, jumlah, deskripsi } = await c.req.json()

  if (!nama_barang || !jumlah)
    return c.json({ error: 'nama_barang dan jumlah wajib diisi' }, 400)

  if (id_kategori) {
    const kategoriAda = await prisma.kategori.findUnique({ where: { id_kategori } })
    if (!kategoriAda)
      return c.json({ error: `Kategori dengan id ${id_kategori} tidak ditemukan` }, 404)
  }

  try {
    const updated = await prisma.barang.update({
      where: { id_barang: id },
      data: { nama_barang, id_kategori: id_kategori ?? null, jumlah, deskripsi: deskripsi ?? null },
    })
    return c.json(updated)
  } catch {
    return c.json({ error: 'Barang tidak ditemukan atau gagal update' }, 404)
  }
})

barang.delete('/:id', authMiddleware, async (c) => {
  const id = parseInt(c.req.param('id'))
  try {
    await prisma.barang.delete({ where: { id_barang: id } })
    return c.json({ message: 'Barang berhasil dihapus' })
  } catch {
    return c.json({ error: 'Barang tidak ditemukan atau gagal dihapus' }, 404)
  }
})


export default barang
