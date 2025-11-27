import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated === null) return <p>...loading </p>;

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
