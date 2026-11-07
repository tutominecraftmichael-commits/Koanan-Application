/**
 * « Ce compte existe-t-il ? » — demandé au serveur KONAN (/api/account-exists).
 * exists = null si la vérification est impossible (pas de réseau, serveur indisponible) :
 * dans ce cas, c'est Firebase qui tranche lors de la connexion ou de l'inscription.
 */
export type AccountCheck = { exists: boolean | null; providers: string[]; disabled?: boolean };

export async function checkAccountExists(email: string): Promise<AccountCheck> {
  const clean = String(email || '').trim().toLowerCase();
  if (!clean) return { exists: null, providers: [] };
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const res = await fetch('/api/account-exists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: clean }),
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (res.status === 429) {
      const err = new Error('Trop de vérifications d’adresse. Réessaie dans quelques minutes.');
      (err as any).code = 'auth/too-many-requests';
      throw err;
    }
    if (!res.ok) return { exists: null, providers: [] };
    const data = await res.json();
    return {
      exists: typeof data.exists === 'boolean' ? data.exists : null,
      providers: Array.isArray(data.providers) ? data.providers : [],
      disabled: Boolean(data.disabled),
    };
  } catch (err: any) {
    if (err?.code === 'auth/too-many-requests') throw err;
    return { exists: null, providers: [] };
  }
}
