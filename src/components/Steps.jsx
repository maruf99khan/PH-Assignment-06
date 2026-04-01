import { UserPlus, Package, Zap } from 'lucide-react';

export default function Steps() {
  const steps = [
    {
      number: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      Icon: UserPlus
    },
    {
      number: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs."
    },
    {
      number: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately."
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900">
          Get Started In 3 Steps
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-16 text-sm md:text-base leading-relaxed">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, idx) => {
            const stepIcons = [UserPlus, Package, Zap];
            const Icon = stepIcons[idx];
            return (
            <div key={step.number} className="relative bg-white rounded-lg border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="absolute top-4 right-4 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">{step.number}</span>
              </div>

              <div className="flex justify-center mb-6 mt-4">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon className="w-10 h-10 text-purple-600" strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-center text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-center text-gray-600 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}