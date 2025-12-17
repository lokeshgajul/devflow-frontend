import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        "https://devflow-backend-six.vercel.app/auth/verify",
        {
          withCredentials: true,
        }
      );

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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const logOut = async () => {
    try {
      const res = await axios.get(
        "https://devflow-backend-six.vercel.app/auth/logout",
        {
          withCredentials: true,
        }
      );
      const data = await res.data;
      setIsAuthenticated(false);
      setUser(null);
      console.log("data ", data);
      return data.status;
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async () => {
    try {
      const res = await axios.post(
        "https://devflow-backend-six.vercel.app/auth/signup",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );

      const data = await res.data;
      console.log("Data ", data);

      return true;
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async () => {
    try {
      const res = await axios.post(
        "https://devflow-backend-six.vercel.app/auth/signin",
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );

      const data = await res.data;
      setIsAuthenticated(true);
      console.log("Data ", data);
      return true;
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const value = {
    user,
    setUser,
    logOut,
    fetchUser,
    isAuthenticated,
    signUp,
    handleChange,
    formData,
    signIn,
    loading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
