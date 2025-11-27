import React from "react";
import Main from "./navigation/Main";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div className="bg-[#f9f8f8]">
      <AuthProvider>
        <Main />
      </AuthProvider>
    </div>
  );
}

export default App;
