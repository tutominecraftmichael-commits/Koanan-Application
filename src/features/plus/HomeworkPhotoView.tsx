import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Camera, ChevronDown, ChevronUp, Gem, ImagePlus, Lightbulb, ShieldCheck, X } from 'lucide-react';
import {
  CorrectionReport, Corrige, ResultPlush, WaitingKonan, callApiWithRetry, compressPhoto, errorMessage, mention,
  saveDevoirMistakes, type Correction, type Sujet,
} from '../exam/ExamSujetView';
import type { TutorContext } from '../../services/tutorApi';
import { soundFX } from '../../lib/audioEffects';

/**
 * KONAN Plus — « Corriger mon devoir » : l'élève photographie l'énoncé donné par son professeur et sa copie.
 * KONAN lit l'énoncé (et son barème), rédige le corrigé, puis corrige la copie avec les mêmes règles que les
 * devoirs de KONAN. Le résultat reste sur le téléphone (7 jours) ; les photos, elles, ne sont gardées nulle part.
 */
interface Props {
  userId: string;
  classe: string;
  country?: string;
  /** Matières de l'élève (raccourcis pour la matière du devoir) */
  subjects?: string[];
  onExit: () => void;
  onNotUnderstood?: (context: TutorContext) => void;
}

type Photo = { mimeType: string; data: string; preview: string };
interface Result { sujet: Sujet & { baremeLu?: boolean; illisibles?: string[]; total?: number }; correction: Correction & { noteBrute?: number; noteSur?: number }; at: number }

const KEEP_MS = 7 * 24 * 3600 * 1000;
const MAX_PHOTOS = 4;
// Corps de la requête limité par Vercel (≈ 4,5 Mo) : au-delà, les photos sont réduites un peu plus
const MAX_BODY_CHARS = 3_900_000;
const storageKey = (uid: string) => `konan_devoir_photo_${uid}`;
const fr = (n: number) => String(n).replace('.', ',');

const PHOTO_STEPS: [number, string][] = [
  [0, 'Je lis l’énoncé de ton professeur…'],
  [8, 'Je recopie le barème écrit sur le sujet…'],
  [16, 'Je prépare le corrigé : je refais chaque calcul…'],
  [30, 'Je lis ta copie, ligne par ligne…'],
  [42, 'Je corrige question par question…'],
  [60, 'Je compte tes points et je prépare tes conseils…'],
];

const ERRORS: Record<string, string> = {
  PLUS_REQUIRED: 'Corriger un devoir en photo fait partie de KONAN Plus.',
  DAILY_LIMIT: 'Tu as déjà fait corriger 3 devoirs aujourd’hui. Reviens demain !',
  NO_SUJET_IMAGE: 'Ajoute au moins une photo de l’énoncé.',
  NO_IMAGE: 'Ajoute au moins une photo de ta copie.',
  BAD_IMAGE: 'Une des photos ne peut pas être lue. Reprends-la avec l’appareil photo.',
  TOO_LARGE: 'Tes photos sont trop lourdes. Envoie moins de pages.',
};

function readResult(uid: string): Result | null {
  try {
    const r = JSON.parse(localStorage.getItem(storageKey(uid)) || 'null') as Result | null;
    return r && Date.now() - r.at < KEEP_MS ? r : null;
  } catch {
    return null;
  }
}

const PhotoStrip: React.FC<{
  title: string; hint: string; photos: Photo[]; onAdd: (files: FileList | null) => void; onRemove: (i: number) => void; disabled?: boolean; step: number;
}> = ({ title, hint, photos, onAdd, onRemove, disabled, step }) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <section className="p-4 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 space-y-3">
      <div className="flex items-start gap-3">
        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shrink-0 ${photos.length ? 'bg-emerald-500 text-white' : 'bg-sky-100 text-sky-700 dark:bg-sky-400/15 dark:text-sky-300'}`}>{step}</span>
        <div className="min-w-0">
          <h2 className="text-[15px] font-black text-slate-900 dark:text-white">{title}</h2>
          <p className="text-[12.5px] text-slate-600 dark:text-slate-400">{hint}</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {photos.map((p, i) => (
          <div key={i} className="relative aspect-[3/4] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            <img src={p.preview} alt={`${title} — page ${i + 1}`} className="w-full h-full object-cover" />
            <button type="button" onClick={() => onRemove(i)} disabled={disabled} aria-label={`Retirer la page ${i + 1}`} className="absolute top-1 right-1 w-6 h-6 rounded-full bg-slate-900/70 text-white flex items-center justify-center cursor-pointer">
              <X className="w-3.5 h-3.5" />
            </button>
            <span className="absolute bottom-1 left-1 px-1.5 rounded-md bg-slate-900/70 text-white text-[10px] font-black">p. {i + 1}</span>
          </div>
        ))}
        {photos.length < MAX_PHOTOS && (
          <button type="button" onClick={() => ref.current?.click()} disabled={disabled} className="aspect-[3/4] rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-500/50 text-sky-700 dark:text-sky-300 hover:bg-sky-50 dark:hover:bg-sky-400/10 flex flex-col items-center justify-center gap-1 text-[11px] font-black cursor-pointer disabled:opacity-50">
            {photos.length ? <ImagePlus className="w-5 h-5" /> : <Camera className="w-6 h-6" />}
            {photos.length ? 'Page suivante' : 'Prendre en photo'}
          </button>
        )}
      </div>
      <input ref={ref} type="file" accept="image/*" multiple className="hidden" onChange={(e) => { onAdd(e.target.files); e.target.value = ''; }} />
    </section>
  );
};

export const HomeworkPhotoView: React.FC<Props> = ({ userId, classe, country, subjects = [], onExit, onNotUnderstood }) => {
  const [result, setResult] = useState<Result | null>(() => readResult(userId));
  const [sujetPhotos, setSujetPhotos] = useState<Photo[]>([]);
  const [copyPhotos, setCopyPhotos] = useState<Photo[]>([]);
  const [matiere, setMatiere] = useState('');
  const [busy, setBusy] = useState(false);
  const [retrying, setRetrying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [showCorrige, setShowCorrige] = useState(false);
  // Fichiers d'origine gardés le temps de l'envoi : réduits davantage si l'ensemble est trop lourd
  const files = useRef<{ sujet: Blob[]; copy: Blob[] }>({ sujet: [], copy: [] });

  useEffect(() => { window.scrollTo({ top: 0 }); }, [result]);

  const add = (kind: 'sujet' | 'copy') => async (list: FileList | null) => {
    if (!list?.length) return;
    setError(null);
    const current = kind === 'sujet' ? sujetPhotos : copyPhotos;
    const picked = [...list].filter((f) => f.type.startsWith('image/')).slice(0, MAX_PHOTOS - current.length);
    try {
      const done = await Promise.all(picked.map((f) => compressPhoto(f)));
      files.current[kind] = [...files.current[kind], ...picked].slice(0, MAX_PHOTOS);
      (kind === 'sujet' ? setSujetPhotos : setCopyPhotos)((p) => [...p, ...done].slice(0, MAX_PHOTOS));
    } catch {
      setError('Je n’arrive pas à ouvrir cette photo. Reprends-la avec l’appareil photo.');
    }
  };
  const remove = (kind: 'sujet' | 'copy') => (i: number) => {
    files.current[kind] = files.current[kind].filter((_, j) => j !== i);
    (kind === 'sujet' ? setSujetPhotos : setCopyPhotos)((p) => p.filter((_, j) => j !== i));
  };

  const send = async () => {
    if (!sujetPhotos.length || !copyPhotos.length || busy) return;
    setError(null);
    setBusy(true);
    try {
      let sujetImgs = sujetPhotos;
      let copyImgs = copyPhotos;
      const size = (a: Photo[]) => a.reduce((s, p) => s + p.data.length, 0);
      if (size(sujetImgs) + size(copyImgs) > MAX_BODY_CHARS) {
        // Trop lourd pour un seul envoi : mêmes photos, un peu plus petites (toujours lisibles)
        [sujetImgs, copyImgs] = await Promise.all([
          Promise.all(files.current.sujet.map((f) => compressPhoto(f, 1280, 0.62))),
          Promise.all(files.current.copy.map((f) => compressPhoto(f, 1280, 0.62))),
        ]);
      }
      const json = await callApiWithRetry('/api/exam-correct', {
        mode: 'photo',
        classe,
        matiere: matiere.trim(),
        country,
        sujetImages: sujetImgs.map(({ mimeType, data }) => ({ mimeType, data })),
        copyImages: copyImgs.map(({ mimeType, data }) => ({ mimeType, data })),
      }, () => setRetrying(true));
      if (typeof json.remaining === 'number') setRemaining(json.remaining);
      if (json.sujetIllisible) { setError(json.raison || 'Je n’arrive pas à lire l’énoncé. Reprends les photos bien à plat, avec de la lumière.'); return; }
      const correction: Result['correction'] = json.correction;
      if (!correction.lisible) { setError(correction.appreciation || 'Je n’arrive pas à lire ta copie. Reprends les photos bien à plat, avec de la lumière.'); return; }
      const next: Result = { sujet: json.sujet, correction, at: Date.now() };
      try { localStorage.setItem(storageKey(userId), JSON.stringify(next)); } catch { /* stockage plein : résultat affiché quand même */ }
      saveDevoirMistakes(userId, next.sujet, correction); // KONE s'en souviendra dans « Je ne comprends pas »
      setResult(next);
      setSujetPhotos([]); setCopyPhotos([]); files.current = { sujet: [], copy: [] }; // photos oubliées
      try { soundFX.playVictoryJingle(); } catch { /* son */ }
    } catch (e: any) {
      setError(ERRORS[e?.code] || errorMessage(e?.code));
    } finally {
      setBusy(false);
      setRetrying(false);
    }
  };

  const newHomework = () => {
    setResult(null);
    setShowCorrige(false);
    setError(null);
    try { localStorage.removeItem(storageKey(userId)); } catch { /* sans effet */ }
  };

  const Header = (
    <div className="flex items-center gap-3">
      <button type="button" onClick={onExit} aria-label="Retour" className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
        <ArrowLeft className="w-5 h-5" />
      </button>
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300 inline-flex items-center gap-1"><Gem className="w-3 h-3" /> KONAN Plus</p>
        <h1 className="text-lg font-black text-slate-900 dark:text-white leading-tight">Corriger mon devoir</h1>
      </div>
    </div>
  );

  // ------------------------------------------------------------------ résultat
  if (result) {
    const { sujet, correction } = result;
    const note = correction.note ?? 0;
    return (
      <div className="max-w-2xl mx-auto py-4 sm:py-6 px-4 space-y-5 animate-in fade-in duration-300">
        {Header}
        <div className="text-center space-y-2">
          <div className="flex justify-center"><ResultPlush note={note} /></div>
          <p className="text-sm font-bold text-slate-600 dark:text-slate-300">{sujet.titre}{sujet.matiere ? ` · ${sujet.matiere}` : ''}</p>
          <div className="inline-flex items-baseline gap-1 px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 border-2 border-b-[6px] border-sky-300 dark:border-sky-600">
            <span className="text-5xl font-black text-sky-600 dark:text-sky-400 tabular-nums">{fr(note)}</span>
            <span className="text-base font-bold text-slate-500 dark:text-slate-400">/ 20</span>
          </div>
          {correction.noteSur !== undefined && correction.noteBrute !== undefined && (
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Sur ton devoir : {fr(correction.noteBrute)} / {fr(correction.noteSur)}</p>
          )}
          <p className="text-sm font-black uppercase tracking-wider text-slate-600 dark:text-slate-300">{mention(note)}</p>
        </div>

        {/* Honnêteté : d'où vient le barème, et c'est une estimation */}
        <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-white/[0.03] dark:border-white/10">
          <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5 text-sky-700 dark:text-sky-300" />
          <p className="m-0 text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
            {sujet.baremeLu ? 'Barème de ton professeur, lu sur le sujet.' : 'Aucun point n’était écrit sur le sujet : KONAN a proposé un barème sur 20.'}
            {' '}Note estimée par KONAN : ton professeur peut noter un peu différemment.
            {sujet.illisibles && sujet.illisibles.length > 0 && <> Question{sujet.illisibles.length > 1 ? 's' : ''} illisible{sujet.illisibles.length > 1 ? 's' : ''} sur la photo, pas corrigée{sujet.illisibles.length > 1 ? 's' : ''} : {sujet.illisibles.join(', ')}.</>}
          </p>
        </div>

        <CorrectionReport correction={correction} sujet={sujet} onAsk={onNotUnderstood} />

        <button type="button" onClick={() => setShowCorrige((v) => !v)} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200 cursor-pointer">
          {showCorrige ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {showCorrige ? 'Cacher le corrigé' : 'Voir le corrigé complet'}
        </button>
        {showCorrige && <Corrige sujet={sujet} />}

        <div className="grid sm:grid-cols-2 gap-2.5">
          <button type="button" onClick={newHomework} className="w-full py-3.5 rounded-2xl font-black text-sm bg-[#0F172A] text-white hover:bg-[#1E293B] dark:bg-amber-300 dark:text-slate-950 dark:hover:bg-amber-200 inline-flex items-center justify-center gap-2 cursor-pointer">
            <Camera className="w-4 h-4" /> Corriger un autre devoir
          </button>
          <button type="button" onClick={onExit} className="w-full py-3.5 rounded-2xl font-black text-sm border-2 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 cursor-pointer">
            Terminer
          </button>
        </div>
      </div>
    );
  }

  // ------------------------------------------------------------------ attente
  if (busy) {
    return (
      <div className="max-w-2xl mx-auto py-10 px-4 space-y-6">
        {Header}
        <WaitingKonan steps={PHOTO_STEPS} note={retrying ? 'L’IA a mis du temps à répondre : je réessaie, ne quitte pas.' : 'Environ 40 secondes. Ne quitte pas cette page.'} />
      </div>
    );
  }

  // ------------------------------------------------------------------ photos
  const ready = sujetPhotos.length > 0 && copyPhotos.length > 0;
  const suggestions = [...new Set(subjects.map((s) => s.trim()).filter(Boolean))].slice(0, 8);
  return (
    <div className="max-w-2xl mx-auto py-4 sm:py-6 px-4 space-y-4">
      {Header}
      <p className="text-sm text-slate-600 dark:text-slate-300">
        Prends en photo l’énoncé donné par ton professeur, puis ta copie : KONAN la corrige question par question, avec le barème du sujet, et te dit quoi revoir.
      </p>

      <PhotoStrip step={1} title="L’énoncé du professeur" hint="1 à 4 pages. Toutes les questions doivent être visibles." photos={sujetPhotos} onAdd={add('sujet')} onRemove={remove('sujet')} />
      <PhotoStrip step={2} title="Ta copie" hint="1 à 4 pages, dans l’ordre." photos={copyPhotos} onAdd={add('copy')} onRemove={remove('copy')} />

      <section className="p-4 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 space-y-2.5">
        <label htmlFor="devoir-matiere" className="block text-[14px] font-black text-slate-900 dark:text-white">Matière <span className="font-semibold text-slate-500 dark:text-slate-400">(facultatif : KONAN la reconnaît)</span></label>
        <input id="devoir-matiere" value={matiere} onChange={(e) => setMatiere(e.target.value.slice(0, 60))} placeholder="Ex. Mathématiques" className="w-full h-11 px-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400" />
        {suggestions.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {suggestions.map((s) => (
              <button key={s} type="button" onClick={() => setMatiere(s)} className={`px-2.5 py-1 rounded-full text-[12px] font-bold border cursor-pointer ${matiere === s ? 'bg-sky-600 border-sky-600 text-white' : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>{s}</button>
            ))}
          </div>
        )}
      </section>

      <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-amber-50 border border-amber-200 dark:bg-amber-400/10 dark:border-amber-400/30">
        <Lightbulb className="w-5 h-5 shrink-0 mt-0.5 text-amber-700 dark:text-amber-300" />
        <p className="m-0 text-[13px] text-amber-900 dark:text-amber-100 leading-snug">Pour une bonne correction : feuille bien à plat, avec de la lumière, toute la page dans la photo. Les photos ne sont gardées nulle part.</p>
      </div>

      {error && <p className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 dark:bg-rose-500/10 dark:border-rose-500/30 dark:text-rose-100 text-sm font-semibold" role="alert">{error}</p>}

      <button type="button" onClick={send} disabled={!ready} className="w-full py-4 rounded-2xl font-black text-[15px] bg-[#0F172A] text-white hover:bg-[#1E293B] dark:bg-amber-300 dark:text-slate-950 dark:hover:bg-amber-200 disabled:opacity-40 disabled:cursor-default inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm">
        <Gem className="w-4 h-4" /> Corriger mon devoir
      </button>
      <p className="text-center text-[11.5px] text-slate-500 dark:text-slate-400">
        {remaining !== null ? `${remaining} correction${remaining > 1 ? 's' : ''} restante${remaining > 1 ? 's' : ''} aujourd’hui` : '3 devoirs corrigés par jour'} · une photo illisible ne compte pas
      </p>
    </div>
  );
};

export default HomeworkPhotoView;
