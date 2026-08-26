'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { useRef, useState } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [ripple, setRipple] = useState<{ x: number; y: number; id: number } | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = btnRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipple({ x, y, id });
    setTimeout(() => setRipple(null), 600);
    props.onClick?.(e);
  };

  const cls = [
    styles.btn,
    styles[`btn-${variant}`],
    styles[`btn-${size}`],
    className,
  ].join(' ');

  const content = (
    <motion.button
      ref={btnRef}
      className={cls}
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      data-magnetic
      {...props}
    >
      <span className={styles.btnContent}>{children}</span>
      {ripple && (
        <span
          className={styles.ripple}
          style={{ left: ripple.x, top: ripple.y }}
        />
      )}
    </motion.button>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
