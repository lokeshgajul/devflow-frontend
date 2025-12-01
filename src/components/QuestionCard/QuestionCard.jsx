import React from "react";
import { FaRegThumbsUp, FaEye } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";

const QuestionCard = ({ question }) => {
  return (
    <div className="px-5 transition cursor-pointer border-b-[0.5px] m-3 border-gray-500 last:border-b-0">
      <div className="flex justify-start py-2 items-center mt-4 gap-2 text-sm text-white">
        <img
          src={question.author.avatar}
          className="w-8 h-8 rounded-full object-cover"
          alt="avatar"
        />
        <span className="font-medium">{question.author.name}</span>
        <span>• {question.timeAgo}</span>
      </div>
      <h2 className="text-lg font-semibold text-white hover:text-blue-600">
        {question.title}
      </h2>

      <p className="text-gray-400 text-[15px] mt-2 line-clamp-2">
        {question.description}
      </p>

      <div className="flex gap-2 mt-3 flex-wrap">
        {question.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-300 text-blue-700 font-medium rounded-full text-sm hover:bg-blue-400 hover:texwhite hover:text-blue-700 transition"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-row justify-between items-center py-4">
        <div className="flex  gap-6 mt-4 text-white text-sm">
          <div className="flex items-center gap-1">
            <FaRegThumbsUp />
            {question.likes} <span className="hidden md:block">likes</span>
          </div>

          <div className="flex items-center gap-1">
            <BiMessageDetail />
            {question.answers}
            <span className="hidden md:block">answers</span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-1">
              <FaEye />
              {question.views} <span> views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
