export default function Features() {
  const features = [
    {
      id: 1,
      title: "AI Writing Assistant",
      description: "Create compelling copy instantly",
      price: "$19"
    },
    {
      id: 2,
      title: "Design Automation",
      description: "Templates for all your needs",
      price: "$19"
    },
    {
      id: 3,
      title: "Analytics Platform",
      description: "Track your performance",
      price: "$19"
    },
    {
      id: 4,
      title: "Video Editor",
      description: "Professional editing made",
      price: "$19"
    },
    {
      id: 5,
      title: "Marketing by Ads Tool",
      description: "Optimize all channels",
      price: "$19"
    },
    {
      id: 6,
      title: "Social Media Content",
      description: "Schedule & publish easily",
      price: "$19"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Premium Digital Tools
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Everything you need to create professional content and streamline your workflow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="h-20 bg-purple-100 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-purple-600 text-2xl">⚡</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 text-sm mb-6">
                {feature.description}
              </p>

              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">{feature.price}</span>
                <span className="text-gray-500 text-sm">/month</span>
              </div>

              <button className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}