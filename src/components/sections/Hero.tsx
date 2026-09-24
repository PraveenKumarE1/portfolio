import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, ChevronDown, Cpu, Database, Code2, Brain, Activity, Sparkles } from "lucide-react";
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

// User Portrait Visual replacing System Core design, seamlessly merged with background colors
function PraveenPortraitVisual() {
  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] flex flex-col items-center justify-between p-5 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.04] to-[#07080d] backdrop-blur-2xl shadow-2xl group">
      
      {/* Background Warm & Cool Ambient Glows */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/15 via-purple-600/10 to-blue-600/15 opacity-80 blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      {/* Top Header Row */}
      <div className="w-full flex items-center justify-between z-20 text-xs font-mono border-b border-white/[0.08] pb-3">
        <span className="flex items-center gap-2 text-slate-300 font-semibold tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          PRAVEEN KUMAR E
        </span>
        <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-amber-400 font-bold text-[10px]">
          AI &amp; DS 2028
        </span>
      </div>

      {/* Center Portrait Image (Seamlessly merged with dark background) */}
      <div className="relative w-full flex-1 flex items-center justify-center my-3 z-10 overflow-hidden rounded-2xl">
        
        {/* Glowing Accent Ring behind subject */}
        <div className="absolute w-56 h-56 rounded-full border border-amber-500/25 animate-pulse shadow-[0_0_50px_rgba(245,158,11,0.15)]" />

        {/* Photo Container with multiply blend mode & bottom gradient fade */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <img
            src="./praveen.png"
            alt="Praveen Kumar E"
            className="w-full h-full object-cover object-top filter brightness-[1.03] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
            style={{
              mixBlendMode: "lighten",
              filter: "contrast(1.08) brightness(0.95)",
            }}
            onError={(e) => {
              // Fallback to absolute path or public URL if needed
              (e.currentTarget as HTMLImageElement).src = "/praveen.png";
            }}
          />

          {/* Bottom & Edge Fade Overlay to merge perfectly into dark editorial background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-transparent to-transparent opacity-90 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07080d]/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Floating Tech Badges over portrait */}
        <div className="absolute top-3 left-2 px-3 py-1 rounded-xl bg-[#090a12]/90 border border-blue-500/40 text-[10px] font-mono text-blue-300 shadow-xl backdrop-blur-md flex items-center gap-1.5">
          <Cpu size={12} className="text-blue-400" /> AI &amp; ML
        </div>
        <div className="absolute bottom-4 right-2 px-3 py-1 rounded-xl bg-[#090a12]/90 border border-amber-500/40 text-[10px] font-mono text-amber-300 shadow-xl backdrop-blur-md flex items-center gap-1.5">
          <Brain size={12} className="text-amber-400" /> Computer Vision
        </div>
        <div className="absolute bottom-4 left-2 px-3 py-1 rounded-xl bg-[#090a12]/90 border border-purple-500/40 text-[10px] font-mono text-purple-300 shadow-xl backdrop-blur-md flex items-center gap-1.5">
          <Code2 size={12} className="text-purple-400" /> React &amp; Node
        </div>
      </div>

      {/* Bottom Status Row */}
      <div className="w-full z-20 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
        <span className="text-slate-400 text-[11px] flex items-center gap-1.5 font-medium">
          <Sparkles size={13} className="text-amber-400" />
          Engineered Solutions
        </span>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
            Available for Hire ✓
          </span>
        </div>
      </div>

    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Atmospheric Editorial Ambient Warm Glows */}
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
            <span className="text-slate-400">AI &amp; DATA SCIENCE (2024–2028)</span>
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

        {/* Right Column: Praveen's Portrait seamlessly merged into dark background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="lg:col-span-5 flex flex-col items-center justify-center"
        >
          <PraveenPortraitVisual />
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
