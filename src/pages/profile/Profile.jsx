import React, { useState } from "react";
import { FaMapMarkerAlt, FaLink, FaTwitter, FaCalendar } from "react-icons/fa";

const Profile = () => {
  const [checkmode, setCheckmode] = useState("questions");

  const questions = [
    {
      id: 1,
      title: "Why is my React useEffect running twice in development?",
      description:
        "In React Strict Mode, useEffect may run twice to help identify side effects. How do I prevent duplicate execution?",
      user: "sajal_dev",
      avatar: "https://i.pravatar.cc/40?img=3",
      likes: 42,
      comments: 12,
      views: 1_204,
      tags: ["react", "hooks", "useeffect"],
    },
    {
      id: 2,
      title: "Why is my React useEffect running twice in development?",
      description:
        "In React Strict Mode, useEffect may run twice to help identify side effects. How do I prevent duplicate execution?",
      user: "sajal_dev",
      avatar: "https://i.pravatar.cc/40?img=3",
      likes: 42,
      comments: 12,
      views: 1_204,
      tags: ["react", "hooks", "useeffect"],
    },
    {
      id: 3,
      title: "Why is my React useEffect running twice in development?",
      description:
        "In React Strict Mode, useEffect may run twice to help identify side effects. How do I prevent duplicate execution?",
      user: "sajal_dev",
      avatar: "https://i.pravatar.cc/40?img=3",
      likes: 42,
      comments: 12,
      views: 1_204,
      tags: ["react", "hooks", "useeffect"],
    },
  ];
  const answers = [
    {
      id: 1,
      title: " React useEffect running twice in development?",
      description:
        "In React Strict Mode, useEffect may run twice to help identify side effects. How do I prevent duplicate execution?",
      user: "sajal_dev",
      avatar: "https://i.pravatar.cc/40?img=3",
      likes: 42,
      comments: 12,
      views: 1_204,
      tags: ["react", "hooks", "useeffect"],
    },
    {
      id: 2,
      title: " React useEffect running twice in development?",
      description:
        "In React Strict Mode, useEffect may run twice to help identify side effects. How do I prevent duplicate execution?",
      user: "sajal_dev",
      avatar: "https://i.pravatar.cc/40?img=3",
      likes: 42,
      comments: 12,
      views: 1_204,
      tags: ["react", "hooks", "useeffect"],
    },
    {
      id: 3,
      title: " React useEffect running twice in development?",
      description:
        "In React Strict Mode, useEffect may run twice to help identify side effects. How do I prevent duplicate execution?",
      user: "sajal_dev",
      avatar: "https://i.pravatar.cc/40?img=3",
      likes: 42,
      comments: 12,
      views: 1_204,
      tags: ["react", "hooks", "useeffect"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-[#0F172A] text-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1E293B] md:col-span-3 lg:col-span-3 rounded-xl p-6 md:p-10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1 md:p-5 flex md:justify-center md:items-center flex-col">
              <img
                src="https://png.pngtree.com/png-vector/20231019/ourlarge/pngtree-user-profile-avatar-png-image_10211467.png"
                alt="Profile"
                className="w-28 h-28 rounded-full bg-gray-700"
              />
              <div className=" flex justify-start items-center max-md:ml-3">
                <button className="px-2 py-2 mt-4 md:mt-8 bg-blue-500 max-w-fit hover:bg-blue-600 rounded-md text-xs font-medium">
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="md:col-span-4">
              <h1 className="text-3xl font-semibold">Alex Kumar</h1>
              <p className="text-gray-400">@alex_kumar</p>

              <p className="mt-4 text-gray-300 max-w-xl">
                Full-stack developer passionate about React and Node.js. Love
                helping others solve coding challenges.
              </p>

              <div className="flex flex-wrap gap-10 text-center mt-6">
                <div>
                  <p className="text-3xl font-bold">2,845</p>
                  <p className="text-gray-400 text-sm mt-1">Reputation</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">24</p>
                  <p className="text-gray-400 text-sm mt-1">Questions</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">156</p>
                  <p className="text-gray-400 text-sm mt-1">Answers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">43</p>
                  <p className="text-gray-400 text-sm mt-1">Badges</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 mt-6 text-gray-400 text-sm">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt /> San Francisco, CA
                </span>
                <span className="flex items-center gap-2">
                  <FaLink /> alexkumar.dev
                </span>
                <span className="flex items-center gap-2">
                  <FaTwitter /> @alex_codes
                </span>
                <span className="flex items-center gap-2">
                  <FaCalendar /> Joined January 2023
                </span>
              </div>

              <div className="flex flex-wrap gap-5 mt-6">
                <div className="bg-[#0F172A] px-5 py-1.5 flex flex-row items-center gap-1.5 rounded-lg text-center">
                  <p className="text-yellow-400 text-sm font-bold">3</p>
                  <p className="text-xs mt-1 text-gray-400">Gold</p>
                </div>

                <div className="bg-[#0F172A] px-5 py-1.5 flex flex-row items-center gap-1.5 rounded-lg text-center">
                  <p className="text-gray-300 text-sm font-bold">12</p>
                  <p className="text-xs mt-1 text-gray-400">Silver</p>
                </div>

                <div className="bg-[#0F172A] px-5 py-1.5 flex flex-row items-center gap-1.5 rounded-lg text-center">
                  <p className="text-orange-400 text-sm font-bold">28</p>
                  <p className="text-xs mt-1 text-gray-400">Bronze</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Tags — FULL WIDTH BLOCK BELOW */}
      <div className="mt-6 bg-[#1E293B] p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold">Top Tags</h2>

        <div className="flex flex-wrap gap-3 mt-4">
          {["React", "JavaScript", "Node.js", "TypeScript", "MongoDB"].map(
            (tag) => (
              <span
                key={tag}
                className="px-4 py-2 cursor-pointer bg-[#0F172A] rounded-lg text-sm text-gray-300 hover:bg-[#152238]"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      {/* user qustions and answers */}

      <div className="my-5 w-fit space-x-2 rounded-lg  py-2  bg-[#1E293B]">
        <span
          onClick={() => setCheckmode("questions")}
          className={`px-5  py-2  rounded-lg  ${
            checkmode === "questions"
              ? "bg-blue-500 text-white"
              : "bg-transparent "
          } `}
        >
          question
        </span>
        <span
          onClick={() => setCheckmode("answers")}
          className={`px-5  py-2 rounded-lg ${
            checkmode === "answers"
              ? "bg-blue-500 text-white "
              : "bg-transparent  "
          }`}
        >
          Answers
        </span>
      </div>
      {checkmode === "questions"
        ? questions.map((que, index) => {
            return (
              <div
                key={que.id}
                className="bg-[#1E293B] text-white p-4 rounded-xl my-4 shadow-md hover:scale-[1.003] transition-transform"
              >
                {/* User Info */}
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={que.avatar}
                    alt={que.user}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{que.user}</h3>
                    <p className="text-gray-400 text-sm">{que.title}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-3">{que.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {que.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#0F172A] px-3 py-1 rounded-full text-xs text-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-5 text-sm text-gray-400">
                  <span>👍 {que.likes}</span>
                  <span>💬 {que.comments}</span>
                  <span>👀 {que.views}</span>
                </div>
              </div>
            );
          })
        : answers.map((ans, index) => {
            return (
              <div
                key={ans.id}
                className="bg-[#1E293B] text-white p-4 rounded-xl my-6 shadow-md hover:scale-[1.003] transition-transform"
              >
                {/* User Info */}
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={ans.avatar}
                    alt={ans.user}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{ans.user}</h3>
                    <p className="text-gray-400 text-sm">{ans.title}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-3">{ans.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {ans.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#0F172A] px-3 py-1 rounded-full text-xs text-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-5 text-sm text-gray-400">
                  <span>👍 {ans.likes}</span>
                  <span>💬 {ans.comments}</span>
                  <span>👀 {ans.views}</span>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Profile;
