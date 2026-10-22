import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { personal } from "../../data/portfolio";
import praveenPortrait from "../../assets/praveen_portrait.jpg";
import praveenPng from "../../assets/praveen.png";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex items-center justify-center">
      {/* Background Soft Purple Ambient Glow */}
      <div className="blob-static top-1/4 -left-20 w-80 h-80 opacity-40" />
      <div className="blob-static top-1/3 -right-20 w-96 h-96 opacity-30" />

      {/* Hero Bottom Gradient Shadow to ground portrait seamlessly */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10"
        style={{
          background: "linear-gradient(180deg, hsla(240, 100%, 2%, 0) 0%, hsl(240, 100%, 2%) 95%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full relative z-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left / Top Information: "Hello, I'm" & Name in Unbounded Font */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col items-start z-20"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[hsla(255,60%,64%,0.12)] border border-[hsla(255,60%,64%,0.3)] mb-4">
              <span className="w-2 h-2 rounded-full bg-[hsl(255,60%,64%)] animate-ping" />
              <span className="text-xs font-mono text-[hsl(255,60%,74%)] font-medium">
                Available for Roles
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-medium text-[hsl(255,60%,64%)] font-unbounded mb-2">
              Hello, I'm
            </h3>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-unbounded text-white tracking-tight leading-[1.1] mb-6">
              Praveen <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[hsl(255,60%,74%)]">
                Kumar E
              </span>
            </h1>

            <p className="text-sm font-montserrat text-slate-400 max-w-sm leading-relaxed mb-6">
              3rd-year B.Tech in AI &amp; Data Science. Crafting neural vision systems, autonomous workflows, and production-grade full-stack products.
            </p>

            {/* CTAs matching target signature button */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="button-panda">
                <span>View Projects</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="#contact"
                className="button-secondary-panda"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-4 mt-8 pt-4 border-t border-white/10 w-full">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[hsl(255,60%,64%)] hover:border-[hsl(255,60%,64%)] hover:shadow-[0_0_15px_hsla(255,60%,64%,0.4)] transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[hsl(255,60%,64%)] hover:border-[hsl(255,60%,64%)] hover:shadow-[0_0_15px_hsla(255,60%,64%,0.4)] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[hsl(255,60%,64%)] hover:border-[hsl(255,60%,64%)] hover:shadow-[0_0_15px_hsla(255,60%,64%,0.4)] transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[hsl(255,60%,64%)] hover:border-[hsl(255,60%,64%)] hover:shadow-[0_0_15px_hsla(255,60%,64%,0.4)] transition-all"
                aria-label="Phone"
              >
                <Phone size={17} />
              </a>
            </div>
          </motion.div>

          {/* Center Column: Portrait with Rotating Purple Glow Blob (Target Site Signature) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative my-6 lg:my-0"
          >
            {/* Animated Rotating Gradient Blob Behind Portrait */}
            <div
              className="blob-animate w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]"
              style={{
                filter: "blur(48px)",
                opacity: 0.85,
              }}
            />

            {/* Portrait Container */}
            <div className="relative w-[280px] sm:w-[330px] md:w-[370px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 group">
              <img
                src={praveenPortrait}
                alt="Praveen Kumar E"
                className="w-full h-full object-cover object-top filter brightness-[1.03] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = praveenPng;
                }}
              />

              {/* Seamless gradient fade at bottom of portrait */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, rgba(2, 2, 8, 0.7) 85%, #020208 100%)",
                }}
              />
            </div>
          </motion.div>

          {/* Right Column: Stacked Profession Display (Creative / AI & Data Science / Developer) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-col items-start lg:items-end text-left lg:text-right z-20"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[hsl(255,60%,64%)] mb-2">
              Discipline
            </span>

            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-unbounded text-slate-300 font-medium">
                Creative
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-unbounded font-bold text-[hsl(255,60%,64%)] drop-shadow-[0_0_20px_hsla(255,60%,64%,0.4)] my-1">
                AI &amp; DS
              </h2>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-unbounded font-bold text-white">
                Engineer
              </h2>
            </div>

            <div className="space-y-3 text-xs font-mono text-slate-400">
              <div className="flex items-center lg:justify-end gap-2">
                <MapPin size={13} className="text-[hsl(255,60%,64%)]" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center lg:justify-end gap-2 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>15+ GitHub Repositories</span>
              </div>
              <div className="flex items-center lg:justify-end gap-2 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[hsl(255,60%,64%)]" />
                <span>7+ Verified Certifications</span>
              </div>
            </div>

            {/* Resume button link */}
            <a
              href="#contact"
              className="mt-8 flex items-center gap-2 text-xs font-unbounded text-slate-300 hover:text-[hsl(255,60%,64%)] transition-colors group"
            >
              <span>Explore My Background</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>

      {/* Down arrow indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
        <a href="#about" aria-label="Scroll to About">
          <ChevronDown size={22} className="animate-bounce text-[hsl(255,60%,64%)]" />
        </a>
      </div>
    </section>
  );
}
