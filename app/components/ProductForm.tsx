"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProductFormProps {
  product?: {
    id: number;
    nama: string;
    harga: number;
    rasa: string;
    deskripsi: string;
    foto: string;
    stok: number;
  };
}

export default function ProductForm({ product }: ProductFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nama: product?.nama || "",
    harga: product?.harga || "",
    rasa: product?.rasa || "",
    deskripsi: product?.deskripsi || "",
    foto: product?.foto || "",
    stok: product?.stok || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = product ? `/api/products/${product.id}` : "/api/products";
      const method = product ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/admin/products");
        router.refresh();
      } else {
        alert("Gagal menyimpan produk");
      }
    } catch {
      alert("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
          Nama Produk *
        </label>
        <input
          id="nama"
          type="text"
          required
          value={formData.nama}
          onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Fruit Tea Apel"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="rasa" className="block text-sm font-medium text-gray-700 mb-2">
            Rasa *
          </label>
          <input
            id="rasa"
            type="text"
            required
            value={formData.rasa}
            onChange={(e) => setFormData({ ...formData, rasa: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Apel"
          />
        </div>

        <div>
          <label htmlFor="harga" className="block text-sm font-medium text-gray-700 mb-2">
            Harga (Rp) *
          </label>
          <input
            id="harga"
            type="number"
            required
            value={formData.harga}
            onChange={(e) => setFormData({ ...formData, harga: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="5000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="stok" className="block text-sm font-medium text-gray-700 mb-2">
          Stok *
        </label>
        <input
          id="stok"
          type="number"
          required
          value={formData.stok}
          onChange={(e) => setFormData({ ...formData, stok: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="50"
        />
      </div>

      <div>
        <label htmlFor="deskripsi" className="block text-sm font-medium text-gray-700 mb-2">
          Deskripsi *
        </label>
        <textarea
          id="deskripsi"
          required
          rows={4}
          value={formData.deskripsi}
          onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Minuman teh dengan rasa buah apel yang manis dan menyegarkan..."
        />
      </div>

      <div>
        <label htmlFor="foto" className="block text-sm font-medium text-gray-700 mb-2">
          URL Foto *
        </label>
        <input
          id="foto"
          type="url"
          required
          value={formData.foto}
          onChange={(e) => setFormData({ ...formData, foto: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="https://placehold.co/400x400/e63946/ffffff?text=Fruit+Tea"
        />
        {formData.foto && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Preview:</p>
            <div className="relative w-48 h-48">
              <Image
                src={formData.foto}
                alt="Preview"
                fill
                className="object-cover rounded-lg border border-gray-300"
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Menyimpan..." : product ? "Update Produk" : "Tambah Produk"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Batal
        </button>
      </div>
    </form>
  );
}
