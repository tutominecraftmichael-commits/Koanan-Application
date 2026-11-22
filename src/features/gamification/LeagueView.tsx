import React from 'react';
import { ArrowDown, ArrowUp, Crown, Info, Lock, Trophy, X } from 'lucide-react';
import type { LeagueBoard } from '../../services/leagueApi';
import { DIVISION_STYLES } from '../../services/leagueApi';
import { AnimatedAvatar } from '../avatar/AnimatedAvatar';

/**
 * Ligue : carte du tableau de bord + écran du classement de la semaine.
 * Les données viennent du serveur (/api/league) : XP vérifiés, groupes de 30, divisions.
 */

const DIVISION_ORDER = [1, 2, 3, 4, 5];
/** Couleur pleine de chaque division (badge hexagonal de la maquette) */
const HEX_COLORS: Record<number, string> = { 1: '#B45309', 2: '#94A3B8', 3: '#F5C451', 4: '#38BDF8', 5: '#F472B6' };
const EXCELLENCE_COUNT = 5;
const PROMOTE_COUNT = 15;
const ordinal = (n: number) => (n === 1 ? '1er' : `${n}e`);

export function timeLeftLabel(endsAt: number, now = Date.now()): string {
  const ms = Math.max(0, endsAt - now);
  const d = Math.floor(ms / 86_400_000);
  const h = Math.floor((ms % 86_400_000) / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  if (d > 0) return `${d} j ${h} h`;
  if (h > 0) return `${h} h ${String(m).padStart(2, '0')}`;
  return `${m} min`;
}

export const DivisionBadge: React.FC<{ division: number; size?: number }> = ({ division, size = 40 }) => {
  const st = DIVISION_STYLES[division] || DIVISION_STYLES[1];
  return (
    <span className={`inline-flex items-center justify-center rounded-full text-white shadow-md ring-4 ${st.badge} ${st.ring}`} style={{ width: size, height: size }} aria-label={`Division ${st.name}`}>
      <Trophy style={{ width: size * 0.5, height: size * 0.5 }} />
    </span>
  );
};

/**
 * Zone d'un rang façon Duolingo :
 * - 1 à 5 : Zone d'excellence (jaune gold, montée en grade + élite)
 * - 6 à 15 (15 premiers) : Zone de montée (vert, montée en grade ou maintien en Perle)
 * - 16 et + (16 derniers) : Zone de relégation (rouge, descente de division)
 */
function zoneOf(board: LeagueBoard, rank: number): 'excellence' | 'up' | 'keep' | 'down' {
  const promoteLimit = Math.max(board.promoteCount || 0, board.keepCount || 0, PROMOTE_COUNT);
  if (rank <= EXCELLENCE_COUNT) return 'excellence';
  if (rank <= promoteLimit) return board.division === 5 ? 'keep' : 'up';
  return 'down';
}

/** Raison lisible d'un échec de chargement de la ligue. */
function leagueErrorLabel(error: string): string {
  if (!error || /connexion Internet|fetch|network/i.test(error)) return 'Ligue : pas de connexion Internet, je réessaie dès que possible.';
  if (/HTTP 404/.test(error)) return 'Ligue pas encore disponible sur ce serveur (mise en ligne à faire).';
  if (/UNAUTHORIZED|TOKEN/i.test(error)) return 'Ligue : reconnecte-toi à ton compte pour voir ton classement.';
  if (/MISSING_SERVICE_ACCOUNT_KEY/.test(error)) return 'Ligue : serveur mal configuré (clé Firebase manquante).';
  return `Ligue momentanément indisponible (${error}). Je réessaie dans 2 minutes.`;
}

export const LeagueCard: React.FC<{ board: LeagueBoard | null; hasCourses?: boolean; offline: boolean; errorText?: string; onOpen: () => void }> = ({ board, hasCourses = true, offline, errorText = '', onOpen }) => {
  // Classe non admise dans la ligue (collège, ou classe pas encore indiquée). LMD et BTS y sont, au chronomètre.
  if (!hasCourses || board?.reason === 'no_courses') {
    return (
      <div className="rounded-2xl border-2 border-slate-200 dark:border-slate-700/70 bg-white dark:bg-slate-900/70 p-3.5 sm:p-4 flex items-center gap-3">
        <span className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center shrink-0"><Lock className="w-5 h-5 text-slate-500" /></span>
        <div className="min-w-0">
          <p className="text-sm font-black text-slate-900 dark:text-white">Ligue pas encore ouverte pour ta classe</p>
          <p className="text-xs text-slate-600 dark:text-slate-300">La ligue est ouverte de la Seconde à la Terminale, et aux étudiants LMD et BTS. Si tu es dans l’une de ces classes, indique ta classe exacte en réimportant ton emploi du temps.</p>
        </div>
      </div>
    );
  }
  if (!board) {
    return (
      <div className="rounded-2xl border-2 border-slate-200 dark:border-slate-700/70 bg-white dark:bg-slate-900/70 p-3.5 sm:p-4 text-sm font-bold text-slate-600 dark:text-slate-300">
        {offline ? leagueErrorLabel(errorText) : 'Je charge ta ligue…'}
      </div>
    );
  }
  const me = board.rows.find((r) => r.me);
  const size = board.rows.length;
  const zone = me ? zoneOf(board, me.rank) : null;
  const st = DIVISION_STYLES[board.division];
  return (
    <button type="button" onClick={onOpen} className="w-full text-left rounded-2xl border-2 border-slate-200 dark:border-slate-700/70 bg-white dark:bg-slate-900/70 p-3.5 sm:p-4 flex items-center gap-3 cursor-pointer hover:border-slate-300 dark:hover:border-slate-600">
      <DivisionBadge division={board.division} />
      <div className="min-w-0 flex-1">
        <p className={`text-[11px] font-black uppercase tracking-wider ${st.text}`}>Division {st.name}</p>
        <p className="text-base font-black text-slate-900 dark:text-white">
          {me ? `${ordinal(me.rank)} sur ${size}` : 'Classement en cours'} · <span className="tabular-nums">{board.weekXp} XP</span>
        </p>
        <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
          {zone === 'excellence' && <span className="text-amber-600 dark:text-[#F5C451] font-extrabold">Zone d’excellence ★ (Montée) · </span>}
          {zone === 'up' && <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">Zone de montée ▲ · </span>}
          {zone === 'keep' && <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">Maintien en Perle ✓ · </span>}
          {zone === 'down' && <span className="text-rose-600 dark:text-rose-400 font-extrabold">Zone de relégation ▼ · </span>}
          Fin dans {timeLeftLabel(board.endsAt)}
        </p>
      </div>
      <span className="text-xs font-black text-sky-600 dark:text-sky-400 whitespace-nowrap">Classement ›</span>
    </button>
  );
};

/** Résultat de la semaine passée (une fois). */
export const LeagueResultBanner: React.FC<{ board: LeagueBoard; onClose: () => void }> = ({ board, onClose }) => {
  const r = board.lastResult;
  if (!r) return null;
  const to = DIVISION_STYLES[r.toDivision]?.name;
  const text = r.movement === 'up'
    ? `Semaine terminée : ${ordinal(r.rank)} sur ${r.size}. Tu montes en division ${to} !`
    : r.movement === 'down'
      ? `Semaine terminée : ${ordinal(r.rank)} sur ${r.size}. Tu redescends en division ${to}. Reprends ta place cette semaine !`
      : `Semaine terminée : ${ordinal(r.rank)} sur ${r.size}. Tu restes en division ${to}.`;
  return (
    <div className={`rounded-2xl border-2 p-3 flex items-start gap-2 text-sm font-bold ${r.movement === 'up' ? 'bg-emerald-50 border-emerald-300 text-emerald-900 dark:bg-emerald-500/10 dark:border-emerald-500/40 dark:text-emerald-200' : r.movement === 'down' ? 'bg-rose-50 border-rose-300 text-rose-900 dark:bg-rose-500/10 dark:border-rose-500/40 dark:text-rose-200' : 'bg-slate-50 border-slate-200 text-slate-800 dark:bg-slate-800/60 dark:border-slate-700 dark:text-slate-200'}`}>
      {r.movement === 'up' ? <ArrowUp className="w-5 h-5 shrink-0" /> : r.movement === 'down' ? <ArrowDown className="w-5 h-5 shrink-0" /> : <Trophy className="w-5 h-5 shrink-0" />}
      <span className="flex-1">{text}</span>
      <button type="button" onClick={onClose} aria-label="Fermer" className="p-0.5 rounded cursor-pointer opacity-70 hover:opacity-100"><X className="w-4 h-4" /></button>
    </div>
  );
};

/**
 * Page Ligue (onglet trophée de la barre du bas) : résultat de la semaine passée, puis classement.
 * Actualisée à chaque ouverture.
 */
export const LeaguePage: React.FC<{
  board: LeagueBoard | null;
  hasCourses?: boolean;
  offline: boolean;
  errorText?: string;
  resultSeen: string;
  onDismissResult: (weekId: string) => void;
  onRefresh: () => void;
  /** Toucher un élève du classement : sa fiche (ID KONAN) */
  onOpenPlayer?: (konanId: string) => void;
  /** Quête d'XP hebdomadaire en duo entre amis */
  questSection?: React.ReactNode;
}> = ({ board, hasCourses = true, offline, errorText, resultSeen, onDismissResult, onRefresh, onOpenPlayer, questSection }) => {
  React.useEffect(() => { onRefresh(); }, [onRefresh]);
  return (
    <div className="space-y-3 pb-24">
      {board?.lastResult && board.lastResult.weekId !== resultSeen && (
        <LeagueResultBanner board={board} onClose={() => onDismissResult(board.lastResult?.weekId || '')} />
      )}
      {board?.eligible && hasCourses ? (
        <LeagueView board={board} onOpenPlayer={onOpenPlayer} questSection={questSection} />
      ) : (
        <div className="max-w-xl mx-auto space-y-4">
          {questSection}
          <LeagueCard board={board} hasCourses={hasCourses} offline={offline} errorText={errorText} onOpen={onRefresh} />
        </div>
      )}
    </div>
  );
};

/** Règles de la ligue (bouton ⓘ du titre) : XP, montées et descentes. */
const LeagueRules: React.FC = () => (
  <div className="rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-3.5 space-y-2.5 text-xs text-slate-700 dark:text-slate-300 leading-snug">
    <div className="space-y-1">
      <p className="font-extrabold text-slate-900 dark:text-white">Gagner des XP</p>
      <p>Séance terminée : 25 min <b>+35</b> · 45 min <b>+50</b> · 75 min <b>+90</b> · 2 h <b>+140</b>. Chaque erreur dans les questions de la séance retire <b>1 XP</b>, rattrapage compris.</p>
      <p>Séries d’exercices (icône ronde, classes avec cours) : 15, 30, 60 puis 120 XP si tu les enchaînes ; chaque faute en retire.</p>
      <p>LMD et BTS : pas encore de cours ni d’exercices ; tu gagnes tes XP en menant le chronomètre de tes séances jusqu’au bout, puis en validant.</p>
      <p>Les XP du classement sont ceux de la semaine, vérifiés par KONAN : ils repartent de 0 chaque lundi.</p>
    </div>
    <div className="space-y-1">
      <p className="font-extrabold text-slate-900 dark:text-white">Zones du classement & Fin de semaine</p>
      <p>Groupes de 30 élèves répartis en 3 zones :</p>
      <ul className="space-y-1 pl-1">
        <li className="flex items-center gap-1.5"><span className="inline-block w-2.5 h-2.5 rounded-full bg-[#F5C451] shrink-0" /><span><b className="text-amber-600 dark:text-[#F5C451]">Zone d’excellence (5 premiers)</b> : élite de la semaine + montée en grade.</span></li>
        <li className="flex items-center gap-1.5"><span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" /><span><b className="text-emerald-600 dark:text-emerald-400">Zone de montée (15 premiers)</b> : les 15 premiers montent de division (ou restent en Perle).</span></li>
        <li className="flex items-center gap-1.5"><span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" /><span><b className="text-rose-600 dark:text-rose-400">Zone de relégation (16 derniers)</b> : descente d’une division à la fin de la semaine.</span></li>
      </ul>
    </div>
  </div>
);

export const LeagueView: React.FC<{ board: LeagueBoard; onOpenPlayer?: (konanId: string) => void; questSection?: React.ReactNode }> = ({ board, onOpenPlayer, questSection }) => {
  const size = board.rows.length;
  const [showRules, setShowRules] = React.useState(false);
  const promoteLimit = Math.max(board.promoteCount || 0, board.keepCount || 0, PROMOTE_COUNT);
  const current = DIVISION_STYLES[board.division] || DIVISION_STYLES[1];
  // Ta ligne : combien d'XP pour dépasser l'élève juste devant
  const meIndex = board.rows.findIndex((r) => r.me);
  const ahead = meIndex > 0 ? board.rows[meIndex - 1] : null;
  const gapToNext = ahead && meIndex >= 0 ? Math.max(1, ahead.xp - board.rows[meIndex].xp + 1) : 0;
  return (
    <div>
      <div className="max-w-xl mx-auto space-y-4">
        {/* En-tête : badge de la division, petit titre doré, nom de la division, fin de semaine */}
        <div className="flex items-center gap-3.5">
          {/* Badge hexagonal de la division (maquette) */}
          <svg width="60" height="66" viewBox="0 0 64 70" aria-label={`Division ${current.name}`} role="img" className="shrink-0">
            <polygon points="32,2 61,18 61,52 32,68 3,52 3,18" fill="#141A28" stroke={HEX_COLORS[board.division] || HEX_COLORS[3]} strokeWidth="2.5" strokeLinejoin="round" />
            <polygon points="32,10 54,22 54,48 32,60 10,48 10,22" fill={HEX_COLORS[board.division] || HEX_COLORS[3]} />
            <path d="M24 26h16v6a8 8 0 0 1-16 0z M28 44h8 M32 40v4" fill="none" stroke="#141A28" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 28h-4v2a4 4 0 0 0 4 4 M40 28h4v2a4 4 0 0 1-4 4" fill="none" stroke="#141A28" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <div className="min-w-0 flex-1">
            <span className="konan-kicker">Ligue de la semaine</span>
            <h1 className="text-[26px] leading-tight font-extrabold tracking-tight text-slate-900 dark:text-white">Division {current.name}</h1>
            <p className="text-[13px] text-slate-600 dark:text-slate-400">Se termine dans <b className="text-slate-900 dark:text-white">{timeLeftLabel(board.endsAt)}</b></p>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-1.5">
            <button
              type="button"
              onClick={() => setShowRules((v) => !v)}
              aria-expanded={showRules}
              aria-label="Comment ça marche ?"
              title="Comment ça marche ?"
              className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors ${showRules ? 'bg-sky-400 text-slate-950' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 border border-transparent dark:border-white/10'}`}
            >
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>
        {showRules && <LeagueRules />}

        {/* Quête d'XP hebdomadaire en duo entre amis */}
        {questSection}

        {/* Chemin des divisions : Bronze → Perle */}
        <div className="flex items-center justify-between px-3.5 py-3 rounded-[18px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10">
          {DIVISION_ORDER.map((d, i) => {
            const passed = d < board.division;
            const isCurrent = d === board.division;
            return (
              <React.Fragment key={d}>
                {i > 0 && <span aria-hidden="true" className={`flex-1 h-0.5 mx-1 mb-4 ${d <= board.division ? 'bg-slate-300 dark:bg-white/20' : 'bg-slate-200 dark:bg-white/[0.07]'}`} />}
                <span className={`flex flex-col items-center gap-1 text-[10px] font-bold ${isCurrent ? current.text + ' font-extrabold' : passed ? 'text-slate-600 dark:text-slate-400' : 'text-slate-400 dark:text-slate-500'}`}>
                  <span
                    className={`rounded-[9px] ${isCurrent ? 'w-8 h-8 ring-[3px] ring-offset-[3px] ring-offset-white dark:ring-offset-slate-900 ' + DIVISION_STYLES[d].ring : 'w-[26px] h-[26px]'} ${!isCurrent && !passed ? 'border-[1.5px] border-dashed' : ''}`}
                    style={isCurrent || passed ? { background: HEX_COLORS[d] } : { background: HEX_COLORS[d] + '40', borderColor: HEX_COLORS[d] }}
                  />
                  {DIVISION_STYLES[d].name}
                </span>
              </React.Fragment>
            );
          })}
        </div>

        {/* Classement : séparé visuellement en 3 zones (Excellence en Jaune Gold, Montée en Vert, Relégation en Rouge) */}
        <ol className="space-y-1.5">
          {board.rows.map((row, idx) => {
            const zone = zoneOf(board, row.rank);
            const isLastOfExcellence = row.rank === EXCELLENCE_COUNT || (row.rank < EXCELLENCE_COUNT && idx === size - 1);
            const isLastOfPromotion = row.rank === promoteLimit || (row.rank > EXCELLENCE_COUNT && row.rank < promoteLimit && idx === size - 1);

            const rowZoneStyle = zone === 'excellence'
              ? (row.me
                  ? 'bg-gradient-to-r from-amber-100/95 via-sky-50 to-amber-50/90 dark:from-[#F5C451]/25 dark:via-sky-500/15 dark:to-[#0F1626] border-2 border-[#F5C451] border-l-4 border-l-[#F5C451] shadow-sm shadow-amber-500/10'
                  : 'bg-gradient-to-r from-amber-50/90 via-amber-50/35 to-white dark:from-[#F5C451]/14 dark:via-[#F5C451]/[0.05] dark:to-[#0F1626] border border-amber-300/80 dark:border-[#F5C451]/40 border-l-4 border-l-[#F5C451]')
              : (zone === 'up' || zone === 'keep')
                ? (row.me
                    ? 'bg-gradient-to-r from-emerald-100/95 via-sky-50 to-emerald-50/90 dark:from-emerald-500/25 dark:via-sky-500/15 dark:to-[#0F1626] border-2 border-emerald-400 border-l-4 border-l-emerald-500 shadow-sm shadow-emerald-500/10'
                    : 'bg-gradient-to-r from-emerald-50/85 via-emerald-50/25 to-white dark:from-emerald-500/14 dark:via-emerald-500/[0.05] dark:to-[#0F1626] border border-emerald-300/80 dark:border-emerald-500/40 border-l-4 border-l-emerald-500')
                : (row.me
                    ? 'bg-gradient-to-r from-rose-100/95 via-sky-50 to-rose-50/90 dark:from-rose-500/25 dark:via-sky-500/15 dark:to-[#0F1626] border-2 border-rose-400 border-l-4 border-l-rose-500 shadow-sm shadow-rose-500/10'
                    : 'bg-gradient-to-r from-rose-50/85 via-rose-50/25 to-white dark:from-rose-500/14 dark:via-rose-500/[0.05] dark:to-[#0F1626] border border-rose-300/80 dark:border-rose-500/40 border-l-4 border-l-rose-500');

            const rankBadgeStyle = zone === 'excellence'
              ? 'bg-amber-400/25 text-amber-800 border-amber-400/70 dark:bg-[#F5C451]/20 dark:text-[#F5C451] dark:border-[#F5C451]/55'
              : (zone === 'up' || zone === 'keep')
                ? 'bg-emerald-500/15 text-emerald-800 border-emerald-400/60 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/50'
                : 'bg-rose-500/15 text-rose-800 border-rose-400/60 dark:bg-rose-500/20 dark:text-rose-300 dark:border-rose-500/50';

            return (
              <React.Fragment key={`${row.rank}-${row.name}`}>
                <li
                  className={`relative isolate overflow-hidden flex items-center gap-3 px-3 py-2.5 rounded-2xl ${rowZoneStyle}`}
                >
                  {/* Toucher un élève ouvre sa fiche (XP au total, amis, abonnement, ID) */}
                  {onOpenPlayer && row.konanId && (
                    <button type="button" onClick={() => onOpenPlayer(row.konanId!)} aria-label={`Voir le profil de ${row.name}`} className="absolute inset-0 z-10 rounded-2xl cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400" />
                  )}
                  <span className={`w-7 h-7 rounded-xl border flex items-center justify-center text-[13px] font-black tabular-nums shrink-0 ${rankBadgeStyle}`}>
                    {row.rank}
                  </span>
                  <AnimatedAvatar
                    config={row.avatarConfig}
                    seed={row.konanId || row.name}
                    size={40}
                    className={
                      zone === 'excellence'
                        ? 'ring-2 ring-[#F5C451]'
                        : (zone === 'up' || zone === 'keep')
                          ? 'ring-2 ring-emerald-400/80'
                          : 'ring-2 ring-rose-400/80'
                    }
                    alt={`Personnage de ${row.name}`}
                  />
                  <span className="min-w-0 flex-1">
                    {/* Nom jaune pour les abonnés Pro, multicolore pour Plus (sans mention de la formule) */}
                    <span className={`block truncate text-sm ${row.tier === 'plus' ? 'plus-multicolor-shimmer-text font-black'
                      : row.tier === 'pro' ? 'gold-shimmer-text font-black'
                        : 'font-bold text-slate-900 dark:text-white'
                      }`}>{row.me ? `Toi · ${row.name}` : row.name}</span>
                    <span className="block text-[11px] text-slate-600 dark:text-slate-400 truncate">
                      {row.classLabel}{row.me && gapToNext ? `${row.classLabel ? ' · ' : ''}encore ${gapToNext} XP pour la ${ordinal(row.rank - 1)} place` : ''}
                    </span>
                  </span>
                  <span className="shrink-0 flex flex-col items-end gap-0.5">
                    <span className="relative inline-flex items-center gap-1 text-sm font-extrabold tabular-nums text-slate-900 dark:text-white">
                      {row.xp} XP
                    </span>
                    {zone === 'excellence' ? (
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/50 text-[9px] font-black uppercase tracking-wider text-amber-800 dark:text-[#F5C451]">
                        <Crown className="w-2.5 h-2.5" />
                        <span>Excellence</span>
                      </span>
                    ) : (zone === 'up' || zone === 'keep') ? (
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-[9px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                        <ArrowUp className="w-2.5 h-2.5 stroke-[2.8]" />
                        <span>{zone === 'keep' ? 'Maintien' : 'Montée'}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/40 text-[9px] font-black uppercase tracking-wider text-rose-800 dark:text-rose-300">
                        <ArrowDown className="w-2.5 h-2.5 stroke-[2.8]" />
                        <span>Relégation</span>
                      </span>
                    )}
                  </span>
                </li>

                {/* Séparateur Duolingo après les 5 premiers : Zone d'excellence (or) */}
                {isLastOfExcellence && (
                  <li aria-hidden="true" className="py-1.5">
                    <div className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-400/50 dark:border-[#F5C451]/45 text-amber-800 dark:text-[#F5C451] text-[10.5px] font-black uppercase tracking-wider">
                      <ArrowUp className="w-3.5 h-3.5 stroke-[2.8]" />
                      <span>Zone d’excellence</span>
                      <ArrowUp className="w-3.5 h-3.5 stroke-[2.8]" />
                    </div>
                  </li>
                )}

                {/* Séparateur Duolingo après les 15 premiers : Zone de montée (vert) / Zone de relégation (rouge) */}
                {(isLastOfPromotion || (size <= EXCELLENCE_COUNT && idx === size - 1)) && (
                  <li aria-hidden="true" className="py-1.5 space-y-1.5">
                    {size > EXCELLENCE_COUNT && (
                      <div className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-400/60 dark:border-emerald-500/50 text-emerald-800 dark:text-emerald-300 text-[10.5px] font-black uppercase tracking-wider">
                        <ArrowUp className="w-3.5 h-3.5 stroke-[2.8]" />
                        <span>{board.division === 5 ? 'Zone de maintien' : 'Zone de montée'}</span>
                        <ArrowUp className="w-3.5 h-3.5 stroke-[2.8]" />
                      </div>
                    )}
                    <div className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl bg-rose-500/15 border border-rose-400/60 dark:border-rose-500/50 text-rose-800 dark:text-rose-300 text-[10.5px] font-black uppercase tracking-wider">
                      <ArrowDown className="w-3.5 h-3.5 stroke-[2.8]" />
                      <span>Zone de relégation</span>
                      <ArrowDown className="w-3.5 h-3.5 stroke-[2.8]" />
                    </div>
                  </li>
                )}
              </React.Fragment>
            );
          })}
          {!size && <li className="px-3 py-6 rounded-2xl bg-white dark:bg-[#0F1626] text-center text-sm text-slate-500">Ton groupe se remplit : gagne des XP pour lancer le classement !</li>}
        </ol>
        <p className="text-xs text-center text-slate-500 dark:text-slate-400 pb-4">
          Groupe de {size} élève{size > 1 ? 's' : ''} (30 au maximum). Les XP sont vérifiés par KONAN. Les XP du classement repartent de 0 chaque semaine (et donc dans ta nouvelle division) ; ton total est dans ton profil.
        </p>
      </div>
    </div>
  );
};
