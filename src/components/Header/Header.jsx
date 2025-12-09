import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  return (
    <div>
      <header className=" bg-gray-900/95 border-b border-gray-600 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <h1 className="text-xl font-bold text-white">DevFlow</h1>
            </div>

            <div>
              <ul className="flex flex-row gap-4 max-md:hidden text-gray-300 font-normal">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Categories</li>
                <li className="cursor-pointer">Leaderboard</li>
                <li className="cursor-pointer">About</li>
              </ul>
            </div>
            <div className=" flex flex-row justify-center items-center gap-6">
              <button
                onClick={() => navigate("/ask-question")}
                className="hidden text-sm cursor-pointer sm:flex items-center gap-2 px-3 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <FaPlus size={15} />
                Ask Question
              </button>

              <div
                onClick={() => navigate("/profile")}
                className="w-9 h-9 bg-white shadow-sm cursor-pointer rounded-full overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={
                    user?.avatar
                      ? user.avatar
                      : "https://png.pngtree.com/png-vector/20231019/ourlarge/pngtree-user-profile-avatar-png-image_10211467.png"
                  }
                  alt="profile logo"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
