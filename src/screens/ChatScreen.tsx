import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Send, Smile, Image, Sparkles } from "lucide-react";
import { chatMessages, aiReplies, matches } from "@/data/dummyData";

interface ChatScreenProps {
  onBack: () => void;
  chatId: number;
}

const ChatScreen = ({ onBack, chatId }: ChatScreenProps) => {
  const [message, setMessage] = useState("");
  const [msgs, setMsgs] = useState(chatMessages);
  const match = matches.find(m => m.id === chatId) || matches[0];

  const sendMessage = () => {
    if (!message.trim()) return;
    setMsgs([...msgs, { id: msgs.length + 1, sender: "me", text: message, time: "Now" }]);
    setMessage("");
  };

  return (
    <div className="mobile-container flex flex-col h-screen">
      {/* Header */}
      <div className="glass-strong px-4 py-3 flex items-center gap-3 z-10">
        <button onClick={onBack} className="w-9 h-9 glass rounded-full flex items-center justify-center">
          <ChevronLeft size={18} />
        </button>
        <img src={match.image} alt={match.name} className="w-10 h-10 rounded-full object-cover" />
        <div className="flex-1">
          <h3 className="font-semibold text-sm">{match.name}</h3>
          <p className="text-xs text-neon">Online</p>
        </div>
      </div>

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
        <div className="flex justify-start">
          <div className="glass px-4 py-3 rounded-2xl rounded-bl-md flex gap-1">
            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>

      {/* AI Replies */}
      <div className="px-4 py-2 flex gap-2 overflow-x-auto scrollbar-hide">
        <Sparkles size={16} className="text-primary shrink-0 mt-1.5" />
        {aiReplies.map((reply, i) => (
          <button
            key={i}
            onClick={() => setMessage(reply)}
            className="glass px-3 py-1.5 rounded-full text-xs text-muted-foreground whitespace-nowrap hover:text-foreground transition-colors"
          >
            {reply}
          </button>
        ))}
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
            placeholder="Type a message..."
            className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
          />
          <button
            onClick={sendMessage}
            className="w-9 h-9 gradient-primary rounded-xl flex items-center justify-center"
          >
            <Send size={16} className="text-primary-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
