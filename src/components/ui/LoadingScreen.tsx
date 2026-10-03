import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

// Precision Infinity (∞) path in a 240×120 viewBox
const INFINITY_PATH =
  "M 120,60 C 120,28 94,8 70,16 C 40,26 28,52 28,60 C 28,68 40,94 70,104 C 94,112 120,92 120,60 C 120,28 146,8 170,16 C 200,26 212,52 212,60 C 212,68 200,94 170,104 C 146,112 120,92 120,60";

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 3 seconds progress counter from 0% to 100%
    const intervalTime = 30; // update every 30ms
    const totalDuration = 3000; // exactly 3 seconds
    const step = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(100, Math.round(prev + step));
      });
    }, intervalTime);

    // Hide at exactly 3.0s, trigger completion at 3.6s for smooth fade out
    const hideTimeout = setTimeout(() => setVisible(false), 3000);
    const completeTimeout = setTimeout(() => onComplete(), 3600);

    return () => {
      clearInterval(timer);
      clearTimeout(hideTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="infinite-loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none overflow-hidden bg-[#07070a]"
        >
          {/* Multi-Color Ambient Deep Space Glow */}
          <div
            className="absolute pointer-events-none w-[600px] h-[600px] rounded-full opacity-60 animate-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(139,92,246,0.18) 40%, rgba(6,182,212,0.12) 65%, transparent 80%)",
              filter: "blur(60px)",
              animationDuration: "3s",
            }}
          />

          {/* Core Brand Header */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-8 text-xs font-mono tracking-widest text-slate-400 uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-white font-bold">PRAVEEN KUMAR E</span>
            <span className="text-slate-600">·</span>
            <span className="text-purple-400 font-semibold">PORTFOLIO OS</span>
          </motion.div>

          {/* Futuristic Glowing Infinity Loop SVG */}
          <div className="relative flex items-center justify-center">
            {/* Center Pulsing Sparkle Core */}
            <div className="absolute w-6 h-6 rounded-full bg-cyan-400/40 blur-md animate-ping pointer-events-none" />

            <svg
              viewBox="0 0 240 120"
              width="300"
              height="150"
              className="overflow-visible"
            >
              <defs>
                {/* Linear gradient for infinity stroke */}
                <linearGradient id="inf-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="35%" stopColor="#3B82F6" />
                  <stop offset="70%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>

                {/* Intense Neon Glow Filter */}
                <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur1" />
                  <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Track Base Guide (Subtle) */}
              <path
                d={INFINITY_PATH}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* 2. Deep Outer Neon Aura Bloom */}
              <path
                d={INFINITY_PATH}
                fill="none"
                stroke="url(#inf-gradient)"
                strokeWidth="12"
                strokeLinecap="round"
                className="opacity-50"
                style={{
                  strokeDasharray: "200 400",
                  animation: "inf-loop 2s linear infinite",
                  filter: "blur(8px)",
                }}
              />

              {/* 3. High-Intensity Sharp Glowing Laser Beam */}
              <path
                d={INFINITY_PATH}
                fill="none"
                stroke="url(#inf-gradient)"
                strokeWidth="4.5"
                strokeLinecap="round"
                filter="url(#neon-glow)"
                style={{
                  strokeDasharray: "200 400",
                  animation: "inf-loop 2s linear infinite",
                }}
              />

              {/* 4. Leading Ultra-Bright White Head Particle */}
              <path
                d={INFINITY_PATH}
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3.5"
                strokeLinecap="round"
                style={{
                  strokeDasharray: "30 570",
                  animation: "inf-loop 2s linear infinite",
                  filter: "drop-shadow(0 0 8px #FFFFFF)",
                }}
              />
            </svg>
          </div>

          {/* Progress Percentage & Status Readout */}
          <div className="mt-8 flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold font-mono tracking-wider text-white">
                {progress}%
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs font-mono text-cyan-400 font-medium tracking-wide">
                {progress < 40
                  ? "INITIALIZING SYSTEM CORE..."
                  : progress < 80
                  ? "LOADING AI WORKFLOWS & REPOS..."
                  : "READY TO LAUNCH"}
              </span>
            </div>

            {/* Micro Progress Bar Line */}
            <div className="w-56 h-1 rounded-full bg-white/10 overflow-hidden mt-1 p-[1px]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="text-[10px] font-mono text-slate-500 tracking-widest mt-2 uppercase">
              3.0s Auto-Launch Sequence
            </span>
          </div>

          {/* Keyframe Animation for Infinite Path Offset */}
          <style>{`
            @keyframes inf-loop {
              0% {
                stroke-dashoffset: 0;
              }
              100% {
                stroke-dashoffset: -600;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
