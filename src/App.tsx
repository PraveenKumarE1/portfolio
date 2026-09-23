import { useState, lazy, Suspense, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/ui/LoadingScreen";
import CursorGlow from "./components/ui/CursorGlow";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";

// Lazy load below-the-fold sections
const About = lazy(() => import("./components/sections/About"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Certifications = lazy(() => import("./components/sections/Certifications"));
const Contact = lazy(() => import("./components/sections/Contact"));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-8 h-8 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" />
    </div>
  );
}

const sectionAnimation = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07070a] text-slate-100 selection:bg-blue-600/30 selection:text-white">
      {/* Interactive Cursor Glow */}
      <CursorGlow />

      {/* Cinematic Opening Animation */}
      {isLoading && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {/* Main Site Content with Smooth Section Transitions */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col min-h-screen"
          >
            <Navbar />

            <main className="flex-1">
              <Hero />

              <motion.div {...sectionAnimation}>
                <Suspense fallback={<SectionLoader />}>
                  <About />
                </Suspense>
              </motion.div>

              <motion.div {...sectionAnimation}>
                <Suspense fallback={<SectionLoader />}>
                  <Skills />
                </Suspense>
              </motion.div>

              <motion.div {...sectionAnimation}>
                <Suspense fallback={<SectionLoader />}>
                  <Projects />
                </Suspense>
              </motion.div>

              <motion.div {...sectionAnimation}>
                <Suspense fallback={<SectionLoader />}>
                  <Experience />
                </Suspense>
              </motion.div>

              <motion.div {...sectionAnimation}>
                <Suspense fallback={<SectionLoader />}>
                  <Certifications />
                </Suspense>
              </motion.div>

              <motion.div {...sectionAnimation}>
                <Suspense fallback={<SectionLoader />}>
                  <Contact />
                </Suspense>
              </motion.div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
