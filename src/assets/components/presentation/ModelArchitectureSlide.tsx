import React from "react";
import { motion } from "framer-motion";
import { Code, Layers, ChartLine } from "lucide-react";

interface SlideProps {
  animateIn: boolean;
}

const ModelArchitectureSlide: React.FC<SlideProps> = ({ animateIn }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
      transition={{ duration: 0.7 }}
      className="space-y-8 max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-bold text-white mb-8"
          >
            Model Architecture
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: animateIn ? 1 : 0, x: animateIn ? 0 : -30 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start gap-4"
            >
              <div className="bg-purple-900/40 p-3 rounded-md mt-1">
                <Code className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-1">
                  Embedding Layer
                </h3>
                <p className="text-gray-300">
                  Converts words to 100-dimensional vectors.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: animateIn ? 1 : 0, x: animateIn ? 0 : -30 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-start gap-4"
            >
              <div className="bg-purple-900/40 p-3 rounded-md mt-1">
                <Layers className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-1">
                  LSTM Layers
                </h3>
                <p className="text-gray-300">
                  2 Layers with each 128 units, returns sequences for sequential
                  modeling.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: animateIn ? 1 : 0, x: animateIn ? 0 : -30 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-start gap-4"
            >
              <div className="bg-purple-900/40 p-3 rounded-md mt-1">
                <ChartLine className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-1">
                  Dense Output
                </h3>
                <p className="text-gray-300">
                  Softmax activation over vocabulary size for word prediction.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: animateIn ? 1 : 0, x: animateIn ? 0 : -30 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex items-start gap-4"
            >
              <div className="bg-purple-900/40 p-3 rounded-md mt-1">
                <Layers className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-1">
                  Training
                </h3>
                <p className="text-gray-300">
                  GPU accelerated on Google Colab for fast iterations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: animateIn ? 1 : 0, scale: animateIn ? 1 : 0.9 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-xl p-8 border border-purple-500/30 w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : -10 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="text-center mb-8"
            >
              <div className="text-center text-purple-400 font-bold text-4xl">
                LSTM
              </div>
              <div className="mt-2 h-1 w-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="bg-gray-800/70 rounded-md p-4 font-mono text-sm text-gray-300 overflow-auto"
            >
              <pre>{`model = Sequential([
  Embedding(vocab_size, 100),
  LSTM(128, return_sequences=True),
  LSTM(128),
  Dense(vocab_size, activation='softmax')
])`}</pre>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ModelArchitectureSlide;
