import React, { useState, useRef, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { toast } from "../hooks/use-toast";
import Navbar from "../components/Navbar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";

const WordPredictor = () => {
  const [inputText, setInputText] = useState("");
  const [prediction, setPrediction] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  // Mock suggestions based on current input
  const generateSuggestions = (input: string) => {
    // This is a mock function - in a real app, you'd call your LSTM API
    const mockWords = {
      the: ["quick", "best", "most", "great"],
      i: ["am", "want", "need", "think"],
      it: ["is", "was", "will", "could"],
      // Add more word associations as needed
    };

    const lastWord = input.split(" ").pop()?.toLowerCase() || "";
    return mockWords[lastWord as keyof typeof mockWords] || [];
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setInputText(newText);
    const newSuggestions = generateSuggestions(newText);
    setSuggestions(newSuggestions);
    setOpen(newSuggestions.length > 0);
  };

  const handleSelectSuggestion = (word: string) => {
    const words = inputText.split(" ");
    words.pop(); // Remove the last word
    const newText = [...words, word].join(" ") + " ";
    setInputText(newText);
    setOpen(false);
    // Generate new suggestions for the selected word
    setSuggestions(generateSuggestions(newText));
  };

  const handlePredict = () => {
    // This is a mock prediction - in a real app, you'd call your LSTM API
    const mockPredictions = ["neural", "network", "learning", "data", "model"];
    const randomPrediction =
      mockPredictions[Math.floor(Math.random() * mockPredictions.length)];
    setPrediction(randomPrediction);
    toast({
      title: "Prediction Generated",
      description: "LSTM network has processed your input",
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-6 py-20 pt-28">
          <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                LSTM Word Predictor
              </h1>
              <p className="text-gray-300 mb-8">
                Start typing and let our LSTM neural network predict the next
                word in your sequence.
              </p>
            </div>
            <div className="space-y-6">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <div className="relative">
                    <Input
                      placeholder="Enter your text here..."
                      value={inputText}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-white/10 text-white placeholder-gray-400 border-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </PopoverTrigger>
                {suggestions.length > 0 && (
                  <PopoverContent className="w-[320px] p-0" align="start">
                    <Command>
                      <CommandList>
                        <CommandGroup>
                          {suggestions.map((suggestion) => (
                            <CommandItem
                              key={suggestion}
                              onSelect={() =>
                                handleSelectSuggestion(suggestion)
                              }
                              className="cursor-pointer hover:bg-purple-100"
                            >
                              {suggestion}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                      <CommandEmpty>No suggestions found.</CommandEmpty>
                    </Command>
                  </PopoverContent>
                )}
              </Popover>
              <Button
                onClick={handlePredict}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6"
              >
                Predict Next Word
              </Button>
            </div>
            {prediction && (
              <div className="mt-8 p-6 bg-white/10 rounded-lg backdrop-blur-sm animate-fade-in">
                <h2 className="text-xl font-semibold text-white mb-2">
                  Predicted Next Word:
                </h2>
                <p className="text-2xl text-purple-300">{prediction}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WordPredictor;
