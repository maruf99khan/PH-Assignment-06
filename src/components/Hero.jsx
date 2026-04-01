
export default function Hero() {
  return (
    <div className="bg-white pb-16">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              ✨ New: AI-Powered Tools
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Supercharge Your Digital Workflow
            </h1>
            <p className="text-gray-600 mb-6">
              Access premium AI tools, design assets, templates, and productivity software—all in one place.
            </p>
            <div className="flex gap-4">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
                Explore Products
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50">
                Watch Demo
              </button>
            </div>
          </div>

          <div>
            <img 
              src="./assets/banner.png" 
              alt="Hero" 
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-purple-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">50K+</div>
              <div className="text-purple-200 text-sm">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold">200+</div>
              <div className="text-purple-200 text-sm">Premium Tools</div>
            </div>
            <div>
              <div className="text-4xl font-bold">4.9★</div>
              <div className="text-purple-200 text-sm">Ratings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
