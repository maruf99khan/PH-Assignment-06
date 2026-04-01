import { UserPlus, Package, Zap } from 'lucide-react';

export default function Steps() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-3">Get Started In 3 Steps</h2>
        <p className="text-center text-gray-600 mb-12">Start using premium tools in minutes, not hours.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 relative">
            <div className="absolute top-4 right-4 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">01</div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <UserPlus className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Create Account</h3>
              <p className="text-gray-600 text-sm">Sign up for free in seconds. No credit card required.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 relative">
            <div className="absolute top-4 right-4 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">02</div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Package className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Choose Products</h3>
              <p className="text-gray-600 text-sm">Browse our catalog and select the tools you need.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 relative">
            <div className="absolute top-4 right-4 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">03</div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Start Creating</h3>
              <p className="text-gray-600 text-sm">Download and start using your tools immediately.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}