import { useState } from "react";
import { ChevronLeft, AlertTriangle } from "lucide-react";

interface ReportScreenProps {
  onBack: () => void;
}

const reasons = [
  "Inappropriate photos",
  "Spam or fake profile",
  "Harassment or bullying",
  "Underage user",
  "Scam or fraud",
  "Other",
];

const ReportScreen = ({ onBack }: ReportScreenProps) => {
  const [selected, setSelected] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="mobile-container px-6 py-4 safe-bottom">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="w-10 h-10 glass rounded-full flex items-center justify-center">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-xl font-bold">Report & Block</h1>
      </div>

      <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center mb-6">
        <AlertTriangle size={28} className="text-destructive" />
      </div>

      <p className="text-sm text-muted-foreground mb-6">Please select a reason for reporting this profile:</p>

      <div className="space-y-2 mb-6">
        {reasons.map((reason) => (
          <button
            key={reason}
            onClick={() => setSelected(reason)}
            className={`w-full glass rounded-2xl px-4 py-3.5 text-left text-sm font-medium transition-all ${
              selected === reason ? "ring-2 ring-primary text-foreground" : "text-muted-foreground"
            }`}
          >
            {reason}
          </button>
        ))}
      </div>

      <textarea
        placeholder="Add more details (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
        className="w-full glass rounded-2xl px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground outline-none resize-none focus:ring-2 focus:ring-primary mb-6"
      />

      <button className="w-full bg-destructive text-destructive-foreground py-4 rounded-2xl font-semibold">
        Submit Report
      </button>
    </div>
  );
};

export default ReportScreen;
