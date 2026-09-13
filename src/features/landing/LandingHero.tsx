import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Brain, 
  Calendar, 
  Zap, 
  BarChart, 
  Flame, 
  GraduationCap, 
  ChevronRight,
  CheckCircle2,
  Clock,
  BookOpen,
  AlertTriangle,
  RotateCcw
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';
import { ACADEMIC_PRESETS } from '../../lib/presets';
import { PricingSection } from './PricingSection';

export interface LandingHeroProps {
  onStartApp: () => void;
  onSelectPreset: (presetId: string) => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  onStartApp,
  onSelectPreset,
}) => {
  // Demonstrator initially starts on "before" (Sans KONAN) as requested
  const [selectedDemoTab, setSelectedDemoTab] = useState<'before' | 'after'>('before');
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [activeTestSlot, setActiveTestSlot] = useState<number | null>(null);
  const [activeProblemId, setActiveProblemId] = useState<number | null>(null);

  const activePreset = ACADEMIC_PRESETS[activePresetIndex];

  return (
    <div className="relative min-h-screen bg-[#080B11] overflow-hidden pt-6 sm:pt-12 pb-20">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] sm:h-[600px] radial-glow pointer-events-none" />
      <div className="absolute top-16 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute top-36 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* HERO HEADER */}
        <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto pt-2 sm:pt-6">
          
          {/* Release Badge - Luxurious interactive pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-blue-500/30 text-blue-200 text-xs font-semibold shadow-lg shadow-blue-950/30 interactive-pill max-w-full">
            <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="truncate">Méthode Pédagogique Active • Répétition Espacée & Sérénité</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] break-words">
            Transformez votre emploi du temps en un{' '}
            <span className="text-gradient-primary">planning d'étude parfait</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed px-1">
            KONAN analyse vos cours, coefficients d’examens, niveau de difficulté et rythme biologique pour générer un <strong className="text-white font-semibold">programme d'étude équilibré, réaliste et anti-burnout</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-3 sm:pt-4 max-w-md sm:max-w-none mx-auto">
            <Button
              variant="glow"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
              onClick={onStartApp}
              className="w-full sm:w-auto shadow-xl shadow-blue-950/50 cursor-pointer text-sm sm:text-base py-3.5 px-7 font-bold hover:scale-105 active:scale-95 transition-all"
            >
              Générer mon Planning d'Étude
            </Button>
            <Button
              variant="secondary"
              size="lg"
              leftIcon={<GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />}
              onClick={() => {
                onSelectPreset('cs-engineering');
                onStartApp();
              }}
              className="w-full sm:w-auto cursor-pointer text-sm sm:text-base py-3.5 px-6 font-semibold hover:border-blue-400/40 transition-all"
            >
              Découvrir un Exemple Prédéfini
            </Button>
          </div>

          {/* Google Sign-in Micro-Note */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.27 21.37 7.35 24 12 24z" />
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.97 0 12s.46 3.84 1.26 5.42l4.02-3.15z" />
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.63 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
            </svg>
            <span>Connexion Google instantanée • Sauvegarde automatique en temps réel</span>
          </div>

          {/* Social Proof & Metrics with SCROLL COUNT-UP ANIMATION */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-slate-800/80 max-w-3xl mx-auto">
            
            {/* Metric 1 */}
            <div className="p-3.5 rounded-2xl card-luxury text-center group cursor-default">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                <AnimatedCounter value={100} suffix="%" className="text-white" />
              </p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1 font-medium">Algorithmique & Zéro Faux Planning</p>
            </div>

            {/* Metric 2 */}
            <div className="p-3.5 rounded-2xl card-luxury text-center group cursor-default">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-sky-400">
                <AnimatedCounter value={40} prefix="-" suffix="%" className="text-sky-400" />
              </p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1 font-medium">Charge Mentale & Stress</p>
            </div>

            {/* Metric 3 */}
            <div className="p-3.5 rounded-2xl card-luxury text-center group cursor-default">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-400">
                <AnimatedCounter value={2.3} prefix="x" decimals={1} className="text-blue-400" />
              </p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1 font-medium">Rétention Espacée</p>
            </div>

            {/* Metric 4 */}
            <div className="p-3.5 rounded-2xl card-luxury text-center group cursor-default">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-400">
                <AnimatedCounter value={100} suffix="%" className="text-emerald-400" />
              </p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1 font-medium">Gratuit & Privé</p>
            </div>

          </div>

        </div>

        {/* INTERACTIVE SIMULATOR / COMPARISON PREVIEW */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 shrink-0" />
                <span>Démonstrateur Interactif</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Comparez l'organisation traditionnelle et l'optimisation cognitive de KONAN.
              </p>
            </div>

            {/* Toggle State - Initially on 'before' (Sans KONAN) */}
            <div className="flex items-center bg-slate-900/90 border border-slate-800 p-1.5 rounded-2xl shadow-inner w-full sm:w-auto">
              <button
                onClick={() => setSelectedDemoTab('before')}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-center min-h-[38px] flex items-center justify-center gap-1.5 ${
                  selectedDemoTab === 'before'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50 shadow-md shadow-rose-950/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>🔴 Sans KONAN</span>
              </button>
              <button
                onClick={() => setSelectedDemoTab('after')}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-center min-h-[38px] flex items-center justify-center gap-1.5 ${
                  selectedDemoTab === 'after'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40 border border-blue-400/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-300" />
                <span>✨ Voir la solution KONAN</span>
              </button>
            </div>
          </div>

          {/* Preset Chips Carousel */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <span className="text-xs font-bold text-slate-400 shrink-0 mr-1 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              Filière test :
            </span>
            {ACADEMIC_PRESETS.map((preset, idx) => (
              <button
                key={preset.id}
                onClick={() => setActivePresetIndex(idx)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer shrink-0 min-h-[34px] interactive-pill ${
                  activePresetIndex === idx
                    ? 'bg-blue-500/20 text-blue-300 border-blue-500/50 shadow-sm shadow-blue-900/30'
                    : 'bg-slate-900/70 text-slate-400 border-slate-800 hover:border-slate-700'
                }`}
              >
                {preset.name}
              </button>
            ))}
          </div>

          {/* Interactive Card */}
          <Card className="border border-slate-800 shadow-2xl bg-slate-950/90 p-4 sm:p-7">
            {selectedDemoTab === 'after' ? (
              <div className="space-y-5 sm:space-y-6">
                
                {/* Solution Banner */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-blue-950/30 border border-blue-500/40 shadow-inner">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-600 text-white shrink-0 shadow-md shadow-blue-600/30">
                      <Sparkles className="w-5 h-5 text-sky-200" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                        <span>Planning d'Étude Optimisé par KONAN</span>
                        <Badge variant="emerald" dot size="sm">Équilibré</Badge>
                      </h4>
                      <p className="text-[11px] sm:text-xs text-blue-200 mt-0.5">
                        {activePreset.subjects.length} matières réparties • Alternance Spaced Review & Deep Work • {activePreset.level}
                      </p>
                    </div>
                  </div>
                  
                  {/* Interactive toggle back button */}
                  <button
                    onClick={() => setSelectedDemoTab('before')}
                    className="text-xs font-semibold text-slate-400 hover:text-rose-300 flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-rose-500/10 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Revoir Sans Konan</span>
                  </button>
                </div>

                {/* 3 Columns Layout with Interactive Touch Elements */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  
                  {/* Column 1: Fixed Classes */}
                  <div className="space-y-2.5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">1. Cours Universitaires</span>
                      <Badge variant="slate" size="sm">Fixe</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs">
                        <div className="flex justify-between font-bold text-slate-200">
                          <span>08:30 - 10:30</span>
                          <span className="text-blue-400">CM</span>
                        </div>
                        <p className="text-slate-300 mt-1 font-semibold truncate">{activePreset.subjects[0]?.name}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs">
                        <div className="flex justify-between font-bold text-slate-200">
                          <span>10:45 - 12:45</span>
                          <span className="text-sky-400">TD</span>
                        </div>
                        <p className="text-slate-300 mt-1 font-semibold truncate">{activePreset.subjects[0]?.name}</p>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Recommended Study Blocks (Interactive & Fun) */}
                  <div className="space-y-2.5 p-4 rounded-2xl bg-blue-950/20 border border-blue-500/30">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">2. Créneaux Recommandés</span>
                      <Badge variant="primary" size="sm">Toucher pour tester</Badge>
                    </div>
                    
                    <div className="space-y-2">
                      {/* Interactive Slot 1 */}
                      <div 
                        onClick={() => setActiveTestSlot(activeTestSlot === 1 ? null : 1)}
                        className={`p-3 rounded-xl border text-xs cursor-pointer transition-all interactive-pill ${
                          activeTestSlot === 1
                            ? 'bg-blue-600/30 border-blue-400 shadow-lg shadow-blue-900/40 ring-2 ring-blue-400/30'
                            : 'bg-blue-900/25 border-blue-500/30 hover:border-blue-400/50'
                        }`}
                      >
                        <div className="flex justify-between font-bold text-blue-100">
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-blue-400" />
                            17:30 - 18:15 (45 min)
                          </span>
                          <span className="text-amber-400 font-mono text-[11px]">Spaced Review</span>
                        </div>
                        <p className="text-white font-medium mt-1 truncate">
                          {activePreset.subjects[0]?.topics?.[0] || 'Points clés du cours'}
                        </p>
                        {activeTestSlot === 1 && (
                          <div className="mt-2 pt-2 border-t border-blue-400/30 flex items-center justify-between text-[11px] text-sky-200 font-semibold animate-fadeIn">
                            <span className="flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              Focus complété !
                            </span>
                            <span className="text-sky-300 font-bold">Mémorisation validée</span>
                          </div>
                        )}
                      </div>

                      {/* Interactive Slot 2 */}
                      <div 
                        onClick={() => setActiveTestSlot(activeTestSlot === 2 ? null : 2)}
                        className={`p-3 rounded-xl border text-xs cursor-pointer transition-all interactive-pill ${
                          activeTestSlot === 2
                            ? 'bg-emerald-600/30 border-emerald-400 shadow-lg shadow-emerald-900/40 ring-2 ring-emerald-400/30'
                            : 'bg-slate-800/60 border-slate-700/60 hover:border-emerald-500/40'
                        }`}
                      >
                        <div className="flex justify-between font-bold text-slate-200">
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-emerald-400" />
                            18:30 - 19:15 (45 min)
                          </span>
                          <span className="text-emerald-400 font-mono text-[11px]">Deep Work</span>
                        </div>
                        <p className="text-white font-medium mt-1 truncate">
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

                  {/* Column 3: Balance & Anti-Burnout Metrics */}
                  <div className="space-y-2.5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">3. Équilibre Biologique</span>
                        <Badge variant="emerald" size="sm">Optimal</Badge>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between items-center text-slate-300 p-1.5 rounded-lg bg-slate-800/40">
                          <span>Étude quotidienne :</span>
                          <span className="font-mono text-emerald-400 font-bold">1h30 (2 blocs)</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-300 p-1.5 rounded-lg bg-slate-800/40">
                          <span>Pause obligatoire :</span>
                          <span className="font-mono text-sky-300 font-bold">15 min relax</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-300 p-1.5 rounded-lg bg-slate-800/40">
                          <span>Soirée libre dès :</span>
                          <span className="font-mono text-blue-400 font-bold">19:30</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="glow"
                      size="sm"
                      onClick={() => {
                        onSelectPreset(activePreset.id);
                        onStartApp();
                      }}
                      className="w-full mt-3 cursor-pointer text-xs font-bold py-2.5"
                    >
                      Utiliser ce Modèle ({activePreset.name})
                    </Button>
                  </div>

                </div>
              </div>
            ) : (
              /* BEFORE STATE: Interactive, Playful & Luxurious */
              <div className="p-4 sm:p-8 text-center space-y-6 max-w-2xl mx-auto">
                
                {/* Warning Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold animate-bounce-subtle">
                  <Flame className="w-4 h-4 text-rose-400" />
                  <span>Le piège de l'organisation classique sans méthode</span>
                </div>

                {/* Animated Stat with scroll trigger */}
                <div className="space-y-2">
                  <div className="text-5xl sm:text-7xl font-black text-rose-400 font-mono tracking-tight flex items-center justify-center">
                    <AnimatedCounter value={82} suffix="%" className="text-rose-400 drop-shadow-md" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black text-white">
                    des étudiants révisent dans l'urgence la veille des examens
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
                    Sans découpage espacé, le cerveau oublie 70% d'un cours en 48 heures. Cliquez sur les situations ci-dessous pour voir ce qui arrive :
                  </p>
                </div>

                {/* Interactive Touchable Problem Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-left">
                  
                  {/* Card 1 */}
                  <div 
                    onClick={() => setActiveProblemId(activeProblemId === 1 ? null : 1)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer interactive-pill ${
                      activeProblemId === 1 
                        ? 'bg-rose-950/40 border-rose-500 shadow-md shadow-rose-950/50' 
                        : 'bg-slate-900/70 border-slate-800 hover:border-rose-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg">😫</span>
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                    </div>
                    <p className="text-xs font-bold text-white mt-1.5">Nuit blanche à 3h</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {activeProblemId === 1 
                        ? '⚠️ Perte de 45% de la mémoire le lendemain au réveil.' 
                        : 'Toucher pour voir l\'impact'}
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div 
                    onClick={() => setActiveProblemId(activeProblemId === 2 ? null : 2)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer interactive-pill ${
                      activeProblemId === 2 
                        ? 'bg-rose-950/40 border-rose-500 shadow-md shadow-rose-950/50' 
                        : 'bg-slate-900/70 border-slate-800 hover:border-rose-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg">⚡</span>
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <p className="text-xs font-bold text-white mt-1.5">Impasse coef 4</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {activeProblemId === 2 
                        ? '⚠️ Risque d\'élimination et rattrapages assurés.' 
                        : 'Toucher pour voir l\'impact'}
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div 
                    onClick={() => setActiveProblemId(activeProblemId === 3 ? null : 3)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer interactive-pill ${
                      activeProblemId === 3 
                        ? 'bg-rose-950/40 border-rose-500 shadow-md shadow-rose-950/50' 
                        : 'bg-slate-900/70 border-slate-800 hover:border-rose-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg">📚</span>
                      <AlertTriangle className="w-3.5 h-3.5 text-sky-400" />
                    </div>
                    <p className="text-xs font-bold text-white mt-1.5">Planning rigide</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {activeProblemId === 3 
                        ? '⚠️ Abandon après 4 jours et culpabilité mentale.' 
                        : 'Toucher pour voir l\'impact'}
                    </p>
                  </div>

                </div>

                {/* Big Glowing Button: "Voir la solution KONAN" */}
                <div className="pt-2">
                  <Button
                    variant="glow"
                    size="lg"
                    rightIcon={<Sparkles className="w-5 h-5 text-sky-300" />}
                    onClick={() => setSelectedDemoTab('after')}
                    className="w-full sm:w-auto py-4 px-8 text-sm sm:text-base font-extrabold cursor-pointer shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all"
                  >
                    ✨ Voir la solution KONAN
                  </Button>
                </div>

              </div>
            )}
          </Card>
        </div>

        {/* 4 CORE VALUE PILLARS - Interactive Luxurious Cards */}
        <div className="space-y-8 sm:space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Pourquoi KONAN transforme votre façon d'étudier
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Conçu selon les neurosciences de l'apprentissage et l'optimisation du rythme biologique.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            <Card hoverEffect className="p-5 space-y-3 card-luxury group">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">Import & Grille Visuelle</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Renseignez vos cours magistraux, TD et TP en quelques clics ou chargez un modèle académique prédéfini prêt à l'emploi.
              </p>
            </Card>

            <Card hoverEffect className="p-5 space-y-3 card-luxury group">
              <div className="w-10 h-10 rounded-xl bg-sky-600/20 text-sky-400 flex items-center justify-center border border-sky-500/30 group-hover:scale-110 transition-transform">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">Équilibre Intelligent</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                L'organisation croise coefficients, difficulté ressentie et temps de repos pour allouer les meilleures plages d'étude sans épuisement.
              </p>
            </Card>

            <Card hoverEffect className="p-5 space-y-3 card-luxury group">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">Mode Focus Immersif</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Minuteur Pomodoro / Deep Work synchronisé avec chaque session, objectifs clairs et validation d'avancement sans distraction.
              </p>
            </Card>

            <Card hoverEffect className="p-5 space-y-3 card-luxury group">
              <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center border border-amber-500/30 group-hover:scale-110 transition-transform">
                <BarChart className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">Suivi & Anti-Burnout</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mesurez votre temps réel d'étude, ajustez vos charges quotidiennes et suivez votre indice de maîtrise par matière.
              </p>
            </Card>

          </div>
        </div>

        {/* PRICING PLANS SECTION (KONAN, KONAN PRO, KONAN PLUS) */}
        <PricingSection onSelectPlan={() => onStartApp()} />

        {/* BOTTOM CALL TO ACTION */}
        <div className="relative rounded-3xl p-6 sm:p-12 overflow-hidden border border-blue-500/30 bg-gradient-to-br from-blue-950/50 via-slate-900 to-slate-950 text-center space-y-4 sm:space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Prêt à reprendre le contrôle de votre semestre ?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Connectez votre compte Google et générez votre premier planning d'étude personnalisé dès maintenant.
            </p>
          </div>
          <Button
            variant="glow"
            size="lg"
            rightIcon={<ChevronRight className="w-5 h-5" />}
            onClick={onStartApp}
            className="cursor-pointer shadow-xl text-sm sm:text-base px-6 sm:px-8 py-3.5 font-bold w-full sm:w-auto hover:scale-105 active:scale-95 transition-all"
          >
            Commencer avec Google & KONAN
          </Button>
        </div>

      </div>
    </div>
  );
};
