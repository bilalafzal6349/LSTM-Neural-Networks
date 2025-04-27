import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-16 max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="space-y-6 animate-fade-in pt-28">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            LSTM Neural Networks
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Exploring the power of Long Short-Term Memory networks in artificial
            intelligence for enhanced sequential data processing and prediction
            capabilities.
          </p>
          <Link to="/word-predictor">
            <Button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* How it Works Section */}
        <div className="space-y-8 animate-fade-in-delay">
          <h2 className="text-3xl font-bold text-white">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-lg">
              <h3 className="text-xl font-semibold text-white mb-3">
                Text Processing
              </h3>
              <p className="text-gray-300">
                Input text is tokenized and processed into sequences that LSTM
                can understand.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-lg">
              <h3 className="text-xl font-semibold text-white mb-3">
                LSTM Analysis
              </h3>
              <p className="text-gray-300">
                Our neural network analyzes patterns in the text using memory
                cells to understand context.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-lg">
              <h3 className="text-xl font-semibold text-white mb-3">
                Word Prediction
              </h3>
              <p className="text-gray-300">
                Based on the learned patterns, the model predicts the most
                likely next word.
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="space-y-8 animate-fade-in-delay">
          <h2 className="text-3xl font-bold text-white">About</h2>
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-lg">
            <p className="text-gray-200 text-lg leading-relaxed">
              Our LSTM-based Next Word Predictor represents the cutting edge in
              natural language processing. By leveraging deep learning
              techniques, our model can understand context and patterns in text,
              making it capable of suggesting relevant and coherent word
              completions. This technology has applications in writing
              assistance, content creation, and intelligent text prediction
              systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
