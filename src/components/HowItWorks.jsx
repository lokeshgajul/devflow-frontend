import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description:
        "Create your account in seconds with email or GitHub. Complete your developer profile.",
    },
    {
      number: "02",
      title: "Ask or Search",
      description:
        "Post a question about any coding challenge or search for existing answers instantly.",
    },
    {
      number: "03",
      title: "Get Solutions",
      description:
        "Receive answers from experienced developers. Upvote the most helpful responses.",
    },
    {
      number: "04",
      title: "Build Reputation",
      description:
        "Contribute answers, help others, and watch your reputation grow in the community.",
    },
  ];
  return (
    <div>
      <section id="how" className="px-6 py-20 md:py-32 ">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              How it works in 4 simple steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes and become part of the developer community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-24 left-full w-[80%] h-0.5 
                 bg-linear-to-r from-blue-300 to-blue-100 z-0"
                  ></div>
                )}

                <div className="bg-white p-8 rounded-xl border hover:bg-blue-50 hover:shadow-lg transition ease-out duration-600 hover:border-blue-300 border-gray-200 h-full z-10 relative">
                  <div className="text-4xl font-bold text-blue-500 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
