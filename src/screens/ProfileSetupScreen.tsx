import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Camera, ArrowRight } from "lucide-react";
import { interestOptions } from "@/data/dummyData";

interface ProfileSetupScreenProps {
  onComplete: () => void;
}

const ProfileSetupScreen = ({ onComplete }: ProfileSetupScreenProps) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["Photography", "Travel", "Music"]);
  const [gender, setGender] = useState("Woman");

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  return (
    <div className="mobile-container px-6 py-8 overflow-y-auto scrollbar-hide safe-bottom">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {/* Progress */}
        <div className="flex gap-1.5 mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className={`h-1 flex-1 rounded-full ${s <= 3 ? "gradient-primary" : "bg-secondary"}`} />
          ))}
        </div>

        <h1 className="text-2xl font-extrabold mb-1">Create your profile</h1>
        <p className="text-muted-foreground text-sm mb-8">Let others know who you are</p>

        {/* Photo Upload */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`aspect-[3/4] rounded-2xl flex items-center justify-center border-2 border-dashed transition-colors ${
                i === 0
                  ? "border-primary bg-primary/10"
                  : "border-border bg-secondary/50"
              }`}
            >
              {i === 0 ? (
                <Camera size={24} className="text-primary" />
              ) : (
                <Plus size={20} className="text-muted-foreground" />
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="space-y-4 mb-8">
          <input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full glass rounded-2xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary transition-all"
          />
          <input
            placeholder="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full glass rounded-2xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary transition-all"
          />
          <textarea
            placeholder="Write a short bio..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={3}
            className="w-full glass rounded-2xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground outline-none resize-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>

        {/* Gender */}
        <p className="text-sm font-semibold mb-3">I am a</p>
        <div className="flex gap-3 mb-8">
          {["Woman", "Man", "Other"].map((g) => (
            <button
              key={g}
              onClick={() => setGender(g)}
              className={`flex-1 py-3 rounded-2xl text-sm font-medium transition-all ${
                gender === g
                  ? "gradient-primary text-primary-foreground glow-primary"
                  : "glass text-muted-foreground"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Interests */}
        <p className="text-sm font-semibold mb-3">Interests</p>
        <div className="flex flex-wrap gap-2 mb-10">
          {interestOptions.map((interest) => (
            <button
              key={interest}
              onClick={() => toggleInterest(interest)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedInterests.includes(interest)
                  ? "gradient-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {interest}
            </button>
          ))}
        </div>

        <button
          onClick={onComplete}
          className="w-full gradient-primary text-primary-foreground py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 glow-primary"
        >
          Continue <ArrowRight size={18} />
        </button>
      </motion.div>
    </div>
  );
};

export default ProfileSetupScreen;
