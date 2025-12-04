import React from "react";
import Main from "./navigation/Main";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import { QnAProvider } from "./context/QuestionContext";

function App() {
  return (
    <div className="main">
      <AuthProvider>
        <QnAProvider>
          <Main />
        </QnAProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
