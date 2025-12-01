import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Signup from "../auth/signup/Signup";
import Signin from "../auth/signin/Signin";
import { AuthContext } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import { PublicRoute } from "../components/PublicRoute/PublicRoute";
import LandingPage from "../auth/landingpage/LandingPage";
import Profile from "../pages/profile/Profile";
import AskQuestionForm from "../pages/ask_question/AskQuestionForm";
import Footer from "../auth/landingpage/Footer";

const Main = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col ">
        {/* Page Content */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <LandingPage />
                </PublicRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <PublicRoute>
                  <Signin />
                </PublicRoute>
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ask-question"
              element={
                <ProtectedRoute>
                  <AskQuestionForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        {/* Footer always bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default Main;
