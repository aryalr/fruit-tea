import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import Navbar from "../components/Navbar";

export default async function Dashboard() {
  const produk = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  // Hitung statistik
  const totalProduk = produk.length;
  const totalStok = produk.reduce((sum, item) => sum + item.stok, 0);
  const rataRataHarga = totalProduk > 0 
    ? Math.round(produk.reduce((sum, item) => sum + item.harga, 0) / totalProduk)
    : 0;
  const produkTerlaris = produk.length > 0 
    ? produk.reduce((max, item) => item.stok > max.stok ? item : max)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50">
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard FruitTea</h1>
          <p className="text-gray-600">Kelola dan pantau produk FruitTea Anda</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Produk */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
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

          {/* Total Stok */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
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

          {/* Rata-rata Harga */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
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

          {/* Produk Terlaris */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Stok Terbanyak</p>
                {produkTerlaris ? (
                  <>
                    <p className="text-lg font-bold text-gray-900">{produkTerlaris.nama}</p>
                    <p className="text-sm text-gray-500">{produkTerlaris.stok} unit</p>
                  </>
                ) : (
                  <p className="text-lg font-bold text-gray-900">-</p>
                )}
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <span className="text-3xl">🏆</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Aksi Cepat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/dashboard/products"
              className="group bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">🛍️</span>
                <span className="text-sm opacity-75">→</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Lihat Semua Produk</h3>
              <p className="text-sm opacity-90">Kelola katalog produk FruitTea</p>
            </Link>

            <Link
              href="/"
              className="group bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">🏠</span>
                <span className="text-sm opacity-75">→</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Kembali ke Beranda</h3>
              <p className="text-sm opacity-90">Lihat halaman utama website</p>
            </Link>

            <div className="group bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-md cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">📈</span>
                <span className="text-sm opacity-75">→</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Laporan Penjualan</h3>
              <p className="text-sm opacity-90">Segera hadir</p>
            </div>
          </div>
        </div>

        {/* Recent Products */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Produk Terbaru</h2>
            <Link
              href="/dashboard/products"
              className="text-green-600 hover:text-green-700 font-medium text-sm"
            >
              Lihat Semua →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {produk.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                href={`/dashboard/products/${item.id}`}
                className="group border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all hover:border-green-500"
              >
                <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden relative">
                  <Image
                    src={item.foto}
                    alt={item.nama}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                  {item.nama}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{item.rasa}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">Rp {item.harga.toLocaleString()}</span>
                  <span className="text-xs text-gray-500">Stok: {item.stok}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
