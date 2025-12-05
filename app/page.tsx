import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50">
      <Navbar />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Minuman Segar Alami
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Segarnya Buah,
            <br />
            <span className="text-green-600">Nikmatnya Teh</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            FruitTea menghadirkan perpaduan sempurna antara kesegaran buah alami 
            dan kelezatan teh pilihan. Setiap tegukan memberikan pengalaman rasa 
            yang menyegarkan dan menyehatkan.
          </p>

          <div className="mt-8 mb-12">
            <p className="text-2xl font-semibold text-gray-800 italic">
              &ldquo;Segar Alami, Hidup Lebih Sehat&rdquo;
            </p>
            <p className="text-sm text-gray-500 mt-2">Moto Kami</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Link
              href="/dashboard/products"
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Lihat Produk Kami
            </Link>
            <Link
              href="/dashboard"
              className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Ke Dashboard
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🍊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">100% Buah Asli</h3>
            <p className="text-gray-600">
              Menggunakan ekstrak buah asli tanpa pewarna dan perasa buatan
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🍃</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Teh Pilihan</h3>
            <p className="text-gray-600">
              Teh berkualitas tinggi yang dipilih khusus untuk kesegaran maksimal
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">💚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Rendah Kalori</h3>
            <p className="text-gray-600">
              Pilihan sehat untuk gaya hidup aktif dan seimbang Anda
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-24 bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Tentang FruitTea
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            FruitTea adalah minuman teh buah yang menggabungkan khasiat teh dengan 
            kesegaran buah-buahan pilihan. Kami berkomitmen untuk menghadirkan produk 
            berkualitas tinggi yang tidak hanya menyegarkan, tetapi juga menyehatkan. 
            Dengan berbagai varian rasa, FruitTea menjadi teman sempurna untuk menemani 
            aktivitas harian Anda.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-24 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 FruitTea. Semua hak dilindungi.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Segar Alami, Hidup Lebih Sehat
          </p>
        </div>
      </footer>
    </div>
  );
}
