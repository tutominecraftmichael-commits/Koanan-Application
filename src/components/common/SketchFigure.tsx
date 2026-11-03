// ============================================================================
// FIGURES « DESSINÉES AU FEUTRE » (style Duolingo, mais mathématiquement exactes)
// Les courbes sont CALCULÉES par le code à partir de l'expression de la fonction :
// seul le trait est légèrement tremblé. Jamais d'image IA pour une courbe.
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
  orange: 'stroke-orange-600 dark:stroke-orange-400',
  slate: 'stroke-slate-500 dark:stroke-slate-400',
};
const FILL: Record<SketchColor, string> = {
  blue: 'fill-blue-600 dark:fill-blue-400',
  violet: 'fill-violet-600 dark:fill-violet-400',
  green: 'fill-emerald-600 dark:fill-emerald-400',
  orange: 'fill-orange-600 dark:fill-orange-400',
  slate: 'fill-slate-500 dark:fill-slate-400',
};
const CURVE_ORDER: SketchColor[] = ['blue', 'orange', 'violet', 'green'];
const INK_STROKE = 'stroke-slate-700 dark:stroke-slate-300';
const INK_FILL = 'fill-slate-700 dark:fill-slate-200';
const MUTED_FILL = 'fill-slate-500 dark:fill-slate-400';
const GRID_STROKE = 'stroke-slate-200 dark:stroke-slate-700';
const PAPER_FILL = 'fill-white dark:fill-slate-900';

/** Nombre au format français : virgule décimale et vrai signe moins. */
function fmt(n: number): string {
  const rounded = Math.round(n * 1000) / 1000;
  return String(rounded).replace('.', ',').replace('-', '−');
}

function useSafeId(prefix: string): string {
  const raw = useId();
  return `${prefix}${raw.replace(/[^a-zA-Z0-9_-]/g, '')}`;
}

/** Filtre SVG qui fait trembler légèrement le trait, comme un feutre sur un cahier. */
const SketchFilterDef: React.FC<{ id: string }> = ({ id }) => (
  <filter id={id} x="-5%" y="-5%" width="110%" height="110%">
    <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" />
    <feDisplacementMap in="SourceGraphic" scale="2.6" />
  </filter>
);

// ----------------------------------------------------------------------------
// 1. COURBES DE FONCTIONS
// ----------------------------------------------------------------------------

export const SketchFunctionPlot: React.FC<{ spec: FunctionPlotSpec }> = ({ spec }) => {
  const filterId = useSafeId('sk');
  const clipId = useSafeId('clip');

  const W = 320;
  const M = 26;
  const xSpan = spec.xMax - spec.xMin;
  const ySpan = spec.yMax - spec.yMin;
  const valid = xSpan > 0 && ySpan > 0;
  const H = valid ? Math.round(Math.min(300, Math.max(190, (W - 2 * M) * Math.min(1.3, ySpan / xSpan) + 2 * M))) : 200;

  const sx = (x: number) => M + ((x - spec.xMin) / xSpan) * (W - 2 * M);
  const sy = (y: number) => H - M - ((y - spec.yMin) / ySpan) * (H - 2 * M);

  const drawn = useMemo(() => {
    if (!valid) return [];
    return spec.curves.map((curve, cIdx) => {
      const color = curve.color || CURVE_ORDER[cIdx % CURVE_ORDER.length];
      const paths: string[] = [];
      const marks: { x: number; y: number; filled: boolean }[] = [];
      let lastVisible: { x: number; y: number } | null = null;

      for (const piece of curve.pieces) {
        const fn = tryCompileExpression(piece.expr);
        if (!fn) continue;
        const a = Math.max(piece.from ?? spec.xMin, spec.xMin);
        const b = Math.min(piece.to ?? spec.xMax, spec.xMax);
        if (b <= a) continue;

        const N = 220;
        let d = '';
        let prevY: number | null = null;
        for (let i = 0; i <= N; i++) {
          const x = a + ((b - a) * i) / N;
          const y = fn(x);
          const jump = prevY !== null && Math.abs(y - prevY) > ySpan * 3;
          if (!Number.isFinite(y) || Math.abs(y) > 1e6 || jump) {
            prevY = Number.isFinite(y) ? y : null;
            if (d) { paths.push(d); d = ''; }
            if (!Number.isFinite(y)) continue;
          }
          d += `${d ? 'L' : 'M'}${sx(x).toFixed(1)} ${sy(y).toFixed(1)} `;
          prevY = y;
          if (y >= spec.yMin && y <= spec.yMax) lastVisible = { x, y };
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
      return { color, paths, marks, label: curve.label, lastVisible };
    });
  }, [spec, valid]);

  if (!valid) return null;

  const xStep = spec.xStep || 1;
  const yStep = spec.yStep || 1;
  const xTicks: number[] = [];
  for (let v = Math.ceil(spec.xMin / xStep) * xStep; v <= spec.xMax + 1e-9; v += xStep) xTicks.push(Math.round(v * 1e6) / 1e6);
  const yTicks: number[] = [];
  for (let v = Math.ceil(spec.yMin / yStep) * yStep; v <= spec.yMax + 1e-9; v += yStep) yTicks.push(Math.round(v * 1e6) / 1e6);
  const xEvery = Math.max(1, Math.ceil(xTicks.length / 9));
  const yEvery = Math.max(1, Math.ceil(yTicks.length / 7));

  // Axes : sur 0 s'il est visible, sinon sur le bord
  const axisY = spec.yMin <= 0 && spec.yMax >= 0 ? sy(0) : sy(spec.yMin);
  const axisX = spec.xMin <= 0 && spec.xMax >= 0 ? sx(0) : sx(spec.xMin);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-[380px] h-auto mx-auto" role="img" aria-label={spec.curves.map(c => c.label).filter(Boolean).join(', ') || 'Courbe'}>
      <defs>
        <SketchFilterDef id={filterId} />
        <clipPath id={clipId}><rect x={M - 2} y={M - 2} width={W - 2 * M + 4} height={H - 2 * M + 4} /></clipPath>
      </defs>

      {/* Quadrillage de cahier */}
      <g className={GRID_STROKE} strokeWidth={1} strokeDasharray="2 4">
        {xTicks.map(v => <line key={`gx${v}`} x1={sx(v)} y1={M} x2={sx(v)} y2={H - M} />)}
        {yTicks.map(v => <line key={`gy${v}`} x1={M} y1={sy(v)} x2={W - M} y2={sy(v)} />)}
      </g>

      {/* Axes avec flèches */}
      <g filter={`url(#${filterId})`} className={INK_STROKE} strokeWidth={1.8} strokeLinecap="round" fill="none">
        <line x1={M - 8} y1={axisY} x2={W - M + 10} y2={axisY} />
        <path d={`M${W - M + 4} ${axisY - 4} L${W - M + 11} ${axisY} L${W - M + 4} ${axisY + 4}`} />
        <line x1={axisX} y1={H - M + 8} x2={axisX} y2={M - 10} />
        <path d={`M${axisX - 4} ${M - 4} L${axisX} ${M - 11} L${axisX + 4} ${M - 4}`} />
      </g>

      {/* Graduations */}
      <g className={MUTED_FILL} fontSize={9} fontFamily="'JetBrains Mono', monospace">
        {xTicks.filter((v, i) => v !== 0 && i % xEvery === 0).map(v => (
          <text key={`tx${v}`} x={sx(v)} y={axisY + 12} textAnchor="middle">{fmt(v)}</text>
        ))}
        {yTicks.filter((v, i) => v !== 0 && i % yEvery === 0).map(v => (
          <text key={`ty${v}`} x={axisX - 4} y={sy(v) + 3} textAnchor="end">{fmt(v)}</text>
        ))}
        {spec.xMin <= 0 && spec.xMax >= 0 && spec.yMin <= 0 && spec.yMax >= 0 && (
          <text x={sx(0) - 4} y={sy(0) + 12} textAnchor="end">O</text>
        )}
      </g>
      <g className={INK_FILL} fontSize={12} fontStyle="italic" fontFamily="'Cambria Math', 'Times New Roman', serif">
        <text x={W - M + 4} y={axisY - 7}>x</text>
        <text x={axisX + 6} y={M - 4}>y</text>
      </g>

      {/* Droites repères en pointillés */}
      {(spec.verticalLines || []).map((l, i) => (
        <g key={`vl${i}`}>
          <line x1={sx(l.x)} y1={M} x2={sx(l.x)} y2={H - M} className={STROKE[l.color || 'slate']} strokeWidth={1.4} strokeDasharray="5 4" />
          {l.label && <text x={sx(l.x) + 4} y={M + 10} fontSize={10} fontWeight={700} className={FILL[l.color || 'slate']}>{l.label}</text>}
        </g>
      ))}
      {(spec.horizontalLines || []).map((l, i) => (
        <g key={`hl${i}`}>
          <line x1={M} y1={sy(l.y)} x2={W - M} y2={sy(l.y)} className={STROKE[l.color || 'slate']} strokeWidth={1.4} strokeDasharray="5 4" />
          {l.label && <text x={W - M - 2} y={sy(l.y) - 4} textAnchor="end" fontSize={10} fontWeight={700} className={FILL[l.color || 'slate']}>{l.label}</text>}
        </g>
      ))}

      {/* Courbes */}
      <g clipPath={`url(#${clipId})`}>
        {drawn.map((c, i) => (
          <g key={`c${i}`} filter={`url(#${filterId})`} className={STROKE[c.color]} fill="none" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round">
            {c.paths.map((d, j) => <path key={j} d={d} />)}
          </g>
        ))}
      </g>

      {/* Extrémités : point plein = inclus, rond vide = exclu */}
      {drawn.map((c, i) => c.marks.map((m, j) => (
        <circle
          key={`m${i}-${j}`}
          cx={sx(m.x)}
          cy={sy(m.y)}
          r={m.filled ? 4.6 : 4.2}
          className={`${m.filled ? FILL[c.color] : PAPER_FILL} ${STROKE[c.color]}`}
          strokeWidth={m.filled ? 0 : 2.2}
        />
      )))}

      {/* Points nommés */}
      {(spec.points || []).map((p, i) => {
        const color = p.color || 'violet';
        const right = sx(p.x) < W - 90;
        return (
          <g key={`p${i}`}>
            <circle cx={sx(p.x)} cy={sy(p.y)} r={4.4} className={`${p.filled === false ? PAPER_FILL : FILL[color]} ${STROKE[color]}`} strokeWidth={p.filled === false ? 2.2 : 0} />
            {p.label && (
              <text x={sx(p.x) + (right ? 7 : -7)} y={sy(p.y) - 7} textAnchor={right ? 'start' : 'end'} fontSize={10.5} fontWeight={700} className={FILL[color]}>{p.label}</text>
            )}
          </g>
        );
      })}

      {/* Étiquettes des courbes */}
      {drawn.map((c, i) => c.label && c.lastVisible ? (
        <text
          key={`l${i}`}
          x={Math.min(sx(c.lastVisible.x), W - M) - 4}
          y={Math.max(M + 10, Math.min(H - M - 4, sy(c.lastVisible.y) - 8))}
          textAnchor="end"
          fontSize={11.5}
          fontWeight={800}
          className={FILL[c.color]}
        >
          {c.label}
        </text>
      ) : null)}
    </svg>
  );
};

// ----------------------------------------------------------------------------
// 2. TABLEAU DE VARIATION AVEC FLÈCHES
// ----------------------------------------------------------------------------

export const SketchVariationTable: React.FC<{ spec: VariationTableSpec }> = ({ spec }) => {
  const filterId = useSafeId('skv');
  const arrowId = useSafeId('arw');
  const n = spec.xValues.length;
  if (n < 2 || spec.values.length !== n) return null;

  const W = 320;
  const labelW = 54;
  const headH = 30;
  const rowH = 100;
  const H = headH + rowH;
  const left = labelW + 22;
  const right = W - 22;
  const colX = (i: number) => left + ((right - left) * i) / (n - 1);
  const levelY = (lvl: VariationLevel) => headH + (lvl === 'top' ? 20 : lvl === 'middle' ? 52 : 86);

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
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-[380px] h-auto mx-auto" role="img" aria-label="Tableau de variation">
      <defs>
        <SketchFilterDef id={filterId} />
        <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="fill-blue-600 dark:fill-blue-400" />
        </marker>
      </defs>

      {/* Cadre du tableau */}
      <g filter={`url(#${filterId})`} className={INK_STROKE} strokeWidth={1.6} fill="none" strokeLinecap="round">
        <rect x={2} y={2} width={W - 4} height={H - 4} rx={6} />
        <line x1={2} y1={headH} x2={W - 2} y2={headH} />
        <line x1={labelW} y1={2} x2={labelW} y2={H - 2} />
      </g>

      {/* En-têtes */}
      <g className={INK_FILL} fontFamily="'Cambria Math', 'Times New Roman', serif" fontSize={13}>
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
      <g className={INK_FILL} fontFamily="'Cambria Math', 'Times New Roman', serif" fontSize={13} fontWeight={600}>
        {anchors.flatMap((a, i) => {
          const sides = a.leftSide === a.rightSide ? [a.leftSide] : [a.leftSide, a.rightSide];
          return sides.filter((s): s is NonNullable<typeof s> => Boolean(s && s.text)).map((s, k) => (
            <text key={`v${i}-${k}`} x={s.x} y={s.y + 4} textAnchor={s.anchor}>{s.text}</text>
          ));
        })}
      </g>

      {/* Flèches de variation */}
      <g filter={`url(#${filterId})`} className={STROKE.blue} strokeWidth={2.4} strokeLinecap="round" fill="none">
        {anchors.slice(0, -1).map((a, i) => {
          const from = a.rightSide;
          const to = anchors[i + 1].leftSide;
          if (!from || !to) return null;
          const dx = to.x - from.x;
          const startX = from.x + (from.text ? Math.min(16, dx * 0.18) : 4);
          const endX = to.x - (to.text ? Math.min(16, dx * 0.18) : 4);
          const startY = from.y + (from.y < to.y ? 6 : from.y > to.y ? -10 : -4);
          const endY = to.y + (to.y < from.y ? 6 : to.y > from.y ? -10 : -4);
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
