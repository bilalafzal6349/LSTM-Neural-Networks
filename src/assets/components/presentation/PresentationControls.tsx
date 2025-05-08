import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useIsMobile } from "../../hooks/use-mobile";

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
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center gap-4 mt-8 md:mt-12 px-2">
      {/* Slide numbering buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
        {[...Array(totalSlides)].map((_, i) => (
          <button
            key={i}
            className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center  justify-center transition-colors duration-300 ${
              i === currentSlide
                ? "bg-purple-500 text-white"
                : "bg-gray-400/30 text-white/70 hover:bg-gray-400/50"
            }`}
            onClick={() => setSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          >
            <span className="text-xs md:text-sm">{i + 1}</span>
          </button>
        ))}
      </div>

      {/* Navigation buttons - now positioned below the slide numbers */}
      <div className="flex justify-center gap-4 w-full">
        <Button
          variant="outline"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="border-white/30 bg-transparent  text-white hover:bg-white/10"
          size="sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>

        <Button
          variant="outline"
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="border-white/30 bg-transparent text-white hover:bg-white/10"
          size="sm"
        >
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PresentationControls;
