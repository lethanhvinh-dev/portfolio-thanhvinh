import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="z-10 text-center">
        {/* Avatar with Circular Gradient Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-12 p-[1px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-bg-dark p-2">
            <img
              src="/Thanh-vinh.jpg"
              alt="Thành Vinh"
              className="w-full h-full object-cover rounded-full transition-all duration-700 hover:scale-110 hover:brightness-125"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Subtle Glow */}
          <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-3xl -z-1" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold uppercase tracking-tight mb-4"
        >
          THÀNH VINH
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-2xl font-thin italic text-white/60 tracking-wider"
        >
          Frontend Developer
        </motion.p>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-indigo-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
