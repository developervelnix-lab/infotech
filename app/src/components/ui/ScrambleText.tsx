'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ScrambleText.module.css';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

interface ScrambleTextProps {
  text: string;
  className?: string;
  trigger?: boolean; // if false, runs on mount
  delay?: number;
}

export default function ScrambleText({
  text,
  className = '',
  trigger = true,
  delay = 0,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef<number>(0);
  const iterRef = useRef(0);

  const scramble = () => {
    iterRef.current = 0;
    cancelAnimationFrame(frameRef.current);

    const run = () => {
      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (i < iterRef.current) return char;
            if (char === ' ') return ' ';
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iterRef.current < text.length) {
        iterRef.current += 0.4;
        frameRef.current = requestAnimationFrame(run);
      }
    };

    frameRef.current = requestAnimationFrame(run);
  };

  useEffect(() => {
    if (!trigger) return;
    const t = setTimeout(scramble, delay);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(frameRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger, text]);

  return (
    <span
      className={`${styles.scramble} ${className}`}
      onMouseEnter={scramble}
      aria-label={text}
    >
      {display}
    </span>
  );
}
