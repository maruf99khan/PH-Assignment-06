export default function CTA() {
  return (
    <section className="bg-purple-600 text-white py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-100 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6">
          <button className="bg-white text-purple-600 px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base">
            Explore Products
          </button>
          <button className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-white hover:bg-opacity-20 transition-colors text-sm md:text-base">
            View Pricing
          </button>
        </div>

        <p className="text-xs md:text-sm text-purple-100">
          14-day free trial - No credit card required - Cancel anytime
        </p>
      </div>
    </section>
  );
}