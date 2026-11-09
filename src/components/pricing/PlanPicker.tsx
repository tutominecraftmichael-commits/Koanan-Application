/**
 * Choix de la formule KONAN (inscription + page d'accueil) : style simple « Duolingo ».
 * Cartes blanches à bord net, une couleur par formule, paiement au mois ou au semestre.
 * Les boutons des formules payantes ont le reflet lumineux (au repos et au toucher).
 */
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { DISPLAY_PLANS, SEMESTER_MONTHS, formatFcfa, type BillingPeriod, type DisplayPlan, type PlanTier } from '../../lib/subscriptionPlans';
import { afterShine } from '../../lib/shineClick';

export interface PlanPickerProps {
  /** Formule choisie (Plus n'est pas encore ouvert : le parent ouvre la liste d'attente). */
  onSelect: (plan: PlanTier, billing: BillingPeriod) => void;
  /** Formule déjà active (affichée « Ta formule actuelle »). */
  currentPlan?: PlanTier;
  /** Libellés des boutons, si le parent veut les adapter. */
  ctaLabels?: Partial<Record<PlanTier, string>>;
}

const THEME: Record<PlanTier, {
  card: string;
  check: string;
  button: string;
  price: string;
}> = {
  free: {
    card: 'border-slate-200 dark:border-slate-700',
    check: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
    button: 'bg-white text-sky-600 border-2 border-slate-200 shadow-[0_4px_0_#E2E8F0] hover:bg-slate-50 dark:bg-slate-900 dark:text-sky-400 dark:border-slate-700 dark:shadow-[0_4px_0_#1E293B] dark:hover:bg-slate-800',
    price: 'text-slate-900 dark:text-white',
  },
  pro: {
    card: 'border-sky-400 dark:border-sky-500',
    check: 'bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-300',
    button: 'bg-sky-500 text-white shadow-[0_4px_0_#0284C7] hover:bg-sky-400',
    price: 'text-sky-600 dark:text-sky-400',
  },
  plus: {
    card: 'border-violet-300 dark:border-violet-500/70',
    check: 'bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-300',
    button: 'bg-violet-500 text-white shadow-[0_4px_0_#6D28D9] hover:bg-violet-400',
    price: 'text-violet-600 dark:text-violet-400',
  },
};

const DEFAULT_CTA: Record<PlanTier, string> = {
  free: 'Continuer gratuitement',
  pro: 'Choisir KONAN PRO',
  plus: 'Me prévenir à l’ouverture',
};

export const PlanPicker: React.FC<PlanPickerProps> = ({ onSelect, currentPlan, ctaLabels }) => {
  const [billing, setBilling] = useState<BillingPeriod>('monthly');

  return (
    <div className="w-full space-y-6">
      {/* Mensuel / Semestriel */}
      <div className="flex justify-center">
        <div role="tablist" aria-label="Période de paiement" className="inline-flex p-1 rounded-2xl bg-slate-100 border-2 border-slate-200 dark:bg-slate-800 dark:border-slate-700">
          {([
            { id: 'monthly', label: 'Par mois' },
            { id: 'semester', label: 'Par semestre' },
          ] as { id: BillingPeriod; label: string }[]).map((opt) => {
            const active = billing === opt.id;
            return (
              <button
                key={opt.id}
                id={`billing-${opt.id}`}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setBilling(opt.id)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-sm font-extrabold transition-colors cursor-pointer flex items-center gap-2 ${
                  active
                    ? 'bg-white text-slate-900 shadow-[0_2px_0_#E2E8F0] dark:bg-slate-900 dark:text-white dark:shadow-[0_2px_0_#0F172A]'
                    : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {opt.label}
                {opt.id === 'semester' && (
                  <span className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                    Meilleur prix
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Les 3 formules */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
        {DISPLAY_PLANS.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            billing={billing}
            isCurrent={currentPlan === plan.id}
            cta={ctaLabels?.[plan.id] || DEFAULT_CTA[plan.id]}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

const PlanCard: React.FC<{
  plan: DisplayPlan;
  billing: BillingPeriod;
  isCurrent: boolean;
  cta: string;
  onSelect: (plan: PlanTier, billing: BillingPeriod) => void;
}> = ({ plan, billing, isCurrent, cta, onSelect }) => {
  const theme = THEME[plan.id];
  const price = plan.prices[billing];
  const paid = plan.id !== 'free';
  const periodLabel = price === 0 ? 'F CFA, pour toujours' : billing === 'monthly' ? 'F CFA / mois' : 'F CFA / semestre';
  const choose = () => onSelect(plan.id, billing);

  return (
    <div className={`relative flex flex-col rounded-3xl bg-white dark:bg-slate-900 border-2 border-b-[6px] ${theme.card} p-5 sm:p-6`}>
      {plan.recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-sky-500 text-white text-[11px] font-black uppercase tracking-wider whitespace-nowrap">
          Recommandé
        </span>
      )}

      <div className="space-y-1">
        <h3 className="text-xl font-black text-slate-900 dark:text-white">{plan.name}</h3>
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{plan.tagline}</p>
      </div>

      {/* Prix */}
      <div className="mt-4 pb-4 border-b-2 border-slate-100 dark:border-slate-800">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span key={`${plan.id}-${billing}`} className={`text-4xl font-black tracking-tight tabular-nums animate-in fade-in zoom-in-95 duration-300 ${theme.price}`}>
            {formatFcfa(price)}
          </span>
          <span className="text-sm font-bold text-slate-500 dark:text-slate-400">{periodLabel}</span>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2 min-h-[24px]">
          {paid && billing === 'semester' && (
            <span className="w-full text-xs font-bold text-slate-500 dark:text-slate-400">
              Soit environ {formatFcfa(Math.round(price / SEMESTER_MONTHS))} F par mois, payés en une fois pour 6 mois.{' '}
              <span className="text-emerald-600 dark:text-emerald-400">
                Tu économises {formatFcfa(plan.prices.monthly * SEMESTER_MONTHS - price)} F.
              </span>
            </span>
          )}
          {plan.note && (
            <span className={`text-[11px] font-black uppercase px-2 py-0.5 rounded-lg ${
              plan.available
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300'
                : 'bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300'
            }`}>
              {plan.note}
            </span>
          )}
        </div>
      </div>

      {/* Ce qui est inclus */}
      <div className="mt-4 space-y-3 flex-1">
        <p className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">{plan.includesLabel}</p>
        <ul className="space-y-3">
          {plan.features.map((f) => (
            <li key={f.title} className="flex items-start gap-3">
              <span className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${theme.check}`}>
                <Check className="w-3 h-3 stroke-[3.5]" />
              </span>
              <span className="text-sm leading-snug">
                <span className="font-bold text-slate-800 dark:text-slate-100">{f.title}</span>
                {f.detail && <span className="block text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">{f.detail}</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bouton */}
      <button
        type="button"
        id={`plan-${plan.id}`}
        onClick={paid ? afterShine(choose) : choose}
        disabled={isCurrent}
        className={`mt-6 w-full py-3.5 rounded-2xl text-sm font-black uppercase tracking-wide transition-colors cursor-pointer active:translate-y-1 active:shadow-none disabled:opacity-60 disabled:cursor-default disabled:active:translate-y-0 ${
          paid ? 'relative overflow-hidden konan-btn-shine' : ''
        } ${theme.button}`}
      >
        {isCurrent ? 'Ta formule actuelle' : cta}
      </button>
    </div>
  );
};
