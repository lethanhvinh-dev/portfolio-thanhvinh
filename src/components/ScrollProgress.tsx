import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    // Dùng DOM trực tiếp thay vì setState để tránh re-render mỗi lần scroll
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const pct = height > 0 ? (winScroll / height) * 100 : 0;
      // transform: scaleY nhanh hơn thay đổi height vì dùng GPU
      bar.style.transform = `scaleY(${pct / 100})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={barRef}
      id="scroll-progress"
      className="fixed top-0 right-0 w-[2px] bg-gradient-to-b from-indigo-500 to-purple-600 z-[10000]"
      style={{
        height: '100%',
        transformOrigin: 'top',
        transform: 'scaleY(0)',
        willChange: 'transform',
      }}
    />
  );
}
