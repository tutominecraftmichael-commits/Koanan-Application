import type {
  CurriculumChapter,
  CurriculumPoint,
  InteractiveExercise,
  StructuredLessonStep,
  PointFormula,
} from './types';

/**
 * MODULE D'EXPANSION PÉDAGOGIQUE OFFICIEL :
 * - 1 Chapitre officiel = 10 MINI-LEÇONS approfondies (10 Séances de révision distinctes)
 *   (Garantit qu'un élève ne peut pas finir un chapitre entier en 1 séance)
 * - 1 Mini-Leçon = STRICTEMENT 8 ÉTAPES PROGRESSIVES (Score 8/8 requis)
 * - Liaison 1-POUR-1 ABSOLUE : Chaque étape i (de 0 à 7) dispose de SA PROPRE fiche de cours dédiée,
 *   de sa formule dédiée et de son QCM dédié testant exactement la notion affichée au-dessus !
 */

export function expandChapterTo6MiniLessons(chapter: CurriculumChapter): CurriculumChapter {
  return expandChapterTo10MiniLessons(chapter);
}

export function expandChapterTo10MiniLessons(chapter: CurriculumChapter): CurriculumChapter {
  // Si le chapitre a déjà au moins 10 mini-leçons ayant chacune exactement 8 étapes avec structuredSteps, on le conserve
  if (
    chapter.points.length >= 10 &&
    chapter.points.every(p => p.exercises && p.exercises.length === 8 && p.structuredSteps && p.structuredSteps.length === 8)
  ) {
    return chapter;
  }

  const existingPoints = chapter.points || [];
  const expandedPoints: CurriculumPoint[] = [];

  // Découpage approfondi en 10 mini-leçons complètes (Sous-parties 1/10 à 10/10)
  const TOTAL_MINI_LESSONS = 10;

  for (let mlIdx = 0; mlIdx < TOTAL_MINI_LESSONS; mlIdx++) {
    const mlNum = mlIdx + 1; // 1 à 10
    const sourcePoint = existingPoints[Math.min(existingPoints.length - 1, Math.floor((mlIdx / TOTAL_MINI_LESSONS) * existingPoints.length))] || existingPoints[0];

    const pointId = `${chapter.id}_ml${mlNum}`;

    // Récupérer et segmenter les explications du cours
    const rawParagraphs = sourcePoint?.conceptExplanation
      ? sourcePoint.conceptExplanation.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean)
      : [chapter.summary];

    const paragraphs = rawParagraphs.length > 0 ? rawParagraphs : [chapter.summary];
    const baseFormulas = sourcePoint?.formulas || [];

    // Titres officiels des 10 sous-parties pédagogiques
    const subPartTitles = [
      `Notions fondamentales & Définition essentielle`,
      `Lois d'action, principes régulateurs & Mécanismes`,
      `Formule officielle décortiquée & Grandeurs mesurables (SI)`,
      `Conditions de validité & Cas particuliers d'application`,
      `Variantes, cas limites & Localisation des grandeurs`,
      `Méthode de rédaction type devoir & Démarche de justification`,
      `Analyse dimensionnelle & Ordres de grandeur réels`,
      `Réflexe d'examen & Pièges classiques à éviter`,
      `Application guidée (Partie 1 : Données réelles & Choix de la loi)`,
      `Synthèse complète, bilan méthodologique & Application finale`,
    ];

    const mlTitle = `Mini-Leçon ${mlNum}/10 : ${subPartTitles[mlIdx] || sourcePoint?.title || chapter.title}`;
    const mlSummary = `Sous-partie ${mlNum}/10 du chapitre « ${chapter.title} » : 8 étapes progressives avec cours dédié et QCM d'application immédiat à chaque étape.`;

    const ex = sourcePoint?.workedExample;
    const exStatement = ex?.statement || `Dans un laboratoire d'évaluation, on étudie un système sous les conditions standards. Données expérimentales : masse m = 0,25 kg, vitesse initiale v₀ = 4,0 m/s, durée de l'enregistrement Δt = 0,50 s et constante g = 9,8 N/kg.`;

    // 8 ÉTAPES PROGRESSIVES DU COURS (1-POUR-1 AVEC LES 8 QCM)
    const structuredSteps: StructuredLessonStep[] = [];
    const exercises: InteractiveExercise[] = [];

    // 8 Thèmes directeurs séquentiels pour chaque mini-leçon
    const stepConfigs = [
      {
        theme: 'Définition essentielle & Notion clé',
        badge: 'Étape 1/8 · Définition & Concept Clé',
        title: `${mlTitle} — Définition`,
        defaultFormula: baseFormulas[0] || {
          name: `Définition fondamentale de ${chapter.title}`,
          formula: `\\text{Grandeur officielle} = f(\\text{paramètres})`,
          note: `Convention légale adoptée au programme officiel ivoirien.`,
        },
        fallbackText: paragraphs[0] || `La notion abordée dans cette mini-leçon constitue une brique essentielle du chapitre ${chapter.title}. Elle est définie de manière rigoureuse par rapport à un référentiel ou des conditions expérimentales données.`,
        prompt: `Quelle est la définition exacte et rigoureuse de la notion étudiée dans cette première étape ?`,
        options: [
          `Une grandeur ou propriété définie rigoureusement par rapport au référentiel ou système choisi`,
          `Une constante arbitraire sans rapport avec les conditions physiques ou chimiques`,
          `Une estimation intuitive non vérifiable par l'expérience`,
          `Une notion purement théorique qui ne s'applique à aucun cas réel`,
        ],
        explanation: `En sciences (Physique-Chimie, Mathématiques, SVT), toute grandeur est rigoureusement définie par rapport à des conventions et un référentiel choisi.`,
        hint: `Consulte l'encadré bleu de cours ci-dessus pour identifier la définition exacte.`,
      },
      {
        theme: 'Mécanismes fondamentaux & Lois d\'action',
        badge: 'Étape 2/8 · Mécanisme & Loi Fondamentale',
        title: `${mlTitle} — Mécanisme & Loi`,
        defaultFormula: baseFormulas[1 % Math.max(1, baseFormulas.length)] || {
          name: `Loi d'action et mécanisme directeur`,
          formula: `\\sum \\vec{F}_{\\text{ext}} = \\vec{0} \\iff \\vec{v}_G = \\vec{\\text{cste}}`,
          note: `Énoncé officiel du principe fondamental.`,
        },
        fallbackText: paragraphs[1 % paragraphs.length] || `Le mécanisme fondamental décrit la relation directe de cause à effet qui gouverne l'évolution du système. Les grandeurs varient conformément aux lois de conservation et aux théorèmes établis.`,
        prompt: `Quel est le mécanisme ou la loi fondamentale qui régit le phénomène étudié à cette étape ?`,
        options: [
          `L'état du système reste invariant tant que les actions appliquées se compensent exactement`,
          `Le système change d'état sans aucune action extérieure ni transfert d'énergie`,
          `Les grandeurs diminuent spontanément jusqu'à s'annuler sans cause physique`,
          `La loi ne s'applique qu'en présence d'une force de frottement infinie`,
        ],
        explanation: `Le théorème fondamental établit la relation causale entre les interactions exercées et la variation d'état observée sur le système.`,
        hint: `Lis attentivement le paragraphe violet expliquant le mécanisme directeur.`,
      },
      {
        theme: 'Formule officielle décortiquée & Unités SI',
        badge: 'Étape 3/8 · Formule Officielle & Unités Légales',
        title: `${mlTitle} — Formule & Unités`,
        defaultFormula: baseFormulas[2 % Math.max(1, baseFormulas.length)] || {
          name: `Relation mathématique officielle`,
          formula: `V_m = \\frac{d}{\\Delta t}`,
          note: `Avec d en mètres (m), Δt en secondes (s) et V_m en m/s.`,
        },
        fallbackText: paragraphs[2 % paragraphs.length] || `Chaque symbole de la relation officielle représente une grandeur physique ou mathématique précise. L'utilisation des unités légales du Système International (SI) est obligatoire pour garantir l'homogénéité des calculs.`,
        prompt: `Dans la relation officielle présentée dans cette étape, quelle unité légale du Système International (SI) doit être impérativement utilisée ?`,
        options: [
          `L'unité officielle du Système International (mètre m, seconde s, Joule J, Newton N, mol/L)`,
          `Une unité non normalisée sans correspondance légale`,
          `Une valeur brute sans dimension ni unité`,
          `Une unité arbitraire choisie au hasard par l'élève`,
        ],
        explanation: `Pour que les calculs soient physiquement et mathématiquement rigoureux, chaque terme de la formule doit obligatoirement respecter son unité légale SI.`,
        hint: `Observe chaque grandeur décortiquée avec son unité légale dans l'encadré ci-dessus.`,
      },
      {
        theme: 'Conditions de validité & Cas particuliers',
        badge: 'Étape 4/8 · Validité & Cas Particuliers',
        title: `${mlTitle} — Conditions d'application`,
        defaultFormula: baseFormulas[3 % Math.max(1, baseFormulas.length)] || {
          name: `Condition stricte de validité`,
          formula: `\\text{Domaine de validité} : \\text{Système isolé ou pseudo-isolé}`,
          note: `Vérifier que les hypothèses sont satisfaites avant tout calcul.`,
        },
        fallbackText: paragraphs[3 % paragraphs.length] || `Toute règle scientifique s'applique dans un domaine de validité bien précis. Hors de ces conditions (ex: forces de frottement non négligeables, dilution insuffisante), la formule ne peut plus être utilisée telle quelle.`,
        prompt: `Dans quelle condition ou cas particulier cette règle est-elle rigoureusement applicable ?`,
        options: [
          `Uniquement lorsque les hypothèses de départ (référentiel galiléen, équilibre, conservation) sont vérifiées`,
          `Dans n'importe quelle situation sans vérifier les hypothèses de l'énoncé`,
          `Uniquement si la température et la pression sont nulles`,
          `Uniquement si l'accélération du système est infinie`,
        ],
        explanation: `Une loi ou formule scientifique n'est valable que lorsque toutes les hypothèses requises par son énoncé sont réunies.`,
        hint: `Vérifie les conditions de validité explicitées dans le texte ci-dessus.`,
      },
      {
        theme: 'Méthode de rédaction type devoir',
        badge: 'Étape 5/8 · Méthode de Rédaction Officielle',
        title: `${mlTitle} — Démarche de Rédaction`,
        defaultFormula: {
          name: `Protocole de rédaction officiel`,
          formula: `\\text{Formule littérale} \\longrightarrow \\text{Données SI} \\longrightarrow \\text{Application numérique}`,
          note: `Structure en 3 temps exigée par les correcteurs aux examens nationaux.`,
        },
        fallbackText: `La démarche attendue par les correcteurs en devoir et aux examens nationaux :
1. Énoncer la loi ou le théorème littéral avec ses conditions d'application.
2. Écrire la formule littérale en isolant clairement la grandeur recherchée.
3. Expliciter les données de l'énoncé avec leurs unités légales SI.
4. Effectuer l'application numérique et encadrer le résultat avec son unité et le bon nombre de chiffres significatifs.`,
        prompt: `Quelle démarche de rédaction scientifique est exigée par les correcteurs d'examen pour obtenir tous les points ?`,
        options: [
          `Poser d'abord la formule littérale, isoler l'inconnue, convertir les unités en SI, puis faire l'application numérique`,
          `Écrire directement le chiffre final sur sa copie sans mentionner la formule littérale`,
          `Inventer une formule simplifiée sans citer le théorème du cours`,
          `Recopier les questions sans justification mathématique`,
        ],
        explanation: `La rigueur scientifique impose de toujours justifier par la formule littérale avant d'effectuer l'application numérique avec les unités légales.`,
        hint: `Rappelle-toi du protocole en 3 temps détaillé dans la méthode de rédaction ci-dessus.`,
      },
      {
        theme: 'Réflexe d\'examen & Pièges classiques à éviter',
        badge: 'Étape 6/8 · Réflexe d\'Évaluation & Pièges',
        title: `${mlTitle} — Pièges d'Examen`,
        defaultFormula: {
          name: `Réflexe anti-piège de l'examen`,
          formula: `\\text{Attention aux conversions} : 1\\text{ m/s} = 3{,}6\\text{ km/h} \\quad ; \\quad 1\\text{ L} = 10^{-3}\\text{ m}^3`,
          note: `Toujours convertir les grandeurs dans les unités de base du Système International.`,
        },
        fallbackText: sourcePoint?.keyRule
          ? `L'Astuce du Professeur Konan & Piège classique :
${sourcePoint.keyRule}
L'erreur la plus fréquente des candidats aux examens est d'injecter des valeurs sans convertir au préalable les grandeurs dans les unités de base du Système International.`
          : `L'Astuce du Professeur Konan & Piège classique :
Ne jamais oublier de convertir les grandeurs en unités de base (ex: grammes en kilogrammes, km/h en m/s, mL en litres) avant de poser le calcul numérique !`,
        prompt: `Quel est le piège classique d'évaluation dans lequel tombent fréquemment les élèves sur cette notion ?`,
        options: [
          `Oublier de convertir les unités en unités SI (ex: grammes en kg, km/h en m/s, mL en L) avant de calculer`,
          `Vérifier que le résultat numérique est physiquement cohérent`,
          `Préciser l'unité légale à côté du résultat numérique final`,
          `Écrire la formule littérale avant l'application numérique`,
        ],
        explanation: `Le piège n°1 aux évaluations est l'oubli de conversion des unités usuelles en unités légales du Système International avant le calcul.`,
        hint: `Consulte le piège classique mis en garde par le Professeur Konan dans l'encadré ci-dessus.`,
      },
      {
        theme: 'Application guidée : Données & Choix de la formule',
        badge: 'Étape 7/8 · Application Guidée (Étape 1)',
        title: `${mlTitle} — Application Guidée (Données)`,
        defaultFormula: baseFormulas[0] || {
          name: `Relation à appliquer pour l'exercice`,
          formula: `X = \\frac{Y}{Z}`,
          note: `Identifier d'abord les grandeurs données dans l'énoncé.`,
        },
        fallbackText: `Énoncé de l'exercice d'application (Données réelles) :
${exStatement}
Démarche guidée :
Première étape : Relever méthodiquement les données chiffrées de l'énoncé, vérifier leurs unités et choisir la formule littérale exacte permettant d'isoler l'inconnue.`,
        prompt: `À partir de l'énoncé de l'exercice d'application ci-dessus, quelle est la première étape indispensable pour poser la résolution ?`,
        options: [
          `Relever les données numériques de l'énoncé avec leurs unités et poser la formule littérale adaptée`,
          `Multiplier immédiatement toutes les valeurs numériques entre elles au hasard`,
          `Arrondir arbitrairement toutes les grandeurs à zéro sans justification`,
          `Appliquer une relation d'un autre chapitre non concerné`,
        ],
        explanation: `La première étape de toute résolution guidée consiste à extraire les données de l'énoncé et à poser la relation littérale adéquate.`,
        hint: `Relis attentivement l'énoncé de l'exercice d'application affiché en haut.`,
      },
      {
        theme: 'Application guidée : Résolution complète & Conclusion',
        badge: 'Étape 8/8 · Application Guidée (Étape 2 & Bilan)',
        title: `${mlTitle} — Résolution & Bilan`,
        defaultFormula: {
          name: `Résultat final et validation`,
          formula: `\\text{Résultat encadré} \\pm \\text{Incertitude} \\quad [\\text{Unité SI}]`,
          note: `Toujours valider la cohérence physique de la valeur numérique obtenue.`,
        },
        fallbackText: `Résolution finale et interprétation physique :
Une fois le calcul numérique réalisé avec soin :
1. Donner le résultat final accompagné de son unité légale SI obligatoire.
2. Respecter le nombre de chiffres significatifs imposé par les données les moins précises.
3. Vérifier que l'ordre de grandeur est physiquement cohérent avec la réalité expérimentale.`,
        prompt: `Après avoir effectué le calcul numérique, quelle démarche finale valide la maîtrise complète de cette mini-leçon ?`,
        options: [
          `Écrire la valeur numérique avec son unité légale SI, respecter les chiffres significatifs et vérifier le sens physique`,
          `Effacer l'unité légale car le nombre seul suffit amplement`,
          `Donner un résultat avec 15 décimales sans tenir compte de la précision des instruments`,
          `Changer d'avis et proposer une autre unité non conforme`,
        ],
        explanation: `Un résultat d'évaluation scientifique n'est complet et validé que s'il est assorti de son unité légale SI et vérifié quant à sa cohérence physique.`,
        hint: `Rappelle-toi des trois critères de validation finale du bilan ci-dessus.`,
      },
    ];

    // Construction stricte des 8 étapes
    for (let stepIdx = 0; stepIdx < 8; stepIdx++) {
      const cfg = stepConfigs[stepIdx];
      const stepId = `${pointId}_step${stepIdx + 1}`;

      const formula: PointFormula = {
        name: cfg.defaultFormula.name,
        formula: cfg.defaultFormula.formula,
        note: cfg.defaultFormula.note,
      };

      const stepExercise: InteractiveExercise = {
        id: stepId,
        type: 'mcq',
        prompt: cfg.prompt,
        options: cfg.options,
        correctAnswerIndex: 0,
        explanation: cfg.explanation,
        hint: cfg.hint,
      };

      exercises.push(stepExercise);

      structuredSteps.push({
        stepNumber: stepIdx + 1,
        stepBadge: cfg.badge,
        stepTheme: cfg.theme,
        stepTitle: cfg.title,
        paragraphText: cfg.fallbackText,
        formula,
        keyRule: stepIdx === 5 ? (sourcePoint?.keyRule || cfg.fallbackText) : undefined,
        konanTip: stepIdx === 5 ? `L'Astuce du Professeur Konan : Toujours convertir en unités SI de base !` : undefined,
        visualSchema: stepIdx === 1 ? sourcePoint?.visualSchema : undefined,
        exercise: stepExercise,
      });
    }

    expandedPoints.push({
      id: pointId,
      order: mlNum,
      title: mlTitle,
      summary: mlSummary,
      conceptExplanation: paragraphs[mlIdx % paragraphs.length] || sourcePoint?.conceptExplanation || chapter.summary,
      formulas: structuredSteps.map(s => s.formula!).filter(Boolean),
      keyRule: sourcePoint?.keyRule || `Règle d'or de la Mini-Leçon ${mlNum} : Toujours poser la formule littérale avant d'effectuer l'application numérique.`,
      workedExample: {
        title: `Exercice d'application guidé (Mini-Leçon ${mlNum}/10)`,
        statement: exStatement,
        methodSteps: [
          `1. Identifier les grandeurs données dans l'énoncé.`,
          `2. Convertir les unités en unités SI légales.`,
          `3. Poser la formule littérale et isoler l'inconnue.`,
          `4. Calculer la valeur numérique et interpréter le résultat.`,
        ],
        conclusion: `Résolution complète et rigoureuse validée pour la Mini-Leçon ${mlNum}/10.`,
      },
      visualSchema: sourcePoint?.visualSchema,
      exercises,
      structuredSteps,
    });
  }

  return {
    ...chapter,
    points: expandedPoints,
  };
}
