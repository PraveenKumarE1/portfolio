import { Briefcase, Cpu, FileText, Zap, Award } from "lucide-react";
import { experience } from "../../data/portfolio";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  briefcase: Briefcase,
  cpu: Cpu,
  "file-text": FileText,
  zap: Zap,
  code: Award,
};

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding border-t border-white/[0.05]">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center md:text-left">
          <span className="text-xs font-mono text-blue-500 uppercase tracking-widest block mb-2">
            04 / Trajectory
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            Experience & <span className="text-blue-500">Milestones</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-blue-500/20 ml-4 md:ml-6 space-y-10">
          {experience.map((item) => {
            const IconComponent = iconMap[item.icon] || Briefcase;
            return (
              <div key={item.id} className="relative pl-8 md:pl-10 group">
                {/* Timeline node icon */}
                <div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-[#07070a] border-2 border-blue-500/50 flex items-center justify-center text-blue-400 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-200">
                  <IconComponent size={14} />
                </div>

                {/* Content Card */}
                <div className="clean-card p-6 border border-white/10 group-hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                      {item.role}
                    </h3>
                    <span className="text-xs font-mono text-blue-400/90 font-medium">
                      {item.year}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-slate-300">
                      {item.org}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-600/15 border border-blue-500/30 text-blue-300">
                      {item.type}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
