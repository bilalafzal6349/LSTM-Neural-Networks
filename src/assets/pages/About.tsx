import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import PresentationFooter from "../components/presentationFooter";
import IntroductionSlide from "../components/presentation/IntroductionSlide";
import DetailedIntroductionSlide from "../components/presentation/DetailedIntroductionSlide";
import LSTMSlide from "../components/presentation/LSTMSlide";
import WhyLSTMSlide from "../components/presentation/WhyLSTMSlide";
import WorkflowSlide from "../components/presentation/WorkflowSlide";
import ModelArchitectureSlide from "../components/presentation/ModelArchitectureSlide";
import TechnologyUsedDetailedSlide from "../components/presentation/TechnologyUsedDetailedSlide";
import TrainingResultsSlide from "../components/presentation/TrainingResultsSlide";
import ApplicationsSlide from "../components/presentation/ApplicationsSlide";
import FinalThankYouSlide from "../components/presentation/FinalThankYouSlide";
import PresentationControls from "../components/presentation/PresentationControls";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateIn, setAnimateIn] = useState(true);

  const totalSlides = 10;

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
    <DetailedIntroductionSlide key="detailed-intro" animateIn={animateIn} />,
    <LSTMSlide key="what-is-lstm" animateIn={animateIn} />,
    <WhyLSTMSlide key="why-lstm" animateIn={animateIn} />,
    <WorkflowSlide key="workflow" animateIn={animateIn} />,
    <ModelArchitectureSlide key="model-arch" animateIn={animateIn} />,
    <TechnologyUsedDetailedSlide key="tech-used" animateIn={animateIn} />,
    <TrainingResultsSlide key="training" animateIn={animateIn} />,
    <ApplicationsSlide key="applications" animateIn={animateIn} />,
    <FinalThankYouSlide key="thanks" animateIn={animateIn} />,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 overflow-x-hidden">
      <Navbar />
      <AnimatedBackground />
      <div className="container mx-auto px-4 sm:px-6 py-20 pt-24 md:pt-28 min-h-[calc(100vh-4rem)] overflow-hidden">
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
