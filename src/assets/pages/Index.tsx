import React from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import Hero from "../components/Hero";
import TeamFooter from "../components/TeamFooter";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      <AnimatedBackground />
      <Hero />
      <TeamFooter />
    </div>
  );
};

export default Index;
