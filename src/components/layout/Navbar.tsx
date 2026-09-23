import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navLinks = [
  { id: "home",           label: "Home"     },
  { id: "about",          label: "About"    },
  { id: "skills",         label: "Skills"   },
  { id: "projects",       label: "Projects" },
  { id: "experience",     label: "Work"     },
  { id: "certifications", label: "Certs"    },
];

export default function Navbar() {
  const [active,     setActive]     = useState("home");
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── Scroll spy ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const offset = window.scrollY + 130;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.offsetTop <= offset) { setActive(navLinks[i].id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActive(id);
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ════════════════════════════════════════════════════════
          Glassmorphism floating pill — inspired by image 1 design
          ════════════════════════════════════════════════════════ */}
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl"
      >
        <div
          className="relative flex items-center justify-between px-5 py-[11px] rounded-2xl overflow-hidden"
          style={{
            background:           "rgba(9, 9, 20, 0.82)",
            backdropFilter:       "blur(26px)",
            WebkitBackdropFilter: "blur(26px)",
            border:               "1px solid rgba(255,255,255,0.09)",
            boxShadow: [
              "0 8px 32px rgba(0,0,0,0.55)",
              "inset 0 1px 0 rgba(255,255,255,0.07)",
              /* warm golden underglow (image 1's signature glow) */
              scrolled
                ? "0 28px 80px -18px rgba(245,158,11,0.18)"
                : "0 18px 60px -18px rgba(245,158,11,0.09)",
            ].join(", "),
            transition: "box-shadow 0.5s ease",
          }}
        >
          {/* Warm bottom hairline accent */}
          <div
            className="absolute bottom-0 left-8 right-8 h-px pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.35), transparent)",
              opacity: scrolled ? 1 : 0.5,
              transition: "opacity 0.5s",
            }}
          />

          {/* ── Logo ── */}
          <a
            href="#home"
            onClick={(e) => goto(e, "home")}
            className="flex items-center gap-2.5 shrink-0 z-10"
          >
            <span
              className="w-[34px] h-[34px] rounded-xl flex items-center justify-center text-white text-[11px] font-bold font-mono shadow-lg"
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                boxShadow: "0 0 18px rgba(99,102,241,0.40)",
              }}
            >
              PK
            </span>
            <span className="hidden sm:block text-[13px] font-display font-semibold text-white tracking-tight">
              Praveen <span className="text-blue-400">Kumar</span>
            </span>
          </a>

          {/* ── Desktop Nav Links ── */}
          <nav className="hidden md:flex items-center gap-0.5 relative z-10">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => goto(e, link.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg transition-colors duration-200 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border:     "1px solid rgba(255,255,255,0.11)",
                      }}
                      transition={{ type: "spring", stiffness: 420, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* ── Right controls ── */}
          <div className="flex items-center gap-2 z-10">
            <a
              href="#contact"
              onClick={(e) => goto(e, "contact")}
              className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-xl text-xs font-mono font-semibold text-white transition-all duration-200"
              style={{
                background:  "linear-gradient(135deg, #2563eb, #7c3aed)",
                boxShadow:   "0 4px 16px rgba(99,102,241,0.30)",
              }}
            >
              Contact
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.07] transition-colors"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ════════════════
          Mobile Drawer
          ════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.aside
              key="nav-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 42 }}
              className="fixed right-0 top-0 bottom-0 z-[61] w-72 flex flex-col"
              style={{
                background:           "rgba(8, 8, 18, 0.97)",
                backdropFilter:       "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                borderLeft:           "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
                <span className="text-sm font-display font-semibold text-white">Navigation</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col p-4 gap-1 flex-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => goto(e, link.id)}
                    className={`px-4 py-3 rounded-xl text-sm font-mono font-medium transition-all duration-200 ${
                      active === link.id
                        ? "bg-white/[0.08] text-white border border-white/[0.10]"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={(e) => goto(e, "contact")}
                  className="mt-4 px-4 py-3 rounded-xl text-sm font-mono font-semibold text-white text-center"
                  style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
                >
                  Get in Touch
                </a>
              </nav>

              {/* Drawer footer warm glow accent */}
              <div
                className="h-px mx-6 mb-6"
                style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.4), transparent)" }}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
