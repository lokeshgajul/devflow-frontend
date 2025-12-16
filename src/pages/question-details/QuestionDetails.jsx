import React, { useEffect, useState } from "react";
import { BiSolidLike, BiLike } from "react-icons/bi";
import { FiMessageCircle, FiEye } from "react-icons/fi";
import { AiOutlineRobot } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { QnAContext } from "../../context/QuestionContext";
import { AuthContext } from "../../context/AuthContext";
import AnswerFeed from "../../components/AnswerFeed/AnswerFeed";

export default function QuestionDetails() {
  const { id } = useParams();
  const decodedId = atob(id);
  const {
    getQuestionDetailsById,
    details,
    getAllAnswers,
    answers,
    setLikes,
    likes,
    isLiked,
    setIsLiked,
    handleLike,
  } = useContext(QnAContext);
  const { user } = useContext(AuthContext);
  const [postAnswer, setPostAnswer] = useState("");

  useEffect(() => {
    if (details) {
      setLikes(details.likes || 0);
      const userHasLiked = user?._id && details.likedBy?.includes(user._id);
      setIsLiked(userHasLiked);
    }
  }, [details, user?._id]);

  const postAnswerToQuestion = async () => {
    try {
      const response = await axios.post(
        "https://devflow-backend-six.vercel.app/api/answer/post-answer",
        {
          userId: user._id,
          username: user.username,
          userAvatar:
            user.avatar ||
            "https://png.pngtree.com/png-vector/20231019/ourlarge/pngtree-user-profile-avatar-png-image_10211467.png",
          questionId: details._id,
          questionTitle: details.title,
          answer: postAnswer,
        },
        { withCredentials: true }
      );

      getAllAnswers(details?._id);
    } catch (error) {
      console.log("error ", error);
    } finally {
      setPostAnswer("");
    }
  };

  useEffect(() => {
    if (decodedId) {
      getQuestionDetailsById(decodedId);
      getAllAnswers(decodedId);
    }
  }, []);

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
    <div className="min-h-screen text-gray-100  px-6 py-8 max-w-5xl mx-auto">
      {/* Question Section */}
      <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 ">
        <div className="flex items-center gap-3">
          <img src={details?.avatar} className="w-10 h-10 rounded-full" />
          <span className="text-slate-200 text-sm">{details?.username}</span>
        </div>

        <h1 className="text-2xl font-semibold mt-3 mb-2">{details?.title}</h1>
        <p className="text-slate-300 text-sm mb-4">{details?.description}</p>

        <pre
          className="
            bg-gray-900/70 max-h-96 text-gray-200 p-5 rounded-lg my-4
            overflow-x-auto overflow-y-auto text-sm  [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full"
        >
          <div className="flex flex-row justify-between items-center py-2">
            <p className="text-white">Code </p>
            <p className="text-white flex flex-row justify-center items-center cursor-pointer">
              Copy{" "}
              <span>
                <FaRegCopy />
              </span>
            </p>
          </div>
          <code>{details?.codeSnippet}</code>
        </pre>

        <div className="flex items-center gap-6 text-sm text-slate-200">
          <span
            onClick={() => handleLike(details?._id)}
            className="flex items-center gap-1"
          >
            <BiSolidLike size={18} color={isLiked ? "#3b82f6" : "gray"} />
            {likes}
          </span>
          <span className="flex items-center gap-1">
            <FiMessageCircle size={18} /> {details?.comments}
          </span>
          <span className="flex items-center gap-1">
            <FiEye size={18} /> {question?.views}
          </span>
        </div>

        <div className="flex gap-2 mt-4">
          {details?.hashtags.map((t) => (
            <span
              key={t._id}
              className="text-xs px-2 py-1 bg-slate-700/40 border border-slate-700 rounded-md"
            >
              #{t.tag}
            </span>
          ))}
        </div>
      </div>

      {/* Post Answer Section */}
      <div className="bg-slate-800/40 p-6 rounded-xl border mt-4 border-gray-700 shadow-sm">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-1.5 h-6 bg-blue-600 rounded-md"></span>
          Post Your Answer
        </h3>

        <p className="text-gray-400 text-sm mt-1">
          Share what you tried, expected output, and relevant details.
        </p>

        <textarea
          className="mt-4 w-full min-h-[180px] p-4 bg-gray-900/70 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:outline-none placeholder-gray-500 resize-y leading-relaxed"
          placeholder="Write your answer in detail..."
          value={postAnswer}
          onChange={(e) => setPostAnswer(e.target.value)}
        />

        <div className="flex justify-end items-end mt-3">
          <div
            onClick={postAnswerToQuestion}
            className={`
            pl-2.5 pr-2 py-2 rounded-full cursor-pointer transition-all duration-200
            ${
              postAnswer.length >= 15
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }
          `}
          >
            <IoMdSend size={18} />
          </div>
        </div>
      </div>

      {/* Answers Section */}
      <div>
        <AnswerFeed answers={answers} />
        {/* <AnswerCard answers={answers} /> */}
      </div>

      {/* Similar Questions */}
      <h3 className="text-lg font-medium ">Similar Questions</h3>
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
        className="fixed bottom-8 right-6 w-14 h-14 rounded-full cursor-pointer bg-linear-to-br from-sky-500 to-indigo-600 flex items-center justify-center shadow-2xl ring-2 ring-sky-600/30"
      >
        <AiOutlineRobot className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
