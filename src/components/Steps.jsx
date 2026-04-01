export default function Steps() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Get Started in 3 Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Create Account
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sign up in seconds. No credit card required to explore our free tier.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Choose Products
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Select the tools you need from our comprehensive library of solutions.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Start Creating
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Begin using our tools immediately and watch your productivity soar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}