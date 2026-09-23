import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

// Infinity (∞) path in a 240×120 viewBox, tracing both loops from the center crossing
const INFINITY_PATH =
  "M 120,60 C 120,28 94,8 70,16 C 40,26 28,52 28,60 C 28,68 40,94 70,104 C 94,112 120,92 120,60 C 120,28 146,8 170,16 C 200,26 212,52 212,60 C 212,68 200,94 170,104 C 146,112 120,92 120,60";

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide the loading screen at 2.1s, call onComplete at 2.8s (allows fade-out)
    const hide = setTimeout(() => setVisible(false), 2100);
    const done = setTimeout(() => onComplete(), 2800);
    return () => {
      clearTimeout(hide);
      clearTimeout(done);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none"
          style={{ backgroundColor: "#06060a" }}
        >
          {/* ── Ambient teal-purple background glow (matching reference) ── */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "700px",
              height: "500px",
              background:
                "radial-gradient(ellipse at 48% 52%, rgba(55,30,160,0.28) 0%, rgba(0,110,105,0.16) 42%, transparent 68%)",
              filter: "blur(55px)",
            }}
          />

          {/* ── Infinity Symbol SVG ── */}
          <div className="relative">
            <svg
              viewBox="0 0 240 120"
              width="270"
              height="135"
              style={{ overflow: "visible" }}
            >
              <defs>
                {/* Bloom/neon glow filter */}
                <filter id="ldr-bloom" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Dim full-path base (always visible) */}
              <path
                d={INFINITY_PATH}
                fill="none"
                stroke="rgba(90,60,200,0.20)"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* 2. Soft purple glow bloom layer (blurred) */}
              <path
                d={INFINITY_PATH}
                fill="none"
                stroke="rgba(125,75,255,0.52)"
                strokeWidth="11"
                strokeLinecap="round"
                style={{
                  strokeDasharray: "220 380",
                  animation: "ldr-neon 1.9s linear infinite",
                  filter: "blur(7px)",
                }}
              />

              {/* 3. Bright white-purple neon stroke (sharp leading edge) */}
              <path
                d={INFINITY_PATH}
                fill="none"
                stroke="rgba(235,215,255,0.96)"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="url(#ldr-bloom)"
                style={{
                  strokeDasharray: "220 380",
                  animation: "ldr-neon 1.9s linear infinite",
                }}
              />
            </svg>
          </div>

          {/* ── "Loading..." text ── */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 0.65, 0.65, 0.3] }}
            transition={{
              delay: 0.4,
              duration: 1.8,
              times: [0, 0.15, 0.85, 1],
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="mt-8 text-[13px] font-mono text-slate-500 tracking-[0.30em]"
          >
            Loading...
          </motion.p>

          {/* CSS keyframe: move the dash segment forward along the path */}
          <style>{`
            @keyframes ldr-neon {
              from { stroke-dashoffset: 0;    }
              to   { stroke-dashoffset: -600; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
