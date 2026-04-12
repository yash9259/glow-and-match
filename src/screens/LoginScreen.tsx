import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Phone, ArrowRight } from "lucide-react";

interface LoginScreenProps {
  onComplete: () => void;
}

const LoginScreen = ({ onComplete }: LoginScreenProps) => {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  return (
    <div className="mobile-container flex flex-col px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-12"
      >
        <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
          <Flame size={22} className="text-primary-foreground" />
        </div>
        <span className="text-xl font-bold text-gradient">Spark</span>
      </motion.div>

      {step === "phone" ? (
        <motion.div
          key="phone"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
        >
          <h1 className="text-3xl font-extrabold mb-2">Welcome back</h1>
          <p className="text-muted-foreground mb-10 text-sm">Enter your phone number to continue</p>

          <div className="glass rounded-2xl p-4 flex items-center gap-3 mb-6">
            <Phone size={20} className="text-muted-foreground" />
            <span className="text-muted-foreground font-medium">+91</span>
            <input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              maxLength={10}
            />
          </div>

          <button
            onClick={() => setStep("otp")}
            className="w-full gradient-primary text-primary-foreground py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 glow-primary"
          >
            Send OTP <ArrowRight size={18} />
          </button>

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-border" />
            <span className="text-muted-foreground text-xs">or continue with</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="flex gap-3">
            {["Google", "Apple"].map((provider) => (
              <button
                key={provider}
                className="flex-1 glass rounded-2xl py-3.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                {provider}
              </button>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="otp"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-3xl font-extrabold mb-2">Verify OTP</h1>
          <p className="text-muted-foreground mb-10 text-sm">
            We sent a code to +91 {phone || "9876543210"}
          </p>

          <div className="flex gap-3 mb-8 justify-center">
            {otp.map((digit, i) => (
              <input
                key={i}
                id={`otp-${i}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(i, e.target.value)}
                className="w-16 h-16 glass rounded-2xl text-center text-2xl font-bold text-foreground outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            ))}
          </div>

          <button
            onClick={onComplete}
            className="w-full gradient-primary text-primary-foreground py-4 rounded-2xl font-semibold glow-primary"
          >
            Verify & Continue
          </button>

          <button className="w-full text-center mt-4 text-muted-foreground text-sm">
            Resend OTP in <span className="text-primary font-medium">00:30</span>
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default LoginScreen;
