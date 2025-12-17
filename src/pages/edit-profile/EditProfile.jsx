import React, { useContext, useState } from "react";
import {
  FiCamera,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiGlobe,
} from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    fullName: user.fullName || "",
    username: user.username || "",
    bio: user.bio || "",
    location: user.location || "",
    portfolio: user.portfolio || "",
    github: user.socialLinks.github || "",
    linkedin: user.socialLinks.linkedIn || "",
    twitter: user.socialLinks.twitter || "",
    skills: user.skills || [],
    newSkill: "",
  });
  const navigate = useNavigate();

  const updateProfile = async () => {
    try {
      const res = await axios.post(
        "https://devflow-backend-six.vercel.app:3000/api/user/update-profile",
        {
          fullName: formData.fullName,
          bio: formData.bio,
          location: formData.location,
          portfolio: formData.portfolio,
          socialLinks: {
            github: formData.github,
            linkedIn: formData.linkedin,
            twitter: formData.twitter,
          },
          skills: formData.skills,
        },
        { withCredentials: true }
      );

      const data = await res.data;
      navigate("/profile");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addSkill = () => {
    if (formData.newSkill !== "") {
      setFormData({
        ...formData,
        skills: [...formData.skills, formData.newSkill.trim()],
        newSkill: "",
      });
    }
  };

  const removeSkill = (skill) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-6 md:p-10 flex justify-center">
      <div className="w-full max-w-3xl bg-[#1E293B] rounded-xl shadow-lg p-6 md:p-10">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>

        {/* Profile Image Upload */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative group">
            <img
              src="https://i.pravatar.cc/150?img=5"
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-[#334155]"
            />
            <label className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition">
              <FiCamera size={16} />
              <input type="file" className="hidden" />
            </label>
          </div>
          <p className="text-gray-400 text-sm mt-2">Click the icon to upload</p>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-gray-300 text-sm gap-1 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={`@${formData.username}`}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-300 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={user?.location || formData.location}
              onChange={handleChange}
              placeholder="San Francisco, CA"
              className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Portfolio */}
          <div>
            <label className="block text-gray-300 mb-1">Portfolio</label>
            <div className="flex items-center bg-[#0F172A] border border-gray-700 rounded-lg px-3">
              <FiGlobe className="text-gray-400" />
              <input
                type="text"
                name="portfolio"
                placeholder="https://yourwebsite.dev"
                value={formData.portfolio}
                onChange={handleChange}
                className="w-full px-2 py-2 bg-transparent focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6">
          <label className="block text-gray-300 mb-1">Bio</label>
          <textarea
            name="bio"
            rows="4"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Write something about yourself..."
            className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-gray-700 focus:border-blue-500 focus:outline-none"
          ></textarea>
        </div>

        {/* Social Links */}
        <h3 className="text-lg font-semibold mt-8 mb-4">Social Links</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GitHub */}
          <div className="flex items-center bg-[#0F172A] border border-gray-700 rounded-lg px-3">
            <FiGithub className="text-gray-400" />
            <input
              type="text"
              name="github"
              placeholder="GitHub URL"
              value={formData.github}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-transparent focus:outline-none"
            />
          </div>

          {/* LinkedIn */}
          <div className="flex items-center bg-[#0F172A] border border-gray-700 rounded-lg px-3">
            <FiLinkedin className="text-gray-400" />
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn URL"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-transparent focus:outline-none"
            />
          </div>

          {/* Twitter */}
          <div className="flex items-center bg-[#0F172A] border border-gray-700 rounded-lg px-3">
            <FiTwitter className="text-gray-400" />
            <input
              type="text"
              name="twitter"
              placeholder="Twitter URL"
              value={formData.twitter}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-transparent focus:outline-none"
            />
          </div>
        </div>

        {/* Skills Section */}
        <h3 className="text-lg font-semibold mt-8 mb-3">Skills</h3>

        <div className="flex gap-3 mb-4">
          <input
            type="text"
            name="newSkill"
            value={formData.newSkill}
            onChange={handleChange}
            placeholder="Add a skill"
            className="px-4 py-2 flex-1 rounded-lg bg-[#0F172A] border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          <button
            onClick={addSkill}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-3">
          {formData.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-600 px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {skill}
              <button onClick={() => removeSkill(skill)} className="text-white">
                ✕
              </button>
            </span>
          ))}
        </div>

        {/* Save Button */}
        <div className="mt-10 flex justify-end">
          <button
            onClick={() => updateProfile()}
            className="bg-green-600 hover:bg-green-700 px-8 py-2 rounded-lg font-semibold"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
