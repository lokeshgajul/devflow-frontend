import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const { handleChange, formData, signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const response = await signUp();
    if (response) {
      navigate("/signin");
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex justify-center flex-col items-center px-4 pb-6">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2 group pt-12 pb-6">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
          <FaCode size={22} className="text-white" />
        </div>
        <span className="text-3xl font-bold text-white">DevFlow</span>
      </Link>

      <div className="bg-[#1E293B] border border-gray-700 shadow-xl rounded-xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white">
          Create Account
        </h2>
        <p className="text-gray-400 text-center mt-1">Join DevFlow today</p>

        {/* Google Sign-In */}
        <button
          onClick={() =>
            window.open(
              "https://devflow-backend-six.vercel.app/auth/google",
              "_self"
            )
          }
          className="w-full border cursor-pointer border-gray-600 py-2.5 mt-6 rounded-lg flex justify-center items-center gap-3 hover:bg-[#273449] transition text-white font-medium"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>

        <div className="flex items-center gap-2 my-6">
          <div className="grow border-t border-gray-600"></div>
          <p className="text-gray-500 text-sm">Or sign up with email</p>
          <div className="grow border-t border-gray-600"></div>
        </div>

        <form onSubmit={handleSignup} className="space-y-4 mt-6">
          <div>
            <label className="text-gray-300 text-sm font-medium">
              Username
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="john_123"
                className="w-full pl-10 pr-3 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <FaUser
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>

          <div>
            <label className="text-gray-300 text-sm font-medium">
              Email Address
            </label>
            <div className="relative mt-1">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full pl-10 pr-3 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <MdEmail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>

          <div>
            <label className="text-gray-300 text-sm font-medium">
              Password
            </label>
            <div className="relative mt-1">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full pl-10 pr-3 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <RiLockPasswordFill
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>

          <div>
            <label className="text-gray-300 text-sm font-medium">
              Confirm Password
            </label>
            <div className="relative mt-1">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
                className="w-full pl-10 pr-3 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <RiLockPasswordFill
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 cursor-pointer mt-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4 text-md font-medium">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
