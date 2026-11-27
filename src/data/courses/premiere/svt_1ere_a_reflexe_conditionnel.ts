import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 1 : Le réflexe conditionnel » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=895
export const SVT_1ERE_A_L01_REFLEXE_CONDITIONNEL: CurriculumChapter = {
  "id": "premiere_a1_svt_l01_reflexe_conditionnel",
  "subjectId": "svt",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 1,
  "title": "Leçon 1 : Le réflexe conditionnel",
  "summary": "Le chien de Pavlov apprend à saliver au son du métronome associé à la nourriture : le réflexe conditionnel s'installe par apprentissage, grâce à une nouvelle liaison corticale, et apporte adaptation, automatismes et possibilités de dressage.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=895",
  "points": [
    {
      "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01",
      "order": 1,
      "title": "L'expérience de Pavlov : le son devient signal de la nourriture",
      "summary": "Suivre les étapes de l'expérience de Pavlov sur la salivation du chien, du stimulus neutre au réflexe acquis.",
      "conceptExplanation": "Pavlov et ses collaborateurs ont étudié la salivation d'un chien affamé porteur d'une fistule.\nLa nourriture donnée directement provoque la salivation au bout de quelques secondes. Le son du métronome seul ne provoque pas de salivation.\nAssocié plusieurs fois à la nourriture, le son du métronome finit par provoquer à lui seul la salivation et les mouvements correspondants.\nQuatre jours après, si le son est présenté seul à plusieurs reprises sans nourriture, la salivation diminue progressivement jusqu'à disparaître.",
      "keyRule": "Associer plusieurs fois le son à la nourriture fait du son seul un déclencheur de la salivation ; sans entretien, le réflexe s'éteint.",
      "formulas": [],
      "workedExample": {
        "title": "L'expérience de Pavlov, étape par étape",
        "statement": "Un chien affamé reçoit de la nourriture, puis entend le métronome seul, puis le métronome associé à la nourriture. Que se passe-t-il ?",
        "methodSteps": [
          "La nourriture seule déclenche la salivation ; le métronome seul ne déclenche rien.",
          "Après plusieurs associations métronome puis nourriture, le métronome seul provoque la salivation.",
          "Quatre jours après, le métronome présenté seul sans nourriture fait diminuer puis disparaître la salivation."
        ],
        "conclusion": "Le réflexe de salivation au son s'installe par apprentissage, puis disparaît s'il n'est pas entretenu."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La nourriture déclenche la salivation",
          "stepTheme": "La nourriture déclenche la salivation",
          "stepBadge": "La nourriture déclenche la salivation",
          "paragraphText": "• Fait de départ de l'expérience : on donne directement à manger à un chien affamé porteur d'une fistule.\nAu bout de quelques secondes, la salive commence à couler.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q1",
            "type": "mcq",
            "prompt": "Au début de l'expérience de Pavlov, la nourriture donnée au chien provoque :",
            "options": [
              "Aucune réaction",
              "La salivation au bout de quelques secondes",
              "Uniquement des mouvements des oreilles",
              "La fuite du chien"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultat de la leçon : la nourriture provoque une salivation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le son seul ne provoque rien au départ",
          "stepTheme": "Le son seul ne provoque rien au départ",
          "stepBadge": "Le son seul ne provoque rien au départ",
          "paragraphText": "Lorsqu'on fait entendre les battements du métronome seul, cela ne provoque pas de salivation.\nLe son est donc, au départ, sans effet sur la salivation.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q2",
            "type": "mcq",
            "prompt": "Avant tout apprentissage, le son du métronome seul provoque :",
            "options": [
              "Une forte salivation",
              "Des mouvements de mastication",
              "La salivation puis l'extinction",
              "Pas de salivation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Résultat de la leçon : son seul, pas de salivation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Associer le son et la nourriture",
          "stepTheme": "Associer le son et la nourriture",
          "stepBadge": "Associer le son et la nourriture",
          "paragraphText": "À plusieurs reprises, on fait entendre au chien les battements du métronome et on lui donne immédiatement après à manger.\nC'est la répétition de cette association qui installe le nouveau réflexe.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q3",
            "type": "mcq",
            "prompt": "Pendant la phase d'association, Pavlov fait entendre le métronome :",
            "options": [
              "Puis donne immédiatement après à manger, à plusieurs reprises",
              "Après avoir donné la nourriture",
              "Une seule fois seulement",
              "Sans jamais donner à manger"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le protocole décrit dans la présentation de l'expérience."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le son seul finit par déclencher la salivation",
          "stepTheme": "Le son seul finit par déclencher la salivation",
          "stepBadge": "Le son seul finit par déclencher la salivation",
          "paragraphText": "Après quelques répétitions, le bruit du métronome seul suffit à provoquer la salivation et les mouvements correspondants.\nLe son a donc acquis un pouvoir déclencheur qu'il n'avait pas au départ.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q4",
            "type": "mcq",
            "prompt": "Après plusieurs associations son et nourriture, le son seul :",
            "options": [
              "Ne provoque toujours rien",
              "Provoque uniquement l'écoute attentive",
              "Provoque la salivation",
              "Fait fuir le chien"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Résultat de la leçon : son seul provoque la salivation après apprentissage."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le piège de l'extinction",
          "stepTheme": "Le piège de l'extinction",
          "stepBadge": "Le piège de l'extinction",
          "paragraphText": "Quatre jours après, l'animal est à nouveau soumis au son du métronome seul.\nAu bout de quelques essais, la salivation diminue jusqu'à ce que le chien ne salive plus : le réflexe non entretenu disparaît.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q5",
            "type": "mcq",
            "prompt": "Quatre jours après, le son présenté seul à plusieurs reprises entraîne :",
            "options": [
              "Une salivation de plus en plus forte",
              "Une salivation identique",
              "Une salivation immédiate et définitive",
              "Une diminution puis la disparition de la salivation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Analyse de la leçon : la salivation diminue progressivement pour s'annuler."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La lumière rouge de l'activité d'application",
          "stepTheme": "La lumière rouge de l'activité d'application",
          "stepBadge": "La lumière rouge de l'activité d'application",
          "paragraphText": "Dans l'activité d'application, une lumière rouge remplace le métronome.\nLumière seule au départ : pas de salivation ; viande seule : salivation ; lumière puis viande répétées : salivation ; lumière seule ensuite : salivation ; lumière seule prolongée sans viande : plus de salivation.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q6",
            "type": "mcq",
            "prompt": "Dans l'activité d'application, après répétition lumière puis viande, la lumière rouge seule provoque :",
            "options": [
              "Pas de salivation",
              "La salivation",
              "La fuite du chien",
              "Uniquement un clignement des yeux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Corrigé de l'activité : expérience 4, salivation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q1",
          "type": "mcq",
          "prompt": "Au début de l'expérience de Pavlov, la nourriture donnée au chien provoque :",
          "options": [
            "Aucune réaction",
            "La salivation au bout de quelques secondes",
            "Uniquement des mouvements des oreilles",
            "La fuite du chien"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultat de la leçon : la nourriture provoque une salivation."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q2",
          "type": "mcq",
          "prompt": "Avant tout apprentissage, le son du métronome seul provoque :",
          "options": [
            "Une forte salivation",
            "Des mouvements de mastication",
            "La salivation puis l'extinction",
            "Pas de salivation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Résultat de la leçon : son seul, pas de salivation."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q3",
          "type": "mcq",
          "prompt": "Pendant la phase d'association, Pavlov fait entendre le métronome :",
          "options": [
            "Puis donne immédiatement après à manger, à plusieurs reprises",
            "Après avoir donné la nourriture",
            "Une seule fois seulement",
            "Sans jamais donner à manger"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le protocole décrit dans la présentation de l'expérience."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q4",
          "type": "mcq",
          "prompt": "Après plusieurs associations son et nourriture, le son seul :",
          "options": [
            "Ne provoque toujours rien",
            "Provoque uniquement l'écoute attentive",
            "Provoque la salivation",
            "Fait fuir le chien"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Résultat de la leçon : son seul provoque la salivation après apprentissage."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q5",
          "type": "mcq",
          "prompt": "Quatre jours après, le son présenté seul à plusieurs reprises entraîne :",
          "options": [
            "Une salivation de plus en plus forte",
            "Une salivation identique",
            "Une salivation immédiate et définitive",
            "Une diminution puis la disparition de la salivation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Analyse de la leçon : la salivation diminue progressivement pour s'annuler."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p01_q6",
          "type": "mcq",
          "prompt": "Dans l'activité d'application, après répétition lumière puis viande, la lumière rouge seule provoque :",
          "options": [
            "Pas de salivation",
            "La salivation",
            "La fuite du chien",
            "Uniquement un clignement des yeux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Corrigé de l'activité : expérience 4, salivation."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02",
      "order": 2,
      "title": "Stimulus absolu, stimulus neutre et stimulus conditionnel",
      "summary": "Distinguer le stimulus absolu (la viande), le stimulus neutre devenu conditionnel (le son) et nommer le réflexe conditionnel et l'extinction.",
      "conceptExplanation": "Avant l'apprentissage, la viande déclenche immédiatement la salivation : la viande est le stimulus absolu ou inconditionnel, et cette salivation est le réflexe inné de salivation, dû à des voies nerveuses existant dès la naissance.\nPendant l'apprentissage, le son, au départ stimulus neutre, est associé plusieurs fois au stimulus absolu ; il déclenche progressivement à lui seul la salivation : il devient le stimulus conditionnel et la salivation déclenchée devient le réflexe acquis ou réflexe conditionnel.\nAprès l'apprentissage, si le conditionnement n'est pas entretenu, le réflexe disparaît : c'est l'extinction.\nLes réflexes sont des mouvements involontaires, inconscients, brusques et automatiques qui se réalisent à la suite d'une excitation appropriée. Le réflexe conditionnel résulte d'un apprentissage et varie d'un individu à un autre.",
      "keyRule": "Viande = stimulus absolu et réflexe inné ; son associé puis seul = stimulus conditionnel et réflexe acquis ; réflexe non entretenu = extinction.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le texte de l'exercice 2 de consolidation",
        "statement": "Complète : la viande est un stimulus … dans le réflexe de salivation, ce réflexe est … ; le son du métronome est au départ un stimulus … ; après association, il devient … et le réflexe est …",
        "methodSteps": [
          "La viande est le stimulus absolu et le réflexe de salivation à la viande est inné.",
          "Le son est d'abord un stimulus neutre ; associé plusieurs fois, il devient un stimulus conditionnel.",
          "Le réflexe de salivation déclenché par le son seul est alors un réflexe acquis."
        ],
        "conclusion": "Corrigé de l'exercice 2 : absolu, inné, neutre, puis stimulus conditionnel et réflexe acquis."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le stimulus absolu ou inconditionnel",
          "stepTheme": "Le stimulus absolu ou inconditionnel",
          "stepBadge": "Le stimulus absolu ou inconditionnel",
          "paragraphText": "• Stimulus absolu (ou inconditionnel) : stimulus qui déclenche immédiatement la réaction attendue, sans apprentissage.\nDans l'expérience, c'est la viande, qui déclenche la salivation.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q1",
            "type": "mcq",
            "prompt": "Dans l'expérience de Pavlov, le stimulus absolu est :",
            "options": [
              "Le son du métronome",
              "La lumière rouge",
              "La viande (la nourriture)",
              "La fistule du chien"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation de la leçon : la viande constitue le stimulus absolu."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le réflexe inné de salivation",
          "stepTheme": "Le réflexe inné de salivation",
          "stepBadge": "Le réflexe inné de salivation",
          "paragraphText": "La réaction de salivation déclenchée par le stimulus absolu est le réflexe inné de salivation.\nIl est dû à l'existence, dès la naissance, des voies nerveuses entre les structures impliquées.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q2",
            "type": "mcq",
            "prompt": "Le réflexe inné de salivation existe grâce à :",
            "options": [
              "Des voies nerveuses présentes dès la naissance",
              "Un apprentissage répété",
              "Une liaison corticale nouvelle",
              "L'association au métronome"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'interprétation donnée par la leçon pour la période avant apprentissage."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le stimulus neutre devenu conditionnel",
          "stepTheme": "Le stimulus neutre devenu conditionnel",
          "stepBadge": "Le stimulus neutre devenu conditionnel",
          "paragraphText": "Le son est au départ un stimulus neutre : il ne déclenche pas la salivation.\nAssocié plusieurs fois au stimulus absolu, il devient le stimulus conditionnel, capable de déclencher seul la salivation.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q3",
            "type": "mcq",
            "prompt": "Le son du métronome devient un stimulus conditionnel lorsqu'il :",
            "options": [
              "A été associé plusieurs fois au stimulus absolu et déclenche seul la salivation",
              "Est entendu une seule fois",
              "Est plus fort que la viande",
              "N'est plus jamais présenté"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition construite pendant l'apprentissage dans la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le réflexe conditionnel varie d'un individu à l'autre",
          "stepTheme": "Le réflexe conditionnel varie d'un individu à l'autre",
          "stepBadge": "Le réflexe conditionnel varie d'un individu à l'autre",
          "paragraphText": "Le réflexe conditionnel résulte d'un apprentissage ou d'une éducation.\nIl varie donc d'un individu à un autre, contrairement au réflexe inné présent dès la naissance.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q4",
            "type": "mcq",
            "prompt": "Le réflexe conditionnel se distingue du réflexe inné parce qu'il :",
            "options": [
              "Existe dès la naissance chez tous",
              "Ne disparaît jamais",
              "Résulte d'un apprentissage et varie d'un individu à un autre",
              "Ne nécessite aucun stimulus"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Phrase de l'interprétation de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre réflexe inné et réflexe acquis",
          "stepTheme": "Confondre réflexe inné et réflexe acquis",
          "stepBadge": "Confondre réflexe inné et réflexe acquis",
          "paragraphText": "Piège : la mise en place d'un réflexe peut se faire sans apprentissage préalable dans le cas du réflexe inné.\nEn revanche, le réflexe acquis s'obtient uniquement à la suite d'un processus d'apprentissage.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q5",
            "type": "mcq",
            "prompt": "Le réflexe acquis s'obtient :",
            "options": [
              "Dès la naissance, sans apprentissage",
              "À la suite d'un processus d'apprentissage",
              "Uniquement par la viande",
              "Sans aucune répétition"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion de la première partie de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'assiette rouge de la situation d'apprentissage",
          "stepTheme": "L'assiette rouge de la situation d'apprentissage",
          "stepBadge": "L'assiette rouge de la situation d'apprentissage",
          "paragraphText": "Un élève donne chaque jour à manger à son chien dans une assiette rouge.\nDeux mois après, le chien salive dès qu'il voit l'assiette rouge : l'assiette, stimulus neutre au départ, est devenue un stimulus conditionnel par association répétée à la nourriture.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q6",
            "type": "mcq",
            "prompt": "Dans la situation d'apprentissage, le chien salive à la vue de l'assiette rouge parce que :",
            "options": [
              "L'assiette contient toujours de la viande",
              "La couleur rouge déclenche naturellement la salivation",
              "Le chien a faim en permanence",
              "L'assiette a été associée chaque jour à la nourriture pendant deux mois"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'association répétée assiette-nourriture qui explique ce comportement, objet de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q1",
          "type": "mcq",
          "prompt": "Dans l'expérience de Pavlov, le stimulus absolu est :",
          "options": [
            "Le son du métronome",
            "La lumière rouge",
            "La viande (la nourriture)",
            "La fistule du chien"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation de la leçon : la viande constitue le stimulus absolu."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q2",
          "type": "mcq",
          "prompt": "Le réflexe inné de salivation existe grâce à :",
          "options": [
            "Des voies nerveuses présentes dès la naissance",
            "Un apprentissage répété",
            "Une liaison corticale nouvelle",
            "L'association au métronome"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'interprétation donnée par la leçon pour la période avant apprentissage."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q3",
          "type": "mcq",
          "prompt": "Le son du métronome devient un stimulus conditionnel lorsqu'il :",
          "options": [
            "A été associé plusieurs fois au stimulus absolu et déclenche seul la salivation",
            "Est entendu une seule fois",
            "Est plus fort que la viande",
            "N'est plus jamais présenté"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition construite pendant l'apprentissage dans la leçon."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q4",
          "type": "mcq",
          "prompt": "Le réflexe conditionnel se distingue du réflexe inné parce qu'il :",
          "options": [
            "Existe dès la naissance chez tous",
            "Ne disparaît jamais",
            "Résulte d'un apprentissage et varie d'un individu à un autre",
            "Ne nécessite aucun stimulus"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Phrase de l'interprétation de la leçon."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q5",
          "type": "mcq",
          "prompt": "Le réflexe acquis s'obtient :",
          "options": [
            "Dès la naissance, sans apprentissage",
            "À la suite d'un processus d'apprentissage",
            "Uniquement par la viande",
            "Sans aucune répétition"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion de la première partie de la leçon."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p02_q6",
          "type": "mcq",
          "prompt": "Dans la situation d'apprentissage, le chien salive à la vue de l'assiette rouge parce que :",
          "options": [
            "L'assiette contient toujours de la viande",
            "La couleur rouge déclenche naturellement la salivation",
            "Le chien a faim en permanence",
            "L'assiette a été associée chaque jour à la nourriture pendant deux mois"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'association répétée assiette-nourriture qui explique ce comportement, objet de la leçon."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03",
      "order": 3,
      "title": "Le mécanisme : trajet de l'influx et nouvelle liaison corticale",
      "summary": "Décrire le trajet de l'influx nerveux du réflexe inné, la nouvelle liaison entre aire auditive et aire gustative, et les conditions d'obtention et de maintien du réflexe conditionnel.",
      "conceptExplanation": "Dans le réflexe inné, le récepteur est la langue ; le message nerveux est véhiculé par la fibre nerveuse afférente (sensitive) jusqu'au centre nerveux bulbaire, où il est transformé en message moteur conduit par la fibre nerveuse efférente (motrice) jusqu'à l'effecteur, la glande salivaire.\nAu cours de l'apprentissage, il s'établit progressivement, après plusieurs répétitions, au niveau du cortex cérébral, une nouvelle liaison nerveuse entre l'aire corticale auditive et l'aire corticale gustative. Les documents montrent successivement la liaison absente, en début d'établissement, puis définitivement établie.\nConditions d'obtention et de maintien : le stimulus neutre doit toujours être associé au stimulus absolu ; dans le texte de la leçon, il est écrit que le stimulus absolu précède toujours le stimulus neutre choisi ; l'apprentissage doit être plusieurs fois répété dans le même sens ; une fois acquis, le réflexe conditionnel doit toujours être entretenu, sinon il y a risque d'extinction.",
      "keyRule": "Sans cerveau, le circuit inné suffit ; avec l'apprentissage, une nouvelle liaison corticale rend le son efficace, à condition d'associer, de répéter et d'entretenir.",
      "formulas": [],
      "workedExample": {
        "title": "Classer les éléments du trajet (activité d'application)",
        "statement": "Classe : bulbe rachidien, glande salivaire, neurone moteur, neurone d'association, neurone sensitif, oreille interne, selon centre nerveux, effecteur, structure nerveuse et récepteur.",
        "methodSteps": [
          "Le bulbe rachidien est le centre nerveux et la glande salivaire l'effecteur.",
          "Les neurones moteur, d'association et sensitif sont les structures nerveuses.",
          "L'oreille interne est le récepteur du son."
        ],
        "conclusion": "Corrigé de l'activité : centre = bulbe rachidien ; effecteur = glande salivaire ; structures = neurones moteur, d'association et sensitif ; récepteur = oreille interne."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le trajet du réflexe inné de salivation",
          "stepTheme": "Le trajet du réflexe inné de salivation",
          "stepBadge": "Le trajet du réflexe inné de salivation",
          "paragraphText": "Le message naît au niveau de la langue, récepteur du goût de la viande.\nIl est véhiculé par la fibre afférente jusqu'au centre bulbaire, transformé en message moteur, puis conduit par la fibre efférente jusqu'à la glande salivaire.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q1",
            "type": "mcq",
            "prompt": "Dans le réflexe inné, la fibre nerveuse afférente conduit le message :",
            "options": [
              "De la glande salivaire vers le bulbe",
              "De l'oreille vers le cortex uniquement",
              "Du récepteur (la langue) vers le centre nerveux bulbaire",
              "Du muscle vers la langue"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation de la leçon sur le circuit du réflexe inné."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'effecteur : la glande salivaire",
          "stepTheme": "L'effecteur : la glande salivaire",
          "stepBadge": "L'effecteur : la glande salivaire",
          "paragraphText": "• Organe effecteur : organe qui réalise la réponse.\nPour la salivation, l'effecteur est la glande salivaire, atteinte par la fibre nerveuse efférente (motrice).",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q2",
            "type": "mcq",
            "prompt": "L'organe effecteur du réflexe de salivation est :",
            "options": [
              "La glande salivaire",
              "La langue",
              "L'oreille",
              "Le bulbe rachidien"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé de l'activité d'application de la partie II."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une nouvelle liaison au niveau du cortex",
          "stepTheme": "Une nouvelle liaison au niveau du cortex",
          "stepBadge": "Une nouvelle liaison au niveau du cortex",
          "paragraphText": "Au cours de l'apprentissage, une nouvelle liaison nerveuse s'établit progressivement au niveau du cortex cérébral.\nElle relie l'aire corticale auditive à l'aire corticale gustative, après plusieurs répétitions.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q3",
            "type": "mcq",
            "prompt": "La nouvelle liaison créée par l'apprentissage relie :",
            "options": [
              "L'aire visuelle et l'aire motrice uniquement",
              "Le bulbe et la moelle épinière",
              "La langue et l'oreille directement",
              "L'aire corticale auditive et l'aire corticale gustative"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le mécanisme décrit dans l'interprétation de la partie II."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le rôle du cerveau dans le réflexe conditionnel",
          "stepTheme": "Le rôle du cerveau dans le réflexe conditionnel",
          "stepBadge": "Le rôle du cerveau dans le réflexe conditionnel",
          "paragraphText": "En A, le circuit du réflexe inné se réalise en absence du cerveau, avec le bulbe rachidien comme centre.\nEn B et C, le circuit du message nerveux conditionnel nécessite la présence du cerveau, où la liaison devient fonctionnelle.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q4",
            "type": "mcq",
            "prompt": "Le circuit du réflexe conditionnel nécessite :",
            "options": [
              "Uniquement le bulbe rachidien",
              "La présence du cerveau, où la nouvelle liaison devient fonctionnelle",
              "Uniquement la moelle épinière",
              "Aucun centre nerveux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse des documents A, B et C de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Les conditions d'obtention du réflexe conditionnel",
          "stepTheme": "Les conditions d'obtention du réflexe conditionnel",
          "stepBadge": "Les conditions d'obtention du réflexe conditionnel",
          "paragraphText": "Pour obtenir le réflexe conditionnel, le stimulus neutre choisi doit toujours être associé au stimulus absolu.\nL'apprentissage doit en outre être plusieurs fois répété dans le même sens.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q5",
            "type": "mcq",
            "prompt": "Parmi les conditions d'obtention du réflexe conditionnel, la leçon cite :",
            "options": [
              "Présenter le stimulus neutre une seule fois",
              "Associer toujours le stimulus neutre au stimulus absolu et répéter l'apprentissage dans le même sens",
              "Supprimer le stimulus absolu dès le début",
              "Changer de stimulus à chaque essai"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Liste des conditions donnée dans l'interprétation de la partie II."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un réflexe acquis doit être entretenu",
          "stepTheme": "Un réflexe acquis doit être entretenu",
          "stepBadge": "Un réflexe acquis doit être entretenu",
          "paragraphText": "Une fois acquis, le réflexe conditionnel doit toujours être entretenu.\nSinon, il y a risque d'extinction, comme le montre la disparition de la salivation au son seul répété sans nourriture.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q6",
            "type": "mcq",
            "prompt": "Si le réflexe conditionnel n'est pas entretenu, il risque :",
            "options": [
              "De devenir inné",
              "De se renforcer",
              "De changer de stimulus",
              "L'extinction"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Dernière condition de maintien listée par la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q1",
          "type": "mcq",
          "prompt": "Dans le réflexe inné, la fibre nerveuse afférente conduit le message :",
          "options": [
            "De la glande salivaire vers le bulbe",
            "De l'oreille vers le cortex uniquement",
            "Du récepteur (la langue) vers le centre nerveux bulbaire",
            "Du muscle vers la langue"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation de la leçon sur le circuit du réflexe inné."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q2",
          "type": "mcq",
          "prompt": "L'organe effecteur du réflexe de salivation est :",
          "options": [
            "La glande salivaire",
            "La langue",
            "L'oreille",
            "Le bulbe rachidien"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé de l'activité d'application de la partie II."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q3",
          "type": "mcq",
          "prompt": "La nouvelle liaison créée par l'apprentissage relie :",
          "options": [
            "L'aire visuelle et l'aire motrice uniquement",
            "Le bulbe et la moelle épinière",
            "La langue et l'oreille directement",
            "L'aire corticale auditive et l'aire corticale gustative"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le mécanisme décrit dans l'interprétation de la partie II."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q4",
          "type": "mcq",
          "prompt": "Le circuit du réflexe conditionnel nécessite :",
          "options": [
            "Uniquement le bulbe rachidien",
            "La présence du cerveau, où la nouvelle liaison devient fonctionnelle",
            "Uniquement la moelle épinière",
            "Aucun centre nerveux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse des documents A, B et C de la leçon."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q5",
          "type": "mcq",
          "prompt": "Parmi les conditions d'obtention du réflexe conditionnel, la leçon cite :",
          "options": [
            "Présenter le stimulus neutre une seule fois",
            "Associer toujours le stimulus neutre au stimulus absolu et répéter l'apprentissage dans le même sens",
            "Supprimer le stimulus absolu dès le début",
            "Changer de stimulus à chaque essai"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Liste des conditions donnée dans l'interprétation de la partie II."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p03_q6",
          "type": "mcq",
          "prompt": "Si le réflexe conditionnel n'est pas entretenu, il risque :",
          "options": [
            "De devenir inné",
            "De se renforcer",
            "De changer de stimulus",
            "L'extinction"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Dernière condition de maintien listée par la leçon."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04",
      "order": 4,
      "title": "Les avantages des réflexes conditionnels",
      "summary": "Montrer que les réflexes conditionnels permettent l'adaptation, les automatismes, l'éducation de l'homme et le dressage des animaux.",
      "conceptExplanation": "Les réflexes conditionnels acquis au cours de la vie jouent plusieurs rôles très importants : ils permettent l'adaptation de l'individu au milieu.\nIls donnent naissance à des comportements automatiques tels que la marche, l'écriture, le langage, la lecture, la natation et la conduite d'une voiture, et ils aident l'homme dans la vie.\nIls servent au développement de l'automatisme chez l'homme (exemple : la natation), à l'éducation de l'homme (la langue, l'écriture, la lecture) et au dressage des animaux (chiens de police, chiens pour aveugles, chiens de chasse, perroquets annonceurs).\nL'activité d'application ajoute, chez les animaux : le dressage pour des spectacles et la recherche de drogue ou de bombe ; chez les animaux et chez les hommes : l'apprentissage associatif, les moyens de communication, les signaux des rapports sociaux et l'adaptation individuelle ; chez les hommes : l'habituation et l'acquisition d'automatismes comme la conduite.",
      "keyRule": "Le réflexe conditionnel adapte l'individu à son milieu : automatismes et éducation chez l'homme, dressage chez l'animal.",
      "formulas": [],
      "workedExample": {
        "title": "Le singe des vols spatiaux (situation d'évaluation)",
        "statement": "Un singe appuie sur une touche quand un voyant est allumé pour obtenir de la nourriture. À partir de la 4e série, il n'omet plus jamais d'appuyer. Explique ce résultat.",
        "methodSteps": [
          "L'association régulière du stimulus neutre (la lumière) et du stimulus absolu (la nourriture) a créé une nouvelle liaison nerveuse entre l'aire visuelle et l'aire motrice.",
          "Cette liaison devenue efficace permet au singe d'appuyer directement sur la touche à la vue du voyant.",
          "Le nombre d'omissions passe de 5 en série 1 à 0 dès la série 4."
        ],
        "conclusion": "Corrigé de la situation d'évaluation : le comportement du singe dès la 4e série est un réflexe conditionnel."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'adaptation de l'individu au milieu",
          "stepTheme": "L'adaptation de l'individu au milieu",
          "stepBadge": "L'adaptation de l'individu au milieu",
          "paragraphText": "Les réflexes conditionnels acquis au cours de la vie permettent l'adaptation de l'individu au milieu.\nC'est le premier rôle cité par le texte de la partie III.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q1",
            "type": "mcq",
            "prompt": "Le premier rôle des réflexes conditionnels cité par le texte est :",
            "options": [
              "L'adaptation de l'individu au milieu",
              "La production de salive",
              "La croissance de l'organisme",
              "La digestion des aliments"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Texte de la partie III de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Des comportements devenus automatiques",
          "stepTheme": "Des comportements devenus automatiques",
          "stepBadge": "Des comportements devenus automatiques",
          "paragraphText": "Les réflexes conditionnels donnent naissance à des comportements automatiques.\nLa leçon cite la marche, l'écriture, le langage, la lecture, la natation et la conduite d'une voiture.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q2",
            "type": "mcq",
            "prompt": "Parmi ces comportements, lequel est cité comme automatisme issu des réflexes conditionnels ?",
            "options": [
              "La respiration au repos",
              "La croissance des ongles",
              "La natation",
              "La circulation du sang"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La natation est l'exemple d'automatisme donné dans l'analyse de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un outil d'éducation chez l'homme",
          "stepTheme": "Un outil d'éducation chez l'homme",
          "stepBadge": "Un outil d'éducation chez l'homme",
          "paragraphText": "Les réflexes conditionnels servent à l'éducation de l'homme.\nLa leçon donne en exemples la langue, l'écriture et la lecture.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q3",
            "type": "mcq",
            "prompt": "Pour l'éducation de l'homme, la leçon cite :",
            "options": [
              "Uniquement le sport",
              "La chasse et la pêche",
              "La conduite uniquement",
              "La langue, l'écriture et la lecture"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Analyse de la partie III : éducation de l'homme, langue, écriture, lecture."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le dressage des animaux",
          "stepTheme": "Le dressage des animaux",
          "stepBadge": "Le dressage des animaux",
          "paragraphText": "Le dressage des animaux repose sur les réflexes conditionnels.\nLa leçon cite les chiens de police, les chiens pour aveugles, les chiens de chasse et les perroquets annonceurs ; l'activité ajoute la recherche de drogue ou de bombe.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q4",
            "type": "mcq",
            "prompt": "La recherche de drogue ou de bombe par un chien relève, selon l'activité d'application, d'un avantage des réflexes conditionnels :",
            "options": [
              "Uniquement chez les hommes",
              "Chez les animaux",
              "Ni chez les animaux ni chez les hommes",
              "Uniquement en laboratoire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Corrigé de l'activité de la partie III : la recherche de drogue ou de bombe est classée chez les animaux."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas limiter l'avantage à l'animal de laboratoire",
          "stepTheme": "Ne pas limiter l'avantage à l'animal de laboratoire",
          "stepBadge": "Ne pas limiter l'avantage à l'animal de laboratoire",
          "paragraphText": "Les avantages concernent aussi la vie quotidienne et la société.\nLa conclusion générale précise que le réflexe acquis présente des avantages pour l'individu et pour la société.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q5",
            "type": "mcq",
            "prompt": "Selon la conclusion générale, les avantages du réflexe acquis concernent :",
            "options": [
              "Uniquement le chien de Pavlov",
              "Uniquement les sportifs",
              "L'individu et la société",
              "Aucun être humain"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Conclusion générale de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Identifier un réflexe conditionnel dans une situation",
          "stepTheme": "Identifier un réflexe conditionnel dans une situation",
          "stepBadge": "Identifier un réflexe conditionnel dans une situation",
          "paragraphText": "Méthode : repérer un stimulus d'abord neutre (voyant lumineux), associé régulièrement à un stimulus absolu (nourriture).\nSi le stimulus seul déclenche ensuite la réponse apprise, il s'agit d'un réflexe conditionnel, comme chez le singe des vols spatiaux dès la 4e série.",
          "exercise": {
            "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q6",
            "type": "mcq",
            "prompt": "Chez le singe de la situation d'évaluation, dès la 4e série, le comportement observé est :",
            "options": [
              "Un réflexe conditionnel",
              "Un réflexe inné",
              "Une extinction",
              "Un hasard sans apprentissage"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Déduction du corrigé de la situation d'évaluation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q1",
          "type": "mcq",
          "prompt": "Le premier rôle des réflexes conditionnels cité par le texte est :",
          "options": [
            "L'adaptation de l'individu au milieu",
            "La production de salive",
            "La croissance de l'organisme",
            "La digestion des aliments"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Texte de la partie III de la leçon."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q2",
          "type": "mcq",
          "prompt": "Parmi ces comportements, lequel est cité comme automatisme issu des réflexes conditionnels ?",
          "options": [
            "La respiration au repos",
            "La croissance des ongles",
            "La natation",
            "La circulation du sang"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La natation est l'exemple d'automatisme donné dans l'analyse de la leçon."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q3",
          "type": "mcq",
          "prompt": "Pour l'éducation de l'homme, la leçon cite :",
          "options": [
            "Uniquement le sport",
            "La chasse et la pêche",
            "La conduite uniquement",
            "La langue, l'écriture et la lecture"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Analyse de la partie III : éducation de l'homme, langue, écriture, lecture."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q4",
          "type": "mcq",
          "prompt": "La recherche de drogue ou de bombe par un chien relève, selon l'activité d'application, d'un avantage des réflexes conditionnels :",
          "options": [
            "Uniquement chez les hommes",
            "Chez les animaux",
            "Ni chez les animaux ni chez les hommes",
            "Uniquement en laboratoire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Corrigé de l'activité de la partie III : la recherche de drogue ou de bombe est classée chez les animaux."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q5",
          "type": "mcq",
          "prompt": "Selon la conclusion générale, les avantages du réflexe acquis concernent :",
          "options": [
            "Uniquement le chien de Pavlov",
            "Uniquement les sportifs",
            "L'individu et la société",
            "Aucun être humain"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Conclusion générale de la leçon."
        },
        {
          "id": "premiere_a1_svt_l01_reflexe_conditionnel_p04_q6",
          "type": "mcq",
          "prompt": "Chez le singe de la situation d'évaluation, dès la 4e série, le comportement observé est :",
          "options": [
            "Un réflexe conditionnel",
            "Un réflexe inné",
            "Une extinction",
            "Un hasard sans apprentissage"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Déduction du corrigé de la situation d'évaluation."
        }
      ]
    }
  ]
};
