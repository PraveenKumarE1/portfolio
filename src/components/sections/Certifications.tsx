import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "../../data/portfolio";

export default function Certifications() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [activeCert, setActiveCert] = useState<(typeof certifications)[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "hackathon" | "technical">("all");

  const handleCopy = (id: number, text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredCerts = certifications.filter((cert) => {
    if (activeFilter === "hackathon") {
      return (
        cert.title.toLowerCase().includes("hackathon") ||
        cert.badge.toLowerCase().includes("hack") ||
        cert.badge.toLowerCase().includes("participation")
      );
    }
    if (activeFilter === "technical") {
      return (
        !cert.title.toLowerCase().includes("hackathon")
      );
    }
    return true;
  });

  return (
    <section id="certifications" className="relative py-24 bg-void overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-first/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-first-alt/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-unbounded text-first tracking-widest uppercase block">
                // 05 · ACCREDITATIONS
              </span>
              <span className="text-slate-600">|</span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-montserrat bg-first/15 border border-first/30 text-first font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Verified Credentials</span>
              </span>
            </div>

            <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.2]">
              Verified <span className="text-first">Credentials</span>
              <br />
              &amp; Achievements
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1">
            <p className="font-montserrat text-sm text-slate-400 max-w-md md:text-right">
              Official academic honors, national hackathon awards, and verified technical certifications.
            </p>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-montserrat font-medium transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-first text-white shadow-lg shadow-first/40 border border-first scale-105"
                : "bg-container border border-white/[0.08] text-slate-300 hover:text-white hover:border-first/40"
            }`}
          >
            <span>All Certificates</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white">
              {certifications.length}
            </span>
          </button>

          <button
            onClick={() => setActiveFilter("hackathon")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-montserrat font-medium transition-all duration-300 ${
              activeFilter === "hackathon"
                ? "bg-first text-white shadow-lg shadow-first/40 border border-first scale-105"
                : "bg-container border border-white/[0.08] text-slate-300 hover:text-white hover:border-first/40"
            }`}
          >
            <i className="ri-trophy-line text-sm" />
            <span>Hackathons &amp; Events</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white">
              {certifications.filter((c) => c.title.toLowerCase().includes("hackathon") || c.badge.toLowerCase().includes("participation")).length}
            </span>
          </button>

          <button
            onClick={() => setActiveFilter("technical")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-montserrat font-medium transition-all duration-300 ${
              activeFilter === "technical"
                ? "bg-first text-white shadow-lg shadow-first/40 border border-first scale-105"
                : "bg-container border border-white/[0.08] text-slate-300 hover:text-white hover:border-first/40"
            }`}
          >
            <i className="ri-award-line text-sm" />
            <span>Courses &amp; Training</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white">
              {certifications.filter((c) => !c.title.toLowerCase().includes("hackathon") && !c.badge.toLowerCase().includes("participation")).length}
            </span>
          </button>
        </div>

        {/* ══════════════════════════════════════════════════
            Official Certifications Grid (Panda Coders Card Style)
            ══════════════════════════════════════════════════ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredCerts.map((cert, idx) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
              onClick={() => setActiveCert(cert)}
              className="relative bg-container rounded-[2.5rem] p-7 border border-white/[0.06] overflow-hidden group hover:border-first/50 transition-all duration-500 flex flex-col justify-between cursor-pointer"
            >
              {/* Glowing Corner Blob */}
              <div 
                className="absolute -right-24 -bottom-24 w-52 h-52 rounded-full bg-first/20 blur-[50px] pointer-events-none group-hover:bg-first/35 transition-all duration-500" 
              />

              {/* Top Badge & Verified Stars */}
              <div className="relative z-10 mb-4 flex items-center justify-between">
                <span className="font-montserrat text-[11px] font-semibold px-3 py-1 rounded-full bg-first/15 text-first border border-first/30">
                  {cert.badge}
                </span>
                
                {/* Verified Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 text-sm">
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                </div>
              </div>

              {/* Certificate Preview Image */}
              {cert.image && (
                <div className="relative h-44 rounded-2xl overflow-hidden border border-white/10 mb-5 bg-black/60 group/img">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/50 backdrop-blur-[2px]">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-void border border-first/50 text-xs font-montserrat text-white shadow-xl">
                      <i className="ri-eye-line text-first" /> Click to Expand
                    </span>
                  </div>
                </div>
              )}

              {/* Certificate Details */}
              <div className="relative z-10 flex-1 flex flex-col justify-between mb-4">
                <div>
                  <span className="font-montserrat text-[10px] text-slate-400 block mb-1">
                    RECIPIENT: <b className="text-white">PRAVEEN KUMAR E</b>
                  </span>

                  <h3 className="font-unbounded text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-first transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="font-montserrat text-xs text-first font-medium mb-1">
                    {cert.issuer}
                  </p>

                  <p className="font-montserrat text-xs text-slate-400 mb-4">
                    {cert.date}
                  </p>
                </div>

                {/* Serial / Identifier Box */}
                <div className="p-3 rounded-xl bg-void border border-white/[0.06] flex items-center justify-between text-xs font-montserrat">
                  <div className="min-w-0 pr-2">
                    <span className="text-[10px] text-slate-500 block uppercase">Identifier:</span>
                    <span className="text-slate-300 truncate block text-[11px]" title={cert.code}>
                      {cert.code}
                    </span>
                  </div>

                  <button
                    onClick={(e) => handleCopy(cert.id, cert.code, e)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-first/20 text-slate-400 hover:text-white transition-colors shrink-0"
                    title="Copy Certificate Identifier"
                  >
                    {copiedId === cert.id ? (
                      <i className="ri-check-line text-emerald-400 text-base" />
                    ) : (
                      <i className="ri-file-copy-line text-base" />
                    )}
                  </button>
                </div>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-montserrat">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <i className="ri-shield-check-fill text-emerald-400 text-sm" /> Verified
                </span>

                <span className="text-first font-semibold flex items-center gap-1">
                  <i className="ri-checkbox-circle-fill text-sm" /> Active Record
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* ══════════════════════════════════════════════════
          Expanded Certificate Modal Lightbox
          ══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-container rounded-[2.5rem] p-6 sm:p-8 shadow-2xl text-left border border-first/40"
              style={{
                boxShadow: "0 0 60px rgba(138, 111, 232, 0.25)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-void hover:bg-first/20 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Close modal"
              >
                <i className="ri-close-line text-xl" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-montserrat text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-first/15 border border-first/30 text-first font-semibold">
                    {activeCert.badge}
                  </span>
                  <span className="font-montserrat text-xs text-slate-400">{activeCert.date}</span>
                </div>
                <h3 className="font-unbounded text-2xl sm:text-3xl font-bold text-white">
                  {activeCert.title}
                </h3>
                <p className="font-montserrat text-sm text-first font-medium mt-1">
                  {activeCert.issuer}
                </p>
              </div>

              {/* Certificate Image View */}
              {activeCert.image && (
                <div className="rounded-2xl overflow-hidden border border-white/15 mb-6 bg-black shadow-2xl flex items-center justify-center max-h-[55vh]">
                  <img
                    src={activeCert.image}
                    alt={activeCert.title}
                    className="w-full h-auto max-h-[55vh] object-contain"
                  />
                </div>
              )}

              {/* Certificate Metadata */}
              <div className="p-4 rounded-2xl bg-void border border-white/10 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-montserrat">
                <div>
                  <span className="text-slate-400 block mb-0.5">Official Verification ID:</span>
                  <span className="font-mono text-white text-sm font-semibold select-all">
                    {activeCert.code}
                  </span>
                </div>

                <button
                  onClick={(e) => handleCopy(activeCert.id, activeCert.code, e)}
                  className="button-secondary-panda inline-flex items-center gap-2 text-xs py-2 px-4 self-start sm:self-auto"
                >
                  {copiedId === activeCert.id ? (
                    <>
                      <i className="ri-check-line text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <i className="ri-file-copy-line" />
                      <span>Copy ID</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setActiveCert(null)}
                  className="button-panda inline-flex items-center gap-2 text-xs"
                >
                  <span>Close Viewer</span>
                  <i className="ri-close-line" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
