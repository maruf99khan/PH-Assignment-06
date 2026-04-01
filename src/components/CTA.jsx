export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of creators and businesses already using DigiTools to streamline their work and boost productivity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}