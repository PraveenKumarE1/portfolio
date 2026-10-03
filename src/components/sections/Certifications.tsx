import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CheckCircle2, ShieldCheck, Copy, Check, Eye, X, ExternalLink, ThumbsUp, MessageSquare, Repeat2, Share2, Sparkles } from "lucide-react";
import { certifications, linkedinPosts } from "../../data/portfolio";
import Tilt from "react-parallax-tilt";

function LinkedinIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Certifications() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [activeCert, setActiveCert] = useState<(typeof certifications)[0] | null>(null);
  const [activePost, setActivePost] = useState<(typeof linkedinPosts)[0] | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "certs" | "linkedin">("all");

  const handleCopy = (id: number, text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-pink-400 uppercase tracking-widest block">
                05 / Verifications & Credentials
              </span>
              <span className="text-slate-700">|</span>
              <a
                href="https://www.linkedin.com/in/praveen-kumar-e-952444358/recent-activity/all/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>LinkedIn Auto-Sync Active</span>
                <ExternalLink size={10} />
              </a>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
              Certificates & <span className="gradient-purple-pink">LinkedIn Feed</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1">
            <p className="text-sm font-mono text-slate-400 max-w-md md:text-right">
              Official academic honors, hackathon achievements, and verified LinkedIn activity feeds.
            </p>
            <a
              href="https://www.linkedin.com/in/praveen-kumar-e-952444358/recent-activity/all/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono text-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>Open Praveen's Live LinkedIn Activity</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveTab("all")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
              activeTab === "all"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-400 shadow-lg shadow-purple-600/30 scale-105"
                : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white"
            }`}
          >
            <span>All Credentials & Posts</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-white">
              {certifications.length + linkedinPosts.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("certs")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
              activeTab === "certs"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-400 shadow-lg shadow-purple-600/30 scale-105"
                : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white"
            }`}
          >
            <Award size={13} />
            <span>Official Certificates</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-white">
              {certifications.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("linkedin")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
              activeTab === "linkedin"
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-blue-400 shadow-lg shadow-blue-600/30 scale-105"
                : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white"
            }`}
          >
            <LinkedinIcon size={13} />
            <span>LinkedIn Posts & Hackathons</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-blue-500/30 text-cyan-300">
              {linkedinPosts.length}
            </span>
          </button>
        </div>

        {/* ══════════════════════════════════════════════════
            1. Official Certifications Grid (Tilt Cards)
            ══════════════════════════════════════════════════ */}
        {(activeTab === "all" || activeTab === "certs") && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
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
                  onClick={() => setActiveCert(cert)}
                  className="clean-card h-full overflow-hidden border border-white/10 flex flex-col justify-between group transition-all duration-300 relative cursor-pointer"
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
                      {cert.image && (
                        <div className="relative h-44 overflow-hidden rounded-xl border border-white/10 mb-4 group/img bg-black/60">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent opacity-60" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 border border-white/20 text-xs font-mono text-white">
                              <Eye size={14} className="text-cyan-400" /> Click to View
                            </span>
                          </div>
                        </div>
                      )}

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
                        onClick={(e) => handleCopy(cert.id, cert.code, e)}
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
        )}

        {/* ══════════════════════════════════════════════════
            2. LinkedIn Activity & Hackathon Posts Feed
            ══════════════════════════════════════════════════ */}
        {(activeTab === "all" || activeTab === "linkedin") && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <LinkedinIcon size={18} className="text-blue-400" />
              <h3 className="text-xl font-display font-bold text-white">
                Live LinkedIn Activity &amp; Posts
              </h3>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">
                Synced from @Praveen Kumar E
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {linkedinPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setActivePost(post)}
                  className="clean-card p-6 border border-white/10 hover:border-blue-500/50 flex flex-col justify-between transition-all duration-300 group cursor-pointer"
                  style={{
                    background: "rgba(10, 12, 22, 0.95)",
                  }}
                >
                  <div>
                    {/* Post Author Header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-white font-bold font-mono text-xs">
                          PK
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-display font-semibold text-white text-sm">
                              {post.author}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          </div>
                          <p className="text-[11px] font-mono text-slate-400 line-clamp-1">
                            {post.authorRole}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                          {post.badge}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 mt-1">
                          {post.postedDate}
                        </span>
                      </div>
                    </div>

                    {/* Post Content Text */}
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {post.text}
                    </p>

                    {/* Attached Post Images (Dual Side-by-Side: Certificate + Lab Photo) */}
                    {post.images && post.images.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 mb-4 rounded-xl overflow-hidden border border-white/10 bg-black/60 p-1">
                        {post.images.map((imgSrc, idx) => (
                          <div key={idx} className="relative h-32 rounded-lg overflow-hidden group/subimg">
                            <img
                              src={imgSrc}
                              alt={`LinkedIn post attachment ${idx + 1}`}
                              className="w-full h-full object-cover object-center group-hover/subimg:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/subimg:opacity-100 flex items-center justify-center transition-opacity">
                              <Eye size={16} className="text-white drop-shadow" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Post Footer & Engagement Row */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-3 text-[11px]">
                      <span className="flex items-center gap-1 text-blue-400">
                        <ThumbsUp size={12} /> {post.likes}
                      </span>
                      <span>·</span>
                      <span className="text-slate-500">{post.impressions}</span>
                    </div>

                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-cyan-400 hover:text-white transition-colors"
                    >
                      <span>View on LinkedIn</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ══════════════════════════════════════════════════
          3. Expanded Certificate Modal Lightbox
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
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0a14] rounded-2xl p-6 md:p-8 shadow-2xl text-left border"
              style={{
                borderColor: `${activeCert.color}60`,
                boxShadow: `0 0 50px ${activeCert.color}25`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="mb-5 pr-8">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border font-semibold"
                    style={{
                      backgroundColor: `${activeCert.color}15`,
                      borderColor: `${activeCert.color}40`,
                      color: activeCert.color,
                    }}
                  >
                    {activeCert.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{activeCert.date}</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  {activeCert.title}
                </h3>
                <p className="text-sm text-slate-300 font-medium mt-1">
                  {activeCert.issuer}
                </p>
              </div>

              {/* Certificate Image View */}
              {activeCert.image && (
                <div className="rounded-xl overflow-hidden border border-white/15 mb-6 bg-black shadow-2xl flex items-center justify-center max-h-[55vh]">
                  <img
                    src={activeCert.image}
                    alt={activeCert.title}
                    className="w-full h-full object-contain max-h-[55vh]"
                  />
                </div>
              )}

              {/* Verification Info & Action Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Credential Identifier</span>
                  <span className="text-xs font-mono text-slate-200 font-medium">{activeCert.code}</span>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={(e) => handleCopy(activeCert.id, activeCert.code, e)}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    {copiedId === activeCert.id ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy ID</span>
                      </>
                    )}
                  </button>

                  {activeCert.image && (
                    <a
                      href={activeCert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-white transition-opacity"
                      style={{ backgroundColor: activeCert.color }}
                    >
                      <span>Open Image</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════
          4. Expanded LinkedIn Post Modal Lightbox
          ══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setActivePost(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0a14] rounded-2xl p-6 md:p-8 shadow-2xl text-left border border-blue-500/40"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-blue-600/30 border border-blue-400 flex items-center justify-center text-white font-bold font-mono text-sm">
                  PK
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">
                    {activePost.author}
                  </h4>
                  <p className="text-xs font-mono text-slate-400">
                    {activePost.authorRole} · <span className="text-cyan-400">{activePost.postedDate}</span>
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed mb-6">
                {activePost.text}
              </p>

              {/* High-res Image Gallery in Modal */}
              {activePost.images && activePost.images.length > 0 && (
                <div className="space-y-3 mb-6">
                  {activePost.images.map((img, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden border border-white/10 bg-black max-h-[45vh] flex items-center justify-center">
                      <img src={img} alt={`Post item ${idx + 1}`} className="w-full h-full object-contain max-h-[45vh]" />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-slate-400">
                  <span>{activePost.impressions}</span> · <span className="text-blue-400">{activePost.likes}</span>
                </div>

                <a
                  href={activePost.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                >
                  <LinkedinIcon size={14} />
                  <span>Open on LinkedIn</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
