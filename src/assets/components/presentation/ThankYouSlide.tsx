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
  );
};

export default ThankYouSlide;
