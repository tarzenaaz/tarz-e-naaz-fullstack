import axios from "axios";
import { API_URL } from "../utils/api"; // Make sure you have this file
import Image from "next/image";

export default function Products() {
  const products = [
    {
      id: 101,
      name: "Article-101",
      price: 8999,
      color: "Green",
      size: "S, M, L, Customise",
      style: "Frock",
      image: "/images/article-101.jpg",
      description: "Elegant frock design in a refreshing green tone, perfect for festive occasions.",
    },
    {
      id: 100,
      name: "Article-100",
      price: 8000,
      color: "Pink",
      size: "S, M, L, Customise",
      style: "Long shirt with capri",
      image: "/images/article-100.png",
      description: "Stylish long shirt paired with trendy capri pants, ideal for casual and semi-formal looks.",
    },
    // 👉 Add more products here (Article-102 to Article-119)
  ];

  const handleOrder = async (product) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to place an order!");
      window.location.href = "/login";
      return;
    }

    const address = prompt("Enter your delivery address:");
    const phone = prompt("Enter your phone number:");

    try {
      await axios.post(
        `${API_URL}/orders`,
        {
          productName: product.name,
          price: product.price,
          color: product.color,
          size: product.size,
          address,
          phone,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("✅ Order placed successfully!");
    } catch (err) {
      alert("❌ Failed to place order. Please try again.");
    }
  };

  return (
    <main className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative w-full h-64 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.style}</p>
            <p className="text-gray-800 font-semibold">Rs {product.price}</p>
            <p className="text-gray-500 text-sm">Color: {product.color}</p>
            <p className="text-gray-500 text-sm mb-2">Sizes: {product.size}</p>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>

            <button
              onClick={() => handleOrder(product)}
              className="w-full py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
