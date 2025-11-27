import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import Features from "../../components/Features";
import HowItWorks from "../../components/HowItWorks";
import Cta from "../../components/Cta";
import Footer from "../../components/Footer";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Cta />
      <Footer />
    </div>
  );
};

export default LandingPage;
