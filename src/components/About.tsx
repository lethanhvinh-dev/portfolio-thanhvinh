import { motion } from "motion/react";
import SectionFrame from "./SectionFrame";

const techStack = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Three.js",
  "PostgreSQL",
  "Firebase",
  "Supabase",
  "Vite",
  "GraphQL",
];

export default function About() {
  return (
    <SectionFrame
      id="about"
      tone="indigo"
      className="py-20 md:py-24 px-6 lg:px-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
        {/* Left: Secondary Avatar / Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative group w-full max-w-[340px] md:max-w-[420px] mx-auto lg:mx-0"
        >
          <div className="w-full aspect-square rounded-3xl overflow-hidden glass relative">
            <img
              src="/Thanh-vinh.jpg"
              alt="Creative Space"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:shadow-indigo-500/20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          {/* Subtle Glow on hover */}
          <div className="absolute -inset-4 bg-indigo-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-1" />
        </motion.div>

        {/* Right: Bio & Tech */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-medium mb-6">
              Crafting experiences at the intersection of design and technology.
            </h2>
            <p className="text-white/60 leading-relaxed text-base md:text-lg max-w-xl">
              I specialize in building minimalist, performant, and highly
              interactive digital products. My approach focuses on clean
              aesthetics combined with technical precision to deliver
              2026-standard software experiences.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-5 text-sm font-semibold uppercase text-brand-indigo">
              Languages & Technologies
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="flex min-h-12 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] px-4 text-center text-sm md:text-base font-semibold text-white/90 shadow-lg shadow-black/10 transition-colors duration-300 hover:border-brand-indigo/60 hover:bg-brand-indigo/15"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionFrame>
  );
}
