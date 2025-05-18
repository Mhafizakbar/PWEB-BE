import { Hono } from 'hono'
import prisma from '../db'
import { authMiddleware } from '../Middleware/authMiddleware'

const detail = new Hono()

detail.get('/', authMiddleware, async (c) => {
  const data = await prisma.detail_peminjaman.findMany({
    orderBy: { id_detail: 'asc' },
    include: {
      barang: { select: { id_barang: true, nama_barang: true } },
      peminjaman: {
        select: {
          id_peminjaman: true,
          tanggal_pinjam: true,
          pengguna: { select: { id_pengguna: true, nama_lengkap: true } },
        },
      },
    },
  })
  return c.json(data)
})

detail.post('/', authMiddleware, async (c) => {
  const { id_peminjaman, id_barang, jumlah_pinjam } = await c.req.json()
  if (!id_peminjaman || !id_barang || !jumlah_pinjam)
    return c.json({ error: 'Semua field wajib diisi' }, 400)

  const peminjaman = await prisma.peminjaman.findUnique({ where: { id_peminjaman } })
  if (!peminjaman) return c.json({ error: 'Peminjaman tidak ditemukan' }, 404)

  const barang = await prisma.barang.findUnique({ where: { id_barang } })
  if (!barang) return c.json({ error: 'Barang tidak ditemukan' }, 404)

  const detailBaru = await prisma.detail_peminjaman.create({
    data: { id_peminjaman, id_barang, jumlah_pinjam },
  })

  return c.json(detailBaru, 201)
})

detail.get('//:id', authMiddleware, async (c) => {
  const id = parseInt(c.req.param('id'))
  const data = await prisma.detail_peminjaman.findUnique({
    where: { id_detail: id },
    include: {
      barang: true,
      peminjaman: true,
    },
  })
  if (!data) return c.json({ error: 'Detail peminjaman tidak ditemukan' }, 404)
  return c.json(data)
})

detail.put('/:id', authMiddleware, async (c) => {
  const id = parseInt(c.req.param('id'))
  const { jumlah_pinjam } = await c.req.json()
  if (!jumlah_pinjam) return c.json({ error: 'jumlah_pinjam wajib diisi' }, 400)

  try {
    const updated = await prisma.detail_peminjaman.update({
      where: { id_detail: id },
      data: { jumlah_pinjam },
    })
    return c.json(updated)
  } catch {
    return c.json({ error: 'Gagal update detail peminjaman' }, 404)
  }
})

detail.delete('/:id', authMiddleware, async (c) => {
  const id = parseInt(c.req.param('id'))
  try {
    await prisma.detail_peminjaman.delete({ where: { id_detail: id } })
    return c.json({ message: 'Detail peminjaman berhasil dihapus' })
  } catch {
    return c.json({ error: 'Gagal menghapus detail peminjaman' }, 404)
  }
})


export default detail
