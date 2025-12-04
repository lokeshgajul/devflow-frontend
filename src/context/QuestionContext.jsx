import React from "react";
import axios from "axios";
import { createContext, useState } from "react";

export const QnAContext = createContext();

export const QnAProvider = ({ children }) => {
  const [questionData, setQuestionData] = useState();

  const getAllQuestions = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/all_question", {
        withCredentials: true,
      });

      const data = await res.data;
      setQuestionData(data.allQuestions);
      console.log("data ", data);
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    questionData,
    getAllQuestions,
  };
  return <QnAContext.Provider value={value}>{children}</QnAContext.Provider>;
};
