import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon, Globe, Database, Server, Shield } from "lucide-react";

const AdminSettingsPage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold">System Settings</h1>

      <div className="space-y-4">
        <div className="bg-card border border-border rounded-2xl p-4">
          <h3 className="font-semibold mb-4">Appearance</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {theme === "dark" ? <Moon size={18} className="text-muted-foreground" /> : <Sun size={18} className="text-muted-foreground" />}
              <span className="text-sm">Dark Mode</span>
            </div>
            <button onClick={toggleTheme} className={`w-12 h-7 rounded-full relative transition-colors ${theme === "dark" ? "bg-primary" : "bg-muted"}`}>
              <span className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform ${theme === "dark" ? "left-[calc(100%-1.625rem)]" : "left-0.5"}`} />
            </button>
          </div>
        </div>

        {[
          { title: "General", icon: Globe, settings: [
            { label: "App Name", value: "Spark", type: "text" },
            { label: "Max Distance (km)", value: "100", type: "number" },
            { label: "Min Age", value: "18", type: "number" },
            { label: "Max Age", value: "65", type: "number" },
          ]},
          { title: "Infrastructure", icon: Server, settings: [
            { label: "API Rate Limit (req/min)", value: "60", type: "number" },
            { label: "Max Upload Size (MB)", value: "10", type: "number" },
            { label: "Cache TTL (seconds)", value: "3600", type: "number" },
          ]},
          { title: "Database", icon: Database, settings: [
            { label: "Connection Pool Size", value: "20", type: "number" },
            { label: "Backup Frequency", value: "Daily", type: "text" },
          ]},
          { title: "Security", icon: Shield, settings: [
            { label: "Max Login Attempts", value: "5", type: "number" },
            { label: "Session Timeout (hours)", value: "24", type: "number" },
            { label: "Force 2FA for Admin", value: "Yes", type: "text" },
          ]},
        ].map(section => (
          <div key={section.title} className="bg-card border border-border rounded-2xl p-4">
            <h3 className="font-semibold mb-4 flex items-center gap-2"><section.icon size={16} /> {section.title}</h3>
            <div className="space-y-3">
              {section.settings.map(s => (
                <div key={s.label} className="flex items-center justify-between">
                  <label className="text-sm text-muted-foreground">{s.label}</label>
                  <input type={s.type} defaultValue={s.value} className="w-32 px-3 py-1.5 bg-secondary/50 border border-border rounded-lg text-sm text-right focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
              ))}
            </div>
          </div>
        ))}

        <button className="w-full py-3 bg-primary text-primary-foreground rounded-2xl text-sm font-semibold hover:bg-primary/90 transition-colors">Save Settings</button>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
