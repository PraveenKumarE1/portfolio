import { useState } from "react";
import { Award, CheckCircle2, ShieldCheck, Copy, Check } from "lucide-react";
import { certifications } from "../../data/portfolio";
import Tilt from "react-parallax-tilt";

export default function Certifications() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="certifications" className="relative section-padding border-t border-white/[0.05]">
      {/* Background colorful ambient glow */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-indigo-600/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-pink-600/10 blur-[150px] rounded-full pointer-events-none" />

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
            Official academic honors, industry credentials, and technical symposium awards with verifiable serial numbers.
          </p>
        </div>

        {/* Certifications Grid with 3D Tilt & Sample Document Styling */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {certifications.map((cert) => (
            <Tilt
              key={cert.id}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              glareEnable
              glareMaxOpacity={0.05}
              glareColor={cert.color}
              glarePosition="all"
              glareBorderRadius="1.25rem"
              className="h-full"
            >
              <div
                className="clean-card h-full overflow-hidden border border-white/10 flex flex-col justify-between group transition-all duration-300 relative"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(10,10,18,0.9) 100%)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${cert.color}70`;
                  e.currentTarget.style.boxShadow = `0 20px 40px -12px rgba(0,0,0,0.6), 0 0 35px -6px ${cert.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Certificate Sample Header Band with Official Seal Styling */}
                <div
                  className="relative px-6 pt-5 pb-4 border-b flex items-center justify-between"
                  style={{
                    background: `linear-gradient(90deg, ${cert.color}15 0%, rgba(255,255,255,0.02) 100%)`,
                    borderColor: `${cert.color}30`,
                  }}
                >
                  {/* Official Rosette / Seal Badge */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center shadow-lg"
                      style={{
                        backgroundColor: `${cert.color}20`,
                        borderColor: cert.color,
                        color: cert.color,
                        boxShadow: `0 0 16px ${cert.color}35`,
                      }}
                    >
                      <Award size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                        OFFICIAL CREDENTIAL
                      </span>
                      <span className="text-xs font-mono font-bold text-white tracking-wide">
                        {cert.issuer.split("|")[0].trim()}
                      </span>
                    </div>
                  </div>

                  {/* Score / Grade Ribbon Badge */}
                  <span
                    className="text-[10px] font-mono px-2.5 py-1 rounded-full border font-bold tracking-wide shadow-sm"
                    style={{
                      backgroundColor: `${cert.color}25`,
                      borderColor: `${cert.color}60`,
                      color: cert.color,
                    }}
                  >
                    {cert.badge}
                  </span>
                </div>

                {/* Certificate Body (Document Sample Layout) */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 mb-1.5">
                      <span>RECIPIENT:</span>
                      <span className="text-slate-300 font-semibold">PRAVEEN KUMAR E</span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white group-hover:text-white transition-colors mb-2 leading-snug">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-slate-300 font-medium mb-1">
                      {cert.issuer}
                    </p>

                    <p className="text-xs font-mono text-slate-400 mb-4">
                      {cert.date}
                    </p>
                  </div>

                  {/* Verification ID box with copy button */}
                  <div
                    className="p-3 rounded-xl border flex items-center justify-between text-xs font-mono mb-4"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.02)",
                      borderColor: "rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="min-w-0 pr-2">
                      <span className="text-[10px] text-slate-500 block uppercase">Serial / Identifier:</span>
                      <span className="text-slate-300 truncate block text-[11px]" title={cert.code}>
                        {cert.code}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopy(cert.id, cert.code)}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0"
                      title="Copy Certificate Identifier"
                    >
                      {copiedId === cert.id ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                  </div>

                  {/* Footer seal */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                      <ShieldCheck size={12} className="text-emerald-400" /> Tamper-Proof Verified
                    </span>

                    <span
                      className="inline-flex items-center gap-1 text-xs font-mono font-semibold"
                      style={{ color: cert.color }}
                    >
                      <CheckCircle2 size={13} />
                      <span>Active Credential</span>
                    </span>
                  </div>
                </div>

              </div>
            </Tilt>
          ))}
        </div>

      </div>
    </section>
  );
}
