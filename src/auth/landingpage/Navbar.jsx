import React, { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Ask Question", path: "/ask" },
    // { name: "Categories", path: "/categories" },
    { name: "AI Assistant", path: "/ai-assistant" },
    { name: "Leaderboard", path: "/leaderboard" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b py-2 border-gray-800">
      <div className=" px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-110">
              <FaCode size={20} className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">DevFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/signin">
              <button
                variant="ghost"
                className="text-gray-300 hover:text-white p-1.5 rounded-md cursor-pointer"
              >
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded-md cursor-pointer">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
          >
            {mobileMenuOpen ? (
              <IoClose size={20} className="w-6 h-6" />
            ) : (
              <IoMdMenu size={20} className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className=" space-y-2">
              <Link to="/signin" className="block">
                <button
                  className="w-full  p-1.5 rounded-md cursor-pointer text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </button>
              </Link>
              <Link to="/signup" className="block">
                <button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded-md cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
