import React from "react";
import { FiCode } from "react-icons/fi";
import { BiBug } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";
import { BsRobot } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";

const AIChatAssistant = () => {
  const features = [
    {
      title: "Code Analysis",
      description: "Get explanations and improvements for your code",
      icon: FiCode,
    },
    {
      title: "Debug Help",
      description: "Find and fix bugs with AI-powered suggestions",
      icon: BiBug,
    },
    {
      title: "Instant Answers",
      description: "Get quick answers to programming questions",
      icon: BsLightningCharge,
    },
  ];

  return (
    <section className="mt-10 bg-linear-to-b text-white flex flex-col items-center justify-center px-6">
      {/* Badge */}
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm rounded-full bg-blue-900/30 border border-blue-500/20 text-blue-400">
          ✨ Powered by Advanced AI
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        DevFlow AI Assistant
      </h1>

      {/* Subheading */}
      <p className="text-gray-400 text-center max-w-xl mb-4 md:mb-10">
        Your personal coding companion, available 24/7
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full max-md:hidden">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1f2937] rounded-xl p-6 hover:border-blue-500/40 transition border-[0.5px] border-gray-600"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 mb-4">
              <feature.icon size={24} />
            </div>

            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>

            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="min-h-screen  text-white max-md:pb-12 py-6 lg:p-10 mt-3  mb-3">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* CHAT SECTION */}
          <div className="lg:col-span-3 bg-[#0F172A] p-3 rounded-2xl border border-gray-800 flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 py-4 border-b border-gray-800">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                <BsRobot size={22} />
              </div>
              <div>
                <h2 className="font-semibold">DevFlow AI</h2>
                <div className="flex items-center gap-1 text-sm text-green-400">
                  <GoDotFill size={14} />
                  Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
              {/* AI Message */}
              <div className="flex gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                  <BsRobot size={18} />
                </div>
                <div className="bg-[#1E293B] rounded-xl px-4 py-3 max-w-xl">
                  Hello! I'm DevFlow AI Assistant. How can I help you with your
                  coding questions today?
                </div>
              </div>

              {/* User Message */}
              <div className="flex justify-end gap-3">
                <div className="bg-blue-600 rounded-xl px-4 py-3 max-w-xl">
                  How do I optimize React re-renders?
                </div>
                <FaUserCircle size={36} className="text-gray-400" />
              </div>

              {/* AI Reply */}
              <div className="flex gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                  <BsRobot size={18} />
                </div>
                <div className="bg-[#1E293B] rounded-xl px-4 py-3 max-w-2xl text-sm leading-relaxed">
                  <p className="font-medium mb-2">
                    Great question! Here are key strategies to optimize React
                    re-renders:
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-gray-300">
                    <li>
                      <b>React.memo</b> – Prevent unnecessary re-renders
                    </li>
                    <li>
                      <b>useCallback</b> – Memoize callback functions
                    </li>
                    <li>
                      <b>useMemo</b> – Cache expensive computations
                    </li>
                    <li>
                      <b>Split components</b> – Smaller components re-render
                      less
                    </li>
                    <li>
                      <b>Proper keys</b> – Ensure stable keys in lists
                    </li>
                  </ol>
                  <p className="mt-2 text-gray-400">
                    Would you like code examples for any of these?
                  </p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex items-center gap-3 bg-blue-500/20 rounded-xl px-4 py-1.5">
                <input
                  type="text"
                  placeholder="Ask me anything about coding..."
                  className="flex-1 bg-transparent outline-none text-sm"
                />
                <button className="bg-blue-600 hover:bg-blue-700 transition p-2 rounded-full">
                  <IoSend size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-[#0F172A] lg:col-span-2 rounded-2xl border border-gray-800 p-6 space-y-6">
            {/* Suggested Prompts */}
            <div>
              <h3 className="font-semibold mb-4">Suggested Prompts</h3>
              <div className="space-y-3">
                {[
                  "Explain async/await in JavaScript",
                  "How to handle CORS errors?",
                  "Best practices for MongoDB indexing",
                  "Difference between let, const, and var",
                  "How to deploy a React app to production?",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="bg-[#1E293B] hover:border-blue-500/40 border border-gray-800 rounded-xl px-4 py-3 text-sm cursor-pointer transition"
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-[#1E293B] border border-blue-500/20 rounded-xl p-4">
              <div className="flex items-center gap-2 text-blue-400 font-medium mb-3">
                <HiOutlineLightBulb />
                Pro Tips
              </div>
              <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                <li>Be specific with your questions</li>
                <li>Include code snippets when relevant</li>
                <li>Ask follow-up questions</li>
                <li>Mention your tech stack</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChatAssistant;
