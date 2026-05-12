export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white/40 text-[10px] uppercase tracking-[0.4em]">
          &copy; 2026 Thành Vinh. Crafted with precision.
        </div>
        <div className="flex gap-12">
          <a
            href="#"
            className="text-white/40 hover:text-white text-[10px] uppercase tracking-[0.4em] transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-white/40 hover:text-white text-[10px] uppercase tracking-[0.4em] transition-colors"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
