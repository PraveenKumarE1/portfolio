import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ArrowUpRight } from "lucide-react";
import { personal } from "../../data/portfolio";

const navLinks = [
  { id: "home",           label: "Home"     },
  { id: "about",          label: "About Me" },
  { id: "projects",       label: "Projects" },
  { id: "experience",     label: "Work"     },
  { id: "skills",         label: "Skills"   },
  { id: "certifications", label: "Certs"    },
  { id: "contact",        label: "Contact"  },
];

export default function Navbar() {
  const [active,     setActive]     = useState("home");
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── Scroll spy ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const offset = window.scrollY + 140;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.offsetTop <= offset) {
          setActive(navLinks[i].id);
          break;
        }
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
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#020208]/90 backdrop-blur-md border-b border-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-gradient-to-b from-[#020208] via-[#020208]/80 to-transparent"
        }`}
      >
        {/* Animated Corner Blob (Target Site Signature) */}
        <div
          className="blob-animate -top-12 -left-12 w-32 h-32"
          style={{ opacity: scrolled ? 0.4 : 0.8 }}
        />

        <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 md:h-24 flex items-center justify-between relative z-10">
          {/* Logo in bold Unbounded font */}
          <a
            href="#home"
            onClick={(e) => goto(e, "home")}
            className="flex items-center gap-2 group"
          >
            <span
              className="text-lg sm:text-xl font-bold font-unbounded text-white tracking-tight group-hover:text-[hsl(255,60%,64%)] transition-colors"
            >
              Praveen <span className="text-[hsl(255,60%,64%)]">Kumar</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => goto(e, link.id)}
                  className={`text-xs font-unbounded font-medium transition-all duration-300 relative py-1 ${
                    isActive
                      ? "text-[hsl(255,60%,64%)] drop-shadow-[0_0_12px_hsl(255,60%,64%)]"
                      : "text-slate-300 hover:text-[hsl(255,60%,64%)] hover:drop-shadow-[0_0_10px_hsl(255,60%,64%)]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[hsl(255,60%,64%)] rounded-full shadow-[0_0_8px_hsl(255,60%,64%)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => goto(e, "contact")}
              className="hidden sm:inline-flex button-panda !py-2.5 !px-6 !text-xs !shadow-[0_4px_20px_hsla(255,60%,64%,0.4)]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-200 hover:text-white hover:border-[hsl(255,60%,64%)] transition-colors"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md"
              onClick={() => setMobileOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
              className="fixed right-0 top-0 bottom-0 z-[61] w-80 bg-[#0c0c14] border-l border-white/10 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <span className="font-unbounded font-bold text-white text-base">
                    Menu
                  </span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white"
                  >
                    <X size={18} />
                  </button>
                </div>

                <nav className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => goto(e, link.id)}
                      className={`px-4 py-3 rounded-2xl text-xs font-unbounded transition-all ${
                        active === link.id
                          ? "bg-[hsla(255,60%,64%,0.15)] text-[hsl(255,60%,64%)] border border-[hsla(255,60%,64%,0.3)] shadow-[0_0_15px_hsla(255,60%,64%,0.2)]"
                          : "text-slate-300 hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="button-panda justify-center text-center !py-3 !text-xs w-full"
                >
                  <span>{personal.email}</span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
