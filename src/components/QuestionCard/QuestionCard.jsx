import React from "react";
import { FaRegThumbsUp, FaEye } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";

const QuestionCard = ({ question }) => {
  return (
    <div className="px-5 transition cursor-pointer border-b-[1px] m-3 border-gray-300 last:border-b-0">
      <h2 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
        {question.title}
      </h2>

      <p className="text-gray-600 mt-2 line-clamp-2">{question.description}</p>

      <div className="flex gap-2 mt-3 flex-wrap">
        {question.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-row justify-between items-center py-4">
        <div className="flex  gap-6 mt-4 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <FaRegThumbsUp />
            {question.likes} likes
          </div>

          <div className="flex items-center gap-1">
            <BiMessageDetail />
            {question.answers} answers
          </div>

          <div className="flex items-center gap-1">
            <FaEye />
            {question.views} views
          </div>
        </div>

        <div className="flex justify-end items-center mt-4 gap-2 text-sm text-gray-500">
          <img
            src={question.author.avatar}
            className="w-8 h-8 rounded-full object-cover"
            alt="avatar"
          />
          <span className="font-medium">{question.author.name}</span>
          <span>• {question.timeAgo}</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
