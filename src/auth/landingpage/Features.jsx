import React from "react";

const Features = () => {
  const features = [
    {
      icon: "💬",
      title: "Ask Questions",
      description:
        "Post your coding challenges and get solutions from expert developers worldwide.",
    },
    {
      icon: "✍️",
      title: "Answer & Help",
      description:
        "Share your knowledge and help others solve their problems. Build credibility.",
    },
    {
      icon: "⬆️",
      title: "Upvote & Vote",
      description:
        "Rate helpful answers. Community-driven quality ensures the best solutions rise up.",
    },
    {
      icon: "🏷️",
      title: "Smart Tags",
      description:
        "Organize questions by technology, language, and topic for easy discovery.",
    },
    {
      icon: "🔍",
      title: "Powerful Search",
      description:
        "Find answers fast with advanced search filters and intelligent recommendations.",
    },
    {
      icon: "👤",
      title: "Developer Profiles",
      description:
        "Build your reputation, showcase achievements, and connect with the community.",
    },
  ];

  return (
    <div>
      {" "}
      <section id="features" className="px-6 py-20 md:py-32 bg-[#f5f4f4]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold ">
              Everything you need to succeed
            </h2>
            <p className="text-lg max-w-2xl text-[#838081]">
              Powerful features designed to make finding answers and sharing
              knowledge effortless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group p-8 bg-[#f8f8f8] rounded-xl border border-gray-800 
             hover:border-blue-200 hover:shadow-xl hover:scale-y-105
             transition-all duration-1000 ease-out cursor-pointer
             origin-bottom"
              >
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
