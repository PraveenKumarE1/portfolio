import { motion } from "framer-motion";
import { Brain, Code2, Globe, Wrench, ArrowRight, Zap, Target, Star } from "lucide-react";

const disciplines = [
  {
    id: "ai",
    icon: Brain,
    title: "AI & Machine Learning",
    label: "Core Engineering Domain",
    desc: "From classical Random Forest pipelines to deep CNNs for retinal vessel extraction — production-grade ML applied to real medical imaging problems.",
    skills: ["PyTorch", "OpenCV", "Scikit-learn", "Pandas", "NumPy", "Gemini API"],
    accentColor: "#A855F7",
    glowRgba: "rgba(168, 85, 247, 0.55)",
  },
  {
    id: "languages",
    icon: Code2,
    title: "Programming Languages",
    label: "Foundational Stack",
    desc: "Python for ML pipelines & Flask APIs. TypeScript for strict-typed React 18 apps. Java for OOP & DSA. C for low-level systems thinking.",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C"],
    accentColor: "#3B82F6",
    glowRgba: "rgba(59, 130, 246, 0.55)",
  },
  {
    id: "web",
    icon: Globe,
    title: "Full-Stack Web",
    label: "Modern Product Development",
    desc: "React 18 + Vite for blazing fast UIs. Flask & Node.js RESTful APIs. Tailwind CSS for pixel-perfect responsive design. Supabase for realtime data.",
    skills: ["React 18", "Vite", "Tailwind CSS", "Flask", "Node.js", "Supabase"],
    accentColor: "#06B6D4",
    glowRgba: "rgba(6, 182, 212, 0.55)",
  },
  {
    id: "tools",
    icon: Wrench,
    title: "Platforms & Tooling",
    label: "Production Environments",
    desc: "11 public GitHub repos. SQL & SQLite for relational data. MongoDB for document stores. Leaflet.js for interactive geolocation maps.",
    skills: ["GitHub", "SQLite", "MongoDB", "Leaflet.js", "Git"],
    accentColor: "#F59E0B",
    glowRgba: "rgba(245, 158, 11, 0.55)",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.13,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding border-t border-white/[0.05]">
      {/* Subtle ambient section lighting */}
      <div className="absolute top-1/3 -right-32 w-[480px] h-[480px] bg-purple-600/[0.07] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[440px] h-[440px] bg-blue-600/[0.07] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* ── Section Header ── */}
        <div className="mb-14">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-3">
            02 / Technical Disciplines
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <h2 className="text-4xl sm:text-5xl font-bold font-display text-white tracking-tight">
              Skills &amp;{" "}
              <span className="gradient-purple-pink">Expertise</span>
            </h2>
            <p className="text-sm font-mono text-slate-400 max-w-xs md:text-right leading-relaxed">
              Production-grade competencies applied across 4 high-impact engineering domains.
            </p>
          </div>
        </div>

        {/* ── Cards Grid (2×2) ── */}
        <div className="grid md:grid-cols-2 gap-5">
          {disciplines.map((disc, i) => {
            const Icon = disc.icon;
            return (
              <motion.div
                key={disc.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={cardVariants}
                className="relative overflow-hidden rounded-2xl p-7 flex flex-col gap-5 group"
                style={{
                  background: "rgba(10, 10, 19, 0.97)",
                  border: "1px solid rgba(255,255,255,0.065)",
                  transition: "border-color 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${disc.accentColor}45`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.065)";
                }}
              >
                {/* ── Bottom colored glow (always on, intensifies on hover) ── */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-60 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at 50% 108%, ${disc.glowRgba} 0%, transparent 62%)`,
                  }}
                />

                {/* Subtle top-right accent */}
                <div
                  className="absolute -top-10 -right-10 w-44 h-44 opacity-[0.07] pointer-events-none rounded-full"
                  style={{ background: disc.accentColor, filter: "blur(30px)" }}
                />

                {/* ── Icon badge ── */}
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                >
                  <Icon size={22} className="text-white" />
                </div>

                {/* ── Title ── */}
                <h3 className="relative text-[1.65rem] font-bold font-display text-white leading-tight">
                  {disc.title}
                </h3>

                {/* ── Description ── */}
                <p className="relative text-slate-400 text-[14.5px] leading-relaxed flex-1">
                  {disc.desc}
                </p>

                {/* ── Skill tags ── */}
                <div className="relative flex flex-wrap gap-1.5">
                  {disc.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-[5px] rounded-full border text-slate-300"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        borderColor: "rgba(255,255,255,0.09)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* ── Footer CTA ── */}
                <div
                  className="relative flex items-center justify-between pt-4 border-t"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <span
                    className="text-[11px] font-mono font-semibold uppercase tracking-widest"
                    style={{ color: disc.accentColor }}
                  >
                    {disc.label}
                  </span>

                  <div className="flex items-center gap-1.5 text-sm text-white/80 group-hover:text-white group-hover:gap-3 transition-all duration-300 font-medium">
                    <span>Explore</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom tagline (matching image 1 style) ── */}
        <div className="mt-11 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-500">
          <span className="flex items-center gap-1.5">
            <Zap size={12} className="text-purple-400" />
            Production-Tested Workflows
          </span>
          <span className="text-slate-700 hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <Target size={12} className="text-blue-400" />
            Applied to Real Projects
          </span>
          <span className="text-slate-700 hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <Star size={12} className="text-cyan-400" />
            Always Improving
          </span>
        </div>

      </div>
    </section>
  );
}
