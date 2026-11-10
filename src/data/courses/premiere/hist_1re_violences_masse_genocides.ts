import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère H8-Les violences de masse Les génocides du xxème siècles à nos jours.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const HIST_1RE_T3_L03_VIOLENCES_MASSE_GENOCIDES: CurriculumChapter = {
  "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides",
  "subjectId": "histoire_geo",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 8,
  "title": "Thème 3, leçon 3 : Les violences de masse, les génocides du XXe siècle à nos jours",
  "summary": "Violences de masse et génocides : définitions, génocides du XXe siècle, la Shoah, et les moyens juridiques pour juger et prévenir ces crimes.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "1ère H8-Les violences de masse Les génocides du xxème siècles à nos jours.pdf",
  "points": [
    {
      "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p01",
      "order": 1,
      "title": "Les violences de masse",
      "summary": "Des violences de grande ampleur contre des populations.",
      "conceptExplanation": "Le XXe siècle a connu une multiplication des violences de masse et des génocides.\n\nUne violence de masse est une violence de grande ampleur, le plus souvent collective, qui détruit des biens et tue un grand nombre de personnes, surtout des non-combattants : hommes, femmes, enfants ou soldats désarmés.\n\nSelon le cours, ses caractéristiques sont :\n- elle n'est pas toujours préméditée (planifiée à l'avance) ;\n- elle ne vise pas forcément un groupe précis choisi à l'avance ;\n- elle cause d'énormes dégâts humains et matériels.\n\nExemples : les massacres de civils pendant la Seconde Guerre mondiale ; la répression pendant la colonisation en Côte d'Ivoire (villages bombardés, déportations).\n\nLa notion de violence de masse est plus large que celle de génocide : elle peut désigner n'importe quelle violence de grande ampleur, notamment pendant les guerres, sans qu'on ait à prouver une intention d'exterminer.",
      "keyRule": "Violence de masse : violence de grande ampleur contre un grand nombre de personnes, surtout des civils ; pas toujours préméditée ni ciblée. Notion plus large que le génocide.",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître une violence de masse",
        "statement": "Pendant la conquête, des villages lagunaires ivoiriens sont bombardés par les Français. Est-ce une violence de masse ?",
        "methodSteps": [
          "Des civils en grand nombre sont tués et des biens détruits.",
          "L'objectif est de briser une résistance, pas d'exterminer un peuple entier."
        ],
        "conclusion": "C'est une violence de masse, mais pas un génocide."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La violence de masse",
          "stepTheme": "La violence de masse",
          "stepBadge": "La violence de masse",
          "paragraphText": "Une violence de masse est une violence de grande ampleur qui tue un grand nombre de personnes, surtout des non-combattants.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p01_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une violence de masse ?",
            "options": [
              "Une simple dispute entre deux voisins",
              "Un match de football",
              "Une violence de grande ampleur contre un grand nombre de personnes",
              "Un accord de paix"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elle frappe surtout des civils."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Pas toujours préméditée",
          "stepTheme": "Pas toujours préméditée",
          "stepBadge": "Pas toujours préméditée",
          "paragraphText": "Selon le cours, une violence de masse n'est pas toujours préméditée et ne vise pas forcément un groupe choisi à l'avance.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p01_q2",
            "type": "mcq",
            "prompt": "Une violence de masse est-elle toujours planifiée à l'avance ?",
            "options": [
              "Non, pas toujours",
              "Oui, toujours",
              "Oui, par l'ONU",
              "Non, elle est toujours accidentelle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est ce qui la distingue du génocide."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un exemple mondial",
          "stepTheme": "Un exemple mondial",
          "stepBadge": "Un exemple mondial",
          "paragraphText": "Les massacres de civils pendant la Seconde Guerre mondiale sont des exemples de violences de masse.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p01_q3",
            "type": "mcq",
            "prompt": "Lequel de ces faits est un exemple de violence de masse ?",
            "options": [
              "La création de l'ONU en 1945",
              "La signature d'un traité de paix",
              "L'organisation des Jeux olympiques",
              "Les massacres de civils en 1939-1945"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les civils ont été massivement visés."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un exemple ivoirien",
          "stepTheme": "Un exemple ivoirien",
          "stepBadge": "Un exemple ivoirien",
          "paragraphText": "La répression pendant la colonisation en Côte d'Ivoire est un exemple de violence de masse.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p01_q4",
            "type": "mcq",
            "prompt": "Quel exemple ivoirien de violence de masse le cours cite-t-il ?",
            "options": [
              "La fête de l'indépendance",
              "La répression pendant la colonisation",
              "Les fêtes tournantes",
              "La création des communes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Villages bombardés, chefs déportés."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les non-combattants",
          "stepTheme": "Les non-combattants",
          "stepBadge": "Les non-combattants",
          "paragraphText": "Les non-combattants sont les personnes qui ne combattent pas : civils, femmes, enfants, soldats désarmés.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p01_q5",
            "type": "mcq",
            "prompt": "Qui sont les non-combattants ?",
            "options": [
              "Les généraux en action",
              "Les civils et les soldats désarmés",
              "Les pilotes de chasse",
              "Les soldats armés au front"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les violences de masse les frappent surtout."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Une notion plus large",
          "stepTheme": "Une notion plus large",
          "stepBadge": "Une notion plus large",
          "paragraphText": "La violence de masse est une notion plus large que le génocide : elle ne demande pas de prouver une intention d'exterminer.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p01_q6",
            "type": "mcq",
            "prompt": "Quelle notion est la plus large ?",
            "options": [
              "Le génocide",
              "Les deux sont identiques",
              "Aucune des deux",
              "La violence de masse"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Tout génocide est une violence de masse, pas l'inverse."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Vrai ou faux",
          "stepTheme": "Vrai ou faux",
          "stepBadge": "Vrai ou faux",
          "paragraphText": "Selon le cours, les violences de masse ne sont généralement pas préméditées, contrairement aux génocides.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p01_q7",
            "type": "mcq",
            "prompt": "« Les violences de masse sont généralement préméditées. » Selon le cours, cette affirmation est :",
            "options": [
              "Fausse",
              "Vraie",
              "Vraie seulement en Afrique",
              "Vraie seulement en 1945"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La préméditation caractérise le génocide."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p01_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une violence de masse ?",
          "options": [
            "Une simple dispute entre deux voisins",
            "Un match de football",
            "Une violence de grande ampleur contre un grand nombre de personnes",
            "Un accord de paix"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elle frappe surtout des civils."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p01_q2",
          "type": "mcq",
          "prompt": "Une violence de masse est-elle toujours planifiée à l'avance ?",
          "options": [
            "Non, pas toujours",
            "Oui, toujours",
            "Oui, par l'ONU",
            "Non, elle est toujours accidentelle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est ce qui la distingue du génocide."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p01_q3",
          "type": "mcq",
          "prompt": "Lequel de ces faits est un exemple de violence de masse ?",
          "options": [
            "La création de l'ONU en 1945",
            "La signature d'un traité de paix",
            "L'organisation des Jeux olympiques",
            "Les massacres de civils en 1939-1945"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les civils ont été massivement visés."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p01_q4",
          "type": "mcq",
          "prompt": "Quel exemple ivoirien de violence de masse le cours cite-t-il ?",
          "options": [
            "La fête de l'indépendance",
            "La répression pendant la colonisation",
            "Les fêtes tournantes",
            "La création des communes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Villages bombardés, chefs déportés."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p01_q5",
          "type": "mcq",
          "prompt": "Qui sont les non-combattants ?",
          "options": [
            "Les généraux en action",
            "Les civils et les soldats désarmés",
            "Les pilotes de chasse",
            "Les soldats armés au front"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les violences de masse les frappent surtout."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p01_q6",
          "type": "mcq",
          "prompt": "Quelle notion est la plus large ?",
          "options": [
            "Le génocide",
            "Les deux sont identiques",
            "Aucune des deux",
            "La violence de masse"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Tout génocide est une violence de masse, pas l'inverse."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p01_q7",
          "type": "mcq",
          "prompt": "« Les violences de masse sont généralement préméditées. » Selon le cours, cette affirmation est :",
          "options": [
            "Fausse",
            "Vraie",
            "Vraie seulement en Afrique",
            "Vraie seulement en 1945"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La préméditation caractérise le génocide."
        }
      ]
    },
    {
      "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p02",
      "order": 2,
      "title": "Qu'est-ce qu'un génocide ?",
      "summary": "L'intention de détruire un groupe.",
      "conceptExplanation": "Le mot génocide a été créé en 1944 par le juriste polonais Raphaël Lemkin. L'ONU l'a adopté dans la Convention pour la prévention et la répression du crime de génocide, le 9 décembre 1948.\n\nUn génocide est une violence de masse planifiée et organisée, dont le but est de détruire, en tout ou en partie, un groupe national, ethnique, racial ou religieux, en raison de ce qu'il est.\n\nCe qui le distingue : l'intention d'exterminer, la planification et l'organisation.\n\nLes actes de génocide (Convention de 1948) :\n- le meurtre de membres du groupe ;\n- les atteintes graves à leur intégrité physique ou mentale ;\n- la soumission intentionnelle à des conditions d'existence devant entraîner sa destruction ;\n- les mesures visant à entraver les naissances ;\n- le transfert forcé d'enfants vers un autre groupe.\n\nIl suffit qu'un de ces actes soit commis avec l'intention de détruire le groupe pour parler de génocide.\n\nRetenir : tout génocide est une violence de masse, mais toute violence de masse n'est pas un génocide.",
      "keyRule": "Génocide (mot de Lemkin, 1944 ; Convention de l'ONU, 9 décembre 1948) : violence de masse planifiée avec l'intention de détruire un groupe national, ethnique, racial ou religieux.",
      "formulas": [],
      "workedExample": {
        "title": "Distinguer deux notions",
        "statement": "Quelle différence entre un massacre de civils pendant une bataille et la Shoah ?",
        "methodSteps": [
          "Le massacre est une violence de masse : il n'y a pas forcément de plan pour détruire tout un peuple.",
          "La Shoah est un génocide : les nazis ont planifié l'extermination de tous les Juifs d'Europe."
        ],
        "conclusion": "Ce qui fait le génocide, c'est l'intention organisée de détruire un groupe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "L'inventeur du mot",
          "stepTheme": "L'inventeur du mot",
          "stepBadge": "L'inventeur du mot",
          "paragraphText": "Le mot génocide a été créé en 1944 par le juriste polonais Raphaël Lemkin.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p02_q1",
            "type": "mcq",
            "prompt": "Qui a créé le mot « génocide » en 1944 ?",
            "options": [
              "Adolf Hitler",
              "Winston Churchill",
              "Raphaël Lemkin",
              "Karl Marx"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il était juriste et d'origine polonaise."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La Convention de 1948",
          "stepTheme": "La Convention de 1948",
          "stepBadge": "La Convention de 1948",
          "paragraphText": "L'ONU adopte la Convention pour la prévention et la répression du crime de génocide le 9 décembre 1948.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p02_q2",
            "type": "mcq",
            "prompt": "Quand l'ONU adopte-t-elle la Convention contre le génocide ?",
            "options": [
              "Le 11 novembre 1918",
              "Le 1er juillet 2002",
              "Le 30 janvier 1933",
              "Le 9 décembre 1948"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La DUDH est adoptée le lendemain, le 10 décembre 1948."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le génocide",
          "stepTheme": "Le génocide",
          "stepBadge": "Le génocide",
          "paragraphText": "Un génocide est une violence de masse planifiée dont le but est de détruire un groupe national, ethnique, racial ou religieux.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p02_q3",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'un génocide ?",
            "options": [
              "Une bataille entre deux armées",
              "Une catastrophe naturelle meurtrière",
              "La destruction planifiée d'un groupe",
              "Une grave crise économique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'intention d'exterminer est essentielle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le critère décisif",
          "stepTheme": "Le critère décisif",
          "stepBadge": "Le critère décisif",
          "paragraphText": "Ce qui distingue le génocide des autres violences de masse, c'est l'intention d'exterminer, avec planification et organisation.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p02_q4",
            "type": "mcq",
            "prompt": "Quel élément distingue le génocide des autres violences de masse ?",
            "options": [
              "Le nombre de bâtiments détruits",
              "L'intention planifiée d'exterminer un groupe",
              "L'utilisation d'avions",
              "La durée de la guerre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Lemkin insiste sur l'intentionnalité."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Entraver les naissances",
          "stepTheme": "Entraver les naissances",
          "stepBadge": "Entraver les naissances",
          "paragraphText": "Empêcher les naissances au sein d'un groupe pour le faire disparaître est un acte de génocide.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p02_q5",
            "type": "mcq",
            "prompt": "Lequel de ces actes peut constituer un génocide ?",
            "options": [
              "Des mesures pour empêcher les naissances d'un groupe",
              "La construction d'une école",
              "Un recensement de la population",
              "Une élection présidentielle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est un des actes listés par la Convention de 1948."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Un seul critère suffit",
          "stepTheme": "Un seul critère suffit",
          "stepBadge": "Un seul critère suffit",
          "paragraphText": "Il suffit qu'un seul acte de génocide soit commis avec l'intention de détruire le groupe pour parler de génocide.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p02_q6",
            "type": "mcq",
            "prompt": "Combien d'actes de génocide faut-il pour parler de génocide ?",
            "options": [
              "Un seul, s'il y a l'intention de détruire le groupe",
              "Tous les actes en même temps",
              "Au moins dix",
              "Aucun, il faut une guerre mondiale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'intention reste indispensable."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Génocide et violence de masse",
          "stepTheme": "Génocide et violence de masse",
          "stepBadge": "Génocide et violence de masse",
          "paragraphText": "Tout génocide est une violence de masse, mais toute violence de masse n'est pas un génocide.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p02_q7",
            "type": "mcq",
            "prompt": "Quel lien unit génocide et violence de masse ?",
            "options": [
              "Toute violence de masse est un génocide",
              "Tout génocide est une violence de masse, pas l'inverse",
              "Un génocide n'est jamais une violence de masse",
              "Les deux mots veulent dire la même chose"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la question 5 de l'exercice 1 du cours."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p02_q1",
          "type": "mcq",
          "prompt": "Qui a créé le mot « génocide » en 1944 ?",
          "options": [
            "Adolf Hitler",
            "Winston Churchill",
            "Raphaël Lemkin",
            "Karl Marx"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il était juriste et d'origine polonaise."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p02_q2",
          "type": "mcq",
          "prompt": "Quand l'ONU adopte-t-elle la Convention contre le génocide ?",
          "options": [
            "Le 11 novembre 1918",
            "Le 1er juillet 2002",
            "Le 30 janvier 1933",
            "Le 9 décembre 1948"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La DUDH est adoptée le lendemain, le 10 décembre 1948."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p02_q3",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un génocide ?",
          "options": [
            "Une bataille entre deux armées",
            "Une catastrophe naturelle meurtrière",
            "La destruction planifiée d'un groupe",
            "Une grave crise économique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'intention d'exterminer est essentielle."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p02_q4",
          "type": "mcq",
          "prompt": "Quel élément distingue le génocide des autres violences de masse ?",
          "options": [
            "Le nombre de bâtiments détruits",
            "L'intention planifiée d'exterminer un groupe",
            "L'utilisation d'avions",
            "La durée de la guerre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Lemkin insiste sur l'intentionnalité."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p02_q5",
          "type": "mcq",
          "prompt": "Lequel de ces actes peut constituer un génocide ?",
          "options": [
            "Des mesures pour empêcher les naissances d'un groupe",
            "La construction d'une école",
            "Un recensement de la population",
            "Une élection présidentielle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est un des actes listés par la Convention de 1948."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p02_q6",
          "type": "mcq",
          "prompt": "Combien d'actes de génocide faut-il pour parler de génocide ?",
          "options": [
            "Un seul, s'il y a l'intention de détruire le groupe",
            "Tous les actes en même temps",
            "Au moins dix",
            "Aucun, il faut une guerre mondiale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'intention reste indispensable."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p02_q7",
          "type": "mcq",
          "prompt": "Quel lien unit génocide et violence de masse ?",
          "options": [
            "Toute violence de masse est un génocide",
            "Tout génocide est une violence de masse, pas l'inverse",
            "Un génocide n'est jamais une violence de masse",
            "Les deux mots veulent dire la même chose"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la question 5 de l'exercice 1 du cours."
        }
      ]
    },
    {
      "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p03",
      "order": 3,
      "title": "Les génocides du XXe siècle",
      "summary": "Arméniens, Juifs, Tziganes, Tutsi, Srebrenica.",
      "conceptExplanation": "Plusieurs génocides ont eu lieu au XXe siècle, sur plusieurs continents :\n- le génocide des Arméniens (1915-1916), commis par l'Empire ottoman pendant la Première Guerre mondiale : plus d'un million de morts ;\n- la Shoah, génocide des Juifs d'Europe par les nazis (1941-1945) : environ 6 millions de morts, le plus meurtrier ;\n- le génocide des Tziganes (Roms et Sinti) par les nazis, appelé Samudaripen ;\n- le génocide des Tutsi au Rwanda (avril-juillet 1994) : environ 800 000 morts en cent jours, surtout tués à la machette par des milices hutu ;\n- le massacre de Srebrenica (juillet 1995), en Bosnie : environ 8 000 hommes et garçons musulmans tués par les forces serbes de Bosnie, reconnu comme génocide par la justice internationale.\n\nL'Afrique a donc aussi connu un génocide, au Rwanda, qui rappelle combien les discours de haine ethnique sont dangereux.",
      "keyRule": "Génocides du XXe siècle : Arméniens (1915), Shoah (Juifs, environ 6 millions), Tziganes (Samudaripen), Tutsi au Rwanda (1994, environ 800 000), Srebrenica (1995).",
      "formulas": [],
      "workedExample": {
        "title": "Tirer une leçon",
        "statement": "Quelle leçon tirer du génocide des Tutsi au Rwanda pour la Côte d'Ivoire ?",
        "methodSteps": [
          "Le génocide a été préparé par des années de propagande qui présentait les Tutsi comme des ennemis.",
          "Les discours qui divisent les citoyens selon leur ethnie peuvent conduire au pire."
        ],
        "conclusion": "Il faut refuser les discours de haine et défendre l'unité nationale."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Le génocide des Arméniens",
          "stepTheme": "Le génocide des Arméniens",
          "stepBadge": "Le génocide des Arméniens",
          "paragraphText": "En 1915-1916, l'Empire ottoman commet le génocide des Arméniens : plus d'un million de morts.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p03_q1",
            "type": "mcq",
            "prompt": "Quel peuple a été victime d'un génocide dans l'Empire ottoman en 1915 ?",
            "options": [
              "Les Tutsi",
              "Les Tziganes",
              "Les Arméniens",
              "Les Polonais"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le premier génocide du XXe siècle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La Shoah",
          "stepTheme": "La Shoah",
          "stepBadge": "La Shoah",
          "paragraphText": "La Shoah est le génocide des Juifs d'Europe par les nazis pendant la Seconde Guerre mondiale.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p03_q2",
            "type": "mcq",
            "prompt": "Que désigne le mot « Shoah » ?",
            "options": [
              "Le génocide des Tziganes",
              "Le génocide des Tutsi",
              "Le traité de paix de 1945",
              "Le génocide des Juifs par les nazis"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On dit aussi l'Holocauste."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le Samudaripen",
          "stepTheme": "Le Samudaripen",
          "stepBadge": "Le Samudaripen",
          "paragraphText": "Le Samudaripen est le génocide des Tziganes (Roms et Sinti) par les nazis.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p03_q3",
            "type": "mcq",
            "prompt": "Quel peuple désigne le Samudaripen ?",
            "options": [
              "Les Juifs",
              "Les Arméniens",
              "Les Tziganes",
              "Les Bosniaques"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le génocide des Juifs s'appelle la Shoah."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le Rwanda",
          "stepTheme": "Le Rwanda",
          "stepBadge": "Le Rwanda",
          "paragraphText": "D'avril à juillet 1994, environ 800 000 Tutsi sont massacrés au Rwanda en une centaine de jours.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p03_q4",
            "type": "mcq",
            "prompt": "Quel génocide a eu lieu en Afrique en 1994 ?",
            "options": [
              "Le génocide des Arméniens",
              "La Shoah",
              "Le Samudaripen",
              "Le génocide des Tutsi au Rwanda"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il est jugé par le Tribunal pénal international pour le Rwanda."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Srebrenica",
          "stepTheme": "Srebrenica",
          "stepBadge": "Srebrenica",
          "paragraphText": "En juillet 1995, environ 8 000 hommes et garçons musulmans sont tués à Srebrenica, en Bosnie.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p03_q5",
            "type": "mcq",
            "prompt": "Dans quel pays se trouve Srebrenica, lieu d'un génocide en 1995 ?",
            "options": [
              "En Bosnie",
              "Au Rwanda",
              "En Arménie",
              "En Pologne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le général Ratko Mladic a été condamné pour ce massacre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le plus meurtrier",
          "stepTheme": "Le plus meurtrier",
          "stepBadge": "Le plus meurtrier",
          "paragraphText": "Le génocide des Juifs est le plus meurtrier du XXe siècle, avec environ 6 millions de victimes.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p03_q6",
            "type": "mcq",
            "prompt": "Quel génocide est le plus meurtrier du XXe siècle selon le cours ?",
            "options": [
              "Celui de Srebrenica",
              "Celui des Juifs (la Shoah)",
              "Celui des Arméniens",
              "Aucun génocide n'a eu lieu"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Environ 6 millions de morts."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Situer un génocide",
          "stepTheme": "Situer un génocide",
          "stepBadge": "Situer un génocide",
          "paragraphText": "Arméniens : 1915 ; Shoah : 1941-1945 ; Rwanda : 1994 ; Srebrenica : 1995.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p03_q7",
            "type": "mcq",
            "prompt": "Quel génocide a eu lieu le plus récemment parmi ceux-ci ?",
            "options": [
              "La Shoah (1941-1945)",
              "Srebrenica (1995)",
              "Les Arméniens (1915)",
              "Le Samudaripen (1941-1945)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le Rwanda (1994) le précède d'un an."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p03_q1",
          "type": "mcq",
          "prompt": "Quel peuple a été victime d'un génocide dans l'Empire ottoman en 1915 ?",
          "options": [
            "Les Tutsi",
            "Les Tziganes",
            "Les Arméniens",
            "Les Polonais"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le premier génocide du XXe siècle."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p03_q2",
          "type": "mcq",
          "prompt": "Que désigne le mot « Shoah » ?",
          "options": [
            "Le génocide des Tziganes",
            "Le génocide des Tutsi",
            "Le traité de paix de 1945",
            "Le génocide des Juifs par les nazis"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On dit aussi l'Holocauste."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p03_q3",
          "type": "mcq",
          "prompt": "Quel peuple désigne le Samudaripen ?",
          "options": [
            "Les Juifs",
            "Les Arméniens",
            "Les Tziganes",
            "Les Bosniaques"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le génocide des Juifs s'appelle la Shoah."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p03_q4",
          "type": "mcq",
          "prompt": "Quel génocide a eu lieu en Afrique en 1994 ?",
          "options": [
            "Le génocide des Arméniens",
            "La Shoah",
            "Le Samudaripen",
            "Le génocide des Tutsi au Rwanda"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il est jugé par le Tribunal pénal international pour le Rwanda."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p03_q5",
          "type": "mcq",
          "prompt": "Dans quel pays se trouve Srebrenica, lieu d'un génocide en 1995 ?",
          "options": [
            "En Bosnie",
            "Au Rwanda",
            "En Arménie",
            "En Pologne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le général Ratko Mladic a été condamné pour ce massacre."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p03_q6",
          "type": "mcq",
          "prompt": "Quel génocide est le plus meurtrier du XXe siècle selon le cours ?",
          "options": [
            "Celui de Srebrenica",
            "Celui des Juifs (la Shoah)",
            "Celui des Arméniens",
            "Aucun génocide n'a eu lieu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Environ 6 millions de morts."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p03_q7",
          "type": "mcq",
          "prompt": "Quel génocide a eu lieu le plus récemment parmi ceux-ci ?",
          "options": [
            "La Shoah (1941-1945)",
            "Srebrenica (1995)",
            "Les Arméniens (1915)",
            "Le Samudaripen (1941-1945)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le Rwanda (1994) le précède d'un an."
        }
      ]
    },
    {
      "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p04",
      "order": 4,
      "title": "La Shoah : les origines",
      "summary": "Une idéologie raciste qui désigne des « ennemis ».",
      "conceptExplanation": "La Shoah prend sa source dans l'idéologie nazie, profondément raciste et antisémite.\n\nLes nazis classent les êtres humains en « races » : ils présentent les Allemands comme une « race aryenne » supérieure. Ils désignent comme « races inférieures » ou « ennemis » :\n- les Juifs, cible principale ;\n- les Tziganes et les Slaves ;\n- d'autres groupes : les homosexuels, les handicapés physiques et mentaux.\n\nLes persécutions commencent dès l'arrivée d'Hitler au pouvoir en 1933 : exclusion des Juifs des emplois publics, boycott de leurs commerces, lois de Nuremberg (1935) qui leur retirent la citoyenneté, violences de la « Nuit de cristal » (novembre 1938).\n\nL'extermination systématique, appelée par les nazis la « solution finale », est décidée fin 1941 et mise en œuvre à partir de 1942 (conférence de Wannsee, janvier 1942).",
      "keyRule": "Origines de la Shoah : idéologie nazie raciste (« race aryenne »), persécutions dès 1933 (lois de Nuremberg, 1935), « solution finale » décidée fin 1941, appliquée dès 1942.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer une idéologie",
        "statement": "Pourquoi les nazis ont-ils persécuté les Juifs ?",
        "methodSteps": [
          "Leur idéologie raciste classait les humains en « races » supérieures et inférieures.",
          "Les Juifs étaient désignés, sans aucun fondement, comme les ennemis du peuple allemand."
        ],
        "conclusion": "La Shoah est née d'une idéologie raciste et antisémite."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'antisémitisme",
          "stepTheme": "L'antisémitisme",
          "stepBadge": "L'antisémitisme",
          "paragraphText": "L'antisémitisme est la haine et l'hostilité envers les Juifs.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p04_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'antisémitisme ?",
            "options": [
              "La haine envers les Juifs",
              "L'amour de la paix",
              "La défense des Tziganes",
              "Une alliance militaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il est au cœur de l'idéologie nazie."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une idéologie raciste",
          "stepTheme": "Une idéologie raciste",
          "stepBadge": "Une idéologie raciste",
          "paragraphText": "Les nazis prétendent que les Allemands sont une « race aryenne » supérieure aux autres.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p04_q2",
            "type": "mcq",
            "prompt": "Comment les nazis présentaient-ils les Allemands ?",
            "options": [
              "Comme un peuple égal aux autres",
              "Comme un peuple à exterminer",
              "Comme des Slaves",
              "Comme une « race aryenne » supérieure"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Cette idée raciste n'a aucun fondement scientifique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les victimes désignées",
          "stepTheme": "Les victimes désignées",
          "stepBadge": "Les victimes désignées",
          "paragraphText": "Outre les Juifs, les nazis persécutent les Tziganes, les Slaves, les homosexuels et les handicapés.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p04_q3",
            "type": "mcq",
            "prompt": "Quel groupe les nazis ont-ils aussi persécuté, en plus des Juifs ?",
            "options": [
              "Les « Aryens »",
              "Les dirigeants nazis",
              "Les Tziganes",
              "Les officiers allemands"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ainsi que les Slaves, les homosexuels et les handicapés."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les lois de Nuremberg",
          "stepTheme": "Les lois de Nuremberg",
          "stepBadge": "Les lois de Nuremberg",
          "paragraphText": "En 1935, les lois de Nuremberg retirent la citoyenneté allemande aux Juifs.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p04_q4",
            "type": "mcq",
            "prompt": "Que font les lois de Nuremberg de 1935 ?",
            "options": [
              "Elles créent l'ONU",
              "Elles jugent les nazis",
              "Elles retirent la citoyenneté aux Juifs",
              "Elles libèrent la Pologne"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ne pas confondre avec le procès de Nuremberg (1945-1946)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La « solution finale »",
          "stepTheme": "La « solution finale »",
          "stepBadge": "La « solution finale »",
          "paragraphText": "La « solution finale » est le nom donné par les nazis à l'extermination systématique des Juifs d'Europe.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p04_q5",
            "type": "mcq",
            "prompt": "Que désignait la « solution finale » ?",
            "options": [
              "L'extermination des Juifs d'Europe",
              "La fin de la guerre",
              "Un traité de paix",
              "Le partage de la Pologne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle est décidée fin 1941."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Quand commence l'extermination ?",
          "stepTheme": "Quand commence l'extermination ?",
          "stepBadge": "Quand commence l'extermination ?",
          "paragraphText": "La « solution finale » est décidée fin 1941 et mise en œuvre à partir de 1942.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p04_q6",
            "type": "mcq",
            "prompt": "À partir de quand l'extermination systématique des Juifs est-elle mise en œuvre ?",
            "options": [
              "À partir de 1918",
              "À partir de 1950",
              "À partir de 1929",
              "À partir de 1942"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les persécutions avaient commencé dès 1933."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Procès ou lois de Nuremberg ?",
          "stepTheme": "Procès ou lois de Nuremberg ?",
          "stepBadge": "Procès ou lois de Nuremberg ?",
          "paragraphText": "Les lois de Nuremberg (1935) persécutent les Juifs ; le procès de Nuremberg (1945-1946) juge les chefs nazis.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p04_q7",
            "type": "mcq",
            "prompt": "Que s'est-il passé à Nuremberg en 1945-1946 ?",
            "options": [
              "Le vote des lois antisémites",
              "Le procès des chefs nazis",
              "La signature du pacte d'Acier",
              "La création de la SDN"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Même ville, deux événements opposés."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p04_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'antisémitisme ?",
          "options": [
            "La haine envers les Juifs",
            "L'amour de la paix",
            "La défense des Tziganes",
            "Une alliance militaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il est au cœur de l'idéologie nazie."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p04_q2",
          "type": "mcq",
          "prompt": "Comment les nazis présentaient-ils les Allemands ?",
          "options": [
            "Comme un peuple égal aux autres",
            "Comme un peuple à exterminer",
            "Comme des Slaves",
            "Comme une « race aryenne » supérieure"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Cette idée raciste n'a aucun fondement scientifique."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p04_q3",
          "type": "mcq",
          "prompt": "Quel groupe les nazis ont-ils aussi persécuté, en plus des Juifs ?",
          "options": [
            "Les « Aryens »",
            "Les dirigeants nazis",
            "Les Tziganes",
            "Les officiers allemands"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ainsi que les Slaves, les homosexuels et les handicapés."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p04_q4",
          "type": "mcq",
          "prompt": "Que font les lois de Nuremberg de 1935 ?",
          "options": [
            "Elles créent l'ONU",
            "Elles jugent les nazis",
            "Elles retirent la citoyenneté aux Juifs",
            "Elles libèrent la Pologne"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ne pas confondre avec le procès de Nuremberg (1945-1946)."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p04_q5",
          "type": "mcq",
          "prompt": "Que désignait la « solution finale » ?",
          "options": [
            "L'extermination des Juifs d'Europe",
            "La fin de la guerre",
            "Un traité de paix",
            "Le partage de la Pologne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle est décidée fin 1941."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p04_q6",
          "type": "mcq",
          "prompt": "À partir de quand l'extermination systématique des Juifs est-elle mise en œuvre ?",
          "options": [
            "À partir de 1918",
            "À partir de 1950",
            "À partir de 1929",
            "À partir de 1942"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les persécutions avaient commencé dès 1933."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p04_q7",
          "type": "mcq",
          "prompt": "Que s'est-il passé à Nuremberg en 1945-1946 ?",
          "options": [
            "Le vote des lois antisémites",
            "Le procès des chefs nazis",
            "La signature du pacte d'Acier",
            "La création de la SDN"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Même ville, deux événements opposés."
        }
      ]
    },
    {
      "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p05",
      "order": 5,
      "title": "La Shoah : un crime organisé",
      "summary": "Rafles, camps et chambres à gaz.",
      "conceptExplanation": "La Shoah est un crime organisé à l'échelle de l'Europe :\n- des rafles arrêtent hommes, femmes et enfants, avec la complicité de certaines autorités ;\n- les victimes sont transportées dans des wagons plombés vers des camps ;\n- les camps de concentration (Buchenwald, Mauthausen, Flossenbürg…) : travail forcé, faim, coups, entassement, expériences médicales ;\n- les camps d'extermination, en Pologne occupée (Auschwitz-Birkenau, Chelmno, Majdanek, Treblinka…) : on y tue en masse dès l'arrivée.\n\nLes méthodes : d'abord l'asphyxie par les gaz d'échappement dans des camions, puis les chambres à gaz utilisant le Zyklon B.\n\nLe bilan est terrible : sur 8 300 000 Juifs vivant en Europe en 1939, 5 978 000 sont tués, soit 72 % de la communauté juive européenne ; jusqu'à 85 % en Pologne et presque 90 % dans les pays baltes.",
      "keyRule": "Crime organisé : rafles, déportation en wagons plombés, camps de concentration (travail forcé) et d'extermination (Auschwitz, chambres à gaz au Zyklon B). Bilan : environ 6 millions de Juifs tués, 72 %.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer un pourcentage",
        "statement": "Sur 8 300 000 Juifs en Europe en 1939, 5 978 000 sont tués. Quel pourcentage ?",
        "methodSteps": [
          "Pourcentage = 5 978 000 ÷ 8 300 000 × 100.",
          "Le résultat est d'environ 72 %."
        ],
        "conclusion": "Près des trois quarts des Juifs d'Europe ont été exterminés."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La rafle",
          "stepTheme": "La rafle",
          "stepBadge": "La rafle",
          "paragraphText": "Une rafle est une arrestation massive et brutale de personnes, souvent par surprise.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p05_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une rafle ?",
            "options": [
              "Une fête populaire",
              "Une arrestation massive et brutale",
              "Un vote à l'ONU",
              "Une libération de prisonniers"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les Juifs étaient raflés avant d'être déportés."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Concentration ou extermination ?",
          "stepTheme": "Concentration ou extermination ?",
          "stepBadge": "Concentration ou extermination ?",
          "paragraphText": "Dans les camps de concentration, on meurt de travail forcé et de faim ; dans les camps d'extermination, on tue en masse dès l'arrivée.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p05_q2",
            "type": "mcq",
            "prompt": "Quelle est la fonction principale d'un camp d'extermination ?",
            "options": [
              "Soigner les malades",
              "Former des soldats",
              "Loger les réfugiés",
              "Tuer en masse dès l'arrivée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Auschwitz-Birkenau en est le symbole."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Auschwitz",
          "stepTheme": "Auschwitz",
          "stepBadge": "Auschwitz",
          "paragraphText": "Auschwitz-Birkenau, en Pologne occupée, est le plus grand camp d'extermination nazi.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p05_q3",
            "type": "mcq",
            "prompt": "Dans quel pays se trouvait le camp d'Auschwitz ?",
            "options": [
              "En Pologne occupée",
              "En France",
              "Aux États-Unis",
              "Au Japon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cours les place « à l'ouest » par erreur : ils étaient à l'est, en Pologne."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le Zyklon B",
          "stepTheme": "Le Zyklon B",
          "stepBadge": "Le Zyklon B",
          "paragraphText": "Les nazis utilisent le Zyklon B, un gaz mortel, dans les chambres à gaz.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p05_q4",
            "type": "mcq",
            "prompt": "Quel gaz les nazis utilisaient-ils dans les chambres à gaz ?",
            "options": [
              "L'oxygène",
              "Le gaz carbonique des usines",
              "Le Zyklon B",
              "Le gaz de cuisine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le cours l'écrit « cyclone B »."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le bilan en pourcentage",
          "stepTheme": "Le bilan en pourcentage",
          "stepBadge": "Le bilan en pourcentage",
          "paragraphText": "Sur 8 300 000 Juifs en Europe en 1939, 5 978 000 périssent, soit environ 72 %.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p05_q5",
            "type": "mcq",
            "prompt": "Quel pourcentage des Juifs d'Europe a été exterminé ?",
            "options": [
              "Environ 7 %",
              "Environ 27 %",
              "100 %",
              "Environ 72 %"
            ],
            "correctAnswerIndex": 3,
            "explanation": "5 978 000 ÷ 8 300 000 ≈ 0,72."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La Pologne",
          "stepTheme": "La Pologne",
          "stepBadge": "La Pologne",
          "paragraphText": "En Pologne, environ 85 % de la communauté juive a été exterminée.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p05_q6",
            "type": "mcq",
            "prompt": "Quelle part des Juifs de Pologne a été exterminée environ ?",
            "options": [
              "8,5 %",
              "15 %",
              "85 %",
              "50 %"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Presque 90 % dans les pays baltes."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Des complicités",
          "stepTheme": "Des complicités",
          "stepBadge": "Des complicités",
          "paragraphText": "Les rafles ont souvent eu lieu avec la complicité d'autorités officielles des pays occupés.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p05_q7",
            "type": "mcq",
            "prompt": "Les nazis ont-ils agi seuls pour organiser les rafles ?",
            "options": [
              "Oui, totalement seuls",
              "Non, avec des complicités locales",
              "Non, avec l'aide de l'ONU",
              "Non, avec l'aide de la SDN"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D'où l'importance du devoir de mémoire dans chaque pays."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p05_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une rafle ?",
          "options": [
            "Une fête populaire",
            "Une arrestation massive et brutale",
            "Un vote à l'ONU",
            "Une libération de prisonniers"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les Juifs étaient raflés avant d'être déportés."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p05_q2",
          "type": "mcq",
          "prompt": "Quelle est la fonction principale d'un camp d'extermination ?",
          "options": [
            "Soigner les malades",
            "Former des soldats",
            "Loger les réfugiés",
            "Tuer en masse dès l'arrivée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Auschwitz-Birkenau en est le symbole."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p05_q3",
          "type": "mcq",
          "prompt": "Dans quel pays se trouvait le camp d'Auschwitz ?",
          "options": [
            "En Pologne occupée",
            "En France",
            "Aux États-Unis",
            "Au Japon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cours les place « à l'ouest » par erreur : ils étaient à l'est, en Pologne."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p05_q4",
          "type": "mcq",
          "prompt": "Quel gaz les nazis utilisaient-ils dans les chambres à gaz ?",
          "options": [
            "L'oxygène",
            "Le gaz carbonique des usines",
            "Le Zyklon B",
            "Le gaz de cuisine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le cours l'écrit « cyclone B »."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p05_q5",
          "type": "mcq",
          "prompt": "Quel pourcentage des Juifs d'Europe a été exterminé ?",
          "options": [
            "Environ 7 %",
            "Environ 27 %",
            "100 %",
            "Environ 72 %"
          ],
          "correctAnswerIndex": 3,
          "explanation": "5 978 000 ÷ 8 300 000 ≈ 0,72."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p05_q6",
          "type": "mcq",
          "prompt": "Quelle part des Juifs de Pologne a été exterminée environ ?",
          "options": [
            "8,5 %",
            "15 %",
            "85 %",
            "50 %"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Presque 90 % dans les pays baltes."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p05_q7",
          "type": "mcq",
          "prompt": "Les nazis ont-ils agi seuls pour organiser les rafles ?",
          "options": [
            "Oui, totalement seuls",
            "Non, avec des complicités locales",
            "Non, avec l'aide de l'ONU",
            "Non, avec l'aide de la SDN"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D'où l'importance du devoir de mémoire dans chaque pays."
        }
      ]
    },
    {
      "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p06",
      "order": 6,
      "title": "Juger et prévenir les génocides",
      "summary": "Conventions, tribunaux et sanctions.",
      "conceptExplanation": "1. Les moyens juridiques :\n- la Convention pour la prévention et la répression du crime de génocide (ONU, 9 décembre 1948) ;\n- la Déclaration universelle des droits de l'homme (DUDH), adoptée à Paris le 10 décembre 1948 ;\n- les Conventions de Genève (1949), base du droit international humanitaire (DIH), qui protège les civils et les prisonniers en temps de guerre.\n\n2. Les tribunaux :\n- le procès de Nuremberg (1945-1946) pour les chefs nazis ;\n- le Tribunal pénal international pour l'ex-Yougoslavie (TPIY), créé le 25 mai 1993 ;\n- le Tribunal pénal international pour le Rwanda (TPIR), créé le 8 novembre 1994 ;\n- la Cour pénale internationale (CPI), à La Haye, en fonction depuis le 1er juillet 2002, qui juge les génocides, crimes contre l'humanité et crimes de guerre.\n\n3. Les sanctions : peine de mort (à Nuremberg), prison à perpétuité, réparations. Exemples : le général serbe de Bosnie Ratko Mladic, condamné à perpétuité pour le génocide de Srebrenica ; l'ancien dictateur guatémaltèque Efraín Ríos Montt, condamné en 2013 à 80 ans de prison.\n\nPrévenir passe aussi par le devoir de mémoire et le refus des discours de haine.",
      "keyRule": "Prévenir et punir : Convention contre le génocide (9 déc. 1948), DUDH (10 déc. 1948), Conventions de Genève (1949) ; tribunaux : Nuremberg, TPIY (1993), TPIR (1994), CPI (2002).",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer le rôle de la CPI",
        "statement": "À quoi sert la Cour pénale internationale ?",
        "methodSteps": [
          "Elle juge les personnes accusées de génocide, de crimes contre l'humanité et de crimes de guerre.",
          "Elle montre que les auteurs de ces crimes ne doivent pas rester impunis."
        ],
        "conclusion": "La CPI lutte contre l'impunité et aide à prévenir de nouveaux crimes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La DUDH",
          "stepTheme": "La DUDH",
          "stepBadge": "La DUDH",
          "paragraphText": "La DUDH (Déclaration universelle des droits de l'homme) est adoptée par l'ONU à Paris le 10 décembre 1948.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p06_q1",
            "type": "mcq",
            "prompt": "Que signifie le sigle DUDH ?",
            "options": [
              "Déclaration universelle des droits de l'homme",
              "Direction unie du droit humanitaire",
              "Division universelle des droits humains",
              "Déclaration urgente des Hommes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle est adoptée le lendemain de la Convention contre le génocide."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le droit humanitaire",
          "stepTheme": "Le droit humanitaire",
          "stepBadge": "Le droit humanitaire",
          "paragraphText": "Les Conventions de Genève (1949) fondent le droit international humanitaire (DIH), qui protège civils et prisonniers en guerre.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p06_q2",
            "type": "mcq",
            "prompt": "Que protège le droit international humanitaire ?",
            "options": [
              "Les civils et les prisonniers en temps de guerre",
              "Les entreprises multinationales",
              "Les frontières douanières",
              "Les bourses de valeurs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il est fondé sur les Conventions de Genève de 1949."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La CPI",
          "stepTheme": "La CPI",
          "stepBadge": "La CPI",
          "paragraphText": "La Cour pénale internationale (CPI), à La Haye, fonctionne depuis le 1er juillet 2002 ; elle juge les génocides et les crimes contre l'humanité.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p06_q3",
            "type": "mcq",
            "prompt": "Où siège la Cour pénale internationale ?",
            "options": [
              "À Abidjan",
              "À La Haye",
              "À New York",
              "À Berlin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle fonctionne depuis le 1er juillet 2002."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le TPIR",
          "stepTheme": "Le TPIR",
          "stepBadge": "Le TPIR",
          "paragraphText": "Le Tribunal pénal international pour le Rwanda (TPIR), créé le 8 novembre 1994, juge les auteurs du génocide des Tutsi.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p06_q4",
            "type": "mcq",
            "prompt": "Quel tribunal juge les auteurs du génocide des Tutsi ?",
            "options": [
              "Le TPIY",
              "Le procès de Nuremberg",
              "Le TPIR",
              "La SDN"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le TPIY juge les crimes commis en ex-Yougoslavie."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Ratko Mladic",
          "stepTheme": "Ratko Mladic",
          "stepBadge": "Ratko Mladic",
          "paragraphText": "Le général Ratko Mladic a été condamné à la prison à perpétuité pour le génocide de Srebrenica.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p06_q5",
            "type": "mcq",
            "prompt": "Pour quel crime Ratko Mladic a-t-il été condamné à perpétuité ?",
            "options": [
              "Le génocide des Arméniens",
              "La Shoah",
              "Le génocide au Rwanda",
              "Le génocide de Srebrenica"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il a été jugé par le TPIY puis le mécanisme qui lui a succédé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les sanctions",
          "stepTheme": "Les sanctions",
          "stepBadge": "Les sanctions",
          "paragraphText": "Les auteurs de génocide sont punis par la prison (jusqu'à la perpétuité) et doivent des réparations aux victimes ; à Nuremberg, il y eut aussi des condamnations à mort.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p06_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces sanctions frappe les auteurs de génocide ?",
            "options": [
              "Une simple amende de stationnement",
              "Une médaille",
              "La prison à perpétuité",
              "Aucune sanction"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le génocide est le crime le plus grave."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "DUDH ou Convention ?",
          "stepTheme": "DUDH ou Convention ?",
          "stepBadge": "DUDH ou Convention ?",
          "paragraphText": "La Convention contre le génocide (9 décembre 1948) et la DUDH (10 décembre 1948) sont deux textes différents, adoptés à un jour d'intervalle.",
          "exercise": {
            "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p06_q7",
            "type": "mcq",
            "prompt": "Quel texte de l'ONU vise spécialement à prévenir et punir le génocide ?",
            "options": [
              "La DUDH du 10 décembre 1948",
              "Le traité de Versailles",
              "La Charte de la SDN",
              "La Convention du 9 décembre 1948"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le cours les mélange : la DUDH proclame les droits, la Convention vise le génocide."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p06_q1",
          "type": "mcq",
          "prompt": "Que signifie le sigle DUDH ?",
          "options": [
            "Déclaration universelle des droits de l'homme",
            "Direction unie du droit humanitaire",
            "Division universelle des droits humains",
            "Déclaration urgente des Hommes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle est adoptée le lendemain de la Convention contre le génocide."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p06_q2",
          "type": "mcq",
          "prompt": "Que protège le droit international humanitaire ?",
          "options": [
            "Les civils et les prisonniers en temps de guerre",
            "Les entreprises multinationales",
            "Les frontières douanières",
            "Les bourses de valeurs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il est fondé sur les Conventions de Genève de 1949."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p06_q3",
          "type": "mcq",
          "prompt": "Où siège la Cour pénale internationale ?",
          "options": [
            "À Abidjan",
            "À La Haye",
            "À New York",
            "À Berlin"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle fonctionne depuis le 1er juillet 2002."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p06_q4",
          "type": "mcq",
          "prompt": "Quel tribunal juge les auteurs du génocide des Tutsi ?",
          "options": [
            "Le TPIY",
            "Le procès de Nuremberg",
            "Le TPIR",
            "La SDN"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le TPIY juge les crimes commis en ex-Yougoslavie."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p06_q5",
          "type": "mcq",
          "prompt": "Pour quel crime Ratko Mladic a-t-il été condamné à perpétuité ?",
          "options": [
            "Le génocide des Arméniens",
            "La Shoah",
            "Le génocide au Rwanda",
            "Le génocide de Srebrenica"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il a été jugé par le TPIY puis le mécanisme qui lui a succédé."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p06_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces sanctions frappe les auteurs de génocide ?",
          "options": [
            "Une simple amende de stationnement",
            "Une médaille",
            "La prison à perpétuité",
            "Aucune sanction"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le génocide est le crime le plus grave."
        },
        {
          "id": "premiere_a1_hg_histoire_t3_l03_violences_masse_genocides_p06_q7",
          "type": "mcq",
          "prompt": "Quel texte de l'ONU vise spécialement à prévenir et punir le génocide ?",
          "options": [
            "La DUDH du 10 décembre 1948",
            "Le traité de Versailles",
            "La Charte de la SDN",
            "La Convention du 9 décembre 1948"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le cours les mélange : la DUDH proclame les droits, la Convention vise le génocide."
        }
      ]
    }
  ]
};
