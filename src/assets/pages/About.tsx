import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import PresentationFooter from "../components/presentationFooter";
import IntroductionSlide from "../components/presentation/IntroductionSlide";
import LSTMSlide from "../components/presentation/LSTMSlide";
import HowItWorksSlide from "../components/presentation/HowItWorkSlide";
import TechnologiesSlide from "../components/presentation/TechnologiesSlide";
import ThankYouSlide from "../components/presentation/ThankYouSlide";
import PresentationControls from "../components/presentation/PresentationControls";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateIn, setAnimateIn] = useState(true);

  const totalSlides = 5;

  const nextSlide = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
      setAnimateIn(true);
    }, 300);
  };

  const prevSlide = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
      setAnimateIn(true);
    }, 300);
  };

  const setSlide = (index: number) => {
    setAnimateIn(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setAnimateIn(true);
    }, 300);
  };

  // Auto-trigger first animation on load
  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const slides = [
    <IntroductionSlide key="intro" animateIn={animateIn} />,
    <LSTMSlide key="lstm" animateIn={animateIn} />,
    <HowItWorksSlide key="how" animateIn={animateIn} />,
    <TechnologiesSlide key="tech" animateIn={animateIn} />,
    <ThankYouSlide key="thanks" animateIn={animateIn} />,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
      <Navbar />
      <AnimatedBackground />
      <div className="container mx-auto px-6 py-20 pt-28 min-h-[calc(100vh-4rem)]">
        <div className="max-w-4xl mx-auto">
          {slides[currentSlide]}

          <PresentationControls
            currentSlide={currentSlide}
            totalSlides={totalSlides}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
            setSlide={setSlide}
          />
        </div>
      </div>
      <PresentationFooter />
    </div>
  );
};

export default About;
