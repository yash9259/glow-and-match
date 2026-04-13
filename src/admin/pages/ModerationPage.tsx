import { moderationQueue } from "@/data/adminDummyData";
import { Check, X, Eye } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const ModerationPage = () => {
  const [queue, setQueue] = useState(moderationQueue);

  const handleAction = (id: number) => {
    setQueue(prev => prev.filter(i => i.id !== id));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Content Moderation</h1>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Pending Review", value: queue.length.toString() },
          { label: "Reviewed Today", value: "34" },
          { label: "Auto-Flagged", value: "12" },
        ].map(s => (
          <div key={s.label} className="bg-card border border-border rounded-2xl p-4">
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {queue.map(item => (
          <div key={item.id} className="bg-card border border-border rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-sm">{item.user}</span>
                <Badge variant="outline" className="text-xs">{item.type}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{item.reason}</p>
              <p className="text-xs text-muted-foreground mt-1">Confidence: {item.confidence}% · {item.date}</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-xl bg-secondary hover:bg-secondary/80"><Eye size={14} /></button>
              <button onClick={() => handleAction(item.id)} className="p-2 rounded-xl bg-green-500/10 text-green-400 hover:bg-green-500/20"><Check size={14} /></button>
              <button onClick={() => handleAction(item.id)} className="p-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20"><X size={14} /></button>
            </div>
          </div>
        ))}
        {queue.length === 0 && <p className="text-center text-muted-foreground py-8">All clear! No items pending review.</p>}
      </div>
    </div>
  );
};

export default ModerationPage;
