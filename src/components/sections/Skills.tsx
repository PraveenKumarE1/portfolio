import { motion } from "framer-motion";
import { Brain, Code2, Globe, Wrench, ArrowRight, Zap, Target, Star } from "lucide-react";

const disciplines = [
  {
    id: "ai",
    icon: Brain,
    title: "AI & Machine Learning",
    label: "01 / Core Domain",
    desc: "From Random Forest pipelines to deep CNNs for retinal vessel extraction — production-grade ML applied to medical imaging & predictive models.",
    skills: ["PyTorch", "OpenCV", "Scikit-learn", "Pandas", "NumPy", "Gemini API"],
    accentColor: "#f59e0b",
    glowRgba: "rgba(245, 158, 11, 0.40)",
  },
  {
    id: "languages",
    icon: Code2,
    title: "Programming Languages",
    label: "02 / Foundations",
    desc: "Python for AI/ML pipelines & APIs. TypeScript for strict-typed React 18 applications. Java for OOP & DSA. C for low-level systems logic.",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C"],
    accentColor: "#3B82F6",
    glowRgba: "rgba(59, 130, 246, 0.40)",
  },
  {
    id: "web",
    icon: Globe,
    title: "Full-Stack Architecture",
    label: "03 / Web Products",
    desc: "React 18 + Vite for high-speed client UIs. Flask & Node.js RESTful microservices. Tailwind CSS for editorial layouts. Supabase for cloud data.",
    skills: ["React 18", "Vite", "Tailwind CSS", "Flask", "Node.js", "Supabase"],
    accentColor: "#06B6D4",
    glowRgba: "rgba(6, 182, 212, 0.40)",
  },
  {
    id: "tools",
    icon: Wrench,
    title: "Cloud & Tooling",
    label: "04 / Infrastructure",
    desc: "11 verified GitHub repositories. Relational SQLite & SQL databases. MongoDB document stores. Leaflet.js for interactive GIS maps.",
    skills: ["GitHub", "SQLite", "MongoDB", "Leaflet.js", "Git"],
    accentColor: "#8b5cf6",
    glowRgba: "rgba(139, 92, 246, 0.40)",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding border-t border-white/[0.06]">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-amber-600/[0.05] blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-blue-600/[0.05] blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* ── Section Header (INSIGHT style) ── */}
        <div className="mb-14">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-2 font-semibold">
            03 / TECHNICAL CAPABILITIES
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <h2 className="text-4xl sm:text-6xl font-bold font-editorial text-white tracking-tight uppercase">
              EXPERTISE &amp; <span className="gradient-editorial-headline">STACK</span>
            </h2>
            <p className="text-xs font-mono text-slate-400 max-w-xs md:text-right leading-relaxed">
              Production competencies structured across 4 engineering disciplines.
            </p>
          </div>
        </div>

        {/* ── Cards Grid (2×2) ── */}
        <div className="grid md:grid-cols-2 gap-6">
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
                className="editorial-card relative overflow-hidden p-8 flex flex-col justify-between group"
              >
                {/* ── Soft bottom glow ── */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at 50% 110%, ${disc.glowRgba} 0%, transparent 65%)`,
                  }}
                />

                <div>
                  {/* Top Category Label & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-[11px] font-mono uppercase tracking-widest font-semibold"
                      style={{ color: disc.accentColor }}
                    >
                      {disc.label}
                    </span>

                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        borderColor: "rgba(255,255,255,0.10)",
                      }}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-editorial text-white mb-3 tracking-tight uppercase">
                    {disc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                    {disc.desc}
                  </p>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {disc.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-3 py-1 rounded-full border text-slate-300 bg-white/[0.03] border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <Zap size={13} style={{ color: disc.accentColor }} />
                    Production Workflows
                  </span>

                  <span className="text-[11px] font-semibold text-white group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                    Explore <ArrowRight size={13} />
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Tagline */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-500">
          <span className="flex items-center gap-1.5">
            <Zap size={13} className="text-amber-400" />
            Tested Codebases
          </span>
          <span className="text-slate-700 hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <Target size={13} className="text-blue-400" />
            Applied Project Solutions
          </span>
          <span className="text-slate-700 hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <Star size={13} className="text-cyan-400" />
            Continuous Refinement
          </span>
        </div>

      </div>
    </section>
  );
}
