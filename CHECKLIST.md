# Checklist Setup & Deployment

Gunakan checklist ini untuk memastikan semua sudah berjalan dengan baik.

## ✅ Setup Awal

### Installation
- [ ] `npm install` berhasil tanpa error
- [ ] Semua dependencies terinstall
- [ ] Node version 18+ atau lebih tinggi

### Database Setup
- [ ] `npm run db:generate` berhasil
- [ ] `npm run db:push` membuat file dev.db
- [ ] `npm run db:seed` menambahkan data awal
- [ ] File `prisma/dev.db` ada di folder prisma

### Environment Variables
- [ ] File `.env` sudah ada
- [ ] `DATABASE_URL` sudah diset
- [ ] `AUTH_SECRET` sudah diset
- [ ] Tidak ada error "missing environment variable"

### Development Server
- [ ] `npm run dev` berjalan tanpa error
- [ ] Server running di http://localhost:3000
- [ ] Tidak ada error di console
- [ ] Hot reload berfungsi

## ✅ Testing Website Publik

### Halaman Utama (/)
- [ ] Halaman loading dengan baik
- [ ] Navbar muncul dan berfungsi
- [ ] Hero section terlihat bagus
- [ ] Fitur cards muncul (3 cards)
- [ ] Footer muncul
- [ ] Responsive di mobile
- [ ] Semua link berfungsi

### Dashboard (/dashboard)
- [ ] Statistik muncul dengan benar
- [ ] Total produk: 8
- [ ] Total stok: 305
- [ ] Rata-rata harga muncul
- [ ] Produk terbanyak muncul
- [ ] 4 produk preview muncul
- [ ] Gambar produk loading

### Halaman Produk (/dashboard/products)
- [ ] 8 produk muncul dalam grid
- [ ] Setiap card menampilkan gambar
- [ ] Nama, rasa, harga, stok muncul
- [ ] Hover effect berfungsi
- [ ] Responsive layout
- [ ] Link ke detail berfungsi

### Detail Produk (/dashboard/products/1)
- [ ] Gambar produk besar muncul
- [ ] Informasi lengkap muncul
- [ ] Harga dan stok benar
- [ ] Deskripsi muncul
- [ ] Tombol berfungsi
- [ ] Back button berfungsi

## ✅ Testing Panel Admin

### Login (/admin/login)
- [ ] Form login muncul
- [ ] Email: admin@fruittea.com
- [ ] Password: admin123
- [ ] Login berhasil
- [ ] Redirect ke /admin
- [ ] Error message jika salah password

### Dashboard Admin (/admin)
- [ ] Hanya bisa diakses setelah login
- [ ] Greeting muncul dengan nama admin
- [ ] Statistik muncul
- [ ] Quick actions cards muncul
- [ ] Tombol logout ada
- [ ] Logout berfungsi

### Kelola Produk (/admin/products)
- [ ] List produk muncul
- [ ] Tombol "Tambah Produk" ada
- [ ] Setiap produk punya tombol Edit & Hapus
- [ ] Gambar produk muncul
- [ ] Informasi lengkap muncul

### Tambah Produk (/admin/products/new)
- [ ] Form muncul dengan semua fields
- [ ] Validasi berfungsi (required fields)
- [ ] Preview gambar muncul saat isi URL
- [ ] Submit berhasil
- [ ] Redirect ke list produk
- [ ] Produk baru muncul di list

### Edit Produk (/admin/products/edit/1)
- [ ] Form pre-filled dengan data existing
- [ ] Bisa ubah semua fields
- [ ] Preview gambar update
- [ ] Update berhasil
- [ ] Perubahan tersimpan
- [ ] Redirect ke list produk

### Hapus Produk
- [ ] Konfirmasi muncul sebelum hapus
- [ ] Hapus berhasil
- [ ] Produk hilang dari list
- [ ] Tidak ada error

## ✅ Testing API Routes

### GET /api/products
- [ ] Return array of products
- [ ] Status 200
- [ ] Data lengkap

### POST /api/products (perlu auth)
- [ ] Bisa create produk baru
- [ ] Return produk yang dibuat
- [ ] Status 201
- [ ] Validasi berfungsi

### GET /api/products/1
- [ ] Return single product
- [ ] Status 200
- [ ] Data lengkap

### PUT /api/products/1 (perlu auth)
- [ ] Bisa update produk
- [ ] Return produk yang diupdate
- [ ] Status 200

### DELETE /api/products/1 (perlu auth)
- [ ] Bisa delete produk
- [ ] Status 200
- [ ] Produk terhapus dari database

## ✅ Security Checks

### Authentication
- [ ] Tidak bisa akses /admin tanpa login
- [ ] Redirect ke /admin/login jika belum login
- [ ] Session tersimpan setelah login
- [ ] Logout menghapus session
- [ ] Password tidak terlihat di form

### API Protection
- [ ] POST /api/products butuh auth
- [ ] PUT /api/products/[id] butuh auth
- [ ] DELETE /api/products/[id] butuh auth
- [ ] Return 401 jika tidak auth

### Data Security
- [ ] Password di-hash di database
- [ ] .env tidak di-commit ke git
- [ ] Tidak ada sensitive data di console
- [ ] SQL injection prevention (Prisma)

## ✅ Performance Checks

### Loading Speed
- [ ] Halaman load < 3 detik
- [ ] Images optimized (next/image)
- [ ] No layout shift
- [ ] Smooth transitions

### Responsive Design
- [ ] Mobile (< 768px) - OK
- [ ] Tablet (768px - 1024px) - OK
- [ ] Desktop (> 1024px) - OK
- [ ] Navbar mobile menu berfungsi

## ✅ Browser Compatibility

- [ ] Chrome - OK
- [ ] Firefox - OK
- [ ] Safari - OK
- [ ] Edge - OK
- [ ] Mobile browsers - OK

## ✅ Code Quality

### TypeScript
- [ ] No TypeScript errors
- [ ] Types properly defined
- [ ] No 'any' types (kecuali perlu)

### ESLint
- [ ] `npm run lint` tanpa error
- [ ] Code style consistent
- [ ] No unused variables

### File Structure
- [ ] Components di folder components/
- [ ] API routes di api/
- [ ] Lib utilities di lib/
- [ ] Types di types/

## ✅ Documentation

- [ ] README.md ada dan lengkap
- [ ] SETUP.md ada dengan instruksi jelas
- [ ] QUICKSTART.md untuk quick start
- [ ] PROJECT_STRUCTURE.md menjelaskan struktur
- [ ] FEATURES.md list semua fitur
- [ ] Inline comments di code penting

## ✅ Pre-Production Checklist

### Security
- [ ] Ganti AUTH_SECRET dengan random string
- [ ] Ganti password admin default
- [ ] Setup HTTPS
- [ ] Configure CORS jika perlu
- [ ] Review security headers

### Database
- [ ] Migrate ke PostgreSQL/MySQL
- [ ] Setup database backups
- [ ] Configure connection pooling
- [ ] Test database performance

### Environment
- [ ] Setup production .env
- [ ] Configure environment variables di hosting
- [ ] Test production build (`npm run build`)
- [ ] Test production server (`npm start`)

### Monitoring
- [ ] Setup error tracking (Sentry, etc)
- [ ] Setup analytics (Google Analytics, etc)
- [ ] Setup uptime monitoring
- [ ] Configure logging

### Performance
- [ ] Run Lighthouse audit
- [ ] Optimize images
- [ ] Enable caching
- [ ] Configure CDN untuk static assets

### Deployment
- [ ] Choose hosting platform (Vercel, Railway, etc)
- [ ] Configure deployment settings
- [ ] Setup custom domain
- [ ] Test deployed application
- [ ] Setup CI/CD pipeline

## 🎉 Launch Checklist

- [ ] All tests passing
- [ ] No console errors
- [ ] Performance optimized
- [ ] Security hardened
- [ ] Documentation complete
- [ ] Backup strategy in place
- [ ] Monitoring active
- [ ] Team trained
- [ ] Launch! 🚀

---

**Tips**: 
- Centang setiap item saat sudah selesai
- Jika ada yang gagal, cek dokumentasi atau troubleshooting guide
- Jangan skip security checks!
- Test di berbagai device dan browser
