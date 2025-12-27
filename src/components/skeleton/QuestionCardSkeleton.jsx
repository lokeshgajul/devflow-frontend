import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const QuestionCardSkeleton = () => {
  return (
    <div>
      {[1, 2, 3].map((item, index) => {
        return (
          <SkeletonTheme
            key={index}
            baseColor="#1d263c"
            highlightColor="#2d3748"
          >
            <div className=" rounded-xl p-5 flex gap-4 w-full border-[0.5px] border-gray-800 my-6">
              <Skeleton
                circle
                width={42}
                height={42}
                className="bg-[#151d31]"
              />

              <div className="flex-1 space-y-3">
                <Skeleton width="40%" height={18} />

                <Skeleton width="60%" height={14} className="mt-4" />

                <Skeleton
                  width={70}
                  height={22}
                  borderRadius={4}
                  className="mt-4"
                />

                {/* Footer */}
                <div className="flex justify-between items-center mt-3">
                  <div className="flex gap-4">
                    <Skeleton width={30} height={16} />
                    <Skeleton width={30} height={16} />
                  </div>

                  <Skeleton width={120} height={16} />
                </div>
              </div>
            </div>
          </SkeletonTheme>
        );
      })}
    </div>
  );
};

export default QuestionCardSkeleton;
