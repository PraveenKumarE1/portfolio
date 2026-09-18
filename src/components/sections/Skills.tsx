import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Code2, Globe, Wrench, Sparkles, Zap, CheckCircle2, Star } from "lucide-react";

const bentoDisciplines = [
  {
    id: "ai",
    pillLabel: "AI & Machine Learning",
    title: "AI, Machine Learning & Vision",
    subtitle: "Core Engineering Domain",
    theme: "Purple Theme",
    icon: Brain,
    accentColor: "#A855F7",
    glowColor: "rgba(168, 85, 247, 0.25)",
    borderColor: "border-purple-500/30 hover:border-purple-500/70",
    featuredRibbon: "★ PyTorch & OpenCV",
    skillsList: [
      {
        name: "Machine Learning",
        application: "Random Forest, Scikit-learn",
        level: 88,
      },
      {
        name: "Computer Vision",
        application: "Retinal Vessel Extraction, CNNs",
        level: 85,
      },
      {
        name: "Data Science & EDA",
        application: "Pandas, NumPy, Matplotlib",
        level: 88,
      },
      {
        name: "Generative AI",
        application: "Gemini 2.5 Flash, Claude",
        level: 82,
      },
    ],
  },
  {
    id: "languages",
    pillLabel: "Programming Languages",
    title: "Programming Languages",
    subtitle: "Foundational & Scripting Stack",
    theme: "Electric Blue Theme",
    icon: Code2,
    accentColor: "#3B82F6",
    glowColor: "rgba(59, 130, 246, 0.25)",
    borderColor: "border-blue-500/30 hover:border-blue-500/70",
    featuredRibbon: "★ Python & TypeScript",
    skillsList: [
      {
        name: "Python",
        application: "AI/ML & Flask APIs",
        level: 92,
      },
      {
        name: "TypeScript",
        application: "Strict Typing in React 18",
        level: 82,
      },
      {
        name: "Java",
        application: "OOP & DSA",
        level: 72,
      },
      {
        name: "C",
        application: "Low-level Systems",
        level: 68,
      },
    ],
  },
  {
    id: "web",
    pillLabel: "Web & Full-Stack",
    title: "Full-Stack Web Architecture",
    subtitle: "Modern Digital Product Development",
    theme: "Cyan Theme",
    icon: Globe,
    accentColor: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.25)",
    borderColor: "border-cyan-500/30 hover:border-cyan-500/70",
    featuredRibbon: "★ React 18 & Supabase",
    skillsList: [
      {
        name: "React 18 & Vite",
        application: "Component Architecture, Hooks",
        level: 88,
      },
      {
        name: "HTML5 / Tailwind CSS",
        application: "Responsive Design, Modern UI",
        level: 90,
      },
      {
        name: "JavaScript (ES6+)",
        application: "Async/Await, REST APIs",
        level: 86,
      },
      {
        name: "Flask & Node.js RESTful APIs",
        application: "Backend Microservices & Model Serving",
        level: 80,
      },
    ],
  },
  {
    id: "tools",
    pillLabel: "Platforms & Tooling",
    title: "Cloud, Data & Engineering Tools",
    subtitle: "Production Environments & GIS",
    theme: "Amber Gold Theme",
    icon: Wrench,
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.25)",
    borderColor: "border-amber-500/30 hover:border-amber-500/70",
    featuredRibbon: "★ GitHub & SQLite",
    skillsList: [
      {
        name: "SQL & SQLite",
        application: "Relational Schemas, Queries & Reporting",
        level: 80,
      },
      {
        name: "MongoDB Document DB",
        application: "NoSQL Collections & Document Stores",
        level: 74,
      },
      {
        name: "GitHub & Git Version Control",
        application: "11 Public Repositories & Collaboration",
        level: 90,
      },
      {
        name: "Leaflet Maps & Supabase Realtime",
        application: "Interactive Geolocation & Cloud DB",
        level: 80,
      },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const displayedDisciplines = activeCategory === "all"
    ? bentoDisciplines
    : bentoDisciplines.filter((d) => d.id === activeCategory);

  return (
    <section id="skills" className="relative section-padding border-t border-white/[0.05]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-purple-600/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">
              02 / Capabilities & Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
              Technical <span className="gradient-purple-pink">Disciplines</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Production-grade competencies structured across 4 high-impact engineering disciplines with applied project tags.
          </p>
        </div>

        {/* 1. Discipline Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 border ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white border-transparent shadow-lg shadow-purple-600/25 scale-105"
                : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.05]"
            }`}
          >
            All Disciplines
          </button>

          {bentoDisciplines.map((discipline) => {
            const Icon = discipline.icon;
            const isSelected = activeCategory === discipline.id;

            return (
              <button
                key={discipline.id}
                onClick={() => setActiveCategory(discipline.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 border ${
                  isSelected
                    ? "text-white border-transparent shadow-md scale-105"
                    : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.05]"
                }`}
                style={{
                  backgroundColor: isSelected ? discipline.accentColor : undefined,
                  boxShadow: isSelected ? `0 0 20px ${discipline.accentColor}40` : undefined,
                }}
              >
                <Icon size={13} />
                <span>{discipline.pillLabel}</span>
              </button>
            );
          })}
        </div>

        {/* 2. Bento Grid Layout (4 Disciplines) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-7"
          >
            {displayedDisciplines.map((discipline) => {
              const Icon = discipline.icon;

              return (
                <div
                  key={discipline.id}
                  className={`clean-card overflow-hidden border ${discipline.borderColor} p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 relative`}
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(10,10,18,0.85) 100%)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 20px 40px -12px rgba(0,0,0,0.6), 0 0 35px -6px ${discipline.glowColor}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Discipline Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-white/[0.06] mb-6">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-12 h-12 rounded-2xl border flex items-center justify-center shadow-lg shrink-0"
                        style={{
                          backgroundColor: `${discipline.accentColor}18`,
                          borderColor: `${discipline.accentColor}50`,
                          color: discipline.accentColor,
                          boxShadow: `0 0 20px ${discipline.accentColor}25`,
                        }}
                      >
                        <Icon size={22} />
                      </div>
                      <div>
                        <span
                          className="text-[10px] font-mono uppercase tracking-widest block font-semibold"
                          style={{ color: discipline.accentColor }}
                        >
                          {discipline.subtitle}
                        </span>
                        <h3 className="font-display font-bold text-lg text-white">
                          {discipline.title}
                        </h3>
                      </div>
                    </div>

                    {/* Featured Tech Ribbon */}
                    <span
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full border font-bold tracking-wide shadow-sm"
                      style={{
                        backgroundColor: `${discipline.accentColor}20`,
                        borderColor: `${discipline.accentColor}60`,
                        color: discipline.accentColor,
                      }}
                    >
                      {discipline.featuredRibbon}
                    </span>
                  </div>

                  {/* Skills List with Project Application Tags & Dynamic Mastery Bars */}
                  <div className="space-y-4">
                    {discipline.skillsList.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] hover:border-white/[0.12] transition-all"
                      >
                        {/* Skill Name & Level */}
                        <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: discipline.accentColor }}
                            />
                            <span className="font-bold text-white tracking-wide">
                              {skill.name}
                            </span>
                          </div>

                          <span
                            className="font-bold text-[11px]"
                            style={{ color: discipline.accentColor }}
                          >
                            {skill.level}%
                          </span>
                        </div>

                        {/* Project Application Tag */}
                        <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 mb-2.5 pl-4">
                          <span className="text-slate-500">Applied:</span>
                          <span className="text-slate-300 font-medium">
                            {skill.application}
                          </span>
                        </div>

                        {/* Dynamic Mastery Bar (Animated gradient meter) */}
                        <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden p-0.5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${discipline.accentColor} 0%, #38BDF8 100%)`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Card Footer Metric */}
                  <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-[11px]">
                      <Zap size={12} style={{ color: discipline.accentColor }} />
                      Production-tested workflows
                    </span>

                    <span
                      className="text-[11px] font-semibold"
                      style={{ color: discipline.accentColor }}
                    >
                      {discipline.skillsList.length} Technologies
                    </span>
                  </div>

                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
