import { createContext, useState } from "react";

export const AnswerContext = createContext();

export const AnswerProvider = ({ children }) => {
  const [likes, setLikes] = useState();
  const [isLiked, setIsLiked] = useState(false);

  return <AnswerContext.Provider>{children}</AnswerContext.Provider>;
};
