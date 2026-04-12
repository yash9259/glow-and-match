import { motion } from "framer-motion";
import { matches } from "@/data/dummyData";

interface ChatListScreenProps {
  onOpenChat: (id: number) => void;
}

const ChatListScreen = ({ onOpenChat }: ChatListScreenProps) => {
  return (
    <div className="mobile-container px-4 pt-6 safe-bottom">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>

      {/* New Matches */}
      <div className="mb-6">
        <h2 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">New Matches</h2>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {matches.slice(0, 4).map((m, i) => (
            <motion.button
              key={m.id}
              onClick={() => onOpenChat(m.id)}
              className="flex flex-col items-center gap-1.5 min-w-[68px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative">
                <img src={m.image} alt={m.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary" />
                {m.online && <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-background bg-neon" />}
              </div>
              <span className="text-xs font-medium">{m.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <h2 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Recent</h2>
      <div className="space-y-1">
        {matches.map((m, i) => (
          <motion.button
            key={m.id}
            onClick={() => onOpenChat(m.id)}
            className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-secondary/50 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="relative">
              <img src={m.image} alt={m.name} className="w-14 h-14 rounded-full object-cover" />
              {m.online && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-background bg-neon" />}
            </div>
            <div className="flex-1 text-left">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">{m.name}</h3>
                <span className="text-xs text-muted-foreground">{m.time}</span>
              </div>
              <p className="text-sm text-muted-foreground truncate">{m.lastMessage}</p>
            </div>
            {m.unread > 0 && (
              <div className="w-5 h-5 gradient-primary rounded-full flex items-center justify-center">
                <span className="text-[10px] font-bold text-primary-foreground">{m.unread}</span>
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ChatListScreen;
