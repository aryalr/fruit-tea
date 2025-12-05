import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Link from "next/link";
import LogoutButton from "@/app/components/LogoutButton";
import ProductForm from "@/app/components/ProductForm";

export default async function NewProductPage() {
  const session = await auth();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/admin" className="flex items-center space-x-2">
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

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/admin/products" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center mb-6">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Daftar Produk
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tambah Produk Baru</h1>
          <p className="text-gray-600 mb-8">Isi form di bawah untuk menambahkan produk baru</p>

          <ProductForm />
        </div>
      </main>
    </div>
  );
}
