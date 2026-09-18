import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, CheckCircle2, ChevronRight, Layers, Lightbulb, Zap, Code2 } from "lucide-react";
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
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-mono text-blue-500 uppercase tracking-widest block mb-2">
              03 / Engineering Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
              Featured <span className="text-blue-500">Projects</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            11 verified open-source repositories covering medical computer vision, career AI, predictive analytics, and full-stack software.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
                selectedFilter === tab
                  ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/20"
                  : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="clean-card p-6 border border-white/10 flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-300 relative"
            >
              <div>
                {/* Header line */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-blue-600/15 border border-blue-500/30 text-blue-400">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300">
                      ★ Featured
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display font-bold text-lg text-white group-hover:text-blue-400 transition-colors mb-1.5">
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
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-slate-400"
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

                {/* Bottom Actions */}
                <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-mono font-medium bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-colors"
                  >
                    <GithubIcon size={14} />
                    <span>Source</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center justify-center gap-1 py-2 px-3 rounded-lg text-xs font-mono font-medium bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/40 transition-all"
                  >
                    <span>Overview</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Expanded Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0c0c14] border border-blue-500/40 rounded-2xl p-6 md:p-8 shadow-2xl text-left"
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
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
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

                <div className="p-4 rounded-xl bg-blue-600/[0.07] border border-blue-500/30">
                  <div className="flex items-center gap-2 mb-2 text-blue-400">
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
                  <Layers size={14} className="text-blue-500" /> Key Features & Capabilities
                </h4>
                <div className="space-y-2">
                  {selectedProject.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
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
                      className="text-xs font-mono px-2.5 py-1 rounded bg-blue-600/15 border border-blue-500/30 text-blue-300"
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
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
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
