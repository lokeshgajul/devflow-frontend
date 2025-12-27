import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProfileSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#1d263c" highlightColor="#2d3748">
      <div className="w-full max-w-7xl mx-auto p-6 space-y-8">
        <div className="bg-[#151d31] rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex flex-col items-center gap-4">
            <Skeleton circle width={150} height={150} />
            <div className="flex gap-2">
              <Skeleton width={100} height={40} borderRadius={8} />
              <Skeleton width={100} height={40} borderRadius={8} />
            </div>
          </div>

          <div className="flex-1 w-full space-y-6">
            <div>
              <Skeleton width={200} height={32} />
              <Skeleton width={150} height={20} className="mt-2" />
            </div>

            <div className="flex gap-8 border-b border-gray-700 pb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <Skeleton width={60} height={28} />
                  <Skeleton width={80} height={16} className="mt-1" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} width={100} height={18} />
              ))}
            </div>

            <div className="flex gap-3">
              <Skeleton width={120} height={45} borderRadius={10} />
              <Skeleton width={120} height={45} borderRadius={10} />
              <Skeleton width={120} height={45} borderRadius={10} />
            </div>
          </div>
        </div>

        {/* Top Tags Section */}
        <div className="bg-[#151d31] rounded-2xl p-8">
          <Skeleton width={100} height={24} className="mb-4" />
          <div className="flex gap-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} width={80} height={35} borderRadius={6} />
            ))}
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ProfileSkeleton;
