import React from "react";
import AnswerCard from "../AnswerCard/AnswerCard";

const AnswerFeed = ({ answers }) => {
  return (
    <div>
      <h2 className="text-lg font-medium mt-3 mb-3">
        Comments ({answers?.length})
      </h2>
      {answers?.map((item, index) => {
        return <AnswerCard key={index} answer={item} />;
      })}
    </div>
  );
};

export default AnswerFeed;
