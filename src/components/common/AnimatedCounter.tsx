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
 * Animated Counter that reliably animates to target value.
 * Starts directly at the target value (or animates smoothly from previous value)
 * without any flaky IntersectionObserver resets that get stuck at 0%.
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 600,
  prefix = '',
  suffix = '',
  decimals = 0,
  formatThousands = false,
  className = '',
}) => {
  const safeTarget = typeof value === 'number' && !isNaN(value) ? value : 0;
  const [current, setCurrent] = useState<number>(safeTarget);
  const animFrameRef = useRef<number | null>(null);
  const prevValueRef = useRef<number>(safeTarget);

  useEffect(() => {
    const startVal = prevValueRef.current;
    const endVal = typeof value === 'number' && !isNaN(value) ? value : 0;
    prevValueRef.current = endVal;

    // Si la valeur est identique, aucune animation n'est nécessaire
    if (startVal === endVal) {
      setCurrent(endVal);
      return;
    }

    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    const startTime = performance.now();
    const animDuration = Math.max(200, duration);

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

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
    };
  }, [value, duration]);

  const displayVal = typeof current === 'number' && !isNaN(current) ? current : safeTarget;

  return (
    <span className={`tabular-nums font-mono ${className}`}>
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

