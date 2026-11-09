/**
 * Synchronisation de la progression des cours guidés avec le compte de l'élève (/api/learning-sync).
 *  - à l'ouverture d'un cours : on récupère la copie du compte et on la fusionne avec ce téléphone ;
 *  - à chaque changement (mini-leçon validée, réponse, marque-page) : envoi groupé quelques secondes après.
 * Sans Internet, tout continue sur le téléphone ; l'envoi se refait au changement suivant.
 */
import { auth } from '../firebase';
import { getStudentProgressMap, saveStudentProgressMap } from './studentProgressService';
import { getReviewMap, replaceReviewMap } from './reviewMemory';
import { mergeProgressMaps, mergeReviewMaps } from './learningMerge';
import { setLearningChangeListener } from './learningEvents';

const PUSH_DELAY_MS = 4000;
let pushTimer: ReturnType<typeof setTimeout> | null = null;
let pendingUser: string | null = null;

async function call(body: Record<string, unknown>): Promise<any | null> {
  const user = auth?.currentUser;
  if (!user) return null;
  try {
    const token = await user.getIdToken();
    const payload = JSON.stringify(body);
    const res = await fetch('/api/learning-sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: payload,
      // L'envoi continue même si l'élève ferme l'application juste après
      // (le navigateur limite ce mode à 64 Ko : au-delà, envoi normal)
      keepalive: payload.length < 60000,
    });
    const json = await res.json().catch(() => null);
    return res.ok && json?.success ? json : null;
  } catch {
    return null;
  }
}

async function pushNow(userId: string): Promise<void> {
  await call({
    action: 'put',
    progress: JSON.stringify(getStudentProgressMap(userId)),
    reviews: JSON.stringify(getReviewMap(userId)),
  });
}

function schedulePush(userId: string): void {
  pendingUser = userId;
  if (pushTimer) clearTimeout(pushTimer);
  pushTimer = setTimeout(() => {
    pushTimer = null;
    const uid = pendingUser;
    pendingUser = null;
    if (uid) pushNow(uid).catch(() => {});
  }, PUSH_DELAY_MS);
}

/** Envoie tout de suite ce qui attend (appli mise en arrière-plan ou fermée). */
function flushPendingPush(): void {
  if (!pushTimer || !pendingUser) return;
  clearTimeout(pushTimer);
  pushTimer = null;
  const uid = pendingUser;
  pendingUser = null;
  pushNow(uid).catch(() => {});
}

let flushListenersOn = false;

/** Active l'envoi automatique vers le compte à chaque changement. */
export function startLearningSync(): void {
  setLearningChangeListener(schedulePush);
  if (flushListenersOn || typeof document === 'undefined') return;
  flushListenersOn = true;
  // setTimeout 0 : laisse d'abord le cours enregistrer le marque-page, puis envoie le tout
  const onHide = () => { if (document.visibilityState === 'hidden') setTimeout(flushPendingPush, 0); };
  document.addEventListener('visibilitychange', onHide);
  window.addEventListener('pagehide', () => setTimeout(flushPendingPush, 0));
}

/**
 * Récupère la copie du compte et la fusionne avec ce téléphone (au plus `timeoutMs`).
 * Renvoie true si la fusion a eu lieu.
 */
export async function pullLearning(userId: string, timeoutMs = 3500): Promise<boolean> {
  const remote = await Promise.race([
    call({ action: 'get' }),
    new Promise<null>((r) => setTimeout(() => r(null), timeoutMs)),
  ]);
  if (!remote) return false;
  try {
    const remoteProgress = remote.progress ? JSON.parse(remote.progress) : {};
    const remoteReviews = remote.reviews ? JSON.parse(remote.reviews) : {};
    const localProgress = getStudentProgressMap(userId);
    const localReviews = getReviewMap(userId);
    const mergedProgress = mergeProgressMaps(localProgress, remoteProgress);
    const mergedReviews = mergeReviewMaps(localReviews, remoteReviews);
    saveStudentProgressMap(userId, mergedProgress, { silent: true });
    replaceReviewMap(userId, mergedReviews);
    // Si ce téléphone avait du nouveau, le compte reçoit la version fusionnée
    if (JSON.stringify(mergedProgress) !== JSON.stringify(remoteProgress) || JSON.stringify(mergedReviews) !== JSON.stringify(remoteReviews)) {
      schedulePush(userId);
    }
    return true;
  } catch {
    return false;
  }
}
