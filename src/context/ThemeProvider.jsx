import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = (theme) => {
    if (theme === "light") {
      // document.body.style.backgroundColor = "#0f1729";
      document.body.style.backgroundColor = "#0f172a";
      document.body.style.color = "#f8fafc";
      setTheme("dark");
    } else {
      document.body.style.backgroundColor = "#f2f2f2";
      document.body.style.color = "#000";
      setTheme("light");
      // #694cfa
    }
  };

  const value = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
