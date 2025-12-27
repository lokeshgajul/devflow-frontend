import React, { useContext } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import { AuthContext } from "../../context/AuthContext";
import { QnAContext } from "../../context/QuestionContext";
import QuestionCardSkeleton from "../skeleton/QuestionCardSkeleton";

const QuestionFeed = ({ questionData }) => {
  const { loading } = useContext(QnAContext);

  if (loading) {
    return <QuestionCardSkeleton />;
  }
  return (
    <div className="space-y-4">
      {questionData?.map((q) => {
        return <QuestionCard key={q._id} question={q} />;
      })}
    </div>
  );
};
export default QuestionFeed;
