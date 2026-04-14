import { Heart, MessageCircle, User, Flame, Bell, Brain } from "lucide-react";

interface BottomNavProps {
  active: string;
  onNavigate: (screen: string) => void;
}

const navItems = [
  { id: "home", icon: Flame, label: "Discover" },
  { id: "likes", icon: Heart, label: "Likes" },
  { id: "ai-matches", icon: Brain, label: "AI Picks" },
  { id: "chat-list", icon: MessageCircle, label: "Chat" },
  { id: "profile-view", icon: User, label: "Profile" },
];

const BottomNav = ({ active, onNavigate }: BottomNavProps) => {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50">
      <div className="glass-strong mx-3 mb-3 rounded-2xl px-2 py-2 flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-300 ${
                isActive
                  ? "text-primary scale-110"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className={`relative ${isActive ? "gradient-primary rounded-lg p-1.5" : "p-1.5"}`}>
                <item.icon size={20} className={isActive ? "text-primary-foreground" : ""} />
                {item.id === "chat-list" && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full text-[10px] flex items-center justify-center font-bold text-accent-foreground">3</span>
                )}
                {item.id === "ai-matches" && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-[10px] flex items-center justify-center font-bold text-primary-foreground">✦</span>
                )}
              </div>
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
