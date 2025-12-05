# FruitTea Web App 🍹

Website profesional untuk produk FruitTea dengan panel admin lengkap dan database management.

## ✨ Fitur Utama

### Website Publik
- 🏠 Halaman utama yang modern dan menarik
- 📊 Dashboard dengan statistik produk real-time
- 🛍️ Katalog produk lengkap dengan detail
- 📱 Responsive design (mobile-friendly)
- 🎨 UI/UX profesional dengan Tailwind CSS

### Panel Admin
- 🔐 Sistem login/logout dengan NextAuth
- ➕ Tambah produk baru
- ✏️ Edit produk existing
- 🗑️ Hapus produk
- 📈 Dashboard admin dengan statistik
- 🔒 Protected routes (hanya admin yang bisa akses)

### Database
- 💾 Prisma ORM dengan SQLite
- 🔄 CRUD operations lengkap
- 🌱 Seed script untuk data awal
- 🔍 Type-safe queries

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Database
```bash
npm run db:generate  # Generate Prisma Client
npm run db:push      # Create database
npm run db:seed      # Seed dengan data awal
```

### 3. Jalankan Development Server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## 🔑 Login Admin

Setelah seed database, gunakan kredensial berikut:

- **Email**: `admin@fruittea.com`
- **Password**: `admin123`

⚠️ **PENTING**: Ganti password ini di production!

## 📁 Struktur Halaman

### Publik
- `/` - Halaman utama
- `/dashboard` - Dashboard publik
- `/dashboard/products` - Daftar produk
- `/dashboard/products/[id]` - Detail produk

### Admin (Protected)
- `/admin/login` - Login
- `/admin` - Dashboard admin
- `/admin/products` - Kelola produk
- `/admin/products/new` - Tambah produk
- `/admin/products/edit/[id]` - Edit produk

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Database**: Prisma + SQLite
- **Auth**: NextAuth v5
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Image**: next/image optimization

## 📝 Commands

```bash
npm run dev          # Development server
npm run build        # Build production
npm start            # Start production server
npm run db:generate  # Generate Prisma Client
npm run db:push      # Push schema ke database
npm run db:seed      # Seed database
npm run db:studio    # Buka Prisma Studio (GUI)
```

## 📖 Dokumentasi Lengkap

Lihat [SETUP.md](./SETUP.md) untuk panduan lengkap setup dan konfigurasi.

## 🔒 Security

- Password di-hash dengan bcrypt
- Protected API routes dengan NextAuth
- Environment variables untuk sensitive data
- CSRF protection built-in

## 📄 Lisensi

Public - aryalr @2025
