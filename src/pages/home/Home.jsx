import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Header from "../../components/Header/Header";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import TopContributors from "../../components/TopContributos/TopContributors";
const Home = () => {
  // const { isAuthenticated, logOut, user } = useContext(AuthContext);

  // const getProfileDetails = async () => {};
  const sampleQuestion = {
    title:
      "How to handle async operations in React with proper error handling?",
    description:
      "I'm trying to implement proper error handling for async operations in my React component but I'm struggling...",
    tags: ["react", "javascript", "async-await"],
    likes: 287,
    answers: 12,
    views: 1450,
    author: {
      name: "Sarah Chen",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    timeAgo: "2 hours ago",
  };

  return (
    <div className="pb-10 ">
      <div className="grid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 gap-6 grid-cols-1 lg:grid-cols-7 text-white">
        {/* Main Content */}
        <div className="lg:col-span-5">
          <div className="mt-8 rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 border bg-gray-800 border-gray-600">
            <div>
              <h2 className="text-lg font-bold">Top Questions</h2>
              <span className="text-gray-500 font-medium text-sm">
                6 questions found
              </span>
            </div>

            <ul className="flex gap-2 mt-3 sm:mt-0">
              <li className="bg-[gray-100] text-gray-700 font-medium rounded-md px-3 py-1 cursor-pointer text-white">
                Newest
              </li>
              <li className="bg-blue-50 text-blue-600 font-medium rounded-md px-3 py-1 cursor-pointer">
                Hot
              </li>
            </ul>
          </div>

          <div className="bg-[#1f2937] mt-5 py-2 rounded-md border border-gray-500 space-y-3">
            <QuestionCard question={sampleQuestion} />
            <QuestionCard question={sampleQuestion} />
          </div>
        </div>

        <div className="lg:col-span-2 mt-8">
          <TopContributors />
        </div>
      </div>
    </div>
  );
};

export default Home;
