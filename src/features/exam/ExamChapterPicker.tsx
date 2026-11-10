/**
 * Choix des chapitres d'un devoir/examen, dès que l'élève en saisit la date.
 *  - matière avec cours dans KONAN : cases à cocher, regroupées par volet (Physique / Chimie, Géométrie / Numérique…) ;
 *  - matière sans cours : explication du « chronomètre classique » de 75 min (révision sur le cahier).
 * Les cours sont chargés à la demande (ils sont lourds).
 */
import React, { useEffect, useMemo, useState } from 'react';
import { BookOpen, Clock } from 'lucide-react';
import { matchSubjectToStemCurriculum, tryResolveGradeLevel } from '../../lib/curriculum/curriculumMatcher';

export interface ExamChapterPickerProps {
  subjectName: string;
  /** Classe de l'élève (« 2nde C », « seconde_c »…). */
  gradeRaw?: string;
  value: string[];
  /** Appelé à chaque changement : chapitres cochés et matière du programme reconnue. */
  onChange: (chapterIds: string[], subjectKey?: string) => void;
  /** Indique au formulaire si la matière a du cours (sinon : chronomètre 75 min). */
  onAvailability?: (hasCourse: boolean) => void;
}

interface Group { key: string; label: string; chapters: { id: string; title: string; points: number }[] }

export const ExamChapterPicker: React.FC<ExamChapterPickerProps> = ({ subjectName, gradeRaw, value, onChange, onAvailability }) => {
  const [groups, setGroups] = useState<Group[] | null>(null);
  const match = useMemo(() => matchSubjectToStemCurriculum(subjectName), [subjectName]);
  const grade = useMemo(() => tryResolveGradeLevel(gradeRaw), [gradeRaw]);
  const subjectKey = match.isStemSubject ? match.stemSubjectId : undefined;

  useEffect(() => {
    let alive = true;
    setGroups(null);
    if (!subjectKey || !grade) {
      setGroups([]);
      onAvailability?.(false);
      return;
    }
    (async () => {
      try {
        const [{ getCurriculumChapters }, sps] = await Promise.all([
          import('../../lib/curriculum/curriculumRegistry'),
          import('../../lib/curriculum/studentProgressService'),
        ]);
        const chapters = getCurriculumChapters(subjectKey, grade);
        const byGroup = new Map<string, Group>();
        for (const c of chapters) {
          const sub = sps.getChapterSubCategory(c);
          const g = byGroup.get(sub) || { key: sub, label: sps.getSubCategoryName(sub), chapters: [] };
          g.chapters.push({ id: c.id, title: c.title, points: c.points.length });
          byGroup.set(sub, g);
        }
        if (!alive) return;
        const list = [...byGroup.values()];
        setGroups(list);
        onAvailability?.(list.length > 0);
        // Chapitres qui n'existent plus (cours mis à jour) : retirés de la sélection
        const valid = new Set(list.flatMap((g) => g.chapters.map((c) => c.id)));
        if (value.some((id) => !valid.has(id))) onChange(value.filter((id) => valid.has(id)), subjectKey);
      } catch {
        if (alive) { setGroups([]); onAvailability?.(false); }
      }
    })();
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjectKey, grade]);

  const toggle = (id: string) => {
    const next = value.includes(id) ? value.filter((x) => x !== id) : [...value, id];
    onChange(next, subjectKey);
  };
  const toggleGroup = (g: Group) => {
    const ids = g.chapters.map((c) => c.id);
    const allOn = ids.every((id) => value.includes(id));
    const next = allOn ? value.filter((id) => !ids.includes(id)) : [...new Set([...value, ...ids])];
    onChange(next, subjectKey);
  };

  if (groups === null) {
    return <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Je cherche les chapitres de {subjectName}…</p>;
  }

  if (!groups.length) {
    return (
      <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-900/60 dark:border-slate-700">
        <Clock className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
        <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
          Il n’y a pas encore de cours de <strong>{subjectName || 'cette matière'}</strong> dans KONAN pour ta classe.
          Tes séances de préparation seront des <strong>révisions chronométrées de 75 minutes</strong> : tu révises sur ton cahier, puis tu valides la séance.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <BookOpen className="w-4 h-4 text-sky-600 dark:text-sky-400" />
        <p className="text-xs font-black text-slate-800 dark:text-slate-100">Coche les chapitres de ton devoir</p>
        <span className="ml-auto text-[11px] font-bold text-slate-500 dark:text-slate-400">{value.length} choisi{value.length > 1 ? 's' : ''}</span>
      </div>
      {groups.map((g) => {
        const allOn = g.chapters.every((c) => value.includes(c.id));
        return (
          <div key={g.key} className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="flex items-center justify-between gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800/70">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-300">{g.label}</span>
              <button type="button" onClick={() => toggleGroup(g)} className="text-[11px] font-bold text-sky-700 dark:text-sky-300 cursor-pointer">
                {allOn ? 'Tout décocher' : 'Tout cocher'}
              </button>
            </div>
            <div className="max-h-56 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
              {g.chapters.map((c) => (
                <label key={c.id} className="flex items-start gap-3 px-3 py-2.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <input type="checkbox" checked={value.includes(c.id)} onChange={() => toggle(c.id)} className="w-4 h-4 mt-0.5 accent-sky-500 shrink-0" />
                  <span className="text-xs text-slate-800 dark:text-slate-100 leading-snug">
                    {c.title}
                    <span className="block text-[10px] text-slate-500 dark:text-slate-400">{c.points} mini-leçon{c.points > 1 ? 's' : ''}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
