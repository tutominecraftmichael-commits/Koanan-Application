import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, 
  Sparkles, 
  Star, 
  Clock, 
  Calendar, 
  Layers, 
  Target, 
  UserPlus, 
  Headphones, 
  ShieldCheck,
} from 'lucide-react';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';

export interface PricingSectionProps {
  onSelectPlan?: (planId: 'free' | 'pro' | 'plus') => void;
  isLoggedIn?: boolean;
  currentPlan?: 'free' | 'pro' | 'plus';
}

export const PricingSection: React.FC<PricingSectionProps> = ({ 
  onSelectPlan, 
  isLoggedIn: _isLoggedIn = false,
  currentPlan: _currentPlan = 'free'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="pricing"
      data-section="pricing"
      ref={sectionRef}
      className="relative py-8 sm:py-16 space-y-10 sm:space-y-14 overflow-hidden scroll-mt-12" 
    >
      {/* =========================================================================
          EN-TÊTE DE LA PAGE DES TARIFS
          ========================================================================= */}
      <div 
        className={`text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto px-4 transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Badge Élégant : Formules & Modèles d'accompagnement */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 dark:bg-white/[0.05] dark:border-white/10 dark:text-slate-300 shadow-xs text-xs font-semibold tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-sky-400" />
          <span>Formules & Modèles d'accompagnement</span>
        </div>

        {/* Titre avec "académique" en dégradé de bleu */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Investissez dans votre{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-400 drop-shadow-none dark:drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
            réussite académique
          </span>
        </h2>
        
        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
          Du modèle gratuit jusqu'à la formule d'élite complète, choisissez le niveau d'accompagnement qui correspond à votre ambition.
        </p>
      </div>

      {/* =========================================================================
          GRILLE TARIFAIRE : SaaS d'élite avec Pack PRO sublimé
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-7xl mx-auto px-2 sm:px-4">
        
        {/* 1. PLAN KONAN (GRATUIT) */}
        <div 
          className={`flex flex-col justify-between rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 dark:bg-[#0C1424]/90 dark:border-white/10 dark:shadow-xl p-6 sm:p-8 hover:border-slate-300 dark:hover:border-white/20 hover:-translate-y-1.5 transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
        >
          <div className="space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Découverte
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 dark:bg-white/[0.05] dark:text-slate-300 dark:border-white/10 font-medium">
                  Autonomie
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">KONAN</h3>
            </div>

            {/* Prix avec Animation */}
            <div className="pt-1 pb-4 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono">
                  <AnimatedCounter value={0} duration={800} /> F
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">CFA / mois</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Gratuit pour toujours • Sans carte requise</p>
            </div>

            {/* Liste des Fonctionnalités */}
            <div className="space-y-3.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Inclus dans le modèle gratuit :
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-2.5">
                  <div className="relative shrink-0 flex items-center justify-center w-5 h-5 mt-0.5">
                    <span className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-sky-400/25 blur-[3px]" />
                    <Check className="relative w-4 h-4 text-blue-600 dark:text-sky-400 drop-shadow-[0_0_8px_rgba(37,99,235,0.6)] dark:drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
                  </div>
                  <span><strong className="text-slate-900 dark:text-white">Importation & extraction d'EDT :</strong> Import via PDF, scan photo ou tableau texte (<strong className="text-slate-900 dark:text-white">limité à 3 générations / imports gratuits</strong>, connexion Google obligatoire).</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <div className="relative shrink-0 flex items-center justify-center w-5 h-5 mt-0.5">
                    <span className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-sky-400/25 blur-[3px]" />
                    <Check className="relative w-4 h-4 text-blue-600 dark:text-sky-400 drop-shadow-[0_0_8px_rgba(37,99,235,0.6)] dark:drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
                  </div>
                  <span><strong className="text-slate-900 dark:text-white">Génération d'EDT personnalisé :</strong> Planning d'étude adapté à votre filière pour structurer vos révisions et réduire le surmenage.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="relative shrink-0 flex items-center justify-center w-5 h-5 mt-0.5">
                    <span className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-sky-400/25 blur-[3px]" />
                    <Check className="relative w-4 h-4 text-blue-600 dark:text-sky-400 drop-shadow-[0_0_8px_rgba(37,99,235,0.6)] dark:drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
                  </div>
                  <span><strong className="text-slate-900 dark:text-white">Ajustement des matières :</strong> Ajout et personnalisation des cours avec recalcul instantané des créneaux d'étude.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="relative shrink-0 flex items-center justify-center w-5 h-5 mt-0.5">
                    <span className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-sky-400/25 blur-[3px]" />
                    <Check className="relative w-4 h-4 text-blue-600 dark:text-sky-400 drop-shadow-[0_0_8px_rgba(37,99,235,0.6)] dark:drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">4 Techniques d'apprentissage Freemium :</span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 mb-1.5">(1 seule méthode active à la fois)</p>
                    <ul className="mt-1 space-y-1 pl-1 text-xs text-slate-600 dark:text-slate-300 border-l border-slate-200 dark:border-white/10 ml-1">
                      <li className="pl-2">• Technique Pomodoro classique</li>
                      <li className="pl-2">• Active Recall (Rappel actif)</li>
                      <li className="pl-2">• Spaced Repetition (Répétition espacée)</li>
                      <li className="pl-2">• La règle des 2 minutes</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bouton d'Action */}
          <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/10">
            <button
              type="button"
              className="w-full text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] dark:text-slate-200 dark:border-white/10 active:scale-95 transition-all cursor-pointer"
              onClick={() => onSelectPlan?.('free')}
            >
              ✓ Modèle Actif (Gratuit pour tous)
            </button>
          </div>
        </div>

        {/* =========================================================================
            2. PLAN KONAN PRO (LE PRODUIT PHARE • RECOMMANDÉ)
            ========================================================================= */}
        <div 
          className={`relative flex flex-col justify-between rounded-3xl bg-white border-2 border-amber-400 shadow-2xl shadow-amber-500/10 hover:shadow-amber-500/20 dark:bg-gradient-to-b dark:from-[#0F1B33]/95 dark:via-[#0E172C]/95 dark:to-[#0A1020]/95 dark:border-indigo-500/50 dark:shadow-[0_0_50px_rgba(99,102,241,0.28)] dark:hover:shadow-[0_0_70px_rgba(99,102,241,0.4)] backdrop-blur-2xl p-6 sm:p-8 transition-all duration-700 ease-out transform hover:-translate-y-2.5 z-10 w-full max-w-full ${
            isVisible ? 'opacity-100 translate-y-0 lg:scale-[1.03] lg:-translate-y-2' : 'opacity-0 translate-y-16 scale-95'
          }`}
          style={{ transitionDelay: isVisible ? '250ms' : '0ms' }}
        >
          {/* Étiquette "Recommandé" dorée à cheval sur le haut de la carte (1 seule étoile) */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 text-xs font-black tracking-wider uppercase shadow-md shadow-amber-500/30 flex items-center gap-1.5 z-30 whitespace-nowrap">
            <Star className="w-3.5 h-3.5 fill-slate-950 text-slate-950 shrink-0" />
            <span>Recommandé</span>
          </div>

          <div className="space-y-5 pt-2">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-sky-300">
                  Performance Maximale
                </span>
                
                {/* Gros badge "VERSION OUVERTE" coloré juste au-dessus du prix */}
                <span className="text-[11px] px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 border border-amber-300 shadow-sm font-black whitespace-nowrap inline-flex items-center gap-1 shrink-0 uppercase tracking-wider">
                  <span>VERSION OUVERTE</span>
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                KONAN PRO
              </h3>
            </div>

            {/* Le Prix : "1 200 F" en très gros caractères gras + "CFA / mois" */}
            <div className="pt-1 pb-4 border-b border-amber-200/80 dark:border-indigo-500/20">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-4xl sm:text-5xl font-black text-[#0F172A] dark:text-white font-mono tracking-tight">
                  1 200 F
                </span>
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">CFA / mois</span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30">
                  Version ouverte
                </span>
              </div>
              <p className="text-xs sm:text-sm text-amber-700 dark:text-amber-300/95 font-semibold mt-1.5 leading-snug">
                Accès complet 100% offert pendant la phase de lancement
              </p>
            </div>

            {/* Liste des fonctionnalités : Coches lumineuses vert émeraude avec halo aura pur */}
            <div className="space-y-3.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300">
                Tout ce qui est dans KONAN, plus :
              </p>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-2.5">
                  <div className="relative shrink-0 flex items-center justify-center w-5 h-5 mt-0.5">
                    <span className="absolute inset-0 rounded-full bg-emerald-500/20 dark:bg-emerald-400/25 blur-[3px]" />
                    <Check className="relative w-4 h-4 text-emerald-600 dark:text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] dark:drop-shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                  </div>
                  <span><strong className="text-slate-900 dark:text-white">Imports & générations d'EDT illimités :</strong> Importez autant d'emplois du temps que souhaité via PDF, scan photo ou texte (sans aucun blocage).</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <div className="relative shrink-0 flex items-center justify-center w-5 h-5 mt-0.5">
                    <span className="absolute inset-0 rounded-full bg-emerald-500/20 dark:bg-emerald-400/25 blur-[3px]" />
                    <Calendar className="relative w-4 h-4 text-emerald-600 dark:text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] dark:drop-shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                  </div>
                  <span><strong className="text-slate-900 dark:text-white">Dates d'examens & Devoirs Surveillés (DS) :</strong> Intégrez vos épreuves ; l'algorithme s'adapte avec <strong className="text-slate-900 dark:text-white">compte à rebours interactif (J-X)</strong> et sur-priorisation automatique des révisions clés.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <div className="relative shrink-0 flex items-center justify-center w-5 h-5 mt-0.5">
                    <span className="absolute inset-0 rounded-full bg-emerald-500/20 dark:bg-emerald-400/25 blur-[3px]" />
                    <Check className="relative w-4 h-4 text-emerald-600 dark:text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] dark:drop-shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                  </div>
                  <span><strong className="text-slate-900 dark:text-white">Synchronisation Google Calendar :</strong> Export direct de votre planning personnalisé (.ics) avec alertes automatiques et intégration nette.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <div className="relative shrink-0 flex items-center justify-center w-5 h-5 mt-0.5">
                    <span className="absolute inset-0 rounded-full bg-emerald-500/20 dark:bg-emerald-400/25 blur-[3px]" />
                    <Layers className="relative w-4 h-4 text-emerald-600 dark:text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] dark:drop-shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">Modèles d'espacement Premium :</span>
                    <ul className="mt-1 space-y-1 pl-1 text-xs text-slate-600 dark:text-slate-300 border-l border-amber-200 dark:border-indigo-400/30 ml-1">
                      <li className="pl-2">• <strong className="text-slate-900 dark:text-white">Time Blocking</strong> académique ciblé</li>
                      <li className="pl-2">• <strong className="text-slate-900 dark:text-white">Technique de Feynman</strong> (assimilation conceptuelle profonde)</li>
                    </ul>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <div className="relative shrink-0 flex items-center justify-center w-5 h-5 mt-0.5">
                    <span className="absolute inset-0 rounded-full bg-emerald-500/20 dark:bg-emerald-400/25 blur-[3px]" />
                    <Sparkles className="relative w-4 h-4 text-emerald-600 dark:text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] dark:drop-shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                  </div>
                  <span><strong className="text-slate-900 dark:text-white">Recommandations algorithmiques de Konan :</strong> Recommandations intelligentes de la meilleure technique selon la fatigue et vos heures de cours.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <div className="relative shrink-0 flex items-center justify-center w-5 h-5 mt-0.5">
                    <span className="absolute inset-0 rounded-full bg-emerald-500/20 dark:bg-emerald-400/25 blur-[3px]" />
                    <Check className="relative w-4 h-4 text-emerald-600 dark:text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] dark:drop-shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                  </div>
                  <span><strong className="text-slate-900 dark:text-white">Combinaison triple :</strong> Capacité d'activer jusqu'à <strong className="text-slate-900 dark:text-white">3 techniques d'espacement simultanément</strong> dans le même planning.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bouton d'Action PRO Sublime */}
          <div className="pt-6 mt-6 border-t border-amber-200/80 dark:border-indigo-500/20">
            <button
              type="button"
              className="w-full text-xs sm:text-sm font-black py-4 px-4 rounded-2xl shadow-lg shadow-amber-500/25 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 hover:brightness-110 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
              onClick={() => onSelectPlan?.('pro')}
            >
              <span>Passer à KONAN PRO</span>
            </button>
          </div>
        </div>

        {/* 3. PLAN KONAN PLUS (ÉLITE • SUBLIMÉ EN VIOLET PUR) */}
        <div 
          className={`relative flex flex-col justify-between rounded-3xl bg-white border-2 border-purple-400 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/25 dark:bg-gradient-to-b dark:from-[#170C2E]/95 dark:via-[#130A24]/95 dark:to-[#0B0515]/95 dark:border-purple-500/40 dark:shadow-[0_0_50px_rgba(168,85,247,0.22)] dark:hover:shadow-[0_0_70px_rgba(168,85,247,0.38)] backdrop-blur-2xl p-6 sm:p-8 hover:-translate-y-1.5 transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
        >
          <div className="space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">
                  Fonctionnalités Futures
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-500/15 dark:text-purple-300 dark:border-purple-500/30 font-bold flex items-center gap-1 whitespace-nowrap shrink-0">
                  <Clock className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                  Bientôt disponible
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                KONAN PLUS
              </h3>
            </div>

            {/* Prix avec Animation */}
            <div className="pt-1 pb-4 border-b border-purple-200/80 dark:border-purple-500/20">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono">
                  <AnimatedCounter value={2500} duration={1400} formatThousands /> F
                </span>
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">CFA / mois</span>
              </div>
              <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-300 font-semibold mt-1.5">
                Accès indisponible
              </p>
            </div>

            {/* Liste des Fonctionnalités : Dessins & Puces avec aura violette pure */}
            <div className="space-y-3.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Tout ce qui est dans KONAN PRO, plus :
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-2.5">
                  <div className="relative shrink-0 flex items-center justify-center w-5 h-5 mt-0.5">
                    <span className="absolute inset-0 rounded-full bg-purple-500/20 dark:bg-purple-400/25 blur-[3px]" />
                    <Target className="relative w-4 h-4 text-purple-600 dark:text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] dark:drop-shadow-[0_0_8px_rgba(192,132,252,0.7)]" />
                  </div>
                  <div>
                    <span><strong className="text-slate-900 dark:text-white">Planning conditionné par vos 3 Objectifs Scolaires :</strong></span>
                    <ul className="mt-1 space-y-1 pl-1 text-xs text-slate-600 dark:text-slate-300 border-l border-purple-200 dark:border-purple-400/30 ml-1">
                      <li className="pl-2">• <em>Passer l'année avec 12 de moyenne</em></li>
                      <li className="pl-2">• <em>Passer avec mention (16 de moyenne)</em></li>
                      <li className="pl-2">• <em>Devenir major de ma promotion (18/20+)</em></li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="relative shrink-0 flex items-center justify-center w-5 h-5 mt-0.5">
                    <span className="absolute inset-0 rounded-full bg-purple-500/20 dark:bg-purple-400/25 blur-[3px]" />
                    <UserPlus className="relative w-4 h-4 text-purple-600 dark:text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] dark:drop-shadow-[0_0_8px_rgba(192,132,252,0.7)]" />
                  </div>
                  <div>
                    <span><strong className="text-slate-900 dark:text-white">Pack Étudiant (Jusqu'à 5 comptes complets inclus) :</strong></span>
                    <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                      Invitez jusqu'à 4 camarades via leur adresse email. Chaque membre bénéficie de l'accès Pro & Plus intégral.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="relative shrink-0 flex items-center justify-center w-5 h-5 mt-0.5">
                    <span className="absolute inset-0 rounded-full bg-purple-500/20 dark:bg-purple-400/25 blur-[3px]" />
                    <Headphones className="relative w-4 h-4 text-purple-600 dark:text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] dark:drop-shadow-[0_0_8px_rgba(192,132,252,0.7)]" />
                  </div>
                  <div>
                    <span><strong className="text-slate-900 dark:text-white">Lecteur Audio & Musiques de révision :</strong></span>
                    <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                      Ambiances sonores intégrées dédiées au focus : Ondes Alpha concentration profonde, Lofi Chill révision, Bruit blanc.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bouton d'Action */}
          <div className="pt-6 mt-6 border-t border-purple-200/80 dark:border-purple-500/20">
            <button
              type="button"
              onClick={() => onSelectPlan?.('plus')}
              className="w-full text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 dark:bg-purple-500/15 dark:hover:bg-purple-500/25 dark:text-purple-300 dark:border-purple-500/30 transition-all cursor-pointer"
            >
              Accès indisponible • Bientôt disponible
            </button>
          </div>
        </div>

      </div>

      {/* Note de Réassurance et Sécurité */}
      <div 
        className={`flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-700 dark:text-slate-400 pt-6 max-w-2xl mx-auto text-center px-4 font-medium transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}
      >
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>Activation instantanée</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
          <span>Sans engagement de durée</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
          <span>Paiement sécurisé Mobile Money & Carte</span>
        </div>
      </div>
    </section>
  );
};
