/* eslint-disable @next/next/no-img-element */
import { prisma } from "@/lib/prisma";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";

export default async function productList() {
  const produk = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link href="/dashboard" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Dashboard
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Produk FruitTea</h1>
          <p className="text-gray-600">Jelajahi semua varian rasa FruitTea kami</p>
        </div>

        {/* Grid list product Fruit Tea */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {produk.map((item) => (
          <div key={item.id} className="bg-white block max-w-sm rounded-2xl shadow-lg overflow-hidden">
            <a href={`/dashboard/products/${item.id}`}>
              <img className="w-full" src={item.foto} alt={item.nama} />
            </a>
            <div className="p-8 text-center">
              <span className="inline-flex items-center bg-blue-50 border border-blue-200 text-blue-600 text-xs font-medium px-3 py-1.5 rounded-full">
                <svg
                  className="w-3 h-3 me-1"
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
                {item.rasa}
              </span>
              <a href={`/dashboard/products/${item.id}`}>
                <h5 className="mt-6 mb-8 text-3xl font-bold tracking-tight text-gray-900">
                  {item.nama}
                </h5>
              </a>
              <a
                href={`/dashboard/products/${item.id}`}
                className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-base px-6 py-3 focus:outline-none"
              >
                Read more
                <svg
                  className="w-4 h-4 ms-2"
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
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
