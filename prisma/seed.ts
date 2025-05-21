// prisma/seed.ts
import { PrismaClient } from '../src/generated/prisma'
import * as bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const emailAdmin = 'admin@domain.com'

  const existing = await prisma.pengguna.findUnique({
    where: { email: emailAdmin },
  })

  if (existing) {
    console.log('Admin sudah ada:', existing.email)
    return
  }

  const hashedPassword = await bcrypt.hash('admin123', 10)

  await prisma.pengguna.create({
    data: {
      nama_lengkap: 'Admin Utama',
      email: emailAdmin,
      password: hashedPassword,
      role: 'ADMIN',
      no_telepon: null,
    },
  })

  console.log('✅ Admin berhasil dibuat.')
}

main()
  .catch((e) => {
    console.error('❌ Gagal seed:', e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
