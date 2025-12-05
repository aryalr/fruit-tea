# Quick Start Guide - FruitTea Web App

Panduan cepat untuk menjalankan aplikasi dalam 5 menit!

## Langkah 1: Install Dependencies (2 menit)

```bash
npm install
```

## Langkah 2: Setup Database (1 menit)

Jalankan 3 command ini secara berurutan:

```bash
npm run db:generate
npm run db:push
npm run db:seed
```

## Langkah 3: Jalankan Aplikasi (30 detik)

```bash
npm run dev
```

## Langkah 4: Akses Aplikasi

### Website Publik
Buka browser dan kunjungi: **http://localhost:3000**

### Login Admin
1. Klik menu "Admin" di navbar
2. Atau langsung ke: **http://localhost:3000/admin/login**
3. Login dengan:
   - Email: `admin@fruittea.com`
   - Password: `admin123`

## Selesai! 🎉

Sekarang Anda bisa:
- ✅ Melihat website FruitTea
- ✅ Mengelola produk di panel admin
- ✅ Menambah, edit, dan hapus produk
- ✅ Melihat statistik real-time

## Troubleshooting

### Error: Cannot find module '@prisma/client'
```bash
npm run db:generate
```

### Error: Database tidak ada
```bash
npm run db:push
```

### Error: Tidak bisa login
```bash
npm run db:seed
```

## Next Steps

- Ganti password admin di panel admin
- Tambah produk baru
- Customize tampilan sesuai kebutuhan
- Baca [SETUP.md](./SETUP.md) untuk dokumentasi lengkap

---

**Butuh bantuan?** Lihat dokumentasi lengkap di [SETUP.md](./SETUP.md)
