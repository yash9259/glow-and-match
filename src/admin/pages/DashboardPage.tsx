import { Users, Heart, DollarSign, TrendingUp, UserPlus, Flag, ShieldCheck, Crown } from "lucide-react";
import { dashboardStats, revenueData, userGrowthData } from "@/data/adminDummyData";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const stats = [
  { label: "Total Users", value: dashboardStats.totalUsers.toLocaleString(), icon: Users, color: "text-blue-400", bg: "bg-blue-400/10" },
  { label: "Active Today", value: dashboardStats.activeToday.toLocaleString(), icon: TrendingUp, color: "text-green-400", bg: "bg-green-400/10" },
  { label: "Total Matches", value: dashboardStats.totalMatches.toLocaleString(), icon: Heart, color: "text-pink-400", bg: "bg-pink-400/10" },
  { label: "Monthly Revenue", value: `$${(dashboardStats.monthlyRevenue / 1000).toFixed(1)}K`, icon: DollarSign, color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { label: "Premium Users", value: dashboardStats.premiumUsers.toLocaleString(), icon: Crown, color: "text-purple-400", bg: "bg-purple-400/10" },
  { label: "Daily Signups", value: dashboardStats.dailySignups.toString(), icon: UserPlus, color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { label: "Pending Reports", value: dashboardStats.reportsPending.toString(), icon: Flag, color: "text-red-400", bg: "bg-red-400/10" },
  { label: "Pending Verifications", value: dashboardStats.verificationsPending.toString(), icon: ShieldCheck, color: "text-orange-400", bg: "bg-orange-400/10" },
];

const DashboardPage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">Dashboard Overview</h1>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-card border border-border rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center`}>
              <s.icon size={20} className={s.color} />
            </div>
          </div>
          <p className="text-2xl font-bold">{s.value}</p>
          <p className="text-xs text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-card border border-border rounded-2xl p-4">
        <h3 className="font-semibold mb-4">Revenue Trend</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(270,80%,60%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(270,80%,60%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12, color: "hsl(var(--foreground))" }} />
            <Area type="monotone" dataKey="revenue" stroke="hsl(270,80%,60%)" fill="url(#revGrad)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-card border border-border rounded-2xl p-4">
        <h3 className="font-semibold mb-4">User Growth</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12, color: "hsl(var(--foreground))" }} />
            <Bar dataKey="users" fill="hsl(270,80%,60%)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="active" fill="hsl(330,85%,60%)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default DashboardPage;
