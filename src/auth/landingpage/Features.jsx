import React from "react";
import { FiMessageCircle } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";
import { FiAward } from "react-icons/fi";
import { MdOutlineRectangle } from "react-icons/md";

const Features = () => {
  const features = [
    {
      icon: FiMessageCircle,
      title: "Ask Questions",
      description:
        "Post your coding questions and get answers from experienced developers worldwide. Our community is here to help you solve any technical challenge.",
      image: "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg",
      color: "blue",
    },
    {
      icon: FiShare2,
      title: "Share Knowledge",
      description:
        "Contribute your expertise by answering questions and sharing insights. Help fellow developers grow while building your reputation in the community.",
      image:
        "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg",
      color: "green",
    },
    {
      icon: FiAward,
      title: "Earn Reputation",
      description:
        "Build your developer profile by earning points and badges. Get recognized for your contributions and become a trusted member of the DevFlow community.",
      image:
        "https://images.unsplash.com/photo-1537420327992-d6e192287183?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxzdGFyfGVufDB8fHx8MTc2NDUwMzg0NXww&ixlib=rb-4.1.0&q=85",
      color: "yellow",
    },
  ];

  const colorClasses = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    green: "bg-green-500/10 text-green-400 border-green-500/20",
    yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose DevFlow?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join a thriving community of developers helping each other succeed
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 border-gray-700 rounded-lg hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden group"
              >
                {/* Feature Image */}
                <div className="relative h-32 md:h-64 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
                </div>

                {/* Feature Content */}
                <div className="p-6 space-y-4">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border ${
                      colorClasses[feature.color]
                    }`}
                  >
                    <MdOutlineRectangle className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>

                  <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                    Learn more →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
