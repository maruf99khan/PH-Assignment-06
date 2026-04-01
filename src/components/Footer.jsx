import { Heart, Share2, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-3">DigiTools</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium digital tools for creators, professionals, and teams. Empower your workflow with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm md:text-base">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><button className="text-gray-400 hover:text-white transition cursor-pointer">Features</button></li>
              <li><button className="text-gray-400 hover:text-white transition cursor-pointer">Pricing</button></li>
              <li><button className="text-gray-400 hover:text-white transition cursor-pointer">Templates</button></li>
              <li><button className="text-gray-400 hover:text-white transition cursor-pointer">Integrations</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm md:text-base">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><button className="text-gray-400 hover:text-white transition cursor-pointer">About</button></li>
              <li><button className="text-gray-400 hover:text-white transition cursor-pointer">Blog</button></li>
              <li><button className="text-gray-400 hover:text-white transition cursor-pointer">Careers</button></li>
              <li><button className="text-gray-400 hover:text-white transition cursor-pointer">Press</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm md:text-base">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><button className="text-gray-400 hover:text-white transition cursor-pointer">Documentation</button></li>
              <li><button className="text-gray-400 hover:text-white transition cursor-pointer">Help Center</button></li>
              <li><button className="text-gray-400 hover:text-white transition cursor-pointer">Community</button></li>
              <li><button className="text-gray-400 hover:text-white transition cursor-pointer">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm md:text-base">Social Links</h4>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
                <Heart className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
                <Share2 className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500 gap-4">
          <p>&copy; 2025 DigiTools. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6 flex-wrap justify-center md:justify-end">
            <button className="hover:text-gray-300 transition cursor-pointer">Privacy Policy</button>
            <button className="hover:text-gray-300 transition cursor-pointer">Terms of Service</button>
            <button className="hover:text-gray-300 transition cursor-pointer">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}