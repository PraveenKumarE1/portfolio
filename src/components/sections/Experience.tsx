import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience, personal } from "../../data/portfolio";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  // Filter experiences into practical work/internships and academic/milestones
  const workExperience = experience.filter(
    (e) => e.type === "Internship" || e.type === "Industrial Training" || e.type === "Hackathon"
  );

  const educationMilestones = [
    {
      id: "edu-1",
      role: personal.degree,
      org: `${personal.college} · Autonomous Institution`,
      year: "2024 – 2028",
      desc: "Comprehensive coursework in Artificial Intelligence, Deep Learning, Machine Learning, Computer Vision, Relational Databases, and Advanced Data Structures with a 9.17 CGPA.",
      type: "Degree",
    },
    ...experience.filter((e) => e.type === "Achievement"),
  ];

  return (
    <section id="experience" className="relative py-24 bg-void overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-first/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-first-alt/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-unbounded text-first tracking-widest uppercase block mb-3">
            // 04 · TRAJECTORY
          </span>
          <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.2]">
            <span className="text-first">My Work</span>
            <br />
            Experience
          </h2>
        </div>

        {/* Work / Education Dual Tabs (Panda Coders Style) */}
        <div className="flex justify-center mb-16">
          <div className="bg-container p-1.5 sm:p-2 rounded-full border border-white/[0.08] flex items-center gap-2 shadow-xl shadow-black/40">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-montserrat font-medium transition-all duration-300 ${
                activeTab === "experience"
                  ? "bg-first text-white shadow-lg shadow-first/40 border border-first"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Experience</span>
              <i className="ri-briefcase-3-line text-base" />
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-montserrat font-medium transition-all duration-300 ${
                activeTab === "education"
                  ? "bg-first text-white shadow-lg shadow-first/40 border border-first"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Education</span>
              <i className="ri-graduation-cap-line text-base" />
            </button>
          </div>
        </div>

        {/* Timeline Area with Glowing Vertical Line */}
        <div className="relative pl-6 sm:pl-10">
          
          {/* Central Glowing Vertical Line */}
          <div 
            className="absolute left-0 top-3 bottom-3 w-[2px]"
            style={{
              background: "linear-gradient(180deg, var(--first-color) 0%, rgba(138, 111, 232, 0.4) 60%, transparent 100%)",
              boxShadow: "0 0 12px var(--first-color)",
            }}
          />

          <AnimatePresence mode="wait">
            {activeTab === "experience" ? (
              <motion.div
                key="experience-tab"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-10"
              >
                {workExperience.map((item) => (
                  <div key={item.id} className="relative group">
                    {/* Glowing Node Dot on Timeline Line */}
                    <div className="absolute -left-[1.85rem] sm:-left-[2.85rem] top-7 w-4 h-4 rounded-full bg-void border-2 border-first group-hover:scale-125 group-hover:bg-first transition-all shadow-md shadow-first/50" />

                    {/* Timeline Card */}
                    <div className="bg-container rounded-[2rem] p-6 sm:p-8 border border-white/[0.06] group-hover:border-first/50 group-hover:translate-x-1.5 transition-all duration-300 relative overflow-hidden">
                      {/* Subtle corner blur */}
                      <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-first/10 blur-[30px] pointer-events-none" />

                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3 relative z-10">
                        <div>
                          <h3 className="font-unbounded text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-first transition-colors">
                            {item.role}
                          </h3>
                          <p className="font-montserrat text-sm text-first font-medium">
                            {item.org}
                          </p>
                        </div>
                        <span className="font-unbounded text-xs sm:text-sm font-semibold text-slate-300 shrink-0 text-left sm:text-right">
                          {item.year}
                        </span>
                      </div>

                      <p className="font-montserrat text-xs sm:text-sm text-slate-300 leading-relaxed relative z-10">
                        {item.desc}
                      </p>

                      <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-montserrat text-slate-400">
                        <span className="px-3 py-1 rounded-full bg-void border border-first/20 text-first">
                          {item.type}
                        </span>
                        <span>Verified Credential</span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education-tab"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-10"
              >
                {educationMilestones.map((item, idx) => (
                  <div key={item.id || idx} className="relative group">
                    {/* Glowing Node Dot on Timeline Line */}
                    <div className="absolute -left-[1.85rem] sm:-left-[2.85rem] top-7 w-4 h-4 rounded-full bg-void border-2 border-first group-hover:scale-125 group-hover:bg-first transition-all shadow-md shadow-first/50" />

                    {/* Timeline Card */}
                    <div className="bg-container rounded-[2rem] p-6 sm:p-8 border border-white/[0.06] group-hover:border-first/50 group-hover:translate-x-1.5 transition-all duration-300 relative overflow-hidden">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3 relative z-10">
                        <div>
                          <h3 className="font-unbounded text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-first transition-colors">
                            {item.role}
                          </h3>
                          <p className="font-montserrat text-sm text-first font-medium">
                            {item.org}
                          </p>
                        </div>
                        <span className="font-unbounded text-xs sm:text-sm font-semibold text-slate-300 shrink-0 text-left sm:text-right">
                          {item.year}
                        </span>
                      </div>

                      <p className="font-montserrat text-xs sm:text-sm text-slate-300 leading-relaxed relative z-10">
                        {item.desc}
                      </p>

                      <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-montserrat text-slate-400">
                        <span className="px-3 py-1 rounded-full bg-void border border-first/20 text-first">
                          {item.type || "Academic"}
                        </span>
                        <span>Institutional Record</span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
