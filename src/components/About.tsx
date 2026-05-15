import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import SectionFrame from "./SectionFrame";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Framer Motion", icon: "✨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Firebase", icon: "🔥" },
  { name: "Supabase", icon: "⚡" },
  { name: "Three.js", icon: "🌐" },
  { name: "Vite", icon: "⚡" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "GraphQL", icon: "🔴" },
];

const skills = [
  { name: "Frontend Development", level: 90 },
  { name: "UI / UX Design", level: 78 },
  { name: "React & TypeScript", level: 88 },
  { name: "Mobile (Flutter)", level: 70 },
  { name: "Backend / Node.js", level: 65 },
];

function SkillBar({ name, level, delay }: { key?: string | number; name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
        else setAnimated(false);
      },
      { threshold: 0.4, rootMargin: "-40px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-white/80">{name}</span>
        <span className="text-xs font-mono text-indigo-400">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: animated ? `${level}%` : "0%",
            transition: animated
              ? `width 1.2s cubic-bezier(0.16,1,0.3,1) ${delay * 0.5}s`
              : "none",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <SectionFrame
      id="about"
      tone="indigo"
      className="py-20 md:py-24 px-6 lg:px-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">
        {/* Left: Avatar card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative group w-full max-w-[360px] mx-auto lg:mx-0"
        >
          {/* Card glow */}
          <div className="absolute -inset-6 rounded-[40px] bg-indigo-600/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

          <div className="relative w-full aspect-square rounded-3xl overflow-hidden glass-strong">
            <img
              src="/Thanh-vinh.jpg"
              alt="Lê Thành Vinh"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-108"
              referrerPolicy="no-referrer"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {/* Name label at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-sm font-semibold text-white/90">Lê Thành Vinh</p>
              <p className="text-xs text-white/50 mt-0.5">Frontend Developer · Ho Chi Minh City</p>
            </div>
            {/* Hover tint */}
            <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 glass-strong rounded-2xl px-4 py-3 shadow-xl shadow-black/40"
          >
            <div className="text-lg font-bold text-gradient">2+</div>
            <div className="text-[9px] uppercase tracking-widest text-white/40 mt-0.5">Years Exp</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-4 glass-strong rounded-2xl px-4 py-3 shadow-xl shadow-black/40"
          >
            <div className="text-lg font-bold text-gradient">5+</div>
            <div className="text-[9px] uppercase tracking-widest text-white/40 mt-0.5">Projects</div>
          </motion.div>
        </motion.div>

        {/* Right: Bio & Skills */}
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-indigo-400 font-bold mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              Crafting experiences at the{" "}
              <span className="text-gradient">intersection of design</span>{" "}
              and technology.
            </h2>
            <p className="text-white/55 leading-relaxed text-base md:text-lg max-w-xl">
              I specialize in building minimalist, performant, and highly
              interactive digital products. My approach focuses on clean
              aesthetics combined with technical precision to deliver
              2026-standard software experiences.
            </p>
          </motion.div>

          {/* Skill Bars */}
          <div className="flex flex-col gap-4 max-w-xl">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40 font-semibold mb-1">
              Skills & Expertise
            </p>
            {skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={i * 0.08}
              />
            ))}
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-white/40">
              Languages & Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-white/75 transition-colors duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white cursor-default"
                >
                  <span>{tech.icon}</span>
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionFrame>
  );
}
