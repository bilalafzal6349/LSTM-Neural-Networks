import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import { Button } from "../components/ui/button";
import {
  CircuitBoard,
  Brain,
  Layers,
  ArrowRight,
  ChartLine,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import PresentationFooter from "../components/presentationFooter";
import { Card, CardContent } from "../components/ui/card";

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

  // Auto-trigger first animation on load
  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const slides = [
    // Introduction Slide
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-6 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          LSTM Word Predictor
        </h1>
        <div className="flex items-center justify-center mb-8">
          <Brain className="w-20 h-20 text-purple-400 mr-4" />
          <div className="h-0.5 w-20 bg-gradient-to-r from-purple-400 to-blue-500" />
          <CircuitBoard className="w-20 h-20 text-blue-400 mx-4" />
          <div className="h-0.5 w-20 bg-gradient-to-r from-purple-400 to-blue-500" />
          <Layers className="w-20 h-20 text-purple-400 ml-4" />
        </div>
        <p className="text-xl text-gray-300 leading-relaxed">
          An intelligent word prediction system powered by Long Short-Term
          Memory networks that learns from context to suggest what you're going
          to type next.
        </p>
      </motion.div>
    </>,

    // What is LSTM Slide
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
        transition={{ duration: 0.7 }}
        className="space-y-6 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-6">What is LSTM?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: animateIn ? 1 : 0, x: animateIn ? 0 : -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-300">
              Long Short-Term Memory (LSTM) networks are a type of recurrent
              neural network architecture designed to remember long-term
              dependencies in sequence data.
            </p>
            <p className="text-lg text-gray-300">
              Unlike traditional neural networks, LSTMs have feedback
              connections that allow them to process entire sequences of data,
              making them ideal for tasks involving text prediction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: animateIn ? 1 : 0, x: animateIn ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-6 rounded-xl backdrop-blur-sm border border-purple-500/30"
          >
            <div className="flex flex-col items-center">
              <Layers className="w-16 h-16 text-purple-400 mb-4" />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <div className="h-0.5 w-20 bg-gradient-to-r from-purple-500 to-blue-500" />
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <ChartLine className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="h-16 w-full bg-gradient-to-r from-purple-900/60 to-blue-900/60 rounded-lg flex items-center justify-center text-white font-mono">
                  Memory Cell
                </div>
                <div className="flex items-center justify-between">
                  <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <div className="h-0.5 w-20 bg-gradient-to-r from-purple-500 to-blue-500" />
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <ChartLine className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4 text-center">
                Simplified LSTM Architecture
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>,

    // How It Works Slide
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
        transition={{ duration: 0.7 }}
        className="space-y-6 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-6">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Input Processing",
              icon: <CircuitBoard className="h-10 w-10 text-purple-400" />,
              description:
                "Text input is tokenized and processed into numerical vectors that the neural network can understand.",
            },
            {
              title: "Context Learning",
              icon: <Brain className="h-10 w-10 text-blue-400" />,
              description:
                "The LSTM model analyzes patterns in word sequences to understand context and relationships between words.",
            },
            {
              title: "Prediction Generation",
              icon: <ChartLine className="h-10 w-10 text-purple-400" />,
              description:
                "Based on learned patterns, the model generates probability distributions for the most likely next words.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
              className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-6 rounded-xl backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-8 p-5 bg-purple-900/20 border border-purple-500/30 rounded-xl"
        >
          <p className="text-center text-gray-300">
            As you type, the model continuously recalculates predictions based
            on your latest input, offering increasingly accurate suggestions the
            more context it has.
          </p>
        </motion.div>
      </motion.div>
    </>,

    // Technologies Used Slide
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
        transition={{ duration: 0.7 }}
        className="space-y-6 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-6">
          Technologies Used
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: animateIn ? 1 : 0, x: animateIn ? 0 : -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Frontend
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span>React with TypeScript</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span>TailwindCSS for styling</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span>Framer Motion for animations</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span>Shadcn UI components</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span>React Router for navigation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: animateIn ? 1 : 0, x: animateIn ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Backend
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span>FastAPI backend service</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span>PyTorch for LSTM model training</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span>TensorFlow data processing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span>Hugging Face Transformers</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span>RESTful API endpoints</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                ML Pipeline
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center">
                  <div className="h-12 w-12 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-sm text-gray-300">Data Collection</p>
                </div>
                <div className="hidden md:block">
                  <ArrowRight className="h-5 w-5 text-purple-400" />
                </div>
                <div className="text-center">
                  <div className="h-12 w-12 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-sm text-gray-300">Preprocessing</p>
                </div>
                <div className="hidden md:block">
                  <ArrowRight className="h-5 w-5 text-purple-400" />
                </div>
                <div className="text-center">
                  <div className="h-12 w-12 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-sm text-gray-300">Model Training</p>
                </div>
                <div className="hidden md:block">
                  <ArrowRight className="h-5 w-5 text-purple-400" />
                </div>
                <div className="text-center">
                  <div className="h-12 w-12 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <p className="text-sm text-gray-300">Evaluation</p>
                </div>
                <div className="hidden md:block">
                  <ArrowRight className="h-5 w-5 text-purple-400" />
                </div>
                <div className="text-center">
                  <div className="h-12 w-12 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <p className="text-sm text-gray-300">Deployment</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </>,

    // Thank You Slide
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-8 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Thank You
        </h2>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: animateIn ? 1 : 0.9, opacity: animateIn ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto flex items-center justify-center"
        >
          <Brain className="h-16 w-16 text-white" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-xl text-gray-300 leading-relaxed max-w-xl mx-auto"
        >
          We hope you enjoy using our LSTM Word Predictor. Try it out today and
          experience the power of neural networks enhancing your typing
          experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg text-lg mt-4"
            onClick={() => (window.location.href = "/word-predictor")}
          >
            Try it now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </>,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
      <Navbar />
      <AnimatedBackground />
      <div className="container mx-auto px-6 py-20 pt-28 min-h-[calc(100vh-4rem)]">
        <div className="max-w-4xl mx-auto">
          {slides[currentSlide]}

          <div className="flex justify-between items-center mt-12">
            <Button
              variant="outline"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="border-white/30 text-white hover:bg-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            <div className="flex space-x-2">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === currentSlide ? "bg-purple-500" : "bg-gray-400/30"
                  }`}
                  onClick={() => {
                    setAnimateIn(false);
                    setTimeout(() => {
                      setCurrentSlide(i);
                      setAnimateIn(true);
                    }, 300);
                  }}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="border-white/30 text-white hover:bg-white/10"
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <PresentationFooter />
    </div>
  );
};

export default About;
