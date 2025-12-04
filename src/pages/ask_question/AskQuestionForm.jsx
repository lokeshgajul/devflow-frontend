import React, { useContext, useState } from "react";
import { IoBulbOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const AskQuestionForm = () => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState([]);
  const [inputTag, setInputTag] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const postQuestion = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/ask-question",
        {
          userId: user._id,
          username: user.username,
          avatar: user.avatar
            ? user?.avatar
            : "https://png.pngtree.com/png-vector/20231019/ourlarge/pngtree-user-profile-avatar-png-image_10211467.png",
          title,
          description,
          hashtags: tag,
        }
      );
      const data = await response.data;
      console.log("Question data ", data);
      navigate("/home");
    } catch (error) {
      console.log("Error ", error);
    }
  };

  const suggestedTags = [
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "Python",
    "CSS",
    "Database",
    "API",
    "DevOps",
  ];

  const addTag = () => {
    if (inputTag.trim() !== "" && !tag.includes(inputTag)) {
      setTag([...tag, inputTag.trim()]);
      setInputTag("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  const removeTag = (tagToRemove) => {
    setTag(tag.filter((tag) => tag !== tagToRemove));
    console.log(tagToRemove);
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6">
        <div className="lg:col-span-2 space-y-8">
          {/* Page Title */}
          <div>
            <h1 className="text-3xl font-bold">Ask a Question</h1>
            <p className="text-gray-400 mt-1">
              Help the community by asking clear and specific questions.
            </p>
          </div>

          {/* Question Title */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-600 rounded-sm"></span>
              Question Title
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Minimum 10 characters — be specific
            </p>

            <input
              type="text"
              placeholder="What's your question?"
              className="w-full mt-4 p-3 bg-gray-900 border border-gray-700 rounded-lg placeholder-gray-400 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <p className="text-gray-500 text-xs text-right mt-1">
              {title.length}/10
            </p>
          </div>

          {/* Description */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold border-l-4 border-blue-600 pl-2">
              Description
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Describe what you tried and what you expected.
            </p>

            <textarea
              className="mt-4 w-full min-h-[200px] p-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-y"
              placeholder="Write your problem in detail..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="flex justify-between text-gray-500 text-xs mt-1">
              <span>Minimum 30 characters</span>
              <span>{description.length}/30</span>
            </div>
          </div>

          {/* Tags */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-600 rounded-sm"></span>
              Tags
            </h2>

            <div className="flex gap-3 mt-4">
              <input
                className="flex-1 p-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Type and press Enter"
                value={inputTag}
                onKeyPress={handleKeyPress}
                onChange={(e) => setInputTag(e.target.value)}
              />
              <button
                onClick={addTag}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Add
              </button>
            </div>

            {/* Display Tags */}
            <div className="flex flex-wrap gap-2 mt-2 pb-2">
              {tag.map((item, index) => (
                <span
                  key={index}
                  className="bg-gray-900 px-3 py-1 text-xs border border-blue-500 rounded-lg flex items-center gap-2"
                >
                  {item}
                  <button
                    onClick={() => removeTag(item)}
                    className="text-red-400 hover:text-red-500 text-xs"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>

            {/* Suggested Tags */}
            <h2 className="text-sm">Suggested tags:</h2>
            <ul className="flex flex-wrap gap-2 mt-2">
              {suggestedTags.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setTag([...tag, item])}
                  className="cursor-pointer px-3 py-1.5 text-xs bg-gray-900 rounded-lg text-gray-300 hover:border-blue-600 border border-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={postQuestion}
              className="px-5 py-2 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Post Your Question
            </button>
            <button
              onClick={() => navigate("/home")}
              className="px-5 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-800 transition"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Tips section */}
        <aside className="bg-gray-800 p-5 mt-10 lg:mt-24 rounded-lg border border-gray-700 h-max">
          <div className="flex items-center gap-2 mb-3">
            <IoBulbOutline className="text-blue-600 text-lg" />
            <h3 className="font-semibold text-sm">Writing a Good Question</h3>
          </div>

          {[1, 2, 3, 4].map((item, index) => {
            return (
              <div key={index} className="border-b border-gray-700 py-5">
                <div className="text-white font-medium text-sm flex gap-2">
                  <span className="text-[#528ad1] bg-[#22324a] rounded-full w-6 h-6 flex items-center justify-center text-sm p-1 font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <span className="text-[15px">
                      Write a clear, specific title
                    </span>
                    <p className="text-gray-400 text-xs mt-1">
                      Summarize the issue in one short sentence.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="bg-[#22324a] border border-blue-600 rounded-lg p-4 my-4">
            <h4 className="text-[#528ad1] font-semibold text-sm">💡 Pro Tip</h4>
            <p className="text-gray-400 text-xs mt-1">
              Search for similar questions before posting to avoid duplicates!
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AskQuestionForm;
