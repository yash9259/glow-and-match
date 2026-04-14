import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Sparkles, MapPin, Heart, X, Star, Brain, Zap, RefreshCw } from "lucide-react";
import { profiles } from "@/data/dummyData";

interface AIMatchScreenProps {
  onBack: () => void;
  onChat: (id: number) => void;
}

const aiMatchProfiles = [
  {
    ...profiles[0],
    matchScore: 95,
    aiReason: "You both love photography, yoga, and coffee. She's only 2km away — perfect for a spontaneous coffee date! ☕",
    sharedInterests: ["Photography", "Yoga", "Coffee"],
    compatibility: { interests: 92, location: 98, lifestyle: 94 },
  },
  {
    ...profiles[2],
    matchScore: 88,
    aiReason: "Your love for nightlife and art aligns perfectly. She's super close at 1km — and she's online right now! 🎨",
    sharedInterests: ["Art", "Nightlife", "Dancing"],
    compatibility: { interests: 85, location: 99, lifestyle: 80 },
  },
  {
    ...profiles[3],
    matchScore: 82,
    aiReason: "Both fitness enthusiasts who enjoy nature. Her meditation practice complements your interests perfectly 🧘",
    sharedInterests: ["Fitness", "Nature"],
    compatibility: { interests: 78, location: 90, lifestyle: 88 },
  },
  {
    ...profiles[1],
    matchScore: 79,
    aiReason: "Shared passion for hiking and cooking. She loves reading too — great conversation starter! 📚",
    sharedInterests: ["Hiking", "Cooking", "Reading"],
    compatibility: { interests: 82, location: 75, lifestyle: 76 },
  },
];

const AIMatchScreen = ({ onBack, onChat }: AIMatchScreenProps) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set());
  const [passedIds, setPassedIds] = useState<Set<number>>(new Set());
  const [showDetail, setShowDetail] = useState(false);

  const availableProfiles = aiMatchProfiles.filter(
    p => !likedIds.has(p.id) && !passedIds.has(p.id)
  );

  const currentProfile = availableProfiles[selectedIdx] || null;

  const handleLike = (id: number) => {
    setLikedIds(prev => new Set(prev).add(id));
    setSelectedIdx(0);
    setShowDetail(false);
  };

  const handlePass = (id: number) => {
    setPassedIds(prev => new Set(prev).add(id));
    setSelectedIdx(0);
    setShowDetail(false);
  };

  const resetAll = () => {
    setLikedIds(new Set());
    setPassedIds(new Set());
    setSelectedIdx(0);
  };

  return (
    <div className="mobile-container flex flex-col h-screen">
      {/* Header */}
      <div className="glass-strong px-4 py-3 flex items-center gap-3 z-10">
        <button onClick={onBack} className="w-9 h-9 glass rounded-full flex items-center justify-center">
          <ChevronLeft size={18} />
        </button>
        <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
          <Brain size={22} className="text-primary-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm">AI Top Picks</h3>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <Sparkles size={10} className="text-primary" /> Based on your profile
          </p>
        </div>
        {availableProfiles.length === 0 && (
          <button onClick={resetAll} className="glass px-3 py-1.5 rounded-full text-xs flex items-center gap-1">
            <RefreshCw size={12} /> Reset
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 py-4 space-y-4">
        {/* AI Insight Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary/10 border border-primary/20 rounded-2xl p-4 flex items-start gap-3"
        >
          <Sparkles size={20} className="text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-foreground">AI-Curated Matches</p>
            <p className="text-xs text-muted-foreground mt-1">
              Our AI analyzed your interests, location, and activity to find your most compatible matches today.
            </p>
          </div>
        </motion.div>

        {availableProfiles.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <div className="w-20 h-20 mx-auto gradient-primary rounded-full flex items-center justify-center mb-4">
              <Heart size={32} className="text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg">All Caught Up!</h3>
            <p className="text-sm text-muted-foreground mt-2">You've reviewed all AI picks. Check back later for new suggestions!</p>
          </motion.div>
        ) : (
          <>
            {/* Profile Cards */}
            {availableProfiles.map((profile, i) => (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl overflow-hidden"
              >
                {/* Image + Score */}
                <div className="relative">
                  <img src={profile.images[0]} alt={profile.name} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Match Score Badge */}
                  <div className="absolute top-3 right-3 glass-strong px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Zap size={14} className="text-primary" />
                    <span className="text-sm font-bold text-primary">{profile.matchScore}%</span>
                  </div>

                  {/* Info overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-white font-bold text-xl">
                          {profile.name}, {profile.age}
                        </h3>
                        <p className="text-white/70 text-xs flex items-center gap-1 mt-1">
                          <MapPin size={12} /> {profile.distance}
                        </p>
                      </div>
                      {profile.verified && (
                        <div className="bg-blue-500 px-2 py-0.5 rounded-full text-[10px] text-white font-medium">Verified ✓</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* AI Reason */}
                <div className="p-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <Brain size={16} className="text-primary shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground leading-relaxed">{profile.aiReason}</p>
                  </div>

                  {/* Shared Interests */}
                  <div className="flex flex-wrap gap-1.5">
                    {profile.sharedInterests.map(interest => (
                      <span key={interest} className="bg-primary/10 text-primary text-[10px] px-2.5 py-1 rounded-full font-medium">
                        {interest}
                      </span>
                    ))}
                  </div>

                  {/* Compatibility Bars */}
                  <div className="space-y-2">
                    {Object.entries(profile.compatibility).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        <span className="text-[10px] text-muted-foreground w-16 capitalize">{key}</span>
                        <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full gradient-primary rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                          />
                        </div>
                        <span className="text-[10px] font-medium w-8 text-right">{value}%</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-1">
                    <button
                      onClick={() => handlePass(profile.id)}
                      className="flex-1 glass py-2.5 rounded-xl flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X size={18} />
                      <span className="text-sm font-medium">Pass</span>
                    </button>
                    <button
                      onClick={() => handleLike(profile.id)}
                      className="flex-1 gradient-primary py-2.5 rounded-xl flex items-center justify-center gap-2 text-primary-foreground"
                    >
                      <Heart size={18} />
                      <span className="text-sm font-medium">Like</span>
                    </button>
                    <button
                      onClick={() => onChat(profile.id)}
                      className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Star size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AIMatchScreen;
