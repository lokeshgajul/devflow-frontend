import React from "react";
import Main from "./navigation/Main";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <div className="main">
      <AuthProvider>
        <Main />
      </AuthProvider>
    </div>
  );
}

export default App;
