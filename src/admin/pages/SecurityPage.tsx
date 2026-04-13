import { securityLogs } from "@/data/adminDummyData";
import { Shield, AlertTriangle, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const severityIcon: Record<string, typeof Info> = { info: Info, warning: AlertTriangle, critical: Shield };
const severityColor: Record<string, string> = { info: "text-blue-400", warning: "text-yellow-400", critical: "text-red-400" };

const SecurityPage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">Security Management</h1>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: "Active Sessions", value: "12,840" },
        { label: "Suspicious Today", value: "18" },
        { label: "Blocked IPs", value: "342" },
        { label: "2FA Enabled", value: "68%" },
      ].map(s => (
        <div key={s.label} className="bg-card border border-border rounded-2xl p-4">
          <p className="text-xl font-bold">{s.value}</p>
          <p className="text-xs text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>

    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="px-4 py-3 border-b border-border font-semibold text-sm">Security Logs</div>
      <div className="divide-y divide-border/50">
        {securityLogs.map(log => {
          const Icon = severityIcon[log.severity] || Info;
          return (
            <div key={log.id} className="px-4 py-3 flex items-start gap-3 hover:bg-secondary/30 transition-colors">
              <Icon size={16} className={severityColor[log.severity] + " mt-0.5 shrink-0"} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{log.event}</p>
                <div className="flex flex-wrap gap-2 mt-1 text-xs text-muted-foreground">
                  <span>User: {log.user}</span>
                  <span>IP: {log.ip}</span>
                  <span>{log.device}</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <Badge variant={log.severity === "critical" ? "destructive" : log.severity === "warning" ? "secondary" : "outline"} className="text-xs">{log.severity}</Badge>
                <p className="text-xs text-muted-foreground mt-1">{log.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default SecurityPage;
