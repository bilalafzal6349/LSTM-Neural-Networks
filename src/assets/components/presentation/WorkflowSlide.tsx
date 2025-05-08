import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Terminal, ChartLine, Book } from "lucide-react";

interface SlideProps {
  animateIn: boolean;
}

const WorkflowSlide: React.FC<SlideProps> = ({ animateIn }) => {
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
        Workflow
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-6 rounded-lg border border-purple-500/30"
        >
          <div className="flex items-center mb-4">
            <Book className="h-6 w-6 text-purple-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">Text Input</h3>
          </div>
          <p className="text-gray-300">
            As you type, the model continuously recalculates predictions based
            on your latest input, offering increasingly accurate suggestions the
            more context it has.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-6 rounded-lg border border-purple-500/30"
        >
          <div className="flex items-center mb-4">
            <Code className="h-6 w-6 text-blue-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">Cleaning</h3>
          </div>
          <p className="text-gray-300">
            Removes punctuation/special characters using regex.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-6 rounded-lg border border-purple-500/30"
        >
          <div className="flex items-center mb-4">
            <Terminal className="h-6 w-6 text-purple-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">Tokenization</h3>
          </div>
          <p className="text-gray-300">
            Text input is tokenized and processed into numerical vectors that
            the neural network can understand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-6 rounded-lg border border-purple-500/30"
        >
          <div className="flex items-center mb-4">
            <ChartLine className="h-6 w-6 text-blue-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">
              LSTM Processing
            </h3>
          </div>
          <p className="text-gray-300">
            The LSTM model analyzes patterns in word sequences to understand
            context and relationships between words.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 30 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="relative"
      >
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="bg-purple-500/30 p-3 rounded-full">
            <ChartLine className="h-6 w-6 text-purple-400" />
          </div>
          <ArrowRight className="h-5 w-5 text-purple-400" />
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg">
            <h3 className="text-white font-medium">Prediction</h3>
          </div>
        </div>
        <p className="text-center text-gray-300 mt-4">
          Output the next probable words.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WorkflowSlide;
