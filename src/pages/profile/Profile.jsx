import React, { useContext, useEffect, useState } from "react";
import { FaMapMarkerAlt, FaLink, FaTwitter, FaCalendar } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { QnAContext } from "../../context/QuestionContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { logOut, user } = useContext(AuthContext);
  const { getAllQuestionsCreatedByUser, getAllAnswersCreatedByUser } =
    useContext(QnAContext);
  const [checkmode, setCheckmode] = useState("questions");
  const [userData, setUserData] = useState(null);
  const [userQuestion, setUserQuestions] = useState();
  const [usreAnswers, setUserAnswers] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const handleQuestions = async () => {
      const questionData = await getAllQuestionsCreatedByUser(user?._id);
      setUserQuestions(questionData.questions);
      console.log(questionData);
    };
    if (user?._id) handleQuestions();
  }, [user?._id]);

  useEffect(() => {
    const handleAnswers = async () => {
      const answerData = await getAllAnswersCreatedByUser(user?._id);
      setUserAnswers(answerData.answers);
      console.log(answerData);
    };
    if (user?._id) handleAnswers();
  }, [user?._id]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/user/user-details",
          { userId: user._id }
        );

        setUserData(response.data.userDetails);
        console.log(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    if (user?._id) fetchUser();
  }, [user?._id]);

  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-[#0F172A] text-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1E293B] md:col-span-3 lg:col-span-3 rounded-xl p-6 md:p-10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1 md:p-5 flex md:justify-center md:items-center flex-col">
              <div className="w-28 h-28">
                <img
                  src="https://png.pngtree.com/png-vector/20231019/ourlarge/pngtree-user-profile-avatar-png-image_10211467.png"
                  alt="Profile"
                  className="w-full h-full rounded-full bg-gray-700"
                />
              </div>
              <div className="gap-3 flex justify-start items-center">
                <button
                  onClick={() => navigate("/edit-profile")}
                  className="px-2 py-2 mt-4 md:mt-8 bg-blue-500 max-w-fit hover:bg-blue-600 rounded-md text-sm font-medium"
                >
                  Edit Profile
                </button>
                <button
                  onClick={() => logOut()}
                  className="px-2 py-2 mt-4 md:mt-8 bg-blue-500 max-w-fit hover:bg-blue-600 rounded-md text-sm font-medium"
                >
                  LogOut
                </button>
              </div>
            </div>
            <div className="md:col-span-4">
              <h1 className="text-xl font-semibold py-0.5">
                {userData?.fullName}
              </h1>
              <p className="text-gray-400">@{userData?.username}</p>

              <p className="mt-4 text-gray-300 max-w-xl">{userData?.bio}</p>

              <div className="flex flex-wrap gap-10 text-center mt-6">
                <div>
                  <p className="text-3xl font-bold">2,845</p>
                  <p className="text-gray-400 text-sm mt-1">Reputation</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">{userQuestion?.length}</p>
                  <p className="text-gray-400 text-sm mt-1">Questions</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">{usreAnswers?.length}</p>
                  <p className="text-gray-400 text-sm mt-1">Answers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">43</p>
                  <p className="text-gray-400 text-sm mt-1">Badges</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 mt-6 text-gray-400 text-sm">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt /> {userData?.location || "Not added"}
                </span>

                <span className="flex items-center gap-2">
                  <a
                    href={userData?.portfolio}
                    target="_blank"
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <FaLink /> {userData?.portfolio || "Not added"}
                  </a>
                </span>

                <span className="flex items-center gap-2">
                  <a
                    href={userData?.socialLinks?.twitter}
                    target="_blank"
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <FaTwitter />{" "}
                    {userData?.socialLinks?.twitter || "Not added"}
                  </a>
                </span>
                <span className="flex items-center gap-2">
                  <a
                    href={userData?.socialLinks?.linkedIn}
                    target="_blank"
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <SlSocialLinkedin />{" "}
                    {userData?.socialLinks?.linkedIn.slice(0, 20) ||
                      "Not added"}
                  </a>
                </span>

                <span className="flex items-center gap-2">
                  <FaCalendar /> {userData?.createdAt?.slice(0, 10)}
                </span>
              </div>

              <div className="flex flex-wrap gap-5 mt-6">
                <div className="bg-[#0F172A] px-5 py-1.5 flex flex-row items-center gap-1.5 rounded-lg text-center">
                  <p className="text-yellow-400 text-sm font-bold">3</p>
                  <p className="text-xs text-gray-400">Gold</p>
                </div>

                <div className="bg-[#0F172A] px-5 py-1.5 flex flex-row justify-center items-center gap-1.5 rounded-lg text-center">
                  <p className="text-gray-300 text-sm font-bold">12</p>
                  <p className="text-xs text-gray-400">Silver</p>
                </div>

                <div className="bg-[#0F172A] px-5 py-1.5 flex flex-row justify-center items-center gap-1.5 rounded-lg text-center">
                  <p className="text-orange-400 text-sm font-bold">28</p>
                  <p className="text-xs text-gray-400">Bronze</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Tags — FULL WIDTH BLOCK BELOW */}
      <div className="mt-6 bg-[#1E293B] p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold">Top Tags</h2>

        <div className="flex flex-wrap gap-3 mt-4">
          {["React", "JavaScript", "Node.js", "TypeScript", "MongoDB"].map(
            (tag) => (
              <span
                key={tag}
                className="px-4 py-2 cursor-pointer bg-[#0F172A] rounded-lg text-sm text-gray-300 hover:bg-[#152238]"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      <div className="my-5 w-fit space-x-2 rounded-lg  py-2  bg-[#1E293B]">
        <span
          onClick={() => setCheckmode("questions")}
          className={`px-5  py-2  rounded-lg  ${
            checkmode === "questions"
              ? "bg-blue-500 text-white"
              : "bg-transparent "
          } `}
        >
          question
        </span>
        <span
          onClick={() => setCheckmode("answers")}
          className={`px-5  py-2 rounded-lg ${
            checkmode === "answers"
              ? "bg-blue-500 text-white "
              : "bg-transparent  "
          }`}
        >
          Answers
        </span>
      </div>
      {checkmode === "questions"
        ? userQuestion?.map((que, index) => {
            return (
              <div
                key={index}
                className="bg-[#1E293B] text-white p-4 rounded-xl my-4 shadow-md hover:scale-[1.003] transition-transform"
              >
                {/* User Info */}
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={que.avatar}
                    alt={que.user}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{que.user}</h3>
                    <p className="text-gray-400 text-sm">{que.title}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-3">{que.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {que.hashtags.map((item, index) => (
                    <span
                      key={index}
                      className="bg-[#0F172A] px-3 py-1 rounded-md text-xs md:text-sm text-gray-300"
                    >
                      #{item.tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5 text-sm text-gray-400">
                  <span>👍 {que.likes}</span>
                  <span>💬 {que.comments}</span>
                </div>
              </div>
            );
          })
        : usreAnswers?.map((ans, index) => {
            return (
              <div
                key={index}
                className="bg-[#1E293B] text-white p-4 rounded-xl my-6 shadow-md hover:scale-[1.003] transition-transform"
              >
                {/* User Info */}
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={ans.userAvatar}
                    alt={ans.user}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{ans.username}</h3>
                    <p className="text-gray-400 text-sm">{ans.questionTitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-3">{ans.answer}</p>

                {/* Stats */}
                {/* <div className="flex items-center gap-5 text-sm text-gray-400">
                  <span>👍 {ans.likes}</span>
                  <span>💬 {ans.comments}</span>
                  <span>👀 {ans.views}</span>
                </div> */}
              </div>
            );
          })}
    </div>
  );
};

export default Profile;
