import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Cta from "./Cta";
import Footer from "./Footer";

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
