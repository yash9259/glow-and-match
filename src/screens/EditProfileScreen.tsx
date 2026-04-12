import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Plus, ChevronLeft, Eye, EyeOff } from "lucide-react";
import { interestOptions } from "@/data/dummyData";

interface EditProfileScreenProps {
  onBack: () => void;
}

const EditProfileScreen = ({ onBack }: EditProfileScreenProps) => {
  const [name, setName] = useState("Alex");
  const [bio, setBio] = useState("Coffee addict ☕ | Explorer 🌍");
  const [selectedInterests, setSelectedInterests] = useState(["Photography", "Travel", "Coffee", "Music"]);
  const [showProfile, setShowProfile] = useState(true);
  const [showDistance, setShowDistance] = useState(true);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  return (
    <div className="mobile-container px-6 py-4 overflow-y-auto scrollbar-hide safe-bottom">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="w-10 h-10 glass rounded-full flex items-center justify-center">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-xl font-bold">Edit Profile</h1>
      </div>

      {/* Photos */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=260&fit=crop",
          "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=200&h=260&fit=crop",
          null, null, null, null,
        ].map((img, i) => (
          <div
            key={i}
            className={`aspect-[3/4] rounded-2xl overflow-hidden relative ${
              img ? "" : "border-2 border-dashed border-border flex items-center justify-center bg-secondary/30"
            }`}
          >
            {img ? (
              <>
                <img src={img} alt="" className="w-full h-full object-cover" />
                <div className="absolute bottom-1 right-1 w-6 h-6 gradient-primary rounded-full flex items-center justify-center">
                  <Camera size={12} className="text-primary-foreground" />
                </div>
              </>
            ) : (
              <Plus size={20} className="text-muted-foreground" />
            )}
          </div>
        ))}
      </div>

      {/* Fields */}
      <div className="space-y-4 mb-8">
        <div>
          <label className="text-xs font-semibold text-muted-foreground mb-1 block">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full glass rounded-2xl px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-muted-foreground mb-1 block">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={3}
            className="w-full glass rounded-2xl px-4 py-3 text-foreground outline-none resize-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Interests */}
      <h3 className="text-sm font-semibold mb-3">Interests</h3>
      <div className="flex flex-wrap gap-2 mb-8">
        {interestOptions.slice(0, 16).map((interest) => (
          <button
            key={interest}
            onClick={() => toggleInterest(interest)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              selectedInterests.includes(interest)
                ? "gradient-primary text-primary-foreground"
                : "glass text-muted-foreground"
            }`}
          >
            {interest}
          </button>
        ))}
      </div>

      {/* Visibility */}
      <h3 className="text-sm font-semibold mb-3">Visibility</h3>
      <div className="space-y-3 mb-8">
        {[
          { label: "Show my profile", value: showProfile, toggle: () => setShowProfile(!showProfile) },
          { label: "Show distance", value: showDistance, toggle: () => setShowDistance(!showDistance) },
        ].map((item) => (
          <div key={item.label} className="glass rounded-2xl px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {item.value ? <Eye size={18} className="text-primary" /> : <EyeOff size={18} className="text-muted-foreground" />}
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            <button
              onClick={item.toggle}
              className={`w-12 h-7 rounded-full transition-all relative ${item.value ? "gradient-primary" : "bg-secondary"}`}
            >
              <div className={`absolute top-1 w-5 h-5 bg-foreground rounded-full transition-all ${item.value ? "left-6" : "left-1"}`} />
            </button>
          </div>
        ))}
      </div>

      <button className="w-full gradient-primary text-primary-foreground py-4 rounded-2xl font-semibold glow-primary">
        Save Changes
      </button>
    </div>
  );
};

export default EditProfileScreen;
