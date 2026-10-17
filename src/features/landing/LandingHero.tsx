import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Brain, 
  Calendar, 
  Zap, 
  Flame, 
  GraduationCap, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  AlertTriangle, 
  RotateCcw
} from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';
import { ACADEMIC_PRESETS } from '../../lib/presets';
import { PricingSection } from './PricingSection';
import { KonanCube } from '../../components/common/KonanCube';

export interface LandingHeroProps {
  onStartApp: () => void;
  onSelectPreset: (presetId: string) => void;
  onSelectPlan?: (planId: 'free' | 'pro' | 'plus') => void;
  isLoggedIn?: boolean;
  currentPlan?: 'free' | 'pro' | 'plus';
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  onStartApp,
  onSelectPreset,
  onSelectPlan,
  isLoggedIn = false,
  currentPlan = 'free',
}) => {
  // Demonstrator initially starts on "before" (Sans KONAN) as requested
  const [selectedDemoTab, setSelectedDemoTab] = useState<'before' | 'after'>('before');
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [activeTestSlot, setActiveTestSlot] = useState<number | null>(null);
  const [activeProblemId, setActiveProblemId] = useState<number | null>(null);

  const activePreset = ACADEMIC_PRESETS[activePresetIndex];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0A0E1A] via-[#0D1322] to-[#111827] text-slate-100 overflow-hidden pt-4 sm:pt-8 pb-20 selection:bg-blue-600/30">
      
      {/* Background Decorative Ambient Radial Glows (Calm Tech deep lighting) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] sm:h-[650px] radial-glow pointer-events-none" />
      <div className="absolute top-12 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-36 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2.5s' }} />
      <div className="absolute top-96 left-1/3 w-64 sm:w-80 h-64 sm:h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* =========================================================================
            1. HERO SECTION (Identité K, Titre éclatant, Calm Tech, CTAs aérés)
            ========================================================================= */}
        <div className="text-center space-y-5 sm:space-y-7 max-w-4xl mx-auto pt-4 sm:pt-8">
          
          {/* Illustration Centrale : Cube K magique en 3D lévitant avec lueurs et étincelles bleues et violettes */}
          <div className="flex justify-center pb-1">
            <div className="relative inline-flex items-center justify-center group my-1 sm:my-3">
              {/* Halo lumineux d'ambiance lévitant */}
              <div className="absolute -inset-6 sm:-inset-8 rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-500/25 to-violet-600/30 blur-2xl pointer-events-none animate-pulse-slow" />
              
              {/* Étincelles féeriques bleues et violettes en orbite */}
              <div className="absolute -top-3 -right-4 text-sky-300 animate-pulse pointer-events-none drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="absolute -bottom-2 -left-4 text-violet-400 animate-pulse pointer-events-none drop-shadow-[0_0_12px_rgba(168,85,247,0.9)]" style={{ animationDelay: '1.4s' }}>
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Cube K 3D lévitant */}
              <div className="animate-float">
                <KonanCube 
                  size={110} 
                  showStars={true} 
                  glow={true} 
                  className="drop-shadow-[0_20px_40px_rgba(14,165,233,0.5)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Badge Méthode : Capsule (pill) horizontale au contour lumineux dégradé très fin */}
          <div className="flex justify-center px-2">
            <div className="p-[1px] rounded-full bg-gradient-to-r from-blue-500/60 via-purple-500/50 to-cyan-400/60 shadow-[0_0_20px_rgba(59,130,246,0.25)] inline-block max-w-full">
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0A0E1A]/95 backdrop-blur-md text-sky-200 text-xs sm:text-sm font-semibold tracking-wide">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
                <span className="break-words">Méthode Pédagogique Active & Répétition Espacée</span>
              </div>
            </div>
          </div>

          {/* Typographie & Grand Titre : "parfait" brille grâce à un dégradé lumineux royal blue -> violet électrique */}
          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.18] break-words px-2 max-w-4xl mx-auto">
            Transformez votre emploi du temps en un{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 drop-shadow-[0_0_35px_rgba(124,58,237,0.55)]">
              planning d'étude parfait
            </span>
          </h1>

          {/* Sous-texte : aéré (interlignage 1.6) en gris clair pour une lecture reposante */}
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-[1.6] px-3 break-words">
            KONAN analyse vos cours, coefficients d’examens, niveau de difficulté et rythme biologique pour générer un <strong className="text-white font-semibold">programme d'étude équilibré, réaliste et anti-burnout</strong>.
          </p>

          {/* Appels à l'action (CTA) : Grand bouton royal blue vibrant + bouton secondaire ghost en verre dépoli */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-3 sm:pt-4 max-w-md sm:max-w-none mx-auto w-full px-3 sm:px-0">
            {/* Bouton Principal Vibrant */}
            <button
              type="button"
              onClick={onStartApp}
              className="w-full sm:w-auto py-4 px-7 sm:px-9 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base shadow-[0_10px_35px_-5px_rgba(37,99,235,0.6),inset_0_1px_1px_rgba(255,255,255,0.35)] ring-1 ring-blue-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5"
            >
              <span>{isLoggedIn ? 'Accéder à mon Tableau de Bord' : "Générer mon Planning d'Étude"}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-sky-200 shrink-0" />
            </button>

            {/* Bouton Secondaire Verre Dépoli (Ghost) */}
            <button
              type="button"
              onClick={() => onSelectPreset('cs-engineering')}
              className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-md font-semibold text-xs xs:text-sm sm:text-base shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 shrink-0" />
              <span>🎓 Tester en Mode Démo</span>
            </button>
          </div>

          {/* Pied de page Hero : Logo Google + mention discrète */}
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2 text-center px-2">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.27 21.37 7.35 24 12 24z" />
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.97 0 12s.46 3.84 1.26 5.42l4.02-3.15z" />
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.63 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
            </svg>
            <span className="break-words">Connexion Google instantanée • Sauvegarde automatique</span>
          </div>

          {/* =========================================================================
              STATISTIQUES DU HAUT : Grille 2x2 en verre dépoli (bordures ultra-fines 0.5px)
              ========================================================================= */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-8 max-w-4xl mx-auto">
            
            {/* 1. 100% (Blanc brillant) */}
            <div className="p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.25)] text-center group hover:border-white/20 hover:bg-white/[0.06] transition-all cursor-default">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.45)]">
                <AnimatedCounter value={100} suffix="%" className="text-white" />
              </p>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-1 font-medium">Algorithmique & Zéro Faux Planning</p>
            </div>

            {/* 2. -40% (Bleu turquoise / Cyan) */}
            <div className="p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.25)] text-center group hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all cursor-default">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-cyan-400 drop-shadow-[0_0_14px_rgba(34,211,238,0.45)]">
                <AnimatedCounter value={40} prefix="-" suffix="%" className="text-cyan-400" />
              </p>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-1 font-medium">Charge Mentale & Stress</p>
            </div>

            {/* 3. x2.3 (Indigo) */}
            <div className="p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.25)] text-center group hover:border-indigo-400/30 hover:bg-white/[0.06] transition-all cursor-default">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-indigo-400 drop-shadow-[0_0_14px_rgba(129,140,248,0.45)]">
                <AnimatedCounter value={2.3} prefix="x" decimals={1} className="text-indigo-400" />
              </p>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-1 font-medium">Rétention Espacée</p>
            </div>

            {/* 4. 100% (Vert Émeraude) */}
            <div className="p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.25)] text-center group hover:border-emerald-400/30 hover:bg-white/[0.06] transition-all cursor-default">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-400 drop-shadow-[0_0_14px_rgba(52,211,153,0.45)]">
                <AnimatedCounter value={100} suffix="%" className="text-emerald-400" />
              </p>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-1 font-medium">Gratuit & Privé</p>
            </div>

          </div>

        </div>

        {/* =========================================================================
            2. LE DÉMONSTRATEUR INTERACTIF (Comparatif Sans KONAN vs Avec KONAN)
            ========================================================================= */}
        <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 shrink-0" />
                <span>Démonstrateur Interactif</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Comparez l'organisation traditionnelle et l'optimisation cognitive de KONAN.
              </p>
            </div>

            {/* Interrupteur (toggle) de segment horizontal chic */}
            <div className="flex items-center bg-[#0C1425] border border-white/10 p-1.5 rounded-2xl shadow-inner w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setSelectedDemoTab('before')}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-center min-h-[38px] flex items-center justify-center gap-1.5 ${
                  selectedDemoTab === 'before'
                    ? 'bg-rose-950/60 text-rose-300 border border-rose-800/60 shadow-md shadow-rose-950/40'
                    : 'text-slate-400 hover:text-rose-300 hover:bg-rose-950/20'
                }`}
              >
                <span>🔴 Sans KONAN</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedDemoTab('after')}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-center min-h-[38px] flex items-center justify-center gap-1.5 ${
                  selectedDemoTab === 'after'
                    ? 'bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-600/40 border border-indigo-400/40'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-200" />
                <span>✨ Voir la solution KONAN</span>
              </button>
            </div>
          </div>

          {/* Sélecteur de filière si l'onglet actif est 'after' */}
          {selectedDemoTab === 'after' && (
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 animate-fadeIn">
              <span className="text-xs font-bold text-slate-400 shrink-0 mr-1 flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                Filière test :
              </span>
              {ACADEMIC_PRESETS.map((preset, idx) => (
                <button
                  type="button"
                  key={preset.id}
                  onClick={() => setActivePresetIndex(idx)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer shrink-0 min-h-[34px] interactive-pill ${
                    activePresetIndex === idx
                      ? 'bg-blue-600/25 text-sky-200 border-blue-400/50 shadow-sm'
                      : 'bg-white/[0.04] text-slate-400 border-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {preset.name}
                </button>
              ))}
            </div>
          )}

          {/* Carte Principale du Démonstrateur */}
          <div className="rounded-3xl border border-white/10 shadow-2xl bg-[#0E1626]/85 backdrop-blur-2xl text-slate-100 p-4 sm:p-7">
            {selectedDemoTab === 'after' ? (
              /* ÉTAT AVEC KONAN : Planning optimisé */
              <div className="space-y-5 sm:space-y-6">
                
                {/* Solution Banner */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 text-white shadow-inner">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-600 text-white shrink-0 shadow-md shadow-blue-600/40">
                      <Sparkles className="w-5 h-5 text-sky-200" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                        <span>Planning d'Étude Optimisé par KONAN</span>
                        <Badge variant="emerald" dot size="sm">Équilibré</Badge>
                      </h4>
                      <p className="text-[11px] sm:text-xs text-sky-200 mt-0.5">
                        {activePreset.subjects.length} matières réparties • Alternance Spaced Review & Deep Work • {activePreset.level}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => setSelectedDemoTab('before')}
                    className="text-xs font-semibold text-slate-400 hover:text-rose-300 flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-rose-500/10 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Revoir Sans KONAN</span>
                  </button>
                </div>

                {/* 3 Colonnes Structurées & Touchables */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  
                  {/* Colonne 1 : Cours Universitaires */}
                  <div className="space-y-2.5 p-4 rounded-2xl bg-[#0A0E1A]/70 border border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">1. Cours Universitaires</span>
                      <Badge variant="slate" size="sm">Fixe</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs shadow-xs">
                        <div className="flex justify-between font-bold text-white">
                          <span>08:30 - 10:30</span>
                          <span className="text-sky-400">CM</span>
                        </div>
                        <p className="text-slate-300 mt-1 font-semibold break-words leading-snug">{activePreset.subjects[0]?.name}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs shadow-xs">
                        <div className="flex justify-between font-bold text-white">
                          <span>10:45 - 12:45</span>
                          <span className="text-indigo-400">TD</span>
                        </div>
                        <p className="text-slate-300 mt-1 font-semibold break-words leading-snug">{activePreset.subjects[0]?.name}</p>
                      </div>
                    </div>
                  </div>

                  {/* Colonne 2 : Créneaux Recommandés Touchables */}
                  <div className="space-y-2.5 p-4 rounded-2xl bg-blue-950/20 border border-blue-500/30">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-sky-200">2. Créneaux Recommandés</span>
                      <Badge variant="primary" size="sm">Toucher pour tester</Badge>
                    </div>
                    
                    <div className="space-y-2">
                      {/* Slot 1 */}
                      <div 
                        onClick={() => setActiveTestSlot(activeTestSlot === 1 ? null : 1)}
                        className={`p-3 rounded-xl border text-xs cursor-pointer transition-all interactive-pill ${
                          activeTestSlot === 1
                            ? 'bg-blue-600/30 border-blue-400 shadow-blue-900/40 ring-2 ring-blue-400/30'
                            : 'bg-[#0A0E1A]/80 border-blue-500/30 hover:border-blue-400/50'
                        }`}
                      >
                        <div className="flex justify-between font-bold text-white">
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-sky-400" />
                            17:30 - 18:15 (45 min)
                          </span>
                          <span className="text-amber-400 font-mono text-[11px]">Spaced Review</span>
                        </div>
                        <p className="text-slate-200 font-medium mt-1 break-words leading-snug">
                          {activePreset.subjects[0]?.topics?.[0] || 'Points clés du cours'}
                        </p>
                        {activeTestSlot === 1 && (
                          <div className="mt-2 pt-2 border-t border-blue-400/30 flex items-center justify-between text-[11px] text-sky-200 font-semibold animate-fadeIn">
                            <span className="flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              Session validée !
                            </span>
                            <span className="text-sky-300 font-bold">Mémorisation validée</span>
                          </div>
                        )}
                      </div>

                      {/* Slot 2 */}
                      <div 
                        onClick={() => setActiveTestSlot(activeTestSlot === 2 ? null : 2)}
                        className={`p-3 rounded-xl border text-xs cursor-pointer transition-all interactive-pill ${
                          activeTestSlot === 2
                            ? 'bg-emerald-600/30 border-emerald-400 shadow-emerald-900/40 ring-2 ring-emerald-400/30'
                            : 'bg-[#0A0E1A]/80 border-white/10 hover:border-emerald-500/40'
                        }`}
                      >
                        <div className="flex justify-between font-bold text-white">
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-emerald-400" />
                            18:30 - 19:15 (45 min)
                          </span>
                          <span className="text-emerald-400 font-mono text-[11px]">Deep Work</span>
                        </div>
                        <p className="text-slate-200 font-medium mt-1 break-words leading-snug">
                          {activePreset.subjects[1]?.name || 'Exercices d\'application'}
                        </p>
                        {activeTestSlot === 2 && (
                          <div className="mt-2 pt-2 border-t border-emerald-400/30 flex items-center justify-between text-[11px] text-emerald-200 font-semibold animate-fadeIn">
                            <span className="flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              Résolution validée !
                            </span>
                            <span className="text-emerald-300 font-bold">Session assimilée</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Colonne 3 : Équilibre Biologique */}
                  <div className="space-y-2.5 p-4 rounded-2xl bg-[#0A0E1A]/70 border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">3. Équilibre Biologique</span>
                        <Badge variant="emerald" size="sm">Optimal</Badge>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between items-center text-slate-300 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                          <span>Étude quotidienne :</span>
                          <span className="font-mono text-emerald-400 font-bold">1h30 (2 blocs)</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-300 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                          <span>Pause obligatoire :</span>
                          <span className="font-mono text-sky-400 font-bold">15 min relax</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-300 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                          <span>Soirée libre dès :</span>
                          <span className="font-mono text-indigo-400 font-bold">19:30</span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectPreset(activePreset.id)}
                      className="w-full mt-3 py-2.5 px-4 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>Tester ce Modèle Démo ({activePreset.name})</span>
                    </button>
                  </div>

                </div>
              </div>
            ) : (
              /* ÉTAT SANS KONAN : Section d'impact percutante */
              <div className="p-3 sm:p-6 text-center space-y-6 max-w-2xl mx-auto">
                
                {/* Badge "Le piège de l’organisation classique sans méthode" en bordeaux élégant */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#38101C]/80 border border-rose-800/50 text-rose-300 text-xs font-bold">
                  <Flame className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Le piège de l’organisation classique sans méthode</span>
                </div>

                {/* Pourcentage 82% géant en rose-saumon / rouge alerte lumineux */}
                <div className="space-y-2">
                  <div className="text-6xl sm:text-7xl md:text-8xl font-black text-rose-500 font-mono tracking-tight drop-shadow-[0_0_25px_rgba(244,63,94,0.55)] flex items-center justify-center">
                    <AnimatedCounter value={82} suffix="%" className="text-rose-500" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black text-white px-2">
                    des étudiants révisent dans l'urgence la veille des examens
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
                    Sans découpage espacé, le cerveau oublie 70% d'un cours en 48 heures. Toucher une situation ci-dessous pour voir l'impact réel :
                  </p>
                </div>

                {/* 3 Cartes de Risques Horizontales Sombres avec bordures subtiles au survol */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-left">
                  
                  {/* Risque 1 */}
                  <div 
                    onClick={() => setActiveProblemId(activeProblemId === 1 ? null : 1)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer interactive-pill ${
                      activeProblemId === 1 
                        ? 'bg-rose-950/50 border-rose-500 shadow-md shadow-rose-950/60' 
                        : 'bg-[#101A2D] border-white/5 hover:border-rose-500/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl">😫</span>
                      <AlertTriangle className="w-4 h-4 text-rose-400" />
                    </div>
                    <p className="text-xs font-bold text-white mt-1.5">Nuit blanche à 3h</p>
                    <p className={`text-[11px] mt-1 ${activeProblemId === 1 ? 'text-rose-300 font-medium' : 'text-slate-400'}`}>
                      {activeProblemId === 1 
                        ? '⚠️ Perte de 45% de la mémoire le lendemain au réveil.' 
                        : 'Toucher pour voir l\'impact'}
                    </p>
                  </div>

                  {/* Risque 2 */}
                  <div 
                    onClick={() => setActiveProblemId(activeProblemId === 2 ? null : 2)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer interactive-pill ${
                      activeProblemId === 2 
                        ? 'bg-rose-950/50 border-rose-500 shadow-md shadow-rose-950/60' 
                        : 'bg-[#101A2D] border-white/5 hover:border-amber-500/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl">⚡</span>
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                    </div>
                    <p className="text-xs font-bold text-white mt-1.5">Impasse coef 4</p>
                    <p className={`text-[11px] mt-1 ${activeProblemId === 2 ? 'text-amber-300 font-medium' : 'text-slate-400'}`}>
                      {activeProblemId === 2 
                        ? '⚠️ Risque d\'élimination et rattrapages assurés.' 
                        : 'Toucher pour voir l\'impact'}
                    </p>
                  </div>

                  {/* Risque 3 */}
                  <div 
                    onClick={() => setActiveProblemId(activeProblemId === 3 ? null : 3)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer interactive-pill ${
                      activeProblemId === 3 
                        ? 'bg-rose-950/50 border-rose-500 shadow-md shadow-rose-950/60' 
                        : 'bg-[#101A2D] border-white/5 hover:border-sky-500/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl">📚</span>
                      <AlertTriangle className="w-4 h-4 text-sky-400" />
                    </div>
                    <p className="text-xs font-bold text-white mt-1.5">Planning rigide</p>
                    <p className={`text-[11px] mt-1 ${activeProblemId === 3 ? 'text-sky-300 font-medium' : 'text-slate-400'}`}>
                      {activeProblemId === 3 
                        ? '⚠️ Abandon après 4 jours et culpabilité mentale.' 
                        : 'Toucher pour voir l\'impact'}
                    </p>
                  </div>

                </div>

                {/* Grand Bouton Lumineux vers la Solution KONAN */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedDemoTab('after')}
                    className="w-full sm:w-auto py-4 px-8 text-sm sm:text-base font-extrabold rounded-2xl cursor-pointer bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white shadow-[0_10px_35px_-5px_rgba(99,102,241,0.5)] border border-indigo-400/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 mx-auto"
                  >
                    <Sparkles className="w-5 h-5 text-sky-200" />
                    <span>✨ Voir la solution KONAN</span>
                  </button>
                </div>

              </div>
            )}
          </div>
        </div>

        {/* =========================================================================
            3. POURQUOI KONAN TRANSFORME VOTRE FAÇON D'ÉTUDIER (3 Cartes #131B2E)
            ========================================================================= */}
        <div className="space-y-8 sm:space-y-12 max-w-6xl mx-auto">
          <div className="text-center space-y-2.5 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Pourquoi KONAN transforme votre façon d'étudier
            </h2>
            <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
              Conçu selon les neurosciences de l’apprentissage et l'optimisation du rythme biologique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Carte 1 : Import & Grille Visuelle */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#131B2E] border border-white/[0.05] shadow-xl hover:border-blue-500/30 hover:bg-[#162036] transition-all group space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.25)] group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">Import & Grille Visuelle</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Renseignez vos cours magistraux, TD et TP en quelques clics ou importez votre modèle académique prédéfini pour une clarté instantanée.
              </p>
            </div>

            {/* Carte 2 : Équilibre Intelligent */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#131B2E] border border-white/[0.05] shadow-xl hover:border-cyan-400/30 hover:bg-[#162036] transition-all group space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.25)] group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">Équilibre Intelligent</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                L'organisation croise coefficients, niveau de difficulté et temps de repos pour allouer les meilleures plages d'étude sans frôler l'épuisement.
              </p>
            </div>

            {/* Carte 3 : Validation & Révisions Ciblées */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#131B2E] border border-white/[0.05] shadow-xl hover:border-emerald-400/30 hover:bg-[#162036] transition-all group space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.25)] group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">Validation & Révisions Ciblées</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Suivi séance par séance, alternance Spaced Review et validation de votre progression quotidienne en un clic pour une mémorisation durable.
              </p>
            </div>

          </div>
        </div>

        {/* =========================================================================
            4. LES FORMULES & PRIX (SaaS d'élite, Pack PRO sublimé)
            ========================================================================= */}
        <PricingSection 
          onSelectPlan={onSelectPlan ? onSelectPlan : () => onStartApp()} 
          isLoggedIn={isLoggedIn}
          currentPlan={currentPlan}
        />

        {/* =========================================================================
            5. APPEL À L'ACTION FINAL
            ========================================================================= */}
        <div className="relative rounded-3xl p-6 sm:p-12 overflow-hidden border border-blue-500/30 bg-gradient-to-br from-blue-950/60 via-[#0D1527] to-[#0A0E1A] text-center space-y-4 sm:space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Prêt à reprendre le contrôle de votre semestre ?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Connectez votre compte Google et générez votre premier planning d'étude personnalisé dès maintenant.
            </p>
          </div>
          <button
            type="button"
            onClick={onStartApp}
            className="py-4 px-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-600/40 ring-1 ring-blue-400/50 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 mx-auto"
          >
            <span>Commencer avec Google & KONAN</span>
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* =========================================================================
            LIGNE DE CRÉDITS & SIGNATURE DE L'AUTEUR
            ========================================================================= */}
        <div className="pt-2 sm:pt-4 text-center">
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            Conçu et développé par <span className="text-slate-200 font-semibold">Christ Michaël Boni</span>
          </p>
        </div>

      </div>
    </div>
  );
};
