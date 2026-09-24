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
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-emerald-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Header — INSIGHT Editorial Style */}
        <div className="mb-14 text-center md:text-left">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-2 font-semibold">
            05 / PROFESSIONAL EXPERIENCE &amp; MILESTONES
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold font-editorial text-white tracking-tight uppercase">
            WORK &amp; <span className="gradient-editorial-headline">TRAJECTORY</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-10">
          {experience.map((item) => {
            const IconComponent = iconMap[item.icon] || Briefcase;
            return (
              <div key={item.id} className="relative pl-8 md:pl-10 group">
                {/* Timeline node icon with matching color glow */}
                <div
                  className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-[#07070a] border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-125"
                  style={{
                    borderColor: item.color,
                    color: item.color,
                    boxShadow: `0 0 15px ${item.color}40`,
                  }}
                >
                  <IconComponent size={14} />
                </div>

                {/* Content Card */}
                <div
                  className="clean-card p-6 border border-white/10 transition-all duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${item.color}50`;
                    e.currentTarget.style.boxShadow = `0 12px 28px -8px rgba(0,0,0,0.5), 0 0 20px -4px ${item.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-display font-bold text-lg text-white transition-colors">
                      {item.role}
                    </h3>
                    <span
                      className="text-xs font-mono font-semibold"
                      style={{ color: item.color }}
                    >
                      {item.year}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-slate-300">
                      {item.org}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span
                      className="text-[11px] font-mono px-2 py-0.5 rounded border font-medium"
                      style={{
                        backgroundColor: `${item.color}15`,
                        borderColor: `${item.color}40`,
                        color: item.color,
                      }}
                    >
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
