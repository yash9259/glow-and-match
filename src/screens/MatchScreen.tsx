import { motion } from "framer-motion";
import { MessageCircle, Shuffle } from "lucide-react";

interface MatchScreenProps {
  onMessage: () => void;
  onKeepSwiping: () => void;
}

const MatchScreen = ({ onMessage, onKeepSwiping }: MatchScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h1
        className="text-5xl font-extrabold text-gradient mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
      >
        It's a Match!
      </motion.h1>

      <motion.p
        className="text-muted-foreground mb-10 text-center text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        You and Sophia liked each other
      </motion.p>

      <div className="flex items-center gap-6 mb-12">
        <motion.div
          className="relative"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.3 }}
        >
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
            alt="Match"
            className="w-28 h-28 rounded-full object-cover border-2 border-primary"
          />
          <div className="absolute inset-0 rounded-full gradient-primary opacity-20" />
        </motion.div>

        <motion.div
          className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center animate-pulse-glow"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-xl">💕</span>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.3 }}
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
            alt="You"
            className="w-28 h-28 rounded-full object-cover border-2 border-accent"
          />
          <div className="absolute inset-0 rounded-full gradient-warm opacity-20" />
        </motion.div>
      </div>

      <motion.div
        className="w-full space-y-3"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <button
          onClick={onMessage}
          className="w-full gradient-primary text-primary-foreground py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 glow-primary"
        >
          <MessageCircle size={20} /> Send a Message
        </button>
        <button
          onClick={onKeepSwiping}
          className="w-full glass text-foreground py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
        >
          <Shuffle size={20} /> Keep Swiping
        </button>
      </motion.div>
    </motion.div>
  );
};

export default MatchScreen;
