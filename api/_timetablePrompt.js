/**
 * Lecture d'emploi du temps par Gemini : consignes et nettoyage PARTAGÉS entre
 * - le serveur (api/extract-timetable.js, clé secrète GEMINI_API_KEY) ;
 * - le mode « clé personnelle » du navigateur (clé saisie par l'utilisateur lui-même).
 * Le préfixe « _ » empêche Vercel d'exposer ce fichier comme une route /api.
 */
export const PROMPT_OFFICIEL = `
En tant qu'ingénieur senior en développement web et architectures logicielles internationales, expert depuis plus de 5 ans dans le traitement algorithmique et l'analyse de données non structurées, ta mission est d'extraire avec une rigueur absolue les informations de l'emploi du temps fourni (photo ou document PDF) et de générer un flux texte parfaitement conforme à l'un des 3 formats cibles.

==============================================================================
RÈGLE FONDAMENTALE SUR LES HORAIRES (AUCUNE HEURE N'EST FIXE) :
==============================================================================
- Les heures présentes dans les exemples ci-dessous ne sont que de SIMPLES ILLUSTRATIONS de syntaxe. Ne les recopie JAMAIS aveuglément.
- AUCUN HORAIRE N'EST FIXÉ PAR DÉFAUT. Un cours peut commencer à 07:00, 07:15, 07:30, 08:00, 08:15 ou à n'importe quelle autre heure inscrite sur le document.
- Lis impérativement les coordonnées temporelles réelles (heure de début et heure de fin) indiquées sur la grille fournie.
- Si une case s'étend sur plusieurs plages horaires (cellules fusionnées, ex: 07:30 à 11:30 ou 14:00 à 17:00), fusionne l'heure de début et l'heure de fin réelles sur une seule et même ligne.
- Aligne rigoureusement chaque matière sur sa tranche horaire exacte et son jour. Ne permute aucune colonne avec une autre.

==============================================================================
RÈGLE ABSOLUE DE DISSÉCATION & EXTRACTION DISCIPLINAIRE STRICTE :
==============================================================================
1. N'EXTRAIS QUE DE VRAIES MATIÈRES ET DISCIPLINES ACADÉMIQUES RECONNUES :
   - Exemples de matières valides : Mathématiques, Physique-Chimie, Français, Histoire-Géographie, Philosophie, SVT, Anglais, Droit Civil, Algorithmique, Électronique, Économie, etc.

2. CE QUI N'EST PAS UNE MATIÈRE (INTERDICTION ABSOLUE D'EXTRAIRE) :
   - ÉVALUATIONS GÉNÉRIQUES ET EXAMENS SANS MATIÈRE :
     Les mentions "Devoir", "Devoir Surveillé", "DS", "DST", "Examen", "Examen de semestre impair", "Examen de semestre pair", "Partiels", "Contrôle", "Interrogation", "Session d'examen", "Rattrapage" NE SONT PAS DES MATIÈRES.
     * Si un créneau est nommé "Devoir de Mathématiques", retiens STRICTEMENT la matière : "Mathématiques".
     * Si un créneau mentionne uniquement "Devoir", "DS", "Examen", "Examen de semestre impair" ou toute mention similaire sans matière académique claire, IGNORE TOTALEMENT ce créneau (ne l'extrais pas).
   - PAUSES & INTERRUPTIONS :
     "Récréation", "Récré", "Pause", "Pause déjeuner", "Pause midi", "Repas", "Midi", "Interclasse" NE SONT PAS DES MATIÈRES. Ne les écris jamais dans la liste des cours.
   - CRÉNEAUX ADMINISTRATIFS, ÉTUDES OU TEMPS LIBRE :
     "Permanence", "Étude surveillée", "Tutorat", "Vie de classe", "Heure de vie", "Conseil de classe", "Temps libre", "Autonomie" NE SONT PAS DES MATIÈRES. Ignore-les.

==============================================================================
DÉTECTION DU SYSTÈME D'ÉTUDE :
==============================================================================
Identifie le gabarit à appliquer selon le contenu :
1. NIVEAU SCOLAIRE (Collège / Lycée) : Matières d'enseignement général (Maths, Physique-Chimie, Français, SVT, Philo, Histoire-Géo, etc.), sans mention de CM/TD/TP ni code d'unité d'enseignement.
2. NIVEAU BTS : Présence de typologies de cours (CM, TD, TP), de matières appliquées/techniques et de salles spécialisées (Labo, Atelier, Salle machine).
3. NIVEAU LMD (Université / Grandes Écoles) : Présence de codes de matières (ex: [1MTH3350]), de mentions d'Amphis, d'enseignants (Dr, Prof, M.) ou de semestres.

==============================================================================
FORMATS DE SORTIE ATTENDUS (APPLIQUER STRICTEMENT LE FORMAT CORRESPONDANT) :
==============================================================================

--- FORMAT 1 : SCOLAIRE (COLLÈGE / LYCÉE) ---
Syntaxe par ligne : - HEURE_DEBUT - HEURE_FIN : Nom Matière

Exemple de structure :
JOUR: LUNDI
- 08:00 - 10:00 : Mathématiques
- 10:15 - 12:00 : Physique-Chimie
- 14:00 - 16:00 : Français

JOUR: MARDI
- 08:00 - 10:00 : Histoire-Géographie
- 10:15 - 12:00 : Anglais
- 14:00 - 16:00 : SVT


--- FORMAT 2 : BTS ---
Syntaxe par ligne : - HEURE_DEBUT - HEURE_FIN : Type Matière (Salle)
(Note : si la salle n'est pas spécifiée sur le document, omettre les parenthèses de la salle)

Exemple de structure :
JOUR: LUNDI
- 08:00 - 10:00 : CM Électronique Analogique (Amphi 1)
- 10:15 - 12:15 : TD Mathématiques Appliquées (Salle 302)
- 14:00 - 17:00 : TP Informatique Industrielle (Labo Info 3)

JOUR: MARDI
- 08:00 - 10:00 : CM Physique des Matériaux (Amphi 2)
- 10:15 - 12:15 : TD Systèmes Logiques (Salle 105)


--- FORMAT 3 : LMD (UNIVERSITÉ / GRANDES ÉCOLES) ---
Syntaxe par ligne : - HEURE_DEBUT - HEURE_FIN : Nom Matière [Code ECUE] | Salle: Nom Salle | Prof: Nom Enseignant
(Note : si le code, la salle ou l'enseignant ne figure pas sur le document, omettre simplement la section correspondante)

Exemple de structure :
JOUR: LUNDI
- 07:30 - 10:00 : Algèbres 2 [1MTH3350] | Salle: Amphi ESATIC | Prof: Dr KOIVOGUI
- 10:15 - 12:45 : Anglais [1LAN3350] | Salle: Salle 204 | Prof: M. YEO
- 14:30 - 17:00 : Dév Applications 1 [1INF3350] | Salle: Lab Info 1 | Prof: M. KONE

JOUR: MARDI
- 07:30 - 10:00 : Finance [1MAN3350] | Salle: Amphi B | Prof: Dr KADJO


==============================================================================
CONSIGNE DE SORTIE :
==============================================================================
Renvoie UNIQUEMENT le texte formaté correspondant au gabarit retenu, sans balises Markdown (aucun \`\`\`), sans commentaire, sans introduction ni conclusion.
`;

/** Consigne complète selon le système d'études choisi par l'élève (lmd, tpcm = BTS, scolaire). */
export function buildTimetablePrompt(format) {
  let formatInstruction = "";
  if (format === "lmd") {
    formatInstruction = `\n\n==============================================================================\nCATÉGORIE D'EXTRACTION IMPOSÉE PAR L'ÉTUDIANT : SYSTÈME LMD (UNIVERSITÉ / GRANDES ÉCOLES)\n==============================================================================\nApplique OBLIGATOIREMENT le FORMAT 3 (LMD) :\nJOUR: LUNDI\n- HEURE_DEBUT - HEURE_FIN : Nom Matière [Code ECUE] | Salle: Nom Salle | Prof: Nom Enseignant\n(Omets [Code ECUE], | Salle: ou | Prof: uniquement s'ils ne figurent pas sur le document).`;
  } else if (format === "tpcm") {
    formatInstruction = `\n\n==============================================================================\nCATÉGORIE D'EXTRACTION IMPOSÉE PAR L'ÉTUDIANT : SYSTÈME BTS (FILIÈRES TECHNIQUES)\n==============================================================================\nApplique OBLIGATOIREMENT le FORMAT 2 (BTS) :\nJOUR: LUNDI\n- HEURE_DEBUT - HEURE_FIN : Type Matière (Salle)\n(Ex: - 08:00 - 10:00 : CM Électronique Analogique (Amphi 1) ou TD / TP. Omets (Salle) si non spécifiée).`;
  } else if (format === "scolaire") {
    formatInstruction = `\n\n==============================================================================\nCATÉGORIE D'EXTRACTION IMPOSÉE PAR L'ÉTUDIANT : SYSTÈME SCOLAIRE (LYCÉE / COLLÈGE)\n==============================================================================\nApplique OBLIGATOIREMENT le FORMAT 1 (SCOLAIRE / LYCÉE) :\nJOUR: LUNDI\n- HEURE_DEBUT - HEURE_FIN : Nom Matière\n(Ex: - 08:00 - 10:00 : Mathématiques. Traduis les sigles scolaires comme PC -> Physique-Chimie, SVT -> Sciences de la Vie et de la Terre (SVT), HG -> Histoire-Géographie).`;
  }

  return PROMPT_OFFICIEL + formatInstruction;
}

/**
 * Modèles essayés dans l'ordre (repli automatique si l'un est saturé ou indisponible).
 * Testés le 2026-11-03 avec la clé de production : gemini-2.0-flash, gemini-1.5-flash et
 * gemini-2.5-flash-lite ne sont plus disponibles pour les nouveaux comptes. Les alias « -latest »
 * suivent automatiquement le modèle courant de Google.
 */
export const TIMETABLE_MODELS = ['gemini-2.5-flash', 'gemini-3.5-flash', 'gemini-flash-latest', 'gemini-3.5-flash-lite', 'gemini-flash-lite-latest'];

export const ALLOWED_MIME_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp', 'image/gif'];

/** Type MIME accepté par Gemini, déduit du préfixe « data: » s'il est présent. */
export function normalizeMime(fileBase64, mimeType) {
  let effective = mimeType;
  const prefix = String(fileBase64 || '').match(/^data:([^;]+);base64,/);
  if (prefix && prefix[1]) effective = prefix[1];
  if (!effective || !ALLOWED_MIME_TYPES.includes(effective)) {
    effective = effective && effective.includes('pdf') ? 'application/pdf' : 'image/jpeg';
  }
  return effective;
}

/** Contenu base64 sans le préfixe « data:...;base64, ». */
export function stripDataUrlPrefix(fileBase64) {
  return String(fileBase64 || '').replace(/^data:[^;]+;base64,/, '');
}

/** Retire les blocs Markdown et toute introduction avant le premier jour. */
export function cleanTimetableOutput(text) {
  let raw = String(text || '').trim();
  raw = raw.replace(/^```[a-z]*\s*\n?/i, '').replace(/\n?```\s*$/i, '').trim();
  const firstDayIdx = raw.search(/(?:^|\n)\s*(?:JOUR\s*:|LUNDI|MARDI|MERCREDI|JEUDI|VENDREDI|SAMEDI|DIMANCHE)/i);
  if (firstDayIdx > 0) raw = raw.substring(firstDayIdx).trim();
  return raw;
}