import { useEffect, useRef } from 'react';

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;
    // Giới hạn 30 FPS để giảm tải CPU (mắt thường không phân biệt được với particles chậm)
    const FPS_LIMIT = 30;
    const FRAME_INTERVAL = 1000 / FPS_LIMIT;

    interface IParticle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }

    let particles: IParticle[] = [];

    const createParticle = (): IParticle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: (Math.random() - 0.5) * 0.15,
      opacity: Math.random() * 0.4 + 0.1,
    });

    const init = () => {
      particles = [];
      // Giới hạn tối đa 60 particles bất kể màn hình lớn cỡ nào
      const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 20000));
      for (let i = 0; i < count; i++) {
        particles.push(createParticle());
      }
    };

    const animate = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = timestamp - lastTime;
      if (elapsed < FRAME_INTERVAL) return; // bỏ qua frame nếu chưa đến 30fps
      lastTime = timestamp - (elapsed % FRAME_INTERVAL);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width) p.x = 0;
        else if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        else if (p.y < 0) p.y = canvas.height;

        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = '#6366f1';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', resize, { passive: true });
    resize();
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[2]"
      id="particles-canvas"
      style={{ willChange: 'transform' }}
    />
  );
}
