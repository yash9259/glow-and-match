import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Send, Smile, Image, Sparkles, Bot, RefreshCw } from "lucide-react";
import { chatMessages, aiReplies, aiContextualReplies, aiBotResponses, matches } from "@/data/dummyData";

interface ChatScreenProps {
  onBack: () => void;
  chatId: number;
}

const ChatScreen = ({ onBack, chatId }: ChatScreenProps) => {
  const [message, setMessage] = useState("");
  const [msgs, setMsgs] = useState(chatMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [aiMode, setAiMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const match = matches.find(m => m.id === chatId) || matches[0];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [msgs, isTyping]);

  // Generate contextual suggestions based on last message
  const generateSuggestions = useCallback((lastMsg?: string) => {
    const text = (lastMsg || "").toLowerCase();
    let pool: string[] = [];

    if (text.includes("hey") || text.includes("hi") || text.includes("hello")) {
      pool = [...aiContextualReplies.greeting];
    } else if (text.includes("cute") || text.includes("beautiful") || text.includes("amazing")) {
      pool = [...aiContextualReplies.compliment];
    } else if (text.includes("meet") || text.includes("weekend") || text.includes("plan") || text.includes("free")) {
      pool = [...aiContextualReplies.plans];
    } else if (text.includes("hobby") || text.includes("like") || text.includes("interest") || text.includes("into")) {
      pool = [...aiContextualReplies.interests];
    } else if (text.includes("haha") || text.includes("lol") || text.includes("funny")) {
      pool = [...aiContextualReplies.funny];
    } else if (text.includes("😊") || text.includes("❤") || text.includes("💕")) {
      pool = [...aiContextualReplies.flirty];
    } else {
      pool = [...aiContextualReplies.general];
    }

    // Add some random general ones
    const extra = aiReplies.sort(() => Math.random() - 0.5).slice(0, 3);
    pool = [...pool, ...extra];

    // Shuffle and pick 5
    const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 5);
    setSuggestions(shuffled);
  }, []);

  useEffect(() => {
    const lastMsg = msgs[msgs.length - 1]?.text;
    generateSuggestions(lastMsg);
  }, [msgs, generateSuggestions]);

  const simulateAIReply = useCallback(() => {
    setIsTyping(true);
    const delay = 1000 + Math.random() * 2000;
    setTimeout(() => {
      const reply = aiBotResponses[Math.floor(Math.random() * aiBotResponses.length)];
      setMsgs(prev => [...prev, {
        id: prev.length + 1,
        sender: "them",
        text: reply,
        time: "Now",
      }]);
      setIsTyping(false);
    }, delay);
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;
    const newMsg = { id: msgs.length + 1, sender: "me" as const, text: message, time: "Now" };
    setMsgs(prev => [...prev, newMsg]);
    setMessage("");

    // Auto-reply simulation
    simulateAIReply();
  };

  const refreshSuggestions = () => {
    const lastMsg = msgs[msgs.length - 1]?.text;
    generateSuggestions(lastMsg);
  };

  return (
    <div className="mobile-container flex flex-col h-screen">
      {/* Header */}
      <div className="glass-strong px-4 py-3 flex items-center gap-3 z-10">
        <button onClick={onBack} className="w-9 h-9 glass rounded-full flex items-center justify-center">
          <ChevronLeft size={18} />
        </button>
        <div className="relative">
          <img src={match.image} alt={match.name} className="w-10 h-10 rounded-full object-cover" />
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-background" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm">{match.name}</h3>
          <p className="text-xs text-green-400">Online</p>
        </div>
        <button
          onClick={() => setAiMode(!aiMode)}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            aiMode ? "gradient-primary shadow-lg shadow-primary/30" : "glass"
          }`}
        >
          <Bot size={18} className={aiMode ? "text-primary-foreground" : "text-muted-foreground"} />
        </button>
      </div>

      {/* AI Mode Banner */}
      <AnimatePresence>
        {aiMode && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-4 py-2 bg-primary/10 border-b border-primary/20 flex items-center gap-2">
              <Sparkles size={14} className="text-primary" />
              <p className="text-xs text-primary">AI Assistant active — Smart suggestions & auto-compose enabled</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 py-4 space-y-3">
        {msgs.map((msg, i) => (
          <motion.div
            key={msg.id}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
          >
            <div
              className={`max-w-[75%] px-4 py-2.5 text-sm ${
                msg.sender === "me"
                  ? "gradient-primary text-primary-foreground rounded-2xl rounded-br-md"
                  : "glass text-foreground rounded-2xl rounded-bl-md"
              }`}
            >
              <p>{msg.text}</p>
              <p className={`text-[10px] mt-1 ${msg.sender === "me" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{msg.time}</p>
            </div>
          </motion.div>
        ))}

        {/* Typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
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

      {/* AI Suggestions */}
      <div className="px-4 py-2">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles size={14} className="text-primary shrink-0" />
          <span className="text-[10px] font-medium text-primary uppercase tracking-wider">AI Suggestions</span>
          <button onClick={refreshSuggestions} className="ml-auto text-muted-foreground hover:text-primary transition-colors">
            <RefreshCw size={12} />
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {suggestions.map((reply, i) => (
            <motion.button
              key={`${reply}-${i}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => {
                setMessage(reply);
                if (aiMode) {
                  // In AI mode, auto-send
                  const newMsg = { id: msgs.length + 1, sender: "me" as const, text: reply, time: "Now" };
                  setMsgs(prev => [...prev, newMsg]);
                  setMessage("");
                  simulateAIReply();
                }
              }}
              className="glass px-3 py-1.5 rounded-full text-xs text-muted-foreground whitespace-nowrap hover:text-foreground hover:border-primary/30 transition-all"
            >
              {reply}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="px-4 pb-4 pt-2">
        <div className="glass-strong rounded-2xl flex items-center gap-2 px-4 py-2">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Smile size={22} />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Image size={22} />
          </button>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder={aiMode ? "AI will help compose..." : "Type a message..."}
            className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
          />
          <button
            onClick={sendMessage}
            disabled={!message.trim()}
            className="w-9 h-9 gradient-primary rounded-xl flex items-center justify-center disabled:opacity-50 transition-opacity"
          >
            <Send size={16} className="text-primary-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
