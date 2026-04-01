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
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-3 text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose the right plan for your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-8 ${
                plan.highlighted
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className={plan.highlighted ? 'text-purple-100' : 'text-gray-600'}>/mo</span>
              </div>

              <button className={`w-full py-2 rounded font-semibold mb-6 ${
                plan.highlighted
                  ? 'bg-white text-purple-600 hover:bg-gray-100'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}>
                Get Started
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span>✓</span>
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