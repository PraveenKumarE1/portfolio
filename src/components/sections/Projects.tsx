import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, CheckCircle2, ChevronRight, Layers, Lightbulb, Zap, Code2, Activity, Cpu, Database, Eye } from "lucide-react";
import { projects } from "../../data/portfolio";
import Tilt from "react-parallax-tilt";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// Clear high-impact summaries for recruiters and reviewers
const projectQuickGrasp: Record<number, { simpleWhat: string; keyHighlights: string[]; badge: string }> = {
  1: {
    simpleWhat: "Unified AI platform that scans student resumes, assesses aptitude, and recommends tailored career placements.",
    keyHighlights: ["Automated resume skill parser", "Instant aptitude & coding evaluator", "Personalized placement roadmaps"],
    badge: "AI + EdTech",
  },
  2: {
    simpleWhat: "Location-based shopping platform comparing product prices, distance, and live stock across local stores on interactive maps.",
    keyHighlights: ["Interactive Leaflet map store discovery", "Live price & stock comparison", "Supabase realtime database"],
    badge: "Full-Stack Web & Maps",
  },
  3: {
    simpleWhat: "Medical AI research system analyzing fundus eye photographs to screen diabetic retinopathy on clinical grades 0 to 4.",
    keyHighlights: ["OpenCV blood vessel segmentation", "PyTorch CNN classification models", "Automated clinical report generation"],
    badge: "Medical AI & Vision",
  },
  4: {
    simpleWhat: "Machine learning model predicting optimal career tracks for engineering students based on technical and soft skill vectors.",
    keyHighlights: ["Scikit-learn Random Forest model", "Skill gap & strength analysis", "Step-by-step learning roadmaps"],
    badge: "Machine Learning",
  },
  5: {
    simpleWhat: "Intelligent study planner using Linear Regression to forecast exam readiness and prioritize weak subject areas.",
    keyHighlights: ["Regression readiness score engine", "Interactive Chart.js visualizations", "SQLite study log persistence"],
    badge: "Predictive Analytics",
  },
  6: {
    simpleWhat: "Modern hotel and resort booking web application with dynamic room inventory and realtime database synchronization.",
    keyHighlights: ["React 18 & TypeScript architecture", "Supabase cloud database storage", "Responsive luxury room showcase"],
    badge: "Web Application",
  },
  7: {
    simpleWhat: "Lightweight conversational chatbot powered by Google's latest Gemini 2.5 Flash large language model.",
    keyHighlights: ["Google Gemini API integration", "Clean Streamlit responsive interface", "Environment variable API key security"],
    badge: "Generative AI",
  },
  8: {
    simpleWhat: "Configurable cryptographic Python security utility for generating strong, high-entropy random passwords.",
    keyHighlights: ["Custom length & symbol toggles", "High-entropy random generation", "Lightweight CLI utility"],
    badge: "Security Utility",
  },
  9: {
    simpleWhat: "Data science internship portfolio containing data exploration, statistical analysis, and visualization pipelines.",
    keyHighlights: ["Exploratory Data Analysis (EDA)", "Pandas & NumPy data cleansing", "Matplotlib statistical graphics"],
    badge: "Data Science",
  },
  10: {
    simpleWhat: "Interactive developer portfolio engineered with 3D CSS transforms, React, and modern UI architectures.",
    keyHighlights: ["Interactive 3D geometry engine", "Cinematic opening screen animation", "Zero AI imagery, 100% human crafted"],
    badge: "Developer Portfolio",
  },
  11: {
    simpleWhat: "High-performance static blog generated with Astro and deployed on Cloudflare Workers edge network.",
    keyHighlights: ["Static Site Generation (SSG)", "Markdown & MDX article support", "Cloudflare Workers edge delivery"],
    badge: "Cloud & Static Site",
  },
};

const filterTabs = [
  { id: "all", label: "All Projects", filter: () => true },
  { id: "featured", label: "Featured", filter: (p: any) => p.featured },
  { id: "ai", label: "AI & ML", filter: (p: any) => p.category.includes("AI") || p.category.includes("Machine Learning") },
  { id: "healthcare", label: "Healthcare AI", filter: (p: any) => p.category.includes("Healthcare") },
  { id: "web", label: "Web & Full-Stack", filter: (p: any) => p.category.includes("Web") || p.category.includes("Full-Stack") },
  { id: "genai", label: "Generative AI", filter: (p: any) => p.category.includes("Generative AI") },
];

export default function Projects() {
  const [activeFilterId, setActiveFilterId] = useState("all");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const activeTab = filterTabs.find((t) => t.id === activeFilterId) || filterTabs[0];
  const filteredProjects = projects.filter(activeTab.filter);
  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 3);

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
            11 verified open-source repositories designed for high performance, practical problem solving, and clear real-world outcomes.
          </p>
        </div>

        {/* Filter Tabs with Dynamic Counts */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => {
            const count = projects.filter(tab.filter).length;
            const isSelected = activeFilterId === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilterId(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400 shadow-md shadow-blue-600/30 scale-105"
                    : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-white/5 text-slate-400"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid: Clear, Easy-to-Understand Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {displayedProjects.map((project) => {
            const grasp = projectQuickGrasp[project.id] || {
              simpleWhat: project.description,
              keyHighlights: ["Verified Open Source Codebase", "Structured Architecture"],
              badge: project.category,
            };

            return (
              <Tilt
                key={project.id}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable
                glareMaxOpacity={0.04}
                glareColor={project.color}
                glarePosition="all"
                glareBorderRadius="1.25rem"
                className="h-full"
              >
                <div
                  className="clean-card h-full overflow-hidden border border-white/10 flex flex-col justify-between group transition-all duration-300 relative hover:shadow-2xl"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${project.color}70`;
                    e.currentTarget.style.boxShadow = `0 20px 40px -12px rgba(0,0,0,0.6), 0 0 35px -6px ${project.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Top Color Accent Band */}
                  <div
                    className="px-5 py-3 border-b flex items-center justify-between"
                    style={{
                      background: `linear-gradient(90deg, ${project.color}20 0%, rgba(255,255,255,0.01) 100%)`,
                      borderColor: `${project.color}30`,
                    }}
                  >
                    <span
                      className="text-[11px] font-mono font-bold tracking-wide flex items-center gap-1.5"
                      style={{ color: project.color }}
                    >
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.color }} />
                      {grasp.badge}
                    </span>

                    {project.featured && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/40 text-amber-300 font-semibold">
                        ★ Featured
                      </span>
                    )}
                  </div>

                  {/* Main Card Content: Designed for Immediate Understanding */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Project Name */}
                      <h3 className="font-display font-bold text-xl text-white group-hover:text-white transition-colors mb-2">
                        {project.title}
                      </h3>

                      {/* 1-Sentence "What it does" */}
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {grasp.simpleWhat}
                      </p>

                      {/* 3 Key Highlights (Quick Grasp) */}
                      <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        {grasp.keyHighlights.map((hl) => (
                          <div key={hl} className="flex items-center gap-2 text-[11px] text-slate-400">
                            <CheckCircle2 size={12} style={{ color: project.color }} className="shrink-0" />
                            <span className="truncate">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-slate-300"
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

                      {/* Action Buttons: Clear & Distinct */}
                      <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-mono font-medium bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-colors"
                        >
                          <GithubIcon size={14} />
                          <span>View Code</span>
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
                          <span>Full Specs</span>
                          <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </Tilt>
            );
          })}
        </div>

        {/* Toggle Button: Show All Projects / Show Featured 3 */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-xs font-mono font-semibold text-white transition-all duration-300 shadow-xl"
            style={{
              background: "linear-gradient(135deg, rgba(37,99,235,0.85) 0%, rgba(124,58,237,0.85) 100%)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 10px 30px rgba(37,99,235,0.30)",
            }}
          >
            <span>
              {showAllProjects
                ? "Show Featured (3 Projects)"
                : `Explore All Work (${filteredProjects.length} Projects)`}
            </span>
            <ChevronRight
              size={15}
              className={`transition-transform duration-300 ${showAllProjects ? "-rotate-90" : "rotate-90"}`}
            />
          </button>
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
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-300">Problem Addressed</span>
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
                  <Layers size={14} style={{ color: selectedProject.color }} /> Architectural Modules & Features
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
                  Complete Tech Stack
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
                  <span>Open GitHub Repository (PraveenKumarE1)</span>
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
