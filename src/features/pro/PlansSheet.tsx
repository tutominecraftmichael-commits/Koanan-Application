import React, { useState } from 'react';
import { ArrowUpRight, Check, Clock, Crown, Gem, Lock, ShieldCheck, Smartphone, X, Zap } from 'lucide-react';
import { DISPLAY_PLANS, PAYMENTS_OPEN, PLUS_VISIBLE, SEMESTER_MONTHS, formatFcfa, type BillingPeriod } from '../../lib/subscriptionPlans';

/**
 * Fiche des formules (ouverte depuis les Paramètres) : KONAN Pro (et KONAN Plus quand PLUS_VISIBLE sera vrai).
 * Style sobre et haut de gamme : neutres profonds, or discret, beaucoup d'air, pas de couleurs criardes.
 * - Élève Gratuit : Pro (à souscrire) et Plus (bientôt).
 * - Élève Pro     : son abonnement en cours, « Prolonger », et Plus présenté comme le niveau supérieur.
 */

interface Props {
  currentTier: 'free' | 'pro' | 'plus';
  /** Fin de l'abonnement payé (null : pas de date, par exemple Pro offert avant l'ouverture du paiement) */
  endsAt?: string | null;
  provisional?: boolean;
  /** Le paiement est ouvert : un abonné peut prolonger. Sinon (Pro offert), pas de bouton « Prolonger ». */
  canRenew?: boolean;
  onClose: () => void;
  onChoosePro: (period: 'mois' | 'semestre') => void;
  onJoinPlus: () => void;
}

const dateFr = (iso?: string | null) => (iso ? new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : '');

const PRO = DISPLAY_PLANS.find((p) => p.id === 'pro')!;
const PLUS = DISPLAY_PLANS.find((p) => p.id === 'plus')!;

const Feature: React.FC<{ title: string; detail?: string; muted?: boolean }> = ({ title, detail, muted }) => (
  <li className="flex items-start gap-2.5">
    <span className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${muted ? 'bg-slate-200 dark:bg-slate-800' : 'bg-amber-100 dark:bg-amber-400/15'}`}>
      <Check className={`w-2.5 h-2.5 stroke-[3] ${muted ? 'text-slate-500 dark:text-slate-400' : 'text-amber-700 dark:text-amber-300'}`} />
    </span>
    <span className="min-w-0">
      <span className="block text-[13px] font-semibold text-slate-900 dark:text-slate-100 leading-snug">{title}</span>
      {detail && <span className="block text-[11.5px] text-slate-600 dark:text-slate-400 leading-snug mt-0.5">{detail}</span>}
    </span>
  </li>
);

export const PlansSheet: React.FC<Props> = ({ currentTier, endsAt, provisional, canRenew = true, onClose, onChoosePro, onJoinPlus }) => {
  const [billing, setBilling] = useState<BillingPeriod>('semester');
  const isPro = currentTier === 'pro';
  const isPlus = currentTier === 'plus';
  // KONAN Plus pas encore officiel : on ne montre que KONAN Pro (PLUS_VISIBLE)
  const showPlus = PLUS_VISIBLE;
  const period: 'mois' | 'semestre' = billing === 'monthly' ? 'mois' : 'semestre';
  const price = (plan: typeof PRO) => plan.prices[billing];
  const perMonth = (plan: typeof PRO) => Math.round(plan.prices.semester / SEMESTER_MONTHS);
  const saving = (plan: typeof PRO) => plan.prices.monthly * SEMESTER_MONTHS - plan.prices.semester;

  return (
    <div className="fixed inset-0 z-[95] bg-slate-950/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4" role="dialog" aria-modal="true" aria-label="Les formules KONAN">
      <div className={`w-full ${showPlus ? 'sm:max-w-3xl' : 'sm:max-w-xl'} max-h-[95vh] overflow-y-auto rounded-t-[28px] sm:rounded-[28px] bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-white/10 shadow-2xl`}>
        {/* En-tête */}
        <div className="relative px-5 sm:px-8 pt-6 sm:pt-8 pb-5 text-center">
          <button onClick={onClose} className="absolute right-3 top-3 p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5" aria-label="Fermer">
            <X className="w-5 h-5" />
          </button>
          <div className="mx-auto w-11 h-11 rounded-2xl bg-slate-900 dark:bg-white/5 ring-1 ring-amber-400/40 flex items-center justify-center">
            <Crown className="w-5 h-5 text-amber-300" />
          </div>
          <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.28em] text-amber-700 dark:text-amber-300/90">KONAN Premium</p>
          <h2 className="mt-1.5 text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            {isPro ? (showPlus ? 'Va encore plus loin.' : 'Merci d’être KONAN Pro.') : isPlus ? 'Tu as le meilleur de KONAN.' : 'Révise comme les meilleurs.'}
          </h2>
          <p className="mt-1.5 text-[13px] text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            {isPro
              ? (showPlus ? 'Merci de faire partie de KONAN Pro. Voici ton abonnement, et ce qui t’attend avec KONAN Plus.' : 'Voici ton abonnement. Prolonge-le quand tu veux : les jours restants sont conservés.')
              : 'Les devoirs au format officiel, une énergie sans limite et les méthodes qui font la différence.'}
          </p>
          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />
        </div>

        <div className="px-4 sm:px-8 pb-6 sm:pb-8 space-y-5">
          {/* Abonnement en cours */}
          {(isPro || isPlus) && (
            <div className="rounded-2xl border border-amber-300/60 dark:border-amber-400/25 bg-amber-50/60 dark:bg-amber-400/[0.04] px-4 py-3.5 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-700 dark:text-amber-300 shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-bold text-slate-900 dark:text-white">
                  KONAN {isPlus ? 'Plus' : 'Pro'} actif{endsAt ? ` jusqu’au ${dateFr(endsAt)}` : ''}
                </p>
                {endsAt && (
                  <p className="text-[11.5px] text-slate-600 dark:text-slate-400">
                    {provisional ? 'Paiement en cours de vérification.' : 'Paiement vérifié. Prolonge avant la fin : les jours restants sont conservés.'}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Mensuel / semestriel */}
          <div className="flex justify-center">
            <div className="inline-flex p-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              {([['monthly', 'Mensuel'], ['semester', 'Semestriel']] as const).map(([id, label]) => (
                <button key={id} type="button" onClick={() => setBilling(id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${billing === id ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}>
                  {label}
                  {id === 'semester' && <span className="ml-1.5 text-[10px] font-black text-amber-700 dark:text-amber-300">−{Math.round((saving(PRO) / (PRO.prices.monthly * SEMESTER_MONTHS)) * 100)} %</span>}
                </button>
              ))}
            </div>
          </div>

          <div className={`grid grid-cols-1 gap-4 ${showPlus ? 'md:grid-cols-2' : ''}`}>
            {/* KONAN PRO */}
            <div className={`relative rounded-3xl p-5 sm:p-6 flex flex-col border ${isPro ? 'border-amber-400/70 dark:border-amber-400/40' : 'border-slate-200 dark:border-white/10'} bg-white dark:bg-white/[0.02]`}>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[13px] font-black tracking-wide text-slate-900 dark:text-white"><Zap className="w-4 h-4 text-amber-600 dark:text-amber-300" /> KONAN Pro</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-amber-400/60 text-amber-800 dark:text-amber-200 bg-amber-50 dark:bg-amber-400/10">
                  {isPro ? 'Ta formule' : 'Recommandé'}
                </span>
              </div>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-[34px] leading-none font-black tracking-tight text-slate-900 dark:text-white tabular-nums">{formatFcfa(price(PRO))}</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">F CFA / {billing === 'monthly' ? 'mois' : 'semestre'}</span>
              </div>
              <p className="mt-1 h-4 text-[11.5px] text-slate-600 dark:text-slate-400">
                {billing === 'semester' ? `Soit ${formatFcfa(perMonth(PRO))} F par mois · ${formatFcfa(saving(PRO))} F économisés` : 'Sans engagement'}
              </p>
              <ul className="mt-5 space-y-3 flex-1">
                {PRO.features.map((f) => <Feature key={f.title} title={f.title} detail={f.detail} />)}
              </ul>
              {isPro && !canRenew && <p className="mt-6 text-center text-xs font-bold text-slate-600 dark:text-slate-300">Ta formule actuelle</p>}
              {!isPlus && !(isPro && !canRenew) && (
                <button type="button" onClick={() => onChoosePro(period)}
                  className="mt-6 w-full py-3.5 rounded-2xl text-sm font-black tracking-wide bg-slate-900 text-white hover:bg-slate-800 dark:bg-amber-300 dark:text-slate-950 dark:hover:bg-amber-200 transition-colors inline-flex items-center justify-center gap-2 shadow-sm">
                  {isPro ? 'Prolonger mon abonnement' : PAYMENTS_OPEN ? 'Devenir KONAN Pro' : 'Activer KONAN Pro (offert)'} <ArrowUpRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* KONAN PLUS (masqué tant qu'il n'est pas officiel) */}
            {showPlus && (
            <div className={`relative rounded-3xl p-5 sm:p-6 flex flex-col border overflow-hidden ${isPro ? 'border-slate-900/80 dark:border-white/25' : 'border-slate-200 dark:border-white/10'} bg-gradient-to-b from-slate-50 to-white dark:from-white/[0.05] dark:to-white/[0.01]`}>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[13px] font-black tracking-wide text-slate-900 dark:text-white"><Gem className="w-4 h-4 text-slate-700 dark:text-slate-200" /> KONAN Plus</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-slate-300 dark:border-white/20 text-slate-700 dark:text-slate-200">
                  {isPro ? 'Niveau supérieur' : 'Bientôt'}
                </span>
              </div>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-[34px] leading-none font-black tracking-tight text-slate-900 dark:text-white tabular-nums">{formatFcfa(price(PLUS))}</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">F CFA / {billing === 'monthly' ? 'mois' : 'semestre'}</span>
              </div>
              <p className="mt-1 h-4 text-[11.5px] text-slate-600 dark:text-slate-400">
                {billing === 'semester' ? `Soit ${formatFcfa(perMonth(PLUS))} F par mois · ${formatFcfa(saving(PLUS))} F économisés` : 'Sans engagement'}
              </p>
              <p className="mt-5 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{PLUS.includesLabel}</p>
              <ul className="mt-3 space-y-3 flex-1">
                {PLUS.features.map((f) => <Feature key={f.title} title={f.title} detail={f.detail} />)}
              </ul>
              {isPlus ? (
                <p className="mt-6 text-center text-xs font-bold text-slate-600 dark:text-slate-300">Ta formule actuelle</p>
              ) : (
                <>
                  <button type="button" onClick={onJoinPlus}
                    className="mt-6 w-full py-3.5 rounded-2xl text-sm font-black tracking-wide border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white dark:border-white/40 dark:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-colors inline-flex items-center justify-center gap-2">
                    {isPro ? 'Passer à KONAN Plus' : 'Être prévenu en premier'} <Lock className="w-3.5 h-3.5" />
                  </button>
                  <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 inline-flex items-center justify-center gap-1"><Clock className="w-3 h-3" /> Ouverture prochaine : les premiers inscrits seront prévenus.</p>
                </>
              )}
            </div>
            )}
          </div>

          {/* Garanties du paiement : seulement quand le paiement est ouvert */}
          {PAYMENTS_OPEN && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            {[
              { icon: Smartphone, title: 'Wave ou Orange Money', text: 'Tu paies depuis ton téléphone.' },
              { icon: Zap, title: 'Activé tout de suite', text: 'Tu deviens Pro dès ton paiement déclaré.' },
              { icon: ShieldCheck, title: 'Sans engagement', text: 'Tu paies seulement la période choisie.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-2.5 rounded-2xl px-3.5 py-3 bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5">
                <Icon className="w-4 h-4 mt-0.5 text-amber-700 dark:text-amber-300 shrink-0" />
                <span>
                  <span className="block text-[12px] font-bold text-slate-900 dark:text-white">{title}</span>
                  <span className="block text-[11px] text-slate-600 dark:text-slate-400">{text}</span>
                </span>
              </div>
            ))}
          </div>
          )}
          {!PAYMENTS_OPEN && (
            <p className="text-center text-[12px] font-bold text-amber-800 dark:text-[#F5C451]">KONAN Pro est offert pendant le lancement.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlansSheet;
