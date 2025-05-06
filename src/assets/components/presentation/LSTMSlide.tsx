import React from "react";
import { ArrowRight, ChartLine, Layers } from "lucide-react";
import { motion } from "framer-motion";

interface SlideProps {
  animateIn: boolean;
}

const LSTMSlide: React.FC<SlideProps> = ({ animateIn }) => {
  return (
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
            Unlike traditional neural networks, LSTMs have feedback connections
            that allow them to process entire sequences of data, making them
            ideal for tasks involving text prediction.
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
  );
};

export default LSTMSlide;
