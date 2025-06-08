import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { cors } from 'hono/cors'

import authMiddleware from './Middleware/authMiddleware'
import pengguna from './Control/user' 
import kategori from './Control/kategori'
import barang from './Control/barang'
import peminjaman from './Control/peminjaman'
import detail from './Control/detailPeminjaman'

const app = new Hono()

// CORS Middleware
app.use(
  "*",
  cors({
    origin: 
      "http://localhost:5174",

    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true,
  })
);
// Public route
app.route('/user', pengguna)

// Protected routes
const kategoriRoute = new Hono().use('*', authMiddleware).route('/', kategori)
const barangRoute = new Hono().use('*', authMiddleware).route('/', barang)
const peminjamanRoute = new Hono().use('*', authMiddleware).route('/', peminjaman)
const detailRoute = new Hono().use('*', authMiddleware).route('/', detail)

app.route('/kategori', kategoriRoute)
app.route('/barang', barangRoute)
app.route('/peminjaman', peminjamanRoute)
app.route('/detail', detailRoute)

// Start server
const PORT = Number(process.env.PORT) || 3000

serve({
  fetch: app.fetch,
  port: PORT,
})

console.log(`🚀 Server running on http://localhost:${PORT}`)

export default app
