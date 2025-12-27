import React from "react";
import axios from "axios";
import { createContext, useState } from "react";

export const QnAContext = createContext();

export const QnAProvider = ({ children }) => {
  const [questionData, setQuestionData] = useState();
  const [comments, setComments] = useState();
  const [details, setDetails] = useState();
  const [answers, setAnswers] = useState();
  const [likes, setLikes] = useState();
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  const getQuestionDetailsById = async (id) => {
    try {
      const res = await axios.post(
        `https://devflow-backend-six.vercel.app/api/question/${id}`,
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
        "https://devflow-backend-six.vercel.app/api/question/all_question",
        {
          withCredentials: true,
        }
      );

      const data = await res.data;
      setQuestionData(data.allQuestions);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getAllQuestionsCreatedByUser = async (userId) => {
    try {
      const response = await axios.post(
        "https://devflow-backend-six.vercel.app/api/question/user-questions",
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
        "https://devflow-backend-six.vercel.app/api/answer/get-answers",
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
        "https://devflow-backend-six.vercel.app/api/answer/user-answers",
        { userId }
      );

      const data = await response.data;
      return data;
    } catch (error) {
      console.log("Error ", error);
    }
  };

  const handleLike = async (userId, questionId) => {
    try {
      const res = await axios.post(
        "https://devflow-backend-six.vercel.app/api/question/likes",
        {
          userId,
          questionId,
        }
      );
      return { likes: res.data.likes, liked: res.data.liked };
    } catch (error) {
      console.error("Failed to like:", error);
      throw error;
    }
  };

  const value = {
    questionData,
    details,
    answers,
    comments,
    likes,
    isLiked,
    loading,
    setLikes,
    setIsLiked,
    handleLike,
    getAllQuestions,
    getQuestionDetailsById,
    getAllAnswers,
    getAllQuestionsCreatedByUser,
    getAllAnswersCreatedByUser,
  };
  return <QnAContext.Provider value={value}>{children}</QnAContext.Provider>;
};
