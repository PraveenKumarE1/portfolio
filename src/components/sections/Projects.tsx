import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/portfolio";

const projectQuickGrasp: Record<number, { simpleWhat: string; keyHighlights: string[]; badge: string }> = {
  1: {
    simpleWhat: "AI platform scanning student resumes, assessing aptitude, and recommending personalized placements.",
    keyHighlights: ["Automated resume skill parser", "Instant aptitude evaluator"],
    badge: "AI / EdTech",
  },
  2: {
    simpleWhat: "Location-based shopping platform comparing prices, distance, and live stock on interactive Leaflet maps.",
    keyHighlights: ["Interactive Leaflet map discovery", "Supabase realtime sync"],
    badge: "Full-Stack AI",
  },
  3: {
    simpleWhat: "Medical AI research system analyzing fundus eye photographs to screen diabetic retinopathy (Grades 0-4).",
    keyHighlights: ["OpenCV blood vessel segmentation", "PyTorch CNN diagnostic grading"],
    badge: "Medical AI & Vision",
  },
  4: {
    simpleWhat: "Machine learning model predicting optimal career tracks for engineering students based on skills.",
    keyHighlights: ["Scikit-learn Random Forest model", "Skill gap & strength analysis"],
    badge: "Machine Learning",
  },
  5: {
    simpleWhat: "Intelligent study planner using Linear Regression to forecast exam readiness and prioritize weak topics.",
    keyHighlights: ["Readiness score prediction", "SQLite persistence & Chart.js"],
    badge: "Predictive AI",
  },
  6: {
    simpleWhat: "Modern hotel and resort booking web application with dynamic room inventory & realtime database.",
    keyHighlights: ["React 18 & TypeScript", "Supabase cloud backend"],
    badge: "Web Application",
  },
  7: {
    simpleWhat: "Conversational chatbot powered by Google's latest Gemini 2.5 Flash large language model.",
    keyHighlights: ["Gemini 2.5 API integration", "Streamlit responsive interface"],
    badge: "Generative AI",
  },
  8: {
    simpleWhat: "Configurable cryptographic Python security utility for generating strong, high-entropy random passwords.",
    keyHighlights: ["Custom entropy parameters", "Fast CLI utility"],
    badge: "Security Utility",
  },
  9: {
    simpleWhat: "Data science internship portfolio containing data exploration, statistical analysis, and visualizations.",
    keyHighlights: ["Exploratory Data Analysis (EDA)", "Pandas & Matplotlib analytics"],
    badge: "Data Science",
  },
  10: {
    simpleWhat: "Interactive developer portfolio engineered with modern UI architectures and dynamic effects.",
    keyHighlights: ["Panda Coders design system", "Responsive modern animations"],
    badge: "Portfolio Site",
  },
  11: {
    simpleWhat: "High-performance static blog generated with Astro and deployed on Cloudflare Workers edge network.",
    keyHighlights: ["Static Site Generation (SSG)", "Cloudflare Workers edge delivery"],
    badge: "Cloud & Static Site",
  },
  12: {
    simpleWhat: "Automated candidate resume parsing against target job descriptions with instant keyword matching & ATS scores.",
    keyHighlights: ["PyPDF2 resume text extraction", "Instant ATS match scoring"],
    badge: "AI Resume Parsing",
  },
  13: {
    simpleWhat: "All-in-one financial operating system for early-stage startups created during a National Level Hackathon.",
    keyHighlights: ["Cap table & equity dilution engine", "Burn rate & runway forecasting"],
    badge: "Hackathon FinTech OS",
  },
  14: {
    simpleWhat: "Next-gen intelligent agent orchestration and multi-model autonomous task execution workflow engine.",
    keyHighlights: ["Multi-agent task orchestration", "Real-time streaming pipeline"],
    badge: "Agentic AI System",
  },
  15: {
    simpleWhat: "Interactive ATS resume creation tool with dynamic section formatting, live compliance scoring, and PDF export.",
    keyHighlights: ["Live ATS compliance score check", "One-click export for recruiters"],
    badge: "ATS Resume Builder",
  },
};

const filterTabs = [
  { id: "all", label: "All Projects", filter: () => true },
  { id: "featured", label: "Featured", filter: (p: any) => p.featured },
  { id: "ai", label: "AI & ML", filter: (p: any) => p.category.includes("AI") || p.category.includes("Machine Learning") },
  { id: "vision", label: "Computer Vision", filter: (p: any) => p.category.includes("Vision") || p.category.includes("Healthcare") },
  { id: "web", label: "Web & Full-Stack", filter: (p: any) => p.category.includes("Web") || p.category.includes("Full-Stack") },
  { id: "genai", label: "Generative AI", filter: (p: any) => p.category.includes("Generative AI") || p.category.includes("Agent") },
];

export default function Projects() {
  const [activeFilterId, setActiveFilterId] = useState("all");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [liveRepoCount, setLiveRepoCount] = useState<number>(projects.length);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState<string>("Just now");

  useEffect(() => {
    async function syncGithubRepos() {
      setIsSyncing(true);
      try {
        const res = await fetch("https://api.github.com/users/PraveenKumarE1/repos?sort=updated&per_page=100");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setLiveRepoCount(data.length);
            setLastSynced(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
          }
        }
      } catch (err) {
        console.log("GitHub live sync using cached portfolio data");
      } finally {
        setIsSyncing(false);
      }
    }

    syncGithubRepos();
  }, []);

  const activeTab = filterTabs.find((t) => t.id === activeFilterId) || filterTabs[0];
  const filteredProjects = projects.filter(activeTab.filter);
  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="relative py-24 bg-void overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-first/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-first-alt/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-unbounded text-first tracking-widest uppercase block">
                // 03 · PORTFOLIO
              </span>
              <span className="text-slate-600">|</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-montserrat bg-first/15 border border-first/30 text-first font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live GitHub Sync Active
              </span>
            </div>
            
            <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.2]">
              I make Incredible <br />
              <span className="text-first">Projects</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="font-montserrat text-sm text-slate-400 max-w-md md:text-right">
              {liveRepoCount}+ verified open-source repositories auto-synced from GitHub, engineered for scalable impact and real-world utility.
            </p>
            <div className="flex items-center gap-2 text-xs font-montserrat text-slate-500">
              <i className="ri-github-fill text-slate-400 text-sm" />
              <span>@PraveenKumarE1</span>
              <span>·</span>
              <span className="text-slate-400">Synced: {lastSynced}</span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {filterTabs.map((tab) => {
            const count = projects.filter(tab.filter).length;
            const isSelected = activeFilterId === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilterId(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-montserrat font-medium transition-all duration-300 ${
                  isSelected
                    ? "bg-first text-white shadow-lg shadow-first/40 border border-first scale-105"
                    : "bg-container border border-white/[0.08] text-slate-300 hover:text-white hover:border-first/40"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-white/10 text-slate-400"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid: Target Site Architecture */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {displayedProjects.map((project, idx) => {
            const grasp = projectQuickGrasp[project.id] || {
              simpleWhat: project.description,
              keyHighlights: ["Verified Architecture", "Open Source Repository"],
              badge: project.category,
            };
            const formattedIndex = String(idx + 1).padStart(2, "0");

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
                className="relative bg-container rounded-[2.5rem] p-7 border border-white/[0.06] overflow-hidden group hover:border-first/50 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Glowing Corner Blob */}
                <div 
                  className="absolute -right-24 -bottom-24 w-52 h-52 rounded-full bg-first/20 blur-[50px] pointer-events-none group-hover:bg-first/35 transition-all duration-500" 
                />

                {/* Top Number & Category */}
                <div className="flex items-center justify-between relative z-10 mb-5">
                  <h1 className="font-unbounded text-4xl sm:text-5xl font-bold text-white/90 group-hover:text-first transition-colors">
                    {formattedIndex}
                  </h1>
                  <span className="font-montserrat text-xs px-3.5 py-1.5 rounded-full bg-first/15 text-first border border-first/30 font-medium">
                    {grasp.badge}
                  </span>
                </div>

                {/* Main Data Section */}
                <div className="relative z-10 flex-1 flex flex-col justify-between mb-6">
                  <div>
                    <h2 className="font-unbounded text-lg sm:text-xl font-bold text-white mb-2 leading-snug group-hover:text-first transition-colors line-clamp-2">
                      {project.title}
                    </h2>

                    <p className="font-montserrat text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                      {grasp.simpleWhat}
                    </p>

                    <p className="font-montserrat text-[11px] uppercase tracking-wider text-first font-semibold mb-1.5">
                      Techstack used
                    </p>
                    <p className="font-montserrat text-xs text-slate-400 mb-4 line-clamp-1">
                      {project.tech.slice(0, 4).join(", ")}
                    </p>
                  </div>

                  {/* Highlights Box */}
                  <div className="space-y-1.5 p-3 rounded-2xl bg-void/70 border border-white/[0.05]">
                    {grasp.keyHighlights.slice(0, 2).map((hl) => (
                      <div key={hl} className="flex items-center gap-2 text-[11px] font-montserrat text-slate-300">
                        <i className="ri-checkbox-circle-fill text-first text-xs shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Image / Action Bar */}
                <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-void text-xs font-montserrat font-medium text-slate-300 border border-white/10 hover:border-first hover:text-white transition-all"
                  >
                    <i className="ri-github-fill text-base" />
                    <span>View Code</span>
                  </a>

                  {/* Signature Round Panda Button to open specs */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    title="View Full Specifications"
                    className="w-11 h-11 rounded-full bg-void border-2 border-first text-white flex items-center justify-center hover:bg-first hover:text-void hover:scale-110 shadow-lg shadow-first/20 transition-all duration-300 shrink-0"
                  >
                    <i className="ri-arrow-right-up-long-line text-lg" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Toggle Button: Show All Projects / Show Featured */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="button-panda inline-flex items-center gap-3"
          >
            <span>
              {showAllProjects
                ? "Show Top Featured (6 Projects)"
                : `Explore All Work (${filteredProjects.length} Projects)`}
            </span>
            <i className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ${showAllProjects ? "rotate-180" : ""}`} />
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
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-container rounded-[2.5rem] p-6 sm:p-8 shadow-2xl text-left border border-first/40"
              style={{
                boxShadow: "0 0 60px rgba(138, 111, 232, 0.25)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-void hover:bg-first/20 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Close modal"
              >
                <i className="ri-close-line text-xl" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-10">
                <span className="font-montserrat text-xs uppercase tracking-wider block mb-2 font-semibold text-first">
                  {selectedProject.category}
                </span>
                <h3 className="font-unbounded text-2xl sm:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="font-montserrat text-xs text-slate-400 mt-1">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Problem / Solution Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-5 rounded-2xl bg-void border border-white/10">
                  <div className="flex items-center gap-2 mb-2 text-first">
                    <i className="ri-lightbulb-line text-lg" />
                    <span className="font-montserrat text-xs uppercase tracking-wider text-slate-200 font-semibold">Problem Addressed</span>
                  </div>
                  <p className="font-montserrat text-xs text-slate-300 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-first/10 border border-first/30">
                  <div className="flex items-center gap-2 mb-2 text-first">
                    <i className="ri-flashlight-line text-lg" />
                    <span className="font-montserrat text-xs uppercase tracking-wider text-white font-semibold">Engineering Solution</span>
                  </div>
                  <p className="font-montserrat text-xs text-slate-300 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="font-montserrat text-xs uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2 font-semibold">
                  <i className="ri-stack-line text-first" /> Architectural Modules & Features
                </h4>
                <div className="space-y-2">
                  {selectedProject.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 font-montserrat text-xs text-slate-300">
                      <i className="ri-checkbox-circle-fill text-first text-sm shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mb-8">
                <h4 className="font-montserrat text-xs uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Complete Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="font-montserrat text-xs px-3 py-1 rounded-full bg-void border border-first/30 text-first"
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
                  className="button-panda inline-flex items-center gap-2 text-xs"
                >
                  <i className="ri-github-fill text-base" />
                  <span>Open GitHub Repository</span>
                  <i className="ri-arrow-right-up-line" />
                </a>

                {selectedProject.githubAlt && (
                  <a
                    href={selectedProject.githubAlt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary-panda inline-flex items-center gap-2 text-xs"
                  >
                    <span>Secondary Repo</span>
                    <i className="ri-external-link-line" />
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
