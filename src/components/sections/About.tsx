import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
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
    <section id="about" className="relative py-24 overflow-hidden bg-void">
      {/* Background radial glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-first/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-first-alt/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: Full Space Bio & Text */}
        <div className="max-w-4xl space-y-6 text-left mb-16">
          <span className="text-xs font-unbounded text-first tracking-widest uppercase block">
            // 01 · ABOUT ME
          </span>
          
          <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.2]">
            <span className="text-first">Creativity</span>
            <br />
            Is My Passion
          </h2>

          <p className="font-montserrat text-base sm:text-lg text-slate-300 leading-relaxed">
            I'm an <b className="text-first font-semibold">AI & Data Science Engineer</b> passionate about experimenting with <b className="text-first font-semibold">intelligent algorithms and creative software</b>. Driven by relentless curiosity, I engineer end-to-end solutions spanning <b className="text-white font-medium">retinal computer vision models</b>, <b className="text-white font-medium">multi-agent LLM systems</b>, and high-performance <b className="text-white font-medium">modern web applications</b>.
          </p>

          <p className="font-montserrat text-sm sm:text-base text-slate-300 leading-relaxed">
            Currently pursuing my B.Tech in Artificial Intelligence & Data Science at Shree Venkateshwara Hi-Tech Engineering College. <b className="text-first font-semibold">My CGPA is 7.42.</b> Recognized as an active finalist across multiple national-level hackathons and technical symposiums with hands-on expertise in machine learning, full-stack architectures, and modern digital product engineering.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="button-panda inline-flex items-center gap-2"
            >
              Let's Talk <i className="ri-send-plane-line text-lg" />
            </a>
            
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="button-secondary-panda inline-flex items-center gap-2"
            >
              GitHub Profile <i className="ri-github-line text-lg" />
            </a>
          </div>
        </div>

        {/* Stats Grid in Panda Coders Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="panda-card p-6 text-center group"
            >
              <div className="font-unbounded text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:text-first transition-colors">
                <AnimatedCounter target={item.value} suffix={item.suffix} />
              </div>
              <div className="font-montserrat text-xs text-slate-400 uppercase tracking-wider font-medium">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Traits Section */}
        <div className="grid md:grid-cols-12 gap-6">
          
          {/* Education Card */}
          <div className="md:col-span-7 panda-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-unbounded text-first tracking-wider uppercase">
                  Education Background
                </span>
                <span className="text-xs font-montserrat px-3 py-1 rounded-full bg-first/15 text-first border border-first/30">
                  2024 – 2028
                </span>
              </div>

              <h3 className="font-unbounded text-lg sm:text-xl font-bold text-white mb-2">
                {personal.degree}
              </h3>
              
              <p className="font-montserrat text-sm text-slate-300 mb-1">
                {personal.college}
              </p>
              
              <p className="font-montserrat text-xs text-slate-400 flex items-center gap-1.5 mt-2">
                <i className="ri-map-pin-2-line text-first" />
                {personal.collegeLocation}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-montserrat text-slate-400">Current CGPA Score</span>
              <span className="font-unbounded text-base font-bold text-first">7.42 / 10.0</span>
            </div>
          </div>

          {/* Traits & Competencies */}
          <div className="md:col-span-5 panda-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-unbounded text-first tracking-wider uppercase block mb-4">
                Core Traits & Ethics
              </span>
              <div className="flex flex-wrap gap-2.5">
                {strengths.map((trait) => (
                  <span
                    key={trait}
                    className="font-montserrat text-xs px-3.5 py-2 rounded-full bg-void text-slate-200 border border-white/10 hover:border-first/60 hover:text-first transition-all"
                  >
                    {trait}
                  </span>
                ))}
                <span className="font-montserrat text-xs px-3.5 py-2 rounded-full bg-void text-slate-200 border border-white/10 hover:border-first/60 hover:text-first transition-all">
                  Problem Solver
                </span>
                <span className="font-montserrat text-xs px-3.5 py-2 rounded-full bg-void text-slate-200 border border-white/10 hover:border-first/60 hover:text-first transition-all">
                  Hackathon Finalist
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-montserrat text-slate-400">Available For</span>
              <span className="font-montserrat text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Internships & AI Roles
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
