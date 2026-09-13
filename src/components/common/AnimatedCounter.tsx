import React, { useState, useEffect, useRef } from 'react';

export interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  formatThousands?: boolean;
  className?: string;
}

/**
 * Animated Counter that counts up from 0 to target value with smooth cubic ease-out.
 * Automatically triggered when scrolled into view, and resets when scrolled away
 * so the user can always experience the dynamic count-up animation when scrolling down.
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1200,
  prefix = '',
  suffix = '',
  decimals = 0,
  formatThousands = false,
  className = '',
}) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback if IntersectionObserver is unsupported
    if (!('IntersectionObserver' in window)) {
      setCurrent(value);
      return;
    }

    const startCountAnimation = () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }

      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Cubic ease-out curve for natural deceleration
        const ease = 1 - Math.pow(1 - progress, 3);
        const nextVal = ease * value;
        setCurrent(nextVal);

        if (progress < 1) {
          animFrameRef.current = requestAnimationFrame(step);
        } else {
          setCurrent(value);
          isAnimatingRef.current = false;
        }
      };

      animFrameRef.current = requestAnimationFrame(step);
    };

    const resetCounter = () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      isAnimatingRef.current = false;
      setCurrent(0);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          startCountAnimation();
        } else {
          // Reset when scrolled out of view so scrolling back down triggers the animation again
          resetCounter();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={`tabular-nums font-mono ${className}`}>
      {prefix}
      {decimals > 0 
        ? current.toFixed(decimals) 
        : formatThousands 
        ? Math.round(current).toLocaleString('fr-FR') 
        : Math.round(current)}
      {suffix}
    </span>
  );
};
