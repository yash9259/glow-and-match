import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Send, Bot, Sparkles, Shield, Heart, CreditCard, HelpCircle, MessageSquare } from "lucide-react";

interface AISupportScreenProps {
  onBack: () => void;
}

const quickTopics = [
  { label: "Safety Tips", icon: Shield, color: "text-green-400" },
  { label: "Dating Advice", icon: Heart, color: "text-pink-400" },
  { label: "Subscription", icon: CreditCard, color: "text-yellow-400" },
  { label: "How It Works", icon: HelpCircle, color: "text-blue-400" },
  { label: "Report Issue", icon: MessageSquare, color: "text-red-400" },
];

const supportResponses: Record<string, string[]> = {
  safety: [
    "🛡️ Here are some key safety tips:\n\n1. Never share personal info like your address early on\n2. Always meet in public places for first dates\n3. Tell a friend where you're going\n4. Trust your instincts — if something feels off, it probably is\n5. Use our video call feature before meeting in person",
    "We take your safety seriously! You can verify your profile with a selfie to get a blue badge ✅. This helps others know you're real.",
    "If someone makes you uncomfortable, use the Report button on their profile. Our moderation team reviews reports within 24 hours.",
  ],
  dating: [
    "💕 Here are some top dating tips:\n\n1. Be authentic — your real self is your best self\n2. Ask open-ended questions to keep convos flowing\n3. Show genuine interest in their hobbies\n4. Don't overthink your first message — a simple 'Hey, I loved your bio about...' works great!\n5. Be patient — great connections take time",
    "📸 Profile photo tips: Use a clear headshot as your first photo, add photos of you doing activities you love, smile naturally, and avoid group photos as your main pic!",
    "✨ First date ideas: Coffee dates are low-pressure and perfect for getting to know someone. Art galleries, farmers markets, and scenic walks are also great options!",
  ],
  subscription: [
    "⭐ Our Premium plans include:\n\n🔥 **Premium**: Unlimited likes, see who liked you, 5 Super Likes/day, rewind last swipe — $14.99/mo\n\n💎 **Premium+**: Everything in Premium + priority visibility, advanced filters, read receipts, profile boost — $29.99/mo\n\nWould you like to upgrade?",
    "💳 You can manage your subscription in Settings > Subscription. We accept all major credit cards and Apple Pay/Google Pay.",
  ],
  howItWorks: [
    "👋 Here's how the app works:\n\n1. **Swipe** — Browse profiles near you. Swipe right to like, left to pass\n2. **Match** — When you both like each other, it's a match! 🎉\n3. **Chat** — Start a conversation and get to know each other\n4. **Meet** — Plan a date when you're ready!\n\nOur AI also suggests compatible matches based on your interests and location!",
    "🚀 **Boosts** make your profile visible to more people for 30 minutes. **Super Likes** let someone know you're especially interested. Both are great for standing out!",
  ],
  report: [
    "🚨 To report an issue:\n\n1. Go to the person's profile\n2. Tap the ⋮ menu icon\n3. Select 'Report'\n4. Choose a reason and add details\n\nOur team reviews all reports within 24 hours. You can also block users to prevent further contact.",
    "If you're experiencing a bug or technical issue, please describe it and I'll help troubleshoot! You can also email support@glowmatch.app for urgent issues.",
  ],
  general: [
    "I'm your AI dating assistant! 🤖✨ I can help with:\n\n• Safety tips & guidelines\n• Dating advice & conversation starters\n• Subscription & payment questions\n• How the app works\n• Reporting issues\n\nWhat would you like to know?",
    "That's a great question! Let me think about that... 🤔\n\nBased on what I know, the best approach would be to stay authentic and engaged. Would you like more specific advice?",
    "I'm here to help! Feel free to ask me anything about the app, dating tips, or if you need support. 😊",
    "Thanks for reaching out! I want to make sure you have the best experience. Is there anything specific I can help with?",
  ],
};

type Msg = { id: number; sender: "user" | "bot"; text: string; time: string };

const AISupportScreen = ({ onBack }: AISupportScreenProps) => {
  const [message, setMessage] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { id: 1, sender: "bot", text: "Hey there! 👋 I'm your AI assistant. I can help with safety tips, dating advice, account questions, and more!\n\nTap a topic below or type your question.", time: "Now" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, isTyping]);

  const getResponse = (text: string): string => {
    const lower = text.toLowerCase();
    let category = "general";
    if (lower.includes("safe") || lower.includes("privacy") || lower.includes("protect")) category = "safety";
    else if (lower.includes("date") || lower.includes("advice") || lower.includes("tip") || lower.includes("conversation")) category = "dating";
    else if (lower.includes("premium") || lower.includes("subscription") || lower.includes("pay") || lower.includes("plan") || lower.includes("price")) category = "subscription";
    else if (lower.includes("how") || lower.includes("work") || lower.includes("swipe") || lower.includes("match") || lower.includes("boost")) category = "howItWorks";
    else if (lower.includes("report") || lower.includes("block") || lower.includes("issue") || lower.includes("bug")) category = "report";

    const pool = supportResponses[category];
    return pool[Math.floor(Math.random() * pool.length)];
  };

  const sendMessage = (text?: string) => {
    const msgText = text || message;
    if (!msgText.trim()) return;

    setMsgs(prev => [...prev, { id: prev.length + 1, sender: "user", text: msgText, time: "Now" }]);
    setMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(msgText);
      setMsgs(prev => [...prev, { id: prev.length + 1, sender: "bot", text: response, time: "Now" }]);
      setIsTyping(false);
    }, 800 + Math.random() * 1200);
  };

  return (
    <div className="mobile-container flex flex-col h-screen">
      {/* Header */}
      <div className="glass-strong px-4 py-3 flex items-center gap-3 z-10">
        <button onClick={onBack} className="w-9 h-9 glass rounded-full flex items-center justify-center">
          <ChevronLeft size={18} />
        </button>
        <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
          <Bot size={22} className="text-primary-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm">AI Assistant</h3>
          <p className="text-xs text-green-400 flex items-center gap-1">
            <Sparkles size={10} /> Always online
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 py-4 space-y-3">
        {msgs.map((msg, i) => (
          <motion.div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
          >
            {msg.sender === "bot" && (
              <div className="w-7 h-7 gradient-primary rounded-full flex items-center justify-center mr-2 mt-1 shrink-0">
                <Bot size={14} className="text-primary-foreground" />
              </div>
            )}
            <div
              className={`max-w-[78%] px-4 py-3 text-sm whitespace-pre-line ${
                msg.sender === "user"
                  ? "gradient-primary text-primary-foreground rounded-2xl rounded-br-md"
                  : "glass text-foreground rounded-2xl rounded-bl-md"
              }`}
            >
              <p>{msg.text}</p>
            </div>
          </motion.div>
        ))}

        {/* Quick topics - show only at start */}
        {msgs.length <= 1 && (
          <div className="grid grid-cols-2 gap-2 pt-2">
            {quickTopics.map((topic, i) => (
              <motion.button
                key={topic.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                onClick={() => sendMessage(topic.label)}
                className="glass px-3 py-3 rounded-xl flex items-center gap-2 text-left hover:bg-muted/50 transition-colors"
              >
                <topic.icon size={18} className={topic.color} />
                <span className="text-xs font-medium">{topic.label}</span>
              </motion.button>
            ))}
          </div>
        )}

        <AnimatePresence>
          {isTyping && (
            <motion.div className="flex justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="w-7 h-7 gradient-primary rounded-full flex items-center justify-center mr-2 shrink-0">
                <Bot size={14} className="text-primary-foreground" />
              </div>
              <div className="glass px-4 py-3 rounded-2xl rounded-bl-md flex gap-1">
                <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="px-4 pb-4 pt-2">
        <div className="glass-strong rounded-2xl flex items-center gap-2 px-4 py-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
          />
          <button
            onClick={() => sendMessage()}
            disabled={!message.trim()}
            className="w-9 h-9 gradient-primary rounded-xl flex items-center justify-center disabled:opacity-50"
          >
            <Send size={16} className="text-primary-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AISupportScreen;
