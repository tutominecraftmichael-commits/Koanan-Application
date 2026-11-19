import React, { useEffect, useState } from 'react';
import { Gamepad2, Infinity as InfinityIcon, Play, Star, X, Zap } from 'lucide-react';
import type { ExerciseSeriesViewProps } from './ExerciseSeriesView';
import { ExerciseSeriesView } from './ExerciseSeriesView';
import {
  ENERGY_COST,
  ENERGY_MAX,
  ENERGY_UNIT_MS,
  SERIES_LEVELS,
  energyNow,
  hasUnlimitedEnergy,
  nextSeriesBaseXp,
} from '../../lib/gamification/gamification';
import { soundFX } from '../../lib/audioEffects';

const fmtWait = (ms: number) => {
  const min = Math.max(1, Math.ceil(ms / 60000));
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h ? `${h} h ${String(m).padStart(2, '0')}` : `${m} min`;
};

export type MiniGamesHubViewProps = Omit<ExerciseSeriesViewProps, 'onBackToHub'>;

export const MiniGamesHubView: React.FC<MiniGamesHubViewProps> = (props) => {
  const { gamification, planTier, onClose, onUpgrade } = props;
  const [activeGame, setActiveGame] = useState<'xp-a-gogo' | null>(null);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (activeGame) return;
    const t = setInterval(() => setNow(Date.now()), 30 * 1000);
    return () => clearInterval(t);
  }, [activeGame]);

  if (activeGame === 'xp-a-gogo') {
    return (
      <ExerciseSeriesView
        {...props}
        onBackToHub={() => setActiveGame(null)}
      />
    );
  }

  const unlimited = hasUnlimitedEnergy(planTier);
  const energy = energyNow(gamification, new Date(now));
  const nextXp = nextSeriesBaseXp(gamification, new Date(now));
  const canPlayXp = unlimited || energy.energy >= ENERGY_COST;
  const waitMs = !canPlayXp && energy.nextUnitAt
    ? energy.nextUnitAt + (ENERGY_COST - energy.energy - 1) * ENERGY_UNIT_MS - now
    : 0;

  return (
    <div className="fixed inset-0 z-[80] bg-slate-50 dark:bg-[#070B13] overflow-y-auto overscroll-contain">
      <div className="max-w-2xl mx-auto px-4 py-4 sm:py-6 pb-16 space-y-5 min-h-full">
        {/* Barre supérieure */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer les mini-jeux"
              className="p-2 -ml-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200 dark:hover:text-white dark:hover:bg-slate-800 cursor-pointer transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/25 shrink-0">
                <Gamepad2 className="w-5 h-5" />
              </span>
              <h1 className="m-0 text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight truncate">
                Mini-jeux
              </h1>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-300/80 text-amber-800 dark:bg-amber-500/15 dark:border-amber-400/35 dark:text-amber-300 text-sm font-black tabular-nums">
            <Zap className="w-4 h-4 fill-current" />
            {unlimited ? <InfinityIcon className="w-4 h-4" strokeWidth={2.6} /> : `${energy.energy} / ${ENERGY_MAX}`}
          </div>
        </div>

        {/* Barre de charges (affichée uniquement lorsque l'énergie n'est pas illimitée) */}
        {!unlimited && (
          <div className="rounded-2xl bg-white dark:bg-[#0F1626] border border-slate-200 dark:border-white/10 p-4 space-y-2.5 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: ENERGY_MAX / ENERGY_COST }).map((_, i) => {
                  const filled = energy.energy >= (i + 1) * ENERGY_COST;
                  return (
                    <span
                      key={i}
                      className={`w-7 h-7 rounded-lg flex items-center justify-center border-2 transition-colors ${
                        filled
                          ? 'bg-amber-400 border-amber-500 shadow-[0_2px_0_#b45309]'
                          : 'bg-slate-100 border-slate-200 dark:bg-slate-800 dark:border-slate-700'
                      }`}
                    >
                      <Zap className={`w-4 h-4 ${filled ? 'text-white fill-white' : 'text-slate-400 dark:text-slate-500'}`} />
                    </span>
                  );
                })}
              </div>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                {energy.energy >= ENERGY_MAX
                  ? 'Charges au maximum !'
                  : `Plein dans ${fmtWait((energy.fullAt || now) - now)}`}
              </span>
            </div>
            {!canPlayXp && (
              <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-100 dark:border-white/[0.06]">
                <p className="m-0 text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Plus assez de charges ({ENERGY_COST} ⚡ requises). Prochaine partie dans{' '}
                  <b className="text-amber-600 dark:text-amber-300">{fmtWait(waitMs)}</b>.
                </p>
                <button
                  type="button"
                  onClick={onUpgrade}
                  className="shrink-0 px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 text-white text-xs font-black cursor-pointer"
                >
                  Charges illimitées (Pro)
                </button>
              </div>
            )}
          </div>
        )}

        {/* CARTE PRINCIPALE : XP À GOGO (Miniature 4K KONAN avec K sur les faces, aura jaune et yeux bleus) */}
        <div className="space-y-2.5">
          <p className="m-0 px-1 text-[11px] font-black uppercase tracking-[0.16em] text-amber-600 dark:text-[#F5C451]">
            Mini-jeu disponible
          </p>

          <article className="group rounded-[24px] overflow-hidden bg-white dark:bg-[#0F1626] border-2 border-amber-300/80 dark:border-amber-400/35 shadow-xl shadow-amber-500/10 dark:shadow-slate-950/60 transition-all hover:border-amber-400 dark:hover:border-amber-400/70">
            {/* Miniature 4K 16:9 */}
            <button
              type="button"
              onClick={() => {
                soundFX.playCheckmarkPop();
                setActiveGame('xp-a-gogo');
              }}
              className="relative block w-full aspect-video overflow-hidden bg-[#070D1F] cursor-pointer text-left focus:outline-none"
              aria-label="Lancer le mini-jeu XP à gogo"
            >
              <img
                src="/mini-games/xp-a-gogo.jpg"
                alt="KONAN chargé d'XP avec les K sur le cube, aura dorée et yeux bleus — miniature XP à gogo"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              {/* Dégradé discret pour la lisibilité des badges */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D1F]/90 via-transparent to-[#070D1F]/35 pointer-events-none" />

              {/* Badge niveau + gain XP en haut à gauche */}
              <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-amber-400/40 text-[11px] font-black text-amber-300 shadow-md">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>
                  Niveau {nextXp.level.level}/{SERIES_LEVELS.length} · Jusqu’à {nextXp.base} XP
                </span>
              </span>

              {/* Coût en charges (éclairs) en haut à droite */}
              <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black shadow-lg shadow-amber-500/30">
                <Zap className="w-3.5 h-3.5 fill-slate-950" />
                <span>{unlimited ? 'Illimité' : `${ENERGY_COST} charges`}</span>
              </span>

              {/* Titre sur le bas de la miniature */}
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-2">
                <div>
                  <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-sky-300">
                    Mini-jeu · Défi XP
                  </span>
                  <h2 className="m-0 text-2xl sm:text-[26px] font-black text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                    XP à gogo
                  </h2>
                </div>
              </div>
            </button>

            {/* Détails & bouton Jouer */}
            <div className="p-4 sm:p-5 space-y-3.5">
              <p className="m-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Enchaîne des séries chronométrées sur tes chapitres déjà étudiés pour accumuler un maximum d’XP (<b>15 → 30 → 60 → 120 XP</b>). Tes XP comptent pour ta quête et ta Ligue !
              </p>

              <button
                type="button"
                onClick={() => {
                  soundFX.playCheckmarkPop();
                  setActiveGame('xp-a-gogo');
                }}
                className="w-full h-12 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-sm uppercase tracking-wide shadow-[0_4px_0_#C2410C] active:translate-y-1 active:shadow-none cursor-pointer flex items-center justify-center gap-2 transition-all touch-manipulation"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Jouer à XP à gogo</span>
                {!unlimited && (
                  <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-slate-950/15 text-xs font-black">
                    −{ENERGY_COST} <Zap className="w-3.5 h-3.5 fill-current" />
                  </span>
                )}
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default MiniGamesHubView;
