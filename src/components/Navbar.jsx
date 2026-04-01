import { ShoppingCart } from 'lucide-react';

export default function Navbar({ cartCount = 0 }) {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-purple-600">DigiTools</h1>
        
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded">
            <ShoppingCart className="w-6 h-6 text-gray-800" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          
          <button className="text-gray-700 hover:text-purple-600 font-medium">Login</button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
