import { motion } from "framer-motion";
import { Code2, Brain, Globe, Wrench } from "lucide-react";
import { skills } from "../../data/portfolio";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "#3B82F6",
    colorClass: "text-blue-400",
    bgClass: "bg-blue-600/10 border-blue-500/30",
    items: skills.programming,
  },
  {
    title: "AI & Data Science",
    icon: Brain,
    color: "#8B5CF6",
    colorClass: "text-purple-400",
    bgClass: "bg-purple-600/10 border-purple-500/30",
    items: skills.ai,
  },
  {
    title: "Web & Full-Stack",
    icon: Globe,
    color: "#06B6D4",
    colorClass: "text-cyan-400",
    bgClass: "bg-cyan-600/10 border-cyan-500/30",
    items: skills.web,
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "#F59E0B",
    colorClass: "text-amber-400",
    bgClass: "bg-amber-600/10 border-amber-500/30",
    items: skills.tools,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding border-t border-white/[0.05]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header - Simple & Neat */}
        <div className="mb-14 text-center md:text-left">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-2">
            02 / Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            Technical <span className="text-blue-500">Skills</span>
          </h2>
          <p className="text-sm font-mono text-slate-400 mt-2 max-w-lg">
            Core technologies and toolchains I work with daily across artificial intelligence, web development, and data engineering.
          </p>
        </div>

        {/* 4 Clean, Neat Category Cards */}
        <div className="grid md:grid-cols-2 gap-7">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="clean-card p-6 sm:p-7 border border-white/10 flex flex-col justify-between group transition-all duration-300 relative"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${category.color}60`;
                  e.currentTarget.style.boxShadow = `0 16px 32px -8px rgba(0,0,0,0.5), 0 0 25px -4px ${category.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/[0.06]">
                  <div
                    className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${category.color}15`,
                      borderColor: `${category.color}40`,
                      color: category.color,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {category.items.length} Technologies
                    </span>
                  </div>
                </div>

                {/* Neat Tech Badges & Minimal Proficiency Bar */}
                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name} className="group/item">
                      <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                        <span className="text-slate-200 font-medium group-hover/item:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-slate-400 text-[11px]">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Minimal, Sleek Progress Bar */}
                      <div className="w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: category.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
