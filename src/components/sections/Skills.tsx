import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Globe, Wrench } from "lucide-react";
import { skills } from "../../data/portfolio";

const categories = [
  {
    id: "programming",
    label: "Programming",
    icon: Code2,
    items: skills.programming,
    accentColor: "text-blue-400",
    bgActive: "bg-blue-600 text-white border-blue-500 shadow-blue-600/30",
    barColor: "bg-gradient-to-r from-blue-600 to-cyan-400",
    cardBorder: "hover:border-blue-500/40",
    glowOrb: "bg-blue-600/10",
  },
  {
    id: "ai",
    label: "AI & Data Science",
    icon: Brain,
    items: skills.ai,
    accentColor: "text-purple-400",
    bgActive: "bg-purple-600 text-white border-purple-500 shadow-purple-600/30",
    barColor: "bg-gradient-to-r from-purple-600 to-pink-500",
    cardBorder: "hover:border-purple-500/40",
    glowOrb: "bg-purple-600/10",
  },
  {
    id: "web",
    label: "Web Development",
    icon: Globe,
    items: skills.web,
    accentColor: "text-cyan-400",
    bgActive: "bg-cyan-600 text-white border-cyan-500 shadow-cyan-600/30",
    barColor: "bg-gradient-to-r from-cyan-600 to-emerald-400",
    cardBorder: "hover:border-cyan-500/40",
    glowOrb: "bg-cyan-600/10",
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    icon: Wrench,
    items: skills.tools,
    accentColor: "text-amber-400",
    bgActive: "bg-amber-600 text-white border-amber-500 shadow-amber-600/30",
    barColor: "bg-gradient-to-r from-amber-500 to-orange-400",
    cardBorder: "hover:border-amber-500/40",
    glowOrb: "bg-amber-600/10",
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const activeCategory = categories[activeTab];

  return (
    <section id="skills" className="relative section-padding border-t border-white/[0.05]">
      {/* Background colored glow shifting with tab */}
      <div className={`absolute top-1/3 right-0 w-96 h-96 ${activeCategory.glowOrb} blur-[140px] rounded-full pointer-events-none transition-all duration-700`} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">
              02 / Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
              Technical <span className="gradient-purple-pink">Skills</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Languages, machine learning toolkits, frameworks, and developer workflows I use to build production systems.
          </p>
        </div>

        {/* Category Selector Tabs with Unique Vivid Colors */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 border ${
                  isSelected
                    ? `${cat.bgActive} shadow-lg scale-105`
                    : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                <Icon size={14} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {activeCategory.items.map((skill) => (
            <div
              key={skill.name}
              className={`clean-card p-6 border border-white/10 ${activeCategory.cardBorder} flex flex-col justify-between group cursor-default transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`font-display font-bold text-base text-white group-hover:${activeCategory.accentColor} transition-colors`}>
                    {skill.name}
                  </h3>
                  <span className={`text-xs font-mono ${activeCategory.accentColor} font-semibold`}>
                    {skill.level}%
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {skill.desc}
                </p>
              </div>

              {/* Progress Bar with vibrant gradient */}
              <div className="w-full h-2 bg-white/[0.06] rounded-full overflow-hidden p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`h-full ${activeCategory.barColor} rounded-full`}
                />
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
