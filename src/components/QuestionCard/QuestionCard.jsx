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

  return (
    <div className="space-y-4">
      {questionData?.map((q, index) => (
        <article
          key={index}
          onClick={() => {
            const encodedId = btoa(q._id);
            navigate(`/details/${encodedId}`);
          }}
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
                {q.description.slice(0, 130)}...
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
