import { useState } from "react";
import { adminUsers } from "@/data/adminDummyData";
import { Search, MoreVertical, Shield, Ban, Trash2, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const UsersPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const filtered = adminUsers.filter(u => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    if (filter === "all") return matchSearch;
    return matchSearch && u.status === filter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <h1 className="text-2xl font-bold">User Management</h1>
        <div className="flex gap-2">
          {["all", "active", "suspended", "banned"].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search users..." className="w-full pl-9 pr-4 py-2.5 bg-secondary/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="text-left px-4 py-3 font-medium">User</th>
                <th className="text-left px-4 py-3 font-medium hidden md:table-cell">Email</th>
                <th className="text-left px-4 py-3 font-medium">Status</th>
                <th className="text-left px-4 py-3 font-medium hidden sm:table-cell">Verified</th>
                <th className="text-left px-4 py-3 font-medium hidden lg:table-cell">Reports</th>
                <th className="text-left px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(u => (
                <tr key={u.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img src={u.image} alt={u.name} className="w-9 h-9 rounded-full object-cover" />
                      <div>
                        <p className="font-medium">{u.name}</p>
                        <p className="text-xs text-muted-foreground">Age {u.age} · Joined {u.joined}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{u.email}</td>
                  <td className="px-4 py-3">
                    <Badge variant={u.status === "active" ? "default" : u.status === "suspended" ? "secondary" : "destructive"} className="text-xs">
                      {u.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    {u.verified ? <Shield size={16} className="text-green-400" /> : <span className="text-muted-foreground text-xs">No</span>}
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell">
                    {u.reports > 0 ? <span className="text-red-400 font-medium">{u.reports}</span> : <span className="text-muted-foreground">0</span>}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      <button className="p-1.5 rounded-lg hover:bg-secondary"><Eye size={14} /></button>
                      <button className="p-1.5 rounded-lg hover:bg-secondary"><Ban size={14} /></button>
                      <button className="p-1.5 rounded-lg hover:bg-secondary text-destructive"><Trash2 size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
