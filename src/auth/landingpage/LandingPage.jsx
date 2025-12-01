import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Cta from "./Cta";
import Footer from "./Footer";
import AISection from "./AISection";
import Testemonials from "./Testemonials";

const LandingPage = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <AISection />
      <Features />
      <HowItWorks />
      <Testemonials />
    </div>
  );
};

export default LandingPage;
