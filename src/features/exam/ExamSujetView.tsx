/**
 * SUJET DE DEVOIR (2 h) — FICHE D'ÉPREUVE AU FORMAT OFFICIEL IVOIRIEN, AVEC LE LOGO DE KONAN
 * 1. KONAN rédige un sujet complet sur les chapitres du devoir (modèle officiel de la matière, sur 20) ;
 * 2. l'élève compose sur sa feuille de copie : chronomètre de 2 h (il peut rendre avant) ;
 * 3. il photographie sa copie : KONAN la corrige avec le barème et donne la note sur 20 (« Je… ») ;
 * 4. il valide sa séance.
 * Le sujet, l'heure de début et la correction sont gardés sur le téléphone : si l'élève quitte, il reprend.
 * Les photos ne sont gardées nulle part : envoyées une fois pour la correction, puis oubliées.
 */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ArrowLeft, Camera, Clock, FileText, Trash2, ChevronDown, ChevronUp, Check, X, Minus, AlertTriangle } from 'lucide-react';
import type { StudySession } from '../../types';
import type { CurriculumGradeLevel, StemSubjectId } from '../../lib/curriculum/types';
import { GRADE_LEVELS } from '../../lib/curriculum/types';
import { canonicalGradeLevel, studentClassLabel } from '../../lib/curriculum/curriculumMatcher';
import { MathRenderer } from '../../components/common/MathRenderer';
import { KonanMascot } from '../../components/common/KonanMascot';
import { auth } from '../../lib/firebase';
import { afterShine } from '../../lib/shineClick';
import { soundFX } from '../../lib/audioEffects';
import { LITERARY_EXAM_SUBJECTS } from '../../lib/exam/examPrepRules';
import { SujetChart, type ChartKind } from './SujetChart';

export interface ExamSujetViewProps {
  userId: string;
  session: StudySession;
  subjectName: string;
  stemSubjectId: StemSubjectId;
  gradeLevel: CurriculumGradeLevel;
  onExit: () => void;
  /** noXp : copie rendue hors temps (plus de 2 h + 15 min) → séance validée sans XP. */
  onComplete: (sessionId: string, opts?: { noXp?: boolean }) => void;
}

interface SujetQuestion { numero: string; texte: string; points: number }
type SujetTable = { colonnes: string[]; lignes: string[][] };
/** Document numéroté (texte ou tableau de valeurs), affiché dans son cadre. */
interface SujetDocument { id: string; titre: string; texte: string; tableau: SujetTable | null; graphique?: ChartKind | null }
interface SujetExercice {
  numero: number;
  points: number;
  nature?: string;
  consigne: string;
  contexte: string;
  /** Sujets rédigés depuis le 2026-11-17 : documents fournis (jamais de document cité mais invisible). */
  documents?: SujetDocument[];
  donnees: string;
  tableau: SujetTable | null;
  questions: SujetQuestion[];
  grille?: { critere: string; indicateurs: string; points: number }[];
  /** Texte à lignes numérotées (Français, commentaire de document en Histoire-Géo). */
  texteNumerote?: boolean;
  /** Exercice où l'élève traite un seul des sujets proposés. */
  auChoix?: boolean;
}
interface Sujet {
  titre: string;
  matiere: string;
  duree: string;
  source?: string;
  exercices: SujetExercice[];
  corrige: { exercice: number; question: string; reponse: string; etapes?: string[]; resultat?: string; points: number }[];
}
type QuestionStatut = 'juste' | 'partiel' | 'faux' | 'absent';
interface CorrectionQuestion {
  numero: string;
  obtenu: number;
  sur: number | null;
  statut: QuestionStatut;
  copie: string;
  attendu: string;
  erreur: string;
}
interface Correction {
  lisible: boolean;
  note: number | null;
  exercices: {
    numero: number;
    obtenu: number;
    sur: number;
    commentaire: string;
    questions?: CorrectionQuestion[];
    grille?: { critere: string; obtenu: number; sur: number }[];
  }[];
  appreciation: string;
  conseils: string[];
  pointsForts?: string[];
  aRevoir?: { notion: string; pourquoi: string }[];
}
/** Temps mis, d'après le chrono du serveur (ou du téléphone s'il était hors ligne au départ). */
interface ExamTiming { startedAt: number; endsAt: number; submittedAt: number; elapsedMinutes: number; lateMinutes: number }
interface Saved {
  sujet: Sujet;
  chapterTitles: string[];
  startedAt?: number;
  correction?: Correction;
  timing?: ExamTiming;
  /** Alertes déjà données (« m30 », « m5 », « fin ») : jamais deux fois. */
  alerts?: string[];
}

const DURATION_SEC = 2 * 60 * 60;
/** Marge pour photographier et envoyer la copie après les 2 h (même valeur que le serveur). */
const GRACE_SEC = 15 * 60;
/** Alertes du chrono : à 30 min, à 5 min de la fin, puis la fin (alarme). */
const TIME_ALERTS = [
  { key: 'm30', atRemaining: 30 * 60, text: 'Plus que 30 minutes : relis tes réponses et garde du temps pour la dernière question.' },
  { key: 'm5', atRemaining: 5 * 60, text: 'Plus que 5 minutes : termine ta phrase et prépare-toi à rendre ta copie.' },
  { key: 'fin', atRemaining: 0, text: 'Temps écoulé : pose ton stylo et photographie ta copie (tu as 15 minutes pour l’envoyer).' },
] as const;

/** Temps mis (secours quand le serveur n'a pas de chrono : départ hors ligne). */
function localTiming(startedAt: number, submittedAt: number): ExamTiming {
  const endsAt = startedAt + DURATION_SEC * 1000;
  const over = submittedAt - endsAt;
  return { startedAt, endsAt, submittedAt, elapsedMinutes: Math.round((submittedAt - startedAt) / 60000), lateMinutes: over > GRACE_SEC * 1000 ? Math.round(over / 60000) : 0 };
}

/** « 1 h 52 », « 47 min ». */
const durationLabel = (minutes: number) => (minutes >= 60 ? `${Math.floor(minutes / 60)} h ${String(minutes % 60).padStart(2, '0')}` : `${minutes} min`);

/**
 * Une barre oblique ENTRE DEUX MOTS (« trajectoire / constante ») n'est pas une fraction : on l'écrit
 * « trajectoire ; constante » hors des formules $…$, sinon l'affichage la dessinerait en fraction empilée.
 * Les vraies fractions (dans les formules, ou entre nombres et unités courtes comme km/h) ne sont pas touchées.
 */
function noWordFractions(text: string): string {
  return (text || '')
    .split(/(\$[^$]*\$)/g)
    .map((seg, i) => (i % 2 === 1 ? seg : seg.replace(/(\p{L}{3,})\s*\/\s*(\p{L}{3,})/gu, '$1 ; $2')))
    .join('');
}

/** Vrai pour le Français et l'Histoire-Géo : texte simple, sans moteur de formules (qui pourrait abîmer la prose). */
const PlainTextContext = React.createContext(false);

/** Matières littéraires : si l'IA glisse un peu de LaTeX (« $1\text{ cm}$ »), on l'écrit en clair (« 1 cm »). */
function plainText(text: string): string {
  return (text || '').replace(/\$([^$]*)\$/g, (_, inner: string) =>
    inner
      .replace(/\\(?:text|mathrm|textrm)\{([^}]*)\}/g, '$1')
      .replace(/\\d?frac\{([^}]*)\}\{([^}]*)\}/g, '$1/$2')
      .replace(/\\times/g, '×')
      .replace(/\\%/g, '%')
      .replace(/\\[,;!: ]/g, ' ')
      .replace(/[{}\\]/g, '')
      .replace(/\s+/g, ' ')
      .trim(),
  );
}

/**
 * Morceaux à écrire tels quels, jamais transformés par l'afficheur de formules des cours :
 * « Document 1a », « Documents 1a et 1b » (avant : « 1a » devenait une formule, affichée « 1𝑇 ») et les unités
 * « mmol/L », « g/L », « km/h », « m/s » (avant : dessinées en fraction empilée).
 */
const PROTECTED_PLAIN = /(\bDocuments?\s+\d+\s*[a-z]?(?:\s*(?:,|et|à)\s*\d+\s*[a-z]?)*(?![\p{L}\d])|\b[mµkcd]?(?:mol|g|L|m|s|V|A|W|J|N|Pa|h)\s*\/\s*[mµkcd]?(?:L|m|s|h|min|kg|g|mol|m²|m³)(?![\p{L}\d]))/gu;

/** Découpe un texte en morceaux « à écrire tels quels » et « à confier à l'afficheur de formules » (les $…$ ne sont jamais coupés). */
function splitProtected(text: string): { plain: boolean; text: string }[] {
  const maths: string[] = [];
  const masked = text.replace(/\$\$[\s\S]+?\$\$|\$[^$\n]+?\$/g, (m) => `\u0000${maths.push(m) - 1}\u0000`);
  return masked
    .split(PROTECTED_PLAIN)
    .map((part, i) => ({ plain: i % 2 === 1, text: part.replace(/\u0000(\d+)\u0000/g, (_, k: string) => maths[Number(k)]) }))
    .filter((p) => p.text);
}

/** Texte du sujet : formules rendues (matières scientifiques), retours à la ligne gardés, pas de fausses fractions. */
const SujetText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const plain = useContext(PlainTextContext);
  return (
    <span className={`whitespace-pre-line ${className}`}>
      {plain
        ? plainText(text)
        : splitProtected(text || '').map((p, i) => (p.plain ? <span key={i}>{p.text}</span> : <MathRenderer key={i} text={noWordFractions(p.text)} />))}
    </span>
  );
};

/** « 1. » ou « 1 » → « 1. » ; « Sujet 1 » → « Sujet 1. » (jamais « 1.. »). */
const numLabel = (n: string) => `${String(n || '').replace(/\.+$/, '')}.`;

/**
 * Texte d'étude à lignes numérotées (5, 10, 15…), comme sur les sujets officiels.
 * Les lignes vides (entre deux strophes ou paragraphes) ne sont pas comptées ;
 * la référence finale (« Texte inédit écrit pour KONAN », « Texte rédigé pour KONAN… ») est à part, à droite.
 */
const NumberedText: React.FC<{ text: string }> = ({ text }) => {
  const lines = (text || '').split('\n');
  let reference = '';
  while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
  if (lines.length > 1 && /^\s*texte\b.*konan/i.test(lines[lines.length - 1])) reference = lines.pop()!.trim();
  let n = 0;
  return (
    <div className="rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 py-3 pl-1 pr-3 sm:p-4 text-[14px] sm:text-[15px]">
      <div className="space-y-0.5">
        {lines.map((line, i) => {
          if (!line.trim()) return <div key={i} className="h-3" aria-hidden />;
          n += 1;
          return (
            <div key={i} className="flex gap-3">
              <span className="w-6 shrink-0 text-right text-xs font-bold tabular-nums text-slate-400 dark:text-slate-500 pt-0.5">{n % 5 === 0 ? n : ''}</span>
              <span className="min-w-0"><SujetText text={line.trim()} /></span>
            </div>
          );
        })}
      </div>
      {reference && <p className="mt-2 text-right text-xs italic text-slate-500 dark:text-slate-400">{reference}</p>}
    </div>
  );
};
/** Tableau du sujet (questions à choix, ou valeurs d'un document) : défile sur le côté s'il est large. */
const SujetTableView: React.FC<{ table: SujetTable }> = ({ table: raw }) => {
  // Tableau de valeurs (cellules courtes : « 0,5 », « −70 ») : il tient dans l'écran du téléphone, sans défiler.
  // Tableau de mesures en ligne mais aux cellules longues (« Concentration en alpha-cobratoxine (mol/L) »,
  // « 0 (témoin) »…) : on le tourne à la verticale (une mesure par ligne), sinon seules 2 colonnes se voyaient.
  // Tableau de phrases (questions à choix) : largeur minimale, et il défile sur le côté si besoin.
  const isCompact = (t: SujetTable) => [t.colonnes, ...t.lignes].every((row) => row.slice(1).every((c) => String(c).length <= 7));
  const transpose = !isCompact(raw) && raw.lignes.length >= 1 && raw.lignes.length <= 3 && raw.colonnes.length >= 5
    && raw.lignes.every((r) => r.length === raw.colonnes.length);
  const table: SujetTable = transpose
    ? { colonnes: [raw.colonnes[0], ...raw.lignes.map((r) => r[0])], lignes: raw.colonnes.slice(1).map((c, i) => [c, ...raw.lignes.map((r) => r[i + 1])]) }
    : raw;
  const compact = transpose || isCompact(table);
  const cell = compact ? 'px-1 py-1.5 text-[12px]' : 'px-2 py-1.5 text-[13px]';
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/[0.12]">
      <table className={`w-full border-collapse ${!compact && table.colonnes.length > 4 ? 'min-w-[420px]' : ''}`}>
        <thead>
          <tr>
            {table.colonnes.map((c, i) => (
              <th key={i} className={`${cell} border-b border-slate-200 dark:border-white/[0.12] bg-slate-100 dark:bg-white/[0.06] text-center font-black text-slate-800 dark:text-slate-100 [&:not(:last-child)]:border-r`}><SujetText text={c} /></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.lignes.map((row, r) => (
            <tr key={r} className="[&:not(:last-child)]:border-b border-slate-200 dark:border-white/[0.08]">
              {row.map((c, j) => (
                <td key={j} className={`${cell} align-top text-center tabular-nums text-slate-700 dark:text-slate-200 [&:not(:last-child)]:border-r border-slate-200 dark:border-white/[0.08] ${j === 0 ? 'font-bold text-slate-500 dark:text-slate-400' : ''}`}><SujetText text={c} /></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/** Document numéroté : cadre bleu, étiquette « Document 1a », titre, texte et/ou tableau de valeurs. */
const DocumentCard: React.FC<{ doc: SujetDocument }> = ({ doc }) => (
  <figure className="m-0 rounded-xl border-[1.5px] border-sky-300 dark:border-sky-400/45 bg-sky-50/50 dark:bg-slate-950/40 overflow-hidden">
    <figcaption className="flex items-start gap-2 px-3 py-2 bg-sky-100/80 dark:bg-sky-400/10 border-b border-sky-200 dark:border-sky-400/30">
      <span data-pdf-chip className="shrink-0 px-2 py-0.5 rounded-md bg-sky-600 text-white dark:bg-sky-400 dark:text-slate-950 text-[11px] font-black">{doc.id}</span>
      {doc.titre && <span className="min-w-0 text-[13px] font-bold leading-snug text-sky-950 dark:text-sky-100"><SujetText text={doc.titre} /></span>}
    </figcaption>
    <div className="p-3 space-y-2">
      {doc.texte && <p className="m-0 text-[13px] leading-relaxed text-slate-700 dark:text-slate-300"><SujetText text={doc.texte} /></p>}
      {/* Courbe ou diagramme dessiné par KONAN à partir des valeurs, puis les valeurs elles-mêmes */}
      {doc.tableau && doc.graphique ? (
        <>
          <div className="rounded-lg bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-white/[0.08] p-2">
            <SujetChart table={doc.tableau} kind={doc.graphique} title={doc.titre} />
          </div>
          {/* Le graphique montre tout ; les valeurs exactes restent à portée de main */}
          <details className="group">
            <summary className="cursor-pointer select-none text-xs font-bold text-sky-700 dark:text-sky-300 py-1">Voir les valeurs</summary>
            <div className="pt-1.5"><SujetTableView table={doc.tableau} /></div>
          </details>
        </>
      ) : doc.tableau ? (
        <SujetTableView table={doc.tableau} />
      ) : null}
    </div>
  </figure>
);

/** Encadré « Données » (le mot « Données : » écrit par l'IA est retiré : il est déjà dans l'étiquette). */
const DonneesBox: React.FC<{ text: string }> = ({ text }) => (
  <div className="rounded-xl border border-dashed border-amber-400 dark:border-[#F5C451]/55 bg-amber-50 dark:bg-[#F5C451]/[0.08] px-3 py-2.5 space-y-1">
    <p className="m-0 text-[11px] font-black uppercase tracking-[0.14em] text-amber-800 dark:text-[#F5C451]">Données</p>
    <p className="m-0 text-[13px] leading-relaxed text-slate-800 dark:text-slate-200"><SujetText text={text.replace(/^\s*données\s*:\s*/i, '')} /></p>
  </div>
);

const storageKey = (sessionId: string) => `konan_exam_sujet_v1_${sessionId}`;
const pts = (n: number) => `${String(n).replace('.', ',')} point${n > 1 ? 's' : ''}`;
const ptShort = (n: number) => `${String(n).replace('.', ',')} pt${n > 1 ? 's' : ''}`;
/** Heure lisible « 14 h 05 ». */
const clockLabel = (ms: number) => { const d = new Date(ms); return `${d.getHours()} h ${String(d.getMinutes()).padStart(2, '0')}`; };
const fmt = (sec: number) => {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

const ERRORS: Record<string, string> = {
  DAILY_LIMIT: 'Tu as déjà eu ton sujet ou ta correction du jour (1 sujet et 1 correction par jour). Reviens demain !',
  UNAUTHORIZED: 'Connecte-toi à ton compte pour utiliser les sujets de devoir.',
  TOKEN_EXPIRED: 'Ta connexion a expiré : ferme et rouvre KONAN, puis réessaie.',
  AI_UNAVAILABLE: 'L’IA de KONAN ne répond pas pour le moment, malgré plusieurs essais. Rien n’est décompté de ta limite du jour : réessaie dans quelques minutes.',
  AI_QUOTA: 'KONAN a atteint sa limite de travail pour aujourd’hui. Rien n’est décompté de ta limite du jour : réessaie plus tard, ou demain.',
  AI_NOT_CONFIGURED: 'Les sujets de devoir ne sont pas encore activés.',
  TOO_LARGE: 'Tes photos sont trop lourdes. Envoie moins de pages ou reprends-les.',
  NO_TEMPLATE: 'Je n’ai pas encore de modèle de sujet officiel pour cette matière.',
  NETWORK: 'Pas de connexion Internet. Réessaie quand tu es connecté.',
};

/** Message affiché : connu, sinon une panne du service (avec son code), jamais « pas d'Internet » par défaut. */
const errorMessage = (code?: string) =>
  ERRORS[code || ''] || `Le service des devoirs a un souci${code ? ` (${String(code).slice(0, 60)})` : ''}. Réessaie dans une minute.`;

function readSaved(sessionId: string): Saved | null {
  try {
    const raw = localStorage.getItem(storageKey(sessionId));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function writeSaved(sessionId: string, s: Saved) {
  try {
    localStorage.setItem(storageKey(sessionId), JSON.stringify(s));
  } catch {
    // stockage plein : le sujet reste affiché, sans reprise
  }
}

/** Photo de copie réduite (≈ 1600 px, JPEG) : lisible et légère à envoyer. */
async function compressPhoto(file: File): Promise<{ mimeType: string; data: string; preview: string }> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('CANVAS');
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close?.();
  const dataUrl = canvas.toDataURL('image/jpeg', 0.72);
  return { mimeType: 'image/jpeg', data: dataUrl.split(',')[1] || '', preview: dataUrl };
}

async function callApi(path: string, body: unknown): Promise<any> {
  const user = auth?.currentUser;
  if (!user) throw Object.assign(new Error('UNAUTHORIZED'), { code: 'UNAUTHORIZED' });
  const token = await user.getIdToken();
  let res: Response;
  try {
    res = await fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(body),
    });
  } catch {
    // Seul cas où c'est vraiment la connexion : la requête n'est jamais arrivée au serveur
    throw Object.assign(new Error('NETWORK'), { code: 'NETWORK' });
  }
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json?.success) throw Object.assign(new Error(json?.error || 'AI_UNAVAILABLE'), { code: json?.error || 'AI_UNAVAILABLE' });
  return json;
}

/**
 * Appel avec un nouvel essai automatique si l'IA n'a pas répondu (panne passagère, délai dépassé) :
 * l'élève voit « je réessaie » au lieu d'une erreur. Pas de nouvel essai si la limite du jour est atteinte.
 */
async function callApiWithRetry(path: string, body: unknown, onRetry: (attempt: number) => void): Promise<any> {
  const RETRY_DELAYS_MS = [6000];
  for (let attempt = 0; ; attempt++) {
    try {
      return await callApi(path, body);
    } catch (e: any) {
      if (e?.code !== 'AI_UNAVAILABLE' || attempt >= RETRY_DELAYS_MS.length) throw e;
      onRetry(attempt + 1);
      await new Promise((r) => setTimeout(r, RETRY_DELAYS_MS[attempt]));
    }
  }
}

export const ExamSujetView: React.FC<ExamSujetViewProps> = (props) => (
  <PlainTextContext.Provider value={(LITERARY_EXAM_SUBJECTS as readonly string[]).includes(props.stemSubjectId)}>
    <ExamSujetViewInner {...props} />
  </PlainTextContext.Provider>
);

const ExamSujetViewInner: React.FC<ExamSujetViewProps> = ({ userId: _userId, session, subjectName, stemSubjectId, gradeLevel, onExit, onComplete }) => {
  const [saved, setSaved] = useState<Saved | null>(() => readSaved(session.id));
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState<'sujet' | 'correction' | null>(null);
  // L'IA n'a pas répondu du premier coup : KONAN réessaie tout seul (message rassurant pendant ce temps)
  const [retrying, setRetrying] = useState(false);
  // Sujet en PDF (A4) pour composer sur papier : fabriqué dans le téléphone à partir de la fiche affichée
  const sheetRef = useRef<HTMLElement>(null);
  const [pdfBusy, setPdfBusy] = useState(false);
  const [photos, setPhotos] = useState<{ mimeType: string; data: string; preview: string }[]>([]);
  const [showPhotos, setShowPhotos] = useState(false);
  const [showCorrige, setShowCorrige] = useState(false);
  const [now, setNow] = useState(Date.now());
  const fileRef = useRef<HTMLInputElement>(null);
  // Nom de la classe sur le sujet (et pour KONAN qui le rédige). Avant : « Seconde » par défaut, donc un élève
  // de Tle A (ancien identifiant sans numéro) recevait un sujet « pour la classe de Seconde ».
  const canonical = canonicalGradeLevel(gradeLevel);
  const gradeLabel = GRADE_LEVELS.find((g) => g.id === canonical)?.badge || studentClassLabel(gradeLevel) || '';

  // 1. Le sujet : repris s'il existe déjà pour cette séance, sinon rédigé par KONAN
  const generate = async () => {
    setError(null);
    setBusy('sujet');
    try {
      const [{ getCurriculumChapters, loadCurriculumFor }] = await Promise.all([import('../../lib/curriculum/curriculumRegistry')]);
      await loadCurriculumFor(gradeLevel, [stemSubjectId]);
      const wanted = new Set(session.examChapterIds || []);
      const chapters = getCurriculumChapters(stemSubjectId, gradeLevel).filter((c) => wanted.has(c.id));
      if (!chapters.length) throw Object.assign(new Error('NO_CHAPTERS'), { code: 'NO_CHAPTERS' });
      const json = await callApiWithRetry('/api/exam-sujet', {
        subjectKey: stemSubjectId,
        gradeId: canonical, // forme officielle : le serveur choisit le bon modèle (1re A1, Tle A1…)
        classe: gradeLabel,
        matiere: subjectName,
        chapitres: chapters.map((c) => ({ titre: c.title, notions: c.points.map((p) => p.title) })),
      }, () => setRetrying(true));
      const next: Saved = { sujet: json.sujet, chapterTitles: chapters.map((c) => c.title) };
      writeSaved(session.id, next);
      setSaved(next);
      try { soundFX.playSuccessChime(); } catch { /* son facultatif */ }
    } catch (e: any) {
      setError(e?.code === 'NO_CHAPTERS'
        ? 'Je ne trouve plus les chapitres de ce devoir. Modifie ton devoir dans « Matières » pour les choisir.'
        : errorMessage(e?.code));
    } finally {
      setBusy(null);
      setRetrying(false);
    }
  };

  useEffect(() => {
    if (!saved && !busy && !error) generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Chronomètre de 2 h (l'élève peut rendre avant ; il n'est jamais bloqué)
  useEffect(() => {
    if (!saved?.startedAt || saved.correction) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [saved?.startedAt, saved?.correction]);

  // Départ : le chrono démarre tout de suite, puis l'heure du serveur fait foi (elle sert aux rappels et au
  // calcul du retard). Hors ligne : l'heure du téléphone sert de secours.
  const startExam = async () => {
    if (!saved) return;
    const local = Date.now();
    const first = { ...saved, startedAt: local };
    writeSaved(session.id, first);
    setSaved(first);
    setNow(local);
    try { soundFX.playCheckmarkPop(); } catch { /* son */ }
    try {
      const json = await callApi('/api/exam-sujet', { action: 'start', sessionId: session.id });
      const serverStart = Number(json?.startedAt);
      if (serverStart > 0) {
        setSaved((cur) => {
          if (!cur) return cur;
          const next = { ...cur, startedAt: serverStart };
          writeSaved(session.id, next);
          return next;
        });
      }
    } catch {
      // hors ligne : le chrono du téléphone continue
    }
  };

  // Alertes du chrono (30 min, 5 min, fin) : son et vibration ; à la fin, une alarme. Seule la dernière alerte
  // atteinte sonne (un élève qui rouvre KONAN en retard entend l'alarme, pas les trois d'un coup).
  const [timeAlert, setTimeAlert] = useState<{ key: string; text: string } | null>(null);
  useEffect(() => {
    if (!saved?.startedAt || saved.correction) return;
    const remainingSec = DURATION_SEC - Math.floor((now - saved.startedAt) / 1000);
    const reached = TIME_ALERTS.filter((a) => remainingSec <= a.atRemaining);
    const last = reached[reached.length - 1];
    if (!last || (saved.alerts || []).includes(last.key)) return;
    const next = { ...saved, alerts: [...new Set([...(saved.alerts || []), ...reached.map((a) => a.key)])] };
    writeSaved(session.id, next);
    setSaved(next);
    setTimeAlert({ key: last.key, text: last.text });
    try {
      if (last.key === 'fin') soundFX.playStudyAlertAlarm();
      else soundFX.playNotificationPing();
      navigator.vibrate?.(last.key === 'fin' ? [400, 200, 400, 200, 800] : [200]);
    } catch { /* son ou vibration indisponibles */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [now, saved?.startedAt, saved?.correction]);

  const addPhotos = async (files: FileList | null) => {
    if (!files?.length) return;
    setError(null);
    try {
      const room = Math.max(0, 4 - photos.length);
      const list = await Promise.all([...files].slice(0, room).map(compressPhoto));
      setPhotos((p) => [...p, ...list].slice(0, 4));
    } catch {
      setError('Je n’arrive pas à ouvrir cette photo. Réessaie avec l’appareil photo.');
    }
  };

  const sendCopy = async () => {
    if (!saved || !photos.length) return;
    setError(null);
    setBusy('correction');
    try {
      const json = await callApiWithRetry('/api/exam-correct', {
        classe: gradeLabel,
        matiere: saved.sujet.matiere || subjectName,
        sujet: { exercices: saved.sujet.exercices, corrige: saved.sujet.corrige },
        images: photos.map(({ mimeType, data }) => ({ mimeType, data })),
        sessionId: session.id, // chrono du serveur : temps mis et éventuel retard
      }, () => setRetrying(true));
      const correction: Correction = json.correction;
      if (correction.lisible) {
        // Temps mis : chrono du serveur, sinon celui du téléphone (départ hors ligne)
        const timing: ExamTiming | undefined = json.timing?.startedAt
          ? json.timing
          : saved.startedAt ? localTiming(saved.startedAt, Date.now()) : undefined;
        const next = { ...saved, correction, timing };
        writeSaved(session.id, next);
        setSaved(next);
        setPhotos([]); // les photos sont oubliées dès la correction
        try { soundFX.playVictoryJingle(); } catch { /* son */ }
      } else {
        setError(correction.appreciation);
      }
    } catch (e: any) {
      setError(errorMessage(e?.code));
    } finally {
      setBusy(null);
      setRetrying(false);
    }
  };

  const finish = afterShine(() => {
    try { localStorage.removeItem(storageKey(session.id)); } catch { /* rien */ }
    // Copie rendue hors temps : devoir validé, mais sans XP
    onComplete(session.id, { noXp: Boolean(saved?.timing && saved.timing.lateMinutes > 0) });
  });

  // ------------------------------------------------------------------ chargement / erreur avant sujet
  if (!saved) {
    return (
      <div className="max-w-md mx-auto py-14 px-4 text-center space-y-4">
        {busy ? (
          <>
            <div className="w-10 h-10 mx-auto rounded-full border-4 border-sky-200 border-t-sky-500 animate-spin" />
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Je rédige ton sujet de {subjectName} au format officiel…</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {retrying ? 'Le premier essai n’a pas abouti : je recommence, ne quitte pas cette page.' : 'Cela peut prendre jusqu’à une minute.'}
            </p>
          </>
        ) : (
          <>
            <KonanMascot pose="sad" size={120} />
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{error}</p>
            <div className="grid gap-2">
              <button type="button" onClick={generate} className="w-full py-3 rounded-2xl bg-sky-500 text-white font-black uppercase shadow-[0_4px_0_#0284C7] cursor-pointer">Réessayer</button>
              <button type="button" onClick={onExit} className="w-full py-2.5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm cursor-pointer">Retour</button>
            </div>
          </>
        )}
      </div>
    );
  }

  const { sujet, correction } = saved;
  const remaining = saved.startedAt ? Math.max(0, DURATION_SEC - Math.floor((now - saved.startedAt) / 1000)) : DURATION_SEC;
  const timeUp = Boolean(saved.startedAt) && remaining === 0;

  // ------------------------------------------------------------------ résultat de la correction
  if (correction && correction.note !== null) {
    return (
      <div className="max-w-2xl mx-auto py-6 px-4 space-y-5 animate-in zoom-in-95 duration-300">
        <div className="text-center space-y-2">
          <div className="flex justify-center"><KonanMascot pose={correction.note >= 10 ? 'jump' : 'encourage'} size={120} /></div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Ta copie est corrigée</h1>
          <div className="inline-flex items-baseline gap-1 px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 border-2 border-b-[6px] border-sky-300 dark:border-sky-600">
            <span className="text-5xl font-black text-sky-600 dark:text-sky-400 tabular-nums">{String(correction.note).replace('.', ',')}</span>
            <span className="text-base font-bold text-slate-500 dark:text-slate-400">/ 20</span>
          </div>
          <p className="text-sm font-black uppercase tracking-wider text-slate-600 dark:text-slate-300">{mention(correction.note)}</p>
        </div>

        {/* Temps mis : dans les temps, ou hors temps (copie corrigée, mais sans XP) */}
        {saved.timing && (saved.timing.lateMinutes > 0 ? (
          <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-rose-50 border-2 border-rose-200 text-rose-900 dark:bg-rose-500/10 dark:border-rose-500/30 dark:text-rose-100">
            <Clock className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="m-0 text-sm"><strong>Hors temps (+{durationLabel(saved.timing.lateMinutes)})</strong> : ta copie est corrigée, mais ce devoir ne rapporte pas de XP. Au vrai devoir, la copie est ramassée à la fin des 2 h !</p>
          </div>
        ) : (
          <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-emerald-900 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-100">
            <Clock className="w-5 h-5 shrink-0" />
            <p className="m-0 text-sm"><strong>Rendu dans les temps</strong> : en {durationLabel(Math.min(saved.timing.elapsedMinutes, 120))} sur 2 h.</p>
          </div>
        ))}

        <CorrectionReport correction={correction} />

        <button type="button" onClick={() => setShowCorrige((v) => !v)} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200 cursor-pointer">
          {showCorrige ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {showCorrige ? 'Cacher le corrigé' : 'Voir le corrigé'}
        </button>
        {showCorrige && <Corrige sujet={sujet} />}

        <button type="button" onClick={finish} className="relative overflow-hidden konan-btn-shine w-full py-4 rounded-2xl font-black uppercase tracking-wide active:translate-y-1 cursor-pointer konan-btn">
          Valider ma séance
        </button>
      </div>
    );
  }

  // ------------------------------------------------------------------ fiche d'épreuve
  return (
    <div className="max-w-3xl mx-auto py-4 sm:py-6 px-3 sm:px-4 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <button type="button" onClick={onExit} className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer" aria-label="Quitter (ton sujet est gardé)">
          <ArrowLeft className="w-5 h-5" />
        </button>
        {saved.startedAt ? (
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-black tabular-nums ${timeUp ? 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-200' : 'bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200'}`}>
            <Clock className="w-4 h-4" /> {timeUp ? 'Temps écoulé' : fmt(remaining)}
          </span>
        ) : (
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Le sujet s’affiche au départ du chrono</span>
        )}
      </div>

      {/* Alerte du chrono (30 min, 5 min, fin) */}
      {timeAlert && !correction && (
        <div role="alert" className={`flex items-start gap-2.5 p-3.5 rounded-2xl border-2 text-sm font-bold ${timeAlert.key === 'fin' ? 'bg-rose-50 border-rose-300 text-rose-900 dark:bg-rose-500/15 dark:border-rose-500/40 dark:text-rose-100' : 'bg-amber-50 border-amber-300 text-amber-900 dark:bg-amber-500/10 dark:border-amber-500/40 dark:text-amber-100'}`}>
          <Clock className="w-5 h-5 shrink-0" />
          <span className="flex-1">{timeAlert.text}</span>
          <button type="button" onClick={() => setTimeAlert(null)} aria-label="Fermer" className="p-0.5 rounded cursor-pointer opacity-70 hover:opacity-100"><X className="w-4 h-4" /></button>
        </div>
      )}

      {/* La fiche d'épreuve */}
      <article ref={sheetRef} className="rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <header className="p-4 sm:p-5 border-b-2 border-slate-100 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-3">
            <img src="/icons/konan-icon-192.png" alt="KONAN" className="w-12 h-12 rounded-2xl shrink-0" />
            <div className="min-w-0">
              <p className="text-lg font-black tracking-wide text-sky-600 dark:text-sky-400 leading-none">KONAN</p>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Devoir d’entraînement</p>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1.7fr_1fr] gap-2 text-center">
            {[
              { label: 'Classe', value: gradeLabel },
              // Coupure propre au trait d'union (« Histoire- / Géographie »), jamais au milieu d'un mot
              { label: 'Matière', value: (sujet.matiere || subjectName).replace(/-/g, '-​') },
              { label: 'Durée', value: '2 h 00' },
            ].map((x) => (
              <div key={x.label} className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/70">
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">{x.label}</p>
                <p className="text-sm font-black text-slate-900 dark:text-white break-words">{x.value}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            <strong className="text-slate-800 dark:text-slate-100">Chapitres :</strong> {saved.chapterTitles.join(' ; ')}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Cette épreuve comporte {sujet.exercices.length} exercice{sujet.exercices.length > 1 ? 's' : ''}. Elle est notée sur 20 points. Rédige tes réponses sur une feuille de copie.
          </p>
          {saved.startedAt && (
            <p className="text-xs font-bold text-slate-700 dark:text-slate-200">
              Début {clockLabel(saved.startedAt)} · Fin {clockLabel(saved.startedAt + DURATION_SEC * 1000)}
            </p>
          )}
        </header>

        {/* Sujet caché tant que le chrono n'est pas lancé (comme au vrai devoir : on retourne la feuille au signal) */}
        {!saved.startedAt ? (
          <div className="p-5 sm:p-6 text-center space-y-2">
            <p className="m-0 text-base font-black text-slate-900 dark:text-white">Le sujet est prêt, face cachée</p>
            <p className="m-0 text-sm text-slate-600 dark:text-slate-300">Prépare ta feuille de copie et ton stylo. Au départ, le sujet s’affiche et tu as 2 heures. Des rappels sonnent à 30 min et à 5 min de la fin.</p>
          </div>
        ) : (
        /* Chaque exercice dans sa carte : en-tête et points, situation, documents encadrés, données, questions */
        <div className="p-3 sm:p-5 space-y-4 text-[15px] leading-relaxed text-slate-800 dark:text-slate-100">
          {sujet.exercices.map((e) => (
            <section key={e.numero} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 overflow-hidden">
              <header className="flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03]">
                <h2 className="m-0 text-[17px] font-extrabold text-slate-900 dark:text-white">Exercice {e.numero}</h2>
                <span data-pdf-chip className="shrink-0 px-2.5 py-1 rounded-full bg-[#F5C451] text-slate-950 text-xs font-black">{pts(e.points)}</span>
              </header>
              <div className="p-4 space-y-4">
                {(() => {
                  const table = e.tableau && e.tableau.colonnes.length > 0 ? <SujetTableView table={e.tableau} /> : null;
                  const contexte = e.contexte
                    ? (e.texteNumerote ? <NumberedText text={e.contexte} /> : <div><SujetText text={e.contexte} /></div>)
                    : null;
                  const documents = (e.documents || []).length > 0 ? (
                    <div className="space-y-3">{e.documents!.map((d, i) => <DocumentCard key={i} doc={d} />)}</div>
                  ) : null;
                  const consigne = e.consigne ? <div className="font-bold text-slate-900 dark:text-white"><SujetText text={e.consigne} /></div> : null;
                  const donnees = e.donnees ? <DonneesBox text={e.donnees} /> : null;
                  const questions = e.questions.length > 0 ? (
                    <ol className="m-0 p-0 list-none space-y-2">
                      {e.questions.map((q, i) => (
                        <li key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/[0.07] space-y-1.5">
                          {/* Numéro et points sur une ligne, la question en dessous sur toute la largeur (lisible sur téléphone) */}
                          <div className="flex items-center justify-between gap-2">
                            <span data-pdf-chip className="min-w-[26px] h-[26px] px-1.5 rounded-lg bg-sky-100 text-sky-800 dark:bg-sky-400/15 dark:text-sky-300 text-[13px] font-black flex items-center justify-center">{String(q.numero || i + 1).replace(/\.+$/, '')}</span>
                            {q.points > 0 && <span className="text-xs font-black whitespace-nowrap text-amber-700 dark:text-[#F5C451]">{ptShort(q.points)}</span>}
                          </div>
                          <div className="text-[14px] leading-relaxed"><SujetText text={q.texte} /></div>
                        </li>
                      ))}
                    </ol>
                  ) : null;
                  // Situation : texte, documents, tableau et données, puis consigne et questions (ordre des sujets officiels).
                  // Tests objectifs : consigne, documents, tableau, questions, puis données.
                  return e.contexte
                    ? <>{contexte}{documents}{table}{donnees}{consigne}{questions}</>
                    : <>{consigne}{documents}{table}{questions}{donnees}</>;
                })()}
              </div>
            </section>
          ))}
        </div>
        )}
      </article>

      {/* Sujet en PDF (A4) : pour composer sur papier ; le chrono continue dans KONAN */}
      {saved.startedAt && !timeUp && (
        <button
          type="button"
          disabled={pdfBusy}
          onClick={async () => {
            if (!sheetRef.current) return;
            setPdfBusy(true);
            setError(null);
            try {
              const { downloadSujetPdf } = await import('./sujetPdf');
              const matiere = sujet.matiere || subjectName;
              const slug = matiere.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
              await downloadSujetPdf(sheetRef.current, { fileName: `devoir-konan-${slug || 'sujet'}.pdf`, footer: `KONAN · ${matiere}${gradeLabel ? ` · ${gradeLabel}` : ''}` });
            } catch (err) {
              console.warn('PDF du sujet impossible :', err);
              setError('Je n’arrive pas à fabriquer le PDF sur ce téléphone. Tu peux composer en lisant le sujet ici.');
            } finally {
              setPdfBusy(false);
            }
          }}
          className="w-full py-3 rounded-2xl border-2 border-slate-200 dark:border-white/15 bg-white dark:bg-transparent text-slate-700 dark:text-slate-200 font-black text-sm cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <FileText className="w-4 h-4" /> {pdfBusy ? 'Je prépare le PDF…' : 'Télécharger le sujet en PDF (A4)'}
        </button>
      )}

      {/* Actions */}
      {error && <p className="p-3 rounded-2xl bg-rose-50 border-2 border-rose-200 text-rose-800 dark:bg-rose-500/10 dark:border-rose-500/30 dark:text-rose-200 text-sm font-semibold">{error}</p>}

      {!saved.startedAt ? (
        <button type="button" onClick={startExam} className="relative overflow-hidden konan-btn-shine w-full py-4 rounded-2xl bg-sky-500 text-white font-black uppercase tracking-wide shadow-[0_4px_0_#0284C7] active:translate-y-1 cursor-pointer flex items-center justify-center gap-2">
          <Clock className="w-5 h-5" /> Commencer l’épreuve (2 h)
        </button>
      ) : !showPhotos ? (
        <button type="button" onClick={() => setShowPhotos(true)} className="w-full py-4 rounded-2xl bg-sky-400 text-slate-950 font-black uppercase tracking-wide shadow-[0_4px_0_#0369A1] active:translate-y-1 cursor-pointer flex items-center justify-center gap-2">
          <FileText className="w-5 h-5" /> {timeUp ? 'Le temps est écoulé : faire corriger ma copie' : 'J’ai terminé : faire corriger ma copie'}
        </button>
      ) : (
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 space-y-3">
          <p className="text-sm font-black text-slate-900 dark:text-white">Prends ta copie en photo (1 à 4 pages)</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Pose la feuille à plat, avec de la lumière. Les photos servent seulement à la correction : je ne les garde pas.</p>
          <input ref={fileRef} type="file" accept="image/*" capture="environment" multiple className="hidden" onChange={(ev) => { addPhotos(ev.target.files); ev.target.value = ''; }} />
          {photos.length > 0 && (
            <div className="grid grid-cols-4 gap-2">
              {photos.map((p, i) => (
                <div key={i} className="relative">
                  <img src={p.preview} alt={`Page ${i + 1}`} className="w-full aspect-[3/4] object-cover rounded-xl border-2 border-slate-200 dark:border-slate-700" />
                  <button type="button" onClick={() => setPhotos((list) => list.filter((_, j) => j !== i))} className="absolute top-1 right-1 p-1 rounded-lg bg-white/90 text-rose-600 cursor-pointer" aria-label={`Retirer la page ${i + 1}`}>
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
          {photos.length < 4 && (
            <button type="button" onClick={() => fileRef.current?.click()} className="w-full py-3 rounded-2xl border-2 border-dashed border-sky-300 dark:border-sky-600 text-sky-700 dark:text-sky-300 font-black text-sm cursor-pointer flex items-center justify-center gap-2">
              <Camera className="w-5 h-5" /> {photos.length ? 'Ajouter une page' : 'Photographier ma copie'}
            </button>
          )}
          <button
            type="button"
            disabled={!photos.length || busy === 'correction'}
            onClick={sendCopy}
            className="relative overflow-hidden konan-btn-shine w-full py-4 rounded-2xl bg-sky-500 text-white font-black uppercase tracking-wide shadow-[0_4px_0_#0284C7] active:translate-y-1 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            {busy === 'correction' ? (retrying ? 'Je recommence la correction…' : 'Je corrige ta copie…') : 'Envoyer ma copie à KONAN'}
          </button>
        </div>
      )}
    </div>
  );
};

// ====================================================================== CORRECTION STRUCTURÉE
const fr = (n: number) => String(n).replace('.', ',');

/** Mention habituelle des bulletins ivoiriens. */
function mention(note: number): string {
  if (note >= 18) return 'Excellent';
  if (note >= 16) return 'Très bien';
  if (note >= 14) return 'Bien';
  if (note >= 12) return 'Assez bien';
  if (note >= 10) return 'Passable';
  return 'Insuffisant';
}

const STATUT_STYLE: Record<QuestionStatut, { label: string; Icon: React.FC<{ className?: string }>; chip: string; edge: string }> = {
  juste: { label: 'Juste', Icon: Check, chip: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300', edge: 'border-l-emerald-500' },
  partiel: { label: 'En partie', Icon: AlertTriangle, chip: 'bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300', edge: 'border-l-amber-500' },
  faux: { label: 'Faux', Icon: X, chip: 'bg-rose-100 text-rose-800 dark:bg-rose-500/15 dark:text-rose-300', edge: 'border-l-rose-500' },
  absent: { label: 'Non traitée', Icon: Minus, chip: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300', edge: 'border-l-slate-300 dark:border-l-slate-600' },
};

/** Une ligne « étiquette : valeur » du détail d'une question. */
const DetailRow: React.FC<{ label: string; text: string; tone?: 'neutral' | 'good' | 'bad' }> = ({ label, text, tone = 'neutral' }) => (
  <div className="grid grid-cols-[88px_1fr] gap-2 text-[13px] leading-snug">
    <span className="text-[11px] font-black uppercase tracking-wide text-slate-500 dark:text-slate-400 pt-0.5">{label}</span>
    <span className={`min-w-0 ${tone === 'good' ? 'text-emerald-800 dark:text-emerald-200 font-semibold' : tone === 'bad' ? 'text-rose-800 dark:text-rose-200' : 'text-slate-700 dark:text-slate-200'}`}>
      <SujetText text={text} />
    </span>
  </div>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">{children}</p>
);

/**
 * Bulletin de correction : bilan chiffré, points forts / à revoir, puis chaque exercice question par question
 * (statut, points, ta réponse, l'attendu, ton erreur) et la grille critère par critère, enfin les conseils numérotés.
 * Une ancienne correction (sans détail) s'affiche avec le commentaire de l'exercice seulement.
 */
const CorrectionReport: React.FC<{ correction: Correction }> = ({ correction }) => {
  const allQuestions = correction.exercices.flatMap((e) => e.questions || []);
  const count = (s: QuestionStatut) => allQuestions.filter((q) => q.statut === s).length;
  const pointsForts = correction.pointsForts || [];
  const aRevoir = correction.aRevoir || [];
  return (
    <div className="space-y-5">
      {/* 1. Bilan en chiffres */}
      {allQuestions.length > 0 && (
        <div className="grid grid-cols-4 gap-2 text-center">
          {(['juste', 'partiel', 'faux', 'absent'] as QuestionStatut[]).map((s) => {
            const { label, Icon, chip } = STATUT_STYLE[s];
            return (
              <div key={s} className={`py-2 rounded-xl ${chip}`}>
                <Icon className="w-4 h-4 mx-auto" />
                <p className="text-lg font-black tabular-nums leading-tight">{count(s)}</p>
                <p className="text-[10px] font-bold uppercase leading-tight">{label}</p>
              </div>
            );
          })}
        </div>
      )}

      {/* 2. Points forts et notions à revoir */}
      {(pointsForts.length > 0 || aRevoir.length > 0) && (
        <div className="grid sm:grid-cols-2 gap-3">
          {pointsForts.length > 0 && (
            <div className="p-3.5 rounded-2xl bg-emerald-50 border-2 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/30 space-y-2">
              <SectionTitle>Ce que tu maîtrises</SectionTitle>
              <ul className="space-y-1.5">
                {pointsForts.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm text-emerald-900 dark:text-emerald-100"><Check className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />{p}</li>
                ))}
              </ul>
            </div>
          )}
          {aRevoir.length > 0 && (
            <div className="p-3.5 rounded-2xl bg-amber-50 border-2 border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/30 space-y-2">
              <SectionTitle>À revoir</SectionTitle>
              <ul className="space-y-2">
                {aRevoir.map((r, i) => (
                  <li key={i} className="text-sm">
                    <p className="font-black text-amber-900 dark:text-amber-100">{r.notion}</p>
                    {r.pourquoi && <p className="text-[13px] text-amber-800 dark:text-amber-200">{r.pourquoi}</p>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* 3. Le mot de KONAN */}
      <div className="flex gap-3 p-3.5 rounded-2xl bg-sky-50 border-2 border-sky-200 dark:bg-sky-500/10 dark:border-sky-500/30">
        <KonanMascot pose="encourage" size={44} className="shrink-0" />
        <p className="min-w-0 text-sm leading-relaxed text-sky-900 dark:text-sky-100">{correction.appreciation}</p>
      </div>

      {/* 4. Détail exercice par exercice */}
      <div className="space-y-3">
        <SectionTitle>Détail de la correction</SectionTitle>
        {correction.exercices.map((e) => (
          <section key={e.numero} className="rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 overflow-hidden">
            <header className="p-3.5 space-y-2 bg-slate-50 dark:bg-slate-800/60">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-black text-slate-900 dark:text-white">Exercice {e.numero}</span>
                <span className="text-sm font-black tabular-nums text-slate-800 dark:text-slate-100">{fr(e.obtenu)} / {fr(e.sur)}</span>
              </div>
              <div className="h-2 rounded-full bg-white dark:bg-slate-900 overflow-hidden">
                <div
                  className={`h-full rounded-full ${e.obtenu >= e.sur * 0.75 ? 'bg-emerald-500' : e.obtenu >= e.sur * 0.4 ? 'bg-amber-500' : 'bg-rose-500'}`}
                  style={{ width: `${e.sur ? Math.min(100, (e.obtenu / e.sur) * 100) : 0}%` }}
                />
              </div>
              {e.commentaire && <p className="text-[13px] text-slate-600 dark:text-slate-300">{e.commentaire}</p>}
            </header>

            {(e.questions?.length || 0) > 0 && (
              <ol className="divide-y divide-slate-100 dark:divide-slate-800">
                {e.questions!.map((q, i) => {
                  const st = STATUT_STYLE[q.statut] || STATUT_STYLE.faux;
                  return (
                    <li key={i} className={`p-3.5 space-y-2 border-l-4 ${st.edge}`}>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-black text-slate-900 dark:text-white">Question {numLabel(q.numero).replace(/\.$/, '')}</span>
                        <span className="flex items-center gap-2">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-black ${st.chip}`}>
                            <st.Icon className="w-3 h-3" />{st.label}
                          </span>
                          <span className="text-xs font-black tabular-nums text-slate-600 dark:text-slate-300">
                            {fr(q.obtenu)}{q.sur !== null ? ` / ${fr(q.sur)}` : ''} pt
                          </span>
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        {q.copie && <DetailRow label="Ta réponse" text={q.copie} />}
                        {q.attendu && <DetailRow label="Attendu" text={q.attendu} tone="good" />}
                        {q.erreur && <DetailRow label="Ton erreur" text={q.erreur} tone="bad" />}
                      </div>
                    </li>
                  );
                })}
              </ol>
            )}

            {(e.grille?.length || 0) > 0 && (
              <div className="p-3.5 space-y-2 border-t-2 border-slate-100 dark:border-slate-800">
                <SectionTitle>Grille de notation</SectionTitle>
                {e.grille!.map((g, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex items-center justify-between gap-3 text-[13px]">
                      <span className="min-w-0 font-semibold text-slate-700 dark:text-slate-200">{g.critere}</span>
                      <span className="shrink-0 font-black tabular-nums text-slate-800 dark:text-slate-100">{fr(g.obtenu)} / {fr(g.sur)}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full rounded-full bg-sky-500" style={{ width: `${g.sur ? Math.min(100, (g.obtenu / g.sur) * 100) : 0}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* 5. Plan d'action numéroté */}
      {correction.conseils.length > 0 && (
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 space-y-2.5">
          <SectionTitle>À faire avant le devoir</SectionTitle>
          <ol className="space-y-2">
            {correction.conseils.map((c, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                <span className="w-6 h-6 shrink-0 rounded-full bg-sky-500 text-white text-xs font-black flex items-center justify-center">{i + 1}</span>
                <span className="min-w-0 pt-0.5">{c}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

/** Corrigé type, exercice par exercice et question par question : étapes numérotées, puis la réponse finale encadrée. */
const Corrige: React.FC<{ sujet: Sujet }> = ({ sujet }) => (
  <div className="space-y-3">
    {sujet.exercices.map((e) => (
      <section key={e.numero} className="rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 overflow-hidden">
        <header className="px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between gap-3">
          <span className="text-sm font-black text-slate-900 dark:text-white">Corrigé de l’exercice {e.numero}</span>
          <span className="text-xs font-black text-slate-500 dark:text-slate-400">{pts(e.points)}</span>
        </header>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {sujet.corrige.filter((c) => c.exercice === e.numero).map((c, i) => {
            const etapes = c.etapes && c.etapes.length ? c.etapes : null;
            return (
              <div key={i} className="p-3.5 space-y-2 text-sm">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-black text-slate-900 dark:text-white">Question {numLabel(c.question).replace(/\.$/, '')}</span>
                  <span className="text-xs font-black text-slate-500 dark:text-slate-400 tabular-nums">{ptShort(c.points)}</span>
                </div>
                {etapes ? (
                  <ol className="space-y-1.5">
                    {etapes.map((step, j) => (
                      <li key={j} className="flex gap-2 text-slate-700 dark:text-slate-200">
                        <span className="w-5 h-5 shrink-0 rounded-full bg-slate-200 dark:bg-slate-700 text-[11px] font-black flex items-center justify-center text-slate-700 dark:text-slate-200">{j + 1}</span>
                        <span className="min-w-0"><SujetText text={step.replace(/^\s*étape\s*\d+\s*[:.-]\s*/i, '')} /></span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-slate-700 dark:text-slate-200"><SujetText text={c.reponse} /></p>
                )}
                {c.resultat && (
                  <div className="px-3 py-2 rounded-xl bg-emerald-50 border-2 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/30">
                    <span className="text-[11px] font-black uppercase tracking-wide text-emerald-700 dark:text-emerald-300 mr-2">Réponse</span>
                    <span className="font-bold text-emerald-900 dark:text-emerald-100"><SujetText text={c.resultat} /></span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {e.grille && (
          <div className="px-3.5 py-3 border-t-2 border-slate-100 dark:border-slate-800 space-y-1.5">
            <SectionTitle>Grille de notation</SectionTitle>
            {e.grille.map((g) => (
              <div key={g.critere} className="grid grid-cols-[1fr_auto] gap-2 text-xs text-slate-600 dark:text-slate-300">
                <span><strong className="text-slate-800 dark:text-slate-100">{g.critere}</strong> : {g.indicateurs}</span>
                <span className="font-black tabular-nums">{ptShort(g.points)}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    ))}
  </div>
);
