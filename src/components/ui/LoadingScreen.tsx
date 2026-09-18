import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [text, setText] = useState("");
  const fullText = "PRAVEEN KUMAR E";
  const [phase, setPhase] = useState<"typing" | "role" | "exit">("typing");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setPhase("role"), 200);
        setTimeout(() => setPhase("exit"), 1200);
        setTimeout(() => onComplete(), 1800);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="fixed inset-0 z-[9999] bg-[#07070a] flex flex-col items-center justify-center select-none"
        >
          {/* Subtle blue ambient glow */}
          <div className="absolute w-72 h-72 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

          {/* 3D Wireframe Ring */}
          <div className="relative mb-8 w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-ping" style={{ animationDuration: "2.5s" }} />
            <div className="absolute inset-1 rounded-full border border-blue-500/40 border-t-transparent animate-spin" style={{ animationDuration: "1.2s" }} />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
          </div>

          {/* Typing Name */}
          <div className="flex items-center text-2xl md:text-4xl font-bold tracking-tight text-white font-display">
            <span>{text}</span>
            <span className="w-0.5 h-7 md:h-9 bg-blue-500 ml-1.5 animate-pulse" />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={phase === "role" ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-3 text-xs md:text-sm font-mono text-blue-400 tracking-[0.25em] uppercase"
          >
            AI & DATA SCIENCE ENGINEER
          </motion.p>

          {/* Minimal progress line */}
          <div className="w-48 h-[2px] bg-white/5 rounded-full mt-8 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
