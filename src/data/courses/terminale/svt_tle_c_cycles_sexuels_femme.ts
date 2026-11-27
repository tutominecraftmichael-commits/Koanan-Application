import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 7 : Les cycles sexuels chez la femme » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2122
export const SVT_TLE_C_L07_CYCLES_SEXUELS_FEMME: CurriculumChapter = {
  "id": "terminale_c_svt_l07_cycles_sexuels_femme",
  "subjectId": "svt",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [],
  "order": 7,
  "title": "Leçon 7 : Les cycles sexuels chez la femme",
  "summary": "On décrit les cycles ovarien et utérin de la femme, puis on explique leur régulation par le complexe hypothalamo-hypophysaire, la GnRH, la FSH, la LH et les rétrocontrôles des hormones ovariennes.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2122",
  "points": [
    {
      "id": "terminale_c_svt_l07_cycles_sexuels_femme_p01",
      "order": 1,
      "title": "Le cycle ovarien : la phase folliculaire",
      "summary": "Décrire la maturation des follicules ovariens, de l'atrésie au follicule de De Graaf.",
      "conceptExplanation": "Le cycle ovarien est marqué par l'évolution des follicules ovariens.\nLa phase folliculaire est caractérisée par la maturation de plusieurs follicules au niveau de l'ovaire.\nLe plus souvent, un de ces follicules achève sa croissance pour parvenir au stade de follicule de De Graaf, et les autres dégénèrent : c'est le phénomène de l'atrésie.",
      "keyRule": "Plusieurs follicules mûrissent, un seul devient follicule de De Graaf, les autres dégénèrent par atrésie.",
      "formulas": [],
      "workedExample": {
        "title": "Suivre l'évolution des follicules (figure 1)",
        "statement": "La figure 1 du cycle ovarien montre l'évolution des follicules au cours du cycle. Que devient la majorité des follicules pendant la phase folliculaire ?",
        "methodSteps": [
          "Plusieurs follicules commencent leur maturation dans l'ovaire.",
          "Un seul follicule, le plus souvent, achève sa croissance et devient le follicule de De Graaf.",
          "Les autres follicules dégénèrent : c'est l'atrésie."
        ],
        "conclusion": "Pendant la phase folliculaire, un follicule dominant arrive à maturité et les autres dégénèrent par atrésie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le cycle ovarien",
          "stepTheme": "Le cycle ovarien",
          "stepBadge": "Le cycle ovarien",
          "paragraphText": "• Cycle ovarien : l'évolution cyclique des follicules dans l'ovaire, à partir de la puberté.\nIl comporte la phase folliculaire, l'ovulation et la phase lutéinique (ou lutéale).",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p01_q1",
            "type": "mcq",
            "prompt": "Le cycle ovarien correspond à :",
            "options": [
              "L'évolution cyclique des follicules dans l'ovaire",
              "La modification de l'épaisseur de la muqueuse utérine",
              "La sécrétion de GnRH par l'hypothalamus",
              "L'apparition des premières règles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les résultats de l'observation opposent la figure 1 (évolution des follicules ovariens) à la figure 2 (muqueuse utérine)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La phase folliculaire",
          "stepTheme": "La phase folliculaire",
          "stepBadge": "La phase folliculaire",
          "paragraphText": "• Phase folliculaire : première phase du cycle ovarien, caractérisée par la maturation de plusieurs follicules dans l'ovaire.\nElle se termine par l'ovulation.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p01_q2",
            "type": "mcq",
            "prompt": "La phase folliculaire est caractérisée par :",
            "options": [
              "La transformation du follicule rompu en corps jaune",
              "La maturation de plusieurs follicules dans l'ovaire",
              "La desquamation de l'endomètre",
              "La régression du corps jaune"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'analyse de la leçon définit la phase folliculaire par la maturation de plusieurs follicules ovariens."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le follicule de De Graaf",
          "stepTheme": "Le follicule de De Graaf",
          "stepBadge": "Le follicule de De Graaf",
          "paragraphText": "Parmi les follicules en maturation, un seul, le plus souvent, achève sa croissance.\nIl parvient alors au stade de follicule mûr, appelé follicule de De Graaf.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p01_q3",
            "type": "mcq",
            "prompt": "Le follicule de De Graaf est :",
            "options": [
              "Un follicule qui a dégénéré",
              "Le follicule qui a achevé sa croissance et est parvenu à maturité",
              "Le follicule transformé en corps jaune",
              "Un follicule sans ovocyte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise qu'un follicule achève sa croissance pour parvenir au stade de follicule de De Graaf."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'atrésie folliculaire",
          "stepTheme": "L'atrésie folliculaire",
          "stepBadge": "L'atrésie folliculaire",
          "paragraphText": "• Atrésie : la dégénérescence des follicules qui n'achèvent pas leur croissance.\nPendant que le follicule dominant mûrit, les autres follicules dégénèrent.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p01_q4",
            "type": "mcq",
            "prompt": "L'atrésie désigne :",
            "options": [
              "La libération de l'ovocyte II",
              "La cicatrisation du follicule rompu",
              "La dégénérescence des follicules qui n'achèvent pas leur croissance",
              "La sécrétion d'œstrogènes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le texte met l'atrésie entre parenthèses après l'énoncé de la dégénérescence des autres follicules."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Tous les follicules ne donnent pas un ovocyte",
          "stepTheme": "Tous les follicules ne donnent pas un ovocyte",
          "stepBadge": "Tous les follicules ne donnent pas un ovocyte",
          "paragraphText": "Piège : croire que chaque follicule mûrissant libérera un ovocyte.\nEn réalité, le plus souvent un seul follicule parvient au stade de De Graaf ; les autres sont éliminés par atrésie.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p01_q5",
            "type": "mcq",
            "prompt": "Au cours d'une phase folliculaire, le nombre de follicules parvenant au stade de De Graaf est le plus souvent de :",
            "options": [
              "Tous les follicules engagés",
              "Un seul",
              "Une dizaine",
              "Zéro, ils dégénèrent tous"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon dit que le plus souvent un de ces follicules achève sa croissance jusqu'au stade de follicule de De Graaf."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Lire la figure du cycle ovarien",
          "stepTheme": "Lire la figure du cycle ovarien",
          "stepBadge": "Lire la figure du cycle ovarien",
          "paragraphText": "La figure 1 de la leçon montre une évolution des follicules ovariens au cours du cycle ovarien.\nOn y suit la croissance folliculaire jusqu'au follicule mûr, avant l'ovulation.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p01_q6",
            "type": "mcq",
            "prompt": "D'après les résultats de l'observation, la figure 1 montre :",
            "options": [
              "Une modification de l'épaisseur de la muqueuse utérine",
              "Une évolution des follicules ovariens au cours du cycle ovarien",
              "Les courbes des hormones hypophysaires",
              "Le schéma de régulation du cycle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les résultats distinguent la figure 1 (follicules ovariens) de la figure 2 (muqueuse utérine)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p01_q1",
          "type": "mcq",
          "prompt": "Le cycle ovarien correspond à :",
          "options": [
            "L'évolution cyclique des follicules dans l'ovaire",
            "La modification de l'épaisseur de la muqueuse utérine",
            "La sécrétion de GnRH par l'hypothalamus",
            "L'apparition des premières règles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les résultats de l'observation opposent la figure 1 (évolution des follicules ovariens) à la figure 2 (muqueuse utérine)."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p01_q2",
          "type": "mcq",
          "prompt": "La phase folliculaire est caractérisée par :",
          "options": [
            "La transformation du follicule rompu en corps jaune",
            "La maturation de plusieurs follicules dans l'ovaire",
            "La desquamation de l'endomètre",
            "La régression du corps jaune"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'analyse de la leçon définit la phase folliculaire par la maturation de plusieurs follicules ovariens."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p01_q3",
          "type": "mcq",
          "prompt": "Le follicule de De Graaf est :",
          "options": [
            "Un follicule qui a dégénéré",
            "Le follicule qui a achevé sa croissance et est parvenu à maturité",
            "Le follicule transformé en corps jaune",
            "Un follicule sans ovocyte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise qu'un follicule achève sa croissance pour parvenir au stade de follicule de De Graaf."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p01_q4",
          "type": "mcq",
          "prompt": "L'atrésie désigne :",
          "options": [
            "La libération de l'ovocyte II",
            "La cicatrisation du follicule rompu",
            "La dégénérescence des follicules qui n'achèvent pas leur croissance",
            "La sécrétion d'œstrogènes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le texte met l'atrésie entre parenthèses après l'énoncé de la dégénérescence des autres follicules."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p01_q5",
          "type": "mcq",
          "prompt": "Au cours d'une phase folliculaire, le nombre de follicules parvenant au stade de De Graaf est le plus souvent de :",
          "options": [
            "Tous les follicules engagés",
            "Un seul",
            "Une dizaine",
            "Zéro, ils dégénèrent tous"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon dit que le plus souvent un de ces follicules achève sa croissance jusqu'au stade de follicule de De Graaf."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p01_q6",
          "type": "mcq",
          "prompt": "D'après les résultats de l'observation, la figure 1 montre :",
          "options": [
            "Une modification de l'épaisseur de la muqueuse utérine",
            "Une évolution des follicules ovariens au cours du cycle ovarien",
            "Les courbes des hormones hypophysaires",
            "Le schéma de régulation du cycle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les résultats distinguent la figure 1 (follicules ovariens) de la figure 2 (muqueuse utérine)."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l07_cycles_sexuels_femme_p02",
      "order": 2,
      "title": "L'ovulation et la phase lutéale : le corps jaune",
      "summary": "Expliquer l'ovulation vers le 14e jour et le devenir du follicule rompu en corps jaune.",
      "conceptExplanation": "L'ovulation, ou ponte ovulaire, correspond à la libération d'un ovocyte II par le follicule mûr, vers le 14e jour. L'ovulation marque la fin de la phase folliculaire.\nPendant la phase lutéinique (phase lutéale), le follicule rompu lors de l'ovulation se referme, cicatrise et se transforme en corps jaune.\nLe corps jaune a un rôle fonctionnel pendant quelques jours, puis il régresse rapidement vers la fin de la phase lutéale en cas de non fécondation de l'ovocyte II, et un nouveau cycle recommence. Si l'ovocyte II est fécondé, le corps jaune persiste.",
      "keyRule": "Ovulation vers le 14e jour ; le follicule rompu devient corps jaune, qui régresse sans fécondation et persiste si l'ovocyte II est fécondé.",
      "formulas": [],
      "workedExample": {
        "title": "Le devenir du follicule après l'ovulation",
        "statement": "Un follicule de De Graaf libère son ovocyte II vers le 14e jour et l'ovocyte n'est pas fécondé. Décris le devenir du follicule rompu.",
        "methodSteps": [
          "Le follicule rompu se referme et cicatrise : il se transforme en corps jaune, c'est la phase lutéale.",
          "Le corps jaune reste fonctionnel quelques jours.",
          "Sans fécondation de l'ovocyte II, il régresse rapidement vers la fin de la phase lutéale et un nouveau cycle recommence."
        ],
        "conclusion": "Sans fécondation, le corps jaune régresse et un nouveau cycle recommence ; avec fécondation, il persiste."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'ovulation ou ponte ovulaire",
          "stepTheme": "L'ovulation ou ponte ovulaire",
          "stepBadge": "L'ovulation ou ponte ovulaire",
          "paragraphText": "• Ovulation (ponte ovulaire) : la libération d'un ovocyte II par le follicule mûr.\nElle survient vers le 14e jour du cycle et marque la fin de la phase folliculaire.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p02_q1",
            "type": "mcq",
            "prompt": "L'ovulation correspond à :",
            "options": [
              "La libération d'un ovocyte II par le follicule mûr",
              "La dégénérescence des follicules",
              "La formation du corps jaune",
              "L'élimination de l'endomètre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La définition de la leçon est la libération d'un ovocyte II par le follicule mûr, vers le 14e jour."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le moment de l'ovulation",
          "stepTheme": "Le moment de l'ovulation",
          "stepBadge": "Le moment de l'ovulation",
          "paragraphText": "L'ovulation a lieu vers le 14e jour du cycle.\nElle marque la frontière entre la phase folliculaire et la phase lutéinique.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p02_q2",
            "type": "mcq",
            "prompt": "Vers quel jour du cycle l'ovulation survient-elle ?",
            "options": [
              "Vers le 1er jour",
              "Vers le 7e jour",
              "Vers le 14e jour",
              "Vers le 28e jour uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le texte situe la libération de l'ovocyte II vers le 14e jour et précise que l'ovulation marque la fin de la phase folliculaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le corps jaune",
          "stepTheme": "Le corps jaune",
          "stepBadge": "Le corps jaune",
          "paragraphText": "• Corps jaune : la structure formée par le follicule rompu après l'ovulation.\nLe follicule rompu se referme, cicatrise et se transforme en corps jaune pendant la phase lutéale.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p02_q3",
            "type": "mcq",
            "prompt": "Le corps jaune se forme à partir :",
            "options": [
              "D'un follicule en début de croissance",
              "Du follicule rompu lors de l'ovulation, qui se referme et cicatrise",
              "De l'endomètre utérin",
              "De l'ovocyte II non fécondé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pendant la phase lutéinique, le follicule rompu se referme, cicatrise et se transforme en corps jaune."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le sort du corps jaune sans fécondation",
          "stepTheme": "Le sort du corps jaune sans fécondation",
          "stepBadge": "Le sort du corps jaune sans fécondation",
          "paragraphText": "Le corps jaune a un rôle fonctionnel pendant quelques jours.\nEn cas de non fécondation de l'ovocyte II, il régresse rapidement vers la fin de la phase lutéale, et un nouveau cycle recommence.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p02_q4",
            "type": "mcq",
            "prompt": "Sans fécondation de l'ovocyte II, le corps jaune :",
            "options": [
              "Persiste indéfiniment",
              "Régresse rapidement vers la fin de la phase lutéale",
              "Se transforme en nouveau follicule de De Graaf",
              "Libère un second ovocyte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon indique que le corps jaune régresse rapidement en fin de phase lutéale en cas de non fécondation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Si l'ovocyte est fécondé, le corps jaune persiste",
          "stepTheme": "Si l'ovocyte est fécondé, le corps jaune persiste",
          "stepBadge": "Si l'ovocyte est fécondé, le corps jaune persiste",
          "paragraphText": "Piège : le corps jaune ne régresse pas toujours.\nLa leçon précise que si l'ovocyte II est fécondé, le corps jaune persiste au lieu de régresser.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p02_q5",
            "type": "mcq",
            "prompt": "Si l'ovocyte II est fécondé, le corps jaune :",
            "options": [
              "Régresse immédiatement",
              "Persiste",
              "Dégénère par atrésie",
              "Provoque les menstrues"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La dernière phrase de l'analyse ovarienne le dit : si l'ovocyte II est fécondé, le corps jaune persiste."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Enchaînement des deux phases ovariennes",
          "stepTheme": "Enchaînement des deux phases ovariennes",
          "stepBadge": "Enchaînement des deux phases ovariennes",
          "paragraphText": "Un cycle ovarien complet enchaîne la phase folliculaire, conclue par l'ovulation, puis la phase lutéale dominée par le corps jaune.\nC'est cet enchaînement régulier qui rend le fonctionnement de l'ovaire cyclique.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p02_q6",
            "type": "mcq",
            "prompt": "Quel événement marque le passage de la phase folliculaire à la phase lutéale ?",
            "options": [
              "Les menstrues",
              "L'ovulation",
              "L'atrésie",
              "La desquamation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ovulation marque la fin de la phase folliculaire ; la phase lutéale commence avec la formation du corps jaune."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p02_q1",
          "type": "mcq",
          "prompt": "L'ovulation correspond à :",
          "options": [
            "La libération d'un ovocyte II par le follicule mûr",
            "La dégénérescence des follicules",
            "La formation du corps jaune",
            "L'élimination de l'endomètre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La définition de la leçon est la libération d'un ovocyte II par le follicule mûr, vers le 14e jour."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p02_q2",
          "type": "mcq",
          "prompt": "Vers quel jour du cycle l'ovulation survient-elle ?",
          "options": [
            "Vers le 1er jour",
            "Vers le 7e jour",
            "Vers le 14e jour",
            "Vers le 28e jour uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le texte situe la libération de l'ovocyte II vers le 14e jour et précise que l'ovulation marque la fin de la phase folliculaire."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p02_q3",
          "type": "mcq",
          "prompt": "Le corps jaune se forme à partir :",
          "options": [
            "D'un follicule en début de croissance",
            "Du follicule rompu lors de l'ovulation, qui se referme et cicatrise",
            "De l'endomètre utérin",
            "De l'ovocyte II non fécondé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pendant la phase lutéinique, le follicule rompu se referme, cicatrise et se transforme en corps jaune."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p02_q4",
          "type": "mcq",
          "prompt": "Sans fécondation de l'ovocyte II, le corps jaune :",
          "options": [
            "Persiste indéfiniment",
            "Régresse rapidement vers la fin de la phase lutéale",
            "Se transforme en nouveau follicule de De Graaf",
            "Libère un second ovocyte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon indique que le corps jaune régresse rapidement en fin de phase lutéale en cas de non fécondation."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p02_q5",
          "type": "mcq",
          "prompt": "Si l'ovocyte II est fécondé, le corps jaune :",
          "options": [
            "Régresse immédiatement",
            "Persiste",
            "Dégénère par atrésie",
            "Provoque les menstrues"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La dernière phrase de l'analyse ovarienne le dit : si l'ovocyte II est fécondé, le corps jaune persiste."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p02_q6",
          "type": "mcq",
          "prompt": "Quel événement marque le passage de la phase folliculaire à la phase lutéale ?",
          "options": [
            "Les menstrues",
            "L'ovulation",
            "L'atrésie",
            "La desquamation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ovulation marque la fin de la phase folliculaire ; la phase lutéale commence avec la formation du corps jaune."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l07_cycles_sexuels_femme_p03",
      "order": 3,
      "title": "Le cycle utérin : desquamation, prolifération et dentelle utérine",
      "summary": "Décrire les transformations de l'endomètre : menstrues, prolifération puis aspect en dentelle.",
      "conceptExplanation": "Au début de la phase folliculaire, la partie supérieure de l'endomètre est éliminée progressivement : c'est la desquamation. Elle s'accompagne de saignements dus à l'altération des vaisseaux sanguins : ce sont les menstrues (règles).\nL'endomètre, qui a atteint sa plus faible épaisseur, se reconstitue ensuite : son épaisseur augmente progressivement, les glandes utérines s'allongent, les artères se reconstituent et un nouveau réseau sanguin se crée ; c'est la phase de prolifération.\nÀ l'ovulation et lors de la phase lutéinique, l'épaississement de l'endomètre atteint son maximum. Les glandes deviennent de plus en plus sinueuses, irrégulières et remplies de sécrétion : l'endomètre montre un aspect de dentelle, qualifié de dentelle utérine.\nVers la fin de la phase lutéinique, en cas de non fécondation de l'ovocyte II, l'endomètre régresse et le cycle reprend.",
      "keyRule": "L'endomètre s'élimine (menstrues), se reconstitue (prolifération), puis atteint son épaisseur maximale en dentelle utérine.",
      "formulas": [],
      "workedExample": {
        "title": "Dater les menstrues dans le cycle utérin",
        "statement": "Une jeune fille est surprise par ses premières menstrues, comme dans la situation d'apprentissage. À quel moment du cycle utérin se produisent les menstrues et à quoi correspondent-elles ?",
        "methodSteps": [
          "Les menstrues se situent au début de la phase folliculaire.",
          "Elles correspondent à la desquamation : la partie supérieure de l'endomètre est éliminée progressivement.",
          "Le saignement vient de l'altération des vaisseaux sanguins de l'endomètre."
        ],
        "conclusion": "Les menstrues sont la desquamation de l'endomètre, au début de la phase folliculaire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La desquamation et les menstrues",
          "stepTheme": "La desquamation et les menstrues",
          "stepBadge": "La desquamation et les menstrues",
          "paragraphText": "• Desquamation : l'élimination progressive de la partie supérieure de l'endomètre, au début de la phase folliculaire.\nElle s'accompagne de saignements dus à l'altération des vaisseaux sanguins : ce sont les menstrues, ou règles.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p03_q1",
            "type": "mcq",
            "prompt": "Les menstrues correspondent à :",
            "options": [
              "La libération de l'ovocyte II",
              "L'élimination de la partie supérieure de l'endomètre avec saignement",
              "La formation du corps jaune",
              "L'épaississement maximal de l'endomètre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon identifie les menstrues à la desquamation de l'endomètre, accompagnée de saignements."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La phase de prolifération",
          "stepTheme": "La phase de prolifération",
          "stepBadge": "La phase de prolifération",
          "paragraphText": "Après les menstrues, l'endomètre qui a atteint sa plus faible épaisseur se reconstitue.\nSon épaisseur augmente, les glandes utérines s'allongent, les artères se reconstituent et un nouveau réseau sanguin se crée : c'est la phase de prolifération.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p03_q2",
            "type": "mcq",
            "prompt": "Pendant la phase de prolifération de l'endomètre :",
            "options": [
              "L'endomètre est éliminé",
              "L'épaisseur de l'endomètre augmente et les glandes utérines s'allongent",
              "Les glandes deviennent sinueuses et remplies de sécrétion",
              "Le corps jaune régresse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La prolifération est la reconstitution progressive de l'endomètre : épaississement, allongement des glandes et nouveau réseau sanguin."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La dentelle utérine",
          "stepTheme": "La dentelle utérine",
          "stepBadge": "La dentelle utérine",
          "paragraphText": "• Dentelle utérine : l'aspect pris par l'endomètre quand son épaississement atteint son maximum, à l'ovulation et lors de la phase lutéinique.\nLes glandes y sont de plus en plus sinueuses, irrégulières et remplies de sécrétion.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p03_q3",
            "type": "mcq",
            "prompt": "La dentelle utérine désigne :",
            "options": [
              "L'aspect de l'endomètre à épaisseur maximale, aux glandes sinueuses remplies de sécrétion",
              "L'endomètre éliminé pendant les règles",
              "Le follicule mûr dans l'ovaire",
              "Le corps jaune en régression"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'aspect de dentelle apparaît quand l'épaississement de l'endomètre est maximal et que les glandes sont sinueuses et pleines de sécrétion."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Lire la figure du cycle utérin",
          "stepTheme": "Lire la figure du cycle utérin",
          "stepBadge": "Lire la figure du cycle utérin",
          "paragraphText": "La figure 2 de la leçon montre une modification de l'épaisseur de la muqueuse utérine au cours du cycle utérin.\nOn y lit successivement la chute d'épaisseur des menstrues, la remontée de la prolifération, puis le maximum de la phase lutéinique.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p03_q4",
            "type": "mcq",
            "prompt": "D'après les résultats de l'observation, la figure 2 montre :",
            "options": [
              "L'évolution des follicules ovariens",
              "Une modification de l'épaisseur de la muqueuse utérine au cours du cycle utérin",
              "Les courbes de la FSH et de la LH",
              "L'action de la GnRH"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les résultats attribuent à la figure 2 la modification de l'épaisseur de la muqueuse utérine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La fin du cycle utérin sans fécondation",
          "stepTheme": "La fin du cycle utérin sans fécondation",
          "stepBadge": "La fin du cycle utérin sans fécondation",
          "paragraphText": "Piège : l'endomètre ne reste pas indéfiniment à son épaisseur maximale.\nVers la fin de la phase lutéinique, en cas de non fécondation de l'ovocyte II, l'endomètre régresse et le cycle reprend.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p03_q5",
            "type": "mcq",
            "prompt": "En fin de phase lutéinique, sans fécondation, l'endomètre :",
            "options": [
              "Atteint son épaisseur maximale",
              "Régresse et le cycle reprend",
              "Se transforme en corps jaune",
              "Reste en dentelle utérine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon indique qu'en cas de non fécondation, l'endomètre régresse en fin de phase lutéinique et le cycle reprend."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Synchronisation des cycles ovarien et utérin",
          "stepTheme": "Synchronisation des cycles ovarien et utérin",
          "stepBadge": "Synchronisation des cycles ovarien et utérin",
          "paragraphText": "Les deux cycles se correspondent : la phase folliculaire ovarienne accompagne la desquamation puis la prolifération utérines.\nLa phase lutéinique ovarienne accompagne le maximum d'épaisseur de l'endomètre, en dentelle utérine.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p03_q6",
            "type": "mcq",
            "prompt": "La dentelle utérine apparaît pendant quelle phase du cycle ovarien ?",
            "options": [
              "Au tout début de la phase folliculaire",
              "Pendant les menstrues",
              "À l'ovulation et lors de la phase lutéinique",
              "Uniquement après une fécondation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le texte situe l'épaississement maximal et l'aspect de dentelle à l'ovulation et lors de la phase lutéinique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p03_q1",
          "type": "mcq",
          "prompt": "Les menstrues correspondent à :",
          "options": [
            "La libération de l'ovocyte II",
            "L'élimination de la partie supérieure de l'endomètre avec saignement",
            "La formation du corps jaune",
            "L'épaississement maximal de l'endomètre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon identifie les menstrues à la desquamation de l'endomètre, accompagnée de saignements."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p03_q2",
          "type": "mcq",
          "prompt": "Pendant la phase de prolifération de l'endomètre :",
          "options": [
            "L'endomètre est éliminé",
            "L'épaisseur de l'endomètre augmente et les glandes utérines s'allongent",
            "Les glandes deviennent sinueuses et remplies de sécrétion",
            "Le corps jaune régresse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La prolifération est la reconstitution progressive de l'endomètre : épaississement, allongement des glandes et nouveau réseau sanguin."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p03_q3",
          "type": "mcq",
          "prompt": "La dentelle utérine désigne :",
          "options": [
            "L'aspect de l'endomètre à épaisseur maximale, aux glandes sinueuses remplies de sécrétion",
            "L'endomètre éliminé pendant les règles",
            "Le follicule mûr dans l'ovaire",
            "Le corps jaune en régression"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'aspect de dentelle apparaît quand l'épaississement de l'endomètre est maximal et que les glandes sont sinueuses et pleines de sécrétion."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p03_q4",
          "type": "mcq",
          "prompt": "D'après les résultats de l'observation, la figure 2 montre :",
          "options": [
            "L'évolution des follicules ovariens",
            "Une modification de l'épaisseur de la muqueuse utérine au cours du cycle utérin",
            "Les courbes de la FSH et de la LH",
            "L'action de la GnRH"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les résultats attribuent à la figure 2 la modification de l'épaisseur de la muqueuse utérine."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p03_q5",
          "type": "mcq",
          "prompt": "En fin de phase lutéinique, sans fécondation, l'endomètre :",
          "options": [
            "Atteint son épaisseur maximale",
            "Régresse et le cycle reprend",
            "Se transforme en corps jaune",
            "Reste en dentelle utérine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon indique qu'en cas de non fécondation, l'endomètre régresse en fin de phase lutéinique et le cycle reprend."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p03_q6",
          "type": "mcq",
          "prompt": "La dentelle utérine apparaît pendant quelle phase du cycle ovarien ?",
          "options": [
            "Au tout début de la phase folliculaire",
            "Pendant les menstrues",
            "À l'ovulation et lors de la phase lutéinique",
            "Uniquement après une fécondation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le texte situe l'épaississement maximal et l'aspect de dentelle à l'ovulation et lors de la phase lutéinique."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l07_cycles_sexuels_femme_p04",
      "order": 4,
      "title": "Le complexe hypothalamo-hypophysaire commande l'ovaire",
      "summary": "Interpréter les expériences d'ablation, de greffe et de castration pour établir la chaîne de commande.",
      "conceptExplanation": "Pour montrer l'action du complexe hypothalamo-hypophysaire sur les fonctions ovariennes, la leçon présente une série d'expériences chez des femelles.\nExpérience 1 : l'ablation de l'hypophyse le 3e jour du cycle, suivie d'une greffe d'hypophyse, entraîne l'atrophie des ovaires ; le taux des œstrogènes devient inférieur à la normale et on ne décèle jamais de progestérone ; la greffe corrige les effets de l'ablation.\nExpérience 3 : la stimulation électrique régulière et localisée de l'hypothalamus, chez des femelles non castrées, provoque une hypersécrétion des hormones hypophysaires.\nL'analyse conclut que l'hypothalamus contrôle le fonctionnement de l'hypophyse, qui à son tour agit sur les ovaires et l'utérus ; les ovaires, en retour, contrôlent l'activité de l'hypophyse.",
      "keyRule": "Sans hypophyse, les ovaires s'atrophient : l'hypothalamus commande l'hypophyse, qui commande les ovaires.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter l'ablation suivie d'une greffe (expérience 1)",
        "statement": "On pratique l'ablation de l'hypophyse le 3e jour du cycle, puis une greffe d'hypophyse quelques jours plus tard. Qu'observe-t-on et qu'en déduit-on ?",
        "methodSteps": [
          "Après l'ablation, on observe l'atrophie des ovaires, un taux d'œstrogènes inférieur à la normale et jamais de progestérone.",
          "La greffe d'hypophyse corrige les effets de l'ablation.",
          "On en déduit que l'hypophyse est indispensable au fonctionnement des ovaires."
        ],
        "conclusion": "L'ablation puis la greffe montrent que l'hypophyse contrôle les fonctions ovariennes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le complexe hypothalamo-hypophysaire",
          "stepTheme": "Le complexe hypothalamo-hypophysaire",
          "stepBadge": "Le complexe hypothalamo-hypophysaire",
          "paragraphText": "• Complexe hypothalamo-hypophysaire : l'ensemble formé par l'hypothalamus et l'hypophyse, qui commande les cycles sexuels.\nLa leçon cherche à montrer son action sur les fonctions ovariennes par une série d'expériences.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p04_q1",
            "type": "mcq",
            "prompt": "Les expériences de cette partie visent à montrer l'action de quel ensemble sur les ovaires ?",
            "options": [
              "Du complexe hypothalamo-hypophysaire",
              "Du corps jaune seul",
              "De l'endomètre",
              "Des follicules ovariens"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La présentation des expériences annonce l'objectif : montrer l'action du complexe hypothalamo-hypophysaire sur les fonctions ovariennes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Effets de l'ablation de l'hypophyse",
          "stepTheme": "Effets de l'ablation de l'hypophyse",
          "stepBadge": "Effets de l'ablation de l'hypophyse",
          "paragraphText": "L'ablation de l'hypophyse le 3e jour du cycle entraîne l'atrophie des ovaires.\nLe taux des œstrogènes dans le sang devient alors inférieur à la normale et on ne décèle jamais de progestérone.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p04_q2",
            "type": "mcq",
            "prompt": "Après l'ablation de l'hypophyse, on observe :",
            "options": [
              "Une hypersécrétion des hormones ovariennes",
              "L'atrophie des ovaires et un taux d'œstrogènes inférieur à la normale",
              "Une ovulation immédiate",
              "Une augmentation de la progestérone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les résultats de l'expérience 1 sont l'atrophie des ovaires, des œstrogènes sous la normale et aucune progestérone décelée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La greffe corrige l'ablation",
          "stepTheme": "La greffe corrige l'ablation",
          "stepBadge": "La greffe corrige l'ablation",
          "paragraphText": "Méthode expérimentale : on pratique l'ablation, on observe les effets, puis une greffe d'hypophyse quelques jours plus tard.\nLa correction des effets de l'ablation par la greffe confirme que ces effets venaient bien de l'absence d'hypophyse.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p04_q3",
            "type": "mcq",
            "prompt": "Quel est le rôle de la greffe d'hypophyse dans l'expérience 1 ?",
            "options": [
              "Elle provoque l'atrésie des follicules",
              "Elle corrige les effets de l'ablation de l'hypophyse",
              "Elle remplace les ovaires",
              "Elle déclenche les menstrues"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les résultats indiquent la correction des effets de l'ablation de l'hypophyse après la greffe."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La stimulation de l'hypothalamus",
          "stepTheme": "La stimulation de l'hypothalamus",
          "stepBadge": "La stimulation de l'hypothalamus",
          "paragraphText": "Dans l'expérience 3, on stimule électriquement l'hypothalamus, de façon régulière et localisée, chez des femelles non castrées.\nLe résultat est une hypersécrétion des hormones hypophysaires.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p04_q4",
            "type": "mcq",
            "prompt": "La stimulation électrique de l'hypothalamus provoque :",
            "options": [
              "L'atrophie des ovaires",
              "L'arrêt des sécrétions hypophysaires",
              "Une hypersécrétion des hormones hypophysaires",
              "La desquamation de l'endomètre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résultat de l'expérience 3 est l'hypersécrétion des hormones hypophysaires : l'hypothalamus stimule donc l'hypophyse."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La commande ne va pas dans un seul sens",
          "stepTheme": "La commande ne va pas dans un seul sens",
          "stepBadge": "La commande ne va pas dans un seul sens",
          "paragraphText": "Piège : réduire la régulation à une commande descendante unique.\nL'analyse de la leçon ajoute que les ovaires, en revanche, contrôlent aussi l'activité de l'hypophyse : il y a interaction dans les deux sens.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p04_q5",
            "type": "mcq",
            "prompt": "Selon l'analyse de la leçon, en plus de la commande de l'hypophyse sur les ovaires :",
            "options": [
              "L'utérus commande l'hypothalamus",
              "Les ovaires contrôlent l'activité de l'hypophyse",
              "Les ovaires n'ont aucun effet en retour",
              "L'hypothalamus agit directement sur l'endomètre seul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'analyse conclut à un double lien : l'hypophyse agit sur les ovaires et l'utérus, et les ovaires contrôlent l'activité de l'hypophyse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La castration suivie d'injections (expérience 2)",
          "stepTheme": "La castration suivie d'injections (expérience 2)",
          "stepBadge": "La castration suivie d'injections (expérience 2)",
          "paragraphText": "L'expérience 2 pratique une castration (ovariectomie) puis des injections de quantités bien dosées d'œstrogènes.\nLes résultats rapportés mentionnent notamment une variation du volume de l'hypophyse et des taux de FSH et de LH qui se stabilisent autour du taux normal selon le dosage.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p04_q6",
            "type": "mcq",
            "prompt": "L'expérience 2 associe quelle opération à des injections d'œstrogènes ?",
            "options": [
              "L'ablation de l'hypophyse",
              "Une castration (ovariectomie)",
              "Une greffe d'hypophyse",
              "Une stimulation électrique de l'hypothalamus"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La présentation de l'expérience 2 indique une castration (ovariectomie) suivie d'injections d'œstrogènes bien dosés."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p04_q1",
          "type": "mcq",
          "prompt": "Les expériences de cette partie visent à montrer l'action de quel ensemble sur les ovaires ?",
          "options": [
            "Du complexe hypothalamo-hypophysaire",
            "Du corps jaune seul",
            "De l'endomètre",
            "Des follicules ovariens"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La présentation des expériences annonce l'objectif : montrer l'action du complexe hypothalamo-hypophysaire sur les fonctions ovariennes."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p04_q2",
          "type": "mcq",
          "prompt": "Après l'ablation de l'hypophyse, on observe :",
          "options": [
            "Une hypersécrétion des hormones ovariennes",
            "L'atrophie des ovaires et un taux d'œstrogènes inférieur à la normale",
            "Une ovulation immédiate",
            "Une augmentation de la progestérone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les résultats de l'expérience 1 sont l'atrophie des ovaires, des œstrogènes sous la normale et aucune progestérone décelée."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p04_q3",
          "type": "mcq",
          "prompt": "Quel est le rôle de la greffe d'hypophyse dans l'expérience 1 ?",
          "options": [
            "Elle provoque l'atrésie des follicules",
            "Elle corrige les effets de l'ablation de l'hypophyse",
            "Elle remplace les ovaires",
            "Elle déclenche les menstrues"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les résultats indiquent la correction des effets de l'ablation de l'hypophyse après la greffe."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p04_q4",
          "type": "mcq",
          "prompt": "La stimulation électrique de l'hypothalamus provoque :",
          "options": [
            "L'atrophie des ovaires",
            "L'arrêt des sécrétions hypophysaires",
            "Une hypersécrétion des hormones hypophysaires",
            "La desquamation de l'endomètre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résultat de l'expérience 3 est l'hypersécrétion des hormones hypophysaires : l'hypothalamus stimule donc l'hypophyse."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p04_q5",
          "type": "mcq",
          "prompt": "Selon l'analyse de la leçon, en plus de la commande de l'hypophyse sur les ovaires :",
          "options": [
            "L'utérus commande l'hypothalamus",
            "Les ovaires contrôlent l'activité de l'hypophyse",
            "Les ovaires n'ont aucun effet en retour",
            "L'hypothalamus agit directement sur l'endomètre seul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'analyse conclut à un double lien : l'hypophyse agit sur les ovaires et l'utérus, et les ovaires contrôlent l'activité de l'hypophyse."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p04_q6",
          "type": "mcq",
          "prompt": "L'expérience 2 associe quelle opération à des injections d'œstrogènes ?",
          "options": [
            "L'ablation de l'hypophyse",
            "Une castration (ovariectomie)",
            "Une greffe d'hypophyse",
            "Une stimulation électrique de l'hypothalamus"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La présentation de l'expérience 2 indique une castration (ovariectomie) suivie d'injections d'œstrogènes bien dosés."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l07_cycles_sexuels_femme_p05",
      "order": 5,
      "title": "Les rétrocontrôles : du frein folliculaire au pic de LH",
      "summary": "Expliquer les rétrocontrôles négatif puis positif des œstrogènes et le rétrocontrôle négatif de la progestérone.",
      "conceptExplanation": "L'hypothalamus, par l'intermédiaire de la GnRH, agit sur l'antéhypophyse pour stimuler la sécrétion des gonadostimulines, FSH et LH.\nPendant la phase folliculaire, les follicules se développent sous l'influence de la FSH et le follicule dominant mûrit sous l'action de la LH. Les follicules sécrètent des œstrogènes qui agissent sur la paroi utérine, qui s'épaissit, et sur le complexe hypothalamo-hypophysaire par rétrocontrôle négatif, afin de maintenir la production des gonadostimulines à un taux faible au début du cycle.\nVers le 14e jour, les œstrogènes exercent un rétrocontrôle positif : la production de LH connaît alors un pic qui déclenche l'ovulation, environ 37 heures plus tard. La LH est également responsable du maintien du corps jaune, qui sécrète l'œstradiol mais surtout la progestérone.\nLe taux sanguin de progestérone qui s'élève agit sur le complexe hypothalamo-hypophysaire en inhibant la sécrétion des gonadostimulines : c'est un rétrocontrôle négatif.",
      "keyRule": "Œstrogènes : frein négatif en début de cycle, puis rétrocontrôle positif et pic de LH déclenchant l'ovulation ; progestérone : frein négatif en phase lutéale.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer le déclenchement de l'ovulation",
        "statement": "Vers le 14e jour du cycle, le follicule de De Graaf est mûr et l'ovulation va se produire. Explique le mécanisme hormonal qui la déclenche.",
        "methodSteps": [
          "En fin de phase folliculaire, les œstrogènes sécrétés en grande quantité changent d'effet sur le complexe hypothalamo-hypophysaire.",
          "Ils exercent alors un rétrocontrôle positif, au lieu du rétrocontrôle négatif du début de cycle.",
          "La production de LH connaît un pic, qui déclenche l'ovulation environ 37 heures plus tard."
        ],
        "conclusion": "Le pic de LH, provoqué par le rétrocontrôle positif des œstrogènes, déclenche l'ovulation environ 37 heures plus tard."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La GnRH et les gonadostimulines",
          "stepTheme": "La GnRH et les gonadostimulines",
          "stepBadge": "La GnRH et les gonadostimulines",
          "paragraphText": "• GnRH : l'hormone par laquelle l'hypothalamus agit sur l'antéhypophyse.\n• Gonadostimulines : les hormones hypophysaires FSH et LH, dont la GnRH stimule la sécrétion.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p05_q1",
            "type": "mcq",
            "prompt": "Par l'intermédiaire de quelle hormone l'hypothalamus stimule-t-il la sécrétion des gonadostimulines ?",
            "options": [
              "La progestérone",
              "La GnRH",
              "L'œstradiol",
              "La testostérone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'interprétation indique que l'hypothalamus, par l'intermédiaire de la GnRH, stimule la sécrétion des gonadostimulines FSH et LH."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "FSH et LH pendant la phase folliculaire",
          "stepTheme": "FSH et LH pendant la phase folliculaire",
          "stepBadge": "FSH et LH pendant la phase folliculaire",
          "paragraphText": "Pendant la phase folliculaire, il y a développement des follicules ovariens sous l'influence de la FSH.\nLa maturation du follicule dominant se fait sous l'action de la LH.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p05_q2",
            "type": "mcq",
            "prompt": "Pendant la phase folliculaire, le développement des follicules se fait sous l'influence de :",
            "options": [
              "La progestérone",
              "La GnRH directement",
              "La FSH",
              "L'œstradiol seul"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon attribue le développement folliculaire à la FSH et la maturation du follicule dominant à la LH."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le rétrocontrôle négatif des œstrogènes",
          "stepTheme": "Le rétrocontrôle négatif des œstrogènes",
          "stepBadge": "Le rétrocontrôle négatif des œstrogènes",
          "paragraphText": "• Rétrocontrôle négatif (feed-back négatif) : l'action en retour des œstrogènes sur le complexe hypothalamo-hypophysaire pour maintenir la production des gonadostimulines à un taux faible.\nIl s'exerce au début du cycle menstruel ; les œstrogènes épaississent en même temps la paroi utérine.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p05_q3",
            "type": "mcq",
            "prompt": "Au début du cycle, les œstrogènes exercent sur le complexe hypothalamo-hypophysaire :",
            "options": [
              "Un rétrocontrôle positif qui provoque un pic de LH",
              "Un rétrocontrôle négatif maintenant les gonadostimulines à un taux faible",
              "Aucune action",
              "Une stimulation directe des ovaires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Au début du cycle, le rétrocontrôle des œstrogènes est négatif : il maintient les gonadostimulines à un taux faible."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le rétrocontrôle positif et le pic de LH",
          "stepTheme": "Le rétrocontrôle positif et le pic de LH",
          "stepBadge": "Le rétrocontrôle positif et le pic de LH",
          "paragraphText": "Vers le 14e jour du cycle, les œstrogènes exercent un rétrocontrôle positif sur le complexe hypothalamo-hypophysaire.\nLa production de LH connaît alors un pic qui déclenche l'ovulation environ 37 heures plus tard.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p05_q4",
            "type": "mcq",
            "prompt": "Le pic de LH vers le 14e jour déclenche :",
            "options": [
              "Les menstrues",
              "L'ovulation, environ 37 heures plus tard",
              "L'atrésie de tous les follicules",
              "La régression du corps jaune"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'interprétation précise que le pic de LH déclenche l'ovulation environ 37 heures plus tard."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les œstrogènes ont deux effets opposés selon le moment",
          "stepTheme": "Les œstrogènes ont deux effets opposés selon le moment",
          "stepBadge": "Les œstrogènes ont deux effets opposés selon le moment",
          "paragraphText": "Piège : attribuer aux œstrogènes un seul effet de frein.\nIls freinent par rétrocontrôle négatif en début de cycle, mais exercent un rétrocontrôle positif vers le 14e jour, à l'origine du pic de LH.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p05_q5",
            "type": "mcq",
            "prompt": "Comment l'effet des œstrogènes sur le complexe hypothalamo-hypophysaire évolue-t-il dans le cycle ?",
            "options": [
              "Il reste toujours positif",
              "Il reste toujours négatif",
              "Négatif au début du cycle, il devient positif vers le 14e jour",
              "Il disparaît après l'ovulation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon décrit les deux rétrocontrôles successifs des œstrogènes : négatif en début de cycle, positif vers le 14e jour."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le rétrocontrôle négatif de la progestérone",
          "stepTheme": "Le rétrocontrôle négatif de la progestérone",
          "stepBadge": "Le rétrocontrôle négatif de la progestérone",
          "paragraphText": "Après l'ovulation, la LH maintient le corps jaune, qui sécrète l'œstradiol mais surtout la progestérone.\nLe taux de progestérone qui s'élève inhibe la sécrétion des gonadostimulines : c'est le rétrocontrôle négatif de la phase lutéale.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p05_q6",
            "type": "mcq",
            "prompt": "En phase lutéale, la progestérone élevée provoque :",
            "options": [
              "Un pic de LH",
              "Une inhibition de la sécrétion des gonadostimulines",
              "Une nouvelle maturation folliculaire immédiate",
              "La desquamation de l'endomètre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La progestérone agit sur le complexe hypothalamo-hypophysaire en inhibant la sécrétion des gonadostimulines."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p05_q1",
          "type": "mcq",
          "prompt": "Par l'intermédiaire de quelle hormone l'hypothalamus stimule-t-il la sécrétion des gonadostimulines ?",
          "options": [
            "La progestérone",
            "La GnRH",
            "L'œstradiol",
            "La testostérone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'interprétation indique que l'hypothalamus, par l'intermédiaire de la GnRH, stimule la sécrétion des gonadostimulines FSH et LH."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p05_q2",
          "type": "mcq",
          "prompt": "Pendant la phase folliculaire, le développement des follicules se fait sous l'influence de :",
          "options": [
            "La progestérone",
            "La GnRH directement",
            "La FSH",
            "L'œstradiol seul"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon attribue le développement folliculaire à la FSH et la maturation du follicule dominant à la LH."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p05_q3",
          "type": "mcq",
          "prompt": "Au début du cycle, les œstrogènes exercent sur le complexe hypothalamo-hypophysaire :",
          "options": [
            "Un rétrocontrôle positif qui provoque un pic de LH",
            "Un rétrocontrôle négatif maintenant les gonadostimulines à un taux faible",
            "Aucune action",
            "Une stimulation directe des ovaires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Au début du cycle, le rétrocontrôle des œstrogènes est négatif : il maintient les gonadostimulines à un taux faible."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p05_q4",
          "type": "mcq",
          "prompt": "Le pic de LH vers le 14e jour déclenche :",
          "options": [
            "Les menstrues",
            "L'ovulation, environ 37 heures plus tard",
            "L'atrésie de tous les follicules",
            "La régression du corps jaune"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'interprétation précise que le pic de LH déclenche l'ovulation environ 37 heures plus tard."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p05_q5",
          "type": "mcq",
          "prompt": "Comment l'effet des œstrogènes sur le complexe hypothalamo-hypophysaire évolue-t-il dans le cycle ?",
          "options": [
            "Il reste toujours positif",
            "Il reste toujours négatif",
            "Négatif au début du cycle, il devient positif vers le 14e jour",
            "Il disparaît après l'ovulation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon décrit les deux rétrocontrôles successifs des œstrogènes : négatif en début de cycle, positif vers le 14e jour."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p05_q6",
          "type": "mcq",
          "prompt": "En phase lutéale, la progestérone élevée provoque :",
          "options": [
            "Un pic de LH",
            "Une inhibition de la sécrétion des gonadostimulines",
            "Une nouvelle maturation folliculaire immédiate",
            "La desquamation de l'endomètre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La progestérone agit sur le complexe hypothalamo-hypophysaire en inhibant la sécrétion des gonadostimulines."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l07_cycles_sexuels_femme_p06",
      "order": 6,
      "title": "Le schéma de régulation du cycle sexuel de la femme",
      "summary": "Assembler la régulation complète : GnRH, FSH, LH, hormones ovariennes et leurs rétrocontrôles.",
      "conceptExplanation": "La conclusion de la deuxième partie affirme que les organes sexuels de la femme fonctionnent par des interactions, rétrocontrôle positif et négatif, avec le complexe hypothalamo-hypophysaire.\nLa chaîne complète est la suivante : l'hypothalamus sécrète la GnRH, qui stimule l'antéhypophyse ; l'antéhypophyse sécrète la FSH et la LH, qui agissent sur les ovaires ; les ovaires sécrètent les œstrogènes puis la progestérone, qui agissent sur l'utérus et en retour sur le complexe hypothalamo-hypophysaire.\nLa conclusion générale résume : les organes sexuels de la femme fonctionnent de façon cyclique et par des interactions avec le système hypothalamo-hypophysaire.\nLes courbes des hormones hypophysaires et des hormones ovariennes, ainsi que le schéma de régulation, illustrent cet ensemble dans la leçon.",
      "keyRule": "GnRH puis FSH et LH commandent l'ovaire ; œstrogènes et progestérone répondent par leurs rétrocontrôles : le cycle est régulé en boucle.",
      "formulas": [],
      "workedExample": {
        "title": "Retrouver les gonadostimulines (consolidation)",
        "statement": "Les affirmations de consolidation de la leçon rappellent que la FSH et la LH sont des gonadostimulines. Replace ces deux hormones dans la chaîne de régulation du cycle de la femme.",
        "methodSteps": [
          "L'hypothalamus sécrète la GnRH, qui agit sur l'antéhypophyse.",
          "L'antéhypophyse sécrète les gonadostimulines FSH et LH, qui agissent sur les ovaires.",
          "Les hormones ovariennes exercent en retour leurs rétrocontrôles sur le complexe hypothalamo-hypophysaire."
        ],
        "conclusion": "FSH et LH sont les gonadostimulines hypophysaires, maillon central entre la GnRH et les ovaires."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les hormones hypophysaires du cycle",
          "stepTheme": "Les hormones hypophysaires du cycle",
          "stepBadge": "Les hormones hypophysaires du cycle",
          "paragraphText": "• Hormones hypophysaires du cycle : la FSH et la LH, les gonadostimulines sécrétées par l'antéhypophyse.\nLa leçon présente leurs courbes au cours du cycle, avec le pic de LH avant l'ovulation.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p06_q1",
            "type": "mcq",
            "prompt": "Les gonadostimulines sécrétées par l'antéhypophyse sont :",
            "options": [
              "La GnRH et la progestérone",
              "La FSH et la LH",
              "Les œstrogènes et l'œstradiol",
              "La GnRH uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'interprétation nomme les gonadostimulines : FSH et LH, sécrétées sous l'action de la GnRH hypothalamique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les hormones ovariennes",
          "stepTheme": "Les hormones ovariennes",
          "stepBadge": "Les hormones ovariennes",
          "paragraphText": "Les follicules ovariens en développement sécrètent des œstrogènes.\nAprès l'ovulation, le corps jaune sécrète l'œstradiol mais surtout la progestérone : ce sont les hormones ovariennes dont la leçon donne les courbes.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p06_q2",
            "type": "mcq",
            "prompt": "Le corps jaune sécrète surtout :",
            "options": [
              "La FSH",
              "La GnRH",
              "La progestérone",
              "La LH"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon précise que le corps jaune, maintenu par la LH, sécrète l'œstradiol mais surtout la progestérone."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Lire le schéma de régulation",
          "stepTheme": "Lire le schéma de régulation",
          "stepBadge": "Lire le schéma de régulation",
          "paragraphText": "Méthode : lire le schéma de régulation de haut en bas, de l'hypothalamus vers l'utérus, puis remonter par les flèches de rétrocontrôle.\nOn vérifie ainsi chaque maillon : GnRH, FSH et LH, ovaire, hormones ovariennes, utérus, rétrocontrôles.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p06_q3",
            "type": "mcq",
            "prompt": "Dans le schéma de régulation, la première hormone de la chaîne de commande est :",
            "options": [
              "La progestérone",
              "La GnRH de l'hypothalamus",
              "La LH",
              "L'œstradiol"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La chaîne commence à l'hypothalamus : la GnRH stimule l'antéhypophyse, qui sécrète FSH et LH."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Une régulation en boucle",
          "stepTheme": "Une régulation en boucle",
          "stepBadge": "Une régulation en boucle",
          "paragraphText": "La régulation n'est pas une simple commande à sens unique : les hormones ovariennes agissent en retour sur le complexe qui les commande.\nC'est ce fonctionnement par interactions qui explique le caractère cyclique et régulier des cycles sexuels.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p06_q4",
            "type": "mcq",
            "prompt": "Le fonctionnement des organes sexuels de la femme est qualifié de cyclique et :",
            "options": [
              "Indépendant de toute hormone",
              "Par interactions avec le système hypothalamo-hypophysaire",
              "Commandé par l'utérus seul",
              "Interrompu à la puberté"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La conclusion générale le résume : fonctionnement cyclique et par interactions avec le système hypothalamo-hypophysaire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser commande et rétrocontrôle",
          "stepTheme": "Ne pas inverser commande et rétrocontrôle",
          "stepBadge": "Ne pas inverser commande et rétrocontrôle",
          "paragraphText": "Piège : placer les œstrogènes en tête de la régulation.\nCe sont la GnRH puis FSH et LH qui commandent l'ovaire ; les œstrogènes et la progestérone n'interviennent qu'en retour, par rétrocontrôle.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p06_q5",
            "type": "mcq",
            "prompt": "Dans la régulation du cycle, les œstrogènes interviennent principalement :",
            "options": [
              "En commandant directement l'hypothalamus comme première hormone",
              "En retour, par rétrocontrôle sur le complexe hypothalamo-hypophysaire",
              "Sans aucun lien avec l'hypophyse",
              "Uniquement sur le corps jaune"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les œstrogènes agissent sur la paroi utérine et, en retour, sur le complexe hypothalamo-hypophysaire : c'est le rétrocontrôle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le cycle complet en résumé",
          "stepTheme": "Le cycle complet en résumé",
          "stepBadge": "Le cycle complet en résumé",
          "paragraphText": "Exemple de synthèse tiré de la leçon : à partir de la puberté, les organes sexuels de la femme fonctionnent régulièrement.\nCette régularité vient de l'enchaînement des cycles ovarien et utérin, synchronisés par la régulation hormonale.",
          "exercise": {
            "id": "terminale_c_svt_l07_cycles_sexuels_femme_p06_q6",
            "type": "mcq",
            "prompt": "L'apparition régulière des menstrues à partir de la puberté traduit :",
            "options": [
              "Un fonctionnement irrégulier des ovaires",
              "Le fonctionnement cyclique des organes sexuels, régulé par le complexe hypothalamo-hypophysaire",
              "L'absence de régulation hormonale",
              "La fin de la phase folliculaire définitive"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La situation de départ constate un fonctionnement régulier à partir de la puberté, expliqué par les cycles et leur régulation."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p06_q1",
          "type": "mcq",
          "prompt": "Les gonadostimulines sécrétées par l'antéhypophyse sont :",
          "options": [
            "La GnRH et la progestérone",
            "La FSH et la LH",
            "Les œstrogènes et l'œstradiol",
            "La GnRH uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'interprétation nomme les gonadostimulines : FSH et LH, sécrétées sous l'action de la GnRH hypothalamique."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p06_q2",
          "type": "mcq",
          "prompt": "Le corps jaune sécrète surtout :",
          "options": [
            "La FSH",
            "La GnRH",
            "La progestérone",
            "La LH"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon précise que le corps jaune, maintenu par la LH, sécrète l'œstradiol mais surtout la progestérone."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p06_q3",
          "type": "mcq",
          "prompt": "Dans le schéma de régulation, la première hormone de la chaîne de commande est :",
          "options": [
            "La progestérone",
            "La GnRH de l'hypothalamus",
            "La LH",
            "L'œstradiol"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La chaîne commence à l'hypothalamus : la GnRH stimule l'antéhypophyse, qui sécrète FSH et LH."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p06_q4",
          "type": "mcq",
          "prompt": "Le fonctionnement des organes sexuels de la femme est qualifié de cyclique et :",
          "options": [
            "Indépendant de toute hormone",
            "Par interactions avec le système hypothalamo-hypophysaire",
            "Commandé par l'utérus seul",
            "Interrompu à la puberté"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La conclusion générale le résume : fonctionnement cyclique et par interactions avec le système hypothalamo-hypophysaire."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p06_q5",
          "type": "mcq",
          "prompt": "Dans la régulation du cycle, les œstrogènes interviennent principalement :",
          "options": [
            "En commandant directement l'hypothalamus comme première hormone",
            "En retour, par rétrocontrôle sur le complexe hypothalamo-hypophysaire",
            "Sans aucun lien avec l'hypophyse",
            "Uniquement sur le corps jaune"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les œstrogènes agissent sur la paroi utérine et, en retour, sur le complexe hypothalamo-hypophysaire : c'est le rétrocontrôle."
        },
        {
          "id": "terminale_c_svt_l07_cycles_sexuels_femme_p06_q6",
          "type": "mcq",
          "prompt": "L'apparition régulière des menstrues à partir de la puberté traduit :",
          "options": [
            "Un fonctionnement irrégulier des ovaires",
            "Le fonctionnement cyclique des organes sexuels, régulé par le complexe hypothalamo-hypophysaire",
            "L'absence de régulation hormonale",
            "La fin de la phase folliculaire définitive"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La situation de départ constate un fonctionnement régulier à partir de la puberté, expliqué par les cycles et leur régulation."
        }
      ]
    }
  ]
};
