import React, { useContext, useEffect } from "react";
import { AiOutlineRobot } from "react-icons/ai";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import TopContributors from "../../components/TopContributos/TopContributors";
import { useNavigate } from "react-router-dom";
import { QnAContext } from "../../context/QuestionContext";
import QuestionFeed from "../../components/QuestionFeed/QuestionFeed";
import QuestionCardSkeleton from "../../components/skeleton/QuestionCardSkeleton";

export default function Home() {
  const trending = ["react", "tailwind", "mongodb", "javascript", "ai"];
  const navigate = useNavigate();

  const { getAllQuestions, questionData } = useContext(QnAContext);
  useEffect(() => {
    getAllQuestions();
  }, []);

  return (
    <div
      className="min-h-screen antialiased text-gray-100"
      style={{ backgroundColor: "#0f172a" }}
    >
      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10 pb-20">
        {/* Feed */}
        <section className="md:col-span-2">
          <div className="flex items-center flex-wrap justify-between mb-4">
            <h2 className="text-sm sm:text-lg md:xl font-semibold">
              All Questions
            </h2>
            <div className="flex items-center gap-3 max-sm:mt-3">
              <div className="text-sm text-slate-400 hidden sm:block">
                Sort:
              </div>
              <select className="bg-slate-800/40 px-3 py-1 rounded-md text-sm">
                <option>Newest</option>
                <option>Most Liked</option>
                <option>Most Viewed</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <QuestionFeed questionData={questionData} />
          </div>
        </section>

        <aside className="hidden md:block">
          <div className="sticky top-6 space-y-6">
            <div className="bg-gray-800/85 p-4 rounded-xl border border-slate-700">
              <h4 className="text-sm font-semibold mb-3">Trending Hashtags</h4>
              <div className="flex flex-wrap gap-2">
                {trending.map((t) => (
                  <button
                    key={t}
                    className="text-xs px-3 py-1 rounded-lg bg-gradient-to-r from-slate-700/40 to-slate-800/30 border border-slate-700"
                  >
                    #{t}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/85 p-4 rounded-xl border border-slate-700">
              <TopContributors />
            </div>

            <div className="bg-gray-800/85 p-4 rounded-xl border border-slate-700">
              <h4 className="text-sm font-semibold mb-3">AI Assistant</h4>
              <p className="text-sm text-slate-300 mb-3">
                Ask the AI for suggested answers, summaries, or to improve your
                question.
              </p>
              <button className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600">
                <AiOutlineRobot className="text-white" />{" "}
                <span className="text-sm font-medium">Open AI Bot</span>
              </button>
            </div>
          </div>
        </aside>
      </main>

      {/* Ask Question FAB */}
      <button
        onClick={() => navigate("/ask-question")}
        className="
            fixed bottom-24 md:hidden right-6
            bg-blue-600 hover:bg-blue-700 text-white
            rounded-full shadow-xl flex items-center gap-2
            px-4 py-2
            z-50 transition
          "
      >
        <span className="text-3xl">+</span>
        <span className="hidden md:inline font-medium">Ask Question</span>
      </button>

      {/* AI Bot Icon FAB */}
      <button
        onClick={() => navigate("/ai-assistant")}
        className="
            fixed bottom-6 right-6
            bg-blue-500 hover:bg-blue-600 text-white
            rounded-full shadow-xl flex items-center justify-center
            px-3 py-3 text-xl mt-2
            z-50 transition
          "
      >
        🤖
      </button>
    </div>
  );
}
