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
  /** KONAN Plus : pièce jointe à ce message de l'élève (photo de l'exercice ou question à l'oral) */
  pieceKind?: 'image' | 'audio';
  /** Énoncé lu sur la photo par KONE (renvoyé au serveur ensuite : l'image n'est envoyée qu'une fois) */
  pieceText?: string;
  /** Miniature de la photo (affichage sur le téléphone seulement, jamais envoyée) */
  thumb?: string;
  /** Texte écrit par l'appli à la place de l'élève (photo sans question) : pas affiché dans la bulle */
  autoText?: boolean;
  /** Question à l'oral pas encore transcrite */
  pending?: boolean;
}

/** Pièce jointe envoyée UNE fois avec un message (KONAN Plus). */
export interface TutorPiece { kind: 'image' | 'audio'; mimeType: string; data: string }

export interface TutorContext {
  classe?: string;
  matiere?: string;
  notion?: string;
  reference?: string;
  /** Pays de l'élève (hors Côte d'Ivoire : aucune mention ivoirienne) */
  country?: string;
  /** Prénom : KONAN appelle l'élève par son prénom */
  prenom?: string;
  /** Dernières erreurs dans les cours : KONAN trouve plus vite ce qui bloque */
  erreurs?: Array<{ matiere?: string; question: string; reponse?: string }>;
}

export interface TutorStatus {
  enabled: boolean;
  paid: boolean;
  limit: number;
  remaining: number;
  voiceLimit: number;
  voiceRemaining: number;
  /** KONAN Plus : photo de l'exercice et question à l'oral */
  plus: boolean;
  photoLimit: number;
  photoRemaining: number;
}

export type TutorError =
  | 'PAID_PRO_REQUIRED' | 'DAILY_LIMIT' | 'TUTOR_BUSY' | 'AI_UNAVAILABLE' | 'TUTOR_OFF'
  | 'UNAUTHORIZED' | 'TOKEN_EXPIRED' | 'EMPTY_MESSAGE' | 'NETWORK' | 'UNKNOWN'
  | 'VOICE_DAILY_LIMIT' | 'VOICE_UNAVAILABLE'
  | 'PLUS_REQUIRED' | 'PHOTO_DAILY_LIMIT' | 'BAD_PIECE' | 'PIECE_TOO_LARGE';

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
      voiceLimit: Number(json.voiceLimit) || 0,
      voiceRemaining: Number(json.voiceRemaining) || 0,
      plus: json.plus === true,
      photoLimit: Number(json.photoLimit) || 0,
      photoRemaining: Number(json.photoRemaining) || 0,
    };
  } catch {
    return null;
  }
}

export type TutorReply = Pick<TutorMessage, 'niveau' | 'etape' | 'notion' | 'choix'> & {
  texte: string;
  /** Énoncé lu sur la photo, ou transcription de la question à l'oral (KONAN Plus) */
  piece?: string;
};

export async function sendTutorMessage(
  messages: TutorMessage[],
  context: TutorContext,
  piece?: TutorPiece | null,
): Promise<{ ok: true; reply: TutorReply; remaining: number; photoRemaining?: number } | { ok: false; error: TutorError; remaining?: number; photoRemaining?: number }> {
  try {
    const { ok, json } = await call({
      action: 'tutor',
      context,
      messages: messages.slice(-24).map(({ role, text, niveau, etape, notion, pieceKind, pieceText }) => ({
        role, text, niveau, etape, notion, ...(pieceKind && pieceText ? { pieceKind, pieceText } : {}),
      })),
      ...(piece ? { piece } : {}),
    });
    const photoRemaining = typeof json?.photoRemaining === 'number' ? json.photoRemaining : undefined;
    if (!ok) return { ok: false, error: (json?.error as TutorError) || 'UNKNOWN', remaining: typeof json?.remaining === 'number' ? json.remaining : undefined, photoRemaining };
    return { ok: true, reply: json.reply, remaining: Number(json.remaining) || 0, photoRemaining };
  } catch {
    return { ok: false, error: 'NETWORK' };
  }
}

/**
 * Photo d'exercice réduite (≈ 1600 px, JPEG) : lisible (écriture, figures) et légère à envoyer,
 * plus une miniature (≈ 240 px) gardée dans la discussion.
 */
export async function prepareExercisePhoto(file: File): Promise<{ piece: TutorPiece; thumb: string }> {
  const bitmap = await createImageBitmap(file);
  const draw = (max: number, quality: number) => {
    const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('CANVAS');
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/jpeg', quality);
  };
  const full = draw(1600, 0.78);
  const thumb = draw(240, 0.7);
  bitmap.close?.();
  return { piece: { kind: 'image', mimeType: 'image/jpeg', data: full.split(',')[1] || '' }, thumb };
}

/**
 * Découpe un message en 2 morceaux pour la voix : le début (1er paragraphe, ou les premières phrases s'il est
 * long) puis le reste. Les deux sont préparés EN MÊME TEMPS ; le début, court, est prêt vite : le message
 * s'affiche et KONE commence à parler aussitôt, la suite enchaîne. Jamais de coupure dans une formule $…$.
 */
export function splitForVoice(text: string, firstMax = 170): string[] {
  const t = String(text || '').trim();
  if (t.length <= firstMax) return t ? [t] : [];
  // Fins de phrase ou de paragraphe hors formules
  const cuts: number[] = [];
  let inMath = false;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === '$') inMath = !inMath;
    if (inMath) continue;
    if (t[i] === '\n' && t[i + 1] === '\n') cuts.push(i);
    else if (/[.!?]/.test(t[i]) && /\s/.test(t[i + 1] || '')) cuts.push(i + 1);
  }
  const cut = [...cuts].reverse().find((c) => c >= 40 && c <= firstMax) ?? cuts.find((c) => c >= 40);
  if (!cut || cut >= t.length - 20) return [t];
  return [t.slice(0, cut).trim(), t.slice(cut).trim()].filter(Boolean);
}

/** KONE lit un message à voix haute : renvoie un son (WAV) prêt à jouer. */
export async function speakTutor(text: string, part = 0): Promise<{ ok: true; src: string; voiceRemaining: number } | { ok: false; error: TutorError; voiceRemaining?: number }> {
  try {
    // part > 0 : suite d'une réponse déjà comptée (préparée en même temps que le début)
    const { ok, json } = await call({ action: 'tutor_voice', text: text.slice(0, 4000), part });
    if (!ok || !json.audio) {
      return { ok: false, error: (json?.error as TutorError) || 'VOICE_UNAVAILABLE', voiceRemaining: typeof json?.voiceRemaining === 'number' ? json.voiceRemaining : undefined };
    }
    return { ok: true, src: `data:${json.mimeType || 'audio/wav'};base64,${json.audio}`, voiceRemaining: Number(json.voiceRemaining) || 0 };
  } catch {
    return { ok: false, error: 'NETWORK' };
  }
}
