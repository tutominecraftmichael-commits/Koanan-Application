import type {
  CurriculumChapter,
  CurriculumPoint,
  InteractiveExercise,
  StructuredLessonStep,
  PointFormula,
} from './types';

/**
 * MODULE PÉDAGOGIQUE OFFICIEL : EXPANSION ET STRUCTURATION DES COURS
 * 
 * RÈGLES STRICTES DU PROJET :
 * 1. ZÉRO MÉLANGE DE MATIÈRES :
 *    - En Mathématiques : 100% pur cours de maths (fonctions, équations, ensembles de définition,
 *      calculs d'images/antécédents, vecteurs, trigonométrie). AUCUNE mention d'unités SI, de km/h,
 *      de physique ou de chimie.
 *    - En Physique : 100% pur cours de physique (forces, mouvements, lois de Newton, travail, électricité).
 *    - En Chimie : 100% pur cours de chimie (atomes, molécules, moles, concentrations, solutions aqueuses).
 *    - En SVT : 100% pur cours de biologie et géologie (craton ivoirien, cellule, mitose, écosystème).
 * 
 * 2. ZÉRO DÉCOUPAGE FORCÉ OU EXPLICATION COUPÉE :
 *    - Chaque étape propose une explication CLAIRE, COMPLÈTE et CONCISE (3 à 5 lignes).
 *    - Jamais de phrase coupée en plein milieu, jamais de "Première étape :" suspendue sans la solution.
 *    - Le cours enseigne exactement la notion et la méthode nécessaires pour répondre au QCM du bas.
 * 
 * 3. COHÉRENCE TOTALE ENTRE LE COURS DU HAUT ET LE QCM DU BAS (Liaison 1-pour-1).
 */

export function expandChapterTo10MiniLessons(chapter: CurriculumChapter): CurriculumChapter {
  return expandChapterTo6MiniLessons(chapter);
}

export function expandChapterTo6MiniLessons(chapter: CurriculumChapter): CurriculumChapter {
  const existingPoints = chapter.points || [];
  if (existingPoints.length === 0) {
    return chapter;
  }

  // Si le chapitre dispose déjà de points structurés à 8 étapes sans mélange, on vérifie leur intégrité
  const isAlreadyStructured = existingPoints.every(
    p => p.exercises && p.exercises.length === 8 && p.structuredSteps && p.structuredSteps.length === 8
  );
  if (isAlreadyStructured) {
    return chapter;
  }

  const subject = chapter.subjectId;
  const isChimie = subject === 'physique_chimie' && /chimie|atome|mole|solution|ion|acide|base|dosage|reaction|cuivre|chlorure/i.test(chapter.title);

  // Parcourir chaque point naturel du chapitre et structurer ses 8 étapes pas-à-pas
  const updatedPoints: CurriculumPoint[] = existingPoints.map((point) => {
    const rawExercises: InteractiveExercise[] = Array.isArray(point.exercises) && point.exercises.length > 0
      ? point.exercises
      : (point.exercise ? [point.exercise] : []);

    const pointFormulas: PointFormula[] = point.formulas || [];

    // Garantir exactement 8 exercices pour ce point
    const exercises: InteractiveExercise[] = [];
    const structuredSteps: StructuredLessonStep[] = [];

    for (let stepIdx = 0; stepIdx < 8; stepIdx++) {
      const stepNum = stepIdx + 1;
      const stepId = `${point.id}_step${stepNum}`;

      // 1. Sélection de l'exercice (priorité absolue aux exercices authentiques du point)
      let ex: InteractiveExercise;
      if (stepIdx < rawExercises.length && rawExercises[stepIdx]) {
        ex = {
          ...rawExercises[stepIdx],
          id: stepId,
        };
      } else {
        // Compléter avec un exercice authentique cohérent avec la matière
        ex = generateSubjectSpecificExercise(subject, isChimie, chapter, point, stepNum, stepId);
      }
      exercises.push(ex);

      // 2. Génération de l'explication de cours claire, complète et courte (Liaison 1-pour-1)
      const { title, paragraphText, formula, konanTip } = buildStepPedagogy(
        ex,
        chapter,
        point,
        stepIdx,
        pointFormulas
      );

      structuredSteps.push({
        stepNumber: stepNum,
        stepBadge: `Étape ${stepNum}/8 · ${title}`,
        stepTheme: title,
        stepTitle: title,
        paragraphText,
        formula,
        konanTip,
        keyRule: point.keyRule,
        visualSchema: stepIdx === 1 ? point.visualSchema : undefined,
        exercise: ex,
      });
    }

    return {
      ...point,
      exercises,
      structuredSteps,
      summary: point.summary || chapter.summary,
    };
  });

  return {
    ...chapter,
    points: updatedPoints,
  };
}

/**
 * Construit pour chaque étape le cours clair, court et complet (3 à 5 lignes),
 * la formule dédiée et l'astuce de Konan, dans le respect STRICT de la matière.
 */
function buildStepPedagogy(
  exercise: InteractiveExercise,
  chapter: CurriculumChapter,
  point: CurriculumPoint,
  stepIdx: number,
  formulas: PointFormula[]
): {
  title: string;
  paragraphText: string;
  formula: PointFormula;
  konanTip?: string;
} {
  const subject = chapter.subjectId;
  const isChimie = subject === 'physique_chimie' && /chimie|atome|mole|solution|ion|acide|base|dosage|reaction|cuivre|chlorure/i.test(chapter.title);
  const prompt = exercise.prompt || '';
  const explanation = (exercise.explanation || '').trim();

  // =========================================================================
  // 1. BRANCHE MATHÉMATIQUES (100% PURE MATHS — ZÉRO PHYSIQUE — ZÉRO SI)
  // =========================================================================
  if (subject === 'maths') {
    // Cas A : Ensemble de définition d'une fonction rationnelle (dénominateur)
    if (/dénominateur|rationnelle|fraction|Df = ℝ \\/i.test(prompt) || /dénominateur|Q\(x\)/i.test(explanation)) {
      return {
        title: 'Ensemble de définition (Fonction rationnelle)',
        paragraphText: `Une fonction rationnelle f(x) = P(x) / Q(x) est un quotient de deux polynômes.
• Règle d'existence : Une fraction est définie dans ℝ si et seulement si son dénominateur est strictement non nul : Q(x) ≠ 0.
• Méthode pratique : Résoudre l'équation Q(x) = 0 pour identifier la ou les valeurs interdites a.
• Conclusion : Ces valeurs sont exclues de l'ensemble de définition : Df = ℝ \\ {a} = ]-∞ ; a[ ∪ ]a ; +∞[.`,
        formula: {
          name: "Condition d'existence (Fraction rationnelle)",
          formula: "D_f = \\{x \\in \\mathbb{R} \\mid Q(x) \\neq 0\\}",
          note: "Les valeurs qui annulent le dénominateur sont rigoureusement exclues de Df.",
        },
        konanTip: "L'Astuce du Professeur Konan : Résoudre l'équation du dénominateur = 0 pour trouver directement la valeur interdite !",
      };
    }

    // Cas B : Racine carrée au dénominateur : 1 / √(U(x))
    if ((/dénominateur/i.test(prompt) && /√|racine/i.test(prompt)) || (/au dénominateur/i.test(explanation) && /racine/i.test(explanation))) {
      return {
        title: 'Ensemble de définition (Racine carrée au dénominateur)',
        paragraphText: `Pour une fonction de la forme f(x) = 1 / √(U(x)), deux conditions se cumulent :
• Double contrainte : L'expression sous la racine doit être positive (U(x) ≥ 0) ET le dénominateur ne peut pas s'annuler (U(x) ≠ 0).
• Règle combinée : L'expression sous le radical doit être STRICTEMENT positive : U(x) > 0.
• Conclusion : On résout l'inéquation stricte U(x) > 0 (crochets obligatoirement ouverts sur les bornes).`,
        formula: {
          name: "Condition d'existence (Radical au dénominateur)",
          formula: "D_f = \\{x \\in \\mathbb{R} \\mid U(x) > 0\\}",
          note: "Inégalité stricte : la valeur annulant la racine est exclue (crochet ouvert).",
        },
        konanTip: "L'Astuce du Professeur Konan : Lorsque la racine est au dénominateur, utilise toujours > 0 (inégalité stricte) !",
      };
    }

    // Cas C : Ensemble de définition d'une fonction racine carrée √(U(x))
    if (/racine|radical|√|Dg = \[/i.test(prompt) || /radical|racine/i.test(explanation)) {
      return {
        title: 'Ensemble de définition (Fonction racine carrée)',
        paragraphText: `La racine carrée d'un nombre réel n'existe dans ℝ que si ce nombre est positif ou nul.
• Règle d'existence : Pour g(x) = √(U(x)), l'expression sous la racine doit être positive ou nulle : U(x) ≥ 0.
• Méthode pratique : Poser et résoudre l'inéquation U(x) ≥ 0 d'inconnue x.
• Conclusion : L'ensemble des solutions de cette inéquation constitue l'ensemble de définition Dg.`,
        formula: {
          name: "Condition d'existence (Radical)",
          formula: "D_g = \\{x \\in \\mathbb{R} \\mid U(x) \\ge 0\\}",
          note: "Le radicande doit obligatoirement être positif ou nul dans ℝ.",
        },
        konanTip: "L'Astuce du Professeur Konan : Résoudre l'inéquation avec ≥ 0 et penser au crochet fermé sur la borne !",
      };
    }

    // Cas D : Calcul algébrique de l'image d'un nombre
    if (/image de|calculer l'image/i.test(prompt) || /remplace x par/i.test(explanation)) {
      return {
        title: "Calcul algébrique de l'image d'un nombre",
        paragraphText: `L'image d'un réel a par une fonction f est le résultat obtenu en remplaçant la variable x par a.
• Notation mathématique : L'image se note f(a).
• Méthode pratique : Substituer x par sa valeur numérique dans l'expression f(x) et calculer avec soin.
• Propriété fondamentale : Tout réel a de l'ensemble de définition possède une UNIQUE image par f.`,
        formula: {
          name: "Calcul d'image par substitution",
          formula: "y = f(a) \\quad (\\text{remplacer } x \\text{ par } a)",
          note: "Attention aux priorités opératoires et aux parenthèses pour les nombres négatifs : (-2)² = +4.",
        },
        konanTip: "L'Astuce du Professeur Konan : Toujours entourer le nombre remplacé de parenthèses : (-2)² ≠ -2² !",
      };
    }

    // Cas E : Calcul algébrique des antécédents d'un nombre
    if (/antécédent/i.test(prompt) || /résout.*=/i.test(explanation)) {
      return {
        title: "Calcul algébrique des antécédents d'un nombre",
        paragraphText: `Un antécédent d'un nombre b par f est une valeur de x dont l'image vaut b.
• Méthode pratique : Poser et résoudre l'équation f(x) = b d'inconnue x dans l'ensemble de définition Df.
• Propriété essentielle : Un réel b peut avoir zéro, un ou plusieurs antécédents.
• Conclusion : Seules les solutions de l'équation appartenant effectivement à Df sont des antécédents.`,
        formula: {
          name: "Équation aux antécédents",
          formula: "f(x) = b \\quad (\\text{résoudre dans } D_f)",
          note: "Si x² = k avec k > 0, il y a deux antécédents symétriques : x = √k et x = -√k.",
        },
        konanTip: "L'Astuce du Professeur Konan : Quand x² = 9, il y a deux antécédents : x = 3 et x = -3 !",
      };
    }

    // Cas F : Test de la droite verticale (Reconnaissance graphique)
    if (/droite verticale|courbe.*représente.*fonction/i.test(prompt)) {
      return {
        title: 'Test de la droite verticale (Reconnaissance graphique)',
        paragraphText: `Par définition, une relation est une fonction si chaque abscisse x possède AU PLUS une image y.
• Règle graphique : Une courbe dans le plan représente une fonction si et seulement si toute droite verticale d'équation x = k coupe la courbe en au plus un point.
• Règle d'exclusion : Si une droite verticale coupe la courbe en deux points ou plus, la courbe ne représente pas une fonction.`,
        formula: {
          name: "Critère graphique d'une fonction",
          formula: "\\forall k \\in \\mathbb{R}, \\quad (x = k) \\cap (C_f) \\le 1 \\text{ point}",
          note: "Garantit l'unicité de l'image pour chaque valeur de la variable x.",
        },
        konanTip: "L'Astuce du Professeur Konan : Fais glisser une règle verticale imaginaire : elle ne doit jamais couper la courbe 2 fois !",
      };
    }

    // Cas G : Sens de variation et extrema
    if (/croissante|décroissante|variation|maximum|minimum/i.test(prompt) || /sens de variation/i.test(explanation)) {
      return {
        title: 'Sens de variation & Extrema',
        paragraphText: `Le sens de variation décrit l'évolution des images lorsque x augmente :
• Fonction croissante : Elle conserve l'ordre. Si a < b, alors f(a) ≤ f(b).
• Fonction décroissante : Elle inverse l'ordre. Si a < b, alors f(a) ≥ f(b).
• Extrema : Le maximum M est la plus grande valeur atteinte par f(x) ; le minimum m est la plus petite.`,
        formula: {
          name: "Sens de variation d'une fonction",
          formula: "a < b \\implies f(a) \\le f(b) \\text{ (croissante)} \\quad ; \\quad a < b \\implies f(a) \\ge f(b) \\text{ (décroissante)}",
          note: "Une fonction décroissante inverse obligatoirement le sens des inégalités.",
        },
        konanTip: "L'Astuce du Professeur Konan : Sur un intervalle décroissant, attention à bien inverser le sens de l'inégalité !",
      };
    }

    // Cas H : Vecteurs et repères du plan
    if (/vecteur|norme|colinéaire|orthogonal|coordonnées/i.test(prompt) || /vecteur/i.test(explanation)) {
      return {
        title: 'Géométrie vectorielle & Coordonnées',
        paragraphText: `Dans un repère orthonormé (O, i, j) du plan :
• Vecteur u(x ; y) : Sa norme vaut ||u|| = √(x² + y²).
• Vecteur AB : A pour coordonnées AB(xB − xA ; yB − yA).
• Colinéarité : Deux vecteurs u(x ; y) et v(x' ; y') sont colinéaires si et seulement si xy' − x'y = 0.`,
        formula: {
          name: "Norme et coordonnées vectorielles",
          formula: "\\vec{AB} = (x_B - x_A)\\vec{i} + (y_B - y_A)\\vec{j} \\quad ; \\quad \\|\\vec{u}\\| = \\sqrt{x^2 + y^2}",
          note: "La distance AB est égale à la norme du vecteur AB.",
        },
        konanTip: "L'Astuce du Professeur Konan : Toujours soustraire l'origine de l'extrémité : xB - xA !",
      };
    }

    // Mathématiques par défaut : explication claire et complète de l'étape
    const fallbackFormula = formulas[stepIdx % Math.max(1, formulas.length)] || {
      name: "Propriété mathématique officielle",
      formula: "f(x) = y",
      note: "Règle du programme de mathématiques.",
    };

    return {
      title: `Propriété & Méthode de calcul (Étape ${stepIdx + 1})`,
      paragraphText: `Règle mathématique à appliquer pour cette étape :
• Définition & Principe : ${explanation || point.summary}
• Démarche de résolution : Poser rigoureusement l'expression mathématique, respecter les règles de priorité et justifier chaque étape.
• Rigueur : Toujours vérifier que les valeurs trouvées respectent les contraintes de l'énoncé.`,
      formula: fallbackFormula,
      konanTip: "L'Astuce du Professeur Konan : Justifier chaque étape par la propriété du cours correspondante !",
    };
  }

  // =========================================================================
  // 2. BRANCHE CHIMIE (100% PURE CHIMIE)
  // =========================================================================
  if (isChimie) {
    const defaultChemFormula = formulas[stepIdx % Math.max(1, formulas.length)] || {
      name: "Relation chimique officielle",
      formula: "C = \\frac{n}{V} = \\frac{m}{M \\cdot V}",
      note: "Avec C en mol/L, n en mol et V en litres (L).",
    };

    return {
      title: `Notion & Loi Chimique (Étape ${stepIdx + 1})`,
      paragraphText: `Principe chimique et grandeurs mesurables :
• Règle fondamentale : ${explanation || point.summary}
• Conservation de la matière : Dans toute réaction chimique, les atomes et les charges électriques se conservent rigoureusement.
• Unités usuelles : Les volumes de solutions doivent obligatoirement être convertis en litres (1 mL = 10⁻³ L) pour calculer la concentration C = n / V en mol/L.`,
      formula: defaultChemFormula,
      konanTip: "L'Astuce du Professeur Konan : Penser à convertir les millilitres en litres (diviser par 1 000) avant de calculer C = n / V !",
    };
  }

  // =========================================================================
  // 3. BRANCHE PHYSIQUE (100% PURE PHYSIQUE)
  // =========================================================================
  if (subject === 'physique_chimie') {
    const defaultPhysFormula = formulas[stepIdx % Math.max(1, formulas.length)] || {
      name: "Loi physique officielle",
      formula: stepIdx % 2 === 0 ? "V_m = \\frac{d}{\\Delta t}" : "\\sum \\vec{F}_{\\text{ext}} = \\vec{0}",
      note: "Grandeurs légales en unités du Système International (SI).",
    };

    return {
      title: `Loi & Modélisation Physique (Étape ${stepIdx + 1})`,
      paragraphText: `Loi physique et modélisation expérimentale :
• Énoncé du principe : ${explanation || point.summary}
• Grandeurs légales du Système International : Distance en mètres (m), durée en secondes (s), force en Newtons (N), énergie en Joules (J) et vitesse en m/s (1 m/s = 3,6 km/h).
• Interprétation : Toujours vérifier que l'ordre de grandeur obtenu correspond au comportement réel du mobile.`,
      formula: defaultPhysFormula,
      konanTip: "L'Astuce du Professeur Konan : Convertir la vitesse en m/s (diviser km/h par 3,6) avant de poser un calcul cinématique !",
    };
  }

  // =========================================================================
  // 4. BRANCHE FRANÇAIS & LETTRES (100% PURE LITTÉRAIRE & MÉTHODOLOGIE CI)
  // =========================================================================
  if (subject === 'francais') {
    const defaultFrenchFormula = formulas[stepIdx % Math.max(1, formulas.length)] || {
      name: "Règle méthodologique officielle de français",
      formula: "\\text{Idée directrice} + \\text{Citation entre guillemets} + \\text{Outil stylistique} + \\text{Interprétation (effet de sens)}",
      note: "Démarche officielle d'expression écrite et de commentaire composé (MENA Côte d'Ivoire).",
    };

    return {
      title: `Méthodologie & Analyse Littéraire (Étape ${stepIdx + 1})`,
      paragraphText: `Règle de composition et d'analyse littéraire :
• Principe fondamental : ${explanation || point.summary}
• Démarche d'analyse : S'appuyer sur le texte d'auteur, repérer les indices stylistiques et grammaticaux et en dégager les effets de sens sans paraphraser.
• Rigueur formelle : Soigner l'expression écrite, respecter la structure des paragraphes et la progression des centres d'intérêt.`,
      formula: defaultFrenchFormula,
      konanTip: "L'Astuce du Professeur Konan : Toujours associer la citation à un procédé littéraire précis et expliquer l'effet produit !",
    };
  }

  // =========================================================================
  // 5. BRANCHE SVT (100% PURE BIOLOGIE & GÉOLOGIE)
  // =========================================================================
  const defaultSvtFormula = formulas[stepIdx % Math.max(1, formulas.length)] || {
    name: "Propriété biologique & géologique",
    formula: "\\text{Grossissement} = \\text{Grossissement de l'objectif} \\times \\text{Grossissement de l'oculaire}",
    note: "Observations au microscope optique.",
  };

  return {
    title: `Connaissance Scientifique du Vivant & de la Terre (Étape ${stepIdx + 1})`,
    paragraphText: `Notion biologique ou géologique fondamentale :
• Définition & Observation : ${explanation || point.summary}
• Mécanisme du vivant / de la Terre : Analyser les données observables ou expérimentales pour comprendre le fonctionnement du système.
• Vocabulaire scientifique : Utiliser les termes précis et normalisés du programme officiel du MENA.`,
    formula: defaultSvtFormula,
    konanTip: "L'Astuce du Professeur Konan : Utiliser scrupuleusement les termes scientifiques exacts dans ta justification !",
  };
}

/**
 * Génère un exercice de secours purement ancré dans la matière
 */
function generateSubjectSpecificExercise(
  subject: string,
  isChimie: boolean,
  chapter: CurriculumChapter,
  _point: CurriculumPoint,
  _stepNum: number,
  stepId: string
): InteractiveExercise {
  if (subject === 'maths') {
    return {
      id: stepId,
      type: 'mcq',
      prompt: `Dans le cadre de l'étude de « ${chapter.title} », quelle est la propriété mathématique rigoureuse qui s'applique à cette étape ?`,
      options: [
        `Chaque réel du domaine de définition admet une unique image par la fonction.`,
        `Une fonction peut attribuer plusieurs images distinctes à une même valeur de x.`,
        `Une division par zéro est autorisée dans l'ensemble des réels ℝ.`,
        `Le radicande d'une racine carrée dans ℝ peut être strictement négatif.`,
      ],
      correctAnswerIndex: 0,
      explanation: `Par définition d'une fonction dans ℝ, tout élément de son ensemble de définition possède au plus une (et donc une unique) image.`,
    };
  }

  if (isChimie) {
    return {
      id: stepId,
      type: 'mcq',
      prompt: `Dans la leçon de chimie « ${chapter.title} », quelle relation permet de calculer la concentration molaire C d'une solution ?`,
      options: [
        `C = n / V, avec C en mol/L, n en mol et V en litres`,
        `C = n × V`,
        `C = V / n`,
        `C = m / M`,
      ],
      correctAnswerIndex: 0,
      explanation: `La concentration molaire C est la quantité de matière n (en mol) de soluté dissous par litre de solution (volume V en litres) : C = n / V.`,
    };
  }

  if (subject === 'physique_chimie') {
    return {
      id: stepId,
      type: 'mcq',
      prompt: `Dans la leçon de physique « ${chapter.title} », quelle est l'unité légale du Système International (SI) de la vitesse ?`,
      options: [
        `Le mètre par seconde (m/s)`,
        `Le kilomètre par heure (km/h)`,
        `Le centimètre par seconde (cm/s)`,
        `Le mètre (m)`,
      ],
      correctAnswerIndex: 0,
      explanation: `Dans le Système International (SI), l'unité légale normalisée de vitesse est le mètre par seconde (m/s). On rappelle que 1 m/s = 3,6 km/h.`,
    };
  }

  if (subject === 'francais') {
    return {
      id: stepId,
      type: 'mcq',
      prompt: `Dans la leçon de français « ${chapter.title} », quelle règle méthodologique officielle doit obligatoirement être appliquée ?`,
      options: [
        `Toute affirmation littéraire doit être appuyée par une citation textuelle précise, analysée avec un outil linguistique et interprétée.`,
        `Le commentaire composé doit être rédigé sous forme de tirets et de numéros de vers.`,
        `L'introduction du commentaire composé doit être découpée en cinq paragraphes distincts.`,
        `Le verbe « étayer » exige de contredire systématiquement la thèse défendue par l'auteur.`,
      ],
      correctAnswerIndex: 0,
      explanation: `En français (expression écrite et commentaire composé), chaque argument s'appuie sur une citation exacte entre guillemets dont on analyse le procédé stylistique et l'effet de sens.`,
    };
  }

  return {
    id: stepId,
    type: 'mcq',
    prompt: `Dans la leçon de SVT « ${chapter.title} », quelle affirmation scientifique est rigoureusement exacte ?`,
    options: [
      `Les structures et mécanismes observés sont conformes aux règles biologiques et géologiques établies.`,
      `Les cellules se divisent sans duplication préalable de leur matériel génétique.`,
      `Les roches magmatiques se forment uniquement par dépôt sédimentaire lacustre.`,
      `Les plantes vertes réalisent la photosynthèse sans apport de lumière ni de chlorophylle.`,
    ],
    correctAnswerIndex: 0,
    explanation: `En SVT, toute déduction doit s'appuyer sur les faits d'observation et les lois biologiques et géologiques du programme.`,
  };
}
