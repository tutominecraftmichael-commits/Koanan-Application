import React, { useMemo, useState } from 'react';
import { AlertTriangle, CheckCircle2, Clock, Copy, Crown, Loader2, RefreshCw, X } from 'lucide-react';
import {
  PERIOD_LABEL, declarePayment, subscriptionErrorText,
  type PaidPeriod, type PaymentProvider, type SubscriptionInfo,
} from '../../services/subscriptionApi';

/**
 * Passer à KONAN Pro sans API de paiement :
 *  1. l'élève choisit sa formule ;
 *  2. il envoie l'argent par Wave ou Orange Money au numéro de KONAN ;
 *  3. il recopie le numéro de transaction → Pro TOUT DE SUITE (« en vérification ») ;
 *  4. l'administrateur vérifie plus tard ; un faux numéro retire Pro.
 */

const fcfa = (n: number) => `${n.toLocaleString('fr-FR').replace(/ | /g, ' ')} FCFA`;
const dateFr = (iso: string | null) => (iso ? new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : '');

interface Props {
  info: SubscriptionInfo | null;
  loading: boolean;
  loadError?: string;
  onClose: () => void;
  onUpdated: (info: SubscriptionInfo) => void;
  onRefresh: () => void;
  /** Durée choisie dans la fiche des formules (mois ou semestre) */
  initialPeriod?: PaidPeriod;
}

export const SubscriptionView: React.FC<Props> = ({ info, loading, loadError, onClose, onUpdated, onRefresh, initialPeriod = 'mois' }) => {
  const config = info?.config;
  const status = info?.status || null;
  const offers = useMemo(() => (config?.offers || []).filter((o) => o.tier === 'pro'), [config]);
  const providers = useMemo(() => Object.keys(config?.receivers || {}) as PaymentProvider[], [config]);
  const [period, setPeriod] = useState<PaidPeriod>(initialPeriod);
  const [provider, setProvider] = useState<PaymentProvider | ''>('');
  const [ref, setRef] = useState('');
  const [phone, setPhone] = useState('');
  const [sentConfirmed, setSentConfirmed] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const offer = offers.find((o) => o.period === period) || offers[0];
  const chosenProvider: PaymentProvider | '' = provider || providers[0] || '';
  const receiver = chosenProvider ? config?.receivers[chosenProvider] : undefined;
  const isActive = status?.tier === 'pro' || status?.tier === 'plus';
  const pending = status?.pending || null;
  // Dernier paiement refusé, seulement s'il est le plus récent (sinon c'est de l'histoire ancienne)
  const rejectedNotice = status?.lastRejected && status.history[0]?.id === status.lastRejected.id ? status.lastRejected : null;

  const copyNumber = async () => {
    if (!receiver) return;
    try {
      await navigator.clipboard.writeText(receiver.number.replace(/\s/g, ''));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch { /* presse-papiers indisponible : le numéro reste affiché */ }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!offer || !chosenProvider || sending) return;
    if (!sentConfirmed) { setError('Coche la case pour confirmer que tu as bien envoyé l’argent.'); return; }
    setSending(true);
    setError('');
    const r = await declarePayment({ tier: 'pro', period: offer.period, provider: chosenProvider, ref, payerPhone: phone });
    setSending(false);
    if (!r.success) { setError(subscriptionErrorText(r.error)); return; }
    setRef('');
    setPhone('');
    setSentConfirmed(false);
    onUpdated(r.info);
  };

  return (
    <div className="fixed inset-0 z-[90] bg-slate-900/50 dark:bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4" role="dialog" aria-modal="true" aria-label="KONAN Pro">
      <div className="w-full sm:max-w-lg max-h-[95vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl">
        {/* En-tête */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-yellow-400 flex items-center justify-center shadow"><Crown className="w-5 h-5 text-yellow-900" /></span>
            <div>
              <h2 className="text-base font-black text-slate-900 dark:text-white leading-tight">KONAN Pro</h2>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">Paiement par Wave ou Orange Money</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300" aria-label="Fermer"><X className="w-5 h-5" /></button>
        </div>

        <div className="p-4 sm:p-5 space-y-4">
          {config?.testMode && (
            <p className="text-xs font-bold rounded-xl px-3 py-2 bg-violet-100 text-violet-900 border border-violet-300 dark:bg-violet-500/15 dark:text-violet-200 dark:border-violet-500/40">
              Mode test (sur l’ordinateur) : prix réduits, et rien n’est enregistré pour les vrais élèves.
            </p>
          )}

          {loading && !info && (
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"><Loader2 className="w-4 h-4 animate-spin" /> Chargement…</div>
          )}
          {!loading && !info && (
            <div className="space-y-2">
              <p className="text-sm text-rose-700 dark:text-rose-300">{subscriptionErrorText(loadError)}</p>
              <button onClick={onRefresh} className="text-sm font-bold text-sky-700 dark:text-sky-300 inline-flex items-center gap-1"><RefreshCw className="w-4 h-4" /> Réessayer</button>
            </div>
          )}

          {/* Abonnement en cours */}
          {isActive && status && (
            <div className="rounded-2xl p-4 border-2 border-yellow-400 bg-yellow-50 dark:bg-yellow-500/10">
              <p className="text-sm font-black text-slate-900 dark:text-white">Tu es KONAN Pro jusqu’au {dateFr(status.endsAt)}</p>
              {status.provisional ? (
                <p className="mt-1 text-xs text-amber-800 dark:text-amber-200 inline-flex items-start gap-1.5"><Clock className="w-4 h-4 shrink-0" /> Paiement en cours de vérification. Si l’argent n’est pas trouvé, Pro sera retiré.</p>
              ) : (
                <p className="mt-1 text-xs text-emerald-800 dark:text-emerald-300 inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Paiement vérifié.</p>
              )}
            </div>
          )}

          {/* Paiement en attente sans Pro (élève qui avait eu un paiement refusé) */}
          {pending && !isActive && (
            <div className="rounded-2xl p-4 border-2 border-amber-400 bg-amber-50 dark:bg-amber-500/10">
              <p className="text-sm font-black text-slate-900 dark:text-white inline-flex items-center gap-1.5"><Clock className="w-4 h-4" /> Paiement en cours de vérification</p>
              <p className="mt-1 text-xs text-slate-700 dark:text-slate-300">Tu deviendras Pro dès que ton paiement de {fcfa(pending.amount)} (n° {pending.ref}) sera vérifié.</p>
            </div>
          )}

          {rejectedNotice && !isActive && (
            <div className="rounded-2xl p-4 border-2 border-rose-400 bg-rose-50 dark:bg-rose-500/10">
              <p className="text-sm font-black text-rose-900 dark:text-rose-200 inline-flex items-center gap-1.5"><AlertTriangle className="w-4 h-4" /> Paiement n° {rejectedNotice.ref} refusé</p>
              <p className="mt-1 text-xs text-rose-900 dark:text-rose-200">{rejectedNotice.rejectMessage}</p>
            </div>
          )}

          {info && !config?.enabled && (
            <p className="text-sm text-slate-700 dark:text-slate-300">Le paiement de KONAN Pro n’est pas encore ouvert. Reviens bientôt.</p>
          )}
          {info && config?.enabled && providers.length === 0 && (
            <p className="text-sm text-slate-700 dark:text-slate-300">Le numéro de paiement n’est pas encore configuré. Reviens bientôt.</p>
          )}

          {/* Formulaire : seulement s'il n'y a pas déjà un paiement en attente */}
          {info && config?.enabled && providers.length > 0 && offer && !pending && (
            <form onSubmit={submit} className="space-y-4">
              <p className="text-sm font-bold text-slate-900 dark:text-white">{isActive ? 'Prolonger mon abonnement' : 'Choisis ta formule'}</p>

              {/* 1. Formule */}
              <div className="grid grid-cols-2 gap-2">
                {offers.map((o) => (
                  <button type="button" key={o.period} onClick={() => setPeriod(o.period)}
                    className={`rounded-2xl p-3 text-left border-2 transition ${o.period === offer.period ? 'border-sky-500 bg-sky-50 dark:bg-sky-500/10' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60'}`}>
                    <span className="block text-xs font-bold text-slate-600 dark:text-slate-300">Pro · {PERIOD_LABEL[o.period]}</span>
                    <span className="block text-lg font-black text-slate-900 dark:text-white">{fcfa(o.amount)}</span>
                    {o.amount !== o.normalAmount && <span className="block text-[10px] text-slate-500 dark:text-slate-400">vrai prix : {fcfa(o.normalAmount)}</span>}
                  </button>
                ))}
              </div>

              {/* 2. Envoyer l'argent */}
              <div className="rounded-2xl p-3.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5">
                <p className="text-sm font-bold text-slate-900 dark:text-white">1. Envoie l’argent</p>
                {providers.length > 1 && (
                  <div className="flex gap-2">
                    {providers.map((p) => (
                      <button type="button" key={p} onClick={() => setProvider(p)}
                        className={`flex-1 rounded-xl py-2 text-sm font-bold border-2 ${p === chosenProvider ? 'border-sky-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-white' : 'border-transparent bg-slate-200/70 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300'}`}>
                        {config.receivers[p]?.label}
                      </button>
                    ))}
                  </div>
                )}
                {receiver && (
                  <>
                    <p className="text-sm text-slate-800 dark:text-slate-200">
                      Envoie exactement <b>{fcfa(offer.amount)}</b> par <b>{receiver.label}</b> au :
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="flex-1 text-xl font-black tracking-wider text-slate-900 dark:text-white">{receiver.number}</span>
                      <button type="button" onClick={copyNumber} className="px-3 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 inline-flex items-center gap-1">
                        <Copy className="w-3.5 h-3.5" /> {copied ? 'Copié' : 'Copier'}
                      </button>
                    </div>
                    {config.receiverName && <p className="text-xs text-slate-600 dark:text-slate-400">Nom affiché : {config.receiverName}</p>}
                  </>
                )}
              </div>

              {/* 3. Déclarer */}
              <div className="space-y-2.5">
                <p className="text-sm font-bold text-slate-900 dark:text-white">2. Recopie les informations du paiement</p>
                <label className="block">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Numéro de transaction</span>
                  <input value={ref} onChange={(e) => setRef(e.target.value)} required maxLength={60} autoCapitalize="characters" autoComplete="off"
                    placeholder="Exemple : T_8F3K2M9Q1Z"
                    className="mt-1 w-full rounded-xl px-3 py-2.5 text-sm font-mono bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-400" />
                  <span className="block mt-1 text-[11px] text-slate-600 dark:text-slate-400">Ouvre ce paiement dans ton historique {receiver?.label || ''} (ou dans le SMS de confirmation) : le numéro de transaction y est écrit.</span>
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Numéro de téléphone qui a payé</span>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} required inputMode="tel" maxLength={20} autoComplete="tel"
                    placeholder="07 01 02 03 04"
                    className="mt-1 w-full rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-400" />
                </label>
                <label className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <input type="checkbox" checked={sentConfirmed} onChange={(e) => setSentConfirmed(e.target.checked)} className="mt-0.5 w-4 h-4 accent-sky-600" />
                  <span>J’ai bien envoyé {fcfa(offer.amount)}. Je sais que chaque paiement est vérifié : un faux numéro retire Pro.</span>
                </label>
              </div>

              {error && <p className="text-sm font-bold text-rose-700 dark:text-rose-300">{error}</p>}

              <button type="submit" disabled={sending}
                className="w-full rounded-2xl py-3.5 text-base font-black bg-sky-600 hover:bg-sky-500 text-white shadow-lg disabled:opacity-60 inline-flex items-center justify-center gap-2">
                {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCircle2 className="w-5 h-5" />} J’ai payé
              </button>
              <p className="text-[11px] text-center text-slate-600 dark:text-slate-400">Tu deviens Pro tout de suite. Ton paiement est vérifié ensuite.</p>
            </form>
          )}

          {/* Historique */}
          {status && status.history.length > 0 && (
            <details className="text-xs text-slate-700 dark:text-slate-300">
              <summary className="cursor-pointer font-bold">Mes paiements</summary>
              <ul className="mt-2 space-y-1.5">
                {status.history.map((p) => (
                  <li key={p.id} className="flex justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-1.5">
                    <span>{dateFr(p.declaredAt)} · {fcfa(p.amount)} · n° {p.ref}</span>
                    <span className={p.status === 'confirmed' ? 'text-emerald-700 dark:text-emerald-300 font-bold' : p.status === 'rejected' ? 'text-rose-700 dark:text-rose-300 font-bold' : 'text-amber-700 dark:text-amber-300 font-bold'}>
                      {p.status === 'confirmed' ? 'Vérifié' : p.status === 'rejected' ? 'Refusé' : 'En vérification'}
                    </span>
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionView;
