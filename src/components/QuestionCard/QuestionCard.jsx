import React, { useState, useEffect, useContext } from "react";
import { BiSolidLike } from "react-icons/bi";
import { FiMessageCircle } from "react-icons/fi";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { QnAContext } from "../../context/QuestionContext";

const QuestionItem = ({ question }) => {
  const { user } = useContext(AuthContext);
  const { getAllAnswers, comments } = useContext(QnAContext);
  const navigate = useNavigate();
  const [likes, setLikes] = useState(question?.likes || 0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (question) {
      setLikes(question.likes || 0);
      const userHasLiked = user?._id && question.likedBy?.includes(user._id);
      setIsLiked(userHasLiked);
    }
  }, [question, user?._id]);

  useEffect(() => {
    getAllAnswers(question._id);
    console.log(question._id);
  }, []);

  const handleLike = async () => {
    if (!user?._id) return alert("Please log in to like questions.");

    const prevLikes = likes; //like count
    const prevIsLiked = isLiked; // checks that is liked or not

    const newIsLiked = !isLiked;
    const newLikes = newIsLiked ? likes + 1 : likes - 1;

    setLikes(newLikes);
    setIsLiked(newIsLiked);

    try {
      const res = await axios.post("http://localhost:3000/api/likes", {
        userId: user._id,
        questionId: question._id,
      });

      setLikes(res.data.likes);
    } catch (error) {
      console.error("Failed to like:", error);
      setLikes(prevLikes);
      setIsLiked(prevIsLiked);
    }
  };

  return (
    <article className="bg-gray-800/85 py-8 px-4 rounded-2xl cursor-pointer border border-slate-700 shadow-md hover:scale-[1.003] transition-transform">
      <div className="flex items-start gap-4">
        <img
          src={question?.avatar}
          alt={question.username}
          className="w-9 h-9 rounded-full"
        />
        <div className="flex-1">
          <div
            onClick={() => {
              const encodedId = btoa(question._id);
              navigate(`/details/${encodedId}`);
            }}
            className="flex items-center justify-between"
          >
            <h3 className="text-lg font-normal">{question.title}</h3>
          </div>
          <p
            onClick={() => {
              const encodedId = btoa(question._id);
              navigate(`/details/${encodedId}`);
            }}
            className="text-sm text-slate-300 mt-2 line-clamp-2"
          >
            {question.description.slice(0, 130)}...
          </p>

          <div className="flex items-center flex-wrap gap-2 pt-3">
            {question.hashtags.map((t, index) => (
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
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents navigating when clicking like
                    handleLike();
                  }}
                  className="flex items-center cursor-pointer hover:bg-slate-800 rounded-full p-1 transition"
                >
                  <span className={`p-1 rounded-full transition`}>
                    <BiSolidLike
                      size={19}
                      color={isLiked ? "#3b82f6" : "gray"}
                    />
                  </span>
                  <span className={`ml-1 ${isLiked ? "text-blue-500" : ""}`}>
                    {likes}
                  </span>
                </span>

                <span className="flex items-center gap-1">
                  <FiMessageCircle size={18} />{" "}
                  <span>{comments?.comments}</span>
                </span>
              </div>
            </div>

            <div className="text-sm text-slate-400 hidden sm:block">
              Asked by{" "}
              <span className="text-slate-200">{question.username}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default QuestionItem; // Export this new component
