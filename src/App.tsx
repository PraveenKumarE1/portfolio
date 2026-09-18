import { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/ui/LoadingScreen";
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
    <div className="flex items-center justify-center py-20">
      <div className="w-6 h-6 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" />
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#07070a] text-slate-100 selection:bg-blue-600/30 selection:text-white">
      {/* Cinematic Opening Animation */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Main Site Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col min-h-screen"
          >
            <Navbar />

            <main className="flex-1">
              <Hero />

              <Suspense fallback={<SectionLoader />}>
                <About />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <Skills />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <Projects />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <Experience />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <Certifications />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <Contact />
              </Suspense>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
