import React from "react";
import Main from "./navigation/Main";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div className="">
      <AuthProvider>
        <Main />
      </AuthProvider>
    </div>
  );
}

export default App;
