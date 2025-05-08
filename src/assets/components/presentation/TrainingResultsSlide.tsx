import React from "react";
import { motion } from "framer-motion";
import { ChartLine, Book } from "lucide-react";

interface SlideProps {
  animateIn: boolean;
}

const TrainingResultsSlide: React.FC<SlideProps> = ({ animateIn }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
      transition={{ duration: 0.7 }}
      className="space-y-8 max-w-4xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : -20 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl font-bold text-white mb-8"
      >
        Training Performance & Results
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: animateIn ? 1 : 0, x: animateIn ? 0 : -30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-6 rounded-xl border border-purple-500/30"
        >
          <div className="flex items-center mb-4">
            <ChartLine className="h-6 w-6 text-purple-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">
              Training Metrics
            </h3>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: animateIn ? "100%" : "0%" }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="relative"
            >
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Accuracy</span>
                <span className="text-purple-300">
                  Steadily increases across training epochs
                </span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                  style={{ width: "85%" }}
                ></motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: animateIn ? "100%" : "0%" }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="relative"
            >
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Loss Convergence</span>
                <span className="text-purple-300">Stable learning</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  style={{ width: "78%" }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: animateIn ? 1 : 0, x: animateIn ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-6 rounded-xl border border-purple-500/30"
        >
          <div className="flex items-center mb-6">
            <Book className="h-6 w-6 text-blue-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">
              Prediction Example
            </h3>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center">
                <div className="h-10 w-10 bg-blue-900/50 rounded-full flex items-center justify-center mr-3 border border-blue-500/30">
                  <span className="text-blue-300">▶</span>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-md flex-1">
                  <p className="text-gray-200">
                    Input:{" "}
                    <span className="text-purple-300">"How are you"</span>
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 10 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <div className="flex items-center">
                <div className="h-10 w-10 bg-purple-900/50 rounded-full flex items-center justify-center mr-3 border border-purple-500/30">
                  <span className="text-purple-300">◉</span>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-md flex-1">
                  <p className="text-gray-200">
                    Output: <span className="text-green-400">"doing"</span>{" "}
                    (76%),
                    <span className="text-blue-400">"feeling"</span> (20%)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TrainingResultsSlide;
