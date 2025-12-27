import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import HeaderSkeleton from "./HeaderSkeleton";
import QuestionCardSkeleton from "./QuestionCardSkeleton";
import SidebarSkelton from "./SidebarSkeleton";

const MainSkeleton = () => {
  return (
    <div className="">
      <SkeletonTheme baseColor="#1d263c" highlightColor="#2d3748">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10">
          <div className="md:col-span-2">
            <QuestionCardSkeleton />
          </div>
          <div className="hidden md:block">
            <SidebarSkelton />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default MainSkeleton;
