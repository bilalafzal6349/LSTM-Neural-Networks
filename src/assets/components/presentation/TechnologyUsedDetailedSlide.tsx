import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Brain } from "lucide-react";

interface SlideProps {
  animateIn: boolean;
}

const TechnologyUsedDetailedSlide: React.FC<SlideProps> = ({ animateIn }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
      transition={{ duration: 0.7 }}
      className="space-y-6 max-w-4xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : -20 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl font-bold text-white mb-6"
      >
        Technology Used
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-6 rounded-xl border border-purple-500/30"
        >
          <div className="flex items-center mb-4">
            <Code className="h-6 w-6 text-purple-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">Frontend</h3>
          </div>
          <ul className="space-y-3">
            <li className="text-gray-300">• React with TypeScript</li>
            <li className="text-gray-300">• Tailwind CSS for styling</li>
            <li className="text-gray-300">• Framer Motion for animation</li>
            <li className="text-gray-300">• Shadcn UI components</li>
            <li className="text-gray-300">• React Router for navigation</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-6 rounded-xl border border-purple-500/30"
        >
          <div className="flex items-center mb-4">
            <Server className="h-6 w-6 text-blue-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">Backend</h3>
          </div>
          <ul className="space-y-3">
            <li className="text-gray-300">• Fast API backend service</li>
            <li className="text-gray-300">• Regex for cleaning of data </li>
            <li className="text-gray-300">• NLTK library for tokenization</li>
            <li className="text-gray-300">• TensorFlow for data processing</li>

            <li className="text-gray-300">• RESTful API endpoints</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-6 rounded-xl border border-purple-500/30 col-span-1 md:col-span-3"
        >
          <div className="flex items-center mb-4">
            <Brain className="h-6 w-6 text-purple-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">ML Pipeline</h3>
          </div>

          <motion.div
            className="grid grid-cols-5 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: animateIn ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            {[
              "Data Collection",
              "Preprocessing",
              "Model Training",
              "Evaluation",
              "Deployment",
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: animateIn ? 1 : 0.8 }}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                  className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500/70 to-blue-500/70 flex items-center justify-center mb-2"
                >
                  <span className="text-white font-bold">{index + 1}</span>
                </motion.div>
                <p className="text-center text-sm text-gray-300">{step}</p>
                {index < 4 && (
                  <div className="hidden md:block h-0.5 w-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 mt-2"></div>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TechnologyUsedDetailedSlide;
