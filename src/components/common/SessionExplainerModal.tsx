import React from 'react';
import { 
  X, 
  Brain, 
  Target, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Clock, 
  BookOpen, 
  Flame,
  Layers
} from 'lucide-react';
import type { SessionType } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { useLanguage, t } from '../../lib/i18n';

interface SessionExplainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionType: SessionType | null;
}

interface MethodInfo {
  titleFr: string;
  titleEn: string;
  badgeVariant: 'primary' | 'cyan' | 'emerald' | 'amber' | 'purple';
  icon: React.ComponentType<{ className?: string }>;
  summaryFr: string;
  summaryEn: string;
  stepsFr: string[];
  stepsEn: string[];
  neuroTipFr: string;
  neuroTipEn: string;
}

const METHODS_DATA: Record<SessionType, MethodInfo> = {
  spaced_review: {
    titleFr: 'Spaced Review (Répétition Espacée)',
    titleEn: 'Spaced Review (Spaced Repetition)',
    badgeVariant: 'primary',
    icon: Clock,
    summaryFr: 'Ancrer durablement les concepts clés dans votre mémoire à long terme en espaçant les rappels au moment précis où la courbe de l\'oubli commence à chuter (J+0, J+3, J+7).',
    summaryEn: 'Anchor core concepts permanently into long-term memory by spacing reviews at the exact moments when Ebbinghaus\' forgetting curve begins to drop (Day 0, Day 3, Day 7).',
    stepsFr: [
      '1. Ne relisez PAS passivement vos notes ou votre polycopié.',
      '2. Prenez une feuille vierge et réécrivez de mémoire les théorèmes, formules et définitions vus en cours.',
      '3. Ouvrez votre support uniquement après pour confronter votre rappel aux erreurs et omissions.',
      '4. Concentrez votre effort sur les 20% de points qui ont résisté à votre mémoire.',
    ],
    stepsEn: [
      '1. Do NOT passively reread your slides or textbooks.',
      '2. Take a blank sheet of paper and write down all formulas, theorems, and definitions from memory.',
      '3. Open your course materials only afterward to check for gaps and errors in red ink.',
      '4. Focus the remainder of the session on the 20% of concepts you forgot.',
    ],
    neuroTipFr: '🧠 Règle d\'or : La relecture passive donne l\'illusion de savoir. Seul l\'effort cognitif de recherche mentale consolide les connexions synaptiques.',
    neuroTipEn: '🧠 Golden Rule: Passive rereading generates fluency illusion. Only the cognitive strain of memory retrieval creates lasting synaptic consolidation.',
  },

  exercises: {
    titleFr: 'Pratique & Annales (Résolution d\'Exercices)',
    titleEn: 'Practice & Past Papers (Problem Solving)',
    badgeVariant: 'cyan',
    icon: Target,
    summaryFr: 'Passer de l\'assimilation théorique à la maîtrise réflexe en appliquant les méthodes sur des énoncés types et de vrais sujets d\'examens.',
    summaryEn: 'Transition from theoretical comprehension to automatic mastery by applying methods to benchmark problem sets and genuine past exams.',
    stepsFr: [
      '1. Sélectionnez 2 ou 3 exercices progressifs (un exercice d\'application directe puis une annale d\'examen).',
      '2. Lancez le chronomètre et isolez-vous sans consulter le corrigé à l\'avance.',
      '3. Si vous bloquez, écrivez précisément ce qui vous bloque avant de regarder un indice minimal.',
      '4. Rédigez la solution complète et comparez-la pas à pas avec le barème officiel.',
    ],
    stepsEn: [
      '1. Pick 2 to 3 progressive problems (one standard application problem followed by a past paper task).',
      '2. Start a countdown timer and work without looking at the solution manual.',
      '3. If stuck, explicitly write down what is blocking you before checking a minimal hint.',
      '4. Write out the final step-by-step resolution and grade it against the official mark scheme.',
    ],
    neuroTipFr: '🎯 Règle d\'or : Ne lisez jamais la correction en pensant "oui c\'est logique". Refaites immédiatement l\'exercice intégralement sans aide 24h plus tard.',
    neuroTipEn: '🎯 Golden Rule: Never read the answer key thinking "that makes sense". Re-solve the entire problem from scratch without assistance 24 hours later.',
  },

  deep_summary: {
    titleFr: 'Synthèse & Fiche (Cartographie Mentale)',
    titleEn: 'Summary Sheet & Deep Synthesis',
    badgeVariant: 'purple',
    icon: Layers,
    summaryFr: 'Condenser un chapitre touffu en une structure visuelle synthétique (1 à 2 pages max) articulant les principes premiers, relations de cause à effet et pièges classiques.',
    summaryEn: 'Condense a dense lecture into a high-impact 1-to-2 page mental architecture detailing first principles, causal links, and common pitfalls.',
    stepsFr: [
      '1. Isolez les 5 à 7 notions piliers sans lesquelles le reste du chapitre s\'effondre.',
      '2. Utilisez des schémas explicatifs, des tableaux comparatifs et un code couleur rigoureux.',
      '3. Interdiction de recopier mot pour mot : reformulez avec vos propres mots clés.',
      '4. Terminez par une boîte "Pièges fréquents à l\'examen".',
    ],
    stepsEn: [
      '1. Identify the 5 to 7 foundational pillars without which the rest of the chapter fails.',
      '2. Use visual diagrams, comparative tables, and strict hierarchical color-coding.',
      '3. Avoid verbatim copying: rewrite and synthesize in your own analytical words.',
      '4. Conclude with a dedicated "Common Exam Pitfalls" box.',
    ],
    neuroTipFr: '💡 Règle d\'or : Une fiche n\'est pas un cours miniature. C\'est un déclencheur mnésique. Si elle dépasse 2 pages, vous n\'avez pas encore fait l\'effort de synthèse.',
    neuroTipEn: '💡 Golden Rule: A cheat sheet is not a miniature book. It is a memory trigger. If it exceeds 2 pages, true synthesis has not yet occurred.',
  },

  flashcards: {
    titleFr: 'Active Recall (Rappel Actif & Auto-évaluation)',
    titleEn: 'Active Recall (Closed-Book Self-Testing)',
    badgeVariant: 'emerald',
    icon: Brain,
    summaryFr: 'Interroger activement le cerveau via des questions ciblées sans aucune aide extérieure pour transformer la mémoire de travail en mémoire permanente.',
    summaryEn: 'Challenge your brain with targeted questions without external prompts to transfer insights from working memory into permanent storage.',
    stepsFr: [
      '1. Prenez vos cartes (physiques ou numériques) avec la question au recto et la réponse au verso.',
      '2. Lisez la question et formulez obligatoirement la réponse à haute voix ou par écrit avant de vérifier.',
      '3. Si vous avez réussi avec aisance, classez la carte dans le bac "J+7".',
      '4. Si vous avez hésité ou échoué, remettez-la en tête de pile pour la retester en fin de séance.',
    ],
    stepsEn: [
      '1. Take your flashcards (physical or digital) featuring prompt on the front and answer on the back.',
      '2. Read the prompt and verbally speak or write the answer before flipping.',
      '3. If answered effortlessly, categorize the card into the "Day +7" review bucket.',
      '4. If hesitant or incorrect, place it back at the front of the deck to re-test before concluding.',
    ],
    neuroTipFr: '⚡ Règle d\'or : La rétention s\'active lors de l\'effort de rappel, pas lors de la vérification. Laissez à votre cerveau au moins 10 secondes pour chercher avant de retourner la carte.',
    neuroTipEn: '⚡ Golden Rule: Consolidation triggers during the retrieval attempt, not during verification. Give your brain at least 10 seconds of focused search before flipping.',
  },

  exam_simulation: {
    titleFr: 'Test Chrono (Simulation d\'Examen)',
    titleEn: 'Timed Mock Exam (Strict Simulation)',
    badgeVariant: 'amber',
    icon: Flame,
    summaryFr: 'S\'entraîner en conditions réelles d\'examen pour acclimater le système nerveux au stress, calibrer sa vitesse d\'écriture et valider l\'endurance cognitive.',
    summaryEn: 'Train under strict real exam conditions to calibrate mental pacing, stress tolerance, and multi-hour cognitive endurance.',
    stepsFr: [
      '1. Éteignez votre téléphone et retirez tout document du bureau.',
      '2. Programmez un compte à rebours rigide équivalent au temps d\'examen réel.',
      '3. Parcourez l\'intégralité du sujet pendant 3 minutes pour hiérarchiser les questions les plus rentables.',
      '4. Ne vous laissez pas paralyser par une question difficile : sautez-la et revenez-y à la fin.',
    ],
    stepsEn: [
      '1. Turn off your phone and clear all reference material from your desk.',
      '2. Set a strict countdown timer matching realistic exam duration.',
      '3. Scan the entire prompt for 3 minutes to triage highest-yield problems first.',
      '4. Do not let one difficult question stall you: skip it and return with remaining time.',
    ],
    neuroTipFr: '🛡️ Règle d\'or : La gestion du temps est une compétence distincte de la connaissance théorique. S\'entraîner sous chrono évite la panique le jour J.',
    neuroTipEn: '🛡️ Golden Rule: Time management is an autonomous skill distinct from factual knowledge. Timed practice inoculates against exam-day panic.',
  },

  consolidation: {
    titleFr: 'Consolidation & Analyse des Erreurs',
    titleEn: 'Consolidation & Error Analysis',
    badgeVariant: 'primary',
    icon: BookOpen,
    summaryFr: 'Traquer vos zones d\'ombre récurrentes et réparer les failles conceptuelles identifiées lors des séances précédentes.',
    summaryEn: 'Diagnose recurrent weaknesses and patch conceptual blindspots discovered during previous study sessions.',
    stepsFr: [
      '1. Ouvrez votre carnet d\'erreurs des devoirs ou simulations précédentes.',
      '2. Pour chaque erreur, identifiez la cause : inattention, lacune de cours ou mauvaise méthode ?',
      '3. Réeffectuez la démonstration ou l\'exercice problématique de bout en bout.',
      '4. Notez la règle d\'or ou le mémo technique qui empêchera cette erreur de se reproduire.',
    ],
    stepsEn: [
      '1. Open your error log from previous quizzes or mock assignments.',
      '2. Diagnose root causes: calculation slips, missing theory, or misapplied theorems?',
      '3. Re-execute the problem from scratch until every transition is crystal-clear.',
      '4. Formulate the specific rule or mental cue that prevents future repetition.',
    ],
    neuroTipFr: '🔍 Règle d\'or : Une erreur analysée et corrigée vaut 10 exercices réussis par hasard. C\'est là que réside votre véritable marge de progression.',
    neuroTipEn: '🔍 Golden Rule: A diagnosed and corrected error yields 10x more progress than a problem solved by luck. This is where top grades are built.',
  },
};

export const SessionExplainerModal: React.FC<SessionExplainerModalProps> = ({
  isOpen,
  onClose,
  sessionType,
}) => {
  const [lang] = useLanguage();

  if (!isOpen || !sessionType) return null;

  const data = METHODS_DATA[sessionType] || METHODS_DATA.spaced_review;
  const Icon = data.icon;
  const isEn = lang === 'en';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800/90 shadow-2xl shadow-indigo-950/40 overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/80 bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-cyan-400 shadow-sm">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-white tracking-wide">
                  {isEn ? data.titleEn : data.titleFr}
                </h2>
                <Badge variant={data.badgeVariant} size="sm" dot>
                  {isEn ? 'Active Protocol' : 'Protocole Actif'}
                </Badge>
              </div>
              <p className="text-xs text-slate-400">
                {t('explainerModalTitle', lang)}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 overflow-y-auto flex-1 custom-scrollbar">

          {/* Section 1: En bref / In brief */}
          <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 space-y-1.5">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {t('whatIsIt', lang)}
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {isEn ? data.summaryEn : data.summaryFr}
            </p>
          </div>

          {/* Section 2: Étapes concrètes / Action protocol */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              {t('whatToDo', lang)}
            </span>
            <div className="space-y-2">
              {(isEn ? data.stepsEn : data.stepsFr).map((step, idx) => (
                <div 
                  key={idx} 
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="text-cyan-400 font-bold font-mono shrink-0">#{idx + 1}</span>
                  <span>{step.replace(/^\d+\.\s*/, '')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Conseil Neurocognitif / Neuro tip */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1.5">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              {t('neuroTip', lang)}
            </span>
            <p className="text-xs sm:text-sm text-amber-100 leading-relaxed font-medium">
              {isEn ? data.neuroTipEn : data.neuroTipFr}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-4 border-t border-slate-800/80 bg-slate-900/40">
          <Button
            variant="primary"
            size="sm"
            onClick={onClose}
            className="cursor-pointer font-bold text-xs"
          >
            {t('understood', lang)}
          </Button>
        </div>
      </div>
    </div>
  );
};
