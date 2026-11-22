/**
 * Mode « Je ne comprends pas » : appels au serveur (passe par /api/feynman, actions « tutor » et « tutor_status »).
 * La clé IA reste sur le serveur ; la limite de messages par jour est tenue par le serveur.
 */
import { auth } from '../lib/firebase';

export type TutorStep = 'diagnostic' | 'explication' | 'verification' | 'conclusion';

export interface TutorMessage {
  id: string;
  role: 'eleve' | 'konan';
  text: string;
  niveau?: number;
  etape?: TutorStep;
  notion?: string;
  choix?: string[];
}

export interface TutorContext {
  classe?: string;
  matiere?: string;
  notion?: string;
  reference?: string;
}

export interface TutorStatus {
  enabled: boolean;
  paid: boolean;
  limit: number;
  remaining: number;
}

export type TutorError =
  | 'PAID_PRO_REQUIRED' | 'DAILY_LIMIT' | 'TUTOR_BUSY' | 'AI_UNAVAILABLE' | 'TUTOR_OFF'
  | 'UNAUTHORIZED' | 'TOKEN_EXPIRED' | 'EMPTY_MESSAGE' | 'NETWORK' | 'UNKNOWN';

async function call(body: Record<string, unknown>): Promise<{ ok: boolean; json: any }> {
  const user = auth?.currentUser;
  if (!user) return { ok: false, json: { error: 'UNAUTHORIZED' } };
  const token = await user.getIdToken();
  const res = await fetch('/api/feynman', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  return { ok: res.ok && json?.success === true, json };
}

/** null : serveur injoignable ou élève non connecté (le bouton reste caché). */
export async function getTutorStatus(): Promise<TutorStatus | null> {
  try {
    const { ok, json } = await call({ action: 'tutor_status' });
    if (!ok) return null;
    return {
      enabled: json.enabled === true,
      paid: json.paid === true,
      limit: Number(json.limit) || 0,
      remaining: Number(json.remaining) || 0,
    };
  } catch {
    return null;
  }
}

export async function sendTutorMessage(
  messages: TutorMessage[],
  context: TutorContext,
): Promise<{ ok: true; reply: Omit<TutorMessage, 'id' | 'role' | 'text'> & { texte: string }; remaining: number } | { ok: false; error: TutorError; remaining?: number }> {
  try {
    const { ok, json } = await call({
      action: 'tutor',
      context,
      messages: messages.slice(-24).map(({ role, text, niveau, etape, notion }) => ({ role, text, niveau, etape, notion })),
    });
    if (!ok) return { ok: false, error: (json?.error as TutorError) || 'UNKNOWN', remaining: typeof json?.remaining === 'number' ? json.remaining : undefined };
    return { ok: true, reply: json.reply, remaining: Number(json.remaining) || 0 };
  } catch {
    return { ok: false, error: 'NETWORK' };
  }
}
