import { useEffect, useRef } from 'react';

export default function NoiseTexture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const generateNoise = () => {
      const idata = ctx.createImageData(canvas.width, canvas.height);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.1) {
          buffer32[i] = 0x0a000000 | (Math.random() * 255);
        }
      }

      ctx.putImageData(idata, 0, 0);
    };

    generateNoise();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-[0.03] z-[1]"
      id="noise-canvas"
    />
  );
}
