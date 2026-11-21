// ============================================================================
// FIGURES VECTORIELLES DE HAUTE PRÉCISION (Courbes, Tableaux de variation & Signes)
// - Géométrie vectorielle exacte (zéro distorsion de trait, tangences exactes)
// - Légende dédiée hors-grille pour les courbes (zéro collision texte/courbe)
// - Solveur 2D anti-chevauchement avec halo de lisibilité pour tous les points
// ============================================================================
import React, { useId, useMemo } from 'react';
import type {
  FunctionPlotSpec,
  SignTableSpec,
  SketchColor,
  VariationLevel,
  VariationTableSpec,
} from '../../lib/curriculum/types';
import { tryCompileExpression } from '../../lib/curriculum/mathExpression';

// Classes écrites en entier pour que Tailwind les détecte.
const STROKE: Record<SketchColor, string> = {
  blue: 'stroke-blue-600 dark:stroke-blue-400',
  violet: 'stroke-violet-600 dark:stroke-violet-400',
  green: 'stroke-emerald-600 dark:stroke-emerald-400',
  orange: 'stroke-amber-500 dark:stroke-amber-400',
  slate: 'stroke-slate-500 dark:stroke-slate-400',
};
const FILL: Record<SketchColor, string> = {
  blue: 'fill-blue-600 dark:fill-blue-400',
  violet: 'fill-violet-600 dark:fill-violet-400',
  green: 'fill-emerald-600 dark:fill-emerald-400',
  orange: 'fill-amber-600 dark:fill-amber-400',
  slate: 'fill-slate-600 dark:fill-slate-300',
};
const LEGEND_DOT_BG: Record<SketchColor, string> = {
  blue: 'bg-blue-600 dark:bg-blue-400',
  violet: 'bg-violet-600 dark:bg-violet-400',
  green: 'bg-emerald-600 dark:bg-emerald-400',
  orange: 'bg-amber-500 dark:bg-amber-400',
  slate: 'bg-slate-500 dark:bg-slate-400',
};
const LEGEND_PILL_STYLE: Record<SketchColor, string> = {
  blue: 'bg-blue-50/90 dark:bg-blue-950/50 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700/60',
  violet: 'bg-violet-50/90 dark:bg-violet-950/50 text-violet-800 dark:text-violet-200 border-violet-200 dark:border-violet-700/60',
  green: 'bg-emerald-50/90 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-700/60',
  orange: 'bg-amber-50/90 dark:bg-amber-950/50 text-amber-900 dark:text-amber-200 border-amber-200 dark:border-amber-700/60',
  slate: 'bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700',
};
const CURVE_ORDER: SketchColor[] = ['blue', 'orange', 'violet', 'green'];
const INK_STROKE = 'stroke-slate-700 dark:stroke-slate-300';
const INK_FILL = 'fill-slate-800 dark:fill-slate-100';
const MUTED_FILL = 'fill-slate-500 dark:fill-slate-400';
const GRID_STROKE = 'stroke-slate-200/90 dark:stroke-slate-800';
const PAPER_FILL = 'fill-white dark:fill-slate-900';
const HALO_STROKE = 'stroke-white dark:stroke-slate-900';

/** Nombre au format français : virgule décimale et vrai signe moins. */
function fmt(n: number): string {
  const rounded = Math.round(n * 1000) / 1000;
  return String(rounded).replace('.', ',').replace('-', '−');
}

function useSafeId(prefix: string): string {
  const raw = useId();
  return `${prefix}${raw.replace(/[^a-zA-Z0-9_-]/g, '')}`;
}

interface BBox {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

function boxesOverlap(a: BBox, b: BBox, pad = 2): boolean {
  return !(a.x2 + pad < b.x1 || a.x1 - pad > b.x2 || a.y2 + pad < b.y1 || a.y1 - pad > b.y2);
}

/**
 * Infère intelligemment le nom des axes (ex: x₁/x₂, X₁/X₂, Q/P, Q/Coût, Y/i, Y/DG)
 * à partir des légendes des courbes et des points pour éviter toute confusion avec x et y.
 */
function inferAxisSymbols(spec: FunctionPlotSpec): { xSym: string; ySym: string } {
  if (spec.xLabel || spec.yLabel) {
    return { xSym: spec.xLabel || 'x', ySym: spec.yLabel || 'y' };
  }
  const allLabels = [
    ...spec.curves.map(c => c.label || ''),
    ...(spec.points || []).map(p => p.label || ''),
    ...(spec.verticalLines || []).map(l => l.label || ''),
    ...(spec.horizontalLines || []).map(l => l.label || ''),
  ].join(' ');

  if (/x₁|x_1/i.test(allLabels) && /x₂|x_2/i.test(allLabels)) {
    return { xSym: 'x₁', ySym: 'x₂' };
  }
  if (/X₁|X_1/.test(allLabels) && /X₂|X_2/.test(allLabels)) {
    return { xSym: 'X₁', ySym: 'X₂' };
  }
  if (/\b(?:IS|LM)\b/.test(allLabels) || (/\bi\s*=/.test(allLabels) && /\bY\b/.test(allLabels))) {
    return { xSym: 'Y', ySym: 'i' };
  }
  if (/\bDG[₁₂12]?\b/.test(allLabels) && /\bY\b/.test(allLabels)) {
    return { xSym: 'Y', ySym: 'DG' };
  }
  if (/\b(?:CM|Cm|CVM)\s*\(Q\)/i.test(allLabels)) {
    return { xSym: 'Q', ySym: 'Coût' };
  }
  if (/\bP\s*=/.test(allLabels) && /\bQ\b/.test(allLabels)) {
    return { xSym: 'Q', ySym: 'P' };
  }
  return { xSym: 'x', ySym: 'y' };
}

// ----------------------------------------------------------------------------
// 1. COURBES DE FONCTIONS (AVEC LÉGENDE HORS-GRILLE & SOLVEUR ANTI-COLLISION)
// ----------------------------------------------------------------------------

export const SketchFunctionPlot: React.FC<{ spec: FunctionPlotSpec }> = ({ spec }) => {
  const clipId = useSafeId('clip');

  const W = 420;
  const padLeft = 42;
  const padRight = 32;
  const padTop = 28;
  const padBottom = 34;
  const plotW = W - padLeft - padRight;

  const xSpan = spec.xMax - spec.xMin;
  const ySpan = spec.yMax - spec.yMin;
  const valid = xSpan > 0 && ySpan > 0;
  const plotH = valid
    ? Math.round(Math.min(270, Math.max(185, plotW * Math.min(0.95, Math.max(0.58, ySpan / xSpan)))))
    : 200;
  const H = plotH + padTop + padBottom;

  const sx = (x: number) => padLeft + ((x - spec.xMin) / xSpan) * plotW;
  const sy = (y: number) => padTop + plotH - ((y - spec.yMin) / ySpan) * plotH;

  const { xSym, ySym } = useMemo(() => inferAxisSymbols(spec), [spec]);

  const drawn = useMemo(() => {
    if (!valid) return [];
    return spec.curves.map((curve, cIdx) => {
      const color = curve.color || CURVE_ORDER[cIdx % CURVE_ORDER.length];
      const paths: string[] = [];
      const marks: { x: number; y: number; filled: boolean }[] = [];
      const samples: { px: number; py: number }[] = [];

      for (const piece of curve.pieces) {
        const fn = tryCompileExpression(piece.expr);
        if (!fn) continue;
        const a = Math.max(piece.from ?? spec.xMin, spec.xMin);
        const b = Math.min(piece.to ?? spec.xMax, spec.xMax);
        if (b <= a) continue;

        const N = 260;
        let d = '';
        let prevY: number | null = null;
        for (let i = 0; i <= N; i++) {
          const x = a + ((b - a) * i) / N;
          const y = fn(x);
          const jump = prevY !== null && Math.abs(y - prevY) > ySpan * 2.5;
          if (!Number.isFinite(y) || Math.abs(y) > 1e6 || jump) {
            prevY = Number.isFinite(y) ? y : null;
            if (d) { paths.push(d); d = ''; }
            if (!Number.isFinite(y)) continue;
          }
          const px = sx(x);
          const py = sy(y);
          d += `${d ? 'L' : 'M'}${px.toFixed(1)} ${py.toFixed(1)} `;
          prevY = y;
          if (y >= spec.yMin && y <= spec.yMax && i % 4 === 0) {
            samples.push({ px, py });
          }
        }
        if (d) paths.push(d);

        if (piece.includeFrom !== undefined && piece.from !== undefined && piece.from >= spec.xMin) {
          const y = fn(piece.from);
          if (Number.isFinite(y)) marks.push({ x: piece.from, y, filled: piece.includeFrom });
        }
        if (piece.includeTo !== undefined && piece.to !== undefined && piece.to <= spec.xMax) {
          const y = fn(piece.to);
          if (Number.isFinite(y)) marks.push({ x: piece.to, y, filled: piece.includeTo });
        }
      }
      return { color, paths, marks, label: curve.label, samples };
    });
  }, [spec, valid, plotW, plotH, xSpan, ySpan]);

  if (!valid) return null;

  const xStep = spec.xStep || 1;
  const yStep = spec.yStep || 1;
  const xTicks: number[] = [];
  for (let v = Math.ceil(spec.xMin / xStep) * xStep; v <= spec.xMax + 1e-9; v += xStep) {
    xTicks.push(Math.round(v * 1e6) / 1e6);
  }
  const yTicks: number[] = [];
  for (let v = Math.ceil(spec.yMin / yStep) * yStep; v <= spec.yMax + 1e-9; v += yStep) {
    yTicks.push(Math.round(v * 1e6) / 1e6);
  }
  const xEvery = Math.max(1, Math.ceil(xTicks.length / 9));
  const yEvery = Math.max(1, Math.ceil(yTicks.length / 7));

  // Axes : sur 0 s'il est visible, sinon sur le bord inférieur/gauche
  const axisY = spec.yMin <= 0 && spec.yMax >= 0 ? sy(0) : sy(spec.yMin);
  const axisX = spec.xMin <= 0 && spec.xMax >= 0 ? sx(0) : sx(spec.xMin);

  // Projections automatiques en pointillés pour les points d'équilibre intérieurs nommés (ex: E*(4 ; 6))
  const explicitVertX = new Set((spec.verticalLines || []).map(l => Math.round(l.x * 1000)));
  const explicitHorizY = new Set((spec.horizontalLines || []).map(l => Math.round(l.y * 1000)));
  const autoProjections = (spec.points || []).filter(p =>
    Boolean(p.label) &&
    p.x > spec.xMin + xSpan * 0.05 &&
    p.x < spec.xMax - xSpan * 0.05 &&
    p.y > spec.yMin + ySpan * 0.05 &&
    p.y < spec.yMax - ySpan * 0.05 &&
    Math.abs(p.x) > 1e-6 &&
    Math.abs(p.y) > 1e-6
  );

  // Solveur 2D de placement sans collision pour toutes les étiquettes de droites et de points
  const allCurveSamples = drawn.flatMap(c => c.samples);
  const allPointPixels = (spec.points || []).map(p => ({ px: sx(p.x), py: sy(p.y) }));
  const placedBoxes: BBox[] = [];

  // Réserver les boîtes des symboles d'axes xSym et ySym
  placedBoxes.push({ x1: W - padRight - 10, y1: axisY - 22, x2: W, y2: axisY + 4 });
  placedBoxes.push({ x1: axisX - 4, y1: 0, x2: axisX + 34, y2: padTop - 2 });

  // 1. Placement sans collision des étiquettes de droites verticales
  const placedVerticalLabels = (spec.verticalLines || []).map((l) => {
    const lx = sx(l.x);
    if (!l.label) return { ...l, lx, labelX: lx, labelY: padTop + 12, anchor: 'start' as const };
    const estW = l.label.length * 6.2 + 8;
    const estH = 14;
    const nearRight = lx + estW + 8 > W - padRight;
    const anchor: 'start' | 'end' = nearRight ? 'end' : 'start';
    const labelX = lx + (nearRight ? -5 : 5);

    let bestY = padTop + 13;
    for (let row = 0; row < 5; row++) {
      const candY = padTop + 13 + row * 15;
      const box: BBox = {
        x1: anchor === 'start' ? labelX : labelX - estW,
        y1: candY - estH + 3,
        x2: anchor === 'start' ? labelX + estW : labelX,
        y2: candY + 3,
      };
      if (!placedBoxes.some(b => boxesOverlap(box, b, 3))) {
        bestY = candY;
        placedBoxes.push(box);
        break;
      }
    }
    return { ...l, lx, labelX, labelY: bestY, anchor };
  });

  // 2. Placement sans collision des étiquettes de droites horizontales
  const placedHorizontalLabels = (spec.horizontalLines || []).map((l) => {
    const ly = sy(l.y);
    if (!l.label) return { ...l, ly, labelX: W - padRight - 4, labelY: ly - 5, anchor: 'end' as const };
    const estW = l.label.length * 6.2 + 8;
    const estH = 14;
    const candidates: { x: number; y: number; anchor: 'end' | 'start' }[] = [
      { x: W - padRight - 4, y: ly - 5, anchor: 'end' },
      { x: W - padRight - 4, y: ly + 13, anchor: 'end' },
      { x: padLeft + 6, y: ly - 5, anchor: 'start' },
      { x: padLeft + 6, y: ly + 13, anchor: 'start' },
    ];
    let chosen = candidates[0];
    for (const c of candidates) {
      const box: BBox = {
        x1: c.anchor === 'start' ? c.x : c.x - estW,
        y1: c.y - estH + 3,
        x2: c.anchor === 'start' ? c.x + estW : c.x,
        y2: c.y + 3,
      };
      if (!placedBoxes.some(b => boxesOverlap(box, b, 3))) {
        chosen = c;
        placedBoxes.push(box);
        break;
      }
    }
    return { ...l, ly, labelX: chosen.x, labelY: chosen.y, anchor: chosen.anchor };
  });

  // 3. Placement optimal des étiquettes de points (évite courbes, axes, graduations et autres étiquettes)
  const placedPoints = (spec.points || []).map((p) => {
    const px = sx(p.x);
    const py = sy(p.y);
    const color = p.color || 'violet';
    if (!p.label) {
      return { ...p, px, py, color, labelX: px, labelY: py, anchor: 'start' as const };
    }

    const estW = p.label.length * 6.4 + 8;
    const estH = 14;

    const candidates: { dx: number; dy: number; anchor: 'start' | 'end' | 'middle' }[] = [
      { dx: 8, dy: -8, anchor: 'start' },
      { dx: -8, dy: -8, anchor: 'end' },
      { dx: 8, dy: 14, anchor: 'start' },
      { dx: -8, dy: 14, anchor: 'end' },
      { dx: 0, dy: -10, anchor: 'middle' },
      { dx: 10, dy: 4, anchor: 'start' },
      { dx: -10, dy: 4, anchor: 'end' },
      { dx: 0, dy: 16, anchor: 'middle' },
    ];

    let bestCand = candidates[0];
    let bestScore = Infinity;

    for (const cand of candidates) {
      const lx = px + cand.dx;
      const ly = py + cand.dy;
      const box: BBox = {
        x1: cand.anchor === 'start' ? lx : cand.anchor === 'end' ? lx - estW : lx - estW / 2,
        y1: ly - estH + 3,
        x2: cand.anchor === 'start' ? lx + estW : cand.anchor === 'end' ? lx : lx + estW / 2,
        y2: ly + 3,
      };

      let penalty = 0;

      // Pénalité de débordement hors du cadre SVG
      if (box.x1 < 6) penalty += (6 - box.x1) * 40;
      if (box.x2 > W - 6) penalty += (box.x2 - (W - 6)) * 40;
      if (box.y1 < 6) penalty += (6 - box.y1) * 40;
      if (box.y2 > H - 6) penalty += (box.y2 - (H - 6)) * 40;

      // Pénalité forte si chevauchement avec une étiquette déjà placée
      for (const existing of placedBoxes) {
        if (boxesOverlap(box, existing, 4)) {
          penalty += 5000;
        }
      }

      // Pénalité si la boîte recouvre un autre point remarquable
      for (const pt of allPointPixels) {
        if (pt.px >= box.x1 - 3 && pt.px <= box.x2 + 3 && pt.py >= box.y1 - 3 && pt.py <= box.y2 + 3) {
          penalty += 1800;
        }
      }

      // Pénalité si la boîte traverse une courbe tracée
      for (const sample of allCurveSamples) {
        if (sample.px >= box.x1 - 2 && sample.px <= box.x2 + 2 && sample.py >= box.y1 - 2 && sample.py <= box.y2 + 2) {
          penalty += 55;
        }
      }

      // Pénalité si l'étiquette chevauche les graduations sous l'axe X ou à gauche de l'axe Y
      if (box.y2 > axisY - 2 && box.y1 < axisY + 15) {
        penalty += 160;
      }
      if (box.x1 < axisX + 2 && box.x2 > axisX - 24) {
        penalty += 140;
      }

      if (penalty < bestScore) {
        bestScore = penalty;
        bestCand = cand;
      }
    }

    const finalX = px + bestCand.dx;
    const finalY = py + bestCand.dy;
    placedBoxes.push({
      x1: bestCand.anchor === 'start' ? finalX : bestCand.anchor === 'end' ? finalX - estW : finalX - estW / 2,
      y1: finalY - estH + 3,
      x2: bestCand.anchor === 'start' ? finalX + estW : bestCand.anchor === 'end' ? finalX : finalX + estW / 2,
      y2: finalY + 3,
    });

    return {
      ...p,
      px,
      py,
      color,
      labelX: finalX,
      labelY: finalY,
      anchor: bestCand.anchor,
    };
  });

  const labeledCurves = drawn.filter(c => Boolean(c.label && c.label.trim()));

  return (
    <div className="space-y-2.5">
      {/* Légende dédiée hors-grille : élimine 100 % des collisions entre noms de courbes et tracés */}
      {labeledCurves.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2 px-1 pt-0.5">
          {labeledCurves.map((c, idx) => (
            <span
              key={`leg-${idx}`}
              className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-lg border text-[11px] font-extrabold leading-tight shadow-2xs ${LEGEND_PILL_STYLE[c.color]}`}
            >
              <span className={`w-3.5 h-1 rounded-full shrink-0 ${LEGEND_DOT_BG[c.color]}`} />
              <span>{c.label}</span>
            </span>
          ))}
        </div>
      )}

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full max-w-[460px] h-auto mx-auto block select-none"
        shapeRendering="geometricPrecision"
        role="img"
        aria-label={spec.curves.map(c => c.label).filter(Boolean).join(', ') || 'Courbe mathématique'}
      >
        <defs>
          <clipPath id={clipId}>
            <rect x={padLeft - 2} y={padTop - 2} width={plotW + 4} height={plotH + 4} />
          </clipPath>
        </defs>

        {/* Quadrillage fin de repère */}
        <g className={GRID_STROKE} strokeWidth={1} strokeDasharray="3 4">
          {xTicks.map(v => (
            <line key={`gx${v}`} x1={sx(v)} y1={padTop} x2={sx(v)} y2={padTop + plotH} />
          ))}
          {yTicks.map(v => (
            <line key={`gy${v}`} x1={padLeft} y1={sy(v)} x2={padLeft + plotW} y2={sy(v)} />
          ))}
        </g>

        {/* Projections automatiques en pointillés depuis les points d'équilibre intérieurs vers les axes */}
        {autoProjections.map((p, i) => {
          const px = sx(p.x);
          const py = sy(p.y);
          const showVert = !explicitVertX.has(Math.round(p.x * 1000));
          const showHoriz = !explicitHorizY.has(Math.round(p.y * 1000));
          return (
            <g key={`proj-${i}`} className="stroke-slate-400/75 dark:stroke-slate-500/75" strokeWidth={1.2} strokeDasharray="3 3">
              {showVert && <line x1={px} y1={py} x2={px} y2={axisY} />}
              {showHoriz && <line x1={axisX} y1={py} x2={px} y2={py} />}
            </g>
          );
        })}

        {/* Droites repères verticales et horizontales en pointillés */}
        {placedVerticalLabels.map((l, i) => (
          <g key={`vl${i}`}>
            <line
              x1={l.lx}
              y1={padTop}
              x2={l.lx}
              y2={padTop + plotH}
              className={STROKE[l.color || 'slate']}
              strokeWidth={1.4}
              strokeDasharray="5 4"
            />
          </g>
        ))}
        {placedHorizontalLabels.map((l, i) => (
          <g key={`hl${i}`}>
            <line
              x1={padLeft}
              y1={l.ly}
              x2={padLeft + plotW}
              y2={l.ly}
              className={STROKE[l.color || 'slate']}
              strokeWidth={1.4}
              strokeDasharray="5 4"
            />
          </g>
        ))}

        {/* Axes principaux nets avec flèches géométriques exactes */}
        <g className={INK_STROKE} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none">
          <line x1={padLeft - 6} y1={axisY} x2={padLeft + plotW + 12} y2={axisY} />
          <path d={`M${padLeft + plotW + 6} ${axisY - 4} L${padLeft + plotW + 13} ${axisY} L${padLeft + plotW + 6} ${axisY + 4}`} />
          <line x1={axisX} y1={padTop + plotH + 6} x2={axisX} y2={padTop - 12} />
          <path d={`M${axisX - 4} ${padTop - 6} L${axisX} ${padTop - 13} L${axisX + 4} ${padTop - 6}`} />
        </g>

        {/* Graduations numériques avec halo de lisibilité */}
        <g
          className={`${MUTED_FILL} ${HALO_STROKE}`}
          fontSize={9.5}
          fontWeight={600}
          fontFamily="'JetBrains Mono', monospace"
          style={{ paintOrder: 'stroke fill', strokeWidth: 3.5, strokeLinejoin: 'round' }}
        >
          {xTicks.filter((v, i) => v !== 0 && i % xEvery === 0).map(v => (
            <text key={`tx${v}`} x={sx(v)} y={axisY + 14} textAnchor="middle">{fmt(v)}</text>
          ))}
          {yTicks.filter((v, i) => v !== 0 && i % yEvery === 0).map(v => (
            <text key={`ty${v}`} x={axisX - 6} y={sy(v) + 3.5} textAnchor="end">{fmt(v)}</text>
          ))}
          {spec.xMin <= 0 && spec.xMax >= 0 && spec.yMin <= 0 && spec.yMax >= 0 && (
            <text x={sx(0) - 6} y={sy(0) + 14} textAnchor="end">0</text>
          )}
        </g>

        {/* Symboles des axes (x₁ / x₂, Q / P, Y / i, ou x / y) */}
        <g
          className={`${INK_FILL} ${HALO_STROKE}`}
          fontSize={12.5}
          fontWeight={800}
          fontStyle="italic"
          fontFamily="'Cambria Math', 'Times New Roman', serif"
          style={{ paintOrder: 'stroke fill', strokeWidth: 4, strokeLinejoin: 'round' }}
        >
          <text x={padLeft + plotW + 10} y={axisY - 8} textAnchor="end">{xSym}</text>
          <text x={axisX + 8} y={padTop - 4} textAnchor="start">{ySym}</text>
        </g>

        {/* Courbes vectorielles lisses et mathématiquement exactes */}
        <g clipPath={`url(#${clipId})`}>
          {drawn.map((c, i) => (
            <g
              key={`c${i}`}
              className={STROKE[c.color]}
              fill="none"
              strokeWidth={2.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {c.paths.map((d, j) => <path key={j} d={d} />)}
            </g>
          ))}
        </g>

        {/* Extrémités de morceaux : point plein = inclus, rond vide = exclu */}
        {drawn.map((c, i) => c.marks.map((m, j) => (
          <circle
            key={`m${i}-${j}`}
            cx={sx(m.x)}
            cy={sy(m.y)}
            r={m.filled ? 4.4 : 4.2}
            className={`${m.filled ? FILL[c.color] : PAPER_FILL} ${STROKE[c.color]}`}
            strokeWidth={m.filled ? 1.5 : 2.2}
          />
        )))}

        {/* Étiquettes des droites verticales et horizontales (avec halo anti-chevauchement) */}
        {placedVerticalLabels.map((l, i) => l.label ? (
          <text
            key={`vlt-${i}`}
            x={l.labelX}
            y={l.labelY}
            textAnchor={l.anchor}
            fontSize={10}
            fontWeight={800}
            className={`${FILL[l.color || 'slate']} ${HALO_STROKE}`}
            style={{ paintOrder: 'stroke fill', strokeWidth: 4, strokeLinejoin: 'round' }}
          >
            {l.label}
          </text>
        ) : null)}
        {placedHorizontalLabels.map((l, i) => l.label ? (
          <text
            key={`hlt-${i}`}
            x={l.labelX}
            y={l.labelY}
            textAnchor={l.anchor}
            fontSize={10}
            fontWeight={800}
            className={`${FILL[l.color || 'slate']} ${HALO_STROKE}`}
            style={{ paintOrder: 'stroke fill', strokeWidth: 4, strokeLinejoin: 'round' }}
          >
            {l.label}
          </text>
        ) : null)}

        {/* Points remarquables et leurs étiquettes positionnées par le solveur 2D */}
        {placedPoints.map((p, i) => (
          <g key={`p${i}`}>
            <circle
              cx={p.px}
              cy={p.py}
              r={4.8}
              className={`${p.filled === false ? PAPER_FILL : FILL[p.color]} ${ p.filled === false ? STROKE[p.color] : HALO_STROKE }`}
              strokeWidth={2}
            />
            {p.label && (
              <text
                x={p.labelX}
                y={p.labelY}
                textAnchor={p.anchor}
                fontSize={10.5}
                fontWeight={800}
                className={`${FILL[p.color]} ${HALO_STROKE}`}
                style={{ paintOrder: 'stroke fill', strokeWidth: 4.5, strokeLinejoin: 'round' }}
              >
                {p.label}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};

// ----------------------------------------------------------------------------
// 2. TABLEAU DE VARIATION AVEC FLÈCHES (GÉOMÉTRIE NETTE & COLONNES ADAPTATIVES)
// ----------------------------------------------------------------------------

export const SketchVariationTable: React.FC<{ spec: VariationTableSpec }> = ({ spec }) => {
  const arrowId = useSafeId('arw');
  const n = spec.xValues.length;
  if (n < 2 || spec.values.length !== n) return null;

  const W = Math.max(360, 74 + n * 76);
  const labelW = 58;
  const headH = 32;
  const rowH = 104;
  const H = headH + rowH;
  const left = labelW + 26;
  const right = W - 26;
  const colX = (i: number) => left + ((right - left) * i) / (n - 1);
  const levelY = (lvl: VariationLevel) => headH + (lvl === 'top' ? 22 : lvl === 'middle' ? 54 : 88);

  // Ancrages gauche/droite de chaque colonne (une valeur interdite a deux côtés)
  const anchors = spec.values.map((v, i) => {
    const x = colX(i);
    if (v.forbidden) {
      return {
        leftSide: v.left ? { x: x - 10, y: levelY(v.left.level), text: v.left.text, anchor: 'end' as const } : null,
        rightSide: v.right ? { x: x + 10, y: levelY(v.right.level), text: v.right.text, anchor: 'start' as const } : null,
      };
    }
    const p = { x, y: levelY(v.level || 'middle'), text: v.text, anchor: 'middle' as const };
    return { leftSide: p, rightSide: p };
  });

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full max-w-[460px] h-auto mx-auto block select-none"
      shapeRendering="geometricPrecision"
      role="img"
      aria-label="Tableau de variation"
    >
      <defs>
        <marker id={arrowId} viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M0 1 L10 5 L0 9 z" className="fill-blue-600 dark:fill-blue-400" />
        </marker>
      </defs>

      {/* Cadre du tableau */}
      <g className={INK_STROKE} strokeWidth={1.6} fill="none" strokeLinecap="round">
        <rect x={2} y={2} width={W - 4} height={H - 4} rx={8} />
        <line x1={2} y1={headH} x2={W - 2} y2={headH} />
        <line x1={labelW} y1={2} x2={labelW} y2={H - 2} />
      </g>

      {/* En-têtes */}
      <g className={INK_FILL} fontFamily="'Cambria Math', 'Times New Roman', serif" fontSize={13} fontWeight={700}>
        <text x={labelW / 2} y={headH - 10} textAnchor="middle" fontStyle="italic">{spec.xLabel || 'x'}</text>
        <text x={labelW / 2} y={headH + rowH / 2 + 4} textAnchor="middle" fontStyle="italic">{spec.fLabel || 'f(x)'}</text>
        {spec.xValues.map((v, i) => (
          <text key={`xv${i}`} x={colX(i)} y={headH - 10} textAnchor="middle">{v}</text>
        ))}
      </g>

      {/* Doubles barres des valeurs interdites */}
      {spec.values.map((v, i) => v.forbidden ? (
        <g key={`fb${i}`} className={STROKE.orange} strokeWidth={1.8}>
          <line x1={colX(i) - 2.5} y1={headH} x2={colX(i) - 2.5} y2={H - 2} />
          <line x1={colX(i) + 2.5} y1={headH} x2={colX(i) + 2.5} y2={H - 2} />
        </g>
      ) : null)}

      {/* Valeurs de f */}
      <g
        className={`${INK_FILL} ${HALO_STROKE}`}
        fontFamily="'Cambria Math', 'Times New Roman', serif"
        fontSize={12.5}
        fontWeight={700}
        style={{ paintOrder: 'stroke fill', strokeWidth: 3.5, strokeLinejoin: 'round' }}
      >
        {anchors.flatMap((a, i) => {
          const sides = a.leftSide === a.rightSide ? [a.leftSide] : [a.leftSide, a.rightSide];
          return sides.filter((s): s is NonNullable<typeof s> => Boolean(s && s.text)).map((s, k) => (
            <text key={`v${i}-${k}`} x={s.x} y={s.y + 4} textAnchor={s.anchor}>{s.text}</text>
          ));
        })}
      </g>

      {/* Flèches de variation */}
      <g className={STROKE.blue} strokeWidth={2.2} strokeLinecap="round" fill="none">
        {anchors.slice(0, -1).map((a, i) => {
          const from = a.rightSide;
          const to = anchors[i + 1].leftSide;
          if (!from || !to) return null;
          const dx = to.x - from.x;
          const fromPad = from.text ? Math.min(26, Math.max(12, from.text.length * 3.8 + 6)) : 6;
          const toPad = to.text ? Math.min(26, Math.max(12, to.text.length * 3.8 + 6)) : 6;
          const startX = from.x + Math.min(fromPad, dx * 0.28);
          const endX = to.x - Math.min(toPad, dx * 0.28);
          if (endX <= startX + 6) return null;
          const startY = from.y + (from.y < to.y ? 6 : from.y > to.y ? -8 : 0);
          const endY = to.y + (to.y < from.y ? 6 : to.y > from.y ? -8 : 0);
          return <line key={`a${i}`} x1={startX} y1={startY} x2={endX} y2={endY} markerEnd={`url(#${arrowId})`} />;
        })}
      </g>
    </svg>
  );
};

// ----------------------------------------------------------------------------
// 3. TABLEAU DE SIGNES
// ----------------------------------------------------------------------------

export const SketchSignTable: React.FC<{ spec: SignTableSpec }> = ({ spec }) => {
  const n = spec.xValues.length;
  const cols = 2 * n - 1;
  return (
    <div className="overflow-x-auto">
      <div
        className="grid text-sm min-w-[280px] rounded-lg border-2 border-slate-700 dark:border-slate-300 overflow-hidden"
        style={{ gridTemplateColumns: `minmax(64px, auto) repeat(${cols}, minmax(28px, 1fr))` }}
      >
        <div className="px-2 py-1.5 italic font-serif text-slate-800 dark:text-slate-100 border-b-2 border-r-2 border-slate-700 dark:border-slate-300">{spec.xLabel || 'x'}</div>
        {Array.from({ length: cols }, (_, c) => (
          <div key={`h${c}`} className="px-1 py-1.5 text-center font-serif text-slate-800 dark:text-slate-100 border-b-2 border-slate-700 dark:border-slate-300">
            {c % 2 === 0 ? spec.xValues[c / 2] : ''}
          </div>
        ))}
        {spec.rows.map((row, r) => (
          <React.Fragment key={`r${r}`}>
            <div className="px-2 py-1.5 italic font-serif text-slate-800 dark:text-slate-100 border-r-2 border-slate-700 dark:border-slate-300 border-t border-slate-200 dark:border-slate-700">{row.label}</div>
            {Array.from({ length: cols }, (_, c) => {
              const cell = row.cells[c] || '';
              const isSign = cell === '+' || cell === '-' || cell === '−';
              return (
                <div
                  key={`c${r}-${c}`}
                  className={`px-1 py-1.5 text-center font-black border-t border-slate-200 dark:border-slate-700 ${
                    cell === '||' ? 'text-orange-600 dark:text-orange-400' : isSign ? (cell === '+' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400') : 'text-slate-700 dark:text-slate-200'
                  }`}
                >
                  {cell === '-' ? '−' : cell}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
