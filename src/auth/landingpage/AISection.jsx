import React from "react";
import { LuBot } from "react-icons/lu";
import { LuZap } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa";

const AISection = () => {
  const features = [
    {
      icon: LuZap,
      title: "Instant Answers",
      description: "Get immediate responses to your coding questions 24/7",
    },
    {
      icon: FaBrain,
      title: "Smart Context",
      description:
        "AI understands your code context and provides relevant solutions",
    },
    {
      icon: FaRegClock,
      title: "Save Time",
      description: "Debug faster with AI-powered suggestions and explanations",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-gray-800">
      <div className="px-6 py-12 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
              <LuBot className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">
                AI-Powered Assistant
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Get Instant Help with
              <span className="block mt-2 text-blue-400">
                DevFlow AI ChatLuBot
              </span>
            </h2>

            <p className="text-lg text-gray-300">
              Our AI assistant is trained on millions of developer conversations
              and can help you debug code, explain concepts, and find solutions
              instantly.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg rounded-xl transform transition-all hover:scale-105">
              Try AI Assistant
            </button>
          </div>

          {/* Right Content - Mock Chat Interface */}
          <div className="bg-gray-900 border-[1px] rounded-xl border-gray-700 p-10">
            <div className="space-y-4">
              {/* Chat Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-700">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <LuBot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">DevFlow AI</h3>
                  <p className="text-xs text-green-400">Online</p>
                </div>
              </div>

              {/* Mock Chat Messages */}
              <div className="space-y-4">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-xs">
                    <p className="text-sm">
                      How do I optimize React re-renders?
                    </p>
                  </div>
                </div>

                {/* AI Message */}
                <div className="flex justify-start">
                  <div className="bg-gray-800 text-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm max-w-xs">
                    <p className="text-sm">
                      Great question! Here are key strategies:
                      <br />
                      <br />
                      1. Use React.memo() for component memoization
                      <br />
                      2. Implement useCallback and useMemo hooks
                      <br />
                      3. Split components to isolate re-renders
                      <br />
                      <br />
                      Would you like code examples?
                    </p>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex items-center gap-2  text-gray-400">
                  <LuBot className="w-4 h-4" />
                  <span className="text-sm">AI is typing...</span>
                  <div className="flex gap-1">
                    <span
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></span>
                    <span
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></span>
                    <span
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
