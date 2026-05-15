import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import SectionFrame from "./SectionFrame";

const projects = [
  {
    id: 1,
    title: "Thuviensovietnam",
    category: "Web",
    description:
      "A digital library platform for Vietnamese readers — browse, search and read thousands of books online.",
    src: "/thuvienso.png",
    href: "https://thuviensovietnam.netlify.app/",
    tags: ["React", "Firebase", "Tailwind"],
    color: "from-indigo-600/40 to-blue-600/20",
  },
  {
    id: 2,
    title: "InkZinh",
    category: "Web",
    description:
      "A creative tattoo studio platform showcasing artists, portfolios, and booking flows with stunning visuals.",
    src: "/inkzinh.png",
    href: "https://inkzinh.netlify.app/",
    tags: ["React", "Framer Motion", "CSS"],
    color: "from-purple-600/40 to-pink-600/20",
  },
];

export default function Projects() {
  return (
    <SectionFrame
      id="projects"
      tone="violet"
      className="py-20 md:py-24 px-6 lg:px-24"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-4 mb-14"
      >
        <p className="text-xs uppercase tracking-[0.5em] text-purple-400 font-bold">
          Selected Work
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Recent{" "}
          <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-white/45 text-base md:text-lg max-w-xl">
          A collection of work that demonstrates my passion for crafting
          exceptional digital experiences.
        </p>
      </motion.div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: 0.55,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative"
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative rounded-3xl overflow-hidden border border-white/8 cursor-pointer"
              style={{ background: "#0f0f0f" }}
            >
              {/* Animated gradient border on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-3xl pointer-events-none"
                style={{
                  padding: "1px",
                  background: "linear-gradient(135deg, #6366f1, #a855f7, #ec4899)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Image area */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/30 to-transparent" />

                {/* Top-right badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/70">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content area */}
              <div className="p-7">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: -8 }}
                    className="p-2.5 glass rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 ml-3"
                  >
                    <ExternalLink size={15} className="text-indigo-300" />
                  </motion.div>
                </div>

                <p className="text-sm text-white/50 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-white/5 border border-white/8 text-white/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mt-14"
      >
        <a
          href="https://github.com/lethanhvinh-dev?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl border border-white/12 bg-white/[0.04] text-sm font-semibold text-white/70 hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/10 transition-all duration-300"
        >
          <Github size={17} />
          View all on GitHub
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            →
          </motion.span>
        </a>
      </motion.div>
    </SectionFrame>
  );
}
