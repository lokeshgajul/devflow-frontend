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
      <section id="how" className=" py-20 md:py-28 bg-gray-800 text-white">
        <div className="px-6 sm:px-6 lg:px-16">
          <div className="mb-16 space-y-2 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              How it works in 4 simple steps
            </h2>
            <p className="text-md text-gray-500 font-medium text-muted-foreground max-w-2xl mx-auto px-2">
              Get started in minutes and become part of the developer community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-24 left-full w-[80%] h-0.5 
                 bg-linear-to-r from-blue-300 to-blue-100 z-0"
                  ></div>
                )}

                <div className="bg-gray-900 p-8 rounded-xl border hover:bg-gray-800 hover:shadow-lg transition ease-out duration-600 hover:border-blue-300 border-gray-200 h-full z-10 relative">
                  <div className="text-4xl font-bold text-blue-500 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-medium">
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
