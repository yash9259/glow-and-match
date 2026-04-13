import { reportsList } from "@/data/adminDummyData";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Ban, MessageSquare, ShieldAlert } from "lucide-react";

const severityColor: Record<string, string> = { low: "bg-blue-400/10 text-blue-400", medium: "bg-yellow-400/10 text-yellow-400", high: "bg-orange-400/10 text-orange-400", critical: "bg-red-400/10 text-red-400" };

const ReportsPage = () => {
  const [reports, setReports] = useState(reportsList);

  const handleAction = (id: number, action: string) => {
    setReports(prev => prev.map(r => r.id === id ? { ...r, status: action } : r));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Reports & Complaints</h1>
      <div className="space-y-4">
        {reports.map(r => (
          <div key={r.id} className="bg-card border border-border rounded-2xl p-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
              <div className="flex items-center gap-2">
                <AlertTriangle size={16} className="text-muted-foreground" />
                <span className="font-semibold">{r.reportedUser}</span>
                <span className="text-xs text-muted-foreground">reported by {r.reportedBy}</span>
              </div>
              <div className="flex gap-2 sm:ml-auto">
                <span className={`px-2 py-0.5 rounded-lg text-xs font-medium ${severityColor[r.severity]}`}>{r.severity}</span>
                <Badge variant={r.status === "pending" ? "secondary" : r.status === "reviewing" ? "outline" : "default"} className="text-xs">{r.status}</Badge>
              </div>
            </div>
            <p className="text-sm font-medium mb-1">{r.reason}</p>
            <p className="text-sm text-muted-foreground mb-3">{r.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{r.date}</span>
              {r.status !== "resolved" && (
                <div className="flex gap-2">
                  <button onClick={() => handleAction(r.id, "resolved")} className="px-3 py-1.5 text-xs bg-yellow-500/10 text-yellow-400 rounded-lg hover:bg-yellow-500/20 flex items-center gap-1"><MessageSquare size={12} /> Warn</button>
                  <button onClick={() => handleAction(r.id, "resolved")} className="px-3 py-1.5 text-xs bg-orange-500/10 text-orange-400 rounded-lg hover:bg-orange-500/20 flex items-center gap-1"><ShieldAlert size={12} /> Suspend</button>
                  <button onClick={() => handleAction(r.id, "resolved")} className="px-3 py-1.5 text-xs bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 flex items-center gap-1"><Ban size={12} /> Ban</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;
