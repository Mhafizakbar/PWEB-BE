import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import authMiddleware from './Middleware/authMiddleware'
import pengguna from './Control/user' 
import kategori from './Control/kategori'
import barang from './Control/barang'
import peminjaman from './Control/peminjaman'
import detail from './Control/detailPeminjaman'
import { cors } from 'hono/cors'


const app = new Hono()

app.use(
  cors({
    origin: 'https://pweb-be-production.up.railway.app',
    credentials : true
  })
)
app.options("*", (c) => {
  c.header("Access-Control-Allow-Origin", "https://pweb-be-production.up.railway.app");
  c.header("Access-Control-Allow-Credentials", "true");
  c.header("Access-Control-Allow-Headers", "Content-Type");
  c.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  return c.body(null, 204);
});

app.route('/user', pengguna)
app.route('/kategori', kategori).use('*', authMiddleware)
app.route('/barang', barang).use('*', authMiddleware)
app.route('/peminjaman', peminjaman).use('*', authMiddleware)
app.route('/detail', detail).use('*', authMiddleware)

const PORT = Number(process.env.PORT) || 3000

serve({
  fetch: app.fetch,
  port: PORT,
})

console.log(`🚀 Server running on http://localhost:${PORT}`)

export default app
