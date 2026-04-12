import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { onboardingSlides } from "@/data/dummyData";
import { ChevronRight } from "lucide-react";

interface OnboardingScreenProps {
  onComplete: () => void;
}

const OnboardingScreen = ({ onComplete }: OnboardingScreenProps) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < onboardingSlides.length - 1) {
      setCurrent(current + 1);
    } else {
      onComplete();
    }
  };

  const slide = onboardingSlides[current];

  return (
    <div className="mobile-container flex flex-col items-center justify-between py-16 px-8">
      <button
        onClick={onComplete}
        className="self-end text-muted-foreground text-sm font-medium"
      >
        Skip
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="flex-1 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-32 h-32 glass rounded-[2rem] flex items-center justify-center mb-8 animate-float">
            <span className="text-6xl">{slide.icon}</span>
          </div>

          <h2 className="text-3xl font-extrabold text-gradient mb-2">{slide.title}</h2>
          <p className="text-foreground font-semibold mb-3">{slide.subtitle}</p>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{slide.description}</p>
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-col items-center gap-6 w-full">
        <div className="flex gap-2">
          {onboardingSlides.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 gradient-primary" : "w-1.5 bg-secondary"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-full gradient-primary text-primary-foreground py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 glow-primary"
        >
          {current === onboardingSlides.length - 1 ? "Let's Go" : "Next"}
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default OnboardingScreen;
