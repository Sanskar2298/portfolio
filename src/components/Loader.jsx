import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }) {
  const [phase, setPhase] = useState("visible"); // visible | fading

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fading"), 1600);
    const t2 = setTimeout(() => onComplete(), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: "#0A0A0F" }}
          animate={phase === "fading" ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onAnimationComplete={() => {
            if (phase === "fading") setPhase("done");
          }}
        >
          {/* Outer ring */}
          <div className="relative flex items-center justify-center mb-8">
            <motion.div
              className="absolute rounded-full border"
              style={{ width: 80, height: 80, borderColor: "rgba(108,99,255,0.2)" }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute rounded-full border"
              style={{ width: 60, height: 60, borderColor: "rgba(108,99,255,0.3)" }}
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(108,99,255,0.3), rgba(167,139,250,0.1))",
                border: "1px solid rgba(108,99,255,0.4)",
              }}
            >
              <span className="font-display font-bold text-lg text-gradient">SS</span>
            </motion.div>
          </div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-display font-semibold text-text-primary text-lg tracking-tight mb-1"
          >
            Sanskar Srivastava
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-xs font-display tracking-widest uppercase text-text-muted"
          >
            Portfolio
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="mt-10 w-32 h-px rounded-full overflow-hidden"
            style={{ background: "rgba(108,99,255,0.15)" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #6C63FF, #A78BFA)",
                boxShadow: "0 0 8px rgba(108,99,255,0.6)",
              }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}