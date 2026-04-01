export default function Navbar({ cartCount = 0 }) {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-purple-600">DigiTools</div>

        <div className="hidden md:flex space-x-8">
          <a className="text-gray-800 hover:text-purple-600 cursor-pointer">Products</a>
          <a className="text-gray-800 hover:text-purple-600 cursor-pointer">Pricing</a>
          <a className="text-gray-800 hover:text-purple-600 cursor-pointer">Testimonials</a>
          <a className="text-gray-800 hover:text-purple-600 cursor-pointer">FAQ</a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="text-gray-800 hover:text-purple-600 text-2xl">
              🛒
            </button>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <button className="text-gray-800 hover:text-purple-600">Login</button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}
