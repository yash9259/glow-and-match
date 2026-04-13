import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, BadgeCheck, Heart, MessageCircle, Shield, ChevronLeft, Settings, Briefcase, GraduationCap, Ruler, Wine, Languages, MapPinned } from "lucide-react";
import { profiles } from "@/data/dummyData";

interface ProfileViewScreenProps {
  onBack: () => void;
  onChat: () => void;
  onNavigate?: (screen: string) => void;
  profileId?: number;
}

const myProfile = {
  id: 99,
  name: "Alex",
  age: 25,
  distance: "",
  bio: "Coffee addict ☕ | Explorer 🌍 | Dog lover 🐕",
  images: [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600&h=800&fit=crop",
  ],
  interests: ["Photography", "Travel", "Coffee", "Music", "Hiking", "Cooking"],
  verified: true,
  online: true,
  details: {
    job: "Software Developer",
    company: "Tech Corp",
    education: "Stanford University",
    height: "5'11\" (180 cm)",
    drinking: "Socially",
    languages: ["English", "Spanish"],
    location: "San Francisco, CA",
    lookingFor: "Something serious",
    gender: "Male",
    zodiac: "♌ Leo",
  },
};

const ProfileViewScreen = ({ onBack, onChat, onNavigate, profileId }: ProfileViewScreenProps) => {
  const isOwnProfile = !profileId;
  const profile = isOwnProfile ? myProfile : (profiles.find(p => p.id === profileId) || profiles[0]);
  const [imgIdx, setImgIdx] = useState(0);

  return (
    <div className="mobile-container overflow-y-auto scrollbar-hide safe-bottom">
      <div className="relative h-[55vh]">
        <img src={profile.images[imgIdx]} alt={profile.name} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-0 right-0 flex justify-center gap-1 px-4">
          {profile.images.map((_, i) => (
            <button key={i} onClick={() => setImgIdx(i)} className={`h-1 flex-1 rounded-full ${i === imgIdx ? "bg-foreground" : "bg-foreground/30"}`} />
          ))}
        </div>
        <button onClick={onBack} className="absolute top-12 left-4 w-10 h-10 glass rounded-full flex items-center justify-center">
          <ChevronLeft size={20} className="text-foreground" />
        </button>
        {isOwnProfile && onNavigate && (
          <button onClick={() => onNavigate("settings")} className="absolute top-12 right-4 w-10 h-10 glass rounded-full flex items-center justify-center">
            <Settings size={18} className="text-foreground" />
          </button>
        )}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="px-6 -mt-8 relative pb-6">
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-3xl font-extrabold">{profile.name}, {profile.age}</h1>
          {profile.verified && <BadgeCheck size={22} className="text-neon" />}
        </div>

        {/* Location & online */}
        {'distance' in profile && profile.distance && (
          <p className="text-muted-foreground text-sm flex items-center gap-1 mb-2">
            <MapPin size={14} /> {profile.distance}
          </p>
        )}
        {profile.online && (
          <p className="text-sm flex items-center gap-1 mb-3">
            <span className="w-2 h-2 rounded-full bg-neon" />
            <span className="text-neon text-xs font-medium">Online now</span>
          </p>
        )}

        <p className="text-secondary-foreground text-sm mb-5">{profile.bio}</p>

        {/* Detailed info — own profile */}
        {isOwnProfile && (
          <div className="glass rounded-2xl p-4 mb-5 space-y-3">
            <h3 className="text-sm font-semibold mb-1">About Me</h3>
            {[
              { icon: Briefcase, label: myProfile.details.job, sub: myProfile.details.company },
              { icon: GraduationCap, label: myProfile.details.education },
              { icon: Ruler, label: myProfile.details.height },
              { icon: Wine, label: `Drinking: ${myProfile.details.drinking}` },
              { icon: Languages, label: myProfile.details.languages.join(", ") },
              { icon: MapPinned, label: myProfile.details.location },
              { icon: Heart, label: `Looking for: ${myProfile.details.lookingFor}` },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <item.icon size={16} className="text-muted-foreground shrink-0" />
                <div>
                  <p className="text-sm">{item.label}</p>
                  {item.sub && <p className="text-xs text-muted-foreground">{item.sub}</p>}
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-sm">{myProfile.details.zodiac}</span>
              <span className="text-xs text-muted-foreground">· {myProfile.details.gender}</span>
            </div>
          </div>
        )}

        {/* Interests */}
        <h3 className="text-sm font-semibold mb-3">Interests</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {profile.interests.map((interest) => (
            <span key={interest} className="glass px-4 py-2 rounded-full text-xs font-medium text-foreground">{interest}</span>
          ))}
        </div>

        {/* Actions */}
        {isOwnProfile ? (
          <div className="space-y-3">
            <button onClick={() => onNavigate?.("edit-profile")} className="w-full gradient-primary text-primary-foreground py-3.5 rounded-2xl font-semibold glow-primary">
              Edit Profile
            </button>
            <button onClick={() => onNavigate?.("settings")} className="w-full glass text-foreground py-3.5 rounded-2xl font-semibold flex items-center justify-center gap-2">
              <Settings size={16} /> Settings
            </button>
          </div>
        ) : (
          <>
            <div className="flex gap-3 mb-4">
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
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileViewScreen;
