import { ShoppingCart } from 'lucide-react';

export default function Navbar({ cartCount = 0 }) {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="text-2xl md:text-3xl font-bold text-purple-600">DigiTools</div>

        <div className="hidden md:flex space-x-8">
          <a className="text-gray-800 hover:text-purple-600 transition cursor-pointer">Products</a>
          <a className="text-gray-800 hover:text-purple-600 transition cursor-pointer">Pricing</a>
          <a className="text-gray-800 hover:text-purple-600 transition cursor-pointer">Testimonials</a>
          <a className="text-gray-800 hover:text-purple-600 transition cursor-pointer">FAQ</a>
        </div>

        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="relative">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <ShoppingCart className="w-6 h-6 text-gray-800 hover:text-purple-600" strokeWidth={1.5} />
            </button>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <button className="text-gray-800 hover:text-purple-600 text-sm md:text-base transition">Login</button>
          <button className="bg-purple-600 text-white px-4 md:px-5 py-2 rounded-full hover:bg-purple-700 transition text-sm md:text-base">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}
