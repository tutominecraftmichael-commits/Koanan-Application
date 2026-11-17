/**
 * GRAPHIQUE D'UN DOCUMENT DE SUJET, DESSINÉ PAR KONAN (2026-11-17)
 * L'IA ne dessine rien : elle donne les valeurs (tableau du document) et le type de graphique
 * (« courbe » ou « barres »). KONAN trace un graphique net, avec axes, graduations, unités et légende,
 * lisible sur téléphone, en mode jour comme en mode sombre.
 * Tableau attendu : 1re ligne = abscisses (1re case = nom et unité, ex. « t (ms) ») ;
 * lignes suivantes = une série chacune (1re case = nom et unité, ex. « Potentiel (mV) »).
 */
import React from 'react';

export type ChartKind = 'courbe' | 'barres';
type Table = { colonnes: string[]; lignes: string[][] };

const SUPER_DIGITS: Record<string, number> = { '⁰': 0, '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5, '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9 };

/** « −70 », « +30 », « 0,5 » → nombre ; « 10⁻⁹ » → 1e-9 ; sinon NaN (même lecture que le serveur). */
export function chartNumber(raw: unknown): number {
  const s = String(raw ?? '').trim().replace(/[−–]/g, '-').replace(/\s+/g, '').replace(',', '.');
  const pow = s.match(/^10(⁻?)([⁰¹²³⁴⁵⁶⁷⁸⁹]+)$/);
  if (pow) return 10 ** ((pow[1] ? -1 : 1) * Number([...pow[2]].map((c) => SUPER_DIGITS[c]).join('')));
  return /^[+-]?\d+(\.\d+)?$/.test(s) ? Number(s) : NaN;
}

/** Graduations « rondes » (1, 2, 5 × 10ⁿ) qui couvrent [min, max]. */
function niceTicks(min: number, max: number, count = 5): number[] {
  if (min === max) { min -= 1; max += 1; }
  const raw = (max - min) / count;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const n = raw / mag;
  const step = (n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10) * mag;
  const ticks: number[] = [];
  for (let v = Math.floor(min / step) * step; v <= Math.ceil(max / step) * step + step / 2; v += step) ticks.push(Math.round(v / step) * step);
  return ticks;
}

const fr = (v: number) => {
  const r = Math.abs(v) >= 100 ? Math.round(v) : Math.round(v * 100) / 100;
  return String(r).replace('.', ',').replace('-', '−');
};

/** Couleurs des séries : bleu, orange, rose, vert (différentes aussi en clarté). */
const COLORS = ['#0284C7', '#EA580C', '#DB2777', '#059669'];

export const SujetChart: React.FC<{ table: Table; kind: ChartKind; title?: string }> = ({ table, kind, title }) => {
  const xLabels = table.colonnes.slice(1);
  const xValues = xLabels.map(chartNumber);
  const series = table.lignes
    .map((row, i) => ({ label: row[0] || `Série ${i + 1}`, values: row.slice(1).map(chartNumber), color: COLORS[i % COLORS.length] }))
    .filter((s) => s.values.filter(Number.isFinite).length >= 2);
  if (!series.length || xLabels.length < 3) return null;

  // Abscisses en nombres régulièrement croissants : vraie échelle ; sinon (« 0 (témoin) », 10⁻⁹…10⁻⁶) : catégories espacées
  const increasing = xValues.every((v, i) => Number.isFinite(v) && (i === 0 || v > xValues[i - 1]));
  const positive = xValues.filter((v) => v > 0);
  const hugeRange = positive.length > 1 && Math.max(...positive) / Math.min(...positive) > 1000;
  const numericX = kind === 'courbe' && increasing && !hugeRange;

  const all = series.flatMap((s) => s.values.filter(Number.isFinite));
  let yMin = Math.min(...all);
  let yMax = Math.max(...all);
  if (kind === 'barres') { yMin = Math.min(0, yMin); yMax = Math.max(0, yMax); }
  const yTicks = niceTicks(yMin, yMax);
  const y0 = yTicks[0];
  const y1 = yTicks[yTicks.length - 1];

  const W = 340;
  const H = 200;
  const L = 44;
  const R = 12;
  const T = 14;
  const B = 40;
  const pw = W - L - R;
  const ph = H - T - B;
  const n = xLabels.length;
  const xMin = numericX ? xValues[0] : 0;
  const xMax = numericX ? xValues[n - 1] : 1;
  const xAt = (i: number) => (numericX ? L + ((xValues[i] - xMin) / (xMax - xMin || 1)) * pw : L + ((i + 0.5) / n) * pw);
  const yAt = (v: number) => T + ph - ((v - y0) / (y1 - y0 || 1)) * ph;
  const xTicks = numericX ? niceTicks(xMin, xMax, 6).filter((v) => v >= xMin - 1e-9 && v <= xMax + 1e-9) : [];
  // Une étiquette sur deux quand les catégories sont nombreuses
  const showLabel = (i: number) => n <= 7 || i % 2 === 0 || i === n - 1;
  const xTitle = table.colonnes[0] || '';
  const single = series.length === 1;
  const groupW = pw / n;
  const barW = Math.min(26, (groupW * 0.7) / series.length);

  return (
    <figure className="m-0 space-y-1.5">
      {/* Titre de l'axe vertical (une seule série) ou légende (plusieurs séries) */}
      {single ? (
        <p className="m-0 text-[11px] font-bold text-slate-600 dark:text-slate-400">{series[0].label}</p>
      ) : (
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {series.map((s) => (
            <span key={s.label} className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300">
              <span className="w-3.5 h-[3px] rounded-full" style={{ background: s.color }} aria-hidden="true" />
              {s.label}
            </span>
          ))}
        </div>
      )}
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={`${kind === 'courbe' ? 'Courbe' : 'Diagramme'}${title ? ` : ${title}` : ''}`}>
        {/* Quadrillage et graduations verticales */}
        {yTicks.map((v) => (
          <g key={`y${v}`}>
            <line x1={L} x2={W - R} y1={yAt(v)} y2={yAt(v)} className={v === 0 && y0 < 0 ? 'stroke-slate-500 dark:stroke-slate-400' : 'stroke-slate-200 dark:stroke-white/10'} strokeWidth={v === 0 && y0 < 0 ? 1.2 : 1} />
            <text x={L - 6} y={yAt(v) + 3.5} textAnchor="end" fontSize="10" className="fill-slate-500 dark:fill-slate-400">{fr(v)}</text>
          </g>
        ))}
        {/* Axes */}
        <line x1={L} x2={L} y1={T} y2={T + ph} className="stroke-slate-500 dark:stroke-slate-400" strokeWidth="1.2" />
        <line x1={L} x2={W - R} y1={T + ph} y2={T + ph} className="stroke-slate-500 dark:stroke-slate-400" strokeWidth="1.2" />
        {/* Graduations horizontales */}
        {numericX
          ? xTicks.map((v) => {
              const x = L + ((v - xMin) / (xMax - xMin || 1)) * pw;
              return (
                <g key={`x${v}`}>
                  <line x1={x} x2={x} y1={T + ph} y2={T + ph + 4} className="stroke-slate-500 dark:stroke-slate-400" />
                  <text x={x} y={T + ph + 15} textAnchor="middle" fontSize="10" className="fill-slate-500 dark:fill-slate-400">{fr(v)}</text>
                </g>
              );
            })
          : xLabels.map((lab, i) => (showLabel(i) ? (
              <text key={`c${i}`} x={xAt(i)} y={T + ph + 15} textAnchor="middle" fontSize="10" className="fill-slate-500 dark:fill-slate-400">{lab.length > 9 ? `${lab.slice(0, 8)}…` : lab}</text>
            ) : null))}
        <text x={L + pw / 2} y={H - 6} textAnchor="middle" fontSize="10.5" fontWeight="700" className="fill-slate-600 dark:fill-slate-300">{xTitle}</text>

        {/* Données */}
        {kind === 'barres'
          ? series.map((s, si) => s.values.map((v, i) => {
              if (!Number.isFinite(v)) return null;
              const x = L + i * groupW + (groupW - barW * series.length) / 2 + si * barW;
              const top = yAt(Math.max(v, 0));
              const h = Math.abs(yAt(v) - yAt(0));
              return <rect key={`b${si}-${i}`} x={x} y={top} width={barW - 2} height={Math.max(1, h)} rx="2" fill={s.color} />;
            }))
          : series.map((s, si) => {
              const pts = s.values.map((v, i) => (Number.isFinite(v) ? `${xAt(i).toFixed(1)},${yAt(v).toFixed(1)}` : null)).filter(Boolean);
              return (
                <g key={`s${si}`}>
                  <polyline points={pts.join(' ')} fill="none" stroke={s.color} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
                  {s.values.map((v, i) => (Number.isFinite(v) ? <circle key={i} cx={xAt(i)} cy={yAt(v)} r="2.6" fill={s.color} /> : null))}
                </g>
              );
            })}
      </svg>
    </figure>
  );
};
