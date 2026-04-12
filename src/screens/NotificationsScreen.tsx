import { motion } from "framer-motion";
import { Heart, MessageCircle, Zap, Bell } from "lucide-react";
import { notifications } from "@/data/dummyData";

const iconMap = { match: Heart, message: MessageCircle, like: Heart, boost: Zap };

const NotificationsScreen = () => {
  return (
    <div className="mobile-container px-4 pt-6 safe-bottom">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      <div className="space-y-2">
        {notifications.map((n, i) => {
          const Icon = iconMap[n.type] || Bell;
          return (
            <motion.div
              key={n.id}
              className="glass rounded-2xl p-4 flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              {n.image ? (
                <img src={n.image} alt="" className="w-12 h-12 rounded-full object-cover" />
              ) : (
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                  <Icon size={20} className="text-primary-foreground" />
                </div>
              )}
              <div className="flex-1">
                <p className="text-sm font-medium">{n.text}</p>
                <p className="text-xs text-muted-foreground">{n.time}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationsScreen;
