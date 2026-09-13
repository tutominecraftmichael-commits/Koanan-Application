import React from 'react';

export interface BlueFlameProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  active?: boolean;
  showEmbers?: boolean;
  className?: string;
}

export const BlueFlame: React.FC<BlueFlameProps> = ({
  size = 'md',
  active = true,
  showEmbers = true,
  className = '',
}) => {
  const sizeMap = {
    sm: { width: 20, height: 26, viewBox: '0 0 100 130' },
    md: { width: 44, height: 58, viewBox: '0 0 100 130' },
    lg: { width: 88, height: 114, viewBox: '0 0 100 130' },
    xl: { width: 140, height: 180, viewBox: '0 0 100 130' },
  };

  const { width, height, viewBox } = sizeMap[size];

  // Embers for large/xl mode
  const embers = showEmbers && active && (size === 'lg' || size === 'xl') ? [
    { id: 1, left: '42%', bottom: '45%', size: 4, drift: '-14px', duration: '2.1s', delay: '0s' },
    { id: 2, left: '55%', bottom: '50%', size: 5, drift: '16px', duration: '2.5s', delay: '0.4s' },
    { id: 3, left: '48%', bottom: '60%', size: 3, drift: '-8px', duration: '1.9s', delay: '0.9s' },
    { id: 4, left: '38%', bottom: '40%', size: 4, drift: '12px', duration: '2.3s', delay: '1.2s' },
    { id: 5, left: '60%', bottom: '55%', size: 3, drift: '-18px', duration: '2.7s', delay: '0.6s' },
    { id: 6, left: '50%', bottom: '65%', size: 4, drift: '10px', duration: '2.0s', delay: '1.5s' },
  ] : [];

  return (
    <div 
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width, height }}
    >
      {/* Background Radial Fire Aura (when ignited) */}
      {active && (
        <div 
          className="absolute inset-0 rounded-full blur-xl pointer-events-none -z-10 animate-flame-aura opacity-75"
          style={{
            background: 'radial-gradient(circle at 50% 65%, rgba(56, 189, 248, 0.6) 0%, rgba(37, 99, 235, 0.35) 45%, transparent 75%)',
            transform: 'scale(1.4)',
          }}
        />
      )}

      {/* Floating Sparkles & Embers */}
      {embers.map((emb) => (
        <span
          key={emb.id}
          className="absolute rounded-full bg-sky-300 pointer-events-none animate-ember-rise shadow-[0_0_8px_#38bdf8]"
          style={{
            left: emb.left,
            bottom: emb.bottom,
            width: emb.size,
            height: emb.size,
            '--drift': emb.drift,
            '--duration': emb.duration,
            animationDelay: emb.delay,
          } as React.CSSProperties}
        />
      ))}

      {/* Realistic Multi-layered SVG Flame */}
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full transform-gpu ${active ? 'animate-flame-wiggle animate-flame-aura' : 'opacity-40 grayscale'}`}
      >
        <defs>
          {/* Active Outer Layer: Deep Cobalt / Indigo to Electric Blue */}
          <linearGradient id={`outerFlameGrad-${size}`} x1="50" y1="125" x2="50" y2="5" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="35%" stopColor="#2563EB" />
            <stop offset="70%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#93C5FD" />
          </linearGradient>

          {/* Dormant / Inactive Flame Layer: Muted elegant slate */}
          <linearGradient id={`dormantFlameGrad-${size}`} x1="50" y1="125" x2="50" y2="5" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="50%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          {/* Mid Layer: Cyan to Sky Blue Energy (or dormant slate) */}
          <linearGradient id={`midFlameGrad-${size}`} x1="50" y1="120" x2="50" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={active ? "#0284C7" : "#1E293B"} />
            <stop offset="45%" stopColor={active ? "#0EA5E9" : "#334155"} />
            <stop offset="80%" stopColor={active ? "#38BDF8" : "#475569"} />
            <stop offset="100%" stopColor={active ? "#BAE6FD" : "#64748B"} />
          </linearGradient>

          {/* Inner Core: Radiant White-Hot Cyan */}
          <linearGradient id={`innerCoreGrad-${size}`} x1="50" y1="115" x2="50" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={active ? "#38BDF8" : "#334155"} />
            <stop offset="40%" stopColor={active ? "#E0F2FE" : "#475569"} />
            <stop offset="100%" stopColor={active ? "#FFFFFF" : "#64748B"} />
          </linearGradient>

          {/* Glow Filter for realistic hot flame edge (only when active) */}
          {active && (
            <filter id={`blueFlameFilter-${size}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation={size === 'xl' ? '4' : '2'} floodColor="#38BDF8" floodOpacity="0.8" />
            </filter>
          )}
        </defs>

        {/* 1. OUTER FLAME BODY (Main Silhouette) */}
        <path
          d="M50 5
             C52 24, 66 38, 74 52
             C84 70, 85 92, 73 108
             C63 121, 47 125, 36 122
             C21 118, 14 103, 16 88
             C17 76, 25 67, 30 57
             C35 47, 34 38, 30 28
             C38 34, 45 42, 45 52
             C45 61, 40 68, 41 77
             C42 84, 48 88, 54 87
             C60 85, 63 78, 62 71
             C60 55, 48 35, 50 5 Z"
          fill={active ? `url(#outerFlameGrad-${size})` : `url(#dormantFlameGrad-${size})`}
          filter={active ? `url(#blueFlameFilter-${size})` : undefined}
          stroke={active ? undefined : '#475569'}
          strokeWidth={active ? 0 : 1}
        />

        {/* 2. MID FLAME (Only animates when active) */}
        <path
          className={active ? 'animate-flame-inner' : ''}
          d="M50 25
             C54 40, 68 54, 68 72
             C68 88, 58 106, 44 108
             C32 110, 24 98, 25 86
             C26 76, 32 68, 36 58
             C38 52, 38 46, 36 38
             C41 44, 45 52, 45 61
             C45 69, 41 75, 43 81
             C45 86, 50 87, 54 85
             C58 82, 59 76, 57 70
             C55 56, 47 43, 50 25 Z"
          fill={`url(#midFlameGrad-${size})`}
          opacity={active ? 0.9 : 0.4}
        />

        {/* 3. INNER CORE (Only animates when active) */}
        <path
          className={active ? 'animate-flame-inner' : ''}
          d="M50 48
             C53 60, 60 70, 58 84
             C56 94, 48 102, 40 100
             C34 98, 31 90, 33 82
             C34 75, 38 70, 41 64
             C43 59, 43 55, 41 50
             C44 54, 47 59, 47 66
             C48 72, 45 77, 47 81
             C48 83, 51 84, 53 82
             C55 80, 55 76, 53 72
             C51 63, 48 56, 50 48 Z"
          fill={`url(#innerCoreGrad-${size})`}
          opacity={active ? 1 : 0.3}
        />

        {/* 4. White-Hot Energy Point (only visible and animated when active) */}
        {active && (
          <ellipse
            cx="46"
            cy="86"
            rx="5"
            ry="7"
            fill="#FFFFFF"
            opacity="0.85"
            className="animate-flame-inner"
          />
        )}
      </svg>
    </div>
  );
};
