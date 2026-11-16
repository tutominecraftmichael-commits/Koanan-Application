import React from 'react';
import { ArrowDown, ArrowUp, Info, Lock, ShieldCheck, Trophy, X } from 'lucide-react';
import type { LeagueBoard } from '../../services/leagueApi';
import { DIVISION_STYLES } from '../../services/leagueApi';

/**
 * Ligue : carte du tableau de bord + écran du classement de la semaine.
 * Les données viennent du serveur (/api/league) : XP vérifiés, groupes de 30, divisions.
 */

const DIVISION_ORDER = [1, 2, 3, 4, 5];
/** Couleur pleine de chaque division (badge hexagonal de la maquette) */
/** Fonds des initiales (comme la maquette) */
const AVATAR_COLORS = ['#1E3A5F', '#3B1F4A', '#1F4A3A', '#4A3A1F', '#1F3A4A', '#3A1F2A'];
const HEX_COLORS: Record<number, string> = { 1: '#B45309', 2: '#94A3B8', 3: '#F5C451', 4: '#38BDF8', 5: '#F472B6' };
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

export const LeagueCard: React.FC<{ board: LeagueBoard | null; localReputation: number; hasCourses?: boolean; offline: boolean; errorText?: string; onOpen: () => void }> = ({ board, localReputation, hasCourses = true, offline, errorText = '', onOpen }) => {
  const reputation = board?.reputation ?? localReputation;
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
  // Le classement se voit toujours, quelle que soit la réputation (sous 80 % : division gelée seulement).
  // Ce message ne sert plus qu'avec l'ancien serveur, tant que la nouvelle version n'est pas en ligne.
  const eligible = board ? board.eligible : true;
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
          {board.frozen && <span className="text-amber-700 dark:text-amber-300">Division gelée (réputation {reputation} %) · </span>}
          {!board.frozen && zone === 'up' && 'Zone de montée ✓ · '}
          {!board.frozen && zone === 'keep' && 'Tu gardes ta place en Perle ✓ · '}
          {!board.frozen && zone === 'down' && 'Zone de descente ! · '}
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
      : r.movement === 'frozen'
        ? `Semaine terminée : ${ordinal(r.rank)} sur ${r.size}. Ta division ${to} est restée gelée (réputation de 80 % ou moins). Repasse au-dessus de 80 % pour pouvoir monter.`
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
 * toujours visible (à 80 % de réputation ou moins : bandeau « Division gelée »). Actualisée à chaque ouverture.
 */
export const LeaguePage: React.FC<{
  board: LeagueBoard | null;
  localReputation: number;
  hasCourses?: boolean;
  offline: boolean;
  errorText?: string;
  resultSeen: string;
  onDismissResult: (weekId: string) => void;
  onRefresh: () => void;
}> = ({ board, localReputation, hasCourses = true, offline, errorText, resultSeen, onDismissResult, onRefresh }) => {
  React.useEffect(() => { onRefresh(); }, [onRefresh]);
  return (
    <div className="space-y-3 pb-24">
      {board?.lastResult && board.lastResult.weekId !== resultSeen && (
        <LeagueResultBanner board={board} onClose={() => onDismissResult(board.lastResult?.weekId || '')} />
      )}
      {board?.eligible && hasCourses ? <LeagueView board={board} /> : <LeagueCard board={board} localReputation={localReputation} hasCourses={hasCourses} offline={offline} errorText={errorText} onOpen={onRefresh} />}
    </div>
  );
};

/** Règles de la ligue (bouton ⓘ du titre) : XP, réputation, montées et descentes. */
const LeagueRules: React.FC<{ reputation: number }> = ({ reputation }) => (
  <div className="rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-3.5 space-y-2.5 text-xs text-slate-700 dark:text-slate-300 leading-snug">
    <div className="space-y-1">
      <p className="font-extrabold text-slate-900 dark:text-white">Gagner des XP</p>
      <p>Séance terminée : 25 min <b>+35</b> · 45 min <b>+50</b> · 75 min <b>+90</b> · 2 h <b>+140</b>. Chaque erreur dans les questions de la séance retire <b>1 XP</b>, rattrapage compris.</p>
      <p>Séries d’exercices (icône ronde, classes avec cours) : 15, 30, 60 puis 120 XP si tu les enchaînes ; chaque faute en retire.</p>
      <p>LMD et BTS : pas encore de cours ni d’exercices ; tu gagnes tes XP en menant le chronomètre de tes séances jusqu’au bout, puis en validant.</p>
      <p>Les XP du classement sont ceux de la semaine, vérifiés par KONAN : ils repartent de 0 chaque lundi.</p>
    </div>
    <div className="space-y-1">
      <p className="font-extrabold text-slate-900 dark:text-white">Ta réputation : {reputation} %</p>
      <p>Séance de révision faite : <b>+1 %</b> tout de suite. Série d’entraînement terminée : <b>+1 %</b> (5 séries comptées par jour au plus). Séance manquée et pas rattrapée avant minuit : <b>−5 %</b>. À 80 % ou moins, tu vois toujours le classement, mais ta division est <b>gelée</b> : ni montée ni descente tant que tu ne repasses pas au-dessus de 80 %.</p>
    </div>
    <div className="space-y-1">
      <p className="font-extrabold text-slate-900 dark:text-white">Fin de semaine</p>
      <p>Groupes de 30 élèves. Les 10 premiers montent de division, les 5 derniers descendent. En Perle, les 10 premiers gardent leur place.</p>
    </div>
  </div>
);

export const LeagueView: React.FC<{ board: LeagueBoard }> = ({ board }) => {
  const size = board.rows.length;
  const [showRules, setShowRules] = React.useState(false);
  const repTone = board.reputation > 80
    ? 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/30'
    : 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/30';
  const current = DIVISION_STYLES[board.division] || DIVISION_STYLES[1];
  // Ta ligne : combien d'XP pour dépasser l'élève juste devant
  const meIndex = board.rows.findIndex((r) => r.me);
  const ahead = meIndex > 0 ? board.rows[meIndex - 1] : null;
  const gapToNext = ahead && meIndex >= 0 ? Math.max(1, ahead.xp - board.rows[meIndex].xp + 1) : 0;
  const rankColor = (rank: number, zone: ReturnType<typeof zoneOf>) =>
    rank === 1 ? 'text-amber-600 dark:text-[#F5C451]'
      : rank === 2 ? 'text-slate-500 dark:text-slate-300'
        : rank === 3 ? 'text-orange-700 dark:text-orange-400'
          : zone === 'down' ? 'text-rose-600 dark:text-rose-400' : 'text-slate-500 dark:text-slate-400';
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
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-black tabular-nums whitespace-nowrap ${repTone}`} title="Ta réputation (discipline)">
              <ShieldCheck className="w-3.5 h-3.5" />{board.reputation}&nbsp;%
            </span>
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
        {showRules && <LeagueRules reputation={board.reputation} />}

        {/* Réputation de 80 % ou moins : classement visible, division gelée */}
        {board.frozen && (
          <div className="rounded-2xl border-2 p-3 flex items-start gap-2 text-sm font-bold bg-amber-50 border-amber-300 text-amber-900 dark:bg-amber-500/10 dark:border-amber-500/40 dark:text-amber-200">
            <Lock className="w-5 h-5 shrink-0" />
            <span>Division gelée : ta réputation est à {board.reputation} %. Tu restes dans le classement, mais tant qu’elle est à 80 % ou moins, tu ne peux pas monter de division. Fais tes séances pour repasser au-dessus de 80 % avant la fin de la semaine.</span>
          </div>
        )}

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

        <div className="flex items-center justify-between px-0.5">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
            {board.division === 5 ? `Les ${board.keepCount} premiers restent en Perle` : `Zone de montée · top ${board.promoteCount}`}
          </span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">{size} élève{size > 1 ? 's' : ''}</span>
        </div>

        {/* Classement : une carte par élève */}
        <ol className="space-y-1.5">
          {board.rows.map((row) => {
            const zone = zoneOf(board, row.rank, size);
            return (
              <li
                key={`${row.rank}-${row.name}`}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-2xl ${row.me
                  ? 'bg-sky-50 dark:bg-sky-400/10 border-[1.5px] border-sky-400'
                  : 'bg-white dark:bg-[#0F1626] border border-slate-200 dark:border-transparent'}`}
              >
                <span className={`w-6 text-center text-[15px] font-extrabold tabular-nums ${row.me ? 'text-sky-700 dark:text-sky-300' : rankColor(row.rank, zone)}`}>{row.rank}</span>
                {row.avatar ? (
                  <img src={row.avatar} alt="" loading="lazy" referrerPolicy="no-referrer" className={`w-9 h-9 rounded-full object-cover shrink-0 ${row.me ? 'ring-2 ring-sky-400' : 'ring-1 ring-slate-200 dark:ring-white/10'}`} />
                ) : (
                  <span className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-extrabold text-white shrink-0" style={{ background: AVATAR_COLORS[[...row.name].reduce((h, ch) => h + ch.charCodeAt(0), 0) % AVATAR_COLORS.length] }}>
                    {row.name.slice(0, 1).toUpperCase()}
                  </span>
                )}
                <span className="min-w-0 flex-1">
                  {/* Nom jaune pour les abonnés Pro, multicolore pour Plus (sans mention de la formule) */}
                  <span className={`block truncate text-sm ${
                    row.tier === 'plus' ? 'plus-multicolor-shimmer-text font-black'
                      : row.tier === 'pro' ? 'gold-shimmer-text font-black'
                        : 'font-bold text-slate-900 dark:text-white'
                  }`}>{row.me ? `Toi · ${row.name}` : row.name}</span>
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    {row.classLabel}{row.me && gapToNext ? `${row.classLabel ? ' · ' : ''}encore ${gapToNext} XP pour la ${ordinal(row.rank - 1)} place` : ''}
                  </span>
                </span>
                <span className="text-sm font-extrabold text-slate-900 dark:text-white tabular-nums">{row.xp} XP</span>
              </li>
            );
          })}
          {!size && <li className="px-3 py-6 rounded-2xl bg-white dark:bg-[#0F1626] text-center text-sm text-slate-500">Ton groupe se remplit : gagne des XP pour lancer le classement !</li>}
        </ol>
        <p className="text-xs text-center text-slate-500 dark:text-slate-400 pb-4">
          Groupe de {size} élève{size > 1 ? 's' : ''} (30 au maximum). Les XP sont vérifiés par KONAN. À 80 % de réputation ou moins, tu restes dans le classement mais ta division est gelée.
        </p>
      </div>
    </div>
  );
};
