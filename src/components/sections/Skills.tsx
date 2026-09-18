import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Code2, Globe, Wrench, Sparkles, Database, Terminal, Cpu, CheckCircle2, Layers, Zap } from "lucide-react";
import { skills } from "../../data/portfolio";

const bentoCategories = [
  {
    id: "ai",
    title: "AI, Machine Learning & Vision",
    subtitle: "Core Engineering Domain",
    icon: Brain,
    accentColor: "#A855F7",
    borderColor: "border-purple-500/30 hover:border-purple-500/60",
    glowColor: "rgba(168, 85, 247, 0.2)",
    featured: "PyTorch & OpenCV",
    skillsList: [
      { name: "Machine Learning", level: 88, tag: "Random Forest, Regression, Scikit-learn" },
      { name: "Computer Vision", level: 85, tag: "OpenCV, Retinal Vessel Extraction, CNNs" },
      { name: "Data Science & EDA", level: 88, tag: "Pandas, NumPy, Matplotlib, Data Cleaning" },
      { name: "Generative AI", level: 82, tag: "Google Gemini 2.5 Flash, Prompt Eng, Claude" },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    subtitle: "Foundational & Scripting Stack",
    icon: Code2,
    accentColor: "#3B82F6",
    borderColor: "border-blue-500/30 hover:border-blue-500/60",
    glowColor: "rgba(59, 130, 246, 0.2)",
    featured: "Python & TypeScript",
    skillsList: [
      { name: "Python", level: 92, tag: "Primary Language for AI/ML, PyTorch, Flask" },
      { name: "TypeScript", level: 82, tag: "Strict Types for React 18 Web Applications" },
      { name: "Java", level: 72, tag: "Object-Oriented Programming & DSA Concepts" },
      { name: "C", level: 68, tag: "Low-level Systems Programming Foundations" },
    ],
  },
  {
    id: "web",
    title: "Full-Stack Web Architecture",
    subtitle: "Modern Digital Product Development",
    icon: Globe,
    accentColor: "#06B6D4",
    borderColor: "border-cyan-500/30 hover:border-cyan-500/60",
    glowColor: "rgba(6, 182, 212, 0.2)",
    featured: "React 18 & Supabase",
    skillsList: [
      { name: "React 18 & Vite", level: 88, tag: "Component Architecture, Hooks, State Management" },
      { name: "HTML5 / Tailwind CSS", level: 90, tag: "Modern Responsive Layouts, Animations" },
      { name: "JavaScript (ES6+)", level: 86, tag: "Async/Await, REST APIs, DOM Manipulation" },
      { name: "Flask & Node.js", level: 78, tag: "Python Model Serving & RESTful Backends" },
    ],
  },
  {
    id: "tools",
    title: "Cloud, Data & Engineering Tools",
    subtitle: "Production Environments & GIS",
    icon: Wrench,
    accentColor: "#F59E0B",
    borderColor: "border-amber-500/30 hover:border-amber-500/60",
    glowColor: "rgba(245, 158, 11, 0.2)",
    featured: "GitHub & SQLite",
    skillsList: [
      { name: "SQL & SQLite", level: 80, tag: "Relational Schemas, Queries & Reporting" },
      { name: "MongoDB", level: 74, tag: "NoSQL Document Storage & Collections" },
      { name: "GitHub & Version Control", level: 90, tag: "11 Open-Source Repositories & Workflows" },
      { name: "Leaflet Maps & Supabase", level: 80, tag: "Geolocation Mapping & Realtime Cloud DB" },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; tag: string; level: number } | null>(null);

  const displayedCategories = activeCategory === "all"
    ? bentoCategories
    : bentoCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="relative section-padding border-t border-white/[0.05]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">
              02 / Capabilities & Tooling
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
              Technical <span className="gradient-purple-pink">Stack</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Production-grade competencies spanning computer vision, machine learning models, programming languages, and modern web architectures.
          </p>
        </div>

        {/* View Switcher Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white border-transparent shadow-lg shadow-purple-600/25"
                : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.05]"
            }`}
          >
            All Disciplines
          </button>
          {bentoCategories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
                  isSelected
                    ? "text-white border-transparent shadow-md"
                    : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.05]"
                }`}
                style={{
                  backgroundColor: isSelected ? cat.accentColor : undefined,
                  boxShadow: isSelected ? `0 0 20px ${cat.accentColor}40` : undefined,
                }}
              >
                <Icon size={13} />
                <span>{cat.title.split(",")[0].split("&")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid Layout - High Visual Impact & Elegant */}
        <div className="grid md:grid-cols-2 gap-7">
          {displayedCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className={`clean-card overflow-hidden border ${category.borderColor} p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 relative`}
                style={{
                  background: `linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(10,10,18,0.85) 100%)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 40px -12px rgba(0,0,0,0.6), 0 0 35px -6px ${category.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Bento Card Header */}
                <div className="flex items-center justify-between pb-5 border-b border-white/[0.06] mb-6">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-12 h-12 rounded-2xl border flex items-center justify-center shadow-lg"
                      style={{
                        backgroundColor: `${category.accentColor}18`,
                        borderColor: `${category.accentColor}50`,
                        color: category.accentColor,
                        boxShadow: `0 0 20px ${category.accentColor}25`,
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <span
                        className="text-[10px] font-mono uppercase tracking-widest block font-semibold"
                        style={{ color: category.accentColor }}
                      >
                        {category.subtitle}
                      </span>
                      <h3 className="font-display font-bold text-lg text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    className="text-[10px] font-mono px-2.5 py-1 rounded-full border font-semibold hidden sm:inline-block"
                    style={{
                      backgroundColor: `${category.accentColor}15`,
                      borderColor: `${category.accentColor}40`,
                      color: category.accentColor,
                    }}
                  >
                    ★ {category.featured}
                  </span>
                </div>

                {/* Skills Interactive List */}
                <div className="space-y-4">
                  {category.skillsList.map((skill) => (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] hover:border-white/[0.12] transition-all cursor-default"
                    >
                      {/* Name & Mastery Percentage */}
                      <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: category.accentColor }}
                          />
                          <span className="font-bold text-white tracking-wide">
                            {skill.name}
                          </span>
                        </div>

                        <span
                          className="font-bold text-[11px]"
                          style={{ color: category.accentColor }}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Use-Case / Application tag */}
                      <p className="text-[11px] font-mono text-slate-400 mb-2.5 pl-4">
                        {skill.tag}
                      </p>

                      {/* Smooth Level Progress Bar */}
                      <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden p-0.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${category.accentColor} 0%, #38BDF8 100%)`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card Footer Metric */}
                <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <Zap size={12} style={{ color: category.accentColor }} />
                    Applied in real projects
                  </span>

                  <span
                    className="text-[11px] font-semibold"
                    style={{ color: category.accentColor }}
                  >
                    {category.skillsList.length} Core Modules
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
