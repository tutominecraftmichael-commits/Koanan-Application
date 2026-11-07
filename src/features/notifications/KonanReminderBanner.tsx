import React, { useState } from 'react';
import type { AppState } from '../../services/storage';
import { planAlerts, type AlertPlanInput } from '../../services/pushQueueService';
import { getTodayDateString } from '../../services/sessionRescheduler';
import {
  ALERT_KINDS,
  buildStudentContext,
  fallbackMessage,
  type KonanAlertKind,
} from '../../../api/_konanVoice.js';

/**
 * Les rappels de KONAN arrivent UNIQUEMENT en notification du téléphone, en dehors de l'application
 * (décision du 2026-11-07 : pas d'alerte affichée dans l'appli pour aller étudier).
 * Ce fichier ne contient plus que le bouton de test, visible seulement avec « npm run dev ».
 */

function planInputOf(st: AppState): AlertPlanInput {
  return {
    studySessions: st.studySessions || [],
    subjects: st.subjects || [],
    classSlots: st.classSlots || [],
    preferences: st.preferences,
    cycleCompletedDate: st.cycleCompletedDate,
  };
}

const TEST_SITUATIONS: Array<{ kind: KonanAlertKind; label: string }> = [
  { kind: 'avant', label: '5 min avant' },
  { kind: 'retard', label: 'Retard 15 min' },
  { kind: 'manquee', label: 'Séance manquée' },
];

/** Bouton de test (développement uniquement) : écrit le message de KONAN et l'affiche en notification du téléphone. */
export const KonanVoiceTestPanel: React.FC<{ appState: AppState }> = ({ appState }) => {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState<KonanAlertKind | null>(null);
  const [last, setLast] = useState('');

  const simulate = async (kind: KonanAlertKind) => {
    setBusy(kind);
    try {
      const now = new Date();
      const todayIndex = (now.getDay() + 6) % 7;
      const sessions = appState.studySessions || [];
      const s = sessions.find((x) => x.dayOfWeek === todayIndex && !x.completed) || sessions[0];
      const planned = s && appState.preferences
        ? planAlerts(planInputOf(appState), 'test', now, { days: 7, minSendAt: 0 }).find((a) => a.sessionId === s.id && a.kind === kind)
        : undefined;
      const alert = planned || {
        kind,
        situation: ALERT_KINDS[kind].situation,
        sessionId: s?.id || 'test',
        subjectId: s?.subjectId,
        subjectName: appState.subjects?.find((x) => x.id === s?.subjectId)?.name || s?.title || 'Mathématiques',
        startTime: s?.startTime || '18:00',
        durationMinutes: s?.durationMinutes || 30,
        rattrapageA: kind === 'avant' ? null : '20:00',
        isRattrapage: false,
        date: getTodayDateString(now),
      };
      const ctx = buildStudentContext(appState, alert, now);
      let title = '';
      let body = '';
      let note = '';
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 6000);
        const res = await fetch('/api/konan-voice', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ context: ctx }),
          signal: controller.signal,
        });
        clearTimeout(timer);
        const json = await res.json();
        title = json?.ia?.title;
        body = json?.ia?.body;
        note = json?.ia?.source === 'ia' ? `IA, ${(Number(json.durationMs) / 1000).toFixed(1)} s` : `secours : ${json?.ia?.reason || 'IA indisponible'}`;
      } catch {
        const fb = fallbackMessage(ctx, String(Date.now()));
        title = fb.title;
        body = fb.body;
        note = 'secours (serveur de test injoignable)';
      }
      setLast(`${title} — ${body} (${note})`);
      if ('Notification' in window && Notification.permission === 'granted' && 'serviceWorker' in navigator) {
        const reg = await navigator.serviceWorker.getRegistration('/');
        await reg?.showNotification(title, { body, icon: '/cube-icon.png', badge: '/cube-badge.png', tag: `konan-test-${kind}` }).catch(() => {});
      }
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="fixed left-3 bottom-[max(5rem,env(safe-area-inset-bottom))] z-[65] flex flex-col items-start gap-1.5 max-w-[80vw]">
      {open && (
        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg flex flex-col gap-1.5">
          {TEST_SITUATIONS.map((t) => (
            <button
              key={t.kind}
              type="button"
              disabled={busy !== null}
              onClick={() => simulate(t.kind)}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-left bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 disabled:opacity-50 cursor-pointer"
            >
              {busy === t.kind ? 'KONAN écrit…' : t.label}
            </button>
          ))}
          {last && <p className="text-[11px] text-slate-600 dark:text-slate-300 max-w-xs leading-snug">{last}</p>}
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="px-3 py-1.5 rounded-full text-[11px] font-black bg-amber-400 hover:bg-amber-300 text-amber-950 shadow-md cursor-pointer"
        title="Visible seulement en développement (npm run dev)"
      >
        Test KONAN
      </button>
    </div>
  );
};
