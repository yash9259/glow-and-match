import { chatCredits } from "@/data/adminDummyData";
import { MessageSquare, Plus } from "lucide-react";

const CreditsPage = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Chat Credits</h1>
      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"><Plus size={14} /> Add Credits</button>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: "Total Credits Sold", value: "125,000" },
        { label: "Credits In Circulation", value: "48,200" },
        { label: "Credits Used Today", value: "3,420" },
        { label: "Revenue from Credits", value: "$12,500" },
      ].map(s => (
        <div key={s.label} className="bg-card border border-border rounded-2xl p-4">
          <MessageSquare size={18} className="text-primary mb-2" />
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
              <th className="text-left px-4 py-3 font-medium">Balance</th>
              <th className="text-left px-4 py-3 font-medium hidden sm:table-cell">Purchased</th>
              <th className="text-left px-4 py-3 font-medium hidden sm:table-cell">Used</th>
              <th className="text-left px-4 py-3 font-medium hidden md:table-cell">Last Purchase</th>
              <th className="text-left px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {chatCredits.map(c => (
              <tr key={c.userId} className="border-b border-border/50 hover:bg-secondary/30">
                <td className="px-4 py-3 font-medium">{c.name}</td>
                <td className="px-4 py-3 font-bold text-primary">{c.balance}</td>
                <td className="px-4 py-3 hidden sm:table-cell">{c.purchased}</td>
                <td className="px-4 py-3 hidden sm:table-cell">{c.used}</td>
                <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{c.lastPurchase}</td>
                <td className="px-4 py-3"><button className="px-3 py-1 text-xs bg-secondary rounded-lg hover:bg-secondary/80">Adjust</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default CreditsPage;
