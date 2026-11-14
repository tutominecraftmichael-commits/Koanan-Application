import React from 'react';
import { ArrowDown, ArrowUp, Lock, Trophy, X } from 'lucide-react';
import type { LeagueBoard } from '../../services/leagueApi';
import { DIVISION_STYLES } from '../../services/leagueApi';

/**
 * Ligue : carte du tableau de bord + écran du classement de la semaine.
 * Les données viennent du serveur (/api/league) : XP vérifiés, groupes de 30, divisions.
 */

const DIVISION_ORDER = [1, 2, 3, 4, 5];
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

/** Zone d'un rang : montée, maintien (Perle), descente ou rien. */
function zoneOf(board: LeagueBoard, rank: number, size: number): 'up' | 'keep' | 'down' | null {
  if (board.promoteCount && rank <= board.promoteCount) return 'up';
  if (board.keepCount && rank <= board.keepCount) return 'keep';
  if (board.demoteCount === null) return rank > board.keepCount ? 'down' : null; // Perle : hors des 10 premiers
  if (board.demoteCount && size > board.promoteCount && rank > size - board.demoteCount) return 'down';
  return null;
}

/** Raison lisible d'un échec de chargement de la ligue. */
function leagueErrorLabel(error: string): string {
  if (!error || /connexion Internet|fetch|network/i.test(error)) return 'Ligue : pas de connexion Internet, je réessaie dès que possible.';
  if (/HTTP 404/.test(error)) return 'Ligue pas encore disponible sur ce serveur (mise en ligne à faire).';
  if (/UNAUTHORIZED|TOKEN/i.test(error)) return 'Ligue : reconnecte-toi à ton compte pour voir ton classement.';
  if (/MISSING_SERVICE_ACCOUNT_KEY/.test(error)) return 'Ligue : serveur mal configuré (clé Firebase manquante).';
  return `Ligue momentanément indisponible (${error}). Je réessaie dans 2 minutes.`;
}

export const LeagueCard: React.FC<{ board: LeagueBoard | null; localReputation: number; offline: boolean; errorText?: string; onOpen: () => void }> = ({ board, localReputation, offline, errorText = '', onOpen }) => {
  const reputation = board?.reputation ?? localReputation;
  const eligible = board ? board.eligible : reputation > 80;
  if (!eligible) {
    return (
      <div className="rounded-2xl border-2 border-slate-200 dark:border-slate-700/70 bg-white dark:bg-slate-900/70 p-3.5 sm:p-4 flex items-center gap-3">
        <span className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center shrink-0"><Lock className="w-5 h-5 text-slate-500" /></span>
        <div className="min-w-0">
          <p className="text-sm font-black text-slate-900 dark:text-white">Ligue verrouillée</p>
          <p className="text-xs text-slate-600 dark:text-slate-300">Il te faut plus de 80 % de réputation (tu es à {reputation} %). Fais tes séances et rattrape celles manquées pour revenir.</p>
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
  const zone = me ? zoneOf(board, me.rank, size) : null;
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
          {zone === 'up' && 'Zone de montée ✓ · '}
          {zone === 'keep' && 'Tu gardes ta place en Perle ✓ · '}
          {zone === 'down' && 'Zone de descente ! · '}
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
 * Page Ligue (onglet trophée de la barre du bas) : résultat de la semaine passée, puis classement,
 * ou « Ligue verrouillée » sous 80 % de réputation. Actualisée à chaque ouverture.
 */
export const LeaguePage: React.FC<{
  board: LeagueBoard | null;
  localReputation: number;
  offline: boolean;
  errorText?: string;
  resultSeen: string;
  onDismissResult: (weekId: string) => void;
  onRefresh: () => void;
}> = ({ board, localReputation, offline, errorText, resultSeen, onDismissResult, onRefresh }) => {
  React.useEffect(() => { onRefresh(); }, [onRefresh]);
  return (
    <div className="space-y-3 pb-24">
      {board?.lastResult && board.lastResult.weekId !== resultSeen && (
        <LeagueResultBanner board={board} onClose={() => onDismissResult(board.lastResult?.weekId || '')} />
      )}
      {board?.eligible ? <LeagueView board={board} /> : <LeagueCard board={board} localReputation={localReputation} offline={offline} errorText={errorText} onOpen={onRefresh} />}
    </div>
  );
};

export const LeagueView: React.FC<{ board: LeagueBoard }> = ({ board }) => {
  const size = board.rows.length;
  return (
    <div>
      <div className="max-w-xl mx-auto space-y-4">
        <div className="flex items-center gap-3">
          <p className="flex-1 text-lg font-black text-slate-900 dark:text-white">Ligue de la semaine</p>
          <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Fin dans {timeLeftLabel(board.endsAt)}</span>
        </div>

        {/* Les 5 divisions */}
        <div className="flex items-center justify-center gap-3 py-2">
          {DIVISION_ORDER.map((d) => (
            <div key={d} className={`flex flex-col items-center gap-1 ${d === board.division ? '' : 'opacity-35'}`}>
              <DivisionBadge division={d} size={d === board.division ? 48 : 32} />
              <span className={`text-[10px] font-black uppercase ${d === board.division ? DIVISION_STYLES[d].text : 'text-slate-500'}`}>{DIVISION_STYLES[d].name}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-600 dark:text-slate-300">
          {board.division === 5
            ? 'Division Perle : les 10 premiers gardent leur place, tous les autres redescendent.'
            : `Les ${board.promoteCount} premiers montent en ${DIVISION_STYLES[board.division + 1].name}${board.demoteCount ? `, les ${board.demoteCount} derniers descendent` : ''}. Il faut au moins 1 XP pour monter.`}
        </p>

        {/* Classement */}
        <ol className="rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
          {board.rows.map((row) => {
            const zone = zoneOf(board, row.rank, size);
            return (
              <li key={`${row.rank}-${row.name}`} className={`flex items-center gap-3 px-3 py-2.5 ${row.me ? 'bg-sky-50 dark:bg-sky-500/10' : ''}`}>
                <span className={`w-7 text-center text-sm font-black tabular-nums ${zone === 'up' || zone === 'keep' ? 'text-emerald-600 dark:text-emerald-400' : zone === 'down' ? 'text-rose-600 dark:text-rose-400' : 'text-slate-500'}`}>{row.rank}</span>
                <span className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-black text-slate-700 dark:text-slate-200 shrink-0">
                  {row.name.slice(0, 1).toUpperCase()}
                </span>
                <span className="min-w-0 flex-1">
                  {/* Nom jaune pour les abonnés Pro, multicolore pour Plus (sans mention de la formule) */}
                  <span className={`block truncate text-sm ${
                    row.tier === 'plus' ? 'plus-multicolor-shimmer-text font-black'
                      : row.tier === 'pro' ? 'gold-shimmer-text font-black'
                        : row.me ? 'font-black text-sky-800 dark:text-sky-200' : 'font-bold text-slate-900 dark:text-white'
                  }`}>{row.name}{row.me ? ' (toi)' : ''}</span>
                  {row.classLabel && <span className="block text-[11px] text-slate-500 dark:text-slate-400">{row.classLabel}</span>}
                </span>
                {zone === 'up' && <ArrowUp className="w-4 h-4 text-emerald-500" aria-label="zone de montée" />}
                {zone === 'down' && <ArrowDown className="w-4 h-4 text-rose-500" aria-label="zone de descente" />}
                <span className="text-sm font-black text-slate-900 dark:text-white tabular-nums">{row.xp} XP</span>
              </li>
            );
          })}
          {!size && <li className="px-3 py-6 text-center text-sm text-slate-500">Ton groupe se remplit : gagne des XP pour lancer le classement !</li>}
        </ol>
        <p className="text-xs text-center text-slate-500 dark:text-slate-400 pb-4">
          Groupe de {size} élève{size > 1 ? 's' : ''} (30 au maximum), de classes et de pays différents. Les XP sont vérifiés par KONAN. Sous 80 % de réputation, tu sors de la ligue jusqu’à la semaine où tu repasses au-dessus.
        </p>
      </div>
    </div>
  );
};

