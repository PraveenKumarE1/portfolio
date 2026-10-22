import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "../../data/portfolio";

const AUTOPLAY_INTERVAL = 3000; // 3 seconds per slide

export default function Certifications() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [activeCert, setActiveCert] = useState<(typeof certifications)[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "hackathon" | "technical">("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"3d" | "grid">("3d");
  const [isPaused, setIsPaused] = useState(false);

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
      return !cert.title.toLowerCase().includes("hackathon") && !cert.badge.toLowerCase().includes("participation");
    }
    return true;
  });

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredCerts.length - 1));
  }, [filteredCerts.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < filteredCerts.length - 1 ? prev + 1 : 0));
  }, [filteredCerts.length]);

  // Autoplay timer - automatic rotation for all time (3 second intervals)
  useEffect(() => {
    if (viewMode !== "3d" || isPaused || filteredCerts.length <= 1) {
      return;
    }
    const timer = setInterval(() => {
      handleNext();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [viewMode, isPaused, filteredCerts.length, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeCert) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, activeCert]);

  return (
    <section id="certifications" className="relative py-24 bg-void overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-first/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-first-alt/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 text-left">
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

          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="font-montserrat text-sm text-slate-400 max-w-md md:text-right">
              Official academic honors, hackathon awards, and technical certifications. Rotate left &amp; right.
            </p>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-2 bg-container p-1 rounded-full border border-white/10">
              <button
                onClick={() => setViewMode("3d")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-montserrat transition-all ${
                  viewMode === "3d" ? "bg-first text-white shadow-md shadow-first/30" : "text-slate-400 hover:text-white"
                }`}
              >
                <i className="ri-compass-3-line" />
                <span>3D Carousel</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-montserrat transition-all ${
                  viewMode === "grid" ? "bg-first text-white shadow-md shadow-first/30" : "text-slate-400 hover:text-white"
                }`}
              >
                <i className="ri-grid-fill" />
                <span>Grid View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {(
            [
              {
                key: "all" as const,
                label: "All Certificates",
                icon: null,
                count: certifications.length,
              },
              {
                key: "hackathon" as const,
                label: "Hackathons & Events",
                icon: "ri-trophy-line",
                count: certifications.filter(
                  (c) =>
                    c.title.toLowerCase().includes("hackathon") ||
                    c.badge.toLowerCase().includes("participation")
                ).length,
              },
              {
                key: "technical" as const,
                label: "Courses & Training",
                icon: "ri-award-line",
                count: certifications.filter(
                  (c) =>
                    !c.title.toLowerCase().includes("hackathon") &&
                    !c.badge.toLowerCase().includes("participation")
                ).length,
              },
            ] as { key: "all" | "hackathon" | "technical"; label: string; icon: string | null; count: number }[]
          ).map((tab) => {
            const isSelected = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-montserrat font-medium transition-all duration-300 ${
                  isSelected
                    ? "bg-first text-white shadow-lg shadow-first/40 border border-first scale-105"
                    : "bg-container border border-white/[0.08] text-slate-300 hover:text-white hover:border-first/40"
                }`}
              >
                {tab.icon && <i className={`${tab.icon} text-sm`} />}
                <span>{tab.label}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white">
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ══════════════════════════════════════════════════
            MODE 1: 3D CYLINDRICAL CAROUSEL (Netflix CoverFlow Style)
            ══════════════════════════════════════════════════ */}
        {viewMode === "3d" ? (
          <div className="relative py-8 select-none">
            <div 
              className="relative w-full h-[520px] sm:h-[560px] flex items-center justify-center overflow-visible"
              style={{ perspective: "1200px" }}
            >
              {filteredCerts.map((cert, idx) => {
                const offset = idx - currentIndex;
                const total = filteredCerts.length;

                let wrappedOffset = offset;
                if (wrappedOffset > total / 2) wrappedOffset -= total;
                if (wrappedOffset < -total / 2) wrappedOffset += total;

                const isCurrent = wrappedOffset === 0;
                const isVisible = Math.abs(wrappedOffset) <= 3;

                if (!isVisible) return null;

                const translateX = wrappedOffset * 220;
                const translateZ = -Math.abs(wrappedOffset) * 160;
                const rotateY = wrappedOffset * -28;
                const scale = Math.max(0.72, 1 - Math.abs(wrappedOffset) * 0.12);
                const opacity = Math.max(0.15, 1 - Math.abs(wrappedOffset) * 0.28);
                const zIndex = 50 - Math.abs(wrappedOffset) * 10;

                return (
                  <motion.div
                    key={cert.id}
                    onClick={() => {
                      if (!isCurrent) {
                        setCurrentIndex(idx);
                      }
                    }}
                    animate={{
                      x: translateX,
                      z: translateZ,
                      rotateY: rotateY,
                      scale: scale,
                      opacity: opacity,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 26,
                    }}
                    style={{
                      position: "absolute",
                      width: "340px",
                      maxWidth: "88vw",
                      height: "480px",
                      zIndex: zIndex,
                      transformStyle: "preserve-3d",
                      cursor: isCurrent ? "default" : "pointer",
                    }}
                    className="flex flex-col justify-between"
                  >
                    <div 
                      onClick={() => {
                        if (isCurrent) setActiveCert(cert);
                      }}
                      className={`relative w-full h-full bg-container rounded-[2.5rem] p-7 border overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                        isCurrent 
                          ? "border-first/70 shadow-2xl shadow-first/30 ring-1 ring-first/40 cursor-pointer" 
                          : "border-white/[0.08] hover:border-white/20 filter brightness-90 hover:brightness-100"
                      }`}
                    >
                      {/* Glowing Corner Blob */}
                      <div 
                        className="absolute -right-20 -bottom-20 w-44 h-44 rounded-full bg-first/25 blur-[45px] pointer-events-none" 
                      />

                      {/* Top Badge & Verified Stars */}
                      <div className="relative z-10 mb-3 flex items-center justify-between">
                        <span className="font-montserrat text-[11px] font-semibold px-3 py-1 rounded-full bg-first/15 text-first border border-first/30">
                          {cert.badge}
                        </span>
                        
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
                        <div className="relative h-40 rounded-2xl overflow-hidden border border-white/10 mb-3 bg-black/60 group/img">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/50 backdrop-blur-[2px]">
                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-void border border-first/50 text-xs font-montserrat text-white shadow-xl">
                              <i className="ri-eye-line text-first" /> View Full Certificate
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Certificate Details */}
                      <div className="relative z-10 flex-1 flex flex-col justify-between mb-2">
                        <div>
                          <span className="font-montserrat text-[10px] text-slate-400 block mb-1">
                            RECIPIENT: <b className="text-white">PRAVEEN KUMAR E</b>
                          </span>

                          <h3 className="font-unbounded text-base font-bold text-white mb-1.5 leading-snug line-clamp-2">
                            {cert.title}
                          </h3>

                          <p className="font-montserrat text-xs text-first font-medium mb-1">
                            {cert.issuer}
                          </p>

                          <p className="font-montserrat text-xs text-slate-400 mb-2">
                            {cert.date}
                          </p>
                        </div>

                        {/* Identifier Box */}
                        <div className="p-2.5 rounded-xl bg-void border border-white/[0.06] flex items-center justify-between text-xs font-montserrat">
                          <div className="min-w-0 pr-2">
                            <span className="text-[9px] text-slate-500 block uppercase">Identifier:</span>
                            <span className="text-slate-300 truncate block text-[10px]" title={cert.code}>
                              {cert.code}
                            </span>
                          </div>

                          <button
                            onClick={(e) => handleCopy(cert.id, cert.code, e)}
                            className="p-1 rounded-lg bg-white/5 hover:bg-first/20 text-slate-400 hover:text-white transition-colors shrink-0"
                            title="Copy ID"
                          >
                            {copiedId === cert.id ? (
                              <i className="ri-check-line text-emerald-400 text-sm" />
                            ) : (
                              <i className="ri-file-copy-line text-sm" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="relative z-10 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-montserrat">
                        <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                          <i className="ri-shield-check-fill text-emerald-400 text-sm" /> Verified
                        </span>

                        <span className="text-first font-semibold flex items-center gap-1 text-[11px]">
                          <i className="ri-checkbox-circle-fill text-sm" /> Active Record
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Carousel Navigation Bar (Left / Right controls, auto-slide progress, and pause toggle) */}
            <div className="flex flex-col items-center gap-3 mt-8">
              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={handlePrev}
                  aria-label="Previous certificate"
                  className="w-12 h-12 rounded-full bg-container border border-white/15 text-white hover:border-first hover:bg-first/20 flex items-center justify-center transition-all shadow-lg shadow-black/40 hover:scale-110"
                >
                  <i className="ri-arrow-left-s-line text-2xl" />
                </button>

                {/* Position indicator */}
                <div className="flex items-center gap-2">
                  <span className="font-unbounded text-sm font-bold text-white">
                    {String(currentIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-slate-600 font-montserrat">/</span>
                  <span className="font-montserrat text-xs text-slate-400">
                    {String(filteredCerts.length).padStart(2, "0")}
                  </span>
                </div>

                <button
                  onClick={handleNext}
                  aria-label="Next certificate"
                  className="w-12 h-12 rounded-full bg-container border border-white/15 text-white hover:border-first hover:bg-first/20 flex items-center justify-center transition-all shadow-lg shadow-black/40 hover:scale-110"
                >
                  <i className="ri-arrow-right-s-line text-2xl" />
                </button>
              </div>

              {/* Autoplay status bar & pause toggle */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 hover:border-first/40 text-[11px] font-montserrat text-slate-400 hover:text-white transition-all"
                  title={isPaused ? "Resume autoplay" : "Pause autoplay"}
                >
                  <i className={isPaused ? "ri-play-fill text-first" : "ri-pause-fill text-first"} />
                  <span>{isPaused ? "Paused" : "Auto-rotating (3s)"}</span>
                </button>
                <span className="text-slate-600 text-xs">·</span>
                <span className="text-slate-500 font-montserrat text-[11px]">Continuous 3D rotation</span>
              </div>
            </div>
          </div>
        ) : (
          /* ══════════════════════════════════════════════════
              MODE 2: STATIC 3-COLUMN GRID VIEW
              ══════════════════════════════════════════════════ */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredCerts.map((cert) => (
              <article
                key={cert.id}
                onClick={() => setActiveCert(cert)}
                className="relative bg-container rounded-[2.5rem] p-7 border border-white/[0.06] overflow-hidden group hover:border-first/50 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="relative z-10 mb-4 flex items-center justify-between">
                  <span className="font-montserrat text-[11px] font-semibold px-3 py-1 rounded-full bg-first/15 text-first border border-first/30">
                    {cert.badge}
                  </span>
                  
                  <div className="flex items-center gap-1 text-amber-400 text-sm">
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                  </div>
                </div>

                {cert.image && (
                  <div className="relative h-44 rounded-2xl overflow-hidden border border-white/10 mb-5 bg-black/60 group/img">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/50 backdrop-blur-[2px]">
                      <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-void border border-first/50 text-xs font-montserrat text-white shadow-xl">
                        <i className="ri-eye-line text-first" /> Click to Expand
                      </span>
                    </div>
                  </div>
                )}

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

                <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-montserrat">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <i className="ri-shield-check-fill text-emerald-400 text-sm" /> Verified
                  </span>

                  <span className="text-first font-semibold flex items-center gap-1">
                    <i className="ri-checkbox-circle-fill text-sm" /> Active Record
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* Expanded Certificate Modal Lightbox */}
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
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-void hover:bg-first/20 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Close modal"
              >
                <i className="ri-close-line text-xl" />
              </button>

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

              {activeCert.image && (
                <div className="rounded-2xl overflow-hidden border border-white/15 mb-6 bg-black shadow-2xl flex items-center justify-center max-h-[55vh]">
                  <img
                    src={activeCert.image}
                    alt={activeCert.title}
                    className="w-full h-auto max-h-[55vh] object-contain"
                  />
                </div>
              )}

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
