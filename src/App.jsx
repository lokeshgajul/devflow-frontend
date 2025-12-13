import React from "react";
import Main from "./navigation/Main";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import { QnAProvider } from "./context/QuestionContext";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  return (
    <div className="main">
      <ThemeProvider>
        <AuthProvider>
          <QnAProvider>
            <Main />
          </QnAProvider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
