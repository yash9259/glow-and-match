import { useState } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { Heart, X, Star, MapPin, BadgeCheck } from "lucide-react";
import { profiles } from "@/data/dummyData";

interface SwipeScreenProps {
  onMatch: () => void;
}

const SwipeScreen = ({ onMatch }: SwipeScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);

  const profile = profiles[currentIndex % profiles.length];

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 120) {
      const isLike = info.offset.x > 0;
      if (isLike && currentIndex === 0) {
        setTimeout(onMatch, 300);
      }
      setCurrentIndex((prev) => prev + 1);
      setImageIndex(0);
    }
  };

  const handleAction = (action: "like" | "pass" | "superlike") => {
    if (action === "like" && currentIndex === 0) {
      setTimeout(onMatch, 300);
    }
    setCurrentIndex((prev) => prev + 1);
    setImageIndex(0);
  };

  return (
    <div className="mobile-container px-4 pt-4 safe-bottom">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-gradient">Discover</h1>
        <div className="flex gap-2">
          <div className="w-9 h-9 glass rounded-xl flex items-center justify-center">
            <MapPin size={16} className="text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Card Stack */}
      <div className="relative h-[65vh] w-full">
        {/* Background card */}
        <div className="absolute inset-2 glass rounded-3xl" />

        {/* Active card */}
        <motion.div
          key={currentIndex}
          className="absolute inset-0 rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing"
          style={{ x, rotate }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
          onDragEnd={handleDragEnd}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img
            src={profile.images[imageIndex]}
            alt={profile.name}
            className="w-full h-full object-cover"
          />

          {/* Image navigation dots */}
          <div className="absolute top-3 left-0 right-0 flex justify-center gap-1 px-4">
            {profile.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setImageIndex(i)}
                className={`h-1 flex-1 rounded-full transition-all ${
                  i === imageIndex ? "bg-foreground" : "bg-foreground/30"
                }`}
              />
            ))}
          </div>

          {/* Like/Nope labels */}
          <motion.div
            className="absolute top-20 left-6 border-4 border-green-400 rounded-xl px-4 py-2 rotate-[-20deg]"
            style={{ opacity: likeOpacity }}
          >
            <span className="text-green-400 text-3xl font-extrabold">LIKE</span>
          </motion.div>
          <motion.div
            className="absolute top-20 right-6 border-4 border-red-400 rounded-xl px-4 py-2 rotate-[20deg]"
            style={{ opacity: nopeOpacity }}
          >
            <span className="text-red-400 text-3xl font-extrabold">NOPE</span>
          </motion.div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

          {/* Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl font-bold text-foreground">{profile.name}, {profile.age}</h2>
              {profile.verified && <BadgeCheck size={20} className="text-neon" />}
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
              <MapPin size={14} /> {profile.distance}
            </p>
            <div className="flex gap-2 flex-wrap">
              {profile.interests.slice(0, 3).map((interest) => (
                <span key={interest} className="glass px-3 py-1 rounded-full text-xs text-foreground">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-5 mt-6">
        <button
          onClick={() => handleAction("pass")}
          className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-destructive/20 transition-all active:scale-90"
        >
          <X size={26} className="text-destructive" />
        </button>
        <button
          onClick={() => handleAction("superlike")}
          className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-neon/20 transition-all active:scale-90"
        >
          <Star size={22} className="text-neon" />
        </button>
        <button
          onClick={() => handleAction("like")}
          className="w-14 h-14 gradient-primary rounded-full flex items-center justify-center glow-primary active:scale-90 transition-all"
        >
          <Heart size={26} className="text-primary-foreground" />
        </button>
      </div>
    </div>
  );
};

export default SwipeScreen;
