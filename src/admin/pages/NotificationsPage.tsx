import { notificationHistory } from "@/data/adminDummyData";
import { Bell, Send, Users, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const typeColor: Record<string, string> = { promotion: "bg-pink-400/10 text-pink-400", feature: "bg-blue-400/10 text-blue-400", system: "bg-yellow-400/10 text-yellow-400" };

const NotificationsPage = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Notifications</h1>
      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"><Send size={14} /> Send Notification</button>
    </div>

    {/* Compose */}
    <div className="bg-card border border-border rounded-2xl p-4 space-y-4">
      <h3 className="font-semibold flex items-center gap-2"><Bell size={16} /> New Push Notification</h3>
      <input placeholder="Title" className="w-full px-4 py-2.5 bg-secondary/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
      <textarea placeholder="Message body..." rows={3} className="w-full px-4 py-2.5 bg-secondary/50 border border-border rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50" />
      <div className="flex gap-2">
        <select className="px-3 py-2 bg-secondary/50 border border-border rounded-xl text-sm">
          <option>All Users</option>
          <option>Premium Only</option>
          <option>Free Only</option>
        </select>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-medium">Send Now</button>
      </div>
    </div>

    {/* History */}
    <div className="space-y-3">
      <h3 className="font-semibold">History</h3>
      {notificationHistory.map(n => (
        <div key={n.id} className="bg-card border border-border rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm">{n.title}</span>
              <span className={`px-2 py-0.5 rounded-lg text-xs font-medium ${typeColor[n.type]}`}>{n.type}</span>
            </div>
            <p className="text-sm text-muted-foreground">{n.message}</p>
          </div>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Users size={12} /> {n.recipients.toLocaleString()}</span>
            <span className="flex items-center gap-1"><Eye size={12} /> {n.opened.toLocaleString()}</span>
            <span>{n.sentAt}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default NotificationsPage;
