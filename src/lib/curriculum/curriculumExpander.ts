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

// ============================================================================
// CARTES « ANCRÉES DANS LE COURS » (contenus v1)
// Chaque carte reprend le passage du cours officiel (conceptExplanation) qui répond le mieux à SA
// question, avec une formule seulement si elle s'y rapporte. Aucune phrase générique ; en calcul,
// jamais la solution affichée avant que l'élève réponde (elle reste dans l'explication du QCM).
// ============================================================================
const GROUNDING_STOPWORDS = new Set(
  ('les des une est que qui dans pour par sur avec son ses leur aux cette quel quelle quels quelles comment ' +
    'pourquoi combien elle ils ont sont etre plus moins tres tout tous toute fait faut entre lors apres avant ' +
    'parmi suivant suivante suivantes laquelle lequel lesquels calcule calculer donne exact exacte officiel ' +
    'officielle forme valeur nombre dont mais ainsi alors donc sous chez celui celle ceux comme meme').split(' '),
);

function groundingTokens(text: string): string[] {
  return (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .split(' ')
    .filter((w) => w.length > 3 && !GROUNDING_STOPWORDS.has(w))
    // Pluriel ramené au singulier : « quotients » rejoint « quotient »
    .map((w) => (w.length > 4 && /[sx]$/.test(w) ? w.slice(0, -1) : w));
}

/**
 * Passages candidats du cours : chaque section, et pour une section trop longue, des morceaux qui
 * gardent l'intitulé de la section et ne coupent jamais une puce (« - » avec ses sous-puces « * »).
 */
function conceptExcerpts(concept: string): string[] {
  const blocks = (concept || '').split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  const out: string[] = [];
  for (const block of blocks) {
    if (block.length <= 650) {
      out.push(block);
      continue;
    }
    const lines = block.split('\n');
    const heading = /:\s*$/.test(lines[0]) || lines[0].length < 90 ? lines[0] : '';
    // Regroupe chaque puce de premier niveau avec les lignes indentées qui la suivent
    const items: string[] = [];
    for (const line of heading ? lines.slice(1) : lines) {
      const continuation = /^\s+\S/.test(line) && items.length > 0;
      if (continuation) items[items.length - 1] += `\n${line}`;
      else items.push(line);
    }
    let current = heading;
    for (const item of items) {
      if (current && current !== heading && (current + '\n' + item).length > 560) {
        out.push(current);
        current = heading ? `${heading}\n${item}` : item;
      } else {
        current = current ? `${current}\n${item}` : item;
      }
    }
    if (current && current !== heading) out.push(current);
  }
  return out;
}

function normalizeForCompare(text: string): string {
  return (text || '').toLowerCase().normalize('NFD').replace(/\p{M}/gu, '').replace(/\s+/g, '');
}

/**
 * Question de calcul : la bonne réponse est un résultat chiffré que l'élève doit obtenir lui-même.
 * En maths, toute réponse chiffrée compte comme un calcul ; ailleurs (SVT, HG…), un chiffre peut être
 * une donnée du cours à retenir (97,5 % du territoire) : seul l'énoncé « calcule… » en fait un calcul.
 */
function isCalculationQuestion(exercise: InteractiveExercise, subjectId: string): boolean {
  const correct = String(exercise.options?.[exercise.correctAnswerIndex ?? 0] ?? '');
  if (!/\d/.test(correct)) return false;
  if (subjectId === 'maths') return true;
  return /calcul|combien|simplifi|[ée]cri[st]|valeur|quel(le)? (volume|masse|quantit|concentration|densit|vitesse|distance|intensit|prix|nombre)|arrondi|approximation|encadrement|pourcentage|imc|formule [ée]lectronique|structure [ée]lectronique|configuration [ée]lectronique/i.test(exercise.prompt || '');
}

function buildGroundedStep(
  exercise: InteractiveExercise,
  point: CurriculumPoint,
  stepIdx: number,
  formulas: PointFormula[],
  subjectId: string,
): { title: string; paragraphText: string; formula?: PointFormula; konanTip?: string } {
  const correct = String(exercise.options?.[exercise.correctAnswerIndex ?? 0] ?? '');
  const calc = isCalculationQuestion(exercise, subjectId);
  const promptTokens = new Set(groundingTokens(exercise.prompt));
  const answerTokens = new Set(groundingTokens(correct));
  const score = (text: string) => {
    const t = new Set(groundingTokens(text));
    let s = 0;
    for (const w of promptTokens) if (t.has(w)) s += 1;
    for (const w of answerTokens) if (t.has(w)) s += 2;
    return s;
  };

  // 1. Passage du cours le plus pertinent (en calcul : jamais un passage qui contient déjà la réponse)
  const answerKey = normalizeForCompare(correct);
  const titleTokens = new Set(groundingTokens(point.title));
  let best = '';
  let bestScore = 0;
  let fallback = '';
  let fallbackScore = -1;
  for (const excerpt of conceptExcerpts(point.conceptExplanation || '')) {
    // (une réponse d'un seul caractère, « 1 », ne se cherche pas : elle figure dans presque toute règle)
    if (calc && answerKey.length > 1 && normalizeForCompare(excerpt).includes(answerKey)) continue;
    const s = score(excerpt);
    if (s > bestScore) {
      best = excerpt;
      bestScore = s;
    }
    // Repli : le passage le plus proche du titre de la mini-leçon (la règle qu'on applique)
    // (à égalité, le passage le plus développé : une règle complète plutôt qu'une phrase d'introduction)
    const ts = groundingTokens(excerpt).filter((w) => titleTokens.has(w)).length * 1000 + Math.min(excerpt.length, 600);
    if (ts > fallbackScore) {
      fallback = excerpt;
      fallbackScore = ts;
    }
  }

  // 2. Formule seulement si elle se rapporte vraiment à la question (au moins deux points communs)
  let formula: PointFormula | undefined;
  let formulaScore = 0;
  for (const f of formulas) {
    const s = score(`${f.name} ${f.formula} ${f.note || ''}`);
    if (s > formulaScore) {
      formula = f;
      formulaScore = s;
    }
  }
  if (formulaScore < 2) formula = undefined;
  // En calcul, une formule qui contient déjà le résultat ne s'affiche pas
  if (formula && calc && answerKey.length > 1 && normalizeForCompare(`${formula.formula} ${formula.note || ''}`).includes(answerKey)) {
    formula = undefined;
  }

  // 3. Texte de la carte : passage du cours ; à défaut, l'explication (hors calcul) ; à défaut, le résumé
  let paragraphText = best && bestScore >= 2 ? best : '';
  if (!paragraphText) {
    const explanation = (exercise.explanation || '').trim();
    paragraphText = !calc && explanation ? explanation : best || fallback || point.summary || '';
  }
  if (paragraphText.length > 700) paragraphText = `${paragraphText.slice(0, 680).replace(/\s+\S*$/, '')}…`;

  // Titre : intitulé de la section retenue s'il est court, sinon la formule, sinon le titre de la mini-leçon
  const firstLine = paragraphText.split('\n')[0].trim();
  const sectionTitle = /^\d+[.)]\s*(.{3,70}?)\s*:?\s*$/.exec(firstLine)?.[1];
  const title = sectionTitle || formula?.name || (stepIdx === 0 ? point.title : `${point.title} (${stepIdx + 1})`);

  return { title, paragraphText, formula };
}

/**
 * Détermine si un chapitre de Physique-Chimie relève de la CHIMIE.
 * 1. L'identifiant officiel fait foi (ex: seconde_c_chimie_ch1 / seconde_c_physique_ch8).
 * 2. Sinon, mots entiers uniquement : « ion » ne doit plus attraper « Tension »,
 *    « Actions » ou « fonctionnement ».
 */
export function isChimieChapter(chapter: CurriculumChapter): boolean {
  if (chapter.subjectId !== 'physique_chimie') return false;
  const id = chapter.id || '';
  if (!id.includes('physique_chimie')) {
    if (/(^|_)chimie(_|$)/.test(id)) return true;
    if (/(^|_)physique(_|$)/.test(id)) return false;
  }
  return /\b(chimie|chimiques?|atomes?|moles?|molaires?|solutions?|ions?|ioniques?|acides?|bases?|basiques?|dosages?|cuivre|chlorures?)\b|r[ée]actions? (chimiques?|acido)/i.test(chapter.title || '');
}

export function expandChapterTo10MiniLessons(chapter: CurriculumChapter): CurriculumChapter {
  return expandChapterTo12MiniLessons(chapter);
}

export function expandChapterTo6MiniLessons(chapter: CurriculumChapter): CurriculumChapter {
  return expandChapterTo12MiniLessons(chapter);
}

/**
 * DÉCOUPAGE PROFOND DES CHAPITRES (STRICTEMENT 10 À 12 MINI-LEÇONS PAR CHAPITRE)
 * 
 * Règle d'or du projet :
 * - Un élève ne doit JAMAIS terminer un chapitre en 1 ou 2 séances.
 * - Chaque chapitre officiel comporte au minimum 10 à 12 mini-leçons complètes (de 8 questions chacune).
 * - Chaque question dispose de sa propre fiche de cours dédiée en liaison 1-pour-1 (zéro cours figé).
 */
export function expandChapterTo12MiniLessons(chapter: CurriculumChapter): CurriculumChapter {
  const existingPoints = chapter.points || [];
  if (existingPoints.length === 0) {
    return chapter;
  }

  // Nouveau format (rédigé étape par étape depuis le PDF officiel) : servi tel quel, jamais réécrit.
  if (chapter.contentVersion === 2) {
    return chapter;
  }

  // Si le chapitre dispose déjà de 10 à 12 points à 8 étapes sans mélange, on vérifie leur intégrité
  if (existingPoints.length >= 10 && existingPoints.length <= 14) {
    const isAlreadyFullyStructured = existingPoints.every(
      p => p.exercises && p.exercises.length === 8 && p.structuredSteps && p.structuredSteps.length === 8
    );
    if (isAlreadyFullyStructured) {
      return chapter;
    }
  }

  const subject = chapter.subjectId;
  const isChimie = isChimieChapter(chapter);

  // 1. RÈGLE STRICTE ANTI-RÉPÉTITION :
  // Chaque point authentique constitue une mini-leçon dédiée, distincte et progressive.
  // INTERDICTION formelle de cloner un point en sous-leçons identiques répétant les mêmes questions !
  const subLessonsPerPoint = 1;

  const updatedPoints: CurriculumPoint[] = [];
  let globalOrder = 1;

  for (let ptIdx = 0; ptIdx < existingPoints.length; ptIdx++) {
    const point = existingPoints[ptIdx];
    const rawExercises: InteractiveExercise[] = Array.isArray(point.exercises) && point.exercises.length > 0
      ? point.exercises
      : (point.exercise ? [point.exercise] : []);
    const pointFormulas: PointFormula[] = point.formulas || [];

    // Découper ce point en sous-leçons si nécessaire
    for (let subIdx = 0; subIdx < subLessonsPerPoint; subIdx++) {
      if (updatedPoints.length >= 12 && ptIdx > 0) {
        break; // Limiter à 12 mini-leçons pour un équilibre parfait
      }

      const pointOrder = globalOrder++;
      const subId = subLessonsPerPoint > 1 ? `${point.id}_sub${subIdx + 1}` : point.id;

      // Titre spécifique et descriptif de la mini-leçon
      let subTitle = point.title;
      if (subLessonsPerPoint > 1) {
        if (subIdx < rawExercises.length && rawExercises[subIdx]?.prompt) {
          const promptClean = rawExercises[subIdx].prompt.replace(/\?$/, '').trim();
          // Titre complet : jamais de phrase coupée par « … »
          subTitle = promptClean;
        } else {
          subTitle = `${point.title} (Partie ${subIdx + 1})`;
        }
      }

      // Construction de 8 exercices distincts pour cette mini-leçon
      const exercises: InteractiveExercise[] = [];
      const structuredSteps: StructuredLessonStep[] = [];

      for (let stepIdx = 0; stepIdx < 8; stepIdx++) {
        const stepNum = stepIdx + 1;
        const stepId = `${subId}_step${stepNum}`;

        let ex: InteractiveExercise;
        // Priorité aux exercices existants
        const exCandidateIndex = (subIdx * 8 + stepIdx) % Math.max(1, rawExercises.length);
        if (rawExercises.length > 0 && rawExercises[exCandidateIndex]) {
          ex = {
            ...rawExercises[exCandidateIndex],
            id: stepId,
          };
        } else {
          ex = generateSubjectSpecificExercise(subject, isChimie, chapter, point, stepNum, stepId);
        }
        exercises.push(ex);

        // Liaison 1-pour-1 entre le cours du haut et le QCM du bas
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

      updatedPoints.push({
        id: subId,
        order: pointOrder,
        title: subTitle,
        summary: point.summary || chapter.summary,
        conceptExplanation: point.conceptExplanation || point.summary,
        formulas: pointFormulas,
        keyRule: point.keyRule,
        workedExample: point.workedExample || {
          title: `Application guidée : ${subTitle}`,
          statement: `Exercice d'application et démarche de résolution pour ${subTitle}.`,
          methodSteps: [
            "Étape 1 : Identifier méthodiquement les données et la question posée.",
            "Étape 2 : Appliquer la règle officielle ou la formule du cours.",
            "Étape 3 : Conclure en justifiant rigoureusement le résultat obtenu."
          ],
          conclusion: point.summary || chapter.summary,
        },
        exercises,
        structuredSteps,
      });
    }
  }

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
  formula?: PointFormula;
  konanTip?: string;
} {
  const subject = chapter.subjectId;
  const prompt = exercise.prompt || '';
  const explanation = (exercise.explanation || '').trim();

  // =========================================================================
  // 1. BRANCHE MATHÉMATIQUES (100% PURE MATHS — ZÉRO PHYSIQUE — ZÉRO SI)
  // =========================================================================
  if (subject === 'maths') {
    const mathText = `${prompt} ${explanation}`;
    // Les fiches « Ensemble de définition » ne concernent QUE les questions de domaine
    // (et non toute question contenant le mot « fraction » ou « racine »).
    const isDomainQuestion = /ensemble de d[ée]finition|\bD[fg]\b|valeurs? interdites?|est d[ée]finie|condition d'existence/i.test(mathText);

    // Cas B (testé en premier, plus spécifique) : Racine carrée au dénominateur : 1 / √(U(x))
    if (isDomainQuestion && /dénominateur/i.test(mathText) && /√|racine|radical/i.test(mathText)) {
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

    // Cas A : Ensemble de définition d'une fonction rationnelle (dénominateur)
    if (isDomainQuestion && /dénominateur|rationnelle|fraction|Q\(x\)/i.test(mathText)) {
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

    // Cas C : Ensemble de définition d'une fonction racine carrée √(U(x))
    if (isDomainQuestion && /racine|radical|√/i.test(mathText)) {
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

    // Mathématiques par défaut : passage du cours officiel qui répond à cette question
    return buildGroundedStep(exercise, point, stepIdx, formulas, subject);
  }

  // =========================================================================
  // 2. PHYSIQUE-CHIMIE ET FRANÇAIS : la carte reprend le passage du cours officiel qui répond
  // à la question (plus de fiche générique « conversion mL / km/h » plaquée sur toutes les leçons).
  // =========================================================================
  if (subject === 'physique_chimie' || subject === 'francais') {
    return buildGroundedStep(exercise, point, stepIdx, formulas, subject);
  }

  // =========================================================================
  // 3. BRANCHE SVT (100% PURE BIOLOGIE & GÉOLOGIE — ADAPTATION STRICTE AU PROGRAMME)
  // Mots entiers uniquement : « man » ne doit plus attraper « humaine », ni « pli » « multiplication ».
  const isGeologie = /\b(g[ée]ologi\w*|roche\w*|socles?|bassins?|faille\w*|plis?|pliss\w*|m[ée]tamorphi\w*|s[ée]dimentaires?|arch[ée]en(ne)?s?|birrimien(ne)?s?|prot[ée]rozo[iï]que|cratons?|man|sassandra)\b/i.test(chapter.title) || /\b(g[ée]ologi\w*|roche\w*|socles?|faille\w*|plis?|pliss\w*|arch[ée]en(ne)?s?|bassins?)\b/i.test(point.title);

  if (isGeologie) {
    if (/socle|bassin|97,5|2,5/i.test(prompt) || /socle|bassin/i.test(explanation)) {
      return {
        title: "Grands ensembles géologiques (Socle vs Bassin)",
        paragraphText: `Le territoire de la Côte d'Ivoire appartient au craton ouest-africain :
• Socle cristallin précambrien : Il recouvre 97,5 % du territoire national (très ancien, induré).
• Bassin sédimentaire côtier : Il n'occupe que 2,5 % au Sud le long du littoral (récent, méso-cénozoïque).
• Caractère géologique : La Côte d'Ivoire est un archétype de « pays de socle ».`,
        formula: {
          name: "Répartition des ensembles géologiques ivoiriens",
          formula: "Socle cristallin : 97,5 % | Bassin sédimentaire côtier : 2,5 %",
          note: "Le socle précambrien domine quasi-totalement le territoire national."
        },
        konanTip: "L'Astuce du Professeur Konan : Retiens 97,5 % pour le socle et 2,5 % pour le bassin côtier !",
      };
    }

    if (/faille de sassandra|subméridienne|frontière/i.test(prompt) || /sassandra/i.test(explanation)) {
      return {
        title: "La faille de Sassandra (Frontière tectonique subméridienne)",
        paragraphText: `La faille de Sassandra est l'accident tectonique majeur du socle ivoirien :
• Orientation : Direction subméridienne (sens général Nord-Sud).
• Rôle de frontière : Elle sépare nettement le domaine Archéen à l'Ouest du domaine Protérozoïque à l'Est.
• Conséquence : Elle fait passer d'un socle très ancien (> 2 500 Ma) à l'Ouest à un socle plus jeune à l'Est.`,
        formula: {
          name: "Frontière tectonique subméridienne",
          formula: "\\text{Domaine Archéen (Ouest)} \\longleftrightarrow [\\text{Faille de Sassandra}] \\longleftrightarrow \\text{Domaine Protérozoïque (Est)}",
          note: "La faille de Sassandra est la suture géologique centrale de la Côte d'Ivoire."
        },
        konanTip: "L'Astuce du Professeur Konan : La faille de Sassandra est Nord-Sud et sépare l'Ouest de l'Est !",
      };
    }

    if (/archéen|\bman\b|danané|charnockite|tonkpi|nimba|libérien|léonnien/i.test(prompt) || /archéen|\bman\b/i.test(explanation)) {
      return {
        title: "Le domaine Archéen (Kéniéma-Man)",
        paragraphText: `Le domaine Archéen occupe exclusivement la partie Ouest du socle :
• Âge géologique : Précambrien inférieur (4 000 à 2 500 Ma, orogenèses léonnienne et libérienne).
• Relief & Roches : Région montagneuse de Man (Tonkoui, Nimba), roches catazonales (charnockites, granulites, itabirites).
• Cratonisation : C'est le noyau stable le plus ancien et le plus induré du pays.`,
        formula: {
          name: "Caractéristiques du domaine Archéen",
          formula: "\\text{Archéen (Ouest)} : 4\\,000 \\text{ à } 2\\,500 \\text{ Ma} \\implies \\text{Faciès granulite & charnockites}",
          note: "Métamorphisme catazonal de haute température et forte pression."
        },
        konanTip: "L'Astuce du Professeur Konan : Archéen = Ouest = Man = 4 000 à 2 500 millions d'années !",
      };
    }

    if (/protérozoïque|birrimien|baoulé|éburnéen|roches vertes/i.test(prompt) || /protérozoïque|birrimien/i.test(explanation)) {
      return {
        title: "Le domaine Protérozoïque (Baoulé-Mossi / Birrimien)",
        paragraphText: `Le domaine Protérozoïque couvre le Centre, le Nord et l'Est du socle :
• Âge géologique : Précambrien supérieur (2 500 à 540 Ma, mégacycle orogénique éburnéen vers 2 100 Ma).
• Lithologie : Granitoïdes éburnéens concordants et discordants, ceintures de roches vertes volcano-sédimentaires.
• Métamorphisme : De degré épizonal à mésozonal (schistes verts et amphibolites).`,
        formula: {
          name: "Caractéristiques du domaine Protérozoïque",
          formula: "\\text{Protérozoïque (Est)} : 2\\,500 \\text{ à } 540 \\text{ Ma} \\implies \\text{Mégacycle éburnéen (2\\,100 Ma)}",
          note: "Le domaine le plus vaste du socle, riche en gisements aurifères birrimiens."
        },
        konanTip: "L'Astuce du Professeur Konan : Protérozoïque = Birrimien = Est/Centre = Orogenèse éburnéenne !",
      };
    }

    if (/faille des lagunes|rejet|littoral|fresco|bassin côtier/i.test(prompt) || /lagunes|bassin/i.test(explanation)) {
      return {
        title: "Le bassin sédimentaire côtier & La faille des lagunes",
        paragraphText: `Le bassin sédimentaire ivoirien s'étire en croissant au Sud :
• Âge & Lithologie : Mis en place au Secondaire (Crétacé, 135 Ma) ; sables, argiles et grès non plissés.
• Faille des lagunes : Faille Est-Ouest majeure avec un rejet vertical plongeant vers la mer jusqu'à 5 000 m.
• Intérêt économique : Ressources en eaux souterraines douces et gisements pétroliers offshore.`,
        formula: {
          name: "Accident majeur du bassin sédimentaire",
          formula: "\\text{Faille des lagunes (Est-Ouest)} \\implies \\text{Rejet vertical descendant de } 5\\,000 \\text{ m}",
          note: "Sépare les sédiments récents au Sud du socle cristallin au Nord."
        },
        konanTip: "L'Astuce du Professeur Konan : La faille des lagunes est Est-Ouest et a un rejet vertical de 5 000 m !",
      };
    }

    if (/faille|cassure|miroir|rejet/i.test(prompt) || /faille/i.test(explanation)) {
      return {
        title: "Les accidents tectoniques cassants (Failles)",
        paragraphText: `Une faille est une cassure de terrain avec déplacement relatif des compartiments :
• Éléments géométriques : Plan de faille, compartiment soulevé, compartiment effondré, rejet de faille.
• Types de failles : Failles normales (distension), failles inverses (compression) et décrochements (coulissage).
• Rôle sur le réseau d'eau : Les failles guident préférentiellement les cours d'eau en Côte d'Ivoire.`,
        formula: {
          name: "Géométrie d'une faille tectonique",
          formula: "\\text{Faille} = \\text{Plan de faille} + \\text{Rejet vertical } R_v + \\text{Rejet horizontal } R_h",
          note: "Entraîne une discontinuité des couches géologiques observables sur le terrain."
        },
        konanTip: "L'Astuce du Professeur Konan : Faille = cassure avec déplacement des compartiments !",
      };
    }

    if (/\bplis?\b|pliss|anticlinal|synclinal|charnière|flanc/i.test(prompt) || /\bplis?\b|pliss/i.test(explanation)) {
      return {
        title: "Les accidents tectoniques souples (Plis)",
        paragraphText: `Un pli est une déformation continue sans rupture provoquée par des forces de compression :
• Anticlinal : Pli dont la courbure est convexe vers le haut (couches les plus anciennes au cœur).
• Synclinal : Pli dont la courbure est concave vers le haut (couches les plus récentes au cœur).
• Localisation : Observés dans les schistes du Birrimien, absents dans le bassin côtier non plissé.`,
        formula: {
          name: "Types fondamentaux de plis géologiques",
          formula: "\\text{Anticlinal (Convexe vers le haut)} \\quad ; \\quad \\text{Synclinal (Concave vers le haut)}",
          note: "Les plis témoignent de poussées tectoniques horizontales de compression."
        },
        konanTip: "L'Astuce du Professeur Konan : Anticlinal = bosse convexe ; Synclinal = creux concave !",
      };
    }

    if (/discordance|kokumbo|abronienne|contact anormal|érosion/i.test(prompt) || /discordance/i.test(explanation)) {
      return {
        title: "Les discordances géologiques en Côte d'Ivoire",
        paragraphText: `Une discordance est un contact anormal séparant deux formations géologiques d'âges distincts :
• Genèse : Émersion, plissement, érosion de la formation ancienne, puis sédimentation de la nouvelle couche.
• Discordance de Kokumbo : Célèbre discordance de base du Birrimien sur le socle ancien.
• Discordance Abronienne : Observée dans l'Est ivoirien (région de Bondoukou / Bouna).`,
        formula: {
          name: "Définition d'une discordance géologique",
          formula: "\\text{Discordance} = \\text{Surface d'érosion séparant deux cycles géologiques distincts}",
          note: "La discordance de base du Birrimien affleure typiquement à Kokumbo."
        },
        konanTip: "L'Astuce du Professeur Konan : Discordance de base du Birrimien = Kokumbo !",
      };
    }

    return buildGroundedStep(exercise, point, stepIdx, formulas, subject);
  }

  // Biologie (cellule, nutrition, écologie…) : passage du cours officiel qui répond à cette question
  return buildGroundedStep(exercise, point, stepIdx, formulas, subject);
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
