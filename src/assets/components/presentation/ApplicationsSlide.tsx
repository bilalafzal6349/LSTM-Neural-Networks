import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Smartphone } from "lucide-react";

interface SlideProps {
  animateIn: boolean;
}

const ApplicationsSlide: React.FC<SlideProps> = ({ animateIn }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
      transition={{ duration: 0.7 }}
      className="space-y-8 max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : -20 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex items-center justify-between"
      >
        <h2 className="text-4xl font-bold text-white">
          Real-World Applications
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-xl border border-purple-500/30 overflow-hidden"
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-900/50 rounded-full mr-3">
                <Mail className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Gmail Smart Compose
              </h3>
            </div>
            <p className="text-gray-300">
              Improves email writing speed via predictions.
            </p>
          </div>
          <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-xl border border-purple-500/30 overflow-hidden"
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-900/50 rounded-full mr-3">
                <MessageCircle className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Chatbot Response
              </h3>
            </div>
            <p className="text-gray-300">
              Generates context-aware replies in customer service bots.
            </p>
          </div>
          <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-xl border border-purple-500/30 overflow-hidden"
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-900/50 rounded-full mr-3">
                <Smartphone className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Mobile Keyboard
              </h3>
            </div>
            <p className="text-gray-300">
              Enhances typing speed and accuracy on smartphones.
            </p>
          </div>
          <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
        </motion.div>
      </div>

      <motion.div
        className="block md:hidden mt-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: animateIn ? 1 : 0, y: animateIn ? 0 : 30 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <img
          src="public/lovable-uploads/0d7bb698-ef24-4901-8b80-f25168c4e67d.png"
          alt="Mobile keyboard with next word prediction"
          className="w-full max-w-sm mx-auto rounded-xl shadow-lg border border-purple-500/30"
        />
      </motion.div>
    </motion.div>
  );
};

export default ApplicationsSlide;
