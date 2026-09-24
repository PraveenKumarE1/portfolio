import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, ChevronDown, Cpu, Database, Code2, Brain, CheckCircle2, Activity } from "lucide-react";
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

// Simple, Clean 3D AI Core Disc (Replacing cluttered image 2 option with high elegance)
function SimpleMinimalCoreVisual() {
  return (
    <div className="relative w-full max-w-[420px] aspect-square flex flex-col items-center justify-between p-6 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.04] to-black/80 backdrop-blur-2xl shadow-2xl group">
      {/* Soft atmospheric background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-amber-500/10 opacity-70 blur-2xl pointer-events-none" />

      {/* Top Header Row */}
      <div className="w-full flex items-center justify-between z-10 text-xs font-mono border-b border-white/[0.08] pb-4">
        <span className="flex items-center gap-2 text-slate-300 font-semibold tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          SYSTEM CORE
        </span>
        <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-slate-400 text-[10px]">
          v2.5 ACTIVE
        </span>
      </div>

      {/* Center Holographic Core Visual */}
      <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center my-4 z-10">
        {/* Outer glowing orbital ring */}
        <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-spin shadow-[0_0_30px_rgba(59,130,246,0.15)]" style={{ animationDuration: "25s" }} />
        
        {/* Middle dashed cyan ring */}
        <div className="absolute inset-4 rounded-full border border-dashed border-cyan-400/40 animate-spin" style={{ animationDuration: "18s", animationDirection: "reverse" }} />

        {/* Inner pulsing core disc */}
        <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-0.5 shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-transform duration-500 group-hover:scale-110">
          <div className="w-full h-full rounded-full bg-[#080912] flex flex-col items-center justify-center border border-white/20">
            <Cpu size={26} className="text-blue-400 mb-1" />
            <span className="text-[10px] font-mono font-bold text-white tracking-widest">ENGINE</span>
          </div>
        </div>

        {/* Clean floating tech pills around core */}
        <div className="absolute top-2 left-0 px-2.5 py-1 rounded-lg bg-[#0a0b14]/90 border border-blue-500/30 text-[10px] font-mono text-blue-300 shadow-md">
          ML Architecture
        </div>
        <div className="absolute bottom-2 right-0 px-2.5 py-1 rounded-lg bg-[#0a0b14]/90 border border-purple-500/30 text-[10px] font-mono text-purple-300 shadow-md">
          Computer Vision
        </div>
        <div className="absolute bottom-4 left-2 px-2.5 py-1 rounded-lg bg-[#0a0b14]/90 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 shadow-md">
          React & Node
        </div>
      </div>

      {/* Bottom Clean n8n Workflow Pill (Simple & Neat) */}
      <div className="w-full z-10 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
        <span className="text-slate-400 text-[11px] flex items-center gap-1.5">
          <Activity size={13} className="text-emerald-400" />
          n8n Pipeline
        </span>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-300 text-[10px]">
            <GithubIcon size={10} /> Push
          </span>
          <span className="text-slate-600">→</span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px]">
            Live ✓
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Atmospheric Editorial Ambient Warm Glows (Image 1 style) */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-amber-600/[0.07] blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-blue-600/[0.07] blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column — High Editorial Style (INSIGHT style layout) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Numbered Section Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-xs font-mono mb-6"
          >
            <span className="text-amber-400 font-bold tracking-widest uppercase">01 / CREATIVE PORTFOLIO</span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400">AI & DATA SCIENCE (2024–2028)</span>
          </motion.div>

          {/* Huge Editorial Heading (INSIGHT style massive typography) */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-7xl md:text-8xl font-bold font-editorial tracking-tighter text-white leading-[0.98] mb-6 uppercase"
          >
            Praveen <br />
            <span className="gradient-editorial-headline">Kumar E</span>
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg font-mono text-slate-300 font-medium mb-6 tracking-wide"
          >
            AI &amp; Data Science Engineer · Full-Stack Developer
          </motion.p>

          {/* Narrative Summary */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed mb-8 font-normal"
          >
            3rd-year B.Tech student at Shree Venkateshwara Hi-tech Engineering College. Crafting intelligent machine learning architectures, computer vision models, and clean digital products.
          </motion.p>

          {/* Location & Contact row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-9"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-amber-400" />
              {personal.location}
            </span>
            <span className="text-slate-700">·</span>
            <a href={`tel:${personal.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={14} className="text-cyan-400" />
              {personal.phone}
            </a>
            <span className="text-slate-700">·</span>
            <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={14} className="text-blue-400" />
              {personal.email}
            </a>
          </motion.div>

          {/* Editorial Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <a
              href="#projects"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-xs font-mono font-semibold bg-white text-black hover:bg-slate-200 transition-all duration-200 shadow-xl"
            >
              <span>EXPLORE WORK</span>
              <ArrowUpRight size={15} />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono font-semibold bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 transition-all duration-200"
            >
              <span>GET IN TOUCH</span>
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
              className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Simple, Neat 3D AI Core Visual (Replacing photo 2 option) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="lg:col-span-5 flex flex-col items-center justify-center"
        >
          <SimpleMinimalCoreVisual />
        </motion.div>

      </div>

      {/* Down arrow indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
        <a href="#about" aria-label="Scroll to About">
          <ChevronDown size={20} className="animate-bounce text-slate-400" />
        </a>
      </div>
    </section>
  );
}
