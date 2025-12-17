import React from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import { AuthContext } from "../../context/AuthContext";

const QuestionFeed = ({ questionData }) => {
  return (
    <div className="space-y-4">
      {questionData?.map((q) => {
        return <QuestionCard key={q._id} question={q} />;
      })}
    </div>
  );
};
export default QuestionFeed;
