import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 9 : L’évolution des sols tropicaux » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2793
export const SVT_1ERE_D_L09_EVOLUTION_SOLS_TROPICAUX: CurriculumChapter = {
  "id": "premiere_d_svt_l09_evolution_sols_tropicaux",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 9,
  "title": "Leçon 9 : L’évolution des sols tropicaux",
  "summary": "Les sols évoluent de différentes manières, progressivement par gain d’horizons ou régressivement par perte d’horizons, par les migrations descendantes et ascendantes d’éléments minéraux et par la modification de leurs caractéristiques, qui détermine leur fertilité. QCM dérivés du seul résumé de la leçon, le site ne proposant pas de livre d’exercices pour cette leçon.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2793",
  "points": [
    {
      "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01",
      "order": 1,
      "title": "L’évolution progressive des sols : la formation des horizons",
      "summary": "Décrire la formation d’un sol par dégradation de la roche mère, humification et apparition successive des horizons jusqu’au climax.",
      "conceptExplanation": "La formation du sol se fait par étapes : dégradation progressive de la roche mère, apparition et développement des végétaux et apparition de couches de façon successive ; cette évolution se fait par un gain d’horizons, on parle d’évolution progressive.\nAprès l’affleurement de la roche mère, les facteurs comme la température, l’eau, la nature de la roche mère et les organismes vivants favorisent sa dégradation, qui aboutit à la formation de l’arène granitique riche en sels minéraux.\nCette action entraîne la colonisation et le développement de la végétation, qui passe progressivement d’une végétation herbacée puis arbustive à une végétation forestière ; les débris de ces végétaux sont dégradés par les micro-organismes pour donner l’humus : c’est l’humification.\nLa couche contenant l’humus est appelée horizon humifère ou horizon A ; on passe progressivement d’un profil A, C à un profil A, B, C puis un profil A1, A2, B, C.\nL’horizon A1 est une couche humifère constituée de matière organique et minérale, l’horizon A2 est constitué de matière minérale, l’horizon B est une couche d’accumulation constituée de matière organique et minérale et l’horizon C est constitué de la roche mère.\nLorsque le sol atteint sa maturité, la végétation reste stable et il s’établit un équilibre entre la végétation et le sol : on parle de climax.",
      "keyRule": "Évolution progressive égale gain d’horizons, de la roche mère dégradée jusqu’au climax.",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître une évolution progressive d’après le document 1",
        "statement": "Le document 1 montre les étapes de formation d’un sol : roche mère fissurée, roche mère en dégradation avec installation de végétaux, apparition d’un horizon humifère, puis de 3 horizons et enfin de 4 horizons. Déduis le type d’évolution.",
        "methodSteps": [
          "La formation se fait par étapes, avec dégradation progressive de la roche mère et développement des végétaux.",
          "Des couches apparaissent de façon successive : le sol gagne des horizons.",
          "Un gain d’horizons caractérise l’évolution progressive."
        ],
        "conclusion": "C’est l’analyse du document 1 de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’évolution progressive",
          "stepTheme": "L’évolution progressive",
          "stepBadge": "L’évolution progressive",
          "paragraphText": "• Évolution progressive : évolution du sol qui se fait par un gain d’horizons.\nElle correspond aux étapes de formation du sol, de la roche mère fissurée jusqu’à l’apparition de 4 horizons avec des végétaux très développés.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q1",
            "type": "mcq",
            "prompt": "L’évolution progressive d’un sol se fait par :",
            "options": [
              "Un gain d’horizons",
              "Une perte d’horizons",
              "Une destruction du couvert végétal",
              "Une érosion intense"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition tirée de l’analyse du document 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La dégradation de la roche mère",
          "stepTheme": "La dégradation de la roche mère",
          "stepBadge": "La dégradation de la roche mère",
          "paragraphText": "Après l’affleurement de la roche mère, la température, l’eau, la nature de la roche mère et les organismes vivants favorisent sa dégradation.\nCette dégradation aboutit à la formation de l’arène granitique riche en sels minéraux.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q2",
            "type": "mcq",
            "prompt": "La dégradation de la roche mère aboutit à la formation :",
            "options": [
              "De l’humus directement",
              "D’une cuirasse",
              "De l’arène granitique riche en sels minéraux",
              "D’une croûte saline"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’interprétation de l’évolution progressive dans la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L’humification",
          "stepTheme": "L’humification",
          "stepBadge": "L’humification",
          "paragraphText": "• Humification : dégradation des débris de végétaux par les micro-organismes pour donner l’humus.\nLa couche contenant l’humus est appelée horizon humifère ou horizon A.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q3",
            "type": "mcq",
            "prompt": "L’humification est :",
            "options": [
              "La dégradation de la roche mère par l’eau",
              "La dégradation des débris de végétaux par les micro-organismes pour donner l’humus",
              "L’accumulation des sels en surface",
              "La migration de l’argile en profondeur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition donnée dans l’interprétation du document 1."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La succession des profils",
          "stepTheme": "La succession des profils",
          "stepBadge": "La succession des profils",
          "paragraphText": "On passe progressivement d’un profil A, C à un profil A, B, C puis un profil A1, A2, B, C.\nL’horizon B, couche d’accumulation, apparaît donc entre l’horizon A et l’horizon C, constitué de la roche mère.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q4",
            "type": "mcq",
            "prompt": "Au cours de l’évolution progressive, la succession des profils est :",
            "options": [
              "C puis B puis A uniquement",
              "A1, A2 uniquement dès le départ",
              "B, C puis disparition de A",
              "A, C puis A, B, C puis A1, A2, B, C"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la succession décrite dans l’interprétation de l’évolution progressive."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les horizons A1, A2, B et C",
          "stepTheme": "Les horizons A1, A2, B et C",
          "stepBadge": "Les horizons A1, A2, B et C",
          "paragraphText": "L’horizon A1 est une couche humifère constituée de matière organique et minérale, et l’horizon A2 est constitué de matière minérale.\nL’horizon B est une couche d’accumulation constituée de matière organique et minérale, et l’horizon C est constitué de la roche mère.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q5",
            "type": "mcq",
            "prompt": "L’horizon B d’un sol évolué est :",
            "options": [
              "La roche mère",
              "Une couche uniquement minérale lessivée",
              "Une couche d’accumulation constituée de matière organique et minérale",
              "La couche humifère de surface uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les descriptions des horizons données dans la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le climax",
          "stepTheme": "Le climax",
          "stepBadge": "Le climax",
          "paragraphText": "• Climax : état d’un sol qui a atteint sa maturité, où la végétation reste stable et où il s’établit un équilibre entre la végétation et le sol.\nLe climax est donc l’aboutissement de l’évolution progressive.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q6",
            "type": "mcq",
            "prompt": "Le climax correspond à :",
            "options": [
              "Un équilibre entre la végétation et le sol, quand le sol atteint sa maturité",
              "La destruction du couvert végétal",
              "La mise à nu de la roche mère",
              "La perte des horizons supérieurs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition du climax donnée à la fin de l’interprétation de l’évolution progressive."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q1",
          "type": "mcq",
          "prompt": "L’évolution progressive d’un sol se fait par :",
          "options": [
            "Un gain d’horizons",
            "Une perte d’horizons",
            "Une destruction du couvert végétal",
            "Une érosion intense"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition tirée de l’analyse du document 1."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q2",
          "type": "mcq",
          "prompt": "La dégradation de la roche mère aboutit à la formation :",
          "options": [
            "De l’humus directement",
            "D’une cuirasse",
            "De l’arène granitique riche en sels minéraux",
            "D’une croûte saline"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’interprétation de l’évolution progressive dans la leçon."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q3",
          "type": "mcq",
          "prompt": "L’humification est :",
          "options": [
            "La dégradation de la roche mère par l’eau",
            "La dégradation des débris de végétaux par les micro-organismes pour donner l’humus",
            "L’accumulation des sels en surface",
            "La migration de l’argile en profondeur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition donnée dans l’interprétation du document 1."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q4",
          "type": "mcq",
          "prompt": "Au cours de l’évolution progressive, la succession des profils est :",
          "options": [
            "C puis B puis A uniquement",
            "A1, A2 uniquement dès le départ",
            "B, C puis disparition de A",
            "A, C puis A, B, C puis A1, A2, B, C"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la succession décrite dans l’interprétation de l’évolution progressive."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q5",
          "type": "mcq",
          "prompt": "L’horizon B d’un sol évolué est :",
          "options": [
            "La roche mère",
            "Une couche uniquement minérale lessivée",
            "Une couche d’accumulation constituée de matière organique et minérale",
            "La couche humifère de surface uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les descriptions des horizons données dans la leçon."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q6",
          "type": "mcq",
          "prompt": "Le climax correspond à :",
          "options": [
            "Un équilibre entre la végétation et le sol, quand le sol atteint sa maturité",
            "La destruction du couvert végétal",
            "La mise à nu de la roche mère",
            "La perte des horizons supérieurs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition du climax donnée à la fin de l’interprétation de l’évolution progressive."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02",
      "order": 2,
      "title": "L’évolution régressive des sols : la perte des horizons",
      "summary": "Expliquer la disparition d’horizons par la destruction du couvert végétal, l’érosion et la rupture du climax.",
      "conceptExplanation": "Dans le document 2, au stade 1, le sol présente 6 horizons : du bas vers le haut, les horizons C, B2, B1, A2, A1 et A0 ; au stade 2, le sol ne présente plus que 3 horizons : C, A2 et A1.\nDu stade 1 au stade 2, on note donc une disparition de certains horizons : cette évolution du sol se fait par une perte d’horizons, on parle d’évolution régressive.\nLa disparition des horizons manquants est due à la destruction du couvert végétal par les actions de l’homme, comme les feux de brousse et le déboisement, et par des phénomènes naturels comme la sécheresse, qui mettent le sol à nu.\nUn tel sol subit l’érosion, qui emporte les horizons superficiels du sol, ce qui met la roche mère à nu.\nCeci entraîne la rupture des équilibres, ou rupture du climax.",
      "keyRule": "Évolution régressive égale perte d’horizons, par destruction du couvert végétal puis érosion.",
      "formulas": [],
      "workedExample": {
        "title": "Déduire le type d’évolution entre deux stades d’un même sol",
        "statement": "Un même sol possède au stade 1 tous ses horizons, puis au stade 2 il a perdu les horizons A0, B1 et B2 après destruction du couvert végétal. Déduis le type d’évolution subie.",
        "methodSteps": [
          "Au stade 2, le sol a perdu des horizons par rapport au stade 1.",
          "La destruction du couvert végétal par les actions de l’homme et la sécheresse a mis le sol à nu et l’érosion a emporté les horizons superficiels.",
          "Une perte d’horizons caractérise l’évolution régressive."
        ],
        "conclusion": "C’est le corrigé de la situation d’évaluation 2 de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’évolution régressive",
          "stepTheme": "L’évolution régressive",
          "stepBadge": "L’évolution régressive",
          "paragraphText": "• Évolution régressive : évolution du sol qui se fait par une perte d’horizons.\nDans le document 2, le sol passe de 6 horizons au stade 1 à 3 horizons au stade 2.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q1",
            "type": "mcq",
            "prompt": "L’évolution régressive d’un sol se fait par :",
            "options": [
              "Un gain d’horizons",
              "Une colonisation par les végétaux",
              "Une humification intense",
              "Une perte d’horizons"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la définition tirée de l’analyse du document 2."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les horizons du document 2",
          "stepTheme": "Les horizons du document 2",
          "stepBadge": "Les horizons du document 2",
          "paragraphText": "Au stade 1, le sol présente, du bas vers le haut, les horizons C, B2, B1, A2, A1 et A0.\nAu stade 2, il ne présente plus que les horizons C, A2 et A1 : des horizons ont disparu.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q2",
            "type": "mcq",
            "prompt": "Au stade 2 du document 2, le sol présente les horizons :",
            "options": [
              "C, B2, B1, A2, A1 et A0",
              "C, A2 et A1",
              "A0 et A1 uniquement",
              "B1 et B2 uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les résultats de l’observation du document 2."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La destruction du couvert végétal",
          "stepTheme": "La destruction du couvert végétal",
          "stepBadge": "La destruction du couvert végétal",
          "paragraphText": "La disparition des horizons est due à la destruction du couvert végétal par les actions de l’homme, comme les feux de brousse et le déboisement.\nDes phénomènes naturels comme la sécheresse détruisent aussi ce couvert et mettent le sol à nu.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q3",
            "type": "mcq",
            "prompt": "Parmi les causes suivantes, laquelle détruit le couvert végétal selon la leçon ?",
            "options": [
              "L’humification",
              "Les feux de brousse et le déboisement",
              "La colonisation par les végétaux",
              "La formation de l’arène granitique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon cite les actions de l’homme, feux de brousse et déboisement, et les phénomènes naturels comme la sécheresse."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le rôle de l’érosion",
          "stepTheme": "Le rôle de l’érosion",
          "stepBadge": "Le rôle de l’érosion",
          "paragraphText": "Un sol mis à nu subit l’érosion, qui emporte les horizons superficiels du sol.\nL’érosion peut aller jusqu’à mettre la roche mère à nu.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q4",
            "type": "mcq",
            "prompt": "Sur un sol mis à nu, l’érosion emporte :",
            "options": [
              "La roche mère en premier",
              "Uniquement les sels solubles profonds",
              "Les horizons B uniquement",
              "Les horizons superficiels du sol"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est le mécanisme de l’évolution régressive décrit dans l’interprétation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La rupture du climax",
          "stepTheme": "La rupture du climax",
          "stepBadge": "La rupture du climax",
          "paragraphText": "• Rupture du climax : rupture des équilibres établis entre la végétation et le sol, entraînée par la destruction du couvert végétal et l’érosion.\nElle est la conséquence finale de l’évolution régressive décrite dans le document 2.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q5",
            "type": "mcq",
            "prompt": "La rupture du climax est :",
            "options": [
              "La rupture des équilibres entre la végétation et le sol",
              "L’atteinte de la maturité du sol",
              "La formation d’un nouvel horizon",
              "L’équilibre final d’un sol fertile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon conclut l’évolution régressive par la rupture des équilibres, ou rupture du climax."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Progressive ou régressive : le critère est le nombre d’horizons",
          "stepTheme": "Progressive ou régressive : le critère est le nombre d’horizons",
          "stepBadge": "Progressive ou régressive : le critère est le nombre d’horizons",
          "paragraphText": "Piège : ne pas juger sur l’aspect du sol, mais sur le devenir de ses horizons.\nGain d’horizons égale évolution progressive ; perte d’horizons égale évolution régressive, comme le vérifie l’activité d’application de la partie I.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q6",
            "type": "mcq",
            "prompt": "La naissance de nouveaux horizons dans un sol traduit une évolution :",
            "options": [
              "Régressive",
              "Stationnaire définitive",
              "Progressive",
              "Uniquement chimique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La naissance de couches fait partie des affirmations rapportées à l’évolution progressive dans le corrigé de l’activité."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q1",
          "type": "mcq",
          "prompt": "L’évolution régressive d’un sol se fait par :",
          "options": [
            "Un gain d’horizons",
            "Une colonisation par les végétaux",
            "Une humification intense",
            "Une perte d’horizons"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la définition tirée de l’analyse du document 2."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q2",
          "type": "mcq",
          "prompt": "Au stade 2 du document 2, le sol présente les horizons :",
          "options": [
            "C, B2, B1, A2, A1 et A0",
            "C, A2 et A1",
            "A0 et A1 uniquement",
            "B1 et B2 uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les résultats de l’observation du document 2."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q3",
          "type": "mcq",
          "prompt": "Parmi les causes suivantes, laquelle détruit le couvert végétal selon la leçon ?",
          "options": [
            "L’humification",
            "Les feux de brousse et le déboisement",
            "La colonisation par les végétaux",
            "La formation de l’arène granitique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon cite les actions de l’homme, feux de brousse et déboisement, et les phénomènes naturels comme la sécheresse."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q4",
          "type": "mcq",
          "prompt": "Sur un sol mis à nu, l’érosion emporte :",
          "options": [
            "La roche mère en premier",
            "Uniquement les sels solubles profonds",
            "Les horizons B uniquement",
            "Les horizons superficiels du sol"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est le mécanisme de l’évolution régressive décrit dans l’interprétation."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q5",
          "type": "mcq",
          "prompt": "La rupture du climax est :",
          "options": [
            "La rupture des équilibres entre la végétation et le sol",
            "L’atteinte de la maturité du sol",
            "La formation d’un nouvel horizon",
            "L’équilibre final d’un sol fertile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon conclut l’évolution régressive par la rupture des équilibres, ou rupture du climax."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q6",
          "type": "mcq",
          "prompt": "La naissance de nouveaux horizons dans un sol traduit une évolution :",
          "options": [
            "Régressive",
            "Stationnaire définitive",
            "Progressive",
            "Uniquement chimique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La naissance de couches fait partie des affirmations rapportées à l’évolution progressive dans le corrigé de l’activité."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03",
      "order": 3,
      "title": "Les migrations descendantes : lixiviation, chéluviation et lessivage",
      "summary": "Distinguer les trois migrations descendantes et leurs effets sur les horizons A et B.",
      "conceptExplanation": "Les éléments minéraux du sol subissent deux types de migrations : les migrations descendantes, des horizons de surface vers les horizons profonds, et les migrations ascendantes, des horizons profonds vers les horizons de surface.\nQuand il pleut, l’eau s’infiltre dans le sol et, lors de sa descente vers les profondeurs, elle emporte certaines substances du sol.\nLorsque les sels plus ou moins ionisés migrent de l’horizon A vers l’horizon B, on parle de lixiviation ; lorsqu’il s’agit du complexe formé par le fer et l’aluminium associé à la matière organique, on parle de chéluviation ; lorsque l’argile dispersée migre vers les horizons inférieurs, on parle de lessivage.\nLes migrations descendantes entraînent l’appauvrissement de l’horizon A, appelé alors horizon lessivé ou éluvial, et l’enrichissement de l’horizon B, appelé horizon d’accumulation ou illuvial.",
      "keyRule": "Lixiviation pour les sels ionisés, chéluviation pour le fer et l’aluminium liés à la matière organique, lessivage pour l’argile.",
      "formulas": [],
      "workedExample": {
        "title": "Associer chaque phénomène descendant à sa définition",
        "statement": "Associe chaque phénomène à sa définition : formation de cuirasse, lixiviation, lessivage ; définitions : migration de sels ionisés vers les horizons inférieurs, accumulation d’oxydes en surface, migration d’argile vers les horizons inférieurs.",
        "methodSteps": [
          "La lixiviation est la migration de sels ionisés des horizons supérieurs vers les horizons inférieurs.",
          "Le lessivage est la migration d’argile des horizons supérieurs vers les horizons inférieurs.",
          "La formation de cuirasse est l’accumulation d’oxydes de fer et d’aluminium en surface : ce n’est pas une migration descendante."
        ],
        "conclusion": "Ce sont les associations du corrigé de l’activité d’application 2 de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Migrations descendantes et ascendantes",
          "stepTheme": "Migrations descendantes et ascendantes",
          "stepBadge": "Migrations descendantes et ascendantes",
          "paragraphText": "• Migrations descendantes : migrations des éléments minéraux des horizons de surface vers les horizons profonds.\n• Migrations ascendantes : migrations des horizons profonds vers les horizons de surface.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q1",
            "type": "mcq",
            "prompt": "Les migrations descendantes vont :",
            "options": [
              "Des horizons de surface vers les horizons profonds",
              "Des horizons profonds vers la surface",
              "Horizontalement uniquement",
              "Des plantes vers le sol uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la distinction de l’analyse du document 3, tableaux A et B."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le rôle de l’eau de pluie qui s’infiltre",
          "stepTheme": "Le rôle de l’eau de pluie qui s’infiltre",
          "stepBadge": "Le rôle de l’eau de pluie qui s’infiltre",
          "paragraphText": "Quand il pleut, l’eau s’infiltre dans le sol.\nLors de sa descente vers les profondeurs, l’eau emporte certaines substances du sol : c’est le moteur des migrations descendantes.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q2",
            "type": "mcq",
            "prompt": "Les migrations descendantes sont entraînées par :",
            "options": [
              "L’évaporation de l’eau du sol",
              "Les racines des plantes uniquement",
              "L’eau de pluie qui s’infiltre et descend dans le sol",
              "La cristallisation des sels en surface"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est le point de départ de l’interprétation des migrations descendantes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La lixiviation",
          "stepTheme": "La lixiviation",
          "stepBadge": "La lixiviation",
          "paragraphText": "• Lixiviation : migration des sels plus ou moins ionisés de l’horizon A vers l’horizon B, lors de la descente de l’eau dans le sol.\nElle concerne donc les sels solubles entraînés par l’eau d’infiltration.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q3",
            "type": "mcq",
            "prompt": "La lixiviation est la migration :",
            "options": [
              "De l’argile dispersée vers les horizons inférieurs",
              "Des sels plus ou moins ionisés de l’horizon A vers l’horizon B",
              "Du fer lié à la matière organique uniquement",
              "Des sels de la profondeur vers la surface"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition de la lixiviation donnée dans l’interprétation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La chéluviation",
          "stepTheme": "La chéluviation",
          "stepBadge": "La chéluviation",
          "paragraphText": "• Chéluviation : migration du complexe formé par le fer et l’aluminium associé à la matière organique, vers les horizons inférieurs.\nElle se distingue de la lixiviation par la nature des éléments entraînés.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q4",
            "type": "mcq",
            "prompt": "La chéluviation concerne la migration :",
            "options": [
              "Des sels ionisés seuls",
              "De l’argile dispersée seule",
              "De l’eau vers la surface",
              "Du complexe formé par le fer et l’aluminium associé à la matière organique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la définition de la chéluviation donnée dans l’interprétation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le lessivage",
          "stepTheme": "Le lessivage",
          "stepBadge": "Le lessivage",
          "paragraphText": "• Lessivage : migration de l’argile dispersée vers les horizons inférieurs du sol.\nL’activité d’application précise que le lessivage est l’entraînement des particules fines dans les horizons inférieurs et qu’il contribue à la mise en place de certains horizons.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q5",
            "type": "mcq",
            "prompt": "Le lessivage est la migration :",
            "options": [
              "Des sels solubles vers la surface",
              "Des oxydes vers la surface",
              "De l’argile dispersée vers les horizons inférieurs",
              "De la matière organique fraîche uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la définition du lessivage, confirmée par le corrigé de l’activité d’application de la partie II."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Horizon éluvial et horizon illuvial",
          "stepTheme": "Horizon éluvial et horizon illuvial",
          "stepBadge": "Horizon éluvial et horizon illuvial",
          "paragraphText": "Les migrations descendantes appauvrissent l’horizon A, appelé alors horizon lessivé ou éluvial.\nElles enrichissent l’horizon B, appelé horizon d’accumulation ou illuvial.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q6",
            "type": "mcq",
            "prompt": "Après les migrations descendantes, l’horizon B est appelé :",
            "options": [
              "Horizon d’accumulation ou illuvial",
              "Horizon éluvial",
              "Horizon humifère",
              "Roche mère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’horizon A appauvri est l’horizon éluvial et l’horizon B enrichi est l’horizon illuvial."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q1",
          "type": "mcq",
          "prompt": "Les migrations descendantes vont :",
          "options": [
            "Des horizons de surface vers les horizons profonds",
            "Des horizons profonds vers la surface",
            "Horizontalement uniquement",
            "Des plantes vers le sol uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la distinction de l’analyse du document 3, tableaux A et B."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q2",
          "type": "mcq",
          "prompt": "Les migrations descendantes sont entraînées par :",
          "options": [
            "L’évaporation de l’eau du sol",
            "Les racines des plantes uniquement",
            "L’eau de pluie qui s’infiltre et descend dans le sol",
            "La cristallisation des sels en surface"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est le point de départ de l’interprétation des migrations descendantes."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q3",
          "type": "mcq",
          "prompt": "La lixiviation est la migration :",
          "options": [
            "De l’argile dispersée vers les horizons inférieurs",
            "Des sels plus ou moins ionisés de l’horizon A vers l’horizon B",
            "Du fer lié à la matière organique uniquement",
            "Des sels de la profondeur vers la surface"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition de la lixiviation donnée dans l’interprétation."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q4",
          "type": "mcq",
          "prompt": "La chéluviation concerne la migration :",
          "options": [
            "Des sels ionisés seuls",
            "De l’argile dispersée seule",
            "De l’eau vers la surface",
            "Du complexe formé par le fer et l’aluminium associé à la matière organique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la définition de la chéluviation donnée dans l’interprétation."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q5",
          "type": "mcq",
          "prompt": "Le lessivage est la migration :",
          "options": [
            "Des sels solubles vers la surface",
            "Des oxydes vers la surface",
            "De l’argile dispersée vers les horizons inférieurs",
            "De la matière organique fraîche uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la définition du lessivage, confirmée par le corrigé de l’activité d’application de la partie II."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q6",
          "type": "mcq",
          "prompt": "Après les migrations descendantes, l’horizon B est appelé :",
          "options": [
            "Horizon d’accumulation ou illuvial",
            "Horizon éluvial",
            "Horizon humifère",
            "Roche mère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’horizon A appauvri est l’horizon éluvial et l’horizon B enrichi est l’horizon illuvial."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04",
      "order": 4,
      "title": "Les migrations ascendantes : croûte saline, cuirasse et induration",
      "summary": "Expliquer la remontée des sels et des oxydes par évaporation, la formation de la croûte saline et de la cuirasse, et la migration par les plantes.",
      "conceptExplanation": "Dans le document 3-B, l’eau et les sels solubles ainsi que l’oxyde de fer migrent des horizons profonds vers les horizons de surface, et les sels minéraux sont absorbés par les plantes.\nLorsque la température est élevée, l’eau du sol est soumise à l’évaporation ; en remontant, l’eau entraîne les sels solubles qui s’accumulent à la surface pour former une couche dure appelée croûte saline.\nL’eau entraîne aussi les oxydes de fer et d’aluminium à la surface pour former une couche dure appelée cuirasse : c’est l’induration.\nLes sels minéraux absorbés par les plantes ont aussi une migration ascendante.\nL’activité d’application précise que la cuirasse ne se met pas en place dans l’horizon humifère, et que la cristallisation et l’induration des ions libres sont à l’origine de la formation des cuirasses.",
      "keyRule": "Par évaporation, l’eau remonte et dépose en surface sels (croûte saline) et oxydes de fer et d’aluminium (cuirasse).",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le texte lacunaire sur la formation d’une cuirasse",
        "statement": "Complète le texte de l’activité d’application 3 : un lessivage des horizons supérieurs amène une accumulation d’ions libres dans les horizons inférieurs ; que deviennent ces ions et que forment-ils ?",
        "methodSteps": [
          "Sous l’action de l’eau d’infiltration, il se produit un lessivage des horizons supérieurs, avec accumulation d’ions libres dans les horizons inférieurs.",
          "La cristallisation de ces ions, suivie de leur induration, conduit à la formation d’une cuirasse plus ou moins en profondeur."
        ],
        "conclusion": "Ce sont les réponses du corrigé de l’activité d’application 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le moteur des migrations ascendantes : l’évaporation",
          "stepTheme": "Le moteur des migrations ascendantes : l’évaporation",
          "stepBadge": "Le moteur des migrations ascendantes : l’évaporation",
          "paragraphText": "Lorsque la température est élevée, l’eau du sol est soumise à l’évaporation.\nEn remontant, l’eau entraîne avec elle des substances dissoutes, des horizons profonds vers les horizons de surface.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q1",
            "type": "mcq",
            "prompt": "Les migrations ascendantes sont provoquées par :",
            "options": [
              "L’infiltration de l’eau de pluie",
              "Le ruissellement de surface uniquement",
              "L’activité des micro-organismes",
              "L’évaporation de l’eau du sol quand la température est élevée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est le mécanisme décrit dans l’interprétation des migrations ascendantes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La croûte saline",
          "stepTheme": "La croûte saline",
          "stepBadge": "La croûte saline",
          "paragraphText": "• Croûte saline : couche dure formée en surface par l’accumulation des sels solubles entraînés par l’eau qui remonte et s’évapore.\nElle résulte donc d’une migration ascendante des sels solubles.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q2",
            "type": "mcq",
            "prompt": "La croûte saline se forme par accumulation en surface :",
            "options": [
              "De l’argile lessivée",
              "Des sels solubles entraînés par l’eau qui remonte",
              "De l’humus frais",
              "Des débris végétaux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition de la croûte saline donnée dans l’interprétation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La cuirasse et l’induration",
          "stepTheme": "La cuirasse et l’induration",
          "stepBadge": "La cuirasse et l’induration",
          "paragraphText": "• Cuirasse : couche dure formée par l’accumulation en surface des oxydes de fer et d’aluminium entraînés par l’eau qui remonte.\n• Induration : formation de cette couche dure par cristallisation et durcissement de ces éléments.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q3",
            "type": "mcq",
            "prompt": "La cuirasse est une couche dure formée par l’accumulation en surface :",
            "options": [
              "Des sels solubles uniquement",
              "Des oxydes de fer et d’aluminium",
              "De l’argile et de l’humus",
              "Des sédiments marins"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit la cuirasse par les oxydes de fer et d’aluminium, et sa formation est l’induration."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La migration ascendante par les plantes",
          "stepTheme": "La migration ascendante par les plantes",
          "stepBadge": "La migration ascendante par les plantes",
          "paragraphText": "Les sels minéraux absorbés par les plantes ont aussi une migration ascendante.\nLe document 3-B signale en effet que les sels minéraux sont absorbés par les plantes, des racines vers les parties aériennes.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q4",
            "type": "mcq",
            "prompt": "D’après le document 3-B, les sels minéraux absorbés par les plantes connaissent :",
            "options": [
              "Une migration descendante uniquement",
              "Aucune migration",
              "Une lixiviation",
              "Aussi une migration ascendante"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est le troisième cas de migration ascendante cité dans l’interprétation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La cuirasse ne se forme pas dans l’horizon humifère",
          "stepTheme": "La cuirasse ne se forme pas dans l’horizon humifère",
          "stepBadge": "La cuirasse ne se forme pas dans l’horizon humifère",
          "paragraphText": "Piège : l’activité d’application demande si la cuirasse se met en place dans l’horizon humifère, et le corrigé répond faux.\nLa cuirasse est une couche dure d’oxydes, formée par accumulation et induration, distincte de l’horizon humifère riche en humus.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q5",
            "type": "mcq",
            "prompt": "La cuirasse se met en place dans l’horizon humifère : cette affirmation est :",
            "options": [
              "Fausse, selon le corrigé de l’activité",
              "Vraie, selon le corrigé de l’activité",
              "Vraie seulement en forêt",
              "Impossible à vérifier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé de l’activité d’application de la partie II répond faux à cette affirmation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Cristallisation et induration des ions libres",
          "stepTheme": "Cristallisation et induration des ions libres",
          "stepBadge": "Cristallisation et induration des ions libres",
          "paragraphText": "L’activité d’application retient que la cristallisation et l’induration des ions libres sont à l’origine de la formation des cuirasses.\nCes ions, accumulés après lessivage, durcissent donc pour former la couche de cuirasse.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q6",
            "type": "mcq",
            "prompt": "À l’origine de la formation des cuirasses, on trouve :",
            "options": [
              "L’humification des débris végétaux",
              "La dégradation de la roche mère",
              "La cristallisation et l’induration des ions libres",
              "La colonisation par les végétaux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’affirmation jugée vraie dans le corrigé de l’activité d’application de la partie II."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q1",
          "type": "mcq",
          "prompt": "Les migrations ascendantes sont provoquées par :",
          "options": [
            "L’infiltration de l’eau de pluie",
            "Le ruissellement de surface uniquement",
            "L’activité des micro-organismes",
            "L’évaporation de l’eau du sol quand la température est élevée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est le mécanisme décrit dans l’interprétation des migrations ascendantes."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q2",
          "type": "mcq",
          "prompt": "La croûte saline se forme par accumulation en surface :",
          "options": [
            "De l’argile lessivée",
            "Des sels solubles entraînés par l’eau qui remonte",
            "De l’humus frais",
            "Des débris végétaux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition de la croûte saline donnée dans l’interprétation."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q3",
          "type": "mcq",
          "prompt": "La cuirasse est une couche dure formée par l’accumulation en surface :",
          "options": [
            "Des sels solubles uniquement",
            "Des oxydes de fer et d’aluminium",
            "De l’argile et de l’humus",
            "Des sédiments marins"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit la cuirasse par les oxydes de fer et d’aluminium, et sa formation est l’induration."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q4",
          "type": "mcq",
          "prompt": "D’après le document 3-B, les sels minéraux absorbés par les plantes connaissent :",
          "options": [
            "Une migration descendante uniquement",
            "Aucune migration",
            "Une lixiviation",
            "Aussi une migration ascendante"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est le troisième cas de migration ascendante cité dans l’interprétation."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q5",
          "type": "mcq",
          "prompt": "La cuirasse se met en place dans l’horizon humifère : cette affirmation est :",
          "options": [
            "Fausse, selon le corrigé de l’activité",
            "Vraie, selon le corrigé de l’activité",
            "Vraie seulement en forêt",
            "Impossible à vérifier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé de l’activité d’application de la partie II répond faux à cette affirmation."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q6",
          "type": "mcq",
          "prompt": "À l’origine de la formation des cuirasses, on trouve :",
          "options": [
            "L’humification des débris végétaux",
            "La dégradation de la roche mère",
            "La cristallisation et l’induration des ions libres",
            "La colonisation par les végétaux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’affirmation jugée vraie dans le corrigé de l’activité d’application de la partie II."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05",
      "order": 5,
      "title": "Les caractéristiques d’un sol et sa fertilité",
      "summary": "Comparer les caractéristiques physiques, chimiques et biologiques d’un sol fertile et d’un sol infertile.",
      "conceptExplanation": "Le sol A de la leçon présente une texture équilibrée, une structure organisée (grumeleuse), une bonne aération, une humidité modérée, un pH convenable aux cultures, une richesse en ions échangeables et en matières organiques et une activité biologique intense.\nLe sol B présente au contraire une texture déséquilibrée, une structure non organisée (particulaire ou compacte), une faible aération, une mauvaise humidité, une pauvreté en ions échangeables et en matières organiques et une activité biologique faible : il est impropre aux cultures.\nLa texture équilibrée, la structure organisée et le pH proche de la neutralité du sol A offrent une aération suffisante pour les racines ainsi qu’une bonne capacité de rétention en eau nécessaire à la nutrition hydrique.\nLa décomposition de la matière organique enrichit le sol en colloïdes et en sels minéraux, conditions de la formation du complexe argilo-humique, véritable réservoir d’ions, et ce sol est le siège d’une activité biologique intense : le sol A est donc un sol fertile, alors que le sol B est un sol infertile.\nLa perte des propriétés physiques, chimiques ou biologiques d’un sol entraîne son appauvrissement.",
      "keyRule": "Un sol fertile réunit de bonnes caractéristiques physiques, chimiques et biologiques ; leur perte l’appauvrit.",
      "formulas": [],
      "workedExample": {
        "title": "Classer les caractéristiques d’un sol selon les propriétés",
        "statement": "Associe chaque caractéristique à la propriété qui convient : texture, porosité, structure et humidité ; pH, teneur en sels minéraux et présence d’humus ; présence de micro-organismes.",
        "methodSteps": [
          "La texture, la porosité, la structure et l’humidité relèvent des propriétés physiques du sol.",
          "Le pH, la teneur en sels minéraux et la présence d’humus relèvent des propriétés chimiques.",
          "La présence de micro-organismes relève de la propriété biologique."
        ],
        "conclusion": "Ce sont les associations de l’activité d’application de la partie III."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Les caractéristiques du sol fertile A",
          "stepTheme": "Les caractéristiques du sol fertile A",
          "stepBadge": "Les caractéristiques du sol fertile A",
          "paragraphText": "Le sol A présente une texture équilibrée, une structure organisée grumeleuse et une bonne aération.\nIl a aussi une humidité modérée, un pH convenable aux cultures et une richesse en ions échangeables et en matières organiques.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q1",
            "type": "mcq",
            "prompt": "Le sol A de la leçon se caractérise par :",
            "options": [
              "Une texture équilibrée et une structure organisée grumeleuse",
              "Une structure non organisée et compacte",
              "Une activité biologique faible",
              "Une pauvreté en matières organiques"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les résultats de l’observation du sol de forêt, le sol A."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les caractéristiques du sol infertile B",
          "stepTheme": "Les caractéristiques du sol infertile B",
          "stepBadge": "Les caractéristiques du sol infertile B",
          "paragraphText": "Le sol B présente une texture déséquilibrée, une structure non organisée, particulaire ou compacte, et il est peu aéré.\nIl est pauvre en ions échangeables et en matières organiques, avec une activité biologique faible : il est impropre aux cultures.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q2",
            "type": "mcq",
            "prompt": "Le sol B de la leçon est :",
            "options": [
              "Un sol fertile à forte production",
              "Un sol riche en ions échangeables",
              "Un sol impropre aux cultures, à activité biologique faible",
              "Un sol à structure grumeleuse"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les résultats de l’observation du sol de mangrove, le sol B."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Aération et rétention en eau",
          "stepTheme": "Aération et rétention en eau",
          "stepBadge": "Aération et rétention en eau",
          "paragraphText": "La texture équilibrée, la structure organisée et le pH proche de la neutralité du sol A offrent une aération suffisante pour les racines des végétaux.\nElles offrent aussi une bonne capacité de rétention en eau, nécessaire pour la nutrition hydrique.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q3",
            "type": "mcq",
            "prompt": "Une bonne structure organisée du sol assure aux racines :",
            "options": [
              "Une absence totale d’eau",
              "Une aération suffisante et une bonne rétention en eau",
              "Un compactage favorable",
              "Une évaporation complète de l’eau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’interprétation des caractéristiques du sol A."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Matière organique et complexe argilo-humique",
          "stepTheme": "Matière organique et complexe argilo-humique",
          "stepBadge": "Matière organique et complexe argilo-humique",
          "paragraphText": "La décomposition de la matière organique enrichit le sol en colloïdes et en sels minéraux.\nCe sont les conditions de la formation du complexe argilo-humique, véritable réservoir d’ions du sol.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q4",
            "type": "mcq",
            "prompt": "Le complexe argilo-humique est présenté dans cette partie comme :",
            "options": [
              "Un obstacle à la fertilité",
              "Un produit de l’érosion",
              "Une couche dure d’oxydes",
              "Un véritable réservoir d’ions"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est l’expression utilisée dans l’interprétation des caractéristiques du sol fertile."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Sol fertile et sol infertile",
          "stepTheme": "Sol fertile et sol infertile",
          "stepBadge": "Sol fertile et sol infertile",
          "paragraphText": "Le sol A, avec ses bonnes caractéristiques physiques et chimiques et son activité biologique intense, est un sol fertile, à production élevée.\nLe sol B, à texture déséquilibrée, structure non organisée et faible activité biologique, est un sol infertile.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q5",
            "type": "mcq",
            "prompt": "Un sol à texture déséquilibrée, structure non organisée et faible activité biologique est un sol :",
            "options": [
              "Fertile",
              "En climax",
              "Infertile",
              "En évolution progressive uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la conclusion de la comparaison des sols A et B."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La perte des propriétés appauvrit le sol",
          "stepTheme": "La perte des propriétés appauvrit le sol",
          "stepBadge": "La perte des propriétés appauvrit le sol",
          "paragraphText": "Piège : un sol ne reste pas fertile automatiquement ; ses caractéristiques déterminent sa fertilité.\nLa conclusion de la partie III précise que la perte des propriétés physiques, chimiques ou biologiques d’un sol entraîne son appauvrissement.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q6",
            "type": "mcq",
            "prompt": "La perte des propriétés physiques, chimiques ou biologiques d’un sol entraîne :",
            "options": [
              "Son appauvrissement",
              "Son enrichissement",
              "Son climax immédiat",
              "Un gain d’horizons"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la conclusion de la partie III sur la modification des caractéristiques des sols."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q1",
          "type": "mcq",
          "prompt": "Le sol A de la leçon se caractérise par :",
          "options": [
            "Une texture équilibrée et une structure organisée grumeleuse",
            "Une structure non organisée et compacte",
            "Une activité biologique faible",
            "Une pauvreté en matières organiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les résultats de l’observation du sol de forêt, le sol A."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q2",
          "type": "mcq",
          "prompt": "Le sol B de la leçon est :",
          "options": [
            "Un sol fertile à forte production",
            "Un sol riche en ions échangeables",
            "Un sol impropre aux cultures, à activité biologique faible",
            "Un sol à structure grumeleuse"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les résultats de l’observation du sol de mangrove, le sol B."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q3",
          "type": "mcq",
          "prompt": "Une bonne structure organisée du sol assure aux racines :",
          "options": [
            "Une absence totale d’eau",
            "Une aération suffisante et une bonne rétention en eau",
            "Un compactage favorable",
            "Une évaporation complète de l’eau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’interprétation des caractéristiques du sol A."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q4",
          "type": "mcq",
          "prompt": "Le complexe argilo-humique est présenté dans cette partie comme :",
          "options": [
            "Un obstacle à la fertilité",
            "Un produit de l’érosion",
            "Une couche dure d’oxydes",
            "Un véritable réservoir d’ions"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est l’expression utilisée dans l’interprétation des caractéristiques du sol fertile."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q5",
          "type": "mcq",
          "prompt": "Un sol à texture déséquilibrée, structure non organisée et faible activité biologique est un sol :",
          "options": [
            "Fertile",
            "En climax",
            "Infertile",
            "En évolution progressive uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la conclusion de la comparaison des sols A et B."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q6",
          "type": "mcq",
          "prompt": "La perte des propriétés physiques, chimiques ou biologiques d’un sol entraîne :",
          "options": [
            "Son appauvrissement",
            "Son enrichissement",
            "Son climax immédiat",
            "Un gain d’horizons"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la conclusion de la partie III sur la modification des caractéristiques des sols."
        }
      ]
    }
  ]
};
