# 🚀 START HERE - FruitTea Web App

Selamat datang! Ikuti langkah-langkah di bawah untuk menjalankan aplikasi.

## ⚡ Quick Start (5 Menit)

### Step 1: Install Dependencies
```bash
npm install
```
⏱️ Waktu: ~2 menit

### Step 2: Setup Database
```bash
npm run db:generate
npm run db:push
npm run db:seed
```
⏱️ Waktu: ~1 menit

### Step 3: Jalankan Aplikasi
```bash
npm run dev
```
⏱️ Waktu: ~10 detik

### Step 4: Buka Browser
```
http://localhost:3000
```

## 🎯 Apa yang Bisa Dilakukan?

### 1. Lihat Website Publik
- Buka: `http://localhost:3000`
- Jelajahi halaman utama
- Klik "Lihat Produk Kami"
- Lihat detail produk

### 2. Login ke Admin Panel
- Klik menu "Admin" di navbar
- Atau buka: `http://localhost:3000/admin/login`
- Login dengan:
  ```
  Email: admin@fruittea.com
  Password: admin123
  ```

### 3. Kelola Produk
- Setelah login, klik "Kelola Produk"
- Coba tambah produk baru
- Edit produk existing
- Hapus produk (dengan konfirmasi)

## 📚 Dokumentasi Lengkap

Pilih dokumentasi sesuai kebutuhan:

### Untuk Pemula
1. **QUICKSTART.md** - Setup cepat dalam 5 menit
2. **README.md** - Overview aplikasi

### Untuk Developer
1. **SETUP.md** - Panduan setup lengkap
2. **PROJECT_STRUCTURE.md** - Struktur project
3. **FEATURES.md** - Daftar lengkap fitur

### Untuk Testing
1. **CHECKLIST.md** - Checklist testing lengkap

### Untuk Deployment
1. **SETUP.md** - Section "Pre-Production Checklist"

## 🔑 Kredensial Default

**Admin Login:**
- Email: `admin@fruittea.com`
- Password: `admin123`

⚠️ **PENTING**: Ganti password ini setelah login pertama!

## 🛠️ Commands Penting

```bash
# Development
npm run dev              # Jalankan dev server

# Database
npm run db:generate      # Generate Prisma Client
npm run db:push          # Push schema ke database
npm run db:seed          # Seed database dengan data awal
npm run db:studio        # Buka Prisma Studio (GUI database)

# Production
npm run build            # Build untuk production
npm start                # Jalankan production server

# Code Quality
npm run lint             # Check code quality
```

## 🎨 Fitur Utama

### Website Publik
✅ Halaman utama yang menarik
✅ Dashboard dengan statistik
✅ Katalog produk lengkap
✅ Detail produk

### Panel Admin
✅ Login/Logout secure
✅ Dashboard admin
✅ Tambah produk baru
✅ Edit produk
✅ Hapus produk

### Technical
✅ Database dengan Prisma
✅ Authentication dengan NextAuth
✅ RESTful API
✅ Responsive design
✅ Type-safe dengan TypeScript

## 🐛 Troubleshooting

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

### Error: Port 3000 sudah digunakan
```bash
# Ganti port di command
npm run dev -- -p 3001
```

### Error lainnya
1. Hapus folder `node_modules` dan `package-lock.json`
2. Jalankan `npm install` lagi
3. Ulangi setup database

## 📞 Butuh Bantuan?

1. **Baca dokumentasi** - Semua ada di folder root
2. **Check CHECKLIST.md** - Untuk testing
3. **Lihat SETUP.md** - Untuk troubleshooting lengkap
4. **Review code** - Code sudah ada comments

## 🎯 Next Steps

Setelah aplikasi berjalan:

1. ✅ Test semua fitur (gunakan CHECKLIST.md)
2. ✅ Ganti password admin
3. ✅ Tambah produk baru
4. ✅ Customize tampilan sesuai kebutuhan
5. ✅ Baca dokumentasi lengkap
6. ✅ Deploy ke production (opsional)

## 🎉 Selamat!

Aplikasi FruitTea Web App sudah siap digunakan!

**Enjoy coding! 🚀**

---

*Segar Alami, Hidup Lebih Sehat* 🍹
