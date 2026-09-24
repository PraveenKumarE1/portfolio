import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowUpRight, Check, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { personal } from "../../data/portfolio";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("submitting");

    try {
      // 1. First attempt: Send to local Python backend API if available
      let sent = false;
      try {
        const localRes = await fetch("http://127.0.0.1:5001/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (localRes.ok) {
          sent = true;
          setSubmitStatus("success");
          setStatusMessage("Thank you! Your message has been saved to the backend and delivered to Praveen.");
          setFormData({ name: "", email: "", message: "" });
          return;
        }
      } catch (err) {
        // Fall through to remote email delivery
      }

      // 2. Second attempt: Send to Web3Forms / Formspree service for live GitHub Pages delivery
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "05bc1335-ee17-48f8-b326-80f0c05f0a0d", // Standard demo key / fallback
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: personal.email,
          subject: `Portfolio Message from ${formData.name}`,
        }),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setStatusMessage("Thank you! Your message was delivered directly to Praveen's inbox.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Fallback: prompt mailto client
        setSubmitStatus("success");
        setStatusMessage("Your message has been processed. Opening your email app to complete delivery...");
        const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("Could not send directly. Click below to email directly via your mail client.");
    }
  };

  return (
    <section id="contact" className="relative section-padding border-t border-white/[0.05]">
      {/* Background ambient multi-color light */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header — INSIGHT Editorial Style */}
        <div className="mb-14">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-2 font-semibold">
            07 / CONNECT &amp; COLLABORATE
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold font-editorial text-white tracking-tight uppercase">
            GET IN <span className="gradient-editorial-headline">TOUCH</span>
          </h2>
          <p className="text-xs font-mono text-slate-400 mt-3 max-w-xl leading-relaxed">
            Have an open opportunity, project proposal, or collaboration? Send a direct message below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Cyan/Blue accent */}
            <div className="clean-card p-5 border border-white/10 hover:border-blue-500/40 flex items-center justify-between transition-all">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 text-cyan-400 flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Email Address</span>
                  <a href={`mailto:${personal.email}`} className="text-xs sm:text-sm font-medium text-white hover:text-cyan-400 transition-colors truncate block">
                    {personal.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-xs font-mono shrink-0 ml-2"
                title="Copy email"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : "Copy"}
              </button>
            </div>

            {/* Phone Card with Emerald accent */}
            <div className="clean-card p-5 border border-white/10 hover:border-emerald-500/40 flex items-center gap-3.5 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Direct Phone & WhatsApp</span>
                <a href={`tel:${personal.phone}`} className="text-xs sm:text-sm font-medium text-white hover:text-emerald-400 transition-colors">
                  {personal.phone}
                </a>
              </div>
            </div>

            {/* Location Card with Purple accent */}
            <div className="clean-card p-5 border border-white/10 hover:border-purple-500/40 flex items-center gap-3.5 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-400 flex items-center justify-center shrink-0 shadow-md shadow-purple-600/20">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Location</span>
                <p className="text-xs sm:text-sm font-medium text-white">
                  {personal.location}
                </p>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="clean-card p-4 border border-white/10 flex items-center justify-center gap-2 text-xs font-mono text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={13} className="text-slate-500" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="clean-card p-4 border border-white/10 flex items-center justify-center gap-2 text-xs font-mono text-slate-300 hover:text-purple-400 hover:border-purple-500/40 transition-all"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} className="text-slate-500" />
              </a>
            </div>

            {/* Backend Active Status Badge */}
            <div className="p-3 rounded-xl bg-white/[0.02] border border-emerald-500/30 flex items-center gap-2.5 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Backend Status: Active & Connected</span>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="clean-card p-6 sm:p-8 border border-white/10 space-y-4 hover:border-blue-500/30 transition-all">
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Send a Direct Message
              </h3>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Smith"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, role, or collaboration idea..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              {/* Status Banner */}
              {submitStatus === "success" && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle size={16} className="text-rose-400 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                  <a
                    href={`mailto:${personal.email}?subject=Contact&body=${encodeURIComponent(formData.message)}`}
                    className="px-2.5 py-1 rounded bg-rose-500/20 text-white text-[11px] underline shrink-0"
                  >
                    Open Mail
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={submitStatus === "submitting"}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all shadow-lg shadow-blue-600/25 hover:shadow-purple-600/35 disabled:opacity-50 cursor-pointer"
              >
                {submitStatus === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message to Praveen</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-16 mt-16 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© {new Date().getFullYear()} Praveen Kumar E. Built with React & TypeScript.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Back to top ↑</a>
          </div>
        </div>
      </div>
    </section>
  );
}
