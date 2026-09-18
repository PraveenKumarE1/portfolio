/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        void: "#050508",
        surface: "rgba(255,255,255,0.04)",
        border: "rgba(255,255,255,0.08)",
        blue: {
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          glow: "#3B82F6",
        },
        violet: {
          400: "#A78BFA",
          500: "#7C3AED",
          600: "#6D28D9",
          glow: "#7C3AED",
        },
        slate: {
          100: "#F1F5F9",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "glow-blue": "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)",
        "glow-violet": "radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)",
      },
      backgroundSize: {
        "grid-sm": "40px 40px",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "blink": "blink 1s step-end infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(59,130,246,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(124,58,237,0.4)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
