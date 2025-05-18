import { Hono } from 'hono'
import prisma from '../db'
import { authMiddleware } from '../Middleware/authMiddleware'

const peminjaman = new Hono()

peminjaman.get('/', authMiddleware, async (c) => {
  const data = await prisma.peminjaman.findMany({
    orderBy: { id_peminjaman: 'asc' },
    include: {
      pengguna: { select: { id_pengguna: true, nama_lengkap: true } },
      detail_peminjaman: {
        include: { barang: { select: { id_barang: true, nama_barang: true } } },
      },
    },
  })
  return c.json(data)
})

peminjaman.post('/', authMiddleware, async (c) => {
  const { id_pengguna, tanggal_kembali, detail } = await c.req.json()
  if (!id_pengguna || !tanggal_kembali || !Array.isArray(detail)) {
    return c.json({ error: 'id_pengguna, tanggal_kembali, dan detail wajib diisi' }, 400)
  }

  try {
    const peminjamanBaru = await prisma.peminjaman.create({
      data: {
        id_pengguna,
        tanggal_kembali: new Date(tanggal_kembali),
        detail_peminjaman: {
          create: detail.map((d: any) => ({
            id_barang: d.id_barang,
            jumlah_pinjam: d.jumlah_pinjam,
          })),
        },
      },
    })
    return c.json(peminjamanBaru, 201)
  } catch (err) {
    console.error(err)
    return c.json({ error: 'Gagal menyimpan peminjaman' }, 500)
  }
})
peminjaman.get('/:id', authMiddleware, async (c) => {
  const id = parseInt(c.req.param('id'))
  const data = await prisma.peminjaman.findUnique({
    where: { id_peminjaman: id },
    include: {
      pengguna: { select: { id_pengguna: true, nama_lengkap: true } },
      detail_peminjaman: {
        include: { barang: { select: { id_barang: true, nama_barang: true } } },
      },
    },
  })

  if (!data) return c.json({ error: 'Data tidak ditemukan' }, 404)
  return c.json(data)
})
peminjaman.put('/:id', authMiddleware, async (c) => {
  const id = parseInt(c.req.param('id'))
  const { tanggal_kembali, status } = await c.req.json()

  try {
    const updated = await prisma.peminjaman.update({
      where: { id_peminjaman: id },
      data: {
        tanggal_kembali: tanggal_kembali ? new Date(tanggal_kembali) : undefined,
        status,
      },
    })
    return c.json(updated)
  } catch (err) {
    return c.json({ error: 'Gagal update peminjaman' }, 500)
  }
})
peminjaman.delete('/:id', authMiddleware, async (c) => {
  const id = parseInt(c.req.param('id'))
  try {
    await prisma.detail_peminjaman.deleteMany({ where: { id_peminjaman: id } })
    await prisma.peminjaman.delete({ where: { id_peminjaman: id } })
    return c.json({ message: 'Data peminjaman berhasil dihapus' })
  } catch (err) {
    return c.json({ error: 'Gagal hapus peminjaman' }, 500)
  }
})



export default peminjaman
