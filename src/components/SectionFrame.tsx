import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type SectionTone = "indigo" | "violet" | "cyan" | "emerald";

type SectionFrameProps = {
  id: string;
  tone: SectionTone;
  className?: string;
  children: ReactNode;
};

export default function SectionFrame({
  id,
  tone,
  className = "",
  children,
}: SectionFrameProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.14, 0.82, 1],
    [56, 0, 0, -32]
  );
  const contentScale = useTransform(
    scrollYProgress,
    [0, 0.16, 0.86, 1],
    [0.985, 1, 1, 0.995]
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.88, 1],
    [0.7, 1, 1, 0.86]
  );
  const primaryY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const secondaryY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const sweepY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const sweepOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.78, 1],
    [0.08, 0.34, 0.24, 0]
  );

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section-shell section-shell--${tone} ${className}`}
    >
      <motion.div
        className="section-light section-light--primary"
        style={{ y: primaryY }}
        aria-hidden="true"
      />
      <motion.div
        className="section-light section-light--secondary"
        style={{ y: secondaryY }}
        aria-hidden="true"
      />
      <motion.div
        className="section-sweep"
        style={{ y: sweepY, opacity: sweepOpacity, rotate: -8 }}
        aria-hidden="true"
      />
      <motion.div
        className="section-inner"
        style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
      >
        {children}
      </motion.div>
    </section>
  );
}
