import { Heart, Share2, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">DigiTools</h3>
            <p className="text-sm">Premium digital tools for creators and professionals.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><button className="hover:text-white">Features</button></li>
              <li><button className="hover:text-white">Pricing</button></li>
              <li><button className="hover:text-white">Templates</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><button className="hover:text-white">About</button></li>
              <li><button className="hover:text-white">Blog</button></li>
              <li><button className="hover:text-white">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow</h4>
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600">
                <Heart className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2026 DigiTools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}