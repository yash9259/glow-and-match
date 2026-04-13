import { engagementData, userGrowthData } from "@/data/adminDummyData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const AnalyticsPage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">Analytics & Reports</h1>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: "DAU", value: "12.8K", change: "+8.2%" },
        { label: "Avg. Session", value: "14m 32s", change: "+3.1%" },
        { label: "Retention (D7)", value: "42.5%", change: "+1.8%" },
        { label: "Churn Rate", value: "5.2%", change: "-0.4%" },
      ].map(s => (
        <div key={s.label} className="bg-card border border-border rounded-2xl p-4">
          <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
          <p className="text-2xl font-bold">{s.value}</p>
          <p className={`text-xs font-medium ${s.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>{s.change} vs last week</p>
        </div>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-card border border-border rounded-2xl p-4">
        <h3 className="font-semibold mb-4">Weekly Engagement</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12, color: "hsl(var(--foreground))" }} />
            <Bar dataKey="swipes" fill="hsl(270,80%,60%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="messages" fill="hsl(330,85%,60%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="matches" fill="hsl(200,100%,60%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-card border border-border rounded-2xl p-4">
        <h3 className="font-semibold mb-4">Growth Trend</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12, color: "hsl(var(--foreground))" }} />
            <Line type="monotone" dataKey="users" stroke="hsl(270,80%,60%)" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="active" stroke="hsl(330,85%,60%)" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default AnalyticsPage;
