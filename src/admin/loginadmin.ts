import prisma from '../db'        
import * as bcrypt from 'bcryptjs'

async function createAdmin() {
  const emailAdmin = 'hafizakbar5707@gmail.com'

  const existing = await prisma.pengguna.findUnique({ where: { email: emailAdmin } })
  if (existing) {
    console.log('Admin sudah ada di database:', existing.email)
    process.exit(0)
  }

  const hashedPassword = await bcrypt.hash('admin123', 10)

  const admin = await prisma.pengguna.create({
    data: {
      nama_lengkap: 'M. Hafiz Akbar',
      email: emailAdmin,
      password: hashedPassword,
      role: 'ADMIN',
      no_telepon: null,
    },
  })

  console.log('Admin berhasil dibuat:', admin)
  process.exit(0)
}

createAdmin().catch((e) => {
  console.error(e)
  process.exit(1)
})
