import React from "react";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AnimatedBackground />
      <div className="container mx-auto px-6 py-20 pt-28">
        <h1 className="text-4xl font-bold text-white mb-8">Contact</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  );
};

export default Contact;
