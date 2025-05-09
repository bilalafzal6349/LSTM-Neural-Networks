import React from "react";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import ContactOfTeam from "../components/presentation/ContactOfTeam";
import PresentationFooter from "../components/presentationFooter";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AnimatedBackground />
      <div className="container mx-auto px-6 py-12 pt-28">
        <ContactOfTeam />
      </div>
      <PresentationFooter />
    </div>
  );
};

export default Contact;
