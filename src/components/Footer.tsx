import { Github, Facebook, Mail, ArrowUp } from "lucide-react";
import { motion } from "motion/react";

const socials = [
  {
    Icon: Github,
    href: "https://github.com/lethanhvinh-dev?tab=repositories",
    label: "GitHub",
  },
  {
    Icon: Facebook,
    href: "https://www.facebook.com/MathewLeThanhVinh",
    label: "Facebook",
  },
  {
    Icon: Mail,
    href: "mailto:lethanhvinh.dev@gmail.com",
    label: "Email",
  },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/6 py-14 px-6">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="text-xl font-black tracking-tighter text-gradient">
              TV.
            </span>
            <p className="text-xs text-white/35 leading-relaxed max-w-[220px]">
              Building modern, beautiful, and performant web experiences.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-semibold mb-1">
              Navigation
            </p>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-white/45 hover:text-white transition-colors duration-200 w-fit"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-semibold mb-1">
              Connect
            </p>
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/45 hover:text-indigo-300 transition-colors duration-200 w-fit"
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
          <p className="text-[11px] text-white/25 tracking-wider">
            © 2026 Lê Thành Vinh · Built with React & Framer Motion
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/30 hover:text-indigo-300 transition-colors duration-200"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp size={13} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
