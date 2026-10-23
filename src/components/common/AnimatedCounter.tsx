import React, { useState, useEffect, useRef } from 'react';

export interface AnimatedCounterProps {
  value: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  formatThousands?: boolean;
  className?: string;
}

/**
 * Animated Counter that counts up dynamically to the target value with cubic ease-out.
 * Automatically triggered when scrolled into view or mounted, with a smooth deceleration curve.
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  from = 0,
  duration = 1100,
  prefix = '',
  suffix = '',
  decimals = 0,
  formatThousands = false,
  className = '',
}) => {
  const safeTarget = typeof value === 'number' && !isNaN(value) ? value : 0;
  const safeFrom = typeof from === 'number' && !isNaN(from) ? from : 0;
  const [current, setCurrent] = useState<number>(safeFrom);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef<boolean>(false);

  useEffect(() => {
    const el = elementRef.current;
    const endVal = safeTarget;
    const startVal = safeFrom;

    // Reset to start on value change
    setCurrent(startVal);
    hasAnimatedRef.current = false;

    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const startTime = performance.now();
      const animDuration = Math.max(300, duration);

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / animDuration, 1);
        // Cubic ease-out
        const ease = 1 - Math.pow(1 - progress, 3);
        const nextVal = startVal + (endVal - startVal) * ease;
        setCurrent(nextVal);

        if (progress < 1) {
          animFrameRef.current = requestAnimationFrame(step);
        } else {
          setCurrent(endVal);
          animFrameRef.current = null;
        }
      };

      animFrameRef.current = requestAnimationFrame(step);
    };

    // If IntersectionObserver is not supported, start immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window) || !el) {
      startAnimation();
      return () => {
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      };
    }

    // Safety timeout: if observer hasn't fired after 250ms (e.g. element already visible), force start
    const safetyTimer = setTimeout(() => {
      startAnimation();
    }, 250);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          clearTimeout(safetyTimer);
          startAnimation();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    observer.observe(el);

    return () => {
      clearTimeout(safetyTimer);
      observer.disconnect();
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
    };
  }, [safeTarget, safeFrom, duration]);

  const displayVal = typeof current === 'number' && !isNaN(current) ? current : safeTarget;

  return (
    <span ref={elementRef} className={`tabular-nums font-mono ${className}`}>
      {prefix}
      {decimals > 0 
        ? displayVal.toFixed(decimals) 
        : formatThousands 
        ? Math.round(displayVal).toLocaleString('fr-FR') 
        : Math.round(displayVal)}
      {suffix}
    </span>
  );
};

