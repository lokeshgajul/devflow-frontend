import React, { useState, useEffect, useContext } from "react";
import { BiSolidLike } from "react-icons/bi";
import { FiMessageCircle } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { QnAContext } from "../../context/QuestionContext";

const QuestionItem = ({ question }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [likes, setLikes] = useState(question.likes || 0);
  const [isLiked, setIsLiked] = useState(question.likedBy?.includes(user?._id));
  const { handleLike } = useContext(QnAContext);

  useEffect(() => {
    if (question) {
      setLikes(question.likes || 0);
      const userHasLiked = user?._id && question.likedBy?.includes(user._id);
      setIsLiked(userHasLiked);
    }
  }, [question, user?._id]);

  const onLikeClick = async () => {
    const prevLikes = likes;
    const prevIsLiked = isLiked;

    setLikes(prevIsLiked ? likes - 1 : likes + 1);
    setIsLiked(!prevIsLiked);

    try {
      const updatedData = await handleLike(user._id, question._id);

      setLikes(updatedData.likes);
      setIsLiked(updatedData.liked);
    } catch (error) {
      console.log(error);
      setLikes(prevLikes);
      setIsLiked(prevIsLiked);
    }
  };

  const defaultAvatar =
    "https://png.pngtree.com/png-vector/20231019/ourlarge/pngtree-user-profile-avatar-png-image_10211467.png";

  const avatar = user?.avatar || user?.profileImage || defaultAvatar;

  return (
    <article className="bg-gray-800/85 py-8 px-4 rounded-2xl cursor-pointer border border-slate-700 shadow-md hover:scale-[1.003] transition-transform">
      <div className="flex items-start gap-4">
        <img
          src={avatar}
          alt={question.username}
          referrerPolicy="no-referrer"
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
                <div
                  onClick={onLikeClick}
                  className="cursor-pointer flex items-center"
                >
                  <BiSolidLike size={18} color={isLiked ? "#3b82f6" : "gray"} />
                  <span className={`ml-1 ${isLiked ? "text-blue-500" : ""}`}>
                    {likes}
                  </span>
                </div>

                <span className="flex items-center gap-1">
                  <FiMessageCircle size={18} />{" "}
                  <span>{question?.comments || 0}</span>
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
