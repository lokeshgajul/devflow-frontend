import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HeaderSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#1e293b" highlightColor="#334155">
      <div className="border-b-[0.5px] border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Skeleton width={32} height={32} borderRadius={8} />
              <Skeleton width={100} height={24} />
            </div>

            <div className="hidden md:block">
              <div className="flex flex-row gap-4">
                <Skeleton width={50} height={18} />
                <Skeleton width={80} height={18} />
                <Skeleton width={90} height={18} />
                <Skeleton width={50} height={18} />
              </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-4">
              <div className="hidden sm:block">
                <Skeleton width={130} height={40} borderRadius={8} />
              </div>
              <Skeleton circle width={36} height={36} />
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default HeaderSkeleton;
