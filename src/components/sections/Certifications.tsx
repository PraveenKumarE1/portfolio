import { Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { certifications } from "../../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-padding border-t border-white/[0.05]">
      {/* Subtle blue accent glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono text-blue-500 uppercase tracking-widest block mb-2">
              05 / Verifications
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
              Verified <span className="text-blue-500">Certifications</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Academic achievements, professional courses, and technical conference credentials with verifiable certificate identifiers.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="clean-card p-6 border border-white/10 flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-300"
            >
              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Award size={20} />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-blue-600/15 border border-blue-500/30 text-blue-300 font-semibold tracking-wide">
                    {cert.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base text-white group-hover:text-blue-400 transition-colors mb-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs text-slate-300 font-medium mb-1">
                  {cert.issuer}
                </p>

                {/* Date */}
                <p className="text-xs font-mono text-slate-400 mb-4">
                  {cert.date}
                </p>
              </div>

              {/* Verified footer */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 truncate max-w-[170px]" title={cert.code}>
                  {cert.code}
                </span>

                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-medium shrink-0">
                  <CheckCircle2 size={13} />
                  <span>Verified</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
