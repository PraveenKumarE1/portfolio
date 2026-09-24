import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Compass, Sparkles } from "lucide-react";
import { personal, stats, strengths } from "../../data/portfolio";

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target);
    if (isNaN(num)) {
      setDisplay(target);
      return;
    }
    let start = 0;
    const step = Math.ceil(num / 30) || 1;
    const interval = setInterval(() => {
      start += step;
      if (start >= num) {
        setDisplay(String(num));
        clearInterval(interval);
      } else {
        setDisplay(String(start));
      }
    }, 45);
    return () => clearInterval(interval);
  }, [inView, target]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="relative section-padding border-t border-white/[0.06]">
      {/* Editorial Ambient Light */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-amber-600/[0.05] blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-600/[0.05] blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header — INSIGHT Editorial Style */}
        <div className="mb-14">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-2 font-semibold">
            02 / BACKGROUND &amp; DISCIPLINE
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold font-editorial text-white tracking-tight uppercase">
            ENGINEERING <span className="gradient-editorial-headline">FOUNDATION</span>
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Biography & Education */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed">
            <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed">
              I am an Artificial Intelligence &amp; Data Science undergraduate building machine learning pipelines, computer vision systems, and modern digital applications.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Completed a virtual <span className="text-white font-medium">Data Science Internship at CodeAlpha</span> and underwent <span className="text-white font-medium">Generative AI Industrial Training at Fantasy Solution</span> in Trichy. Focused on core algorithmic performance, clean codebase architecture, and practical engineering solutions.
            </p>

            {/* Education Card */}
            <div className="editorial-card p-6 border border-white/10 bg-white/[0.02] mt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-amber-400 shrink-0 shadow-lg">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block mb-1 font-semibold">
                    UNDERGRADUATE DEGREE (2024–2028)
                  </span>
                  <h3 className="text-lg font-bold text-white font-editorial tracking-tight">
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
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2 font-semibold">
                <Compass size={14} className="text-amber-400" /> Key Engineering Principles
              </h4>

              <div className="flex flex-wrap gap-2">
                {strengths.map((st) => (
                  <span
                    key={st}
                    className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-white/25 transition-colors"
                  >
                    {st}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Metrics Grid */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
            {stats.map((st, i) => (
              <div
                key={st.label}
                className="editorial-card p-6 flex flex-col justify-between group transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                    METRIC 0{i + 1}
                  </span>
                  <Sparkles size={14} className="text-amber-400/60 group-hover:text-amber-400 transition-colors" />
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-bold font-editorial text-white tracking-tight mb-1">
                    <AnimatedCounter target={st.value} suffix={st.value.includes("+") ? "+" : ""} />
                  </div>
                  <p className="text-xs font-mono text-slate-400 leading-snug">
                    {st.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
