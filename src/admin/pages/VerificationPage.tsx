import { verificationRequests } from "@/data/adminDummyData";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const VerificationPage = () => {
  const [requests, setRequests] = useState(verificationRequests);

  const handleAction = (id: number, action: "approved" | "rejected") => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status: action } : r));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Profile Verification</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {requests.map(r => (
          <div key={r.id} className="bg-card border border-border rounded-2xl p-4 space-y-4">
            <div className="flex items-center gap-3">
              <img src={r.image} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold">{r.name}</p>
                <p className="text-xs text-muted-foreground">Submitted {r.submitted}</p>
              </div>
              <Badge variant={r.status === "pending" ? "secondary" : r.status === "approved" ? "default" : "destructive"} className="ml-auto text-xs">{r.status}</Badge>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Profile Photo</p>
                <img src={r.image} alt="Profile" className="w-full aspect-square rounded-xl object-cover" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Selfie Verification</p>
                <img src={r.selfie} alt="Selfie" className="w-full aspect-square rounded-xl object-cover" />
              </div>
            </div>
            {r.status === "pending" && (
              <div className="flex gap-2">
                <button onClick={() => handleAction(r.id, "approved")} className="flex-1 flex items-center justify-center gap-2 py-2 bg-green-500/10 text-green-400 rounded-xl text-sm font-medium hover:bg-green-500/20 transition-colors">
                  <Check size={16} /> Approve
                </button>
                <button onClick={() => handleAction(r.id, "rejected")} className="flex-1 flex items-center justify-center gap-2 py-2 bg-red-500/10 text-red-400 rounded-xl text-sm font-medium hover:bg-red-500/20 transition-colors">
                  <X size={16} /> Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerificationPage;
