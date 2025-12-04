import React from "react";
import {
  FiSearch,
  FiMessageCircle,
  FiThumbsUp,
  FiEye,
  FiPlus,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const QuestionCard = ({ questionData }) => {
  const navigate = useNavigate();
  const questions = [
    {
      id: 1,
      title: "Why is my React useEffect running twice in development?",
      description:
        "I've noticed useEffect fires twice only on development build — how do I avoid duplicate side-effects?",
      user: "sajal_dev",
      avatar: "https://i.pravatar.cc/40?img=3",
      likes: 42,
      comments: 12,
      views: 1_204,
      tags: ["react", "hooks", "useeffect"],
    },
    {
      id: 2,
      title: "Best way to model relationships in MongoDB?",
      description:
        "Should I embed documents or use references for a blog platform with authors and comments?",
      user: "maria",
      avatar: "https://i.pravatar.cc/40?img=5",
      likes: 18,
      comments: 6,
      views: 642,
      tags: ["mongodb", "database", "design"],
    },
    {
      id: 3,
      title: "Node.js: How to gracefully shutdown an Express server?",
      description:
        "When deploying, I want to handle SIGTERM and close DB connections elegantly—what's the pattern?",
      user: "ajay99",
      avatar: "https://i.pravatar.cc/40?img=8",
      likes: 27,
      comments: 9,
      views: 987,
      tags: ["nodejs", "express", "devops"],
    },
  ];
  return (
    <div className="space-y-4">
      {questionData?.map((q, index) => (
        <article
          key={index}
          onClick={() => navigate(`/details/${q._id}`)}
          className="bg-gray-800/85 py-8 px-4 rounded-2xl cursor-pointer border border-slate-700 shadow-md hover:scale-[1.003] transition-transform"
        >
          <div className="flex items-start gap-4">
            <img
              src={q?.avatar}
              alt={q.username}
              className="w-9 h-9 rounded-full"
            />
            <div className="flex-1">
              <span className="text-slate-200 text-lg font-medium block sm:hidden">
                {q.username}
              </span>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-normal">{q.title}</h3>
                <div className="text-sm text-slate-400 hidden md:block">
                  {/* {q?.views.toLocaleString()} views */}
                  100 views
                </div>
              </div>

              <p className="text-sm text-slate-300 mt-2 line-clamp-2">
                {q.description}
              </p>

              <div className="flex items-center flex-wrap gap-2 pt-3">
                {q.hashtags.map((t, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-md bg-slate-700/40 border border-slate-700 text-slate-200"
                  >
                    #{t.tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <FiThumbsUp /> <span>{q?.likes}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMessageCircle /> <span>{q?.comments}</span>
                    </span>
                  </div>
                </div>

                <div className="text-sm text-slate-400 hidden sm:block">
                  Asked by <span className="text-slate-200">{q.username}</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default QuestionCard;
