"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  nama: string;
  harga: number;
  rasa: string;
  deskripsi: string;
  foto: string;
  stok: number;
}

export default function ProductList({ products: initialProducts }: { products: Product[] }) {
  const router = useRouter();
  const [products, setProducts] = useState(initialProducts);
  const [deleting, setDeleting] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    if (!confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      return;
    }

    setDeleting(id);
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProducts(products.filter((p) => p.id !== id));
        router.refresh();
      } else {
        alert("Gagal menghapus produk");
      }
    } catch {
      alert("Terjadi kesalahan");
    } finally {
      setDeleting(null);
    }
  };

  if (products.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-12 text-center">
        <div className="text-6xl mb-4">📦</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Belum Ada Produk</h3>
        <p className="text-gray-600 mb-6">Mulai tambahkan produk FruitTea Anda</p>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Tambah Produk Pertama
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="relative h-64 bg-gray-100">
            <Image
              src={product.foto}
              alt={product.nama}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{product.nama}</h3>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  {product.rasa}
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.deskripsi}</p>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-2xl font-bold text-green-600">Rp {product.harga.toLocaleString()}</p>
                <p className="text-sm text-gray-500">Stok: {product.stok} unit</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                href={`/admin/products/edit/${product.id}`}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors text-center"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(product.id)}
                disabled={deleting === product.id}
                className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {deleting === product.id ? "Menghapus..." : "Hapus"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
