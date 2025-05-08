import React from "react";
import { motion } from "framer-motion";

interface SlideProps {
  animateIn: boolean;
}

const DetailedIntroductionSlide: React.FC<SlideProps> = ({ animateIn }) => {
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
        className="text-4xl font-bold text-white mb-6"
      >
        Introduction:
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <p className="text-xl text-gray-300 mb-6">
          Next-word prediction is an{" "}
          <span className="text-purple-400 font-medium">
            AI-powered language modeling technique
          </span>{" "}
          that anticipates the most probable subsequent word in a text sequence
          based on context. It's the backbone of modern text-based technologies
          like:
        </p>

        <ul className="space-y-4 mt-6">
          <motion.li
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: animateIn ? 1 : 0, x: animateIn ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="text-yellow-400 text-xl">👍</span>
            <span className="text-xl text-gray-200">
              <span className="text-purple-300 font-medium">Autocomplete</span>{" "}
              (Gmail, smartphones)
            </span>
          </motion.li>

          <motion.li
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: animateIn ? 1 : 0, x: animateIn ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span className="text-blue-400 text-xl">🤖</span>
            <span className="text-xl text-gray-200">
              <span className="text-purple-300 font-medium">
                Chatbots & Virtual Assistants
              </span>{" "}
              (ChatGPT, Siri)
            </span>
          </motion.li>

          <motion.li
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: animateIn ? 1 : 0, x: animateIn ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <span className="text-green-400 text-xl">🔍</span>
            <span className="text-xl text-gray-200">
              <span className="text-purple-300 font-medium">
                Search Engines
              </span>{" "}
              (Google's query suggestions)
            </span>
          </motion.li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default DetailedIntroductionSlide;
