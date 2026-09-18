import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
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

// Interactive 3D Geometric Structure (Pure CSS 3D transforms - No AI images)
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
      {/* Background Soft Glow */}
      <div className="absolute w-64 h-64 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

      {/* 3D Rotating Container */}
      <motion.div
        animate={{
          rotateX: [rotate.x, rotate.x + 8, rotate.x],
          rotateY: [rotate.y, rotate.y + 360],
        }}
        transition={{
          rotateY: { duration: 24, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="w-48 h-48 md:w-56 md:h-56 relative preserve-3d"
      >
        {/* Front */}
        <div
          className="absolute inset-0 border border-blue-500/40 bg-blue-500/[0.04] backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-4 transition-all duration-300"
          style={{ transform: "translateZ(100px)" }}
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-300 font-mono text-xs mb-2">
            AI
          </div>
          <span className="text-white font-display font-bold text-xs tracking-wider">MACHINE LEARNING</span>
          <span className="text-[10px] text-blue-400 font-mono mt-1">PyTorch · Scikit-learn</span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 border border-blue-400/30 bg-blue-600/[0.03] backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-4"
          style={{ transform: "rotateY(180deg) translateZ(100px)" }}
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-300 font-mono text-xs mb-2">
            WEB
          </div>
          <span className="text-white font-display font-bold text-xs tracking-wider">FULL STACK</span>
          <span className="text-[10px] text-blue-400 font-mono mt-1">React · TypeScript · Node</span>
        </div>

        {/* Right */}
        <div
          className="absolute inset-0 border border-blue-500/30 bg-blue-500/[0.03] backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-4"
          style={{ transform: "rotateY(90deg) translateZ(100px)" }}
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-300 font-mono text-xs mb-2">
            CV
          </div>
          <span className="text-white font-display font-bold text-xs tracking-wider">COMPUTER VISION</span>
          <span className="text-[10px] text-blue-400 font-mono mt-1">OpenCV · Retinal Imaging</span>
        </div>

        {/* Left */}
        <div
          className="absolute inset-0 border border-blue-500/30 bg-blue-500/[0.03] backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-4"
          style={{ transform: "rotateY(-90deg) translateZ(100px)" }}
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-300 font-mono text-xs mb-2">
            DS
          </div>
          <span className="text-white font-display font-bold text-xs tracking-wider">DATA SCIENCE</span>
          <span className="text-[10px] text-blue-400 font-mono mt-1">Pandas · EDA · SQL</span>
        </div>

        {/* Top */}
        <div
          className="absolute inset-0 border border-blue-500/20 bg-blue-500/[0.02] rounded-2xl flex items-center justify-center"
          style={{ transform: "rotateX(90deg) translateZ(100px)" }}
        >
          <span className="text-blue-400 font-mono text-[10px]">INTELLIGENT SYSTEMS</span>
        </div>

        {/* Bottom */}
        <div
          className="absolute inset-0 border border-blue-500/20 bg-blue-500/[0.02] rounded-2xl flex items-center justify-center"
          style={{ transform: "rotateX(-90deg) translateZ(100px)" }}
        >
          <span className="text-blue-400 font-mono text-[10px]">ENGINEERED IN CODE</span>
        </div>
      </motion.div>

      {/* Orbiting Axis Rings */}
      <div className="absolute inset-0 rounded-full border border-blue-500/20 pointer-events-none" />
      <div className="absolute inset-6 rounded-full border border-dashed border-blue-400/20 animate-spin" style={{ animationDuration: "35s" }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Subtle blue accent background gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Authentic Developer Information */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Availability pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>Available for Internships & Projects</span>
          </motion.div>

          {/* Main Name Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-white leading-[1.08] mb-4"
          >
            Praveen Kumar <span className="text-blue-500">E</span>
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg font-mono text-blue-400/90 mb-6 tracking-wide"
          >
            AI & Data Science Engineer · Full-Stack Developer
          </motion.p>

          {/* Genuine Narrative Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed mb-8 font-normal"
          >
            3rd-year B.Tech student at Shree Venkateshwara Hi-tech Engineering College. I build production-ready machine learning solutions, computer vision tools, and modern web applications with real-world impact.
          </motion.p>

          {/* Location & Quick Contact row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-8"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-blue-400" />
              {personal.location}
            </span>
            <span className="text-slate-600">·</span>
            <a href={`tel:${personal.phone}`} className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Phone size={14} className="text-blue-400" />
              {personal.phone}
            </a>
            <span className="text-slate-600">·</span>
            <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Mail size={14} className="text-blue-400" />
              {personal.email}
            </a>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3.5 mb-8"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
            >
              <span>Explore Projects (11)</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 transition-all duration-200"
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
              className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 text-slate-400 hover:text-blue-400 flex items-center justify-center transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 text-slate-400 hover:text-blue-400 flex items-center justify-center transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right Column: 3D Interactive Geometric Cube */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="lg:col-span-5 flex flex-col items-center justify-center"
        >
          <Geometric3DCube />
          <p className="text-[11px] font-mono text-slate-500 mt-4 tracking-wider">
            INTERACTIVE 3D · DRAG TO ROTATE
          </p>
        </motion.div>

      </div>

      {/* Down arrow anchor indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
        <a href="#about" aria-label="Scroll to About">
          <ChevronDown size={20} className="animate-bounce text-blue-400" />
        </a>
      </div>
    </section>
  );
}
