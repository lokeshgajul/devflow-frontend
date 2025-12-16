import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { AuthContext } from "../../context/AuthContext";
import { QnAContext } from "../../context/QuestionContext";

const AnswerwerCard = ({ answer }) => {
  return (
    <div>
      <div className="space-y-3 mb-4">
        <div
          key={answer?._id}
          className="bg-slate-800/30 p-4 rounded-xl border border-slate-700"
        >
          <div className="flex items-center gap-3 mb-2">
            <img src={answer?.userAvatar} className="w-9 h-9 rounded-full" />
            <span className="text-slate-200 text-sm font-medium">
              {answer?.username}
            </span>
          </div>

          <p className="text-slate-300 text-sm mb-3 whitespace-pre-wrap">
            {answer?.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnswerwerCard;
