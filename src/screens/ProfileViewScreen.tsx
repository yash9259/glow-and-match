import { motion } from "framer-motion";
import { MapPin, BadgeCheck, Heart, MessageCircle, Shield, ChevronLeft } from "lucide-react";
import { profiles } from "@/data/dummyData";

interface ProfileViewScreenProps {
  onBack: () => void;
  onChat: () => void;
  profileId?: number;
}

const ProfileViewScreen = ({ onBack, onChat, profileId }: ProfileViewScreenProps) => {
  const profile = profiles.find(p => p.id === (profileId || 1)) || profiles[0];
  const [imgIdx, setImgIdx] = useState(0);

  return (
    <div className="mobile-container overflow-y-auto scrollbar-hide safe-bottom">
      {/* Image Gallery */}
      <div className="relative h-[55vh]">
        <img
          src={profile.images[imgIdx]}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 flex">
          {profile.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setImgIdx(i)}
              className="flex-1 h-full absolute inset-0"
              style={{ left: `${(i / profile.images.length) * 100}%`, width: `${100 / profile.images.length}%` }}
            />
          ))}
        </div>
        <div className="absolute top-3 left-0 right-0 flex justify-center gap-1 px-4">
          {profile.images.map((_, i) => (
            <div key={i} className={`h-1 flex-1 rounded-full ${i === imgIdx ? "bg-foreground" : "bg-foreground/30"}`} />
          ))}
        </div>
        <button onClick={onBack} className="absolute top-12 left-4 w-10 h-10 glass rounded-full flex items-center justify-center">
          <ChevronLeft size={20} className="text-foreground" />
        </button>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Info */}
      <div className="px-6 -mt-8 relative">
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-3xl font-extrabold">{profile.name}, {profile.age}</h1>
          {profile.verified && <BadgeCheck size={22} className="text-neon" />}
        </div>
        <p className="text-muted-foreground text-sm flex items-center gap-1 mb-4">
          <MapPin size={14} /> {profile.distance}
          {profile.online && <span className="ml-2 w-2 h-2 bg-green-400 rounded-full inline-block" />}
          {profile.online && <span className="text-green-400 text-xs">Online</span>}
        </p>

        <p className="text-foreground/80 text-sm mb-6">{profile.bio}</p>

        <h3 className="text-sm font-semibold mb-3">Interests</h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {profile.interests.map((interest) => (
            <span key={interest} className="glass px-4 py-2 rounded-full text-xs font-medium text-foreground">
              {interest}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mb-6">
          <button className="flex-1 gradient-primary text-primary-foreground py-3.5 rounded-2xl font-semibold flex items-center justify-center gap-2 glow-primary">
            <Heart size={18} /> Like
          </button>
          <button onClick={onChat} className="flex-1 glass text-foreground py-3.5 rounded-2xl font-semibold flex items-center justify-center gap-2">
            <MessageCircle size={18} /> Message
          </button>
        </div>
        <button className="w-full glass text-destructive py-3 rounded-2xl text-sm font-medium flex items-center justify-center gap-2">
          <Shield size={16} /> Report & Block
        </button>
      </div>
    </div>
  );
};

import { useState } from "react";
export default ProfileViewScreen;
