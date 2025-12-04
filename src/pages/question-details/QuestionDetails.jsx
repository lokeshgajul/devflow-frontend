import React, { useEffect, useState } from "react";
import { FiThumbsUp, FiMessageCircle, FiEye } from "react-icons/fi";
import { AiOutlineRobot } from "react-icons/ai";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function QuestionDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState();
  console.log(id);

  const getQuestionById = async () => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/question/${id}`,
        {},
        { withCredentials: true }
      );

      const data = await res.data;
      setDetails(data.details);
      console.log("Details ", data);
    } catch (error) {
      console.log("error ", error);
    }
  };

  useEffect(() => {
    if (id) getQuestionById();
  }, [id]);

  const question = {
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
  };

  const answers = [
    {
      id: 1,
      user: "maria",
      avatar: "https://i.pravatar.cc/40?img=5",
      content:
        "React Strict Mode intentionally calls some lifecycle methods twice to detect unsafe side effects. You can safely ignore this in dev.",
      likes: 15,
    },
    {
      id: 2,
      user: "ajay99",
      avatar: "https://i.pravatar.cc/40?img=8",
      content:
        "To prevent double calls during dev, avoid running data fetch directly in useEffect without cleanup or dependency checks.",
      likes: 9,
    },
  ];

  const similarQuestions = [
    {
      id: 2,
      title: "What causes infinite re-renders in React?",
    },
    {
      id: 3,
      title: "React Strict Mode behavior in production vs development?",
    },
  ];

  return (
    <div
      className="min-h-screen text-gray-100  px-6 py-8 max-w-5xl mx-auto"
      //   style={{ backgroundColor: "#0f172a" }}
    >
      {/* Question Section */}
      <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 mb-6">
        <div className="flex items-center gap-3">
          <img src={question.avatar} className="w-10 h-10 rounded-full" />
          <span className="text-slate-200 text-sm">{details?.username}</span>
        </div>

        <h1 className="text-2xl font-semibold mt-3 mb-2">{details?.title}</h1>
        <p className="text-slate-300 text-sm mb-4">{details?.description}</p>

        <div className="flex items-center gap-6 text-sm text-slate-400">
          <span className="flex items-center gap-1">
            <FiThumbsUp /> {question?.likes}
          </span>
          <span className="flex items-center gap-1">
            <FiMessageCircle /> {question?.comments}
          </span>
          <span className="flex items-center gap-1">
            <FiEye /> {question?.views}
          </span>
        </div>

        <div className="flex gap-2 mt-4">
          {details?.hashtags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 bg-slate-700/40 border border-slate-700 rounded-md"
            >
              #{t.tag}
            </span>
          ))}
        </div>
      </div>

      {/* Answers Section */}
      <h2 className="text-lg font-medium mb-3">Answers ({answers.length})</h2>
      <div className="space-y-4 mb-10">
        {answers.map((ans) => (
          <div
            key={ans.id}
            className="bg-slate-800/30 p-4 rounded-xl border border-slate-700"
          >
            <div className="flex items-center gap-3 mb-2">
              <img src={ans.avatar} className="w-9 h-9 rounded-full" />
              <span className="text-slate-200 text-sm font-medium">
                {ans.user}
              </span>
            </div>
            <p className="text-slate-300 text-sm mb-3">{ans.content}</p>
            <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white">
              <FiThumbsUp /> {ans.likes}
            </button>
          </div>
        ))}
      </div>

      {/* Similar Questions */}
      <h3 className="text-lg font-medium mb-3">Similar Questions</h3>
      <ul className="space-y-2">
        {similarQuestions.map((sq) => (
          <li
            key={sq.id}
            className="text-blue-400 hover:text-blue-300 underline text-sm cursor-pointer"
          >
            {sq.title}
          </li>
        ))}
      </ul>

      {/* Floating AI Button */}
      <button
        aria-label="Open AI Bot"
        className="fixed bottom-8 right-6 w-14 h-14 rounded-full bg-linear-to-br from-sky-500 to-indigo-600 flex items-center justify-center shadow-2xl ring-2 ring-sky-600/30"
      >
        <AiOutlineRobot className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
