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
import { MathRenderer } from '../../components/common/MathRenderer';
import { KonanMascot } from '../../components/common/KonanMascot';
import { auth } from '../../lib/firebase';
import { afterShine } from '../../lib/shineClick';
import { soundFX } from '../../lib/audioEffects';
import { LITERARY_EXAM_SUBJECTS } from '../../lib/exam/examPrepRules';

export interface ExamSujetViewProps {
  userId: string;
  session: StudySession;
  subjectName: string;
  stemSubjectId: StemSubjectId;
  gradeLevel: CurriculumGradeLevel;
  onExit: () => void;
  onComplete: (sessionId: string) => void;
}

interface SujetQuestion { numero: string; texte: string; points: number }
interface SujetExercice {
  numero: number;
  points: number;
  nature?: string;
  consigne: string;
  contexte: string;
  donnees: string;
  tableau: { colonnes: string[]; lignes: string[][] } | null;
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
interface Saved {
  sujet: Sujet;
  chapterTitles: string[];
  startedAt?: number;
  correction?: Correction;
}

const DURATION_SEC = 2 * 60 * 60;

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

/** Texte du sujet : formules rendues (matières scientifiques), retours à la ligne gardés, pas de fausses fractions. */
const SujetText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const plain = useContext(PlainTextContext);
  return (
    <span className={`whitespace-pre-line ${className}`}>
      {plain ? plainText(text) : <MathRenderer text={noWordFractions(text)} />}
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
const storageKey = (sessionId: string) => `konan_exam_sujet_v1_${sessionId}`;
const pts = (n: number) => `${String(n).replace('.', ',')} point${n > 1 ? 's' : ''}`;
const ptShort = (n: number) => `${String(n).replace('.', ',')} pt`;
const fmt = (sec: number) => {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

const ERRORS: Record<string, string> = {
  DAILY_LIMIT: 'Tu as atteint la limite du jour (4 sujets et 4 corrections). Reviens demain !',
  UNAUTHORIZED: 'Connecte-toi à ton compte pour utiliser les sujets de devoir.',
  TOKEN_EXPIRED: 'Ta connexion a expiré : ferme et rouvre KONAN, puis réessaie.',
  AI_UNAVAILABLE: 'Je suis un peu débordé en ce moment. Réessaie dans une minute.',
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

export const ExamSujetView: React.FC<ExamSujetViewProps> = (props) => (
  <PlainTextContext.Provider value={(LITERARY_EXAM_SUBJECTS as readonly string[]).includes(props.stemSubjectId)}>
    <ExamSujetViewInner {...props} />
  </PlainTextContext.Provider>
);

const ExamSujetViewInner: React.FC<ExamSujetViewProps> = ({ userId: _userId, session, subjectName, stemSubjectId, gradeLevel, onExit, onComplete }) => {
  const [saved, setSaved] = useState<Saved | null>(() => readSaved(session.id));
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState<'sujet' | 'correction' | null>(null);
  const [photos, setPhotos] = useState<{ mimeType: string; data: string; preview: string }[]>([]);
  const [showPhotos, setShowPhotos] = useState(false);
  const [showCorrige, setShowCorrige] = useState(false);
  const [now, setNow] = useState(Date.now());
  const fileRef = useRef<HTMLInputElement>(null);
  const gradeLabel = GRADE_LEVELS.find((g) => g.id === gradeLevel)?.badge || 'Seconde';

  // 1. Le sujet : repris s'il existe déjà pour cette séance, sinon rédigé par KONAN
  const generate = async () => {
    setError(null);
    setBusy('sujet');
    try {
      const [{ getCurriculumChapters }] = await Promise.all([import('../../lib/curriculum/curriculumRegistry')]);
      const wanted = new Set(session.examChapterIds || []);
      const chapters = getCurriculumChapters(stemSubjectId, gradeLevel).filter((c) => wanted.has(c.id));
      if (!chapters.length) throw Object.assign(new Error('NO_CHAPTERS'), { code: 'NO_CHAPTERS' });
      const json = await callApi('/api/exam-sujet', {
        subjectKey: stemSubjectId,
        gradeId: gradeLevel,
        classe: gradeLabel,
        matiere: subjectName,
        chapitres: chapters.map((c) => ({ titre: c.title, notions: c.points.map((p) => p.title) })),
      });
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

  const startExam = () => {
    if (!saved) return;
    const next = { ...saved, startedAt: Date.now() };
    writeSaved(session.id, next);
    setSaved(next);
    setNow(Date.now());
    try { soundFX.playCheckmarkPop(); } catch { /* son */ }
  };

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
      const json = await callApi('/api/exam-correct', {
        classe: gradeLabel,
        matiere: saved.sujet.matiere || subjectName,
        sujet: { exercices: saved.sujet.exercices, corrige: saved.sujet.corrige },
        images: photos.map(({ mimeType, data }) => ({ mimeType, data })),
      });
      const correction: Correction = json.correction;
      if (correction.lisible) {
        const next = { ...saved, correction };
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
    }
  };

  const finish = afterShine(() => {
    try { localStorage.removeItem(storageKey(session.id)); } catch { /* rien */ }
    onComplete(session.id);
  });

  // ------------------------------------------------------------------ chargement / erreur avant sujet
  if (!saved) {
    return (
      <div className="max-w-md mx-auto py-14 px-4 text-center space-y-4">
        {busy ? (
          <>
            <div className="w-10 h-10 mx-auto rounded-full border-4 border-sky-200 border-t-sky-500 animate-spin" />
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Je rédige ton sujet de {subjectName} au format officiel…</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Cela peut prendre jusqu’à une minute.</p>
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

        <CorrectionReport correction={correction} />

        <button type="button" onClick={() => setShowCorrige((v) => !v)} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200 cursor-pointer">
          {showCorrige ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {showCorrige ? 'Cacher le corrigé' : 'Voir le corrigé'}
        </button>
        {showCorrige && <Corrige sujet={sujet} />}

        <button type="button" onClick={finish} className="relative overflow-hidden konan-btn-shine w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white font-black uppercase tracking-wide shadow-[0_5px_0_#065f46] active:translate-y-1 cursor-pointer">
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
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Lis le sujet, puis lance le chrono</span>
        )}
      </div>

      {/* La fiche d'épreuve */}
      <article className="rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
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
            Cette épreuve comporte {sujet.exercices.length} exercices. Elle est notée sur 20 points. Rédige tes réponses sur une feuille de copie.
          </p>
        </header>

        <div className="p-4 sm:p-6 space-y-6 text-[15px] leading-relaxed text-slate-800 dark:text-slate-100">
          {sujet.exercices.map((e) => (
            <section key={e.numero} className="space-y-2.5">
              <h2 className="font-black text-slate-900 dark:text-white underline underline-offset-4 decoration-2">
                EXERCICE {e.numero} ({pts(e.points)})
              </h2>
              {(() => {
                const table = e.tableau && e.tableau.colonnes.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className={`w-full border-collapse text-sm ${e.tableau.colonnes.length > 3 ? 'min-w-[480px]' : ''}`}>
                      <thead>
                        <tr>
                          {e.tableau.colonnes.map((c, i) => (
                            <th key={i} className="border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 px-2 py-1.5 text-left font-black"><SujetText text={c} /></th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {e.tableau.lignes.map((row, r) => (
                          <tr key={r}>
                            {row.map((cell, c) => (
                              <td key={c} className="border border-slate-300 dark:border-slate-600 px-2 py-1.5 align-top"><SujetText text={cell} /></td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null;
                const contexte = e.contexte
                  ? (e.texteNumerote ? <NumberedText text={e.contexte} /> : <div><SujetText text={e.contexte} /></div>)
                  : null;
                const consigne = e.consigne ? <div className="font-semibold"><SujetText text={e.consigne} /></div> : null;
                const donnees = e.donnees ? <div className="text-sm text-slate-600 dark:text-slate-300 italic"><SujetText text={e.donnees} /></div> : null;
                const questions = e.questions.length > 0 ? (
                  <ol className="space-y-1.5">
                    {e.questions.map((q, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="font-black shrink-0">{numLabel(q.numero)}</span>
                        <span className="min-w-0"><SujetText text={q.texte} />{q.points > 0 && <span className="ml-1 text-xs font-bold text-slate-500 dark:text-slate-400">({ptShort(q.points)})</span>}</span>
                      </li>
                    ))}
                  </ol>
                ) : null;
                // Situation : contexte, tableau et données, puis consigne et questions (ordre des sujets officiels).
                // Tests objectifs : consigne, tableau, questions, puis données.
                return e.contexte
                  ? <>{contexte}{table}{donnees}{consigne}{questions}</>
                  : <>{consigne}{table}{questions}{donnees}</>;
              })()}
            </section>
          ))}
        </div>
      </article>

      {/* Actions */}
      {error && <p className="p-3 rounded-2xl bg-rose-50 border-2 border-rose-200 text-rose-800 dark:bg-rose-500/10 dark:border-rose-500/30 dark:text-rose-200 text-sm font-semibold">{error}</p>}

      {!saved.startedAt ? (
        <button type="button" onClick={startExam} className="relative overflow-hidden konan-btn-shine w-full py-4 rounded-2xl bg-sky-500 text-white font-black uppercase tracking-wide shadow-[0_4px_0_#0284C7] active:translate-y-1 cursor-pointer flex items-center justify-center gap-2">
          <Clock className="w-5 h-5" /> Commencer l’épreuve (2 h)
        </button>
      ) : !showPhotos ? (
        <button type="button" onClick={() => setShowPhotos(true)} className="w-full py-4 rounded-2xl bg-emerald-500 text-white font-black uppercase tracking-wide shadow-[0_4px_0_#047857] active:translate-y-1 cursor-pointer flex items-center justify-center gap-2">
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
            {busy === 'correction' ? 'Je corrige ta copie…' : 'Envoyer ma copie à KONAN'}
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
