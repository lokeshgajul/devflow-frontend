import React, { useContext, useState } from "react";
import { IoBulbOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const AskQuestionForm = () => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState([]);
  const [inputTag, setInputTag] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
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

  const tips = [
    "Be specific about what you're trying to achieve",
    "Include error messages and relevant context",
    "Share minimal reproducible example code",
    "Use relevant tags to reach the right people",
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
    <div className=" pb-10 text-white bg-gray-900/95">
      <div className="sticky top-0 z-30 bg-gray-900 border-b border-gray-500 py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <h1 className="text-2xl font-bold ">DevFlow</h1>
          </div>
          {/* Avatar */}

          <div className="flex flex-col">
            <div className="flex flex-row justify-center gap-2 items-center">
              <img
                src={user?.avatar}
                alt="User Avatar"
                className="h-9 w-9 rounded-full object-cover border"
              />
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold ">{user?.username}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-5 max-xl:px-6 text-white">
        <h1 className="font-medium text-lg font-sans">Ask a Question</h1>
        <p>Help the community by asking clear, specific questions</p>
      </div>

      {/* Question title  */}
      <div className="w-full max-xl:px-6">
        <div className="max-w-7xl mx-auto bg-[#1f2937] rounded-xl p-6 m-4 border-[1px] border-gray-500">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-600 rounded-sm"></span>
            Question Title
          </h2>

          <span className="text-gray-500 text-sm block mt-1">
            Minimum 10 characters, be specific
          </span>

          <input
            type="text"
            placeholder="What's your question? Be specific and clear..."
            className="w-full mt-4 p-3 text-gray-900 text-sm rounded-lg border border-gray-300 
          focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <p className="text-gray-400 text-xs text-right mt-1">
            {title.length}/10
          </p>
        </div>
      </div>

      {/* Question tags */}
      <div className="w-full max-xl:px-6">
        <div className="bg-[#1f2937] max-w-7xl mx-auto rounded-xl p-6 m-8 border-[1px] border-gray-500">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-600 rounded-sm"></span>
            Tags
          </h2>

          <div className="flex flex-row justify-between gap-2 mt-4 items-center">
            <input
              className="border-2 w-full p-1.5  rounded-md border-gray-200"
              placeholder="type a tag and press enter or click add"
              type="text"
              name="tags"
              id="tag"
              value={inputTag}
              onKeyPress={handleKeyPress}
              onChange={(e) => {
                setInputTag(e.target.value);
                console.log("input tag", inputTag);
              }}
            />
            <button
              onClick={addTag}
              className="p-1.5 border-2 px-4 border-gray-200 rounded-md"
            >
              Add
            </button>
          </div>

          <div className="flex flex-row flex-wrap items-center gap-2">
            {tag.length > 0 &&
              tag?.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="bg-gray-900/95 text-white px-3 mt-3 py-2 rounded-lg text-xs flex items-center gap-2 border border-blue-200"
                  >
                    {item}
                    <button
                      onClick={() => removeTag(item)}
                      className="text-red-500 hover:text-red-600 text-xs cursor-pointer"
                    >
                      ✕
                    </button>
                  </span>
                );
              })}
          </div>
          <div>
            <h2 className="py-2 text-sm">Suggested tags:</h2>
            <ul className="flex flex-row flex-wrap items-center gap-2 py-1">
              {suggestedTags.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setTag([...tag, item]);
                  }}
                  className="bg-gray-900/95 text-gray-300 px-3 py-2 rounded-lg text-xs cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Description section */}
      <div className="w-full max-xl:px-6">
        <div className="bg-[#1f2937] max-w-7xl mx-auto shadow-sm rounded-lg p-6 border border-gray-500 m-8">
          {/* Title */}
          <div className="mb-3">
            <h3 className="text-lg font-semibold border-l-4 border-blue-600 pl-2">
              Description
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Describe your problem, what you've tried, and what you expected
            </p>
          </div>

          {/* Textarea */}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 w-full min-h-[180px] rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none p-3 text-gray-800 resize-y"
            placeholder="Write your problem in detail..."
          />

          {/* Bottom Helper Text */}
          <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
            <span>Minimum 30 characters</span>
            <span>{description.length}/30</span>
          </div>
        </div>
      </div>

      {/* Code Snippet section */}
      <div className="w-full max-xl:px-6">
        <div className="bg-[#1f2937] max-w-7xl mx-auto shadow-sm rounded-lg p-6 border border-gray-500 m-8">
          {/* Title */}
          <div className="mb-3">
            <h3 className="text-lg font-semibold border-l-4 border-blue-600 pl-2">
              Add Code Snippet
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Add relevant code to help explain your issue
            </p>
          </div>

          {/* Textarea */}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 w-full min-h-[180px] rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none p-3 text-gray-800 resize-y"
            placeholder="paste your code here..."
          />
        </div>
      </div>

      {/* tips section  */}
      <div className="w-full max-xl:px-6">
        <div className="max-w-7xl mx-auto bg-[#1f2937] p-4 rounded-xl border border-blue-200 shadow-sm">
          {/* Title */}
          <div className="flex items-center gap-2 mb-3">
            <IoBulbOutline className="text-blue-600 text-lg" />
            <h3 className="text-blue-700 font-semibold text-sm">
              Tips for writing a good question
            </h3>
          </div>

          {/* Tip Points */}
          <ul className="space-y-2 text-[14px] text-white">
            {tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FaCheck className="text-green-600 text-xs mt-[2px]" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={() => navigate("/home")}
              className="px-4 py-2 text-sm rounded-md border bg-gray-900/95 border-gray-400 text-gray-300 font-medium transition"
            >
              Cancel
            </button>

            <button className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Add Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestionForm;
