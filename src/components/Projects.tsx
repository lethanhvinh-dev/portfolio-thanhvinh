import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import SectionFrame from "./SectionFrame";

const projects = [
  {
    id: 1,
    title: "Luxury Dashboard",
    category: "Fintech",
    src: "/thuvienso.png",
    href: "https://thuviensovietnam.netlify.app/",
  },
  {
    id: 2,
    title: "InkZinh",
    category: "Web app",
    src: "/inkzinh.png",
    href: "https://inkzinh.netlify.app/",
  },
];

export default function Projects() {
  return (
    <SectionFrame
      id="projects"
      tone="violet"
      className="py-20 md:py-24 px-6 lg:px-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-5 mb-10 md:mb-12"
      >
        <h2 className="text-sm uppercase tracking-[0.5em] text-indigo-500 font-bold">
          Selected Work
        </h2>
        <h3 className="text-4xl md:text-6xl font-medium tracking-tight">
          Recent Projects
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[280px]">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.45,
              delay: i * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-[24px] overflow-hidden group cursor-pointer border border-white/5 block h-[280px]"
            >
              {/* Image */}
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Hover Indigo Border Pulse */}
              <div className="absolute inset-0 border-2 border-indigo-500/0 rounded-[24px] group-hover:border-indigo-500/100 transition-all duration-300 pointer-events-none group-hover:animate-pulse" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-2">
                  {project.category}
                </span>
                <div className="flex justify-between items-end">
                  <h4 className="text-xl font-medium">{project.title}</h4>
                  <div className="p-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </SectionFrame>
  );
}
