import { aiMetrics } from "@/data/adminDummyData";
import { Brain, Target, ThumbsUp, AlertTriangle, Clock, Cpu } from "lucide-react";

const metrics = [
  { label: "Match Accuracy", value: `${aiMetrics.matchAccuracy}%`, icon: Target, color: "text-green-400", bg: "bg-green-400/10" },
  { label: "Chatbot Satisfaction", value: `${aiMetrics.chatbotSatisfaction}%`, icon: ThumbsUp, color: "text-blue-400", bg: "bg-blue-400/10" },
  { label: "False Positive Rate", value: `${aiMetrics.falsePositiveRate}%`, icon: AlertTriangle, color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { label: "Suggestions Accepted", value: `${aiMetrics.suggestionsAccepted}%`, icon: Brain, color: "text-purple-400", bg: "bg-purple-400/10" },
  { label: "Avg Response Time", value: `${aiMetrics.avgResponseTime}ms`, icon: Clock, color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { label: "Models Active", value: aiMetrics.modelsActive.toString(), icon: Cpu, color: "text-pink-400", bg: "bg-pink-400/10" },
];

const AIMonitorPage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">AI System Monitoring</h1>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {metrics.map(m => (
        <div key={m.label} className="bg-card border border-border rounded-2xl p-4">
          <div className={`w-10 h-10 ${m.bg} rounded-xl flex items-center justify-center mb-3`}>
            <m.icon size={20} className={m.color} />
          </div>
          <p className="text-2xl font-bold">{m.value}</p>
          <p className="text-xs text-muted-foreground">{m.label}</p>
        </div>
      ))}
    </div>

    <div className="bg-card border border-border rounded-2xl p-4 space-y-3">
      <h3 className="font-semibold">Active Models</h3>
      {["Match Recommendation Engine v3.2", "Content Moderation CNN v2.1", "Chatbot NLP Model v4.0", "Fraud Detection System v1.8"].map((model, i) => (
        <div key={model} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-sm">{model}</span>
          </div>
          <span className="text-xs text-muted-foreground">Running</span>
        </div>
      ))}
    </div>
  </div>
);

export default AIMonitorPage;
