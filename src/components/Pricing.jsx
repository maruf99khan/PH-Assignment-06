export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for getting started",
      features: [
        "Up to 3 tools",
        "Basic support",
        "Community access"
      ]
    },
    {
      name: "Pro",
      price: "$29",
      description: "For most users",
      features: [
        "All 50+ tools",
        "Priority support",
        "Advanced analytics",
        "Team collaboration",
        "Custom integrations",
        "Unlimited exports"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For teams and orgs",
      features: [
        "Everything in Pro",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantees",
        "Advanced security"
      ]
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
          Choose the plan that works best for your needs. Always flexible to scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-5 sm:p-6 md:p-10 transition-all text-center sm:text-left ${
                plan.highlighted
                  ? 'bg-purple-600 text-white shadow-2xl md:scale-105'
                  : 'bg-white border border-gray-200 text-gray-900'
              }`}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-xs sm:text-sm md:text-base mb-4 sm:mb-6 ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <div className="mb-6 sm:mb-8">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold">{plan.price}</span>
                {plan.price !== 'Custom' && (
                  <span className={`text-xs sm:text-sm ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>/month</span>
                )}
              </div>

              <button
                className={`w-full py-2 sm:py-3 rounded-full font-semibold mb-6 sm:mb-8 transition-colors text-xs sm:text-sm md:text-base ${
                  plan.highlighted
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                Get Started
              </button>

              <ul className="space-y-2 sm:space-y-4 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base">
                    <span className="mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}