import React, { useContext } from "react";
import axios from "axios";
import { createContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export const QnAContext = createContext();

export const QnAProvider = ({ children }) => {
  const [questionData, setQuestionData] = useState();
  const [comments, setComments] = useState();
  const [details, setDetails] = useState();
  const [answers, setAnswers] = useState();
  const { user } = useContext(AuthContext);

  const getQuestionDetailsById = async (id) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/question/${id}`,
        {},
        { withCredentials: true }
      );

      setDetails(res.data.details);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getAllQuestions = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/question/all_question",
        {
          withCredentials: true,
        }
      );

      const data = await res.data;
      setQuestionData(data.allQuestions);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllQuestionsCreatedByUser = async (userId) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/question/user-questions",
        { userId }
      );

      const data = await response.data;
      return data;
    } catch (error) {
      console.log("Error ", error);
    }
  };

  const getAllAnswers = async (questionId) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/answer/get-answers",
        {
          questionId,
        }
      );

      setAnswers(res.data.allAnswers);
      setComments(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getAllAnswersCreatedByUser = async (userId) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/answer/user-answers",
        { userId }
      );

      const data = await response.data;
      return data;
    } catch (error) {
      console.log("Error ", error);
    }
  };

  const handleLike = async (answerId) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/answer/like-answer",
        {
          userId: user?._id,
          answerId,
        }
      );

      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    questionData,
    getAllQuestions,
    details,
    answers,
    comments,
    handleLike,
    getQuestionDetailsById,
    getAllAnswers,
    getAllQuestionsCreatedByUser,
    getAllAnswersCreatedByUser,
  };
  return <QnAContext.Provider value={value}>{children}</QnAContext.Provider>;
};
