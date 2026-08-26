'use client';

import { useEffect, useRef } from 'react';

export default function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    const onLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-magnetic]')
      ) {
        ring.classList.add('expanded');
      } else {
        ring.classList.remove('expanded');
      }
    };

    function lerp(a: number, b: number, n: number) {
      return (1 - n) * a + n * b;
    }

    function animate() {
      ringPosRef.current.x = lerp(ringPosRef.current.x, posRef.current.x, 0.09);
      ringPosRef.current.y = lerp(ringPosRef.current.y, posRef.current.y, 0.09);

      if (dot) {
        dot.style.left = `${posRef.current.x}px`;
        dot.style.top = `${posRef.current.y}px`;
      }
      if (ring) {
        ring.style.left = `${ringPosRef.current.x}px`;
        ring.style.top = `${ringPosRef.current.y}px`;
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    animate();

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ opacity: 0 }} />
      <div ref={ringRef} className="cursor-ring" style={{ opacity: 0 }} />
    </>
  );
}
