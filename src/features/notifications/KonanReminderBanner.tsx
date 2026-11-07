import React, { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import type { AppState } from '../../services/storage';
import { planAlerts, type AlertPlanInput } from '../../services/pushQueueService';
import { getTodayDateString } from '../../services/sessionRescheduler';
import { soundFX } from '../../lib/audioEffects';
import {
  ALERT_KINDS,
  buildStudentContext,
  fallbackMessage,
  type KonanAlertKind,
} from '../../../api/_konanVoice.js';

/**
 * Alertes KONAN DANS l'application (bannière animée + son), pour tous les élèves connectés (Gratuit, Pro, Plus).
 * Elles marchent même si le navigateur refuse les notifications : tant que l'appli est ouverte,
 * KONAN prévient l'élève 5 minutes avant, à 15 minutes de retard, à la fin d'une séance manquée
 * et avant le rattrapage. Quand une notification push arrive pendant que l'appli est au premier plan,
 * le Service Worker la transmet ici au lieu d'afficher une notification système en double.
 */

type Banner = {
  key: string;
  title: string;
  body: string;
  sessionId?: string;
  kind?: KonanAlertKind;
  note?: string;
};

const SHOWN_PREFIX = 'konan_inapp_shown_';
const AUTO_HIDE_MS = 30_000;

function readShown(ymd: string): Set<string> {
  try {
    const raw = localStorage.getItem(`${SHOWN_PREFIX}${ymd}`);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function writeShown(ymd: string, keys: Set<string>) {
  try {
    localStorage.setItem(`${SHOWN_PREFIX}${ymd}`, JSON.stringify([...keys].slice(-200)));
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const k = localStorage.key(i);
      if (k && k.startsWith(SHOWN_PREFIX) && k !== `${SHOWN_PREFIX}${ymd}`) localStorage.removeItem(k);
    }
  } catch {
    // stockage indisponible : au pire une bannière peut réapparaître
  }
}

// Derniers messages affichés (titres et textes) : KONAN évite de les répéter
const RECENT_KEY = 'konan_recent_messages';
function readRecent(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    return raw ? (JSON.parse(raw) as string[]).slice(0, 12) : [];
  } catch {
    return [];
  }
}
function rememberMessage(title: string, body: string) {
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify([body, title, ...readRecent()].slice(0, 12)));
  } catch {
    // non bloquant
  }
}

function planInputOf(st: AppState): AlertPlanInput {
  return {
    studySessions: st.studySessions || [],
    subjects: st.subjects || [],
    classSlots: st.classSlots || [],
    preferences: st.preferences,
    cycleCompletedDate: st.cycleCompletedDate,
  };
}

interface KonanReminderBannerProps {
  appState: AppState;
  /** Élève connecté (hors démo), quelle que soit sa formule */
  enabled: boolean;
  onOpenSession: (sessionId: string) => void;
  onOpenPlanner: () => void;
}

export const KonanReminderBanner: React.FC<KonanReminderBannerProps> = ({ appState, enabled, onOpenSession, onOpenPlanner }) => {
  const [banner, setBanner] = useState<Banner | null>(null);
  const stateRef = useRef(appState);
  stateRef.current = appState;
  const bannerRef = useRef<Banner | null>(null);
  bannerRef.current = banner;

  const show = useCallback((next: Banner) => {
    // Même alerte déjà affichée (ex. le message de l'IA arrive après la bannière locale) : on met juste le texte à jour
    if (bannerRef.current?.key !== next.key) soundFX.playNotificationPing();
    rememberMessage(next.title, next.body);
    setBanner(next);
  }, []);

  // 1. Horloge locale : vérifie toutes les 15 secondes si une alerte du jour est arrivée à échéance
  useEffect(() => {
    if (!enabled) return;
    const tick = () => {
      const st = stateRef.current;
      if (!st?.preferences) return;
      const now = new Date();
      const nowMs = now.getTime();
      const due = planAlerts(planInputOf(st), 'local', now, { days: 1, minSendAt: nowMs - 10 * 60 * 1000 })
        .filter((a) => a.sendAt <= nowMs);
      if (!due.length) return;
      const ymd = getTodayDateString(now);
      const shown = readShown(ymd);
      const fresh = due.filter((a) => !shown.has(a.key));
      if (!fresh.length) return;
      fresh.forEach((a) => shown.add(a.key));
      writeShown(ymd, shown);
      const latest = fresh[fresh.length - 1];
      const ctx = buildStudentContext(st, latest, now);
      show({ key: latest.key, ...fallbackMessage(ctx, latest.key, readRecent()), sessionId: latest.sessionId, kind: latest.kind });
    };
    tick();
    const id = setInterval(tick, 15_000);
    const onVisible = () => { if (document.visibilityState === 'visible') tick(); };
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      clearInterval(id);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [enabled, show]);

  // 2. Notification push reçue pendant que l'appli est ouverte (texte écrit par KONAN côté serveur)
  useEffect(() => {
    if (!enabled || typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return;
    const onMessage = (event: MessageEvent) => {
      if (event.data?.type !== 'KONAN_PUSH') return;
      const data = event.data.data || {};
      const key = String(data.alertKey || `push_${Date.now()}`);
      const ymd = getTodayDateString(new Date());
      const shown = readShown(ymd);
      shown.add(key);
      writeShown(ymd, shown);
      show({ key, title: String(event.data.title || 'KONAN'), body: String(event.data.body || ''), sessionId: data.sessionId, kind: data.kind });
    };
    navigator.serviceWorker.addEventListener('message', onMessage);
    return () => navigator.serviceWorker.removeEventListener('message', onMessage);
  }, [enabled, show]);

  // Disparition automatique
  useEffect(() => {
    if (!banner) return;
    const id = setTimeout(() => setBanner(null), AUTO_HIDE_MS);
    return () => clearTimeout(id);
  }, [banner]);

  const session = banner?.sessionId ? appState.studySessions?.find((s) => s.id === banner.sessionId) : undefined;
  const todayIndex = (new Date().getDay() + 6) % 7;
  const canOpenSession = Boolean(session && !session.completed && session.dayOfWeek === todayIndex && banner?.kind !== 'manquee');

  return (
    <>
      {banner && (
        <div className="fixed inset-x-0 top-[max(0.75rem,env(safe-area-inset-top))] z-[70] flex justify-center px-3 pointer-events-none">
          <div
            role="alert"
            aria-live="assertive"
            className="pointer-events-auto w-full max-w-md bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-500/50 rounded-2xl shadow-xl shadow-emerald-900/10 dark:shadow-2xl dark:shadow-black/50 p-3.5 flex items-start gap-3 animate-in slide-in-from-top-4 fade-in duration-300 motion-reduce:animate-none"
          >
            <img src="/cube-icon.png" alt="" className="w-11 h-11 rounded-xl shrink-0 konan-wiggle" />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-300">KONAN</p>
              <p className="text-sm font-extrabold text-slate-900 dark:text-white leading-snug break-words">{banner.title}</p>
              <p className="mt-0.5 text-[13px] text-slate-700 dark:text-slate-200 leading-snug break-words">{banner.body}</p>
              {banner.note && (
                <p className="mt-1 text-[10px] font-mono text-slate-500 dark:text-slate-400">{banner.note}</p>
              )}
              <div className="mt-2.5 flex flex-wrap gap-2">
                {canOpenSession && session ? (
                  <button
                    type="button"
                    onClick={() => { setBanner(null); onOpenSession(session.id); }}
                    className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-extrabold shadow-[0_3px_0_0_#047857] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                  >
                    J’y vais
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => { setBanner(null); onOpenPlanner(); }}
                    className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-extrabold shadow-[0_3px_0_0_#047857] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                  >
                    Voir mon planning
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setBanner(null)}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors cursor-pointer"
                >
                  Plus tard
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setBanner(null)}
              aria-label="Fermer"
              className="p-1 -mr-1 -mt-1 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 dark:hover:text-white dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      {import.meta.env.DEV && <KonanVoiceTestPanel appState={appState} onShow={show} />}
    </>
  );
};

// ---------------------------------------------------------------------------
// Bouton de test (npm run dev uniquement) : simule les 3 situations et montre le message de KONAN
// ---------------------------------------------------------------------------
const TEST_SITUATIONS: Array<{ kind: KonanAlertKind; label: string }> = [
  { kind: 'avant', label: '5 min avant' },
  { kind: 'retard', label: 'Retard 15 min' },
  { kind: 'manquee', label: 'Séance manquée' },
];

const KonanVoiceTestPanel: React.FC<{ appState: AppState; onShow: (b: Banner) => void }> = ({ appState, onShow }) => {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState<KonanAlertKind | null>(null);

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
          body: JSON.stringify({ context: ctx, recent: readRecent() }),
          signal: controller.signal,
        });
        clearTimeout(timer);
        const json = await res.json();
        title = json?.ia?.title;
        body = json?.ia?.body;
        note = json?.ia?.source === 'ia'
          ? `Écrit par l’IA en ${(Number(json.durationMs) / 1000).toFixed(1)} s · angle : ${json.ia.angle || '?'}`
          : `Message de secours (${json?.ia?.reason || 'IA indisponible'})`;
      } catch {
        const fb = fallbackMessage(ctx, String(Date.now()), readRecent());
        title = fb.title;
        body = fb.body;
        note = 'Message de secours (serveur de test injoignable)';
      }
      onShow({ key: `test_${kind}_${Date.now()}`, title, body, sessionId: s?.id, kind, note });

      // Aperçu de la vraie notification du téléphone, si elle est autorisée
      if ('Notification' in window && Notification.permission === 'granted' && 'serviceWorker' in navigator) {
        const reg = await navigator.serviceWorker.getRegistration('/');
        reg?.showNotification(title, { body, icon: '/cube-icon.png', badge: '/cube-badge.png', tag: `konan-test-${kind}` }).catch(() => {});
      }
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="fixed left-3 bottom-[max(5rem,env(safe-area-inset-bottom))] z-[65] flex flex-col items-start gap-1.5">
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
