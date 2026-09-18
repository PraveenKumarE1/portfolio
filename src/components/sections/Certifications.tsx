import { Award, CheckCircle2 } from "lucide-react";
import { certifications } from "../../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-padding border-t border-white/[0.05]">
      {/* Subtle multi-color background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-pink-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono text-pink-400 uppercase tracking-widest block mb-2">
              05 / Verifications & Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
              Verified <span className="gradient-purple-pink">Certifications</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Academic honors, corporate training credentials, and technical symposium awards with verifiable serial numbers.
          </p>
        </div>

        {/* Certifications Grid with Vibrant Card Themes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="clean-card p-6 border border-white/10 flex flex-col justify-between group transition-all duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${cert.color}60`;
                e.currentTarget.style.boxShadow = `0 16px 32px -8px rgba(0,0,0,0.5), 0 0 25px -4px ${cert.color}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl border flex items-center justify-center"
                    style={{
                      backgroundColor: `${cert.color}15`,
                      borderColor: `${cert.color}40`,
                      color: cert.color,
                    }}
                  >
                    <Award size={20} />
                  </div>
                  <span
                    className="text-[10px] font-mono px-2.5 py-1 rounded border font-semibold tracking-wide"
                    style={{
                      backgroundColor: `${cert.color}15`,
                      borderColor: `${cert.color}40`,
                      color: cert.color,
                    }}
                  >
                    {cert.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base text-white transition-colors mb-2">
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

              {/* Verified footer with matching color */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 truncate max-w-[170px]" title={cert.code}>
                  {cert.code}
                </span>

                <span
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-medium shrink-0"
                  style={{ color: cert.color }}
                >
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
