import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 2nde H4- La préhistoire en Afrique et dans le reste du monde.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const HIST_2DE_T2_L01_PREHISTOIRE: CurriculumChapter = {
  "id": "seconde_a_hg_histoire_t2_l01_prehistoire",
  "subjectId": "histoire_geo",
  "gradeLevel": "seconde_a",
  "alsoForGrades": [
    "seconde_c"
  ],
  "order": 4,
  "title": "Thème 2, leçon 1 : La préhistoire en Afrique et dans le reste du monde",
  "summary": "Les grandes périodes de la préhistoire, l'évolution de l'espèce humaine et l'Afrique, berceau de l'humanité.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "2nde H4- La préhistoire en Afrique et dans le reste du monde.pdf",
  "points": [
    {
      "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p01",
      "order": 1,
      "title": "Qu'est-ce que la préhistoire ?",
      "summary": "La période qui précède l'invention de l'écriture et les sciences qui l'étudient.",
      "conceptExplanation": "La préhistoire est la très longue période qui précède l'histoire. Elle commence avec les premiers représentants de la lignée humaine, il y a environ 7 millions d'années, et s'achève avec l'invention de l'écriture, vers 3 000 ans avant J.-C. (en Mésopotamie et en Égypte). Elle retrace les origines lointaines de l'Homme.\n\nComme il n'existe aucun écrit de cette époque, on la connaît grâce à :\n- l'archéologie, qui étudie les vestiges (outils, ossements, foyers, peintures) mis au jour par les fouilles ;\n- la paléontologie, qui étudie les fossiles.\n\nElle se divise en deux grandes périodes : le paléolithique (âge de la pierre taillée) et le néolithique (âge de la pierre polie), séparées par une courte période de transition, le mésolithique.",
      "keyRule": "Préhistoire : d'environ 7 millions d'années à l'invention de l'écriture (vers 3 000 av. J.-C.) ; connue par l'archéologie et la paléontologie.",
      "formulas": [],
      "workedExample": {
        "title": "Préhistoire ou histoire ?",
        "statement": "Un outil en pierre de 50 000 ans relève-t-il de la préhistoire ?",
        "methodSteps": [
          "L'écriture apparaît vers 3 000 av. J.-C., il y a environ 5 000 ans.",
          "50 000 ans, c'est bien avant l'écriture."
        ],
        "conclusion": "Oui : cet outil appartient à la préhistoire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Avant l'histoire",
          "stepTheme": "Avant l'histoire",
          "stepBadge": "Avant l'histoire",
          "paragraphText": "La préhistoire est la très longue période qui précède l'histoire.\nElle s'achève avec l'invention de l'écriture, vers 3 000 ans avant J.-C.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p01_q1",
            "type": "mcq",
            "prompt": "Quel événement marque la fin de la préhistoire ?",
            "options": [
              "La découverte du feu",
              "L'apparition de l'agriculture",
              "L'invention de l'écriture",
              "L'invention de la roue"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Avec l'écriture commence l'histoire ; avant, c'est la préhistoire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une très longue période",
          "stepTheme": "Une très longue période",
          "stepBadge": "Une très longue période",
          "paragraphText": "La préhistoire commence avec les premiers représentants de la lignée humaine, il y a environ 7 millions d'années, et se termine vers 3 000 ans avant J.-C.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p01_q2",
            "type": "mcq",
            "prompt": "Vers quelle date l'écriture apparaît-elle ?",
            "options": [
              "Vers 3 000 ans avant J.-C.",
              "Vers 300 ans après J.-C.",
              "Vers 7 millions d'années avant notre ère",
              "Vers l'an 1 000 après J.-C."
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'écriture naît vers 3 000 av. J.-C., en Mésopotamie et en Égypte."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Comment la connaître ?",
          "stepTheme": "Comment la connaître ?",
          "stepBadge": "Comment la connaître ?",
          "paragraphText": "Sans écrits, on connaît la préhistoire grâce à :\n• l'archéologie : étude des vestiges mis au jour par les fouilles ;\n• la paléontologie : étude des fossiles.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p01_q3",
            "type": "mcq",
            "prompt": "Grâce à quelles sciences connaît-on la préhistoire ?",
            "options": [
              "La linguistique et la littérature",
              "L'astronomie et la météorologie",
              "L'économie et la démographie",
              "L'archéologie et la paléontologie"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sans écrits, ce sont les vestiges et les fossiles qui renseignent sur la préhistoire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Deux grandes périodes",
          "stepTheme": "Deux grandes périodes",
          "stepBadge": "Deux grandes périodes",
          "paragraphText": "La préhistoire se divise en deux grandes périodes :\n• le paléolithique : l'âge de la pierre taillée ;\n• le néolithique : l'âge de la pierre polie.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p01_q4",
            "type": "mcq",
            "prompt": "Quelles sont les deux grandes périodes de la préhistoire ?",
            "options": [
              "L'Antiquité et le Moyen Âge",
              "Le paléolithique et le néolithique",
              "La Renaissance et les Temps modernes",
              "L'âge du fer et l'âge du bronze"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Paléolithique (pierre taillée) puis néolithique (pierre polie)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le mésolithique",
          "stepTheme": "Le mésolithique",
          "stepBadge": "Le mésolithique",
          "paragraphText": "Entre les deux, une courte période de transition, le mésolithique (environ -10 000 à -8 000 ans), voit apparaître les premiers changements qui s'épanouiront au néolithique.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p01_q5",
            "type": "mcq",
            "prompt": "Comment appelle-t-on la période de transition entre le paléolithique et le néolithique ?",
            "options": [
              "Le néolithique ancien",
              "Le mésolithique",
              "L'âge du bronze",
              "L'Antiquité"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Méso = milieu : le mésolithique est entre les deux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les fouilles",
          "stepTheme": "Les fouilles",
          "stepBadge": "Les fouilles",
          "paragraphText": "Les archéologues mettent au jour, par des fouilles, des outils de pierre, des ossements, des foyers et des peintures rupestres.\nCes vestiges sont ensuite datés, par exemple au carbone 14.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p01_q6",
            "type": "mcq",
            "prompt": "Lequel de ces objets est un vestige préhistorique étudié par l'archéologie ?",
            "options": [
              "Un manuscrit sur papier",
              "Un enregistrement radio",
              "Un journal imprimé",
              "Un outil en pierre taillée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les outils de pierre sont les principaux vestiges de la préhistoire."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Pas d'écrits",
          "stepTheme": "Pas d'écrits",
          "stepBadge": "Pas d'écrits",
          "paragraphText": "Attention : la préhistoire n'a laissé aucun texte écrit.\nLes peintures sur les parois des grottes ne sont pas de l'écriture : ce sont des vestiges archéologiques.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p01_q7",
            "type": "mcq",
            "prompt": "Pourquoi ne peut-on pas utiliser de sources écrites pour la préhistoire ?",
            "options": [
              "Parce que l'écriture n'existait pas encore",
              "Parce que les écrits préhistoriques ont tous été traduits",
              "Parce que les historiens refusent de les lire",
              "Parce que les écrits de cette époque sont interdits"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, la préhistoire est l'époque d'avant l'écriture."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p01_q1",
          "type": "mcq",
          "prompt": "Quel événement marque la fin de la préhistoire ?",
          "options": [
            "La découverte du feu",
            "L'apparition de l'agriculture",
            "L'invention de l'écriture",
            "L'invention de la roue"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Avec l'écriture commence l'histoire ; avant, c'est la préhistoire."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p01_q2",
          "type": "mcq",
          "prompt": "Vers quelle date l'écriture apparaît-elle ?",
          "options": [
            "Vers 3 000 ans avant J.-C.",
            "Vers 300 ans après J.-C.",
            "Vers 7 millions d'années avant notre ère",
            "Vers l'an 1 000 après J.-C."
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'écriture naît vers 3 000 av. J.-C., en Mésopotamie et en Égypte."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p01_q3",
          "type": "mcq",
          "prompt": "Grâce à quelles sciences connaît-on la préhistoire ?",
          "options": [
            "La linguistique et la littérature",
            "L'astronomie et la météorologie",
            "L'économie et la démographie",
            "L'archéologie et la paléontologie"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sans écrits, ce sont les vestiges et les fossiles qui renseignent sur la préhistoire."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p01_q4",
          "type": "mcq",
          "prompt": "Quelles sont les deux grandes périodes de la préhistoire ?",
          "options": [
            "L'Antiquité et le Moyen Âge",
            "Le paléolithique et le néolithique",
            "La Renaissance et les Temps modernes",
            "L'âge du fer et l'âge du bronze"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Paléolithique (pierre taillée) puis néolithique (pierre polie)."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p01_q5",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la période de transition entre le paléolithique et le néolithique ?",
          "options": [
            "Le néolithique ancien",
            "Le mésolithique",
            "L'âge du bronze",
            "L'Antiquité"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Méso = milieu : le mésolithique est entre les deux."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p01_q6",
          "type": "mcq",
          "prompt": "Lequel de ces objets est un vestige préhistorique étudié par l'archéologie ?",
          "options": [
            "Un manuscrit sur papier",
            "Un enregistrement radio",
            "Un journal imprimé",
            "Un outil en pierre taillée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les outils de pierre sont les principaux vestiges de la préhistoire."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p01_q7",
          "type": "mcq",
          "prompt": "Pourquoi ne peut-on pas utiliser de sources écrites pour la préhistoire ?",
          "options": [
            "Parce que l'écriture n'existait pas encore",
            "Parce que les écrits préhistoriques ont tous été traduits",
            "Parce que les historiens refusent de les lire",
            "Parce que les écrits de cette époque sont interdits"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, la préhistoire est l'époque d'avant l'écriture."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p02",
      "order": 2,
      "title": "Le paléolithique, l'âge de la pierre taillée",
      "summary": "Outils taillés, nomadisme, chasse et cueillette, maîtrise du feu.",
      "conceptExplanation": "Le mot paléolithique vient du grec « palaios » (ancien) et « lithos » (pierre) : c'est l'âge de la pierre ancienne, ou pierre taillée. C'est la première et la plus longue période de la préhistoire (jusque vers -10 000 ans).\n\nIl se divise en trois étapes :\n- le paléolithique inférieur : galets aménagés et bifaces ;\n- le paléolithique moyen : outils plus élaborés (pointes, racloirs) ;\n- le paléolithique supérieur : armes efficaces (flèches, sagaies, harpons), outils en os, et les premières œuvres d'art.\n\nLes outils sont en pierre taillée, lourds et peu perfectionnés. Les hommes vivent de la chasse, de la pêche et de la cueillette. Ils sont nomades : ils se déplacent pour trouver leur nourriture et s'abritent dans des grottes ou sous des abris de roche. La maîtrise du feu change leur vie : se chauffer, s'éclairer, éloigner les bêtes sauvages, cuire les aliments.",
      "keyRule": "Paléolithique = pierre taillée ; chasse, pêche, cueillette ; nomadisme ; grottes ; maîtrise du feu.",
      "formulas": [],
      "workedExample": {
        "title": "Pourquoi être nomade ?",
        "statement": "Pourquoi les hommes du paléolithique se déplacent-ils sans cesse ?",
        "methodSteps": [
          "Ils ne cultivent pas et n'élèvent pas d'animaux.",
          "Ils vivent de ce que la nature offre : gibier, poissons, fruits.",
          "Quand les ressources s'épuisent, ils partent ailleurs."
        ],
        "conclusion": "Chasseurs-cueilleurs, ils doivent suivre leurs ressources : ils sont nomades."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le sens du mot",
          "stepTheme": "Le sens du mot",
          "stepBadge": "Le sens du mot",
          "paragraphText": "Paléolithique vient du grec :\n• « palaios » : ancien ;\n• « lithos » : pierre.\nC'est l'âge de la pierre ancienne, ou pierre taillée.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p02_q1",
            "type": "mcq",
            "prompt": "Que signifie le mot « paléolithique » ?",
            "options": [
              "Pierre nouvelle",
              "Pierre précieuse",
              "Pierre ancienne",
              "Pierre polie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Palaios = ancien, lithos = pierre."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Trois étapes",
          "stepTheme": "Trois étapes",
          "stepBadge": "Trois étapes",
          "paragraphText": "Le paléolithique se divise en trois étapes :\n• inférieur : galets aménagés et bifaces ;\n• moyen : pointes et racloirs ;\n• supérieur : flèches, sagaies, harpons, outils en os.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p02_q2",
            "type": "mcq",
            "prompt": "Quel outil caractérise le paléolithique inférieur ?",
            "options": [
              "Le harpon en os",
              "La hache polie",
              "La faucille",
              "Le biface"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le biface et le galet aménagé sont les outils les plus anciens."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Des outils taillés",
          "stepTheme": "Des outils taillés",
          "stepBadge": "Des outils taillés",
          "paragraphText": "Les outils du paléolithique sont en pierre taillée : grossiers, lourds et peu perfectionnés.\nOn obtient un tranchant en frappant une pierre avec une autre.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p02_q3",
            "type": "mcq",
            "prompt": "Comment sont les outils du paléolithique ?",
            "options": [
              "En pierre polie, légers et très tranchants",
              "En fer forgé, solides et durables",
              "En pierre taillée, lourds et peu perfectionnés",
              "En bronze, décorés et brillants"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Au paléolithique, la pierre est taillée par éclats : les outils restent grossiers."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Des chasseurs-cueilleurs",
          "stepTheme": "Des chasseurs-cueilleurs",
          "stepBadge": "Des chasseurs-cueilleurs",
          "paragraphText": "Les hommes du paléolithique vivent de la chasse, de la pêche et de la cueillette.\nIls prélèvent ce que la nature leur offre, sans cultiver ni élever.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p02_q4",
            "type": "mcq",
            "prompt": "De quoi vivent les hommes du paléolithique ?",
            "options": [
              "De l'agriculture et de l'élevage",
              "De la chasse, de la pêche et de la cueillette",
              "Du commerce et de l'artisanat",
              "De l'industrie et des mines"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont des chasseurs-cueilleurs : ils ne produisent pas leur nourriture."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Des nomades",
          "stepTheme": "Des nomades",
          "stepBadge": "Des nomades",
          "paragraphText": "Les hommes du paléolithique sont nomades : ils se déplacent sans cesse pour trouver leur nourriture.\nIls s'abritent dans des grottes ou sous des abris de roche.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p02_q5",
            "type": "mcq",
            "prompt": "Que signifie « être nomade » ?",
            "options": [
              "Se déplacer sans cesse pour trouver sa nourriture",
              "Vivre toute sa vie dans le même village",
              "Cultiver la terre au même endroit",
              "Construire des maisons en pierre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le nomade n'a pas d'habitat fixe : il suit les ressources."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La maîtrise du feu",
          "stepTheme": "La maîtrise du feu",
          "stepBadge": "La maîtrise du feu",
          "paragraphText": "La maîtrise du feu améliore la vie des hommes :\n• se chauffer et s'éclairer ;\n• éloigner les bêtes sauvages ;\n• cuire les aliments.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p02_q6",
            "type": "mcq",
            "prompt": "Lequel de ces avantages la maîtrise du feu apporte-t-elle ?",
            "options": [
              "Cuire les aliments et éloigner les bêtes sauvages",
              "Cultiver le mil et le sorgho",
              "Fabriquer des outils en fer",
              "Écrire sur les parois des grottes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le feu chauffe, éclaire, protège et permet la cuisson."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le paléolithique supérieur",
          "stepTheme": "Le paléolithique supérieur",
          "stepBadge": "Le paléolithique supérieur",
          "paragraphText": "Au paléolithique supérieur, les hommes fabriquent des armes plus efficaces (flèches, sagaies, harpons), des outils en os et réalisent les premières œuvres d'art (peintures et gravures rupestres).",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p02_q7",
            "type": "mcq",
            "prompt": "Quelle arme apparaît au paléolithique supérieur ?",
            "options": [
              "Le galet aménagé",
              "Le harpon",
              "Le biface",
              "Le fusil"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Harpons, sagaies et flèches marquent le paléolithique supérieur."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p02_q1",
          "type": "mcq",
          "prompt": "Que signifie le mot « paléolithique » ?",
          "options": [
            "Pierre nouvelle",
            "Pierre précieuse",
            "Pierre ancienne",
            "Pierre polie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Palaios = ancien, lithos = pierre."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p02_q2",
          "type": "mcq",
          "prompt": "Quel outil caractérise le paléolithique inférieur ?",
          "options": [
            "Le harpon en os",
            "La hache polie",
            "La faucille",
            "Le biface"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le biface et le galet aménagé sont les outils les plus anciens."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p02_q3",
          "type": "mcq",
          "prompt": "Comment sont les outils du paléolithique ?",
          "options": [
            "En pierre polie, légers et très tranchants",
            "En fer forgé, solides et durables",
            "En pierre taillée, lourds et peu perfectionnés",
            "En bronze, décorés et brillants"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Au paléolithique, la pierre est taillée par éclats : les outils restent grossiers."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p02_q4",
          "type": "mcq",
          "prompt": "De quoi vivent les hommes du paléolithique ?",
          "options": [
            "De l'agriculture et de l'élevage",
            "De la chasse, de la pêche et de la cueillette",
            "Du commerce et de l'artisanat",
            "De l'industrie et des mines"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont des chasseurs-cueilleurs : ils ne produisent pas leur nourriture."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p02_q5",
          "type": "mcq",
          "prompt": "Que signifie « être nomade » ?",
          "options": [
            "Se déplacer sans cesse pour trouver sa nourriture",
            "Vivre toute sa vie dans le même village",
            "Cultiver la terre au même endroit",
            "Construire des maisons en pierre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le nomade n'a pas d'habitat fixe : il suit les ressources."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p02_q6",
          "type": "mcq",
          "prompt": "Lequel de ces avantages la maîtrise du feu apporte-t-elle ?",
          "options": [
            "Cuire les aliments et éloigner les bêtes sauvages",
            "Cultiver le mil et le sorgho",
            "Fabriquer des outils en fer",
            "Écrire sur les parois des grottes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le feu chauffe, éclaire, protège et permet la cuisson."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p02_q7",
          "type": "mcq",
          "prompt": "Quelle arme apparaît au paléolithique supérieur ?",
          "options": [
            "Le galet aménagé",
            "Le harpon",
            "Le biface",
            "Le fusil"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Harpons, sagaies et flèches marquent le paléolithique supérieur."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p03",
      "order": 3,
      "title": "Le néolithique, une révolution",
      "summary": "Pierre polie, agriculture, élevage, poterie et sédentarisation.",
      "conceptExplanation": "Le néolithique (du grec « neos », nouveau, et « lithos », pierre) est l'âge de la pierre nouvelle, ou pierre polie. C'est la dernière période de la préhistoire : il commence vers -8 000 ans et dure jusqu'à l'invention de l'écriture, et même plus tard dans certaines régions (en Côte d'Ivoire, il se prolonge jusque vers -1 500 ans).\n\nC'est une véritable révolution :\n- les outils sont polis, plus légers, plus tranchants et plus perfectionnés : haches polies, faucilles, meules, lames de silex, racloirs, perçoirs ;\n- l'homme devient producteur : il pratique l'agriculture et l'élevage, qui lui assurent des réserves plus sûres que la chasse et la cueillette ;\n- la céramique (poterie) permet de conserver et de cuire les aliments ;\n- l'homme se sédentarise : il construit des villages et apprend à vivre en société.",
      "keyRule": "Néolithique = pierre polie ; l'homme devient producteur (agriculture, élevage) ; poterie ; sédentarisation dans des villages.",
      "formulas": [],
      "workedExample": {
        "title": "Pourquoi se sédentariser ?",
        "statement": "Pourquoi l'agriculture pousse-t-elle les hommes à vivre au même endroit ?",
        "methodSteps": [
          "Il faut semer, surveiller, puis récolter : cela prend des mois.",
          "Les champs et les réserves doivent être gardés.",
          "On construit donc des maisons près des champs."
        ],
        "conclusion": "L'agriculture fixe les hommes : ils deviennent sédentaires."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le sens du mot",
          "stepTheme": "Le sens du mot",
          "stepBadge": "Le sens du mot",
          "paragraphText": "Néolithique vient du grec :\n• « neos » : nouveau ;\n• « lithos » : pierre.\nC'est l'âge de la pierre nouvelle, ou pierre polie.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p03_q1",
            "type": "mcq",
            "prompt": "Comment appelle-t-on aussi le néolithique ?",
            "options": [
              "L'âge de la pierre taillée",
              "L'âge du fer",
              "L'âge de la pierre polie",
              "L'âge du bronze"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Au néolithique, la pierre est polie, et non plus seulement taillée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Des outils polis",
          "stepTheme": "Des outils polis",
          "stepBadge": "Des outils polis",
          "paragraphText": "Les outils du néolithique sont polis : plus légers, plus tranchants, plus perfectionnés.\nExemples : haches polies, faucilles, meules, lames de silex.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p03_q2",
            "type": "mcq",
            "prompt": "Lequel de ces outils est typique du néolithique ?",
            "options": [
              "Le galet aménagé",
              "Le biface grossier",
              "Le marteau en fer",
              "La hache polie"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La hache polie est l'outil emblématique du néolithique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'homme devient producteur",
          "stepTheme": "L'homme devient producteur",
          "stepBadge": "L'homme devient producteur",
          "paragraphText": "Au néolithique, l'homme devient producteur : il pratique l'agriculture et l'élevage.\nIl s'assure ainsi des réserves de nourriture plus sûres que celles de la chasse et de la cueillette.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p03_q3",
            "type": "mcq",
            "prompt": "Quel grand changement le néolithique apporte-t-il dans l'alimentation ?",
            "options": [
              "L'homme abandonne totalement la cuisson des aliments",
              "L'homme ne mange plus que les produits de la chasse",
              "L'homme produit sa nourriture grâce à l'agriculture et à l'élevage",
              "L'homme achète sa nourriture dans des magasins"
            ],
            "correctAnswerIndex": 2,
            "explanation": "De prédateur, l'homme devient producteur : c'est la révolution néolithique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La sédentarisation",
          "stepTheme": "La sédentarisation",
          "stepBadge": "La sédentarisation",
          "paragraphText": "Avec l'agriculture et l'élevage, l'homme se sédentarise : il s'installe durablement au même endroit, construit des villages et apprend à vivre en société.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p03_q4",
            "type": "mcq",
            "prompt": "Que signifie « se sédentariser » ?",
            "options": [
              "Se déplacer sans cesse pour chasser",
              "Vivre seul dans la forêt",
              "Partir explorer d'autres continents",
              "S'installer durablement au même endroit"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le sédentaire a un habitat fixe, à l'opposé du nomade."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La céramique",
          "stepTheme": "La céramique",
          "stepBadge": "La céramique",
          "paragraphText": "Le néolithique voit le développement de la céramique (poterie) : des récipients pour conserver les réserves et cuire les aliments.\nL'art se développe aussi, notamment la peinture des grottes.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p03_q5",
            "type": "mcq",
            "prompt": "À quoi servent les poteries du néolithique ?",
            "options": [
              "À conserver les réserves et à cuire les aliments",
              "À tailler les pierres pour en faire des outils",
              "À chasser les gros animaux",
              "À allumer le feu"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les récipients en terre cuite permettent de stocker et de cuire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un néolithique plus long en Afrique",
          "stepTheme": "Un néolithique plus long en Afrique",
          "stepBadge": "Un néolithique plus long en Afrique",
          "paragraphText": "Le néolithique commence vers -8 000 ans, mais il se prolonge plus tard dans certaines régions.\nEn Côte d'Ivoire, il dure jusque vers -1 500 ans.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p03_q6",
            "type": "mcq",
            "prompt": "Le néolithique commence vers −8 000 ans, mais en Côte d'Ivoire il dure jusque vers −1 500 ans. Que montre cet exemple ?",
            "options": [
              "Que la préhistoire n'a jamais existé en Côte d'Ivoire",
              "Que les périodes de la préhistoire ne finissent pas partout à la même date",
              "Que l'écriture est née en Côte d'Ivoire",
              "Que le néolithique a commencé en Côte d'Ivoire avant tous les autres pays"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les changements se diffusent à des rythmes différents selon les régions."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Comparer les deux périodes",
          "stepTheme": "Comparer les deux périodes",
          "stepBadge": "Comparer les deux périodes",
          "paragraphText": "• Paléolithique : pierre taillée, chasse-cueillette, nomadisme.\n• Néolithique : pierre polie, agriculture-élevage, sédentarisation, poterie.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p03_q7",
            "type": "mcq",
            "prompt": "Lequel de ces éléments distingue le néolithique du paléolithique ?",
            "options": [
              "La chasse et la cueillette",
              "La sédentarisation dans des villages",
              "La vie dans les grottes",
              "Le nomadisme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La sédentarisation est la grande nouveauté du néolithique."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p03_q1",
          "type": "mcq",
          "prompt": "Comment appelle-t-on aussi le néolithique ?",
          "options": [
            "L'âge de la pierre taillée",
            "L'âge du fer",
            "L'âge de la pierre polie",
            "L'âge du bronze"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Au néolithique, la pierre est polie, et non plus seulement taillée."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p03_q2",
          "type": "mcq",
          "prompt": "Lequel de ces outils est typique du néolithique ?",
          "options": [
            "Le galet aménagé",
            "Le biface grossier",
            "Le marteau en fer",
            "La hache polie"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La hache polie est l'outil emblématique du néolithique."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p03_q3",
          "type": "mcq",
          "prompt": "Quel grand changement le néolithique apporte-t-il dans l'alimentation ?",
          "options": [
            "L'homme abandonne totalement la cuisson des aliments",
            "L'homme ne mange plus que les produits de la chasse",
            "L'homme produit sa nourriture grâce à l'agriculture et à l'élevage",
            "L'homme achète sa nourriture dans des magasins"
          ],
          "correctAnswerIndex": 2,
          "explanation": "De prédateur, l'homme devient producteur : c'est la révolution néolithique."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p03_q4",
          "type": "mcq",
          "prompt": "Que signifie « se sédentariser » ?",
          "options": [
            "Se déplacer sans cesse pour chasser",
            "Vivre seul dans la forêt",
            "Partir explorer d'autres continents",
            "S'installer durablement au même endroit"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le sédentaire a un habitat fixe, à l'opposé du nomade."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p03_q5",
          "type": "mcq",
          "prompt": "À quoi servent les poteries du néolithique ?",
          "options": [
            "À conserver les réserves et à cuire les aliments",
            "À tailler les pierres pour en faire des outils",
            "À chasser les gros animaux",
            "À allumer le feu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les récipients en terre cuite permettent de stocker et de cuire."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p03_q6",
          "type": "mcq",
          "prompt": "Le néolithique commence vers −8 000 ans, mais en Côte d'Ivoire il dure jusque vers −1 500 ans. Que montre cet exemple ?",
          "options": [
            "Que la préhistoire n'a jamais existé en Côte d'Ivoire",
            "Que les périodes de la préhistoire ne finissent pas partout à la même date",
            "Que l'écriture est née en Côte d'Ivoire",
            "Que le néolithique a commencé en Côte d'Ivoire avant tous les autres pays"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les changements se diffusent à des rythmes différents selon les régions."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p03_q7",
          "type": "mcq",
          "prompt": "Lequel de ces éléments distingue le néolithique du paléolithique ?",
          "options": [
            "La chasse et la cueillette",
            "La sédentarisation dans des villages",
            "La vie dans les grottes",
            "Le nomadisme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La sédentarisation est la grande nouveauté du néolithique."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p04",
      "order": 4,
      "title": "Les premiers hominidés",
      "summary": "L'hominisation : la bipédie, l'australopithèque et Homo habilis.",
      "conceptExplanation": "L'hominisation est le long processus d'évolution qui a conduit à l'homme actuel. Elle commence quand des primates se mettent à marcher sur deux pieds : ils deviennent bipèdes. L'Homme ne descend pas des singes actuels : hommes et grands singes ont des ancêtres communs.\n\n- Le plus ancien représentant connu de la lignée humaine est Toumaï, découvert au Tchad (environ 7 millions d'années).\n- L'australopithèque (« singe du Sud ») apparaît il y a environ 4 millions d'années en Afrique de l'Est et du Sud. Il est de petite taille, a un cerveau d'environ 400 à 500 cm³, marche debout et vit en groupe. La célèbre « Lucy », découverte en Éthiopie en 1974, est une australopithèque (environ 3,2 millions d'années).\n- Homo habilis, « l'homme habile », apparaît en Afrique de l'Est il y a près de 3 millions d'années (environ 2,5 millions d'années). Son cerveau mesure environ 600 cm³. Il fabrique les premiers outils de pierre taillée (galets aménagés). Le site d'Olduvai, en Tanzanie, est célèbre pour ces découvertes.",
      "keyRule": "Hominisation = évolution vers l'homme (bipédie, cerveau plus gros) ; Toumaï (Tchad, 7 Ma), australopithèque (Lucy, 3,2 Ma), Homo habilis (premiers outils).",
      "formulas": [],
      "workedExample": {
        "title": "Ranger les hominidés",
        "statement": "Range dans l'ordre d'apparition : Homo habilis, Toumaï, australopithèque.",
        "methodSteps": [
          "Toumaï : environ 7 millions d'années.",
          "Australopithèque : environ 4 millions d'années.",
          "Homo habilis : environ 2,5 à 3 millions d'années."
        ],
        "conclusion": "Toumaï, puis l'australopithèque, puis Homo habilis."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'hominisation",
          "stepTheme": "L'hominisation",
          "stepBadge": "L'hominisation",
          "paragraphText": "L'hominisation est le long processus d'évolution qui a conduit à l'homme actuel :\nmarche sur deux pieds (bipédie), cerveau plus gros, fabrication d'outils, langage.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p04_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'hominisation ?",
            "options": [
              "Le long processus d'évolution qui a conduit à l'homme actuel",
              "Le passage de la pierre taillée à la pierre polie",
              "L'invention de l'écriture en Égypte",
              "La migration des hommes vers l'Europe au XXe siècle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'hominisation désigne l'évolution qui a mené jusqu'à l'Homme moderne."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La bipédie",
          "stepTheme": "La bipédie",
          "stepBadge": "La bipédie",
          "paragraphText": "Les ancêtres de l'homme se distinguent en se tenant debout et en marchant sur deux pieds : ils sont bipèdes.\nLes autres primates se déplacent le plus souvent à quatre pattes (quadrupèdes).",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p04_q2",
            "type": "mcq",
            "prompt": "Que signifie « bipède » ?",
            "options": [
              "Qui marche à quatre pattes",
              "Qui vit dans les arbres",
              "Qui mange de la viande",
              "Qui marche sur deux pieds"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Bi = deux, pède = pied : la marche debout."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Descendre du singe ?",
          "stepTheme": "Descendre du singe ?",
          "stepBadge": "Descendre du singe ?",
          "paragraphText": "L'Homme ne descend pas des singes actuels (chimpanzés, gorilles).\nHommes et grands singes ont des ancêtres communs, puis ont évolué séparément.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p04_q3",
            "type": "mcq",
            "prompt": "« L'homme descend du chimpanzé. » Que disent les scientifiques ?",
            "options": [
              "C'est vrai : le chimpanzé est l'ancêtre direct de l'homme",
              "C'est vrai : tous les singes deviendront des hommes",
              "C'est faux : l'homme et les grands singes ont des ancêtres communs",
              "C'est faux : l'homme et le singe n'ont aucun lien"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Hommes et chimpanzés sont des « cousins » : ils partagent un ancêtre commun."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Toumaï",
          "stepTheme": "Toumaï",
          "stepBadge": "Toumaï",
          "paragraphText": "Toumaï, découvert au Tchad en 2001, est le plus ancien représentant connu de la lignée humaine : il a environ 7 millions d'années.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p04_q4",
            "type": "mcq",
            "prompt": "Dans quel pays a été découvert Toumaï, le plus ancien représentant connu de la lignée humaine ?",
            "options": [
              "En France",
              "En Chine",
              "Au Tchad",
              "Au Brésil"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Toumaï a été découvert au Tchad ; il a environ 7 millions d'années."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'australopithèque",
          "stepTheme": "L'australopithèque",
          "stepBadge": "L'australopithèque",
          "paragraphText": "L'australopithèque apparaît il y a environ 4 millions d'années en Afrique de l'Est et du Sud.\nPetit, avec un cerveau d'environ 400 à 500 cm³, il marche debout et vit en groupe.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p04_q5",
            "type": "mcq",
            "prompt": "Il y a combien de temps l'australopithèque est-il apparu ?",
            "options": [
              "Environ 4 millions d'années",
              "Environ 40 000 ans",
              "Environ 400 ans",
              "Environ 40 millions d'années"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'australopithèque apparaît il y a environ 4 millions d'années, en Afrique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Lucy",
          "stepTheme": "Lucy",
          "stepBadge": "Lucy",
          "paragraphText": "La célèbre « Lucy », découverte en Éthiopie en 1974, est une australopithèque d'environ 3,2 millions d'années.\nSon squelette confirme l'ancienneté de la présence humaine en Afrique.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p04_q6",
            "type": "mcq",
            "prompt": "Qui était « Lucy » ?",
            "options": [
              "Une Homo sapiens découverte en France",
              "Une reine de l'Égypte antique",
              "Une archéologue célèbre",
              "Une australopithèque découverte en Éthiopie"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Lucy est un squelette d'australopithèque (environ 3,2 millions d'années) trouvé en Éthiopie."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "Homo habilis",
          "stepTheme": "Homo habilis",
          "stepBadge": "Homo habilis",
          "paragraphText": "Homo habilis, « l'homme habile », apparaît en Afrique de l'Est il y a près de 3 millions d'années.\nSon cerveau mesure environ 600 cm³.\nIl fabrique les premiers outils de pierre taillée (galets aménagés).",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p04_q7",
            "type": "mcq",
            "prompt": "Pourquoi l'appelle-t-on Homo habilis, « l'homme habile » ?",
            "options": [
              "Parce qu'il invente l'écriture sur des tablettes d'argile",
              "Parce qu'il fabrique les premiers outils de pierre taillée",
              "Parce qu'il cultive la terre et élève des animaux",
              "Parce qu'il construit les premières villes en pierre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Habilis = habile : il fabrique des outils."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p04_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'hominisation ?",
          "options": [
            "Le long processus d'évolution qui a conduit à l'homme actuel",
            "Le passage de la pierre taillée à la pierre polie",
            "L'invention de l'écriture en Égypte",
            "La migration des hommes vers l'Europe au XXe siècle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'hominisation désigne l'évolution qui a mené jusqu'à l'Homme moderne."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p04_q2",
          "type": "mcq",
          "prompt": "Que signifie « bipède » ?",
          "options": [
            "Qui marche à quatre pattes",
            "Qui vit dans les arbres",
            "Qui mange de la viande",
            "Qui marche sur deux pieds"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Bi = deux, pède = pied : la marche debout."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p04_q3",
          "type": "mcq",
          "prompt": "« L'homme descend du chimpanzé. » Que disent les scientifiques ?",
          "options": [
            "C'est vrai : le chimpanzé est l'ancêtre direct de l'homme",
            "C'est vrai : tous les singes deviendront des hommes",
            "C'est faux : l'homme et les grands singes ont des ancêtres communs",
            "C'est faux : l'homme et le singe n'ont aucun lien"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Hommes et chimpanzés sont des « cousins » : ils partagent un ancêtre commun."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p04_q4",
          "type": "mcq",
          "prompt": "Dans quel pays a été découvert Toumaï, le plus ancien représentant connu de la lignée humaine ?",
          "options": [
            "En France",
            "En Chine",
            "Au Tchad",
            "Au Brésil"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Toumaï a été découvert au Tchad ; il a environ 7 millions d'années."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p04_q5",
          "type": "mcq",
          "prompt": "Il y a combien de temps l'australopithèque est-il apparu ?",
          "options": [
            "Environ 4 millions d'années",
            "Environ 40 000 ans",
            "Environ 400 ans",
            "Environ 40 millions d'années"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'australopithèque apparaît il y a environ 4 millions d'années, en Afrique."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p04_q6",
          "type": "mcq",
          "prompt": "Qui était « Lucy » ?",
          "options": [
            "Une Homo sapiens découverte en France",
            "Une reine de l'Égypte antique",
            "Une archéologue célèbre",
            "Une australopithèque découverte en Éthiopie"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Lucy est un squelette d'australopithèque (environ 3,2 millions d'années) trouvé en Éthiopie."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p04_q7",
          "type": "mcq",
          "prompt": "Pourquoi l'appelle-t-on Homo habilis, « l'homme habile » ?",
          "options": [
            "Parce qu'il invente l'écriture sur des tablettes d'argile",
            "Parce qu'il fabrique les premiers outils de pierre taillée",
            "Parce qu'il cultive la terre et élève des animaux",
            "Parce qu'il construit les premières villes en pierre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Habilis = habile : il fabrique des outils."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p05",
      "order": 5,
      "title": "Homo erectus et Homo sapiens",
      "summary": "Le feu, la sortie d'Afrique et l'homme moderne.",
      "conceptExplanation": "- Homo erectus, « l'homme qui se tient debout », apparaît il y a environ 2 millions d'années en Afrique de l'Est (Kenya). Plus grand, avec un cerveau d'environ 950 cm³, il taille des bifaces, maîtrise le feu et construit des abris. Il est le premier à sortir d'Afrique : on le retrouve en Asie (Chine, île de Java).\n\n- Homo sapiens, « l'homme sage » ou « l'homme qui pense », est notre espèce. Il apparaît en Afrique (les plus anciens fossiles connus ont environ 300 000 ans), puis peuple toute la Terre. Son cerveau mesure environ 1 400 cm³. Il utilise un langage élaboré, fabrique des outils et des armes perfectionnés, a une vie sociale organisée et crée des œuvres d'art. L'homme de Cro-Magnon (France) et l'homme d'Asselar (Mali) sont des Homo sapiens.\n\nAu fil de l'évolution, le volume du cerveau augmente : environ 450 cm³ (australopithèque), 600 cm³ (Homo habilis), 950 cm³ (Homo erectus), 1 400 cm³ (Homo sapiens).",
      "keyRule": "Homo erectus (2 Ma, feu, sortie d'Afrique, Java, Chine) ; Homo sapiens (notre espèce, né en Afrique, cerveau d'environ 1 400 cm³, Cro-Magnon, Asselar).",
      "formulas": [],
      "workedExample": {
        "title": "Suivre le cerveau",
        "statement": "Que montre l'évolution du volume du cerveau ?",
        "methodSteps": [
          "Australopithèque : environ 450 cm³.",
          "Homo habilis : environ 600 cm³.",
          "Homo erectus : environ 950 cm³.",
          "Homo sapiens : environ 1 400 cm³."
        ],
        "conclusion": "Le cerveau grossit au cours de l'hominisation, avec des outils de plus en plus perfectionnés."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Homo erectus",
          "stepTheme": "Homo erectus",
          "stepBadge": "Homo erectus",
          "paragraphText": "Homo erectus, « l'homme qui se tient debout », apparaît il y a environ 2 millions d'années en Afrique de l'Est.\nIl est plus grand que Homo habilis et son cerveau mesure environ 950 cm³.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p05_q1",
            "type": "mcq",
            "prompt": "Que signifie le nom « Homo erectus » ?",
            "options": [
              "L'homme habile",
              "L'homme qui se tient debout",
              "L'homme qui pense",
              "L'homme du Sud"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Erectus = dressé, debout."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le feu",
          "stepTheme": "Le feu",
          "stepBadge": "Le feu",
          "paragraphText": "Homo erectus maîtrise le feu, taille des bifaces et construit des abris.\nLe feu lui permet de se chauffer, de se protéger et de cuire ses aliments.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p05_q2",
            "type": "mcq",
            "prompt": "Quelle grande maîtrise attribue-t-on à Homo erectus ?",
            "options": [
              "L'invention de l'écriture",
              "La pratique de l'agriculture",
              "Le travail du fer",
              "La maîtrise du feu"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Homo erectus est associé à la maîtrise du feu."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La sortie d'Afrique",
          "stepTheme": "La sortie d'Afrique",
          "stepBadge": "La sortie d'Afrique",
          "paragraphText": "Homo erectus est le premier à quitter l'Afrique : on retrouve ses restes en Asie, en Chine et sur l'île de Java (Indonésie).",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p05_q3",
            "type": "mcq",
            "prompt": "Où a-t-on retrouvé des restes d'Homo erectus hors d'Afrique ?",
            "options": [
              "En Asie (Chine, île de Java)",
              "En Amérique du Sud",
              "En Australie uniquement",
              "En Antarctique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Homo erectus a migré jusqu'en Asie : Chine et Java."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Homo sapiens",
          "stepTheme": "Homo sapiens",
          "stepBadge": "Homo sapiens",
          "paragraphText": "Homo sapiens, « l'homme sage » ou « l'homme qui pense », est notre espèce.\nIl apparaît en Afrique : les plus anciens fossiles connus ont environ 300 000 ans.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p05_q4",
            "type": "mcq",
            "prompt": "Que signifie « Homo sapiens » ?",
            "options": [
              "L'homme qui se tient debout",
              "L'homme habile",
              "L'homme sage, l'homme qui pense",
              "L'homme du feu"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Sapiens = sage, qui pense : c'est notre espèce."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les capacités d'Homo sapiens",
          "stepTheme": "Les capacités d'Homo sapiens",
          "stepBadge": "Les capacités d'Homo sapiens",
          "paragraphText": "Homo sapiens a un cerveau d'environ 1 400 cm³.\nIl utilise un langage élaboré, fabrique des outils et des armes perfectionnés, vit en sociétés organisées et crée des œuvres d'art.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p05_q5",
            "type": "mcq",
            "prompt": "Lequel de ces traits caractérise Homo sapiens ?",
            "options": [
              "Un cerveau d'environ 400 cm³",
              "L'absence totale d'outils",
              "La marche à quatre pattes",
              "Un langage élaboré et la création d'œuvres d'art"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Langage élaboré, art et outils perfectionnés caractérisent Homo sapiens."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Cro-Magnon et Asselar",
          "stepTheme": "Cro-Magnon et Asselar",
          "stepBadge": "Cro-Magnon et Asselar",
          "paragraphText": "Des fossiles d'Homo sapiens ont été trouvés partout dans le monde.\nExemples : l'homme de Cro-Magnon (France) et l'homme d'Asselar (Mali).",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p05_q6",
            "type": "mcq",
            "prompt": "L'homme d'Asselar, découvert au Mali, appartient à quelle espèce ?",
            "options": [
              "Homo habilis",
              "Australopithèque",
              "Homo sapiens",
              "Homo erectus"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'homme d'Asselar, comme Cro-Magnon, est un Homo sapiens."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Le cerveau grossit",
          "stepTheme": "Le cerveau grossit",
          "stepBadge": "Le cerveau grossit",
          "paragraphText": "Le volume du cerveau augmente au fil de l'évolution :\n• australopithèque : environ 450 cm³ ;\n• Homo habilis : environ 600 cm³ ;\n• Homo erectus : environ 950 cm³ ;\n• Homo sapiens : environ 1 400 cm³.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p05_q7",
            "type": "mcq",
            "prompt": "Quel hominidé a le plus gros cerveau ?",
            "options": [
              "L'australopithèque",
              "Homo sapiens",
              "Homo habilis",
              "Homo erectus"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Homo sapiens a le plus gros cerveau, environ 1 400 cm³."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p05_q1",
          "type": "mcq",
          "prompt": "Que signifie le nom « Homo erectus » ?",
          "options": [
            "L'homme habile",
            "L'homme qui se tient debout",
            "L'homme qui pense",
            "L'homme du Sud"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Erectus = dressé, debout."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p05_q2",
          "type": "mcq",
          "prompt": "Quelle grande maîtrise attribue-t-on à Homo erectus ?",
          "options": [
            "L'invention de l'écriture",
            "La pratique de l'agriculture",
            "Le travail du fer",
            "La maîtrise du feu"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Homo erectus est associé à la maîtrise du feu."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p05_q3",
          "type": "mcq",
          "prompt": "Où a-t-on retrouvé des restes d'Homo erectus hors d'Afrique ?",
          "options": [
            "En Asie (Chine, île de Java)",
            "En Amérique du Sud",
            "En Australie uniquement",
            "En Antarctique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Homo erectus a migré jusqu'en Asie : Chine et Java."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p05_q4",
          "type": "mcq",
          "prompt": "Que signifie « Homo sapiens » ?",
          "options": [
            "L'homme qui se tient debout",
            "L'homme habile",
            "L'homme sage, l'homme qui pense",
            "L'homme du feu"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Sapiens = sage, qui pense : c'est notre espèce."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p05_q5",
          "type": "mcq",
          "prompt": "Lequel de ces traits caractérise Homo sapiens ?",
          "options": [
            "Un cerveau d'environ 400 cm³",
            "L'absence totale d'outils",
            "La marche à quatre pattes",
            "Un langage élaboré et la création d'œuvres d'art"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Langage élaboré, art et outils perfectionnés caractérisent Homo sapiens."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p05_q6",
          "type": "mcq",
          "prompt": "L'homme d'Asselar, découvert au Mali, appartient à quelle espèce ?",
          "options": [
            "Homo habilis",
            "Australopithèque",
            "Homo sapiens",
            "Homo erectus"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'homme d'Asselar, comme Cro-Magnon, est un Homo sapiens."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p05_q7",
          "type": "mcq",
          "prompt": "Quel hominidé a le plus gros cerveau ?",
          "options": [
            "L'australopithèque",
            "Homo sapiens",
            "Homo habilis",
            "Homo erectus"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Homo sapiens a le plus gros cerveau, environ 1 400 cm³."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p06",
      "order": 6,
      "title": "L'Afrique, berceau de l'humanité",
      "summary": "Pourquoi l'Afrique est considérée comme le berceau de l'humanité.",
      "conceptExplanation": "L'Afrique est considérée comme le berceau de l'humanité :\n- les traces les plus anciennes de la présence humaine y ont été découvertes, surtout dans la région du Rift, à l'est de l'Afrique (Olduvai en Tanzanie, Kenya, Éthiopie) ;\n- d'autres sites existent en Afrique australe (Broken Hill, en Zambie), centrale (Toumaï au Tchad) et occidentale (homme d'Asselar au Mali) ;\n- des squelettes célèbres, comme Lucy (Éthiopie) et Toumaï (Tchad), confirment l'ancienneté du peuplement ;\n- l'Afrique est le seul continent qui a livré toutes les étapes de l'évolution humaine, de Toumaï à Homo sapiens ;\n- la préhistoire y a commencé bien plus tôt qu'ailleurs, et c'est d'Afrique que les hommes sont partis peupler le reste du monde.",
      "keyRule": "L'Afrique est le berceau de l'humanité : les plus anciens fossiles (Rift, Lucy, Toumaï) et toutes les étapes de l'évolution humaine y ont été trouvés.",
      "formulas": [],
      "workedExample": {
        "title": "Démontrer une affirmation",
        "statement": "Démontre que l'Afrique est le berceau de l'humanité.",
        "methodSteps": [
          "Les plus anciens fossiles humains y ont été trouvés (Toumaï, 7 millions d'années ; Lucy, 3,2 millions d'années).",
          "Toutes les étapes de l'évolution humaine y sont représentées.",
          "Les hommes sont partis d'Afrique pour peupler le monde (Homo erectus, puis Homo sapiens)."
        ],
        "conclusion": "Ces trois arguments font de l'Afrique le berceau de l'humanité."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le berceau de l'humanité",
          "stepTheme": "Le berceau de l'humanité",
          "stepBadge": "Le berceau de l'humanité",
          "paragraphText": "On dit que l'Afrique est le berceau de l'humanité : c'est là que l'Homme est apparu et qu'il a évolué avant de peupler le reste du monde.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p06_q1",
            "type": "mcq",
            "prompt": "Que signifie « l'Afrique est le berceau de l'humanité » ?",
            "options": [
              "C'est en Afrique que l'Homme est apparu et a commencé son évolution",
              "L'Afrique est le continent le plus peuplé du monde",
              "L'Afrique a inventé l'écriture la première",
              "L'Afrique est le continent le plus vaste du monde"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le « berceau » est le lieu de naissance : l'humanité est née en Afrique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La région du Rift",
          "stepTheme": "La région du Rift",
          "stepBadge": "La région du Rift",
          "paragraphText": "Les traces les plus anciennes de la présence humaine ont été trouvées dans la région du Rift, à l'est de l'Afrique : Olduvai (Tanzanie), Kenya, Éthiopie.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p06_q2",
            "type": "mcq",
            "prompt": "Dans quelle région d'Afrique a-t-on trouvé les traces humaines les plus nombreuses et les plus anciennes ?",
            "options": [
              "Dans la région du Rift, à l'est de l'Afrique",
              "Dans le delta du Nil, au nord",
              "Sur la côte atlantique, à l'ouest",
              "Dans le désert du Kalahari, au sud"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le Rift est-africain (Tanzanie, Kenya, Éthiopie) est riche en fossiles humains."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Des sites dans toute l'Afrique",
          "stepTheme": "Des sites dans toute l'Afrique",
          "stepBadge": "Des sites dans toute l'Afrique",
          "paragraphText": "D'autres sites préhistoriques existent dans toute l'Afrique :\n• Afrique australe : Broken Hill (Zambie) ;\n• Afrique centrale : Toumaï (Tchad) ;\n• Afrique de l'Ouest : l'homme d'Asselar (Mali).",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p06_q3",
            "type": "mcq",
            "prompt": "Quel site préhistorique se trouve en Afrique de l'Ouest ?",
            "options": [
              "Olduvai, en Tanzanie",
              "Asselar, au Mali",
              "Broken Hill, en Zambie",
              "Le Rift, en Éthiopie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Asselar est au Mali, en Afrique de l'Ouest."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Toutes les étapes",
          "stepTheme": "Toutes les étapes",
          "stepBadge": "Toutes les étapes",
          "paragraphText": "L'Afrique est le seul continent qui a livré toutes les étapes de l'évolution humaine : de Toumaï et l'australopithèque jusqu'à Homo sapiens.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p06_q4",
            "type": "mcq",
            "prompt": "Quel argument montre que l'Afrique est le berceau de l'humanité ?",
            "options": [
              "On y a inventé l'agriculture avant tous les autres",
              "On n'y a trouvé aucun fossile humain",
              "On y a retrouvé toutes les étapes de l'évolution humaine",
              "Les hommes y sont arrivés en dernier"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Seule l'Afrique présente toute la chaîne de l'évolution humaine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Partis d'Afrique",
          "stepTheme": "Partis d'Afrique",
          "stepBadge": "Partis d'Afrique",
          "paragraphText": "C'est d'Afrique que les hommes sont partis pour peupler le reste du monde : d'abord Homo erectus, puis Homo sapiens.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p06_q5",
            "type": "mcq",
            "prompt": "D'où sont partis les hommes pour peupler le reste du monde ?",
            "options": [
              "D'Europe",
              "D'Amérique",
              "D'Australie",
              "D'Afrique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Homo erectus puis Homo sapiens sont sortis d'Afrique pour peupler la Terre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Lucy et Toumaï",
          "stepTheme": "Lucy et Toumaï",
          "stepBadge": "Lucy et Toumaï",
          "paragraphText": "Deux découvertes célèbres confirment l'ancienneté du peuplement africain :\n• Lucy, australopithèque d'Éthiopie (environ 3,2 millions d'années) ;\n• Toumaï, au Tchad (environ 7 millions d'années).",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p06_q6",
            "type": "mcq",
            "prompt": "Pourquoi Toumaï est-il une découverte importante ?",
            "options": [
              "C'est le premier homme à avoir écrit",
              "C'est le premier homme à avoir cultivé la terre",
              "C'est le plus ancien représentant connu de la lignée humaine",
              "C'est le plus grand squelette jamais découvert"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Avec environ 7 millions d'années, Toumaï est le plus ancien représentant connu de notre lignée."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Plus tôt qu'ailleurs",
          "stepTheme": "Plus tôt qu'ailleurs",
          "stepBadge": "Plus tôt qu'ailleurs",
          "paragraphText": "La préhistoire a commencé en Afrique bien plus tôt que partout ailleurs : les plus anciens fossiles d'Europe ou d'Asie sont beaucoup plus récents que ceux d'Afrique.",
          "exercise": {
            "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p06_q7",
            "type": "mcq",
            "prompt": "Comment expliquer que les fossiles d'Afrique soient plus anciens que ceux d'Europe ?",
            "options": [
              "Parce que les fossiles européens ont tous été détruits",
              "Parce que les Européens sont apparus avant les Africains",
              "Parce que l'Europe n'a jamais été peuplée à la préhistoire",
              "Parce que l'humanité est née en Afrique avant de migrer vers les autres continents"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les hommes sont apparus en Afrique, puis ont gagné les autres continents."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p06_q1",
          "type": "mcq",
          "prompt": "Que signifie « l'Afrique est le berceau de l'humanité » ?",
          "options": [
            "C'est en Afrique que l'Homme est apparu et a commencé son évolution",
            "L'Afrique est le continent le plus peuplé du monde",
            "L'Afrique a inventé l'écriture la première",
            "L'Afrique est le continent le plus vaste du monde"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le « berceau » est le lieu de naissance : l'humanité est née en Afrique."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p06_q2",
          "type": "mcq",
          "prompt": "Dans quelle région d'Afrique a-t-on trouvé les traces humaines les plus nombreuses et les plus anciennes ?",
          "options": [
            "Dans la région du Rift, à l'est de l'Afrique",
            "Dans le delta du Nil, au nord",
            "Sur la côte atlantique, à l'ouest",
            "Dans le désert du Kalahari, au sud"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le Rift est-africain (Tanzanie, Kenya, Éthiopie) est riche en fossiles humains."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p06_q3",
          "type": "mcq",
          "prompt": "Quel site préhistorique se trouve en Afrique de l'Ouest ?",
          "options": [
            "Olduvai, en Tanzanie",
            "Asselar, au Mali",
            "Broken Hill, en Zambie",
            "Le Rift, en Éthiopie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Asselar est au Mali, en Afrique de l'Ouest."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p06_q4",
          "type": "mcq",
          "prompt": "Quel argument montre que l'Afrique est le berceau de l'humanité ?",
          "options": [
            "On y a inventé l'agriculture avant tous les autres",
            "On n'y a trouvé aucun fossile humain",
            "On y a retrouvé toutes les étapes de l'évolution humaine",
            "Les hommes y sont arrivés en dernier"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Seule l'Afrique présente toute la chaîne de l'évolution humaine."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p06_q5",
          "type": "mcq",
          "prompt": "D'où sont partis les hommes pour peupler le reste du monde ?",
          "options": [
            "D'Europe",
            "D'Amérique",
            "D'Australie",
            "D'Afrique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Homo erectus puis Homo sapiens sont sortis d'Afrique pour peupler la Terre."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p06_q6",
          "type": "mcq",
          "prompt": "Pourquoi Toumaï est-il une découverte importante ?",
          "options": [
            "C'est le premier homme à avoir écrit",
            "C'est le premier homme à avoir cultivé la terre",
            "C'est le plus ancien représentant connu de la lignée humaine",
            "C'est le plus grand squelette jamais découvert"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Avec environ 7 millions d'années, Toumaï est le plus ancien représentant connu de notre lignée."
        },
        {
          "id": "seconde_a_hg_histoire_t2_l01_prehistoire_p06_q7",
          "type": "mcq",
          "prompt": "Comment expliquer que les fossiles d'Afrique soient plus anciens que ceux d'Europe ?",
          "options": [
            "Parce que les fossiles européens ont tous été détruits",
            "Parce que les Européens sont apparus avant les Africains",
            "Parce que l'Europe n'a jamais été peuplée à la préhistoire",
            "Parce que l'humanité est née en Afrique avant de migrer vers les autres continents"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les hommes sont apparus en Afrique, puis ont gagné les autres continents."
        }
      ]
    }
  ]
};
