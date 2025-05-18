import { Hono } from 'hono'
import authMiddleware from './Middleware/authMiddleware'
import pengguna from './Control/user' 
import kategori from './Control/kategori'
import barang from './Control/barang'
import peminjaman from './Control/peminjaman'
import detail from './Control/detailPeminjaman'

const app = new Hono()



app.route('/pengguna', pengguna)

app.route('/kategori', kategori).use('*', authMiddleware)
app.route('/barang', barang).use('*', authMiddleware)
app.route('/peminjaman', peminjaman).use('*', authMiddleware)
app.route('/detail', detail).use('*', authMiddleware)

export default app
