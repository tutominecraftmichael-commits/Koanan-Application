import { db } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import type { PlanTier } from '../types';

export interface WaitlistEntry {
  id?: string;
  userId?: string;
  email: string;
  phoneNumber?: string;
  requestedTier: PlanTier;
  featureName?: string;
  source?: string;
  createdAt: string;
}

const LOCAL_WAITLIST_KEY = 'konan_waitlist_entries';

/**
 * Enregistre un utilisateur sur la liste d'attente pour le palier Pro ou Plus.
 * Tente l'enregistrement sur Firestore (collection `waitlist_pro`),
 * avec repli automatique en local si hors-ligne ou quota atteint.
 */
export async function registerToWaitlist(entry: {
  userId?: string;
  email: string;
  phoneNumber?: string;
  requestedTier?: PlanTier;
  featureName?: string;
  source?: string;
}): Promise<{ success: boolean; id?: string; error?: string }> {
  const newEntry: WaitlistEntry = {
    userId: entry.userId || 'anonymous',
    email: entry.email.trim().toLowerCase(),
    phoneNumber: entry.phoneNumber?.trim() || '',
    requestedTier: entry.requestedTier || 'pro',
    featureName: entry.featureName || 'Accès Général Pro',
    source: entry.source || 'modal_paywall',
    createdAt: new Date().toISOString(),
  };

  // 1. Sauvegarde locale immédiate (optimiste)
  try {
    const raw = localStorage.getItem(LOCAL_WAITLIST_KEY);
    const list: WaitlistEntry[] = raw ? JSON.parse(raw) : [];
    list.push(newEntry);
    localStorage.setItem(LOCAL_WAITLIST_KEY, JSON.stringify(list));
    localStorage.setItem('konan_is_waitlist_registered', 'true');
  } catch (err) {
    console.warn('[Waitlist] Erreur stockage local :', err);
  }

  // 2. Enregistrement Firestore dans la collection waitlist_pro
  if (db) {
    try {
      const colRef = collection(db, 'waitlist_pro');
      const docRef = await addDoc(colRef, newEntry);
      return { success: true, id: docRef.id };
    } catch (firestoreErr: any) {
      console.warn('[Waitlist] Enregistrement Firestore échoué (sauvegardé en local) :', firestoreErr?.message || firestoreErr);
      return { success: true, error: 'Sauvegardé localement' };
    }
  }

  return { success: true };
}

/**
 * Vérifie si l'utilisateur local s'est déjà inscrit à la liste d'attente
 */
export function isUserRegisteredOnWaitlist(): boolean {
  try {
    return localStorage.getItem('konan_is_waitlist_registered') === 'true';
  } catch {
    return false;
  }
}
