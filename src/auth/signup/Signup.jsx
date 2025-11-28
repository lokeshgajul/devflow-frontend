import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

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
    <div className="h-screen flex justify-center items-center bg-[#f9f8f8] ">
      <div className="bg-white shadow-xl rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Create Your Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="text-gray-700 font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="john_123"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
