import { prisma } from "@/lib/prisma";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = await prisma.product.findUnique({
    where: { id: parseInt(productId) },
  });

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link href="/dashboard/products" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Produk
          </Link>
          <h1 className="text-2xl font-bold text-red-600">Produk tidak ditemukan</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/dashboard/products" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center mb-6">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Produk
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gambar Produk */}
            <div className="p-8">
              <div className="relative w-full aspect-square">
                <Image
                  src={product.foto}
                  alt={product.nama}
                  fill
                  className="rounded-xl shadow-md object-cover"
                />
              </div>
            </div>

            {/* Detail Produk */}
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-flex items-center bg-green-50 border border-green-200 text-green-600 text-sm font-medium px-3 py-1.5 rounded-full w-fit mb-4">
                <svg
                  className="w-4 h-4 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"
                  />
                </svg>
                {product.rasa}
              </span>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.nama}
              </h1>

              <p className="text-gray-600 text-lg mb-6">{product.deskripsi}</p>

              <div className="mb-6">
                <p className="text-gray-500 text-sm mb-2">Harga</p>
                <p className="text-4xl font-bold text-green-600">
                  Rp {product.harga.toLocaleString("id-ID")}
                </p>
              </div>

              <div className="mb-8">
                <p className="text-gray-500 text-sm mb-2">Stok Tersedia</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {product.stok} unit
                </p>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 inline-flex items-center justify-center text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-xl text-lg px-6 py-4 focus:outline-none transition-all transform hover:scale-105 shadow-lg">
                  Beli Sekarang
                </button>
                <button className="inline-flex items-center justify-center text-green-600 bg-green-50 hover:bg-green-100 border-2 border-green-200 focus:ring-4 focus:ring-green-300 font-medium rounded-xl text-lg px-6 py-4 focus:outline-none transition-all">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
