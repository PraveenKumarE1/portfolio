import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Brain, Globe, Wrench, Sparkles, CheckCircle2, Search, ArrowRight } from "lucide-react";
import { skills } from "../../data/portfolio";

// Enrich skills with use-case tags and level descriptors
const skillMetadata: Record<string, { tag: string; badge: string }> = {
  "Python": { tag: "Retina Care, PyTorch, Flask APIs", badge: "Primary Language" },
  "Java": { tag: "OOP, Algorithms & Problem Solving", badge: "Proficient" },
  "C": { tag: "Low-level Systems & Data Structures", badge: "Foundational" },
  "SQL": { tag: "SQLite, Relational Modeling & Queries", badge: "Advanced" },
  "MongoDB": { tag: "NoSQL Collections & Document Stores", badge: "Proficient" },
  "TypeScript": { tag: "Strict Types in React 18 & Vite Apps", badge: "Advanced" },

  "Machine Learning": { tag: "Random Forest, Linear Regression, Scikit-learn", badge: "Specialization" },
  "Computer Vision": { tag: "OpenCV, Retinal Vessel Extraction, CNNs", badge: "Medical Research" },
  "Data Science": { tag: "EDA, Pandas, NumPy, Data Cleaning", badge: "Internship Proven" },
  "Gen AI": { tag: "Google Gemini 2.5 Flash, Streamlit, Claude 101", badge: "Certified" },

  "React 18": { tag: "Component Architecture, Hooks, State", badge: "Frontend Core" },
  "HTML / CSS": { tag: "Semantic Web, Tailwind CSS, Responsive UI", badge: "Expert" },
  "JavaScript": { tag: "ES6+, Async/Await, Web APIs", badge: "Advanced" },
  "Node.js / Express": { tag: "RESTful Endpoints & Server Middleware", badge: "Backend API" },
  "Flask & Streamlit": { tag: "ML/AI Model Serving & Interactive Dashboards", badge: "Deployment" },

  "GitHub": { tag: "11 Public Repositories, Git Workflows", badge: "Daily Workflow" },
  "Supabase": { tag: "Cloud Database, Auth & Realtime Sync", badge: "Backend as a Service" },
  "Leaflet": { tag: "Interactive Map Geolocation (SmartBuy AI)", badge: "GIS & Maps" },
  "VS Code & Jupyter": { tag: "Python Notebooks, Full-Stack Dev", badge: "Primary IDEs" },
  "MATLAB": { tag: "Retinal Image Analysis Preprocessing", badge: "Research" },
};

const categories = [
  {
    id: "all",
    label: "All Technologies",
    icon: Sparkles,
    color: "#60A5FA",
    items: [
      ...skills.programming,
      ...skills.ai,
      ...skills.web,
      ...skills.tools,
    ],
  },
  {
    id: "ai",
    label: "AI & Data Science",
    icon: Brain,
    color: "#A855F7",
    items: skills.ai,
  },
  {
    id: "programming",
    label: "Programming Languages",
    icon: Code2,
    color: "#3B82F6",
    items: skills.programming,
  },
  {
    id: "web",
    label: "Web & Full-Stack",
    icon: Globe,
    color: "#06B6D4",
    items: skills.web,
  },
  {
    id: "tools",
    label: "Platforms & Tooling",
    icon: Wrench,
    color: "#F59E0B",
    items: skills.tools,
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const currentCategory = categories[activeTab];

  const filteredSkills = currentCategory.items.filter((skill) =>
    skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    skill.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="skills" className="relative section-padding border-t border-white/[0.05]">
      {/* Dynamic Background Glows */}
      <div
        className="absolute top-1/4 right-0 w-[550px] h-[550px] blur-[160px] rounded-full pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: currentCategory.color }}
      />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">
              02 / Engineering Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
              Technical <span className="gradient-purple-pink">Proficiency</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Hands-on expertise across machine learning models, programming languages, and web development toolchains.
          </p>
        </div>

        {/* Category Selector Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveTab(idx);
                    setSearchQuery("");
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 border relative ${
                    isSelected
                      ? "text-white border-transparent shadow-lg"
                      : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                  style={{
                    backgroundColor: isSelected ? cat.color : undefined,
                    boxShadow: isSelected ? `0 0 24px ${cat.color}40` : undefined,
                  }}
                >
                  <Icon size={14} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Filter */}
          <div className="relative min-w-[220px]">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Python)..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-xs font-mono focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid with Modern Interactive Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentCategory.id}-${searchQuery}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill, index) => {
              const meta = skillMetadata[skill.name] || { tag: "Production Ready", badge: "Skill" };
              const categoryColor = currentCategory.color;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                  className="clean-card p-6 border border-white/10 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${categoryColor}60`;
                    e.currentTarget.style.boxShadow = `0 16px 32px -8px rgba(0,0,0,0.5), 0 0 25px -4px ${categoryColor}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div>
                    {/* Top Row: Title, Percentage & Badge */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: categoryColor }}
                        />
                        <h3 className="font-display font-bold text-lg text-white group-hover:text-white transition-colors">
                          {skill.name}
                        </h3>
                      </div>

                      <span
                        className="text-xs font-mono font-bold px-2 py-0.5 rounded border"
                        style={{
                          backgroundColor: `${categoryColor}15`,
                          borderColor: `${categoryColor}40`,
                          color: categoryColor,
                        }}
                      >
                        {meta.badge}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {skill.desc}
                    </p>

                    {/* Applied Projects Tag */}
                    <div className="flex items-start gap-1.5 p-2 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] font-mono text-slate-300 mb-5">
                      <span className="text-slate-500 shrink-0">Projects:</span>
                      <span className="truncate" title={meta.tag}>
                        {meta.tag}
                      </span>
                    </div>
                  </div>

                  {/* Level Progress Bar with Animated Meter */}
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                      <span className="text-slate-400">Mastery Level</span>
                      <span className="font-semibold text-white">{skill.level}%</span>
                    </div>

                    <div className="w-full h-2 bg-white/[0.06] rounded-full overflow-hidden p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${categoryColor} 0%, #38BDF8 100%)`,
                        }}
                      />
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
