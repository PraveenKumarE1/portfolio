import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, ChevronDown, Sparkles, Cpu, Database, Code2, Brain } from "lucide-react";
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

// Combined 3D Interactive Geometric Structure with Orbiting Tech Nodes
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
      className="relative w-80 h-80 md:w-[440px] md:h-[440px] flex items-center justify-center cursor-pointer select-none perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Colorful Ambient Glows */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-blue-600/20 via-purple-600/15 to-cyan-500/20 blur-3xl pointer-events-none" />

      {/* Orbiting Tech Badges (from previous version, combined with new 3D style) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] pointer-events-none z-20"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-xl bg-[#0a0a14]/90 border border-blue-500/50 text-blue-300 text-[11px] font-mono flex items-center gap-1.5 shadow-lg shadow-blue-500/20">
          <Cpu size={13} className="text-blue-400" /> AI & ML
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-xl bg-[#0a0a14]/90 border border-purple-500/50 text-purple-300 text-[11px] font-mono flex items-center gap-1.5 shadow-lg shadow-purple-500/20">
          <Database size={13} className="text-purple-400" /> Data Science
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2.5 py-1 rounded-xl bg-[#0a0a14]/90 border border-cyan-500/50 text-cyan-300 text-[11px] font-mono flex items-center gap-1.5 shadow-lg shadow-cyan-500/20">
          <Code2 size={13} className="text-cyan-400" /> React & Node
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2.5 py-1 rounded-xl bg-[#0a0a14]/90 border border-emerald-500/50 text-emerald-300 text-[11px] font-mono flex items-center gap-1.5 shadow-lg shadow-emerald-500/20">
          <Brain size={13} className="text-emerald-400" /> Computer Vision
        </div>
      </motion.div>

      {/* 3D Rotating Cube Container */}
      <motion.div
        animate={{
          rotateX: [rotate.x, rotate.x + 8, rotate.x],
          rotateY: [rotate.y, rotate.y + 360],
        }}
        transition={{
          rotateY: { duration: 22, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="w-44 h-44 md:w-52 md:h-52 relative preserve-3d"
      >
        {/* Front - Blue AI Face */}
        <div
          className="absolute inset-0 border border-blue-500/60 bg-blue-600/[0.08] backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-4 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.25)]"
          style={{ transform: "translateZ(95px)" }}
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
          style={{ transform: "rotateY(180deg) translateZ(95px)" }}
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
          style={{ transform: "rotateY(90deg) translateZ(95px)" }}
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
          style={{ transform: "rotateY(-90deg) translateZ(95px)" }}
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
          style={{ transform: "rotateX(90deg) translateZ(95px)" }}
        >
          <span className="text-amber-300 font-mono text-[10px]">INTELLIGENT SYSTEMS</span>
        </div>

        {/* Bottom */}
        <div
          className="absolute inset-0 border border-indigo-500/30 bg-indigo-500/[0.04] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.15)]"
          style={{ transform: "rotateX(-90deg) translateZ(95px)" }}
        >
          <span className="text-indigo-300 font-mono text-[10px]">ENGINEERED IN CODE</span>
        </div>
      </motion.div>

      {/* Orbiting Axis Rings */}
      <div className="absolute inset-0 rounded-full border border-blue-500/25 pointer-events-none" />
      <div className="absolute inset-6 rounded-full border border-dashed border-purple-400/25 animate-spin" style={{ animationDuration: "35s" }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Ambient Multi-Color Glows */}
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
            3rd-year B.Tech student at Shree Venkateshwara Hi-tech Engineering College. Building intelligent machine learning solutions, computer vision models, and modern digital applications.
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

        {/* Right Column: CV Detection Workspace + n8n Node Graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="lg:col-span-5 flex flex-col items-center justify-center gap-5"
        >
          {/* ── CV Detection Visualization (image 2 style) ── */}
          <div className="relative w-full max-w-[400px] aspect-square">
            {/* Dark space background */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{
                background: "radial-gradient(ellipse at 40% 45%, rgba(30,20,90,0.85) 0%, rgba(6,6,16,0.98) 65%)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Scattered nebula particles */}
              {([
                {top:"8%",  left:"15%", s:2,   c:"#3B82F6", d:"0s"  },
                {top:"18%", left:"72%", s:1.5, c:"#A855F7", d:"0.8s"},
                {top:"35%", left:"88%", s:2.5, c:"#06B6D4", d:"1.5s"},
                {top:"60%", left:"5%",  s:1.5, c:"#3B82F6", d:"0.4s"},
                {top:"75%", left:"80%", s:2,   c:"#A855F7", d:"2s"  },
                {top:"85%", left:"30%", s:1.5, c:"#06B6D4", d:"1.2s"},
                {top:"22%", left:"45%", s:1,   c:"#38BDF8", d:"0.6s"},
                {top:"50%", left:"55%", s:2,   c:"#818CF8", d:"1.8s"},
                {top:"90%", left:"62%", s:1.5, c:"#3B82F6", d:"0.3s"},
              ] as const).map((p, i) => (
                <span key={i} className="absolute rounded-full animate-pulse"
                  style={{ top:p.top, left:p.left, width:p.s+"px", height:p.s+"px",
                    background:p.c, boxShadow:`0 0 ${p.s*4}px ${p.c}`,
                    animationDelay:p.d, animationDuration:"2.8s" }} />
              ))}
            </div>

            {/* 3D Cube centred */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="scale-[0.70]"><Geometric3DCube /></div>
            </div>

            {/* Box 1 — blue — Machine Learning */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.7,duration:0.5}}
              className="absolute z-20 pointer-events-none" style={{top:"6%",left:"8%",width:"42%",height:"32%"}}>
              <div className="absolute inset-0 rounded-sm" style={{border:"1px solid rgba(59,130,246,0.75)",boxShadow:"0 0 14px rgba(59,130,246,0.3)"}}>
                <span className="absolute -top-[3px] -left-[3px]  w-3 h-3 border-t-2 border-l-2 border-blue-400"/>
                <span className="absolute -top-[3px] -right-[3px] w-3 h-3 border-t-2 border-r-2 border-blue-400"/>
                <span className="absolute -bottom-[3px] -left-[3px]  w-3 h-3 border-b-2 border-l-2 border-blue-400"/>
                <span className="absolute -bottom-[3px] -right-[3px] w-3 h-3 border-b-2 border-r-2 border-blue-400"/>
              </div>
              <span className="absolute -top-5 left-0 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-sm text-white" style={{background:"rgba(59,130,246,0.85)"}}>ML Core 98.7%</span>
              <span className="absolute -bottom-[18px] right-0 text-[8px] font-mono text-blue-300/80">x:127 y:213</span>
            </motion.div>

            {/* Box 2 — purple — Computer Vision */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.0,duration:0.5}}
              className="absolute z-20 pointer-events-none" style={{top:"38%",left:"50%",width:"40%",height:"30%"}}>
              <div className="absolute inset-0 rounded-sm" style={{border:"1px solid rgba(168,85,247,0.75)",boxShadow:"0 0 14px rgba(168,85,247,0.3)"}}>
                <span className="absolute -top-[3px] -left-[3px]  w-3 h-3 border-t-2 border-l-2 border-purple-400"/>
                <span className="absolute -top-[3px] -right-[3px] w-3 h-3 border-t-2 border-r-2 border-purple-400"/>
                <span className="absolute -bottom-[3px] -left-[3px]  w-3 h-3 border-b-2 border-l-2 border-purple-400"/>
                <span className="absolute -bottom-[3px] -right-[3px] w-3 h-3 border-b-2 border-r-2 border-purple-400"/>
              </div>
              <span className="absolute -top-5 left-0 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-sm text-white" style={{background:"rgba(168,85,247,0.85)"}}>CV Module 96.1%</span>
              <span className="absolute -bottom-[18px] right-0 text-[8px] font-mono text-purple-300/80">x:531 y:646</span>
            </motion.div>

            {/* Box 3 — cyan — Data Pipeline */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.3,duration:0.5}}
              className="absolute z-20 pointer-events-none" style={{top:"65%",left:"10%",width:"35%",height:"26%"}}>
              <div className="absolute inset-0 rounded-sm" style={{border:"1px solid rgba(6,182,212,0.75)",boxShadow:"0 0 14px rgba(6,182,212,0.3)"}}>
                <span className="absolute -top-[3px] -left-[3px]  w-3 h-3 border-t-2 border-l-2 border-cyan-400"/>
                <span className="absolute -top-[3px] -right-[3px] w-3 h-3 border-t-2 border-r-2 border-cyan-400"/>
                <span className="absolute -bottom-[3px] -left-[3px]  w-3 h-3 border-b-2 border-l-2 border-cyan-400"/>
                <span className="absolute -bottom-[3px] -right-[3px] w-3 h-3 border-b-2 border-r-2 border-cyan-400"/>
              </div>
              <span className="absolute -top-5 left-0 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-sm text-white" style={{background:"rgba(6,182,212,0.85)"}}>Data API 94.5%</span>
              <span className="absolute -bottom-[18px] right-0 text-[8px] font-mono text-cyan-300/80">x:251 y:798</span>
            </motion.div>

            {/* Live indicator */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.6}}
              className="absolute top-3 right-3 z-30 flex items-center gap-1.5 px-2 py-1 rounded-full text-[9px] font-mono font-bold text-white"
              style={{background:"rgba(16,185,129,0.85)",boxShadow:"0 0 12px rgba(16,185,129,0.4)"}}>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"/>
              LIVE DETECTION
            </motion.div>

            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 text-[9px] font-mono text-slate-500 whitespace-nowrap tracking-wider">
              Computer Vision · Object Detection · Neural Network
            </p>
          </div>

          {/* ── n8n → GitHub Workflow Node Graph ── */}
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:1.8,duration:0.6}}
            className="w-full max-w-[400px]">
            <div className="flex items-center justify-between px-4 py-3 rounded-xl"
              style={{background:"rgba(8,8,18,0.90)",border:"1px solid rgba(255,255,255,0.07)",backdropFilter:"blur(12px)"}}>
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest hidden sm:block">n8n Pipeline</span>

              <div className="flex items-center gap-1">
                {/* GitHub node */}
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center">
                    <GithubIcon size={14}/>
                  </div>
                  <span className="text-[8px] font-mono text-slate-500">GitHub</span>
                </div>

                <svg width="28" height="10" className="mb-3 shrink-0">
                  <line x1="0" y1="5" x2="28" y2="5" stroke="rgba(59,130,246,0.35)" strokeWidth="1"/>
                  <circle r="2" fill="#3B82F6"><animateMotion dur="1.2s" repeatCount="indefinite" path="M0,5 L28,5"/></circle>
                </svg>

                {/* n8n node */}
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold text-white"
                    style={{background:"linear-gradient(135deg,#ea5454,#c93b3b)",boxShadow:"0 0 12px rgba(234,84,84,0.4)"}}>n8n</div>
                  <span className="text-[8px] font-mono text-slate-500">Automate</span>
                </div>

                <svg width="28" height="10" className="mb-3 shrink-0">
                  <line x1="0" y1="5" x2="28" y2="5" stroke="rgba(168,85,247,0.35)" strokeWidth="1"/>
                  <circle r="2" fill="#A855F7"><animateMotion dur="1.2s" begin="0.4s" repeatCount="indefinite" path="M0,5 L28,5"/></circle>
                </svg>

                {/* Build node */}
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 border border-green-500/30 flex items-center justify-center"
                    style={{boxShadow:"0 0 10px rgba(16,185,129,0.2)"}}>
                    <span className="text-[9px] font-mono text-green-400 font-bold">▶</span>
                  </div>
                  <span className="text-[8px] font-mono text-slate-500">Build</span>
                </div>

                <svg width="28" height="10" className="mb-3 shrink-0">
                  <line x1="0" y1="5" x2="28" y2="5" stroke="rgba(16,185,129,0.35)" strokeWidth="1"/>
                  <circle r="2" fill="#10B981"><animateMotion dur="1.2s" begin="0.8s" repeatCount="indefinite" path="M0,5 L28,5"/></circle>
                </svg>

                {/* Live node */}
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{background:"rgba(16,185,129,0.12)",border:"1px solid rgba(16,185,129,0.30)"}}>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
                  </div>
                  <span className="text-[8px] font-mono text-emerald-400">Live</span>
                </div>
              </div>

              <span className="text-[9px] font-mono text-emerald-400 font-semibold">Active ✓</span>
            </div>
          </motion.div>
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
