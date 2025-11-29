import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  return (
    <div>
      <header className=" bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">DevFlow</h1>
            </div>

            <div className="flex-1 max-w-md hidden sm:block">
              <div className="relative flex items-center">
                <CiSearch size={20} className="absolute left-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-gray-500 font-medium 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                              bg-white transition duration-200"
                />
              </div>
            </div>

            <div className=" flex flex-row justify-center items-center gap-6">
              <button className="hidden text-sm cursor-pointer sm:flex items-center gap-2 px-3 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                <FaPlus size={15} />
                Ask Question
              </button>

              <div
                onClick={() => navigate("/profile")}
                className="w-9 h-9 bg-white shadow-sm cursor-pointer rounded-full"
              >
                <img
                  className="rounded-full"
                  src={
                    user.avatar
                      ? user.avatar
                      : "https://png.pngtree.com/png-vector/20231019/ourlarge/pngtree-user-profile-avatar-png-image_10211467.png"
                  }
                  alt="profile logo"
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
