import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import MainSkeleton from "../skeleton/MainSkeleton";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading)
    return (
      <div className="text-4xl text-white">
        <MainSkeleton />
      </div>
    );

  return isAuthenticated ? children : <Navigate to="/welcome" replace />;
};

export default ProtectedRoute;
