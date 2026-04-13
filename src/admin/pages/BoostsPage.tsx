import { boostProfiles } from "@/data/adminDummyData";
import { Badge } from "@/components/ui/badge";
import { Zap, Eye, Heart } from "lucide-react";

const BoostsPage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">Boosts & Featured Profiles</h1>

    <div className="grid grid-cols-3 gap-4">
      {[
        { label: "Active Boosts", value: "23", icon: Zap, color: "text-yellow-400" },
        { label: "Total Views from Boosts", value: "45.2K", icon: Eye, color: "text-blue-400" },
        { label: "Matches from Boosts", value: "1,240", icon: Heart, color: "text-pink-400" },
      ].map(s => (
        <div key={s.label} className="bg-card border border-border rounded-2xl p-4">
          <s.icon size={18} className={s.color + " mb-2"} />
          <p className="text-xl font-bold">{s.value}</p>
          <p className="text-xs text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>

    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="text-left px-4 py-3 font-medium">User</th>
              <th className="text-left px-4 py-3 font-medium">Type</th>
              <th className="text-left px-4 py-3 font-medium hidden sm:table-cell">Duration</th>
              <th className="text-left px-4 py-3 font-medium hidden md:table-cell">Views</th>
              <th className="text-left px-4 py-3 font-medium hidden md:table-cell">Matches</th>
              <th className="text-left px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {boostProfiles.map(b => (
              <tr key={b.id} className="border-b border-border/50 hover:bg-secondary/30">
                <td className="px-4 py-3 font-medium">{b.user}</td>
                <td className="px-4 py-3"><Badge variant="outline" className="text-xs">{b.type}</Badge></td>
                <td className="px-4 py-3 text-xs text-muted-foreground hidden sm:table-cell">{b.startTime} → {b.endTime}</td>
                <td className="px-4 py-3 hidden md:table-cell">{b.views}</td>
                <td className="px-4 py-3 hidden md:table-cell">{b.matches}</td>
                <td className="px-4 py-3">
                  <Badge variant={b.status === "active" ? "default" : "secondary"} className="text-xs">{b.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default BoostsPage;
