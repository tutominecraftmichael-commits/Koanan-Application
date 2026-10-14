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
import { Button } from '../../components/ui/Button';
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
      {/* Section Header with smooth entrance animation */}
      <div 
        className={`text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto px-4 transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm dark:bg-slate-900/90 dark:border-slate-700 dark:text-slate-300 text-xs font-semibold tracking-wide uppercase">
          <img src="/konan-logo.png" alt="KONAN" className="w-4 h-4 object-contain rounded-full" />
          <span>Formules & Modèles d'Accompagnement</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Investissez dans votre <span className="text-gradient-primary">réussite académique</span>
        </h2>
        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Du modèle gratuit jusqu'à la formule d'élite complète, choisissez le niveau d'accompagnement qui correspond à votre ambition.
        </p>
      </div>

      {/* Pricing Grid - Clean & Minimalist SaaS Style with Staggered Entrance Animations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-7xl mx-auto px-2 sm:px-4">
        
        {/* 1. PLAN KONAN (GRATUIT) */}
        <div 
          className={`flex flex-col justify-between rounded-2xl bg-white border border-slate-200 shadow-sm dark:bg-[#0c1424] dark:border-slate-800 p-6 sm:p-8 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1.5 transition-all duration-700 ease-out transform hover:shadow-xl ${
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
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 font-medium">
                  Autonomie
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">KONAN</h3>
            </div>

            {/* Price with Counter Animation */}
            <div className="pt-1 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono">
                  <AnimatedCounter value={0} duration={800} /> F
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">CFA / mois</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Gratuit pour toujours • Sans carte requise</p>
            </div>

            {/* Features List */}
            <div className="space-y-3.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Inclus dans le modèle gratuit :
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Importation & extraction d'EDT :</strong> Import via PDF, scan photo ou tableau texte (<strong>limité à 3 générations / imports gratuits</strong>, connexion Google obligatoire).</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Génération d'EDT personnalisé :</strong> Planning d'étude adapté à votre filière pour structurer vos révisions et réduire le surmenage.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Ajustement des matières :</strong> Ajout et personnalisation des cours avec recalcul instantané des créneaux d'étude.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">4 Techniques d'apprentissage Freemium :</span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 mb-1.5">(1 seule méthode active à la fois)</p>
                    <ul className="mt-1 space-y-1 pl-1 text-xs text-slate-700 dark:text-slate-200 border-l border-slate-200 dark:border-slate-800 ml-1">
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

          {/* Action Button */}
          <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800/80">
            <Button
              variant="secondary"
              size="md"
              className="w-full text-xs sm:text-sm font-bold py-3 bg-white hover:bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-slate-700 active:scale-95 transition-transform cursor-pointer"
              onClick={() => onSelectPlan?.('free')}
            >
              ✓ Modèle Actif (Gratuit pour tous)
            </Button>
          </div>
        </div>

        {/* 2. PLAN KONAN PRO (RECOMMANDÉ) */}
        <div 
          className={`relative flex flex-col justify-between rounded-2xl bg-white border-2 border-sky-400 shadow-xl shadow-sky-500/10 dark:bg-[#0c1424] dark:border-sky-400 p-5 sm:p-8 dark:shadow-[0_0_40px_rgba(56,189,248,0.22)] dark:hover:shadow-[0_0_55px_rgba(56,189,248,0.32)] transition-all duration-700 ease-out transform hover:-translate-y-2.5 z-10 w-full max-w-full ${
            isVisible ? 'opacity-100 translate-y-0 lg:scale-[1.02] lg:-translate-y-2' : 'opacity-0 translate-y-16 scale-95'
          }`}
          style={{ transitionDelay: isVisible ? '250ms' : '0ms' }}
        >
          {/* Top Recommended Pill: Subtle, sleek and elegant */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-sky-700 dark:bg-slate-900/95 dark:border-sky-400/50 dark:text-sky-200 text-[11px] font-semibold tracking-wide shadow-sm flex items-center gap-1.5 z-30 whitespace-nowrap backdrop-blur-sm">
            <Star className="w-3 h-3 text-sky-500 fill-sky-400/20 dark:text-sky-400" />
            <span>Recommandé</span>
          </div>

          <div className="space-y-5 pt-2">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  Performance Maximale
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 border border-amber-300 shadow-sm shadow-amber-500/20 font-black whitespace-nowrap inline-flex items-center gap-1 shrink-0 uppercase tracking-wider">
                  <span>PRO • Découverte</span>
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                KONAN PRO
              </h3>
            </div>

            {/* Price */}
            <div className="pt-1 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono">
                  0 F
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">Offert temporairement</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 font-semibold mt-1">Accès complet offert pendant la phase de lancement</p>
            </div>

            {/* Features List */}
            <div className="space-y-3.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Tout ce qui est dans Konan, plus :
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-slate-900 dark:text-white shrink-0 mt-0.5" />
                  <span><strong>Imports & générations d'EDT illimités :</strong> Importez autant d'emplois du temps que vous le souhaitez via PDF, scan photo ou texte (sans aucun blocage).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-slate-900 dark:text-white shrink-0 mt-0.5" />
                  <span><strong>Dates d'examens & Devoirs Surveillés (DS) :</strong> Intégrez vos dates d'épreuves sur chaque matière ; l'algorithme s'adapte avec <strong>compte à rebours interactif (J-X)</strong> et sur-priorisation automatique des révisions clés.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-slate-900 dark:text-white shrink-0 mt-0.5" />
                  <span><strong>Synchronisation Google Calendar :</strong> Export direct de votre planning personnalisé (.ics) avec alertes automatiques et intégration dans votre calendrier personnel.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-slate-900 dark:text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">Modèles d'espacement Premium :</span>
                    <ul className="mt-1 space-y-1 pl-1 text-xs text-slate-700 dark:text-slate-200 border-l border-slate-300 dark:border-slate-700 ml-1">
                      <li className="pl-2">• <strong>Time Blocking</strong> académique ciblé</li>
                      <li className="pl-2">• <strong>Technique de Feynman</strong> (assimilation conceptuelle profonde)</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-slate-900 dark:text-white shrink-0 mt-0.5" />
                  <span><strong>Recommandations algorithmiques de Konan :</strong> Recommandations intelligentes de la meilleure technique selon la fatigue et vos heures de cours.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-slate-900 dark:text-white shrink-0 mt-0.5" />
                  <span><strong>Combinaison triple :</strong> Capacité d'activer jusqu'à <strong>3 techniques d'espacement simultanément</strong> dans le même planning.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              className="w-full text-xs sm:text-sm font-black py-3.5 px-4 rounded-xl shadow-md shadow-amber-500/20 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 hover:brightness-105 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
              onClick={() => onSelectPlan?.('pro')}
            >
              <span>Passer à KONAN PRO (Offre Découverte Offerte)</span>
            </button>
          </div>
        </div>

        {/* 3. PLAN KONAN PLUS (ÉLITE) */}
        <div 
          className={`flex flex-col justify-between rounded-2xl bg-white border border-slate-200 shadow-sm dark:bg-[#0c1424] dark:border-slate-800 p-6 sm:p-8 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1.5 transition-all duration-700 ease-out transform hover:shadow-xl ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
        >
          <div className="space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Fonctionnalités Futures
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-300 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700 font-bold flex items-center gap-1 whitespace-nowrap shrink-0">
                  <Clock className="w-3 h-3 text-slate-400" />
                  Accès différé • Liste d'attente
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                KONAN PLUS
              </h3>
            </div>

            {/* Price with Rolling Counter Animation */}
            <div className="pt-1 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono">
                  <AnimatedCounter value={2500} duration={1400} formatThousands /> F
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">CFA / mois</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-1">L'expérience complète • Jusqu'à 5 étudiants (vous + 4 invités)</p>
            </div>

            {/* Features List */}
            <div className="space-y-3.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Tout ce qui est dans Konan Pro, plus :
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-2.5">
                  <Target className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span><strong>Planning conditionné par vos 3 Objectifs Scolaires :</strong></span>
                    <ul className="mt-1 space-y-1 pl-1 text-xs text-slate-700 dark:text-slate-200 border-l border-indigo-200 dark:border-indigo-500/30 ml-1">
                      <li className="pl-2">• <em>Passer l'année avec 12 de moyenne</em></li>
                      <li className="pl-2">• <em>Passer avec mention (16 de moyenne)</em></li>
                      <li className="pl-2">• <em>Devenir major de ma promotion (18/20+)</em></li>
                    </ul>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">L'objectif influence directement la cadence horaire, la densité et les méthodes recommandées.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <UserPlus className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span><strong>Pack Étudiant (Jusqu'à 5 comptes complets inclus) :</strong></span>
                    <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                      Invitez jusqu'à 4 de vos camarades via leur adresse email ou ID Konan. Chaque membre bénéficie de son compte personnel avec l'intégralité des fonctionnalités Pro & Plus (soit 500 F CFA / étudiant / mois).
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Headphones className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span><strong>Lecteur Audio & Musiques de révision :</strong></span>
                    <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                      Ambiances sonores intégrées dédiées au focus : Ondes Alpha concentration profonde, Lofi Chill révision, Bruit blanc et sons apaisants.
                    </p>
                  </div>
                </li>

              </ul>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800/80">
            <Button
              variant="secondary"
              size="md"
              onClick={() => onSelectPlan?.('plus')}
              className="w-full text-xs sm:text-sm font-bold py-3 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-700 dark:text-slate-300 transition-all cursor-pointer shadow-sm"
            >
              Compte PLUS Désactivé (Tous en Gratuit)
            </Button>
          </div>
        </div>

      </div>

      {/* Security & Reassurance Footer Note with entrance animation */}
      <div 
        className={`flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-400 pt-4 max-w-2xl mx-auto text-center px-4 transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}
      >
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
          <span>Activation instantanée</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-sky-500 dark:text-sky-400" />
          <span>Sans engagement de durée</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
          <span>Paiement sécurisé Mobile Money & Carte</span>
        </div>
      </div>
    </section>
  );
};
