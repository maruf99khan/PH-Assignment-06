export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div>
            <h3 className="text-white text-2xl font-bold mb-3">DigiTools</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium digital tools for creators, professionals, and teams. Empower your workflow with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Features</a></li>
              <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Pricing</a></li>
              <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Templates</a></li>
              <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a className="text-gray-400 hover:text-white transition cursor-pointer">About</a></li>
              <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Blog</a></li>
              <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Careers</a></li>
              <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Documentation</a></li>
              <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Help Center</a></li>
              <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Community</a></li>
              <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Social Links</h4>
            <div className="flex gap-4">
              <a className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition cursor-pointer text-white">f</a>
              <a className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition cursor-pointer text-white">𝕏</a>
              <a className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition cursor-pointer text-white">in</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 DigiTools. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a className="hover:text-gray-300 transition cursor-pointer">Privacy Policy</a>
            <a className="hover:text-gray-300 transition cursor-pointer">Terms of Service</a>
            <a className="hover:text-gray-300 transition cursor-pointer">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}