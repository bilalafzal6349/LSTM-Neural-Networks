import React from "react";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import ContactOfTeam from "../components/presentation/ContactOfTeam";
import PresentationFooter from "../components/presentationFooter";

const Documentation = () => {
  const documentationSections = [
    {
      title: "Getting Started",
      content:
        "The LSTM Word Predictor is a machine learning-powered text prediction tool. To begin, simply start typing in the text area on the Word Predictor page, and the model will suggest the next word based on your input.",
    },
    {
      title: "How It Works",
      content:
        "Our word predictor utilizes Long Short-Term Memory (LSTM) networks, a type of recurrent neural network architecture specifically designed for sequence prediction tasks. The model analyzes patterns in text data to predict likely next words based on context.",
    },
    {
      title: "Model Architecture",
      content:
        "The core of our system is built on a multi-layered LSTM architecture with embedding layers to represent words as dense vectors. The model processes sequences of words and outputs probability distributions for potential next words.",
    },
    {
      title: "Training Data",
      content:
        "Our model was trained on a diverse corpus of text including books, articles, and web content, comprising over 5 million sentences to ensure broad coverage of language patterns and vocabulary.",
    },
    {
      title: "Performance Metrics",
      content:
        "The current model achieves 67% accuracy in top-3 predictions, meaning the correct word appears in the top three suggestions approximately two-thirds of the time. The average response time is under 100ms.",
    },
    {
      title: "API Integration",
      content:
        "For developers looking to integrate our word prediction capability into their applications, we offer a REST API with simple endpoints for text prediction. Contact our team for API documentation and access keys.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <AnimatedBackground />
      <div className="container mx-auto px-4 sm:px-6 py-20 pt-24 md:pt-28">
        <h1 className="text-4xl font-bold text-white mb-8">Documentation</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {documentationSections.map((section, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-lg border-none hover:bg-white/15 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-lg border-none hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  How accurate is the word prediction?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  The accuracy varies depending on the context and the domain of
                  text being processed. For general text, our model achieves
                  approximately 67% accuracy for top-3 predictions. Performance
                  is higher for common phrases and lower for specialized
                  technical content.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-none hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Can I train the model on my own text data?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Currently, custom training is available for enterprise clients
                  only. Please contact our team if you're interested in a model
                  fine-tuned on your specific text corpus.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-none hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Is the model available in languages other than English?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  At present, we support English only, but we're actively
                  working on extending support to Spanish, French, and German in
                  our next release scheduled for Q3 2025.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <PresentationFooter />
    </div>
  );
};

export default Documentation;
