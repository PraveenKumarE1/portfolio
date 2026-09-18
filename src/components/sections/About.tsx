import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Code2, Brain, Terminal, Compass } from "lucide-react";
import { personal, stats, strengths } from "../../data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative section-padding border-t border-white/[0.05]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono text-blue-500 uppercase tracking-widest block mb-2">
            01 / Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            About <span className="text-blue-500">Me</span>
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Biography & Education */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed">
            <p className="text-base sm:text-lg text-slate-200">
              I am an Artificial Intelligence & Data Science undergraduate student with a passion for building software that solves practical problems. My work ranges from computer vision research in retinal image analysis to full-stack web applications and machine learning predictive systems.
            </p>

            <p className="text-sm sm:text-base text-slate-400">
              During my academic journey, I completed a virtual <span className="text-white font-medium">Data Science Internship at CodeAlpha</span> and underwent rigorous <span className="text-white font-medium">Generative AI Industrial Training at Fantasy Solution</span> in Trichy. I believe in writing well-tested code, understanding the mathematics behind models, and delivering clean, responsive user interfaces.
            </p>

            {/* Education Card */}
            <div className="clean-card p-6 border border-white/10 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
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
                <Compass size={14} className="text-blue-500" /> Key Professional Traits
              </h4>
              <div className="flex flex-wrap gap-2">
                {strengths.map((trait) => (
                  <span
                    key={trait}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/10 text-slate-300 hover:border-blue-500/40 hover:text-blue-400 transition-colors"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Stats & Overview Box */}
          <div className="lg:col-span-5 space-y-5">
            {/* Quick Profile Summary Card */}
            <div className="clean-card p-6 border border-blue-500/20 bg-gradient-to-b from-blue-900/[0.08] to-transparent">
              <div className="flex items-center gap-3.5 pb-4 border-b border-white/[0.08]">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center font-display font-bold text-white text-lg">
                  PK
                </div>
                <div>
                  <h3 className="font-bold text-white font-display text-base">Praveen Kumar E</h3>
                  <p className="text-xs text-blue-400 font-mono">B.Tech AI & Data Science</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 text-xs font-mono text-slate-300">
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-slate-400">Current Status:</span>
                  <span className="text-emerald-400 font-semibold">Active Student</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-slate-400">Location:</span>
                  <span>{personal.location}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-slate-400">Primary Focus:</span>
                  <span className="text-blue-400">AI / ML & Full Stack</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Verified Credentials:</span>
                  <span>5 Certifications</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="clean-card p-5 border border-white/10 flex flex-col items-center justify-center text-center group"
                >
                  <span className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-blue-400 transition-colors">
                    {stat.value}{stat.suffix}
                  </span>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Technical Focus Highlights */}
            <div className="clean-card p-5 border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Brain size={16} className="text-blue-400 shrink-0" />
                <span>Machine Learning & Deep Learning Pipelines</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Code2 size={16} className="text-blue-400 shrink-0" />
                <span>Responsive Full-Stack Apps with React & Node</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Terminal size={16} className="text-blue-400 shrink-0" />
                <span>Python, PyTorch, Scikit-learn, OpenCV</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
