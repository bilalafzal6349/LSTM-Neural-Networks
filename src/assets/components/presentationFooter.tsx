import React from "react";
import { Github, Brain, CircuitBoard } from "lucide-react";

const PresentationFooter = () => {
  return (
    <footer className="py-6 border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Brain className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-white font-semibold">
              LSTM Word Predictor
            </span>
          </div>

          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} LSTM Word Predictor. All rights
            reserved.
          </div>

          <div className="flex items-center mt-4 md:mt-0">
            <CircuitBoard className="h-5 w-5 text-purple-400 mr-1" />
            <span className="text-gray-400 text-sm mr-4">
              Powered by Arezal Group of Technologies
            </span>
            <a
              href="https://github.com/bilalafzal6349/LSTM-Neural-Networks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PresentationFooter;
