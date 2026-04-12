import { motion } from "framer-motion";
import { Zap, Clock } from "lucide-react";

interface BoostScreenProps {
  onBack: () => void;
}

const BoostScreen = ({ onBack }: BoostScreenProps) => {
  return (
    <div className="mobile-container px-6 py-8 flex flex-col items-center justify-center">
      <motion.div
        className="relative mb-8"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-28 h-28 gradient-neon rounded-full flex items-center justify-center glow-neon">
          <Zap size={48} className="text-primary-foreground" />
        </div>
        <motion.div
          className="absolute inset-0 gradient-neon rounded-full opacity-30 blur-3xl"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      <h1 className="text-3xl font-extrabold text-gradient-neon mb-2">Boost Profile</h1>
      <p className="text-muted-foreground text-center text-sm mb-8 max-w-xs">
        Be the top profile in your area for 30 minutes and get up to 10x more views
      </p>

      {/* Timer preview */}
      <div className="glass rounded-2xl p-6 w-full mb-8 text-center">
        <Clock size={20} className="text-neon mx-auto mb-2" />
        <p className="text-3xl font-bold text-foreground mb-1">30:00</p>
        <p className="text-xs text-muted-foreground">Boost duration</p>
      </div>

      {/* Stats preview */}
      <div className="grid grid-cols-3 gap-3 w-full mb-8">
        {[
          { label: "Views", value: "10x" },
          { label: "Matches", value: "3x" },
          { label: "Likes", value: "5x" },
        ].map((stat) => (
          <div key={stat.label} className="glass rounded-2xl p-3 text-center">
            <p className="text-lg font-bold text-gradient-neon">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <button className="w-full gradient-neon text-primary-foreground py-4 rounded-2xl font-semibold glow-neon">
        Boost Now — ₹99
      </button>
      <button onClick={onBack} className="mt-3 text-muted-foreground text-sm">
        Maybe later
      </button>
    </div>
  );
};

export default BoostScreen;
