import { motion } from "framer-motion";

const highLevelCategories = [
  {
    id: "domains",
    tag: "// 01 · DOMAINS",
    title: "Domains",
    subtitle: "Strategic engineering verticals driving intelligent computing, data infrastructure, and modern digital ecosystems.",
    skills: ["Artificial Intelligence", "Data Science", "Full-Stack Web Development"],
    icon: "ri-compass-3-line",
    glow: "bg-first/20 group-hover:bg-first/35",
  },
  {
    id: "core-areas",
    tag: "// 02 · CORE AREAS",
    title: "Core Areas",
    subtitle: "Core analytical disciplines focusing on data-driven discovery, statistical modeling, and machine learning pipelines.",
    skills: ["Data Analysis", "AI", "ML"],
    icon: "ri-brain-line",
    glow: "bg-first-alt/20 group-hover:bg-first-alt/35",
  },
];

const technicalStackCategories = [
  {
    id: "languages",
    tag: "// 03 · LANGUAGES",
    title: "Languages",
    subtitle: "Core algorithmic and web languages utilized for data processing, database management, and UI logic.",
    skills: ["Python", "SQL", "JavaScript", "HTML", "CSS"],
    icon: "ri-code-s-slash-line",
    glow: "bg-blue-500/15 group-hover:bg-blue-500/30",
  },
  {
    id: "database-framework",
    tag: "// 04 · DATABASE & FRAMEWORK",
    title: "Database & Framework",
    subtitle: "Document datastores, component-driven client architecture, and scalable asynchronous backend runtimes.",
    skills: ["MongoDB", "React.js", "Node.js", "Express.js"],
    icon: "ri-database-2-line",
    glow: "bg-emerald-500/15 group-hover:bg-emerald-500/30",
  },
  {
    id: "tools",
    tag: "// 05 · TOOLS",
    title: "Tools & Platforms",
    subtitle: "Modern code authoring suites, version control, cloud infrastructure, and generative AI models.",
    skills: ["Claude", "ChatGPT", "GitHub", "Jupyter Notebook", "VS Code", "AWS"],
    icon: "ri-tools-line",
    glow: "bg-amber-500/15 group-hover:bg-amber-500/30",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-void overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-first/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-first-alt/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-14 text-left">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-unbounded text-first tracking-widest uppercase block">
              // 02 · TECHNICAL CAPABILITIES
            </span>
            <span className="text-slate-600">|</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-montserrat bg-first/15 border border-first/30 text-first font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Verified Stack
            </span>
          </div>

          <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.2]">
            Skills &amp; <span className="text-first">Specializations</span>
          </h2>
          <p className="font-montserrat text-slate-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            A comprehensive, industry-aligned technical skill set spanning core engineering domains, programming languages, full-stack frameworks, databases, and generative AI developer tools.
          </p>
        </div>

        {/* Row 1: High-Level Domains & Core Areas (2 Large Focus Cards) */}
        <div className="grid md:grid-cols-2 gap-7 mb-7">
          {highLevelCategories.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="relative bg-container rounded-[2.5rem] p-8 sm:p-10 border border-white/[0.06] overflow-hidden group hover:border-first/50 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Corner Glowing Blobs */}
              <div 
                className={`absolute -top-28 -left-28 w-56 h-56 rounded-full ${item.glow} blur-[50px] pointer-events-none transition-all duration-500`} 
              />
              <div 
                className="absolute -top-28 -right-28 w-56 h-56 rounded-full bg-first-alt/15 blur-[50px] pointer-events-none group-hover:bg-first-alt/30 transition-all duration-500" 
              />

              {/* Service Header */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-void border border-first/30 flex items-center justify-center text-first text-2xl group-hover:scale-110 group-hover:border-first transition-all shadow-md shadow-black/40">
                    <i className={item.icon} />
                  </div>
                  <span className="font-unbounded text-[11px] font-semibold text-first px-3 py-1 rounded-full bg-first/10 border border-first/20 tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-unbounded text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-first transition-colors">
                  {item.title}
                </h3>
                
                <p className="font-montserrat text-sm text-slate-300 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              {/* Skill Pill Badges */}
              <div className="relative z-10 pt-5 border-t border-white/[0.06] flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-montserrat text-xs sm:text-sm px-4 py-2 rounded-full bg-[#14141f] text-slate-200 border border-white/10 group-hover:border-first/40 hover:border-first hover:text-white hover:bg-first/15 transition-all font-medium shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Floating Corner Arrow Badge */}
                <div className="w-10 h-10 rounded-xl bg-void border-2 border-first/60 text-white flex items-center justify-center shrink-0 group-hover:bg-first group-hover:text-void group-hover:border-first transition-all duration-300 shadow-md">
                  <i className="ri-arrow-right-up-line text-lg" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2: Languages, Database & Framework, Tools (3 Technical Cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {technicalStackCategories.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
              className="relative bg-container rounded-[2.5rem] p-7 sm:p-8 border border-white/[0.06] overflow-hidden group hover:border-first/50 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Corner Glowing Blobs */}
              <div 
                className={`absolute -top-28 -left-28 w-56 h-56 rounded-full ${item.glow} blur-[50px] pointer-events-none transition-all duration-500`} 
              />

              {/* Service Header */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-void border border-first/30 flex items-center justify-center text-first text-2xl group-hover:scale-110 group-hover:border-first transition-all shadow-md shadow-black/40">
                    <i className={item.icon} />
                  </div>
                  <span className="font-unbounded text-[10px] font-semibold text-first px-3 py-1 rounded-full bg-first/10 border border-first/20 tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-unbounded text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-first transition-colors">
                  {item.title}
                </h3>
                
                <p className="font-montserrat text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              {/* Skill Pill Badges */}
              <div className="relative z-10 pt-5 border-t border-white/[0.06] flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-montserrat text-xs px-3.5 py-1.5 rounded-full bg-[#14141f] text-slate-200 border border-white/10 group-hover:border-first/30 hover:border-first hover:text-white hover:bg-first/15 transition-all font-medium shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Floating Corner Arrow Badge */}
                <div className="w-9 h-9 rounded-xl bg-void border-2 border-first/60 text-white flex items-center justify-center shrink-0 group-hover:bg-first group-hover:text-void group-hover:border-first transition-all duration-300 shadow-md">
                  <i className="ri-arrow-right-up-line text-base" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
