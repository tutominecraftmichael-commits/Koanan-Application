/**
 * Signal « les données d'apprentissage ont changé » (progression du cours, mémoire de révision).
 * Les modules de données restent indépendants de Firebase : la synchronisation avec le compte
 * (learningCloudSync.ts) s'abonne ici.
 */
type Listener = (userId: string) => void;
let listener: Listener | null = null;

export function setLearningChangeListener(fn: Listener | null): void {
  listener = fn;
}

export function notifyLearningChanged(userId: string): void {
  try {
    listener?.(userId);
  } catch {
    // la synchronisation ne doit jamais bloquer la leçon
  }
}
