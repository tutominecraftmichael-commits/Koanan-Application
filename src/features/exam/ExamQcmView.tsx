/**
 * SÉRIE DE 30 QUESTIONS DE DEVOIR
 * - 30 questions qui mélangent les chapitres choisis pour le devoir (pas de mini-leçon) ;
 * - chronomètre de 45 min affiché comme REPÈRE : il ne bloque jamais (l'élève va jusqu'à la 30e question) ;
 * - mémoire des erreurs : les questions ratées reviennent en priorité, avec un mot de KONAN ;
 * - chaque réponse est enregistrée (erreur, chapitre, réponse fausse) pour les séances suivantes ;
 * - si l'élève quitte, il reprend sa série au même endroit.
 */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, CheckCircle2, AlertCircle, Clock, RotateCcw } from 'lucide-react';
import type { StudySession } from '../../types';
import type { CurriculumGradeLevel, StemSubjectId } from '../../lib/curriculum/types';
import { MathRenderer } from '../../components/common/MathRenderer';
import { KonanMascot } from '../../components/common/KonanMascot';
import { shuffleExerciseOptions } from '../../lib/curriculum/optionShuffle';
import { buildExamQcmSeries, type ExamQcmItem } from '../../lib/exam/examQcmSeries';
import { getReviewMap } from '../../lib/curriculum/reviewMemory';
import { getWrongQuestions, recordAnswer, RETRY_NOTE } from '../../lib/curriculum/wrongQuestionsMemory';
import { EXAM_PREP_DURATIONS } from '../../lib/exam/examPrepRules';
import { afterShine } from '../../lib/shineClick';
import { soundFX } from '../../lib/audioEffects';

export interface ExamQcmViewProps {
  userId: string;
  session: StudySession;
  subjectName: string;
  stemSubjectId: StemSubjectId;
  gradeLevel: CurriculumGradeLevel;
  onExit: () => void;
  onComplete: (sessionId: string) => void;
}

interface SavedProgress {
  ids: string[];
  index: number;
  answers: Record<string, boolean>;
  startedAt: number;
}

const storageKey = (sessionId: string) => `konan_exam_qcm_v1_${sessionId}`;
const TARGET_SEC = EXAM_PREP_DURATIONS.qcm30 * 60;

function readSaved(sessionId: string): SavedProgress | null {
  try {
    const raw = localStorage.getItem(storageKey(sessionId));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function writeSaved(sessionId: string, p: SavedProgress) {
  try {
    localStorage.setItem(storageKey(sessionId), JSON.stringify(p));
  } catch {
    // stockage indisponible : la série continue sans reprise
  }
}

const fmt = (sec: number) => `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`;

export const ExamQcmView: React.FC<ExamQcmViewProps> = ({ userId, session, subjectName, stemSubjectId, gradeLevel, onExit, onComplete }) => {
  const [series, setSeries] = useState<ExamQcmItem[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [startedAt, setStartedAt] = useState<number>(() => Date.now());
  const [now, setNow] = useState<number>(() => Date.now());
  const [subCategoryName, setSubCategoryName] = useState<(id: string) => string>(() => () => '');
  const savedRef = useRef<SavedProgress | null>(null);

  // Chargement des chapitres choisis (cours chargés à la demande) et construction de la série
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const [{ getCurriculumChapters }, sps] = await Promise.all([
          import('../../lib/curriculum/curriculumRegistry'),
          import('../../lib/curriculum/studentProgressService'),
        ]);
        const wanted = new Set(session.examChapterIds || []);
        const chapters = getCurriculumChapters(stemSubjectId, gradeLevel).filter((c) => wanted.has(c.id));
        if (!chapters.length) {
          if (alive) setLoadError('Je ne trouve plus les chapitres de ce devoir. Modifie ton devoir dans « Matières » pour les choisir à nouveau.');
          return;
        }
        const reviewMap = getReviewMap(userId);
        const seenAt = new Map(Object.values(reviewMap).map((e) => [e.exerciseId, e.updatedAt]));
        let built = buildExamQcmSeries({
          chapters,
          getSubCategory: sps.getChapterSubCategory,
          wrong: getWrongQuestions(userId, stemSubjectId, gradeLevel, [...wanted]),
          seenAt,
          seed: `${session.id}-${session.date}`,
        });
        // Reprise : même série, au même endroit
        const saved = readSaved(session.id);
        if (saved && saved.ids.length) {
          const all = new Map<string, ExamQcmItem>();
          for (const it of built) all.set(it.exercise.id, it);
          // les questions de la série enregistrée (même si l'ordre de construction a changé)
          const extra = buildExamQcmSeries({ chapters, getSubCategory: sps.getChapterSubCategory, wrong: [], seenAt: new Map(), seed: 'tout', length: 10000 });
          for (const it of extra) if (!all.has(it.exercise.id)) all.set(it.exercise.id, it);
          const restored = saved.ids.map((id) => all.get(id)).filter(Boolean) as ExamQcmItem[];
          if (restored.length === saved.ids.length) {
            built = restored.map((it) => built.find((b) => b.exercise.id === it.exercise.id) || it);
            savedRef.current = saved;
          }
        }
        if (!alive) return;
        setSubCategoryName(() => (id: string) => sps.getSubCategoryName(id as never, gradeLevel));
        setSeries(built);
        if (savedRef.current) {
          setIndex(Math.min(savedRef.current.index, built.length));
          setAnswers(savedRef.current.answers || {});
          setStartedAt(savedRef.current.startedAt || Date.now());
        } else {
          const start = Date.now();
          setStartedAt(start);
          writeSaved(session.id, { ids: built.map((b) => b.exercise.id), index: 0, answers: {}, startedAt: start });
        }
      } catch {
        if (alive) setLoadError('Le cours n’a pas pu se charger (connexion trop faible ?). Réessaie dans un instant.');
      }
    })();
    return () => { alive = false; };
  }, [userId, session.id, session.date, stemSubjectId, gradeLevel]);

  // Chronomètre repère (jamais bloquant)
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const total = series?.length || 0;
  const finished = series !== null && index >= total;
  const item = series && index < total ? series[index] : null;
  const exercise = useMemo(() => (item ? shuffleExerciseOptions(item.exercise) : null), [item]);
  const elapsed = Math.max(0, Math.floor((now - startedAt) / 1000));
  const overtime = elapsed > TARGET_SEC;
  const correctCount = Object.values(answers).filter(Boolean).length;

  const verify = () => {
    if (!exercise || !item || selected === null || checked) return;
    const correct = selected === exercise.correctAnswerIndex;
    setChecked(true);
    try { if (correct) soundFX.playCorrect(); else soundFX.playWrong(); } catch { /* son facultatif */ }
    try {
      recordAnswer(
        userId,
        { subject: stemSubjectId, grade: gradeLevel, subCategory: item.subCategory, chapterId: item.chapterId, pointId: item.pointId },
        item.exercise.id,
        correct,
        undefined,
        undefined,
        { prompt: exercise.prompt, wrongAnswer: correct ? undefined : exercise.options?.[selected], source: 'devoir' },
      );
    } catch {
      // la mémoire ne doit jamais bloquer la série
    }
    const nextAnswers = { ...answers, [item.exercise.id]: correct };
    setAnswers(nextAnswers);
    writeSaved(session.id, { ids: series!.map((s) => s.exercise.id), index, answers: nextAnswers, startedAt });
  };

  const next = () => {
    const nextIndex = index + 1;
    setIndex(nextIndex);
    setSelected(null);
    setChecked(false);
    writeSaved(session.id, { ids: series!.map((s) => s.exercise.id), index: nextIndex, answers, startedAt });
    if (nextIndex >= total) {
      try { soundFX.playVictoryJingle(); } catch { /* son facultatif */ }
    }
  };

  const daysLabel = typeof session.examDaysRemaining === 'number'
    ? (session.examDaysRemaining === 1 ? 'Devoir demain' : `Devoir dans ${session.examDaysRemaining} jours`)
    : 'Préparation au devoir';

  // ------------------------------------------------------------------ chargement / erreur
  if (loadError) {
    return (
      <div className="max-w-md mx-auto py-12 px-4 text-center space-y-4">
        <KonanMascot pose="sad" size={120} />
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{loadError}</p>
        <button type="button" onClick={onExit} className="w-full py-3 rounded-2xl bg-sky-500 text-white font-black uppercase shadow-[0_4px_0_#0284C7] cursor-pointer">
          Retour
        </button>
      </div>
    );
  }
  if (!series) {
    return (
      <div className="max-w-md mx-auto py-20 px-4 text-center space-y-3">
        <div className="w-10 h-10 mx-auto rounded-full border-4 border-sky-200 border-t-sky-500 animate-spin" />
        <p className="text-sm font-bold text-slate-600 dark:text-slate-300">Je prépare tes 30 questions…</p>
      </div>
    );
  }

  // ------------------------------------------------------------------ fin de série
  if (finished) {
    const note = total ? Math.round((correctCount / total) * 20 * 4) / 4 : 0;
    const wrongItems = series.filter((s) => answers[s.exercise.id] === false);
    const retriedOk = series.filter((s) => s.isRetry && answers[s.exercise.id] === true).length;
    const chaptersToReview = [...new Set(wrongItems.map((w) => w.chapterTitle))];
    return (
      <div className="max-w-xl mx-auto py-8 px-4 space-y-5 text-center animate-in zoom-in-95 duration-300">
        <div className="flex justify-center"><KonanMascot pose={note >= 10 ? 'jump' : 'encourage'} size={130} /></div>
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">Série terminée !</h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {correctCount} bonne{correctCount > 1 ? 's' : ''} réponse{correctCount > 1 ? 's' : ''} sur {total} · en {fmt(elapsed)}
          </p>
        </div>
        <div className="inline-flex items-baseline gap-1 px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 border-2 border-b-[6px] border-sky-300 dark:border-sky-600">
          <span className="text-4xl font-black text-sky-600 dark:text-sky-400 tabular-nums">{String(note).replace('.', ',')}</span>
          <span className="text-sm font-bold text-slate-500 dark:text-slate-400">/ 20</span>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-left text-sm space-y-2">
          {retriedOk > 0 && (
            <p className="text-emerald-700 dark:text-emerald-300 font-bold">
              Tu as réussi {retriedOk} question{retriedOk > 1 ? 's' : ''} que tu avais ratée{retriedOk > 1 ? 's' : ''} avant. Je les retire de ta liste d’erreurs.
            </p>
          )}
          {wrongItems.length > 0 ? (
            <>
              <p className="text-slate-700 dark:text-slate-200">
                Je garde tes {wrongItems.length} erreur{wrongItems.length > 1 ? 's' : ''} en mémoire : je te les reposerai à la prochaine séance.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                À revoir en priorité : <strong className="text-slate-900 dark:text-white">{chaptersToReview.join(' ; ')}</strong>
              </p>
            </>
          ) : (
            <p className="text-slate-700 dark:text-slate-200">Aucune erreur : tu es prêt pour ce chapitre !</p>
          )}
        </div>
        <button
          type="button"
          onClick={afterShine(() => {
            try { localStorage.removeItem(storageKey(session.id)); } catch { /* rien */ }
            onComplete(session.id);
          })}
          className="relative overflow-hidden konan-btn-shine w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white font-black uppercase tracking-wide shadow-[0_5px_0_#065f46] active:translate-y-1 cursor-pointer"
        >
          Valider ma séance
        </button>
      </div>
    );
  }

  // ------------------------------------------------------------------ question
  if (!item || !exercise) return null;
  const isCorrect = checked && selected === exercise.correctAnswerIndex;
  return (
    <div className="max-w-2xl mx-auto py-4 sm:py-6 px-3 sm:px-4 space-y-4">
      {/* En-tête : retour, progression, chrono repère */}
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <button type="button" onClick={onExit} className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer" aria-label="Quitter (ta série est gardée)">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="min-w-0 flex-1 text-center">
            <p className="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 leading-tight break-words">{subjectName} · {daysLabel}</p>
          </div>
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-black tabular-nums ${
            overtime ? 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200' : 'bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200'
          }`}>
            <Clock className="w-3.5 h-3.5" />
            {overtime ? `+${fmt(elapsed - TARGET_SEC)}` : fmt(TARGET_SEC - elapsed)}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-4 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div className="h-full rounded-full bg-emerald-500 transition-all duration-500" style={{ width: `${(index / total) * 100}%` }} />
          </div>
          <span className="text-xs font-black text-slate-600 dark:text-slate-300 tabular-nums">{index + 1} / {total}</span>
        </div>
        {overtime && (
          <p className="text-[11px] font-bold text-amber-700 dark:text-amber-300 text-center">
            Les 45 minutes sont passées : pas de souci, termine tes {total} questions.
          </p>
        )}
      </div>

      {/* Mot de KONAN sur une question ratée avant */}
      {item.isRetry && (
        <div className="flex items-start gap-3 p-3 rounded-2xl bg-amber-50 border-2 border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/30">
          <RotateCcw className="w-5 h-5 text-amber-600 dark:text-amber-300 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-black text-amber-900 dark:text-amber-200">{RETRY_NOTE}</p>
            {item.lastWrongAnswer && (
              <p className="text-amber-800/90 dark:text-amber-200/80 text-xs mt-0.5">
                Tu avais répondu : <span className="font-semibold"><MathRenderer text={item.lastWrongAnswer} /></span>
              </p>
            )}
          </div>
        </div>
      )}

      {/* Question */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 space-y-4">
        <p className="text-[11px] font-black uppercase tracking-wider text-sky-600 dark:text-sky-400">
          {subCategoryName(item.subCategory) ? `${subCategoryName(item.subCategory)} · ` : ''}{item.chapterTitle}
        </p>
        <div className="text-base font-bold text-slate-900 dark:text-white leading-snug">
          <MathRenderer text={exercise.prompt} />
        </div>
        <div className="grid gap-2.5">
          {(exercise.options || []).map((opt, oIdx) => {
            const isSel = selected === oIdx;
            let style = 'bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-sky-400';
            if (isSel && !checked) style = 'bg-sky-50 dark:bg-sky-950/60 border-sky-500 text-sky-900 dark:text-sky-100 ring-2 ring-sky-500/20';
            if (checked) {
              if (oIdx === exercise.correctAnswerIndex) style = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-100';
              else if (isSel) style = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-100';
              else style = 'opacity-40 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-slate-500';
            }
            return (
              <button
                key={oIdx}
                type="button"
                disabled={checked}
                onClick={() => { setSelected(oIdx); try { soundFX.playClick(); } catch { /* son */ } }}
                className={`w-full p-3.5 rounded-xl border-2 text-left text-sm font-semibold flex items-start justify-between gap-3 transition-all cursor-pointer disabled:cursor-default ${style}`}
              >
                <span className="flex items-start gap-3 min-w-0">
                  <span className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${isSel ? 'bg-sky-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                    {String.fromCharCode(65 + oIdx)}
                  </span>
                  <span className="leading-snug pt-0.5"><MathRenderer text={opt} /></span>
                </span>
                {checked && oIdx === exercise.correctAnswerIndex && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
                {checked && isSel && oIdx !== exercise.correctAnswerIndex && <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Correction immédiate */}
      {checked && (
        <div className={`p-4 rounded-2xl border-2 text-sm space-y-1 ${
          isCorrect ? 'bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/30' : 'bg-rose-50 border-rose-200 dark:bg-rose-500/10 dark:border-rose-500/30'
        }`}>
          <p className={`font-black ${isCorrect ? 'text-emerald-800 dark:text-emerald-200' : 'text-rose-800 dark:text-rose-200'}`}>
            {isCorrect ? (item.isRetry ? 'Bravo, cette fois c’est juste !' : 'Juste !') : 'Pas tout à fait. Je la garde en mémoire pour te la reposer.'}
          </p>
          {exercise.explanation && (
            <div className="text-slate-700 dark:text-slate-200"><MathRenderer text={exercise.explanation} /></div>
          )}
        </div>
      )}

      {/* Bouton principal */}
      <div className="sticky bottom-0 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-gradient-to-t from-slate-50 via-slate-50 dark:from-[#070B13] dark:via-[#070B13] to-transparent">
        {!checked ? (
          <button
            type="button"
            disabled={selected === null}
            onClick={verify}
            className="w-full py-4 rounded-2xl bg-sky-500 text-white font-black uppercase tracking-wide shadow-[0_4px_0_#0284C7] active:translate-y-1 active:shadow-none disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            Vérifier
          </button>
        ) : (
          <button
            type="button"
            onClick={next}
            className={`w-full py-4 rounded-2xl text-white font-black uppercase tracking-wide active:translate-y-1 active:shadow-none cursor-pointer ${
              isCorrect ? 'bg-emerald-500 shadow-[0_4px_0_#047857]' : 'bg-rose-500 shadow-[0_4px_0_#BE123C]'
            }`}
          >
            {index + 1 < total ? 'Question suivante' : 'Voir mon résultat'}
          </button>
        )}
      </div>
    </div>
  );
};
