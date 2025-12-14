import React, { useContext, useEffect, useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { QnAContext } from "../../context/QuestionContext";

const AnswerwerCard = ({ answer }) => {
  const { user } = useContext(AuthContext);
  const { handleLike } = useContext(QnAContext);
  const [likes, setLikes] = useState(answer.likes || 0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (answer) {
      setLikes(answer.likes || 0);
      setIsLiked(answer?.likedBy?.includes(user._id));
    }
  }, [answer, user?._id]);

  const onLike = (e) => {
    e.stopPropagation();

    setIsLiked((prev) => !prev);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));

    handleLike(answer._id);
  };

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

          <button
            onClick={onLike}
            className="flex items-center gap-2 text-sm cursor-pointer"
          >
            <BiSolidLike color={isLiked ? "#3b82f6" : "gray"} />
            {likes}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnswerwerCard;
