import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Signup from "../auth/signup/Signup";
import Signin from "../auth/signin/Signin";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import { PublicRoute } from "../components/PublicRoute/PublicRoute";
import LandingPage from "../auth/landingpage/LandingPage";
import Profile from "../pages/profile/Profile";
import AskQuestionForm from "../pages/ask_question/AskQuestionForm";
import AIChatAssistant from "../pages/ai_assistant/AIChatAssistant";
import Footer from "../auth/landingpage/Footer";
import Header from "../components/Header/Header";
import QuestionDetails from "../pages/question-details/QuestionDetails";
import EditProfile from "../pages/edit-profile/EditProfile";

const Main = () => {
  console.log("CURRENT PATH:", window.location.pathname);

  return (
    <Router>
      <div className="min-h-screen flex flex-col ">
        {/* Page Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route
              path="/welcome"
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
              path="/"
              element={
                <ProtectedRoute>
                  <Header />
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ask-question"
              element={
                <ProtectedRoute>
                  <Header />
                  <AskQuestionForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ai-assistant"
              element={
                <ProtectedRoute>
                  <Header />
                  <AIChatAssistant />
                </ProtectedRoute>
              }
            />
            <Route
              path="/details/:id"
              element={
                <ProtectedRoute>
                  <Header />
                  <QuestionDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Header />
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit-profile"
              element={
                <ProtectedRoute>
                  <Header />
                  <EditProfile />
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
