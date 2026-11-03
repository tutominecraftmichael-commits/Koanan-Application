// ============================================================================
// MODULE OFFICIEL : SVT 2de C (SCIENCES DE LA VIE ET DE LA TERRE)
// Ministère de l'Éducation Nationale et de l'Alphabétisation (MENA - Côte d'Ivoire)
//
// THÈME 1 : GÉOLOGIE DE LA CÔTE D'IVOIRE ET DEVENIR DES ROCHES (Leçons 1 à 5)
// - Leçon 1 : La structure géologique de la Côte d'Ivoire (4h)
// - Leçon 2 : L'altération chimique des roches magmatiques (2h)
// - Leçon 3 : La formation des roches sédimentaires (4h)
// - Leçon 4 : La formation des roches métamorphiques (2h)
// - Leçon 5 : Le devenir des roches métamorphiques (2h)
//
// THÈME 2 : LES RELATIONS AU SEIN D'UN ÉCOSYSTÈME ET INFLUENCE DE L'HOMME (Leçons 6 et 7)
// - Leçon 6 : Les relations entre les êtres vivants dans un écosystème (6h)
// - Leçon 7 : Le changement climatique (4h)
//
// THÈME 3 : LA REPRODUCTION DE LA CELLULE (Leçons 8 à 10)
// - Leçon 8 : L'organisation d'une cellule (2h)
// - Leçon 9 : La division cellulaire (mitose) (4h)
// - Leçon 10 : L'évolution de l'équipement chromosomique (4h)
//
// THÈME 4 : LA NUTRITION MINÉRALE DE LA PLANTE VERTE (Leçons 11 à 14)
// - Leçon 11 : L'absorption de l'eau par la plante (4h)
// - Leçon 12 : L'influence des sels minéraux sur la croissance de la plante verte (4h)
// - Leçon 13 : L'absorption des sels minéraux par la plante verte (2h)
// - Leçon 14 : Le devenir des substances absorbées par la plante verte (4h)
//
// Volume horaire officiel total : 44 heures d'enseignement
// Standard d'excellence : 14 chapitres, 28 points de cours, 224 QCM interactifs (8 QCM par point)
// ============================================================================

import type { CurriculumChapter } from '../../lib/curriculum/types';

// ============================================================================
// LEÇON 1 : LA STRUCTURE GÉOLOGIQUE DE LA CÔTE D'IVOIRE
// ============================================================================
export const svt2deCStructureGeologiqueChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch1_structure_geologique_cote_ivoire",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 1,
  "officialVolumeHours": 4,
  "title": "Leçon 1 — La structure géologique de la Côte d'Ivoire",
  "summary": "Organisation géologique de la Côte d'Ivoire en deux grands ensembles (socle cristallin 97,5 % et bassin sédimentaire côtier 2,5 %), accidents géologiques majeurs (failles, plis et discordances) et diversité des roches.",
  "points": [
    {
      "id": "seconde_c_svt_ch1_p1_grands_ensembles_socle_bassin",
      "order": 1,
      "title": "Les deux grands ensembles géologiques : socle cristallin et bassin côtier",
      "summary": "Distinguer le socle cristallin précambrien (97,5 %) du bassin sédimentaire côtier (2,5 %) et identifier leur cadre d'appartenance au craton ouest-africain.",
      "conceptExplanation": "Le territoire ivoirien appartient au craton ouest-africain (dorsale de Man ou Léo). Il est divisé en deux grands ensembles géologiques : le socle cristallin précambrien qui couvre 97,5 % du territoire national, et le bassin sédimentaire côtier qui n'occupe que 2,5 % au Sud le long du littoral atlantique.",
      "formulas": [
        {
          "name": "Répartition des ensembles géologiques",
          "formula": "Socle cristallin : 97,5 % | Bassin sédimentaire côtier : 2,5 %",
          "note": "Le socle précambrien domine quasi-totalement le territoire."
        }
      ],
      "keyRule": "Retenir les chiffres officiels MENA : socle cristallin = 97,5 % (la quasi-totalité du pays) ; bassin sédimentaire côtier = 2,5 % (au Sud).",
      "workedExample": {
        "title": "Identification sur carte muette",
        "statement": "Une carte présente deux zones A (97,5 %) et B (2,5 % au Sud). Nommer A et B.",
        "methodSteps": [
          "Étape 1 : Constater la proportion majoritaire de 97,5 % : il s'agit du socle cristallin précambrien.",
          "Étape 2 : Identifier la bande littorale de 2,5 % au Sud : c'est le bassin sédimentaire côtier.",
          "Étape 3 : Conclure sur la qualification de pays de socle."
        ],
        "conclusion": "Cette démarche méthodique conforme au programme MENA garantit la pleine maîtrise de la notion pour les devoirs et examens."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch1_p1_grands_ensembles_socle_bassin_ex1",
          "type": "mcq",
          "prompt": "Quelle proportion du territoire de la Côte d'Ivoire est occupée par le socle cristallin précambrien ?",
          "options": [
            "97,5 %",
            "2,5 %",
            "50 %",
            "75 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le socle précambrien recouvre 97,5 % du territoire national, ce qui fait de la Côte d'Ivoire un pays de socle."
        },
        {
          "id": "seconde_c_svt_ch1_p1_grands_ensembles_socle_bassin_ex2",
          "type": "mcq",
          "prompt": "Où se situe géographiquement le bassin sédimentaire côtier en Côte d'Ivoire ?",
          "options": [
            "Au Sud, en bordure du golfe de Guinée",
            "Au Nord, vers Korhogo",
            "À l'Ouest, dans la région de Man",
            "Au Centre, près de Bouaké"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bassin sédimentaire forme un croissant étroit situé exclusivement au Sud le long du golfe de Guinée, de Fresco à Assinie."
        },
        {
          "id": "seconde_c_svt_ch1_p1_grands_ensembles_socle_bassin_ex3",
          "type": "mcq",
          "prompt": "À quel mégabloc géologique ancien du continent africain appartient le territoire ivoirien ?",
          "options": [
            "Au craton ouest-africain (dorsale de Man ou Léo)",
            "Au bassin du Congo",
            "Au craton du Kalahari",
            "À la chaîne alpine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La Côte d'Ivoire s'enracine dans la dorsale de Man, partie méridionale du craton ouest-africain, stable depuis des centaines de millions d'années."
        },
        {
          "id": "seconde_c_svt_ch1_p1_grands_ensembles_socle_bassin_ex4",
          "type": "mcq",
          "prompt": "Quelle est la différence d'âge fondamentale entre le socle cristallin et le bassin sédimentaire ?",
          "options": [
            "Le socle date du Précambrien alors que le bassin date du Secondaire au Quaternaire",
            "Le bassin est plus ancien que le socle",
            "Ils ont exactement le même âge géologique",
            "Le socle date du Quaternaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le socle s'est formé au Précambrien (4 000 à 540 Ma) alors que le bassin est très récent, né à l'ère Secondaire (135 Ma)."
        },
        {
          "id": "seconde_c_svt_ch1_p1_grands_ensembles_socle_bassin_ex5",
          "type": "mcq",
          "prompt": "Quels sont les deux grands domaines géologiques qui composent le socle cristallin ivoirien ?",
          "options": [
            "Le domaine Archéen et le domaine Protérozoïque",
            "Le domaine Saharien et le domaine Sahélien",
            "Le domaine Côtier et le domaine Océanique",
            "Le domaine Jurassique et le domaine Crétacé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le socle cristallin est divisé en domaine Archéen (à l'Ouest) et domaine Protérozoïque ou Birrimien (à l'Est et au Centre)."
        },
        {
          "id": "seconde_c_svt_ch1_p1_grands_ensembles_socle_bassin_ex6",
          "type": "mcq",
          "prompt": "Comment se nomme la faille subméridienne majeure séparant l'Archéen du Protérozoïque ?",
          "options": [
            "La faille de Sassandra",
            "La faille des lagunes",
            "La faille du Bandama",
            "La faille de San-Pédro"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La faille de Sassandra, d'orientation générale Nord-Sud, est la fracture majeure qui sépare les deux domaines du socle."
        },
        {
          "id": "seconde_c_svt_ch1_p1_grands_ensembles_socle_bassin_ex7",
          "type": "mcq",
          "prompt": "Quelle est la nature pétrographique dominante des roches du socle de Côte d'Ivoire ?",
          "options": [
            "Des roches magmatiques (granitoïdes) et des roches métamorphiques (gneiss, schistes)",
            "Uniquement du sable meuble et des galets",
            "Uniquement du calcaire et de la craie",
            "Des laves volcaniques basaltiques récentes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le terme cristallin indique que le socle est constitué de roches magmatiques plutoniques et métamorphiques indurées."
        },
        {
          "id": "seconde_c_svt_ch1_p1_grands_ensembles_socle_bassin_ex8",
          "type": "mcq",
          "prompt": "Pourquoi qualifie-t-on la Côte d'Ivoire de « pays de socle » ?",
          "options": [
            "Parce que 97,5 % du territoire national repose directement sur le socle précambrien",
            "Parce que le pays est constitué d'îles volcaniques",
            "Parce que l'océan recouvre 97,5 % des terres",
            "Parce que le pétrole couvre tout le pays"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'expression « pays de socle » traduit le fait que la géologie et les paysages ivoiriens sont gouvernés à 97,5 % par le socle ancien."
        }
      ],
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepBadge": "Étape 1/8 · Proportion du socle cristallin",
          "stepTheme": "Proportion du socle cristallin",
          "stepTitle": "Proportion du socle cristallin",
          "paragraphText": "Le socle cristallin précambrien recouvre 97,5 % de la superficie ivoirienne, constituant la quasi-totalité de l'assise géologique nationale.",
          "formula": {
            "name": "Proportion du socle cristallin",
            "formula": "Socle cristallin : 97,5 % | Bassin côtier : 2,5 %",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Retiens 97,5 % pour le socle cristallin !",
          "keyRule": "Retenir les chiffres officiels MENA : socle cristallin = 97,5 % (la quasi-totalité du pays) ; bassin sédimentaire côtier = 2,5 % (au Sud).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p1_grands_ensembles_socle_bassin_ex1",
            "type": "mcq",
            "prompt": "Quelle proportion du territoire de la Côte d'Ivoire est occupée par le socle cristallin précambrien ?",
            "options": [
              "97,5 %",
              "2,5 %",
              "50 %",
              "75 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le socle précambrien recouvre 97,5 % du territoire national, ce qui fait de la Côte d'Ivoire un pays de socle."
          }
        },
        {
          "stepNumber": 2,
          "stepBadge": "Étape 2/8 · Localisation géographique du bassin sédimentaire",
          "stepTheme": "Localisation géographique du bassin sédimentaire",
          "stepTitle": "Localisation géographique du bassin sédimentaire",
          "paragraphText": "Le bassin sédimentaire côtier forme une étroite frange littorale de 20 à 35 km de large s'étirant d'Ouest en Est entre Fresco et Assinie.",
          "formula": {
            "name": "Localisation géographique du bassin sédimentaire",
            "formula": "Bassin côtier : Bande littorale Sud (Fresco à Assinie)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Le bassin sédimentaire est uniquement au Sud en bordure de mer !",
          "keyRule": "Retenir les chiffres officiels MENA : socle cristallin = 97,5 % (la quasi-totalité du pays) ; bassin sédimentaire côtier = 2,5 % (au Sud).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p1_grands_ensembles_socle_bassin_ex2",
            "type": "mcq",
            "prompt": "Où se situe géographiquement le bassin sédimentaire côtier en Côte d'Ivoire ?",
            "options": [
              "Au Sud, en bordure du golfe de Guinée",
              "Au Nord, vers Korhogo",
              "À l'Ouest, dans la région de Man",
              "Au Centre, près de Bouaké"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le bassin sédimentaire forme un croissant étroit situé exclusivement au Sud le long du golfe de Guinée, de Fresco à Assinie."
          }
        },
        {
          "stepNumber": 3,
          "stepBadge": "Étape 3/8 · Appartenance au craton ouest-africain",
          "stepTheme": "Appartenance au craton ouest-africain",
          "stepTitle": "Appartenance au craton ouest-africain",
          "paragraphText": "Un craton est une vaste portion continentale de la croûte terrestre devenue stable après d'anciennes orogenèses précambriennes.",
          "formula": {
            "name": "Appartenance au craton ouest-africain",
            "formula": "Territoire ivoirien : Craton Ouest-Africain (Dorsale de Man)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Retiens le terme officiel : Craton Ouest-Africain (Dorsale de Man) !",
          "keyRule": "Retenir les chiffres officiels MENA : socle cristallin = 97,5 % (la quasi-totalité du pays) ; bassin sédimentaire côtier = 2,5 % (au Sud).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p1_grands_ensembles_socle_bassin_ex3",
            "type": "mcq",
            "prompt": "À quel mégabloc géologique ancien du continent africain appartient le territoire ivoirien ?",
            "options": [
              "Au craton ouest-africain (dorsale de Man ou Léo)",
              "Au bassin du Congo",
              "Au craton du Kalahari",
              "À la chaîne alpine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La Côte d'Ivoire s'enracine dans la dorsale de Man, partie méridionale du craton ouest-africain, stable depuis des centaines de millions d'années."
          }
        },
        {
          "stepNumber": 4,
          "stepBadge": "Étape 4/8 · Différence d'âge entre socle et bassin",
          "stepTheme": "Différence d'âge entre socle et bassin",
          "stepTitle": "Différence d'âge entre socle et bassin",
          "paragraphText": "Le socle précambrien est immensément plus vieux que le bassin sédimentaire récent mis en place lors de l'ouverture de l'Atlantique.",
          "formula": {
            "name": "Différence d'âge entre socle et bassin",
            "formula": "Socle précambrien (4 000 - 540 Ma) vs Bassin côtier (135 - 0 Ma)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Le socle est très ancien (Précambrien), le bassin est récent (Secondaire à Quaternaire) !",
          "keyRule": "Retenir les chiffres officiels MENA : socle cristallin = 97,5 % (la quasi-totalité du pays) ; bassin sédimentaire côtier = 2,5 % (au Sud).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p1_grands_ensembles_socle_bassin_ex4",
            "type": "mcq",
            "prompt": "Quelle est la différence d'âge fondamentale entre le socle cristallin et le bassin sédimentaire ?",
            "options": [
              "Le socle date du Précambrien alors que le bassin date du Secondaire au Quaternaire",
              "Le bassin est plus ancien que le socle",
              "Ils ont exactement le même âge géologique",
              "Le socle date du Quaternaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le socle s'est formé au Précambrien (4 000 à 540 Ma) alors que le bassin est très récent, né à l'ère Secondaire (135 Ma)."
          }
        },
        {
          "stepNumber": 5,
          "stepBadge": "Étape 5/8 · Les deux domaines du socle cristallin",
          "stepTheme": "Les deux domaines du socle cristallin",
          "stepTitle": "Les deux domaines du socle cristallin",
          "paragraphText": "Le socle ivoirien est scindé en deux grandes provinces d'âges distincts : l'Archéen (Ouest) et le Protérozoïque (Est/Centre/Nord).",
          "formula": {
            "name": "Les deux domaines du socle cristallin",
            "formula": "Socle précambrien = Domaine Archéen (Ouest) + Domaine Protérozoïque (Est)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Retiens les 2 domaines : Archéen à l'Ouest, Protérozoïque à l'Est !",
          "keyRule": "Retenir les chiffres officiels MENA : socle cristallin = 97,5 % (la quasi-totalité du pays) ; bassin sédimentaire côtier = 2,5 % (au Sud).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p1_grands_ensembles_socle_bassin_ex5",
            "type": "mcq",
            "prompt": "Quels sont les deux grands domaines géologiques qui composent le socle cristallin ivoirien ?",
            "options": [
              "Le domaine Archéen et le domaine Protérozoïque",
              "Le domaine Saharien et le domaine Sahélien",
              "Le domaine Côtier et le domaine Océanique",
              "Le domaine Jurassique et le domaine Crétacé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le socle cristallin est divisé en domaine Archéen (à l'Ouest) et domaine Protérozoïque ou Birrimien (à l'Est et au Centre)."
          }
        },
        {
          "stepNumber": 6,
          "stepBadge": "Étape 6/8 · La faille de Sassandra, frontière du socle",
          "stepTheme": "La faille de Sassandra, frontière du socle",
          "stepTitle": "La faille de Sassandra, frontière du socle",
          "paragraphText": "La faille de Sassandra traverse verticalement la Côte d'Ivoire du Nord au Sud, constituant une suture géologique fondamentale.",
          "formula": {
            "name": "La faille de Sassandra, frontière du socle",
            "formula": "Domaine Archéen (Ouest) | Faille de Sassandra | Domaine Protérozoïque (Est)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : La faille de Sassandra est Nord-Sud et sépare l'Ouest de l'Est !",
          "keyRule": "Retenir les chiffres officiels MENA : socle cristallin = 97,5 % (la quasi-totalité du pays) ; bassin sédimentaire côtier = 2,5 % (au Sud).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p1_grands_ensembles_socle_bassin_ex6",
            "type": "mcq",
            "prompt": "Comment se nomme la faille subméridienne majeure séparant l'Archéen du Protérozoïque ?",
            "options": [
              "La faille de Sassandra",
              "La faille des lagunes",
              "La faille du Bandama",
              "La faille de San-Pédro"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La faille de Sassandra, d'orientation générale Nord-Sud, est la fracture majeure qui sépare les deux domaines du socle."
          }
        },
        {
          "stepNumber": 7,
          "stepBadge": "Étape 7/8 · Pétrographie dominante du socle",
          "stepTheme": "Pétrographie dominante du socle",
          "stepTitle": "Pétrographie dominante du socle",
          "paragraphText": "Le socle est formé de roches cristallines dures (granites, granodiorites) et de roches métamorphiques (gneiss, migmatites, schistes).",
          "formula": {
            "name": "Pétrographie dominante du socle",
            "formula": "Roches du socle = Roches magmatiques + Roches métamorphiques",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Socle cristallin = roches magmatiques + roches métamorphiques !",
          "keyRule": "Retenir les chiffres officiels MENA : socle cristallin = 97,5 % (la quasi-totalité du pays) ; bassin sédimentaire côtier = 2,5 % (au Sud).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p1_grands_ensembles_socle_bassin_ex7",
            "type": "mcq",
            "prompt": "Quelle est la nature pétrographique dominante des roches du socle de Côte d'Ivoire ?",
            "options": [
              "Des roches magmatiques (granitoïdes) et des roches métamorphiques (gneiss, schistes)",
              "Uniquement du sable meuble et des galets",
              "Uniquement du calcaire et de la craie",
              "Des laves volcaniques basaltiques récentes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le terme cristallin indique que le socle est constitué de roches magmatiques plutoniques et métamorphiques indurées."
          }
        },
        {
          "stepNumber": 8,
          "stepBadge": "Étape 8/8 · La Côte d'Ivoire, pays de socle",
          "stepTheme": "La Côte d'Ivoire, pays de socle",
          "stepTitle": "La Côte d'Ivoire, pays de socle",
          "paragraphText": "L'immense majorité du sol, du relief et des eaux souterraines de la Côte d'Ivoire est façonnée par le socle cristallin précambrien.",
          "formula": {
            "name": "La Côte d'Ivoire, pays de socle",
            "formula": "Côte d'Ivoire : Pays de socle (97,5 % de socle précambrien)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : La Côte d'Ivoire est un pays de socle car le socle occupe 97,5 % du territoire !",
          "keyRule": "Retenir les chiffres officiels MENA : socle cristallin = 97,5 % (la quasi-totalité du pays) ; bassin sédimentaire côtier = 2,5 % (au Sud).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p1_grands_ensembles_socle_bassin_ex8",
            "type": "mcq",
            "prompt": "Pourquoi qualifie-t-on la Côte d'Ivoire de « pays de socle » ?",
            "options": [
              "Parce que 97,5 % du territoire national repose directement sur le socle précambrien",
              "Parce que le pays est constitué d'îles volcaniques",
              "Parce que l'océan recouvre 97,5 % des terres",
              "Parce que le pétrole couvre tout le pays"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'expression « pays de socle » traduit le fait que la géologie et les paysages ivoiriens sont gouvernés à 97,5 % par le socle ancien."
          }
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch1_p2_domaine_archen_keniema_man",
      "order": 2,
      "title": "Le domaine Archéen (Kéniéma-Man) : Âge, localisation et orogenèses anciennes",
      "summary": "Localiser le domaine archéen à l'Ouest de la faille de Sassandra, dater son édification au Précambrien inférieur (4 000 à 2 500 Ma) et comprendre sa cratonisation.",
      "conceptExplanation": "Le domaine Archéen (Kéniéma-Man) est situé exclusivement à l'Ouest de la faille de Sassandra. Il s'est formé au Précambrien inférieur entre 4 000 et 2 500 millions d'années. Il a subi deux mégacycles orogéniques successifs : le Léonnien et le Libérien, achevant sa cratonisation à 2 500 Ma.",
      "formulas": [
        {
          "name": "Chronologie du domaine Archéen",
          "formula": "Âge Archéen : 4 000 à 2 500 Ma (Précambrien inférieur)",
          "note": "Les roches les plus anciennes de Côte d'Ivoire (> 2,5 milliards d'années)."
        }
      ],
      "keyRule": "Archéen = Ouest de la faille de Sassandra = Région montagneuse de Man = 4 000 à 2 500 Ma (Précambrien inférieur) = Orogenèses léonnienne et libérienne.",
      "workedExample": {
        "title": "Datation relative du bloc de Man",
        "statement": "Expliquer pourquoi les roches de Man sont qualifiées de roches du Précambrien inférieur.",
        "methodSteps": [
          "Étape 1 : Identifier la localisation à l'Ouest de la faille de Sassandra (domaine de Kéniéma-Man).",
          "Étape 2 : Rappeler la fourchette chronologique officielle : 4 000 à 2 500 Ma.",
          "Étape 3 : Conclure sur l'appartenance au Précambrien inférieur (Archéen)."
        ],
        "conclusion": "Cette démarche méthodique conforme au programme MENA garantit la pleine maîtrise de la notion pour les devoirs et examens."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch1_p2_domaine_archen_keniema_man_ex1",
          "type": "mcq",
          "prompt": "Dans quelle région de Côte d'Ivoire se situe exclusivement le domaine géologique archéen ?",
          "options": [
            "À l'Ouest de la faille de Sassandra, dans la région de Man et Danané",
            "Au Centre, dans la région du V baoulé vers Bouaké",
            "À l'Est, dans la région d'Abengourou",
            "Au Sud, le long des plages de San-Pédro"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le domaine archéen (Kéniéma-Man) est situé exclusivement à l'Ouest de la faille de Sassandra (régions de Man, Danané, Touba, Guiglo)."
        },
        {
          "id": "seconde_c_svt_ch1_p2_domaine_archen_keniema_man_ex2",
          "type": "mcq",
          "prompt": "Quel est l'âge géologique du domaine Archéen ivoirien ?",
          "options": [
            "Le Précambrien inférieur (4 000 à 2 500 millions d'années)",
            "Le Précambrien supérieur (1 000 à 540 Ma)",
            "L'ère Primaire (540 à 250 Ma)",
            "L'ère Jurassique (200 à 145 Ma)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'Archéen correspond au Précambrien le plus ancien, daté entre 4 000 et 2 500 millions d'années."
        },
        {
          "id": "seconde_c_svt_ch1_p2_domaine_archen_keniema_man_ex3",
          "type": "mcq",
          "prompt": "Quels sont les deux grands cycles orogéniques qui ont structuré le domaine archéen en Côte d'Ivoire ?",
          "options": [
            "Les cycles Léonnien et Libérien",
            "Les cycles Hercynien et Alpin",
            "Les cycles Calédonien et Varisque",
            "Les cycles Jurassique et Crétacé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le domaine archéen a été plissé et métamorphisé par le cycle Léonnien (3 000 Ma) puis par le cycle Libérien (2 600 Ma)."
        },
        {
          "id": "seconde_c_svt_ch1_p2_domaine_archen_keniema_man_ex4",
          "type": "mcq",
          "prompt": "Quel type de relief caractéristique observe-t-on dans le domaine archéen de Man ?",
          "options": [
            "Un relief montagneux très accidenté avec les plus hauts sommets de Côte d'Ivoire",
            "Une plaine basse côtière au ras de l'eau",
            "Un plateau sablonneux horizontal sans aucune pente",
            "Des dunes de sable sahariennes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le domaine archéen abrite les plus hauts reliefs du pays : le Mont Tonkoui (1 189 m) et les Monts Nimba (1 752 m)."
        },
        {
          "id": "seconde_c_svt_ch1_p2_domaine_archen_keniema_man_ex5",
          "type": "mcq",
          "prompt": "Quel degré de métamorphisme caractérise les roches profondes du domaine archéen ?",
          "options": [
            "Un métamorphisme régional de haut degré (catazonal : faciès des granulites)",
            "Un métamorphisme superficiel faible",
            "Une absence totale de métamorphisme",
            "Un métamorphisme hydrothermal froid"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Enfouies à plus de 25 km, les roches archéennes ont été recristallisées sous très hautes températures (> 700 °C) en catazone."
        },
        {
          "id": "seconde_c_svt_ch1_p2_domaine_archen_keniema_man_ex6",
          "type": "mcq",
          "prompt": "Pourquoi qualifie-t-on le domaine archéen de « noyau cratonique stable » ?",
          "options": [
            "Parce qu'il n'a plus subi d'orogenèse plissante depuis sa cratonisation à 2 500 Ma",
            "Parce qu'il s'est effondré au fond de l'océan",
            "Parce qu'il est en éruption volcanique permanente",
            "Parce qu'il a été construit par les hommes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Depuis 2 500 Ma, le bloc de Man est devenu rigide et n'a plus été déformé par des plissements, formant un bouclier stable."
        },
        {
          "id": "seconde_c_svt_ch1_p2_domaine_archen_keniema_man_ex7",
          "type": "mcq",
          "prompt": "Quelle grande ville ivoirienne est la métropole géologique du domaine archéen ?",
          "options": [
            "Man (capitale du Tonkpi)",
            "Bouaké (capitale du Gbêkê)",
            "Korhogo (capitale du Poro)",
            "Abidjan"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Man est la ville emblématique entourée par les massifs de charnockites et de quartzites ferrugineux de l'Archéen."
        },
        {
          "id": "seconde_c_svt_ch1_p2_domaine_archen_keniema_man_ex8",
          "type": "mcq",
          "prompt": "Sous quel autre nom officiel désigne-t-on le domaine archéen dans le programme ivoirien ?",
          "options": [
            "Le domaine de Kéniéma-Man",
            "Le domaine Baoulé-Mossi",
            "Le domaine du Littoral",
            "Le domaine Guinéen côtier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans tous les manuels de SVT du MENA, le domaine archéen est nommé « domaine de Kéniéma-Man »."
        }
      ],
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepBadge": "Étape 1/8 · Localisation du domaine Archéen à l'Ouest",
          "stepTheme": "Localisation du domaine Archéen à l'Ouest",
          "stepTitle": "Localisation du domaine Archéen à l'Ouest",
          "paragraphText": "Le domaine Archéen est strictement circonscrit à l'Ouest de la faille de Sassandra, englobant tout l'Ouest montagneux ivoirien.",
          "formula": {
            "name": "Localisation du domaine Archéen à l'Ouest",
            "formula": "Domaine Archéen = Région Ouest (Man, Danané, Guiglo, Tabou)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Archéen = Ouest = Man, Danané et Guiglo !",
          "keyRule": "Archéen = Ouest de la faille de Sassandra = Région montagneuse de Man = 4 000 à 2 500 Ma (Précambrien inférieur) = Orogenèses léonnienne et libérienne.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p2_domaine_archen_keniema_man_ex1",
            "type": "mcq",
            "prompt": "Dans quelle région de Côte d'Ivoire se situe exclusivement le domaine géologique archéen ?",
            "options": [
              "À l'Ouest de la faille de Sassandra, dans la région de Man et Danané",
              "Au Centre, dans la région du V baoulé vers Bouaké",
              "À l'Est, dans la région d'Abengourou",
              "Au Sud, le long des plages de San-Pédro"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le domaine archéen (Kéniéma-Man) est situé exclusivement à l'Ouest de la faille de Sassandra (régions de Man, Danané, Touba, Guiglo)."
          }
        },
        {
          "stepNumber": 2,
          "stepBadge": "Étape 2/8 · Âge absolu du domaine Archéen",
          "stepTheme": "Âge absolu du domaine Archéen",
          "stepTitle": "Âge absolu du domaine Archéen",
          "paragraphText": "Les roches du domaine archéen ont plus de 2,5 milliards d'années, forgées lors des premiers âges de la Terre.",
          "formula": {
            "name": "Âge absolu du domaine Archéen",
            "formula": "Âge Archéen : 4 000 à 2 500 Ma (Précambrien inférieur)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Retiens 4 000 à 2 500 Ma pour l'Archéen !",
          "keyRule": "Archéen = Ouest de la faille de Sassandra = Région montagneuse de Man = 4 000 à 2 500 Ma (Précambrien inférieur) = Orogenèses léonnienne et libérienne.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p2_domaine_archen_keniema_man_ex2",
            "type": "mcq",
            "prompt": "Quel est l'âge géologique du domaine Archéen ivoirien ?",
            "options": [
              "Le Précambrien inférieur (4 000 à 2 500 millions d'années)",
              "Le Précambrien supérieur (1 000 à 540 Ma)",
              "L'ère Primaire (540 à 250 Ma)",
              "L'ère Jurassique (200 à 145 Ma)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'Archéen correspond au Précambrien le plus ancien, daté entre 4 000 et 2 500 millions d'années."
          }
        },
        {
          "stepNumber": 3,
          "stepBadge": "Étape 3/8 · Les orogenèses léonnienne et libérienne",
          "stepTheme": "Les orogenèses léonnienne et libérienne",
          "stepTitle": "Les orogenèses léonnienne et libérienne",
          "paragraphText": "L'édification du bloc archéen résulte de deux orogenèses précambriennes successives : le Léonnien puis le Libérien.",
          "formula": {
            "name": "Les orogenèses léonnienne et libérienne",
            "formula": "Orogenèse léonnienne (3 000 Ma) -> Orogenèse libérienne (2 600 Ma)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Retiens les 2 orogenèses : Léonnien puis Libérien !",
          "keyRule": "Archéen = Ouest de la faille de Sassandra = Région montagneuse de Man = 4 000 à 2 500 Ma (Précambrien inférieur) = Orogenèses léonnienne et libérienne.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p2_domaine_archen_keniema_man_ex3",
            "type": "mcq",
            "prompt": "Quels sont les deux grands cycles orogéniques qui ont structuré le domaine archéen en Côte d'Ivoire ?",
            "options": [
              "Les cycles Léonnien et Libérien",
              "Les cycles Hercynien et Alpin",
              "Les cycles Calédonien et Varisque",
              "Les cycles Jurassique et Crétacé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le domaine archéen a été plissé et métamorphisé par le cycle Léonnien (3 000 Ma) puis par le cycle Libérien (2 600 Ma)."
          }
        },
        {
          "stepNumber": 4,
          "stepBadge": "Étape 4/8 · Morphologie et relief du domaine Archéen",
          "stepTheme": "Morphologie et relief du domaine Archéen",
          "stepTitle": "Morphologie et relief du domaine Archéen",
          "paragraphText": "La région des dix-huit montagnes de Man doit son relief culminant à la résistance remarquable des roches archéennes à l'érosion.",
          "formula": {
            "name": "Morphologie et relief du domaine Archéen",
            "formula": "Domaine Archéen : Relief montagneux culminant (Mont Tonkoui, Monts Nimba)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Domaine Archéen = Région des dix-huit montagnes de Man !",
          "keyRule": "Archéen = Ouest de la faille de Sassandra = Région montagneuse de Man = 4 000 à 2 500 Ma (Précambrien inférieur) = Orogenèses léonnienne et libérienne.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p2_domaine_archen_keniema_man_ex4",
            "type": "mcq",
            "prompt": "Quel type de relief caractéristique observe-t-on dans le domaine archéen de Man ?",
            "options": [
              "Un relief montagneux très accidenté avec les plus hauts sommets de Côte d'Ivoire",
              "Une plaine basse côtière au ras de l'eau",
              "Un plateau sablonneux horizontal sans aucune pente",
              "Des dunes de sable sahariennes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le domaine archéen abrite les plus hauts reliefs du pays : le Mont Tonkoui (1 189 m) et les Monts Nimba (1 752 m)."
          }
        },
        {
          "stepNumber": 5,
          "stepBadge": "Étape 5/8 · Métamorphisme catazonal de haut degré",
          "stepTheme": "Métamorphisme catazonal de haut degré",
          "stepTitle": "Métamorphisme catazonal de haut degré",
          "paragraphText": "Le métamorphisme de l'Archéen est catazonal (hautes températures et fortes pressions), donnant naissance au faciès des granulites.",
          "formula": {
            "name": "Métamorphisme catazonal de haut degré",
            "formula": "Métamorphisme archéen : Catazonal (Hautes T et P -> Faciès granulite)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Archéen = métamorphisme de haut degré (catazonal / granulite) !",
          "keyRule": "Archéen = Ouest de la faille de Sassandra = Région montagneuse de Man = 4 000 à 2 500 Ma (Précambrien inférieur) = Orogenèses léonnienne et libérienne.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p2_domaine_archen_keniema_man_ex5",
            "type": "mcq",
            "prompt": "Quel degré de métamorphisme caractérise les roches profondes du domaine archéen ?",
            "options": [
              "Un métamorphisme régional de haut degré (catazonal : faciès des granulites)",
              "Un métamorphisme superficiel faible",
              "Une absence totale de métamorphisme",
              "Un métamorphisme hydrothermal froid"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Enfouies à plus de 25 km, les roches archéennes ont été recristallisées sous très hautes températures (> 700 °C) en catazone."
          }
        },
        {
          "stepNumber": 6,
          "stepBadge": "Étape 6/8 · Cratonisation et stabilité du bloc de Man",
          "stepTheme": "Cratonisation et stabilité du bloc de Man",
          "stepTitle": "Cratonisation et stabilité du bloc de Man",
          "paragraphText": "La cratonisation libérienne a transformé l'Archéen en une masse continentale indéformable qui a servi de butoir aux orogenèses suivantes.",
          "formula": {
            "name": "Cratonisation et stabilité du bloc de Man",
            "formula": "Cratonisation libérienne (2 500 Ma) -> Stabilité continentale définitive",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Le domaine archéen est stable depuis 2 500 millions d'années !",
          "keyRule": "Archéen = Ouest de la faille de Sassandra = Région montagneuse de Man = 4 000 à 2 500 Ma (Précambrien inférieur) = Orogenèses léonnienne et libérienne.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p2_domaine_archen_keniema_man_ex6",
            "type": "mcq",
            "prompt": "Pourquoi qualifie-t-on le domaine archéen de « noyau cratonique stable » ?",
            "options": [
              "Parce qu'il n'a plus subi d'orogenèse plissante depuis sa cratonisation à 2 500 Ma",
              "Parce qu'il s'est effondré au fond de l'océan",
              "Parce qu'il est en éruption volcanique permanente",
              "Parce qu'il a été construit par les hommes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Depuis 2 500 Ma, le bloc de Man est devenu rigide et n'a plus été déformé par des plissements, formant un bouclier stable."
          }
        },
        {
          "stepNumber": 7,
          "stepBadge": "Étape 7/8 · Man, cœur géologique du domaine Archéen",
          "stepTheme": "Man, cœur géologique du domaine Archéen",
          "stepTitle": "Man, cœur géologique du domaine Archéen",
          "paragraphText": "La cuvette de Man et ses pitons rocheux constituent le terrain d'étude privilégié des géologues pour le socle archéen.",
          "formula": {
            "name": "Man, cœur géologique du domaine Archéen",
            "formula": "Ville de Man = Cœur du domaine Archéen de Côte d'Ivoire",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Ville de Man = Métropole de l'Archéen !",
          "keyRule": "Archéen = Ouest de la faille de Sassandra = Région montagneuse de Man = 4 000 à 2 500 Ma (Précambrien inférieur) = Orogenèses léonnienne et libérienne.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p2_domaine_archen_keniema_man_ex7",
            "type": "mcq",
            "prompt": "Quelle grande ville ivoirienne est la métropole géologique du domaine archéen ?",
            "options": [
              "Man (capitale du Tonkpi)",
              "Bouaké (capitale du Gbêkê)",
              "Korhogo (capitale du Poro)",
              "Abidjan"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Man est la ville emblématique entourée par les massifs de charnockites et de quartzites ferrugineux de l'Archéen."
          }
        },
        {
          "stepNumber": 8,
          "stepBadge": "Étape 8/8 · Appellation officielle : domaine de Kéniéma-Man",
          "stepTheme": "Appellation officielle : domaine de Kéniéma-Man",
          "stepTitle": "Appellation officielle : domaine de Kéniéma-Man",
          "paragraphText": "L'appellation 'domaine de Kéniéma-Man' rappelle la continuité géologique de ce bloc très ancien s'étendant vers la Guinée et le Libéria.",
          "formula": {
            "name": "Appellation officielle : domaine de Kéniéma-Man",
            "formula": "Domaine Archéen = Domaine de Kéniéma-Man",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Domaine Archéen = Domaine de Kéniéma-Man !",
          "keyRule": "Archéen = Ouest de la faille de Sassandra = Région montagneuse de Man = 4 000 à 2 500 Ma (Précambrien inférieur) = Orogenèses léonnienne et libérienne.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p2_domaine_archen_keniema_man_ex8",
            "type": "mcq",
            "prompt": "Sous quel autre nom officiel désigne-t-on le domaine archéen dans le programme ivoirien ?",
            "options": [
              "Le domaine de Kéniéma-Man",
              "Le domaine Baoulé-Mossi",
              "Le domaine du Littoral",
              "Le domaine Guinéen côtier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans tous les manuels de SVT du MENA, le domaine archéen est nommé « domaine de Kéniéma-Man »."
          }
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch1_p3_petrographie_archen_charnockites_itabirites",
      "order": 3,
      "title": "Pétrographie de l'Archéen : Charnockites, granulites et itabirites",
      "summary": "Identifier les roches caractéristiques du domaine archéen (charnockites, granulites, gneiss à hypersthène, itabirites) et les gisements de fer.",
      "conceptExplanation": "Le domaine archéen est caractérisé par un ensemble lithologique unique formé à haute température et haute pression : les charnockites (granitoïdes à hypersthène), les granulites, les migmatites et les itabirites (quartzites ferrugineux rubanés constituant les grands gisements de fer de Man et du Mont Nimba).",
      "formulas": [
        {
          "name": "Lithologie diagnostique de l'Archéen",
          "formula": "Roches archéennes = Charnockites + Granulites + Itabirites (Quartzites à Fer)",
          "note": "Roches de très haute résistance mécanique."
        }
      ],
      "keyRule": "Charnockite = granitoïde à hypersthène (faciès granulite). Itabirite = quartzite ferrugineux rubané (minerai de fer de Klahoyo, Gao et Nimba).",
      "workedExample": {
        "title": "Reconnaissance d'un échantillon rocheux de Man",
        "statement": "Un échantillon présente une texture grenue sombre avec présence d'hypersthène. Identifier la roche et son domaine.",
        "methodSteps": [
          "Étape 1 : Observer le minéral caractéristique : hypersthène (pyroxène anhydre de haute température).",
          "Étape 2 : Conclure sur la nature pétrographique : charnockite.",
          "Étape 3 : Attribuer au domaine Archéen de Kéniéma-Man."
        ],
        "conclusion": "Cette démarche méthodique conforme au programme MENA garantit la pleine maîtrise de la notion pour les devoirs et examens."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch1_p3_petrographie_archen_charnockites_itabirites_ex1",
          "type": "mcq",
          "prompt": "Quelle roche magmatique plutonique à hypersthène est emblématique du domaine archéen de Man ?",
          "options": [
            "La charnockite",
            "Le basalte vacuolaire",
            "Le calcaire coquillier",
            "La craie blanche"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La charnockite est un granitoïde sombre à hypersthène cristallisé sous haute température dans le faciès granulite."
        },
        {
          "id": "seconde_c_svt_ch1_p3_petrographie_archen_charnockites_itabirites_ex2",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une itabirite dans le domaine archéen ivoirien ?",
          "options": [
            "Un quartzite ferrugineux rubané riche en magnétite et hématite (minerai de fer)",
            "Une roche calcaire contenant des coquilles fossiles",
            "Une coulée de lave basaltique liquide récente",
            "Une couche d'argile meuble humide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les itabirites sont des quartzites rubanés composés d'une alternance de lits de quartz blanc et de lits d'oxydes de fer noirs (hématite, magnétite)."
        },
        {
          "id": "seconde_c_svt_ch1_p3_petrographie_archen_charnockites_itabirites_ex3",
          "type": "mcq",
          "prompt": "Quel minéral ferromagnésien anhydre de haute température est le marqueur de la charnockite ?",
          "options": [
            "L'hypersthène (pyroxène orthorhombique)",
            "La calcite",
            "Le gypse",
            "L'halite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'hypersthène est le pyroxène anhydre typique des conditions métamorphiques extrêmes (> 700 °C) de l'Archéen."
        },
        {
          "id": "seconde_c_svt_ch1_p3_petrographie_archen_charnockites_itabirites_ex4",
          "type": "mcq",
          "prompt": "Sur quels monts du domaine archéen de Man se situent les réserves majeures d'itabirites ferrifères ?",
          "options": [
            "Le Mont Klahoyo et le Mont Gao",
            "Le Mont Korhogo",
            "La colline de Bouaké",
            "Le plateau d'Abidjan"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les Monts Klahoyo et Gao (proches de Man) ainsi que les Monts Nimba renferment des centaines de millions de tonnes de fer dans les itabirites."
        },
        {
          "id": "seconde_c_svt_ch1_p3_petrographie_archen_charnockites_itabirites_ex5",
          "type": "mcq",
          "prompt": "Quel faciès métamorphique régional est caractéristique des roches profondes de l'Archéen ?",
          "options": [
            "Le faciès des granulites",
            "Le faciès des schistes verts",
            "Le faciès des zéolites",
            "Le faciès des cornéennes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le faciès granulite correspond aux températures (> 700 °C) et pressions (> 8 kbar) les plus intenses de la lithosphère continentale."
        },
        {
          "id": "seconde_c_svt_ch1_p3_petrographie_archen_charnockites_itabirites_ex6",
          "type": "mcq",
          "prompt": "Quelle roche métamorphique rubanée résulte de la fusion partielle (anatexie) dans le socle archéen ?",
          "options": [
            "La migmatite",
            "Le gypse",
            "La bauxite",
            "L'argile rouge"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La migmatite est une roche mixte formée lorsque la roche métamorphique commence à fondre partiellement en profondeur."
        },
        {
          "id": "seconde_c_svt_ch1_p3_petrographie_archen_charnockites_itabirites_ex7",
          "type": "mcq",
          "prompt": "Quelle texture microscopique présentent généralement les granulites et charnockites archéennes ?",
          "options": [
            "Une texture granoblastique polygonale compacte",
            "Une texture vitreuse avec des bulles de gaz",
            "Une texture fibreuse meuble",
            "Une texture sédimentaire argileuse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sous forte pression continue, les cristaux se réarrangent en mosaïque serrée appelée texture granoblastique."
        },
        {
          "id": "seconde_c_svt_ch1_p3_petrographie_archen_charnockites_itabirites_ex8",
          "type": "mcq",
          "prompt": "Pour quelle propriété physique majeure les roches archéennes sont-elles recherchées en génie civil ?",
          "options": [
            "Leur dureté extrême, compacité et haute résistance à l'écrasement mécanique",
            "Leur faible poids et leur flottabilité",
            "Leur dissolution facile à l'eau",
            "Leur mollesse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les granites et charnockites archéens fournissent les meilleurs granulats concassés pour les bétons de barrage et de routes lourdes."
        }
      ],
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepBadge": "Étape 1/8 · La charnockite, roche archéenne emblématique",
          "stepTheme": "La charnockite, roche archéenne emblématique",
          "stepTitle": "La charnockite, roche archéenne emblématique",
          "paragraphText": "La charnockite contient du quartz, des feldspaths et de l'hypersthène. C'est la roche reine des massifs de Man.",
          "formula": {
            "name": "La charnockite, roche archéenne emblématique",
            "formula": "Charnockite = Granitoïde à hypersthène formé en faciès granulite",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Charnockite = roche magmatique caractéristique de Man !",
          "keyRule": "Charnockite = granitoïde à hypersthène (faciès granulite). Itabirite = quartzite ferrugineux rubané (minerai de fer de Klahoyo, Gao et Nimba).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p3_petrographie_archen_charnockites_itabirites_ex1",
            "type": "mcq",
            "prompt": "Quelle roche magmatique plutonique à hypersthène est emblématique du domaine archéen de Man ?",
            "options": [
              "La charnockite",
              "Le basalte vacuolaire",
              "Le calcaire coquillier",
              "La craie blanche"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La charnockite est un granitoïde sombre à hypersthène cristallisé sous haute température dans le faciès granulite."
          }
        },
        {
          "stepNumber": 2,
          "stepBadge": "Étape 2/8 · Les itabirites ou quartzites ferrugineux",
          "stepTheme": "Les itabirites ou quartzites ferrugineux",
          "stepTitle": "Les itabirites ou quartzites ferrugineux",
          "paragraphText": "Ces roches métamorphiques sédimentaires anciennes constituent les plus grands gisements de fer de Côte d'Ivoire.",
          "formula": {
            "name": "Les itabirites ou quartzites ferrugineux",
            "formula": "Itabirites = Quartzites ferrugineux rubanés (Quartz + Oxydes de Fer)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Itabirites = quartzites ferrugineux = gisements de fer de Man et Nimba !",
          "keyRule": "Charnockite = granitoïde à hypersthène (faciès granulite). Itabirite = quartzite ferrugineux rubané (minerai de fer de Klahoyo, Gao et Nimba).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p3_petrographie_archen_charnockites_itabirites_ex2",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une itabirite dans le domaine archéen ivoirien ?",
            "options": [
              "Un quartzite ferrugineux rubané riche en magnétite et hématite (minerai de fer)",
              "Une roche calcaire contenant des coquilles fossiles",
              "Une coulée de lave basaltique liquide récente",
              "Une couche d'argile meuble humide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les itabirites sont des quartzites rubanés composés d'une alternance de lits de quartz blanc et de lits d'oxydes de fer noirs (hématite, magnétite)."
          }
        },
        {
          "stepNumber": 3,
          "stepBadge": "Étape 3/8 · L'hypersthène, marqueur minéralogique",
          "stepTheme": "L'hypersthène, marqueur minéralogique",
          "stepTitle": "L'hypersthène, marqueur minéralogique",
          "paragraphText": "La présence d'hypersthène prouve que le magma s'est équilibré dans des conditions totalement privées d'eau en croûte profonde.",
          "formula": {
            "name": "L'hypersthène, marqueur minéralogique",
            "formula": "Minéral repère archéen : Hypersthène (Pyroxène de haute T)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Hypersthène = minéral clé de la charnockite de Man !",
          "keyRule": "Charnockite = granitoïde à hypersthène (faciès granulite). Itabirite = quartzite ferrugineux rubané (minerai de fer de Klahoyo, Gao et Nimba).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p3_petrographie_archen_charnockites_itabirites_ex3",
            "type": "mcq",
            "prompt": "Quel minéral ferromagnésien anhydre de haute température est le marqueur de la charnockite ?",
            "options": [
              "L'hypersthène (pyroxène orthorhombique)",
              "La calcite",
              "Le gypse",
              "L'halite"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'hypersthène est le pyroxène anhydre typique des conditions métamorphiques extrêmes (> 700 °C) de l'Archéen."
          }
        },
        {
          "stepNumber": 4,
          "stepBadge": "Étape 4/8 · Gisements de fer du Mont Klahoyo et du Mont Gao",
          "stepTheme": "Gisements de fer du Mont Klahoyo et du Mont Gao",
          "stepTitle": "Gisements de fer du Mont Klahoyo et du Mont Gao",
          "paragraphText": "Les crêtes rocheuses de Klahoyo et Gao résistent à l'érosion grâce à l'extrême dureté du quartzite ferrugineux.",
          "formula": {
            "name": "Gisements de fer du Mont Klahoyo et du Mont Gao",
            "formula": "Gisements de Klahoyo et Gao : Itabirites archéennes de Man",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Fer de Klahoyo et Gao = itabirites archéennes !",
          "keyRule": "Charnockite = granitoïde à hypersthène (faciès granulite). Itabirite = quartzite ferrugineux rubané (minerai de fer de Klahoyo, Gao et Nimba).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p3_petrographie_archen_charnockites_itabirites_ex4",
            "type": "mcq",
            "prompt": "Sur quels monts du domaine archéen de Man se situent les réserves majeures d'itabirites ferrifères ?",
            "options": [
              "Le Mont Klahoyo et le Mont Gao",
              "Le Mont Korhogo",
              "La colline de Bouaké",
              "Le plateau d'Abidjan"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les Monts Klahoyo et Gao (proches de Man) ainsi que les Monts Nimba renferment des centaines de millions de tonnes de fer dans les itabirites."
          }
        },
        {
          "stepNumber": 5,
          "stepBadge": "Étape 5/8 · Le faciès des granulites",
          "stepTheme": "Le faciès des granulites",
          "stepTitle": "Le faciès des granulites",
          "paragraphText": "Ce faciès de haut degré déshydrate complètement les roches et donne naissance aux textures denses et massives de l'Archéen.",
          "formula": {
            "name": "Le faciès des granulites",
            "formula": "Faciès granulite : Température > 700 °C et Pression > 8 kbar",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Archéen = Faciès granulite (températures et pressions extrêmes) !",
          "keyRule": "Charnockite = granitoïde à hypersthène (faciès granulite). Itabirite = quartzite ferrugineux rubané (minerai de fer de Klahoyo, Gao et Nimba).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p3_petrographie_archen_charnockites_itabirites_ex5",
            "type": "mcq",
            "prompt": "Quel faciès métamorphique régional est caractéristique des roches profondes de l'Archéen ?",
            "options": [
              "Le faciès des granulites",
              "Le faciès des schistes verts",
              "Le faciès des zéolites",
              "Le faciès des cornéennes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le faciès granulite correspond aux températures (> 700 °C) et pressions (> 8 kbar) les plus intenses de la lithosphère continentale."
          }
        },
        {
          "stepNumber": 6,
          "stepBadge": "Étape 6/8 · Les migmatites et l'anatexie",
          "stepTheme": "Les migmatites et l'anatexie",
          "stepTitle": "Les migmatites et l'anatexie",
          "paragraphText": "Les migmatites présentent un rubanement alternant des veines magmatiques claires et des bandes métamorphiques sombres.",
          "formula": {
            "name": "Les migmatites et l'anatexie",
            "formula": "Anatexie crustale -> Migmatite (Fusion partielle de la roche)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Migmatite = roche issue de la fusion partielle en profondeur !",
          "keyRule": "Charnockite = granitoïde à hypersthène (faciès granulite). Itabirite = quartzite ferrugineux rubané (minerai de fer de Klahoyo, Gao et Nimba).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p3_petrographie_archen_charnockites_itabirites_ex6",
            "type": "mcq",
            "prompt": "Quelle roche métamorphique rubanée résulte de la fusion partielle (anatexie) dans le socle archéen ?",
            "options": [
              "La migmatite",
              "Le gypse",
              "La bauxite",
              "L'argile rouge"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La migmatite est une roche mixte formée lorsque la roche métamorphique commence à fondre partiellement en profondeur."
          }
        },
        {
          "stepNumber": 7,
          "stepBadge": "Étape 7/8 · Texture granoblastique des roches profondes",
          "stepTheme": "Texture granoblastique des roches profondes",
          "stepTitle": "Texture granoblastique des roches profondes",
          "paragraphText": "Cette texture compacte sans vides intergranulaires confère aux roches archéennes une résistance mécanique colossale.",
          "formula": {
            "name": "Texture granoblastique des roches profondes",
            "formula": "Roches catazonales -> Texture granoblastique polygonale",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Granulites et charnockites = texture granoblastique polygonale !",
          "keyRule": "Charnockite = granitoïde à hypersthène (faciès granulite). Itabirite = quartzite ferrugineux rubané (minerai de fer de Klahoyo, Gao et Nimba).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p3_petrographie_archen_charnockites_itabirites_ex7",
            "type": "mcq",
            "prompt": "Quelle texture microscopique présentent généralement les granulites et charnockites archéennes ?",
            "options": [
              "Une texture granoblastique polygonale compacte",
              "Une texture vitreuse avec des bulles de gaz",
              "Une texture fibreuse meuble",
              "Une texture sédimentaire argileuse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sous forte pression continue, les cristaux se réarrangent en mosaïque serrée appelée texture granoblastique."
          }
        },
        {
          "stepNumber": 8,
          "stepBadge": "Étape 8/8 · Propriétés mécaniques des roches archéennes",
          "stepTheme": "Propriétés mécaniques des roches archéennes",
          "stepTitle": "Propriétés mécaniques des roches archéennes",
          "paragraphText": "Leur très forte densité et leur recristallisation totale empêchent toute fracturation facile sous les charges industrielles.",
          "formula": {
            "name": "Propriétés mécaniques des roches archéennes",
            "formula": "Charnockite & Granite archéen -> Haute résistance mécanique",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Charnockite et granite = roches très dures et compactes !",
          "keyRule": "Charnockite = granitoïde à hypersthène (faciès granulite). Itabirite = quartzite ferrugineux rubané (minerai de fer de Klahoyo, Gao et Nimba).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p3_petrographie_archen_charnockites_itabirites_ex8",
            "type": "mcq",
            "prompt": "Pour quelle propriété physique majeure les roches archéennes sont-elles recherchées en génie civil ?",
            "options": [
              "Leur dureté extrême, compacité et haute résistance à l'écrasement mécanique",
              "Leur faible poids et leur flottabilité",
              "Leur dissolution facile à l'eau",
              "Leur mollesse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les granites et charnockites archéens fournissent les meilleurs granulats concassés pour les bétons de barrage et de routes lourdes."
          }
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch1_p4_faille_de_sassandra_frontiere_tectonique",
      "order": 4,
      "title": "La faille de Sassandra : Fracture subméridienne majeure et suture géologique",
      "summary": "Analyser l'orientation subméridienne de la faille de Sassandra, son rôle de suture tectonique et les contrastes de part et d'autre.",
      "conceptExplanation": "La faille de Sassandra est la fracture tectonique majeure du socle ivoirien. D'orientation subméridienne (Nord-Sud), elle sépare le domaine Archéen à l'Ouest (4 000 à 2 500 Ma) du domaine Protérozoïque à l'Est (2 500 à 540 Ma). Elle a guidé le cours du fleuve Sassandra et est jalonnée de roches cisaillées (mylonites).",
      "formulas": [
        {
          "name": "Frontière tectonique subméridienne",
          "formula": "Domaine Archéen (Ouest) | Faille de Sassandra | Domaine Protérozoïque (Est)",
          "note": "La faille de Sassandra est la suture géologique centrale de la Côte d'Ivoire."
        }
      ],
      "keyRule": "Faille de Sassandra = Direction Nord-Sud (subméridienne) = Sépare l'Archéen (Ouest) du Protérozoïque (Est) = Guidage du fleuve Sassandra.",
      "workedExample": {
        "title": "Analyse d'une coupe Ouest-Est franchissant la faille",
        "statement": "Une coupe géologique traverse la faille de Sassandra d'Ouest en Est. Quel changement d'âge observe-t-on ?",
        "methodSteps": [
          "Étape 1 : Localiser la faille de direction subméridienne Nord-Sud.",
          "Étape 2 : Noter le domaine occidental : Archéen d'âge Précambrien inférieur (4 000 à 2 500 Ma).",
          "Étape 3 : Noter le passage au domaine oriental : Protérozoïque d'âge Précambrien supérieur (2 500 à 540 Ma).",
          "Étape 4 : Conclure que la faille fait passer d'un socle très ancien à un socle plus jeune de plus d'un milliard d'années."
        ],
        "conclusion": "Cette démarche méthodique conforme au programme MENA garantit la pleine maîtrise de la notion pour les devoirs et examens."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch1_p4_faille_de_sassandra_frontiere_tectonique_ex1",
          "type": "mcq",
          "prompt": "Quelle est l'orientation générale (direction géographique) de la faille de Sassandra ?",
          "options": [
            "Subméridienne (direction générale Nord-Sud)",
            "Strictement Est-Ouest",
            "Nord-Est vers Sud-Ouest",
            "Circulaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La faille de Sassandra est orientée Nord-Sud (subméridienne) sur toute sa traversée du territoire national."
        },
        {
          "id": "seconde_c_svt_ch1_p4_faille_de_sassandra_frontiere_tectonique_ex2",
          "type": "mcq",
          "prompt": "Quel rôle géologique fondamental joue la faille de Sassandra dans le socle ivoirien ?",
          "options": [
            "Elle constitue la suture tectonique majeure séparant l'Archéen du Protérozoïque",
            "Elle sépare la Côte d'Ivoire de l'océan Atlantique",
            "Elle entoure le bassin côtier",
            "Elle empêche les séismes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La faille de Sassandra est la frontière structurale séparant les deux grands domaines d'âges très différents du socle."
        },
        {
          "id": "seconde_c_svt_ch1_p4_faille_de_sassandra_frontiere_tectonique_ex3",
          "type": "mcq",
          "prompt": "Quel contraste d'âge observe-t-on en franchissant la faille de Sassandra d'Ouest en Est ?",
          "options": [
            "On passe de roches très anciennes (> 2 500 Ma) à l'Ouest à des roches plus jeunes (< 2 500 Ma) à l'Est",
            "On passe d'un socle jeune à un socle plus vieux",
            "L'âge est strictement identique des deux côtés",
            "L'Est a 5 milliards d'années"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le franchissement de la faille fait rajeunir le socle rocheux de plus d'un milliard d'années en un seul contact tectonique."
        },
        {
          "id": "seconde_c_svt_ch1_p4_faille_de_sassandra_frontiere_tectonique_ex4",
          "type": "mcq",
          "prompt": "Quel grand fleuve ivoirien suit sur une large partie de son tracé le couloir de cette faille ?",
          "options": [
            "Le fleuve Sassandra",
            "Le fleuve Comoé",
            "Le fleuve Cavally",
            "La rivière Agnéby"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'érosion fluviale exploite toujours les zones de roches broyées par les failles : le fleuve Sassandra emprunte ce couloir."
        },
        {
          "id": "seconde_c_svt_ch1_p4_faille_de_sassandra_frontiere_tectonique_ex5",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une mylonite que l'on observe le long du plan de la faille de Sassandra ?",
          "options": [
            "Une roche métamorphique broyée et cisaillée mécaniquement lors du jeu de la faille",
            "Une roche calcaire sédimentaire riche en coquilles",
            "Une roche volcanique liquide émise par un cratère",
            "Un cristal de sel marin"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les mylonites résultent de la déformation plastique et du broyage dynamique des minéraux le long des zones de cisaillement ductile."
        },
        {
          "id": "seconde_c_svt_ch1_p4_faille_de_sassandra_frontiere_tectonique_ex6",
          "type": "mcq",
          "prompt": "Dans quelle localité côtière du Sud-Ouest la faille de Sassandra atteint-elle le golfe de Guinée ?",
          "options": [
            "À la ville de Sassandra",
            "À Abidjan",
            "À San-Pédro",
            "À Grand-Bassam"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La faille de Sassandra débouche sur le littoral au niveau de la ville portuaire de Sassandra où elle rejoint l'océan."
        },
        {
          "id": "seconde_c_svt_ch1_p4_faille_de_sassandra_frontiere_tectonique_ex7",
          "type": "mcq",
          "prompt": "Quel type de mouvement tectonique a affecté la faille de Sassandra lors du cycle éburnéen (2 100 Ma) ?",
          "options": [
            "Un coulissage latéral ductile (rejeu en décrochement)",
            "Une ouverture océanique avec cratère volcanique",
            "Un affaissement sans frottement",
            "Une absence totale de contrainte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Durant l'orogenèse éburnéenne, la faille de Sassandra a rejoué en un grand couloir de décrochement ductile crustal."
        },
        {
          "id": "seconde_c_svt_ch1_p4_faille_de_sassandra_frontiere_tectonique_ex8",
          "type": "mcq",
          "prompt": "Comment la faille de Sassandra se manifeste-t-elle sur le terrain géologique ?",
          "options": [
            "Par un couloir subméridien de roches cisaillées, mylonitisées et orientées Nord-Sud",
            "Par un gouffre volcanique béant sans fond",
            "Par une montagne de lave en fusion",
            "Elle est totalement invisible et introuvable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sur le terrain, les géologues identifient la faille par les foliations mylonitiques verticales orientées Nord-Sud."
        }
      ],
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepBadge": "Étape 1/8 · Orientation subméridienne Nord-Sud",
          "stepTheme": "Orientation subméridienne Nord-Sud",
          "stepTitle": "Orientation subméridienne Nord-Sud",
          "paragraphText": "L'adjectif subméridien signifie qui suit approximativement le tracé d'un méridien géographique (axe Nord-Sud).",
          "formula": {
            "name": "Orientation subméridienne Nord-Sud",
            "formula": "Direction de la faille de Sassandra : Subméridienne (Nord-Sud)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Faille de Sassandra = direction Nord-Sud (subméridienne) !",
          "keyRule": "Faille de Sassandra = Direction Nord-Sud (subméridienne) = Sépare l'Archéen (Ouest) du Protérozoïque (Est) = Guidage du fleuve Sassandra.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p4_faille_de_sassandra_frontiere_tectonique_ex1",
            "type": "mcq",
            "prompt": "Quelle est l'orientation générale (direction géographique) de la faille de Sassandra ?",
            "options": [
              "Subméridienne (direction générale Nord-Sud)",
              "Strictement Est-Ouest",
              "Nord-Est vers Sud-Ouest",
              "Circulaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La faille de Sassandra est orientée Nord-Sud (subméridienne) sur toute sa traversée du territoire national."
          }
        },
        {
          "stepNumber": 2,
          "stepBadge": "Étape 2/8 · Rôle de frontière et de suture tectonique",
          "stepTheme": "Rôle de frontière et de suture tectonique",
          "stepTitle": "Rôle de frontière et de suture tectonique",
          "paragraphText": "Cette fracture crustale profonde juxtapose un bloc ancien rigide (l'Archéen) et une ceinture plus jeune (le Birrimien).",
          "formula": {
            "name": "Rôle de frontière et de suture tectonique",
            "formula": "Faille de Sassandra = Frontière tectonique majeure du socle ivoirien",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : La faille sépare l'Archéen à l'Ouest du Protérozoïque à l'Est !",
          "keyRule": "Faille de Sassandra = Direction Nord-Sud (subméridienne) = Sépare l'Archéen (Ouest) du Protérozoïque (Est) = Guidage du fleuve Sassandra.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p4_faille_de_sassandra_frontiere_tectonique_ex2",
            "type": "mcq",
            "prompt": "Quel rôle géologique fondamental joue la faille de Sassandra dans le socle ivoirien ?",
            "options": [
              "Elle constitue la suture tectonique majeure séparant l'Archéen du Protérozoïque",
              "Elle sépare la Côte d'Ivoire de l'océan Atlantique",
              "Elle entoure le bassin côtier",
              "Elle empêche les séismes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La faille de Sassandra est la frontière structurale séparant les deux grands domaines d'âges très différents du socle."
          }
        },
        {
          "stepNumber": 3,
          "stepBadge": "Étape 3/8 · Contraste d'âge de part et d'autre de la faille",
          "stepTheme": "Contraste d'âge de part et d'autre de la faille",
          "stepTitle": "Contraste d'âge de part et d'autre de la faille",
          "paragraphText": "À l'Ouest s'étend le Précambrien inférieur (4 000 à 2 500 Ma) ; à l'Est commence le Précambrien supérieur (2 500 à 540 Ma).",
          "formula": {
            "name": "Contraste d'âge de part et d'autre de la faille",
            "formula": "Ouest : Archéen (> 2 500 Ma) | Est : Protérozoïque (< 2 500 Ma)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : L'Ouest (Archéen) est plus vieux que l'Est (Protérozoïque) !",
          "keyRule": "Faille de Sassandra = Direction Nord-Sud (subméridienne) = Sépare l'Archéen (Ouest) du Protérozoïque (Est) = Guidage du fleuve Sassandra.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p4_faille_de_sassandra_frontiere_tectonique_ex3",
            "type": "mcq",
            "prompt": "Quel contraste d'âge observe-t-on en franchissant la faille de Sassandra d'Ouest en Est ?",
            "options": [
              "On passe de roches très anciennes (> 2 500 Ma) à l'Ouest à des roches plus jeunes (< 2 500 Ma) à l'Est",
              "On passe d'un socle jeune à un socle plus vieux",
              "L'âge est strictement identique des deux côtés",
              "L'Est a 5 milliards d'années"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le franchissement de la faille fait rajeunir le socle rocheux de plus d'un milliard d'années en un seul contact tectonique."
          }
        },
        {
          "stepNumber": 4,
          "stepBadge": "Étape 4/8 · Guidage hydrographique du fleuve Sassandra",
          "stepTheme": "Guidage hydrographique du fleuve Sassandra",
          "stepTitle": "Guidage hydrographique du fleuve Sassandra",
          "paragraphText": "Le lit du fleuve Sassandra est directement guidé par la zone de faiblesse structurale créée par la faille géologique.",
          "formula": {
            "name": "Guidage hydrographique du fleuve Sassandra",
            "formula": "Réseau hydrographique : Le fleuve Sassandra est guidé par la faille éponyme",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Le cours du fleuve Sassandra est guidé par la faille de Sassandra !",
          "keyRule": "Faille de Sassandra = Direction Nord-Sud (subméridienne) = Sépare l'Archéen (Ouest) du Protérozoïque (Est) = Guidage du fleuve Sassandra.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p4_faille_de_sassandra_frontiere_tectonique_ex4",
            "type": "mcq",
            "prompt": "Quel grand fleuve ivoirien suit sur une large partie de son tracé le couloir de cette faille ?",
            "options": [
              "Le fleuve Sassandra",
              "Le fleuve Comoé",
              "Le fleuve Cavally",
              "La rivière Agnéby"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'érosion fluviale exploite toujours les zones de roches broyées par les failles : le fleuve Sassandra emprunte ce couloir."
          }
        },
        {
          "stepNumber": 5,
          "stepBadge": "Étape 5/8 · Mylonitisation et roches broyées",
          "stepTheme": "Mylonitisation et roches broyées",
          "stepTitle": "Mylonitisation et roches broyées",
          "paragraphText": "Le frottement sous forte contrainte le long de la faille produit des bandes de mylonites rubanées caractéristiques.",
          "formula": {
            "name": "Mylonitisation et roches broyées",
            "formula": "Zone de cisaillement ductile -> Formation de mylonites",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Mylonite = roche broyée et cisaillée le long de la faille !",
          "keyRule": "Faille de Sassandra = Direction Nord-Sud (subméridienne) = Sépare l'Archéen (Ouest) du Protérozoïque (Est) = Guidage du fleuve Sassandra.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p4_faille_de_sassandra_frontiere_tectonique_ex5",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une mylonite que l'on observe le long du plan de la faille de Sassandra ?",
            "options": [
              "Une roche métamorphique broyée et cisaillée mécaniquement lors du jeu de la faille",
              "Une roche calcaire sédimentaire riche en coquilles",
              "Une roche volcanique liquide émise par un cratère",
              "Un cristal de sel marin"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les mylonites résultent de la déformation plastique et du broyage dynamique des minéraux le long des zones de cisaillement ductile."
          }
        },
        {
          "stepNumber": 6,
          "stepBadge": "Étape 6/8 · Aboutissement littoral à Sassandra",
          "stepTheme": "Aboutissement littoral à Sassandra",
          "stepTitle": "Aboutissement littoral à Sassandra",
          "paragraphText": "C'est précisément parce qu'elle aboutit à la ville côtière de Sassandra qu'elle a été baptisée ainsi par les géologues.",
          "formula": {
            "name": "Aboutissement littoral à Sassandra",
            "formula": "Terminaison méridionale : Ville littorale de Sassandra",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : La faille aboutit au littoral au niveau de la ville de Sassandra !",
          "keyRule": "Faille de Sassandra = Direction Nord-Sud (subméridienne) = Sépare l'Archéen (Ouest) du Protérozoïque (Est) = Guidage du fleuve Sassandra.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p4_faille_de_sassandra_frontiere_tectonique_ex6",
            "type": "mcq",
            "prompt": "Dans quelle localité côtière du Sud-Ouest la faille de Sassandra atteint-elle le golfe de Guinée ?",
            "options": [
              "À la ville de Sassandra",
              "À Abidjan",
              "À San-Pédro",
              "À Grand-Bassam"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La faille de Sassandra débouche sur le littoral au niveau de la ville portuaire de Sassandra où elle rejoint l'océan."
          }
        },
        {
          "stepNumber": 7,
          "stepBadge": "Étape 7/8 · Rejeu ductile lors de l'Éburnéen",
          "stepTheme": "Rejeu ductile lors de l'Éburnéen",
          "stepTitle": "Rejeu ductile lors de l'Éburnéen",
          "paragraphText": "Les contraintes horizontales Est-Ouest ont provoqué un coulissage des compartiments le long de la faille.",
          "formula": {
            "name": "Rejeu ductile lors de l'Éburnéen",
            "formula": "Orogenèse éburnéenne -> Rejeu en décrochement ductile de la faille de Sassandra",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : La faille de Sassandra a rejoué en cisaillement lors du cycle éburnéen !",
          "keyRule": "Faille de Sassandra = Direction Nord-Sud (subméridienne) = Sépare l'Archéen (Ouest) du Protérozoïque (Est) = Guidage du fleuve Sassandra.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p4_faille_de_sassandra_frontiere_tectonique_ex7",
            "type": "mcq",
            "prompt": "Quel type de mouvement tectonique a affecté la faille de Sassandra lors du cycle éburnéen (2 100 Ma) ?",
            "options": [
              "Un coulissage latéral ductile (rejeu en décrochement)",
              "Une ouverture océanique avec cratère volcanique",
              "Un affaissement sans frottement",
              "Une absence totale de contrainte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Durant l'orogenèse éburnéenne, la faille de Sassandra a rejoué en un grand couloir de décrochement ductile crustal."
          }
        },
        {
          "stepNumber": 8,
          "stepBadge": "Étape 8/8 · Manifestation sur le terrain",
          "stepTheme": "Manifestation sur le terrain",
          "stepTitle": "Manifestation sur le terrain",
          "paragraphText": "Le passage de la faille se traduit par des affleurements de granites écrasés et de schistes de cisaillement subméridiens.",
          "formula": {
            "name": "Manifestation sur le terrain",
            "formula": "Indice de terrain : Foliations mylonitiques verticales d'orientation Nord-Sud",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Sur le terrain : couloir de roches cisaillées (mylonites) d'orientation Nord-Sud !",
          "keyRule": "Faille de Sassandra = Direction Nord-Sud (subméridienne) = Sépare l'Archéen (Ouest) du Protérozoïque (Est) = Guidage du fleuve Sassandra.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p4_faille_de_sassandra_frontiere_tectonique_ex8",
            "type": "mcq",
            "prompt": "Comment la faille de Sassandra se manifeste-t-elle sur le terrain géologique ?",
            "options": [
              "Par un couloir subméridien de roches cisaillées, mylonitisées et orientées Nord-Sud",
              "Par un gouffre volcanique béant sans fond",
              "Par une montagne de lave en fusion",
              "Elle est totalement invisible et introuvable"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sur le terrain, les géologues identifient la faille par les foliations mylonitiques verticales orientées Nord-Sud."
          }
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch1_p5_domaine_proterozoique_birrimien_eburneen",
      "order": 5,
      "title": "Le domaine Protérozoïque (Baoulé-Mossi / Birrimien) : Âge et cycle éburnéen",
      "summary": "Localiser le domaine protérozoïque (Est/Centre/Nord), comprendre son âge (2 500 à 540 Ma) et le rôle fondateur du mégacycle orogénique éburnéen (2 100 Ma).",
      "conceptExplanation": "Le domaine Protérozoïque (ou Baoulé-Mossi) s'étend à l'Est de la faille de Sassandra et couvre les deux tiers du socle ivoirien. Il date du Précambrien supérieur (2 500 à 540 Ma) et a été entièrement structuré lors du mégacycle orogénique éburnéen (2 100 Ma), d'où son nom international de Birrimien.",
      "formulas": [
        {
          "name": "Chronologie du domaine Protérozoïque",
          "formula": "Protérozoïque : 2 500 à 540 Ma | Orogenèse Éburnéenne : 2 100 Ma",
          "note": "Domaine le plus étendu du socle ivoirien."
        }
      ],
      "keyRule": "Protérozoïque = Birrimien = Domaine Baoulé-Mossi = Est, Centre et Nord = 2 500 à 540 Ma = Orogenèse éburnéenne (2 100 Ma).",
      "workedExample": {
        "title": "Comparaison géographique des deux domaines",
        "statement": "Un élève affirme que le domaine de Bouaké et Korhogo est archéen. Corriger son affirmation.",
        "methodSteps": [
          "Étape 1 : Situer Bouaké (Centre) et Korhogo (Nord) par rapport à la faille de Sassandra : ils sont à l'Est.",
          "Étape 2 : Rappeler que toute la zone à l'Est de la faille appartient au domaine Protérozoïque (Birrimien / Baoulé-Mossi).",
          "Étape 3 : Conclure que ces villes reposent sur le socle protérozoïque façonné par l'orogenèse éburnéenne."
        ],
        "conclusion": "Cette démarche méthodique conforme au programme MENA garantit la pleine maîtrise de la notion pour les devoirs et examens."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch1_p5_domaine_proterozoique_birrimien_eburneen_ex1",
          "type": "mcq",
          "prompt": "Quelle portion géographique du socle cristallin est occupée par le domaine Protérozoïque ?",
          "options": [
            "Tout le Centre, le Nord et l'Est du pays (environ les deux tiers du socle)",
            "Uniquement une bande de 10 km au bord de mer",
            "Uniquement le sommet du Mont Nimba",
            "Une île au milieu du lac Kossou"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le domaine Protérozoïque s'étend sur toute la partie située à l'Est de la faille de Sassandra, couvrant la majorité du pays."
        },
        {
          "id": "seconde_c_svt_ch1_p5_domaine_proterozoique_birrimien_eburneen_ex2",
          "type": "mcq",
          "prompt": "Quel est l'âge géologique officiel du domaine Protérozoïque ivoirien ?",
          "options": [
            "Le Précambrien supérieur (2 500 à 540 millions d'années)",
            "L'ère Tertiaire (65 à 2 Ma)",
            "L'époque contemporaine",
            "Moins de 10 000 ans"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le Protérozoïque succède à l'Archéen et s'étend de 2 500 à 540 millions d'années."
        },
        {
          "id": "seconde_c_svt_ch1_p5_domaine_proterozoique_birrimien_eburneen_ex3",
          "type": "mcq",
          "prompt": "Quel grand cycle orogénique mondial a donné naissance et forme au domaine birrimien ?",
          "options": [
            "Le mégacycle orogénique éburnéen (vers 2 100 Ma)",
            "Le cycle hercynien",
            "Le cycle alpin",
            "Le cycle calédonien"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'orogenèse éburnéenne (du nom latin de la Côte d'Ivoire, Côte d'Ivoire = Eburnea) s'est déroulée entre 2 400 et 1 800 Ma."
        },
        {
          "id": "seconde_c_svt_ch1_p5_domaine_proterozoique_birrimien_eburneen_ex4",
          "type": "mcq",
          "prompt": "Sous quel autre nom est communément désigné le domaine Protérozoïque en Afrique de l'Ouest ?",
          "options": [
            "Le domaine Baoulé-Mossi (ou Birrimien)",
            "Le domaine du Sahara occidental",
            "Le domaine Atlantique",
            "Le domaine Congolais"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On l'appelle domaine Baoulé-Mossi car il s'étend du pays Baoulé en Côte d'Ivoire jusqu'au plateau Mossi au Burkina Faso."
        },
        {
          "id": "seconde_c_svt_ch1_p5_domaine_proterozoique_birrimien_eburneen_ex5",
          "type": "mcq",
          "prompt": "Quelles grandes villes ivoiriennes reposent directement sur le domaine birrimien protérozoïque ?",
          "options": [
            "Bouaké, Korhogo, Yamoussoukro et Abengourou",
            "Uniquement la ville de Man",
            "Uniquement la ville de Danané",
            "Aucune ville ivoirienne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Situées au Centre, au Nord et à l'Est, toutes ces grandes agglomérations sont bâties sur le socle birrimien."
        },
        {
          "id": "seconde_c_svt_ch1_p5_domaine_proterozoique_birrimien_eburneen_ex6",
          "type": "mcq",
          "prompt": "Quel contraste orographique (de relief) distingue le Birrimien de l'Archéen ?",
          "options": [
            "Le Birrimien présente des plateaux ondulés et des pénéplaines au lieu de hautes montagnes",
            "Le Birrimien a des volcans actifs en éruption",
            "Le Birrimien est recouvert par la mer",
            "Le Birrimien est parfaitement plat comme une table"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'orogenèse éburnéenne a été suivie d'une très longue pénéplanation créant de vastes plateaux cuirassés au Centre et au Nord."
        },
        {
          "id": "seconde_c_svt_ch1_p5_domaine_proterozoique_birrimien_eburneen_ex7",
          "type": "mcq",
          "prompt": "Quel degré de métamorphisme caractérise les formations birrimiennes comparé à l'Archéen ?",
          "options": [
            "Un métamorphisme de degré plus faible (épizonal à mésozonal : schistes verts et amphibolites)",
            "Un métamorphisme ultra-profond de catazone",
            "Aucun métamorphisme",
            "Une vitrification volcanique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le Birrimien a cristallisé à moyenne et faible profondeur, donnant le faciès des schistes verts (épizone)."
        },
        {
          "id": "seconde_c_svt_ch1_p5_domaine_proterozoique_birrimien_eburneen_ex8",
          "type": "mcq",
          "prompt": "Pourquoi le cycle éburnéen porte-t-il ce nom dans la géologie mondiale ?",
          "options": [
            "En référence au nom latin de la Côte d'Ivoire (Eburnea / Côte des Éléphants) où il fut défini",
            "En référence à un chercheur nommé Éburnéen",
            "En référence à une fleur locale",
            "C'est un mot d'origine anglaise"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le mégacycle éburnéen a été défini en Côte d'Ivoire et est aujourd'hui utilisé par tous les géologues de la planète."
        }
      ],
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepBadge": "Étape 1/8 · Étendue géographique du domaine Protérozoïque",
          "stepTheme": "Étendue géographique du domaine Protérozoïque",
          "stepTitle": "Étendue géographique du domaine Protérozoïque",
          "paragraphText": "Le domaine Protérozoïque (Baoulé-Mossi) est la plus grande entité géologique de la Côte d'Ivoire.",
          "formula": {
            "name": "Étendue géographique du domaine Protérozoïque",
            "formula": "Domaine Protérozoïque : Centre + Nord + Est (2/3 du socle)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Protérozoïque = Centre, Nord et Est de la Côte d'Ivoire !",
          "keyRule": "Protérozoïque = Birrimien = Domaine Baoulé-Mossi = Est, Centre et Nord = 2 500 à 540 Ma = Orogenèse éburnéenne (2 100 Ma).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p5_domaine_proterozoique_birrimien_eburneen_ex1",
            "type": "mcq",
            "prompt": "Quelle portion géographique du socle cristallin est occupée par le domaine Protérozoïque ?",
            "options": [
              "Tout le Centre, le Nord et l'Est du pays (environ les deux tiers du socle)",
              "Uniquement une bande de 10 km au bord de mer",
              "Uniquement le sommet du Mont Nimba",
              "Une île au milieu du lac Kossou"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le domaine Protérozoïque s'étend sur toute la partie située à l'Est de la faille de Sassandra, couvrant la majorité du pays."
          }
        },
        {
          "stepNumber": 2,
          "stepBadge": "Étape 2/8 · Âge absolu du domaine Protérozoïque",
          "stepTheme": "Âge absolu du domaine Protérozoïque",
          "stepTitle": "Âge absolu du domaine Protérozoïque",
          "paragraphText": "Formé au Précambrien supérieur, il est plus jeune que l'Archéen de plus d'un milliard d'années.",
          "formula": {
            "name": "Âge absolu du domaine Protérozoïque",
            "formula": "Âge Protérozoïque : 2 500 à 540 Ma (Précambrien supérieur)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Retiens 2 500 à 540 Ma pour le Protérozoïque !",
          "keyRule": "Protérozoïque = Birrimien = Domaine Baoulé-Mossi = Est, Centre et Nord = 2 500 à 540 Ma = Orogenèse éburnéenne (2 100 Ma).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p5_domaine_proterozoique_birrimien_eburneen_ex2",
            "type": "mcq",
            "prompt": "Quel est l'âge géologique officiel du domaine Protérozoïque ivoirien ?",
            "options": [
              "Le Précambrien supérieur (2 500 à 540 millions d'années)",
              "L'ère Tertiaire (65 à 2 Ma)",
              "L'époque contemporaine",
              "Moins de 10 000 ans"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le Protérozoïque succède à l'Archéen et s'étend de 2 500 à 540 millions d'années."
          }
        },
        {
          "stepNumber": 3,
          "stepBadge": "Étape 3/8 · L'orogenèse éburnéenne (2 100 Ma)",
          "stepTheme": "L'orogenèse éburnéenne (2 100 Ma)",
          "stepTitle": "L'orogenèse éburnéenne (2 100 Ma)",
          "paragraphText": "L'orogenèse éburnéenne est l'événement tectono-métamorphique majeur qui a soudé les ceintures birrimiennes au craton.",
          "formula": {
            "name": "L'orogenèse éburnéenne (2 100 Ma)",
            "formula": "Cycle orogénique éburnéen (2 100 Ma) -> Structuration du Birrimien",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : L'Éburnéen (2 100 Ma) a façonné tout le Protérozoïque ivoirien !",
          "keyRule": "Protérozoïque = Birrimien = Domaine Baoulé-Mossi = Est, Centre et Nord = 2 500 à 540 Ma = Orogenèse éburnéenne (2 100 Ma).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p5_domaine_proterozoique_birrimien_eburneen_ex3",
            "type": "mcq",
            "prompt": "Quel grand cycle orogénique mondial a donné naissance et forme au domaine birrimien ?",
            "options": [
              "Le mégacycle orogénique éburnéen (vers 2 100 Ma)",
              "Le cycle hercynien",
              "Le cycle alpin",
              "Le cycle calédonien"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'orogenèse éburnéenne (du nom latin de la Côte d'Ivoire, Côte d'Ivoire = Eburnea) s'est déroulée entre 2 400 et 1 800 Ma."
          }
        },
        {
          "stepNumber": 4,
          "stepBadge": "Étape 4/8 · Appellation Baoulé-Mossi / Birrimien",
          "stepTheme": "Appellation Baoulé-Mossi / Birrimien",
          "stepTitle": "Appellation Baoulé-Mossi / Birrimien",
          "paragraphText": "Le terme Birrimien provient de la rivière Birim au Ghana où ces séries sédimentaires et volcaniques ont été décrites.",
          "formula": {
            "name": "Appellation Baoulé-Mossi / Birrimien",
            "formula": "Domaine Protérozoïque = Domaine Baoulé-Mossi = Birrimien",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Protérozoïque = Domaine Baoulé-Mossi ou Birrimien !",
          "keyRule": "Protérozoïque = Birrimien = Domaine Baoulé-Mossi = Est, Centre et Nord = 2 500 à 540 Ma = Orogenèse éburnéenne (2 100 Ma).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p5_domaine_proterozoique_birrimien_eburneen_ex4",
            "type": "mcq",
            "prompt": "Sous quel autre nom est communément désigné le domaine Protérozoïque en Afrique de l'Ouest ?",
            "options": [
              "Le domaine Baoulé-Mossi (ou Birrimien)",
              "Le domaine du Sahara occidental",
              "Le domaine Atlantique",
              "Le domaine Congolais"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On l'appelle domaine Baoulé-Mossi car il s'étend du pays Baoulé en Côte d'Ivoire jusqu'au plateau Mossi au Burkina Faso."
          }
        },
        {
          "stepNumber": 5,
          "stepBadge": "Étape 5/8 · Villes du domaine Protérozoïque",
          "stepTheme": "Villes du domaine Protérozoïque",
          "stepTitle": "Villes du domaine Protérozoïque",
          "paragraphText": "Le V baoulé (Yamoussoukro, Bouaké) et les savanes du Nord (Korhogo) reposent sur les granitoïdes et schistes birrimiens.",
          "formula": {
            "name": "Villes du domaine Protérozoïque",
            "formula": "Villes birrimiennes : Bouaké, Yamoussoukro, Korhogo, Bondoukou, Daloa",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Bouaké, Yamoussoukro, Korhogo = Domaine Protérozoïque !",
          "keyRule": "Protérozoïque = Birrimien = Domaine Baoulé-Mossi = Est, Centre et Nord = 2 500 à 540 Ma = Orogenèse éburnéenne (2 100 Ma).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p5_domaine_proterozoique_birrimien_eburneen_ex5",
            "type": "mcq",
            "prompt": "Quelles grandes villes ivoiriennes reposent directement sur le domaine birrimien protérozoïque ?",
            "options": [
              "Bouaké, Korhogo, Yamoussoukro et Abengourou",
              "Uniquement la ville de Man",
              "Uniquement la ville de Danané",
              "Aucune ville ivoirienne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Situées au Centre, au Nord et à l'Est, toutes ces grandes agglomérations sont bâties sur le socle birrimien."
          }
        },
        {
          "stepNumber": 6,
          "stepBadge": "Étape 6/8 · Relief de plateaux et pénéplaines birrimiennes",
          "stepTheme": "Relief de plateaux et pénéplaines birrimiennes",
          "stepTitle": "Relief de plateaux et pénéplaines birrimiennes",
          "paragraphText": "Contrairement aux massifs montagneux de Man, le Birrimien forme un paysage de bas plateaux et d'inselbergs granitiques.",
          "formula": {
            "name": "Relief de plateaux et pénéplaines birrimiennes",
            "formula": "Relief Protérozoïque : Pénéplaines ondulées + Inselbergs granitiques",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Protérozoïque = plateaux ondulés et inselbergs (relief moins abrupt que Man) !",
          "keyRule": "Protérozoïque = Birrimien = Domaine Baoulé-Mossi = Est, Centre et Nord = 2 500 à 540 Ma = Orogenèse éburnéenne (2 100 Ma).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p5_domaine_proterozoique_birrimien_eburneen_ex6",
            "type": "mcq",
            "prompt": "Quel contraste orographique (de relief) distingue le Birrimien de l'Archéen ?",
            "options": [
              "Le Birrimien présente des plateaux ondulés et des pénéplaines au lieu de hautes montagnes",
              "Le Birrimien a des volcans actifs en éruption",
              "Le Birrimien est recouvert par la mer",
              "Le Birrimien est parfaitement plat comme une table"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'orogenèse éburnéenne a été suivie d'une très longue pénéplanation créant de vastes plateaux cuirassés au Centre et au Nord."
          }
        },
        {
          "stepNumber": 7,
          "stepBadge": "Étape 7/8 · Métamorphisme épizonal à mésozonal",
          "stepTheme": "Métamorphisme épizonal à mésozonal",
          "stepTitle": "Métamorphisme épizonal à mésozonal",
          "paragraphText": "Les températures et pressions subies lors de l'Éburnéen étaient modérées comparées au catazonal archéen.",
          "formula": {
            "name": "Métamorphisme épizonal à mésozonal",
            "formula": "Métamorphisme birrimien : Épizone à Mésozone (Faciès schistes verts)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Birrimien = métamorphisme épizonal (schistes verts) moins poussé que l'Archéen !",
          "keyRule": "Protérozoïque = Birrimien = Domaine Baoulé-Mossi = Est, Centre et Nord = 2 500 à 540 Ma = Orogenèse éburnéenne (2 100 Ma).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p5_domaine_proterozoique_birrimien_eburneen_ex7",
            "type": "mcq",
            "prompt": "Quel degré de métamorphisme caractérise les formations birrimiennes comparé à l'Archéen ?",
            "options": [
              "Un métamorphisme de degré plus faible (épizonal à mésozonal : schistes verts et amphibolites)",
              "Un métamorphisme ultra-profond de catazone",
              "Aucun métamorphisme",
              "Une vitrification volcanique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le Birrimien a cristallisé à moyenne et faible profondeur, donnant le faciès des schistes verts (épizone)."
          }
        },
        {
          "stepNumber": 8,
          "stepBadge": "Étape 8/8 · Origine du nom du mégacycle Éburnéen",
          "stepTheme": "Origine du nom du mégacycle Éburnéen",
          "stepTitle": "Origine du nom du mégacycle Éburnéen",
          "paragraphText": "Le terme rend hommage à la Côte d'Ivoire (Costa Eburnea), référence internationale pour la géologie du Précambrien supérieur.",
          "formula": {
            "name": "Origine du nom du mégacycle Éburnéen",
            "formula": "Cycle Éburnéen : Défini en Côte d'Ivoire (Costa Eburnea)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Éburnéen vient de Costa Eburnea (Côte d'Ivoire en latin) !",
          "keyRule": "Protérozoïque = Birrimien = Domaine Baoulé-Mossi = Est, Centre et Nord = 2 500 à 540 Ma = Orogenèse éburnéenne (2 100 Ma).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p5_domaine_proterozoique_birrimien_eburneen_ex8",
            "type": "mcq",
            "prompt": "Pourquoi le cycle éburnéen porte-t-il ce nom dans la géologie mondiale ?",
            "options": [
              "En référence au nom latin de la Côte d'Ivoire (Eburnea / Côte des Éléphants) où il fut défini",
              "En référence à un chercheur nommé Éburnéen",
              "En référence à une fleur locale",
              "C'est un mot d'origine anglaise"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le mégacycle éburnéen a été défini en Côte d'Ivoire et est aujourd'hui utilisé par tous les géologues de la planète."
          }
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch1_p6_lithologie_metallogenie_birrimien_or",
      "order": 6,
      "title": "Lithologie et métallogénie du Birrimien : Granitoïdes, roches vertes et or",
      "summary": "Identifier les granites concordants et discordants éburnéens, les ceintures de roches vertes volcano-sédimentaires et les gisements d'or.",
      "conceptExplanation": "Le Protérozoïque birrimien est constitué de deux ensembles majeurs : les ceintures de roches vertes volcano-sédimentaires (schistes birrimiens plissés, métavulcanites) et de gigantesques massifs de granitoïdes éburnéens (granites concordants syntectoniques et granites discordants tarditectoniques). C'est la province métallogénique de l'or en Côte d'Ivoire (mines de Tongon, Ity, Bonikro, Yaouré).",
      "formulas": [
        {
          "name": "Lithologie birrimienne et métallogénie",
          "formula": "Birrimien = Granitoïdes éburnéens + Ceintures de roches vertes (Schistes) -> Gisements d'Or",
          "note": "Les filons de quartz aurifère sont piégés dans les zones de cisaillement birrimiennes."
        }
      ],
      "keyRule": "Birrimien = Ceintures de roches vertes (schistes) + Granitoïdes éburnéens = Principale réserve d'or de Côte d'Ivoire.",
      "workedExample": {
        "title": "Localisation des grandes mines d'or",
        "statement": "Expliquer pourquoi les mines d'or de Tongon (Nord) et Bonikro (Centre) sont dans le Birrimien.",
        "methodSteps": [
          "Étape 1 : Constater leur localisation géographique à l'Est de la faille de Sassandra.",
          "Étape 2 : Rappeler que les minéralisations aurifères hydrothermales se sont mises en place lors de l'Éburnéen (2 100 Ma).",
          "Étape 3 : Conclure que les ceintures de roches vertes birrimiennes renferment la quasi-totalité des filons d'or ivoiriens."
        ],
        "conclusion": "Cette démarche méthodique conforme au programme MENA garantit la pleine maîtrise de la notion pour les devoirs et examens."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch1_p6_lithologie_metallogenie_birrimien_or_ex1",
          "type": "mcq",
          "prompt": "Quelle est la roche sédimentaire métamorphisée la plus répandue dans les sillons birrimiens ?",
          "options": [
            "Le schiste birrimien (micaschiste et séricitoschiste)",
            "Le sel gemme blanc",
            "La craie tendre",
            "Le charbon de terre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les schistes birrimiens proviennent de boues et argiles océaniques comprimées et plissées lors de l'Éburnéen."
        },
        {
          "id": "seconde_c_svt_ch1_p6_lithologie_metallogenie_birrimien_or_ex2",
          "type": "mcq",
          "prompt": "Qu'appelle-t-on les « ceintures de roches vertes » dans le domaine birrimien ?",
          "options": [
            "Des bandes allongées de roches volcaniques et sédimentaires métamorphisées en faciès schistes verts",
            "Des forêts d'arbres à feuilles vertes",
            "Des champs de canne à sucre",
            "Des peintures sur roches"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ces ceintures résultent d'anciens arcs insulaires océaniques métamorphisés où la chlorite et l'épidote donnent une teinte verte."
        },
        {
          "id": "seconde_c_svt_ch1_p6_lithologie_metallogenie_birrimien_or_ex3",
          "type": "mcq",
          "prompt": "Quelle ressource minière précieuse majeure de la Côte d'Ivoire est associée au Birrimien ?",
          "options": [
            "L'or (gisements filoniens et disséminés)",
            "L'émeraude verte",
            "Le rubis rouge",
            "Le sel gemme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toutes les grandes mines d'or ivoiriennes (Tongon, Yaouré, Bonikro, Agbaou, Ity) sont encaissées dans le Birrimien."
        },
        {
          "id": "seconde_c_svt_ch1_p6_lithologie_metallogenie_birrimien_or_ex4",
          "type": "mcq",
          "prompt": "Comment distingue-t-on les granites concordants des granites discordants éburnéens ?",
          "options": [
            "Les concordants épousent la déformation des schistes alors que les discordants coupent nettement les structures",
            "Les concordants sont liquides et les discordants solides",
            "Les concordants sont blancs et les discordants noirs",
            "Il n'y a aucune différence"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les granites concordants (syntectoniques) se sont mis en place pendant le plissement ; les discordants (tarditectoniques) ont recoupé les plis déjà formés."
        },
        {
          "id": "seconde_c_svt_ch1_p6_lithologie_metallogenie_birrimien_or_ex5",
          "type": "mcq",
          "prompt": "Quelles célèbres mines d'or ivoiriennes sont situées dans le socle birrimien ?",
          "options": [
            "Tongon (M'Bengué), Yaouré (Angovia) et Bonikro (Hirrémé)",
            "Les mines de fer de Man",
            "Les puits de pétrole de Grand-Bassam",
            "Les salines de Grand-Lahou"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ces exploitations industrielles extraient l'or piégé dans les zones de cisaillement ductile des ceintures birrimiennes."
        },
        {
          "id": "seconde_c_svt_ch1_p6_lithologie_metallogenie_birrimien_or_ex6",
          "type": "mcq",
          "prompt": "Quelle roche magmatique filonienne blanche riche en silice est le vecteur principal de l'or ?",
          "options": [
            "Le filon de quartz hydrothermal",
            "Le calcaire coquillier",
            "L'argile rouge latéritique",
            "Le gypse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les fluides chauds ascendants précipitent la silice pure sous forme de quartz laiteux en piégeant les paillettes d'or natif."
        },
        {
          "id": "seconde_c_svt_ch1_p6_lithologie_metallogenie_birrimien_or_ex7",
          "type": "mcq",
          "prompt": "En plus de l'or, quel autre minerai métallique stratégique est extrait du Birrimien (ex: à Bondoukou et Lauzoua) ?",
          "options": [
            "Le manganèse",
            "Le mercure",
            "L'uranium radioactif",
            "Le platine liquide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La Côte d'Ivoire exploite d'importants gisements de manganèse sédimentaire métamorphisé dans les sillons birrimiens."
        },
        {
          "id": "seconde_c_svt_ch1_p6_lithologie_metallogenie_birrimien_or_ex8",
          "type": "mcq",
          "prompt": "Quel type de métamorphisme thermique se développe au contact des granites discordants birrimiens ?",
          "options": [
            "Le métamorphisme de contact (cornéennes)",
            "Le métamorphisme de choc météoritique",
            "La fusion totale du pays",
            "Aucune transformation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La chaleur du magma intrusif cuit les schistes encaissants, créant une auréole de métamorphisme de contact (cornéennes)."
        }
      ],
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepBadge": "Étape 1/8 · Les schistes birrimiens",
          "stepTheme": "Les schistes birrimiens",
          "stepTitle": "Les schistes birrimiens",
          "paragraphText": "Les schistes birrimiens se débitent en feuillets réguliers et forment le remplissage des ceintures volcano-sédimentaires.",
          "formula": {
            "name": "Les schistes birrimiens",
            "formula": "Sillons birrimiens : Schistes argileux métamorphisés (Micaschistes)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Schistes birrimiens = roches métamorphiques feuilletées du Protérozoïque !",
          "keyRule": "Birrimien = Ceintures de roches vertes (schistes) + Granitoïdes éburnéens = Principale réserve d'or de Côte d'Ivoire.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p6_lithologie_metallogenie_birrimien_or_ex1",
            "type": "mcq",
            "prompt": "Quelle est la roche sédimentaire métamorphisée la plus répandue dans les sillons birrimiens ?",
            "options": [
              "Le schiste birrimien (micaschiste et séricitoschiste)",
              "Le sel gemme blanc",
              "La craie tendre",
              "Le charbon de terre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les schistes birrimiens proviennent de boues et argiles océaniques comprimées et plissées lors de l'Éburnéen."
          }
        },
        {
          "stepNumber": 2,
          "stepBadge": "Étape 2/8 · Les ceintures de roches vertes (greenstone belts)",
          "stepTheme": "Les ceintures de roches vertes (greenstone belts)",
          "stepTitle": "Les ceintures de roches vertes (greenstone belts)",
          "paragraphText": "Ces bandes étroites sont enserrées entre les grands massifs de granitoïdes éburnéens.",
          "formula": {
            "name": "Les ceintures de roches vertes (greenstone belts)",
            "formula": "Ceintures de roches vertes : Métavulcanites + Schistes (Minéraux verts : Chlorite, Épidote)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Ceintures de roches vertes = anciennes roches volcaniques et sédimentaires birrimiennes !",
          "keyRule": "Birrimien = Ceintures de roches vertes (schistes) + Granitoïdes éburnéens = Principale réserve d'or de Côte d'Ivoire.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p6_lithologie_metallogenie_birrimien_or_ex2",
            "type": "mcq",
            "prompt": "Qu'appelle-t-on les « ceintures de roches vertes » dans le domaine birrimien ?",
            "options": [
              "Des bandes allongées de roches volcaniques et sédimentaires métamorphisées en faciès schistes verts",
              "Des forêts d'arbres à feuilles vertes",
              "Des champs de canne à sucre",
              "Des peintures sur roches"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ces ceintures résultent d'anciens arcs insulaires océaniques métamorphisés où la chlorite et l'épidote donnent une teinte verte."
          }
        },
        {
          "stepNumber": 3,
          "stepBadge": "Étape 3/8 · Métallogénie de l'or birrimien",
          "stepTheme": "Métallogénie de l'or birrimien",
          "stepTitle": "Métallogénie de l'or birrimien",
          "paragraphText": "Les circulations hydrothermales liées aux granites éburnéens ont déposé l'or dans les failles et filons de quartz.",
          "formula": {
            "name": "Métallogénie de l'or birrimien",
            "formula": "Birrimien ivoirien -> Principale province aurifère d'Afrique de l'Ouest",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Birrimien = domaine de prédilection des mines d'or ivoiriennes !",
          "keyRule": "Birrimien = Ceintures de roches vertes (schistes) + Granitoïdes éburnéens = Principale réserve d'or de Côte d'Ivoire.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p6_lithologie_metallogenie_birrimien_or_ex3",
            "type": "mcq",
            "prompt": "Quelle ressource minière précieuse majeure de la Côte d'Ivoire est associée au Birrimien ?",
            "options": [
              "L'or (gisements filoniens et disséminés)",
              "L'émeraude verte",
              "Le rubis rouge",
              "Le sel gemme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Toutes les grandes mines d'or ivoiriennes (Tongon, Yaouré, Bonikro, Agbaou, Ity) sont encaissées dans le Birrimien."
          }
        },
        {
          "stepNumber": 4,
          "stepBadge": "Étape 4/8 · Granites concordants vs discordants",
          "stepTheme": "Granites concordants vs discordants",
          "stepTitle": "Granites concordants vs discordants",
          "paragraphText": "La concordance structurale traduit la contemporanéité du magma et de la compression orogénique.",
          "formula": {
            "name": "Granites concordants vs discordants",
            "formula": "Granites concordants (Syntectoniques) vs Granites discordants (Tarditectoniques)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Concordants = parallèles aux couches ; Discordants = recoupent les couches !",
          "keyRule": "Birrimien = Ceintures de roches vertes (schistes) + Granitoïdes éburnéens = Principale réserve d'or de Côte d'Ivoire.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p6_lithologie_metallogenie_birrimien_or_ex4",
            "type": "mcq",
            "prompt": "Comment distingue-t-on les granites concordants des granites discordants éburnéens ?",
            "options": [
              "Les concordants épousent la déformation des schistes alors que les discordants coupent nettement les structures",
              "Les concordants sont liquides et les discordants solides",
              "Les concordants sont blancs et les discordants noirs",
              "Il n'y a aucune différence"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les granites concordants (syntectoniques) se sont mis en place pendant le plissement ; les discordants (tarditectoniques) ont recoupé les plis déjà formés."
          }
        },
        {
          "stepNumber": 5,
          "stepBadge": "Étape 5/8 · Mines d'or industrielles birrimiennes",
          "stepTheme": "Mines d'or industrielles birrimiennes",
          "stepTitle": "Mines d'or industrielles birrimiennes",
          "paragraphText": "L'or est associé à des sulfures (pyrite, arsénopyrite) dans des filons de quartz hydrothermal.",
          "formula": {
            "name": "Mines d'or industrielles birrimiennes",
            "formula": "Mines d'or en activité : Tongon, Yaouré, Bonikro, Agbaou, Sissingué",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Tongon, Yaouré et Bonikro = grandes mines d'or du Birrimien !",
          "keyRule": "Birrimien = Ceintures de roches vertes (schistes) + Granitoïdes éburnéens = Principale réserve d'or de Côte d'Ivoire.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p6_lithologie_metallogenie_birrimien_or_ex5",
            "type": "mcq",
            "prompt": "Quelles célèbres mines d'or ivoiriennes sont situées dans le socle birrimien ?",
            "options": [
              "Tongon (M'Bengué), Yaouré (Angovia) et Bonikro (Hirrémé)",
              "Les mines de fer de Man",
              "Les puits de pétrole de Grand-Bassam",
              "Les salines de Grand-Lahou"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ces exploitations industrielles extraient l'or piégé dans les zones de cisaillement ductile des ceintures birrimiennes."
          }
        },
        {
          "stepNumber": 6,
          "stepBadge": "Étape 6/8 · Les filons de quartz aurifère",
          "stepTheme": "Les filons de quartz aurifère",
          "stepTitle": "Les filons de quartz aurifère",
          "paragraphText": "C'est ce quartz aurifère qui est broyé dans les usines d'extraction minière ou cherché par les orpailleurs traditionnels.",
          "formula": {
            "name": "Les filons de quartz aurifère",
            "formula": "Vecteur aurifère : Filons de quartz hydrothermal (SiO2) à or natif",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Le quartz en filon est la roche mère porteuse de l'or !",
          "keyRule": "Birrimien = Ceintures de roches vertes (schistes) + Granitoïdes éburnéens = Principale réserve d'or de Côte d'Ivoire.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p6_lithologie_metallogenie_birrimien_or_ex6",
            "type": "mcq",
            "prompt": "Quelle roche magmatique filonienne blanche riche en silice est le vecteur principal de l'or ?",
            "options": [
              "Le filon de quartz hydrothermal",
              "Le calcaire coquillier",
              "L'argile rouge latéritique",
              "Le gypse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les fluides chauds ascendants précipitent la silice pure sous forme de quartz laiteux en piégeant les paillettes d'or natif."
          }
        },
        {
          "stepNumber": 7,
          "stepBadge": "Étape 7/8 · Gisements de manganèse birrimien",
          "stepTheme": "Gisements de manganèse birrimien",
          "stepTitle": "Gisements de manganèse birrimien",
          "paragraphText": "Le manganèse est un métal indispensable à la sidérurgie mondiale pour la fabrication des aciers inoxydables.",
          "formula": {
            "name": "Gisements de manganèse birrimien",
            "formula": "Métallogénie birrimienne complémentaire : Gisements de manganèse (Mn)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Manganèse de Lauzoua et Bondoukou = ressource métallique birrimienne !",
          "keyRule": "Birrimien = Ceintures de roches vertes (schistes) + Granitoïdes éburnéens = Principale réserve d'or de Côte d'Ivoire.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p6_lithologie_metallogenie_birrimien_or_ex7",
            "type": "mcq",
            "prompt": "En plus de l'or, quel autre minerai métallique stratégique est extrait du Birrimien (ex: à Bondoukou et Lauzoua) ?",
            "options": [
              "Le manganèse",
              "Le mercure",
              "L'uranium radioactif",
              "Le platine liquide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La Côte d'Ivoire exploite d'importants gisements de manganèse sédimentaire métamorphisé dans les sillons birrimiens."
          }
        },
        {
          "stepNumber": 8,
          "stepBadge": "Étape 8/8 · Auréoles de métamorphisme de contact",
          "stepTheme": "Auréoles de métamorphisme de contact",
          "stepTitle": "Auréoles de métamorphisme de contact",
          "paragraphText": "Cette cuisson thermique modifie la minéralogie sans que la roche ne soit broyée par une contrainte tectonique.",
          "formula": {
            "name": "Auréoles de métamorphisme de contact",
            "formula": "Intrusion magmatique chaude -> Auréole de contact (Cornéennes)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Intrusion de granite = métamorphisme de contact (cornéennes) !",
          "keyRule": "Birrimien = Ceintures de roches vertes (schistes) + Granitoïdes éburnéens = Principale réserve d'or de Côte d'Ivoire.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p6_lithologie_metallogenie_birrimien_or_ex8",
            "type": "mcq",
            "prompt": "Quel type de métamorphisme thermique se développe au contact des granites discordants birrimiens ?",
            "options": [
              "Le métamorphisme de contact (cornéennes)",
              "Le métamorphisme de choc météoritique",
              "La fusion totale du pays",
              "Aucune transformation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La chaleur du magma intrusif cuit les schistes encaissants, créant une auréole de métamorphisme de contact (cornéennes)."
          }
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch1_p7_bassin_sedimentaire_cotier_ouverture_atlantique",
      "order": 7,
      "title": "Le bassin sédimentaire côtier : Fresco à Assinie et ouverture de l'Atlantique",
      "summary": "Délimiter le bassin côtier (2,5 %), dater sa naissance au Crétacé (135 Ma) lors de l'ouverture de l'océan Atlantique et décrire ses couches non plissées.",
      "conceptExplanation": "Le bassin sédimentaire côtier ivoirien occupe 2,5 % du territoire au Sud. Il s'étend en croissant de Fresco à l'Ouest jusqu'à Assinie à l'Est sur 350 km. Il est né au Crétacé (135 Ma, ère Secondaire) lors du rifting et de la séparation de l'Amérique du Sud et de l'Afrique. Ses sédiments marins et continentaux (sables, argiles, grès) sont subhorizontaux et non plissés.",
      "formulas": [
        {
          "name": "Caractéristiques du bassin sédimentaire",
          "formula": "Bassin côtier : 2,5 % | Fresco à Assinie | Âge Crétacé (135 Ma) | Couches non plissées",
          "note": "Opposé au socle par son âge jeune et l'absence de métamorphisme."
        }
      ],
      "keyRule": "Bassin côtier = 2,5 % = Sud (Fresco à Assinie) = Crétacé (135 Ma, ère Secondaire) = Ouverture Atlantique = Couches horizontales non plissées.",
      "workedExample": {
        "title": "Différenciation structurale socle vs bassin",
        "statement": "Un géologue examine des couches d'argiles et de sables horizontales à Grand-Bassam. Pourquoi ne sont-elles pas métamorphisées ?",
        "methodSteps": [
          "Étape 1 : Constater la position littorale à Grand-Bassam (bassin sédimentaire côtier).",
          "Étape 2 : Rappeler l'âge récent Crétacé à Quaternaire (135 Ma à nos jours).",
          "Étape 3 : Noter que ce bassin n'a jamais été enfoui en profondeur ni soumis à une orogenèse compressive : les couches sont restées meubles ou diagénétiques."
        ],
        "conclusion": "Cette démarche méthodique conforme au programme MENA garantit la pleine maîtrise de la notion pour les devoirs et examens."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch1_p7_bassin_sedimentaire_cotier_ouverture_atlantique_ex1",
          "type": "mcq",
          "prompt": "Entre quelles localités côtières s'étend le bassin sédimentaire ivoirien d'Ouest en Est ?",
          "options": [
            "De Fresco à Assinie (frontière du Ghana)",
            "De San-Pédro à Tabou",
            "De Sassandra à Grand-Lahou",
            "D'Abidjan à Yamoussoukro"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bassin sédimentaire commence à l'embouchure du fleuve Sassandra vers Fresco et s'achève à Assinie au Ghana."
        },
        {
          "id": "seconde_c_svt_ch1_p7_bassin_sedimentaire_cotier_ouverture_atlantique_ex2",
          "type": "mcq",
          "prompt": "À quelle période géologique a débuté la formation du bassin sédimentaire côtier ivoirien ?",
          "options": [
            "Au Crétacé supérieur (vers 135 Ma, ère Secondaire)",
            "Au Précambrien inférieur",
            "Il y a un milliard d'années",
            "Au Quaternaire récent (10 000 ans)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bassin sédimentaire s'est ouvert il y a 135 millions d'années, marquant le début de l'histoire géologique moderne du pays."
        },
        {
          "id": "seconde_c_svt_ch1_p7_bassin_sedimentaire_cotier_ouverture_atlantique_ex3",
          "type": "mcq",
          "prompt": "Quel événement géodynamique planétaire majeur est à l'origine de l'ouverture du bassin côtier ?",
          "options": [
            "La séparation de l'Amérique du Sud et de l'Afrique et l'ouverture de l'océan Atlantique Sud",
            "La chute d'un astéroïde sur Abidjan",
            "L'assèchement de la mer Méditerranée",
            "Une grande glaciation polaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La rupture du supercontinent Gondwana a fracturé la croûte ivoirienne, laissant l'océan Atlantique envahir la marge continentale."
        },
        {
          "id": "seconde_c_svt_ch1_p7_bassin_sedimentaire_cotier_ouverture_atlantique_ex4",
          "type": "mcq",
          "prompt": "Quel trait structural fondamental différencie les couches du bassin côtier de celles du socle birrimien ?",
          "options": [
            "Les couches du bassin sont subhorizontales et non plissées, sans aucun métamorphisme",
            "Les couches du bassin sont verticales et cuites",
            "Le bassin est plus dur que le granite",
            "Il n'y a pas de différence"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Déposées calmement au fond de l'eau, les strates sédimentaires n'ont subi aucun plissement orogénique."
        },
        {
          "id": "seconde_c_svt_ch1_p7_bassin_sedimentaire_cotier_ouverture_atlantique_ex5",
          "type": "mcq",
          "prompt": "Quelles sont les roches et formations géologiques caractéristiques du bassin sédimentaire côtier ?",
          "options": [
            "Des sables meubles, argiles bariolées, grès ferrugineux et vases lagunaires",
            "Des charnockites et des granites durs",
            "Des basaltes volcaniques noirs",
            "Des marbres blancs catazonaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ces roches sédimentaires détritiques proviennent de l'érosion continue du socle cristallin transportée par les fleuves."
        },
        {
          "id": "seconde_c_svt_ch1_p7_bassin_sedimentaire_cotier_ouverture_atlantique_ex6",
          "type": "mcq",
          "prompt": "Quelle grande métropole ivoirienne de plus de 5 millions d'habitants repose sur le bassin sédimentaire côtier ?",
          "options": [
            "Abidjan (avec Grand-Bassam et Jacqueville)",
            "Bouaké",
            "Korhogo",
            "Man"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Abidjan, le port autonome et toutes les communes lagunaires sont édifiés sur les sables et grès du bassin côtier."
        },
        {
          "id": "seconde_c_svt_ch1_p7_bassin_sedimentaire_cotier_ouverture_atlantique_ex7",
          "type": "mcq",
          "prompt": "Comment nomme-t-on la formation géologique sédimentaire rouge superficielle très répandue à Abidjan ?",
          "options": [
            "Le Continental Terminal (sables et argiles ocre-rouge du Tertiaire)",
            "Le granite de Bondoukou",
            "L'itabirite de Gao",
            "La moraine glaciaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le Continental Terminal forme les plateaux d'Abidjan (Cocody, Plateau, Yopougon) entaillés par les vallées de talwegs."
        },
        {
          "id": "seconde_c_svt_ch1_p7_bassin_sedimentaire_cotier_ouverture_atlantique_ex8",
          "type": "mcq",
          "prompt": "Quelle ressource vitale pour la ville d'Abidjan est contenue dans les sables profonds du bassin côtier ?",
          "options": [
            "La grande nappe phréatique d'eau douce potable d'Abidjan (nappe du Continental Terminal et du Crétacé)",
            "Des diamants bleus",
            "De l'or pur liquide",
            "Du sel radioactif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'eau potable de toute l'agglomération d'Abidjan est pompée exclusivement dans les aquifères poreux du bassin sédimentaire."
        }
      ],
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepBadge": "Étape 1/8 · Limites géographiques du bassin côtier",
          "stepTheme": "Limites géographiques du bassin côtier",
          "stepTitle": "Limites géographiques du bassin côtier",
          "paragraphText": "Le croissant sédimentaire s'amenuise vers l'Ouest (biseauté à Fresco) et s'épaissit vers l'Est vers le Ghana.",
          "formula": {
            "name": "Limites géographiques du bassin côtier",
            "formula": "Bassin côtier ivoirien : S'étend de Fresco (Ouest) à Assinie (Est)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Bassin côtier = de Fresco à Assinie le long du littoral atlantique !",
          "keyRule": "Bassin côtier = 2,5 % = Sud (Fresco à Assinie) = Crétacé (135 Ma, ère Secondaire) = Ouverture Atlantique = Couches horizontales non plissées.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p7_bassin_sedimentaire_cotier_ouverture_atlantique_ex1",
            "type": "mcq",
            "prompt": "Entre quelles localités côtières s'étend le bassin sédimentaire ivoirien d'Ouest en Est ?",
            "options": [
              "De Fresco à Assinie (frontière du Ghana)",
              "De San-Pédro à Tabou",
              "De Sassandra à Grand-Lahou",
              "D'Abidjan à Yamoussoukro"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le bassin sédimentaire commence à l'embouchure du fleuve Sassandra vers Fresco et s'achève à Assinie au Ghana."
          }
        },
        {
          "stepNumber": 2,
          "stepBadge": "Étape 2/8 · Âge de mise en place du bassin",
          "stepTheme": "Âge de mise en place du bassin",
          "stepTitle": "Âge de mise en place du bassin",
          "paragraphText": "Pendant que le socle a plus de 2 milliards d'années, le bassin a moins de 135 millions d'années.",
          "formula": {
            "name": "Âge de mise en place du bassin",
            "formula": "Âge du bassin côtier : Crétacé (135 Ma, Mésozoïque)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Retiens 135 millions d'années (Crétacé) pour le bassin sédimentaire !",
          "keyRule": "Bassin côtier = 2,5 % = Sud (Fresco à Assinie) = Crétacé (135 Ma, ère Secondaire) = Ouverture Atlantique = Couches horizontales non plissées.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p7_bassin_sedimentaire_cotier_ouverture_atlantique_ex2",
            "type": "mcq",
            "prompt": "À quelle période géologique a débuté la formation du bassin sédimentaire côtier ivoirien ?",
            "options": [
              "Au Crétacé supérieur (vers 135 Ma, ère Secondaire)",
              "Au Précambrien inférieur",
              "Il y a un milliard d'années",
              "Au Quaternaire récent (10 000 ans)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le bassin sédimentaire s'est ouvert il y a 135 millions d'années, marquant le début de l'histoire géologique moderne du pays."
          }
        },
        {
          "stepNumber": 3,
          "stepBadge": "Étape 3/8 · Rifting et ouverture de l'océan Atlantique Sud",
          "stepTheme": "Rifting et ouverture de l'océan Atlantique Sud",
          "stepTitle": "Rifting et ouverture de l'océan Atlantique Sud",
          "paragraphText": "Cette ouverture océanique a créé des fossés d'effondrement remplis de sédiments marins successifs.",
          "formula": {
            "name": "Rifting et ouverture de l'océan Atlantique Sud",
            "formula": "Ouverture de l'océan Atlantique Sud -> Rifting et transgression marine côtière",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Le bassin est né de l'ouverture de l'océan Atlantique Sud au Crétacé !",
          "keyRule": "Bassin côtier = 2,5 % = Sud (Fresco à Assinie) = Crétacé (135 Ma, ère Secondaire) = Ouverture Atlantique = Couches horizontales non plissées.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p7_bassin_sedimentaire_cotier_ouverture_atlantique_ex3",
            "type": "mcq",
            "prompt": "Quel événement géodynamique planétaire majeur est à l'origine de l'ouverture du bassin côtier ?",
            "options": [
              "La séparation de l'Amérique du Sud et de l'Afrique et l'ouverture de l'océan Atlantique Sud",
              "La chute d'un astéroïde sur Abidjan",
              "L'assèchement de la mer Méditerranée",
              "Une grande glaciation polaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La rupture du supercontinent Gondwana a fracturé la croûte ivoirienne, laissant l'océan Atlantique envahir la marge continentale."
          }
        },
        {
          "stepNumber": 4,
          "stepBadge": "Étape 4/8 · Absence de plissement et de métamorphisme",
          "stepTheme": "Absence de plissement et de métamorphisme",
          "stepTitle": "Absence de plissement et de métamorphisme",
          "paragraphText": "Les sédiments du bassin côtier sont restés tabulaires et meubles (sables, vases, argiles) ou faiblement cimentés.",
          "formula": {
            "name": "Absence de plissement et de métamorphisme",
            "formula": "Couches sédimentaires côtières : Subhorizontales, non plissées et non métamorphisées",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Bassin côtier = couches horizontales régulières non plissées !",
          "keyRule": "Bassin côtier = 2,5 % = Sud (Fresco à Assinie) = Crétacé (135 Ma, ère Secondaire) = Ouverture Atlantique = Couches horizontales non plissées.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p7_bassin_sedimentaire_cotier_ouverture_atlantique_ex4",
            "type": "mcq",
            "prompt": "Quel trait structural fondamental différencie les couches du bassin côtier de celles du socle birrimien ?",
            "options": [
              "Les couches du bassin sont subhorizontales et non plissées, sans aucun métamorphisme",
              "Les couches du bassin sont verticales et cuites",
              "Le bassin est plus dur que le granite",
              "Il n'y a pas de différence"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Déposées calmement au fond de l'eau, les strates sédimentaires n'ont subi aucun plissement orogénique."
          }
        },
        {
          "stepNumber": 5,
          "stepBadge": "Étape 5/8 · Lithologie sédimentaire détritique",
          "stepTheme": "Lithologie sédimentaire détritique",
          "stepTitle": "Lithologie sédimentaire détritique",
          "paragraphText": "On y trouve également des niveaux calcaires fossilifères marins riches en foraminifères et coquilles de mollusques.",
          "formula": {
            "name": "Lithologie sédimentaire détritique",
            "formula": "Roches du bassin : Sables + Argiles + Grès ferrugineux + Calcaires",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Sables, argiles et grès = roches du bassin sédimentaire côtier !",
          "keyRule": "Bassin côtier = 2,5 % = Sud (Fresco à Assinie) = Crétacé (135 Ma, ère Secondaire) = Ouverture Atlantique = Couches horizontales non plissées.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p7_bassin_sedimentaire_cotier_ouverture_atlantique_ex5",
            "type": "mcq",
            "prompt": "Quelles sont les roches et formations géologiques caractéristiques du bassin sédimentaire côtier ?",
            "options": [
              "Des sables meubles, argiles bariolées, grès ferrugineux et vases lagunaires",
              "Des charnockites et des granites durs",
              "Des basaltes volcaniques noirs",
              "Des marbres blancs catazonaux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ces roches sédimentaires détritiques proviennent de l'érosion continue du socle cristallin transportée par les fleuves."
          }
        },
        {
          "stepNumber": 6,
          "stepBadge": "Étape 6/8 · Abidjan sur le bassin sédimentaire",
          "stepTheme": "Abidjan sur le bassin sédimentaire",
          "stepTitle": "Abidjan sur le bassin sédimentaire",
          "paragraphText": "Cette situation littorale procure à Abidjan son réseau de lagunes (Ébrié) et son accès direct à l'océan.",
          "formula": {
            "name": "Abidjan sur le bassin sédimentaire",
            "formula": "Métropole du bassin côtier : Abidjan et son agglomération lagunaire",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Abidjan repose entièrement sur le bassin sédimentaire côtier !",
          "keyRule": "Bassin côtier = 2,5 % = Sud (Fresco à Assinie) = Crétacé (135 Ma, ère Secondaire) = Ouverture Atlantique = Couches horizontales non plissées.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p7_bassin_sedimentaire_cotier_ouverture_atlantique_ex6",
            "type": "mcq",
            "prompt": "Quelle grande métropole ivoirienne de plus de 5 millions d'habitants repose sur le bassin sédimentaire côtier ?",
            "options": [
              "Abidjan (avec Grand-Bassam et Jacqueville)",
              "Bouaké",
              "Korhogo",
              "Man"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Abidjan, le port autonome et toutes les communes lagunaires sont édifiés sur les sables et grès du bassin côtier."
          }
        },
        {
          "stepNumber": 7,
          "stepBadge": "Étape 7/8 · Le Continental Terminal",
          "stepTheme": "Le Continental Terminal",
          "stepTitle": "Le Continental Terminal",
          "paragraphText": "Cette nappe sablo-argileuse continentale s'est déposée à la fin du Tertiaire sous climat tropical chaud et humide.",
          "formula": {
            "name": "Le Continental Terminal",
            "formula": "Formation superficielle d'Abidjan : Continental Terminal (Tertiaire)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Continental Terminal = sables et argiles rouges des plateaux d'Abidjan !",
          "keyRule": "Bassin côtier = 2,5 % = Sud (Fresco à Assinie) = Crétacé (135 Ma, ère Secondaire) = Ouverture Atlantique = Couches horizontales non plissées.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p7_bassin_sedimentaire_cotier_ouverture_atlantique_ex7",
            "type": "mcq",
            "prompt": "Comment nomme-t-on la formation géologique sédimentaire rouge superficielle très répandue à Abidjan ?",
            "options": [
              "Le Continental Terminal (sables et argiles ocre-rouge du Tertiaire)",
              "Le granite de Bondoukou",
              "L'itabirite de Gao",
              "La moraine glaciaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le Continental Terminal forme les plateaux d'Abidjan (Cocody, Plateau, Yopougon) entaillés par les vallées de talwegs."
          }
        },
        {
          "stepNumber": 8,
          "stepBadge": "Étape 8/8 · L'aquifère majeur d'Abidjan",
          "stepTheme": "L'aquifère majeur d'Abidjan",
          "stepTitle": "L'aquifère majeur d'Abidjan",
          "paragraphText": "La grande perméabilité des sables côtiers constitue le réservoir hydrogéologique le plus précieux du pays.",
          "formula": {
            "name": "L'aquifère majeur d'Abidjan",
            "formula": "Aquifère côtier -> Approvisionnement exclusif en eau potable d'Abidjan",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : La nappe d'eau potable d'Abidjan se trouve dans le bassin sédimentaire !",
          "keyRule": "Bassin côtier = 2,5 % = Sud (Fresco à Assinie) = Crétacé (135 Ma, ère Secondaire) = Ouverture Atlantique = Couches horizontales non plissées.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p7_bassin_sedimentaire_cotier_ouverture_atlantique_ex8",
            "type": "mcq",
            "prompt": "Quelle ressource vitale pour la ville d'Abidjan est contenue dans les sables profonds du bassin côtier ?",
            "options": [
              "La grande nappe phréatique d'eau douce potable d'Abidjan (nappe du Continental Terminal et du Crétacé)",
              "Des diamants bleus",
              "De l'or pur liquide",
              "Du sel radioactif"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'eau potable de toute l'agglomération d'Abidjan est pompée exclusivement dans les aquifères poreux du bassin sédimentaire."
          }
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch1_p8_faille_des_lagunes_hydrogeologie_petrole",
      "order": 8,
      "title": "La faille des lagunes et ressources hydrogéologiques et pétrolières",
      "summary": "Localiser la faille des lagunes (direction Est-Ouest), évaluer son rejet vertical (5 000 m), et comprendre son rôle pétrolier et hydrogéologique.",
      "conceptExplanation": "La faille des lagunes est la fracture majeure du Sud ivoirien. D'orientation Est-Ouest, elle sépare le socle cristallin au Nord du bassin sédimentaire affaissé au Sud. Son rejet vertical descendant vers l'océan atteint jusqu'à 5 000 mètres. Elle contrôle la barrière lagunaire, piège les gisements de pétrole et de gaz naturel offshore (champs Espoir, Baobab, Baleine) et protège les aquifères d'Abidjan.",
      "formulas": [
        {
          "name": "Accident tectonique du bassin côtier",
          "formula": "Faille des lagunes : Direction Est-Ouest | Rejet vertical descendant = 5 000 m",
          "note": "Faille normale d'effondrement liée à l'ouverture de l'océan Atlantique."
        }
      ],
      "keyRule": "Faille des lagunes = Direction Est-Ouest = Rejet vertical descendant de 5 000 m vers le Sud = Piégeage des hydrocarbures (Baleine, Espoir, Baobab).",
      "workedExample": {
        "title": "Calcul de l'épaisseur sédimentaire au Sud de la faille",
        "statement": "Au Nord de la faille des lagunes, le socle affleure à la surface (0 m). Au Sud, la couche sédimentaire descend à 5 000 m. Quel est le rejet de la faille ?",
        "methodSteps": [
          "Étape 1 : Identifier le compartiment effondré (Sud / Mer) et le compartiment soulevé (Nord / Socle).",
          "Étape 2 : Calculer la différence d'altitude du toit du socle : 5 000 m - 0 m = 5 000 m.",
          "Étape 3 : Conclure que la faille normale des lagunes a un rejet vertical de 5 000 m."
        ],
        "conclusion": "Cette démarche méthodique conforme au programme MENA garantit la pleine maîtrise de la notion pour les devoirs et examens."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch1_p8_faille_des_lagunes_hydrogeologie_petrole_ex1",
          "type": "mcq",
          "prompt": "Quelle est l'orientation géographique de la grande faille des lagunes ?",
          "options": [
            "Direction générale Est-Ouest (parallèle au littoral)",
            "Strictement Nord-Sud",
            "Diagonale Nord-Ouest",
            "Verticale circulaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Contrairement à la faille de Sassandra (Nord-Sud), la faille des lagunes s'étire parallèlement à la côte d'Est en Ouest."
        },
        {
          "id": "seconde_c_svt_ch1_p8_faille_des_lagunes_hydrogeologie_petrole_ex2",
          "type": "mcq",
          "prompt": "À combien de mètres est estimé le rejet vertical maximal de la faille des lagunes plongeant vers l'océan ?",
          "options": [
            "Jusqu'à 5 000 mètres (5 km)",
            "Seulement 2 mètres",
            "50 mètres",
            "100 000 mètres"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce rejet colossal de 5 km d'affaissement a permis l'accumulation d'une colonne colossale de sédiments marins mésozoïques."
        },
        {
          "id": "seconde_c_svt_ch1_p8_faille_des_lagunes_hydrogeologie_petrole_ex3",
          "type": "mcq",
          "prompt": "Quelle ressource énergétique fossile stratégique de la Côte d'Ivoire est piégée au large du bassin côtier ?",
          "options": [
            "Le pétrole brut et le gaz naturel offshore",
            "Le charbon de bois fossile",
            "L'uranium enrichi",
            "L'énergie éolienne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les failles normales d'effondrement ont compartimenté le bassin et piégé les hydrocarbures dans des réservoirs de grès profond."
        },
        {
          "id": "seconde_c_svt_ch1_p8_faille_des_lagunes_hydrogeologie_petrole_ex4",
          "type": "mcq",
          "prompt": "Comment se nomme le gisement pétrolier géant historique récemment découvert et exploité au large d'Assinie ?",
          "options": [
            "Le gisement Baleine (et le gisement Calao)",
            "Le gisement Éléphant",
            "Le gisement Sahel",
            "Le gisement Sahara"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le gisement Baleine, découvert par Eni, recèle des milliards de barils de pétrole et d'immenses réserves de gaz associé."
        },
        {
          "id": "seconde_c_svt_ch1_p8_faille_des_lagunes_hydrogeologie_petrole_ex5",
          "type": "mcq",
          "prompt": "Quels sont les deux compartiments tectoniques séparés par la faille des lagunes ?",
          "options": [
            "Le compartiment Nord soulevé (socle cristallin) et le compartiment Sud affaissé (bassin sédimentaire)",
            "L'Afrique et l'Europe",
            "L'océan Indien et l'océan Pacifique",
            "Le pôle Nord et le pôle Sud"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Au Nord de la faille, le socle rocheux dur est à l'air libre ; au Sud, il est enfoui sous 5 km de sédiments marins."
        },
        {
          "id": "seconde_c_svt_ch1_p8_faille_des_lagunes_hydrogeologie_petrole_ex6",
          "type": "mcq",
          "prompt": "Comment la faille des lagunes influence-t-elle le réseau hydrographique et lagunaire d'Abidjan ?",
          "options": [
            "Elle a guidé l'alignement rectiligne des lagunes (lagune Ébrié, lagune de Grand-Lahou, lagune Aby)",
            "Elle a fait disparaître tous les fleuves",
            "Elle crée des tsunamis quotidiens",
            "Elle a asséché la mer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'enfoncement tectonique au Sud a créé la dépression où les eaux fluviales et marines se sont rassemblées en chapelet de lagunes."
        },
        {
          "id": "seconde_c_svt_ch1_p8_faille_des_lagunes_hydrogeologie_petrole_ex7",
          "type": "mcq",
          "prompt": "Quel risque environnemental guette la nappe d'eau douce d'Abidjan en bordure de la faille des lagunes ?",
          "options": [
            "L'intrusion et la biseautage salé des eaux marines ou lagunaires en cas de surpompage",
            "L'explosion de lave volcanique",
            "Le gel sous forme de banquise",
            "La disparition de l'atmosphère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Si l'on pompe excessivement la nappe douce, l'eau salée de la lagune et de l'océan s'infiltre à travers les sables perméables."
        },
        {
          "id": "seconde_c_svt_ch1_p8_faille_des_lagunes_hydrogeologie_petrole_ex8",
          "type": "mcq",
          "prompt": "Quel est le type tectonique exact de la faille des lagunes (mouvement relatif) ?",
          "options": [
            "Une faille normale distensive",
            "Une faille inverse compressive",
            "Un pli synclinal",
            "Une discordance érosive"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une faille normale est provoquée par un mouvement d'extension (écartement) : le compartiment supérieur descend le long du plan de faille."
        }
      ],
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepBadge": "Étape 1/8 · Orientation Est-Ouest de la faille des lagunes",
          "stepTheme": "Orientation Est-Ouest de la faille des lagunes",
          "stepTitle": "Orientation Est-Ouest de la faille des lagunes",
          "paragraphText": "Elle court de Fresco jusqu'à la frontière ghanéenne le long du cordon lagunaire ivoirien.",
          "formula": {
            "name": "Orientation Est-Ouest de la faille des lagunes",
            "formula": "Direction : Est-Ouest (parallèle à la côte du golfe de Guinée)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Faille des lagunes = direction Est-Ouest (parallèle au littoral) !",
          "keyRule": "Faille des lagunes = Direction Est-Ouest = Rejet vertical descendant de 5 000 m vers le Sud = Piégeage des hydrocarbures (Baleine, Espoir, Baobab).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p8_faille_des_lagunes_hydrogeologie_petrole_ex1",
            "type": "mcq",
            "prompt": "Quelle est l'orientation géographique de la grande faille des lagunes ?",
            "options": [
              "Direction générale Est-Ouest (parallèle au littoral)",
              "Strictement Nord-Sud",
              "Diagonale Nord-Ouest",
              "Verticale circulaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Contrairement à la faille de Sassandra (Nord-Sud), la faille des lagunes s'étire parallèlement à la côte d'Est en Ouest."
          }
        },
        {
          "stepNumber": 2,
          "stepBadge": "Étape 2/8 · Rejet vertical colossal de 5 000 mètres",
          "stepTheme": "Rejet vertical colossal de 5 000 mètres",
          "stepTitle": "Rejet vertical colossal de 5 000 mètres",
          "paragraphText": "Le compartiment Sud s'est effondré de 5 000 mètres par rapport au compartiment continental Nord.",
          "formula": {
            "name": "Rejet vertical colossal de 5 000 mètres",
            "formula": "Rejet vertical de la faille des lagunes : Rejet vertical jusqu'à 5 000 m",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Retiens 5 000 mètres de rejet vertical pour la faille des lagunes !",
          "keyRule": "Faille des lagunes = Direction Est-Ouest = Rejet vertical descendant de 5 000 m vers le Sud = Piégeage des hydrocarbures (Baleine, Espoir, Baobab).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p8_faille_des_lagunes_hydrogeologie_petrole_ex2",
            "type": "mcq",
            "prompt": "À combien de mètres est estimé le rejet vertical maximal de la faille des lagunes plongeant vers l'océan ?",
            "options": [
              "Jusqu'à 5 000 mètres (5 km)",
              "Seulement 2 mètres",
              "50 mètres",
              "100 000 mètres"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce rejet colossal de 5 km d'affaissement a permis l'accumulation d'une colonne colossale de sédiments marins mésozoïques."
          }
        },
        {
          "stepNumber": 3,
          "stepBadge": "Étape 3/8 · Gisements de pétrole et gaz naturel offshore",
          "stepTheme": "Gisements de pétrole et gaz naturel offshore",
          "stepTitle": "Gisements de pétrole et gaz naturel offshore",
          "paragraphText": "Les forages pétroliers en eaux profondes découvrent d'immenses gisements grâce aux structures créées par la tectonique du bassin.",
          "formula": {
            "name": "Gisements de pétrole et gaz naturel offshore",
            "formula": "Ressource stratégique côtière : Pétrole et Gaz naturel offshore",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Pétrole et gaz naturel = ressources majeures du bassin côtier !",
          "keyRule": "Faille des lagunes = Direction Est-Ouest = Rejet vertical descendant de 5 000 m vers le Sud = Piégeage des hydrocarbures (Baleine, Espoir, Baobab).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p8_faille_des_lagunes_hydrogeologie_petrole_ex3",
            "type": "mcq",
            "prompt": "Quelle ressource énergétique fossile stratégique de la Côte d'Ivoire est piégée au large du bassin côtier ?",
            "options": [
              "Le pétrole brut et le gaz naturel offshore",
              "Le charbon de bois fossile",
              "L'uranium enrichi",
              "L'énergie éolienne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les failles normales d'effondrement ont compartimenté le bassin et piégé les hydrocarbures dans des réservoirs de grès profond."
          }
        },
        {
          "stepNumber": 4,
          "stepBadge": "Étape 4/8 · Le champ pétrolier Baleine",
          "stepTheme": "Le champ pétrolier Baleine",
          "stepTitle": "Le champ pétrolier Baleine",
          "paragraphText": "Ce gisement de classe mondiale propulse la Côte d'Ivoire au rang de grand producteur d'énergie en Afrique de l'Ouest.",
          "formula": {
            "name": "Le champ pétrolier Baleine",
            "formula": "Gisement géant offshore : Champ Baleine (puits à plus de 3 000 m)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Champ pétrolier Baleine = gisement géant découvert au large de la Côte d'Ivoire !",
          "keyRule": "Faille des lagunes = Direction Est-Ouest = Rejet vertical descendant de 5 000 m vers le Sud = Piégeage des hydrocarbures (Baleine, Espoir, Baobab).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p8_faille_des_lagunes_hydrogeologie_petrole_ex4",
            "type": "mcq",
            "prompt": "Comment se nomme le gisement pétrolier géant historique récemment découvert et exploité au large d'Assinie ?",
            "options": [
              "Le gisement Baleine (et le gisement Calao)",
              "Le gisement Éléphant",
              "Le gisement Sahel",
              "Le gisement Sahara"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le gisement Baleine, découvert par Eni, recèle des milliards de barils de pétrole et d'immenses réserves de gaz associé."
          }
        },
        {
          "stepNumber": 5,
          "stepBadge": "Étape 5/8 · Compartiments de la faille des lagunes",
          "stepTheme": "Compartiments de la faille des lagunes",
          "stepTitle": "Compartiments de la faille des lagunes",
          "paragraphText": "Il s'agit typiquement d'une faille normale distensive résultant de l'étirement continental lors de l'ouverture océanique.",
          "formula": {
            "name": "Compartiments de la faille des lagunes",
            "formula": "Nord : Socle soulevé | Sud : Bassin sédimentaire effondré (5 000 m)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Nord = socle soulevé ; Sud = bassin sédimentaire affaissé vers la mer !",
          "keyRule": "Faille des lagunes = Direction Est-Ouest = Rejet vertical descendant de 5 000 m vers le Sud = Piégeage des hydrocarbures (Baleine, Espoir, Baobab).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p8_faille_des_lagunes_hydrogeologie_petrole_ex5",
            "type": "mcq",
            "prompt": "Quels sont les deux compartiments tectoniques séparés par la faille des lagunes ?",
            "options": [
              "Le compartiment Nord soulevé (socle cristallin) et le compartiment Sud affaissé (bassin sédimentaire)",
              "L'Afrique et l'Europe",
              "L'océan Indien et l'océan Pacifique",
              "Le pôle Nord et le pôle Sud"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Au Nord de la faille, le socle rocheux dur est à l'air libre ; au Sud, il est enfoui sous 5 km de sédiments marins."
          }
        },
        {
          "stepNumber": 6,
          "stepBadge": "Étape 6/8 · Alignement morphologique des lagunes",
          "stepTheme": "Alignement morphologique des lagunes",
          "stepTitle": "Alignement morphologique des lagunes",
          "paragraphText": "Le système lagunaire ivoirien, long de 300 km, est le produit direct du tracé rectiligne Est-Ouest de cette faille.",
          "formula": {
            "name": "Alignement morphologique des lagunes",
            "formula": "Tectonique côtière -> Morphologie linéaire Est-Ouest du réseau lagunaire",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : La faille des lagunes a guidé l'alignement Est-Ouest de nos lagunes !",
          "keyRule": "Faille des lagunes = Direction Est-Ouest = Rejet vertical descendant de 5 000 m vers le Sud = Piégeage des hydrocarbures (Baleine, Espoir, Baobab).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p8_faille_des_lagunes_hydrogeologie_petrole_ex6",
            "type": "mcq",
            "prompt": "Comment la faille des lagunes influence-t-elle le réseau hydrographique et lagunaire d'Abidjan ?",
            "options": [
              "Elle a guidé l'alignement rectiligne des lagunes (lagune Ébrié, lagune de Grand-Lahou, lagune Aby)",
              "Elle a fait disparaître tous les fleuves",
              "Elle crée des tsunamis quotidiens",
              "Elle a asséché la mer"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'enfoncement tectonique au Sud a créé la dépression où les eaux fluviales et marines se sont rassemblées en chapelet de lagunes."
          }
        },
        {
          "stepNumber": 7,
          "stepBadge": "Étape 7/8 · Risque d'intrusion saline (biseau salé)",
          "stepTheme": "Risque d'intrusion saline (biseau salé)",
          "stepTitle": "Risque d'intrusion saline (biseau salé)",
          "paragraphText": "La proximité de l'océan exige une gestion rigoureuse des forages pour préserver la qualité de l'eau potable abidjanaise.",
          "formula": {
            "name": "Risque d'intrusion saline (biseau salé)",
            "formula": "Surpompage des forages -> Avancée du biseau d'eau salée dans l'aquifère",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Le risque majeur est l'intrusion d'eau salée dans la nappe d'eau potable !",
          "keyRule": "Faille des lagunes = Direction Est-Ouest = Rejet vertical descendant de 5 000 m vers le Sud = Piégeage des hydrocarbures (Baleine, Espoir, Baobab).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p8_faille_des_lagunes_hydrogeologie_petrole_ex7",
            "type": "mcq",
            "prompt": "Quel risque environnemental guette la nappe d'eau douce d'Abidjan en bordure de la faille des lagunes ?",
            "options": [
              "L'intrusion et la biseautage salé des eaux marines ou lagunaires en cas de surpompage",
              "L'explosion de lave volcanique",
              "Le gel sous forme de banquise",
              "La disparition de l'atmosphère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Si l'on pompe excessivement la nappe douce, l'eau salée de la lagune et de l'océan s'infiltre à travers les sables perméables."
          }
        },
        {
          "stepNumber": 8,
          "stepBadge": "Étape 8/8 · Mécanisme de faille normale distensive",
          "stepTheme": "Mécanisme de faille normale distensive",
          "stepTitle": "Mécanisme de faille normale distensive",
          "paragraphText": "Elle témoigne de la rupture par étirement de la plaque africaine au Crétacé lors de la dérive continentale.",
          "formula": {
            "name": "Mécanisme de faille normale distensive",
            "formula": "Extension tectonique crustale -> Faille normale avec compartiment effondré",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Faille des lagunes = faille normale distensive !",
          "keyRule": "Faille des lagunes = Direction Est-Ouest = Rejet vertical descendant de 5 000 m vers le Sud = Piégeage des hydrocarbures (Baleine, Espoir, Baobab).",
          "exercise": {
            "id": "seconde_c_svt_ch1_p8_faille_des_lagunes_hydrogeologie_petrole_ex8",
            "type": "mcq",
            "prompt": "Quel est le type tectonique exact de la faille des lagunes (mouvement relatif) ?",
            "options": [
              "Une faille normale distensive",
              "Une faille inverse compressive",
              "Un pli synclinal",
              "Une discordance érosive"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une faille normale est provoquée par un mouvement d'extension (écartement) : le compartiment supérieur descend le long du plan de faille."
          }
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch1_p9_accidents_tectoniques_cassants_failles",
      "order": 9,
      "title": "Les accidents tectoniques cassants : Failles normales, inverses et décrochements",
      "summary": "Définir une faille, identifier ses éléments géométriques (plan, miroir, compartiments, rejets) et distinguer les régimes tectoniques (distension, compression, coulissage).",
      "conceptExplanation": "Une faille est une déformation cassante de la lithosphère caractérisée par une fracture avec déplacement relatif des deux blocs rocheux. On distingue trois grands types selon les forces : la faille normale (écartement / distension, allongement), la faille inverse (rapprochement / compression, raccourcissement) et le décrochement (coulissage horizontal le long d'un plan vertical).",
      "formulas": [
        {
          "name": "Types et régimes de failles",
          "formula": "Faille Normale (Distension) | Faille Inverse (Compression) | Décrochement (Coulissage)",
          "note": "Rejet total = racine carrée du rejet vertical au carré plus le rejet horizontal au carré."
        }
      ],
      "keyRule": "Déformation cassante = Faille (avec déplacement / rejet). Faille normale = distension. Faille inverse = compression. Décrochement = coulissage.",
      "workedExample": {
        "title": "Reconnaissance d'une faille sur une coupe",
        "statement": "Sur un affleurement, le plan de faille est incliné et le compartiment situé au-dessus descend par rapport à l'autre. Nommer la faille.",
        "methodSteps": [
          "Étape 1 : Observer le plan incliné et le mouvement du compartiment supérieur (toit).",
          "Étape 2 : Constater que le toit descend : c'est le mouvement typique d'une extension de terrain.",
          "Étape 3 : Conclure qu'il s'agit d'une faille normale liée à un régime tectonique de distension."
        ],
        "conclusion": "Cette démarche méthodique conforme au programme MENA garantit la pleine maîtrise de la notion pour les devoirs et examens."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch1_p9_accidents_tectoniques_cassants_failles_ex1",
          "type": "mcq",
          "prompt": "Quelle est la définition scientifique exacte d'une faille géologique ?",
          "options": [
            "Une fracture de l'écorce terrestre avec déplacement relatif des deux compartiments rocheux séparés",
            "Une simple fissure sans aucun mouvement des blocs",
            "Un pli régulier sans aucune cassure",
            "Une coulée d'eau souterraine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour qu'il y ait faille au sens géologique, la cassure doit impérativement s'accompagner d'un déplacement mesurable (rejet)."
        },
        {
          "id": "seconde_c_svt_ch1_p9_accidents_tectoniques_cassants_failles_ex2",
          "type": "mcq",
          "prompt": "Comment nomme-t-on la surface polie et striée par le frottement des blocs le long de la faille ?",
          "options": [
            "Le miroir de faille",
            "Le toit de faille",
            "La charnière",
            "Le flanc"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le frottement mécanique écrasant polit le plan de fracture et y imprime des stries parallèles à la direction du déplacement."
        },
        {
          "id": "seconde_c_svt_ch1_p9_accidents_tectoniques_cassants_failles_ex3",
          "type": "mcq",
          "prompt": "Quel type de faille est provoqué par un régime tectonique d'extension (distension) ?",
          "options": [
            "Une faille normale (écartement et allongement du terrain)",
            "Une faille inverse",
            "Un chevauchement alpin",
            "Un anticlinal"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans une faille normale, les blocs s'écartent et le compartiment supérieur descend le long du plan de faille."
        },
        {
          "id": "seconde_c_svt_ch1_p9_accidents_tectoniques_cassants_failles_ex4",
          "type": "mcq",
          "prompt": "Quel type de faille est engendré par un régime tectonique de compression (rapprochement) ?",
          "options": [
            "Une faille inverse (rapprochement et raccourcissement du terrain)",
            "Une faille normale",
            "Un fossé d'effondrement",
            "Un graben"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sous l'effet d'une poussée compressive, le compartiment supérieur monte par-dessus le compartiment inférieur."
        },
        {
          "id": "seconde_c_svt_ch1_p9_accidents_tectoniques_cassants_failles_ex5",
          "type": "mcq",
          "prompt": "Comment appelle-t-on une faille où les deux blocs coulissent horizontalement l'un contre l'autre ?",
          "options": [
            "Un décrochement (dextre ou sénestre)",
            "Une faille normale",
            "Un synclinal",
            "Une discordance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans un décrochement, le déplacement est purement horizontal le long d'un plan de faille vertical."
        },
        {
          "id": "seconde_c_svt_ch1_p9_accidents_tectoniques_cassants_failles_ex6",
          "type": "mcq",
          "prompt": "Comment désigne-t-on la mesure chiffrée de la distance de déplacement entre les deux compartiments ?",
          "options": [
            "Le rejet de la faille (rejet vertical, horizontal ou oblique)",
            "La vitesse de la faille",
            "Le rayon de courbure",
            "L'indice de réfraction"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le rejet quantifie l'ampleur géométrique de la déformation cassante subie par la couche géologique repère."
        },
        {
          "id": "seconde_c_svt_ch1_p9_accidents_tectoniques_cassants_failles_ex7",
          "type": "mcq",
          "prompt": "Quel grand accident du socle ivoirien est un exemple historique de rejeu en décrochement ductile ?",
          "options": [
            "La faille de Sassandra",
            "La lagune Ébrié",
            "Le canal de Vridi",
            "La plage d'Assinie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lors du cycle éburnéen, la faille de Sassandra a fonctionné comme un couloir de décrochement cisaillant les granitoïdes."
        },
        {
          "id": "seconde_c_svt_ch1_p9_accidents_tectoniques_cassants_failles_ex8",
          "type": "mcq",
          "prompt": "Que se passe-t-il pour une couche géologique repère traversée par une faille sur le terrain ?",
          "options": [
            "Elle est brutalement interrompue et décalée en deux tronçons situés à des niveaux différents",
            "Elle reste continue sans aucun saut",
            "Elle se liquéfie",
            "Elle se transforme en diamant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'interruption et le décalage géométrique d'une couche continue est le critère diagnostique absolu d'une faille sur le terrain."
        }
      ],
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepBadge": "Étape 1/8 · Définition d'une faille tectonique",
          "stepTheme": "Définition d'une faille tectonique",
          "stepTitle": "Définition d'une faille tectonique",
          "paragraphText": "La rupture se produit lorsque les contraintes mécaniques dépassent la limite d'élasticité et de rupture de la roche.",
          "formula": {
            "name": "Définition d'une faille tectonique",
            "formula": "Faille = Fracture crustale + Déplacement relatif des compartiments (Rejet)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Une faille est une cassure AVEC déplacement des compartiments !",
          "keyRule": "Déformation cassante = Faille (avec déplacement / rejet). Faille normale = distension. Faille inverse = compression. Décrochement = coulissage.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p9_accidents_tectoniques_cassants_failles_ex1",
            "type": "mcq",
            "prompt": "Quelle est la définition scientifique exacte d'une faille géologique ?",
            "options": [
              "Une fracture de l'écorce terrestre avec déplacement relatif des deux compartiments rocheux séparés",
              "Une simple fissure sans aucun mouvement des blocs",
              "Un pli régulier sans aucune cassure",
              "Une coulée d'eau souterraine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour qu'il y ait faille au sens géologique, la cassure doit impérativement s'accompagner d'un déplacement mesurable (rejet)."
          }
        },
        {
          "stepNumber": 2,
          "stepBadge": "Étape 2/8 · Le miroir de faille et les stries",
          "stepTheme": "Le miroir de faille et les stries",
          "stepTitle": "Le miroir de faille et les stries",
          "paragraphText": "Les stries tectoniques sur le miroir indiquent précisément aux géologues le sens et l'angle du déplacement des blocs.",
          "formula": {
            "name": "Le miroir de faille et les stries",
            "formula": "Plan de fracture poli -> Miroir de faille (avec stries de frottement)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Le plan poli et strié est le miroir de faille !",
          "keyRule": "Déformation cassante = Faille (avec déplacement / rejet). Faille normale = distension. Faille inverse = compression. Décrochement = coulissage.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p9_accidents_tectoniques_cassants_failles_ex2",
            "type": "mcq",
            "prompt": "Comment nomme-t-on la surface polie et striée par le frottement des blocs le long de la faille ?",
            "options": [
              "Le miroir de faille",
              "Le toit de faille",
              "La charnière",
              "Le flanc"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le frottement mécanique écrasant polit le plan de fracture et y imprime des stries parallèles à la direction du déplacement."
          }
        },
        {
          "stepNumber": 3,
          "stepBadge": "Étape 3/8 · Mécanisme de la faille normale",
          "stepTheme": "Mécanisme de la faille normale",
          "stepTitle": "Mécanisme de la faille normale",
          "paragraphText": "Les failles normales amincissent la croûte et augmentent la surface horizontale du terrain.",
          "formula": {
            "name": "Mécanisme de la faille normale",
            "formula": "Régime de distension (Écartement) -> Faille normale",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Distension (écartement) = faille normale !",
          "keyRule": "Déformation cassante = Faille (avec déplacement / rejet). Faille normale = distension. Faille inverse = compression. Décrochement = coulissage.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p9_accidents_tectoniques_cassants_failles_ex3",
            "type": "mcq",
            "prompt": "Quel type de faille est provoqué par un régime tectonique d'extension (distension) ?",
            "options": [
              "Une faille normale (écartement et allongement du terrain)",
              "Une faille inverse",
              "Un chevauchement alpin",
              "Un anticlinal"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans une faille normale, les blocs s'écartent et le compartiment supérieur descend le long du plan de faille."
          }
        },
        {
          "stepNumber": 4,
          "stepBadge": "Étape 4/8 · Mécanisme de la faille inverse",
          "stepTheme": "Mécanisme de la faille inverse",
          "stepTitle": "Mécanisme de la faille inverse",
          "paragraphText": "Les failles inverses provoquent un raccourcissement horizontal et un épaississement vertical du terrain.",
          "formula": {
            "name": "Mécanisme de la faille inverse",
            "formula": "Régime de compression (Poussée) -> Faille inverse",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Compression (rapprochement) = faille inverse !",
          "keyRule": "Déformation cassante = Faille (avec déplacement / rejet). Faille normale = distension. Faille inverse = compression. Décrochement = coulissage.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p9_accidents_tectoniques_cassants_failles_ex4",
            "type": "mcq",
            "prompt": "Quel type de faille est engendré par un régime tectonique de compression (rapprochement) ?",
            "options": [
              "Une faille inverse (rapprochement et raccourcissement du terrain)",
              "Une faille normale",
              "Un fossé d'effondrement",
              "Un graben"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sous l'effet d'une poussée compressive, le compartiment supérieur monte par-dessus le compartiment inférieur."
          }
        },
        {
          "stepNumber": 5,
          "stepBadge": "Étape 5/8 · Le décrochement tectonique",
          "stepTheme": "Le décrochement tectonique",
          "stepTitle": "Le décrochement tectonique",
          "paragraphText": "On distingue le décrochement dextre (vers la droite) et sénestre (vers la gauche) selon le sens perçu par un observateur.",
          "formula": {
            "name": "Le décrochement tectonique",
            "formula": "Coulissage horizontal pur -> Décrochement tectonique",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Décrochement = coulissage horizontal des compartiments !",
          "keyRule": "Déformation cassante = Faille (avec déplacement / rejet). Faille normale = distension. Faille inverse = compression. Décrochement = coulissage.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p9_accidents_tectoniques_cassants_failles_ex5",
            "type": "mcq",
            "prompt": "Comment appelle-t-on une faille où les deux blocs coulissent horizontalement l'un contre l'autre ?",
            "options": [
              "Un décrochement (dextre ou sénestre)",
              "Une faille normale",
              "Un synclinal",
              "Une discordance"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans un décrochement, le déplacement est purement horizontal le long d'un plan de faille vertical."
          }
        },
        {
          "stepNumber": 6,
          "stepBadge": "Étape 6/8 · Le rejet de faille",
          "stepTheme": "Le rejet de faille",
          "stepTitle": "Le rejet de faille",
          "paragraphText": "On décompose souvent le rejet total en rejet vertical (saut d'altitude) et rejet horizontal.",
          "formula": {
            "name": "Le rejet de faille",
            "formula": "Déplacement mesuré des blocs = Rejet de la faille",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Le déplacement des blocs se nomme le rejet de la faille !",
          "keyRule": "Déformation cassante = Faille (avec déplacement / rejet). Faille normale = distension. Faille inverse = compression. Décrochement = coulissage.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p9_accidents_tectoniques_cassants_failles_ex6",
            "type": "mcq",
            "prompt": "Comment désigne-t-on la mesure chiffrée de la distance de déplacement entre les deux compartiments ?",
            "options": [
              "Le rejet de la faille (rejet vertical, horizontal ou oblique)",
              "La vitesse de la faille",
              "Le rayon de courbure",
              "L'indice de réfraction"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le rejet quantifie l'ampleur géométrique de la déformation cassante subie par la couche géologique repère."
          }
        },
        {
          "stepNumber": 7,
          "stepBadge": "Étape 7/8 · Exemple ivoirien de décrochement",
          "stepTheme": "Exemple ivoirien de décrochement",
          "stepTitle": "Exemple ivoirien de décrochement",
          "paragraphText": "Ce cisaillement transcurrent a imprimé aux roches des déformations horizontales visibles sur des dizaines de kilomètres.",
          "formula": {
            "name": "Exemple ivoirien de décrochement",
            "formula": "Faille de Sassandra : Couloir de décrochement lors de l'Éburnéen",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : La faille de Sassandra est l'exemple type de décrochement dans notre socle !",
          "keyRule": "Déformation cassante = Faille (avec déplacement / rejet). Faille normale = distension. Faille inverse = compression. Décrochement = coulissage.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p9_accidents_tectoniques_cassants_failles_ex7",
            "type": "mcq",
            "prompt": "Quel grand accident du socle ivoirien est un exemple historique de rejeu en décrochement ductile ?",
            "options": [
              "La faille de Sassandra",
              "La lagune Ébrié",
              "Le canal de Vridi",
              "La plage d'Assinie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Lors du cycle éburnéen, la faille de Sassandra a fonctionné comme un couloir de décrochement cisaillant les granitoïdes."
          }
        },
        {
          "stepNumber": 8,
          "stepBadge": "Étape 8/8 · Discontinuité et saut de couche",
          "stepTheme": "Discontinuité et saut de couche",
          "stepTitle": "Discontinuité et saut de couche",
          "paragraphText": "Le géologue retrouve la suite de la couche en marchant plus haut ou plus bas selon la direction du rejet.",
          "formula": {
            "name": "Discontinuité et saut de couche",
            "formula": "Présence de faille -> Décalage visible et discontinuité de la couche repère",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : La faille interrompt et décale nettement la couche géologique !",
          "keyRule": "Déformation cassante = Faille (avec déplacement / rejet). Faille normale = distension. Faille inverse = compression. Décrochement = coulissage.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p9_accidents_tectoniques_cassants_failles_ex8",
            "type": "mcq",
            "prompt": "Que se passe-t-il pour une couche géologique repère traversée par une faille sur le terrain ?",
            "options": [
              "Elle est brutalement interrompue et décalée en deux tronçons situés à des niveaux différents",
              "Elle reste continue sans aucun saut",
              "Elle se liquéfie",
              "Elle se transforme en diamant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'interruption et le décalage géométrique d'une couche continue est le critère diagnostique absolu d'une faille sur le terrain."
          }
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch1_p10_accidents_tectoniques_souples_plis",
      "order": 10,
      "title": "Les accidents tectoniques souples : Plis anticlinaux et synclinaux birrimiens",
      "summary": "Définir un pli géologique (déformation souple sans rupture), analyser ses éléments (charnière, flancs, plan axial) et distinguer anticlinaux et synclinaux.",
      "conceptExplanation": "Un pli est une déformation tectonique souple et continue provoquée par des forces compressives agissant sur des roches ductiles sans provoquer de fracture. On distingue : l'anticlinal (pli à courbure convexe vers le haut, couches les plus anciennes au cœur) et le synclinal (pli à courbure concave vers le haut, couches les plus récentes au cœur). On les observe dans les schistes birrimiens.",
      "formulas": [
        {
          "name": "Typologie des plis géologiques",
          "formula": "Anticlinal (Courbure convexe ∩) vs Synclinal (Courbure concave ∪)",
          "note": "Les plis résultent de contraintes horizontales de compression sur roches ductiles."
        }
      ],
      "keyRule": "Déformation souple = Pli (SANS cassure). Anticlinal = courbure vers le haut (convexe), couches anciennes au centre. Synclinal = creux vers le bas (concave), couches récentes au centre.",
      "workedExample": {
        "title": "Détermination de la nature d'un pli par l'âge des strates",
        "statement": "Une structure plissée présente en son centre des roches du Crétacé entourées par des roches du Tertiaire. S'agit-il d'un anticlinal ou d'un synclinal ?",
        "methodSteps": [
          "Étape 1 : Rappeler la chronologie : le Crétacé est plus ancien que le Tertiaire.",
          "Étape 2 : Constater que les couches du cœur sont les plus anciennes.",
          "Étape 3 : Conclure que la structure est un anticlinal (les couches anciennes occupent le centre de la courbure convexe)."
        ],
        "conclusion": "Cette démarche méthodique conforme au programme MENA garantit la pleine maîtrise de la notion pour les devoirs et examens."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch1_p10_accidents_tectoniques_souples_plis_ex1",
          "type": "mcq",
          "prompt": "Quelle est la définition exacte d'un pli en géologie structurale ?",
          "options": [
            "Une déformation souple et continue des couches géologiques sans aucune rupture ni cassure",
            "Une fracture brutale de la roche avec déplacement des blocs",
            "Un éboulement de falaise causé par la pluie",
            "Un cratère volcanique circulaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Contrairement à la faille qui est une rupture cassante, le pli est une déformation plastique et ductile continue."
        },
        {
          "id": "seconde_c_svt_ch1_p10_accidents_tectoniques_souples_plis_ex2",
          "type": "mcq",
          "prompt": "Comment nomme-t-on un pli dont la courbure est convexe vers le haut (en forme de voûte ou de dôme) ?",
          "options": [
            "Un anticlinal",
            "Un synclinal",
            "Une faille normale",
            "Un graben"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans un anticlinal, les couches s'élèvent en bosse (convexe vers le ciel), et les strates les plus anciennes occupent le cœur."
        },
        {
          "id": "seconde_c_svt_ch1_p10_accidents_tectoniques_souples_plis_ex3",
          "type": "mcq",
          "prompt": "Comment qualifie-t-on un pli dont la courbure est concave vers le haut (en forme de berceau ou de cuvette) ?",
          "options": [
            "Un synclinal",
            "Un anticlinal",
            "Un horst",
            "Un dyke"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans un synclinal, les couches plongent en cuvette concave, et les couches les plus jeunes et récentes occupent le centre."
        },
        {
          "id": "seconde_c_svt_ch1_p10_accidents_tectoniques_souples_plis_ex4",
          "type": "mcq",
          "prompt": "Comment s'appelle la zone de courbure maximale reliant les deux flancs d'un pli ?",
          "options": [
            "La charnière du pli",
            "Le miroir",
            "Le rejet",
            "Le fossé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La charnière est la ligne axiale où la courbure des couches est la plus prononcée."
        },
        {
          "id": "seconde_c_svt_ch1_p10_accidents_tectoniques_souples_plis_ex5",
          "type": "mcq",
          "prompt": "Quel grand type de force tectonique engendre la formation de plis ?",
          "options": [
            "Des forces de compression horizontale (rapprochement et poussée des couches)",
            "Des forces de distension (écartement)",
            "Des forces magnétiques polaires",
            "L'attraction de la Lune"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seules les forces de compression latérale peuvent comprimer des couches horizontales et les contraindre à onduler en plis."
        },
        {
          "id": "seconde_c_svt_ch1_p10_accidents_tectoniques_souples_plis_ex6",
          "type": "mcq",
          "prompt": "Dans quel ensemble géologique ivoirien observe-t-on typiquement des plis anticlinaux et synclinaux ?",
          "options": [
            "Dans les schistes du domaine Protérozoïque birrimien",
            "Dans les sables meubles de Grand-Bassam",
            "Dans l'eau de la lagune Ébrié",
            "Les plis n'existent pas en Côte d'Ivoire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'orogenèse éburnéenne a puissamment comprimé et plissé les formations sédimentaires birrimiennes sur tout le territoire oriental."
        },
        {
          "id": "seconde_c_svt_ch1_p10_accidents_tectoniques_souples_plis_ex7",
          "type": "mcq",
          "prompt": "Pourquoi n'observe-t-on AUCUN pli dans le bassin sédimentaire côtier d'Abidjan ?",
          "options": [
            "Parce que le bassin sédimentaire n'a subi aucune compression orogénique depuis son dépôt au Crétacé",
            "Parce que les roches sont trop vieilles",
            "Parce que les séismes ont tout détruit",
            "Parce que le sel empêche les plis"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Depuis 135 millions d'années, la marge littorale est en régime de distension et de subsidence calme, sans orogenèse compressive."
        },
        {
          "id": "seconde_c_svt_ch1_p10_accidents_tectoniques_souples_plis_ex8",
          "type": "mcq",
          "prompt": "Comment nomme-t-on le plan imaginaire divisant un pli en deux parties à peu près symétriques ?",
          "options": [
            "Le plan axial du pli",
            "Le plan de faille",
            "Le plan équatorial",
            "Le plan de stratification"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le plan axial passe par toutes les charnières des couches successives superposées du pli."
        }
      ],
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepBadge": "Étape 1/8 · Définition d'un pli géologique",
          "stepTheme": "Définition d'un pli géologique",
          "stepTitle": "Définition d'un pli géologique",
          "paragraphText": "Le pliage se produit en profondeur lorsque la roche, sous haute température et pression, devient malléable et plastique.",
          "formula": {
            "name": "Définition d'un pli géologique",
            "formula": "Pli = Déformation continue et souple (Ductile) sans fracture",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Un pli est une déformation souple et continue SANS cassure !",
          "keyRule": "Déformation souple = Pli (SANS cassure). Anticlinal = courbure vers le haut (convexe), couches anciennes au centre. Synclinal = creux vers le bas (concave), couches récentes au centre.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p10_accidents_tectoniques_souples_plis_ex1",
            "type": "mcq",
            "prompt": "Quelle est la définition exacte d'un pli en géologie structurale ?",
            "options": [
              "Une déformation souple et continue des couches géologiques sans aucune rupture ni cassure",
              "Une fracture brutale de la roche avec déplacement des blocs",
              "Un éboulement de falaise causé par la pluie",
              "Un cratère volcanique circulaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Contrairement à la faille qui est une rupture cassante, le pli est une déformation plastique et ductile continue."
          }
        },
        {
          "stepNumber": 2,
          "stepBadge": "Étape 2/8 · L'anticlinal (courbure convexe vers le haut)",
          "stepTheme": "L'anticlinal (courbure convexe vers le haut)",
          "stepTitle": "L'anticlinal (courbure convexe vers le haut)",
          "paragraphText": "Les deux flancs de l'anticlinal divergent en pente descendante à partir de la ligne de crête (charnière).",
          "formula": {
            "name": "L'anticlinal (courbure convexe vers le haut)",
            "formula": "Courbure convexe vers le haut -> Anticlinal (Couches anciennes au cœur)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Anticlinal = courbure en bosse convexe vers le haut !",
          "keyRule": "Déformation souple = Pli (SANS cassure). Anticlinal = courbure vers le haut (convexe), couches anciennes au centre. Synclinal = creux vers le bas (concave), couches récentes au centre.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p10_accidents_tectoniques_souples_plis_ex2",
            "type": "mcq",
            "prompt": "Comment nomme-t-on un pli dont la courbure est convexe vers le haut (en forme de voûte ou de dôme) ?",
            "options": [
              "Un anticlinal",
              "Un synclinal",
              "Une faille normale",
              "Un graben"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans un anticlinal, les couches s'élèvent en bosse (convexe vers le ciel), et les strates les plus anciennes occupent le cœur."
          }
        },
        {
          "stepNumber": 3,
          "stepBadge": "Étape 3/8 · Le synclinal (courbure concave vers le haut)",
          "stepTheme": "Le synclinal (courbure concave vers le haut)",
          "stepTitle": "Le synclinal (courbure concave vers le haut)",
          "paragraphText": "Les deux flancs du synclinal convergent en descendant vers la ligne de fond de cuvette (charnière).",
          "formula": {
            "name": "Le synclinal (courbure concave vers le haut)",
            "formula": "Courbure concave vers le haut -> Synclinal (Couches récentes au cœur)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Synclinal = courbure en creux concave vers le haut !",
          "keyRule": "Déformation souple = Pli (SANS cassure). Anticlinal = courbure vers le haut (convexe), couches anciennes au centre. Synclinal = creux vers le bas (concave), couches récentes au centre.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p10_accidents_tectoniques_souples_plis_ex3",
            "type": "mcq",
            "prompt": "Comment qualifie-t-on un pli dont la courbure est concave vers le haut (en forme de berceau ou de cuvette) ?",
            "options": [
              "Un synclinal",
              "Un anticlinal",
              "Un horst",
              "Un dyke"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans un synclinal, les couches plongent en cuvette concave, et les couches les plus jeunes et récentes occupent le centre."
          }
        },
        {
          "stepNumber": 4,
          "stepBadge": "Étape 4/8 · La charnière d'un pli",
          "stepTheme": "La charnière d'un pli",
          "stepTitle": "La charnière d'un pli",
          "paragraphText": "C'est au niveau de la charnière que les contraintes mécaniques de déformation plastique ont été maximales.",
          "formula": {
            "name": "La charnière d'un pli",
            "formula": "Zone de courbure maximale = Charnière du pli",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : La ligne de courbure maximale est la charnière du pli !",
          "keyRule": "Déformation souple = Pli (SANS cassure). Anticlinal = courbure vers le haut (convexe), couches anciennes au centre. Synclinal = creux vers le bas (concave), couches récentes au centre.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p10_accidents_tectoniques_souples_plis_ex4",
            "type": "mcq",
            "prompt": "Comment s'appelle la zone de courbure maximale reliant les deux flancs d'un pli ?",
            "options": [
              "La charnière du pli",
              "Le miroir",
              "Le rejet",
              "Le fossé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La charnière est la ligne axiale où la courbure des couches est la plus prononcée."
          }
        },
        {
          "stepNumber": 5,
          "stepBadge": "Étape 5/8 · Régime de compression plissante",
          "stepTheme": "Régime de compression plissante",
          "stepTitle": "Régime de compression plissante",
          "paragraphText": "Ces poussées résultent du rapprochement de plaques ou de blocs tectoniques lors des orogenèses.",
          "formula": {
            "name": "Régime de compression plissante",
            "formula": "Forces compressives horizontales -> Plissement des séries sédimentaires ductiles",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Les plis sont causés par des forces de compression horizontale !",
          "keyRule": "Déformation souple = Pli (SANS cassure). Anticlinal = courbure vers le haut (convexe), couches anciennes au centre. Synclinal = creux vers le bas (concave), couches récentes au centre.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p10_accidents_tectoniques_souples_plis_ex5",
            "type": "mcq",
            "prompt": "Quel grand type de force tectonique engendre la formation de plis ?",
            "options": [
              "Des forces de compression horizontale (rapprochement et poussée des couches)",
              "Des forces de distension (écartement)",
              "Des forces magnétiques polaires",
              "L'attraction de la Lune"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seules les forces de compression latérale peuvent comprimer des couches horizontales et les contraindre à onduler en plis."
          }
        },
        {
          "stepNumber": 6,
          "stepBadge": "Étape 6/8 · Plis dans les schistes birrimiens",
          "stepTheme": "Plis dans les schistes birrimiens",
          "stepTitle": "Plis dans les schistes birrimiens",
          "paragraphText": "Les affleurements de schistes montrent des successions spectaculaires de microplis et mégaplis éburnéens.",
          "formula": {
            "name": "Plis dans les schistes birrimiens",
            "formula": "Schistes birrimiens éburnéens -> Présence massive de plis anticlinaux et synclinaux",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Les schistes birrimiens sont plissés par l'orogenèse éburnéenne !",
          "keyRule": "Déformation souple = Pli (SANS cassure). Anticlinal = courbure vers le haut (convexe), couches anciennes au centre. Synclinal = creux vers le bas (concave), couches récentes au centre.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p10_accidents_tectoniques_souples_plis_ex6",
            "type": "mcq",
            "prompt": "Dans quel ensemble géologique ivoirien observe-t-on typiquement des plis anticlinaux et synclinaux ?",
            "options": [
              "Dans les schistes du domaine Protérozoïque birrimien",
              "Dans les sables meubles de Grand-Bassam",
              "Dans l'eau de la lagune Ébrié",
              "Les plis n'existent pas en Côte d'Ivoire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'orogenèse éburnéenne a puissamment comprimé et plissé les formations sédimentaires birrimiennes sur tout le territoire oriental."
          }
        },
        {
          "stepNumber": 7,
          "stepBadge": "Étape 7/8 · Absence d'orogenèse plissante au Sud",
          "stepTheme": "Absence d'orogenèse plissante au Sud",
          "stepTitle": "Absence d'orogenèse plissante au Sud",
          "paragraphText": "Sans compression tectonique, les sédiments restent parfaitement horizontaux et tabulaires.",
          "formula": {
            "name": "Absence d'orogenèse plissante au Sud",
            "formula": "Marge passive distensive -> Absence de plissement dans le bassin côtier",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Le bassin côtier est en distension calme : zéro plissement orogénique !",
          "keyRule": "Déformation souple = Pli (SANS cassure). Anticlinal = courbure vers le haut (convexe), couches anciennes au centre. Synclinal = creux vers le bas (concave), couches récentes au centre.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p10_accidents_tectoniques_souples_plis_ex7",
            "type": "mcq",
            "prompt": "Pourquoi n'observe-t-on AUCUN pli dans le bassin sédimentaire côtier d'Abidjan ?",
            "options": [
              "Parce que le bassin sédimentaire n'a subi aucune compression orogénique depuis son dépôt au Crétacé",
              "Parce que les roches sont trop vieilles",
              "Parce que les séismes ont tout détruit",
              "Parce que le sel empêche les plis"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Depuis 135 millions d'années, la marge littorale est en régime de distension et de subsidence calme, sans orogenèse compressive."
          }
        },
        {
          "stepNumber": 8,
          "stepBadge": "Étape 8/8 · Le plan axial du pli",
          "stepTheme": "Le plan axial du pli",
          "stepTitle": "Le plan axial du pli",
          "paragraphText": "Selon l'inclinaison du plan axial, on classe les plis en plis droits, plis déjetés, plis déversés ou plis couchés.",
          "formula": {
            "name": "Le plan axial du pli",
            "formula": "Symétrie du pli = Plan axial",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Le plan axial divise le pli en deux flancs symétriques !",
          "keyRule": "Déformation souple = Pli (SANS cassure). Anticlinal = courbure vers le haut (convexe), couches anciennes au centre. Synclinal = creux vers le bas (concave), couches récentes au centre.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p10_accidents_tectoniques_souples_plis_ex8",
            "type": "mcq",
            "prompt": "Comment nomme-t-on le plan imaginaire divisant un pli en deux parties à peu près symétriques ?",
            "options": [
              "Le plan axial du pli",
              "Le plan de faille",
              "Le plan équatorial",
              "Le plan de stratification"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le plan axial passe par toutes les charnières des couches successives superposées du pli."
          }
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch1_p11_discordances_geologiques_surface_erosion",
      "order": 11,
      "title": "Les discordances géologiques : Définition, surface d'érosion et processus",
      "summary": "Définir une discordance géologique angulaire, identifier la surface d'érosion et reconstituer chronologiquement les étapes de formation d'une discordance.",
      "conceptExplanation": "Une discordance géologique est un contact anormal et irrégulier séparant deux ensembles rocheux superposés d'âges différents, où les couches supérieures reposent sur les tranches biseautées et érodées de couches inférieures plus anciennes plissées. Elle témoigne d'un cycle géologique complet : sédimentation 1, plissement orogénique, émersion et érosion de surface, puis nouvelle transgression marine et sédimentation 2.",
      "formulas": [
        {
          "name": "Chronologie absolue d'une discordance",
          "formula": "Sédimentation 1 -> Plissement -> Émersion & Érosion -> Transgression -> Sédimentation 2",
          "note": "La surface séparatrice porte le nom de surface de discordance (ou surface d'érosion)."
        }
      ],
      "keyRule": "Discordance = contact anormal où des couches neuves horizontales reposent sur un socle ancien plissé et raboté par l'érosion. Témoin d'un cycle orogénique complet.",
      "workedExample": {
        "title": "Reconstitution des étapes d'une discordance géologique",
        "statement": "Ordonner chronologiquement les 4 étapes qui créent une discordance angulaire.",
        "methodSteps": [
          "Étape 1 : Dépôt horizontal des sédiments anciens au fond de l'eau.",
          "Étape 2 : Pression compressive plissant et dressant les couches anciennes (orogenèse).",
          "Étape 3 : Émersion au-dessus de l'eau et érosion météorique rabotant les sommets des plis.",
          "Étape 4 : Retour de la mer (transgression) déposant de nouvelles couches sédimentaires horizontales sur la surface érodée."
        ],
        "conclusion": "Cette démarche méthodique conforme au programme MENA garantit la pleine maîtrise de la notion pour les devoirs et examens."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch1_p11_discordances_geologiques_surface_erosion_ex1",
          "type": "mcq",
          "prompt": "Quelle est la définition exacte d'une discordance géologique ?",
          "options": [
            "Un contact anormal où des couches sédimentaires récentes reposent sur des couches plus anciennes préalablement plissées et érodées",
            "Une cassure de terrain avec rejet vertical",
            "Une explosion volcanique sous-marine",
            "Une fusion totale des minéraux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La discordance matérialise une interruption majeure dans la sédimentation accompagnée d'une déformation tectonique intermédiaire."
        },
        {
          "id": "seconde_c_svt_ch1_p11_discordances_geologiques_surface_erosion_ex2",
          "type": "mcq",
          "prompt": "Comment nomme-t-on la limite physique séparant l'ensemble inférieur plissé de l'ensemble supérieur horizontal ?",
          "options": [
            "La surface de discordance (ou surface d'érosion)",
            "Le plan de faille miroir",
            "La charnière axiale",
            "Le cratère d'impact"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Cette surface représente l'ancienne surface terrestre rabotée par le vent, les fleuves et les vagues avant la nouvelle sédimentation."
        },
        {
          "id": "seconde_c_svt_ch1_p11_discordances_geologiques_surface_erosion_ex3",
          "type": "mcq",
          "prompt": "Quelle est la toute première étape chronologique de la genèse d'une discordance géologique ?",
          "options": [
            "Le dépôt horizontal des sédiments anciens dans un bassin sédimentaire initial",
            "L'érosion des falaises",
            "L'évaporation totale de la mer",
            "La fonte du manteau terrestre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toute discordance débute obligatoirement par une phase de sédimentation sous-marine normale créant la roche mère ancienne."
        },
        {
          "id": "seconde_c_svt_ch1_p11_discordances_geologiques_surface_erosion_ex4",
          "type": "mcq",
          "prompt": "Quel événement tectonique intervient obligatoirement en deuxième étape pour déformer les couches anciennes ?",
          "options": [
            "Une orogenèse compressive qui plisse, métamorphise et dresse les couches anciennes",
            "Une distension créant un fossé",
            "Une marée d'équinoxe",
            "Un refroidissement hivernal"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les forces orogéniques plissent les couches anciennes : sans ce plissement tectonique, il n'y aurait aucune discordance d'angle."
        },
        {
          "id": "seconde_c_svt_ch1_p11_discordances_geologiques_surface_erosion_ex5",
          "type": "mcq",
          "prompt": "Quel phénomène météorologique et géomorphologique intervient en troisième étape ?",
          "options": [
            "L'émersion des couches et leur érosion rabotant le sommet des plis",
            "Une pluie de météorites",
            "Une inondation instantanée",
            "Une éruption volcanique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le soulèvement hors de l'eau expose les reliefs plissés à l'action destructrice du climat, nivelant le paysage en pénéplaine."
        },
        {
          "id": "seconde_c_svt_ch1_p11_discordances_geologiques_surface_erosion_ex6",
          "type": "mcq",
          "prompt": "Quel phénomène marin permet en quatrième étape le dépôt de nouvelles couches sédimentaires ?",
          "options": [
            "Une transgression marine (la mer revient et recouvre la surface érodée)",
            "Une régression marine définitive",
            "La congélation des eaux",
            "Un courant d'air marin"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La remontée des eaux marines ou l'affaissement du bassin permet à la sédimentation de reprendre pacifiquement à l'horizontale."
        },
        {
          "id": "seconde_c_svt_ch1_p11_discordances_geologiques_surface_erosion_ex7",
          "type": "mcq",
          "prompt": "Quelle roche conglomératique trouve-t-on très souvent déposée directement sur la surface de discordance ?",
          "options": [
            "Un conglomérat de base (poudingue ou brèche sédimentaire à galets)",
            "Du sel fin",
            "Du pétrole liquide",
            "Du basalte vacuolaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les galets arrachés à l'ancien socle par les vagues de la mer qui avance sont cimentés pour former le conglomérat de base."
        },
        {
          "id": "seconde_c_svt_ch1_p11_discordances_geologiques_surface_erosion_ex8",
          "type": "mcq",
          "prompt": "Pourquoi les discordances géologiques sont-elles fondamentales pour les géologues ?",
          "options": [
            "Parce qu'elles prouvent qu'un cycle orogénique et d'érosion s'est achevé avant qu'un nouveau ne commence",
            "Parce qu'elles indiquent où trouver de l'eau gazeuse",
            "Parce qu'elles annoncent la fin du monde",
            "Elles n'ont aucun intérêt scientifique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une discordance est une archive géologique majeure : elle sépare deux ères ou deux cycles de l'histoire de la Terre."
        }
      ],
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepBadge": "Étape 1/8 · Définition d'une discordance stratigraphique",
          "stepTheme": "Définition d'une discordance stratigraphique",
          "stepTitle": "Définition d'une discordance stratigraphique",
          "paragraphText": "L'angle géométrique entre les deux séries de couches donne son nom à la discordance angulaire.",
          "formula": {
            "name": "Définition d'une discordance stratigraphique",
            "formula": "Discordance = Couches récentes horizontales sur couches anciennes plissées et érodées",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Discordance = couches neuves reposant sur des couches anciennes plissées et érodées !",
          "keyRule": "Discordance = contact anormal où des couches neuves horizontales reposent sur un socle ancien plissé et raboté par l'érosion. Témoin d'un cycle orogénique complet.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p11_discordances_geologiques_surface_erosion_ex1",
            "type": "mcq",
            "prompt": "Quelle est la définition exacte d'une discordance géologique ?",
            "options": [
              "Un contact anormal où des couches sédimentaires récentes reposent sur des couches plus anciennes préalablement plissées et érodées",
              "Une cassure de terrain avec rejet vertical",
              "Une explosion volcanique sous-marine",
              "Une fusion totale des minéraux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La discordance matérialise une interruption majeure dans la sédimentation accompagnée d'une déformation tectonique intermédiaire."
          }
        },
        {
          "stepNumber": 2,
          "stepBadge": "Étape 2/8 · La surface de discordance ou paléosurface d'érosion",
          "stepTheme": "La surface de discordance ou paléosurface d'érosion",
          "stepTitle": "La surface de discordance ou paléosurface d'érosion",
          "paragraphText": "Elle est souvent soulignée sur le terrain par un conglomérat de base formé de galets roulés.",
          "formula": {
            "name": "La surface de discordance ou paléosurface d'érosion",
            "formula": "Limite entre les deux ensembles = Surface de discordance (Paléosurface d'érosion)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : La ligne de séparation est la surface de discordance ou surface d'érosion !",
          "keyRule": "Discordance = contact anormal où des couches neuves horizontales reposent sur un socle ancien plissé et raboté par l'érosion. Témoin d'un cycle orogénique complet.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p11_discordances_geologiques_surface_erosion_ex2",
            "type": "mcq",
            "prompt": "Comment nomme-t-on la limite physique séparant l'ensemble inférieur plissé de l'ensemble supérieur horizontal ?",
            "options": [
              "La surface de discordance (ou surface d'érosion)",
              "Le plan de faille miroir",
              "La charnière axiale",
              "Le cratère d'impact"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Cette surface représente l'ancienne surface terrestre rabotée par le vent, les fleuves et les vagues avant la nouvelle sédimentation."
          }
        },
        {
          "stepNumber": 3,
          "stepBadge": "Étape 3/8 · Première étape : Sédimentation ancienne",
          "stepTheme": "Première étape : Sédimentation ancienne",
          "stepTitle": "Première étape : Sédimentation ancienne",
          "paragraphText": "Ces sédiments se déposent en couches initialement horizontales et concordantes.",
          "formula": {
            "name": "Première étape : Sédimentation ancienne",
            "formula": "Étape 1 : Sédimentation initiale en couches horizontales",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Étape 1 = dépôt sédimentaire horizontal des couches anciennes !",
          "keyRule": "Discordance = contact anormal où des couches neuves horizontales reposent sur un socle ancien plissé et raboté par l'érosion. Témoin d'un cycle orogénique complet.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p11_discordances_geologiques_surface_erosion_ex3",
            "type": "mcq",
            "prompt": "Quelle est la toute première étape chronologique de la genèse d'une discordance géologique ?",
            "options": [
              "Le dépôt horizontal des sédiments anciens dans un bassin sédimentaire initial",
              "L'érosion des falaises",
              "L'évaporation totale de la mer",
              "La fonte du manteau terrestre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Toute discordance débute obligatoirement par une phase de sédimentation sous-marine normale créant la roche mère ancienne."
          }
        },
        {
          "stepNumber": 4,
          "stepBadge": "Étape 4/8 · Deuxième étape : Compression et plissement orogénique",
          "stepTheme": "Deuxième étape : Compression et plissement orogénique",
          "stepTitle": "Deuxième étape : Compression et plissement orogénique",
          "paragraphText": "Les contraintes horizontales redressent les strates qui perdent leur horizontalité primitive.",
          "formula": {
            "name": "Deuxième étape : Compression et plissement orogénique",
            "formula": "Étape 2 : Compression orogénique -> Plissement des couches anciennes",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Étape 2 = orogenèse compressive qui plisse et redresse les couches anciennes !",
          "keyRule": "Discordance = contact anormal où des couches neuves horizontales reposent sur un socle ancien plissé et raboté par l'érosion. Témoin d'un cycle orogénique complet.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p11_discordances_geologiques_surface_erosion_ex4",
            "type": "mcq",
            "prompt": "Quel événement tectonique intervient obligatoirement en deuxième étape pour déformer les couches anciennes ?",
            "options": [
              "Une orogenèse compressive qui plisse, métamorphise et dresse les couches anciennes",
              "Une distension créant un fossé",
              "Une marée d'équinoxe",
              "Un refroidissement hivernal"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les forces orogéniques plissent les couches anciennes : sans ce plissement tectonique, il n'y aurait aucune discordance d'angle."
          }
        },
        {
          "stepNumber": 5,
          "stepBadge": "Étape 5/8 · Troisième étape : Émersion et érosion de surface",
          "stepTheme": "Troisième étape : Émersion et érosion de surface",
          "stepTitle": "Troisième étape : Émersion et érosion de surface",
          "paragraphText": "L'érosion biseaute les têtes de couches plissées et prépare la future surface de contact.",
          "formula": {
            "name": "Troisième étape : Émersion et érosion de surface",
            "formula": "Étape 3 : Émersion au-dessus de l'eau et rabotage érosif des plis",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Étape 3 = émersion et érosion qui rabotent les sommets des plis !",
          "keyRule": "Discordance = contact anormal où des couches neuves horizontales reposent sur un socle ancien plissé et raboté par l'érosion. Témoin d'un cycle orogénique complet.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p11_discordances_geologiques_surface_erosion_ex5",
            "type": "mcq",
            "prompt": "Quel phénomène météorologique et géomorphologique intervient en troisième étape ?",
            "options": [
              "L'émersion des couches et leur érosion rabotant le sommet des plis",
              "Une pluie de météorites",
              "Une inondation instantanée",
              "Une éruption volcanique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le soulèvement hors de l'eau expose les reliefs plissés à l'action destructrice du climat, nivelant le paysage en pénéplaine."
          }
        },
        {
          "stepNumber": 6,
          "stepBadge": "Étape 6/8 · Quatrième étape : Transgression marine nouvelle",
          "stepTheme": "Quatrième étape : Transgression marine nouvelle",
          "stepTitle": "Quatrième étape : Transgression marine nouvelle",
          "paragraphText": "Les nouveaux sédiments recouvrent la surface d'érosion en formant de nouvelles strates bien planes.",
          "formula": {
            "name": "Quatrième étape : Transgression marine nouvelle",
            "formula": "Étape 4 : Transgression marine -> Nouvelle sédimentation concordante",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Étape 4 = transgression marine qui redépose des couches sédimentaires horizontales !",
          "keyRule": "Discordance = contact anormal où des couches neuves horizontales reposent sur un socle ancien plissé et raboté par l'érosion. Témoin d'un cycle orogénique complet.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p11_discordances_geologiques_surface_erosion_ex6",
            "type": "mcq",
            "prompt": "Quel phénomène marin permet en quatrième étape le dépôt de nouvelles couches sédimentaires ?",
            "options": [
              "Une transgression marine (la mer revient et recouvre la surface érodée)",
              "Une régression marine définitive",
              "La congélation des eaux",
              "Un courant d'air marin"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La remontée des eaux marines ou l'affaissement du bassin permet à la sédimentation de reprendre pacifiquement à l'horizontale."
          }
        },
        {
          "stepNumber": 7,
          "stepBadge": "Étape 7/8 · Le conglomérat de base transgressif",
          "stepTheme": "Le conglomérat de base transgressif",
          "stepTitle": "Le conglomérat de base transgressif",
          "paragraphText": "La présence de galets remaniés du socle dans la roche sus-jacente prouve indubitablement la discordance.",
          "formula": {
            "name": "Le conglomérat de base transgressif",
            "formula": "Base de la nouvelle série = Conglomérat de base à galets remaniés",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Un conglomérat de base (galets cimentés) souligne la surface de discordance !",
          "keyRule": "Discordance = contact anormal où des couches neuves horizontales reposent sur un socle ancien plissé et raboté par l'érosion. Témoin d'un cycle orogénique complet.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p11_discordances_geologiques_surface_erosion_ex7",
            "type": "mcq",
            "prompt": "Quelle roche conglomératique trouve-t-on très souvent déposée directement sur la surface de discordance ?",
            "options": [
              "Un conglomérat de base (poudingue ou brèche sédimentaire à galets)",
              "Du sel fin",
              "Du pétrole liquide",
              "Du basalte vacuolaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les galets arrachés à l'ancien socle par les vagues de la mer qui avance sont cimentés pour former le conglomérat de base."
          }
        },
        {
          "stepNumber": 8,
          "stepBadge": "Étape 8/8 · Importance chronologique des discordances",
          "stepTheme": "Importance chronologique des discordances",
          "stepTitle": "Importance chronologique des discordances",
          "paragraphText": "Elles permettent de délimiter dans le temps les grandes révolutions géologiques et orogéniques de la planète.",
          "formula": {
            "name": "Importance chronologique des discordances",
            "formula": "Discordance = Marqueur absolu de rupture de cycle dans l'histoire de la Terre",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : La discordance sépare deux cycles complets de l'histoire géologique !",
          "keyRule": "Discordance = contact anormal où des couches neuves horizontales reposent sur un socle ancien plissé et raboté par l'érosion. Témoin d'un cycle orogénique complet.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p11_discordances_geologiques_surface_erosion_ex8",
            "type": "mcq",
            "prompt": "Pourquoi les discordances géologiques sont-elles fondamentales pour les géologues ?",
            "options": [
              "Parce qu'elles prouvent qu'un cycle orogénique et d'érosion s'est achevé avant qu'un nouveau ne commence",
              "Parce qu'elles indiquent où trouver de l'eau gazeuse",
              "Parce qu'elles annoncent la fin du monde",
              "Elles n'ont aucun intérêt scientifique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une discordance est une archive géologique majeure : elle sépare deux ères ou deux cycles de l'histoire de la Terre."
          }
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch1_p12_discordances_ivoiriennes_histoire_geologique",
      "order": 12,
      "title": "Discordances majeures ivoiriennes (Kokumbo et Abronienne) et synthèse",
      "summary": "Identifier les discordances historiques ivoiriennes (discordance de Kokumbo, discordance Abronienne) et synthétiser l'histoire géologique de la Côte d'Ivoire.",
      "conceptExplanation": "En Côte d'Ivoire, les discordances majeures attestent des mégacycles orogéniques successifs : la discordance de Kokumbo (discordance de base du Tarkwaïen sur le Birrimien plissé) et la discordance Abronienne (dans la région de Bondoukou / Bouna). Ces structures couronnent la synthèse de l'histoire géologique ivoirienne : cratonisation archéenne (Libérien), structuration protérozoïque (Éburnéen) et ouverture atlantique (Crétacé).",
      "formulas": [
        {
          "name": "Synthèse de l'histoire géologique de la Côte d'Ivoire",
          "formula": "Archéen (4 000-2 500 Ma) -> Birrimien (2 500-540 Ma) -> Bassin Côtier (135 Ma à nos jours)",
          "note": "Marquée par les discordances majeures de Kokumbo et Abronienne."
        }
      ],
      "keyRule": "Discordance de Kokumbo = Tarkwaïen sur Birrimien plissé (au Centre). Discordance Abronienne = Est (Bondoukou). Histoire géologique = Archéen -> Protérozoïque -> Bassin côtier.",
      "workedExample": {
        "title": "Reconstitution de la discordance de Kokumbo",
        "statement": "À Kokumbo, on observe des grès et conglomérats tarkwaïens reposant sur des schistes birrimiens plissés. Reconstituer l'histoire géologique.",
        "methodSteps": [
          "Étape 1 : Dépôt et plissement orogénique des schistes birrimiens lors du cycle éburnéen.",
          "Étape 2 : Émersion et érosion météorique rabotant les schistes birrimiens.",
          "Étape 3 : Dépôt en discordance des sédiments détritiques du Tarkwaïen (conglomérats et grès à Kokumbo).",
          "Étape 4 : Conclure que Kokumbo est la localité type de la discordance éburnéenne ivoirienne."
        ],
        "conclusion": "Cette démarche méthodique conforme au programme MENA garantit la pleine maîtrise de la notion pour les devoirs et examens."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch1_p12_discordances_ivoiriennes_histoire_geologique_ex1",
          "type": "mcq",
          "prompt": "Dans quelle localité géologique célèbre de Côte d'Ivoire affleure la discordance de base du Tarkwaïen ?",
          "options": [
            "À Kokumbo (dans la région de Toumodi au Centre)",
            "À San-Pédro",
            "À Korhogo",
            "À Grand-Bassam"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Kokumbo est le site de référence national où l'on observe les conglomérats tarkwaïens reposant en discordance sur le Birrimien."
        },
        {
          "id": "seconde_c_svt_ch1_p12_discordances_ivoiriennes_histoire_geologique_ex2",
          "type": "mcq",
          "prompt": "Quelles formations géologiques reposent en discordance sur les schistes birrimiens à Kokumbo ?",
          "options": [
            "Les sédiments détritiques du Tarkwaïen (grès quartzitiques et conglomérats aurifères)",
            "Les sables du Continental Terminal",
            "Les charnockites de Man",
            "Les calcaires d'Abidjan"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le Tarkwaïen est une série continentale tarditectonique formée de galets et grès déposés sur les schistes érodés."
        },
        {
          "id": "seconde_c_svt_ch1_p12_discordances_ivoiriennes_histoire_geologique_ex3",
          "type": "mcq",
          "prompt": "Comment nomme-t-on la seconde discordance géologique majeure observée dans l'Est ivoirien ?",
          "options": [
            "La discordance Abronienne (dans la région de Bondoukou et Bouna)",
            "La discordance de Danané",
            "La discordance de Sassandra",
            "La discordance de Fresco"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La discordance Abronienne marque la superposition de séries sédimentaires anciennes sur le socle granito-gneissique de l'Est."
        },
        {
          "id": "seconde_c_svt_ch1_p12_discordances_ivoiriennes_histoire_geologique_ex4",
          "type": "mcq",
          "prompt": "Quelle orogenèse majeure est directement responsable du plissement des roches antérieures à la discordance de Kokumbo ?",
          "options": [
            "L'orogenèse éburnéenne (vers 2 100 millions d'années)",
            "L'orogenèse alpine",
            "L'orogenèse calédonienne",
            "L'ouverture atlantique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la fin de la première phase de l'Éburnéen qui a plissé les schistes avant le dépôt du Tarkwaïen."
        },
        {
          "id": "seconde_c_svt_ch1_p12_discordances_ivoiriennes_histoire_geologique_ex5",
          "type": "mcq",
          "prompt": "Dans quel ordre chronologique exact se sont mis en place les trois grands ensembles géologiques ivoiriens ?",
          "options": [
            "1. Domaine Archéen -> 2. Domaine Protérozoïque -> 3. Bassin sédimentaire côtier",
            "1. Bassin côtier -> 2. Archéen -> 3. Protérozoïque",
            "1. Protérozoïque -> 2. Bassin côtier -> 3. Archéen",
            "Tous les trois se sont formés en même temps"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'Archéen s'est formé il y a plus de 2,5 milliards d'années, suivi du Protérozoïque (2,5 à 0,54 Ga), et enfin du bassin côtier (0,135 Ga)."
        },
        {
          "id": "seconde_c_svt_ch1_p12_discordances_ivoiriennes_histoire_geologique_ex6",
          "type": "mcq",
          "prompt": "Quelle grande conclusion métallogénique résume la géologie économique de la Côte d'Ivoire ?",
          "options": [
            "L'Archéen recèle le fer (Man), le Birrimien recèle l'or et le manganèse, et le bassin côtier recèle le pétrole et l'eau",
            "La Côte d'Ivoire n'a aucune ressource géologique",
            "Tout le territoire ne contient que du calcaire",
            "Le pétrole se trouve à Man"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque grand domaine géologique est le berceau d'une richesse économique nationale précise."
        },
        {
          "id": "seconde_c_svt_ch1_p12_discordances_ivoiriennes_histoire_geologique_ex7",
          "type": "mcq",
          "prompt": "Quel événement tectonique cassant d'âge secondaire a achevé la découpe du littoral ivoirien ?",
          "options": [
            "Le jeu de la faille des lagunes accompagnant l'ouverture de l'océan Atlantique Sud",
            "La faille du Nil",
            "L'orogenèse himalayenne",
            "L'éruption du Vésuve"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'effondrement de 5 km le long de la faille des lagunes a séparé définitivement l'Afrique de l'Amérique du Sud."
        },
        {
          "id": "seconde_c_svt_ch1_p12_discordances_ivoiriennes_histoire_geologique_ex8",
          "type": "mcq",
          "prompt": "Quel est le devoir civique et scientifique d'un citoyen ivoirien instruit en SVT ?",
          "options": [
            "Connaître les ressources de son sous-sol géologique et veiller à leur gestion durable et écologique",
            "Vendre clandestinement les minerais",
            "Détruire les roches au marteau",
            "Polluer les nappes phréatiques d'eau douce"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La connaissance rigoureuse de la géologie permet d'exploiter les minerais sans détruire l'environnement ni empoisonner l'eau."
        }
      ],
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepBadge": "Étape 1/8 · La discordance géologique de Kokumbo",
          "stepTheme": "La discordance géologique de Kokumbo",
          "stepTitle": "La discordance géologique de Kokumbo",
          "paragraphText": "Ce contact stratigraphique spectaculaire est étudié par tous les étudiants en géologie de Côte d'Ivoire.",
          "formula": {
            "name": "La discordance géologique de Kokumbo",
            "formula": "Site officiel de discordance : Kokumbo (Région du Bélier / Toumodi)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Discordance majeure ivoirienne = Kokumbo (près de Toumodi) !",
          "keyRule": "Discordance de Kokumbo = Tarkwaïen sur Birrimien plissé (au Centre). Discordance Abronienne = Est (Bondoukou). Histoire géologique = Archéen -> Protérozoïque -> Bassin côtier.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p12_discordances_ivoiriennes_histoire_geologique_ex1",
            "type": "mcq",
            "prompt": "Dans quelle localité géologique célèbre de Côte d'Ivoire affleure la discordance de base du Tarkwaïen ?",
            "options": [
              "À Kokumbo (dans la région de Toumodi au Centre)",
              "À San-Pédro",
              "À Korhogo",
              "À Grand-Bassam"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Kokumbo est le site de référence national où l'on observe les conglomérats tarkwaïens reposant en discordance sur le Birrimien."
          }
        },
        {
          "stepNumber": 2,
          "stepBadge": "Étape 2/8 · Le Tarkwaïen en discordance sur le Birrimien",
          "stepTheme": "Le Tarkwaïen en discordance sur le Birrimien",
          "stepTitle": "Le Tarkwaïen en discordance sur le Birrimien",
          "paragraphText": "Ces conglomérats contiennent parfois des paléoplacers d'or piégés dans les galets.",
          "formula": {
            "name": "Le Tarkwaïen en discordance sur le Birrimien",
            "formula": "Série discordante à Kokumbo : Grès et Conglomérats du Tarkwaïen",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : À Kokumbo : les grès et conglomérats du Tarkwaïen reposent sur le Birrimien !",
          "keyRule": "Discordance de Kokumbo = Tarkwaïen sur Birrimien plissé (au Centre). Discordance Abronienne = Est (Bondoukou). Histoire géologique = Archéen -> Protérozoïque -> Bassin côtier.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p12_discordances_ivoiriennes_histoire_geologique_ex2",
            "type": "mcq",
            "prompt": "Quelles formations géologiques reposent en discordance sur les schistes birrimiens à Kokumbo ?",
            "options": [
              "Les sédiments détritiques du Tarkwaïen (grès quartzitiques et conglomérats aurifères)",
              "Les sables du Continental Terminal",
              "Les charnockites de Man",
              "Les calcaires d'Abidjan"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le Tarkwaïen est une série continentale tarditectonique formée de galets et grès déposés sur les schistes érodés."
          }
        },
        {
          "stepNumber": 3,
          "stepBadge": "Étape 3/8 · La discordance Abronienne (Bondoukou)",
          "stepTheme": "La discordance Abronienne (Bondoukou)",
          "stepTitle": "La discordance Abronienne (Bondoukou)",
          "paragraphText": "Son nom dérive du royaume Abron dans le district du Zanzan où elle a été identifiée par les géologues.",
          "formula": {
            "name": "La discordance Abronienne (Bondoukou)",
            "formula": "Discordance orientale : Discordance Abronienne (Bondoukou / Bouna)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Discordance de l'Est ivoirien = Discordance Abronienne (Bondoukou) !",
          "keyRule": "Discordance de Kokumbo = Tarkwaïen sur Birrimien plissé (au Centre). Discordance Abronienne = Est (Bondoukou). Histoire géologique = Archéen -> Protérozoïque -> Bassin côtier.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p12_discordances_ivoiriennes_histoire_geologique_ex3",
            "type": "mcq",
            "prompt": "Comment nomme-t-on la seconde discordance géologique majeure observée dans l'Est ivoirien ?",
            "options": [
              "La discordance Abronienne (dans la région de Bondoukou et Bouna)",
              "La discordance de Danané",
              "La discordance de Sassandra",
              "La discordance de Fresco"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La discordance Abronienne marque la superposition de séries sédimentaires anciennes sur le socle granito-gneissique de l'Est."
          }
        },
        {
          "stepNumber": 4,
          "stepBadge": "Étape 4/8 · Rôle de l'orogenèse éburnéenne",
          "stepTheme": "Rôle de l'orogenèse éburnéenne",
          "stepTitle": "Rôle de l'orogenèse éburnéenne",
          "paragraphText": "Le plissement éburnéen a redressé les couches qui ont ensuite été tronquées par l'érosion avant le Tarkwaïen.",
          "formula": {
            "name": "Rôle de l'orogenèse éburnéenne",
            "formula": "Orogenèse responsable : Mégacycle Éburnéen (2 100 Ma)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : L'orogenèse éburnéenne a plissé les roches avant la discordance de Kokumbo !",
          "keyRule": "Discordance de Kokumbo = Tarkwaïen sur Birrimien plissé (au Centre). Discordance Abronienne = Est (Bondoukou). Histoire géologique = Archéen -> Protérozoïque -> Bassin côtier.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p12_discordances_ivoiriennes_histoire_geologique_ex4",
            "type": "mcq",
            "prompt": "Quelle orogenèse majeure est directement responsable du plissement des roches antérieures à la discordance de Kokumbo ?",
            "options": [
              "L'orogenèse éburnéenne (vers 2 100 millions d'années)",
              "L'orogenèse alpine",
              "L'orogenèse calédonienne",
              "L'ouverture atlantique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la fin de la première phase de l'Éburnéen qui a plissé les schistes avant le dépôt du Tarkwaïen."
          }
        },
        {
          "stepNumber": 5,
          "stepBadge": "Étape 5/8 · Chronologie absolue des trois ensembles",
          "stepTheme": "Chronologie absolue des trois ensembles",
          "stepTitle": "Chronologie absolue des trois ensembles",
          "paragraphText": "C'est la règle d'or de la géologie ivoirienne : de l'Ouest ancien vers l'Est plus jeune, puis le Sud littoral récent.",
          "formula": {
            "name": "Chronologie absolue des trois ensembles",
            "formula": "Ordre chronologique : Archéen (> 2 500 Ma) -> Birrimien (2 100 Ma) -> Bassin côtier (135 Ma)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Chronologie : 1. Archéen -> 2. Protérozoïque (Birrimien) -> 3. Bassin côtier !",
          "keyRule": "Discordance de Kokumbo = Tarkwaïen sur Birrimien plissé (au Centre). Discordance Abronienne = Est (Bondoukou). Histoire géologique = Archéen -> Protérozoïque -> Bassin côtier.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p12_discordances_ivoiriennes_histoire_geologique_ex5",
            "type": "mcq",
            "prompt": "Dans quel ordre chronologique exact se sont mis en place les trois grands ensembles géologiques ivoiriens ?",
            "options": [
              "1. Domaine Archéen -> 2. Domaine Protérozoïque -> 3. Bassin sédimentaire côtier",
              "1. Bassin côtier -> 2. Archéen -> 3. Protérozoïque",
              "1. Protérozoïque -> 2. Bassin côtier -> 3. Archéen",
              "Tous les trois se sont formés en même temps"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'Archéen s'est formé il y a plus de 2,5 milliards d'années, suivi du Protérozoïque (2,5 à 0,54 Ga), et enfin du bassin côtier (0,135 Ga)."
          }
        },
        {
          "stepNumber": 6,
          "stepBadge": "Étape 6/8 · Synthèse métallogénique de la Côte d'Ivoire",
          "stepTheme": "Synthèse métallogénique de la Côte d'Ivoire",
          "stepTitle": "Synthèse métallogénique de la Côte d'Ivoire",
          "paragraphText": "Cette corrélation parfaite entre province géologique et matière première est la base de l'économie minière ivoirienne.",
          "formula": {
            "name": "Synthèse métallogénique de la Côte d'Ivoire",
            "formula": "Synthèse : Archéen (Fer) | Birrimien (Or, Manganèse) | Bassin côtier (Pétrole, Gaz, Eau)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Archéen = Fer de Man ; Birrimien = Or et Manganèse ; Bassin = Pétrole et Eau !",
          "keyRule": "Discordance de Kokumbo = Tarkwaïen sur Birrimien plissé (au Centre). Discordance Abronienne = Est (Bondoukou). Histoire géologique = Archéen -> Protérozoïque -> Bassin côtier.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p12_discordances_ivoiriennes_histoire_geologique_ex6",
            "type": "mcq",
            "prompt": "Quelle grande conclusion métallogénique résume la géologie économique de la Côte d'Ivoire ?",
            "options": [
              "L'Archéen recèle le fer (Man), le Birrimien recèle l'or et le manganèse, et le bassin côtier recèle le pétrole et l'eau",
              "La Côte d'Ivoire n'a aucune ressource géologique",
              "Tout le territoire ne contient que du calcaire",
              "Le pétrole se trouve à Man"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque grand domaine géologique est le berceau d'une richesse économique nationale précise."
          }
        },
        {
          "stepNumber": 7,
          "stepBadge": "Étape 7/8 · La faille des lagunes, ultime cicatrice tectonique",
          "stepTheme": "La faille des lagunes, ultime cicatrice tectonique",
          "stepTitle": "La faille des lagunes, ultime cicatrice tectonique",
          "paragraphText": "Cette fracturation normale clôt l'histoire géologique structurale majeure de la Côte d'Ivoire.",
          "formula": {
            "name": "La faille des lagunes, ultime cicatrice tectonique",
            "formula": "Ultime accident majeur : Faille des lagunes (Crétacé - 135 Ma)",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : La faille des lagunes a achevé la géométrie de notre façade maritime !",
          "keyRule": "Discordance de Kokumbo = Tarkwaïen sur Birrimien plissé (au Centre). Discordance Abronienne = Est (Bondoukou). Histoire géologique = Archéen -> Protérozoïque -> Bassin côtier.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p12_discordances_ivoiriennes_histoire_geologique_ex7",
            "type": "mcq",
            "prompt": "Quel événement tectonique cassant d'âge secondaire a achevé la découpe du littoral ivoirien ?",
            "options": [
              "Le jeu de la faille des lagunes accompagnant l'ouverture de l'océan Atlantique Sud",
              "La faille du Nil",
              "L'orogenèse himalayenne",
              "L'éruption du Vésuve"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'effondrement de 5 km le long de la faille des lagunes a séparé définitivement l'Afrique de l'Amérique du Sud."
          }
        },
        {
          "stepNumber": 8,
          "stepBadge": "Étape 8/8 · Gestion durable des ressources de la Terre",
          "stepTheme": "Gestion durable des ressources de la Terre",
          "stepTitle": "Gestion durable des ressources de la Terre",
          "paragraphText": "L'apprentissage des SVT selon le programme MENA forme des citoyens éclairés capables de protéger le patrimoine national.",
          "formula": {
            "name": "Gestion durable des ressources de la Terre",
            "formula": "Citoyenneté scientifique : Valorisation et protection durable du sous-sol national",
            "note": "Notion officielle du programme de SVT 2de C (MENA Côte d'Ivoire)."
          },
          "konanTip": "L'Astuce du Professeur Konan : Maîtriser la géologie pour valoriser et protéger durablement nos ressources nationales !",
          "keyRule": "Discordance de Kokumbo = Tarkwaïen sur Birrimien plissé (au Centre). Discordance Abronienne = Est (Bondoukou). Histoire géologique = Archéen -> Protérozoïque -> Bassin côtier.",
          "exercise": {
            "id": "seconde_c_svt_ch1_p12_discordances_ivoiriennes_histoire_geologique_ex8",
            "type": "mcq",
            "prompt": "Quel est le devoir civique et scientifique d'un citoyen ivoirien instruit en SVT ?",
            "options": [
              "Connaître les ressources de son sous-sol géologique et veiller à leur gestion durable et écologique",
              "Vendre clandestinement les minerais",
              "Détruire les roches au marteau",
              "Polluer les nappes phréatiques d'eau douce"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La connaissance rigoureuse de la géologie permet d'exploiter les minerais sans détruire l'environnement ni empoisonner l'eau."
          }
        }
      ]
    }
  ]
};

export const svt2deCAlterationRochesMagmatiquesChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch2_alteration_chimique_roches_magmatiques",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 2,
  "officialVolumeHours": 2,
  "title": "Leçon 2 — L'altération chimique des roches magmatiques",
  "summary": "Rôle de l'eau chargée de CO2 comme agent d'altération, comportement différentiel des minéraux du granite (quartz, micas, feldspaths), mécanisme de l'hydrolyse et genèse de l'arène granitique.",
  "points": [
    {
      "id": "seconde_c_svt_ch2_p1_agent_alteration_comportement_mineraux_granite",
      "order": 1,
      "title": "Agent d'altération et comportement des minéraux du granite",
      "summary": "Identifier l'eau météorique enrichie en dioxyde de carbone comme agent d'altération et analyser la transformation du granite sain en arène granitique friable.",
      "conceptExplanation": "1. Le granite sain et sa composition minéralogique :\nLe granite est une roche magmatique plutonique, cohérente, grenue et très dure, formée en profondeur par refroidissement lent d'un magma. Il est principalement constitué de trois minéraux imbriqués :\n- Le quartz (cristaux gris vitreux translucides, durs et sans clivage).\n- Les feldspaths (orthose/plagioclases, cristaux blanchâtres ou rosés à reflets nacrés).\n- Les micas (micas blancs ou moscovite, et micas noirs ou biotite riches en fer et magnésium).\n\n2. L'agent principal de l'altération chimique : l'eau météorique acidifiée :\nÀ l'affleurement, les roches magmatiques sont exposées aux intempéries. L'agent responsable de leur altération chimique est l'eau de pluie. En traversant l'atmosphère et les sols, l'eau dissout du dioxyde de carbone (CO₂) pour former de l'acide carbonique (H₂CO₃) selon la réaction réversible :\nH₂O + CO₂ ⇌ H₂CO₃.\nCet acide carbonique confère à l'eau un caractère agressif qui attaque chimiquement les liaisons minérales.\n\n3. Comportement différentiel des minéraux du granite face à l'altération :\nTous les minéraux n'ont pas la même résistance face à l'eau acidifiée :\n- Le quartz est un minéral inaltérable. Il ne subit aucune décomposition chimique et se retrouve intact sous forme de grains de quartz libres : le sable quartzeux.\n- Les feldspaths potassiques sont très altérables : ils se décomposent pour donner des minéraux argileux (la kaolinite) et libèrent des ions solubles dans l'eau de ruissellement.\n- Les micas sont altérables : ils se transforment également en argiles. De plus, le mica noir (biotite) libère ses ions fer (Fe²⁺) qui s'oxydent en oxyde de fer ferrique (Fe₂O₃), conférant à la roche altérée sa teinte ocre, rouille ou jaunâtre caractéristique.\n\n4. Conséquence macroscopique : la formation de l'arène granitique et des boules de granite :\nLa destruction des feldspaths et des micas brise la cohésion du granite. Le granite sain perd sa dureté, devient friable et se désagrège en une roche meuble appelée l'arène granitique (mélange de sable quartzeux, d'argile kaolinique et d'oxydes de fer). L'altération progressant par les diaclases (fissures) isole progressivement des blocs arrondis : c'est le chaos granitique (boules de granite).",
      "formulas": [
        {
          "name": "Formation de l'acide carbonique dans les eaux de pluie",
          "formula": "H₂O + CO₂ ⇌ H₂CO₃",
          "note": "L'eau chargée de dioxyde de carbone est l'agent d'attaque chimique."
        },
        {
          "name": "Bilan des produits de l'altération du granite",
          "formula": "Granite sain + Eau acidifiée → Arène granitique (Sable + Argile + Oxydes de fer)",
          "note": "Quartz = sable ; Feldspaths/micas = argile ; Mica noir = oxydes de fer."
        }
      ],
      "keyRule": "Face à l'altération chimique de l'eau, RETENIR LA RÈGLE D'OR : LE QUARTZ EST INALTÉRABLE (il donne le sable). LES FELDSPATHS ET MICAS SONT ALTÉRABLES (ils donnent l'argile). LE FER DU MICA NOIR S'OXYDE pour donner la couleur jaune-rouille (oxyde de fer Fe₂O₃).",
      "workedExample": {
        "title": "Exemple résolu : Analyse d'un échantillon de roche dégradée au bord d'un fleuve",
        "statement": "Au bord du fleuve Sassandra, des élèves ramassent une roche friable de couleur ocre qui s'effrite entre les doigts. L'analyse montre qu'elle contient des grains translucides durs insolubles, une poudre très fine plastique au contact de l'eau, et un pigment rouille.\n1. Identifier les minéraux d'origine du granite correspondant à ces trois fractions.\n2. Nommer cette roche meuble résultant de l'altération du granite.",
        "methodSteps": [
          "Étape 1 : Identifier les grains translucides durs : il s'agit du quartz inaltérable qui forme les grains de sable.",
          "Étape 2 : Identifier la poudre fine plastique à l'eau : il s'agit des minéraux argileux (kaolinite) issus de l'altération chimique des feldspaths et des micas.",
          "Étape 3 : Identifier le pigment rouille : il s'agit d'oxydes de fer (Fe₂O₃) issus de l'oxydation du fer ferreux contenu dans le mica noir (biotite).",
          "Étape 4 : Nommer la roche meuble finale : c'est l'arène granitique."
        ],
        "conclusion": "L'échantillon est de l'arène granitique, produit de décomposition du granite sous l'action de l'eau pluviale enrichie en CO₂."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch2_p1_ex1",
          "type": "mcq",
          "prompt": "Quel est l'agent principal responsable de l'altération chimique des roches magmatiques à la surface de la Terre ?",
          "options": [
            "L'eau météorique chargée de dioxyde de carbone (CO₂)",
            "Le vent sec et la poussière désertique",
            "La lave basaltique incandescente",
            "Le rayonnement ultraviolet solaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'eau météorique (pluie), acidifiée par le CO₂ atmosphérique pour former l'acide carbonique H₂CO₃, est le principal agent d'altération chimique des roches."
        },
        {
          "id": "seconde_c_svt_ch2_p1_ex2",
          "type": "mcq",
          "prompt": "Quel minéral constitutif du granite sain est chimiquement inaltérable par l'eau et donne naissance aux grains de sable ?",
          "options": [
            "Le quartz",
            "Le feldspath potassique",
            "Le mica blanc",
            "La biotite (mica noir)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le quartz (silice pure SiO₂) est un minéral extrêmement résistant qui ne subit aucune décomposition chimique à l'eau et forme les grains de sable."
        },
        {
          "id": "seconde_c_svt_ch2_p1_ex3",
          "type": "mcq",
          "prompt": "En quel nouveau minéral se transforment principalement les feldspaths du granite sous l'action de l'eau acidifiée ?",
          "options": [
            "En argile (kaolinite)",
            "En quartz",
            "En calcite",
            "En gypse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'altération des feldspaths détruit leur réseau cristallin pour produire des minéraux argileux néoformés, en particulier la kaolinite."
        },
        {
          "id": "seconde_c_svt_ch2_p1_ex4",
          "type": "mcq",
          "prompt": "À quoi est due la coloration rouille ou ocre caractéristique du granite altéré ?",
          "options": [
            "À l'oxydation du fer libéré par le mica noir (biotite) en oxyde de fer (Fe₂O₃)",
            "À la fusion du quartz à haute température",
            "À la présence de soufre volcanique",
            "À l'évaporation de l'eau salée de mer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le mica noir (biotite) contient du fer ; lors de sa décomposition, le fer s'oxyde pour former de l'oxyde de fer (Fe₂O₃), qui colore l'ensemble en rouille/ocre."
        },
        {
          "id": "seconde_c_svt_ch2_p1_ex5",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la roche meuble et friable issue de la décomposition complète d'un massif granitique ?",
          "options": [
            "L'arène granitique",
            "La bauxite",
            "Le basalte",
            "Le marbre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'arène granitique est le mélange meuble constitué de grains de quartz résiduels, d'argiles et d'oxydes issu de la désagrégation du granite."
        },
        {
          "id": "seconde_c_svt_ch2_p1_ex6",
          "type": "mcq",
          "prompt": "Quelle réaction chimique décrit la formation de l'acide carbonique dans les eaux de ruissellement ?",
          "options": [
            "H₂O + CO₂ ⇌ H₂CO₃",
            "2 H₂ + O₂ → 2 H₂O",
            "HCl + NaOH → NaCl + H₂O",
            "CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'acide carbonique résulte de la dissolution et combinaison du dioxyde de carbone dans l'eau : H₂O + CO₂ ⇌ H₂CO₃."
        },
        {
          "id": "seconde_c_svt_ch2_p1_ex7",
          "type": "mcq",
          "prompt": "Qu'appelle-t-on un 'chaos granitique' dans un paysage géologique ?",
          "options": [
            "Un empilement de blocs arrondis (boules de granite) dégagés par l'érosion de l'arène",
            "Une faille tectonique active provoquant des séismes",
            "Un cratère d'explosion volcanique éteint",
            "Une nappe souterraine d'eau minérale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le chaos granitique est un paysage d'érosion formé de boules de granite isolées après le déblaiement de l'arène granitique par l'eau et le vent."
        },
        {
          "id": "seconde_c_svt_ch2_p1_ex8",
          "type": "mcq",
          "prompt": "Quel est l'effet immédiat de l'altération chimique sur la cohésion du massif granitique ?",
          "options": [
            "La roche perd totalement sa cohésion et devient friable",
            "La roche devient encore plus dure et indestructible",
            "La roche cristallise sous forme de verre volcanique",
            "La roche se transforme instantanément en magma liquide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En détruisant les feldspaths qui servaient de 'ciment' cristallin entre les grains de quartz, l'eau détruit la cohésion de la roche qui devient meuble et friable."
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch2_p2_mecanisme_hydrolyse_feldspath_argiles",
      "order": 2,
      "title": "Mécanisme physico-chimique de l'hydrolyse du feldspath et genèse de l'argile",
      "summary": "Expliquer les étapes d'hydratation, d'échange d'ions H+/K+, d'effondrement du réseau cristallin et de recombinaison en argile (kaolinite).",
      "conceptExplanation": "1. Définition de l'hydrolyse minérale :\nL'hydrolyse est une réaction chimique de double décomposition entre les minéraux d'une roche et l'eau acidifiée, conduisant à la destruction du réseau cristallin originel et à la néoformation de composés chimiques plus simples et stables à basse température.\n\n2. Les étapes de l'altération du feldspath potassique (orthose) :\nL'orthose a pour formule chimique KAlSi₃O₈ (silicate d'aluminium et de potassium). Son altération se décompose en 4 phases successives :\n- Étape 1 : L'hydratation :\n  L'eau s'infiltre dans les microporosités et fissures du cristal d'orthose. Les molécules d'eau sont adsorbées à la surface du réseau cristallin, ce qui provoque un léger gonflement minéral.\n- Étape 2 : L'échange ionique (substitution de K⁺ par H⁺) :\n  L'ionisation de l'acide carbonique et de l'eau libère des protons H⁺ (H₂CO₃ ⇌ H⁺ + HCO₃⁻ et H₂O ⇌ H⁺ + OH⁻). Par sa petite taille et sa très forte densité de charge électrique, l'ion H⁺ s'insère dans le réseau cristallin et remplace l'ion potassium K⁺, qui est expulsé dans la solution.\n- Étape 3 : L'effondrement du réseau cristallin du feldspath :\n  Comme le rayon ionique de l'ion H⁺ est nettement plus petit que celui de l'ion K⁺ expulsé, le proton ne comble pas le vide laissé. Cela crée une distorsion mécanique et une instabilité géométrique de l'édifice cristallin, aboutissant à son effondrement complet.\n- Étape 4 : Libération et recombinaison des éléments chimiques :\n  L'effondrement libère des ions en solution : K⁺, OH⁻, H⁺, Al³⁺ (alumine) et Si⁴⁺ (silice sous forme d'acide silicique H₄SiO₄).\n\n3. Bilan des recombinaisons et produits néoformés :\n- Synthèse de l'argile (kaolinite) : l'alumine (Al³⁺) et la silice (Si⁴⁺) libérées se combinent en milieu aqueux avec des hydroxyles (OH⁻) pour cristalliser sous forme de feuillets microscopiques de kaolinite (Si₂O₅Al₂(OH)₄).\n- Évacuation des éléments solubles (lessivage) : le potassium K⁺ s'associe aux ions hydroxyles pour former la potasse KOH dissoute, évacuée par les eaux de ruissellement et de drainage vers les cours d'eau.\n- Dans le cas de la biotite (mica noir) : libération supplémentaire de fer et de magnésium. Le fer donne de la goethite ou de l'hématite (oxydes de fer Fe₂O₃), le magnésium donne des hydroxydes de magnésium.",
      "formulas": [
        {
          "name": "Équation bilan de l'hydrolyse complète de l'orthose",
          "formula": "2 KAlSi₃O₈ + 2 H⁺ + 9 H₂O → Si₂O₅Al₂(OH)₄ + 4 H₄SiO₄ + 2 K⁺",
          "note": "Orthose + eau acidifiée → Kaolinite (argile) + Acide silicique + Ions potassium."
        },
        {
          "name": "Échange ionique déclencheur",
          "formula": "Réseau-K⁺ + H⁺ (aq) → Réseau-H⁺ (instable) + K⁺ (aq)",
          "note": "Le remplacement de K⁺ par le petit ion H⁺ déstabilise la maille cristalline."
        }
      ],
      "keyRule": "L'effondrement du réseau de l'orthose est déclenché par une différence de taille ionique : l'ion H⁺ remplace l'ion K⁺ mais, étant beaucoup plus petit, il ne remplit pas l'espace vacant. Cette lacune déstabilise l'édifice qui s'effondre et libère Al³⁺ et Si⁴⁺ pour former l'argile.",
      "workedExample": {
        "title": "Exemple résolu : Étapes moléculaires de la transformation de l'orthose en kaolinite",
        "statement": "On place un fragment de feldspath potassique (orthose) broyé au contact d'une eau enrichie en CO₂ dans un bécher agité pendant plusieurs jours. On constate l'apparition d'un précipité blanc très fin et d'une solution filtrée alcaline contenant du potassium.\n1. Expliquer pourquoi la solution filtrée s'enrichit en potassium K⁺.\n2. Identifier la nature minéralogique du précipité blanc obtenu.",
        "methodSteps": [
          "Étape 1 : Expliquer la libération du potassium : les ions H⁺ issus de la dissociation de l'acide carbonique pénètrent dans le réseau du feldspath et expulsent les ions K⁺ par échange ionique. Les ions K⁺ passent en solution aqueuse sous forme d'hydroxyde de potassium KOH.",
          "Étape 2 : Analyser l'effondrement du réseau : l'insertion du proton H⁺ crée une instabilité due à sa petite taille par rapport à K⁺, ce qui brise le réseau cristallin du feldspath.",
          "Étape 3 : Identifier le précipité blanc : la silice et l'alumine libérées se recombinent avec l'eau pour former des feuillets d'argile blanche pure appelée kaolinite (ou kaolin)."
        ],
        "conclusion": "L'hydrolyse de l'orthose libère les ions K⁺ en solution et précipite de l'argile kaolinique blanche."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch2_p2_ex1",
          "type": "mcq",
          "prompt": "Quelle est la cause directe de l'instabilité et de l'effondrement du réseau cristallin du feldspath lors de l'hydrolyse ?",
          "options": [
            "L'ion H⁺ qui remplace l'ion K⁺ est beaucoup plus petit et ne parvient pas à combler l'espace vacant",
            "L'ion K⁺ explose au contact de l'oxygène de l'air",
            "La roche fond sous l'effet d'une chaleur volcanique intense",
            "Le quartz présent dans le granite écrase les feldspaths voisins"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La petite taille de l'ion H⁺ comparée à celle de l'ion K⁺ expulsé crée un vide géométrique et une forte distorsion de la maille cristalline, entraînant l'effondrement de l'édifice."
        },
        {
          "id": "seconde_c_svt_ch2_p2_ex2",
          "type": "mcq",
          "prompt": "Quels ions chimiques se recombinent en milieu aqueux pour donner naissance à l'argile (kaolinite) ?",
          "options": [
            "Les ions aluminium (Al³⁺) et les ions silicium (Si⁴⁺) avec les groupements hydroxyles (OH⁻)",
            "Les ions potassium (K⁺) et les ions sodium (Na⁺)",
            "Les ions calcium (Ca²⁺) et les ions carbonates (CO₃²⁻)",
            "Les ions chlorure (Cl⁻) et les ions fer (Fe²⁺)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'argile kaolinite est un aluminosilicate hydraté : elle résulte de la recombinaison des tétraèdres de silice (Si⁴⁺) et des octaèdres d'alumine (Al³⁺) avec l'eau."
        },
        {
          "id": "seconde_c_svt_ch2_p2_ex3",
          "type": "mcq",
          "prompt": "Quelle première étape physique précède la destruction chimique proprement dite du feldspath ?",
          "options": [
            "L'hydratation (absorption d'eau et gonflement superficiel)",
            "La fossilisation",
            "La recristallisation métamorphique",
            "La fusion magmatique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avant l'hydrolyse, le feldspath potassique absorbe de l'eau au niveau de ses micropores et se gonfle légèrement : c'est le phénomène d'hydratation."
        },
        {
          "id": "seconde_c_svt_ch2_p2_ex4",
          "type": "mcq",
          "prompt": "Que deviennent les ions potassium K⁺ expulsés du réseau de l'orthose lors de l'hydrolyse ?",
          "options": [
            "Ils s'associent aux ions OH⁻ pour former la potasse KOH évacuée en solution par le lessivage",
            "Ils se transforment en grains de quartz",
            "Ils restent piégés à l'état solide dans l'argile",
            "Ils s'évaporent sous forme de gaz dans l'atmosphère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les ions K⁺ sont très solubles dans l'eau : ils forment de la potasse dissoute KOH et sont lessivés par les eaux d'infiltration et de ruissellement."
        },
        {
          "id": "seconde_c_svt_ch2_p2_ex5",
          "type": "mcq",
          "prompt": "D'où proviennent principalement les ions H⁺ qui attaquent le feldspath dans la nature ?",
          "options": [
            "De l'ionisation de l'acide carbonique H₂CO₃ formé par la dissolution du CO₂ dans l'eau de pluie",
            "D'acide sulfurique industriel uniquement",
            "De la décomposition directe des grains de quartz",
            "De la transpiration des racines sans apport d'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'eau de pluie dissout le CO₂ atmosphérique et du sol, formant l'acide carbonique qui se dissocie selon H₂CO₃ ⇌ H⁺ + HCO₃⁻, fournissant les protons H⁺ nécessaires à l'hydrolyse."
        },
        {
          "id": "seconde_c_svt_ch2_p2_ex6",
          "type": "mcq",
          "prompt": "Quels sont les deux minéraux argileux les plus fréquemment produits par l'altération des silicates magmatiques ?",
          "options": [
            "La kaolinite et la chlorite",
            "L'olivine et le pyroxène",
            "Le diamant et le graphite",
            "Le gypse et l'halite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les argiles formées sont principalement la kaolinite (altération des feldspaths) et la chlorite ou l'illite (altération des micas)."
        },
        {
          "id": "seconde_c_svt_ch2_p2_ex7",
          "type": "mcq",
          "prompt": "Pourquoi la biotite (mica noir) libère-t-elle des oxydes de fer et de magnésium contrairement au feldspath potassique ?",
          "options": [
            "Parce que sa formule minérale contient du fer et du magnésium (ferromagnésien) alors que l'orthose n'en contient pas",
            "Parce qu'elle est située plus profondément dans la roche",
            "Parce qu'elle attire la foudre lors des orages",
            "Parce qu'elle contient du carbonate de calcium"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La biotite est un phyllosilicate ferromagnésien contenant du fer (Fe) et du magnésium (Mg) dans sa structure, qui sont libérés et oxydés lors de son hydrolyse."
        },
        {
          "id": "seconde_c_svt_ch2_p2_ex8",
          "type": "mcq",
          "prompt": "Quel type de climat terrestre favorise le plus intensément l'altération chimique des roches magmatiques ?",
          "options": [
            "Un climat chaud et humide (tropical ou équatorial avec fortes pluies)",
            "Un climat polaire très froid et sec",
            "Un climat désertique aride sans aucune pluie",
            "Un climat de haute altitude sans atmosphère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'altération chimique nécessite de l'eau liquide abondante et est grandement accélérée par la chaleur : les climats tropicaux humides chauds (comme en Côte d'Ivoire) sont les plus propices."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 3 : LA FORMATION DES ROCHES SÉDIMENTAIRES
// ============================================================================
export const svt2deCFormationRochesSedimentairesChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch3_formation_roches_sedimentaires",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 3,
  "officialVolumeHours": 4,
  "title": "Leçon 3 — La formation des roches sédimentaires",
  "summary": "Diversité des roches sédimentaires (meubles et consolidées), modes de sédimentation par granoclassement vertical et latéral dans les bassins sédimentaires, et étapes de la diagénèse (compaction, déshydratation, cimentation).",
  "points": [
    {
      "id": "seconde_c_svt_ch3_p1_types_roches_sedimentaires_granoclassement",
      "order": 1,
      "title": "Types de roches sédimentaires et sédimentation par granoclassement",
      "summary": "Classifier les roches sédimentaires (meubles vs consolidées ; détritiques, biochimiques, chimiques) et analyser le granoclassement vertical et latéral des sédiments.",
      "conceptExplanation": "1. Définition et diversité des roches sédimentaires :\nLes roches sédimentaires se forment à la surface de la Terre (dans les zones déprimées appelées bassins sédimentaires : lacs, mers, embouchures de fleuves) par accumulation et transformation de sédiments.\nOn les classe selon leur état physique et leur origine :\n- Selon l'état physique :\n  * Roches sédimentaires meubles : formées de particules libres non soudées entre elles (ex : les sables, les graviers, la boue argileuse non tassée).\n  * Roches sédimentaires consolidées : formées de particules solidement soudées entre elles par un ciment naturel (ex : le grès, le calcaire, l'argilite, le conglomérat).\n- Selon l'origine des sédiments :\n  * Roches détritiques (les plus abondantes) : issues de l'érosion mécanique et de l'altération chimique de roches préexistantes (sable, grès, argile).\n  * Roches biochimiques / biogènes : résultant de l'accumulation de squelettes, coquilles ou restes d'organismes vivants (calcaire coquillier, craie, charbon, pétrole).\n  * Roches chimiques : formées par précipitation d'ions dissous lors de l'évaporation de l'eau (évaporites : sel gemme NaCl, gypse).\n\n2. Le processus de sédimentation et les bassins sédimentaires :\nL'eau et le vent transportent les produits d'altération (les sédiments) depuis les continents vers des zones de dépôt calmes appelées bassins sédimentaires. Lorsque la vitesse du courant ralentit, les particules se déposent : c'est la sédimentation.\n\n3. Le granoclassement (tri granulométrique des sédiments) :\nLes particules minérales se déposent selon leur masse, leur densité et leur taille :\n- Granoclassement vertical (en milieu calme ou au fond d'une éprouvette de décantation, ou en aval d'une forte pente) :\n  Les éléments les plus lourds et volumineux tombent en premier au fond, tandis que les plus légers restent plus longtemps en suspension. On observe un empilement ordonné du bas vers le haut :\n  1. Graviers (au fond),\n  2. Sables grossiers,\n  3. Sables fins,\n  4. Limons,\n  5. Argiles et colloïdes (au sommet),\n  6. Débris organiques surnageants.\n- Sédimentation latérale (le long d'un cours d'eau en pente douce vers la mer) :\n  La vitesse du courant diminue d'amont en aval. Les éléments grossiers (galets, sables) se déposent en premier près des berges et des embouchures, tandis que les particules très fines et légères (argiles) sont emportées au large et se déposent en eaux calmes et profondes.",
      "formulas": [
        {
          "name": "Ordre du granoclassement vertical (du fond vers le sommet)",
          "formula": "Fond : Graviers → Sables grossiers → Sables fins → Limons → Argiles (sommet)",
          "note": "Dépôt ordonné par taille et densité décroissantes."
        },
        {
          "name": "Roches détritiques correspondantes",
          "formula": "Sable meuble → Grès consolidé ; Graviers → Conglomérat ; Boue argileuse → Argilite",
          "note": "Chaque sédiment meuble donne une roche consolidée équivalente."
        }
      ],
      "keyRule": "Dans le granoclassement vertical, la taille et la densité des particules DÉCROISSENT DU BAS VERS LE HAUT (les plus gros et lourds se déposent en premier au fond). Dans un fleuve, les gros galets restent en amont alors que les argiles très légères voyagent jusqu'en aval.",
      "workedExample": {
        "title": "Exemple résolu : Expérience de sédimentation d'un sol dans une éprouvette",
        "statement": "En TP de SVT, des élèves versent un échantillon de sol de Bouaflé dans une éprouvette remplie d'eau, agitent vigoureusement puis laissent reposer 24 heures. Ils observent 4 couches superposées numérotées de 1 (fond) à 4 (haut), surmontées d'une eau trouble.\n1. Identifier les constituants des couches 1, 2, 3 et 4.\n2. Nommer ce mode de sédimentation et expliquer la cause de cette disposition.",
        "methodSteps": [
          "Étape 1 : Identifier la couche 1 tout au fond : les particules les plus denses et volumineuses tombent instantanément ; ce sont les graviers et sables grossiers.",
          "Étape 2 : Identifier la couche 2 : immédiatement au-dessus se déposent les sables fins.",
          "Étape 3 : Identifier la couche 3 : particules plus fines décantant après quelques minutes ; ce sont les limons.",
          "Étape 4 : Identifier la couche 4 : particules microscopiques très légères décantant très lentement au sommet ; ce sont les argiles.",
          "Étape 5 : Nommer le phénomène : il s'agit du granoclassement vertical, causé par la pesanteur agissant différentiellement sur la masse et la taille des éléments."
        ],
        "conclusion": "L'éprouvette réalise un granoclassement vertical où les particules se superposent par ordre de taille et de masse décroissantes du bas vers le haut."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch3_p1_ex1",
          "type": "mcq",
          "prompt": "Quelle est la différence fondamentale entre une roche sédimentaire meuble et une roche sédimentaire consolidée ?",
          "options": [
            "Les particules d'une roche meuble sont libres et non soudées, alors que celles d'une roche consolidée sont soudées par un ciment naturel",
            "Une roche meuble s'est formée à haute température et une roche consolidée dans la glace",
            "Une roche meuble contient des métaux précieux et une roche consolidée n'en contient pas",
            "Une roche meuble est d'origine magmatique et une roche consolidée est d'origine lunaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une roche meuble (ex: sable, gravier) est un assemblage de grains non liés, alors qu'une roche consolidée (ex: grès, calcaire) possède des grains cimentés formant un bloc solide cohérent."
        },
        {
          "id": "seconde_c_svt_ch3_p1_ex2",
          "type": "mcq",
          "prompt": "Parmi les roches suivantes, laquelle est une roche sédimentaire consolidée d'origine détritique ?",
          "options": [
            "Le grès",
            "Le sable meuble",
            "Le basalte",
            "Le granite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le grès est une roche sédimentaire détritique consolidée, formée par la cimentation de grains de sable quartzeux au cours de la diagénèse."
        },
        {
          "id": "seconde_c_svt_ch3_p1_ex3",
          "type": "mcq",
          "prompt": "Lors d'un granoclassement vertical dans une colonne d'eau au repos, quel élément se dépose au fond en premier ?",
          "options": [
            "Les graviers (éléments les plus volumineux et les plus lourds)",
            "Les argiles microscopiques",
            "Les colloïdes humiques en suspension",
            "Les débris végétaux légers"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sous l'effet de la pesanteur, les particules de plus forte masse et de plus grand diamètre (les graviers) tombent en premier et se concentrent à la base du dépôt."
        },
        {
          "id": "seconde_c_svt_ch3_p1_ex4",
          "type": "mcq",
          "prompt": "Comment se nomme la zone géographique affaissée où s'accumulent les produits d'altération transportés par les eaux ?",
          "options": [
            "Un bassin sédimentaire",
            "Une dorsale océanique",
            "Un cratère météoritique",
            "Une faille transformante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un bassin sédimentaire est une dépression de la croûte continentale ou océanique dans laquelle les sédiments s'accumulent en couches successives."
        },
        {
          "id": "seconde_c_svt_ch3_p1_ex5",
          "type": "mcq",
          "prompt": "Quelle roche sédimentaire provient de l'activité biologique et de la fossilisation de la matière organique végétale enfouie au cours des temps géologiques ?",
          "options": [
            "Le charbon",
            "Le gypse",
            "L'argile",
            "Le quartzite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le charbon (houille, lignite, anthracite) est une roche sédimentaire carbonée issue de l'accumulation et de la transformation anaérobie de débris végétaux sous forte pression."
        },
        {
          "id": "seconde_c_svt_ch3_p1_ex6",
          "type": "mcq",
          "prompt": "Dans quel ordre s'étagent les particules dans un sédiment granoclassé de bas en haut ?",
          "options": [
            "Graviers, sables grossiers, sables fins, limons, argiles",
            "Argiles, limons, sables fins, sables grossiers, graviers",
            "Limons, graviers, argiles, sables fins",
            "Sables fins, argiles, graviers, sables grossiers"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ordre normal du granoclassement vertical décroissant est : graviers (fond), sables grossiers, sables fins, limons et argiles (sommet)."
        },
        {
          "id": "seconde_c_svt_ch3_p1_ex7",
          "type": "mcq",
          "prompt": "Lors d'une sédimentation latérale le long d'un fleuve se jetant dans une baie calme, pourquoi les argiles se déposent-elles le plus loin au large ?",
          "options": [
            "Parce qu'étant très fines et légères, elles restent facilement transportées par l'eau jusqu'aux zones d'immobilité totale",
            "Parce qu'elles flottent indéfiniment sans jamais se déposer",
            "Parce qu'elles sont rejetées par les organismes marins",
            "Parce qu'elles sont détruites par le sel de l'océan"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les argiles ont une vitesse de décantation infime en raison de leur très petite taille : seul un ralentissement quasi complet du courant permet leur sédimentation au large."
        },
        {
          "id": "seconde_c_svt_ch3_p1_ex8",
          "type": "mcq",
          "prompt": "Quelle est l'origine du calcaire coquillier trouvé dans certaines carrières sédimentaires ?",
          "options": [
            "L'accumulation et la cimentation de coquilles et tests calcaires d'animaux marins (CaCO₃)",
            "La précipitation directe de sel de cuisine",
            "Le refroidissement rapide d'une lave sous-marine",
            "La désagrégation mécanique du quartz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le calcaire coquillier est une roche sédimentaire d'origine biochimique formée par l'accumulation de restes squelettiques calcaires d'organismes marins."
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch3_p2_mecanisme_diagenese_consolidation",
      "order": 2,
      "title": "Le mécanisme de la diagénèse : de sédiments meubles aux roches consolidées",
      "summary": "Comprendre les étapes de la diagénèse (compaction, déshydratation, cimentation, recristallisation) et la structure en strates des roches sédimentaires.",
      "conceptExplanation": "1. Définition de la diagénèse :\nLa diagénèse est l'ensemble de tous les processus physico-chimiques et biologiques qui transforment un dépôt de sédiments meubles imbibés d'eau en une roche sédimentaire solide et compacte (consolidée).\nElle se déroule à faible profondeur (de quelques dizaines à quelques centaines de mètres), sous des températures basses (< 100 °C) et des pressions lithostatiques croissantes.\n\n2. Les grandes étapes successives de la diagénèse :\n- Étape 1 : La compaction :\n  Au fur et à mesure que de nouvelles couches de sédiments se déposent au-dessus des anciennes, le poids des couches sus-jacentes exerce une pression verticale croissante sur les couches profondes. Les grains minéraux se rapprochent, s'imbriquent et l'espace entre eux (la porosité) diminue fortement.\n- Étape 2 : La déshydratation :\n  Sous l'effet de l'écrasement mécanique par compaction, l'eau interstitielle libre contenue entre les grains est expulsée vers le haut. La teneur en eau des sédiments chute drastiquement au fur et à mesure de la profondeur (ex : elle passe de 60 % à 3 m de profondeur à moins de 5 % à 15 m).\n- Étape 3 : La cimentation :\n  Les eaux interstitielles en circulation sont saturées en sels minéraux dissous (silice SiO₂, carbonate de calcium CaCO₃, oxydes de fer). En migrant, ces solutions précipitent de minuscules cristaux minéraux dans les interstices restants entre les grains. Ce précipité cristallin agit comme une véritable colle minérale qui soude définitivement les grains entre eux : c'est le ciment.\n  Exemple : des grains de sable reliés par un ciment siliceux ou calcaire donnent naissance à une roche consolidée : le grès.\n- Étape 4 : La recristallisation / épigénie :\n  Certains minéraux instables se transforment chimiquement en d'autres minéraux plus stables (ex : l'aragonite des coquilles se transforme en calcite stable).\n\n3. La stratification et les strates géologiques :\nComme la sédimentation est discontinue et varie au rythme des crues, des marées ou des saisons, les dépôts forment des couches parallèles successives appelées strates. Les surfaces séparant deux strates successives sont des joints de stratification (ou fissures fines horizontales), qui marquent un arrêt ou un changement temporaire dans le régime de sédimentation. Une roche ainsi constituée est dite roche stratifiée.",
      "formulas": [
        {
          "name": "Les 3 étapes fondamentales de la diagénèse",
          "formula": "Compaction (réduction porosité) → Déshydratation (expulsion d'eau) → Cimentation (soudure des grains)",
          "note": "Processus continu transformant la boue ou le sable en roche dure."
        },
        {
          "name": "Formation du grès à partir du sable",
          "formula": "Sable meuble (grains de quartz) + Pression + Ciment calcaire ou siliceux → Grès dur",
          "note": "Le grès est un sable consolidé par la diagénèse."
        }
      ],
      "keyRule": "LE MOTEUR PRINCIPAL DE LA DIAGÉNÈSE EST LA PRESSION EXERCÉE PAR LES NOUVELLES COUCHES. Plus on descend en profondeur, plus la pression augmente, plus la teneur en eau diminue (déshydratation) et plus la cimentation soude les grains en roche compacte consolidée.",
      "workedExample": {
        "title": "Exemple résolu : Interprétation de la baisse de teneur en eau lors du creusement d'un puits",
        "statement": "Lors du creusement d'un puits à Soubré, on mesure la teneur en eau des sédiments argilo-sableux à différentes profondeurs : à 3 m (60 %), à 5 m (40 %), à 10 m (20 %) et à 15 m (5 %).\n1. Décrire l'évolution de la teneur en eau avec la profondeur.\n2. Expliquer cette évolution et indiquer quelle étape de la diagénèse elle illustre.\n3. Prédire l'état physique de la roche si le processus se poursuit à plus grande profondeur.",
        "methodSteps": [
          "Étape 1 : Analyser l'évolution : la teneur en eau décroît de manière continue et spectaculaire en fonction de la profondeur, passant de 60 % près de la surface à seulement 5 % à 15 mètres.",
          "Étape 2 : Expliquer le phénomène : avec la profondeur, l'épaisseur des sédiments au-dessus augmente, ce qui engendre une pression lithostatique de plus en plus forte. Cette pression rapproche les grains et expulse l'eau interstitielle : c'est le phénomène de compaction et de déshydratation.",
          "Étape 3 : Prédire l'état final : l'eau restante sera remplacée par des précipités minéraux (cimentation), aboutissant à la formation d'une roche sédimentaire consolidée et dure (ex : argilite ou grès)."
        ],
        "conclusion": "La baisse de la teneur en eau est la preuve directe de la compaction et de la déshydratation sous l'effet de la pression lithostatique, étapes clés de la diagénèse."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch3_p2_ex1",
          "type": "mcq",
          "prompt": "Qu'appelle-t-on la diagénèse en géologie sédimentaire ?",
          "options": [
            "L'ensemble des phénomènes (compaction, déshydratation, cimentation) transformant des sédiments meubles en roches sédimentaires consolidées",
            "La fusion totale des roches magmatiques en magma d'anatexie",
            "Le plissement violent des chaînes de montagnes par collision",
            "La désagrégation physique d'une falaise sous l'impact de la foudre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La diagénèse regroupe toutes les modifications physico-chimiques post-dépôt qui transforment un sédiment meuble en roche consolidée dure."
        },
        {
          "id": "seconde_c_svt_ch3_p2_ex2",
          "type": "mcq",
          "prompt": "Quel est le facteur moteur principal qui provoque le tassement et le rapprochement des grains de sédiments ?",
          "options": [
            "La pression lithostatique exercée par le poids des couches de sédiments sus-jacentes",
            "L'attraction de la Lune lors des grandes marées",
            "L'acidité des pluies de surface",
            "La vitesse du vent atmosphérique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'accumulation continue de nouveaux sédiments au-dessus exerce une pression verticale croissante qui tasse et compresse les strates profondes."
        },
        {
          "id": "seconde_c_svt_ch3_p2_ex3",
          "type": "mcq",
          "prompt": "Que devient l'eau contenue entre les grains de sable ou d'argile au cours de la compaction géologique ?",
          "options": [
            "Elle est expulsée des pores vers le haut (déshydratation du sédiment)",
            "Elle se transforme en glace permanente sous l'effet de la pression",
            "Elle se dissocie en gaz dihydrogène explosif",
            "Elle est absorbée par les cristaux de quartz qui grossissent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'écrasement mécanique resserre les grains et chasse l'eau interstitielle libre vers le haut : c'est la déshydratation."
        },
        {
          "id": "seconde_c_svt_ch3_p2_ex4",
          "type": "mcq",
          "prompt": "En quoi consiste précisément le phénomène de cimentation lors de la diagénèse ?",
          "options": [
            "À la précipitation de substances minérales dissoutes (silice, calcaire, fer) qui comblent les pores et soudent les grains entre eux",
            "À l'ajout de béton artificiel par les mouvements de l'eau",
            "À la fusion locale des grains qui se soudent par la chaleur volcanique",
            "Au collage des grains par des racines d'arbres fossilisées"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La cimentation est la précipitation chimique de sels minéraux dissous dans les eaux interstitielles, formant une matrice rigide qui lie les particules sédimentaires."
        },
        {
          "id": "seconde_c_svt_ch3_p2_ex5",
          "type": "mcq",
          "prompt": "Comment appelle-t-on les couches horizontales superposées bien visibles dans une carrière de roche sédimentaire ?",
          "options": [
            "Des strates",
            "Des batholites",
            "Des filons magmatiques",
            "Des moraines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les strates sont les couches élémentaires superposées de sédiments successifs, séparées par des joints de stratification."
        },
        {
          "id": "seconde_c_svt_ch3_p2_ex6",
          "type": "mcq",
          "prompt": "Que traduisent les fissures fines horizontales (joints de stratification) qui séparent deux strates sédimentaires consécutives ?",
          "options": [
            "De petites interruptions ou des variations de régime dans le dépôt du sédiment",
            "Des cassures de séismes récents",
            "La morsure d'animaux préhistoriques marins",
            "Des galeries de vers marins fossilisées"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les joints de stratification témoignent d'arrêts temporaires de sédimentation ou de changements soudains de la nature des particules apportées."
        },
        {
          "id": "seconde_c_svt_ch3_p2_ex7",
          "type": "mcq",
          "prompt": "Si la cimentation n'a pas lieu après le dépôt et la déshydratation, sous quel état reste la roche sédimentaire ?",
          "options": [
            "À l'état meuble (comme le sable d'une dune ou d'une plage)",
            "À l'état gazeux sous forme de méthane",
            "À l'état d'un magma volcanique",
            "À l'état d'un diamant pur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans cimentation pour souder les grains entre eux, les sédiments restent libres et constituent une roche meuble (ex: sable meuble)."
        },
        {
          "id": "seconde_c_svt_ch3_p2_ex8",
          "type": "mcq",
          "prompt": "Quel est l'ordre chronologique exact des processus menant d'une roche magmatique continentale à une roche sédimentaire consolidée ?",
          "options": [
            "Altération → Érosion → Transport → Sédimentation → Diagénèse",
            "Diagénèse → Sédimentation → Transport → Altération",
            "Sédimentation → Érosion → Diagénèse → Altération",
            "Fusion → Cristallisation → Diagénèse → Érosion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cycle sédimentaire commence par l'altération chimique et l'érosion de la roche mère, suivies du transport des débris, de leur dépôt (sédimentation) et enfin de la diagénèse."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 4 : LA FORMATION DES ROCHES MÉTAMORPHIQUES
// ============================================================================
export const svt2deCFormationRochesMetamorphiquesChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch4_formation_roches_metamorphiques",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 4,
  "officialVolumeHours": 2,
  "title": "Leçon 4 — La formation des roches métamorphiques",
  "summary": "Définition du métamorphisme à l'état solide, caractéristiques structurales fondamentales (schistosité, foliation, rubanement) et séquence métamorphique en fonction du gradient thermique et de la pression.",
  "points": [
    {
      "id": "seconde_c_svt_ch4_p1_caracteristiques_structurales_schistosite_foliation_rubanement",
      "order": 1,
      "title": "Caractéristiques structurales : schistosité, foliation et rubanement",
      "summary": "Identifier les textures métamorphiques majeures : la schistosité du schiste, la foliation du micaschiste et le rubanement du gneiss.",
      "conceptExplanation": "1. Définition du métamorphisme géologique :\nLe métamorphisme est l'ensemble des transformations structurales et minéralogiques subies par une roche préexistante (qu'elle soit d'origine magmatique, sédimentaire ou déjà métamorphique) À L'ÉTAT SOLIDE (sans fusion), sous l'influence d'une augmentation de la température et de la pression (liée à l'enfouissement ou à des contraintes tectoniques régionales).\n\n2. Les trois structures macroscopiques caractéristiques :\nEn fonction de l'intensité de la pression et de la température, les minéraux s'aplatissent, se réorientent et recristallisent perpendiculairement à la direction de la contrainte compressive, créant trois aspects texturaux distinctifs :\n- La schistosité (ex : le schiste) :\n  * Aspect : la roche est formée de feuillets ou plaquettes plans très minces, parallèles, superposés et jointifs.\n  * Propriété remarquable : la roche se débite facilement en feuillets plats et minces (clivage schisteux, ex : ardoise de toiture).\n  * Minéraux : dominée par des feuillets de séricite et de chlorite.\n- La foliation (ex : le micaschiste) :\n  * Aspect : la roche présente des couches ou feuillets parallèles bien soudés, caractérisés par une alternance visible de lits clairs (quartz, feldspath) et de lits sombres (micas blancs et noirs abondants).\n  * Propriété : la roche est plus résistante que le schiste et ne se clive plus en feuillets très minces, mais conserve une orientation marquée de ses minéraux micacés très brillants.\n- Le rubanement (ex : le gneiss) :\n  * Aspect : la roche est constituée d'une alternance de bandes (ou rubans) épaisses claires (blanches à rosées, formées de quartz et feldspaths) et sombres (noires, formées de biotite et d'amphiboles).\n  * Propriété : les bandes présentent souvent un aspect plissé ou sinueux (contorsions ductiles) car à haute température et haute pression, la roche s'est ramollie et a flué sous la pression avant de recristalliser.\n\n3. Bilan comparatif des trois roches métamorphiques types :\n- Schiste : structure schisteuse en feuillets fins délaminables.\n- Micaschiste : structure foliée à micas dominants et feuillets soudés.\n- Gneiss : structure rubanée en bandes claires/sombres alternées et plissées.",
      "formulas": [
        {
          "name": "Les 3 structures métamorphiques types",
          "formula": "Schiste (schistosité / feuillets) → Micaschiste (foliation / lits soudés) → Gneiss (rubanement / bandes plissées)",
          "note": "Reflète l'intensité croissante de la pression et de la température."
        },
        {
          "name": "Caractère fondamental du métamorphisme",
          "formula": "Transformation à l'ÉTAT SOLIDE (sans aucune fusion)",
          "note": "Dès qu'il y a fusion du liquide magmatique, on sort du métamorphisme pour entrer dans le magmatisme."
        }
      ],
      "keyRule": "Pour distinguer les trois roches métamorphiques : LE SCHISTE a des feuillets minces qui s'effeuillent (schistosité). LE MICASCHISTE a des paillettes de mica brillantes et des couches soudées (foliation). LE GNEISS a des rubans épais clairs et sombres alternés et plissés (rubanement).",
      "workedExample": {
        "title": "Exemple résolu : Détermination d'échantillons de roches métamorphiques de la Nawa",
        "statement": "Au bord du fleuve Nawa à Soubré, des élèves ramassent trois échantillons de roches E1, E2 et E3 :\n- E1 se délite facilement au marteau en feuillets très plats et fins et possède une teinte vert-grisâtre soyeuse.\n- E2 est une roche brillante très pailletée en surface où alternent des couches minces claires et sombres bien soudées.\n- E3 présente une alternance de rubans blanchâtres de 1 cm d'épaisseur et de rubans noirs plissés et sinueux.\nNommer la roche et la caractéristique structurale pour chaque échantillon.",
        "methodSteps": [
          "Étape 1 : Analyser E1 : structure en feuillets plats délaminables = structure schisteuse (schistosité) ; la roche est un schiste.",
          "Étape 2 : Analyser E2 : alternance de couches soudées claires et de paillettes sombres de micas = structure foliée (foliation) ; la roche est un micaschiste.",
          "Étape 3 : Analyser E3 : bandes épaisses de quartz/feldspath et de minéraux noirs sinueuses et plissées = structure rubanée (rubanement) ; la roche est un gneiss."
        ],
        "conclusion": "E1 est un schiste (schistosité), E2 est un micaschiste (foliation) et E3 est un gneiss (rubanement)."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch4_p1_ex1",
          "type": "mcq",
          "prompt": "Quelle condition physique obligatoire caractérise le phénomène de métamorphisme ?",
          "options": [
            "La transformation des roches s'effectue obligatoirement à l'état solide sans fusion",
            "La roche doit fondre complètement en lave liquide",
            "La roche doit être dissoute dans une nappe d'eau acide",
            "La roche doit être pulvérisée en poussière par le vent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition géologique, le métamorphisme est une transformation minéralogique et structurale d'une roche à l'état rigoureusement solide sous l'action de la chaleur et de la pression."
        },
        {
          "id": "seconde_c_svt_ch4_p1_ex2",
          "type": "mcq",
          "prompt": "Quelle est la structure caractéristique du schiste qui lui permet de se débiter en plaquettes parallèles ?",
          "options": [
            "La schistosité",
            "Le rubanement",
            "La texture grenue",
            "La texture microlitique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La schistosité est la disposition des minéraux en feuillets parallèles très rapprochés, conférant à la roche la propriété de se cliver en plaques fines."
        },
        {
          "id": "seconde_c_svt_ch4_p1_ex3",
          "type": "mcq",
          "prompt": "Quel aspect structural permet d'identifier à coup sûr un échantillon de micaschiste ?",
          "options": [
            "Une structure foliée avec alternance de couches minces de minéraux clairs et de paillettes brillantes de micas",
            "Une masse compacte sans aucune orientation visible",
            "De gros blocs de verre volcanique noir",
            "Des cavités remplies de gaz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le micaschiste possède une structure foliée, où les micas recristallisés en feuillets parallèles confèrent à la roche un aspect très brillant et feuilleté."
        },
        {
          "id": "seconde_c_svt_ch4_p1_ex4",
          "type": "mcq",
          "prompt": "Comment se présente la structure rubanée du gneiss ?",
          "options": [
            "Une alternance de rubans ou bandes épaisses claires (quartz, feldspaths) et sombres (biotite, amphiboles), souvent plissées",
            "Une seule couche homogène de couleur vert pomme",
            "Un ensemble de bulles de lave figées",
            "Une accumulation de grains de sable meuble"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le gneiss se reconnaît à son rubanement caractéristique : de larges bandes alternées claires et sombres, souvent ondulées ou plissées sous les contraintes tectoniques."
        },
        {
          "id": "seconde_c_svt_ch4_p1_ex5",
          "type": "mcq",
          "prompt": "Quels sont les deux minéraux principaux qui composent les bandes claires du gneiss ?",
          "options": [
            "Le quartz et les feldspaths",
            "La biotite et la chlorite",
            "L'olivine et le diamant",
            "L'argile et le gypse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les bandes claires du gneiss sont constituées de silicates leucocrates riches en silice et aluminium : le quartz et les feldspaths."
        },
        {
          "id": "seconde_c_svt_ch4_p1_ex6",
          "type": "mcq",
          "prompt": "À partir de quel type de roche préexistante (roche mère) se forme généralement la séquence métamorphique schiste-micaschiste-gneiss ?",
          "options": [
            "Une roche sédimentaire argileuse (pélite)",
            "Un sel marin",
            "Une coulée de basalte uniquement",
            "Un calcaire pur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une roche argileuse (pélite sédimentaire) soumise à un métamorphisme régional croissant donne successivement un schiste, puis un micaschiste, puis un gneiss."
        },
        {
          "id": "seconde_c_svt_ch4_p1_ex7",
          "type": "mcq",
          "prompt": "Quelle roche métamorphique obtient-on par métamorphisme d'un calcaire sédimentaire pur ?",
          "options": [
            "Le marbre",
            "Le quartzite",
            "Le basalte",
            "Le grès"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le calcaire (CaCO₃) soumis à la pression et à la température recristallise pour former une roche métamorphique cristalline dure : le marbre."
        },
        {
          "id": "seconde_c_svt_ch4_p1_ex8",
          "type": "mcq",
          "prompt": "Quelle roche métamorphique très dure obtient-on par métamorphisme d'un grès quartzeux ?",
          "options": [
            "Le quartzite",
            "Le schiste ardoisier",
            "L'argile verte",
            "La bauxite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le grès (grains de sable de quartz) recristallise sous fortes contraintes pour former une roche extrêmement résistante : le quartzite."
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch4_p2_mecanisme_temperature_pression_sequence_metamorphique",
      "order": 2,
      "title": "Mécanisme de formation : température, pression et séquence métamorphique",
      "summary": "Relier les conditions thermodynamiques (température, pression, profondeur) à l'apparition des minéraux index et des migmatites.",
      "conceptExplanation": "1. Les deux moteurs du métamorphisme :\nEn s'enfonçant dans la croûte terrestre (subsidence, enfouissement ou subduction/collision tectonique) :\n- La température augmente régulièrement avec la profondeur sous l'effet du flux thermique terrestre : c'est le gradient géothermique (en moyenne 10 °C pour 100 m de profondeur, soit environ 30 °C par kilomètre).\n- La pression augmente avec le poids des roches sus-jacentes (pression lithostatique ou géostatique) et les contraintes tectoniques latérales (pression orientée).\n\n2. Les effets combinés de la température et de la pression :\n- La température élevée ramollit la matière minérale sans la fondre, accélère les réactions chimiques entre solides et permet la recristallisation des atomes en réseaux plus compacts.\n- La forte pression aplatit les minéraux et les oblige à s'orienter perpendiculairement aux forces de compression, créant les plans de schistosité et de foliation.\n\n3. La séquence métamorphique d'une pélite en fonction de la profondeur :\nL'étude expérimentale montre une succession stricte de faciès métamorphiques :\n- Stade 1 : Schiste à séricite (épizone, métamorphisme de faible intensité) :\n  * Conditions : Température ≈ 250 °C, profondeur ≈ 2 500 m (pression modérée 1,5 à 3 kbar).\n  * Minéraux : les feuillets d'argile se déshydratent et recristallisent en fines paillettes de séricite et de chlorite orientées en feuillets (schistosité).\n- Stade 2 : Micaschiste (mésozone, métamorphisme moyen) :\n  * Conditions : Température ≈ 300 °C à 400 °C, profondeur ≈ 3 000 à 4 000 m.\n  * Minéraux : apparition de grands cristaux visibles de micas blancs (muscovite) et de micas noirs (biotite), ainsi que de quartz et parfois de grenats (structure foliée).\n- Stade 3 : Gneiss (catazone, métamorphisme de haute intensité) :\n  * Conditions : Température de 500 °C à 700 °C, profondeur de 4 500 à 7 000 m.\n  * Minéraux : déstabilisation des micas au profit de feldspaths abondants, de quartz et de grenat. Les minéraux s'organisent en bandes épaisses distinctes (rubanement).\n- Stade 4 : Les migmatites et le début de fusion (anatexie) :\n  * Conditions : Température atteignant 740 °C à une profondeur de 7 400 m (en présence d'eau).\n  * À 740 °C, la roche métamorphique commence à fondre partiellement : c'est le début de l'anatexie.\n  * Les migmatites sont des roches mixtes ('mi-métamorphiques, mi-magmatiques') contenant des bandes résiduelles de gneiss non fondu (paléosome) et des veines de granite issues de la cristallisation du liquide magmatique formé (néosome).",
      "formulas": [
        {
          "name": "Séquence métamorphique continue",
          "formula": "Argile (sédiment) → Schiste (250 °C) → Micaschiste (350 °C) → Gneiss (600 °C) → Migmatite (740 °C) → Magma d'anatexie",
          "note": "Enfouissement continu avec élévation de température et de pression."
        },
        {
          "name": "Seuil de l'anatexie (fusion partielle)",
          "formula": "T ≥ 740 °C (en présence d'eau à forte pression)",
          "note": "Frontière thermodynamique entre métamorphisme et magmatisme."
        }
      ],
      "keyRule": "L'ordre de la séquence métamorphique avec la profondeur est INVARIABLE : SCHISTE (250 °C, 2 500 m) → MICASCHISTE (300 °C, 3 000 m) → GNEISS (500-700 °C, 5 000 m) → MIGMATITE (740 °C, début de fusion). À partir de 740 °C, la roche fond : on quitte le métamorphisme !",
      "workedExample": {
        "title": "Exemple résolu : Évolution d'une couche d'argile dans une zone de subduction",
        "statement": "Une couche d'argile sédimentaire marine est entraînée en profondeur dans une fosse de subduction. Le gradient géothermique moyen est estimé à 10 °C pour 100 m.\n1. Calculer la température théorique atteinte par la roche à 3 000 m de profondeur et identifier la roche métamorphique formée.\n2. Déterminer à quelle profondeur théorique la roche atteindra son point de fusion (740 °C) et nommer la roche mixte alors obtenue.",
        "methodSteps": [
          "Étape 1 : Calculer la température à 3 000 m : T = (3 000 m / 100 m) × 10 °C = 30 × 10 = 300 °C.",
          "Étape 2 : Identifier la roche formée à 300 °C : à cette température et profondeur, la roche argileuse s'est transformée en micaschiste (structure foliée avec recristallisation de mica blanc et noir).",
          "Étape 3 : Calculer la profondeur correspondant à la température de fusion de 740 °C : Profondeur = (740 °C / 10 °C) × 100 m = 74 × 100 m = 7 400 m.",
          "Étape 4 : Identifier la roche mixte formée à ce stade : à 740 °C débute la fusion partielle (anatexie), donnant naissance à une migmatite."
        ],
        "conclusion": "À 3 000 m (300 °C), l'argile devient un micaschiste ; à 7 400 m (740 °C), la fusion partielle donne une migmatite."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch4_p2_ex1",
          "type": "mcq",
          "prompt": "À quelle température et à quelle profondeur approximative se forme le schiste à séricite ?",
          "options": [
            "250 °C et environ 2 500 m de profondeur",
            "100 °C et 500 m de profondeur",
            "740 °C et 7 400 m de profondeur",
            "1 200 °C en surface"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le schiste à séricite est le premier stade métamorphique : il apparaît dès 250 °C à environ 2 500 m de profondeur."
        },
        {
          "id": "seconde_c_svt_ch4_p2_ex2",
          "type": "mcq",
          "prompt": "Dans quelle gamme de température se forme le gneiss lors d'un métamorphisme régional poussé ?",
          "options": [
            "Entre 500 °C et 700 °C",
            "Entre 50 °C et 100 °C",
            "À plus de 1 500 °C",
            "À moins de 0 °C"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le gneiss est une roche de métamorphisme de haut degré (catazone) qui se forme entre 500 °C et 700 °C à des profondeurs de 4 000 à 7 000 m."
        },
        {
          "id": "seconde_c_svt_ch4_p2_ex3",
          "type": "mcq",
          "prompt": "Que se passe-t-il lorsque la température d'un gneiss enfoui en profondeur atteint environ 740 °C en présence d'eau ?",
          "options": [
            "La roche commence à fondre partiellement : c'est le début de l'anatexie et la formation des migmatites",
            "La roche gèle instantanément sous forme de glace",
            "La roche s'évapore dans le manteau terrestre",
            "La roche redevient de l'argile sédimentaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À partir de 740 °C (sous forte pression et en présence d'eau), les minéraux du gneiss commencent à fondre : ce début de fusion partielle produit les migmatites."
        },
        {
          "id": "seconde_c_svt_ch4_p2_ex4",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une migmatite en géologie ?",
          "options": [
            "Une roche mixte intermédiaire mi-métamorphique mi-magmatique présentant des parties fondues et non fondues",
            "Une roche sédimentaire formée de débris de coquillages",
            "Une météorite ferreuse tombée dans l'océan",
            "Une cendre volcanique consolidée par le vent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une migmatite est une roche hybride témoignant du passage du métamorphisme au magmatisme : elle associe des lits sombres non fondus de gneiss et des lits clairs de granite fondu puis cristallisé."
        },
        {
          "id": "seconde_c_svt_ch4_p2_ex5",
          "type": "mcq",
          "prompt": "Quel est l'effet principal de la pression lithostatique et des forces tectoniques sur l'orientation des minéraux métamorphiques ?",
          "options": [
            "Elles aplatissent les minéraux et les forcent à s'aligner parallèlement dans des plans perpendiculaires à la force compressive",
            "Elles font tourner les minéraux en spirale comme des tourbillons",
            "Elles réduisent les cristaux en poudre microscopique amorphe",
            "Elles n'ont strictement aucun effet géométrique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sous forte compression, les minéraux s'aplatissent et s'orientent perpendiculairement à la direction de la contrainte principale, créant les plans de schistosité et de foliation."
        },
        {
          "id": "seconde_c_svt_ch4_p2_ex6",
          "type": "mcq",
          "prompt": "Quel minéral rouge foncé très dur apparaît fréquemment dans les micaschistes et les gneiss lors d'un métamorphisme moyen à fort ?",
          "options": [
            "Le grenat",
            "Le sel gemme",
            "Le gypse",
            "La craie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le grenat est un nésosilicate caractéristique des roches de métamorphisme moyen à intense (micaschistes à grenat et gneiss)."
        },
        {
          "id": "seconde_c_svt_ch4_p2_ex7",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la branche de la géologie qui classe les minéraux apparaissant successivement selon l'intensité croissante de la température et de la pression ?",
          "options": [
            "Les minéraux index (ou minéraux indicateurs de métamorphisme)",
            "Les fossiles stratigraphiques",
            "Les isotopes radioactifs",
            "Les catalyseurs organiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les minéraux index (chlorite, séricite, biotite, grenat, sillimanite) permettent aux géologues d'estimer avec précision la température et la pression subies par la roche."
        },
        {
          "id": "seconde_c_svt_ch4_p2_ex8",
          "type": "mcq",
          "prompt": "Pourquoi la présence d'eau sous pression favorise-t-elle la fusion des roches en profondeur à une température plus basse (740 °C au lieu de plus de 1 000 °C) ?",
          "options": [
            "L'eau agit comme un fondant en abaissant considérablement la température de fusion des silicates (solidus saturé en eau)",
            "L'eau s'enflamme chimiquement avec le silicium",
            "L'eau dissout les atomes sous forme d'acide pur",
            "L'eau accélère le refroidissement de la croûte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En géologie, l'eau sous forte pression abaisse le point de fusion des roches (courbe du solidus hydraté), permettant aux gneiss de commencer à fondre dès 740 °C."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 5 : LE DEVENIR DES ROCHES MÉTAMORPHIQUES
// ============================================================================
export const svt2deCDevenirRochesMetamorphiquesChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch5_devenir_roches_metamorphiques",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 5,
  "officialVolumeHours": 2,
  "title": "Leçon 5 — Le devenir des roches métamorphiques",
  "summary": "Évolution des roches métamorphiques en surface (altération en sédiments) et en profondeur (fusion partielle donnant le magma d'anatexie), et schéma fonctionnel complet du cycle des roches.",
  "points": [
    {
      "id": "seconde_c_svt_ch5_p1_evolution_surface_alterites_profondeur_anatexie",
      "order": 1,
      "title": "Les deux destins des roches métamorphiques : altération en surface et anatexie en profondeur",
      "summary": "Comprendre comment les roches métamorphiques se dégradent en altérites (argile, arène) à l'affleurement ou fondent en magma d'anatexie en profondeur.",
      "conceptExplanation": "1. Deux destins possibles selon la dynamique de la Terre :\nLes roches métamorphiques ne sont pas immuables. Selon les mouvements tectoniques et géodynamiques de la lithosphère, elles connaissent deux voies d'évolution majeures :\n- Voie 1 (vers le haut / exhumation en surface) : transformation en roches sédimentaires.\n- Voie 2 (vers le bas / enfouissement en grande profondeur) : transformation en roches magmatiques.\n\n2. Voie 1 : Devenir en surface sous l'action du climat et des intempéries (altération) :\nLorsque les roches métamorphiques sont ramenées vers la surface de la Terre par l'érosion des reliefs sus-jacents (affleurement), elles se retrouvent dans des conditions de basse température et de faible pression instables pour leurs minéraux profonds. Elles subissent l'altération chimique (eau de pluie et dioxyde de carbone) et la désagrégation mécanique (variations thermiques, vent) :\n- Le schiste s'altère et se désagrège pour donner de l'argile.\n- Le gneiss s'altère pour donner une arène granitique contenant des grains de sable quartzeux et un peu d'argile.\n- Le micaschiste s'altère pour donner des matériaux argilo-sableux.\nL'ensemble de ces produits résiduels d'altération superficielle est appelé les altérites.\nCes sédiments sont ensuite transportés par les eaux de ruissellement et les fleuves, déposés dans les bassins sédimentaires où ils subissent la diagénèse (compaction, déshydratation, cimentation) pour former de nouvelles roches sédimentaires.\n\n3. Voie 2 : Devenir en profondeur sous fortes températures et pressions (l'anatexie) :\nSi les roches métamorphiques continuent de s'enfoncer dans des zones tectoniquement actives (zones de subduction, racines de chaînes de montagnes) :\n- À partir de 740 °C et sous de très fortes pressions, en présence d'eau, les roches métamorphiques (comme le gneiss) commencent à fondre progressivement : c'est la fusion anatectique ou anatexie.\n- Le produit de cette fusion totale ou partielle est un liquide silicaté visqueux de composition granitique appelé le magma d'anatexie.\n- Ce magma d'anatexie, moins dense que les roches encaissantes, remonte lentement vers la surface. Au cours de sa remontée, il se refroidit et recristallise pour donner naissance à de nouvelles roches magmatiques (granites d'anatexie de texture grenue en profondeur, ou roches volcaniques si le magma débouche en surface).",
      "formulas": [
        {
          "name": "Devenir en surface (Altération)",
          "formula": "Roche métamorphique + Eau/Climat → Altérites (argile, arène) → Sédimentation + Diagénèse → Roche sédimentaire",
          "note": "Recyclage de surface sous faible température et pression atmosphérique."
        },
        {
          "name": "Devenir en profondeur (Anatexie)",
          "formula": "Gneiss (T ≥ 740 °C) → Fusion (Anatexie) → Magma d'anatexie → Recristallisation → Roche magmatique",
          "note": "Passage du domaine métamorphique au domaine magmatique en profondeur."
        }
      ],
      "keyRule": "EN SURFACE : la roche métamorphique S'ALTÈRE à l'eau pour donner des sédiments (altérites), qui par diagénèse deviennent des roches sédimentaires. EN PROFONDEUR : elle FOND dès 740 °C pour donner du magma d'anatexie, qui par cristallisation devient une roche magmatique.",
      "workedExample": {
        "title": "Exemple résolu : Évolution comparée d'un massif de gneiss de Man et d'un gneiss enfoui",
        "statement": "On compare le devenir géologique de deux blocs de gneiss identiques :\n- Bloc 1 : situé à l'affleurement au sommet d'une colline près de Man, exposé aux pluies tropicales ivoiriennes.\n- Bloc 2 : situé à 8 km de profondeur dans une zone de collision orogénique où la température atteint 780 °C.\nExpliquer en détail ce que deviendra chaque bloc de roche à l'échelle des temps géologiques.",
        "methodSteps": [
          "Étape 1 : Analyser le devenir du Bloc 1 (en surface) : exposé à l'eau de pluie chargée de CO₂, le feldspath et le mica du gneiss s'hydrolysent, le fer s'oxyde. Le bloc se délite en arène granitique (sable + argile). Ces produits d'altération seront transportés par le ruissellement vers le bassin sédimentaire et deviendront, par diagénèse, des roches sédimentaires (grès et argilites).",
          "Étape 2 : Analyser le devenir du Bloc 2 (à 8 km, 780 °C) : la température dépasse le seuil d'anatexie (740 °C). Le bloc de gneiss fond complètement pour donner du magma d'anatexie de composition granitique. En refroidissant lentement, ce magma recristallise pour former une nouvelle roche magmatique plutonique : un granite d'anatexie."
        ],
        "conclusion": "Le bloc 1 de surface donne des roches sédimentaires par altération et diagénèse, tandis que le bloc 2 de profondeur donne une roche magmatique par fusion anatectique et cristallisation."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch5_p1_ex1",
          "type": "mcq",
          "prompt": "Qu'advient-il d'une roche métamorphique lorsqu'elle se retrouve exposée à la surface de la Terre sous l'action des intempéries ?",
          "options": [
            "Elle subit l'altération chimique et mécanique pour donner des sédiments (altérites)",
            "Elle entre en éruption volcanique",
            "Elle devient immédiatement un diamant",
            "Elle conserve sa structure intacte pendant des milliards d'années sans changer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À la surface, la roche n'est plus en équilibre avec les conditions atmosphériques : l'eau et le vent l'altèrent et la transforment en débris sédimentaires appelés altérites."
        },
        {
          "id": "seconde_c_svt_ch5_p1_ex2",
          "type": "mcq",
          "prompt": "Quel produit d'altération meuble obtient-on spécifiquement à partir de la dégradation superficielle d'un schiste ?",
          "options": [
            "De l'argile",
            "Du sable pur de quartz",
            "Du calcaire dur",
            "Du basalte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le schiste, riche en séricite et minéraux argileux d'origine, s'altère en surface pour redonner des argiles."
        },
        {
          "id": "seconde_c_svt_ch5_p1_ex3",
          "type": "mcq",
          "prompt": "Comment appelle-t-on l'ensemble des roches meubles et résiduelles formées à la surface par l'altération des roches métamorphiques ?",
          "options": [
            "Les altérites",
            "Les granitoïdes",
            "Les fentes de tension",
            "Les évaporites"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le terme 'altérites' désigne l'ensemble des matériaux meubles résiduels issus de l'altération des roches à l'affleurement."
        },
        {
          "id": "seconde_c_svt_ch5_p1_ex4",
          "type": "mcq",
          "prompt": "Qu'est-ce que le 'magma d'anatexie' en géologie ?",
          "options": [
            "Un liquide magmatique formé en profondeur par la fusion de roches métamorphiques portées à haute température (> 740 °C)",
            "Une coulée de lave basaltique issue du manteau profond",
            "Une boue sédimentaire froide au fond d'un lac",
            "Une nappe d'eau souterraine bouillante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'anatexie est la fusion en profondeur de roches métamorphiques (comme le gneiss) sous fortes températures et pressions, engendrant un liquide magmatique silicaté appelé magma d'anatexie."
        },
        {
          "id": "seconde_c_svt_ch5_p1_ex5",
          "type": "mcq",
          "prompt": "Quelle famille de roches se forme lorsque le magma d'anatexie remonte et recristallise lentement en profondeur ?",
          "options": [
            "Des roches magmatiques (telles que le granite d'anatexie)",
            "Des roches sédimentaires meubles",
            "Des roches fossiles végétales",
            "Des glaces polaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La cristallisation d'un magma d'anatexie produit par définition des roches magmatiques plutoniques, notamment des granites d'anatexie."
        },
        {
          "id": "seconde_c_svt_ch5_p1_ex6",
          "type": "mcq",
          "prompt": "Que donne l'altération d'un micaschiste à la surface du sol ?",
          "options": [
            "Des matériaux argilo-sableux",
            "Des blocs de marbre pur",
            "De l'ardoise inaltérable",
            "Du gypse cristallisé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le micaschiste contenant du quartz (qui donne le sable) et des micas (qui donnent l'argile), son altération produit des sédiments argilo-sableux."
        },
        {
          "id": "seconde_c_svt_ch5_p1_ex7",
          "type": "mcq",
          "prompt": "Par quelle suite d'étapes les produits d'altération d'un gneiss deviennent-ils des roches sédimentaires consolidées ?",
          "options": [
            "Transport par l'eau → Dépôt en bassin (sédimentation) → Diagénèse (compaction, déshydratation, cimentation)",
            "Fusion immédiate → Volcanisme explosif",
            "Enfouissement dans le manteau sans passer par l'eau",
            "Évaporation en nuages atmosphériques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les altérites du gneiss sont charriées par les rivières, sédimentent en couches successives dans un bassin puis se transforment en roche consolidée par la diagénèse."
        },
        {
          "id": "seconde_c_svt_ch5_p1_ex8",
          "type": "mcq",
          "prompt": "Quelle est la condition indispensable pour que la fusion anatectique des gneiss démarre dès 740 °C en profondeur ?",
          "options": [
            "La présence d'eau interstitielle sous de fortes pressions",
            "L'absence totale d'oxygène dans l'air",
            "La présence de fossiles marins dans la roche",
            "L'obscurité totale des profondeurs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La présence d'eau fluide sous forte pression joue un rôle de fondant déterminant qui abaisse le point de fusion des silicates à 740 °C."
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch5_p2_grand_cycle_des_roches_dynamique_globale",
      "order": 2,
      "title": "Le grand cycle géologique des roches et la dynamique terrestre",
      "summary": "Schématiser et expliquer le cycle perpétuel de transformation réciproque reliant les roches magmatiques, sédimentaires et métamorphiques.",
      "conceptExplanation": "1. Le concept de cycle des roches (cycle pétrogénétique) :\nÀ l'échelle des temps géologiques (millions à milliards d'années), les roches de la Terre ne sont jamais indestructibles : elles sont en perpétuelle transformation et se recyclent mutuellement au sein d'un cycle fermé gouverné par la tectonique des plaques et l'énergie thermique interne du globe ainsi que l'énergie solaire en surface.\n\n2. Les trois grandes familles de roches et leurs liens de parenté :\n- Les roches magmatiques (roches endogènes de fusion) : nées de la cristallisation d'un magma fondu (ex : granite, basalte).\n- Les roches sédimentaires (roches exogènes de surface) : nées de l'altération, de l'érosion, du transport, de la sédimentation et de la diagénèse de roches exposées en surface (ex : sable, grès, calcaire, argilite).\n- Les roches métamorphiques (roches transformées à l'état solide) : nées de la transformation sous haute température et forte pression de roches préexistantes (ex : schiste, micaschiste, gneiss).\n\n3. Les mécanismes de passage d'une famille à l'autre dans le cycle :\n- Du magma aux roches magmatiques : par refroidissement et cristallisation (cristallisation fractionnée en profondeur ou solidification rapide en surface).\n- De n'importe quelle roche (magmatique, métamorphique ou sédimentaire) aux sédiments puis roches sédimentaires :\n  Émersion à la surface → Altération météorique + Érosion → Transport par l'eau/vent → Sédimentation en bassin → Diagénèse (compaction, cimentation).\n- Des roches sédimentaires ou magmatiques aux roches métamorphiques :\n  Enfouissement en profondeur (subduction, orogénèse) → Hausse de température et de pression → Métamorphisme à l'état solide (recristallisation, schistosité, foliation, rubanement).\n- Des roches métamorphiques au magma :\n  Enfouissement poussé au-delà de 740 °C → Fusion partielle ou totale (anatexie) → Magma d'anatexie.\n- Du magma d'anatexie aux roches magmatiques :\n  Refroidissement et recristallisation du magma.\n\n4. Conclusion générale sur la dynamique terrestre :\nLe cycle des roches démontre l'unité fondamentale de la géologie : la matière minérale de l'écorce terrestre circule sans fin entre la surface (monde de l'altération et de la sédimentation) et les profondeurs terrestres (monde du métamorphisme et du magmatisme).",
      "formulas": [
        {
          "name": "Schéma fonctionnel du cycle des roches",
          "formula": "Magma ⇄ Roches magmatiques ⇄ Roches sédimentaires ⇄ Roches métamorphiques ⇄ Magma",
          "note": "Cycle fermé sans commencement ni fin à l'échelle des temps géologiques."
        },
        {
          "name": "Conditions thermodynamiques comparées",
          "formula": "Sédimentaires : T < 100 °C, P faible (Surface) | Métamorphiques : T 200-700 °C, P forte (Profondeur) | Magmatiques : T > 740-1200 °C (Fusion)",
          "note": "Chaque famille correspond à un domaine de température et de pression précis."
        }
      ],
      "keyRule": "LES 5 GRANDS PROCESSUS DE TRANSFORMATION DU CYCLE SONT : 1. Cristallisation (magma → roche magmatique), 2. Érosion + Diagénèse (roches de surface → roche sédimentaire), 3. Métamorphisme (roches solides → roche métamorphique), 4. Fusion/Anatexie (roche métamorphique → magma), 5. Recristallisation (magma → nouvelle roche magmatique).",
      "workedExample": {
        "title": "Exemple résolu : Traçage du cycle complet d'un atome de silicium à travers les trois familles de roches",
        "statement": "Un atome de silicium (Si) fait initialement partie d'un cristal de feldspath dans un granite de Bouaflé.\nDécrire les étapes successives par lesquelles cet atome va parcourir les trois grandes familles de roches de l'écorce terrestre pour revenir finalement à un nouveau granite.",
        "methodSteps": [
          "Étape 1 (Départ : Roche magmatique) : l'atome est dans le granite. Par altération chimique à l'eau pluviale, le feldspath s'hydrolyse et libère de la silice et de l'alumine qui forment une particule d'argile.",
          "Étape 2 (Vers la roche sédimentaire) : la particule d'argile est transportée par le fleuve et sédimente dans un lac. Par diagénèse (compaction et déshydratation), elle devient une roche sédimentaire consolidée : l'argilite.",
          "Étape 3 (Vers la roche métamorphique) : l'argilite est entraînée en profondeur par une subduction tectonique. Sous l'effet de la chaleur (600 °C) et de la pression, elle recristallise à l'état solide pour devenir un gneiss à structure rubanée.",
          "Étape 4 (Vers le magma puis la roche magmatique) : le gneiss s'enfonce à plus de 7 400 m et atteint 750 °C. Il fond en magma d'anatexie. Ce magma remonte, cristallise lentement et redonne un nouveau granite plutonique."
        ],
        "conclusion": "L'atome de silicium a traversé le cycle complet : magmatique initial (granite) → sédimentaire (argilite) → métamorphique (gneiss) → magmatique régénéré (granite d'anatexie)."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch5_p2_ex1",
          "type": "mcq",
          "prompt": "Quel processus permet le passage direct d'un magma liquide à une roche magmatique solide ?",
          "options": [
            "La cristallisation (ou solidification par refroidissement)",
            "La diagénèse",
            "La sédimentation",
            "L'érosion fluviale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La cristallisation est la solidification du magma fondu lors de sa baisse de température, produisant des roches magmatiques."
        },
        {
          "id": "seconde_c_svt_ch5_p2_ex2",
          "type": "mcq",
          "prompt": "Quel processus permet à des roches sédimentaires ou magmatiques de se transformer en roches métamorphiques ?",
          "options": [
            "Le métamorphisme (action conjuguée de fortes températures et pressions à l'état solide)",
            "La fusion totale à l'air libre",
            "La sédimentation par granoclassement",
            "L'évaporation dans l'atmosphère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le métamorphisme est le mécanisme d'enfouissement profond transformant les roches à l'état solide sans les faire fondre."
        },
        {
          "id": "seconde_c_svt_ch5_p2_ex3",
          "type": "mcq",
          "prompt": "Par quels processus successifs une roche magmatique ou métamorphique exposée en surface devient-elle une roche sédimentaire ?",
          "options": [
            "Altération → Érosion → Transport → Sédimentation → Diagénèse",
            "Fusion immédiate → Cristallisation fractionnée",
            "Plissement tectonique → Métamorphisme catazonal",
            "Séisme de faille → Volcanisme effusif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toute roche à la surface est érodée, ses débris sont transportés, déposés en sédiments puis consolidés par la diagénèse en roche sédimentaire."
        },
        {
          "id": "seconde_c_svt_ch5_p2_ex4",
          "type": "mcq",
          "prompt": "Dans quelles conditions thermodynamiques se forment respectivement les roches sédimentaires comparées aux roches métamorphiques ?",
          "options": [
            "Sédimentaires : basse température (< 100 °C) et faible pression en surface ; Métamorphiques : température élevée (200-700 °C) et forte pression en profondeur",
            "Sédimentaires : plus de 1 000 °C ; Métamorphiques : température glaciale sous zéro",
            "Toutes les deux à la même température de 800 °C",
            "Sédimentaires en profondeur absolue et métamorphiques dans l'atmosphère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les roches sédimentaires naissent en surface à faible P et basse T, tandis que les roches métamorphiques nécessitent les fortes pressions et chaleurs du sous-sol."
        },
        {
          "id": "seconde_c_svt_ch5_p2_ex5",
          "type": "mcq",
          "prompt": "Quel phénomène marque la transition ultime entre le métamorphisme et le magmatisme à très haute température ?",
          "options": [
            "L'anatexie (fusion partielle des roches métamorphiques produisant du magma)",
            "La compaction par expulsion d'eau",
            "La fossilisation d'algues calcaires",
            "L'apparition de fissures de stratification"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'anatexie est le passage de l'état solide (métamorphisme) à l'état liquide fondu (magma), fermant la boucle du cycle des roches."
        },
        {
          "id": "seconde_c_svt_ch5_p2_ex6",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que les roches de la Terre ne sont pas éternelles ?",
          "options": [
            "Parce qu'à l'échelle des temps géologiques, elles sont perpétuellement détruites, transformées et recyclées dans le cycle des roches",
            "Parce qu'elles disparaissent dans l'espace sous l'effet de la gravitation",
            "Parce que les plantes consument toutes les pierres en quelques années",
            "Parce que la tectonique des plaques s'est définitivement arrêtée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La Terre est géologiquement active : la matière minérale circule en permanence entre fusion, cristallisation, érosion, sédimentation et métamorphisme."
        },
        {
          "id": "seconde_c_svt_ch5_p2_ex7",
          "type": "mcq",
          "prompt": "Qu'indique la présence d'une migmatite dans un affleurement de roche ancienne ?",
          "options": [
            "Que la roche a atteint le seuil limite de l'anatexie (≈ 740 °C) où une partie a fondu tandis que l'autre est restée solide",
            "Qu'un dinosaure y a été fossilisé intact",
            "Qu'un lac d'eau douce y a séché il y a 10 ans",
            "Qu'un éclair a vitrifié le sable de surface"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La migmatite est la preuve géologique de terrain attestant que les conditions de fusion partielle (anatexie) ont été atteintes dans l'histoire de la croûte."
        },
        {
          "id": "seconde_c_svt_ch5_p2_ex8",
          "type": "mcq",
          "prompt": "Parmi les enchaînements suivants, lequel illustre une séquence géodynamique complète et réaliste du cycle des roches ?",
          "options": [
            "Granite → Arène granitique → Sédimentation sableuse → Grès → Gneiss → Magma d'anatexie → Nouveau granite",
            "Sable → Magma → Calcaire → Argile → Granite",
            "Basalte → Grès → Granite → Calcaire → Basalte sans transformation",
            "Gneiss → Charbon → Quartzite → Lave en surface sans fusion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Cette séquence retrace parfaitement l'histoire géologique complète : altération du granite, dépôt et diagénèse en grès, métamorphisme en gneiss, fusion en magma d'anatexie et recristallisation en granite."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 6 : LES RELATIONS ENTRE LES ÊTRES VIVANTS DANS UN ÉCOSYSTÈME
// ============================================================================
export const svt2deCRelationsEtresVivantsChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch6_relations_etres_vivants_ecosysteme",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 6,
  "officialVolumeHours": 6,
  "title": "Leçon 6 — Les relations entre les êtres vivants dans un écosystème",
  "summary": "Relations trophiques interspécifiques (chaînes, réseaux trophiques, niveaux trophiques), transfert de matière et flux d'énergie (pyramide des biomasses, recyclage par les décomposeurs), et relations intraspécifiques (vie en société chez les termites et babouins, communication).",
  "points": [
    {
      "id": "seconde_c_svt_ch6_p1_relations_trophiques_transfert_matiere_energie",
      "order": 1,
      "title": "Relations trophiques, réseaux alimentaires et transfert de matière-énergie",
      "summary": "Construire des chaînes et réseaux trophiques, identifier les niveaux trophiques (producteurs, consommateurs, décomposeurs) et analyser les pyramides écologiques et le recyclage de la matière.",
      "conceptExplanation": "1. Notions de chaîne alimentaire et de réseau trophique :\nDans tout écosystème (forêt, savane, jardin potager, étang), les êtres vivants sont reliés par des relations alimentaires interspécifiques (entre espèces différentes) :\n- Chaîne alimentaire (ou trophique) : suite ordonnée d'êtres vivants dans laquelle chacun mange celui qui le précède et est mangé par celui qui le suit. Chaque élément constitue un maillon de la chaîne.\n  Exemple : Feuille de maïs → Criquet → Caméléon → Serpent → Mangouste → Aigle.\n- Réseau trophique : ensemble complexe de plusieurs chaînes alimentaires interconnectées possédant des maillons communs (un même prédateur mange plusieurs proies, et une même proie est chassée par plusieurs prédateurs).\n\n2. Les différents niveaux trophiques :\nChaque maillon correspond à un niveau trophique précis selon son mode de nutrition :\n- Les producteurs primaires (1er niveau trophique) : ce sont TOUJOURS les végétaux chlorophylliens (plantes vertes, algues, phytoplancton). Ils sont autotrophes : grâce à la photosynthèse, ils fabriquent leur propre matière organique à partir d'eau, de sels minéraux et de CO₂ en utilisant l'énergie solaire.\n- Les consommateurs (hétérotrophes, incapables de photosynthèse) :\n  * Consommateurs de 1er ordre (C1) : animaux herbivores / phytophages se nourrissant directement des producteurs (criquet, lapin, mulot, antilope).\n  * Consommateurs de 2e ordre (C2) : carnivores primaires mangeant les herbivores (grenouille, caméléon, hérisson, serpent).\n  * Consommateurs de 3e ordre (C3) : carnivores secondaires ou super-prédateurs se nourrissant de carnivores (aigle, chouette, panthère).\n- Les décomposeurs (bactéries, champignons du sol, vers de terre, micro-arthropodes) : ils dégradent la matière organique morte (cadavres, feuilles mortes, excréments) et la minéralisent en sels minéraux réutilisables par les producteurs.\n\n3. Transfert de matière et flux d'énergie :\n- Pyramide des biomasses et des nombres : la biomasse (masse totale de matière vivante par unité de surface en g/m² ou kg/ha) et le nombre d'individus diminuent considérablement d'un niveau trophique inférieur au niveau supérieur. À chaque niveau, environ 80 à 90 % de l'énergie et de la matière sont perdus sous forme de respiration (chaleur), de travail musculaire ou de déchets non digérés (fèces).\n- Le cycle de la matière : contrairement à l'énergie qui se dissipe sous forme de chaleur (flux unidirectionnel ouvert), la matière circule de façon STRICTEMENT CYCLIQUE et fermée sans aucune perte globale : Matière minérale → Producteurs (matière organique) → Consommateurs → Décomposeurs → Sels minéraux réutilisés par les producteurs.",
      "formulas": [
        {
          "name": "Structure fondamentale d'une chaîne alimentaire",
          "formula": "Producteurs (Plantes vertes) → Consommateurs I (Herbivores) → Consommateurs II (Carnivores) → Décomposeurs (Bactéries)",
          "note": "Le premier maillon est obligatoirement un producteur autotrophe."
        },
        {
          "name": "Cycle fermé de la matière",
          "formula": "Sels minéraux + CO₂ → Végétaux → Animaux → Décomposeurs → Sels minéraux",
          "note": "La matière chimique se conserve et se recycle perpétuellement."
        }
      ],
      "keyRule": "DANS TOUTE CHAÎNE ALIMENTAIRE, LA FLÈCHE SIGNIFIE 'EST MANGÉ PAR' (et pointe toujours vers celui qui mange). Les producteurs sont obligatoirement en tête. La biomasse diminue à chaque étage de la pyramide en raison des pertes respiratoires et d'excrétion, mais la matière chimique globale est intégralement recyclée par les décomposeurs.",
      "workedExample": {
        "title": "Exemple résolu : Analyse d'un réseau trophique de savane ivoirienne",
        "statement": "Dans une parcelle de savane à Bouaké, on observe : des graminées, des criquets, des souris, des grenouilles, des serpents, des buses, des bactéries du sol.\n1. Identifier les producteurs, les consommateurs primaires C1, secondaires C2 et les décomposeurs.\n2. Écrire deux chaînes alimentaires distinctes reliées à ce réseau.\n3. Expliquer le rôle crucial joué par les bactéries du sol.",
        "methodSteps": [
          "Étape 1 : Classifier selon les niveaux trophiques :",
          "- Producteurs primaires : graminées (végétaux chlorophylliens autotrophes).",
          "- Consommateurs primaires (C1) : criquets et souris (phytophages/granivores).",
          "- Consommateurs secondaires (C2) et tertiaires (C3) : grenouilles, serpents et buses (carnivores).",
          "- Décomposeurs : bactéries du sol.",
          "Étape 2 : Écrire les chaînes alimentaires avec la convention 'est mangé par' (→) :",
          "Chaîne 1 : Graminées → Criquet → Grenouille → Serpent → Buse.",
          "Chaîne 2 : Graminées → Souris → Serpent → Buse.",
          "Étape 3 : Expliquer le rôle des bactéries : elles minéralisent les cadavres de tous les maillons et leurs déjections en éléments minéraux (azote, phosphore, potassium) assimilables par les graminées, assurant le bouclage du cycle de la matière."
        ],
        "conclusion": "Le réseau montre l'interconnexion alimentaire et le recyclage cyclique de la matière grâce aux décomposeurs."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch6_p1_ex1",
          "type": "mcq",
          "prompt": "Quel est le premier maillon obligatoire de toute chaîne alimentaire dans un écosystème terrestre ?",
          "options": [
            "Les producteurs primaires (plantes vertes chlorophylliennes autotrophes)",
            "Les consommateurs primaires (herbivores)",
            "Les carnivores super-prédateurs",
            "Les décomposeurs exclusivement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toute chaîne alimentaire débute obligatoirement par des producteurs autotrophes (plantes chlorophylliennes) qui fabriquent la matière organique initiale grâce à l'énergie solaire."
        },
        {
          "id": "seconde_c_svt_ch6_p1_ex2",
          "type": "mcq",
          "prompt": "Que signifie conventionnellement la flèche orientée A → B dans la représentation d'une chaîne alimentaire ?",
          "options": [
            "A est mangé par B",
            "A mange B",
            "A et B coopèrent pacifiquement",
            "A fournit de l'énergie solaire à B"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par convention internationale en écologie, la flèche A → B signifie 'A est mangé par B' et indique le sens du transfert de matière et d'énergie."
        },
        {
          "id": "seconde_c_svt_ch6_p1_ex3",
          "type": "mcq",
          "prompt": "Dans un potager, une buse mange un lézard qui a mangé un criquet qui a mangé une feuille de salade. Quel est le niveau trophique exact du lézard ?",
          "options": [
            "Consommateur secondaire (C2, carnivore de 1er ordre)",
            "Producteur primaire",
            "Consommateur primaire (C1, herbivore)",
            "Décomposeur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La salade est le producteur, le criquet est le consommateur primaire C1 (herbivore), le lézard mangeant le criquet est le consommateur secondaire C2 (carnivore de 1er ordre)."
        },
        {
          "id": "seconde_c_svt_ch6_p1_ex4",
          "type": "mcq",
          "prompt": "Pourquoi la biomasse diminue-t-elle fortement lorsqu'on passe d'un niveau trophique inférieur au niveau supérieur dans une pyramide écologique ?",
          "options": [
            "Parce qu'une grande partie de l'énergie et de la matière est consommée pour la respiration (chaleur) et perdue dans les excréments",
            "Parce que les prédateurs sont plus petits que leurs proies",
            "Parce que la gravité terrestre augmente avec l'altitude",
            "Parce que les prédateurs refusent de se nourrir tous les jours"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le rendement écologique est faible (environ 10 %) : l'essentiel de la matière ingérée est rejeté non assimilé ou brûlé par la respiration cellulaire sous forme de chaleur et de travail mécanique."
        },
        {
          "id": "seconde_c_svt_ch6_p1_ex5",
          "type": "mcq",
          "prompt": "Quel est le rôle écologique primordial des décomposeurs (bactéries et champignons) dans un biotope ?",
          "options": [
            "Dégrader les cadavres et déchets organiques pour les transformer en sels minéraux réutilisables par les végétaux",
            "Chasser les herbivores pour protéger les forêts",
            "Produire de l'oxygène pour les grands mammifères",
            "Filtrer l'eau de pluie pour la rendre potable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les décomposeurs minéralisent la matière organique morte, bouclant ainsi le cycle de la matière en fournissant aux producteurs les nutriments minéraux nécessaires à leur croissance."
        },
        {
          "id": "seconde_c_svt_ch6_p1_ex6",
          "type": "mcq",
          "prompt": "Quelle est la différence fondamentale entre le flux d'énergie et le cycle de la matière dans un écosystème ?",
          "options": [
            "La matière circule en cycle fermé sans perte, tandis que l'énergie circule à sens unique (flux ouvert) et se dissipe en chaleur",
            "L'énergie est recyclée en boucle fermée et la matière disparaît",
            "Ni la matière ni l'énergie ne se conservent",
            "L'énergie provient du sol et la matière provient du soleil"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La matière se recycle perpétuellement (cycle biogéochimique fermé), tandis que l'énergie solaire entre dans l'écosystème, traverse les niveaux trophiques et se dissipe irréversiblement sous forme de chaleur (flux ouvert)."
        },
        {
          "id": "seconde_c_svt_ch6_p1_ex7",
          "type": "mcq",
          "prompt": "Qu'appelle-t-on un réseau trophique par rapport à une chaîne alimentaire simple ?",
          "options": [
            "Un ensemble de plusieurs chaînes alimentaires interconnectées partageant des maillons communs",
            "Une chaîne alimentaire dans laquelle il n'y a aucun carnivore",
            "Une chaîne alimentaire sous-marine uniquement",
            "Un regroupement d'arbres d'une même plantation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un réseau trophique est le maillage complexe résultant de l'entrecroisement de toutes les chaînes alimentaires d'un même écosystème."
        },
        {
          "id": "seconde_c_svt_ch6_p1_ex8",
          "type": "mcq",
          "prompt": "Si un écosystème compte 10 000 producteurs, 1 000 herbivores et 100 rapaces, comment s'appelle le graphique représentant ces effectifs par étage ?",
          "options": [
            "La pyramide des nombres",
            "La pyramide des âges",
            "Le diagramme ombrothermique",
            "L'arbre phylogénétique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La pyramide des nombres représente le nombre total d'individus recensés à chaque niveau trophique d'un écosystème."
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch6_p2_relations_intraspecifiques_vie_societe_animaux",
      "order": 2,
      "title": "Relations intraspécifiques, vie en société et communication animale",
      "summary": "Caractériser la vie en société chez les animaux (société non hiérarchisée des termites vs société hiérarchisée des babouins) et analyser les modes de communication.",
      "conceptExplanation": "1. Notions de relations intraspécifiques et de société animale :\n- Les relations intraspécifiques s'établissent entre individus de la MÊME espèce (compétition, coopération, reproduction, défense).\n- Une société animale est un regroupement durable et organisé d'individus d'une même espèce qui se reconnaissent mutuellement, coopèrent, se répartissent les tâches et communiquent pour assurer la survie du groupe.\n\n2. Exemple de société fermée non hiérarchisée : la termitière :\nChez les termites, la société est fondée sur un polyéthisme strict (division du travail liée à un polymorphisme anatomique) où le statut est fixé dès le développement larvaire par des phéromones :\n- Le couple royal (un roi et une reine obèse) : rôle exclusivement reproducteur (la reine pond des dizaines de milliers d'œufs par jour).\n- Les soldats (mâles et femelles stériles aptères, munis d'énormes mandibules broyeuses ou d'un rostre à substance gluante) : chargés de la garde et de la défense de la termitière contre les fourmis prédatrices.\n- Les ouvriers (aveugles et aptères) : bâtissent et réparent la termitière, creusent les galeries, recherchent la nourriture et nourrissent les larves et le couple royal par trophallaxie (échanges alimentaires de bouche à bouche).\nParticularité : aucun individu n'exerce d'autorité sur les autres. La coordination est collective et automatique via des phéromones. C'est une société non hiérarchisée.\n\n3. Exemple de société ouverte hiérarchisée : la troupe de babouins :\nChez les primates comme le babouin de savane, il existe un dimorphisme sexuel marqué (mâles plus corpulents dotés de puissantes canines) et une structure sociale hautement hiérarchisée :\n- La place de chaque individu n'est pas innée : elle est conquise et maintenue par des confrontations, des mimiques de menace ou des alliances.\n- Un mâle dominant (mâle alpha) dirige le groupe, a un accès prioritaire à la nourriture et aux femelles en œstrus.\n- Organisation spatiale lors des déplacements dans la savane :\n  * Les mâles subordonnés ouvrent la marche en éclaireurs et ferment le groupe à l'arrière.\n  * Les femelles, les nouveau-nés et les juvéniles marchent au centre, protégés.\n  * Les mâles dominants escortent les flancs.\n- En cas d'attaque par un léopard : les mâles dominants et subordonnés forment un front uni défensif courageux en première ligne, poussant des rugissements et découvrant leurs canines pendant que les mères et petits se réfugient dans les arbres.\n\n4. Les modes de communication intraspécifique :\nLa communication animale sert à la défense, à la recherche de nourriture et à la reproduction :\n- Signaux sonores : cris d'alarme, grognements d'intimidation, chants nuptiaux d'oiseaux.\n- Signaux visuels : postures de soumission ou de combat, claquement de paupières, érection du pelage, présentation des fesses chez les babouins.\n- Signaux chimiques (phéromones) : phéromones de piste pour baliser le chemin chez les fourmis, phéromones d'alarme chez les termites, phéromones sexuelles d'attraction.\n- Signaux tactiles : épouillage mutuel (toilettage social ou grooming chez les primates qui renforce les liens affectifs et la paix sociale), attouchements d'antennes.\n- Échanges nutritifs (trophallaxie).",
      "formulas": [
        {
          "name": "Types de sociétés animales",
          "formula": "Société des Termites (Castes fixées, division du travail, non hiérarchisée) vs Société des Babouins (Hiérarchie rigoureuse, chef alpha)",
          "note": "Deux modèles évolutifs majeurs d'organisation sociale intraspécifique."
        },
        {
          "name": "Canaux de communication intraspécifique",
          "formula": "Signaux Visuels + Sonores + Chimiques (Phéromones) + Tactiles (Toilettage)",
          "note": "Permettent la coordination des comportements collectifs."
        }
      ],
      "keyRule": "NE PAS CONFONDRE : Chez les termites, personne ne commande (pas de chef, statut biologique imposé dès la naissance = NON HIÉRARCHISÉE). Chez les babouins, il existe un chef (mâle alpha) et une hiérarchie stricte acquise par confrontation = SOCIÉTÉ HIÉRARCHISÉE.",
      "workedExample": {
        "title": "Exemple résolu : Organisation d'une troupe de babouins face à une menace",
        "statement": "Une troupe de 40 babouins se déplace dans une savane arbustive de Côte d'Ivoire. Soudain, un éclaireur repère une panthère à l'affût. Les mâles poussent des aboiements stridents, se placent en première ligne face au prédateur en montrant leurs canines, tandis que les femelles et jeunes grimpent précipitamment dans les acacias.\n1. Identifier les types de signaux de communication utilisés dans cette situation.\n2. Expliquer comment cette réaction collective illustre les avantages de la vie en société.",
        "methodSteps": [
          "Étape 1 : Identifier les canaux de communication :",
          "- Signaux sonores : aboiements stridents d'alerte prévenant l'ensemble de la troupe.",
          "- Signaux visuels : posture agressive, redressement du corps et découverte des canines pour intimider la panthère.",
          "Étape 2 : Analyser l'avantage adaptatif : un babouin isolé serait une proie facile pour la panthère. La vie en société permet une vigilance partagée (détection rapide du prédateur), une protection ciblée des individus vulnérables (femelles et petits) et une défense collective coordonnée où la masse des mâles adultes fait fuir le prédateur."
        ],
        "conclusion": "La vie en société et la communication efficace permettent aux babouins d'assurer la survie collective du groupe face aux grands prédateurs."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch6_p2_ex1",
          "type": "mcq",
          "prompt": "Quelle est la caractéristique distinctive majeure de la société des termites comparée à celle des babouins ?",
          "options": [
            "C'est une société non hiérarchisée sans aucun chef où le rôle de chacun est fixé biologiquement dès la naissance",
            "C'est une société où le roi décide de toutes les actions quotidiennes",
            "C'est une société où chaque termite vit en solitaire la majorité du temps",
            "C'est une société où les ouvriers chassent les soldats"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans la termitière, il n'existe aucun chef ni hiérarchie de pouvoir : la reine et le roi ne font que pondre, et les rôles (soldats, ouvriers) sont fixés dès le départ par des régulations phéromonales."
        },
        {
          "id": "seconde_c_svt_ch6_p2_ex2",
          "type": "mcq",
          "prompt": "Quel est le rôle biologique exclusif du couple royal (roi et reine) au sein d'une termitière ?",
          "options": [
            "Assurer la reproduction en produisant des œufs",
            "Bâtir les murs extérieurs en terre mâchée",
            "Défendre l'entrée contre les attaques de fourmis",
            "Rechercher le bois mort dans la forêt"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le roi et la reine ont pour unique fonction la reproduction de la colonie (la reine peut pondre plusieurs dizaines de milliers d'œufs par jour)."
        },
        {
          "id": "seconde_c_svt_ch6_p2_ex3",
          "type": "mcq",
          "prompt": "Comment se nomme le mode de transfert de nourriture prédigérée de bouche à bouche très fréquent chez les insectes sociaux comme les termites ?",
          "options": [
            "La trophallaxie",
            "La photosynthèse",
            "L'osmose",
            "La phagocytose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La trophallaxie est l'échange réciproque de nourriture liquide par régurgitation de bouche à bouche entre individus d'une même colonie."
        },
        {
          "id": "seconde_c_svt_ch6_p2_ex4",
          "type": "mcq",
          "prompt": "Lors des déplacements d'une troupe de babouins dans la savane, où sont placés les femelles et les petits ?",
          "options": [
            "Au centre de la formation, là où la protection est maximale",
            "En première ligne tout à l'avant pour servir d'appât",
            "Loin derrière la troupe à plusieurs kilomètres",
            "Sur les flancs extérieurs découverts"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans la marche ordonnée des babouins, les mères et petits marchent au cœur du groupe au centre, protégés devant, derrière et sur les côtés par les mâles adultes."
        },
        {
          "id": "seconde_c_svt_ch6_p2_ex5",
          "type": "mcq",
          "prompt": "Comment appelle-t-on les substances chimiques odorantes émises par un animal qui modifient le comportement de ses congénères ?",
          "options": [
            "Les phéromones",
            "Les anticorps",
            "Les vitamines",
            "Les enzymes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les phéromones sont des signaux chimiques volatils ou solubles servant de moyen de communication intraspécifique (alarme, attraction sexuelle, marquage de piste)."
        },
        {
          "id": "seconde_c_svt_ch6_p2_ex6",
          "type": "mcq",
          "prompt": "Chez les babouins et les chimpanzés, quel rôle majeur joue l'épouillage mutuel (toilettage social / grooming) au-delà de l'hygiène ?",
          "options": [
            "Renforcer les alliances sociales, apaiser les tensions et maintenir la cohésion du groupe",
            "Transmettre des bactéries pathogènes",
            "Désigner le membre qui sera exclu de la troupe",
            "Préparer les individus à hiberner"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'épouillage est un rituel social fondamental chez les primates qui procure du bien-être, désamorce l'agressivité et renforce les liens hiérarchiques et amicaux."
        },
        {
          "id": "seconde_c_svt_ch6_p2_ex7",
          "type": "mcq",
          "prompt": "Comment le statut de chef (mâle dominant alpha) est-il déterminé au sein d'une troupe de babouins ?",
          "options": [
            "Par des affrontements, des joutes de force et des coalitions d'alliances",
            "Par tirage au sort au lever du soleil",
            "Parce qu'il est né d'un œuf royal spécial",
            "Il est désigné par les prédateurs de la savane"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La hiérarchie chez les babouins est dynamique et acquise : les mâles s'affrontent régulièrement par des démonstrations de force et de courage pour conquérir ou conserver le rang dominant."
        },
        {
          "id": "seconde_c_svt_ch6_p2_ex8",
          "type": "mcq",
          "prompt": "Les relations entre deux mâles babouins d'une même troupe qui se disputent une ressource sont qualifiées de :",
          "options": [
            "Relations intraspécifiques (entre membres de la même espèce)",
            "Relations interspécifiques",
            "Relations parasitaires",
            "Relations symbiotiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toute interaction (coopération ou compétition) reliant des individus appartenant à une même espèce biologique est qualifiée de relation intraspécifique."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 7 : LE CHANGEMENT CLIMATIQUE
// ============================================================================
export const svt2deCChangementClimatiqueChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch7_changement_climatique",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 7,
  "officialVolumeHours": 4,
  "title": "Leçon 7 — Le changement climatique",
  "summary": "Causes anthropiques de l'effet de serre additionnel (combustibles fossiles, déforestation, CFC, méthane), mécanismes du dérèglement climatique et de la destruction de l'ozone, conséquences écologiques et stratégies d'atténuation durables.",
  "points": [
    {
      "id": "seconde_c_svt_ch7_p1_causes_anthropiques_mecanisme_effet_de_serre",
      "order": 1,
      "title": "Causes anthropiques, gaz à effet de serre et mécanisme du réchauffement",
      "summary": "Distinguer l'effet de serre naturel indispensable à la vie du forçage radiatif d'origine humaine (CO2, CH4, N2O, CFC) et comprendre le rôle de la couche d'ozone.",
      "conceptExplanation": "1. L'effet de serre naturel : un équilibre thermique indispensable à la vie :\nLe rayonnement solaire traverse l'atmosphère terrestre. Une partie est réfléchie par les nuages et le sol (albédo), le reste réchauffe la surface de la Terre. La Terre réémet cette énergie sous forme de rayonnements infrarouges thermiques invisibles.\nCertains gaz atmosphériques naturels piègent ces infrarouges et en renvoient une grande partie vers le sol : c'est l'effet de serre naturel.\n- Sans cet effet de serre naturel, la température moyenne de la Terre serait de −20 °C (au lieu de +15 °C actuellement) et les océans seraient entièrement gelés, rendant la vie impossible.\n- Les principaux gaz responsables de l'effet de serre naturel sont la vapeur d'eau (H₂O), le dioxyde de carbone (CO₂) et l'ozone troposphérique.\n\n2. Les causes anthropiques de l'effet de serre additionnel (dérèglement climatique) :\nDepuis le début de l'ère industrielle (vers 1860-1870), les activités humaines rejettent des quantités gigantesques de gaz à effet de serre (GES) dans l'atmosphère :\n- La combustion des énergies fossiles (charbon, pétrole, gaz naturel) pour l'industrie, les transports et l'électricité : principale source d'émission de CO₂ (la teneur est passée de 280 ppm en 1860 à plus de 420 ppm aujourd'hui).\n- La déforestation massive (notamment en zone tropicale) : la destruction des forêts par abattage et feux de brousse libère du CO₂ et détruit les puits de carbone végétaux vitaux.\n- L'agriculture intensive et l'élevage : les rizières inondées et la fermentation entérique des ruminants dégagent d'énormes quantités de méthane (CH₄, à pouvoir réchauffant 28 fois supérieur au CO₂). L'épandage d'engrais azotés libère du protoxyde d'azote (N₂O).\n\n3. L'amincissement de la couche d'ozone stratosphérique :\nLa couche d'ozone (O₃), située dans la stratosphère entre 20 et 30 km d'altitude, absorbe les rayonnements ultraviolets solaires (UV) très dangereux (responsables de cancers cutanés et mutations génétiques). L'utilisation humaine massive des chlorofluorocarbures (CFC) dans les aérosols et fluides frigorigènes a libéré des atomes de chlore qui catalysent la destruction de l'ozone (créant le 'trou d'ozone'). Les CFC sont également de redoutables gaz à effet de serre.",
      "formulas": [
        {
          "name": "Bilan radiatif terrestre de l'effet de serre",
          "formula": "Énergie solaire absorbée = Rayonnement infrarouge émis - Infrarouge piégé par les GES",
          "note": "L'augmentation des GES retient davantage de chaleur vers le sol."
        },
        {
          "name": "Hausse historique de la concentration de CO₂",
          "formula": "280 ppm (Ère préindustrielle) → 350 ppm (1985) → > 420 ppm (Aujourd'hui)",
          "note": "Augmentation exponentielle corrélée à l'élévation de la température mondiale."
        }
      ],
      "keyRule": "L'EFFET DE SERRE EST NATUREL ET VITAL (sans lui, il ferait −20 °C sur Terre). Ce qui est dangereux et anormal, c'est l'EFFET DE SERRE ADDITIONNEL provoqué par l'Homme via la combustion du charbon/pétrole (CO₂), l'élevage/rizières (CH₄) et la déforestation.",
      "workedExample": {
        "title": "Exemple résolu : Analyse de l'évolution conjointe de la température et du CO₂ de 1860 à 2000",
        "statement": "On examine les enregistrements climatiques mondiaux entre 1860 et l'an 2000 :\n- En 1860 : concentration en CO₂ = 290 ppm ; anomalie de température = −0,4 °C.\n- En 1960 : concentration en CO₂ = 320 ppm ; anomalie de température = −0,1 °C.\n- En 2000 : concentration en CO₂ = 370 ppm ; anomalie de température = +0,2 °C.\n1. Calculer l'augmentation du taux de CO₂ entre 1860 et 1960 (en 100 ans), puis entre 1960 et 2000 (en 40 ans).\n2. Établir la corrélation avec l'évolution de la température mondiale.",
        "methodSteps": [
          "Étape 1 : Calculer l'augmentation de CO₂ de 1860 à 1960 : ΔC₁ = 320 − 290 = 30 ppm en 100 ans (soit 0,3 ppm/an).",
          "Étape 2 : Calculer l'augmentation de 1960 à 2000 : ΔC₂ = 370 − 320 = 50 ppm en seulement 40 ans (soit 1,25 ppm/an). L'accumulation s'accélère très fortement après 1960.",
          "Étape 3 : Analyser la température : la température augmente parallèlement de −0,4 °C à +0,2 °C, soit un réchauffement global net de +0,6 °C sur cette période.",
          "Étape 4 : Déduire la corrélation : la courbe de température épouse fidèlement la courbe de concentration en CO₂. La hausse exponentielle des émissions anthropiques de gaz à effet de serre est le moteur direct du réchauffement climatique contemporain."
        ],
        "conclusion": "Il existe une corrélation directe et prouvée entre l'envolée des concentrations de gaz à effet de serre et l'élévation de la température moyenne du globe."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch7_p1_ex1",
          "type": "mcq",
          "prompt": "Que serait la température moyenne à la surface de la Terre en l'absence totale d'effet de serre naturel ?",
          "options": [
            "Environ −20 °C (la Terre serait un désert de glace inhabitable)",
            "+15 °C",
            "+50 °C",
            "0 °C exactement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans l'effet de serre naturel assuré par la vapeur d'eau et le CO₂, la Terre renverrait toute sa chaleur vers l'espace et sa température moyenne chuterait à environ −20 °C."
        },
        {
          "id": "seconde_c_svt_ch7_p1_ex2",
          "type": "mcq",
          "prompt": "Quel type de rayonnement émis par la Terre réchauffée est piégé par les gaz à effet de serre ?",
          "options": [
            "Le rayonnement infrarouge thermique",
            "Le rayonnement ultraviolet",
            "Les rayons X cosmiques",
            "La lumière visible bleue"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La Terre absorbe l'énergie solaire et réémet de l'énergie sous forme de rayonnement infrarouge de grande longueur d'onde, qui est absorbé et renvoyé par les molécules de GES."
        },
        {
          "id": "seconde_c_svt_ch7_p1_ex3",
          "type": "mcq",
          "prompt": "Quelle est la principale source humaine d'émission de dioxyde de carbone (CO₂) dans le monde ?",
          "options": [
            "La combustion des énergies fossiles (charbon, pétrole, gaz naturel)",
            "La respiration des poissons dans les océans",
            "L'évaporation naturelle de l'eau des fleuves",
            "La décomposition des roches calcaires sous la pluie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'extraction et la combustion de combustibles fossiles pour l'industrie, la production d'électricité et les transports représentent plus de 70 % des rejets mondiaux de CO₂."
        },
        {
          "id": "seconde_c_svt_ch7_p1_ex4",
          "type": "mcq",
          "prompt": "Quel gaz à effet de serre très puissant est massivement libéré par les rizières inondées et l'élevage des ruminants ?",
          "options": [
            "Le méthane (CH₄)",
            "L'argon (Ar)",
            "Le dioxygène (O₂)",
            "Le diazote (N₂)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fermentation anaérobie de la matière organique dans les rizières et le tube digestif des bovins produit de grandes quantités de méthane (CH₄)."
        },
        {
          "id": "seconde_c_svt_ch7_p1_ex5",
          "type": "mcq",
          "prompt": "Pourquoi la déforestation accélère-t-elle le réchauffement climatique mondial ?",
          "options": [
            "Parce que les arbres absorbent le CO₂ par photosynthèse (puits de carbone) ; leur destruction libère ce carbone et supprime son absorption",
            "Parce que les arbres produisent de la poussière qui refroidit le sol",
            "Parce que les forêts attirent la pluie acide",
            "Parce que le bois coupé attire le rayonnement gamma"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les forêts sont des puits de carbone majeurs : en brûlant ou en pourrissant, les arbres abattus relâchent leur carbone sous forme de CO₂ et cessent d'en capturer par photosynthèse."
        },
        {
          "id": "seconde_c_svt_ch7_p1_ex6",
          "type": "mcq",
          "prompt": "Quel gaz synthétique utilisé autrefois dans les aérosols et réfrigérateurs détruit la couche d'ozone protectrice ?",
          "options": [
            "Les chlorofluorocarbures (CFC)",
            "Le dioxyde de silicium",
            "L'hélium",
            "L'acide chlorhydrique pur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les CFC libèrent dans la stratosphère des atomes de chlore qui catalysent la destruction cyclique des molécules d'ozone (O₃)."
        },
        {
          "id": "seconde_c_svt_ch7_p1_ex7",
          "type": "mcq",
          "prompt": "Quel accord international majeur signé en 1987 a interdit l'utilisation des CFC pour protéger la couche d'ozone ?",
          "options": [
            "Le protocole de Montréal",
            "Le traité de Versailles",
            "La convention de Genève",
            "Le sommet de Yamoussoukro"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le protocole de Montréal (1987) a organisé l'élimination progressive mondiale des substances qui appauvrissent la couche d'ozone, notamment les CFC."
        },
        {
          "id": "seconde_c_svt_ch7_p1_ex8",
          "type": "mcq",
          "prompt": "En Côte d'Ivoire, quelle ville littorale historique est particulièrement menacée de submersion marine par la montée des eaux liée au changement climatique ?",
          "options": [
            "Grand-Lahou",
            "Korhogo",
            "Man",
            "Ferkessédougou"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Grand-Lahou (et l'ancienne ville coloniale de Lahou Kpanda) subit une érosion côtière dramatique et des submersions marines accélérées par la montée du niveau de l'océan Atlantique."
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch7_p2_consequences_solutions_lutte_changement_climatique",
      "order": 2,
      "title": "Conséquences environnementales et stratégies de lutte contre le réchauffement",
      "summary": "Analyser les impacts climatiques globaux et régionaux (sécheresses, fonte des glaces, montée des océans) et mettre en œuvre les solutions d'atténuation (énergies renouvelables, reboisement).",
      "conceptExplanation": "1. Les conséquences écologiques et sociétales du dérèglement climatique :\nL'augmentation de la température globale modifie profondément le fonctionnement de la biosphère et du climat :\n- Perturbation des cycles hydrologiques : baisse de la pluviométrie moyenne dans certaines régions d'Afrique de l'Ouest, sécheresses prolongées, baisse du niveau des fleuves et de l'accès à l'eau potable, désertification accélérée.\n- Multiplication des événements météorologiques extrêmes : canicules plus intenses, inondations soudaines, multiplication des cyclones tropicaux violents, méga-feux de forêt.\n- Fonte des glaces et élévation du niveau marin : fonte accélérée des glaciers continentaux et des calottes polaires (Groenland, Antarctique), combinée à la dilatation thermique des eaux des océans réchauffés. Cela entraîne une montée du niveau de la mer menaçant d'inondation permanente les deltas, îles et villes côtières (ex : littoral ivoirien de Grand-Lahou, Port-Bouët, San Pedro).\n- Menace sur la biodiversité et l'agriculture : modification des aires de répartition des espèces végétales et animales, chute des rendements agricoles vivriers provoquant des crises alimentaires et la famine, propagation de maladies vectorielles (paludisme, dengue).\n\n2. Les solutions et stratégies d'atténuation durable :\nPour freiner le changement climatique, l'humanité doit réduire drastiquement ses émissions de gaz à effet de serre et protéger les écosystèmes :\n- La révolution énergétique et sortie des énergies fossiles :\n  * Remplacer le charbon, le pétrole et le gaz par des énergies renouvelables et décarbonées : énergie solaire photovoltaïque (très prometteuse en Côte d'Ivoire), éolienne, hydroélectrique et biomasse durable.\n  * Promouvoir l'efficacité énergétique dans les transports (véhicules électriques, transports ferroviaires et collectifs urbains) et dans l'habitat.\n- La protection et la restauration des forêts (lutte contre la déforestation) :\n  * Mettre fin à l'exploitation forestière anarchique et aux feux de brousse agricoles non contrôlés.\n  * Engager des programmes massifs de reboisement et d'agroforesterie pour restaurer le couvert forestier et recréer des puits de carbone vivants.\n  * Créer et surveiller des réserves naturelles intégrales et des parcs nationaux (ex : parc national de Taï, parc national de la Comoé).\n- L'adoption de pratiques agricoles durables :\n  * Réduire l'usage excessif d'engrais chimiques azotés, développer l'irrigation économe en eau, promouvoir le compostage et le paillage organique.\n- La gouvernance environnementale et la sensibilisation citoyenne :\n  * Respect des accords climatiques internationaux (Accords de Paris, conventions climat).\n  * Éducation environnementale des populations dès le milieu scolaire pour préserver les ressources naturelles.",
      "formulas": [
        {
          "name": "Stratégies d'atténuation du changement climatique",
          "formula": "Transition énergétique (Énergies renouvelables) + Reboisement actif + Sobriété carbone = Climat stabilisé",
          "note": "Objectif mondial : limiter le réchauffement planétaire sous la barre des +1,5 °C à +2 °C."
        },
        {
          "name": "Bilan des puits de carbone forestiers",
          "formula": "Forêt vivante = Stockage massif de CO₂ par photosynthèse | Forêt brûlée = Émission massive de CO₂",
          "note": "La forêt ivoirienne est un régulateur thermique et pluviométrique vital."
        }
      ],
      "keyRule": "LES SOLUTIONS CLÉS SE DIVISENT EN DEUX VOLETS : 1. RÉDUIRE LES ÉMISSIONS DE GES (remplacer les fossiles par solaire/éolien, transports propres) et 2. AUGMENTER LE STOCKAGE DE CARBONE (reboisement massif, arrêt des feux de brousse, protection des sols).",
      "workedExample": {
        "title": "Exemple résolu : Élaboration d'un plan d'action communal de lutte contre la déforestation",
        "statement": "En Côte d'Ivoire, la couverture forestière est passée de 16 millions d'hectares au début du XXe siècle à moins de 3 millions d'hectares aujourd'hui. Une commune rurale près de Sassandra décide d'agir.\n1. Identifier les conséquences directes de cette disparition forestière sur le microclimat local.\n2. Proposer trois mesures concrètes et immédiatement applicables par la communauté villageoise pour inverser la tendance.",
        "methodSteps": [
          "Étape 1 : Identifier les conséquences microclimatiques : la disparition des arbres entraîne une baisse de l'évapotranspiration locale (chute des pluies régionales), une érosion accrue des sols arables lessivés par les averses torrentielles, et une hausse de la température au sol.",
          "Étape 2 : Formuler 3 mesures concrètes :",
          "- Mesure 1 : Lancer une campagne communautaire de reboisement participatif en replantant des essences forestières locales et des arbres d'ombrage dans les cacaoyères (agroforesterie).",
          "- Mesure 2 : Interdire rigoureusement les feux de brousse de défrichement et les remplacer par le compostage des résidus végétaux.",
          "- Mesure 3 : Diffuser l'utilisation de foyers de cuisson améliorés à haut rendement énergétique afin de réduire de 70 % la consommation de bois de chauffe et de charbon."
        ],
        "conclusion": "Ce plan d'action allie reboisement, agroforesterie et économie de bois pour restaurer durablement l'équilibre climatique local."
      },
      "exercises": [
        {
          "id": "seconde_c_svt_ch7_p2_ex1",
          "type": "mcq",
          "prompt": "Quelle énergie propre et inépuisable offre un potentiel exceptionnel de développement en Afrique et en Côte d'Ivoire pour remplacer les énergies fossiles ?",
          "options": [
            "L'énergie solaire photovoltaïque",
            "Le charbon de terre extrait du sous-sol",
            "Le fioul lourd des raffineries",
            "Le gaz de schiste importé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'énergie solaire bénéficie d'un ensoleillement permanent et puissant sous les tropiques, constituant l'alternative décarbonée idéale aux énergies fossiles."
        },
        {
          "id": "seconde_c_svt_ch7_p2_ex2",
          "type": "mcq",
          "prompt": "Quelle action sylvicole permet de reconstituer les massifs forestiers détruits et de piéger activement le dioxyde de carbone atmosphérique ?",
          "options": [
            "Le reboisement",
            "L'incinération des sous-bois",
            "L'abattage des grands arbres centenaires",
            "Le terrassement minier à ciel ouvert"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le reboisement consiste à planter de nouveaux arbres dont la croissance capture activement le CO₂ de l'air par photosynthèse pour le fixer sous forme de bois."
        },
        {
          "id": "seconde_c_svt_ch7_p2_ex3",
          "type": "mcq",
          "prompt": "Parmi les conséquences suivantes, laquelle est un impact direct du réchauffement climatique sur les régions côtières mondiales ?",
          "options": [
            "L'élévation du niveau de la mer et l'inondation progressive des rivages",
            "La baisse générale du niveau de tous les océans",
            "La disparition totale de l'eau de mer",
            "La formation d'une banquise permanente sous les tropiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fonte des glaciers terrestres et la dilatation thermique de l'eau chauffée élèvent le niveau des mers, provoquant l'érosion et la submersion des côtes."
        },
        {
          "id": "seconde_c_svt_ch7_p2_ex4",
          "type": "mcq",
          "prompt": "Quelle pratique agricole traditionnelle très destructive pour la forêt ivoirienne doit être formellement abandonnée dans la lutte pour le climat ?",
          "options": [
            "La pratique incontrôlée des feux de brousse",
            "L'arrosage au goutte-à-goutte",
            "Le paillage végétal des sols",
            "L'utilisation du compost organique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les feux de brousse incontrôlés détruisent des milliers d'hectares de végétation chaque saison sèche et libèrent de gigantesques volumes de CO₂ et de fumées toxiques."
        },
        {
          "id": "seconde_c_svt_ch7_p2_ex5",
          "type": "mcq",
          "prompt": "Quel secteur des activités humaines doit être repensé pour développer les transports en commun électriques et réduire les émissions de GES ?",
          "options": [
            "Le secteur des transports urbains et interurbains",
            "Le secteur de la poterie artisanale",
            "Le secteur de la pêche en pirogue à pagaie",
            "Le secteur de la vannerie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les transports routiers fonctionnant aux carburants pétroliers sont une source majeure de GES : leur électrification et le train réduisent considérablement les émissions."
        },
        {
          "id": "seconde_c_svt_ch7_p2_ex6",
          "type": "mcq",
          "prompt": "Que préconise l'organisation écologiste Greenpeace pour réduire les émissions mondiales de gaz à effet de serre d'ici 2050 ?",
          "options": [
            "Une révolution énergétique basée sur l'efficacité et l'utilisation massive des énergies renouvelables",
            "L'ouverture de nouvelles mines de charbon géantes",
            "L'arrêt complet de toute agriculture vivrière",
            "L'extinction des centrales solaires existantes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Greenpeace plaide pour une transition rapide vers 100 % d'énergies renouvelables (solaire, éolien, hydraulique) et l'arrêt des combustibles fossiles."
        },
        {
          "id": "seconde_c_svt_ch7_p2_ex7",
          "type": "mcq",
          "prompt": "Quelle est l'attitude citoyenne recommandée au quotidien pour limiter son empreinte carbone individuelle ?",
          "options": [
            "Éviter le gaspillage d'électricité, privilégier la marche ou les transports collectifs et planter des arbres",
            "Laisser les climatiseurs allumés fenêtres ouvertes",
            "Brûler ses déchets plastiques dans son jardin",
            "Utiliser systématiquement une voiture individuelle pour de très courts trajets"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La sobriété énergétique (éteindre les appareils inutiles, transports doux, gestion propre des déchets et reboisement) réduit efficacement l'empreinte carbone personnelle."
        },
        {
          "id": "seconde_c_svt_ch7_p2_ex8",
          "type": "mcq",
          "prompt": "Pourquoi la préservation des parcs nationaux ivoiriens (comme le parc national de Taï) est-elle stratégique pour le climat mondial ?",
          "options": [
            "Parce qu'ils constituent d'immenses réservoirs de biodiversité et de formidables puits de carbone forestiers primaires intacts",
            "Parce qu'ils abritent des raffineries de pétrole",
            "Parce qu'ils bloquent les tsunamis en haute montagne",
            "Parce qu'ils absorbent tous les déchets plastiques du pays"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le parc national de Taï est l'un des derniers grands blocs de forêt primaire dense humide d'Afrique de l'Ouest : il séquestre des millions de tonnes de carbone."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 8 : L'ORGANISATION D'UNE CELLULE
// ============================================================================
export const svt2deCOrganisationCelluleChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch8_organisation_cellule",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 8,
  "officialVolumeHours": 2,
  "title": "Leçon 8 — L'organisation d'une cellule",
  "summary": "Ultrastructure comparée de la cellule animale et de la cellule végétale au microscope électronique (organites communs, centrosome, paroi pectocellulosique, chloroplastes, vacuoles) et équipement chromosomique (caryotype, autosomes, gonosomes, diploïdie et haploïdie chez diverses espèces).",
  "points": [
    {
      "id": "seconde_c_svt_ch8_p1_ultrastructure_cellule_animale_vegetale",
      "order": 1,
      "title": "Ultrastructure comparée de la cellule animale et végétale au microscope électronique",
      "summary": "Identifier et différencier les organites cellulaires communs et spécifiques aux cellules animales et végétales, et relier chaque organite à sa fonction vitale.",
      "conceptExplanation": "1. La cellule, unité structurale et fonctionnelle du vivant :\nTout être vivant, qu'il soit animal ou végétal, est constitué d'une ou plusieurs cellules. Au microscope électronique à transmission (MET), l'observation révèle une organisation interne complexe appelée ultrastructure cellulaire.\n\n2. Les constituants communs aux cellules animales et végétales :\n- La membrane plasmique : fine enveloppe lipoprotéique qui délimite la cellule, régule les échanges sélectifs entre le milieu intracellulaire et extracellulaire.\n- Le cytoplasme (ou cytosol / hyaloplasme) : milieu gélatineux contenant de l'eau, des enzymes, des nutriments et dans lequel baignent les organites.\n- Le noyau : centre de contrôle de la cellule délimité par une enveloppe nucléaire percée de pores nucléaires. Il renferme le nucléoplasme, la chromatine (forme décondensée des chromosomes portant l'information génétique) et le nucléole (siège de la synthèse des ribosomes).\n- Le réticulum endoplasmique (RE) : réseau de cavités membraneuses communicantes :\n  * Réticulum endoplasmique granuleux (REG ou ergastoplasme) : tapissé de ribosomes, spécialisé dans la synthèse et le transport des protéines.\n  * Réticulum endoplasmique lisse (REL) : dépourvu de ribosomes, impliqué dans la synthèse des lipides (stérols, phospholipides) et la détoxification.\n- Les ribosomes : granules ribonucléoprotéiques libres ou fixés au REG, assurant la traduction des protéines.\n- L'appareil de Golgi : ensemble de dictyosomes (empilements de saccules aplatis) et de vésicules de sécrétion assurant la maturation, l'emballage et l'expédition des molécules synthétisées.\n- Les mitochondries : organites à double membrane (membrane interne formant des crêtes) possédant leur propre ADN ; elles sont le siège de la respiration cellulaire et produisent l'énergie vitale sous forme d'ATP.\n- Les lysosomes et inclusions cytoplasmiques : petites vésicules contenant des enzymes hydrolytiques pour la digestion cellulaire ou des réserves nutritives (gouttelettes lipidiques, glycogène).\n\n3. Les constituants spécifiques de chaque type cellulaire :\nA. Spécificités de la cellule animale :\n- Le centrosome (ou centre cellulaire) : constitué d'une paire de centrioles cylindriques perpendiculaires entourés d'un matériel péricentriolaire ; il organise les microtubules, forme les asters lors de la mitose, ainsi que les cils et flagelles.\n- Les vacuoles sont très petites, transitoires ou absentes.\n\nB. Spécificités de la cellule végétale :\n- La membrane (ou paroi) pectocellulosique / squelettique : enveloppe externe rigide, épaisse, formée de cellulose et de pectine, qui confère une forme géométrique polygonale et une grande résistance mécanique à la cellule végétale.\n- Les chloroplastes : organites à double membrane contenant des thylakoïdes riches en chlorophylle ; ils sont le siège de la photosynthèse permettant aux végétaux d'être autotrophes au carbone.\n- Une grande vacuole centrale : occupant jusqu'à 80-90 % du volume cellulaire, remplie de suc vacuolaire (eau, sels minéraux, pigments anthocyaniques) ; elle assure la turgescence et le maintien de la rigidité des tissus végétaux.",
      "formulas": [
        {
          "name": "Bilan de la photosynthèse (chloroplastes)",
          "formula": "6 CO₂ + 6 H₂O + lumière → C₆H₁₂O₆ (glucose) + 6 O₂",
          "note": "Exclusif aux cellules végétales autotrophes."
        },
        {
          "name": "Bilan de la respiration cellulaire (mitochondries)",
          "formula": "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + 36 à 38 ATP",
          "note": "Commun aux cellules animales et végétales hétérotrophes/autotrophes."
        }
      ],
      "keyRule": "TROIS STRUCTURES SIGNENT LA CELLULE VÉGÉTALE : la paroi pectocellulosique rigide externe, les chloroplastes chlorophylliens et la grande vacuole centrale d'eau. La cellule animale se caractérise quant à elle par la présence du centrosome (centrioles) et l'absence de paroi rigide (forme souple et variable).",
      "workedExample": {
        "title": "Exemple résolu : Identification et comparaison ultrastructurale de deux cellules inconnues",
        "statement": "Un élève de 2nde C observe au MET deux cellules A et B :\n- Cellule A : délimitée par une membrane plasmique souple, contient un noyau, des mitochondries nombreuses, un appareil de Golgi et une paire de centrioles perpendiculaires formant un centrosome.\n- Cellule B : entourée d'une paroi pectocellulosique épaisse externe, contient une volumineuse vacuole centrale repoussant le noyau en périphérie et des organites discoïdes à disques thylakoïdes verts.\n1. Identifier la nature animale ou végétale de chaque cellule.\n2. Citer les organites communs observés ou déduits.\n3. Indiquer les rôles respectifs des mitochondries et des chloroplastes.",
        "methodSteps": [
          "Étape 1 : Diagnostic de la cellule A :\nLa présence d'un centrosome (centrioles) et l'absence de paroi rigide externe et de chloroplastes indiquent sans équivoque qu'il s'agit d'une cellule animale.",
          "Étape 2 : Diagnostic de la cellule B :\nLa présence d'une paroi pectocellulosique squelettique, d'une grande vacuole centrale développée et de chloroplastes photosynthétiques atteste qu'il s'agit d'une cellule végétale chlorophyllienne.",
          "Étape 3 : Organites communs :\nLes deux cellules partagent la membrane plasmique, le hyaloplasme (cytoplasme), le noyau (avec membrane percée de pores, nucléole, chromatine), le réticulum endoplasmique, l'appareil de Golgi et les mitochondries.",
          "Étape 4 : Fonctions énergétiques comparées :\n- Les mitochondries dégradent la matière organique en présence d'oxygène pour produire de l'ATP (respiration cellulaire).\n- Les chloroplastes captent l'énergie lumineuse grâce à la chlorophylle pour synthétiser du glucose et de l'amidon à partir de CO₂ et d'H₂O (photosynthèse)."
        ],
        "conclusion": "La cellule A est animale (caractérisée par le centrosome) et la cellule B est végétale (caractérisée par la paroi cellulosique, les chloroplastes et la grande vacuole centrale)."
      },
      "exercises": [
        {
          "id": "svt_2c_c8_p1_q1",
          "prompt": "Quel organite cellulaire est le siège exclusif de la photosynthèse chez les végétaux ?",
          "options": [
            "Le chloroplaste",
            "La mitochondrie",
            "Le centrosome",
            "L'appareil de Golgi"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les chloroplastes renferment la chlorophylle et sont les seuls organites où se déroule la photosynthèse chez les cellules végétales autotrophes.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p1_q2",
          "prompt": "Quel constituant cellulaire est présent spécifiquement chez la cellule animale et absent chez la cellule végétale supérieure ?",
          "options": [
            "Le centrosome (composé de centrioles)",
            "L'appareil de Golgi",
            "Le réticulum endoplasmique lisse",
            "L'enveloppe nucléaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le centrosome (formé de deux centrioles perpendiculaires) est spécifique des cellules animales et intervient dans la formation des asters et du fuseau mitotique.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p1_q3",
          "prompt": "Quelle est la fonction biologique principale des mitochondries présentes dans les cellules eucaryotes ?",
          "options": [
            "La production d'énergie cellulaire sous forme d'ATP par respiration cellulaire",
            "La synthèse des glucides par fixation du dioxyde de carbone",
            "Le stockage exclusif des ions calcium dans le cytoplasme",
            "La fabrication des pigments anthocyaniques de la vacuole"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les mitochondries sont les centrales énergétiques de la cellule : elles réalisent la respiration cellulaire en oxydant les nutriments pour produire de l'ATP.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p1_q4",
          "prompt": "Comment appelle-t-on le réticulum endoplasmique lorsqu'il est tapissé de ribosomes à sa surface externe ?",
          "options": [
            "Le réticulum endoplasmique granuleux (REG) ou ergastoplasme",
            "Le réticulum endoplasmique lisse (REL)",
            "Le dictyosome de l'appareil de Golgi",
            "Le centrosome péricentriolaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ergastoplasme ou REG (réticulum endoplasmique granuleux) porte des ribosomes sur sa face cytosolique, lui conférant un aspect granuleux dédié à la synthèse des protéines.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p1_q5",
          "prompt": "Quel rôle assure la paroi pectocellulosique (ou squelettique) de la cellule végétale ?",
          "options": [
            "Elle confère rigidité mécanique, forme géométrique définie et protection contre l'éclatement osmotique",
            "Elle absorbe directement les photons lumineux pour produire de l'oxygène",
            "Elle stocke la totalité de l'information génétique cellulaire",
            "Elle remplace la membrane plasmique qui est absente chez les végétaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La paroi pectocellulosique rigide externe protège la cellule végétale, maintient sa forme polyédrique et empêche son éclatement lorsque la vacuole est en turgescence.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p1_q6",
          "prompt": "Par où s'effectuent les échanges de macromolécules (comme les ARNm) entre le nucléoplasme et le cytoplasme ?",
          "options": [
            "Par les pores nucléaires situés sur l'enveloppe nucléaire",
            "Par les crêtes mitochondriales",
            "Par les thylakoïdes des chloroplastes",
            "Par invagination directe des centrioles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'enveloppe nucléaire est une double membrane percée d'orifices protéiques appelés pores nucléaires qui régulent les flux entre noyau et cytoplasme.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p1_q7",
          "prompt": "Quel groupe d'organites constitue l'appareil de Golgi ?",
          "options": [
            "Des empilements de saccules aplatis discoïdes appelés dictyosomes associés à des vésicules de sécrétion",
            "Une matrice liquide homogène sans membrane bordante",
            "Un réseau filamenteux d'actine et de myosine",
            "Des cylindres protéiques formés de 9 triplets de microtubules"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'appareil de Golgi est formé d'un ou plusieurs dictyosomes (saccules membranaires superposés) bourgeonnant des vésicules de transport et de sécrétion.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p1_q8",
          "prompt": "La grande vacuole centrale de la cellule végétale a pour rôle primordial de :",
          "options": [
            "Accumuler l'eau et les solutés pour maintenir la pression de turgescence et la rigidité cellulaire",
            "Synthétiser les acides nucléiques de l'ADN génomique",
            "Assurer la respiration anaérobie stricte en l'absence de mitochondries",
            "Produire la paire de centrioles lors de la division cellulaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La turgescence vacuolaire exerce une pression hydrostatique interne contre la paroi cellulosique, permettant le port dressé des tiges et feuilles des plantes herbacées.",
          "type": "mcq"
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch8_p2_equipement_chromosomique_caryotype",
      "order": 2,
      "title": "Équipement chromosomique, caryotype et garniture des espèces",
      "summary": "Analyser un caryotype humain ou animal, distinguer autosomes et gonosomes, définir la diploïdie et l'haploïdie, et comparer les formules chromosomiques.",
      "conceptExplanation": "1. Définition et principe du caryotype :\nLe caryotype (ou équipement chromosomique) est la photographie ou la représentation ordonnée de l'ensemble des chromosomes d'une cellule, bloqués en métaphase (stade où ils sont le plus condensés et visibles), puis découpés et classés par paires homologues par ordre de taille et de forme décroissantes (selon la position du centromère : métacentrique, submétacentrique, acrocentrique).\n\n2. Organisation chromosomique chez l'espèce humaine :\n- Les cellules somatiques humaines (toutes les cellules du corps sauf les gamètes) renferment 46 chromosomes répartis en 23 paires d'homologues :\n  * 22 paires de chromosomes identiques chez les deux sexes, appelés autosomes (ou chromosomes non sexuels).\n  * 1 paire de chromosomes sexuels appelés gonosomes, hétérochromosomes ou hétérosomes, responsables de la détermination génétique du sexe de l'individu :\n    - Chez la femme : deux chromosomes sexuels identiques et de grande taille, notés XX. La formule chromosomique s'écrit : 2n = 44 autosomes + XX (ou 2n = 46, XX).\n    - Chez l'homme : deux chromosomes sexuels dissemblables (un grand X et un petit Y), notés XY. La formule chromosomique s'écrit : 2n = 44 autosomes + XY (ou 2n = 46, XY).\n\n3. Diploïdie versus Haploïdie :\n- Cellule diploïde (notée 2n) : cellule dont chaque type de chromosome est présent en deux exemplaires (une paire de chromosomes homologues : l'un d'origine paternelle, l'autre d'origine maternelle). Chez l'Homme, 2n = 46.\n- Cellule haploïde (notée n) : cellule ne contenant qu'un seul exemplaire de chaque paire de chromosomes. Ce sont exclusivement les cellules sexuelles ou gamètes (spermatozoïdes et ovules) issues de la méiose. Chez l'Homme, n = 23 (soit 22 autosomes + X dans l'ovule ; 22 autosomes + X OU 22 autosomes + Y dans le spermatozoïde).\n\n4. Spécificité de l'équipement chromosomique selon les espèces :\nLe nombre de chromosomes est une constante caractéristique et fixe pour chaque espèce vivante :\n- Espèces animales :\n  * Homme : 2n = 46 chromosomes (23 paires)\n  * Gorille / Chimpanzé : 2n = 48 chromosomes (24 paires)\n  * Chien : 2n = 78 chromosomes (39 paires)\n  * Vache : 2n = 60 chromosomes (30 paires)\n  * Drosophile (mouche du vinaigre) : 2n = 8 chromosomes (4 paires)\n- Espèces végétales :\n  * Oignon : 2n = 16 chromosomes (8 paires)\n  * Maïs : 2n = 20 chromosomes (10 paires)\n  * Riz : 2n = 24 chromosomes (12 paires)\n  * Pomme de terre : 2n = 48 chromosomes (24 paires)\nRemarque importante : le nombre de chromosomes ne reflète ni la complexité de l'organisme, ni sa taille, mais constitue sa carte génétique spécifique.",
      "formulas": [
        {
          "name": "Formule chromosomique humaine femelle (diploïde)",
          "formula": "2n = 44 autosomes + XX = 46 chromosomes",
          "note": "23 paires d'homologues parfaits."
        },
        {
          "name": "Formule chromosomique humaine mâle (diploïde)",
          "formula": "2n = 44 autosomes + XY = 46 chromosomes",
          "note": "22 paires d'autosomes + 1 paire hétéromorphe XY."
        },
        {
          "name": "Formule des gamètes humains (haploïdes)",
          "formula": "n = 22 autosomes + X (ovocyte) ou n = 22 autosomes + X / Y (spermatozoïde)",
          "note": "Moitié exacte du patrimoine chromosomique somatique."
        }
      ],
      "keyRule": "UNE CELLULE DIPLOÏDE POSSÈDE 2n CHROMOSOMES GROUPÉS PAR PAIRES HOMOLOGUES (cellules somatiques). Une cellule haploïde possède n chromosomes isolés (gamètes). Le caryotype humain comporte 46 chromosomes : 44 autosomes + XX chez la femme, et 44 autosomes + XY chez l'homme.",
      "workedExample": {
        "title": "Exemple résolu : Détermination du sexe et de la formule chromosomique à partir d'un caryotype",
        "statement": "Le caryotype d'un nouveau-né montre 23 paires de chromosomes distincts. Les 22 premières paires sont formées de chromosomes homologues de taille décroissante. La 23e paire est composée d'un grand chromosome métacentrique et d'un petit chromosome acrocentrique très court.\n1. Déterminer si ce caryotype est celui d'une cellule diploïde ou haploïde.\n2. Identifier la nature de la 23e paire et déduire le sexe de l'enfant.\n3. Écrire la formule chromosomique complète de cet individu.\n4. Préciser le nombre de chromosomes que contiendront ses futurs gamètes.",
        "methodSteps": [
          "Étape 1 : Diploïdie ou haploïdie :\nLes chromosomes sont regroupés deux par deux en paires homologues : la cellule est donc diploïde (2n).",
          "Étape 2 : Analyse de la 23e paire :\nLa 23e paire est formée de deux chromosomes de morphologie différente : un grand X et un petit Y. Il s'agit des gonosomes XY. L'individu est donc de sexe masculin.",
          "Étape 3 : Formule chromosomique :\nOn compte 44 autosomes (22 paires) et 2 gonosomes XY, soit 2n = 44A + XY = 46 chromosomes.",
          "Étape 4 : Équipement des futurs gamètes :\nLes gamètes (spermatozoïdes) seront haploïdes et contiendront n = 23 chromosomes (soit 22A + X, soit 22A + Y après méiose)."
        ],
        "conclusion": "Il s'agit d'un enfant de sexe masculin de caryotype normal 2n = 44A + XY (46 chromosomes)."
      },
      "exercises": [
        {
          "id": "svt_2c_c8_p2_q1",
          "prompt": "Combien de chromosomes possède une cellule somatique humaine normale ?",
          "options": [
            "46 chromosomes (23 paires)",
            "23 chromosomes simples",
            "48 chromosomes (24 paires)",
            "44 chromosomes au total"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les cellules somatiques de l'Homme sont diploïdes avec 2n = 46 chromosomes, soit 23 paires.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p2_q2",
          "prompt": "Quelle est la formule chromosomique d'une femme normale ?",
          "options": [
            "2n = 44 autosomes + XX",
            "2n = 44 autosomes + XY",
            "n = 22 autosomes + XX",
            "2n = 46 autosomes + XX"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une femme possède 22 paires d'autosomes (44 autosomes) et une paire de gonosomes identiques XX, soit 2n = 44A + XX = 46.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p2_q3",
          "prompt": "Comment appelle-t-on les chromosomes qui ne participent pas à la détermination du sexe ?",
          "options": [
            "Les autosomes (ou chromosomes non sexuels)",
            "Les gonosomes (ou hétérosomes)",
            "Les centrioles",
            "Les nucléofilaments"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les autosomes désignent tous les chromosomes non sexuels (les 22 premières paires chez l'humain).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p2_q4",
          "prompt": "Qu'est-ce qu'une cellule haploïde (notée n) ?",
          "options": [
            "Une cellule ne contenant qu'un seul exemplaire de chaque paire de chromosomes",
            "Une cellule contenant les chromosomes associés deux à deux par paires",
            "Une cellule végétale dénuée de noyau délimité",
            "Une cellule sanguine anucléée comme l'hématie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une cellule haploïde (comme un spermatozoïde ou un ovule) ne possède qu'un seul exemplaire de chaque chromosome, soit n chromosomes.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p2_q5",
          "prompt": "À quel stade de la mitose réalise-t-on le caryotype et pourquoi ?",
          "options": [
            "En métaphase, car les chromosomes présentent leur condensation maximale et sont parfaitement individualisés",
            "En interphase, car l'ADN est totalement décondensé sous forme de chromatine diffuse",
            "En télophase, car la membrane nucléaire vient juste de réapparaître",
            "Au début de la prophase, car les centrioles ne sont pas encore séparés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est en métaphase que les chromosomes sont les plus courts, les plus condensés et les plus distinctement visibles au microscope optique.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p2_q6",
          "prompt": "Combien de chromosomes possède la drosophile (mouche du vinaigre) dans ses cellules somatiques diploïdes ?",
          "options": [
            "2n = 8 chromosomes (4 paires)",
            "2n = 16 chromosomes (8 paires)",
            "2n = 46 chromosomes (23 paires)",
            "2n = 4 chromosomes (2 paires)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La drosophile possède un caryotype simple bien connu en génétique avec 2n = 8 chromosomes (3 paires d'autosomes et 1 paire de gonosomes).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p2_q7",
          "prompt": "Dans l'espèce humaine, lequel des deux gamètes détermine le sexe génétique de l'enfant à la fécondation ?",
          "options": [
            "Le spermatozoïde, car il peut apporter soit un chromosome X (donnant une fille XX), soit un chromosome Y (donnant un garçon XY)",
            "L'ovule, car il peut contenir indifféremment un chromosome X ou un chromosome Y",
            "Les deux gamètes à part égale car ils possèdent chacun un chromosome Y",
            "Aucun des deux, le sexe dépend uniquement de la température utérine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ovule apporte toujours un chromosome X. C'est le spermatozoïde fécondant qui détermine le sexe génétique : s'il apporte X, l'œuf est XX (femelle) ; s'il apporte Y, l'œuf est XY (mâle).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c8_p2_q8",
          "prompt": "Chez le riz (Oryza sativa), une cellule de racine possède 2n = 24 chromosomes. Combien de chromosomes contient un grain de pollen (gamétophyte mâle haploïde) de cette même plante ?",
          "options": [
            "n = 12 chromosomes",
            "n = 24 chromosomes",
            "2n = 48 chromosomes",
            "n = 6 chromosomes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les cellules somatiques racinaires sont diploïdes (2n = 24). Les grains de pollen contiennent des cellules haploïdes possédant la moitié des chromosomes, soit n = 24 / 2 = 12.",
          "type": "mcq"
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 9 : LA DIVISION CELLULAIRE (MITOSE)
// ============================================================================
export const svt2deCDivisionCellulaireMitoseChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch9_division_cellulaire_mitose",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 9,
  "officialVolumeHours": 4,
  "title": "Leçon 9 — La division cellulaire",
  "summary": "Description chronologique détaillée des 4 étapes de la mitose (Prophase, Métaphase, Anaphase, Télophase), mécanisme de cytodiérèse (étranglement chez l'animal vs paroi chez le végétal) et importance biologique (croissance, renouvellement cellulaire, conservation du caryotype).",
  "points": [
    {
      "id": "seconde_c_svt_ch9_p1_etapes_mitose_cytodierese",
      "order": 1,
      "title": "Les étapes chronologiques de la mitose et la cytodiérèse",
      "summary": "Décrire les modifications cytologiques et chromosomiques au cours de la prophase, métaphase, anaphase et télophase, et comparer la division cytoplasmique animale et végétale.",
      "conceptExplanation": "1. Définition de la mitose :\nLa mitose est un mode de division cellulaire par lequel une cellule mère donne naissance à deux cellules filles strictement identiques entre elles et identiques à la cellule mère, conservant intégralement le nombre et la structure des chromosomes (2n → 2n).\n\n2. Déroulement chronologique des 4 phases de la mitose :\n\nA. La Prophase (phase la plus longue) :\n- Le noyau cellulaire gonfle.\n- La chromatine se condense progressivement par spiralisation et enroulement serré pour former des chromosomes individualisés visibles au microscope optique. Chaque chromosome apparaît constitué de deux chromatides sœurs réunies au niveau du centromère.\n- Le centrosome se divise en deux centrosomes fils qui migrent chacun vers un pôle opposé de la cellule, entourés de microtubules rayonnants appelés asters (chez la cellule animale). Chez la cellule végétale (dépourvue de centrioles), le fuseau s'organise à partir de calottes polaires.\n- Entre les deux pôles s'édifie le fuseau achromatique (fuseau de division composé de microtubules).\n- À la fin de la prophase, l'enveloppe nucléaire se fragmente et disparaît, et les nucléoles s'estompent.\n\nB. La Métaphase (phase courte et d'alignement) :\n- Les chromosomes atteignent leur niveau maximal de condensation.\n- Les microtubules kinétochoriens du fuseau s'attachent aux centromères des chromosomes.\n- Sous l'action des forces mécaniques du fuseau, tous les centromères s'alignent dans le plan équatorial médian de la cellule, formant la plaque équatoriale.\n\nC. L'Anaphase (phase brève de séparation polaire) :\n- Le centromère de chaque chromosome se clive longitudinalement en deux.\n- Les deux chromatides sœurs de chaque chromosome se séparent et deviennent deux chromosomes simples indépendants (à 1 seule chromatide).\n- Grâce au raccourcissement des microtubules kinétochoriens, deux lots quantitativement et qualitativement identiques de chromosomes simples migrent en sens opposé vers les deux pôles de la cellule : c'est l'ascension polaire.\n\nD. La Télophase (phase finale de reconstruction) :\n- Les deux lots de chromosomes simples atteignent les pôles respectifs.\n- Les chromosomes perdent leur individualité en se décondensant (déspiralisation) pour redevenir un réseau diffus de chromatine.\n- Le fuseau achromatique se désagrège et disparaît.\n- Une nouvelle enveloppe nucléaire se reconstitue autour de chaque lot de chromatine, et les nucléoles réapparaissent. La caryodiérèse (division du noyau) est achevée : la cellule possède temporairement 2 noyaux fils.\n\n3. La Cytodiérèse (division du cytoplasme) :\n- Chez la cellule animale : séparation par étranglement circulaire équatorial (sillon de clivage) resserré par un anneau contractile d'actine et de myosine, qui pince la cellule jusqu'à scission complète.\n- Chez la cellule végétale : en raison de la rigidité de la paroi externe, il ne peut y avoir d'étranglement. Des vésicules golgiennes fusionnent au centre pour former un phragmoplaste qui s'étend de façon centrifuge du centre vers la périphérie, édifiant une nouvelle paroi pectocellulosique séparant les deux cellules filles.",
      "formulas": [
        {
          "name": "Bilan chromosomique de la mitose",
          "formula": "1 cellule mère (2n chromosomes à 2 chromatides) → 2 cellules filles (2n chromosomes à 1 chromatide)",
          "note": "Reproduction strictement conforme du patrimoine génétique."
        },
        {
          "name": "Ordre chronologique mnémotechnique des phases",
          "formula": "P - M - A - T : Prophase → Métaphase → Anaphase → Télophase",
          "note": "Suivie immédiatement par la cytodiérèse (scission cytoplasmique)."
        }
      ],
      "keyRule": "L'ANAPHASE EST L'ÉTAPE CLÉ DE SÉPARATION : le clivage des centromères transforme chaque chromosome double à 2 chromatides en 2 chromosomes simples à 1 chromatide, permettant la migration polaire de deux lots rigoureusement identiques. La cytodiérèse s'effectue par étranglement chez l'animal et par édification d'une nouvelle paroi chez le végétal.",
      "workedExample": {
        "title": "Exemple résolu : Identification et ordonnancement d'étapes de la mitose chez l'oignon",
        "statement": "Dans une racine d'oignon (Allium cepa, 2n = 16), on observe 4 cellules au microscope :\n- Cellule 1 : les centromères sont tous disposés dans le plan central de la cellule.\n- Cellule 2 : deux lots de 16 filaments simples s'écartent vers les deux pôles cellulaires opposés.\n- Cellule 3 : l'enveloppe nucléaire a disparu, les chromosomes doubles courts deviennent très distincts.\n- Cellule 4 : deux noyaux se reforment, séparés au milieu par une ébauche de paroi pectocellulosique.\n1. Identifier la phase mitotique observée dans chaque cellule.\n2. Remettre ces 4 cellules dans l'ordre chronologique de la mitose.\n3. Indiquer le nombre de chromosomes présents dans chacune des cellules filles formées.",
        "methodSteps": [
          "Étape 1 : Diagnostic des étapes :\n- Cellule 1 : alignement des centromères sur le plan équatorial = Métaphase (plaque équatoriale).\n- Cellule 2 : clivage des centromères et migration des chromatides vers les pôles = Anaphase (ascension polaire).\n- Cellule 3 : condensation des chromosomes et disparition de la membrane nucléaire = Prophase.\n- Cellule 4 : reformation des noyaux et édification d'une paroi médiane = Télophase avec cytodiérèse végétale.",
          "Étape 2 : Ordre chronologique naturel :\nL'ordre est Prophase (Cellule 3) → Métaphase (Cellule 1) → Anaphase (Cellule 2) → Télophase (Cellule 4).",
          "Étape 3 : Nombre de chromosomes dans les cellules filles :\nLa mitose étant une division conforme, chaque cellule fille contiendra exactement le même nombre de chromosomes que la cellule mère, soit 2n = 16 chromosomes simples."
        ],
        "conclusion": "L'ordre mitotique est Cellule 3 (P) → Cellule 1 (M) → Cellule 2 (A) → Cellule 4 (T), conservant 2n = 16 chromosomes par cellule."
      },
      "exercises": [
        {
          "id": "svt_2c_c9_p1_q1",
          "prompt": "À quelle étape de la mitose observe-t-on le regroupement de tous les chromosomes sur la plaque équatoriale ?",
          "options": [
            "À la métaphase",
            "À la prophase",
            "À l'anaphase",
            "À la télophase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La métaphase se caractérise par l'alignement des centromères des chromosomes condensés dans le plan équatorial médian de la cellule.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p1_q2",
          "prompt": "Quel événement cytologique fondamental marque le début de l'anaphase ?",
          "options": [
            "Le clivage longitudinal des centromères et la séparation des deux chromatides sœurs",
            "La disparition de l'enveloppe nucléaire et des nucléoles",
            "L'alignement des chromosomes le long du fuseau achromatique",
            "La formation de la nouvelle paroi pectocellulosique médiane"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'anaphase commence précisément lorsque chaque centromère se clive en deux, permettant aux chromatides sœurs de se séparer et de migrer vers les pôles opposés.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p1_q3",
          "prompt": "Comment se déroule la cytodiérèse (division du cytoplasme) dans une cellule animale ?",
          "options": [
            "Par un sillon d'étranglement circulaire équatorial qui resserre le cytoplasme de l'extérieur vers l'intérieur",
            "Par formation centrifuge d'une paroi squelettique rigide à partir de vésicules",
            "Par décomposition enzymatique spontanée de la membrane plasmique",
            "Par invagination du réticulum endoplasmique lisse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chez la cellule animale souple (sans paroi), la cytodiérèse a lieu par étranglement équatorial progressif resserré par un anneau contractile cytosquelettique.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p1_q4",
          "prompt": "Par quoi est assurée la formation des deux pôles du fuseau de division chez la cellule végétale ?",
          "options": [
            "Par les calottes polaires (en l'absence de centrosomes/centrioles)",
            "Par les asters rayonnants issus des centrioles",
            "Par les thylakoïdes des chloroplastes",
            "Par les pores de l'enveloppe nucléaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les cellules des végétaux supérieurs ne possèdent pas de centrosome ni de centrioles ; leur fuseau mitotique s'organise à partir de calottes polaires denses.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p1_q5",
          "prompt": "À quelle phase de la mitose l'enveloppe nucléaire et les nucléoles réapparaissent-ils ?",
          "options": [
            "À la télophase",
            "À la prophase",
            "À l'anaphase",
            "À la métaphase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En télophase, les deux lots de chromosomes se décondensent et une nouvelle enveloppe nucléaire se reforme autour de chaque noyau fils, avec réapparition des nucléoles.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p1_q6",
          "prompt": "Quel est l'aspect d'un chromosome lors de la prophase et de la métaphase ?",
          "options": [
            "Il est formé de 2 chromatides sœurs identiques unies par un centromère",
            "Il est formé d'une seule chromatide simple déspiralisée",
            "Il est fragmenté en quatre morceaux indépendants sans centromère",
            "Il forme une boucle circulaire continue dépourvue de protéines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Durant la prophase et la métaphase, le chromosome est dédoublé et composé de deux chromatides sœurs réunies au centromère suite à la réplication de l'ADN en interphase.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p1_q7",
          "prompt": "Lequel de ces ordres chronologiques décrit exactement la succession des phases de la mitose ?",
          "options": [
            "Prophase → Métaphase → Anaphase → Télophase",
            "Métaphase → Prophase → Télophase → Anaphase",
            "Anaphase → Télophase → Prophase → Métaphase",
            "Prophase → Anaphase → Métaphase → Télophase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La mitose se déroule rigoureusement selon l'ordre : Prophase (condensation), Métaphase (alignement), Anaphase (séparation polaire), Télophase (reconstitution).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p1_q8",
          "prompt": "Lorsqu'une cellule mère humaine diploïde (2n = 46) termine sa mitose, que contiennent chacune des deux cellules filles formées ?",
          "options": [
            "46 chromosomes simples à 1 chromatide (2n = 46)",
            "23 chromosomes simples (n = 23)",
            "46 chromosomes doubles à 2 chromatides",
            "92 chromosomes simples"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À la fin de la mitose, chaque cellule fille reçoit 46 chromosomes simples à 1 chromatide. La diploïdie (2n = 46) est parfaitement conservée.",
          "type": "mcq"
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch9_p2_importance_biologique_mitose",
      "order": 2,
      "title": "Rôle et importance biologique de la mitose pour les organismes vivants",
      "summary": "Comprendre les rôles majeurs de la mitose : reproduction conforme, croissance des tissus, renouvellement cellulaire et maintien de l'intégrité du patrimoine héréditaire.",
      "conceptExplanation": "1. La mitose, mécanisme de reproduction conforme :\n- La mitose garantit la transmission intégrale et rigoureusement fidèle de l'information génétique d'une cellule mère aux deux cellules filles.\n- Toutes les cellules d'un organisme pluricellulaire (environ 10¹⁴ cellules chez l'Homme adulte) dérivent par mitoses successives d'une unique cellule initiale : la cellule-œuf (zygote). Elles possèdent toutes le même programme génétique et le même caryotype (46 chromosomes chez l'humain).\n\n2. Les grands rôles de la mitose dans l'organisme :\nA. Le développement embryonnaire et la croissance :\n- À partir de la fécondation, la multiplication exponentielle des cellules permet à l'embryon puis au fœtus et à l'enfant de grandir et de construire l'ensemble de ses organes.\n- Chez les végétaux supérieurs (plantes à fleurs), la croissance est continue grâce à des zones tissulaires spécialisées appelées méristèmes (situés à l'apex des tiges et à la pointe des racines) où les cellules se divisent indéfiniment par mitoses.\n\nB. Le renouvellement cellulaire et la maintenance des tissus usés :\n- Dans un organisme adulte, de nombreuses cellules s'usent, meurent ou sont éliminées quotidiennement. La mitose compense exactement ces pertes pour maintenir l'intégrité fonctionnelle des tissus :\n  * Chez l'Homme, environ 200 milliards de globules rouges (hématies) sont renouvelés chaque jour dans la moelle osseuse par mitose des cellules souches érythropoïétiques.\n  * Les cellules de l'épiderme cutané et de la muqueuse intestinale se desquament et se renouvellent intégralement tous les quelques jours grâce aux mitoses de leurs couches basales génératrices.\n\nC. La cicatrisation et la régénération tissulaire :\n- En cas de plaie, brûlure, lésion ou traumatisme, les mitoses des cellules saines périphériques s'accélèrent pour colmater la brèche et régénérer le tissu blessé (cicatrisation).\n\nD. La reproduction asexuée chez les êtres vivants :\n- Chez les organismes unicellulaires (levures, paramécies, amibes), la mitose constitue le mode direct de reproduction de l'espèce par scissiparité (clonage naturel).\n- Chez de nombreux végétaux, elle permet la multiplication végétative naturelle ou artificielle (bouturage, marcottage, tubercules de pomme de terre, rejets de bananier).\n\n3. Ce que la mitose NE FAIT PAS (distinction essentielle avec la méiose et le système immunitaire) :\n- La mitose ne produit PAS les gamètes (c'est la méiose qui réduit le caryotype de 2n à n).\n- La mitose ne défend PAS directement l'organisme contre les agents pathogènes (rôle assuré par le système immunitaire : globules blancs, anticorps, phagocytose), même si la prolifération de lymphocytes stimulés se fait par mitoses.",
      "formulas": [
        {
          "name": "Principe de conservation du patrimoine héréditaire",
          "formula": "Cellule-œuf (2n) —(mitoses successives)→ 10¹⁴ cellules somatiques identiques (2n)",
          "note": "Clonage génétique cellulaire intégral."
        },
        {
          "name": "Équilibre du renouvellement cellulaire somatique",
          "formula": "Taux de mitose (production) = Taux de sénescence / apoptose (perte quotidienne)",
          "note": "Exemple : 200 milliards d'hématies renouvelées par jour chez l'humain."
        }
      ],
      "keyRule": "LA MITOSE EST UNE DIVISION CONFORME QUI CONSERVE INTÉGRALEMENT LE CARYOTYPE. Elle assure la croissance, la cicatrisation, le renouvellement continu des cellules usées (200 milliards d'hématies/jour) et la reproduction asexuée. En revanche, elle ne produit pas les gamètes haploïdes et n'est pas le système de défense immunitaire.",
      "workedExample": {
        "title": "Exemple résolu : Évaluation de situations physiologiques impliquant la mitose",
        "statement": "Une équipe d'élèves de 2nde C au Lycée Moderne de Divo analyse 4 phénomènes biologiques :\na) La formation des spermatozoïdes dans les tubes séminifères.\nb) La fermeture d'une coupure superficielle sur le doigt après 5 jours.\nc) L'élongation racinaire de l'ail cultivé dans l'eau.\nd) Le remplacement quotidien des hématies sénescentes dans la circulation sanguine.\n1. Préciser pour chacune de ces situations si elle relève directement de la mitose.\n2. Justifier la réponse pour chaque cas.",
        "methodSteps": [
          "Étape 1 : Cas a) Production des spermatozoïdes :\nFaux pour l'étape finale haploïde. La fabrication des spermatozoïdes haploïdes (n) à partir de cellules germinales diploïdes nécessite la méiose (bien que les spermatogonies se multiplient au préalable par mitose).",
          "Étape 2 : Cas b) Fermeture d'une plaie cutanée :\nVrai. La cicatrisation résulte de la multiplication active par mitose des cellules épidermiques et fibroblastes pour combler la brèche.",
          "Étape 3 : Cas c) Élongation racinaire de l'ail :\nVrai. La croissance des racines végétales s'effectue au niveau du méristème sub-apical par divisions mitotiques intenses des cellules méristématiques.",
          "Étape 4 : Cas d) Remplacement des hématies usées :\nVrai. La moelle osseuse produit par mitose continue environ 200 milliards de nouvelles cellules sanguines par jour pour compenser les pertes."
        ],
        "conclusion": "Les situations b, c et d sont des manifestations directes de la mitose assurant réparation, croissance et renouvellement cellulaire."
      },
      "exercises": [
        {
          "id": "svt_2c_c9_p2_q1",
          "prompt": "Pourquoi qualifie-t-on la mitose de 'reproduction conforme' ?",
          "options": [
            "Parce qu'elle produit deux cellules filles possédant exactement la même information génétique et le même nombre de chromosomes que la cellule mère",
            "Parce qu'elle réduit systématiquement de moitié le nombre de chromosomes pour féconder un nouvel ovule",
            "Parce qu'elle modifie aléatoirement les gènes pour créer une diversité phénotypique nouvelle",
            "Parce qu'elle produit une seule cellule fille géante à quatre noyaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La mitose est dite conforme car elle préserve scrupuleusement l'intégrité du caryotype et la séquence génétique de la cellule mère dans les deux cellules filles.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p2_q2",
          "prompt": "Chez les végétaux supérieurs, dans quelles zones spécialisées se déroulent les divisions cellulaires mitotiques assurant la croissance ?",
          "options": [
            "Dans les méristèmes situés à l'extrémité des tiges et des racines",
            "Dans les vaisseaux de bois conducteur de sève brute",
            "Dans les stomates des feuilles uniquement",
            "Dans le liber de l'écorce morte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les méristèmes apicaux (caulinaires et radiculaires) sont des massifs de cellules indifférenciées douées d'une activité mitotique intense et indéfinie chez la plante.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p2_q3",
          "prompt": "Combien de globules rouges (hématies) le corps humain adulte remplace-t-il quotidiennement par mitose ?",
          "options": [
            "Environ 200 milliards d'hématies par jour",
            "Environ 200 millions d'hématies par jour",
            "Environ 200 000 hématies par jour",
            "Aucune, les hématies vivent toute la vie de l'individu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La durée de vie d'une hématie est d'environ 120 jours ; l'organisme compense les pertes en renouvelant quotidiennement près de 200 milliards d'hématies dans la moelle osseuse.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p2_q4",
          "prompt": "Laquelle des fonctions suivantes NE relève PAS de la mitose ?",
          "options": [
            "La formation directe des gamètes haploïdes (ovules et spermatozoïdes)",
            "La cicatrisation d'une plaie cutanée",
            "La croissance en taille et en masse de l'enfant",
            "Le renouvellement des cellules de l'épithélium intestinal"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La formation des gamètes haploïdes (n) à partir de cellules souches germinales fait intervenir la méiose (division réductionnelle), et non la mitose.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p2_q5",
          "prompt": "Comment appelle-t-on le processus de réparation des tissus corporels blessés permis par la prolifération mitotique des cellules voisines ?",
          "options": [
            "La cicatrisation",
            "La phagocytose",
            "La méiose réductionnelle",
            "L'hémolyse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La cicatrisation résulte de la multiplication active des cellules saines (fibroblastes, kératinocytes) par mitose pour combler la brèche tissulaire.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p2_q6",
          "prompt": "Toutes les cellules du corps d'un individu adulte possèdent la même information génétique que la cellule-œuf dont elles sont issues. Pourquoi ?",
          "options": [
            "Parce que toutes les divisions cellulaires depuis l'œuf se font par mitoses conformes assurant une réplication et une distribution équitable de l'ADN",
            "Parce que l'organisme fabrique un nouvel ADN à partir des aliments ingérés chaque jour",
            "Parce que le système immunitaire élimine toute cellule contenant un chromosome",
            "Parce que les cellules s'échangent mutuellement des noyaux entiers par les pores nucléaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque mitose transmet une copie exacte du génome initial de la cellule-œuf, ce qui fait que toutes les cellules somatiques d'un individu possèdent le même patrimoine génétique.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p2_q7",
          "prompt": "Quelle est l'importance de la mitose chez les êtres vivants unicellulaires tels que l'amibe ou la levure ?",
          "options": [
            "Elle constitue leur mode de reproduction asexuée assurant la multiplication de l'espèce par scissiparité",
            "Elle leur permet d'abandonner leur noyau pour se déplacer plus vite",
            "Elle sert exclusivement à synthétiser la chlorophylle",
            "Elle provoque systématiquement la mort programmée de l'individu sans descendance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chez les unicellulaires, la mitose suivie de cytodiérèse donne naissance à deux individus indépendants : c'est la reproduction asexuée (scissiparité).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c9_p2_q8",
          "prompt": "Quel est l'effet d'une perturbation du contrôle des mitoses dans un tissu de l'organisme ?",
          "options": [
            "Une prolifération anarchique et incontrôlée de cellules pouvant former une tumeur ou un cancer",
            "Une disparition instantanée de toutes les mitochondries cellulaires",
            "Une transformation spontanée des cellules somatiques en graines végétales",
            "Un arrêt complet et définitif de la respiration cellulaire chez l'espèce entière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lorsque les mécanismes de régulation du cycle cellulaire et des mitoses sont altérés, les cellules se divisent de manière anarchique, conduisant à la formation de tumeurs cancéreuses.",
          "type": "mcq"
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 10 : L'ÉVOLUTION DE L'ÉQUIPEMENT CHROMOSOMIQUE (ADN ET CYCLE CELLULAIRE)
// ============================================================================
export const svt2deCEvolutionEquipementChromosomiqueChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch10_evolution_equipement_chromosomique_adn",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 10,
  "officialVolumeHours": 4,
  "title": "Leçon 10 — L'évolution de l'équipement chromosomique",
  "summary": "Structure moléculaire du chromosome et de l'ADN (nucléofilaments, histones, modèle en double hélice de Watson-Crick, règles de Chargaff), cycle cellulaire (G1, S, G2, M), cinétique du taux d'ADN et réplication semi-conservative catalysée par l'ADN polymérase.",
  "points": [
    {
      "id": "seconde_c_svt_ch10_p1_structure_chromosome_adn_chargaff",
      "order": 1,
      "title": "Structure biochimique du chromosome, histones et modèle de l'ADN de Watson-Crick",
      "summary": "Comprendre l'organisation supramoléculaire du chromosome (nucléofilament, histones), les constituants de l'ADN (nucléotides), les règles d'appariement de Chargaff et la double hélice antiparallèle.",
      "conceptExplanation": "1. Organisation architecturale du chromosome eucaryote :\n- Au microscope électronique, la chromatine et les chromosomes apparaissent formés d'un filament de 10 nm de diamètre appelé nucléofilament.\n- Le nucléofilament résulte de l'enroulement d'un squelette protéique formé de protéines basiques appelées histones (organisées en octamères formant des nucléosomes) autour desquelles s'enroule la molécule d'ADN.\n- Lors de la division cellulaire (mitose), ce nucléofilament subit des surenroulements successifs (spiralisation) pour former le chromosome métaphasique hautement condensé.\n\n2. Composition biochimique de la molécule d'ADN (Acide Désoxyribonucléique) :\nL'hydrolyse enzymatique complète de la molécule d'ADN permet d'isoler trois types de composants élémentaires :\na) De l'acide phosphorique : de formule H₃PO₄.\nb) Un sucre pentose : le désoxyribose (glucide à 5 atomes de carbone, formule C₅H₁₀O₄).\nc) Quatre bases azotées organiques réparties en deux familles chimiques :\n   - Deux bases puriques (à double cycle) : l'Adénine (A) et la Guanine (G).\n   - Deux bases pyrimidiques (à cycle simple) : la Thymine (T) et la Cytosine (C).\n- L'unité structurale de base de l'ADN est le nucléotide, résultant de l'union : 1 molécule d'acide phosphorique + 1 molécule de désoxyribose + 1 base azotée parmi les quatre (A, T, G ou C). Il existe donc 4 types de nucléotides dans l'ADN.\n\n3. Les règles d'équivalence de Chargaff (1950) :\nL'analyse quantitative des bases azotées dans l'ADN de diverses espèces vivantes a révélé que la proportion des bases n'est pas aléatoire :\n- La quantité d'Adénine est toujours strictement égale à celle de Thymine : A = T (soit A / T = 1).\n- La quantité de Guanine est toujours strictement égale à celle de Cytosine : G = C (soit G / C = 1).\n- La somme des bases puriques est égale à la somme des bases pyrimidiques : (A + G) / (T + C) = 1.\nCette égalité fondamentale s'appelle la règle de Chargaff et est universelle chez tous les êtres vivants.\n\n4. Le modèle en double hélice de Watson et Crick (1953) :\n- Grâce aux travaux de cristallographie de Rosalind Franklin et aux règles de Chargaff, James Watson et Francis Crick ont proposé la structure tridimensionnelle de l'ADN :\n  * Molécule bicaténaire : formée de deux chaînes ou brins polynucléotidiques enroulés l'un autour de l'autre en une double hélice régulière de 2 nm de diamètre.\n  * Brins antiparallèles : orientés en sens opposés (l'un dans le sens 5' → 3', l'autre dans le sens 3' → 5').\n  * Complémentarité des bases azotées reliées par des liaisons hydrogène faibles au cœur de l'hélice :\n    - L'Adénine est toujours appariée à la Thymine par 2 liaisons hydrogène (A = T).\n    - La Guanine est toujours appariée à la Cytosine par 3 liaisons hydrogène (G ≡ C).\n- L'ADN est le support universel de l'information génétique chez tous les êtres vivants et est localisé exclusivement dans le noyau chez les eucaryotes (avec de petites fractions dans les mitochondries et chloroplastes).",
      "formulas": [
        {
          "name": "Règles d'équivalence de Chargaff",
          "formula": "A = T  et  G = C  ⟹  (A + G) / (T + C) = 1",
          "note": "Valable pour toute molécule d'ADN bicaténaire double brin."
        },
        {
          "name": "Constitution d'un nucléotide",
          "formula": "Nucléotide = Acide phosphorique (H₃PO₄) + Désoxyribose + Base azotée (A, T, G ou C)",
          "note": "4 nucléotides distincts constituent l'alphabet génétique."
        }
      ],
      "keyRule": "DANS LA MOLÉCULE D'ADN BICATÉNAIRE, L'ADÉNINE S'APPARIE TOUJOURS À LA THYMINE PAR 2 LIAISONS HYDROGÈNE (A=T), ET LA GUANINE S'APPARIE À LA CYTOSINE PAR 3 LIAISONS HYDROGÈNE (G≡C). Par conséquent, le rapport purines/pyrimidines (A+G)/(T+C) vaut obligatoirement 1.",
      "workedExample": {
        "title": "Exemple résolu : Détermination des proportions des bases azotées d'un fragment d'ADN",
        "statement": "L'analyse biochimique d'un fragment d'ADN double brin humain composé de 2 000 paires de bases montre qu'il contient 28 % d'Adénine (A).\n1. En appliquant les règles de Chargaff, calculer le pourcentage de Thymine (T), de Cytosine (C) et de Guanine (G).\n2. Calculer le nombre total de molécules de chaque base azotée dans ce fragment.\n3. Calculer le nombre total de liaisons hydrogène maintenant les deux brins unis.",
        "methodSteps": [
          "Étape 1 : Calcul des pourcentages selon Chargaff :\n- La complémentarité A = T impose : %T = %A = 28 %.\n- Total des bases (A + T) = 28 % + 28 % = 56 %.\n- Le reste correspond aux bases G + C : %G + %C = 100 % - 56 % = 44 %.\n- Puisque G = C : %G = %C = 44 % / 2 = 22 %.",
          "Étape 2 : Nombre absolu de chaque base :\nLe fragment compte 2 000 paires de bases, soit un total de 4 000 nucléotides (bases) :\n- Nombre de A = 4 000 × 0,28 = 1 120 molécules.\n- Nombre de T = 1 120 molécules.\n- Nombre de G = 4 000 × 0,22 = 880 molécules.\n- Nombre de C = 880 molécules.",
          "Étape 3 : Calcul du nombre total de liaisons hydrogène :\n- Entre chaque couple A-T, il y a 2 liaisons hydrogène : 1 120 × 2 = 2 240 liaisons.\n- Entre chaque couple G-C, il y a 3 liaisons hydrogène : 880 × 3 = 2 640 liaisons.\n- Total des liaisons hydrogène = 2 240 + 2 640 = 4 880 liaisons hydrogène."
        ],
        "conclusion": "Le fragment contient 28 % de T, 22 % de G et 22 % de C, totalisant 4 880 liaisons hydrogène assurant la cohésion de la double hélice."
      },
      "exercises": [
        {
          "id": "svt_2c_c10_p1_q1",
          "prompt": "Quelles sont les protéines basiques autour desquelles s'enroule la molécule d'ADN pour former le nucléofilament ?",
          "options": [
            "Les histones",
            "L'actine et la myosine",
            "L'hémoglobine",
            "Le collagène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les histones sont des protéines globulaires basiques qui forment le squelette protéique autour duquel l'ADN s'enroule pour constituer les nucléosomes et le nucléofilament de 10 nm.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p1_q2",
          "prompt": "Quels sont les trois constituants chimiques d'un nucléotide de l'ADN ?",
          "options": [
            "Une molécule d'acide phosphorique, une molécule de désoxyribose et une base azotée",
            "Une molécule d'acide aminé, un glucose et un lipide",
            "Un ribosome, une mitochondrie et un centriole",
            "Un acide chlorhydrique, un ribose et une base uracile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque nucléotide d'ADN résulte de la condensation d'un groupe phosphate (acide phosphorique), d'un sucre désoxyribose et d'une base azotée (A, T, C ou G).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p1_q3",
          "prompt": "Parmi les bases azotées suivantes, lesquelles sont des bases pyrimidiques ?",
          "options": [
            "La Thymine (T) et la Cytosine (C)",
            "L'Adénine (A) et la Guanine (G)",
            "L'Adénine (A) et la Thymine (T)",
            "La Guanine (G) et la Cytosine (C)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les bases pyrimidiques (à cycle simple) de l'ADN sont la Thymine et la Cytosine. L'Adénine et la Guanine sont des bases puriques (à double cycle).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p1_q4",
          "prompt": "D'après les règles de Chargaff, quel rapport est toujours égal à 1 dans une molécule d'ADN bicaténaire ?",
          "options": [
            "(A + G) / (T + C) = 1",
            "(A + T) / (G + C) = 1",
            "(A + C) / (T + C) = 2",
            "A / G = 1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme A = T et G = C, la somme des purines (A+G) égale toujours la somme des pyrimidines (T+C), d'où (A+G)/(T+C) = 1.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p1_q5",
          "prompt": "Combien de liaisons hydrogène unissent la paire Guanine - Cytosine dans la double hélice d'ADN ?",
          "options": [
            "3 liaisons hydrogène (G ≡ C)",
            "2 liaisons hydrogène (G = C)",
            "1 seule liaison covalente",
            "4 liaisons peptidiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La paire G-C est unie par 3 liaisons hydrogène faibles, tandis que la paire A-T est unie par 2 liaisons hydrogène.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p1_q6",
          "prompt": "Qui a établi en 1953 le modèle de la structure en double hélice de l'ADN ?",
          "options": [
            "James Watson et Francis Crick",
            "Gregor Mendel et Charles Darwin",
            "Louis Pasteur et Robert Koch",
            "Antonie van Leeuwenhoek"
          ],
          "correctAnswerIndex": 0,
          "explanation": "James Watson et Francis Crick ont proposé en 1953 le modèle en double hélice bicaténaire antiparallèle de l'ADN (prix Nobel de physiologie ou médecine en 1962).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p1_q7",
          "prompt": "Si un brin d'ADN possède la séquence 5'-A-T-G-C-C-A-3', quelle est la séquence du brin complémentaire antiparallèle 3'-...-5' ?",
          "options": [
            "3'-T-A-C-G-G-T-5'",
            "3'-A-T-G-C-C-A-5'",
            "3'-U-A-C-G-G-U-5'",
            "3'-G-C-A-T-T-G-5'"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par complémentarité des bases (A face à T, et G face à C) : A→T, T→A, G→C, C→G, C→G, A→T, ce qui donne la séquence 3'-T-A-C-G-G-T-5'.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p1_q8",
          "prompt": "Un échantillon d'ADN double brin renferme 35 % de Cytosine. Quel est le pourcentage d'Adénine dans cet échantillon ?",
          "options": [
            "15 % d'Adénine",
            "35 % d'Adénine",
            "30 % d'Adénine",
            "70 % d'Adénine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Si %C = 35 %, alors %G = 35 % (total G+C = 70 %). Le reste (A+T) représente 100 % - 70 % = 30 %. Comme A = T, on a %A = 30 % / 2 = 15 %.",
          "type": "mcq"
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch10_p2_cycle_cellulaire_replication_semi_conservative",
      "order": 2,
      "title": "Cycle cellulaire, cinétique de l'ADN et réplication semi-conservative",
      "summary": "Analyser l'évolution quantitative du taux d'ADN au cours du cycle cellulaire (phases G1, S, G2, M), expliquer la réplication semi-conservative par l'ADN polymérase et corréler l'aspect des chromosomes.",
      "conceptExplanation": "1. Définition et phases du cycle cellulaire :\nUn cycle cellulaire est l'ensemble des événements qu'une cellule traverse entre sa formation par division d'une cellule mère et sa propre division en deux cellules filles. Il comprend deux périodes majeures :\n- L'Interphase : période de préparation et de forte activité métabolique durant laquelle la cellule ne se divise pas. Elle est subdivisée en trois phases successives (G₁, S, G₂) :\n  * Phase G₁ (Gap 1 ou première phase de croissance, 0 à 8 h) : synthèse active de protéines, d'ARN, de lipides et de nouveaux organites. La quantité d'ADN reste constante à une valeur simple Q (soit 7,3 unités arbitraires chez les cellules de mammifère). Les chromosomes sont simples, constitués d'une seule chromatide décondensée filamentaire.\n  * Phase S (Synthèse, 8 à 13 h) : réplication (duplication) de la totalité de l'ADN génomique. La quantité d'ADN augmente progressivement et double, passant de Q à 2Q (de 7,3 à 14,6 ua). Chaque chromosome passe de l'état simple à 1 chromatide à l'état dédoublé à 2 chromatides identiques réunies au centromère.\n  * Phase G₂ (Gap 2 ou deuxième phase de croissance, 13 à 19 h) : poursuite de la synthèse protéique (notamment de tubuline pour le futur fuseau achromatique). La quantité d'ADN reste stable et double à 2Q (14,6 ua). Les chromosomes ont 2 chromatides bien distinctes.\n- La Mitose (phase M, 19 à 20 h) : division du noyau et du cytoplasme. À l'anaphase, le clivage des centromères et la séparation des deux chromatides sœurs divisent la quantité d'ADN par deux : chaque cellule fille retrouve la quantité initiale simple Q (7,3 ua) avec des chromosomes simples à 1 chromatide.\n\n2. Le mécanisme de la réplication semi-conservative de l'ADN :\n- Lors de la phase S, la réplication commence en plusieurs points précis de la molécule d'ADN appelés origines de réplication, formant des « yeux de réplication » encadrés par deux fourches de réplication qui progressent en sens opposés (réplication bidirectionnelle).\n- Une enzyme (l'hélicase) déroule et sépare les deux brins de la double hélice parentale en brisant les liaisons hydrogène entre les bases complémentaires.\n- L'enzyme ADN polymérase se fixe sur chaque brin matrice et catalyse l'assemblage ordonné des désoxyribonucléotides libres présents dans le noyau, base après base, selon la stricte règle de complémentarité (A face à T, C face à G).\n- À l'issue de la réplication, on obtient 2 molécules d'ADN strictement identiques entre elles et identiques à la molécule d'origine.\n- Propriété semi-conservative : dans chaque nouvelle molécule d'ADN obtenue, un des brins est conservé intact de la molécule initiale (brin parental) et l'autre brin est entièrement néoformé (brin nouveau). Ce mode a été démontré par les expériences historiques de Meselson et Stahl (1958).\n\n3. Relation entre taux d'ADN et aspect morphologique du chromosome :\n- En phase G₁ : quantité Q d'ADN → 1 chromosome = 1 nucléofilament = 1 chromatide décondensée.\n- En phase S : transition de Q à 2Q → duplication progressive de chaque chromatide au niveau des fourches de réplication.\n- En phase G₂ et début de mitose (Prophase, Métaphase) : quantité 2Q d'ADN → 1 chromosome = 2 molécules d'ADN identiques = 2 chromatides sœurs réunies au centromère.\n- À l'Anaphase : séparation des chromatides → chaque cellule fille reçoit 1 chromosome simple à 1 chromatide portant une quantité Q d'ADN.",
      "formulas": [
        {
          "name": "Variation de la quantité d'ADN au cours du cycle",
          "formula": "G₁ (Q = 7,3 ua) → S (Q ↗ 2Q) → G₂ (2Q = 14,6 ua) → Mitose (2Q ↘ Q)",
          "note": "Cycle complet rétablissant fidèlement la dotation initiale de la cellule mère."
        },
        {
          "name": "Principe de la réplication semi-conservative",
          "formula": "1 molécule bicaténaire parentale → 2 molécules filles (chacune = 1 brin parental + 1 brin néoformé)",
          "note": "Catalysée par l'ADN polymérase dans les deux sens au niveau des yeux de réplication."
        }
      ],
      "keyRule": "LA QUANTITÉ D'ADN DOUBLE PENDANT LA PHASE S DE L'INTERPHASE (DE Q À 2Q) PAR RÉPLICATION SEMI-CONSERVATIVE, faisant passer chaque chromosome de 1 à 2 chromatides. LA MITOSE RÉDUIT CETTE QUANTITÉ DE MOITIÉ (DE 2Q À Q) À L'ANAPHASE, assurant une transmission strictement équitable et conforme de l'information génétique.",
      "workedExample": {
        "title": "Exemple résolu : Analyse d'un graphique d'évolution de la quantité d'ADN au cours du temps",
        "statement": "Le dosage spectrophotométrique de l'ADN dans une culture de cellules de mammifère donne les résultats suivants :\n- De t = 0 h à t = 10 h : quantité d'ADN constante à 6,6 pg par cellule.\n- De t = 10 h à t = 18 h : la quantité d'ADN s'élève régulièrement de 6,6 pg à 13,2 pg.\n- De t = 18 h à t = 22 h : la quantité d'ADN demeure constante à 13,2 pg.\n- De t = 22 h à t = 23 h : la quantité d'ADN chute brutalement à 6,6 pg par cellule.\n1. Identifier les phases du cycle cellulaire correspondant à chaque intervalle de temps.\n2. Calculer la durée totale d'un cycle cellulaire et de l'interphase.\n3. Décrire l'état morphologique d'un chromosome à t = 5 h puis à t = 20 h.",
        "methodSteps": [
          "Étape 1 : Identification des phases :\n- De 0 à 10 h : quantité constante simple (Q = 6,6 pg) → Phase G₁ de l'interphase (croissance initiale).\n- De 10 à 18 h : doublement de la quantité d'ADN (6,6 à 13,2 pg) → Phase S de l'interphase (réplication de l'ADN).\n- De 18 à 22 h : quantité constante double (2Q = 13,2 pg) → Phase G₂ de l'interphase (préparation mitotique).\n- De 22 à 23 h : chute de moitié (13,2 à 6,6 pg) → Phase M (Mitose avec anaphase et cytodiérèse).",
          "Étape 2 : Durées du cycle et de l'interphase :\n- Durée du cycle cellulaire complet = 23 h - 0 h = 23 heures.\n- Durée de l'interphase (G₁ + S + G₂) = 10 h + 8 h + 4 h = 22 heures.\n- La mitose (M) ne dure qu'une heure (22 h à 23 h).",
          "Étape 3 : Aspect des chromosomes :\n- À t = 5 h (en phase G₁) : chaque chromosome est simple, constitué d'un seul filament d'ADN (1 chromatide) décondensé.\n- À t = 20 h (en phase G₂) : chaque chromosome est dédoublé, constitué de 2 chromatides sœurs identiques unies par leur centromère."
        ],
        "conclusion": "Le cycle cellulaire dure 23 h (22 h d'interphase et 1 h de mitose), alternant phase à 1 chromatide (G₁) et phase à 2 chromatides (G₂/Mitose)."
      },
      "exercises": [
        {
          "id": "svt_2c_c10_p2_q1",
          "prompt": "À quel moment précis du cycle cellulaire la quantité d'ADN double-t-elle par réplication ?",
          "options": [
            "Pendant la phase S de l'interphase",
            "Pendant la phase G₁ de l'interphase",
            "Pendant la métaphase de la mitose",
            "Pendant la cytodiérèse en télophase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est durant la phase S (phase de Synthèse) de l'interphase que la quantité d'ADN double de Q à 2Q grâce à la réplication de l'ADN.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p2_q2",
          "prompt": "Quelle enzyme clé catalyse l'incorporation des nucléotides complémentaires lors de la réplication de l'ADN ?",
          "options": [
            "L'ADN polymérase",
            "L'amylase salivaire",
            "L'ARN ribosomique",
            "L'ATP synthase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ADN polymérase est l'enzyme responsable de la polymérisation des nucléotides complémentaires face à chaque brin matrice lors de la réplication.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p2_q3",
          "prompt": "Pourquoi qualifie-t-on la réplication de l'ADN de 'semi-conservative' ?",
          "options": [
            "Parce que chaque molécule d'ADN fille conserve un brin de la molécule mère initiale et intègre un nouveau brin synthétisé",
            "Parce que la moitié des gènes est définitivement détruite à chaque cycle",
            "Parce que seuls les chromosomes sexuels sont répliqués",
            "Parce que la réplication n'a lieu qu'une fois sur deux générations cellulaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle est dite semi-conservative car dans chaque double hélice fille, un brin parental ancien est conservé et sert de guide à la synthèse du brin néoformé.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p2_q4",
          "prompt": "Quelles sont les trois phases successives qui composent l'interphase ?",
          "options": [
            "Phase G₁ → Phase S → Phase G₂",
            "Prophase → Métaphase → Anaphase",
            "Phase G₁ → Phase M → Phase G₂",
            "Phase S → Phase G₁ → Mitose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'interphase comprend successivement la phase G₁ (croissance pré-synthétique), la phase S (synthèse/réplication de l'ADN) et la phase G₂ (croissance post-synthétique).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p2_q5",
          "prompt": "Combien de chromatides possède un chromosome pendant la phase G₁ du cycle cellulaire ?",
          "options": [
            "1 seule chromatide (chromosome simple)",
            "2 chromatides sœurs réunies au centromère",
            "4 chromatides condensées",
            "Aucune chromatide, l'ADN n'existe pas en G₁"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En phase G₁, avant la réplication S, chaque chromosome est simple et ne contient qu'une seule molécule d'ADN (1 seule chromatide).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p2_q6",
          "prompt": "À quelle étape de la mitose la quantité d'ADN par cellule chute-t-elle de 2Q à Q ?",
          "options": [
            "À l'anaphase, lors du clivage des centromères et de la séparation des chromatides",
            "À la prophase, lors de la spiralisation de la chromatine",
            "À la métaphase, lors de la formation de la plaque équatoriale",
            "Pendant toute la phase G₂"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La séparation des chromatides sœurs à l'anaphase et leur distribution vers les pôles opposés divise par deux la quantité d'ADN attribuée à chaque future cellule fille (passage de 2Q à Q).",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p2_q7",
          "prompt": "Comment se déroule la réplication de l'ADN au niveau des yeux de réplication ?",
          "options": [
            "Elle progresse dans les deux sens de manière bidirectionnelle au niveau des deux fourches de réplication",
            "Elle démarre uniquement à une extrémité du chromosome pour aller jusqu'à l'autre bout",
            "Elle se déroule exclusivement dans un seul sens unidirectionnel",
            "Elle s'arrête immédiatement après l'incorporation de 10 nucléotides"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans chaque œil de réplication, deux fourches progressent en sens opposés (réplication bidirectionnelle), ce qui permet de répliquer rapidement les très longues molécules d'ADN eucaryote.",
          "type": "mcq"
        },
        {
          "id": "svt_2c_c10_p2_q8",
          "prompt": "Si une cellule en phase G₁ contient 7,3 unités arbitraires d'ADN, quelle quantité d'ADN contiendra une de ses cellules en métaphase ?",
          "options": [
            "14,6 unités arbitraires d'ADN (2Q)",
            "7,3 unités arbitraires d'ADN (Q)",
            "3,65 unités arbitraires d'ADN (Q/2)",
            "29,2 unités arbitraires d'ADN (4Q)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Après avoir traversé la phase S en interphase, la quantité d'ADN a doublé (2Q). En prophase et métaphase, la cellule contient donc 2 × 7,3 = 14,6 ua d'ADN.",
          "type": "mcq"
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 11 : L'ABSORPTION DE L'EAU PAR LA PLANTE
// ============================================================================
export const svt2deCAbsorptionEauPlanteChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch11_absorption_eau_plante",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 11,
  "officialVolumeHours": 4,
  "title": "Leçon 11 — L'absorption de l'eau par la plante",
  "summary": "Structure cytologique du poil absorbant, mise en évidence de l'absorption hydrique racinaire (zone pilifère), états de turgescence et de plasmolyse, et mécanisme biophysique de l'osmose (loi de Van 't Hoff, osmomètre de Dutrochet et calcul de la pression osmotique).",
  "points": [
    {
      "id": "seconde_c_svt_ch11_p1_poil_absorbant_turgescence_plasmolyse",
      "order": 1,
      "title": "Structure du poil absorbant, zone d'absorption et états de turgescence/plasmolyse",
      "summary": "Identifier la zone pilifère racinaire, décrire l'ultrastructure du poil absorbant et expliquer les états cellulaires de turgescence et de plasmolyse selon la concentration du milieu externe.",
      "conceptExplanation": "1. Mise en évidence de la zone d'absorption racinaire :\n- Lorsqu'on place une jeune racine de plantule dans un tube à essai contenant de l'eau surmontée d'huile minérale imperméable :\n  * Si seule la zone pilifère (recouverte de poils absorbants) est immergée dans l'eau, la plante absorbe l'eau et continue sa croissance normale.\n  * Si la zone pilifère est immergée dans l'huile (tandis que la coiffe et la zone subéreuse sont dans l'eau), la plante fane et se dessèche rapidement.\n- Conclusion : L'absorption de l'eau et des sels minéraux s'effectue exclusivement au niveau de la zone pilifère de la racine.\n\n2. Organisation cytologique du poil absorbant :\n- Le poil absorbant est une cellule végétale vivante géante allongée (longueur de 1 à 2 mm, diamètre de 10 à 15 µm), issue du prolongement latéral d'une cellule épidermique de l'assise pilifère racinaire.\n- Constituants principaux :\n  * Une paroi pectocellulosique externe fine et très perméable à l'eau et aux solutés.\n  * Une membrane plasmique mince sous-jacente semi-perméable.\n  * Un cytoplasme réduit repoussé en une fine couche périphérique le long de la paroi.\n  * Un noyau unique, souvent allongé et excentré à l'extrémité du poil.\n  * Une immense vacuole centrale remplie de suc vacuolaire (solution aqueuse riche en sels minéraux, acides organiques et sucres, développant une forte pression osmotique interne).\n\n3. Comportement de la cellule végétale selon la concentration du milieu :\nA. En milieu hypotonique (milieu externe moins concentré que le suc vacuolaire, ex : eau distillée) :\n- L'eau pénètre massivement dans la cellule vers la vacuole par osmose.\n- La vacuole gonfle considérablement et s'éclaircit (dilution des pigments).\n- Le cytoplasme et la membrane plasmique sont fortement plaqués contre la paroi rigide externe.\n- La cellule est dite en état de turgescence (la pression hydrostatique interne équilibre la tension de la paroi cellulosique inextensible).\n\nB. En milieu hypertonique (milieu externe plus concentré que le suc vacuolaire, ex : solution de NaCl ou saccharose concentrée) :\n- L'eau quitte la cellule et diffuse vers le milieu extérieur par osmose.\n- La vacuole se rétracte, diminue de volume et se concentre (coloration intense).\n- Le cytoplasme se rétracte et la membrane plasmique se décolle de la paroi cellulosique, ne restant attachée que par de fins ponts appelés tractus cytoplasmiques (ou plasmodesmes).\n- La cellule est dite en état de plasmolyse.\n\nC. En milieu isotonique (concentration externe égale à la concentration du suc vacuolaire) :\n- Les flux d'eau entrants et sortants sont rigoureusement égaux (flux net nul) ; la cellule conserve son volume et son aspect normal de référence.",
      "formulas": [
        {
          "name": "État de turgescence",
          "formula": "Concentration externe < Concentration vacuolaire ⟹ Entrée nette d'eau (vacuole gonflée)",
          "note": "La paroi squelettique empêche l'éclatement de la cellule végétale."
        },
        {
          "name": "État de plasmolyse",
          "formula": "Concentration externe > Concentration vacuolaire ⟹ Sortie nette d'eau (décollement membranaire)",
          "note": "Présence de tractus reliant la membrane décollée à la paroi."
        }
      ],
      "keyRule": "L'ABSORPTION DE L'EAU A LIEU UNIQUEMENT DANS LA ZONE PILIFÈRE PAR LES POILS ABSORBANTS (cellules végétales géantes à vacuole volumineuse). En milieu hypotonique, l'eau entre et la cellule est TURGESCENTE ; en milieu hypertonique, l'eau sort et la cellule est PLASMOLYSÉE avec décollement de la membrane plasmique.",
      "workedExample": {
        "title": "Exemple résolu : Diagnostic de l'état de cellules épidermiques d'oignon violet",
        "statement": "Des fragments d'épiderme d'oignon rouge sont immergés dans deux boîtes de Petri distinctes :\n- Boîte 1 : eau distillée (concentration en solutés nulle).\n- Boîte 2 : eau salée à 10 % de NaCl (environ 1,7 mol/L).\n1. Décrire l'aspect microscopique des cellules dans la boîte 1 et donner leur état physiologique.\n2. Décrire l'aspect des cellules dans la boîte 2 et donner leur état physiologique.\n3. Expliquer le sens du mouvement de l'eau dans chaque boîte.",
        "methodSteps": [
          "Étape 1 : Analyse pour la boîte 1 (eau distillée) :\nL'eau distillée est hypotonique par rapport au suc vacuolaire. L'eau entre par osmose dans la vacuole qui gonfle au maximum et repousse le cytoplasme contre la paroi pectocellulosique : la cellule est en turgescence.",
          "Étape 2 : Analyse pour la boîte 2 (eau salée à 10 %) :\nLa solution saline est hypertonique par rapport au suc vacuolaire. L'eau sort de la cellule vers le milieu extérieur par osmose. La vacuole se rétracte et la membrane plasmique se décolle de la paroi en laissant des tractus cytoplasmiques : la cellule est en plasmolyse.",
          "Étape 3 : Sens du mouvement net de l'eau :\n- Boîte 1 : flux d'eau du milieu extérieur vers l'intérieur de la vacuole (milieu hypotonique → hypertonique).\n- Boîte 2 : flux d'eau de la vacuole vers le milieu extérieur (milieu hypotonique vacuolaire → milieu hypertonique externe)."
        ],
        "conclusion": "Les cellules de la boîte 1 sont turgescentes (entrée d'eau) et celles de la boîte 2 sont plasmolysées (sortie d'eau)."
      },
      "exercises": [
        {
          "id": "svt_2c_c11_p1_q1",
          "type": "mcq",
          "prompt": "Au niveau de quelle région précise de la racine s'effectue l'absorption de l'eau par la plante verte ?",
          "options": [
            "Au niveau de la zone pilifère garnie de poils absorbants",
            "Au niveau de la coiffe terminale protectrice",
            "Au niveau de la zone subéreuse imperméable",
            "Au niveau exclusif de la tige aérienne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est uniquement au niveau de la zone pilifère, grâce à l'immense surface d'échange des poils absorbants, que l'eau du sol est captée."
        },
        {
          "id": "svt_2c_c11_p1_q2",
          "type": "mcq",
          "prompt": "Quelle est la nature cytologique exacte d'un poil absorbant de racine ?",
          "options": [
            "C'est une cellule végétale géante allongée issue de l'épiderme racinaire",
            "C'est un tissu pluricellulaire complexe sans vacuole",
            "C'est une fibre morte lignifiée conductrice de sève",
            "C'est une colonie de bactéries symbiotiques fixatrices d'azote"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le poil absorbant est une cellule végétale uninucléée géante dotée d'une très grande vacuole remplie de suc vacuolaire concentré."
        },
        {
          "id": "svt_2c_c11_p1_q3",
          "type": "mcq",
          "prompt": "Que se passe-t-il lorsqu'une cellule végétale vivante est plongée dans de l'eau distillée (milieu hypotonique) ?",
          "options": [
            "L'eau pénètre dans la vacuole qui gonfle et plaque la membrane contre la paroi : elle devient turgescente",
            "L'eau sort de la cellule et la membrane plasmique se détache complètement de la paroi",
            "La cellule éclate immédiatement en raison de l'absence de paroi pectocellulosique",
            "La quantité d'eau reste strictement stationnaire sans aucun flux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En milieu hypotonique, l'eau entre par osmose dans la vacuole. La cellule devient turgescente, contenue par sa paroi pectocellulosique rigide."
        },
        {
          "id": "svt_2c_c11_p1_q4",
          "type": "mcq",
          "prompt": "Comment appelle-t-on l'état d'une cellule végétale dont la vacuole s'est rétractée et dont la membrane s'est décollée de la paroi après avoir perdu son eau en milieu hypertonique ?",
          "options": [
            "La plasmolyse",
            "La turgescence",
            "La dialyse facilitée",
            "La mitose réductrice"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La plasmolyse correspond à la rétraction de la vacuole et au décollement de la membrane plasmique suite à une perte nette d'eau vers un milieu hypertonique."
        },
        {
          "id": "svt_2c_c11_p1_q5",
          "type": "mcq",
          "prompt": "Qu'appelle-t-on les fins prolongements reliant encore le cytoplasme rétracté à la paroi pectocellulosique chez une cellule plasmolysée ?",
          "options": [
            "Les tractus cytoplasmiques",
            "Les dictyosomes",
            "Les centrioles",
            "Les thylakoïdes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les tractus cytoplasmiques (ou ponts cytoplasmiques) maintiennent l'ancrage ponctuel de la membrane plasmique décollée à la paroi squelettique."
        },
        {
          "id": "svt_2c_c11_p1_q6",
          "type": "mcq",
          "prompt": "Dans un milieu isotonique par rapport au suc vacuolaire, quel est l'aspect d'une cellule végétale ?",
          "options": [
            "Elle conserve une taille et une forme normales car les échanges d'eau s'équilibrent parfaitement",
            "Elle est fortement turgescente et risque d'exploser",
            "Elle est complètement plasmolysée avec une vacuole minuscule",
            "Elle se vide intégralement de ses organites cytoplasmiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans une solution isotonique, les pressions osmotiques interne et externe sont égales : les flux d'eau entrants et sortants sont égaux, la cellule garde son volume normal."
        },
        {
          "id": "svt_2c_c11_p1_q7",
          "type": "mcq",
          "prompt": "Pourquoi une cellule végétale turgescente n'éclate-t-elle pas sous la pression interne de l'eau, contrairement à une hématie animale ?",
          "options": [
            "Grâce à la résistance mécanique de sa paroi pectocellulosique rigide externe",
            "Parce que la membrane plasmique végétale est totalement imperméable à l'eau",
            "Parce que le noyau absorbe instantanément tout l'excès de liquide",
            "Parce que les stomates rejettent l'eau directement dans le sol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La paroi pectocellulosique rigide des végétaux s'oppose à la déformation élastique et contrebalance la pression osmotique, empêchant la lyse cellulaire."
        },
        {
          "id": "svt_2c_c11_p1_q8",
          "type": "mcq",
          "prompt": "Si l'on replonge une cellule végétale fraîchement plasmolysée dans de l'eau distillée, que se passe-t-il ?",
          "options": [
            "Elle réabsorbe de l'eau et retrouve sa turgescence initiale : c'est la déplasmolyse",
            "Elle meurt instantanément par dissolution de sa membrane",
            "Elle reste irréversiblement plasmolysée pour toujours",
            "Elle se divise immédiatement en quatre cellules haploïdes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tant que la cellule est vivante, la plasmolyse est réversible : l'entrée d'eau en milieu hypotonique restaure le volume vacuolaire, phénomène appelé déplasmolyse."
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch11_p2_osmose_pression_osmotique_dutrochet",
      "order": 2,
      "title": "Loi de l'osmose, osmomètre de Dutrochet et calcul de la pression osmotique",
      "summary": "Expliquer l'expérience de l'osmomètre de Dutrochet, énoncer la loi de l'osmose et appliquer la formule de Van 't Hoff pour calculer la pression osmotique.",
      "conceptExplanation": "1. Définition biophysique de l'osmose :\n- L'osmose est la diffusion passive de molécules d'eau à travers une membrane semi-perméable (ou hémiperméable, laissant passer le solvant eau mais retenant les solutés dissous).\n- Sens du déplacement spontané de l'eau : l'eau se déplace TOUJOURS du milieu le moins concentré en soluté (milieu hypotonique, plus riche en eau libre) vers le milieu le plus concentré en soluté (milieu hypertonique, où l'eau libre est retenue par solvatation), jusqu'à équilibre des concentrations (isotonie).\n\n2. L'expérience historique de l'osmomètre de Dutrochet (1826) :\n- Dispositif : un entonnoir prolongé par un tube fin et gradué est fermé à sa base évasée par une membrane semi-perméable (vessie animale ou cellophane collodionnée).\n- On remplit l'entonnoir d'une solution concentrée de soluté (ex : NaCl, glucose à 90 g/L ou saccharose) à un niveau initial h₀.\n- On plonge l'entonnoir dans un cristallisoir contenant de l'eau distillée (niveau n₁).\n- Observations après quelques heures : le niveau du liquide dans le tube fin monte régulièrement de h₀ à h₁ (dénivellation Δh), tandis que le niveau d'eau dans le cristallisoir baisse légèrement.\n- Interprétation : l'eau distillée traverse la membrane pour diluer la solution concentrée interne : c'est la force de succion osmotique.\n\n3. La pression osmotique (Pos ou P) et la formule de Van 't Hoff :\nLa pression osmotique est la pression qu'il faudrait exercer sur la solution la plus concentrée pour empêcher le passage spontané de l'eau pure à travers la membrane semi-perméable.\nElle se calcule par la loi de Van 't Hoff :\n  Pos = n · R · C · T\navec :\n- Pos : pression osmotique exprimée en atmosphères (atm) ou en Pascals (Pa), avec 1 atm = 10⁵ Pa = 1,013 × 10⁵ Pa.\n- n : nombre de particules osmotiquement actives libérées par mole de soluté en solution aqueuse (coefficient de dissociation ou d'ionisation) :\n  * Pour les molécules organiques non ionisables (glucose, saccharose, urée) : n = 1.\n  * Pour les électrolytes ionisables : n = nombre d'ions formés. Exemple : NaCl → Na⁺ + Cl⁻ ⟹ n = 2 ; CaCl₂ → Ca²⁺ + 2 Cl⁻ ⟹ n = 3.\n- R : constante molaire des gaz parfaits = 0,082 L·atm·mol⁻¹·K⁻¹ (ou 8,314 J·mol⁻¹·K⁻¹).\n- C : concentration molaire du soluté en mol/L (C = c_massique / M, avec M la masse molaire en g/mol et c_massique en g/L).\n- T : température absolue en Kelvin (K) : T = θ(°C) + 273.\n\n4. Prédiction du flux d'eau entre deux compartiments A et B :\n- Si Pos(A) > Pos(B) : le milieu A est hypertonique par rapport à B ; l'eau diffuse spontanément de B vers A.\n- Si Pos(A) = Pos(B) : solutions isotoniques ; aucun flux net d'eau.",
      "formulas": [
        {
          "name": "Loi de Van 't Hoff pour la pression osmotique",
          "formula": "Pos = n · R · C · T = n · R · (c / M) · (θ + 273)",
          "note": "R = 0,082 L·atm·mol⁻¹·K⁻¹ ; Pos s'exprime en atmosphères (1 atm = 10⁵ Pa)."
        },
        {
          "name": "Coefficient d'ionisation n",
          "formula": "n = 1 (glucose, saccharose) ; n = 2 (NaCl) ; n = 3 (CaCl₂)",
          "note": "Dépend de la dissociation électrolytique complète du soluté."
        }
      ],
      "keyRule": "L'OSMOSE EST LE DÉPLACEMENT SPONTANÉ DE L'EAU DU MILIEU LE MOINS CONCENTRÉ (HYPOTONIQUE) VERS LE MILIEU LE PLUS CONCENTRÉ (HYPERTONIQUE). La pression osmotique Pos = n · R · C · T dépend du nombre de particules dissoutes n, de la concentration molaire C et de la température absolue T.",
      "workedExample": {
        "title": "Exemple résolu : Calcul comparatif de la pression osmotique et prédiction du flux d'eau",
        "statement": "À une température de 28 °C, on prépare deux solutions aqueuses séparées par une membrane semi-perméable :\n- Solution 1 : chlorure de sodium (NaCl) à C₁ = 0,1 mol/L (M(NaCl) = 58,5 g/mol, totalement dissocié).\n- Solution 2 : glucose (C₆H₁₂O₆) à concentration pondérale c₂ = 36 g/L (M(glucose) = 180 g/mol).\nDonnées : R = 0,082 L·atm·mol⁻¹·K⁻¹ ; 1 atm = 10⁵ Pa.\n1. Calculer la température absolue T en Kelvin.\n2. Calculer la pression osmotique Pos₁ de la solution de NaCl.\n3. Calculer la concentration molaire C₂ puis la pression osmotique Pos₂ de la solution de glucose.\n4. Déterminer le sens du déplacement de l'eau à travers la membrane.",
        "methodSteps": [
          "Étape 1 : Calcul de la température absolue T :\nT = 28 + 273 = 301 K.",
          "Étape 2 : Pression osmotique du NaCl (Pos₁) :\nLe NaCl se dissocie en Na⁺ et Cl⁻, d'où n = 2.\nPos₁ = n · R · C₁ · T = 2 × 0,082 × 0,1 × 301 = 4,936 atm (soit environ 4,94 × 10⁵ Pa).",
          "Étape 3 : Concentration molaire et pression du glucose (Pos₂) :\nLe glucose est non dissociable, donc n = 1.\nC₂ = c₂ / M = 36 / 180 = 0,2 mol/L.\nPos₂ = 1 × 0,082 × 0,2 × 301 = 4,936 atm.",
          "Étape 4 : Comparaison et sens du mouvement d'eau :\nOn constate que Pos₁ = Pos₂ = 4,936 atm.\nLes deux solutions sont rigoureusement isotoniques. Il n'y aura aucun transfert net d'eau entre les deux compartiments."
        ],
        "conclusion": "Les deux solutions développent la même pression osmotique (4,94 atm) : elles sont isotoniques, le système est à l'équilibre."
      },
      "exercises": [
        {
          "id": "svt_2c_c11_p2_q1",
          "type": "mcq",
          "prompt": "Quel est le sens spontané de déplacement des molécules d'eau lors du phénomène d'osmose ?",
          "options": [
            "Du milieu le moins concentré en soluté (hypotonique) vers le milieu le plus concentré (hypertonique)",
            "Du milieu le plus concentré en soluté vers le milieu le moins concentré",
            "De manière unidirectionnelle toujours de haut en bas sous l'effet de la gravité",
            "Uniquement de la lumière vers l'obscurité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'osmose attire l'eau du compartiment le plus dilué (hypotonique) vers le compartiment le plus concentré en soluté (hypertonique)."
        },
        {
          "id": "svt_2c_c11_p2_q2",
          "type": "mcq",
          "prompt": "Dans l'expérience de l'osmomètre de Dutrochet, pourquoi le niveau du liquide monte-t-il dans le tube fin ?",
          "options": [
            "Parce que l'eau du cristallisoir pénètre par osmose dans l'entonnoir contenant la solution concentrée de soluté",
            "Parce que la membrane semi-perméable se dissout et libère du gaz carbonique",
            "Parce que la température de la pièce a brutalement augmenté de 100 °C",
            "Parce que le soluté traverse massivement la membrane vers le cristallisoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'eau distillée externe est attirée vers la solution concentrée interne à travers la membrane semi-perméable, ce qui élève le niveau dans le tube vertical."
        },
        {
          "id": "svt_2c_c11_p2_q3",
          "type": "mcq",
          "prompt": "Quelle est la valeur du coefficient de dissociation ionique n pour le chlorure de sodium (NaCl) en solution aqueuse ?",
          "options": [
            "n = 2, car chaque molécule de NaCl se dissocie en un ion Na⁺ et un ion Cl⁻",
            "n = 1, car le NaCl ne se dissocie pas dans l'eau",
            "n = 3, car il libère trois particules distinctes",
            "n = 0, car les ions n'exercent aucune pression osmotique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le chlorure de sodium est un électrolyte fort qui s'ionise totalement en 2 ions : NaCl → Na⁺ + Cl⁻, donc n = 2."
        },
        {
          "id": "svt_2c_c11_p2_q4",
          "type": "mcq",
          "prompt": "Quelle est la valeur du coefficient n pour une solution de saccharose (C₁₂H₂₂O₁₁) ou de glucose (C₆H₁₂O₆) ?",
          "options": [
            "n = 1, car ce sont des solutés moléculaires organiques neutres non ionisables",
            "n = 12, correspondant au nombre d'atomes de carbone",
            "n = 2, car la molécule se coupe spontanément en deux demi-sucres",
            "n = 4, car ce sont des tétroses"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les oses et diosides comme le glucose et le saccharose se dissolvent sous forme de molécules entières sans s'ioniser, d'où n = 1."
        },
        {
          "id": "svt_2c_c11_p2_q5",
          "type": "mcq",
          "prompt": "Comment s'exprime la température absolue T (en Kelvin) à partir de la température ambiante θ en degrés Celsius ?",
          "options": [
            "T = θ(°C) + 273",
            "T = θ(°C) - 273",
            "T = θ(°C) × 273",
            "T = θ(°C) / 100"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le zéro absolu correspond à -273,15 °C ; on convertit donc la température Celsius en Kelvin en ajoutant 273 : T = θ + 273."
        },
        {
          "id": "svt_2c_c11_p2_q6",
          "type": "mcq",
          "prompt": "Quelle est la pression osmotique approximative d'une solution de glucose à C = 0,5 mol/L à la température de 34 °C (T = 307 K, R = 0,082 L·atm·mol⁻¹·K⁻¹) ?",
          "options": [
            "12,59 atm",
            "25,18 atm",
            "6,29 atm",
            "1,26 atm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pos = n · R · C · T = 1 × 0,082 × 0,5 × (34 + 273) = 0,082 × 0,5 × 307 = 12,587 atm (environ 12,59 atm)."
        },
        {
          "id": "svt_2c_c11_p2_q7",
          "type": "mcq",
          "prompt": "Que caractérise une membrane hémiperméable parfaite ?",
          "options": [
            "Elle laisse passer exclusivement les molécules d'eau et retient la totalité des solutés dissous",
            "Elle laisse passer librement l'eau et tous les solutés sans distinction",
            "Elle est totalement imperméable à l'eau comme aux solutés",
            "Elle permet uniquement le passage des grosses protéines par endocytose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une membrane strictement hémiperméable est sélectivement perméable au solvant (l'eau) et imperméable aux molécules et ions dissous."
        },
        {
          "id": "svt_2c_c11_p2_q8",
          "type": "mcq",
          "prompt": "Deux solutions séparées par une membrane semi-perméable ont pour pressions osmotiques Pos(A) = 15 atm et Pos(B) = 8 atm. Quel sera le sens du flux d'eau ?",
          "options": [
            "L'eau passera du compartiment B vers le compartiment A",
            "L'eau passera du compartiment A vers le compartiment B",
            "Aucun transfert d'eau n'aura lieu car les deux pressions sont non nulles",
            "L'eau s'évaporera instantanément dans les deux compartiments"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le compartiment B a la plus faible pression osmotique (hypotonique). L'eau diffuse donc de B vers A (milieu à plus forte pression osmotique hypertonique)."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 12 : L'INFLUENCE DES SELS MINÉRAUX SUR LA CROISSANCE DE LA PLANTE VERTE
// ============================================================================
export const svt2deCInfluenceSelsMinerauxCroissanceChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch12_influence_sels_mineraux_croissance",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 12,
  "officialVolumeHours": 4,
  "title": "Leçon 12 — L'influence des sels minéraux sur la croissance de la plante verte",
  "summary": "Courbe d'action d'un ion minéral (zone de carence, croissance maximale, dose optimale, zone de tolérance/consommation de luxe, seuil de toxicité, zone de toxicité) et interactions pluriminérales (facteur limitant, synergie et antagonisme).",
  "points": [
    {
      "id": "seconde_c_svt_ch12_p1_courbe_action_ion_mineral_zones",
      "order": 1,
      "title": "Courbe d'action d'un sel minéral et zones physiologiques de croissance",
      "summary": "Analyser la courbe d'action d'un ion minéral (ex : potassium K⁺ ou azote N), identifier les différentes zones de croissance et définir la dose optimale et le seuil de toxicité.",
      "conceptExplanation": "1. Nécessité des éléments minéraux pour le végétal :\n- Les plantes vertes autotrophes ont besoin d'eau et d'ions minéraux prélevés dans le sol (azote N, phosphore P, potassium K, calcium Ca, magnésium Mg, fer Fe, oligo-éléments) pour synthétiser leur matière organique (protéines, acides nucléiques, chlorophylle, ATP, parois).\n- Pour mesurer l'influence précise de la concentration d'un ion minéral sur la croissance végétale, on cultive des plants (ex : maïs ou tomate) sur des solutions nutritives synthétiques de composition connue (liquide de Knop) en faisant varier la concentration d'un seul ion (ex : K⁺ de 0,5 à 2,5 g/L), tous les autres facteurs restant optimaux et constants.\n\n2. Allure et découpage de la courbe d'action d'un élément minéral :\nLa courbe représentant la masse de matière sèche produite en fonction de la concentration de l'ion présente classiquement 3 grandes régions et des points cardinaux remarquables :\n\nA. Zone de carence (ou de déficience) :\n- Aux concentrations faibles (ex : 0 à 1,5 g/L de K⁺), les besoins de la plante ne sont que partiellement couverts.\n- La production de matière sèche augmente de façon proportionnelle à la concentration apportée.\n- La plante souffre d'un manque nutritif : on observe des signes de carence (chlorose foliaire, développement rabougri, tiges frêles).\n\nB. La dose optimale (ou première concentration optimale) :\n- C'est la plus petite concentration d'un élément minéral qui permet d'atteindre la production maximale (100 % de croissance).\n- C'est la concentration agronomique idéale assurant le meilleur rendement pour un coût d'engrais minimal.\n\nC. Zone de tolérance et consommation de luxe :\n- Pour des concentrations modérées au-delà de la dose optimale (ex : de 1,5 à 2 g/L de K⁺), la production de matière sèche plafonne à son niveau maximal constant (plateau).\n- La plante continue d'absorber l'ion en excès sans aucun gain de rendement supplémentaire, mais sans effet indésirable : c'est la consommation de luxe.\n- La plante est dans sa zone de tolérance physiologique.\n\nD. Le seuil de toxicité et la zone de toxicité :\n- Seuil de toxicité : concentration critique précise à partir de laquelle la production commence à décliner.\n- Zone de toxicité (ex : au-delà de 2 g/L de K⁺) : les concentrations excessives deviennent nocives. L'absorption excessive perturbe le métabolisme cellulaire (inhibition enzymatique, déséquilibre osmotique, brûlures racinaires), provoquant la chute rapide de la masse de matière sèche, le dépérissement puis la mort du végétal.",
      "formulas": [
        {
          "name": "Chronologie des zones sur la courbe d'action",
          "formula": "Zone de carence → Croissance maximale (Dose optimale) → Zone de tolérance (Consommation de luxe) → Seuil de toxicité → Zone de toxicité",
          "note": "Courbe unimodale asymétrique caractéristique de tout élément minéral."
        },
        {
          "name": "Rendement de matière sèche",
          "formula": "Production maximale = 100 % atteinte dès la première concentration optimale",
          "note": "Au-delà, la fertilisation devient inutile puis dangereuse."
        }
      ],
      "keyRule": "LA DOSE OPTIMALE EST LA PLUS PETITE DOSE PERMETTANT UNE CROISSANCE MAXIMALE. En deçà, c'est la zone de carence (croissance insuffisante) ; au plateau, c'est la consommation de luxe (zone de tolérance) ; au-delà du seuil de toxicité, la forte concentration inhibe la croissance et empoisonne la plante.",
      "workedExample": {
        "title": "Exemple résolu : Exploitation agronomique d'une courbe de croissance de tomate",
        "statement": "On cultive des pieds de tomate en hydroponie avec des doses croissantes d'azote (N) :\n- De 1 à 4 mg/L : croissance passant de 20 % à 80 %.\n- À 5 mg/L : croissance atteignant 100 %.\n- De 5 à 8 mg/L : croissance constante et maximale à 100 %.\n- À 8 mg/L : la croissance commence à fléchir.\n- À 10 mg/L : la croissance s'effondre à 50 % avec nécrose des feuilles.\n1. Préciser la valeur de la dose optimale.\n2. Qualifier l'intervalle [5 mg/L ; 8 mg/L].\n3. Identifier le seuil de toxicité et la conséquence d'une dose de 10 mg/L.",
        "methodSteps": [
          "Étape 1 : Détermination de la dose optimale :\nLa plus petite concentration permettant d'obtenir la croissance maximale de 100 % est 5 mg/L : c'est la dose optimale.",
          "Étape 2 : Intervalle [5 mg/L ; 8 mg/L] :\nLa croissance reste constante à 100 % malgré l'augmentation des apports d'azote : la plante est dans la zone de tolérance (consommation de luxe).",
          "Étape 3 : Seuil de toxicité et toxicité :\nLe seuil de toxicité se situe à 8 mg/L (point d'inflexion où la courbe commence à chuter). À 10 mg/L, on est dans la zone de toxicité : l'excès d'azote inhibe la croissance et provoque des nécroses tissulaires."
        ],
        "conclusion": "La fertilisation recommandée est de 5 mg/L (dose optimale). Au-delà de 8 mg/L, l'engrais devient toxique pour la culture."
      },
      "exercises": [
        {
          "id": "svt_2c_c12_p1_q1",
          "type": "mcq",
          "prompt": "Comment définit-on la dose optimale d'un ion minéral pour une plante verte ?",
          "options": [
            "La plus petite concentration de ce minéral qui permet une croissance maximale de la plante",
            "La concentration la plus élevée que la plante peut supporter avant de mourir",
            "La concentration exacte où la production de matière sèche est nulle",
            "La dose qui divise la taille de la racine par deux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dose optimale est la dose minimale requise pour que la plante exprime 100 % de son potentiel de croissance."
        },
        {
          "id": "svt_2c_c12_p1_q2",
          "type": "mcq",
          "prompt": "Dans la zone de consommation de luxe (zone de tolérance), que constate-t-on quant à la production végétale ?",
          "options": [
            "La production de matière sèche reste constante et maximale malgré l'absorption accrue du minéral",
            "La production de matière sèche augmente de façon exponentielle",
            "La plante perd immédiatement toutes ses feuilles",
            "La plante cesse toute absorption d'eau par les poils absorbants"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En consommation de luxe, la plante absorbe le sel minéral en quantité excédentaire sans aucun gain de biomasse supplémentaire, mais sans dommage."
        },
        {
          "id": "svt_2c_c12_p1_q3",
          "type": "mcq",
          "prompt": "Qu'appelle-t-on le 'seuil de toxicité' sur une courbe d'action d'un élément minéral ?",
          "options": [
            "La concentration à partir de laquelle la production commence à diminuer sous l'effet de l'excès de sel",
            "La concentration minimale indispensable à la survie de la graine",
            "Le point où la matière sèche atteint son maximum pour la première fois",
            "La quantité d'eau totale transpirée par la feuille en plein soleil"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le seuil de toxicité marque la limite haute de la zone de tolérance au-delà de laquelle l'élément devient nuisible à la plante."
        },
        {
          "id": "svt_2c_c12_p1_q4",
          "type": "mcq",
          "prompt": "Quel est l'ordre chronologique exact d'apparition des zones sur une courbe d'action minérale en fonction de la concentration croissante ?",
          "options": [
            "Zone de carence → Dose optimale → Zone de tolérance → Seuil de toxicité → Zone de toxicité",
            "Zone de toxicité → Seuil de toxicité → Zone de tolérance → Zone de carence",
            "Dose optimale → Zone de carence → Zone de toxicité → Seuil de toxicité",
            "Zone de tolérance → Zone de carence → Dose optimale → Zone de toxicité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La concentration augmente de 0 vers les fortes valeurs : on traverse d'abord la carence, on atteint la dose optimale, puis le plateau de tolérance, le seuil de toxicité et enfin la zone de toxicité."
        },
        {
          "id": "svt_2c_c12_p1_q5",
          "type": "mcq",
          "prompt": "Si un plant de maïs reçoit une dose d'engrais potassique située dans sa zone de carence, quel résultat observe-t-on ?",
          "options": [
            "Une production de matière sèche inférieure au maximum car ses besoins ne sont pas entièrement satisfaits",
            "Une mort foudroyante par nécrose des racines",
            "Une floraison précoce et une taille géante",
            "Une absence totale de chlorophylle dans toute la plante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En zone de carence, la dose de minéral est insuffisante pour permettre la croissance normale et optimale du végétal."
        },
        {
          "id": "svt_2c_c12_p1_q6",
          "type": "mcq",
          "prompt": "Pourquoi un agriculteur a-t-il intérêt à apporter la dose optimale plutôt qu'une dose en consommation de luxe ?",
          "options": [
            "Pour maximiser la récolte tout en évitant les gaspillages d'engrais coûteux et les risques de pollution",
            "Parce que la dose optimale triple la teneur en sucre par rapport à la consommation de luxe",
            "Parce que la consommation de luxe diminue immédiatement la masse des grains récoltés",
            "Parce que les engrais en consommation de luxe attirent obligatoirement les insectes ravageurs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dose optimale offre le meilleur ratio coût/bénéfice écologique et économique : au-delà, les engrais apportés ne rapportent plus aucun supplément de récolte."
        },
        {
          "id": "svt_2c_c12_p1_q7",
          "type": "mcq",
          "prompt": "Quelle solution nutritive synthétique standardisée est historiquement utilisée au laboratoire pour étudier les besoins minéraux des plantes ?",
          "options": [
            "Le liquide de Knop",
            "L'eau de chaux saturée",
            "La liqueur de Fehling",
            "L'eau iodée concentrée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le liquide de Knop est une solution aqueuse artificielle équilibrée contenant tous les macro-éléments minéraux essentiels à la croissance des plantes vertes."
        },
        {
          "id": "svt_2c_c12_p1_q8",
          "type": "mcq",
          "prompt": "Quel est l'effet d'une surdose importante d'engrais minéraux dans le sol sur les racines de la plante ?",
          "options": [
            "Le sol devient hypertonique par rapport aux racines, provoquant la plasmolyse des poils absorbants et la brûlure racinaire",
            "Les racines absorbent dix fois plus d'eau que la normale et éclatent",
            "La plante commence à produire son propre engrais chimique dans les feuilles",
            "Les stomates s'ouvrent 24 heures sur 24 sans interruption"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'excès de sels minéraux augmente la pression osmotique du sol au-delà de celle du poil absorbant : l'eau est extraite de la plante (plasmolyse osmotique et brûlure chimique)."
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch12_p2_interaction_pluriminerale_synergie_antagonisme",
      "order": 2,
      "title": "Interactions entre plusieurs sels minéraux : facteur limitant, synergie et antagonisme",
      "summary": "Comprendre les interactions ioniques complexes lors de la nutrition minérale : identifier le facteur limitant (loi du minimum), distinguer la synergie de l'antagonisme et analyser des courbes pluriminérales.",
      "conceptExplanation": "1. La complexité de la nutrition pluriminérale :\n- Dans la nature et en agriculture, les plantes absorbent simultanément un ensemble d'ions minéraux dissous dans la solution du sol.\n- Les effets combinés de ces minéraux ne sont pas une simple addition indépendante : les ions interagissent entre eux, influençant mutuellement leur vitesse d'absorption et leur métabolisme.\n\n2. La notion de facteur limitant (Loi du minimum de Liebig) :\n- Lorsqu'une plante est cultivée avec des doses croissantes d'un ion A (ex : potassium K⁺) en présence d'une faible dose d'un autre ion B (ex : phosphore à 0,1 g/L au lieu de 0,5 g/L) :\n  * La production maximale atteinte par la plante plafonne à une valeur nettement plus basse (ex : 0,46 g au lieu de 0,64 g de matière sèche).\n  * Même si l'on augmente indéfiniment la concentration en potassium, la plante ne peut pas grandir davantage car elle est bloquée par le manque de phosphore.\n- Définition : Un facteur limitant est un élément indispensable qui, par sa faible disponibilité relative, restreint ou plafonne la croissance de l'organisme, quel que soit le niveau des autres facteurs.\n\n3. La synergie minérale (interaction positive) :\n- On parle de synergie lorsque deux ou plusieurs éléments minéraux agissent conjointement pour stimuler mutuellement leur absorption ou potentialiser leurs effets physiologiques bénéfiques.\n- Exemple 1 : Le couple Potassium (K⁺) et Phosphore (P) à 0,5 g/L permet d'atteindre un niveau de production de biomasse bien supérieur à l'action isolée de chacun de ces minéraux.\n- Exemple 2 : L'addition de Chlorure de Calcium (CaCl₂) au milieu stimule fortement l'absorption du Rubidium (Rb⁺) en présence de Lithium (Li⁺), alors que le Lithium seul freinait cette absorption.\n\n4. L'antagonisme minéral (interaction négative ou d'inhibition) :\n- On parle d'antagonisme lorsqu'un élément minéral freine, inhibe ou empêche l'absorption ou l'efficacité physiologique d'un autre élément minéral.\n- Mécanismes : compétition pour les mêmes transporteurs membranaires (canaux ioniques ou perméases) ou précipitation chimique dans la rhizosphère.\n- Exemples classiques :\n  * Antagonisme Calcium / Magnésium (Ca²⁺ / Mg²⁺) : de fortes concentrations de magnésium diminuent l'efficacité du calcium sur la croissance de la plante aux faibles doses, car le rapport Ca/Mg doit rester équilibré.\n  * Antagonisme Potassium / Magnésium (K⁺ / Mg²⁺) : un excès de potassium dans le sol induit une carence induite en magnésium dans la plante (feuilles jaunissantes).",
      "formulas": [
        {
          "name": "Principe de la loi du minimum (Liebig)",
          "formula": "Rendement global = f(Élément le plus déficitaire = Facteur limitant)",
          "note": "La capacité d'un tonneau est limitée par sa douve la plus courte."
        },
        {
          "name": "Classification des interactions ioniques",
          "formula": "Synergie (Effet combiné > Effets séparés)  vs  Antagonisme (Inhibition / Compétition mutuelle)",
          "note": "Régit l'équilibre des formules d'engrais complexes (NPK)."
        }
      ],
      "keyRule": "LE FACTEUR LIMITANT EST L'ÉLÉMENT INDISPENSABLE LE PLUS DÉFICITAIRE QUI PLAFONNE LA CROISSANCE DE LA PLANTE. LA SYNERGIE DÉSIGNE UNE COLLABORATION BÉNÉFIQUE OÙ DEUX MINÉRAUX RENFORCENT LEUR ACTION, TANDIS QUE L'ANTAGONISME EST UNE INHIBITION OÙ UN MINÉRAL EMPÊCHE L'ACTION D'UN AUTRE.",
      "workedExample": {
        "title": "Exemple résolu : Analyse de courbes de croissance de maïs sous l'action combinée de K et P",
        "statement": "On mesure la masse de matière sèche de pieds de maïs en fonction de la concentration de K⁺ pour deux régimes de phosphore (P) :\n- Série 1 (P = 0,1 g/L) : la masse de matière sèche plafonne à 0,46 g entre 1,5 et 2,0 g/L de K⁺.\n- Série 2 (P = 0,5 g/L) : la masse de matière sèche atteint 0,64 g entre 1,5 et 2,0 g/L de K⁺.\n1. Expliquer pourquoi la série 1 ne dépasse pas 0,46 g malgré un apport abondant en potassium.\n2. Identifier le facteur limitant dans la série 1.\n3. Indiquer la nature de l'interaction entre le potassium et le phosphore dans la série 2.",
        "methodSteps": [
          "Étape 1 : Analyse du plafonnement de la série 1 :\nÀ 0,1 g/L de phosphore, la concentration en P est insuffisante pour permettre une production optimale de 0,64 g. Même avec un potassium optimal, la production reste bloquée à 0,46 g.",
          "Étape 2 : Identification du facteur limitant :\nC'est la concentration insuffisante en phosphore (0,1 g/L) qui bride la croissance : le phosphore est donc le facteur limitant.",
          "Étape 3 : Nature de l'interaction dans la série 2 :\nLorsque le phosphore passe à 0,5 g/L, l'efficacité du potassium est pleinement exploitée et la croissance atteint 0,64 g : le potassium et le phosphore agissent ensemble en synergie pour stimuler la croissance."
        ],
        "conclusion": "Le phosphore à 0,1 g/L est le facteur limitant ; à dose suffisante, K et P agissent en synergie."
      },
      "exercises": [
        {
          "id": "svt_2c_c12_p2_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un facteur limitant dans la nutrition minérale des plantes ?",
          "options": [
            "L'élément nutritif indispensable le plus déficitaire qui plafonne et restreint la croissance globale de la plante",
            "Le minéral le plus abondant dans l'atmosphère terrestre",
            "Une toxine bactérienne qui détruit la coiffe racinaire",
            "L'angle d'inclinaison des feuilles par rapport au soleil couchant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Selon la loi du minimum, le rendement d'une culture est limité par l'élément minéral présent dans la plus faible proportion par rapport aux besoins."
        },
        {
          "id": "svt_2c_c12_p2_q2",
          "type": "mcq",
          "prompt": "Comment qualifie-t-on l'interaction entre deux ions minéraux lorsque la présence de l'un stimule et amplifie l'absorption ou l'action bénéfique de l'autre ?",
          "options": [
            "Une synergie",
            "Un antagonisme",
            "Une carence induite",
            "Une décomposition aérobie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La synergie est une interaction positive dans laquelle l'effet conjugué de deux éléments dépasse la somme de leurs effets isolés."
        },
        {
          "id": "svt_2c_c12_p2_q3",
          "type": "mcq",
          "prompt": "Comment qualifie-t-on l'interaction lorsque l'excès d'un ion minéral freine ou bloque l'absorption d'un autre ion par la racine ?",
          "options": [
            "Un antagonisme",
            "Une synergie",
            "Une symbiose mutualiste",
            "Une autotrophie stricte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'antagonisme désigne l'inhibition ou la compétition négative exercée par un ion sur l'absorption ou l'assimilation d'un autre ion."
        },
        {
          "id": "svt_2c_c12_p2_q4",
          "type": "mcq",
          "prompt": "Lorsqu'une forte teneur en magnésium (Mg²⁺) diminue l'efficacité du calcium (Ca²⁺) sur la croissance, quel type d'interaction est mis en jeu ?",
          "options": [
            "Un antagonisme entre le magnésium et le calcium",
            "Une synergie parfaite entre les deux cations",
            "Une absence totale d'influence mutuelle",
            "Une transformation du calcium en azote gazeux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La baisse d'efficacité du calcium en présence d'un excès de magnésium illustre l'antagonisme compétitif entre ces deux cations divalents."
        },
        {
          "id": "svt_2c_c12_p2_q5",
          "type": "mcq",
          "prompt": "Sur un graphique représentant deux courbes de croissance pour deux doses différentes d'un second minéral B, comment repère-t-on que B est un facteur limitant à faible dose ?",
          "options": [
            "Le plateau maximal de croissance est nettement inférieur à celui obtenu avec une dose plus élevée de B",
            "La courbe démarre immédiatement à la valeur 100 %",
            "La courbe forme une ligne verticale descendante",
            "La dose optimale de l'élément A est divisée par mille"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le facteur limitant plafonne la hauteur du plateau de biomasse : même en augmentant le premier minéral, on ne peut franchir ce plafond bas."
        },
        {
          "id": "svt_2c_c12_p2_q6",
          "type": "mcq",
          "prompt": "Quel scientifique a formulé la célèbre 'Loi du minimum' illustrée par la métaphore du tonneau aux douves inégales ?",
          "options": [
            "Justus von Liebig",
            "René Dutrochet",
            "Charles Darwin",
            "Louis Pasteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le chimiste allemand Justus von Liebig a établi la loi du minimum en 1840, montrant qu'un sol ne produit qu'à hauteur de son nutriment le plus rare."
        },
        {
          "id": "svt_2c_c12_p2_q7",
          "type": "mcq",
          "prompt": "Dans une expérience où l'absorption du Rubidium est stimulée par l'ajout conjoint de chlorure de calcium et de lithium, on observe :",
          "options": [
            "Une synergie entre le CaCl₂ et le Lithium favorisant l'absorption du Rubidium",
            "Une toxicité immédiate qui tue tous les plants",
            "Un arrêt complet de l'absorption hydrique",
            "La disparition de tous les ions calcium de la racine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'effet combiné du mélange CaCl₂-Li est supérieur à l'effet du lithium seul : il y a synergie entre ces sels pour faciliter l'absorption du Rubidium."
        },
        {
          "id": "svt_2c_c12_p2_q8",
          "type": "mcq",
          "prompt": "Que recommandent les agronomes pour éviter les phénomènes d'antagonisme et de carence induite dans les cultures ?",
          "options": [
            "Apporter des engrais équilibrés (formules NPK adaptées) respectant les proportions relatives requises par l'espèce végétale",
            "Épandre uniquement de très fortes doses massives d'un seul minéral au hasard",
            "Interdire totalement l'irrigation des parcelles agricoles",
            "Remplacer l'eau d'arrosage par de l'eau de mer saturée en sel"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une fertilisation équilibrée respectant les ratios physiologiques évite qu'un excès d'un élément ne bloque l'assimilation des autres éléments."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 13 : L'ABSORPTION DES SELS MINÉRAUX PAR LA PLANTE VERTE
// ============================================================================
export const svt2deCAbsorptionSelsMinerauxChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch13_absorption_sels_mineraux_plante",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 13,
  "officialVolumeHours": 2,
  "title": "Leçon 13 — L'absorption des sels minéraux par la plante verte",
  "summary": "Mise en évidence expérimentale du passage des solutés (dialyse), modèle de la membrane plasmique en mosaïque fluide, et mécanismes biophysiques de transport des ions : transports passifs (diffusion simple, diffusion facilitée par canaux et perméases) et transport actif dépendant de l'ATP.",
  "points": [
    {
      "id": "seconde_c_svt_ch13_p1_dialyse_ultrastructure_membrane_plasmique",
      "order": 1,
      "title": "Mise en évidence de la dialyse et ultrastructure de la membrane plasmique",
      "summary": "Définir la dialyse à travers une membrane perméable et décrire l'ultrastructure de la membrane plasmique (bicouche lipidique et protéines membranaires).",
      "conceptExplanation": "1. Mise en évidence de l'absorption des solutés : la dialyse :\n- Expérience en laboratoire : lorsqu'on plonge des cellules de racines d'oignon dans une solution bleue de sulfate de cuivre (CuSO₄), on constate au microscope que l'intérieur des cellules devient bleu. Cela prouve que des substances minérales dissoutes franchissent la membrane cellulaire.\n- Expérience modèle : deux compartiments 1 et 2 sont séparés par une membrane perméable aux solutés. Au départ, le compartiment 1 est plus concentré en soluté S que le compartiment 2 (milieu 1 hypertonique, milieu 2 hypotonique). Après un certain temps, les solutés diffusent à travers la membrane jusqu'à ce que les deux compartiments aient exactement la même concentration : l'équilibre est atteint.\n- Définition de la dialyse : La dialyse est la diffusion passive de substances dissoutes (solutés) à travers une membrane perméable, s'effectuant spontanément du milieu le plus concentré (hypertonique) vers le milieu le moins concentré (hypotonique) jusqu'à égalisation des concentrations.\n\n2. Ultrastructure de la membrane plasmique (modèle de la mosaïque fluide) :\nAu microscope électronique, la membrane plasmique (épaisseur de 7,5 nm) présente une architecture moléculaire organisée en mosaïque fluide :\nA. Une bicouche de phospholipides :\n- Chaque molécule de phospholipide possède une tête polaire hydrophile (orientée vers les milieux aqueux intra- et extracellulaires) et deux queues d'acides gras hydrophobes / lipophiles (orientées face à face au cœur de la membrane).\n- Cette bicouche constitue une barrière imperméable aux ions et aux grosses molécules hydrophiles, mais laisse passer librement les gaz et les molécules liposolubles.\n\nB. Des protéines membranaires diversifiées intégrées dans la bicouche :\n- Des protéines intrinsèques (ou transmembranaires) qui traversent entièrement la bicouche de part en part. Certaines forment des pores aqueux (canaux hydriques / aquaporines) ou des canaux ionophores spécifiques laissant passer les ions minéraux.\n- Des protéines porteuses (ou perméases) qui lient spécifiquement un soluté et changent de conformation spatiale (effet navette) pour le basculer d'un côté à l'autre de la membrane.\n- Des protéines extrinsèques (périphériques) fixées à la surface interne ou externe de la bicouche.",
      "formulas": [
        {
          "name": "Principe de la dialyse passive",
          "formula": "Milieu hypertonique en soluté ⟶ Milieu hypotonique en soluté (jusqu'à égalisation des concentrations)",
          "note": "Transport passif sans aucune consommation d'énergie chimique."
        },
        {
          "name": "Structure de la membrane plasmique",
          "formula": "Membrane = Bicouche de phospholipides (40 %) + Protéines intégrées & périphériques (55 %) + Glucides (5 %)",
          "note": "Modèle de la mosaïque fluide (Singer et Nicolson, 1972)."
        }
      ],
      "keyRule": "LA DIALYSE EST LA DIFFUSION PASSIVE DES SOLUTÉS À TRAVERS UNE MEMBRANE PERMÉABLE, DU MILIEU LE PLUS CONCENTRÉ VERS LE MOINS CONCENTRÉ. La membrane plasmique est constituée d'une bicouche phospholipidique hydrophobe dans laquelle sont insérées des protéines canaux et perméases régulant le passage des ions.",
      "workedExample": {
        "title": "Exemple résolu : Analyse d'un dispositif expérimental de dialyse",
        "statement": "Un osmomètre est monté avec une membrane de cellophane séparant deux compartiments :\n- Compartiment interne : solution de glucose à 50 g/L (niveau initial a).\n- Cristallisoir externe : eau distillée.\nAu bout de 30 minutes, le liquide monte au niveau b. Après 4 heures, le liquide redescend au niveau c (niveau initial a).\n1. Expliquer la montée initiale du liquide au niveau b.\n2. Expliquer la redescente ultérieure du liquide au niveau c.\n3. En déduire la nature de la membrane de cellophane utilisée.",
        "methodSteps": [
          "Étape 1 : Explication de la montée initiale en b :\nAu départ, l'eau distillée diffuse plus rapidement par osmose vers la solution hypertonique de glucose que le glucose ne peut sortir : l'afflux d'eau fait monter le liquide dans le tube fin.",
          "Étape 2 : Explication de la redescente en c :\nLa membrane de cellophane possède des pores laissant également passer les molécules de glucose : le glucose diffuse lentement vers le cristallisoir par dialyse. Les concentrations s'égalisent de part et d'autre (isotonie) et la pression hydrostatique ramène le liquide à son niveau initial.",
          "Étape 3 : Nature de la membrane :\nLa membrane laisse passer à la fois le solvant (l'eau) et le soluté (glucose) : il s'agit donc d'une membrane perméable (et non d'une membrane hémiperméable stricte)."
        ],
        "conclusion": "Il y a eu d'abord osmose rapide de l'eau, puis dialyse plus lente du glucose à travers la membrane perméable jusqu'à équilibre."
      },
      "exercises": [
        {
          "id": "svt_2c_c13_p1_q1",
          "type": "mcq",
          "prompt": "Comment appelle-t-on le déplacement spontané de substances dissoutes (solutés) d'un milieu hypertonique vers un milieu hypotonique à travers une membrane perméable ?",
          "options": [
            "La dialyse (ou diffusion de soluté)",
            "L'osmose",
            "La photosynthèse",
            "La turgescence vacuolaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dialyse désigne la diffusion des solutés du milieu le plus concentré vers le moins concentré, alors que l'osmose concerne le déplacement du solvant (eau)."
        },
        {
          "id": "svt_2c_c13_p1_q2",
          "type": "mcq",
          "prompt": "De quoi est constituée l'armature de base de la membrane plasmique selon le modèle de la mosaïque fluide ?",
          "options": [
            "D'une double couche (bicouche) de phospholipides amphiphiles",
            "D'une paroi de cellulose rigide et épaisse",
            "D'un réseau d'acide désoxyribonucléique",
            "D'une couche uniforme de sels de calcium minéralisés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La membrane plasmique est formée d'une double couche de phospholipides amphiphiles (têtes hydrophiles vers l'extérieur, queues lipophiles hydrophobes à l'intérieur)."
        },
        {
          "id": "svt_2c_c13_p1_q3",
          "type": "mcq",
          "prompt": "Quelle est l'orientation des têtes hydrophiles des phospholipides dans la membrane cellulaire ?",
          "options": [
            "Elles sont tournées vers les milieux aqueux extracellulaire et intracellulaire (cytoplasme)",
            "Elles sont enfouies face à face au centre de la bicouche",
            "Elles sont toutes orientées vers l'intérieur du noyau",
            "Elles forment des cristaux solides à la périphérie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les têtes polaires hydrophiles sont en contact avec l'eau des milieux intra- et extracellulaires, tandis que les queues hydrophobes fuient l'eau au cœur de la membrane."
        },
        {
          "id": "svt_2c_c13_p1_q4",
          "type": "mcq",
          "prompt": "Quel rôle jouent les protéines intégrées (transmembranaires) de la membrane plasmique ?",
          "options": [
            "Elles forment des canaux ioniques et des transporteurs facilitant le passage sélectif des ions et molécules polaires",
            "Elles empêchent définitivement l'entrée de toute molécule minérale",
            "Elles synthétisent directement l'ADN lors de la mitose",
            "Elles transforment la cellule végétale en cellule animale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les protéines transmembranaires constituent des voies de passage spécialisées (canaux, pores, perméases) indispensables au transit des ions polaires à travers la bicouche lipidique hydrophobe."
        },
        {
          "id": "svt_2c_c13_p1_q5",
          "type": "mcq",
          "prompt": "Comment appelle-t-on une membrane qui laisse passer à la fois l'eau et les solutés dissous ?",
          "options": [
            "Une membrane perméable",
            "Une membrane hémiperméable",
            "Une membrane imperméable",
            "Une membrane cutinisée étanche"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une membrane perméable laisse circuler aussi bien le solvant (eau) que les solutés dissous (diffusion par dialyse)."
        },
        {
          "id": "svt_2c_c13_p1_q6",
          "type": "mcq",
          "prompt": "Quel état est atteint lorsque la quantité de solutés diffusant à travers la membrane est identique dans les deux compartiments ?",
          "options": [
            "L'état d'équilibre dynamique (égalisation des concentrations)",
            "L'état de déshydratation irréversible",
            "L'état de turgescence maximale explosive",
            "L'état d'ébullition spontanée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À la fin de la dialyse, les concentrations s'égalisent de part et d'autre : les flux dans les deux sens deviennent égaux, marquant l'équilibre dynamique."
        },
        {
          "id": "svt_2c_c13_p1_q7",
          "type": "mcq",
          "prompt": "Quelle expérience simple met en évidence l'absorption d'ions minéraux par les cellules de racine d'oignon au laboratoire ?",
          "options": [
            "L'immersion dans une solution bleue de sulfate de cuivre et l'observation de la coloration bleue à l'intérieur des cellules",
            "La pesée des feuilles d'une plante exposée à l'obscurité",
            "L'application d'un colorant noir sur la cuticule d'une tige",
            "La mise sous cloche d'une graine en dormance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sulfate de cuivre pénètre à travers la membrane des cellules racinaires qui se colorent en bleu, attestant de l'absorption des ions cuivre."
        },
        {
          "id": "svt_2c_c13_p1_q8",
          "type": "mcq",
          "prompt": "Qui a formulé en 1972 le modèle de la 'mosaïque fluide' pour décrire la membrane plasmique ?",
          "options": [
            "Singer et Nicolson",
            "Watson et Crick",
            "Dutrochet et Liebig",
            "Robert Brown"
          ],
          "correctAnswerIndex": 0,
          "explanation": "S.J. Singer et G.L. Nicolson ont proposé en 1972 le modèle universellement admis de la mosaïque fluide membranaire."
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch13_p2_transports_passifs_transports_actifs_atp",
      "order": 2,
      "title": "Transports passifs (diffusion simple et facilitée) et transport actif dépendant de l'ATP",
      "summary": "Différencier le transport passif (diffusion libre et facilitée par perméases/canaux sans ATP) du transport actif (pompes ioniques contre gradient avec hydrolyse d'ATP).",
      "conceptExplanation": "1. Classification des modes de transport transmembranaire des solutés :\nLe passage des ions minéraux et des molécules à travers la membrane plasmique de la cellule racinaire s'effectue selon deux grands mécanismes fondamentaux :\n\n2. Les transports passifs (sans dépense d'énergie métabolique) :\n- Caractéristique essentielle : ils s'effectuent TOUJOURS dans le sens du gradient de concentration (du milieu le plus concentré vers le milieu le moins concentré en soluté), spontanément, sans consommation d'ATP.\n- On distingue deux formes de transport passif :\n  A. La diffusion libre (ou diffusion simple) :\n     * Passage direct des molécules solubles à travers la bicouche phospholipidique ou par des canaux hydriques.\n     * Concerne les molécules liposolubles (vitamines A, D, E, K), les gaz dissous (O₂, CO₂) et très petites molécules non chargées.\n  B. La diffusion facilitée :\n     * Passage d'ions (K⁺, Na⁺, Ca²⁺, Cl⁻, NO₃⁻) ou de molécules polaires (glucose) incapables de traverser seuls la bicouche hydrophobe.\n     * Ce passage est accéléré et rendu possible par des protéines membranaires spécifiques :\n       - Soit par des canaux ioniques (ionophores) : tunnels aqueux bordés d'acides aminés chargés qui s'ouvrent sélectivement.\n       - Soit par des protéines porteuses appelées perméases (ou transporteurs navettes) : la perméase fixe spécifiquement l'ion sur sa face externe, subit un changement de conformation spatiale (rotation/basculement) et le libère sur la face interne, sans consommer d'énergie.\n\n3. Le transport actif (avec dépense d'énergie métabolique) :\n- Caractéristique essentielle : déplacement d'ions minéraux CONTRE leur gradient de concentration (du milieu le moins concentré vers le milieu le plus concentré).\n- Pourquoi est-il indispensable à la plante ? Dans le sol, les ions minéraux indispensables (K⁺, nitrates NO₃⁻, phosphates) sont souvent très dilués (quelques millimoles par litre), alors que la vacuole de la cellule végétale en contient des concentrations 100 à 1 000 fois plus élevées ! Pour accumuler ces ions vitaux, la racine doit donc les pomper contre le gradient.\n- Mécanisme moléculaire des pompes ioniques :\n  * Ce transport est assuré par des protéines transmembranaires appelées pompes ioniques (ex : pompe à protons H⁺-ATPase, pompe Na⁺/K⁺).\n  * Ces pompes fonctionnent grâce à l'énergie fournie par l'hydrolyse d'une molécule d'ATP (Adénosine Triphosphate) catalysée par l'activité enzymatique ATPase intégrée :\n    ATP + H₂O ⟶ ADP + Pi + Énergie\n    (Adénosine Triphosphate ⟶ Adénosine Diphosphate + Phosphate inorganique + Énergie libre utilisable)\n- Tout poison respiratoire (ex : cyanure) ou baisse de température qui inhibe la synthèse d'ATP dans les mitochondries bloque instantanément le transport actif des ions minéraux dans la racine.",
      "formulas": [
        {
          "name": "Hydrolyse énergétique de l'ATP",
          "formula": "ATP + H₂O ⟶ ADP + Pi + Énergie",
          "note": "Fournit l'énergie nécessaire aux pompes ioniques contre le gradient."
        },
        {
          "name": "Comparaison Transport passif vs Transport actif",
          "formula": "Passif = Sens du gradient (Hyper ⟶ Hypo) sans ATP  |  Actif = Contre le gradient (Hypo ⟶ Hyper) avec ATP",
          "note": "Le transport actif permet l'accumulation intracellulaire d'ions indispensables."
        }
      ],
      "keyRule": "LE TRANSPORT PASSIF (DIFFUSION LIBRE ET FACILITÉE PAR CANAUX OU PERMÉASES) SE FAIT DANS LE SENS DU GRADIENT SANS CONSOMMATION D'ATP. LE TRANSPORT ACTIF S'EFFECTUE CONTRE LE GRADIENT DE CONCENTRATION GRÂCE À DES POMPES IONIQUES CONSOMMANT L'ÉNERGIE ISSUE DE L'HYDROLYSE DE L'ATP (ATP ⟶ ADP + Pi + E).",
      "workedExample": {
        "title": "Exemple résolu : Identification des mécanismes de passage d'ions à travers la membrane",
        "statement": "Dans une cellule racinaire de maïs, on étudie 3 cas de transport ionique :\n- Cas 1 : Des ions K⁺ (plus concentrés dans le sol que dans l'eau d'imbibition cellulaire au laboratoire) traversent la membrane par des canaux sans consommation d'ATP.\n- Cas 2 : Un ion spécifique est capté par une perméase qui bascule pour le transférer à l'intérieur, dans le sens des concentrations décroissantes, sans utiliser d'ATP.\n- Cas 3 : Des ions nitrates NO₃⁻ (concentration externe = 0,5 mmol/L, concentration interne = 25 mmol/L) pénètrent dans la racine. Si l'on ajoute du cyanure (qui stoppe la synthèse d'ATP), ce transport s'arrête net.\n1. Qualifier le mode de transport dans chaque cas.\n2. Justifier la réponse pour le cas 3 et expliquer l'effet du cyanure.",
        "methodSteps": [
          "Étape 1 : Analyse du cas 1 :\nLe transport se fait dans le sens du gradient de concentration, par des canaux protéiques et sans consommation d'énergie (ATP) : il s'agit d'un transport passif par diffusion facilitée (ou libre par canaux transmembranaires).",
          "Étape 2 : Analyse du cas 2 :\nL'intervention d'une protéine porteuse (perméase) assurant un effet navette dans le sens du gradient sans ATP caractérise une diffusion facilitée (transport passif).",
          "Étape 3 : Analyse du cas 3 :\nLes ions NO₃⁻ passent d'un milieu peu concentré (0,5 mmol/L) vers un milieu 50 fois plus concentré (25 mmol/L) : le déplacement se fait contre le gradient de concentration. Ce transport nécessite l'hydrolyse de l'ATP produit par les mitochondries. Le cyanure inhibe la respiration mitochondriale, stoppant la production d'ATP et bloquant la pompe ionique : c'est un transport actif."
        ],
        "conclusion": "Cas 1 = transport passif par canaux ; Cas 2 = diffusion facilitée par perméases ; Cas 3 = transport actif assuré par pompes à ATP."
      },
      "exercises": [
        {
          "id": "svt_2c_c13_p2_q1",
          "type": "mcq",
          "prompt": "Quelle est la caractéristique distinctive fondamentale du transport actif par rapport au transport passif ?",
          "options": [
            "Il transporte les ions contre le gradient de concentration en consommant de l'énergie issue de l'hydrolyse de l'ATP",
            "Il s'effectue sans aucune intervention de protéines membranaires",
            "Il ne fonctionne que dans des cellules végétales mortes",
            "Il fait obligatoirement sortir l'eau de la vacuole"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le transport actif nécessite des protéines de transport (pompes) et consomme de l'énergie métabolique (ATP) pour déplacer les solutés contre leur gradient de concentration."
        },
        {
          "id": "svt_2c_c13_p2_q2",
          "type": "mcq",
          "prompt": "Quelle équation chimique représente la libération d'énergie utilisable par les pompes ioniques de la membrane ?",
          "options": [
            "ATP + H₂O ⟶ ADP + Pi + Énergie",
            "Glucose + O₂ ⟶ CO₂ + H₂O",
            "ADP + Pi + Énergie ⟶ ATP",
            "6 CO₂ + 6 H₂O ⟶ C₆H₁₂O₆ + 6 O₂"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'hydrolyse de la liaison phosphoanhydre terminale de l'ATP libère de l'ADP, un phosphate inorganique (Pi) et de l'énergie directement couplée au transport actif."
        },
        {
          "id": "svt_2c_c13_p2_q3",
          "type": "mcq",
          "prompt": "Comment appelle-t-on le transport passif d'ions minéraux dans le sens du gradient de concentration utilisant des perméases (protéines porteuses) ?",
          "options": [
            "La diffusion facilitée",
            "La diffusion simple directe",
            "La phagocytose",
            "L'endocytose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La diffusion facilitée utilise des perméases ou des canaux pour accélérer le passage passif des ions dans le sens de leur gradient sans consommer d'ATP."
        },
        {
          "id": "svt_2c_c13_p2_q4",
          "type": "mcq",
          "prompt": "Pourquoi les racines des plantes ont-elles absolument besoin du transport actif pour absorber les ions du sol ?",
          "options": [
            "Parce que les ions minéraux utiles sont souvent beaucoup moins concentrés dans le sol que dans le suc vacuolaire des cellules racinaires",
            "Parce que les poils absorbants refusent d'absorber l'eau sans consommer de graisse",
            "Parce que les ions minéraux sont gazeux et s'échappent dans l'air",
            "Parce que la membrane plasmique n'a pas de bicouche de lipides"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour pomper et accumuler des ions à forte concentration dans la vacuole à partir d'un sol dilué, la racine doit lutter contre le gradient grâce au transport actif."
        },
        {
          "id": "svt_2c_c13_p2_q5",
          "type": "mcq",
          "prompt": "Quel est l'effet de l'application d'un inhibiteur respiratoire (comme le cyanure ou le dinitrophénol) sur l'absorption racinaire des nitrates contre le gradient ?",
          "options": [
            "L'absorption active est immédiatement stoppée car la synthèse d'ATP mitochondriale est bloquée",
            "L'absorption devient dix fois plus rapide et spontanée",
            "La plante se met à rejeter tout son oxygène par les racines",
            "La paroi pectocellulosique se liquéfie instantanément"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le transport actif dépendant de l'ATP, tout poison respiratoire bloquant la chaîne respiratoire mitochondriale prive les pompes de carburant et arrête le transport."
        },
        {
          "id": "svt_2c_c13_p2_q6",
          "type": "mcq",
          "prompt": "Parmi les modes de transport suivants, lequel classe-t-on parmi les transports passifs ?",
          "options": [
            "Le passage des ions par les canaux transmembranaires ionophores dans le sens du gradient",
            "Le fonctionnement de la pompe Na⁺/K⁺ consommant de l'ATP",
            "L'accumulation d'ions contre le gradient de concentration",
            "L'hydrolyse enzymatique de l'ATP par l'ATPase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le passage spontané à travers les canaux ionophores dans le sens du gradient de concentration est un transport passif ne nécessitant pas d'énergie."
        },
        {
          "id": "svt_2c_c13_p2_q7",
          "type": "mcq",
          "prompt": "Comment fonctionne une protéine porteuse de type perméase lors d'un transport passif ?",
          "options": [
            "Elle fixe l'ion sur un site spécifique, subit un changement de conformation réversible et le libère de l'autre côté de la membrane",
            "Elle brûle l'ion par réaction chimique pour en faire du gaz carbonique",
            "Elle perfore la paroi cellulosique de façon définitive",
            "Elle transforme l'ion minéral en molécule d'amidon insoluble"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les perméases fonctionnent par transition conformationnelle réversible (effet navette) sans rupture covalente ni hydrolyse d'ATP lors de la diffusion facilitée."
        },
        {
          "id": "svt_2c_c13_p2_q8",
          "type": "mcq",
          "prompt": "Dans quel compartiment cellulaire l'ATP indispensable au transport actif des racines est-il principalement produit ?",
          "options": [
            "Dans les mitochondries, grâce à la respiration cellulaire",
            "Dans les chloroplastes, par photosynthèse souterraine",
            "Dans la paroi pectocellulosique externe",
            "Dans le suc de la vacuole centrale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les cellules des racines (non chlorophylliennes et vivant sous terre) produisent leur ATP par respiration cellulaire au sein de leurs mitochondries."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 14 : LE DEVENIR DES SUBSTANCES ABSORBÉES PAR LA PLANTE VERTE
// ============================================================================
export const svt2deCDevenirSubstancesAbsorbeesChapter: CurriculumChapter = {
  "id": "seconde_c_svt_ch14_devenir_substances_absorbees_plante",
  "subjectId": "svt",
  "gradeLevel": "seconde_c",
  "order": 14,
  "officialVolumeHours": 4,
  "title": "Leçon 14 — Le devenir des substances absorbées par la plante verte",
  "summary": "Trajet et circulation des sèves (transit horizontal racinaire par osmose/transport actif, transit vertical de la sève brute dans le xylème sous la poussée racinaire et l'aspiration foliaire ; circulation de la sève élaborée dans le phloème), et mécanisme stomatique de la transpiration foliaire.",
  "points": [
    {
      "id": "seconde_c_svt_ch14_p1_circulation_seves_brute_elaboree_xyleme_phloeme",
      "order": 1,
      "title": "Circulation de la sève brute (xylème) et de la sève élaborée (phloème)",
      "summary": "Décrire le transit horizontal dans la racine, le transit vertical ascendant de la sève brute dans les vaisseaux de bois (xylème) et la distribution de la sève élaborée dans le phloème.",
      "conceptExplanation": "1. Définition et composition des deux sèves végétales :\n- La sève brute : liquide transparent composé d'eau et de sels minéraux dissous (ions K⁺, Ca²⁺, NO₃⁻, PO₄³⁻, etc.) absorbés par les racines. C'est une sève minérale ascendante.\n- La sève élaborée : solution visqueuse riche en matières organiques solubles (saccharose, acides aminés, hormones végétales) fabriquées dans les feuilles par photosynthèse, diluées dans de l'eau. C'est une sève nourricière redistribuée à toute la plante.\n\n2. Le transit de la sève brute :\nA. Le transit horizontal (dans la racine) :\n- L'eau et les ions absorbés par le poil absorbant traversent horizontalement l'écorce racinaire (assise pilifère → parenchyme cortical) vers le cylindre central :\n  * Du poil absorbant jusqu'à l'endoderme, le gradient de succion (pression osmotique) est croissant : l'eau circule de cellule en cellule par osmose (transfert passif).\n  * Au niveau de l'endoderme (présentant les cadres imperméables de Caspary) et du péricycle, le gradient de succion devient décroissant : l'eau et surtout les ions minéraux franchissent cette barrière par transport actif pour être déversés dans les vaisseaux conducteurs.\n\nB. Le transit vertical ascendant (dans la tige et les feuilles) :\n- La sève brute monte des racines jusqu'aux feuilles à travers les vaisseaux de bois ou xylème (files longitudinales de cellules mortes aux parois épaissies et imprégnées de lignine imperméable, dont les cloisons transversales ont disparu pour former de longs tubes continus).\n- Les deux forces motrices de l'ascension de la sève brute :\n  1. La poussée racinaire (ou radiculaire) : moteur inférieur dû à l'afflux continu d'eau par osmose et transport actif dans le cylindre central de la racine, créant une pression hydrostatique positive (mise en évidence par le saignement de la vigne ou du maïs sectionné au printemps surmonté d'un manomètre à mercure).\n  2. L'aspiration foliaire (moteur dominant supérieur) : la perte d'eau continue par transpiration au niveau des feuilles crée une forte dépression osmotique (tension négative) qui « tire » la colonne d'eau ininterrompue vers le haut (cohésion des molécules d'eau liée aux liaisons hydrogène).\n\n3. La circulation de la sève élaborée :\n- Dans les feuilles éclairées, la sève brute est transformée en matière organique par photosynthèse :\n  6 CO₂ + 6 H₂O + lumière ⟶ C₆H₁₂O₆ (glucose) + 6 O₂\n- Le glucose est converti en saccharose et combiné aux ions azotés pour former des acides aminés constituant la sève élaborée.\n- Cette sève élaborée circule dans les tubes criblés du liber ou phloème (cellules vivantes superposées dont les parois transversales sont perforées de pores appelés cribles).\n- Trajet bidirectionnel (mouvements ascendant et descendant) : elle approvisionne tous les organes non chlorophylliens ou consommateurs :\n  * Vers le haut : bourgeons terminaux en croissance, fleurs, jeunes feuilles et fruits.\n  * Vers le bas : tige, tronc, racines et organes de réserve spécialisés (tubercules d'igname, manioc, pomme de terre, bulbes d'oignon, graines).",
      "formulas": [
        {
          "name": "Moteurs de l'ascension de la sève brute",
          "formula": "Ascension de la sève brute = Poussée racinaire (base) + Aspiration foliaire (sommet, dominante)",
          "note": "Circulation ascendante exclusive dans les vaisseaux de bois (xylème)."
        },
        {
          "name": "Devenir de la sève brute dans les feuilles",
          "formula": "Sève brute (H₂O + ions) + CO₂ + Lumière ⟶ Sève élaborée (Saccharose, acides aminés) dans le phloème",
          "note": "Circulation bidirectionnelle (vers les bourgeons, fruits, racines et réserves)."
        }
      ],
      "keyRule": "LA SÈVE BRUTE (EAU + SELS MINÉRAUX) MONTE DES RACINES AUX FEUILLES DANS LES VAISSEAUX DE BOIS (XYLÈME) SOUS L'ACTION COMBINÉE DE LA POUSSÉE RACINAIRE ET DE L'ASPIRATION FOLIAIRE. LA SÈVE ÉLABORÉE (MATIÈRES ORGANIQUES DE PHOTOSYNTHÈSE) CIRCULE DANS LES TUBES CRIBLÉS DU LIBER (PHLOÈME) VERS TOUS LES ORGANES CONSOMMATEURS ET DE RÉSERVE.",
      "workedExample": {
        "title": "Exemple résolu : Analyse de l'expérience du pied de vigne sectionné (mise en évidence de la poussée racinaire)",
        "statement": "Au printemps, on sectionne la tige d'un jeune pied de vigne à quelques centimètres au-dessus du sol et on raccorde hermétiquement le tronc à un tube coudé en U contenant du mercure (manomètre).\n- Au temps t₀ : le mercure est au niveau initial identique dans les deux branches du tube.\n- Au temps t₁ (après quelques heures) : un liquide aqueux s'est écoulé du tronc sectionné et pousse le mercure, créant une dénivellation de plusieurs centimètres.\n1. Quel liquide s'écoule du tronc sectionné ?\n2. Nommer la force motrice mise en évidence par cette expérience.\n3. Expliquer l'origine biophysique de cette poussée.\n4. Pourquoi cette force ne suffit-elle pas à elle seule pour expliquer la montée de la sève au sommet des arbres géants (ex : Fromager de 50 m de haut) ?",
        "methodSteps": [
          "Étape 1 : Nature du liquide écoulé :\nLe liquide qui exsude du tronc sectionné est la sève brute (eau et ions minéraux puisés dans le sol).",
          "Étape 2 : Nom de la force motrice :\nIl s'agit de la poussée racinaire (ou radiculaire).",
          "Étape 3 : Origine de la poussée racinaire :\nL'accumulation active d'ions minéraux dans les vaisseaux conducteurs de la racine par transport actif crée une forte pression osmotique qui attire continuellement l'eau du sol, refoulant la sève brute vers le haut sous pression hydrostatique positive.",
          "Étape 4 : Limite de la poussée racinaire chez les grands arbres :\nLa poussée racinaire ne développe qu'une pression de 1 à 2 atmosphères (capable d'élever l'eau de 10 à 20 m au maximum). Pour faire monter la sève brute à 50 mètres de haut chez les grands arbres de la forêt ivoirienne, le moteur principal et indispensable est l'aspiration foliaire générée par la transpiration des feuilles."
        ],
        "conclusion": "L'expérience prouve l'existence de la poussée racinaire, qui collabore avec l'aspiration foliaire pour acheminer la sève brute dans tout l'appareil végétal."
      },
      "exercises": [
        {
          "id": "svt_2c_c14_p1_q1",
          "type": "mcq",
          "prompt": "Dans quels vaisseaux conducteurs circule la sève brute (eau et sels minéraux) de bas en haut dans la plante ?",
          "options": [
            "Dans les vaisseaux de bois ou xylème",
            "Dans les tubes criblés du liber ou phloème",
            "Dans les méristèmes apicaux",
            "Dans la cuticule externe imperméable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La sève brute est acheminée des racines vers les feuilles exclusivement à travers les vaisseaux de bois (xylème)."
        },
        {
          "id": "svt_2c_c14_p1_q2",
          "type": "mcq",
          "prompt": "Dans quels tissus conducteurs circule la sève élaborée riche en substances organiques synthétisées par les feuilles ?",
          "options": [
            "Dans les tubes criblés du liber ou phloème",
            "Dans les vaisseaux lignifiés de bois mort",
            "Dans les poils absorbants",
            "Dans la chambre sous-stomatique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La sève élaborée circule dans les tubes criblés du phloème (liber) pour nourrir l'ensemble des organes de la plante."
        },
        {
          "id": "svt_2c_c14_p1_q3",
          "type": "mcq",
          "prompt": "Quelles sont les deux forces motrices qui assurent l'ascension continue de la sève brute dans la tige ?",
          "options": [
            "La poussée racinaire (à la base) et l'aspiration foliaire due à la transpiration (au sommet)",
            "La gravité terrestre et la force centrifuge de la Terre",
            "La fermentation alcoolique et la digestion lysosomiale",
            "Le battement des centrioles du centrosome"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ascension de la sève brute est assurée par la poussée racinaire qui refoule l'eau par le bas et l'aspiration foliaire qui la tire puissamment vers le haut."
        },
        {
          "id": "svt_2c_c14_p1_q4",
          "type": "mcq",
          "prompt": "Vers quels organes la sève élaborée est-elle distribuée par le phloème ?",
          "options": [
            "Vers tous les organes consommateurs en croissance (bourgeons, fruits) et organes de réserve (tubercules, racines, graines)",
            "Exclusivement vers l'atmosphère extérieure par évaporation",
            "Uniquement vers les feuilles chlorophylliennes qui la fabriquent",
            "Vers la cuticule transparente pour capter la lumière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La sève élaborée a une circulation ascendante et descendante pour nourrir tous les organes non photosynthétiques et remplir les organes de réserve."
        },
        {
          "id": "svt_2c_c14_p1_q5",
          "type": "mcq",
          "prompt": "Quelle est la caractéristique anatomique des vaisseaux de bois (xylème) ?",
          "options": [
            "Ce sont des cellules mortes allongées dont les parois sont imprégnées de lignine et dont les parois transversales ont disparu",
            "Ce sont des cellules vivantes plurinucléées à parois cellulosiques très fines",
            "Ce sont des sacs clos remplis d'amidon insoluble sans aucune communication",
            "Ce sont des vacuoles géantes mobiles qui se déplacent le long de la tige"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le xylème est constitué de tubes continus formés de cellules végétales mortes lignifiées et vidées de leur cytoplasme pour laisser passer le flux d'eau."
        },
        {
          "id": "svt_2c_c14_p1_q6",
          "type": "mcq",
          "prompt": "Dans la racine, comment l'eau circule-t-elle horizontalement du poil absorbant jusqu'à l'endoderme ?",
          "options": [
            "Par osmose, le gradient de succion des vacuoles étant croissant vers l'intérieur de l'écorce",
            "Par transport actif consommant tout l'ATP cellulaire",
            "Par évaporation spontanée dans les méats gazeux",
            "Par décomposition bactérienne de la paroi"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans le parenchyme cortical de la racine, la concentration des vacuoles augmente progressivement du poil absorbant vers l'endoderme, créant un gradient osmotique favorable au passage de l'eau."
        },
        {
          "id": "svt_2c_c14_p1_q7",
          "type": "mcq",
          "prompt": "Que constate-t-on si l'on pratique une décortication annulaire superficielle (enlèvement d'un anneau d'écorce et de phloème) sur le tronc d'un arbre ?",
          "options": [
            "La sève brute continue de monter par le bois, mais la sève élaborée s'accumule au-dessus de l'anneau créant un bourrelet de cicatrisation",
            "L'arbre perd immédiatement toutes ses feuilles en cinq minutes",
            "La sève brute s'échappe totalement et les racines éclatent",
            "Les racines grossissent dix fois plus vite que les feuilles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'expérience historique de décortication annulaire de Malpighi montre que le phloème est périphérique (la sève élaborée s'arrête et forme un bourrelet riche en sucres), alors que le xylème central reste intact et continue d'alimenter les feuilles en sève brute."
        },
        {
          "id": "svt_2c_c14_p1_q8",
          "type": "mcq",
          "prompt": "Quelle est la principale matière organique soluble transportée par la sève élaborée chez la plupart des végétaux supérieurs ?",
          "options": [
            "Le saccharose",
            "Le glycogène",
            "L'amidon brut insoluble",
            "Le chlorure de sodium"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le saccharose est la forme glucidique soluble prépondérante, chimiquement stable et non réductrice, utilisée pour véhiculer l'énergie dans la sève élaborée."
        }
      ]
    },
    {
      "id": "seconde_c_svt_ch14_p2_transpiration_foliaire_mecanisme_stomates",
      "order": 2,
      "title": "La transpiration foliaire et le mécanisme de régulation stomatique",
      "summary": "Mettre en évidence la transpiration foliaire, décrire la structure d'un stomate et expliquer le mécanisme biophysique de l'ouverture et de la fermeture de l'ostiole sous l'effet de la lumière et de la turgescence.",
      "conceptExplanation": "1. Mise en évidence et rôle de la transpiration foliaire :\n- Lorsqu'on enveloppe une feuille d'une plante en pot avec un sachet plastique transparent et étanche, on observe au bout de quelques heures l'apparition de buée et de gouttelettes d'eau liquide sur les parois intérieures du sachet.\n- La transpiration végétale est le rejet continu dans l'atmosphère d'une grande partie de l'eau absorbée par la racine (plus de 90 %) sous forme de vapeur d'eau.\n- Rôles majeurs de la transpiration :\n  * Elle est le moteur principal de l'aspiration foliaire qui permet à la sève brute de monter jusqu'à la cime des arbres.\n  * Elle assure la thermorégulation de la plante (l'évaporation consomme de la chaleur et protège les feuilles contre l'échauffement létal dû au soleil tropical).\n\n2. Siège de la transpiration : les stomates :\n- L'épiderme des feuilles (particulièrement la face inférieure protégée du soleil direct) est percé d'orifices microscopiques régulables appelés stomates.\n- Structure microscopique d'un stomate :\n  * Deux cellules épidermiques réniformes (en forme de haricot), appelées cellules stomatiques ou cellules de garde, délimitant entre elles une ouverture centrale ajustable appelée ostiole.\n  * Sous l'ostiole se trouve une cavité appelée chambre sous-stomatique communicant avec les méats du parenchyme lacuneux.\n  * Les cellules stomatiques contiennent des chloroplastes fonctionnels (contrairement aux autres cellules banales de l'épiderme qui en sont dépourvues).\n  * Particularité anatomique capitale : la paroi des cellules stomatiques qui borde l'ostiole est très épaisse et rigide, alors que la paroi externe opposée est mince et très élastique.\n\n3. Mécanisme biophysique d'ouverture et de fermeture de l'ostiole :\nL'état de l'ostiole (ouvert ou fermé) dépend des variations réversibles de turgescence des deux cellules de garde :\n\nA. Mécanisme de l'ouverture de l'ostiole (le jour / en présence de lumière) :\n- Dès l'approche du jour (vers 6 h du matin), la lumière stimule la photosynthèse dans les chloroplastes des cellules stomatiques et active les pompes ioniques qui font entrer massivement des ions potassium (K⁺) et du malate.\n- La concentration du suc vacuolaire des cellules stomatiques augmente fortement, élevant leur pression osmotique interne.\n- Par osmose, l'eau des cellules épidermiques voisines afflue dans les cellules stomatiques qui deviennent très turgescentes.\n- Sous l'effet de la turgescence, la paroi externe mince et souple s'étire et se bombe vers l'extérieur. En se distendant, elle tire mécaniquement sur la paroi interne épaisse rigide concave, ce qui écarte les deux cellules : l'ostiole s'ouvre largement (diamètre ostiolaire maximal vers 12 h à midi, atteignant 10 à 12 µm) et la transpiration devient maximale.\n\nB. Mécanisme de fermeture de l'ostiole (la nuit ou en cas de sécheresse hydrique) :\n- À l'obscurité (ou en cas de stress hydrique sous l'effet de l'acide abscissique), la photosynthèse s'arrête et les ions K⁺ sortent des cellules stomatiques.\n- La concentration vacuolaire diminue, la pression osmotique baisse.\n- L'eau quitte les cellules stomatiques par osmose : elles perdent leur turgescence (plasmolyse relative).\n- Les parois minces se détendent, les parois internes épaisses reprennent leur forme droite et viennent s'accoler : l'ostiole se ferme complètement (diamètre ostiolaire nul de 22 h à 2 h du matin), stoppant net la transpiration et protégeant la plante contre le flétrissement.",
      "formulas": [
        {
          "name": "Cycle nycthéméral d'ouverture des stomates",
          "formula": "Lumière (matin) ⟶ Entrée de K⁺ ⟶ Turgescence ⟶ Déformation des parois ⟶ Ouverture de l'ostiole (transpiration maximale à midi)",
          "note": "Obscurité / Sécheresse ⟶ Perte de turgescence ⟶ Fermeture de l'ostiole (diamètre nul la nuit)."
        },
        {
          "name": "Bilan hydrique de la plante",
          "formula": "Bilan = Eau absorbée par les racines - Eau rejetée par transpiration foliaire",
          "note": "Plus de 90 % de l'eau absorbée est restituée à l'atmosphère par transpiration."
        }
      ],
      "keyRule": "L'OUVERTURE DE L'OSTIOLE EST RÉGULÉE PAR LA TURGESCENCE DES CELLULES STOMATIQUES. En présence de lumière, l'afflux d'ions et l'entrée d'eau font gonfler les cellules de garde : la paroi mince externe se distend et écarte la paroi épaisse interne, ouvrant l'ostiole. À l'obscurité ou en manque d'eau, la plasmolyse referme l'ostiole.",
      "workedExample": {
        "title": "Exemple résolu : Analyse de l'évolution du diamètre ostiolaire au cours d'une journée de 24 heures",
        "statement": "Des élèves de 2nde C au Lycée de Niakara mesurent le diamètre ostiolaire des stomates d'une feuille de cotonnier au cours d'une journée ensoleillée :\n- De 22 h à 2 h : diamètre = 0 µm.\n- À 6 h : diamètre = 3,5 µm.\n- À 12 h (midi) : diamètre = 12 µm (maximum journalier).\n- À 18 h : diamètre = 9 µm.\n- À 22 h : diamètre = 0 µm.\n1. Analyser l'évolution du diamètre de l'ostiole au cours des 24 heures.\n2. Expliquer l'état de l'ostiole à 12 h et son mécanisme biophysique.\n3. Expliquer pourquoi l'ostiole est totalement fermé entre 22 h et 2 h.",
        "methodSteps": [
          "Étape 1 : Analyse de la cinétique du diamètre ostiolaire :\nLe diamètre est nul (ostiole fermé) la nuit de 22 h à 2 h. Il s'ouvre dès 4 h-6 h avec l'apparition du jour, s'élargit progressivement pour atteindre son pic de 12 µm à 12 h (pleine lumière et chaleur), puis diminue l'après-midi pour s'annuler à nouveau dès la tombée de la nuit à 22 h.",
          "Étape 2 : Explication du pic à midi (12 h) :\nÀ midi, l'intensité lumineuse est maximale. La photosynthèse et l'accumulation active de solutés (ions K⁺) dans les cellules stomatiques élèvent leur pression osmotique : l'eau afflue massivement par osmose. Les cellules deviennent pleinement turgescentes, leurs parois minces se distendent au maximum, provoquant l'écartement maximal des parois épaisses internes et l'ouverture maximale de l'ostiole (transpiration maximale).",
          "Étape 3 : Explication de la fermeture nocturne (22 h à 2 h) :\nEn l'absence totale de lumière, la photosynthèse s'arrête, les ions K⁺ sont évacués, la pression osmotique s'effondre. L'eau sort des cellules stomatiques qui se dégonflent (perte de turgescence). Les parois épaisses se réaccolent : l'ostiole est clos, ce qui évite toute perte d'eau inutile la nuit."
        ],
        "conclusion": "L'ouverture des stomates est asservie à la lumière par le biais de la turgescence osmotique des cellules de garde."
      },
      "exercises": [
        {
          "id": "svt_2c_c14_p2_q1",
          "type": "mcq",
          "prompt": "Sur quelle face de la feuille les stomates sont-ils généralement les plus abondants chez la plupart des végétaux terrestres ?",
          "options": [
            "Sur la face inférieure de la feuille (face abaxiale à l'abri du soleil direct)",
            "Sur la face supérieure directement exposée aux rayons du soleil",
            "Exclusivement sur le pétiole de fixation de la feuille",
            "Sur les nervures principales lignifiées uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La face inférieure des feuilles contient la majorité des stomates, ce qui limite les pertes d'eau excessives dues à l'insolation directe."
        },
        {
          "id": "svt_2c_c14_p2_q2",
          "type": "mcq",
          "prompt": "De quoi est constitué un stomate de l'épiderme foliaire ?",
          "options": [
            "De deux cellules stomatiques réniformes chlorophylliennes séparées par un pore réglable appelé ostiole",
            "D'un canal cylindrique rigide percé au milieu d'une cellule morte",
            "D'une vacuole géante flottant au-dessus de la cuticule",
            "D'une paire de centrioles ciliés issus du centrosome"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le stomate comprend deux cellules de garde (cellules stomatiques) en forme de rein délimitant un orifice ajustable nommé ostiole."
        },
        {
          "id": "svt_2c_c14_p2_q3",
          "type": "mcq",
          "prompt": "Quelle dissymétrie de structure pariétale des cellules stomatiques permet l'ouverture mécanique de l'ostiole sous l'effet de la turgescence ?",
          "options": [
            "La paroi bordant l'ostiole est très épaisse et rigide, alors que la paroi opposée est mince et très élastique",
            "Les parois sont uniformément minces et se déchirent dès la première entrée d'eau",
            "La paroi interne est recouverte d'émail osseux indestructible",
            "Les parois sont entièrement absentes dans les cellules stomatiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lorsque la cellule stomatique se gonfle d'eau, sa paroi mince externe se distend facilement vers l'extérieur et entraîne la paroi épaisse rigide qui s'écarte, ouvrant l'ostiole."
        },
        {
          "id": "svt_2c_c14_p2_q4",
          "type": "mcq",
          "prompt": "À quel moment de la journée le diamètre d'ouverture de l'ostiole est-il généralement à son maximum chez une plante bien arrosée ?",
          "options": [
            "Au milieu de la journée (vers 12 h à midi), sous l'effet d'une luminosité maximale",
            "Au milieu de la nuit (à 0 h / minuit)",
            "Au coucher du soleil (vers 19 h)",
            "Le diamètre reste strictement constant sans aucune variation jour/nuit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est en pleine matinée et à midi (ensoleillement maximal stimulant la photosynthèse et l'afflux d'ions) que l'ostiole atteint son diamètre maximal (jusqu'à 12 µm)."
        },
        {
          "id": "svt_2c_c14_p2_q5",
          "type": "mcq",
          "prompt": "Que se passe-t-il au niveau des stomates en cas de sécheresse sévère ou d'atmosphère aride en plein après-midi ?",
          "options": [
            "Les cellules stomatiques perdent leur turgescence et l'ostiole se ferme pour limiter les pertes d'eau",
            "L'ostiole s'ouvre deux fois plus grand pour tenter de capter l'humidité de l'air",
            "Les stomates se détachent et tombent de la feuille",
            "Les cellules stomatiques se transforment en cellules racinaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En cas de stress hydrique, la baisse de turgescence referme l'ostiole, protégeant la plante contre le dessèchement létal."
        },
        {
          "id": "svt_2c_c14_p2_q6",
          "type": "mcq",
          "prompt": "Sous quelle forme physique principale l'eau transpirée est-elle rejetée par la plante verte dans l'atmosphère ?",
          "options": [
            "Sous forme de vapeur d'eau invisible",
            "Sous forme de glace cristallisée",
            "Sous forme de jets continus d'eau liquide sous pression",
            "Sous forme d'hydrogène gazeux pur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La transpiration foliaire libère l'eau sous forme gazeuse de vapeur d'eau à travers les stomates."
        },
        {
          "id": "svt_2c_c14_p2_q7",
          "type": "mcq",
          "prompt": "Quel ion minéral joue un rôle moteur fondamental dans les flux d'eau et les variations de turgescence des cellules stomatiques ?",
          "options": [
            "L'ion potassium (K⁺)",
            "L'ion ferrique (Fe³⁺)",
            "L'ion sulfate (SO₄²⁻)",
            "L'ion carbonate (CO₃²⁻)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'entrée active massive des ions K⁺ dans les cellules stomatiques sous l'effet de la lumière est le principal déclencheur de l'appel d'eau osmotique ouvrant l'ostiole."
        },
        {
          "id": "svt_2c_c14_p2_q8",
          "type": "mcq",
          "prompt": "Quel est le rôle thermorégulateur capital assuré par la transpiration chez les plantes des régions chaudes comme la Côte d'Ivoire ?",
          "options": [
            "L'évaporation de l'eau absorbe de la chaleur latente, ce qui refroidit la surface des feuilles et évite la surchauffe",
            "Elle augmente la température de la feuille de 50 °C pour brûler les parasites",
            "Elle maintient les feuilles à 0 °C toute l'année",
            "Elle n'a aucun impact thermique sur la température foliaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'évaporation de l'eau consomme de l'énergie thermique (chaleur latente de vaporisation), ce qui rafraîchit efficacement les tissus foliaires sous le fort ensoleillement tropical."
        }
      ]
    }
  ]
};

// ============================================================================
// EXPORT DU CURRICULUM COMPLET SVT 2de C (14 CHAPITRES, 28 POINTS, 224 QCM)
// ============================================================================
export const svt2deCChapters: CurriculumChapter[] = [
  svt2deCStructureGeologiqueChapter,
  svt2deCAlterationRochesMagmatiquesChapter,
  svt2deCFormationRochesSedimentairesChapter,
  svt2deCFormationRochesMetamorphiquesChapter,
  svt2deCDevenirRochesMetamorphiquesChapter,
  svt2deCRelationsEtresVivantsChapter,
  svt2deCChangementClimatiqueChapter,
  svt2deCOrganisationCelluleChapter,
  svt2deCDivisionCellulaireMitoseChapter,
  svt2deCEvolutionEquipementChromosomiqueChapter,
  svt2deCAbsorptionEauPlanteChapter,
  svt2deCInfluenceSelsMinerauxCroissanceChapter,
  svt2deCAbsorptionSelsMinerauxChapter,
  svt2deCDevenirSubstancesAbsorbeesChapter,
];
