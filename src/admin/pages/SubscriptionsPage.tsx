import { subscriptionPlans } from "@/data/adminDummyData";
import { Crown, Edit, Users } from "lucide-react";

const SubscriptionsPage = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Subscription Plans</h1>
      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors">Add Plan</button>
    </div>
    <div className="grid gap-6 md:grid-cols-3">
      {subscriptionPlans.map(plan => (
        <div key={plan.id} className={`bg-card border rounded-2xl p-6 space-y-4 ${plan.name === "Premium+" ? "border-primary ring-2 ring-primary/20" : "border-border"}`}>
          {plan.name === "Premium+" && <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-lg">Most Popular</span>}
          <div>
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-3xl font-bold mt-2">{plan.price === 0 ? "Free" : `$${plan.price}`}<span className="text-sm text-muted-foreground font-normal">/{plan.interval}</span></p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users size={14} /> {plan.users.toLocaleString()} users
          </div>
          <ul className="space-y-2">
            {plan.features.map(f => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <Crown size={12} className="text-primary" /> {f}
              </li>
            ))}
          </ul>
          <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-secondary text-secondary-foreground rounded-xl text-sm font-medium hover:bg-secondary/80 transition-colors">
            <Edit size={14} /> Edit Plan
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default SubscriptionsPage;
