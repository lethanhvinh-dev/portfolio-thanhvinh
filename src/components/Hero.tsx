import { motion } from "motion/react";
import { useEffect, useState } from "react";

const ROLES = [
  "Frontend Developer",
  "UI / UX Enthusiast",
  "React Specialist",
  "Creative Coder",
];

const STATS = [
  { value: "2+", label: "Projects Built" },
  { value: "1", label: "Years Experience" },
  { value: "7+", label: "Tech Mastered" },
];

function useTypingEffect(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default function Hero() {
  const role = useTypingEffect(ROLES);

  return (
    <section
      id="home"
      className="hero-section relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div
        className="hero-bg-orb"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
          top: "10%",
          left: "-10%",
        }}
      />
      <div
        className="hero-bg-orb"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
          bottom: "15%",
          right: "-5%",
        }}
      />

      <div className="z-10 text-center px-6">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <span className="status-badge">
            <span className="status-dot" />
            Available for work
          </span>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-8"
        >
          {/* Rotating gradient ring */}
          <div
            className="absolute inset-[-3px] rounded-full animate-spin-slow"
            style={{
              background:
                "conic-gradient(from 0deg, #6366f1, #a855f7, #ec4899, #6366f1)",
              borderRadius: "9999px",
            }}
          />
          <div className="absolute inset-[2px] rounded-full bg-bg-dark" />
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <img
              src="/Thanh-vinh.jpg"
              alt="Lê Thành Vinh"
              className="w-full h-full object-cover rounded-full transition-all duration-700 hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Glow behind avatar */}
          <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-2xl -z-10 scale-125" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl xl:text-8xl font-black uppercase tracking-tighter mb-4 name-gradient"
        >
          Thành Vinh
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="h-9 flex items-center justify-center gap-1 mb-10"
        >
          <span className="text-lg md:text-2xl font-light text-white/55 tracking-wider font-mono">
            {role}
          </span>
          <span className="text-lg md:text-2xl text-indigo-400 font-thin cursor-blink">
            |
          </span>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex items-center justify-center gap-8 md:gap-16"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-2xl md:text-3xl font-bold text-gradient">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
