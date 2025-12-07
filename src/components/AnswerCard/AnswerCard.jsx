import React from "react";
import { FiThumbsUp, FiMessageCircle, FiEye } from "react-icons/fi";

const AnswerCard = ({ answers }) => {
  return (
    <div>
      <h2 className="text-lg font-medium mb-3 mt-3">
        Comments ({answers?.length})
      </h2>
      <div className="space-y-4 mb-10">
        {answers?.map((ans) => (
          <div
            key={ans?._id}
            className="bg-slate-800/30 p-4 rounded-xl border border-slate-700"
          >
            <div className="flex items-center gap-3 mb-2">
              <img src={ans?.userAvatar} className="w-9 h-9 rounded-full" />
              <span className="text-slate-200 text-sm font-medium">
                {ans?.username}
              </span>
            </div>

            {/* 🔑 FIX APPLIED HERE: whitespace-pre-wrap */}
            <p className="text-slate-300 text-sm mb-3 whitespace-pre-wrap">
              {ans?.answer}
            </p>

            <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white">
              <FiThumbsUp /> {ans?.likes}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswerCard;
