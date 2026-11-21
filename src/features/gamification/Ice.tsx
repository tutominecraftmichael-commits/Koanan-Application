/**
 * GLACE DE LA LIGUE GELÉE (2026-11-17)
 * Réputation de 80 % ou moins : la ligue de l'élève est gelée (ses XP ne comptent plus dans le classement).
 * On le voit tout de suite : flocon qui tourne doucement, givre qui scintille sur sa ligne et sur le badge,
 * petits flocons qui tombent dans le bandeau. Pas d'animation si l'élève a demandé « réduire les animations ».
 */
import React from 'react';

const CSS = `
@keyframes konan-ice-shine { 0% { transform: translateX(-120%) skewX(-18deg) } 60%, 100% { transform: translateX(220%) skewX(-18deg) } }
@keyframes konan-ice-pulse { 0%, 100% { opacity: .55 } 50% { opacity: .9 } }
.konan-ice-shine::after { content: ''; position: absolute; top: 0; bottom: 0; left: 0; width: 40%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent); animation: konan-ice-shine 3.2s ease-in-out infinite; pointer-events: none; }
.konan-ice-pulse { animation: konan-ice-pulse 2.4s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) { .konan-ice-pulse { animation: none } .konan-ice-shine::after { display: none } }
`;

/** Styles des animations de glace (à mettre une fois sur l'écran). */
export const IceStyles: React.FC = () => <style>{CSS}</style>;

/** Flocon de neige (6 branches), bleu glacier (statique). */
export const Snowflake: React.FC<{ size?: number; className?: string; spin?: boolean }> = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      {[0, 60, 120].map((a) => (
        <g key={a} transform={`rotate(${a} 12 12)`}>
          <path d="M12 2v20" />
          <path d="M9 4.5l3 2.5 3-2.5M9 19.5l3-2.5 3 2.5" />
        </g>
      ))}
    </g>
  </svg>
);

/**
 * Givre posé sur un élément (sa ligne du classement, la tuile du tableau de bord…) : voile bleu glacier,
 * cristaux aux coins et reflet qui passe. Le parent doit être en `relative overflow-hidden`.
 */
export const FrostOverlay: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span aria-hidden="true" className={`konan-ice-shine pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden ${className}`}>
    <span className="absolute inset-0 bg-gradient-to-br from-cyan-100/70 via-sky-50/30 to-cyan-200/60 dark:from-cyan-300/25 dark:via-sky-200/5 dark:to-cyan-300/20" />
    <span className="absolute inset-0 rounded-[inherit] border-2 border-cyan-300/80 dark:border-cyan-300/50 konan-ice-pulse" />
    {/* Cristaux de givre aux coins */}
    <svg className="absolute -top-1 -left-1 w-10 h-10 text-cyan-400/70 dark:text-cyan-200/60" viewBox="0 0 40 40">
      <path d="M2 2l14 6M2 2l6 14M2 2l12 12M8 4l2 4M4 8l4 2" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
    <svg className="absolute -bottom-1 -right-1 w-10 h-10 text-cyan-400/70 dark:text-cyan-200/60 rotate-180" viewBox="0 0 40 40">
      <path d="M2 2l14 6M2 2l6 14M2 2l12 12M8 4l2 4M4 8l4 2" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  </span>
);

/** Petits flocons qui tombent (conservé comme no-op vide pour compatibilité). */
export const FallingSnow: React.FC = () => null;
