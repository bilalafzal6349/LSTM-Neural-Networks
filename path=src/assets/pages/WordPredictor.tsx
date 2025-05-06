import React, { useState, useRef, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { toast } from "../hooks/use-toast";
import Navbar from "../components/Navbar";
// … other imports …

export default function WordPredictor() {
  const [inputText, setInputText] = useState("");
  const [prediction, setPrediction] = useState<string>("");

  // 1) call your HTTP POST /predict endpoint
  const fetchNextWord = async (text: string): Promise<string> => {
    const res = await fetch("http://localhost:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const { next_word } = await res.json();
    return next_word;
  };

  // 2) replace your mock handlePredict
  const handlePredict = async () => {
    try {
      const next = await fetchNextWord(inputText);
      setPrediction(next);
      toast({
        title: "Prediction Generated",
        description: `Model suggests “${next}”`,
      });
    } catch (err: any) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Prediction Error",
        description: err.message || "Something went wrong",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="…">
        {/* your input & suggestion UI stays the same */}
        <Input
          placeholder="Enter your text here…"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="…"
        />
        <Button onClick={handlePredict} className="…">
          Predict Next Word
        </Button>

        {prediction && (
          <div className="…">
            <h2>Predicted Next Word:</h2>
            <p>{prediction}</p>
          </div>
        )}
      </div>
    </>
  );
}
