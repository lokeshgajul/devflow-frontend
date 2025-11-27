import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Navigate to="/home" /> : children;
};
