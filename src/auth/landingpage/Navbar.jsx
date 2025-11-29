import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="border-gray-200 border-b-[0.5px] sticky top-0 z-50 bg-[#f9f8f8]">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between p-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <span className="text-xl font-semibold text-foreground">DevFlow</span>
        </div>
        <div className="hidden md:block">
          <ul className="flex flex-row gap-4 justify-center items-center ">
            <li className="text-gray-500 hover:text-gray-800 cursor-pointer ">
              Features
            </li>
            <li className="text-gray-500 hover:text-gray-800 cursor-pointer ">
              Why Us
            </li>
            <li className="text-gray-500 hover:text-gray-800 cursor-pointer ">
              How It Works
            </li>
          </ul>
        </div>
        <div>
          {isAuthenticated ? (
            <span className="bg-[#0065cb] py-2 px-3 text-sm rounded-md text-white font-medium font-sans cursor-pointer">
              Logout
            </span>
          ) : (
            <span
              onClick={() => navigate("/signin")}
              className="bg-[#0065cb] py-2 px-3 text-sm rounded-md text-white font-medium font-sans cursor-pointer"
            >
              Sign In
            </span>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
