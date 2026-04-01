export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for individuals",
      features: [
        "Up to 3 tools",
        "Basic support",
        "Cloud storage",
        "Community access"
      ]
    },
    {
      name: "Premium",
      price: "$99",
      description: "For growing teams",
      features: [
        "All 50+ tools",
        "Priority support",
        "Unlimited storage",
        "Team collaboration",
        "Advanced analytics",
        "Custom integrations"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Premium",
        "Dedicated support",
        "Custom contracts",
        "SLA guarantees",
        "Custom training"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Choose the plan that works best for your needs. Always flexible to scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-10 transition-all ${
                plan.highlighted
                  ? 'bg-purple-600 text-white shadow-2xl scale-105'
                  : 'bg-white border border-gray-200 text-gray-900'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== 'Custom' && (
                  <span className={plan.highlighted ? 'text-purple-100' : 'text-gray-600'}>/month</span>
                )}
              </div>

              <button
                className={`w-full py-3 rounded-full font-semibold mb-8 transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                Get Started
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1">✓</span>
                    <span className="text-sm">{feature}</span>
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