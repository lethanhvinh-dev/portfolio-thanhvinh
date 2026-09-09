import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection
      const sections = ["home", "about", "projects", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close CV dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (cvDropdownOpen && !target.closest(".cv-dropdown")) {
        setCvDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [cvDropdownOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        scrolled
          ? "py-3 bg-black/60 backdrop-blur-2xl border-b border-white/8"
          : "py-7 bg-transparent"
      }`}
    >
      {/* Thêm class 'relative' ở container để làm mốc tọa độ cho nav */}
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-lg font-black tracking-tighter group z-10"
        >
          <span className="text-gradient">TV</span>
          <span className="text-white/30">.</span>
          {/* Underline glow on hover */}
          <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 group-hover:w-full" />
        </motion.a>

        {/* Desktop Nav - Căn giữa tuyệt đối với absolute + transform */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 z-10">
          {navLinks.map((link, i) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.2 }}
                className={`text-xs uppercase tracking-widest transition-colors duration-300 relative group px-3 ${
                  isActive ? "text-white" : "text-white/45 hover:text-white/80"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.a>
            );
          })}
        </nav>

        {/* CTA: Download CV with dropdown - right side */}
        <div className="relative hidden md:block cv-dropdown self-center z-10">
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => setCvDropdownOpen(!cvDropdownOpen)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-widest bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105 transition-all duration-300 active:scale-95"
          >
            <Download size={12} />
            Download CV
          </motion.button>

          {/* Dropdown */}
          <AnimatePresence>
            {cvDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full right-0 mt-2 w-56 rounded-xl bg-[#111] border border-white/10 shadow-xl overflow-hidden z-[1000]"
              >
                <a
                  href="/LeThanhVinh_Developer.pdf"
                  download="LeThanhVinh_Developer.pdf"
                  onClick={() => setCvDropdownOpen(false)}
                  className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  Frontend Developer
                </a>
                <a
                  href="/LETHANHVINH_IT%20HELPDESK_IT%20SUPPORT.pdf"
                  download="LeThanhVinh_IT_Support_cv.pdf"
                  onClick={() => setCvDropdownOpen(false)}
                  className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  IT Support
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-[1001] text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed inset-0 z-[1000] flex flex-col items-center justify-center gap-10"
              style={{ background: "#080808" }}
            >
              {/* Close button */}
              <button
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </button>

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black uppercase tracking-tighter text-white/30 hover:text-white transition-colors duration-300 hover:text-gradient"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex flex-col gap-3 w-full max-w-xs"
              >
                <a
                  href="/LeThanhVinh_Developer.pdf"
                  download="LeThanhVinh_Developer.pdf"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-sm font-bold uppercase tracking-widest text-white hover:scale-105 transition-transform duration-300"
                >
                  <Download size={15} />
                  Frontend Developer CV
                </a>
                <a
                  href="/LETHANHVINH_IT%20HELPDESK_IT%20SUPPORT.pdf"
                  download="LeThanhVinh_IT_Support_cv.pdf"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-sm font-bold uppercase tracking-widest text-white hover:scale-105 transition-transform duration-300"
                >
                  <Download size={15} />
                  IT Support CV
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
