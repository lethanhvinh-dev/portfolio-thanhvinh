import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (reduceMotion || coarsePointer) {
      cursor.style.display = "none";
      return;
    }

    let frame = 0;
    let x = -120;
    let y = -120;

    const updateCursor = () => {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      cursor.style.opacity = "1";
      frame = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;

      if (!frame) {
        frame = window.requestAnimationFrame(updateCursor);
      }
    };

    const handlePointerLeave = () => {
      cursor.style.opacity = "0";
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor-glow hidden md:block"
      aria-hidden="true"
    >
      <span className="cursor-glow__aura" />
      <span className="cursor-glow__core" />
    </div>
  );
}
