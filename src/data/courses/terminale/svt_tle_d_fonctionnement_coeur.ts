import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 4 : Le fonctionnement du coeur » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2888
export const SVT_TLE_D_L04_FONCTIONNEMENT_COEUR: CurriculumChapter = {
  "id": "terminale_d_svt_l04_fonctionnement_coeur",
  "subjectId": "svt",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [],
  "order": 4,
  "title": "Leçon 4 : Le fonctionnement du coeur",
  "summary": "Le cœur bat de manière autonome grâce au tissu nodal, dont le nœud sinusal est le pacemaker, mais son rythme est modulé par les nerfs parasympathiques et orthosympathiques et par leurs médiateurs chimiques, l’acétylcholine et l’adrénaline.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2888",
  "points": [
    {
      "id": "terminale_d_svt_l04_fonctionnement_coeur_p01",
      "order": 1,
      "title": "L’automatisme cardiaque et le tissu nodal",
      "summary": "Montrer que le cœur bat sans les centres nerveux et que le tissu nodal est le siège de l’automatisme.",
      "conceptExplanation": "Chez une grenouille décérébrée et démédullée, le cœur continue de battre malgré la destruction des centres nerveux ; isolé par section des vaisseaux et plongé dans une solution de Ringer, il continue aussi de battre.\nSur un cœur isolé et perfusé de mammifère, la destruction du tissu nodal, formé du nœud sinusal, du nœud septal et du faisceau de His, fait cesser les battements ; la section du seul faisceau de His laisse un rythme normal des oreillettes et un rythme anormal des ventricules.\nLes potentiels d’action naissent spontanément et rythmiquement dans le nœud sinusal, provoquent la contraction des oreillettes, parviennent au nœud septal, au faisceau de His puis au réseau de Purkinje, où ils déclenchent la contraction des ventricules.\nLe nœud sinusal impose son rythme au myocarde : il est le moteur de l’automatisme cardiaque, appelé pacemaker du cœur.",
      "keyRule": "Cœur isolé qui bat égale automatisme ; tissu nodal détruit égale arrêt : le nœud sinusal est le pacemaker.",
      "formulas": [],
      "workedExample": {
        "title": "Identifier les éléments du tissu nodal sur une coupe du cœur (exercice 1)",
        "statement": "Sur la coupe longitudinale d’un cœur de mammifère de l’exercice 1, fais correspondre les éléments du tissu nodal : nœud sinusal, nœud septal, faisceau de His et réseau de Purkinje, dans l’ordre de propagation du potentiel d’action.",
        "methodSteps": [
          "Le potentiel d’action naît dans le nœud sinusal, premier élément du tissu nodal.",
          "Il passe dans le myocarde auriculaire puis parvient au nœud septal.",
          "Il emprunte ensuite le faisceau de His.",
          "Il se distribue enfin par le réseau de Purkinje aux ventricules."
        ],
        "conclusion": "C’est l’ordre de propagation décrit dans l’interprétation des expériences sur l’automatisme."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le cœur isolé continue de battre",
          "stepTheme": "Le cœur isolé continue de battre",
          "stepBadge": "Le cœur isolé continue de battre",
          "paragraphText": "Un cœur de grenouille isolé par section des vaisseaux sanguins et plongé dans un liquide physiologique, la solution de Ringer, continue de battre.\nC’est aussi le point de départ de la situation d’apprentissage, avec le cœur isolé de batracien en milieu de culture.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p01_q1",
            "type": "mcq",
            "prompt": "Un cœur isolé et plongé dans une solution de Ringer :",
            "options": [
              "S’arrête immédiatement",
              "Continue de battre",
              "Ne bat que si on le stimule électriquement",
              "Bat une seule fois puis s’arrête"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultat des expériences numéro 1 de la partie sur l’autonomie."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La destruction des centres nerveux ne stoppe pas le cœur",
          "stepTheme": "La destruction des centres nerveux ne stoppe pas le cœur",
          "stepBadge": "La destruction des centres nerveux ne stoppe pas le cœur",
          "paragraphText": "Chez la grenouille décérébrée et démédullée, le cœur bat malgré la destruction des centres nerveux.\nLa suppression des centres nerveux n’a donc pas d’effet sur le battement cardiaque dans cette expérience.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p01_q2",
            "type": "mcq",
            "prompt": "Après destruction des centres nerveux chez la grenouille, le cœur :",
            "options": [
              "Cesse de battre",
              "Bat seulement au niveau des ventricules",
              "Continue de battre",
              "Bat uniquement dans la solution de Ringer chauffée"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse des expériences numéro 1 : la suppression des centres nerveux est sans effet sur le battement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La composition du tissu nodal",
          "stepTheme": "La composition du tissu nodal",
          "stepBadge": "La composition du tissu nodal",
          "paragraphText": "• Tissu nodal : tissu particulier du cœur, siège de l’automatisme cardiaque.\nIl est formé du nœud sinusal, du nœud septal et du faisceau de His, auxquels s’ajoute le réseau de Purkinje pour la distribution aux ventricules.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p01_q3",
            "type": "mcq",
            "prompt": "Le tissu nodal dont la destruction arrête le cœur est formé de :",
            "options": [
              "Nœud sinusal, nœud septal et faisceau de His",
              "Uniquement des nerfs vagues",
              "Myocarde auriculaire seulement",
              "Valvules et oreillettes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Énumération donnée dans la présentation des expériences numéro 2."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La section du faisceau de His",
          "stepTheme": "La section du faisceau de His",
          "stepBadge": "La section du faisceau de His",
          "paragraphText": "Sur un cœur isolé, la section du faisceau de His ne supprime pas tous les battements.\nOn observe un rythme normal des oreillettes et un rythme anormal des ventricules, car le message né dans le nœud sinusal ne parvient plus normalement aux ventricules.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p01_q4",
            "type": "mcq",
            "prompt": "Après section du faisceau de His, on observe :",
            "options": [
              "L’arrêt complet du cœur",
              "Un rythme normal des oreillettes et un rythme anormal des ventricules",
              "Un rythme anormal des oreillettes et normal des ventricules",
              "Aucun changement de rythme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultat des expériences numéro 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le pacemaker n’est pas le nœud septal",
          "stepTheme": "Le pacemaker n’est pas le nœud septal",
          "stepBadge": "Le pacemaker n’est pas le nœud septal",
          "paragraphText": "Piège : attribuer le rôle de moteur au premier élément sectionné ou au nœud septal.\nLa leçon dit que le nœud sinusal impose son rythme au myocarde : il est le moteur de l’automatisme et le pacemaker du cœur.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p01_q5",
            "type": "mcq",
            "prompt": "Le pacemaker du cœur, qui impose son rythme au myocarde, est :",
            "options": [
              "Le nœud septal",
              "Le faisceau de His",
              "Le réseau de Purkinje",
              "Le nœud sinusal"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Interprétation des expériences sur l’automatisme cardiaque."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le trajet du potentiel d’action dans le cœur",
          "stepTheme": "Le trajet du potentiel d’action dans le cœur",
          "stepBadge": "Le trajet du potentiel d’action dans le cœur",
          "paragraphText": "Le potentiel d’action né dans le nœud sinusal passe dans le myocarde auriculaire et provoque la contraction des oreillettes.\nIl parvient ensuite au nœud septal, puis au faisceau de His et enfin au réseau de Purkinje, où il déclenche la contraction des ventricules.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p01_q6",
            "type": "mcq",
            "prompt": "Après le nœud septal, le potentiel d’action emprunte :",
            "options": [
              "Le nerf vague",
              "Le faisceau de His puis le réseau de Purkinje",
              "Directement les vaisseaux sanguins",
              "Le bulbe rachidien"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ordre de propagation décrit dans l’interprétation de la partie sur l’autonomie."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p01_q1",
          "type": "mcq",
          "prompt": "Un cœur isolé et plongé dans une solution de Ringer :",
          "options": [
            "S’arrête immédiatement",
            "Continue de battre",
            "Ne bat que si on le stimule électriquement",
            "Bat une seule fois puis s’arrête"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultat des expériences numéro 1 de la partie sur l’autonomie."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p01_q2",
          "type": "mcq",
          "prompt": "Après destruction des centres nerveux chez la grenouille, le cœur :",
          "options": [
            "Cesse de battre",
            "Bat seulement au niveau des ventricules",
            "Continue de battre",
            "Bat uniquement dans la solution de Ringer chauffée"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse des expériences numéro 1 : la suppression des centres nerveux est sans effet sur le battement."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p01_q3",
          "type": "mcq",
          "prompt": "Le tissu nodal dont la destruction arrête le cœur est formé de :",
          "options": [
            "Nœud sinusal, nœud septal et faisceau de His",
            "Uniquement des nerfs vagues",
            "Myocarde auriculaire seulement",
            "Valvules et oreillettes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Énumération donnée dans la présentation des expériences numéro 2."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p01_q4",
          "type": "mcq",
          "prompt": "Après section du faisceau de His, on observe :",
          "options": [
            "L’arrêt complet du cœur",
            "Un rythme normal des oreillettes et un rythme anormal des ventricules",
            "Un rythme anormal des oreillettes et normal des ventricules",
            "Aucun changement de rythme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultat des expériences numéro 2."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p01_q5",
          "type": "mcq",
          "prompt": "Le pacemaker du cœur, qui impose son rythme au myocarde, est :",
          "options": [
            "Le nœud septal",
            "Le faisceau de His",
            "Le réseau de Purkinje",
            "Le nœud sinusal"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Interprétation des expériences sur l’automatisme cardiaque."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p01_q6",
          "type": "mcq",
          "prompt": "Après le nœud septal, le potentiel d’action emprunte :",
          "options": [
            "Le nerf vague",
            "Le faisceau de His puis le réseau de Purkinje",
            "Directement les vaisseaux sanguins",
            "Le bulbe rachidien"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ordre de propagation décrit dans l’interprétation de la partie sur l’autonomie."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l04_fonctionnement_coeur_p02",
      "order": 2,
      "title": "Potentiel d’action nodal et potentiel d’action du myocarde",
      "summary": "Comparer le potentiel entraîneur des cellules nodales et le potentiel en plateau des cellules du myocarde.",
      "conceptExplanation": "Le potentiel d’action du tissu nodal n’a pas de temps de latence, mais un potentiel entraîneur ou pré-potentiel, qui correspond à une dépolarisation lente et précède le potentiel d’action d’une cellule du nœud sino-auriculaire.\nLe pré-potentiel assure la transmission entre le potentiel précédent et le potentiel suivant, ce qui fait que l’activité cardiaque ne s’arrête pas ; il est dû à une diminution de la perméabilité aux ions potassium, qui sortent faiblement.\nLa dépolarisation du potentiel nodal est due à l’augmentation de la perméabilité aux ions calcium, qui entrent massivement, et la repolarisation à une augmentation de la perméabilité aux ions potassium, qui sortent massivement.\nLe potentiel d’action du myocarde, lui, comporte un temps de latence, une dépolarisation brusque, une phase de dépolarisation maintenue ou plateau et une repolarisation rapide ; sa période réfractaire est aussi longue que celle de la contraction.",
      "keyRule": "Cellule nodale égale pré-potentiel lent et calcium ; cellule du myocarde égale latence, plateau et longue période réfractaire.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer le pré-potentiel d’une cellule du nœud sinusal",
        "statement": "Explique pourquoi l’activité d’une cellule du nœud sino-auriculaire enchaîne les potentiels d’action sans s’arrêter, en précisant le mouvement d’ions du pré-potentiel.",
        "methodSteps": [
          "Le potentiel nodal commence par un potentiel entraîneur, dépolarisation lente sans temps de latence.",
          "Ce pré-potentiel est dû à une diminution de la perméabilité aux ions potassium, qui sortent faiblement de la membrane.",
          "Il assure la transmission entre le potentiel précédent et le potentiel suivant, donc la continuité de l’activité."
        ],
        "conclusion": "C’est l’explication donnée dans l’interprétation de la partie sur l’autonomie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le pré-potentiel ou potentiel entraîneur",
          "stepTheme": "Le pré-potentiel ou potentiel entraîneur",
          "stepBadge": "Le pré-potentiel ou potentiel entraîneur",
          "paragraphText": "• Pré-potentiel (ou potentiel entraîneur) : dépolarisation lente qui précède le potentiel d’action d’une cellule du nœud sino-auriculaire.\nLe potentiel du tissu nodal n’a pas de temps de latence, mais ce pré-potentiel.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p02_q1",
            "type": "mcq",
            "prompt": "Le potentiel d’action du tissu nodal se distingue par :",
            "options": [
              "Un long temps de latence sans pré-potentiel",
              "Un potentiel entraîneur, dépolarisation lente, sans temps de latence",
              "Un plateau prolongé",
              "Une absence totale de dépolarisation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Phrase de l’interprétation sur le potentiel du tissu nodal."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’origine ionique du pré-potentiel",
          "stepTheme": "L’origine ionique du pré-potentiel",
          "stepBadge": "L’origine ionique du pré-potentiel",
          "paragraphText": "Le pré-potentiel est dû à une diminution de la perméabilité membranaire aux ions potassium.\nLes ions potassium sortent alors faiblement de la cellule nodale.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p02_q2",
            "type": "mcq",
            "prompt": "Le pré-potentiel nodal est dû à :",
            "options": [
              "Une entrée massive de calcium",
              "Une sortie massive de potassium",
              "Une diminution de la perméabilité au potassium, qui sort faiblement",
              "Une entrée de sodium seulement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Explication ionique du pré-potentiel dans la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La dépolarisation nodale par le calcium",
          "stepTheme": "La dépolarisation nodale par le calcium",
          "stepBadge": "La dépolarisation nodale par le calcium",
          "paragraphText": "La phase de dépolarisation du potentiel nodal est due à l’augmentation de la perméabilité membranaire aux ions calcium.\nCes ions entrent massivement à travers la membrane de la cellule nodale.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p02_q3",
            "type": "mcq",
            "prompt": "La dépolarisation du potentiel d’action nodal est due à l’entrée massive d’ions :",
            "options": [
              "Sodium",
              "Potassium",
              "Calcium",
              "Chlorure"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation ionique du potentiel du nœud sino-auriculaire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le potentiel du myocarde et son plateau",
          "stepTheme": "Le potentiel du myocarde et son plateau",
          "stepBadge": "Le potentiel du myocarde et son plateau",
          "paragraphText": "Le potentiel d’action du myocarde comporte un temps de latence et une dépolarisation brusque.\nIl présente ensuite une phase de dépolarisation maintenue, appelée plateau, puis une phase de repolarisation rapide.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p02_q4",
            "type": "mcq",
            "prompt": "La phase caractéristique du potentiel d’action du myocarde, absente de la description du potentiel nodal, est :",
            "options": [
              "Le pré-potentiel",
              "Le plateau de dépolarisation maintenue",
              "Le temps de latence nul",
              "La dépolarisation lente"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Description du potentiel du myocarde dans la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La longue période réfractaire du myocarde",
          "stepTheme": "La longue période réfractaire du myocarde",
          "stepBadge": "La longue période réfractaire du myocarde",
          "paragraphText": "Piège : croire que la période réfractaire cardiaque est brève comme celle d’un nerf.\nLa leçon précise que la période réfractaire du potentiel du myocarde est aussi longue que celle de la contraction.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p02_q5",
            "type": "mcq",
            "prompt": "La période réfractaire du potentiel du myocarde est :",
            "options": [
              "Très courte, sans rapport avec la contraction",
              "Aussi longue que celle de la contraction",
              "Absente chez les mammifères",
              "Égale au temps de latence nodal"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dernière phrase de la description du potentiel du myocarde."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La repolarisation nodale",
          "stepTheme": "La repolarisation nodale",
          "stepBadge": "La repolarisation nodale",
          "paragraphText": "La phase de repolarisation du potentiel nodal est due à une augmentation de la perméabilité aux ions potassium.\nCes ions sortent massivement de la cellule nodale, comme le potassium sort aussi lors de la repolarisation d’autres cellules excitables.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p02_q6",
            "type": "mcq",
            "prompt": "La repolarisation du potentiel nodal est due à :",
            "options": [
              "Une entrée massive de calcium",
              "Une augmentation de la perméabilité au potassium, qui sort massivement",
              "Une diminution de la perméabilité au potassium",
              "L’action de l’acétylcholine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Suite de l’explication ionique du potentiel nodal."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p02_q1",
          "type": "mcq",
          "prompt": "Le potentiel d’action du tissu nodal se distingue par :",
          "options": [
            "Un long temps de latence sans pré-potentiel",
            "Un potentiel entraîneur, dépolarisation lente, sans temps de latence",
            "Un plateau prolongé",
            "Une absence totale de dépolarisation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Phrase de l’interprétation sur le potentiel du tissu nodal."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p02_q2",
          "type": "mcq",
          "prompt": "Le pré-potentiel nodal est dû à :",
          "options": [
            "Une entrée massive de calcium",
            "Une sortie massive de potassium",
            "Une diminution de la perméabilité au potassium, qui sort faiblement",
            "Une entrée de sodium seulement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Explication ionique du pré-potentiel dans la leçon."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p02_q3",
          "type": "mcq",
          "prompt": "La dépolarisation du potentiel d’action nodal est due à l’entrée massive d’ions :",
          "options": [
            "Sodium",
            "Potassium",
            "Calcium",
            "Chlorure"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation ionique du potentiel du nœud sino-auriculaire."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p02_q4",
          "type": "mcq",
          "prompt": "La phase caractéristique du potentiel d’action du myocarde, absente de la description du potentiel nodal, est :",
          "options": [
            "Le pré-potentiel",
            "Le plateau de dépolarisation maintenue",
            "Le temps de latence nul",
            "La dépolarisation lente"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Description du potentiel du myocarde dans la leçon."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p02_q5",
          "type": "mcq",
          "prompt": "La période réfractaire du potentiel du myocarde est :",
          "options": [
            "Très courte, sans rapport avec la contraction",
            "Aussi longue que celle de la contraction",
            "Absente chez les mammifères",
            "Égale au temps de latence nodal"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dernière phrase de la description du potentiel du myocarde."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p02_q6",
          "type": "mcq",
          "prompt": "La repolarisation du potentiel nodal est due à :",
          "options": [
            "Une entrée massive de calcium",
            "Une augmentation de la perméabilité au potassium, qui sort massivement",
            "Une diminution de la perméabilité au potassium",
            "L’action de l’acétylcholine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Suite de l’explication ionique du potentiel nodal."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l04_fonctionnement_coeur_p03",
      "order": 3,
      "title": "La révolution cardiaque et l’électrocardiogramme",
      "summary": "Lire un cardiogramme et relier les ondes P, QRS et T aux phases mécaniques du cycle cardiaque.",
      "conceptExplanation": "Le cardiogramme, tracé obtenu avec un cardiographe à stylet inscripteur relié au cœur, présente deux courbes successives d’amplitudes différentes : la première correspond à l’activité des oreillettes et la deuxième à celle des ventricules.\nSur ce tracé, AB est la contraction des oreillettes ou systole auriculaire, BC leur relâchement ou diastole auriculaire, CD la contraction des ventricules ou systole ventriculaire et DE le relâchement général ou diastole générale.\nL’ensemble systole auriculaire, diastole auriculaire, systole ventriculaire et diastole générale constitue une révolution cardiaque ou cycle cardiaque.\nL’électrocardiogramme présente des ondes notées PQRST : l’onde P traduit la dépolarisation des oreillettes et précède la systole auriculaire, le segment PQ correspond à la conduction dans la zone auriculo-ventriculaire, le complexe QRS traduit la dépolarisation des ventricules et précède la systole ventriculaire, et l’onde T correspond à la repolarisation des ventricules, qui entraîne la diastole générale.",
      "keyRule": "Onde P égale oreillettes, complexe QRS égale ventricules, onde T égale repolarisation ventriculaire et diastole générale.",
      "formulas": [],
      "workedExample": {
        "title": "Relier l’électrocardiogramme au cardiogramme (exercice 2)",
        "statement": "Relie chaque élément de l’électrocardiogramme à la phase du cardiogramme qui convient : onde P, complexe QRS et onde T, face à systole auriculaire, systole ventriculaire et diastole générale.",
        "methodSteps": [
          "L’onde P précède et traduit la dépolarisation des oreillettes : elle correspond à la systole auriculaire.",
          "Le complexe QRS précède et traduit la dépolarisation des ventricules : il correspond à la systole ventriculaire.",
          "L’onde T correspond à la repolarisation des ventricules : elle entraîne la diastole générale."
        ],
        "conclusion": "Ce sont les correspondances de l’interprétation des documents 3 et 4 et de l’exercice 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le cardiogramme et le cardiographe",
          "stepTheme": "Le cardiogramme et le cardiographe",
          "stepBadge": "Le cardiogramme et le cardiographe",
          "paragraphText": "• Cardiographe : appareil constitué d’un stylet inscripteur relié au cœur par un fil, qui permet d’enregistrer les activités du cœur.\n• Cardiogramme : tracé obtenu avec le cardiographe, avec une courbe des oreillettes puis une courbe des ventricules.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p03_q1",
            "type": "mcq",
            "prompt": "Le cardiogramme est le tracé obtenu avec :",
            "options": [
              "Un électrocardiographe",
              "Un cardiographe à stylet inscripteur",
              "Un oscilloscope cathodique",
              "Un myographe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse des documents 3 et 4."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Systoles et diastoles du cycle",
          "stepTheme": "Systoles et diastoles du cycle",
          "stepBadge": "Systoles et diastoles du cycle",
          "paragraphText": "Sur le cardiogramme : AB égale systole auriculaire, contraction des oreillettes ; BC égale diastole auriculaire, leur relâchement.\nCD égale systole ventriculaire, contraction des ventricules ; DE égale diastole générale, relâchement général du muscle cardiaque.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p03_q2",
            "type": "mcq",
            "prompt": "Sur le cardiogramme, le segment CD correspond à :",
            "options": [
              "La systole auriculaire",
              "La diastole auriculaire",
              "La systole ventriculaire",
              "La diastole générale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Lecture du cardiogramme dans l’analyse des documents."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La révolution cardiaque",
          "stepTheme": "La révolution cardiaque",
          "stepBadge": "La révolution cardiaque",
          "paragraphText": "• Révolution cardiaque (ou cycle cardiaque) : ensemble formé par la systole auriculaire, la diastole auriculaire, la systole ventriculaire et la diastole générale.\nElle se répète à chaque battement complet du cœur.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p03_q3",
            "type": "mcq",
            "prompt": "La révolution cardiaque est constituée par l’ensemble :",
            "options": [
              "Onde P, complexe QRS et onde T seulement",
              "Systole auriculaire, diastole auriculaire, systole ventriculaire et diastole générale",
              "Uniquement des deux systoles",
              "Uniquement des deux diastoles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition donnée dans l’analyse du cardiogramme."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L’onde P et le complexe QRS",
          "stepTheme": "L’onde P et le complexe QRS",
          "stepBadge": "L’onde P et le complexe QRS",
          "paragraphText": "L’onde P précède la systole auriculaire et traduit la dépolarisation des oreillettes.\nLe complexe QRS précède la systole ventriculaire et correspond à la dépolarisation des ventricules.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p03_q4",
            "type": "mcq",
            "prompt": "Le complexe d’ondes QRS traduit :",
            "options": [
              "La repolarisation des ventricules",
              "La dépolarisation des oreillettes",
              "La dépolarisation des ventricules, avant leur systole",
              "La conduction auriculo-ventriculaire seule"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation de l’électrocardiogramme dans la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L’onde T n’est pas une dépolarisation",
          "stepTheme": "L’onde T n’est pas une dépolarisation",
          "stepBadge": "L’onde T n’est pas une dépolarisation",
          "paragraphText": "Piège : attribuer à toutes les ondes de l’électrocardiogramme une dépolarisation.\nL’onde T correspond à la repolarisation des ventricules, qui entraîne la diastole générale.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p03_q5",
            "type": "mcq",
            "prompt": "L’onde T de l’électrocardiogramme correspond à :",
            "options": [
              "La dépolarisation des oreillettes",
              "La dépolarisation des ventricules",
              "La repolarisation des ventricules",
              "La conduction dans la zone auriculo-ventriculaire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation de l’électrocardiogramme : onde T égale repolarisation ventriculaire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le segment PQ",
          "stepTheme": "Le segment PQ",
          "stepBadge": "Le segment PQ",
          "paragraphText": "Entre l’onde P et le complexe QRS, le segment PQ a aussi une signification dans la leçon.\nIl correspond à la conduction du courant de dépolarisation dans la zone auriculo-ventriculaire.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p03_q6",
            "type": "mcq",
            "prompt": "Le segment PQ de l’électrocardiogramme correspond à :",
            "options": [
              "La repolarisation des oreillettes",
              "La conduction du courant de dépolarisation dans la zone auriculo-ventriculaire",
              "La systole ventriculaire elle-même",
              "La diastole générale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ligne consacrée à PQ dans l’interprétation des documents."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p03_q1",
          "type": "mcq",
          "prompt": "Le cardiogramme est le tracé obtenu avec :",
          "options": [
            "Un électrocardiographe",
            "Un cardiographe à stylet inscripteur",
            "Un oscilloscope cathodique",
            "Un myographe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse des documents 3 et 4."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p03_q2",
          "type": "mcq",
          "prompt": "Sur le cardiogramme, le segment CD correspond à :",
          "options": [
            "La systole auriculaire",
            "La diastole auriculaire",
            "La systole ventriculaire",
            "La diastole générale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Lecture du cardiogramme dans l’analyse des documents."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p03_q3",
          "type": "mcq",
          "prompt": "La révolution cardiaque est constituée par l’ensemble :",
          "options": [
            "Onde P, complexe QRS et onde T seulement",
            "Systole auriculaire, diastole auriculaire, systole ventriculaire et diastole générale",
            "Uniquement des deux systoles",
            "Uniquement des deux diastoles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition donnée dans l’analyse du cardiogramme."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p03_q4",
          "type": "mcq",
          "prompt": "Le complexe d’ondes QRS traduit :",
          "options": [
            "La repolarisation des ventricules",
            "La dépolarisation des oreillettes",
            "La dépolarisation des ventricules, avant leur systole",
            "La conduction auriculo-ventriculaire seule"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation de l’électrocardiogramme dans la leçon."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p03_q5",
          "type": "mcq",
          "prompt": "L’onde T de l’électrocardiogramme correspond à :",
          "options": [
            "La dépolarisation des oreillettes",
            "La dépolarisation des ventricules",
            "La repolarisation des ventricules",
            "La conduction dans la zone auriculo-ventriculaire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation de l’électrocardiogramme : onde T égale repolarisation ventriculaire."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p03_q6",
          "type": "mcq",
          "prompt": "Le segment PQ de l’électrocardiogramme correspond à :",
          "options": [
            "La repolarisation des oreillettes",
            "La conduction du courant de dépolarisation dans la zone auriculo-ventriculaire",
            "La systole ventriculaire elle-même",
            "La diastole générale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ligne consacrée à PQ dans l’interprétation des documents."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l04_fonctionnement_coeur_p04",
      "order": 4,
      "title": "Les nerfs moteurs du cœur : frein parasympathique et accélérateur orthosympathique",
      "summary": "Décrire les effets des stimulations et des sections des nerfs parasympathiques et orthosympathiques.",
      "conceptExplanation": "La stimulation des nerfs parasympathiques, ou nerfs X ou nerfs vagues ou pneumogastriques, entraîne après un temps de latence un ralentissement du rythme cardiaque et un arrêt en diastole, suivi d’une phase d’échappement où le cœur se remet à battre malgré la poursuite des stimulations.\nLa section des nerfs parasympathiques entraîne une accélération du rythme cardiaque.\nLa stimulation des nerfs orthosympathiques entraîne une accélération du rythme, puis un retour progressif au rythme normal à la fin des excitations ; leur section entraîne une diminution du rythme.\nLes fibres parasympathiques transmettent des influx modérateurs qui ralentissent l’activité du nœud sinusal, d’où une bradycardie ; les fibres orthosympathiques transmettent des influx accélérateurs qui stimulent le nœud sinusal, d’où une tachycardie. Ce sont des fibres antagonistes : la section des unes accentue l’effet des autres.",
      "keyRule": "Nerf vague stimulé égale bradycardie, nerf vague coupé égale accélération ; orthosympathique stimulé égale tachycardie, coupé égale ralentissement.",
      "formulas": [],
      "workedExample": {
        "title": "Déduire le rôle du nerf X et du nerf de Cyon (exercice 3)",
        "statement": "Dans l’exercice 3, la section du nerf X augmente la fréquence cardiaque et l’excitation de son bout périphérique la diminue, tandis que l’excitation du bout central est sans effet. Déduis le rôle du nerf X.",
        "methodSteps": [
          "La section supprime un frein permanent : la fréquence augmente, donc le nerf X ralentit normalement le cœur.",
          "L’excitation du bout périphérique, relié au cœur, diminue la fréquence : le nerf X transmet bien des influx modérateurs au cœur.",
          "L’excitation du bout central, relié au centre nerveux, est sans effet sur le cœur : le nerf X est un nerf moteur du cœur."
        ],
        "conclusion": "C’est la déduction attendue dans l’exercice 3 pour un nerf moteur cardiomodérateur."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les noms du nerf parasympathique cardiaque",
          "stepTheme": "Les noms du nerf parasympathique cardiaque",
          "stepBadge": "Les noms du nerf parasympathique cardiaque",
          "paragraphText": "Les nerfs parasympathiques du cœur portent plusieurs noms dans la leçon.\nCe sont les nerfs X, ou nerfs vagues, ou nerfs pneumogastriques.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p04_q1",
            "type": "mcq",
            "prompt": "Les nerfs parasympathiques du cœur sont aussi appelés :",
            "options": [
              "Nerfs de Héring et de Cyon",
              "Nerfs X ou nerfs vagues ou pneumogastriques",
              "Nerfs sino-aortiques",
              "Faisceau de His"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Présentation de la première série d’expériences sur les nerfs."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Stimulation du nerf vague : ralentissement et échappement",
          "stepTheme": "Stimulation du nerf vague : ralentissement et échappement",
          "stepBadge": "Stimulation du nerf vague : ralentissement et échappement",
          "paragraphText": "La stimulation des nerfs parasympathiques entraîne, après un temps de latence, un ralentissement puis un arrêt en diastole.\nSuit une phase d’échappement : le cœur se remet à battre lentement puis reprend son rythme normal malgré la poursuite des stimulations.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p04_q2",
            "type": "mcq",
            "prompt": "Pendant la phase d’échappement, malgré la poursuite de la stimulation du nerf vague, le cœur :",
            "options": [
              "Reste arrêté définitivement",
              "Se remet à battre puis reprend son rythme normal",
              "Accélère brutalement au double",
              "Ne bat plus qu’au niveau des oreillettes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse de l’expérience 1 de la première série."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Section des nerfs parasympathiques",
          "stepTheme": "Section des nerfs parasympathiques",
          "stepBadge": "Section des nerfs parasympathiques",
          "paragraphText": "La section des nerfs parasympathiques entraîne, après un temps de latence, une accélération du rythme cardiaque.\nCela montre que ces nerfs exerçaient en permanence une action modératrice.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p04_q3",
            "type": "mcq",
            "prompt": "La section des nerfs vagues entraîne :",
            "options": [
              "Un ralentissement du rythme",
              "Un arrêt en diastole",
              "Une accélération du rythme cardiaque",
              "Aucun effet après latence"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse de l’expérience 2 de la première série."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Stimulation et section de l’orthosympathique",
          "stepTheme": "Stimulation et section de l’orthosympathique",
          "stepBadge": "Stimulation et section de l’orthosympathique",
          "paragraphText": "La stimulation des nerfs orthosympathiques entraîne une accélération du rythme, puis un retour progressif au rythme normal à la fin des excitations.\nLeur section entraîne, après un temps de latence, une diminution du rythme cardiaque.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p04_q4",
            "type": "mcq",
            "prompt": "La section des nerfs orthosympathiques entraîne :",
            "options": [
              "Une accélération du rythme",
              "Une diminution du rythme cardiaque",
              "Un arrêt en systole",
              "Une phase d’échappement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Expérience 4 de la première série et son analyse."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Bradycardie et tachycardie à ne pas inverser",
          "stepTheme": "Bradycardie et tachycardie à ne pas inverser",
          "stepBadge": "Bradycardie et tachycardie à ne pas inverser",
          "paragraphText": "Piège : inverser les deux termes du rythme.\nLa diminution du rythme cardiaque sous l’effet des influx modérateurs s’appelle bradycardie ; son augmentation sous l’effet des influx accélérateurs s’appelle tachycardie.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p04_q5",
            "type": "mcq",
            "prompt": "La bradycardie désigne :",
            "options": [
              "L’augmentation du rythme cardiaque",
              "La diminution du rythme cardiaque",
              "L’arrêt définitif du cœur",
              "La contraction des seuls ventricules"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définitions données dans l’interprétation de la première série d’expériences."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Des fibres antagonistes",
          "stepTheme": "Des fibres antagonistes",
          "stepBadge": "Des fibres antagonistes",
          "paragraphText": "Les fibres parasympathiques et orthosympathiques sont des fibres antagonistes.\nDe sorte que la section des unes accentue l’effet des autres sur le rythme cardiaque.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p04_q6",
            "type": "mcq",
            "prompt": "Dire que les deux types de fibres sont antagonistes signifie que :",
            "options": [
              "Elles ont exactement le même effet",
              "La section des unes accentue l’effet des autres",
              "Elles ne peuvent jamais agir sur le même cœur",
              "L’une supprime définitivement l’autre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la première série d’expériences sur les nerfs moteurs."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p04_q1",
          "type": "mcq",
          "prompt": "Les nerfs parasympathiques du cœur sont aussi appelés :",
          "options": [
            "Nerfs de Héring et de Cyon",
            "Nerfs X ou nerfs vagues ou pneumogastriques",
            "Nerfs sino-aortiques",
            "Faisceau de His"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Présentation de la première série d’expériences sur les nerfs."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p04_q2",
          "type": "mcq",
          "prompt": "Pendant la phase d’échappement, malgré la poursuite de la stimulation du nerf vague, le cœur :",
          "options": [
            "Reste arrêté définitivement",
            "Se remet à battre puis reprend son rythme normal",
            "Accélère brutalement au double",
            "Ne bat plus qu’au niveau des oreillettes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse de l’expérience 1 de la première série."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p04_q3",
          "type": "mcq",
          "prompt": "La section des nerfs vagues entraîne :",
          "options": [
            "Un ralentissement du rythme",
            "Un arrêt en diastole",
            "Une accélération du rythme cardiaque",
            "Aucun effet après latence"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse de l’expérience 2 de la première série."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p04_q4",
          "type": "mcq",
          "prompt": "La section des nerfs orthosympathiques entraîne :",
          "options": [
            "Une accélération du rythme",
            "Une diminution du rythme cardiaque",
            "Un arrêt en systole",
            "Une phase d’échappement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Expérience 4 de la première série et son analyse."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p04_q5",
          "type": "mcq",
          "prompt": "La bradycardie désigne :",
          "options": [
            "L’augmentation du rythme cardiaque",
            "La diminution du rythme cardiaque",
            "L’arrêt définitif du cœur",
            "La contraction des seuls ventricules"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définitions données dans l’interprétation de la première série d’expériences."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p04_q6",
          "type": "mcq",
          "prompt": "Dire que les deux types de fibres sont antagonistes signifie que :",
          "options": [
            "Elles ont exactement le même effet",
            "La section des unes accentue l’effet des autres",
            "Elles ne peuvent jamais agir sur le même cœur",
            "L’une supprime définitivement l’autre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la première série d’expériences sur les nerfs moteurs."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l04_fonctionnement_coeur_p05",
      "order": 5,
      "title": "La régulation nerveuse : nerfs sensitifs, barorécepteurs et centres cardiaques",
      "summary": "Expliquer le circuit de régulation par les nerfs de Héring et de Cyon et les centres cardio-modérateur et cardio-accélérateur.",
      "conceptExplanation": "La section des nerfs sino-aortiques, nerf de Héring et nerf de Cyon, entraîne une accélération du rythme ; l’excitation de leur bout central entraîne un ralentissement, tandis que l’excitation de leur bout périphérique est sans effet : ce sont donc des nerfs sensitifs qui transmettent des influx aux centres nerveux.\nL’excitation du bulbe rachidien entraîne un ralentissement : il contient un centre cardio-modérateur qui agit par le nerf X. L’excitation de la région cervico-dorsale de la moelle épinière entraîne une accélération : elle contient un centre cardio-accélérateur qui agit par le nerf orthosympathique.\nLorsque la pression artérielle augmente, les barorécepteurs de la crosse aortique et du sinus carotidien, sensibles aux variations de pression, sont excités ; l’influx est transmis au centre cardio-vasculaire par les nerfs sino-aortiques, ce qui inhibe les centres cardio-accélérateurs et active le centre cardio-modérateur.\nLe centre cardio-modérateur émet alors des influx modérateurs par les nerfs parasympathiques, d’où un ralentissement qui ramène la pression artérielle à la normale ; le mécanisme inverse se met en place lorsque le rythme est faible.",
      "keyRule": "Pression qui monte égale barorécepteurs, nerfs sensitifs, centre modérateur du bulbe, nerf vague, ralentissement : la boucle ramène la pression à la normale.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer le ralentissement après excitation du bout central des nerfs sino-aortiques",
        "statement": "Explique la chaîne d’événements qui suit l’excitation du bout central des nerfs de Héring et de Cyon jusqu’au ralentissement du cœur.",
        "methodSteps": [
          "Le bout central conduit l’influx vers le centre cardio-vasculaire : ces nerfs sont sensitifs.",
          "Le centre inhibe les centres cardio-accélérateurs et active le centre cardio-modérateur.",
          "Le centre cardio-modérateur émet des influx modérateurs qui agissent sur le cœur par les nerfs parasympathiques.",
          "Le rythme cardiaque ralentit."
        ],
        "conclusion": "C’est l’interprétation de la deuxième série d’expériences de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les nerfs de Héring et de Cyon sont sensitifs",
          "stepTheme": "Les nerfs de Héring et de Cyon sont sensitifs",
          "stepBadge": "Les nerfs de Héring et de Cyon sont sensitifs",
          "paragraphText": "Les nerfs sino-aortiques transmettent des influx nerveux aux centres nerveux.\nCe sont des nerfs sensitifs, alors que les nerfs parasympathiques et orthosympathiques sont des nerfs moteurs.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p05_q1",
            "type": "mcq",
            "prompt": "Les nerfs de Héring et de Cyon sont des nerfs :",
            "options": [
              "Moteurs cardiomodérateurs",
              "Moteurs cardioaccélérateurs",
              "Sensitifs, transmettant l’influx aux centres",
              "Mixtes sans rôle dans la régulation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation de la deuxième série d’expériences."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Bout central efficace, bout périphérique sans effet",
          "stepTheme": "Bout central efficace, bout périphérique sans effet",
          "stepBadge": "Bout central efficace, bout périphérique sans effet",
          "paragraphText": "L’excitation du bout central des nerfs sino-aortiques sectionnés ralentit le rythme cardiaque.\nL’excitation du bout périphérique de ces mêmes nerfs n’a aucun effet sur le rythme, preuve que l’influx utile part vers les centres.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p05_q2",
            "type": "mcq",
            "prompt": "L’excitation du bout périphérique des nerfs sino-aortiques a pour effet :",
            "options": [
              "Un ralentissement marqué",
              "Une accélération marquée",
              "Aucun effet sur le rythme cardiaque",
              "Un arrêt en diastole"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Résultat de l’expérience 1 de la deuxième série."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les centres cardio-modérateur et cardio-accélérateur",
          "stepTheme": "Les centres cardio-modérateur et cardio-accélérateur",
          "stepBadge": "Les centres cardio-modérateur et cardio-accélérateur",
          "paragraphText": "Le bulbe rachidien contient un centre cardio-modérateur, révélé par le ralentissement après son excitation.\nLa région cervico-dorsale de la moelle épinière contient un centre cardio-accélérateur, révélé par l’accélération après son excitation.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p05_q3",
            "type": "mcq",
            "prompt": "Le centre cardio-modérateur est situé dans :",
            "options": [
              "La moelle épinière cervico-dorsale",
              "Le bulbe rachidien",
              "Le nœud sinusal",
              "La crosse aortique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de l’expérience 2 de la deuxième série."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les barorécepteurs",
          "stepTheme": "Les barorécepteurs",
          "stepBadge": "Les barorécepteurs",
          "paragraphText": "• Barorécepteurs : récepteurs sensibles à la variation de la pression artérielle.\nIls sont situés au niveau de la crosse aortique et du sinus carotidien.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p05_q4",
            "type": "mcq",
            "prompt": "Les barorécepteurs qui déclenchent la régulation sont situés :",
            "options": [
              "Dans le nœud septal",
              "Dans la crosse aortique et le sinus carotidien",
              "Dans les ventricules",
              "Dans la moelle épinière"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Description du mécanisme de régulation dans l’interprétation de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre nerf de Cyon et nerf vague",
          "stepTheme": "Confondre nerf de Cyon et nerf vague",
          "stepBadge": "Confondre nerf de Cyon et nerf vague",
          "paragraphText": "Piège de l’exercice 3 : les deux nerfs sectionnés n’ont pas le même type.\nLe nerf de Cyon est sensitif, son bout central excité diminue la fréquence par les centres ; le nerf X est moteur, c’est son bout périphérique excité qui diminue directement la fréquence cardiaque.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p05_q5",
            "type": "mcq",
            "prompt": "Dans l’exercice 3, l’excitation du bout central diminue la fréquence pour :",
            "options": [
              "Le nerf X seulement",
              "Le nerf de Cyon, nerf sensitif qui informe les centres",
              "Aucun des deux nerfs",
              "Le faisceau de His"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Tableau de l’exercice 3 : bout central efficace pour le nerf de Cyon, sans effet pour le nerf X."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le retour de la pression à la normale",
          "stepTheme": "Le retour de la pression à la normale",
          "stepBadge": "Le retour de la pression à la normale",
          "paragraphText": "Quand le rythme cardiaque est élevé, la pression artérielle augmente et la boucle des barorécepteurs se déclenche.\nElle aboutit au ralentissement du rythme cardiaque, qui ramène la pression artérielle à la normale.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p05_q6",
            "type": "mcq",
            "prompt": "Le ralentissement provoqué par la boucle des barorécepteurs a pour conséquence :",
            "options": [
              "Une nouvelle hausse de pression",
              "Le retour de la pression artérielle à la normale",
              "L’arrêt du cœur en diastole définitive",
              "La suppression des centres accélérateurs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Fin de la description du mécanisme de régulation dans la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p05_q1",
          "type": "mcq",
          "prompt": "Les nerfs de Héring et de Cyon sont des nerfs :",
          "options": [
            "Moteurs cardiomodérateurs",
            "Moteurs cardioaccélérateurs",
            "Sensitifs, transmettant l’influx aux centres",
            "Mixtes sans rôle dans la régulation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation de la deuxième série d’expériences."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p05_q2",
          "type": "mcq",
          "prompt": "L’excitation du bout périphérique des nerfs sino-aortiques a pour effet :",
          "options": [
            "Un ralentissement marqué",
            "Une accélération marquée",
            "Aucun effet sur le rythme cardiaque",
            "Un arrêt en diastole"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Résultat de l’expérience 1 de la deuxième série."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p05_q3",
          "type": "mcq",
          "prompt": "Le centre cardio-modérateur est situé dans :",
          "options": [
            "La moelle épinière cervico-dorsale",
            "Le bulbe rachidien",
            "Le nœud sinusal",
            "La crosse aortique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de l’expérience 2 de la deuxième série."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p05_q4",
          "type": "mcq",
          "prompt": "Les barorécepteurs qui déclenchent la régulation sont situés :",
          "options": [
            "Dans le nœud septal",
            "Dans la crosse aortique et le sinus carotidien",
            "Dans les ventricules",
            "Dans la moelle épinière"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Description du mécanisme de régulation dans l’interprétation de la leçon."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p05_q5",
          "type": "mcq",
          "prompt": "Dans l’exercice 3, l’excitation du bout central diminue la fréquence pour :",
          "options": [
            "Le nerf X seulement",
            "Le nerf de Cyon, nerf sensitif qui informe les centres",
            "Aucun des deux nerfs",
            "Le faisceau de His"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Tableau de l’exercice 3 : bout central efficace pour le nerf de Cyon, sans effet pour le nerf X."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p05_q6",
          "type": "mcq",
          "prompt": "Le ralentissement provoqué par la boucle des barorécepteurs a pour conséquence :",
          "options": [
            "Une nouvelle hausse de pression",
            "Le retour de la pression artérielle à la normale",
            "L’arrêt du cœur en diastole définitive",
            "La suppression des centres accélérateurs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Fin de la description du mécanisme de régulation dans la leçon."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l04_fonctionnement_coeur_p06",
      "order": 6,
      "title": "Les médiateurs chimiques : expérience de Loewi, acétylcholine et adrénaline",
      "summary": "Montrer que les nerfs cardiaques agissent par des substances libérées, cardiomodératrice ou cardioaccélératrice.",
      "conceptExplanation": "Dans l’expérience de Loewi, deux cœurs de grenouille isolés, A et B, sont reliés par un raccord et irrigués par un liquide physiologique ; l’excitation du nerf vague du cœur A arrête le cœur A, puis le cœur B s’arrête aussi après un moment ; l’excitation de l’orthosympathique du cœur A accélère le cœur A puis le cœur B.\nSi le cœur B est traité par l’atropine, qui inhibe l’action des substances des nerfs vagues, l’excitation du vague du cœur A est sans effet sur lui ; de même, l’ergotoxine, qui inhibe l’effet des substances orthosympathiques, supprime l’effet sur le cœur B.\nLes nerfs libèrent donc des médiateurs chimiques : la substance vagale au niveau du parasympathique et la sympathine au niveau de l’orthosympathique.\nLa perfusion d’acétylcholine ralentit le cœur et l’arrête en diastole : l’acétylcholine est une substance cardiomodératrice qui inhibe le nœud sinusal. La perfusion d’adrénaline accélère le rythme : l’adrénaline, ou noradrénaline, est une substance cardioaccélératrice qui stimule le nœud sinusal.\nL’échappement observé ailleurs s’explique par la destruction des molécules d’acétylcholine par l’acétylcholinestérase dans les fentes synaptiques.",
      "keyRule": "Expérience de Loewi égale preuve par le transfert liquide ; acétylcholine égale frein, adrénaline égale accélérateur.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter l’expérience de Loewi avec atropine et ergotoxine",
        "statement": "Explique pourquoi l’excitation du nerf vague du cœur A devient sans effet sur un cœur B traité à l’atropine, dans l’expérience de Loewi.",
        "methodSteps": [
          "L’excitation du vague du cœur A libère normalement une substance qui passe par le raccord et arrête aussi le cœur B.",
          "L’atropine est une substance qui inhibe l’action des substances des nerfs vagues.",
          "Le cœur B traité ne répond donc plus à la substance vagale transmise : l’effet a disparu."
        ],
        "conclusion": "Ce sont les résultats et l’interprétation du tableau de l’expérience de Loewi."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le principe de l’expérience de Loewi",
          "stepTheme": "Le principe de l’expérience de Loewi",
          "stepBadge": "Le principe de l’expérience de Loewi",
          "paragraphText": "Deux cœurs de grenouille isolés, A et B, sont reliés l’un à l’autre par un raccord.\nIls sont irrigués avec un liquide physiologique qui peut donc passer d’un cœur à l’autre.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p06_q1",
            "type": "mcq",
            "prompt": "Dans l’expérience de Loewi, les deux cœurs sont reliés par :",
            "options": [
              "Un nerf commun",
              "Un raccord laissant passer le liquide physiologique",
              "Le faisceau de His",
              "Un fil métallique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Présentation de la première série d’expériences sur les substances."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’arrêt transmis du cœur A au cœur B",
          "stepTheme": "L’arrêt transmis du cœur A au cœur B",
          "stepBadge": "L’arrêt transmis du cœur A au cœur B",
          "paragraphText": "Quand on excite le nerf vague du cœur A jusqu’à l’arrêt de ses battements, le cœur B arrête également de battre après un moment.\nUne substance libérée au niveau du cœur A a donc agi, via le liquide, sur le cœur B.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p06_q2",
            "type": "mcq",
            "prompt": "Après excitation du nerf vague du cœur A, le cœur B :",
            "options": [
              "Accélère immédiatement",
              "Continue sans aucun changement",
              "S’arrête également de battre après un moment",
              "Bat seulement au niveau des oreillettes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Résultat du tableau de l’expérience de Loewi."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Un médiateur chimique",
          "stepTheme": "Un médiateur chimique",
          "stepBadge": "Un médiateur chimique",
          "paragraphText": "• Médiateur chimique : substance chimique sécrétée au niveau des terminaisons nerveuses et déversée dans les fentes synaptiques pour permettre la transmission de l’influx nerveux.\nIl est détruit par des enzymes spécifiques et son activité peut être inhibée par certains poisons.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p06_q3",
            "type": "mcq",
            "prompt": "Un médiateur chimique est détruit, après son action, par :",
            "options": [
              "Le liquide de Ringer",
              "Des enzymes spécifiques",
              "Les barorécepteurs",
              "La myéline"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition du médiateur chimique donnée à la fin de la partie sur les substances."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L’acétylcholine cardiomodératrice",
          "stepTheme": "L’acétylcholine cardiomodératrice",
          "stepBadge": "L’acétylcholine cardiomodératrice",
          "paragraphText": "La perfusion d’un cœur de grenouille avec de l’acétylcholine ralentit le rythme, après un temps de latence, et arrête le cœur en diastole.\nL’acétylcholine inhibe l’activité du nœud sinusal : c’est une substance cardiomodératrice, libérée lors de l’excitation des nerfs parasympathiques.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p06_q4",
            "type": "mcq",
            "prompt": "L’acétylcholine perfusée sur un cœur de grenouille provoque :",
            "options": [
              "Une accélération du rythme",
              "Un ralentissement puis un arrêt en diastole",
              "Aucun effet même après latence",
              "Une contraction tétanique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Expérience 1 de la deuxième série sur les substances."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Atropine et ergotoxine ne sont pas interchangeables",
          "stepTheme": "Atropine et ergotoxine ne sont pas interchangeables",
          "stepBadge": "Atropine et ergotoxine ne sont pas interchangeables",
          "paragraphText": "Piège : confondre les deux inhibiteurs de l’expérience de Loewi.\nL’atropine inhibe l’action des substances des nerfs vagues ; l’ergotoxine inhibe l’effet des substances orthosympathiques.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p06_q5",
            "type": "mcq",
            "prompt": "L’ergotoxine, dans l’expérience de Loewi, inhibe l’effet des substances :",
            "options": [
              "Des nerfs vagues",
              "Orthosympathiques",
              "Du tissu nodal lui-même",
              "De la solution de Ringer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Présentation des traitements du cœur B dans le tableau de Loewi."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’adrénaline cardioaccélératrice et l’échappement",
          "stepTheme": "L’adrénaline cardioaccélératrice et l’échappement",
          "stepBadge": "L’adrénaline cardioaccélératrice et l’échappement",
          "paragraphText": "La perfusion d’adrénaline accélère le rythme cardiaque, après un temps de latence, car elle stimule l’activité du nœud sinusal : c’est une substance cardioaccélératrice.\nQuant à l’échappement observé lors des stimulations prolongées du vague, il est dû à la destruction des molécules d’acétylcholine par l’acétylcholinestérase dans les fentes synaptiques.",
          "exercise": {
            "id": "terminale_d_svt_l04_fonctionnement_coeur_p06_q6",
            "type": "mcq",
            "prompt": "L’échappement du cœur lors d’une stimulation prolongée du nerf vague s’explique par :",
            "options": [
              "La synthèse d’adrénaline par le cœur",
              "La destruction de l’acétylcholine par l’acétylcholinestérase",
              "La section spontanée du nerf",
              "L’épuisement du tissu nodal"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de l’échappement dans la partie sur les substances chimiques."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p06_q1",
          "type": "mcq",
          "prompt": "Dans l’expérience de Loewi, les deux cœurs sont reliés par :",
          "options": [
            "Un nerf commun",
            "Un raccord laissant passer le liquide physiologique",
            "Le faisceau de His",
            "Un fil métallique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Présentation de la première série d’expériences sur les substances."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p06_q2",
          "type": "mcq",
          "prompt": "Après excitation du nerf vague du cœur A, le cœur B :",
          "options": [
            "Accélère immédiatement",
            "Continue sans aucun changement",
            "S’arrête également de battre après un moment",
            "Bat seulement au niveau des oreillettes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Résultat du tableau de l’expérience de Loewi."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p06_q3",
          "type": "mcq",
          "prompt": "Un médiateur chimique est détruit, après son action, par :",
          "options": [
            "Le liquide de Ringer",
            "Des enzymes spécifiques",
            "Les barorécepteurs",
            "La myéline"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition du médiateur chimique donnée à la fin de la partie sur les substances."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p06_q4",
          "type": "mcq",
          "prompt": "L’acétylcholine perfusée sur un cœur de grenouille provoque :",
          "options": [
            "Une accélération du rythme",
            "Un ralentissement puis un arrêt en diastole",
            "Aucun effet même après latence",
            "Une contraction tétanique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Expérience 1 de la deuxième série sur les substances."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p06_q5",
          "type": "mcq",
          "prompt": "L’ergotoxine, dans l’expérience de Loewi, inhibe l’effet des substances :",
          "options": [
            "Des nerfs vagues",
            "Orthosympathiques",
            "Du tissu nodal lui-même",
            "De la solution de Ringer"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Présentation des traitements du cœur B dans le tableau de Loewi."
        },
        {
          "id": "terminale_d_svt_l04_fonctionnement_coeur_p06_q6",
          "type": "mcq",
          "prompt": "L’échappement du cœur lors d’une stimulation prolongée du nerf vague s’explique par :",
          "options": [
            "La synthèse d’adrénaline par le cœur",
            "La destruction de l’acétylcholine par l’acétylcholinestérase",
            "La section spontanée du nerf",
            "L’épuisement du tissu nodal"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de l’échappement dans la partie sur les substances chimiques."
        }
      ]
    }
  ]
};
