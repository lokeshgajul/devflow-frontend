import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return <p className="text-4xl text-white">loading...</p>;

  return isAuthenticated ? children : <Navigate to="/welcome" replace />;
};

export default ProtectedRoute;
