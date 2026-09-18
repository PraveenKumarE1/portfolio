import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, ChevronDown, Sparkles } from "lucide-react";
import { personal } from "../../data/portfolio";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Interactive 3D Geometric Structure with Distinct Colors per Face
function Geometric3DCube() {
  const [rotate, setRotate] = useState({ x: 15, y: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: -y * 40, y: x * 40 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 15, y: 25 });
  };

  return (
    <div
      className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center cursor-pointer select-none perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Colorful Glows */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-blue-600/20 via-purple-600/15 to-cyan-500/20 blur-3xl pointer-events-none" />

      {/* 3D Rotating Container */}
      <motion.div
        animate={{
          rotateX: [rotate.x, rotate.x + 8, rotate.x],
          rotateY: [rotate.y, rotate.y + 360],
        }}
        transition={{
          rotateY: { duration: 22, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="w-48 h-48 md:w-56 md:h-56 relative preserve-3d"
      >
        {/* Front - Blue AI Face */}
        <div
          className="absolute inset-0 border border-blue-500/60 bg-blue-600/[0.08] backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-4 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.25)]"
          style={{ transform: "translateZ(100px)" }}
        >
          <div className="w-8 h-8 rounded-lg bg-blue-500/25 border border-blue-400/50 flex items-center justify-center text-blue-300 font-mono text-xs mb-2">
            AI
          </div>
          <span className="text-white font-display font-bold text-xs tracking-wider">MACHINE LEARNING</span>
          <span className="text-[10px] text-blue-300 font-mono mt-1">PyTorch · Scikit-learn</span>
        </div>

        {/* Back - Purple Full Stack Face */}
        <div
          className="absolute inset-0 border border-purple-500/60 bg-purple-600/[0.08] backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-4 shadow-[0_0_30px_rgba(168,85,247,0.25)]"
          style={{ transform: "rotateY(180deg) translateZ(100px)" }}
        >
          <div className="w-8 h-8 rounded-lg bg-purple-500/25 border border-purple-400/50 flex items-center justify-center text-purple-300 font-mono text-xs mb-2">
            WEB
          </div>
          <span className="text-white font-display font-bold text-xs tracking-wider">FULL STACK</span>
          <span className="text-[10px] text-purple-300 font-mono mt-1">React · TypeScript · Node</span>
        </div>

        {/* Right - Emerald Computer Vision Face */}
        <div
          className="absolute inset-0 border border-emerald-500/60 bg-emerald-600/[0.08] backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-4 shadow-[0_0_30px_rgba(16,185,129,0.25)]"
          style={{ transform: "rotateY(90deg) translateZ(100px)" }}
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500/25 border border-emerald-400/50 flex items-center justify-center text-emerald-300 font-mono text-xs mb-2">
            CV
          </div>
          <span className="text-white font-display font-bold text-xs tracking-wider">COMPUTER VISION</span>
          <span className="text-[10px] text-emerald-300 font-mono mt-1">OpenCV · Retinal Imaging</span>
        </div>

        {/* Left - Cyan Data Science Face */}
        <div
          className="absolute inset-0 border border-cyan-500/60 bg-cyan-600/[0.08] backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-4 shadow-[0_0_30px_rgba(6,182,212,0.25)]"
          style={{ transform: "rotateY(-90deg) translateZ(100px)" }}
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-500/25 border border-cyan-400/50 flex items-center justify-center text-cyan-300 font-mono text-xs mb-2">
            DS
          </div>
          <span className="text-white font-display font-bold text-xs tracking-wider">DATA SCIENCE</span>
          <span className="text-[10px] text-cyan-300 font-mono mt-1">Pandas · EDA · SQL</span>
        </div>

        {/* Top */}
        <div
          className="absolute inset-0 border border-amber-500/30 bg-amber-500/[0.04] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.15)]"
          style={{ transform: "rotateX(90deg) translateZ(100px)" }}
        >
          <span className="text-amber-300 font-mono text-[10px]">INTELLIGENT SYSTEMS</span>
        </div>

        {/* Bottom */}
        <div
          className="absolute inset-0 border border-indigo-500/30 bg-indigo-500/[0.04] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.15)]"
          style={{ transform: "rotateX(-90deg) translateZ(100px)" }}
        >
          <span className="text-indigo-300 font-mono text-[10px]">ENGINEERED IN CODE</span>
        </div>
      </motion.div>

      {/* Orbiting Axis Rings with color gradients */}
      <div className="absolute inset-0 rounded-full border border-blue-500/25 pointer-events-none" />
      <div className="absolute inset-6 rounded-full border border-dashed border-purple-400/25 animate-spin" style={{ animationDuration: "35s" }} />
      <div className="absolute inset-12 rounded-full border border-cyan-400/20 animate-spin-reverse" style={{ animationDuration: "25s" }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Rich Multi-Color Ambient Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Availability pill with emerald pulse */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-emerald-600/15 border border-blue-500/30 text-xs font-mono mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-emerald-400 font-medium">Available for Opportunities</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400">AI & DS 2024–2028</span>
          </motion.div>

          {/* Main Name Heading with Multi-Color Shimmer */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-white leading-[1.08] mb-4"
          >
            Praveen Kumar <span className="gradient-hero-text">E</span>
          </motion.h1>

          {/* Subtitle / Role with color gradient */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg font-mono font-medium mb-6 tracking-wide flex flex-wrap items-center gap-2"
          >
            <span className="text-blue-400">AI & Data Science Engineer</span>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className="text-purple-400">Full-Stack Developer</span>
          </motion.p>

          {/* Narrative Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed mb-8 font-normal"
          >
            3rd-year B.Tech student at Shree Venkateshwara Hi-tech Engineering College. I engineer production-ready machine learning solutions, medical computer vision pipelines, and high-performance web applications.
          </motion.p>

          {/* Location & Contact row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-8"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-emerald-400" />
              {personal.location}
            </span>
            <span className="text-slate-600">·</span>
            <a href={`tel:${personal.phone}`} className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
              <Phone size={14} className="text-cyan-400" />
              {personal.phone}
            </a>
            <span className="text-slate-600">·</span>
            <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Mail size={14} className="text-blue-400" />
              {personal.email}
            </a>
          </motion.div>

          {/* Action CTAs with gradient buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3.5 mb-8"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-purple-600/40"
            >
              <span>Explore Projects (11)</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-all duration-200"
            >
              <span>Get in Touch</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center gap-3 pt-2"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 text-slate-400 hover:text-blue-400 flex items-center justify-center transition-all duration-200 shadow-sm"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/40 text-slate-400 hover:text-purple-400 flex items-center justify-center transition-all duration-200 shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Multi-Color 3D Interactive Geometric Cube */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="lg:col-span-5 flex flex-col items-center justify-center"
        >
          <Geometric3DCube />
          <p className="text-[11px] font-mono text-slate-400 mt-4 tracking-wider flex items-center gap-1.5">
            <Sparkles size={12} className="text-cyan-400" />
            <span>INTERACTIVE 3D · ROTATE WITH CURSOR</span>
          </p>
        </motion.div>

      </div>

      {/* Down arrow indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <a href="#about" aria-label="Scroll to About">
          <ChevronDown size={20} className="animate-bounce text-cyan-400" />
        </a>
      </div>
    </section>
  );
}
