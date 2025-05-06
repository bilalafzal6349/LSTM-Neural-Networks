import React from "react";
import { Brain, ChartLine, CircuitBoard } from "lucide-react";
import { motion } from "framer-motion";

interface SlideProps {
  animateIn: boolean;
}

const HowItWorksSlide: React.FC<SlideProps> = ({ animateIn }) => {
  const steps = [
    {
      title: "Input Processing",
      icon: <CircuitBoard className="h-10 w-10 text-purple-400" />,
      description:
        "Text input is tokenized and processed into numerical vectors that the neural network can understand.",
    },
    {
      title: "Context Learning",
      icon: <Brain className="h-10 w-10 text-blue-400" />,
      description:
        "The LSTM model analyzes patterns in word sequences to understand context and relationships between words.",
    },
    {
      title: "Prediction Generation",
      icon: <ChartLine className="h-10 w-10 text-purple-400" />,
      description:
        "Based on learned patterns, the model generates probability distributions for the most likely next words.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
      transition={{ duration: 0.7 }}
      className="space-y-6 max-w-4xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-white mb-6">How It Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
            className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-6 rounded-xl backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="mt-8 p-5 bg-purple-900/20 border border-purple-500/30 rounded-xl"
      >
        <p className="text-center text-gray-300">
          As you type, the model continuously recalculates predictions based on
          your latest input, offering increasingly accurate suggestions the more
          context it has.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default HowItWorksSlide;
