
export default function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-16">
          <div className="flex-1">
            <div className="inline-block bg-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ New: AI-Powered Tools Available
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Supercharge Your<br />Digital Workflow
            </h1>

            <p className="text-gray-600 mb-6">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
            </p>

            <div className="flex gap-4 mb-6">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700">
                Explore Products
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50">
                ▶ Watch Demo
              </button>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg h-80 flex items-center justify-center shadow-lg">
              <div className="text-center text-gray-400">
                <p>Hero Banner Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-purple-200">Active Users</div>
            </div>

            <div>
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-purple-200">Premium Tools</div>
            </div>

            <div>
              <div className="text-5xl font-bold mb-2">4.9</div>
              <div className="text-purple-200">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
