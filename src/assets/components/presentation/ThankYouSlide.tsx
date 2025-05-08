import React from "react";
import { ArrowRight, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";

interface SlideProps {
  animateIn: boolean;
}

const ThankYouSlide: React.FC<SlideProps> = ({ animateIn }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
      transition={{ duration: 0.7 }}
      className="text-center space-y-6 md:space-y-8 max-w-4xl mx-auto px-2 sm:px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        Thank You
      </h2>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: animateIn ? 1 : 0.9, opacity: animateIn ? 1 : 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto flex items-center justify-center"
      >
        <Brain className="h-12 w-12 md:h-16 md:w-16 text-white" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md mx-auto px-2"
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
          className="bg-purple-600 hover:bg-purple-700 text-white py-1 px-4 md:py-2 md:px-6 rounded-lg text-base md:text-lg mt-2 md:mt-4"
          onClick={() => (window.location.href = "/word-predictor")}
        >
          Try it now
          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default ThankYouSlide;
