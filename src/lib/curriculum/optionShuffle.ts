import type { InteractiveExercise } from './types';

/**
 * MÉLANGE DÉTERMINISTE DES PROPOSITIONS DE QCM
 *
 * Dans les cours historiques, la bonne réponse est presque toujours la proposition A.
 * Un élève peut donc « réussir » sans réfléchir. On mélange l'ordre d'affichage :
 * - de façon DÉTERMINISTE (graine = identifiant + énoncé) : la même question garde
 *   toujours le même ordre, y compris dans la boucle de rattrapage ;
 * - en recalculant correctAnswerIndex pour que la vérification reste exacte.
 *
 * Ne sont pas mélangés : les Vrai/Faux (2 propositions) et les QCM contenant une
 * proposition de type « Toutes les réponses » / « Aucune » qui doit rester en dernier.
 */

/** Hachage FNV-1a 32 bits d'une chaîne. */
function hashString(input: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

/** Générateur pseudo-aléatoire reproductible (mulberry32). */
function seededRandom(seed: number): () => number {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const ORDER_DEPENDENT_OPTION = /(toutes? les (r[ée]ponses|propositions)|aucune (des|de ces) (r[ée]ponses|propositions)|les deux|a et b|a, b et c)/i;

export function shuffleExerciseOptions(exercise: InteractiveExercise): InteractiveExercise {
  const options = exercise.options;
  const correct = exercise.correctAnswerIndex;
  if (!options || options.length <= 2 || correct === undefined || correct < 0 || correct >= options.length) {
    return exercise;
  }
  if (options.some(opt => ORDER_DEPENDENT_OPTION.test(opt))) {
    return exercise;
  }

  const random = seededRandom(hashString(`${exercise.id}::${exercise.prompt}`));
  const order = options.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }

  return {
    ...exercise,
    options: order.map(i => options[i]),
    correctAnswerIndex: order.indexOf(correct),
  };
}
