import { motion } from "framer-motion";
import { Heart, Settings, BadgeCheck } from "lucide-react";

interface LikesScreenProps {
  onNavigate: (screen: string) => void;
}

const likedBy = [
  { id: 1, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=400&fit=crop", name: "Luna", age: 22, blurred: true },
  { id: 2, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=400&fit=crop", name: "Nina", age: 24, blurred: true },
  { id: 3, image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=300&h=400&fit=crop", name: "Zara", age: 23, blurred: true },
  { id: 4, image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&h=400&fit=crop", name: "Iris", age: 25, blurred: false },
];

const LikesScreen = ({ onNavigate }: LikesScreenProps) => {
  return (
    <div className="mobile-container px-4 pt-6 safe-bottom">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Likes</h1>
        <span className="text-sm text-muted-foreground">4 people liked you</span>
      </div>

      {/* Upgrade banner */}
      <button
        onClick={() => onNavigate("premium")}
        className="w-full gradient-primary rounded-2xl p-4 flex items-center gap-3 mb-6 glow-primary"
      >
        <Heart size={24} className="text-primary-foreground" />
        <div className="text-left flex-1">
          <p className="text-sm font-bold text-primary-foreground">See who likes you</p>
          <p className="text-xs text-primary-foreground/70">Upgrade to Premium to reveal</p>
        </div>
      </button>

      <div className="grid grid-cols-2 gap-3">
        {likedBy.map((person, i) => (
          <motion.div
            key={person.id}
            className="relative rounded-2xl overflow-hidden aspect-[3/4]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <img
              src={person.image}
              alt={person.name}
              className={`w-full h-full object-cover ${person.blurred ? "blur-lg" : ""}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <p className="font-semibold text-sm text-foreground">{person.name}, {person.age}</p>
            </div>
            {person.blurred && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass rounded-xl px-3 py-2">
                  <Heart size={16} className="text-primary" />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LikesScreen;
