import React, { useCallback, useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle2, Clock, Loader2, RefreshCw, Wallet, XCircle } from 'lucide-react';
import { adminPayments, PERIOD_LABEL, type AdminPayment, type RejectReason } from '../../services/subscriptionApi';

/**
 * Console administrateur : paiements KONAN Pro à vérifier.
 * Compare chaque demande avec l'historique de ton application Wave / Orange Money :
 * « Confirmer » si l'argent est arrivé, « Refuser » sinon (Pro est retiré tout de suite).
 */

const fcfa = (n: number) => `${Number(n || 0).toLocaleString('fr-FR').replace(/ | /g, ' ')} FCFA`;
const when = (iso?: string) => (iso ? new Date(iso).toLocaleString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }) : '');
const phoneFmt = (p: string) => String(p || '').replace(/(\d{2})(?=\d)/g, '$1 ');
const PROVIDER: Record<string, string> = { wave: 'Wave', orange: 'Orange Money', saspay: 'SasPay (vérifié automatiquement)' };
const REASONS: Array<{ id: RejectReason; label: string }> = [
  { id: 'not_received', label: 'Argent pas reçu' },
  { id: 'wrong_amount', label: 'Mauvais montant' },
  { id: 'duplicate', label: 'Paiement déjà utilisé' },
  { id: 'other', label: 'Autre raison' },
];

function errorText(code: string) {
  if (code === 'GOOGLE_REQUIRED' || code === 'NOT_ADMIN') return 'Les paiements exigent la connexion administrateur avec ton compte Google (pas le mot de passe).';
  if (code === 'REAUTH_REQUIRED' || code === 'TOKEN_EXPIRED') return 'Reconnecte-toi avec Google pour vérifier les paiements.';
  if (code === 'NETWORK') return 'Pas de connexion au serveur.';
  if (code === 'NOT_PENDING' || code === 'ALREADY_REJECTED') return 'Ce paiement a déjà été traité. Actualise la liste.';
  if (/HTTP 404/.test(code)) return 'La route des paiements n’existe pas encore sur ce serveur (mise en ligne à faire).';
  return `Erreur : ${code}`;
}

export const PaymentsPanel: React.FC = () => {
  const [pending, setPending] = useState<AdminPayment[]>([]);
  const [recent, setRecent] = useState<AdminPayment[]>([]);
  const [meta, setMeta] = useState<{ enabled: boolean; testMode: boolean } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [busyId, setBusyId] = useState('');
  const [rejectFor, setRejectFor] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    const r = await adminPayments('admin_list');
    setLoading(false);
    if (!r.ok) { setError(errorText(r.error)); return; }
    setError('');
    setPending(r.json.pending || []);
    setRecent(r.json.recent || []);
    setMeta(r.json.config || null);
  }, []);

  useEffect(() => { load(); }, [load]);

  const decide = async (p: AdminPayment, action: 'admin_confirm' | 'admin_reject', reason?: RejectReason) => {
    if (busyId) return;
    if (action === 'admin_confirm' && !window.confirm(`Confirmer : tu as bien reçu ${fcfa(p.amount)} par ${PROVIDER[p.provider] || p.provider}, transaction n° ${p.ref}, depuis le ${phoneFmt(p.payerPhone)} ?`)) return;
    setBusyId(p.id);
    const r = await adminPayments(action, { paymentId: p.id, reason });
    setBusyId('');
    setRejectFor('');
    if (!r.ok) setError(errorText(r.error));
    await load();
  };

  return (
    <section className="p-5 rounded-3xl bg-[#0D1527] border border-slate-800/80 shadow-xl space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-yellow-500/20 text-yellow-300 flex items-center justify-center"><Wallet className="w-5 h-5" /></span>
          <div>
            <h2 className="text-sm sm:text-base font-black text-white">Paiements KONAN Pro</h2>
            <p className="text-[11px] text-slate-400">Compare avec ton historique Wave / Orange Money, puis confirme ou refuse.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {meta && (
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase border ${meta.enabled ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40' : 'bg-slate-700/40 text-slate-300 border-slate-600'}`}>
              {meta.enabled ? 'Paiement ouvert' : 'Paiement fermé'}{meta.testMode ? ' · zone de test' : ''}
            </span>
          )}
          <button onClick={load} disabled={loading} className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 inline-flex items-center gap-1.5 disabled:opacity-50">
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} /> Actualiser
          </button>
        </div>
      </div>

      {error && (
        <p className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2"><AlertTriangle className="w-4 h-4 shrink-0" /> {error}</p>
      )}

      <div>
        <h3 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2 inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> À vérifier ({pending.length})</h3>
        {pending.length === 0 && !loading && <p className="text-xs text-slate-400">Aucun paiement à vérifier.</p>}
        <div className="space-y-2.5">
          {pending.map((p) => (
            <div key={p.id} className="p-3.5 rounded-2xl bg-slate-900/80 border border-amber-500/30 space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-lg font-black text-white">{fcfa(p.amount)} <span className="text-xs font-bold text-slate-400">· {PROVIDER[p.provider] || p.provider}</span></span>
                <span className="text-[11px] text-slate-400">déclaré le {when(p.declaredAt)}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-300">
                <span>N° de transaction : <b className="font-mono text-white">{p.ref}</b>{p.refRaw && p.refRaw.trim().toUpperCase() !== p.ref ? <span className="text-slate-500"> (écrit « {p.refRaw} »)</span> : null}</span>
                <span>Payé depuis : <b className="text-white">{phoneFmt(p.payerPhone)}</b></span>
                <span>Élève : <b className="text-white">{p.studentName || '—'}</b> <span className="text-slate-500">{p.studentEmail}</span></span>
                <span>Formule : Pro · {PERIOD_LABEL[p.period] || p.period} · reçu sur {phoneFmt(p.receiverNumber)}</span>
              </div>
              {rejectFor === p.id ? (
                <div className="flex flex-wrap gap-2 pt-1">
                  {REASONS.map((r) => (
                    <button key={r.id} onClick={() => decide(p, 'admin_reject', r.id)} disabled={Boolean(busyId)}
                      className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold disabled:opacity-50">{r.label}</button>
                  ))}
                  <button onClick={() => setRejectFor('')} className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold">Annuler</button>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2 pt-1">
                  <button onClick={() => decide(p, 'admin_confirm')} disabled={Boolean(busyId)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black inline-flex items-center gap-1.5 disabled:opacity-50">
                    {busyId === p.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />} Argent reçu : confirmer
                  </button>
                  <button onClick={() => setRejectFor(p.id)} disabled={Boolean(busyId)}
                    className="px-4 py-2 rounded-xl bg-rose-950/60 hover:bg-rose-900/70 text-rose-200 border border-rose-700/50 text-xs font-black inline-flex items-center gap-1.5 disabled:opacity-50">
                    <XCircle className="w-4 h-4" /> Refuser
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {recent.length > 0 && (
        <details>
          <summary className="cursor-pointer text-xs font-bold text-slate-300">Derniers paiements traités ({recent.length})</summary>
          <div className="mt-2 space-y-1.5">
            {recent.map((p) => (
              <div key={p.id} className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300 border-b border-slate-800 pb-1.5">
                <span>{when(p.declaredAt)} · {fcfa(p.amount)} · <span className="font-mono">{p.ref}</span> · {p.studentName || p.studentEmail}</span>
                <span className="inline-flex items-center gap-2">
                  <span className={p.status === 'confirmed' ? 'text-emerald-300 font-bold' : 'text-rose-300 font-bold'}>{p.status === 'confirmed' ? 'Confirmé' : 'Refusé'}</span>
                  {p.status === 'confirmed' && (
                    <button onClick={() => { if (window.confirm(`Annuler ce paiement confirmé (n° ${p.ref}) ? L'élève perd Pro tout de suite.`)) decide(p, 'admin_reject', 'other'); }}
                      className="text-[10px] underline text-slate-500 hover:text-rose-300">annuler</button>
                  )}
                </span>
              </div>
            ))}
          </div>
        </details>
      )}
    </section>
  );
};

export default PaymentsPanel;
