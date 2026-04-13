import { paymentTransactions, dashboardStats } from "@/data/adminDummyData";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, ArrowDownRight } from "lucide-react";

const PaymentsPage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">Payments & Revenue</h1>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: "Monthly Revenue", value: `$${(dashboardStats.monthlyRevenue / 1000).toFixed(1)}K`, icon: DollarSign, color: "text-green-400" },
        { label: "Transactions", value: "2,340", icon: TrendingUp, color: "text-blue-400" },
        { label: "Refunds", value: "$420", icon: ArrowDownRight, color: "text-red-400" },
        { label: "Avg. Transaction", value: "$12.40", icon: DollarSign, color: "text-purple-400" },
      ].map(s => (
        <div key={s.label} className="bg-card border border-border rounded-2xl p-4">
          <s.icon size={20} className={s.color + " mb-2"} />
          <p className="text-xl font-bold">{s.value}</p>
          <p className="text-xs text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>

    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="px-4 py-3 border-b border-border font-semibold text-sm">Recent Transactions</div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="text-left px-4 py-3 font-medium">ID</th>
              <th className="text-left px-4 py-3 font-medium">User</th>
              <th className="text-left px-4 py-3 font-medium hidden sm:table-cell">Plan</th>
              <th className="text-left px-4 py-3 font-medium">Amount</th>
              <th className="text-left px-4 py-3 font-medium hidden md:table-cell">Method</th>
              <th className="text-left px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentTransactions.map(t => (
              <tr key={t.id} className="border-b border-border/50 hover:bg-secondary/30">
                <td className="px-4 py-3 font-mono text-xs">{t.id}</td>
                <td className="px-4 py-3">{t.user}</td>
                <td className="px-4 py-3 hidden sm:table-cell">{t.plan}</td>
                <td className="px-4 py-3 font-medium">${t.amount}</td>
                <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{t.method}</td>
                <td className="px-4 py-3">
                  <Badge variant={t.status === "completed" ? "default" : "destructive"} className="text-xs">{t.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default PaymentsPage;
