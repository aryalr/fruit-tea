import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import LogoutButton from "@/app/components/LogoutButton";

export default async function AdminPage() {
  const session = await auth();

  if (!session) {
    redirect("/admin/login");
  }

  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  const totalProduk = products.length;
  const totalStok = products.reduce((sum: number, item: { stok: number }) => sum + item.stok, 0);
  const rataRataHarga = totalProduk > 0 
    ? Math.round(products.reduce((sum: number, item: { harga: number }) => sum + item.harga, 0) / totalProduk)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50">
      {/* Admin Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-lg">
                  <span className="text-2xl">🍹</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
                  FruitTea Admin
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 text-sm">
                Halo, <span className="font-semibold">{session.user?.name}</span>
              </span>
              <LogoutButton />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Panel Admin</h1>
          <p className="text-gray-600">Kelola produk dan konten website FruitTea</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Total Produk</p>
                <p className="text-3xl font-bold text-gray-900">{totalProduk}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <span className="text-3xl">📦</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Total Stok</p>
                <p className="text-3xl font-bold text-gray-900">{totalStok}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <span className="text-3xl">📊</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Rata-rata Harga</p>
                <p className="text-3xl font-bold text-gray-900">Rp {rataRataHarga.toLocaleString()}</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <span className="text-3xl">💰</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Aksi Cepat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/admin/products"
              className="group bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">🛍️</span>
                <span className="text-sm opacity-75">→</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Kelola Produk</h3>
              <p className="text-sm opacity-90">Tambah, edit, atau hapus produk</p>
            </Link>

            <Link
              href="/"
              className="group bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">🏠</span>
                <span className="text-sm opacity-75">→</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Lihat Website</h3>
              <p className="text-sm opacity-90">Kunjungi halaman utama</p>
            </Link>

            <Link
              href="/dashboard"
              className="group bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">📈</span>
                <span className="text-sm opacity-75">→</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Dashboard Publik</h3>
              <p className="text-sm opacity-90">Lihat dashboard pengunjung</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
