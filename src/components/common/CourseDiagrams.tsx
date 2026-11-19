import React from 'react';
import type {
  BarChartSpec,
  CycleDiagramSpec,
  FlowchartSpec,
  LayeredStackSpec,
  Matrix2x2Spec,
  MatrixQuadrantSpec,
  SketchColor,
} from '../../lib/curriculum/types';

const COLOR_STYLES: Record<
  SketchColor,
  {
    fill: string;
    stroke: string;
    bg: string;
    border: string;
    text: string;
    badge: string;
  }
> = {
  blue: {
    fill: '#0EA5E9',
    stroke: '#0284C7',
    bg: 'bg-sky-50/90 dark:bg-sky-950/35',
    border: 'border-sky-300 dark:border-sky-500/40',
    text: 'text-sky-900 dark:text-sky-200',
    badge: 'bg-sky-600 text-white dark:bg-sky-500',
  },
  violet: {
    fill: '#8B5CF6',
    stroke: '#6D28D9',
    bg: 'bg-violet-50/90 dark:bg-violet-950/35',
    border: 'border-violet-300 dark:border-violet-500/40',
    text: 'text-violet-900 dark:text-violet-200',
    badge: 'bg-violet-600 text-white dark:bg-violet-500',
  },
  green: {
    fill: '#10B981',
    stroke: '#059669',
    bg: 'bg-emerald-50/90 dark:bg-emerald-950/35',
    border: 'border-emerald-300 dark:border-emerald-500/40',
    text: 'text-emerald-900 dark:text-emerald-200',
    badge: 'bg-emerald-600 text-white dark:bg-emerald-500',
  },
  orange: {
    fill: '#F59E0B',
    stroke: '#D97706',
    bg: 'bg-amber-50/90 dark:bg-amber-950/35',
    border: 'border-amber-300 dark:border-amber-500/40',
    text: 'text-amber-900 dark:text-amber-200',
    badge: 'bg-amber-600 text-white dark:bg-amber-500',
  },
  slate: {
    fill: '#64748B',
    stroke: '#475569',
    bg: 'bg-slate-50 dark:bg-slate-800/70',
    border: 'border-slate-300 dark:border-slate-700',
    text: 'text-slate-900 dark:text-slate-200',
    badge: 'bg-slate-600 text-white dark:bg-slate-500',
  },
};

const COLOR_CYCLE: SketchColor[] = ['blue', 'violet', 'green', 'orange', 'slate'];

function getPalette(color?: SketchColor, index = 0) {
  return COLOR_STYLES[color ?? COLOR_CYCLE[index % COLOR_CYCLE.length]];
}

/**
 * 1. Diagramme en barres / Histogramme vectoriel SVG net
 */
export const SketchBarChart: React.FC<{ spec: BarChartSpec }> = ({ spec }) => {
  const bars = spec.bars || [];
  if (bars.length === 0) return null;

  const maxVal = Math.max(...bars.map((b) => Math.abs(b.value)), 1);
  const svgW = Math.max(360, bars.length * 76 + 70);
  const svgH = 220;
  const padLeft = 48;
  const padRight = 20;
  const padTop = 28;
  const padBottom = 46;
  const chartW = svgW - padLeft - padRight;
  const chartH = svgH - padTop - padBottom;
  const slotW = chartW / bars.length;
  const barW = Math.min(44, slotW * 0.62);

  const ticks = [0, 0.25, 0.5, 0.75, 1];

  return (
    <div className="w-full overflow-x-auto rounded-xl bg-white dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 p-2">
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        className="w-full max-w-[560px] mx-auto block"
        role="img"
        aria-label={spec.yLabel || 'Diagramme en barres'}
      >
        {/* Grid lines & Y axis */}
        {ticks.map((t, i) => {
          const y = padTop + chartH * (1 - t);
          const v = Math.round(maxVal * t * 10) / 10;
          return (
            <g key={i}>
              <line
                x1={padLeft}
                y1={y}
                x2={svgW - padRight}
                y2={y}
                stroke="currentColor"
                className="text-slate-200 dark:text-slate-800"
                strokeDasharray={t === 0 ? undefined : '4 4'}
                strokeWidth={t === 0 ? 1.5 : 1}
              />
              <text
                x={padLeft - 8}
                y={y + 4}
                textAnchor="end"
                className="fill-slate-500 dark:fill-slate-400"
                fontSize="10"
                fontWeight="600"
              >
                {v}
              </text>
            </g>
          );
        })}

        {/* Y axis line */}
        <line
          x1={padLeft}
          y1={padTop}
          x2={padLeft}
          y2={padTop + chartH}
          stroke="currentColor"
          className="text-slate-400 dark:text-slate-600"
          strokeWidth="1.5"
        />

        {spec.yLabel && (
          <text
            x={padLeft + 4}
            y={14}
            className="fill-slate-600 dark:fill-slate-300"
            fontSize="10"
            fontWeight="700"
          >
            {spec.yLabel}
            {spec.unit ? ` (${spec.unit})` : ''}
          </text>
        )}

        {/* Bars */}
        {bars.map((bar, idx) => {
          const pal = getPalette(bar.color, idx);
          const h = Math.max(4, (Math.max(0, bar.value) / maxVal) * chartH);
          const x = padLeft + idx * slotW + (slotW - barW) / 2;
          const y = padTop + chartH - h;
          const labelLines = bar.label.length > 13 ? bar.label.split(' ').reduce<string[]>((acc, word) => {
            const last = acc[acc.length - 1];
            if (last && (last + ' ' + word).length <= 13) acc[acc.length - 1] = last + ' ' + word;
            else acc.push(word);
            return acc;
          }, []).slice(0, 2) : [bar.label];

          return (
            <g key={idx}>
              <rect
                x={x}
                y={y}
                width={barW}
                height={h}
                rx="6"
                fill={pal.fill}
                fillOpacity="0.88"
                stroke={pal.stroke}
                strokeWidth="1.5"
              />
              <text
                x={x + barW / 2}
                y={y - 6}
                textAnchor="middle"
                className="fill-slate-800 dark:fill-slate-100"
                fontSize="10.5"
                fontWeight="800"
              >
                {bar.annotation || `${bar.value}${spec.unit ? ` ${spec.unit}` : ''}`}
              </text>
              {labelLines.map((ln, lIdx) => (
                <text
                  key={lIdx}
                  x={x + barW / 2}
                  y={padTop + chartH + 15 + lIdx * 12}
                  textAnchor="middle"
                  className="fill-slate-600 dark:fill-slate-300"
                  fontSize="10"
                  fontWeight="600"
                >
                  {ln}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/**
 * 2. Organigramme / Processus pas à pas (Algorithmique, Droit, Finance, Gestion)
 */
export const SketchFlowchart: React.FC<{ spec: FlowchartSpec }> = ({ spec }) => {
  const steps = spec.steps || [];
  if (steps.length === 0) return null;

  const isHorizontal = spec.direction === 'horizontal';

  return (
    <div
      className={
        isHorizontal
          ? 'flex flex-wrap items-center justify-center gap-2 py-2'
          : 'flex flex-col items-center gap-1.5 py-2'
      }
    >
      {steps.map((node, idx) => {
        const pal = getPalette(node.color, idx);
        const isStartEnd = node.kind === 'start' || node.kind === 'end';
        const isDecision = node.kind === 'decision';

        return (
          <React.Fragment key={node.id || idx}>
            <div className="flex flex-col items-center max-w-full">
              <div
                className={`px-3.5 py-2 border-2 text-center shadow-2xs transition-colors ${pal.bg} ${pal.border} ${
                  isStartEnd
                    ? 'rounded-full px-5'
                    : isDecision
                    ? 'rounded-xl border-dashed'
                    : 'rounded-xl'
                } ${isHorizontal ? 'min-w-[120px] max-w-[180px]' : 'w-full max-w-[360px]'}`}
              >
                <div className={`text-xs font-extrabold leading-snug ${pal.text}`}>
                  {isDecision && <span className="mr-1 text-[10px] uppercase opacity-75">◆ SI</span>}
                  {node.label}
                </div>
                {node.sublabel && (
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium mt-0.5 leading-snug">
                    {node.sublabel}
                  </div>
                )}
              </div>

              {node.branchLabel && node.branchTarget && (
                <div className="mt-1 flex items-center gap-1.5 text-[10.5px] font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-700/50 rounded-lg px-2.5 py-0.5">
                  <span>↳ {node.branchLabel} :</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">{node.branchTarget}</span>
                </div>
              )}
            </div>

            {idx < steps.length - 1 && (
              <div
                className={`flex items-center justify-center text-slate-400 dark:text-slate-500 font-black select-none ${
                  isHorizontal ? 'text-sm px-0.5' : 'text-xs leading-none py-0.5'
                }`}
                aria-hidden="true"
              >
                {isHorizontal ? '→' : '↓'}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

/**
 * 3. Architecture en couches ou Pyramide (Modèle OSI 7 couches, TCP/IP, Maslow, Cascade des coûts)
 */
export const SketchLayeredStack: React.FC<{ spec: LayeredStackSpec }> = ({ spec }) => {
  const layers = spec.layers || [];
  if (layers.length === 0) return null;
  const isPyramid = spec.style === 'pyramid';

  return (
    <div className="flex flex-col items-center gap-1.5 py-1.5">
      {layers.map((layer, idx) => {
        const pal = getPalette(layer.color, idx);
        const widthPct = isPyramid
          ? Math.round(52 + (idx / Math.max(1, layers.length - 1)) * 48)
          : 100;

        return (
          <div
            key={idx}
            style={{ width: `${widthPct}%` }}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border-2 ${pal.bg} ${pal.border} shadow-2xs`}
          >
            {layer.badge && (
              <span className={`text-[10px] font-black px-2 py-0.5 rounded-md shrink-0 ${pal.badge}`}>
                {layer.badge}
              </span>
            )}
            <div className="min-w-0 flex-1">
              <div className={`text-xs font-extrabold leading-tight ${pal.text}`}>{layer.title}</div>
              {layer.subtitle && (
                <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-snug mt-0.5">
                  {layer.subtitle}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

/**
 * 4. Matrice 2×2 (SWOT, Eisenhower, BCG, Hume, Structures de marché)
 */
export const SketchMatrix2x2: React.FC<{ spec: Matrix2x2Spec }> = ({ spec }) => {
  const renderCell = (q: MatrixQuadrantSpec, fallbackColor: SketchColor) => {
    const pal = getPalette(q.color ?? fallbackColor);
    return (
      <div className={`p-3 rounded-xl border-2 ${pal.bg} ${pal.border} space-y-1.5`}>
        <div className={`text-xs font-black uppercase tracking-wide ${pal.text}`}>{q.title}</div>
        <ul className="space-y-1">
          {q.items.map((item, i) => (
            <li
              key={i}
              className="text-[11px] text-slate-700 dark:text-slate-200 font-medium leading-snug flex items-start gap-1.5"
            >
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-current opacity-60 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="space-y-2 py-1">
      {spec.topAxis && (
        <div className="grid grid-cols-2 gap-2 text-center text-[10.5px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
          <div>{spec.topAxis[0]}</div>
          <div>{spec.topAxis[1]}</div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {renderCell(spec.topLeft, 'green')}
        {renderCell(spec.topRight, 'orange')}
        {renderCell(spec.bottomLeft, 'blue')}
        {renderCell(spec.bottomRight, 'violet')}
      </div>
    </div>
  );
};

/**
 * 5. Schéma cyclique / Circuit fermé (Circuit économique, PDCA, Effets de réseau, Cycle de vie)
 */
export const SketchCycleDiagram: React.FC<{ spec: CycleDiagramSpec }> = ({ spec }) => {
  const nodes = spec.nodes || [];
  if (nodes.length === 0) return null;

  return (
    <div className="space-y-2.5 py-1.5">
      {spec.centerLabel && (
        <div className="mx-auto w-fit px-4 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/40 text-center">
          <div className="text-xs font-black text-sky-800 dark:text-sky-300">{spec.centerLabel}</div>
          {spec.centerSublabel && (
            <div className="text-[10.5px] font-medium text-slate-600 dark:text-slate-400">
              {spec.centerSublabel}
            </div>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {nodes.map((node, idx) => {
          const pal = getPalette(node.color, idx);
          return (
            <div
              key={idx}
              className={`p-2.5 rounded-xl border-2 ${pal.bg} ${pal.border} flex items-start gap-2.5`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 ${pal.badge}`}>
                {idx + 1}
              </span>
              <div className="min-w-0 flex-1">
                <div className={`text-xs font-extrabold leading-tight ${pal.text}`}>{node.title}</div>
                {node.subtitle && (
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium mt-0.5 leading-snug">
                    {node.subtitle}
                  </div>
                )}
              </div>
              <span className="text-xs font-black text-slate-400 dark:text-slate-500 self-center" aria-hidden="true">
                {idx < nodes.length - 1 ? '→' : '↺'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
