import { motion } from "framer-motion";
import { Flame } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  return (
    <motion.div
      className="mobile-container flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.4 }}
      >
        <div className="w-28 h-28 gradient-primary rounded-3xl flex items-center justify-center animate-pulse-glow">
          <Flame size={56} className="text-primary-foreground" />
        </div>
        <motion.div
          className="absolute inset-0 gradient-primary rounded-3xl opacity-30 blur-2xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      <motion.h1
        className="text-4xl font-extrabold mt-8 text-gradient"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Spark
      </motion.h1>

      <motion.p
        className="text-muted-foreground mt-3 text-center text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Connect Nearby. Match Instantly.
      </motion.p>

      <motion.button
        className="mt-12 gradient-primary text-primary-foreground px-10 py-3.5 rounded-2xl font-semibold text-sm glow-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onComplete}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default SplashScreen;
