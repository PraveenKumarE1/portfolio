import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Code2, Brain, Terminal, Compass, Sparkles } from "lucide-react";
import { personal, stats, strengths } from "../../data/portfolio";

export default function About() {
  const statColors = [
    { text: "text-blue-400", border: "hover:border-blue-500/40", shadow: "group-hover:shadow-blue-500/10" },
    { text: "text-purple-400", border: "hover:border-purple-500/40", shadow: "group-hover:shadow-purple-500/10" },
    { text: "text-cyan-400", border: "hover:border-cyan-500/40", shadow: "group-hover:shadow-cyan-500/10" },
    { text: "text-emerald-400", border: "hover:border-emerald-500/40", shadow: "group-hover:shadow-emerald-500/10" },
  ];

  return (
    <section id="about" className="relative section-padding border-t border-white/[0.05]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
            01 / Background & Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            About <span className="gradient-blue-cyan">Me</span>
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Biography & Education */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed">
            <p className="text-base sm:text-lg text-slate-200">
              I am an Artificial Intelligence & Data Science undergraduate student with a passion for building software that solves practical problems. My work ranges from <span className="text-emerald-400 font-medium">computer vision research in retinal image analysis</span> to <span className="text-cyan-400 font-medium">full-stack web platforms</span> and <span className="text-purple-400 font-medium">predictive machine learning systems</span>.
            </p>

            <p className="text-sm sm:text-base text-slate-400">
              During my academic career, I completed a virtual <span className="text-white font-medium">Data Science Internship at CodeAlpha</span> and underwent dedicated <span className="text-white font-medium">Generative AI Industrial Training at Fantasy Solution</span> in Trichy. I believe in writing modular code, understanding algorithmic foundations, and delivering clean, responsive digital experiences.
            </p>

            {/* Education Card with Cyan/Blue styling */}
            <div className="clean-card p-6 border border-blue-500/20 bg-gradient-to-r from-blue-900/[0.08] to-purple-900/[0.08] mt-8 hover:border-blue-500/40">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-lg shadow-blue-600/20">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                    Undergraduate Degree (2024–2028)
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    {personal.degree}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {personal.college}
                  </p>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    {personal.collegeLocation}
                  </p>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="pt-4">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Compass size={14} className="text-purple-400" /> Core Strengths & Traits
              </h4>
              <div className="flex flex-wrap gap-2">
                {strengths.map((trait, idx) => {
                  const pillColors = [
                    "border-blue-500/30 text-blue-300 hover:bg-blue-600/10",
                    "border-purple-500/30 text-purple-300 hover:bg-purple-600/10",
                    "border-cyan-500/30 text-cyan-300 hover:bg-cyan-600/10",
                    "border-emerald-500/30 text-emerald-300 hover:bg-emerald-600/10",
                  ];
                  return (
                    <span
                      key={trait}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] border ${pillColors[idx % 4]} transition-all`}
                    >
                      {trait}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Key Stats & Overview Box */}
          <div className="lg:col-span-5 space-y-5">
            {/* Profile Overview Card with Multi-Color accents */}
            <div className="clean-card p-6 border border-purple-500/20 bg-gradient-to-b from-purple-900/[0.1] via-blue-900/[0.05] to-transparent">
              <div className="flex items-center gap-3.5 pb-4 border-b border-white/[0.08]">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-display font-bold text-white text-lg shadow-lg shadow-purple-600/25">
                  PK
                </div>
                <div>
                  <h3 className="font-bold text-white font-display text-base">Praveen Kumar E</h3>
                  <p className="text-xs text-cyan-400 font-mono">B.Tech AI & Data Science</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 text-xs font-mono text-slate-300">
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-slate-400">Academic Status:</span>
                  <span className="text-emerald-400 font-semibold">Active Student</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-slate-200">{personal.location}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-slate-400">Specialization:</span>
                  <span className="text-purple-400 font-medium">Machine Learning & Web</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Verified Credentials:</span>
                  <span className="text-cyan-400 font-semibold">5 Certifications</span>
                </div>
              </div>
            </div>

            {/* Stats Grid with Individual Vivid Colors */}
            <div className="grid grid-cols-2 gap-3.5">
              {stats.map((stat, idx) => {
                const colorConfig = statColors[idx % statColors.length];
                return (
                  <div
                    key={stat.label}
                    className={`clean-card p-5 border border-white/10 ${colorConfig.border} flex flex-col items-center justify-center text-center group transition-all`}
                  >
                    <span className={`text-2xl sm:text-3xl font-bold font-display ${colorConfig.text} transition-transform group-hover:scale-105`}>
                      {stat.value}{stat.suffix}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1.5">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Technical Focus Highlights with colorful icons */}
            <div className="clean-card p-5 border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Brain size={16} className="text-purple-400 shrink-0" />
                <span>Deep Learning & Neural Network Architectures</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Code2 size={16} className="text-cyan-400 shrink-0" />
                <span>Responsive Frontend Apps (React, Vite, Tailwind)</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Terminal size={16} className="text-emerald-400 shrink-0" />
                <span>Python ML Stack (PyTorch, OpenCV, Scikit-learn)</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
