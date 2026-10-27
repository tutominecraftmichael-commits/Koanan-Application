/**
 * KONAN AI - Service Client de File d'Attente Push (push_queue)
 * 
 * ARCHITECTURE "BOÎTE D'ENVOI" :
 * - Côté Client : Dès qu'un utilisateur Pro est actif, ses séances du jour sont synchronisées
 *   dans la collection Firestore `push_queue` sous forme d'enveloppes prêtes à l'envoi.
 * - Côté Serveur (/api/cron-notifications) : Le cron ne scanne jamais les utilisateurs !
 *   Il lit uniquement les enveloppes échues (sendAt <= Date.now()), les expédie et les supprime.
 * - Validation : Dès que l'élève valide une séance, l'enveloppe catchup correspondante est supprimée.
 */

import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { StudySession, Subject } from '../types';

/**
 * Récupère la souscription Push actuelle du navigateur si disponible
 */
async function getActiveSubscription(): Promise<PushSubscriptionJSON | null> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator) || !('PushManager' in window)) {
    return null;
  }

  if (Notification.permission !== 'granted') {
    return null;
  }

  try {
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.getSubscription();
    return sub ? sub.toJSON() : null;
  } catch (err) {
    console.warn('[pushQueueService] Erreur récupération subscription :', err);
    return null;
  }
}

/**
 * Synchronise les séances d'étude du jour dans la file d'attente push_queue
 */
export async function syncTodaySessionsToPushQueue(
  userId: string,
  email: string,
  studySessions: StudySession[],
  subjects: Subject[] = []
): Promise<void> {
  if (!db || !userId) return;

  const subscription = await getActiveSubscription();
  if (!subscription || !subscription.endpoint) {
    return;
  }

  const cleanEmail = String(email || '').toLowerCase().trim();
  const now = new Date();
  const currentDayOfWeek = (now.getDay() + 6) % 7; // 0=Lundi, 6=Dimanche
  const todayDateStr = now.toISOString().slice(0, 10);

  try {
    // 1. Enregistrer en permanence l'appareil pour le mode test (?test=mon_email)
    const deviceRef = doc(db, 'push_queue', `device_${userId}`);
    await setDoc(
      deviceRef,
      {
        userId,
        email: cleanEmail,
        subscription,
        sendAt: 9999999999999, // Dans le futur lointain pour ne jamais être consommé par le cron
        title: 'Device Registration',
        body: 'Appareil enregistré pour les notifications Web Push',
        sessionId: 'device_sub',
        type: 'device_sub',
        updatedAt: new Date().toISOString(),
      },
      { merge: true }
    );

    // 2. Filtrer les séances prévues pour aujourd'hui
    const todaySessions = (studySessions || []).filter((s) => {
      const matchDay = s.dayOfWeek === currentDayOfWeek;
      const matchDate = s.date === todayDateStr;
      const isRescheduled = s.isRescheduledToday === true && s.rescheduledDate === todayDateStr;
      return matchDay || matchDate || isRescheduled;
    });

    for (const session of todaySessions) {
      const reminderDocId = `${userId}_${session.id}_reminder_5m`;
      const catchupDocId = `${userId}_${session.id}_catchup`;

      // Si la séance est déjà validée, s'assurer que les enveloppes sont supprimées
      if (session.completed) {
        await Promise.allSettled([
          deleteDoc(doc(db, 'push_queue', reminderDocId)),
          deleteDoc(doc(db, 'push_queue', catchupDocId)),
        ]);
        continue;
      }

      // Séance non validée : préparer les enveloppes d'envoi
      const subject = subjects.find((sub) => sub.id === session.subjectId);
      const subjectName = subject?.name || session.title || 'Révision';

      // Calcul heure de début
      const [sh, sm] = (session.startTime || '00:00').split(':').map(Number);
      const startTarget = new Date();
      startTarget.setHours(sh || 0, sm || 0, 0, 0);
      const sendAtReminder = startTarget.getTime() - 5 * 60 * 1000; // 5 minutes avant

      // Calcul heure de fin
      const [eh, em] = (session.endTime || '00:00').split(':').map(Number);
      const endTarget = new Date();
      endTarget.setHours(eh || 0, em || 0, 0, 0);
      const sendAtCatchup = endTarget.getTime() + 15 * 60 * 1000; // 15 minutes après

      // A) Enveloppe rappel 5 min (si le créneau est à venir ou imminent)
      if (sendAtReminder > Date.now() - 5 * 60 * 1000) {
        const reminderPayload = {
          userId,
          email: cleanEmail,
          subscription,
          sendAt: sendAtReminder,
          title: `KONAN - ${subjectName}`,
          body: `C’est l’heure de poser le téléphone deux secondes. Prends ton cahier de ${subjectName}, ${session.durationMinutes || 25} minutes bien concentré et on en parle plus. Je compte sur toi ! 👊📚`,
          sessionId: session.id,
          type: 'reminder_5m',
          createdAt: new Date().toISOString(),
        };

        await setDoc(doc(db, 'push_queue', reminderDocId), reminderPayload, { merge: true });
      }

      // B) Enveloppe rattrapage (si l'heure de rattrapage est dans le futur)
      if (sendAtCatchup > Date.now()) {
        const catchupPayload = {
          userId,
          email: cleanEmail,
          subscription,
          sendAt: sendAtCatchup,
          title: `Rattrapage KONAN - ${subjectName}`,
          body: `Tu as manqué ta séance de ${subjectName} prévue à ${session.startTime}. Ouvre vite l’application pour replanifier ce créneau sur ton temps libre aujourd'hui ! 🔄✨`,
          sessionId: session.id,
          type: 'catchup',
          createdAt: new Date().toISOString(),
        };

        await setDoc(doc(db, 'push_queue', catchupDocId), catchupPayload, { merge: true });
      }
    }

    console.log(`[pushQueueService] ${todaySessions.length} séances du jour synchronisées dans push_queue`);
  } catch (err: any) {
    console.warn('[pushQueueService] Erreur synchronisation push_queue :', err?.message);
  }
}

/**
 * Supprime immédiatement l'enveloppe de rattrapage lorsqu'une séance est validée
 */
export async function removeSessionCatchupFromQueue(userId: string, sessionId: string): Promise<void> {
  if (!db || !userId || !sessionId) return;
  try {
    const catchupDocId = `${userId}_${sessionId}_catchup`;
    await deleteDoc(doc(db, 'push_queue', catchupDocId));
    console.log(`[pushQueueService] Enveloppe catchup supprimée de push_queue pour ${sessionId}`);
  } catch (err: any) {
    console.warn(`[pushQueueService] Notice suppression catchup ${sessionId}:`, err?.message);
  }
}

/**
 * Supprime toutes les enveloppes d'une séance donnée (rappel et rattrapage)
 */
export async function removeSessionFromPushQueue(userId: string, sessionId: string): Promise<void> {
  if (!db || !userId || !sessionId) return;
  try {
    await Promise.allSettled([
      deleteDoc(doc(db, 'push_queue', `${userId}_${sessionId}_reminder_5m`)),
      deleteDoc(doc(db, 'push_queue', `${userId}_${sessionId}_catchup`)),
    ]);
  } catch (err: any) {
    console.warn(`[pushQueueService] Notice suppression session ${sessionId}:`, err?.message);
  }
}
