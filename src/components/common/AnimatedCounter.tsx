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
 * so the user can always experience the dynamic count-up animation.
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
  const safeTarget = typeof value === 'number' && !isNaN(value) ? value : 0;
  const [current, setCurrent] = useState<number>(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const isAnimatingRef = useRef<boolean>(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const startAnimation = () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }

      const startTime = performance.now();
      const animDuration = Math.max(300, duration);
      const startVal = 0;
      const endVal = safeTarget;

      if (startVal === endVal) {
        setCurrent(endVal);
        isAnimatingRef.current = false;
        return;
      }

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / animDuration, 1);
        // Courbe cubique ease-out naturelle et fluide
        const ease = 1 - Math.pow(1 - progress, 3);
        const nextVal = startVal + (endVal - startVal) * ease;
        setCurrent(nextVal);

        if (progress < 1) {
          animFrameRef.current = requestAnimationFrame(step);
        } else {
          setCurrent(endVal);
          isAnimatingRef.current = false;
          animFrameRef.current = null;
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

    // Si le navigateur ne supporte pas IntersectionObserver, démarrer immédiatement
    if (typeof IntersectionObserver === 'undefined') {
      startAnimation();
      return;
    }

    // Déclenché à chaque entrée dans le champ de vision
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          startAnimation();
        } else if (entry && !entry.isIntersecting) {
          // Réinitialiser pour pouvoir rejouer l'animation quand on revient dessus
          resetCounter();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -20px 0px' }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      isAnimatingRef.current = false;
    };
  }, [safeTarget, duration]);

  const displayVal = typeof current === 'number' && !isNaN(current) ? current : 0;

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
