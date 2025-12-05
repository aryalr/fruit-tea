# Struktur Project FruitTea

Dokumentasi lengkap struktur folder dan file dalam project.

## 📁 Root Directory

```
fruit-tea/
├── app/                    # Next.js App Router
├── lib/                    # Utilities & configurations
├── prisma/                 # Database schema & migrations
├── public/                 # Static assets
├── types/                  # TypeScript type definitions
├── .env                    # Environment variables (jangan commit!)
├── .env.example            # Template environment variables
├── .gitignore              # Git ignore rules
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies & scripts
├── prisma/schema.prisma    # Database schema
├── README.md               # Dokumentasi utama
├── SETUP.md                # Panduan setup lengkap
├── QUICKSTART.md           # Panduan quick start
└── tsconfig.json           # TypeScript configuration
```

## 📂 app/ - Application Routes

### Halaman Publik
```
app/
├── page.tsx                # Halaman utama (/)
├── layout.tsx              # Root layout
├── globals.css             # Global styles
├── dashboard/
│   ├── page.tsx            # Dashboard publik (/dashboard)
│   └── products/
│       ├── page.tsx        # List produk (/dashboard/products)
│       └── [productId]/
│           └── page.tsx    # Detail produk (/dashboard/products/[id])
```

### Panel Admin (Protected)
```
app/
├── admin/
│   ├── page.tsx            # Dashboard admin (/admin)
│   ├── login/
│   │   └── page.tsx        # Login page (/admin/login)
│   └── products/
│       ├── page.tsx        # Kelola produk (/admin/products)
│       ├── new/
│       │   └── page.tsx    # Tambah produk (/admin/products/new)
│       └── edit/
│           └── [id]/
│               └── page.tsx # Edit produk (/admin/products/edit/[id])
```

### API Routes
```
app/
├── api/
│   ├── auth/
│   │   └── [...nextauth]/
│   │       └── route.ts    # NextAuth endpoints
│   └── products/
│       ├── route.ts        # GET all, POST new product
│       └── [id]/
│           └── route.ts    # GET, PUT, DELETE product by ID
```

### Components
```
app/
├── components/
│   ├── Navbar.tsx          # Navigation bar (reusable)
│   ├── ProductList.tsx     # List produk dengan delete
│   ├── ProductForm.tsx     # Form tambah/edit produk
│   └── LogoutButton.tsx    # Tombol logout
```

## 📚 lib/ - Libraries & Utilities

```
lib/
├── auth.ts                 # NextAuth configuration
├── prisma.ts               # Prisma client instance
└── data.ts                 # Data statis (deprecated, gunakan database)
```

## 🗄️ prisma/ - Database

```
prisma/
├── schema.prisma           # Database schema (models)
├── seed.ts                 # Seed script (data awal)
└── dev.db                  # SQLite database file (auto-generated)
```

### Database Models

#### User Model
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String
  role      String   @default("admin")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

#### Product Model
```prisma
model Product {
  id          Int      @id @default(autoincrement())
  nama        String
  harga       Int
  rasa        String
  deskripsi   String
  foto        String
  stok        Int
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## 🎨 public/ - Static Assets

```
public/
├── file.svg
├── globe.svg
├── next.svg
├── vercel.svg
└── window.svg
```

## 🔧 types/ - TypeScript Types

```
types/
└── next-auth.d.ts          # NextAuth type extensions
```

## 🔑 Key Files

### next.config.ts
Konfigurasi Next.js, termasuk:
- Image domains (placehold.co)
- Build settings
- Environment variables

### package.json
Scripts yang tersedia:
- `dev` - Development server
- `build` - Production build
- `start` - Production server
- `db:generate` - Generate Prisma Client
- `db:push` - Push schema ke database
- `db:seed` - Seed database
- `db:studio` - Prisma Studio GUI

### .env
Environment variables:
- `DATABASE_URL` - Database connection string
- `AUTH_SECRET` - NextAuth secret key

## 🔐 Authentication Flow

```
1. User mengakses /admin
2. Middleware check session
3. Jika tidak ada session → redirect ke /admin/login
4. User login dengan email/password
5. NextAuth verify credentials dengan database
6. Jika valid → create session
7. Redirect ke /admin
```

## 📊 Data Flow

### Public Pages
```
Page Component → Prisma Client → SQLite Database → Return Data → Render
```

### Admin CRUD
```
Form Submit → API Route → Auth Check → Prisma Client → Database → Response
```

## 🎯 Best Practices

### Server Components (Default)
- Fetch data langsung di component
- Tidak perlu API route untuk read operations
- Lebih cepat dan efisien

### Client Components ("use client")
- Untuk interactivity (forms, buttons, state)
- Event handlers
- Browser APIs

### API Routes
- Untuk mutations (POST, PUT, DELETE)
- Protected dengan auth middleware
- Return JSON responses

## 🚀 Deployment Checklist

- [ ] Ganti `AUTH_SECRET` dengan random string
- [ ] Ganti password admin default
- [ ] Setup production database (PostgreSQL/MySQL)
- [ ] Update `DATABASE_URL` di environment
- [ ] Run `npm run build` untuk test
- [ ] Setup HTTPS
- [ ] Configure CORS jika perlu
- [ ] Setup monitoring & logging

## 📝 Notes

- SQLite cocok untuk development, gunakan PostgreSQL/MySQL untuk production
- Semua password di-hash dengan bcrypt
- Images menggunakan next/image untuk optimization
- Tailwind CSS untuk styling
- TypeScript untuk type safety
