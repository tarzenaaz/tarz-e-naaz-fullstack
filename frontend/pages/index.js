import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const [products, setProducts] = useState([]);

  // Fetch products from backend API
  useEffect(() => {
    fetch("http://localhost:5000/api/products") // ✅ backend running on port 5000
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="relative rounded-xl overflow-hidden h-80">
            <img
              src="/hero.jpg"
              className="absolute inset-0 w-full h-full object-contain bg-black"
              alt="hero"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
              <div>
                <h1 className="text-4xl font-bold">Discover Elegance</h1>
                <p className="mt-2">
              
                </p>
              </div>
            </div>
          </div>
        </section>
        </main>

       {/* Products Section */}
<section className="my-12">
  <h2 className="text-2xl font-semibold mb-6">Shop Now</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{/* Article-100 */}
<div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
  <img 
    src="/dress/Article-100.jpg" 
    alt="Article-100" 
    className="w-full h-auto"
  />
  <div className="p-4 text-left">
    <h3 className="text-lg font-semibold">Article-100</h3>
    <p className="text-orange-500 font-semibold mt-1">Rs 8000</p>
    <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
    <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Pink</p>
    <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Long Shirt with Capre</p>
    <p className="text-gray-600 mt-2">
      A stylish pink long shirt with capre, perfect for casual and semi-formal occasions. Comfortable, elegant, and designed to fit all body types with customizable sizes.
    </p>
    <div className="mt-4 flex gap-2">
      <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
      <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
    </div>
  </div>
</div>

    {/* Article-101 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-101.jpg" alt="Article-101" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-101</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 8999</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Green</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Frock</p>
        <p className="text-gray-600 mt-2">A stylish green frock designed for elegance and comfort. Perfect for casual outings or semi-formal events, with a customizable size option.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>

    {/* Article-102 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-102.jpg" alt="Article-102" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-102</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 16599</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Grey</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Frock</p>
        <p className="text-gray-600 mt-2">A formal grey frock with elegant silver work, perfect for special occasions.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>

    {/* Article-103 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-103.jpg" alt="Article-103" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-103</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 16599</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Black</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Frock</p>
        <p className="text-gray-600 mt-2">A black frock with subtle golden touches, perfect for evening events.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>

    {/* Article-104 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-104.jpg" alt="Article-104" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-104</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 14999</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Blue</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Frock</p>
        <p className="text-gray-600 mt-2">A beautiful blue frock designed for elegance and everyday comfort, perfect for casual and semi-formal events.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>

    {/* Article-105 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-105.jpg" alt="Article-105" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-105</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 13999</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Gold</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Frock</p>
        <p className="text-gray-600 mt-2">A luxurious gold frock designed with style and comfort for festive occasions.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>

    {/* Article-106 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-106.jpg" alt="Article-106" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-106</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 13999</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Black</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Frock</p>
        <p className="text-gray-600 mt-2">A black net frock with heavy flares, ideal for evening parties and special events.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>

    {/* Article-107 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-107.jpg" alt="Article-107" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-107</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 7000</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Zinc Blue</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Kurti Gharara</p>
        <p className="text-gray-600 mt-2">A stylish zinc blue kurti with gharara pants, perfect for casual and semi-formal events.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>

    {/* Article-108 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-108.jpg" alt="Article-108" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-108</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 6500</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Brown</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Shalwar Kameez</p>
        <p className="text-gray-600 mt-2">A comfortable brown shalwar kameez, ideal for casual wear and family gatherings.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>
    {/* Article-109 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-109.PNG" alt="Article-109" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-109</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 7000</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Purple</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Frock</p>
        <p className="text-gray-600 mt-2">A beautiful purple frock with elegant design details, perfect for casual gatherings or festive occasions.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>

    {/* Article-110 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-110.PNG" alt="Article-110" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-110</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 8500</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Ice Blue</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Long Shirt with Trouser</p>
        <p className="text-gray-600 mt-2">An elegant ice blue long shirt paired with trousers, enhanced with silver embroidery for a classy look.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>

    {/* Article-111 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-111.jpg" alt="Article-111" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-111</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 8000</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Fade Orange</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Frock</p>
        <p className="text-gray-600 mt-2">A trendy fade-orange frock, perfect for casual outings or festive gatherings, offering comfort and style.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>

    {/* Article-112 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-112.jpg" alt="Article-112" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-112</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 8000</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Skin</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Frock</p>
        <p className="text-gray-600 mt-2">A soft skin-toned frock designed for elegance and everyday comfort, perfect for casual or semi-formal events.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>

    {/* Article-113 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-113.jpg" alt="Article-113" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-113</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 8000</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Ice Blue</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Frock</p>
        <p className="text-gray-600 mt-2">A lovely ice blue frock designed to stand out with elegance, suitable for casual and festive occasions.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>

    {/* Article-114 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-114.jpg" alt="Article-114" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-114</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 6500</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Grey</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Shalwar Kameez</p>
        <p className="text-gray-600 mt-2">A comfortable grey shalwar kameez, ideal for casual wear and family events.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>

    {/* Article-115 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-115.jpg" alt="Article-115" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-115</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 4500</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Pink & White</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Short Frock with Trouser</p>
        <p className="text-gray-600 mt-2">A cute pink and white short frock with matching trousers, perfect for casual summer outings.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>

    {/* Article-116 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-116.jpg" alt="Article-116" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-116</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 8500</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Henna</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Frock</p>
        <p className="text-gray-600 mt-2">A henna-colored frock with elegant design, ideal for parties and casual events.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>
    {/* Article-117 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-117.jpg" alt="Article-117" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-117</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 11500</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Black & Green</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Farshi Shalwar & Kameez</p>
        <p className="text-gray-600 mt-2">A stunning black and green farshi shalwar kameez with intricate detailing, perfect for festive and formal events.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>

    {/* Article-118 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-118.jpg" alt="Article-118" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-118</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 8000</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Black</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Frock</p>
        <p className="text-gray-600 mt-2">A classic black frock, simple yet elegant, suitable for casual and semi-formal gatherings.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>

    {/* Article-119 */}
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img src="/dress/Article-119.jpg" alt="Article-119" className="w-full h-auto" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold">Article-119</h3>
        <p className="text-orange-500 font-semibold mt-1">Rs 13000</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Size:</span> S, M, L, Customise</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Color:</span> Brown</p>
        <p className="text-gray-700 mt-1"><span className="font-semibold">Style:</span> Frock</p>
        <p className="text-gray-600 mt-2">A brown frock in two shades with delicate golden work, perfect for festive or formal occasions.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Order Now</button>
        </div>
      </div>
    </div>

  </div>
</section>


      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923254482164"
        target="_blank"
        rel="noreferrer"
        className="fixed right-6 bottom-6 bg-green-500 p-3 rounded-full shadow-lg text-white"
      >
        💬
      </a>
    </div>
  );
}
