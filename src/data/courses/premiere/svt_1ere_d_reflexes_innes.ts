import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 1 : Les réflexes innés » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2785
export const SVT_1ERE_D_L01_REFLEXES_INNES: CurriculumChapter = {
  "id": "premiere_d_svt_l01_reflexes_innes",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 1,
  "title": "Leçon 1 : Les réflexes innés",
  "summary": "À partir du retrait de la main et des expériences sur la grenouille spinale, on caractérise le réflexe inné, on identifie les organes qui y interviennent et on décrit l’arc réflexe.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2785",
  "points": [
    {
      "id": "premiere_d_svt_l01_reflexes_innes_p01",
      "order": 1,
      "title": "Le réflexe inné : définition et caractéristiques",
      "summary": "Définir le mouvement réflexe inné et énumérer ses caractéristiques.",
      "conceptExplanation": "Un mouvement réflexe inné est une réaction musculaire brusque, automatique, inéluctable et stéréotypée.\nBrusque signifie très rapide ; inéluctable signifie qu’on ne peut pas l’empêcher ; stéréotypée signifie qu’il se produit de manière identique chez tous les individus de la même espèce avec le même excitant.\nL’excitant qui permet la mise en place du réflexe inné est un stimulus absolu.\nCe mouvement apparaît dès la naissance, sans apprentissage, et se fait sans l’intervention du cerveau.",
      "keyRule": "Réflexe inné : rapide, automatique, inéluctable, stéréotypé, présent dès la naissance et sans intervention du cerveau.",
      "formulas": [],
      "workedExample": {
        "title": "Caractériser le retrait de la main sur une casserole chaude",
        "statement": "Une élève touche par inattention une casserole chaude : elle pousse un cri et retire brusquement sa main. Caractérise ce mouvement.",
        "methodSteps": [
          "Le retrait est brusque et rapide : la main est retirée immédiatement.",
          "Il est automatique et involontaire : l’élève ne l’a pas décidé.",
          "Il est inéluctable : elle n’a pas pu l’empêcher.",
          "Il est stéréotypé : tout individu réagit de la même façon au même excitant."
        ],
        "conclusion": "C’est un réflexe inné, déclenché par un stimulus absolu, la chaleur de la casserole."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du mouvement réflexe inné",
          "stepTheme": "Définition du mouvement réflexe inné",
          "stepBadge": "Définition du mouvement réflexe inné",
          "paragraphText": "• Mouvement réflexe inné : réaction musculaire brusque, automatique, inéluctable et stéréotypée.\nIl est encore appelé acte réflexe.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p01_q1",
            "type": "mcq",
            "prompt": "Un mouvement réflexe inné est :",
            "options": [
              "Un mouvement lent et volontaire",
              "Une réaction musculaire brusque, automatique, inéluctable et stéréotypée",
              "Un comportement appris par l’éducation",
              "Un mouvement décidé par le cerveau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit le réflexe inné comme une réaction brusque, automatique, inéluctable et stéréotypée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Inéluctable et stéréotypé : ce que cela signifie",
          "stepTheme": "Inéluctable et stéréotypé : ce que cela signifie",
          "stepBadge": "Inéluctable et stéréotypé : ce que cela signifie",
          "paragraphText": "Inéluctable signifie qu’on ne peut pas empêcher le mouvement.\nStéréotypé signifie qu’il se produit de manière identique chez tous les individus de la même espèce avec le même excitant.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p01_q2",
            "type": "mcq",
            "prompt": "« Stéréotypé » signifie que le réflexe :",
            "options": [
              "Change d’un individu à l’autre",
              "Se produit de manière identique chez tous les individus de la même espèce avec le même excitant",
              "Disparaît avec l’âge",
              "Nécessite un apprentissage"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise que le réflexe stéréotypé se produit de manière identique chez tous les individus de la même espèce."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le stimulus absolu",
          "stepTheme": "Le stimulus absolu",
          "stepBadge": "Le stimulus absolu",
          "paragraphText": "L’excitant qui permet la mise en place du réflexe inné est un stimulus absolu.\nC’est lui qui déclenche la réponse réflexe.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p01_q3",
            "type": "mcq",
            "prompt": "L’excitant qui déclenche un réflexe inné est appelé :",
            "options": [
              "Stimulus neutre",
              "Stimulus conditionnel",
              "Stimulus absolu",
              "Stimulus appris"
            ],
            "correctAnswerIndex": 2,
            "explanation": "D’après la leçon, le stimulus du réflexe inné est un stimulus absolu."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Présent dès la naissance, sans le cerveau",
          "stepTheme": "Présent dès la naissance, sans le cerveau",
          "stepBadge": "Présent dès la naissance, sans le cerveau",
          "paragraphText": "Le mouvement réflexe inné apparaît dès la naissance sans apprentissage chez tous les individus de la même espèce.\nIl se fait sans l’intervention du cerveau.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p01_q4",
            "type": "mcq",
            "prompt": "Le réflexe inné apparaît :",
            "options": [
              "Après un long apprentissage",
              "Seulement chez l’adulte",
              "Grâce au cerveau",
              "Dès la naissance, sans apprentissage et sans intervention du cerveau"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon indique que le réflexe inné apparaît dès la naissance, sans apprentissage, sans intervention du cerveau."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le cerveau n’intervient pas dans le réflexe inné",
          "stepTheme": "Le cerveau n’intervient pas dans le réflexe inné",
          "stepBadge": "Le cerveau n’intervient pas dans le réflexe inné",
          "paragraphText": "Piège : l’affirmation « le cerveau intervient dans la mise en place du réflexe inné » est fausse.\nDans l’exercice 1 de la leçon, les affirmations justes sont que le stimulus absolu fait toujours réagir l’animal et que la peau est un récepteur.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p01_q5",
            "type": "mcq",
            "prompt": "L’affirmation « le cerveau intervient dans la mise en place du réflexe inné » est :",
            "options": [
              "Vraie",
              "Fausse, le réflexe inné se fait sans l’intervention du cerveau",
              "Vraie seulement chez la grenouille",
              "Vraie pour les mouvements volontaires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le réflexe inné se réalise sans l’intervention du cerveau : l’affirmation est fausse."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p01_q1",
          "type": "mcq",
          "prompt": "Un mouvement réflexe inné est :",
          "options": [
            "Un mouvement lent et volontaire",
            "Une réaction musculaire brusque, automatique, inéluctable et stéréotypée",
            "Un comportement appris par l’éducation",
            "Un mouvement décidé par le cerveau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit le réflexe inné comme une réaction brusque, automatique, inéluctable et stéréotypée."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p01_q2",
          "type": "mcq",
          "prompt": "« Stéréotypé » signifie que le réflexe :",
          "options": [
            "Change d’un individu à l’autre",
            "Se produit de manière identique chez tous les individus de la même espèce avec le même excitant",
            "Disparaît avec l’âge",
            "Nécessite un apprentissage"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise que le réflexe stéréotypé se produit de manière identique chez tous les individus de la même espèce."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p01_q3",
          "type": "mcq",
          "prompt": "L’excitant qui déclenche un réflexe inné est appelé :",
          "options": [
            "Stimulus neutre",
            "Stimulus conditionnel",
            "Stimulus absolu",
            "Stimulus appris"
          ],
          "correctAnswerIndex": 2,
          "explanation": "D’après la leçon, le stimulus du réflexe inné est un stimulus absolu."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p01_q4",
          "type": "mcq",
          "prompt": "Le réflexe inné apparaît :",
          "options": [
            "Après un long apprentissage",
            "Seulement chez l’adulte",
            "Grâce au cerveau",
            "Dès la naissance, sans apprentissage et sans intervention du cerveau"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon indique que le réflexe inné apparaît dès la naissance, sans apprentissage, sans intervention du cerveau."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p01_q5",
          "type": "mcq",
          "prompt": "L’affirmation « le cerveau intervient dans la mise en place du réflexe inné » est :",
          "options": [
            "Vraie",
            "Fausse, le réflexe inné se fait sans l’intervention du cerveau",
            "Vraie seulement chez la grenouille",
            "Vraie pour les mouvements volontaires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le réflexe inné se réalise sans l’intervention du cerveau : l’affirmation est fausse."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l01_reflexes_innes_p02",
      "order": 2,
      "title": "Mise en évidence chez la grenouille spinale",
      "summary": "Suivre l’expérience de la grenouille spinale soumise à des solutions acidulées de concentration croissante.",
      "conceptExplanation": "On utilise une grenouille spinale, dont l’encéphale a été détruit mais la moelle épinière laissée intacte, suspendue par la mâchoire inférieure à une potence.\nOn trempe l’extrémité du pied gauche dans une solution acidulée de concentration croissante.\nPour une solution peu concentrée, la grenouille ne retire pas sa patte ; pour des solutions de plus en plus concentrées, elle retire son pied gauche puis fléchit sa patte postérieure gauche.\nLe mouvement de retrait brusque est un mouvement réflexe, encore appelé acte réflexe, et ce réflexe est inné : l’organisme effectue donc des mouvements réflexes de manière inconsciente.",
      "keyRule": "Grenouille décérébrée mais moelle intacte : le réflexe persiste, donc il est inconscient et ne dépend pas du cerveau.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter l’expérience de la grenouille spinale",
        "statement": "Une grenouille spinale est soumise à des solutions acidulées de concentration croissante. Explique les observations.",
        "methodSteps": [
          "À faible concentration, la stimulation est insuffisante : la grenouille ne retire pas sa patte.",
          "À concentration croissante, elle retire le pied puis fléchit la patte postérieure gauche.",
          "L’encéphale est détruit : le mouvement ne peut donc pas être volontaire ni cérébral.",
          "Le retrait brusque est un acte réflexe inné, effectué de manière inconsciente."
        ],
        "conclusion": "L’expérience prouve que l’organisme effectue des mouvements réflexes de manière inconsciente."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La grenouille spinale",
          "stepTheme": "La grenouille spinale",
          "stepBadge": "La grenouille spinale",
          "paragraphText": "• Grenouille spinale : grenouille dont l’encéphale a été détruit mais la moelle épinière laissée intacte.\nElle est suspendue par la mâchoire inférieure à une potence.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p02_q1",
            "type": "mcq",
            "prompt": "Une grenouille spinale est une grenouille :",
            "options": [
              "Sans moelle épinière",
              "Dont l’encéphale est détruit mais la moelle épinière intacte",
              "Entièrement anesthésiée",
              "Sans pattes postérieures"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit la grenouille spinale par la destruction de l’encéphale et la conservation de la moelle épinière."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Le protocole : des concentrations croissantes",
          "stepTheme": "Le protocole : des concentrations croissantes",
          "stepBadge": "Le protocole : des concentrations croissantes",
          "paragraphText": "On trempe l’extrémité du pied gauche dans une solution acidulée de concentration croissante.\nOn observe les réactions de l’animal à chaque concentration.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p02_q2",
            "type": "mcq",
            "prompt": "Dans l’expérience, on fait varier :",
            "options": [
              "La température de la solution",
              "La concentration de la solution acidulée, de façon croissante",
              "La patte utilisée à chaque essai",
              "La durée de suspension"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le protocole utilise une solution acidulée de concentration croissante."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le seuil de réaction",
          "stepTheme": "Le seuil de réaction",
          "stepBadge": "Le seuil de réaction",
          "paragraphText": "Pour une solution acidulée peu concentrée, la grenouille ne retire pas sa patte.\nPour des solutions de plus en plus concentrées, elle retire son pied gauche puis fléchit sa patte postérieure gauche.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p02_q3",
            "type": "mcq",
            "prompt": "Avec une solution peu concentrée, la grenouille :",
            "options": [
              "Fléchit violemment les deux pattes",
              "Ne retire pas sa patte",
              "Saute hors de la potence",
              "Retire la patte droite"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon indique qu’à faible concentration, la grenouille ne retire pas sa patte."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le retrait est un acte réflexe inné",
          "stepTheme": "Le retrait est un acte réflexe inné",
          "stepBadge": "Le retrait est un acte réflexe inné",
          "paragraphText": "Le mouvement de retrait brusque ou flexion de la patte excitée est un mouvement réflexe encore appelé acte réflexe.\nCe mouvement effectué par la grenouille décérébrée est un réflexe inné.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p02_q4",
            "type": "mcq",
            "prompt": "Le retrait de la patte excitée est appelé :",
            "options": [
              "Mouvement volontaire",
              "Acte réflexe, mouvement réflexe inné",
              "Réflexe conditionnel",
              "Mouvement appris"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La flexion de la patte excitée est un acte réflexe inné d’après la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Conclusion de l’expérience",
          "stepTheme": "Conclusion de l’expérience",
          "stepBadge": "Conclusion de l’expérience",
          "paragraphText": "L’organisme effectue effectivement des mouvements réflexes de manière inconsciente.\nCes mouvements sont des réflexes innés, réalisés sans le cerveau.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p02_q5",
            "type": "mcq",
            "prompt": "La conclusion de cette première partie est que l’organisme effectue les mouvements réflexes :",
            "options": [
              "De manière consciente et volontaire",
              "Uniquement après apprentissage",
              "De manière inconsciente : ce sont des réflexes innés",
              "Grâce au cerveau seul"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Conclusion de la leçon : les mouvements réflexes innés sont effectués de manière inconsciente."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p02_q1",
          "type": "mcq",
          "prompt": "Une grenouille spinale est une grenouille :",
          "options": [
            "Sans moelle épinière",
            "Dont l’encéphale est détruit mais la moelle épinière intacte",
            "Entièrement anesthésiée",
            "Sans pattes postérieures"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit la grenouille spinale par la destruction de l’encéphale et la conservation de la moelle épinière."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p02_q2",
          "type": "mcq",
          "prompt": "Dans l’expérience, on fait varier :",
          "options": [
            "La température de la solution",
            "La concentration de la solution acidulée, de façon croissante",
            "La patte utilisée à chaque essai",
            "La durée de suspension"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le protocole utilise une solution acidulée de concentration croissante."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p02_q3",
          "type": "mcq",
          "prompt": "Avec une solution peu concentrée, la grenouille :",
          "options": [
            "Fléchit violemment les deux pattes",
            "Ne retire pas sa patte",
            "Saute hors de la potence",
            "Retire la patte droite"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon indique qu’à faible concentration, la grenouille ne retire pas sa patte."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p02_q4",
          "type": "mcq",
          "prompt": "Le retrait de la patte excitée est appelé :",
          "options": [
            "Mouvement volontaire",
            "Acte réflexe, mouvement réflexe inné",
            "Réflexe conditionnel",
            "Mouvement appris"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La flexion de la patte excitée est un acte réflexe inné d’après la leçon."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p02_q5",
          "type": "mcq",
          "prompt": "La conclusion de cette première partie est que l’organisme effectue les mouvements réflexes :",
          "options": [
            "De manière consciente et volontaire",
            "Uniquement après apprentissage",
            "De manière inconsciente : ce sont des réflexes innés",
            "Grâce au cerveau seul"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Conclusion de la leçon : les mouvements réflexes innés sont effectués de manière inconsciente."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l01_reflexes_innes_p03",
      "order": 3,
      "title": "Les organes du réflexe : récepteur, conducteur, centre, effecteur",
      "summary": "Identifier les organes qui interviennent dans le mouvement réflexe inné grâce aux expériences d’anesthésie, de section et de destruction.",
      "conceptExplanation": "Plusieurs expériences localisent les organes du réflexe.\nAvec de l’éther sur la patte, la grenouille ne retire pas sa patte pendant un quart d’heure, puis la retire : les terminaisons nerveuses de la peau, devenues insensibles, sont le récepteur, et la peau redevient sensible quand l’effet de l’éther disparaît.\nLa section du nerf sciatique empêche définitivement le retrait : le nerf est un conducteur du message nerveux.\nLa destruction complète de la moelle épinière empêche aussi définitivement le retrait : la moelle épinière est un centre nerveux qui convertit le message sensitif en message moteur.\nLe retrait signifie que le message est arrivé aux muscles, qui se contractent : le muscle est un effecteur.\nLes organes du réflexe inné sont donc les récepteurs, les conducteurs (nerf sensitif et nerfs moteurs), le centre nerveux (moelle épinière) et les muscles effecteurs.",
      "keyRule": "Éther : récepteur ; section du nerf : conducteur ; destruction de la moelle : centre nerveux ; contraction : effecteur.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter les trois expériences sur les organes du réflexe",
        "statement": "On anesthésie la patte à l’éther, on sectionne le nerf sciatique, puis on détruit la moelle épinière. Que montre chaque résultat ?",
        "methodSteps": [
          "Éther : pas de retrait pendant un quart d’heure, puis retour de la sensibilité — la peau est le récepteur.",
          "Section du nerf sciatique : pas de retrait, de façon définitive — le nerf est le conducteur.",
          "Destruction de la moelle : pas de retrait, de façon définitive — la moelle est le centre nerveux.",
          "Quand le message arrive, le muscle se contracte : c’est l’effecteur."
        ],
        "conclusion": "Chaque expérience désigne un organe : récepteur, conducteur, centre nerveux et effecteur."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "L’expérience à l’éther désigne le récepteur",
          "stepTheme": "L’expérience à l’éther désigne le récepteur",
          "stepBadge": "L’expérience à l’éther désigne le récepteur",
          "paragraphText": "On maintient l’extrémité de la patte dans de l’éther pendant deux minutes, puis on l’excite avec une solution d’acide.\nLa grenouille ne retire pas sa patte pendant un quart d’heure, puis la retire : les terminaisons nerveuses de la peau étaient devenues insensibles.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p03_q1",
            "type": "mcq",
            "prompt": "Après application d’éther sur la patte, la grenouille ne retire pas sa patte parce que :",
            "options": [
              "Le muscle est détruit",
              "Les terminaisons nerveuses de la peau sont devenues insensibles",
              "La moelle épinière est détruite",
              "Le nerf sciatique est sectionné"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’éther rend les terminaisons nerveuses de la peau insensibles : la peau est un récepteur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’effet de l’éther est temporaire",
          "stepTheme": "L’effet de l’éther est temporaire",
          "stepBadge": "L’effet de l’éther est temporaire",
          "paragraphText": "Quinze minutes après, la grenouille retire sa patte lorsqu’elle est excitée.\nLa peau redevient sensible car l’effet de l’éther disparaît.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p03_q2",
            "type": "mcq",
            "prompt": "Le retrait réapparaît après un quart d’heure parce que :",
            "options": [
              "Le nerf repousse",
              "La moelle se régénère",
              "L’effet de l’éther disparaît et la peau redevient sensible",
              "Le muscle se répare"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon explique le retour du retrait par la disparition de l’effet de l’éther."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La section du nerf sciatique désigne le conducteur",
          "stepTheme": "La section du nerf sciatique désigne le conducteur",
          "stepBadge": "La section du nerf sciatique désigne le conducteur",
          "paragraphText": "On sectionne le nerf sciatique droit puis on trempe l’extrémité de la patte dans l’acide acétique.\nLa grenouille ne retire pas sa patte, et ceci de façon définitive : la section empêche la transmission du message nerveux.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p03_q3",
            "type": "mcq",
            "prompt": "La section du nerf sciatique empêche le retrait parce que le nerf est :",
            "options": [
              "Un récepteur",
              "Un effecteur",
              "Un centre nerveux",
              "Un conducteur du message nerveux"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon conclut que le nerf sciatique est un conducteur : sa section bloque la transmission."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La moelle épinière, centre nerveux",
          "stepTheme": "La moelle épinière, centre nerveux",
          "stepBadge": "La moelle épinière, centre nerveux",
          "paragraphText": "On détruit complètement la moelle épinière, puis on excite la patte postérieure gauche : la grenouille ne retire pas sa patte, de façon définitive.\nLa moelle épinière est un centre nerveux qui convertit le message sensitif en message moteur.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p03_q4",
            "type": "mcq",
            "prompt": "La moelle épinière, dans le réflexe inné, est :",
            "options": [
              "Un conducteur",
              "Un centre nerveux qui convertit le message sensitif en message moteur",
              "Un récepteur cutané",
              "Un effecteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La moelle épinière convertit le message sensitif en message moteur : c’est le centre nerveux du réflexe."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le muscle, effecteur du réflexe",
          "stepTheme": "Le muscle, effecteur du réflexe",
          "stepBadge": "Le muscle, effecteur du réflexe",
          "paragraphText": "Le retrait de la patte signifie que le message nerveux est arrivé aux muscles qui se contractent.\nLe muscle est donc un effecteur, et les récepteurs cités sont la peau, l’œil, l’oreille, le nez et la langue.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p03_q5",
            "type": "mcq",
            "prompt": "Dans le réflexe inné, l’effecteur est :",
            "options": [
              "La peau",
              "Le nerf sensitif",
              "La moelle épinière",
              "Le muscle, qui se contracte"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le muscle se contracte quand le message arrive : c’est l’effecteur du réflexe."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p03_q1",
          "type": "mcq",
          "prompt": "Après application d’éther sur la patte, la grenouille ne retire pas sa patte parce que :",
          "options": [
            "Le muscle est détruit",
            "Les terminaisons nerveuses de la peau sont devenues insensibles",
            "La moelle épinière est détruite",
            "Le nerf sciatique est sectionné"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’éther rend les terminaisons nerveuses de la peau insensibles : la peau est un récepteur."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p03_q2",
          "type": "mcq",
          "prompt": "Le retrait réapparaît après un quart d’heure parce que :",
          "options": [
            "Le nerf repousse",
            "La moelle se régénère",
            "L’effet de l’éther disparaît et la peau redevient sensible",
            "Le muscle se répare"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon explique le retour du retrait par la disparition de l’effet de l’éther."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p03_q3",
          "type": "mcq",
          "prompt": "La section du nerf sciatique empêche le retrait parce que le nerf est :",
          "options": [
            "Un récepteur",
            "Un effecteur",
            "Un centre nerveux",
            "Un conducteur du message nerveux"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon conclut que le nerf sciatique est un conducteur : sa section bloque la transmission."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p03_q4",
          "type": "mcq",
          "prompt": "La moelle épinière, dans le réflexe inné, est :",
          "options": [
            "Un conducteur",
            "Un centre nerveux qui convertit le message sensitif en message moteur",
            "Un récepteur cutané",
            "Un effecteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La moelle épinière convertit le message sensitif en message moteur : c’est le centre nerveux du réflexe."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p03_q5",
          "type": "mcq",
          "prompt": "Dans le réflexe inné, l’effecteur est :",
          "options": [
            "La peau",
            "Le nerf sensitif",
            "La moelle épinière",
            "Le muscle, qui se contracte"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le muscle se contracte quand le message arrive : c’est l’effecteur du réflexe."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l01_reflexes_innes_p04",
      "order": 4,
      "title": "L’arc réflexe : le trajet de l’influx nerveux",
      "summary": "Ordonner le trajet de l’influx nerveux du récepteur à l’effecteur et préciser le rôle de chaque conducteur.",
      "conceptExplanation": "Lorsqu’on porte une stimulation efficace sur un récepteur, il y a naissance du message nerveux, ou influx nerveux.\nLe nerf sensitif transmet le message nerveux du récepteur au centre nerveux ; le nerf moteur transmet le message nerveux du centre nerveux à l’effecteur.\nLe trajet suivi par l’influx nerveux — récepteur, conducteur sensitif, centre nerveux, conducteur moteur, effecteur — est appelé arc réflexe.\nDans le texte de l’exercice 3, l’influx sensitif prend naissance au niveau des terminaisons nerveuses des organes sensoriels, emprunte le neurone sensitif jusqu’à la moelle épinière où il est transformé en influx moteur, puis est convoyé par le neurone moteur jusqu’à l’organe effecteur, le muscle ; un influx nerveux est un signal électrique parcourant les neurones, ou cellules nerveuses, à la suite d’une excitation.",
      "keyRule": "Arc réflexe : récepteur, conducteur sensitif, centre nerveux, conducteur moteur, effecteur — dans cet ordre, toujours.",
      "formulas": [],
      "workedExample": {
        "title": "Schématiser le trajet du message nerveux du réflexe unilatéral",
        "statement": "Les éléments du réflexe unilatéral sont : muscle, pointe, nerf moteur, moelle épinière, nerf sensitif. Ordonne le trajet du message nerveux.",
        "methodSteps": [
          "La pointe excite la peau, récepteur : naissance de l’influx nerveux.",
          "Le nerf sensitif conduit l’influx jusqu’à la moelle épinière, centre nerveux.",
          "La moelle transforme le message sensitif en message moteur.",
          "Le nerf moteur conduit l’influx jusqu’au muscle, effecteur, qui se contracte."
        ],
        "conclusion": "Le trajet obtenu est l’arc réflexe : récepteur, nerf sensitif, moelle épinière, nerf moteur, muscle."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Naissance de l’influx nerveux",
          "stepTheme": "Naissance de l’influx nerveux",
          "stepBadge": "Naissance de l’influx nerveux",
          "paragraphText": "• Influx nerveux : message nerveux, signal électrique parcourant les neurones ou cellules nerveuses à la suite d’une excitation.\nIl naît au niveau des terminaisons nerveuses des organes sensoriels quand la stimulation est efficace.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p04_q1",
            "type": "mcq",
            "prompt": "L’influx nerveux naît :",
            "options": [
              "Dans le muscle",
              "Au niveau des terminaisons nerveuses du récepteur, à la suite d’une excitation efficace",
              "Dans le nerf moteur",
              "Après la contraction"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon situe la naissance de l’influx au niveau des terminaisons nerveuses des organes sensoriels."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le rôle du nerf sensitif",
          "stepTheme": "Le rôle du nerf sensitif",
          "stepBadge": "Le rôle du nerf sensitif",
          "paragraphText": "Le nerf sensitif transmet le message nerveux du récepteur au centre nerveux.\nIl conduit donc l’influx sensitif vers la moelle épinière.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p04_q2",
            "type": "mcq",
            "prompt": "Le nerf sensitif transmet le message :",
            "options": [
              "Du centre nerveux à l’effecteur",
              "Du muscle au récepteur",
              "Du récepteur au centre nerveux",
              "De l’effecteur au récepteur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le nerf sensitif va du récepteur au centre nerveux, d’après la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le rôle du nerf moteur",
          "stepTheme": "Le rôle du nerf moteur",
          "stepBadge": "Le rôle du nerf moteur",
          "paragraphText": "Le nerf moteur transmet le message nerveux du centre nerveux à l’effecteur.\nL’affirmation « le nerf moteur transmet l’information du muscle à la moelle épinière » est donc fausse.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p04_q3",
            "type": "mcq",
            "prompt": "Le nerf moteur transmet le message :",
            "options": [
              "Du récepteur au centre nerveux",
              "Du centre nerveux à l’effecteur",
              "Du muscle à la moelle épinière",
              "De la peau au muscle directement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le nerf moteur conduit l’influx du centre nerveux vers l’effecteur, le muscle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L’arc réflexe",
          "stepTheme": "L’arc réflexe",
          "stepBadge": "L’arc réflexe",
          "paragraphText": "• Arc réflexe : trajet suivi par l’influx nerveux — récepteur, conducteur sensitif, centre nerveux, conducteur moteur, effecteur.\nC’est le parcours complet du message dans un mouvement réflexe inné.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p04_q4",
            "type": "mcq",
            "prompt": "L’arc réflexe est :",
            "options": [
              "Le trajet de l’influx : récepteur, conducteur sensitif, centre nerveux, conducteur moteur, effecteur",
              "Un muscle de la patte",
              "Une partie du cerveau",
              "Un type de récepteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon définit l’arc réflexe comme le trajet complet de l’influx, du récepteur à l’effecteur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Sensitif vers le centre, moteur vers le muscle",
          "stepTheme": "Sensitif vers le centre, moteur vers le muscle",
          "stepBadge": "Sensitif vers le centre, moteur vers le muscle",
          "paragraphText": "Piège classique : inverser les deux conducteurs.\nRetiens le sens : le sensitif arrive au centre, le moteur part du centre vers l’effecteur.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p04_q5",
            "type": "mcq",
            "prompt": "Dans l’arc réflexe, l’ordre correct après le récepteur est :",
            "options": [
              "Nerf moteur, puis moelle, puis nerf sensitif",
              "Nerf sensitif, puis moelle épinière, puis nerf moteur, puis muscle",
              "Moelle, puis récepteur, puis muscle",
              "Muscle, puis nerf moteur, puis moelle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’ordre de la leçon : récepteur, conducteur sensitif, centre nerveux, conducteur moteur, effecteur."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p04_q1",
          "type": "mcq",
          "prompt": "L’influx nerveux naît :",
          "options": [
            "Dans le muscle",
            "Au niveau des terminaisons nerveuses du récepteur, à la suite d’une excitation efficace",
            "Dans le nerf moteur",
            "Après la contraction"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon situe la naissance de l’influx au niveau des terminaisons nerveuses des organes sensoriels."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p04_q2",
          "type": "mcq",
          "prompt": "Le nerf sensitif transmet le message :",
          "options": [
            "Du centre nerveux à l’effecteur",
            "Du muscle au récepteur",
            "Du récepteur au centre nerveux",
            "De l’effecteur au récepteur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le nerf sensitif va du récepteur au centre nerveux, d’après la leçon."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p04_q3",
          "type": "mcq",
          "prompt": "Le nerf moteur transmet le message :",
          "options": [
            "Du récepteur au centre nerveux",
            "Du centre nerveux à l’effecteur",
            "Du muscle à la moelle épinière",
            "De la peau au muscle directement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le nerf moteur conduit l’influx du centre nerveux vers l’effecteur, le muscle."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p04_q4",
          "type": "mcq",
          "prompt": "L’arc réflexe est :",
          "options": [
            "Le trajet de l’influx : récepteur, conducteur sensitif, centre nerveux, conducteur moteur, effecteur",
            "Un muscle de la patte",
            "Une partie du cerveau",
            "Un type de récepteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon définit l’arc réflexe comme le trajet complet de l’influx, du récepteur à l’effecteur."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p04_q5",
          "type": "mcq",
          "prompt": "Dans l’arc réflexe, l’ordre correct après le récepteur est :",
          "options": [
            "Nerf moteur, puis moelle, puis nerf sensitif",
            "Nerf sensitif, puis moelle épinière, puis nerf moteur, puis muscle",
            "Moelle, puis récepteur, puis muscle",
            "Muscle, puis nerf moteur, puis moelle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’ordre de la leçon : récepteur, conducteur sensitif, centre nerveux, conducteur moteur, effecteur."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l01_reflexes_innes_p05",
      "order": 5,
      "title": "Applications : réflexe rotulien et évaluation du réflexe inné",
      "summary": "Reconnaître un réflexe inné dans une situation nouvelle et mobiliser ses caractéristiques et ses organes.",
      "conceptExplanation": "La situation d’évaluation de la leçon décrit le retrait du bras lorsqu’on touche de la main un objet causant de la douleur : c’est un réflexe inné, réponse involontaire à un stimulus particulier, toujours la même à la suite du stimulus qui la déclenche.\nL’exercice d’évaluation du réflexe rotulien montre la même organisation : un choc sous la rotule, appliqué au marteau, projette la jambe en avant.\nDans les deux cas, on retrouve les caractéristiques du réflexe inné et les organes de l’arc réflexe : récepteur, nerf sensitif, moelle épinière, nerf moteur, muscle effecteur.\nL’organisme effectue donc les mouvements réflexes innés de manière inconsciente grâce à l’intervention de certains organes : c’est la conclusion générale de la leçon.",
      "keyRule": "Devant toute situation nouvelle : nomme le réflexe, cite ses caractères, identifie les organes, puis décris l’arc réflexe.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la projection de la jambe après un choc sous la rotule",
        "statement": "Lors d’un examen médical, un choc sous la rotule projette la jambe d’un élève en avant. Explique ce phénomène.",
        "methodSteps": [
          "La réaction de la jambe est un mouvement réflexe inné, le réflexe rotulien.",
          "Les organes sont : un récepteur au niveau du genou, un nerf sensitif, la moelle épinière, un nerf moteur et le muscle de la jambe.",
          "Le choc excite le récepteur : l’influx sensitif gagne la moelle, qui le convertit en influx moteur.",
          "L’influx moteur arrive au muscle, qui se contracte et projette la jambe en avant."
        ],
        "conclusion": "Le réflexe rotulien suit le même arc réflexe que le retrait de la patte de la grenouille."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Le réflexe rotulien",
          "stepTheme": "Le réflexe rotulien",
          "stepBadge": "Le réflexe rotulien",
          "paragraphText": "À l’aide d’un marteau, le médecin applique un choc sous la rotule d’un élève assis sur une table.\nLa jambe de l’élève est projetée en avant : c’est un mouvement réflexe inné.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p05_q1",
            "type": "mcq",
            "prompt": "La projection de la jambe après le choc sous la rotule est :",
            "options": [
              "Un mouvement volontaire",
              "Un réflexe inné",
              "Un réflexe conditionnel appris",
              "Une décision du cerveau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’exercice d’évaluation présente ce phénomène comme un mouvement réflexe inné."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une réponse involontaire et toujours la même",
          "stepTheme": "Une réponse involontaire et toujours la même",
          "stepBadge": "Une réponse involontaire et toujours la même",
          "paragraphText": "La situation d’évaluation définit le réflexe inné comme une réponse involontaire à un stimulus particulier.\nCette réponse est toujours la même à la suite du stimulus qui la déclenche.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p05_q2",
            "type": "mcq",
            "prompt": "D’après la situation d’évaluation, le réflexe inné est une réponse :",
            "options": [
              "Volontaire et variable",
              "Involontaire, toujours la même à la suite du stimulus qui la déclenche",
              "Apprise par répétition",
              "Réservée aux animaux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition donnée est celle d’une réponse involontaire et stéréotypée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Expliquer un réflexe en quatre temps",
          "stepTheme": "Expliquer un réflexe en quatre temps",
          "stepBadge": "Expliquer un réflexe en quatre temps",
          "paragraphText": "Méthode : nommer la réaction, citer ses caractéristiques, identifier les organes, puis décrire le trajet de l’influx.\nC’est la démarche demandée dans les situations d’évaluation de la leçon.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p05_q3",
            "type": "mcq",
            "prompt": "Pour expliquer un réflexe inné en évaluation, il faut d’abord :",
            "options": [
              "Dessiner le cerveau",
              "Nommer la réaction et citer ses caractéristiques",
              "Ignorer les organes",
              "Décrire un apprentissage"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les consignes de la leçon demandent de nommer la réaction et de citer les caractéristiques du réflexe inné."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les organes à identifier dans toute situation",
          "stepTheme": "Les organes à identifier dans toute situation",
          "stepBadge": "Les organes à identifier dans toute situation",
          "paragraphText": "Les organes du réflexe inné sont les récepteurs, les conducteurs sensitif et moteur, le centre nerveux et les effecteurs.\nOn les retrouve dans le retrait de la main, le retrait de la patte et le réflexe rotulien.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p05_q4",
            "type": "mcq",
            "prompt": "Quel ensemble correspond aux organes d’un réflexe inné ?",
            "options": [
              "Récepteur, nerf sensitif, moelle épinière, nerf moteur, muscle",
              "Cerveau, œil, langue, sang, os",
              "Peau seule et muscle seul",
              "Nerf moteur, cerveau, cœur, muscle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon liste récepteurs, conducteurs, moelle épinière comme centre et muscles comme effecteurs."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Conclusion générale de la leçon",
          "stepTheme": "Conclusion générale de la leçon",
          "stepBadge": "Conclusion générale de la leçon",
          "paragraphText": "Conclusion générale : l’organisme effectue les mouvements réflexes innés de manière inconsciente grâce à l’intervention de certains organes.\nLes deux hypothèses de la leçon sont ainsi vérifiées.",
          "exercise": {
            "id": "premiere_d_svt_l01_reflexes_innes_p05_q5",
            "type": "mcq",
            "prompt": "La conclusion générale de la leçon affirme que les réflexes innés sont effectués :",
            "options": [
              "Consciemment, grâce au cerveau",
              "De manière inconsciente, grâce à l’intervention de certains organes",
              "Uniquement chez la grenouille",
              "Après apprentissage"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le texte même de la conclusion générale de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p05_q1",
          "type": "mcq",
          "prompt": "La projection de la jambe après le choc sous la rotule est :",
          "options": [
            "Un mouvement volontaire",
            "Un réflexe inné",
            "Un réflexe conditionnel appris",
            "Une décision du cerveau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’exercice d’évaluation présente ce phénomène comme un mouvement réflexe inné."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p05_q2",
          "type": "mcq",
          "prompt": "D’après la situation d’évaluation, le réflexe inné est une réponse :",
          "options": [
            "Volontaire et variable",
            "Involontaire, toujours la même à la suite du stimulus qui la déclenche",
            "Apprise par répétition",
            "Réservée aux animaux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition donnée est celle d’une réponse involontaire et stéréotypée."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p05_q3",
          "type": "mcq",
          "prompt": "Pour expliquer un réflexe inné en évaluation, il faut d’abord :",
          "options": [
            "Dessiner le cerveau",
            "Nommer la réaction et citer ses caractéristiques",
            "Ignorer les organes",
            "Décrire un apprentissage"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les consignes de la leçon demandent de nommer la réaction et de citer les caractéristiques du réflexe inné."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p05_q4",
          "type": "mcq",
          "prompt": "Quel ensemble correspond aux organes d’un réflexe inné ?",
          "options": [
            "Récepteur, nerf sensitif, moelle épinière, nerf moteur, muscle",
            "Cerveau, œil, langue, sang, os",
            "Peau seule et muscle seul",
            "Nerf moteur, cerveau, cœur, muscle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon liste récepteurs, conducteurs, moelle épinière comme centre et muscles comme effecteurs."
        },
        {
          "id": "premiere_d_svt_l01_reflexes_innes_p05_q5",
          "type": "mcq",
          "prompt": "La conclusion générale de la leçon affirme que les réflexes innés sont effectués :",
          "options": [
            "Consciemment, grâce au cerveau",
            "De manière inconsciente, grâce à l’intervention de certains organes",
            "Uniquement chez la grenouille",
            "Après apprentissage"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le texte même de la conclusion générale de la leçon."
        }
      ]
    }
  ]
};
