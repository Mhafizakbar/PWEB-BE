-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "barang" (
    "id_barang" SERIAL NOT NULL,
    "nama_barang" VARCHAR(100) NOT NULL,
    "id_kategori" INTEGER,
    "jumlah" INTEGER NOT NULL,
    "deskripsi" TEXT,

    CONSTRAINT "barang_pkey" PRIMARY KEY ("id_barang")
);

-- CreateTable
CREATE TABLE "detail_peminjaman" (
    "id_detail" SERIAL NOT NULL,
    "id_peminjaman" INTEGER,
    "id_barang" INTEGER,
    "jumlah_pinjam" INTEGER NOT NULL,

    CONSTRAINT "detail_peminjaman_pkey" PRIMARY KEY ("id_detail")
);

-- CreateTable
CREATE TABLE "kategori" (
    "id_kategori" SERIAL NOT NULL,
    "nama_kategori" VARCHAR(50) NOT NULL,

    CONSTRAINT "kategori_pkey" PRIMARY KEY ("id_kategori")
);

-- CreateTable
CREATE TABLE "peminjaman" (
    "id_peminjaman" SERIAL NOT NULL,
    "id_pengguna" INTEGER,
    "tanggal_pinjam" DATE DEFAULT CURRENT_DATE,
    "tanggal_kembali" DATE,
    "status" VARCHAR(20) DEFAULT 'dipinjam',

    CONSTRAINT "peminjaman_pkey" PRIMARY KEY ("id_peminjaman")
);

-- CreateTable
CREATE TABLE "pengguna" (
    "id_pengguna" SERIAL NOT NULL,
    "nama_lengkap" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "no_telepon" VARCHAR(20),
    "password" TEXT NOT NULL,
    "tanggal_dibuat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "pengguna_pkey" PRIMARY KEY ("id_pengguna")
);

-- CreateIndex
CREATE UNIQUE INDEX "pengguna_email_key" ON "pengguna"("email");

-- AddForeignKey
ALTER TABLE "barang" ADD CONSTRAINT "barang_id_kategori_fkey" FOREIGN KEY ("id_kategori") REFERENCES "kategori"("id_kategori") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "detail_peminjaman" ADD CONSTRAINT "detail_peminjaman_id_barang_fkey" FOREIGN KEY ("id_barang") REFERENCES "barang"("id_barang") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "detail_peminjaman" ADD CONSTRAINT "detail_peminjaman_id_peminjaman_fkey" FOREIGN KEY ("id_peminjaman") REFERENCES "peminjaman"("id_peminjaman") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "peminjaman" ADD CONSTRAINT "peminjaman_id_pengguna_fkey" FOREIGN KEY ("id_pengguna") REFERENCES "pengguna"("id_pengguna") ON DELETE NO ACTION ON UPDATE NO ACTION;
