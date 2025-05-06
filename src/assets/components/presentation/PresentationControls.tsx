import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";

interface PresentationControlsProps {
  currentSlide: number;
  totalSlides: number;
  prevSlide: () => void;
  nextSlide: () => void;
  setSlide: (index: number) => void;
}

const PresentationControls: React.FC<PresentationControlsProps> = ({
  currentSlide,
  totalSlides,
  prevSlide,
  nextSlide,
  setSlide,
}) => {
  return (
    <div className="flex justify-between items-center mt-12">
      <Button
        variant="outline"
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="border-white/30 text-white hover:bg-white/10"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Previous
      </Button>

      <div className="flex space-x-2">
        {[...Array(totalSlides)].map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === currentSlide ? "bg-purple-500" : "bg-gray-400/30"
            }`}
            onClick={() => setSlide(i)}
          />
        ))}
      </div>

      <Button
        variant="outline"
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
        className="border-white/30 text-white hover:bg-white/10"
      >
        Next
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default PresentationControls;
