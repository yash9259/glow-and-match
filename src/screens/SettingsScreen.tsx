import { ChevronLeft, ChevronRight, User, Shield, Bell, Crown, Zap, LogOut, HelpCircle, Trash2, Sun, Moon, Smartphone, Bot } from "lucide-react";
import { useTheme, type Theme } from "@/hooks/useTheme";

interface SettingsScreenProps {
  onBack: () => void;
  onNavigate: (screen: string) => void;
}

const themeOptions: { value: Theme; label: string; icon: typeof Sun; desc: string }[] = [
  { value: "light", label: "Light", icon: Sun, desc: "Always light" },
  { value: "dark", label: "Dark", icon: Moon, desc: "Always dark" },
  { value: "system", label: "Auto", icon: Smartphone, desc: "Match device" },
];

const SettingsScreen = ({ onBack, onNavigate }: SettingsScreenProps) => {
  const { theme, setTheme } = useTheme();
  const sections = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Edit Profile", screen: "edit-profile" },
        { icon: Crown, label: "Premium", screen: "premium" },
        { icon: Zap, label: "Boost", screen: "boost" },
      ],
    },
    {
      title: "Privacy",
      items: [
        { icon: Shield, label: "Privacy Settings", screen: "" },
        { icon: Bell, label: "Notifications", screen: "" },
        { icon: HelpCircle, label: "Help & Support", screen: "" },
        { icon: Bot, label: "AI Assistant", screen: "ai-support" },
      ],
    },
  ];

  return (
    <div className="mobile-container px-6 py-4 overflow-y-auto scrollbar-hide safe-bottom">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="w-10 h-10 glass rounded-full flex items-center justify-center">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-xl font-bold">Settings</h1>
      </div>

      {/* Profile card */}
      <div className="glass rounded-2xl p-4 flex items-center gap-4 mb-6">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover border-2 border-primary"
        />
        <div>
          <h2 className="font-bold">Alex, 25</h2>
          <p className="text-sm text-muted-foreground">San Francisco, CA</p>
          <p className="text-xs text-muted-foreground">Free Plan</p>
        </div>
      </div>

      {sections.map((section) => (
        <div key={section.title} className="mb-6">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{section.title}</h3>
          <div className="glass rounded-2xl overflow-hidden">
            {section.items.map((item, i) => (
              <button
                key={item.label}
                onClick={() => item.screen && onNavigate(item.screen)}
                className={`w-full flex items-center justify-between px-4 py-3.5 hover:bg-secondary/50 transition-colors ${
                  i < section.items.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} className="text-muted-foreground" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                <ChevronRight size={16} className="text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Theme selector */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Appearance</h3>
        <div className="glass rounded-2xl p-1.5 flex gap-1">
          {themeOptions.map((opt) => {
            const active = theme === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => setTheme(opt.value)}
                className={`flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl text-xs font-medium transition-all ${
                  active
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <opt.icon size={18} />
                <span>{opt.label}</span>
                <span className={`text-[10px] ${active ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{opt.desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3 mt-4">
        <button className="w-full glass text-destructive py-3.5 rounded-2xl text-sm font-medium flex items-center justify-center gap-2">
          <LogOut size={16} /> Log Out
        </button>
        <button className="w-full text-muted-foreground py-3 text-sm flex items-center justify-center gap-2">
          <Trash2 size={14} /> Delete Account
        </button>
      </div>
    </div>
  );
};

export default SettingsScreen;
