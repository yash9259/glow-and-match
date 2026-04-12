import { Check, Crown, Sparkles, Zap, Eye, Heart } from "lucide-react";

interface PremiumScreenProps {
  onBack: () => void;
}

const PremiumScreen = ({ onBack }: PremiumScreenProps) => {
  const features = [
    { icon: Heart, free: "10/day", premium: "Unlimited", label: "Swipes" },
    { icon: Eye, free: "—", premium: "✓", label: "See who liked you" },
    { icon: Zap, free: "—", premium: "1/week", label: "Boosts" },
    { icon: Sparkles, free: "—", premium: "✓", label: "AI suggestions" },
  ];

  return (
    <div className="mobile-container px-6 py-8 overflow-y-auto scrollbar-hide safe-bottom">
      <div className="text-center mb-8">
        <div className="w-16 h-16 gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
          <Crown size={32} className="text-primary-foreground" />
        </div>
        <h1 className="text-3xl font-extrabold text-gradient mb-2">Go Premium</h1>
        <p className="text-muted-foreground text-sm">Unlock the full experience</p>
      </div>

      {/* Comparison */}
      <div className="glass rounded-2xl overflow-hidden mb-8">
        <div className="grid grid-cols-3 gap-0 px-4 py-3 border-b border-border">
          <span className="text-xs font-semibold text-muted-foreground">Feature</span>
          <span className="text-xs font-semibold text-center text-muted-foreground">Free</span>
          <span className="text-xs font-semibold text-center text-gradient">Premium</span>
        </div>
        {features.map((f) => (
          <div key={f.label} className="grid grid-cols-3 gap-0 px-4 py-3.5 border-b border-border/50">
            <div className="flex items-center gap-2">
              <f.icon size={14} className="text-primary" />
              <span className="text-xs font-medium">{f.label}</span>
            </div>
            <span className="text-xs text-center text-muted-foreground">{f.free}</span>
            <span className="text-xs text-center text-foreground font-medium">{f.premium}</span>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <div className="space-y-3 mb-8">
        {[
          { period: "1 Month", price: "₹499", popular: false },
          { period: "6 Months", price: "₹1,999", popular: true, save: "Save 33%" },
          { period: "1 Year", price: "₹2,999", popular: false, save: "Save 50%" },
        ].map((plan) => (
          <button
            key={plan.period}
            className={`w-full rounded-2xl p-4 flex items-center justify-between transition-all ${
              plan.popular ? "gradient-primary glow-primary" : "glass"
            }`}
          >
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className={`font-semibold text-sm ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>{plan.period}</span>
                {plan.save && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${plan.popular ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/20 text-primary"}`}>
                    {plan.save}
                  </span>
                )}
              </div>
            </div>
            <span className={`text-lg font-bold ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>{plan.price}</span>
          </button>
        ))}
      </div>

      <button className="w-full gradient-primary text-primary-foreground py-4 rounded-2xl font-semibold glow-primary">
        Subscribe Now
      </button>
    </div>
  );
};

export default PremiumScreen;
