import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 10);
  
  const admin = await prisma.user.upsert({
    where: { email: "admin@fruittea.com" },
    update: {},
    create: {
      email: "admin@fruittea.com",
      password: hashedPassword,
      name: "Admin FruitTea",
      role: "admin",
    },
  });

  console.log("✅ Admin user created:", admin.email);

  // Create products
  const products = [
    {
      nama: "Fruit Tea Apel",
      harga: 5000,
      rasa: "Apel",
      deskripsi: "Minuman teh dengan rasa buah apel yang manis dan menyegarkan. Paling nikmat diminum saat dingin.",
      foto: "https://placehold.co/400x400/e63946/ffffff?text=Fruit+Tea+Apel",
      stok: 50,
    },
    {
      nama: "Fruit Tea Blackcurrant",
      harga: 5500,
      rasa: "Blackcurrant",
      deskripsi: "Perpaduan teh berkualitas dengan rasa blackcurrant yang unik dan bikin ketagihan.",
      foto: "https://placehold.co/400x400/5a189a/ffffff?text=Blackcurrant",
      stok: 45,
    },
    {
      nama: "Fruit Tea Freeze",
      harga: 6000,
      rasa: "Strawberry & Grape",
      deskripsi: "Sensasi dingin semriwing dengan perpaduan rasa stroberi dan anggur yang cool banget.",
      foto: "https://placehold.co/400x400/0077b6/ffffff?text=Fruit+Tea+Freeze",
      stok: 30,
    },
    {
      nama: "Fruit Tea X-Treme",
      harga: 6000,
      rasa: "Apel & Blackcurrant",
      deskripsi: "Rasa ekstrim perpaduan antara apel dan blackcurrant yang meledak di mulut.",
      foto: "https://placehold.co/400x400/ff9e00/ffffff?text=X-Treme",
      stok: 25,
    },
    {
      nama: "Fruit Tea Jambu Klutuk",
      harga: 4500,
      rasa: "Guava",
      deskripsi: "Teh rasa jambu klutuk khas Indonesia yang manisnya pas dan menyegarkan harimu.",
      foto: "https://placehold.co/400x400/38b000/ffffff?text=Jambu+Klutuk",
      stok: 60,
    },
    {
      nama: "Fruit Tea Lemon",
      harga: 4500,
      rasa: "Lemon",
      deskripsi: "Klasik tapi asik. Teh dengan sentuhan rasa lemon yang segar dan sedikit asam.",
      foto: "https://placehold.co/400x400/ffcc00/000000?text=Lemon",
      stok: 40,
    },
    {
      nama: "Fruit Tea Markisa",
      harga: 5000,
      rasa: "Markisa",
      deskripsi: "Rasa eksotis buah markisa yang memberikan kesegaran tropis di setiap tegukan.",
      foto: "https://placehold.co/400x400/fb8500/ffffff?text=Markisa",
      stok: 20,
    },
    {
      nama: "Fruit Tea Stroberi",
      harga: 5000,
      rasa: "Stroberi",
      deskripsi: "Manisnya buah stroberi berpadu dengan sejuknya teh, cocok untuk teman makan.",
      foto: "https://placehold.co/400x400/ff006e/ffffff?text=Stroberi",
      stok: 35,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { id: products.indexOf(product) + 1 },
      update: {},
      create: product,
    });
  }

  console.log("✅ Products seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
