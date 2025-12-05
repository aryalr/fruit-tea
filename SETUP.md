# Setup FruitTea Web App

Panduan lengkap untuk menjalankan aplikasi FruitTea dengan panel admin dan database.

## Prerequisites

- Node.js 18+ terinstall
- npm atau yarn

## Langkah Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Database

Generate Prisma Client:
```bash
npm run db:generate
```

Push schema ke database (membuat file SQLite):
```bash
npm run db:push
```

### 3. Seed Database

Isi database dengan data awal (admin user + produk):
```bash
npm run db:seed
```

### 4. Jalankan Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`

## Kredensial Admin Default

Setelah seed database, gunakan kredensial berikut untuk login:

- **Email**: `admin@fruittea.com`
- **Password**: `admin123`

⚠️ **PENTING**: Ganti password ini di production!

## Struktur Aplikasi

### Halaman Publik
- `/` - Halaman utama FruitTea
- `/dashboard` - Dashboard publik dengan statistik
- `/dashboard/products` - Daftar semua produk
- `/dashboard/products/[id]` - Detail produk

### Panel Admin (Memerlukan Login)
- `/admin/login` - Halaman login admin
- `/admin` - Dashboard admin
- `/admin/products` - Kelola produk (CRUD)
- `/admin/products/new` - Tambah produk baru
- `/admin/products/edit/[id]` - Edit produk

### API Routes
- `GET /api/products` - Ambil semua produk
- `POST /api/products` - Tambah produk baru (auth required)
- `GET /api/products/[id]` - Ambil detail produk
- `PUT /api/products/[id]` - Update produk (auth required)
- `DELETE /api/products/[id]` - Hapus produk (auth required)

## Fitur

### Panel Admin
✅ Login/Logout dengan NextAuth
✅ CRUD Produk lengkap (Create, Read, Update, Delete)
✅ Dashboard dengan statistik real-time
✅ Form validasi
✅ Preview gambar produk
✅ Protected routes (hanya admin yang bisa akses)

### Database
✅ Prisma ORM dengan SQLite
✅ Model User untuk autentikasi
✅ Model Product untuk data produk
✅ Seed script untuk data awal
✅ Type-safe database queries

### Frontend
✅ Next.js 15 dengan App Router
✅ Tailwind CSS untuk styling
✅ Responsive design (mobile-friendly)
✅ Server Components & Client Components
✅ Optimized images dengan next/image
✅ Navigation bar yang sticky dan responsive

## Commands Berguna

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
```

## Mengganti Database

Aplikasi ini menggunakan SQLite secara default. Untuk menggunakan PostgreSQL atau MySQL:

1. Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"  // atau "mysql"
  url      = env("DATABASE_URL")
}
```

2. Update `.env`:
```
DATABASE_URL="postgresql://user:password@localhost:5432/fruittea"
```

3. Jalankan ulang:
```bash
npm run db:generate
npm run db:push
npm run db:seed
```

## Troubleshooting

### Error: Prisma Client not generated
```bash
npm run db:generate
```

### Error: Database tidak ada
```bash
npm run db:push
```

### Error: Tidak ada data produk
```bash
npm run db:seed
```

### Error: Cannot login
Pastikan database sudah di-seed dengan user admin:
```bash
npm run db:seed
```

## Tech Stack

- **Framework**: Next.js 15
- **Database**: Prisma + SQLite (bisa diganti PostgreSQL/MySQL)
- **Authentication**: NextAuth v5
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Image Optimization**: next/image

## Security Notes

1. Ganti `AUTH_SECRET` di `.env` dengan string random yang aman
2. Ganti password admin default setelah login pertama
3. Jangan commit file `.env` ke git
4. Untuk production, gunakan database yang lebih robust (PostgreSQL/MySQL)
5. Implementasikan rate limiting untuk API routes
6. Tambahkan HTTPS di production

## Lisensi

Private - FruitTea © 2024
