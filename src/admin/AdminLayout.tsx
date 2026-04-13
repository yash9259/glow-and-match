import { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import {
  LayoutDashboard, Users, ShieldCheck, Flag, CreditCard, Crown,
  Zap, Bell, Brain, BarChart3, ImageIcon, Lock, Settings,
  ChevronLeft, ChevronRight, LogOut, Menu, MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
  { label: "Users", icon: Users, path: "/admin/users" },
  { label: "Verification", icon: ShieldCheck, path: "/admin/verification" },
  { label: "Reports", icon: Flag, path: "/admin/reports" },
  { label: "Subscriptions", icon: Crown, path: "/admin/subscriptions" },
  { label: "Payments", icon: CreditCard, path: "/admin/payments" },
  { label: "Chat Credits", icon: MessageSquare, path: "/admin/credits" },
  { label: "Boosts", icon: Zap, path: "/admin/boosts" },
  { label: "Notifications", icon: Bell, path: "/admin/notifications" },
  { label: "AI Monitor", icon: Brain, path: "/admin/ai" },
  { label: "Analytics", icon: BarChart3, path: "/admin/analytics" },
  { label: "Moderation", icon: ImageIcon, path: "/admin/moderation" },
  { label: "Security", icon: Lock, path: "/admin/security" },
  { label: "Settings", icon: Settings, path: "/admin/settings" },
];

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:static z-50 h-full flex flex-col border-r border-border bg-card transition-all duration-300",
        collapsed ? "w-16" : "w-60",
        mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex items-center justify-between p-4 border-b border-border">
          {!collapsed && <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Spark Admin</span>}
          <button onClick={() => setCollapsed(!collapsed)} className="hidden lg:flex w-8 h-8 items-center justify-center rounded-lg hover:bg-secondary transition-colors">
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-2 space-y-1">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => { navigate(item.path); setMobileOpen(false); }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <item.icon size={18} />
                {!collapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className="p-3 border-t border-border space-y-2">
          <button onClick={toggleTheme} className={cn("w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:bg-secondary transition-colors")}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            {!collapsed && <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>}
          </button>
          <button onClick={() => navigate("/")} className={cn("w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:bg-secondary transition-colors")}>
            <LogOut size={18} />
            {!collapsed && <span>Back to App</span>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 flex items-center gap-4 px-4 border-b border-border bg-card/50 backdrop-blur shrink-0">
          <button onClick={() => setMobileOpen(true)} className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-secondary">
            <Menu size={20} />
          </button>
          <h2 className="text-sm font-semibold text-muted-foreground">
            {navItems.find(i => i.path === location.pathname)?.label || "Admin"}
          </h2>
        </header>
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
