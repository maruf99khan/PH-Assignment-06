export default function Steps() {
  const steps = [
    {
      number: 1,
      title: "Create Account",
      description: "Sign up in seconds. No credit card required",
      icon: "👤"
    },
    {
      number: 2,
      title: "Choose Products",
      description: "Select the tools you need from our library",
      icon: "🎁"
    },
    {
      number: 3,
      title: "Start Creating",
      description: "Begin using instantly and boost productivity",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">
          Get Started in 3 Steps
        </h2>
        <p className="text-center text-gray-600 mb-16 text-sm">
          Get started quickly in just 3 easy steps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="relative w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}