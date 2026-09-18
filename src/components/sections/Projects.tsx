import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, CheckCircle2, ChevronRight, Layers, Lightbulb, Zap, Code2, Eye, GitBranch, Cpu, Database, Activity } from "lucide-react";
import { projects } from "../../data/portfolio";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const filterTabs = [
  "All Projects",
  "Featured",
  "AI & Machine Learning",
  "Healthcare AI",
  "Web & Full-Stack",
  "Generative AI",
];

// Project visual sample metrics without using any AI images
const projectMetrics: Record<number, { metric: string; icon: typeof Activity; badge: string }> = {
  1: { metric: "Resume Skill Extraction", icon: Cpu, badge: "AI + EdTech" },
  2: { metric: "Real-Time Store Geolocation", icon: Activity, badge: "Interactive Map" },
  3: { metric: "DR Grading Scale 0–4", icon: Activity, badge: "PyTorch CNN" },
  4: { metric: "Random Forest Classifier", icon: Cpu, badge: "ML Roadmap" },
  5: { metric: "Linear Regression Readiness", icon: Activity, badge: "Chart Analytics" },
  6: { metric: "Supabase Realtime Sync", icon: Database, badge: "React 18 SPA" },
  7: { metric: "Gemini 2.5 Flash Stream", icon: Cpu, badge: "LLM Bot" },
  8: { metric: "Cryptographic Entropy", icon: Code2, badge: "Security CLI" },
  9: { metric: "Exploratory Data Analysis", icon: Database, badge: "EDA Suite" },
  10: { metric: "Interactive 3D Geometry", icon: Code2, badge: "Modern UI" },
  11: { metric: "Cloudflare Edge SSG", icon: Database, badge: "Astro Engine" },
};

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (selectedFilter === "All Projects") return true;
    if (selectedFilter === "Featured") return p.featured;
    if (selectedFilter === "AI & Machine Learning") return p.category.includes("AI") || p.category.includes("Machine Learning");
    if (selectedFilter === "Healthcare AI") return p.category.includes("Healthcare");
    if (selectedFilter === "Web & Full-Stack") return p.category.includes("Web") || p.category.includes("Full-Stack");
    if (selectedFilter === "Generative AI") return p.category.includes("Generative AI");
    return true;
  });

  return (
    <section id="projects" className="relative section-padding border-t border-white/[0.05]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">
              03 / Engineering Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
              Featured <span className="gradient-emerald-teal">Projects</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            11 verified open-source repositories covering medical computer vision, career AI, predictive analytics, and full-stack software.
          </p>
        </div>

        {/* Filter Pills with Colorful Glow */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
                selectedFilter === tab
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400 shadow-md shadow-blue-600/30 scale-105"
                  : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid with Rich Project Sample Banners */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => {
            const sampleInfo = projectMetrics[project.id] || { metric: "Verified Codebase", icon: Code2, badge: "Open Source" };
            const MetricIcon = sampleInfo.icon;

            return (
              <div
                key={project.id}
                className="clean-card overflow-hidden border border-white/10 flex flex-col justify-between group transition-all duration-300 relative hover:shadow-2xl"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${project.color}70`;
                  e.currentTarget.style.boxShadow = `0 20px 40px -12px rgba(0,0,0,0.6), 0 0 35px -6px ${project.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Visual Sample Header Strip (Code-crafted architectural preview) */}
                <div
                  className="px-5 py-4 border-b flex items-center justify-between"
                  style={{
                    background: `linear-gradient(90deg, ${project.color}20 0%, rgba(255,255,255,0.01) 100%)`,
                    borderColor: `${project.color}30`,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center border"
                      style={{
                        backgroundColor: `${project.color}20`,
                        borderColor: `${project.color}50`,
                        color: project.color,
                      }}
                    >
                      <MetricIcon size={14} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase leading-tight">
                        Architecture Sample
                      </span>
                      <span
                        className="text-xs font-mono font-semibold"
                        style={{ color: project.color }}
                      >
                        {sampleInfo.metric}
                      </span>
                    </div>
                  </div>

                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded border"
                    style={{
                      backgroundColor: `${project.color}15`,
                      borderColor: `${project.color}40`,
                      color: project.color,
                    }}
                  >
                    {sampleInfo.badge}
                  </span>
                </div>

                {/* Main Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category line */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className="text-[11px] font-mono font-medium"
                        style={{ color: project.color }}
                      >
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300">
                          ★ Featured
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-white transition-colors mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mb-3 line-clamp-1">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded text-slate-500">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Bottom Actions with Dynamic Accent Colors */}
                    <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-mono font-medium bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-colors"
                      >
                        <GithubIcon size={14} />
                        <span>Source Code</span>
                      </a>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center justify-center gap-1 py-2.5 px-3.5 rounded-lg text-xs font-mono font-medium transition-all"
                        style={{
                          backgroundColor: `${project.color}20`,
                          borderColor: `${project.color}50`,
                          borderWidth: "1px",
                          color: project.color,
                        }}
                      >
                        <span>Overview</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Expanded Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0c0c14] rounded-2xl p-6 md:p-8 shadow-2xl text-left border"
              style={{
                borderColor: `${selectedProject.color}60`,
                boxShadow: `0 0 50px ${selectedProject.color}20`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-8">
                <span
                  className="text-xs font-mono uppercase tracking-wider block mb-1 font-semibold"
                  style={{ color: selectedProject.color }}
                >
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold font-display text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Problem / Solution Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="flex items-center gap-2 mb-2 text-blue-400">
                    <Lightbulb size={16} />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-300">Problem Statement</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                <div
                  className="p-4 rounded-xl border"
                  style={{
                    backgroundColor: `${selectedProject.color}10`,
                    borderColor: `${selectedProject.color}40`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-2" style={{ color: selectedProject.color }}>
                    <Zap size={16} />
                    <span className="text-xs font-mono uppercase tracking-wider text-white">Engineering Solution</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Layers size={14} style={{ color: selectedProject.color }} /> Key Features & Capabilities
                </h4>
                <div className="space-y-2">
                  {selectedProject.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 size={14} style={{ color: selectedProject.color }} className="shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded border"
                      style={{
                        backgroundColor: `${selectedProject.color}15`,
                        borderColor: `${selectedProject.color}40`,
                        color: selectedProject.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold text-white transition-colors"
                  style={{
                    backgroundColor: selectedProject.color,
                  }}
                >
                  <GithubIcon size={15} />
                  <span>View on GitHub (PraveenKumarE1)</span>
                  <ArrowUpRight size={14} />
                </a>

                {selectedProject.githubAlt && (
                  <a
                    href={selectedProject.githubAlt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-colors"
                  >
                    <span>Secondary Repo (08190267)</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
