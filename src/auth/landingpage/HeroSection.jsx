import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-12 sm:px-6 lg:px-16 text-white">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 rounded-full bg-gray-900/5 border border-blue-200">
            <span className="text-sm font-medium ">
              ✨ The Developer Community
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
            Ask. <span className="text-[#0065cb]">Answer.</span> Grow.
          </h1>

          <p className="text-lg md:text-xl text-gray-500 font-normal text-balance max-w-lg">
            The modern Q&A platform built for developers. Get answers from the
            community, build your reputation, and learn together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 py-4 max-sm:px-4">
            <button
              onClick={() => navigate("/signin")}
              className="px-8 py-3 rounded-full bg-[#0065cb] text-lg text-white font-sans cursor-pointer font-semibold hover:opacity-90 transition-opacity"
            >
              Join Now
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-gray-200 text-foreground font-semibold hover:bg-muted transition-colors">
              Learn More
            </button>
          </div>

          <div className="flex items-center gap-6 pt-8  border-t-[0.5px] border-gray-200">
            <div>
              <p className="text-lg md:text-2xl font-bold text-foreground">
                50K+
              </p>
              <p className="text-sm font-sans tracking-wide text-gray-500">
                Active Developers
              </p>
            </div>
            <div>
              <p className="text-lg text-2xl font-bold text-foreground">
                100K+
              </p>
              <p className="text-sm font-sans tracking-wide text-gray-500">
                Questions Answered
              </p>
            </div>
            <div>
              <p className="text-lg text-2xl font-bold text-foreground">1M+</p>
              <p className="text-sm font-sans tracking-wide text-gray-500">
                Monthly Views
              </p>
            </div>
          </div>
        </div>

        <div className="animate-float hidden md:flex items-center justify-center transition-transform duration-700 hover:rotate-1 hover:scale-105">
          <div className="relative w-full aspect-square">
            <svg
              className="w-full h-full"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="70" y="80" width="260" height="40" rx="8" fill="#f3f4f6">
                <animate attributeName="x" values="60;70" dur="0.8s" />
              </rect>
              {/* Rounded rectangle with gradient background */}
              <rect
                x="50"
                y="50"
                width="300"
                height="300"
                rx="20"
                fill="url(#gradient)"
                stroke="#e5e7eb"
                strokeWidth="2"
              />

              {/* Mock chat bubbles */}
              <rect
                x="70"
                y="80"
                width="260"
                height="40"
                rx="8"
                fill="#f3f4f6"
              />
              <circle cx="80" cy="100" r="4" fill="#3b82f6" />
              <rect
                x="90"
                y="95"
                width="80"
                height="3"
                rx="1.5"
                fill="#d1d5db"
              />
              <rect
                x="90"
                y="102"
                width="120"
                height="3"
                rx="1.5"
                fill="#d1d5db"
              />

              <rect
                x="70"
                y="145"
                width="200"
                height="50"
                rx="8"
                fill="#dbeafe"
              />
              <circle cx="280" cy="160" r="4" fill="#3b82f6" />
              <rect
                x="90"
                y="155"
                width="170"
                height="3"
                rx="1.5"
                fill="#93c5fd"
              />
              <rect
                x="90"
                y="162"
                width="140"
                height="3"
                rx="1.5"
                fill="#93c5fd"
              />
              <rect
                x="90"
                y="169"
                width="60"
                height="3"
                rx="1.5"
                fill="#93c5fd"
              />

              <rect
                x="70"
                y="220"
                width="260"
                height="40"
                rx="8"
                fill="#f3f4f6"
              />
              <circle cx="80" cy="240" r="4" fill="#3b82f6" />
              <rect
                x="90"
                y="235"
                width="100"
                height="3"
                rx="1.5"
                fill="#d1d5db"
              />
              <rect
                x="90"
                y="242"
                width="150"
                height="3"
                rx="1.5"
                fill="#d1d5db"
              />

              {/* Gradient definition */}
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#f0f9ff", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#e0f2fe", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              {/* Typing dots animation */}
              <circle cx="200" cy="330" r="4" fill="#3b82f6">
                <animate
                  attributeName="cy"
                  values="330;325;330"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="215" cy="330" r="4" fill="#3b82f6">
                <animate
                  attributeName="cy"
                  values="330;325;330"
                  dur="1s"
                  begin="0.2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="230" cy="330" r="4" fill="#3b82f6">
                <animate
                  attributeName="cy"
                  values="330;325;330"
                  dur="1s"
                  begin="0.4s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
