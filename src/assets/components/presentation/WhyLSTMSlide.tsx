import React from "react";
import { motion } from "framer-motion";

interface SlideProps {
  animateIn: boolean;
}

const WhyLSTMSlide: React.FC<SlideProps> = ({ animateIn }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
      transition={{ duration: 0.7 }}
      className="space-y-8 max-w-4xl mx-auto px-2 sm:px-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : -20 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-8 text-center md:text-left"
      >
        Why LSTM?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: animateIn ? 1 : 0, x: animateIn ? 0 : -30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="space-y-4"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-purple-300 mb-2">
              Traditional Models
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              Fail to capture long-term dependencies in text.
            </p>
          </div>

          <div className="mt-6 md:mt-8">
            <h3 className="text-xl md:text-2xl font-semibold text-purple-300 mb-2">
              Recurrent Neural Networks
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              A type of artificial neural network designed to process sequential
              data, like text, speech, or time series data, where the order of
              elements matters.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: animateIn ? 1 : 0, x: animateIn ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="space-y-4"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-300 mb-2">
              LSTM Advantage
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              Can remember context across long sequences for better accuracy.
            </p>
          </div>

          <div className="mt-6 md:mt-8">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-300 mb-2">
              Research Basis
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              Based on findings from Rianti et al. (2022).
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 30 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="mt-6 md:mt-8 p-3 md:p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg"
      >
        <p className="text-gray-300 text-sm md:text-base">
          <span className="text-yellow-400 font-medium">Today</span>, due to his
          current job situation and financial conditions, he{" "}
          <span className="text-orange-400 font-medium">needs</span> to take a
          loan.
        </p>
        <p className="text-gray-300 text-sm md:text-base">
          <span className="text-yellow-400 font-medium">Last year</span>, due to
          his job situation and financial conditions, he{" "}
          <span className="text-orange-400 font-medium">had</span> to take a
          loan.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WhyLSTMSlide;
