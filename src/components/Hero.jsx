import pic from '../assets/banner.png';
export default function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-16">
          <div className="flex-1 w-full text-center md:text-left">
            <div className="inline-block bg-purple-200 text-purple-700 px-3 sm:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              ✨ New: AI-Powered Tools Available
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Supercharge Your
              <br />
              Digital Workflow
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mb-6 sm:justify-center md:justify-start">
              <button className="bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors text-xs sm:text-sm md:text-base">
                Explore Products
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors text-xs sm:text-sm md:text-base">
                ▶ Watch Demo
              </button>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center shadow-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={pic}
                alt="Hero Banner"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                50K+
              </div>
              <div className="text-purple-200 text-xs sm:text-sm md:text-base">
                Active Users
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                200+
              </div>
              <div className="text-purple-200 text-xs sm:text-sm md:text-base">
                Premium Tools
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                4.9
              </div>
              <div className="text-purple-200 text-xs sm:text-sm md:text-base">
                Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
