import { UserPlus, Package, Zap } from 'lucide-react';

export default function Steps() {
  const steps = [
    {
      num: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required.",
      Icon: UserPlus
    },
    {
      num: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools you need.",
      Icon: Package
    },
    {
      num: "03",
      title: "Start Creating",
      description: "Download and start using your tools immediately.",
      Icon: Zap
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-3 text-gray-900">
          Get Started In 3 Steps
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Start using premium tools in minutes, not hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="relative bg-white rounded-lg border border-gray-200 p-6">
              <div className="absolute top-4 right-4 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                {step.num}
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <step.Icon className="w-10 h-10 text-purple-600" strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}