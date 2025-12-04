import React from "react";
import { FaTrophy, FaMedal } from "react-icons/fa";

const contributors = [
  {
    name: "David Kumar",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rep: 9540,
    rank: 1,
  },
  {
    name: "Nina Patel",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rep: 8230,
    rank: 1,
  },
  {
    name: "Carlos Mendez",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    rep: 7120,
    rank: 2,
  },
  {
    name: "Yuki Tanaka",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    rep: 6890,
    rank: 2,
  },
  {
    name: "Sophie Bernard",
    avatar: "https://randomuser.me/api/portraits/women/39.jpg",
    rep: 5670,
    rank: 3,
  },
];

const getRankIcon = (rank) => {
  if (rank === 1) return <FaTrophy className="text-yellow-500" />;
  if (rank === 2) return <FaMedal className="text-blue-600" />;
  if (rank === 3) return <FaMedal className="text-orange-600" />;
  return null;
};

const TopContributors = () => {
  return (
    <div className="">
      <h3 className="font-semibold text-lg flex items-center gap-2 pb-3 ">
        <FaTrophy className="text-blue-600" /> Top Contributors
      </h3>

      <ul className="mt-3 space-y-4">
        {contributors.map((user, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between border-b-[0.5px] border-gray-500 pb-3 last:border-none"
          >
            <div className="flex items-center gap-3 ">
              <img
                src={user.avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium text-white">{user.name}</h4>
                <p className=" text-sm text-white">{user.rep} rep</p>
              </div>
            </div>

            <div className="text-lg">{getRankIcon(user.rank)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopContributors;
