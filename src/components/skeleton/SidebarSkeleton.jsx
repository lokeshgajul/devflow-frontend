import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SidebarSkelton = () => {
  return (
    <SkeletonTheme baseColor="#1d263c" highlightColor="#2d3748">
      <div className=" rounded-xl p-4 flex flex-col gap-4 w-full border-[0.5px] border-gray-800 my-6">
        <Skeleton width={200} height={25} className="bg-[#151d31] py-2" />
        <div className="flex flex-wrap items-start gap-2">
          <Skeleton width={80} height={25} className="bg-[#151d31] py-2" />
          <Skeleton width={80} height={25} className="bg-[#151d31] py-2" />
          <Skeleton width={80} height={25} className="bg-[#151d31] py-2" />
          <Skeleton width={80} height={25} className="bg-[#151d31] py-2" />
          <Skeleton width={80} height={25} className="bg-[#151d31] py-2" />
        </div>
      </div>
      <div className=" rounded-xl p-4 flex flex-col gap-4 w-full border-[0.5px] border-gray-800 pb-3 my-6">
        {[1, 2, 3].map((item, index) => {
          return (
            <div
              key={index}
              className="border-b-[0.5px] border-gray-700 pb-3 last:border-none flex gap-4 w-full "
            >
              {/* Avatar */}
              <Skeleton
                circle
                width={42}
                height={42}
                className="bg-[#151d31]"
              />

              <div className="flex-1 space-y-3">
                <Skeleton width="60%" height={18} />
                <Skeleton width="40%" height={14} className="mt-4" />
                <Skeleton
                  width={70}
                  height={22}
                  borderRadius={4}
                  className="mt-4"
                />
              </div>
            </div>
          );
        })}
      </div>
    </SkeletonTheme>
  );
};

export default SidebarSkelton;
