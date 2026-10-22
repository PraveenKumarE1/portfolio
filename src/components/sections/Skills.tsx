import { motion } from "framer-motion";

const services = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    subtitle: "Developing predictive intelligence, classification models, and neural architectures.",
    skills: ["Python", "PyTorch", "Scikit-Learn", "OpenCV", "Pandas", "NumPy", "Deep Learning"],
    icon: "ri-brain-line",
  },
  {
    id: "web-dev",
    title: "Full-Stack Development",
    subtitle: "Building responsive, high-performance web applications with modern frontend & API stacks.",
    skills: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Node.js", "Express", "Flask", "Supabase"],
    icon: "ri-code-s-slash-line",
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Medical AI",
    subtitle: "Engineering automated retinal image segmentation, feature extraction, and diagnostic aids.",
    skills: ["OpenCV", "PyTorch CNN", "Image Preprocessing", "Feature Extraction", "MATLAB"],
    icon: "ri-eye-line",
  },
  {
    id: "data-science",
    title: "Data Science & GenAI",
    subtitle: "Architecting generative AI workflows, agentic orchestration, and exploratory analytics.",
    skills: ["Gemini 2.5 API", "LLM Prompting", "Claude 101", "EDA & Visualization", "SQL", "MongoDB"],
    icon: "ri-cpu-line",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-void overflow-hidden">
      {/* Background ambient blur */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-first/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-first-alt/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-16 text-left">
          <span className="text-xs font-unbounded text-first tracking-widest uppercase block mb-3">
            // 02 · SPECIALIZATIONS
          </span>
          <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            What I <span className="text-first">Offer</span>
          </h2>
          <p className="font-montserrat text-slate-400 text-sm sm:text-base mt-3 max-w-xl">
            High-performance engineering capabilities across artificial intelligence, modern full-stack web platforms, and data pipelines.
          </p>
        </div>

        {/* Services & Skills Cards Grid (2x2) */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="relative bg-container rounded-[2.5rem] p-8 sm:p-10 border border-white/[0.06] overflow-hidden group hover:border-first/50 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Corner Glowing Blobs */}
              <div 
                className="absolute -top-28 -left-28 w-56 h-56 rounded-full bg-first/20 blur-[50px] pointer-events-none group-hover:bg-first/35 transition-all duration-500" 
              />
              <div 
                className="absolute -top-28 -right-28 w-56 h-56 rounded-full bg-first-alt/15 blur-[50px] pointer-events-none group-hover:bg-first-alt/30 transition-all duration-500" 
              />

              {/* Service Header */}
              <div className="relative z-10 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-void border border-first/30 flex items-center justify-center text-first text-2xl mb-5 group-hover:scale-110 group-hover:border-first transition-all">
                  <i className={item.icon} />
                </div>

                <h3 className="font-unbounded text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-first transition-colors">
                  {item.title}
                </h3>
                
                <p className="font-montserrat text-sm text-slate-300 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              {/* Skill Pill Badges */}
              <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-end justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-montserrat text-xs px-3.5 py-1.5 rounded-full bg-[#14141f] text-slate-200 border border-white/10 group-hover:border-first/30 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Floating Corner Arrow Button */}
                <div className="w-10 h-10 rounded-xl bg-void border-2 border-first/60 text-white flex items-center justify-center shrink-0 group-hover:bg-first group-hover:text-void group-hover:border-first transition-all duration-300">
                  <i className="ri-arrow-right-up-line text-lg" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
