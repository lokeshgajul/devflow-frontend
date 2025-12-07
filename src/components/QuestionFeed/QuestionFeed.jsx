import React from "react";
import QuestionItem from "../QuestionCard/QuestionCard";

const QuestionFeed = ({ questionData }) => {
  return (
    <div className="space-y-4">
      {questionData?.map((q) => (
        <QuestionItem // Use the new child component
          key={q._id} // ALWAYS use a unique key, like the ID
          question={q} // Pass the single question object
        />
      ))}
    </div>
  );
};
export default QuestionFeed;
