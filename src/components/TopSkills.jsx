import React from "react";

const TopSkills = ({ userData }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Top Skills</h2>

      <div className="flex flex-wrap gap-3 mt-2">
        {userData?.skills.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 capitalize cursor-pointer bg-[#0F172A] text-sm rounded-lg tracking-wide text-gray-300 hover:font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopSkills;
