import { useState } from "react";
import { personal } from "../../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("submitting");

    try {
      // 1. Attempt local backend API
      try {
        const localRes = await fetch("http://127.0.0.1:5001/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (localRes.ok) {
          setSubmitStatus("success");
          setStatusMessage("Thank you! Your message has been saved to the backend and delivered to Praveen.");
          setFormData({ name: "", email: "", message: "" });
          return;
        }
      } catch (err) {
        // Fallback to web3forms / mailto
      }

      // 2. Web3Forms fallback
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "05bc1335-ee17-48f8-b326-80f0c05f0a0d",
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
        setSubmitStatus("success");
        setStatusMessage("Opening your mail client to send directly...");
        const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("Could not send directly. Please click below to email via your mail client.");
    }
  };

  return (
    <section id="contact" className="relative pt-24 pb-12 bg-void overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-first/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-first-alt/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Data Top Header (Target Site Style) */}
        <div className="text-center mb-16">
          <span className="text-xs font-unbounded text-first tracking-widest uppercase block mb-3">
            // 06 · GET IN TOUCH
          </span>
          <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-3">
            Contact <span className="text-first">Me</span>
          </h2>
          <p className="font-montserrat text-slate-300 text-base sm:text-lg mb-8">
            Tell me about your next project.
          </p>

          {/* Signature Copy Email Pill Button */}
          <button
            onClick={handleCopyEmail}
            className="button-panda inline-flex items-center gap-2.5 text-sm"
          >
            <span>{copied ? "Email Copied!" : "Copy Email"}</span>
            <i className={`text-lg ${copied ? "ri-checkbox-circle-line text-emerald-300" : "ri-file-copy-line"}`} />
          </button>
        </div>

        {/* 3-Column Info & Channels Grid (Panda Coders Architecture) */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Direct Contact Info */}
          <div className="bg-container rounded-[2.5rem] p-8 border border-white/[0.06] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-void border border-first/30 flex items-center justify-center text-first text-2xl mb-6">
                <i className="ri-mail-send-line" />
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-unbounded text-sm font-bold text-first uppercase tracking-wider mb-1">
                    Email
                  </h4>
                  <a
                    href={`mailto:${personal.email}`}
                    className="font-montserrat text-sm text-white hover:text-first transition-colors block truncate"
                  >
                    {personal.email}
                  </a>
                </div>

                <div>
                  <h4 className="font-unbounded text-sm font-bold text-first uppercase tracking-wider mb-1">
                    Location
                  </h4>
                  <address className="font-montserrat text-sm text-slate-300 not-italic">
                    {personal.location}
                  </address>
                </div>

                <div>
                  <h4 className="font-unbounded text-sm font-bold text-first uppercase tracking-wider mb-1">
                    Institution
                  </h4>
                  <p className="font-montserrat text-xs text-slate-400">
                    Shree Venkateshwara Hi-Tech Engineering College
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <span className="text-[11px] font-montserrat text-emerald-400 flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for internships &amp; engineering roles
              </span>
            </div>
          </div>

          {/* Card 2: Social Media Links */}
          <div className="bg-container rounded-[2.5rem] p-8 border border-white/[0.06] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-void border border-first/30 flex items-center justify-center text-first text-2xl mb-6">
                <i className="ri-share-line" />
              </div>

              <h4 className="font-unbounded text-sm font-bold text-first uppercase tracking-wider mb-4">
                Social Profiles
              </h4>

              <div className="space-y-3">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-void border border-white/[0.06] text-white hover:border-first/50 hover:text-first transition-all group"
                >
                  <span className="font-montserrat text-xs font-medium flex items-center gap-2">
                    <i className="ri-linkedin-box-fill text-lg text-first" />
                    LinkedIn
                  </span>
                  <i className="ri-arrow-right-up-long-line text-sm text-slate-400 group-hover:text-first group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-void border border-white/[0.06] text-white hover:border-first/50 hover:text-first transition-all group"
                >
                  <span className="font-montserrat text-xs font-medium flex items-center gap-2">
                    <i className="ri-github-fill text-lg text-first" />
                    GitHub (@PraveenKumarE1)
                  </span>
                  <i className="ri-arrow-right-up-long-line text-sm text-slate-400 group-hover:text-first group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personal.githubAlt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-void border border-white/[0.06] text-white hover:border-first/50 hover:text-first transition-all group"
                >
                  <span className="font-montserrat text-xs font-medium flex items-center gap-2">
                    <i className="ri-git-repository-line text-lg text-first" />
                    Secondary GitHub
                  </span>
                  <i className="ri-arrow-right-up-long-line text-sm text-slate-400 group-hover:text-first group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <span className="text-[11px] font-montserrat text-slate-400">
                15+ public repositories &amp; open source code
              </span>
            </div>
          </div>

          {/* Card 3: Write Me & We'll Talk */}
          <div className="bg-container rounded-[2.5rem] p-8 border border-white/[0.06] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-void border border-first/30 flex items-center justify-center text-first text-2xl mb-6">
                <i className="ri-chat-smile-2-line" />
              </div>

              <h4 className="font-unbounded text-sm font-bold text-first uppercase tracking-wider mb-4">
                Write Me &amp; We'll Talk
              </h4>

              <div className="space-y-3">
                <a
                  href="https://wa.me/916374507701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-void border border-white/[0.06] text-white hover:border-emerald-500/50 hover:text-emerald-400 transition-all group"
                >
                  <span className="font-montserrat text-xs font-medium flex items-center gap-2">
                    <i className="ri-whatsapp-line text-lg text-emerald-400" />
                    WhatsApp Direct
                  </span>
                  <i className="ri-arrow-right-up-long-line text-sm text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={`tel:${personal.phone}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-void border border-white/[0.06] text-white hover:border-first/50 hover:text-first transition-all group"
                >
                  <span className="font-montserrat text-xs font-medium flex items-center gap-2">
                    <i className="ri-phone-line text-lg text-first" />
                    Direct Phone Call
                  </span>
                  <i className="ri-arrow-right-up-long-line text-sm text-slate-400 group-hover:text-first group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-void border border-white/[0.06] text-white hover:border-first/50 hover:text-first transition-all group"
                >
                  <span className="font-montserrat text-xs font-medium flex items-center gap-2">
                    <i className="ri-mail-line text-lg text-first" />
                    Direct Mail
                  </span>
                  <i className="ri-arrow-right-up-long-line text-sm text-slate-400 group-hover:text-first group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <span className="text-[11px] font-montserrat text-slate-400">
                Phone: {personal.phone}
              </span>
            </div>
          </div>

        </div>

        {/* Direct Message Form */}
        <div className="max-w-2xl mx-auto bg-container rounded-[2.5rem] p-8 sm:p-10 border border-white/[0.06] mb-16 relative overflow-hidden">
          {/* Subtle corner blob */}
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-first/15 blur-[40px] pointer-events-none" />

          <h3 className="font-unbounded text-xl sm:text-2xl font-bold text-white mb-2 text-center">
            Send a <span className="text-first">Message</span>
          </h3>
          <p className="font-montserrat text-xs sm:text-sm text-slate-400 text-center mb-8">
            Send your project ideas or hiring inquiries directly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-montserrat text-xs text-slate-300 block mb-2 font-medium">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Smith"
                className="w-full px-5 py-3.5 rounded-2xl bg-void border border-white/10 text-white placeholder-slate-600 font-montserrat text-sm focus:outline-none focus:border-first transition-colors"
              />
            </div>

            <div>
              <label className="font-montserrat text-xs text-slate-300 block mb-2 font-medium">Your Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full px-5 py-3.5 rounded-2xl bg-void border border-white/10 text-white placeholder-slate-600 font-montserrat text-sm focus:outline-none focus:border-first transition-colors"
              />
            </div>

            <div>
              <label className="font-montserrat text-xs text-slate-300 block mb-2 font-medium">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project, role, or collaboration idea..."
                className="w-full px-5 py-3.5 rounded-2xl bg-void border border-white/10 text-white placeholder-slate-600 font-montserrat text-sm focus:outline-none focus:border-first transition-colors resize-none"
              />
            </div>

            {submitStatus === "success" && (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-montserrat text-xs flex items-center gap-2">
                <i className="ri-checkbox-circle-fill text-emerald-400 text-base shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 font-montserrat text-xs flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <i className="ri-error-warning-fill text-rose-400 text-base shrink-0" />
                  <span>{statusMessage}</span>
                </div>
                <a
                  href={`mailto:${personal.email}?subject=Contact&body=${encodeURIComponent(formData.message)}`}
                  className="px-3 py-1 rounded-full bg-rose-500/20 text-white text-xs underline shrink-0"
                >
                  Open Mail
                </a>
              </div>
            )}

            <button
              type="submit"
              disabled={submitStatus === "submitting"}
              className="w-full button-panda py-4 flex items-center justify-center gap-2.5 text-sm"
            >
              {submitStatus === "submitting" ? (
                <>
                  <i className="ri-loader-4-line animate-spin text-lg" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <i className="ri-send-plane-fill text-base" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer (Panda Coders Signature Layout with Rotating Blob) */}
        <footer className="relative pt-12 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-montserrat text-xs text-slate-400 overflow-hidden">
          {/* Footer Rotating Blob */}
          <div 
            className="blob-animate absolute -bottom-16 -right-16 w-48 h-48 pointer-events-none" 
            style={{ animationDuration: "16s" }}
          />

          <div className="relative z-10 flex items-center gap-2">
            <span>All Rights Reserved By</span>
            <span className="font-unbounded font-semibold text-white">PRAVEEN KUMAR E</span>
          </div>

          <div className="relative z-10 flex items-center gap-4">
            <span>&#169; {new Date().getFullYear()}</span>
            <span>·</span>
            <a href="#home" className="text-first hover:text-white transition-colors flex items-center gap-1">
              <span>Back to Top</span>
              <i className="ri-arrow-up-line" />
            </a>
          </div>
        </footer>

      </div>
    </section>
  );
}
