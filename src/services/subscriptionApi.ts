/**
 * Appels à /api/subscription : abonnement KONAN Pro payé par Wave ou Orange Money.
 * Le serveur fait foi : l'application n'est jamais celle qui décide qu'un élève est Pro.
 */
import { auth } from '../lib/firebase';
import { getAdminAuthorizationHeader } from '../lib/adminAuth';

export type PaidTier = 'pro' | 'plus';
export type PaidPeriod = 'mois' | 'semestre';
export type PaymentProvider = 'wave' | 'orange';
/** Moyen enregistré sur un paiement (les paiements SasPay sont vérifiés automatiquement). */
export type PaymentSource = PaymentProvider | 'saspay';

export interface SubscriptionOffer { tier: PaidTier; period: PaidPeriod; days: number; amount: number; normalAmount: number }
export interface SubscriptionConfig {
  enabled: boolean;
  testMode: boolean;
  receiverName: string;
  receivers: Partial<Record<PaymentProvider, { label: string; number: string }>>;
  offers: SubscriptionOffer[];
  /** Paiement automatique par SasPay (Wave, Orange Money, carte) : plus de numéro à recopier */
  saspay?: boolean;
  /** SasPay en bac à sable (clé de test : aucun argent réel) */
  saspaySandbox?: boolean;
}
export interface SaspayPending { sessionId: string; period: PaidPeriod; amount: number; createdAt: string; checkoutUrl: string | null }
export interface PaymentView {
  id: string; tier: PaidTier; period: PaidPeriod; provider: PaymentSource; ref: string; amount: number;
  status: 'pending' | 'confirmed' | 'rejected'; declaredAt: string; checkedAt: string | null; rejectMessage: string | null;
}
export interface SubscriptionStatus {
  tier: 'free' | PaidTier;
  endsAt: string | null;
  provisional: boolean;
  /** Offre de lancement : Pro offert à tous jusqu’à graceUntil */
  grace?: boolean;
  graceUntil?: string | null;
  trustBlocked: boolean;
  pending: PaymentView | null;
  lastRejected: PaymentView | null;
  history: PaymentView[];
  /** Paiement SasPay commencé mais pas encore confirmé */
  saspayPending?: SaspayPending | null;
}
export interface SubscriptionInfo { config: SubscriptionConfig; status: SubscriptionStatus | null }

export const PERIOD_LABEL: Record<PaidPeriod, string> = { mois: '1 mois', semestre: '6 mois' };

/** Messages simples pour chaque refus du serveur. */
export function subscriptionErrorText(code?: string): string {
  switch (code) {
    case 'REF_USED': return 'Ce numéro de transaction a déjà été utilisé. Vérifie que tu as recopié le bon numéro.';
    case 'PENDING_EXISTS': return 'Tu as déjà un paiement en cours de vérification. Attends qu’il soit vérifié.';
    case 'BAD_REF': return 'Numéro de transaction invalide. Recopie-le exactement comme dans ton application Wave ou Orange Money.';
    case 'BAD_PHONE': return 'Numéro de téléphone invalide. Écris les 10 chiffres (exemple : 07 01 02 03 04).';
    case 'TIER_NOT_SOLD': return 'Cette formule n’est pas encore disponible.';
    case 'PRO_NOT_FOR_GRADE': return 'KONAN Pro n’est pas encore disponible pour ta classe : il est ouvert de la Seconde à la Terminale et en Licence 1 ENTD. Aucun paiement n’a été enregistré.';
    case 'PRO_NOT_FOR_COUNTRY': return 'KONAN Pro n’est pas encore disponible dans ton pays. Aucun paiement n’a été enregistré.';
    case 'OTHER_TIER_ACTIVE': return 'Tu as déjà une autre formule en cours.';
    case 'TOO_MANY': return 'Trop d’essais aujourd’hui. Réessaie demain.';
    case 'BAD_PROVIDER': return 'Choisis Wave ou Orange Money.';
    case 'PAYMENTS_DISABLED': return 'Le paiement n’est pas encore ouvert.';
    case 'SASPAY_NOT_CONFIGURED': return 'Le paiement en ligne n’est pas encore ouvert. Reviens bientôt.';
    case 'SASPAY_UNAVAILABLE': return 'Le service de paiement ne répond pas pour le moment. Réessaie dans quelques minutes : tu n’as rien payé.';
    case 'NO_EMAIL': return 'Ton compte n’a pas d’adresse e-mail : elle est nécessaire pour le reçu de paiement.';
    case 'UNAUTHORIZED': case 'TOKEN_EXPIRED': return 'Reconnecte-toi à ton compte, puis réessaie.';
    case 'NETWORK': return 'Pas de connexion Internet. Réessaie dans un instant.';
    default: return 'Une erreur est survenue. Réessaie dans un instant.';
  }
}

async function post(body: Record<string, unknown>, authorization: string | null): Promise<{ ok: boolean; status: number; json: any }> {
  const res = await fetch('/api/subscription', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(authorization ? { Authorization: authorization } : {}) },
    body: JSON.stringify(body),
    cache: 'no-store',
  });
  let json: any = {};
  try { json = await res.json(); } catch { /* réponse vide */ }
  return { ok: res.ok && Boolean(json?.success), status: res.status, json };
}

async function asStudent(body: Record<string, unknown>) {
  const user = auth?.currentUser;
  if (!user) return { ok: false, status: 401, json: { error: 'UNAUTHORIZED' } };
  try {
    let r = await post(body, `Bearer ${await user.getIdToken(false)}`);
    if (!r.ok && r.status === 401) r = await post(body, `Bearer ${await user.getIdToken(true)}`);
    return r;
  } catch {
    return { ok: false, status: 0, json: { error: 'NETWORK' } };
  }
}

export async function fetchSubscription(): Promise<{ success: true; info: SubscriptionInfo } | { success: false; error: string }> {
  const r = await asStudent({ action: 'status' });
  if (!r.ok) return { success: false, error: String(r.json?.error || `HTTP ${r.status}`) };
  return { success: true, info: { config: r.json.config, status: r.json.status } };
}

export async function declarePayment(input: { tier: PaidTier; period: PaidPeriod; provider: PaymentProvider; ref: string; payerPhone: string; gradeLevel: string; country: string }):
  Promise<{ success: true; info: SubscriptionInfo } | { success: false; error: string }> {
  const r = await asStudent({ action: 'declare', ...input });
  if (!r.ok) return { success: false, error: String(r.json?.error || `HTTP ${r.status}`) };
  return { success: true, info: { config: r.json.config, status: r.json.status } };
}

/** Ouvre une page de paiement SasPay (le prix est fixé par le serveur). */
export async function startSaspayPayment(input: { period: PaidPeriod; gradeLevel: string; country: string }):
  Promise<{ success: true; checkoutUrl: string; sessionId: string } | { success: false; error: string }> {
  const r = await asStudent({ action: 'saspay_start', tier: 'pro', ...input });
  if (!r.ok || !r.json?.checkoutUrl) return { success: false, error: String(r.json?.error || `HTTP ${r.status}`) };
  return { success: true, checkoutUrl: String(r.json.checkoutUrl), sessionId: String(r.json.sessionId || '') };
}

/** Demande au serveur de revérifier auprès de SasPay (Pro activé seulement si le paiement est réussi). */
export async function checkSaspayPayment(): Promise<{ success: true; info: SubscriptionInfo } | { success: false; error: string }> {
  const r = await asStudent({ action: 'saspay_check' });
  if (!r.ok) return { success: false, error: String(r.json?.error || `HTTP ${r.status}`) };
  return { success: true, info: { config: r.json.config, status: r.json.status } };
}

// ---------- Administrateur ----------
export interface AdminPayment extends Omit<PaymentView, 'rejectMessage' | 'checkedAt'> {
  uid: string; payerPhone: string; studentName: string; studentEmail: string; receiverNumber: string;
  refRaw: string; checkedAt?: string; checkedBy?: string; rejectReason?: string; testMode?: boolean;
}
export type RejectReason = 'not_received' | 'wrong_amount' | 'duplicate' | 'other';

export async function adminPayments(action: 'admin_list' | 'admin_confirm' | 'admin_reject', extra: Record<string, unknown> = {}) {
  const authorization = await getAdminAuthorizationHeader();
  // Les paiements exigent la connexion administrateur par Google (jamais l'ancien mot de passe partagé)
  if (!authorization || authorization.slice(7).split('.').length !== 3) {
    return { ok: false, error: 'GOOGLE_REQUIRED', json: {} as any };
  }
  try {
    const r = await post({ action, ...extra }, authorization);
    return { ok: r.ok, error: String(r.json?.error || (r.ok ? '' : `HTTP ${r.status}`)), json: r.json };
  } catch {
    return { ok: false, error: 'NETWORK', json: {} as any };
  }
}
