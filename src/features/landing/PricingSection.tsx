import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, 
  Sparkles, 
  Star, 
  Crown, 
  Calendar, 
  Clock, 
  Layers, 
  Target, 
  MessageSquare, 
  Headphones, 
  Bell, 
  ShieldCheck,
  ArrowRight
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
  isLoggedIn = false,
  currentPlan = 'free'
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 text-xs font-semibold tracking-wide uppercase shadow-sm">
          <img src="/konan-logo.png" alt="KONAN" className="w-4 h-4 object-contain rounded-full" />
          <span>Formules & Modèles d'Accompagnement</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Investissez dans votre <span className="text-gradient-primary">réussite académique</span>
        </h2>
        <p className="text-xs sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Du modèle gratuit autonome jusqu'au coaching d'élite personnalisé, choisissez le niveau d'accompagnement qui correspond à votre ambition.
        </p>
      </div>

      {/* Pricing Grid - Clean & Minimalist SaaS Style with Staggered Entrance Animations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-7xl mx-auto px-2 sm:px-4">
        
        {/* 1. PLAN KONAN (GRATUIT) */}
        <div 
          className={`flex flex-col justify-between rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 hover:border-slate-700 hover:-translate-y-1.5 transition-all duration-700 ease-out transform shadow-lg hover:shadow-2xl ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
        >
          <div className="space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Découverte
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                  Autonomie
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-white">KONAN</h3>
            </div>

            {/* Price with Counter Animation */}
            <div className="pt-1 pb-4 border-b border-slate-800">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                  <AnimatedCounter value={0} duration={800} /> F
                </span>
                <span className="text-xs text-slate-400 font-medium">CFA / mois</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Gratuit pour toujours • Sans carte requise</p>
            </div>

            {/* Features List */}
            <div className="space-y-3.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                Inclus dans le modèle gratuit :
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Importation de votre EDT</strong> académique à l'aide d'un tableau texte.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Génération d'un EDT personnel bien structuré</strong> adapté à votre cursus pour la réduction du burn-out.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Modification et ajout de matières</strong> avec recalcul instantané du planning d'étude.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Techniques d'espacement Freemium :</span>
                    <ul className="mt-1.5 space-y-1 pl-1 text-xs text-slate-300 border-l border-slate-800 ml-1">
                      <li className="pl-2">• Technique Pomodoro classique</li>
                      <li className="pl-2">• Active Recall & Spaced Repetition (Répétition espacée)</li>
                      <li className="pl-2">• La technique des 2 minutes</li>
                    </ul>
                    <p className="text-[11px] text-slate-400 mt-1.5 italic">
                      (Choix libre en toute autonomie — sans recommandation algorithmique de Konan)
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6 mt-6 border-t border-slate-800/80">
            <Button
              variant="secondary"
              size="md"
              className="w-full text-xs sm:text-sm font-bold py-3 hover:bg-slate-800 border-slate-700 active:scale-95 transition-transform cursor-pointer"
              onClick={() => onSelectPlan?.('free')}
            >
              {currentPlan === 'free' ? '✓ Modèle Actif (Gratuit)' : isLoggedIn ? 'Revenir à KONAN (Gratuit)' : 'Commencer avec Konan'}
            </Button>
          </div>
        </div>

        {/* 2. PLAN KONAN PRO (RECOMMANDÉ) */}
        <div 
          className={`relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-slate-900/95 via-slate-900 to-blue-950/60 border-2 border-sky-400 p-5 sm:p-8 shadow-[0_0_40px_rgba(56,189,248,0.22)] hover:shadow-[0_0_55px_rgba(56,189,248,0.32)] transition-all duration-700 ease-out transform hover:-translate-y-2.5 z-10 w-full max-w-full ${
            isVisible ? 'opacity-100 translate-y-0 lg:scale-[1.02] lg:-translate-y-2' : 'opacity-0 translate-y-16 scale-95'
          }`}
          style={{ transitionDelay: isVisible ? '250ms' : '0ms' }}
        >
          {/* Top Recommended Pill: HIGH CONTRAST AMBER BADGE CLEARLY SEPARATED FROM BORDER */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.6)] flex items-center gap-1.5 ring-4 ring-[#080B11] z-30 whitespace-nowrap">
            <Star className="w-3.5 h-3.5 fill-current text-slate-950" />
            <span>Recommandé</span>
          </div>

          <div className="space-y-5 pt-2">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Performance
                </span>
                {currentPlan === 'pro' ? (
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 font-bold whitespace-nowrap inline-flex items-center gap-1 shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>Modèle Actif</span>
                  </span>
                ) : (
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-200 border border-sky-400/40 font-bold whitespace-nowrap inline-flex items-center gap-1 shrink-0">
                    <span>⭐</span>
                    <span>Populaire</span>
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                KONAN PRO
                <Sparkles className="w-5 h-5 text-sky-400 animate-spin-slow" />
              </h3>
            </div>

            {/* Price with Rolling Counter Animation */}
            <div className="pt-1 pb-4 border-b border-slate-800">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono text-gradient-primary">
                  <AnimatedCounter value={1200} duration={1200} formatThousands /> F
                </span>
                <span className="text-xs text-slate-300 font-medium">CFA / mois</span>
              </div>
              <p className="text-[11px] text-sky-300 font-semibold mt-1">Rentabilité maximale • Moins de 40 F / jour</p>
            </div>

            {/* Features List */}
            <div className="space-y-3.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-sky-300">
                Tout ce qui est dans Konan, plus :
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-100">
                <li className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Dates d'examens & Préparation directe :</strong> Intégrez vos dates d'épreuves sur chaque matière ; l'emploi du temps s'adapte et priorise automatiquement les révisions clés.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Modèles d'espacement Premium :</span>
                    <ul className="mt-1 space-y-1 pl-1 text-xs text-sky-200/90 border-l border-sky-500/40 ml-1">
                      <li className="pl-2">• <strong>Time Blocking</strong> académique ciblé</li>
                      <li className="pl-2">• <strong>Technique de Feynman</strong> (assimilation profonde)</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Bell className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Rappel intelligent Google Agenda (Tous les jours) :</strong> Synchronisation automatique quotidienne de tout l'agenda avec alerte push 15 min avant chaque session de révision directement sur votre téléphone.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Recommandations de Konan :</strong> Recommandations intelligentes et personnalisées de la meilleure technique d'espacement selon la fatigue et les heures de fin de vos cours (Idéal ⭐, Conseillé, Déconseillé selon la densité de vos journées).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Combinaison triple :</strong> Capacité de combiner jusqu'à <strong>3 techniques d'espacement en même temps</strong> dans le même planning.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6 mt-6 border-t border-sky-500/40">
            <Button
              variant="glow"
              size="md"
              rightIcon={currentPlan === 'pro' ? <Check className="w-4 h-4 text-emerald-300" /> : <ArrowRight className="w-4 h-4" />}
              className={`w-full text-xs sm:text-sm font-extrabold py-3.5 shadow-lg shadow-sky-950/60 hover:scale-[1.03] active:scale-95 transition-transform cursor-pointer ${
                currentPlan === 'pro' ? '!bg-emerald-600/30 !border-emerald-400/60 !text-emerald-200' : ''
              }`}
              onClick={() => onSelectPlan?.('pro')}
            >
              {currentPlan === 'pro' ? '✓ Modèle KONAN PRO Actif' : 'Choisir Konan Pro'}
            </Button>
          </div>
        </div>

        {/* 3. PLAN KONAN PLUS (ÉLITE) */}
        <div 
          className={`flex flex-col justify-between rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 hover:border-slate-700 hover:-translate-y-1.5 transition-all duration-700 ease-out transform shadow-lg hover:shadow-2xl ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
        >
          <div className="space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Fonctionnalités Complètes
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-950/80 text-indigo-200 border border-indigo-500/40 font-semibold flex items-center gap-1 whitespace-nowrap shrink-0">
                  <Crown className="w-3 h-3 text-amber-300" />
                  Coaching VIP
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                KONAN PLUS
              </h3>
            </div>

            {/* Price with Rolling Counter Animation */}
            <div className="pt-1 pb-4 border-b border-slate-800">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                  <AnimatedCounter value={2500} duration={1400} formatThousands /> F
                </span>
                <span className="text-xs text-slate-400 font-medium">CFA / mois</span>
              </div>
              <p className="text-[11px] text-indigo-400 font-semibold mt-1">L'expérience complète sans compromis</p>
            </div>

            {/* Features List */}
            <div className="space-y-3.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-300">
                Tout ce qui est dans Konan Pro, plus :
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <Target className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span><strong>Planning conditionné par vos 3 Objectifs Scolaires :</strong></span>
                    <ul className="mt-1 space-y-1 pl-1 text-xs text-slate-300 border-l border-indigo-500/30 ml-1">
                      <li className="pl-2">• <em>Passer l'année avec 12 de moyenne</em></li>
                      <li className="pl-2">• <em>Passer avec 16 de moyenne</em></li>
                      <li className="pl-2">• <em>Devenir major de ma promotion</em></li>
                    </ul>
                    <p className="text-[11px] text-slate-400 mt-1">L'objectif influence drastiquement la densité et les méthodes recommandées.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <MessageSquare className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>Coach Konan Quotidien :</strong> Notification d'encouragement personnalisée chaque jour avec ton adapté à votre objectif (chill et bienveillant pour 12, ferme et disciplinaire pour Major).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>Tête-à-tête Coach Konan (2x / semaine) :</strong> Discussion exclusive de 15 min chrono dans votre EDT avec Konan pour débloquer, conseiller et remotiver.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Headphones className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>Musiques de fond révision & détente :</strong> Ambiances sonores et sons dédiés pour stimuler le focus ou décompresser.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6 mt-6 border-t border-slate-800/80">
            <Button
              variant="secondary"
              size="md"
              rightIcon={currentPlan === 'plus' ? <Check className="w-4 h-4 text-emerald-400" /> : undefined}
              className="w-full text-xs sm:text-sm font-bold py-3 hover:bg-slate-800 border-indigo-500/40 text-indigo-200 hover:text-white active:scale-95 transition-transform cursor-pointer"
              onClick={() => onSelectPlan?.('plus')}
            >
              {currentPlan === 'plus' ? '✓ Modèle KONAN PLUS Actif' : 'Passer à Konan Plus'}
            </Button>
          </div>
        </div>

      </div>

      {/* Security & Reassurance Footer Note with entrance animation */}
      <div 
        className={`flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-4 max-w-2xl mx-auto text-center px-4 transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}
      >
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Activation instantanée</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-sky-400" />
          <span>Sans engagement de durée</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Paiement sécurisé Mobile Money & Carte</span>
        </div>
      </div>
    </section>
  );
};
