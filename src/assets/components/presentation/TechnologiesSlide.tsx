import React, { useState } from "react";
import { ArrowRight, Code, Server, Cpu, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";

interface SlideProps {
  animateIn: boolean;
}

const TechnologiesSlide: React.FC<SlideProps> = ({ animateIn }) => {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "ml">(
    "frontend"
  );

  const tabVariants = {
    active: {
      scale: 1.05,
      backgroundColor: "rgba(139, 92, 246, 0.3)",
      borderColor: "rgba(139, 92, 246, 0.5)",
      transition: { duration: 0.3 },
    },
    inactive: {
      scale: 1,
      backgroundColor: "rgba(30, 41, 59, 0.3)",
      borderColor: "rgba(139, 92, 246, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
      transition={{ duration: 0.7 }}
      className="space-y-6 max-w-4xl mx-auto"
    >
      <motion.h2
        className="text-4xl font-bold text-white mb-6 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : -20 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Technologies Powering LSTM Word Predictor
      </motion.h2>

      <motion.div
        className="flex justify-center gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.button
          onClick={() => setActiveTab("frontend")}
          className="px-6 py-3 rounded-lg border flex items-center gap-2"
          variants={tabVariants}
          animate={activeTab === "frontend" ? "active" : "inactive"}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Code className="h-5 w-5 text-purple-400" />
          <span className="text-white">Frontend</span>
        </motion.button>

        <motion.button
          onClick={() => setActiveTab("backend")}
          className="px-6 py-3 rounded-lg border flex items-center gap-2"
          variants={tabVariants}
          animate={activeTab === "backend" ? "active" : "inactive"}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Server className="h-5 w-5 text-blue-400" />
          <span className="text-white">Backend</span>
        </motion.button>

        <motion.button
          onClick={() => setActiveTab("ml")}
          className="px-6 py-3 rounded-lg border flex items-center gap-2"
          variants={tabVariants}
          animate={activeTab === "ml" ? "active" : "inactive"}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Brain className="h-5 w-5 text-purple-400" />
          <span className="text-white">ML Pipeline</span>
        </motion.button>
      </motion.div>

      {activeTab === "frontend" && (
        <motion.div
          key="frontend"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">
                  Frontend Technologies
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/20"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(139, 92, 246, 0.2)",
                  }}
                >
                  <h4 className="text-lg font-medium text-purple-300 mb-2">
                    React & TypeScript
                  </h4>
                  <p className="text-gray-300">
                    Component-based UI library with type safety for building
                    dynamic interfaces with confidence.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/20"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(139, 92, 246, 0.2)",
                  }}
                >
                  <h4 className="text-lg font-medium text-purple-300 mb-2">
                    TailwindCSS
                  </h4>
                  <p className="text-gray-300">
                    Utility-first CSS framework for rapidly building custom user
                    interfaces without leaving HTML.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/20"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(139, 92, 246, 0.2)",
                  }}
                >
                  <h4 className="text-lg font-medium text-purple-300 mb-2">
                    Framer Motion
                  </h4>
                  <p className="text-gray-300">
                    Production-ready animation library for React that makes
                    creating fluid animations simple.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/20"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(139, 92, 246, 0.2)",
                  }}
                >
                  <h4 className="text-lg font-medium text-purple-300 mb-2">
                    Shadcn UI
                  </h4>
                  <p className="text-gray-300">
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS for consistent interfaces.
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {activeTab === "backend" && (
        <motion.div
          key="backend"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Server className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">
                  Backend Technologies
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  className="bg-blue-900/30 rounded-lg p-4 border border-blue-500/20"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                  }}
                >
                  <h4 className="text-lg font-medium text-blue-300 mb-2">
                    FastAPI
                  </h4>
                  <p className="text-gray-300">
                    High-performance web framework for building APIs with Python
                    based on standard type hints.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-blue-900/30 rounded-lg p-4 border border-blue-500/20"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                  }}
                >
                  <h4 className="text-lg font-medium text-blue-300 mb-2">
                    PyTorch
                  </h4>
                  <p className="text-gray-300">
                    Open source machine learning framework with strong GPU
                    acceleration for neural network training.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-blue-900/30 rounded-lg p-4 border border-blue-500/20"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                  }}
                >
                  <h4 className="text-lg font-medium text-blue-300 mb-2">
                    TensorFlow
                  </h4>
                  <p className="text-gray-300">
                    End-to-end open source platform for machine learning with
                    comprehensive ecosystem of tools.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-blue-900/30 rounded-lg p-4 border border-blue-500/20"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                  }}
                >
                  <h4 className="text-lg font-medium text-blue-300 mb-2">
                    Hugging Face
                  </h4>
                  <p className="text-gray-300">
                    AI community platform providing transformers library for
                    state-of-the-art NLP models.
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {activeTab === "ml" && (
        <motion.div
          key="ml"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Cpu className="h-8 w-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">
                  ML Pipeline
                </h3>
              </div>

              <div className="relative">
                <div className="hidden sm:flex justify-between items-center mb-8 relative z-10">
                  {[
                    "Data Collection",
                    "Preprocessing",
                    "Model Training",
                    "Evaluation",
                    "Deployment",
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className="text-center relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <motion.div
                        className="h-14 w-14 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-2 border border-purple-500/50"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(139, 92, 246, 0.4)",
                        }}
                      >
                        <span className="text-white font-bold">
                          {index + 1}
                        </span>
                      </motion.div>
                      <p className="text-sm text-gray-300">{step}</p>
                    </motion.div>
                  ))}

                  {/* Connecting line */}
                  <div className="absolute h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 top-7 left-7 right-7 -z-10"></div>
                </div>

                {/* Mobile view */}
                <div className="sm:hidden space-y-4">
                  {[
                    "Data Collection",
                    "Preprocessing",
                    "Model Training",
                    "Evaluation",
                    "Deployment",
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <div className="h-10 w-10 bg-purple-500/30 rounded-full flex items-center justify-center border border-purple-500/50">
                        <span className="text-white font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-300">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="mt-8 bg-purple-900/20 p-5 rounded-lg border border-purple-500/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h4 className="text-lg font-medium text-purple-300 mb-2">
                  LSTM Architecture
                </h4>
                <p className="text-gray-300">
                  Our ML pipeline leverages Long Short-Term Memory neural
                  networks specifically optimized for sequence prediction tasks.
                  The model is trained on large text corpora to understand
                  language patterns and contextual relationships between words,
                  enabling accurate next-word predictions.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TechnologiesSlide;
