import React from "react";
import { Brain, CircuitBoard, Layers } from "lucide-react";
import { motion } from "framer-motion";

interface SlideProps {
  animateIn: boolean;
}

const IntroductionSlide: React.FC<SlideProps> = ({ animateIn }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
      transition={{ duration: 0.7 }}
      className="text-center space-y-6 max-w-4xl mx-auto"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: animateIn ? 1 : 0, scale: animateIn ? 1 : 0.9 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 bg-clip-text text-transparent"
      >
        Next-Word Prediction
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-2xl text-gray-300 mb-4"
      >
        AI-Powered Text Generation for Autocomplete & Chatbots
      </motion.p>

      <motion.div
        className="flex items-center justify-center mb-8 flex-wrap gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: animateIn ? 1 : 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <motion.div
          initial={{ scale: 0.5, rotate: -10 }}
          animate={{ scale: animateIn ? 1 : 0.5, rotate: animateIn ? 0 : -10 }}
          transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
          className="bg-gradient-to-br from-purple-900/60 to-blue-900/60 p-6 rounded-lg border border-purple-500/30 backdrop-blur-sm"
        >
          <Brain className="w-14 h-14 text-purple-400" />
          <p className="text-sm mt-2 text-purple-300">Neural Network</p>
        </motion.div>

        <div className="h-0.5 w-16 bg-gradient-to-r from-purple-400 to-blue-500" />

        <motion.div
          initial={{ scale: 0.5, rotate: 10 }}
          animate={{ scale: animateIn ? 1 : 0.5, rotate: animateIn ? 0 : 10 }}
          transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
          className="bg-gradient-to-br from-purple-900/60 to-blue-900/60 p-6 rounded-lg border border-purple-500/30 backdrop-blur-sm"
        >
          <CircuitBoard className="w-14 h-14 text-blue-400" />
          <p className="text-sm mt-2 text-blue-300">Advanced AI</p>
        </motion.div>

        <div className="h-0.5 w-16 bg-gradient-to-r from-purple-400 to-blue-500" />

        <motion.div
          initial={{ scale: 0.5, rotate: -10 }}
          animate={{ scale: animateIn ? 1 : 0.5, rotate: animateIn ? 0 : -10 }}
          transition={{ duration: 0.7, delay: 0.9, type: "spring" }}
          className="bg-gradient-to-br from-purple-900/60 to-blue-900/60 p-6 rounded-lg border border-purple-500/30 backdrop-blur-sm"
        >
          <Layers className="w-14 h-14 text-purple-400" />
          <p className="text-sm mt-2 text-purple-300">Deep Learning</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 30 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="mt-4"
      >
        <h3 className="text-xl text-purple-300 font-medium mb-4">Team:</h3>
        <p className="text-lg text-gray-300 mb-4">
          M Bilal Afzal | M Ans Arshad | Anas Tahir | Mubashir Iqbal
        </p>
        <p className="text-lg text-purple-300">
          Government College University, Lahore
        </p>
      </motion.div>
    </motion.div>
  );
};

export default IntroductionSlide;
