import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:3000/auth/verify", {
          withCredentials: true,
        });

        if (res.data.sucess) {
          setUser(res.data.user);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch {
        setUser(null);
        setIsAuthenticated(false);
      }
    };

    fetchUser();
  }, []);

  const logOut = async () => {
    try {
      const res = await axios.get("http://localhost:3000/auth/logout", {
        withCredentials: true,
      });
      const data = await res.data;
      setIsAuthenticated(false);
      console.log("data ", data);
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect(() => {
  //     logOut();
  //   }, []);

  const value = {
    user,
    setUser,
    logOut,
    isAuthenticated,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
