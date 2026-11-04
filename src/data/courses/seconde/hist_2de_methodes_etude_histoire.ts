import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 2nde H2-Les méthodes d'étude de l'histoire.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const HIST_2DE_L02_METHODES_ETUDE_HISTOIRE: CurriculumChapter = {
  "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire",
  "subjectId": "histoire_geo",
  "gradeLevel": "seconde_a",
  "alsoForGrades": [
    "seconde_c"
  ],
  "order": 2,
  "title": "Leçon 2 : Les méthodes d'étude de l'histoire",
  "summary": "Les sources de l'histoire et la démarche scientifique de l'historien : collecte, critique, interprétation et synthèse.",
  "officialVolumeHours": 2,
  "contentVersion": 2,
  "source": "2nde H2-Les méthodes d'étude de l'histoire.pdf",
  "points": [
    {
      "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p01",
      "order": 1,
      "title": "Les sources écrites et orales",
      "summary": "Qu'est-ce qu'une source ; les écrits et la tradition orale.",
      "conceptExplanation": "Une source, en histoire, est tout support qui atteste d'un fait ou d'un événement du passé humain. Les sources sont variées.\n\n1. Les sources écrites : manuscrits, correspondances, documents officiels (traités, lois), ouvrages (autobiographies, mémoires), récits d'explorateurs, livres saints... Elles sont propres aux sociétés de l'écriture (Égypte antique, Occident, Chine) et plus ou moins bien conservées.\n\n2. Les sources orales (la tradition orale) : témoignages transmis d'une personne à une autre, de génération en génération (mythes, légendes, contes, épopées, récits, chants, généalogies), souvent par des spécialistes comme les griots. Elles sont la principale source de l'histoire des peuples qui n'ont pas connu tôt l'écriture, comme dans de nombreuses régions d'Afrique. Leurs limites : une datation imprécise, la fragilité de la mémoire, des déformations possibles.",
      "keyRule": "Source = tout support qui atteste d'un fait passé ; écrites (textes, traités, récits) et orales (griots, légendes, épopées), principales sources en Afrique.",
      "formulas": [],
      "workedExample": {
        "title": "Classer des sources",
        "statement": "Classe : un traité de 1893, le récit d'un griot, une légende baoulé, les mémoires d'un dirigeant.",
        "methodSteps": [
          "Sources écrites : le traité, les mémoires du dirigeant.",
          "Sources orales : le récit du griot, la légende baoulé."
        ],
        "conclusion": "On classe une source selon sa forme : écrite ou transmise oralement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Qu'est-ce qu'une source ?",
          "stepTheme": "Qu'est-ce qu'une source ?",
          "stepBadge": "Qu'est-ce qu'une source ?",
          "paragraphText": "Une source, en histoire, est tout support qui atteste d'un fait ou d'un événement du passé humain.\nC'est l'outil indispensable de l'historien.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p01_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une source en histoire ?",
            "options": [
              "Le point où un fleuve prend naissance",
              "Une opinion personnelle de l'historien",
              "Tout support qui atteste d'un fait ou d'un événement du passé humain",
              "Un résumé écrit par un élève"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La source est la trace du passé sur laquelle l'historien s'appuie."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les sources écrites",
          "stepTheme": "Les sources écrites",
          "stepBadge": "Les sources écrites",
          "paragraphText": "Les sources écrites sont des textes : manuscrits, lettres, documents officiels (traités, lois), mémoires, récits d'explorateurs, livres saints.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p01_q2",
            "type": "mcq",
            "prompt": "Laquelle de ces sources est une source écrite ?",
            "options": [
              "Un traité signé entre deux royaumes",
              "Le récit d'un griot",
              "Une gravure rupestre",
              "Un squelette ancien"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un traité est un texte : c'est une source écrite."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les sociétés de l'écriture",
          "stepTheme": "Les sociétés de l'écriture",
          "stepBadge": "Les sociétés de l'écriture",
          "paragraphText": "Les sources écrites sont propres aux sociétés qui ont connu tôt l'écriture : l'Égypte antique, l'Occident, la Chine...\nEn Afrique, les écrits sont plus rares et viennent souvent d'auteurs arabes et européens.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p01_q3",
            "type": "mcq",
            "prompt": "Pourquoi les sources écrites sont-elles plus rares pour une partie de l'histoire africaine ?",
            "options": [
              "Parce que les Africains n'avaient pas de passé à raconter",
              "Parce que tous les écrits africains ont été détruits par la pluie",
              "Parce que l'écriture a été inventée en Afrique au XXe siècle",
              "Parce que de nombreuses sociétés africaines ont transmis leur passé surtout oralement"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Beaucoup de sociétés africaines ont privilégié la transmission orale ; leurs écrits sont donc plus rares."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La tradition orale",
          "stepTheme": "La tradition orale",
          "stepBadge": "La tradition orale",
          "paragraphText": "Une source orale est un témoignage transmis d'une personne à une autre, de génération en génération.\nExemples : mythes, légendes, contes, épopées, chants, généalogies, récits des griots.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p01_q4",
            "type": "mcq",
            "prompt": "Laquelle de ces sources est une source orale ?",
            "options": [
              "Les mémoires écrits d'un dirigeant politique",
              "Une légende baoulé racontée par les anciens",
              "Une monnaie de l'Antiquité",
              "Un reportage télévisé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La légende transmise de bouche à oreille est une source orale."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le rôle des griots",
          "stepTheme": "Le rôle des griots",
          "stepBadge": "Le rôle des griots",
          "paragraphText": "Les griots et les traditionnistes sont des spécialistes de la parole.\nIls conservent et transmettent l'histoire, les généalogies et les épopées de leur peuple.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p01_q5",
            "type": "mcq",
            "prompt": "Quel est le rôle des griots dans l'histoire africaine ?",
            "options": [
              "Fouiller le sol pour trouver des objets anciens",
              "Conserver et transmettre oralement l'histoire et les généalogies",
              "Rédiger les traités entre les royaumes",
              "Photographier les événements importants"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les griots sont la mémoire vivante des sociétés de l'oralité."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les limites de l'oral",
          "stepTheme": "Les limites de l'oral",
          "stepBadge": "Les limites de l'oral",
          "paragraphText": "La tradition orale est une source valable, mais elle a des limites :\n• une datation souvent imprécise ;\n• la fragilité de la mémoire ;\n• des déformations au fil des générations.\nElle doit donc être critiquée, comme toute source.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p01_q6",
            "type": "mcq",
            "prompt": "Quelle est une limite de la tradition orale ?",
            "options": [
              "Elle ne parle jamais du passé",
              "Elle n'existe pas en Afrique",
              "Elle est toujours parfaitement exacte",
              "Sa datation est souvent imprécise"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sans écrit, il est difficile de dater précisément les événements rapportés."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "L'Afrique et ses sources",
          "stepTheme": "L'Afrique et ses sources",
          "stepBadge": "L'Afrique et ses sources",
          "paragraphText": "L'histoire de l'Afrique ne se fait pas qu'avec les sources orales : l'historien croise les sources orales, écrites, archéologiques et les sciences auxiliaires.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p01_q7",
            "type": "mcq",
            "prompt": "« L'histoire de l'Afrique ne peut se faire qu'avec les sources orales. » Cette affirmation est :",
            "options": [
              "Fausse, car l'historien croise aussi les sources écrites et archéologiques",
              "Vraie, car il n'existe aucun écrit sur l'Afrique",
              "Vraie, car l'archéologie est interdite en Afrique",
              "Fausse, car les sources orales sont inutiles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Toutes les sources sont utiles ; aucune n'est à négliger."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p01_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une source en histoire ?",
          "options": [
            "Le point où un fleuve prend naissance",
            "Une opinion personnelle de l'historien",
            "Tout support qui atteste d'un fait ou d'un événement du passé humain",
            "Un résumé écrit par un élève"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La source est la trace du passé sur laquelle l'historien s'appuie."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p01_q2",
          "type": "mcq",
          "prompt": "Laquelle de ces sources est une source écrite ?",
          "options": [
            "Un traité signé entre deux royaumes",
            "Le récit d'un griot",
            "Une gravure rupestre",
            "Un squelette ancien"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un traité est un texte : c'est une source écrite."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p01_q3",
          "type": "mcq",
          "prompt": "Pourquoi les sources écrites sont-elles plus rares pour une partie de l'histoire africaine ?",
          "options": [
            "Parce que les Africains n'avaient pas de passé à raconter",
            "Parce que tous les écrits africains ont été détruits par la pluie",
            "Parce que l'écriture a été inventée en Afrique au XXe siècle",
            "Parce que de nombreuses sociétés africaines ont transmis leur passé surtout oralement"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Beaucoup de sociétés africaines ont privilégié la transmission orale ; leurs écrits sont donc plus rares."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p01_q4",
          "type": "mcq",
          "prompt": "Laquelle de ces sources est une source orale ?",
          "options": [
            "Les mémoires écrits d'un dirigeant politique",
            "Une légende baoulé racontée par les anciens",
            "Une monnaie de l'Antiquité",
            "Un reportage télévisé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La légende transmise de bouche à oreille est une source orale."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p01_q5",
          "type": "mcq",
          "prompt": "Quel est le rôle des griots dans l'histoire africaine ?",
          "options": [
            "Fouiller le sol pour trouver des objets anciens",
            "Conserver et transmettre oralement l'histoire et les généalogies",
            "Rédiger les traités entre les royaumes",
            "Photographier les événements importants"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les griots sont la mémoire vivante des sociétés de l'oralité."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p01_q6",
          "type": "mcq",
          "prompt": "Quelle est une limite de la tradition orale ?",
          "options": [
            "Elle ne parle jamais du passé",
            "Elle n'existe pas en Afrique",
            "Elle est toujours parfaitement exacte",
            "Sa datation est souvent imprécise"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sans écrit, il est difficile de dater précisément les événements rapportés."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p01_q7",
          "type": "mcq",
          "prompt": "« L'histoire de l'Afrique ne peut se faire qu'avec les sources orales. » Cette affirmation est :",
          "options": [
            "Fausse, car l'historien croise aussi les sources écrites et archéologiques",
            "Vraie, car il n'existe aucun écrit sur l'Afrique",
            "Vraie, car l'archéologie est interdite en Afrique",
            "Fausse, car les sources orales sont inutiles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toutes les sources sont utiles ; aucune n'est à négliger."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p02",
      "order": 2,
      "title": "Les sources archéologiques, audiovisuelles et les sciences auxiliaires",
      "summary": "Les vestiges matériels, les images et sons, et les sciences qui aident l'historien.",
      "conceptExplanation": "3. Les sources archéologiques (ou sources muettes) : les vestiges matériels de l'humanité (ossements, outils, monnaies, poteries, gravures rupestres, sarcophages, monuments). Elles sont mises au jour par des fouilles et sont la principale source pour la préhistoire. Limites : des fouilles coûteuses, des problèmes de conservation et de datation.\n\n4. Les sources audiovisuelles et numériques : films, reportages, interviews, photographies, radio, télévision, internet. Elles sont récentes, d'accès rapide et font revivre les faits. Limites : conservation fragile, qualité des supports et risque de manipulation (fausses informations).\n\nLes sciences auxiliaires aident l'historien : la datation au carbone 14, la linguistique (parenté des langues), la paléontologie (fossiles), l'anthropologie (cultures comparées), la toponymie (noms de lieux).",
      "keyRule": "Archéologiques (vestiges, fouilles, préhistoire), audiovisuelles et numériques (récentes, risque de manipulation), sciences auxiliaires (carbone 14, linguistique, paléontologie).",
      "formulas": [],
      "workedExample": {
        "title": "Choisir la bonne source",
        "statement": "Pour étudier des hommes qui vivaient il y a 10 000 ans, sans écriture, quelle source utiliser ?",
        "methodSteps": [
          "Il n'existe aucun écrit de cette époque.",
          "Les témoignages oraux ne remontent pas si loin.",
          "Il reste des vestiges : outils, ossements, gravures."
        ],
        "conclusion": "On utilise les sources archéologiques, datées par exemple au carbone 14."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les sources archéologiques",
          "stepTheme": "Les sources archéologiques",
          "stepBadge": "Les sources archéologiques",
          "paragraphText": "Les sources archéologiques sont les vestiges matériels de l'humanité :\nossements, outils, monnaies, poteries, gravures rupestres, sarcophages, monuments.\nOn les appelle aussi sources muettes.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p02_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces sources est une source archéologique ?",
            "options": [
              "Le récit d'un explorateur",
              "Une légende racontée par un griot",
              "Une gravure rupestre",
              "Une interview à la radio"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une gravure sur une paroi rocheuse est un vestige matériel : source archéologique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les fouilles",
          "stepTheme": "Les fouilles",
          "stepBadge": "Les fouilles",
          "paragraphText": "Les sources archéologiques sont mises au jour par des fouilles.\nC'est la source la plus utilisée pour étudier la préhistoire, période sans écriture.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p02_q2",
            "type": "mcq",
            "prompt": "Pour quelle période les sources archéologiques sont-elles les plus utilisées ?",
            "options": [
              "Le XXe siècle",
              "L'époque des réseaux sociaux",
              "La période de l'indépendance",
              "La préhistoire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La préhistoire n'a laissé aucun écrit : seuls les vestiges en témoignent."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Les limites de l'archéologie",
          "stepTheme": "Les limites de l'archéologie",
          "stepBadge": "Les limites de l'archéologie",
          "paragraphText": "L'archéologie a des limites :\n• les fouilles coûtent cher ;\n• les vestiges se conservent mal, surtout en climat humide ;\n• la datation est parfois difficile.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p02_q3",
            "type": "mcq",
            "prompt": "Quelle est une limite des sources archéologiques en Afrique ?",
            "options": [
              "Leur trop grande abondance dans toutes les régions",
              "Le fait qu'elles soient toutes écrites en arabe",
              "Le coût élevé des fouilles et la mauvaise conservation en climat humide",
              "Le fait qu'elles ne concernent que le XXe siècle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les fouilles coûtent cher et les objets périssables se dégradent vite dans les régions humides."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les sources audiovisuelles et numériques",
          "stepTheme": "Les sources audiovisuelles et numériques",
          "stepBadge": "Les sources audiovisuelles et numériques",
          "paragraphText": "Les sources audiovisuelles et numériques sont récentes :\nfilms, reportages, interviews, photographies, radio, télévision, internet.\nElles font revivre les faits et sont d'accès rapide.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p02_q4",
            "type": "mcq",
            "prompt": "Laquelle de ces sources est une source audiovisuelle ?",
            "options": [
              "Un manuscrit ancien",
              "Un reportage filmé",
              "Un sarcophage égyptien",
              "Une épopée chantée par un griot"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un reportage associe images et sons : source audiovisuelle."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le risque de manipulation",
          "stepTheme": "Le risque de manipulation",
          "stepBadge": "Le risque de manipulation",
          "paragraphText": "Les sources audiovisuelles et numériques ont des limites :\n• supports fragiles ;\n• qualité variable ;\n• risque de manipulation (fausses informations, montages).",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p02_q5",
            "type": "mcq",
            "prompt": "Quel est le principal risque des sources numériques comme internet ?",
            "options": [
              "La diffusion de fausses informations et de montages",
              "Leur impossibilité totale de les consulter",
              "Leur trop grande ancienneté",
              "Leur absence de lien avec le présent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sur internet, une information peut être fausse ou truquée : il faut la vérifier."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Les sciences auxiliaires",
          "stepTheme": "Les sciences auxiliaires",
          "stepBadge": "Les sciences auxiliaires",
          "paragraphText": "Les sciences auxiliaires aident l'historien :\n• le carbone 14 date les vestiges ;\n• la linguistique compare les langues ;\n• la paléontologie étudie les fossiles ;\n• la toponymie étudie les noms de lieux.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p02_q6",
            "type": "mcq",
            "prompt": "À quoi sert la méthode du carbone 14 ?",
            "options": [
              "À dater des vestiges anciens",
              "À traduire des langues anciennes",
              "À photographier des sites",
              "À interroger des témoins"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le carbone 14 permet de dater des restes organiques (os, bois, charbon)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "La linguistique",
          "stepTheme": "La linguistique",
          "stepBadge": "La linguistique",
          "paragraphText": "La linguistique compare les langues : une parenté entre deux langues peut révéler une parenté entre deux peuples et leurs migrations.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p02_q7",
            "type": "mcq",
            "prompt": "Que peut révéler la parenté entre deux langues ?",
            "options": [
              "L'âge exact d'un ossement",
              "Une parenté et des migrations communes entre deux peuples",
              "La valeur d'une monnaie ancienne",
              "La date d'un traité"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Des langues proches suggèrent une origine commune des peuples."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p02_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces sources est une source archéologique ?",
          "options": [
            "Le récit d'un explorateur",
            "Une légende racontée par un griot",
            "Une gravure rupestre",
            "Une interview à la radio"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une gravure sur une paroi rocheuse est un vestige matériel : source archéologique."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p02_q2",
          "type": "mcq",
          "prompt": "Pour quelle période les sources archéologiques sont-elles les plus utilisées ?",
          "options": [
            "Le XXe siècle",
            "L'époque des réseaux sociaux",
            "La période de l'indépendance",
            "La préhistoire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La préhistoire n'a laissé aucun écrit : seuls les vestiges en témoignent."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p02_q3",
          "type": "mcq",
          "prompt": "Quelle est une limite des sources archéologiques en Afrique ?",
          "options": [
            "Leur trop grande abondance dans toutes les régions",
            "Le fait qu'elles soient toutes écrites en arabe",
            "Le coût élevé des fouilles et la mauvaise conservation en climat humide",
            "Le fait qu'elles ne concernent que le XXe siècle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les fouilles coûtent cher et les objets périssables se dégradent vite dans les régions humides."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p02_q4",
          "type": "mcq",
          "prompt": "Laquelle de ces sources est une source audiovisuelle ?",
          "options": [
            "Un manuscrit ancien",
            "Un reportage filmé",
            "Un sarcophage égyptien",
            "Une épopée chantée par un griot"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un reportage associe images et sons : source audiovisuelle."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p02_q5",
          "type": "mcq",
          "prompt": "Quel est le principal risque des sources numériques comme internet ?",
          "options": [
            "La diffusion de fausses informations et de montages",
            "Leur impossibilité totale de les consulter",
            "Leur trop grande ancienneté",
            "Leur absence de lien avec le présent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sur internet, une information peut être fausse ou truquée : il faut la vérifier."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p02_q6",
          "type": "mcq",
          "prompt": "À quoi sert la méthode du carbone 14 ?",
          "options": [
            "À dater des vestiges anciens",
            "À traduire des langues anciennes",
            "À photographier des sites",
            "À interroger des témoins"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le carbone 14 permet de dater des restes organiques (os, bois, charbon)."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p02_q7",
          "type": "mcq",
          "prompt": "Que peut révéler la parenté entre deux langues ?",
          "options": [
            "L'âge exact d'un ossement",
            "Une parenté et des migrations communes entre deux peuples",
            "La valeur d'une monnaie ancienne",
            "La date d'un traité"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Des langues proches suggèrent une origine commune des peuples."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p03",
      "order": 3,
      "title": "Choisir un thème et collecter les données",
      "summary": "Les premières étapes de la démarche de l'historien.",
      "conceptExplanation": "L'historien suit une démarche scientifique. À partir d'un sujet et d'hypothèses de recherche, il procède par étapes : le choix du thème, la collecte des données, le traitement (la critique) des données, l'interprétation et la synthèse historique.\n\n1. Le choix du thème : avant toute recherche, il faut choisir un thème précis, sans équivoque et digne d'intérêt.\n\n2. La collecte des données : elle consiste à rassembler le maximum de documents et d'informations sur l'objet de la recherche. L'historien ne néglige aucune source : écrites, orales, archéologiques, audiovisuelles.",
      "keyRule": "Démarche : thème précis → collecte (aucune source négligée) → critique → interprétation → synthèse.",
      "formulas": [],
      "workedExample": {
        "title": "Un bon thème",
        "statement": "Lequel est le meilleur thème : « Le passé » ou « La mise en place des peuples de la région de Bondoukou au XVIIIe siècle » ?",
        "methodSteps": [
          "« Le passé » est trop vague : on ne sait pas quoi chercher.",
          "Le second thème est précis : un lieu, une époque, un sujet."
        ],
        "conclusion": "Le second thème est bon : précis, sans équivoque et digne d'intérêt."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une démarche scientifique",
          "stepTheme": "Une démarche scientifique",
          "stepBadge": "Une démarche scientifique",
          "paragraphText": "L'historien ne raconte pas au hasard : il suit une démarche scientifique, à partir d'un sujet et d'hypothèses de recherche.\nC'est ce qui fait de l'histoire une science.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p03_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qui fait de l'histoire une science ?",
            "options": [
              "Le fait que l'historien raconte les faits qui lui plaisent",
              "Le fait que l'histoire utilise uniquement des formules mathématiques",
              "Le fait que l'historien suit une démarche rigoureuse et vérifie ses sources",
              "Le fait que l'histoire ne s'intéresse qu'aux rois"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une méthode rigoureuse et la critique des sources font de l'histoire une science."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Les étapes",
          "stepTheme": "Les étapes",
          "stepBadge": "Les étapes",
          "paragraphText": "La démarche de l'historien suit ces étapes :\n1. choix du thème ;\n2. collecte des données ;\n3. traitement (critique) des données ;\n4. interprétation ;\n5. synthèse historique.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p03_q2",
            "type": "mcq",
            "prompt": "Quelle étape vient juste après la collecte des données ?",
            "options": [
              "La synthèse historique",
              "Le choix du thème",
              "L'interprétation",
              "Le traitement (la critique) des données"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Après avoir rassemblé les documents, on les critique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le choix du thème",
          "stepTheme": "Le choix du thème",
          "stepBadge": "Le choix du thème",
          "paragraphText": "Avant toute recherche, il faut choisir un thème :\n• précis ;\n• sans équivoque (clair, sans double sens) ;\n• digne d'intérêt.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p03_q3",
            "type": "mcq",
            "prompt": "Quelles qualités doit avoir le thème d'une recherche historique ?",
            "options": [
              "Être très vague pour pouvoir tout étudier",
              "Porter uniquement sur l'avenir",
              "Être précis, sans équivoque et digne d'intérêt",
              "Être choisi au hasard sans réflexion"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un thème précis permet de savoir exactement quoi chercher."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un thème précis",
          "stepTheme": "Un thème précis",
          "stepBadge": "Un thème précis",
          "paragraphText": "Un bon thème précise le sujet, le lieu et l'époque.\nExemple : « La mise en place des peuples de la région de Bondoukou au XVIIIe siècle ».",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p03_q4",
            "type": "mcq",
            "prompt": "Lequel de ces thèmes est le plus précis ?",
            "options": [
              "L'histoire de toute l'Afrique de la préhistoire à nos jours",
              "Les grands événements qui se sont passés autrefois",
              "Tout ce qui concerne le passé des peuples du monde",
              "Le commerce de la kola dans la région de Kong au XVIIIe siècle"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il précise le sujet (la kola), le lieu (Kong) et l'époque (XVIIIe siècle)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La collecte des données",
          "stepTheme": "La collecte des données",
          "stepBadge": "La collecte des données",
          "paragraphText": "La collecte consiste à rassembler le maximum de documents et d'informations sur l'objet de la recherche.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p03_q5",
            "type": "mcq",
            "prompt": "En quoi consiste la collecte des données ?",
            "options": [
              "Rassembler le maximum de documents et d'informations sur le sujet",
              "Écrire directement la conclusion de la recherche",
              "Choisir un seul document et ignorer les autres",
              "Inventer les informations manquantes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Plus l'historien réunit de sources, plus sa reconstitution sera solide."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Aucune source négligée",
          "stepTheme": "Aucune source négligée",
          "stepBadge": "Aucune source négligée",
          "paragraphText": "Pendant la collecte, l'historien ne néglige aucune source : écrites, orales, archéologiques, audiovisuelles.\nToutes peuvent apporter une information utile.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p03_q6",
            "type": "mcq",
            "prompt": "Pendant la collecte, quelles sources l'historien doit-il utiliser ?",
            "options": [
              "Uniquement les sources écrites",
              "Toutes les sources disponibles, sans en négliger aucune",
              "Uniquement les sources orales",
              "Uniquement les sources les plus récentes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Aucune source n'est à négliger dans la recherche historique."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Collecter n'est pas croire",
          "stepTheme": "Collecter n'est pas croire",
          "stepBadge": "Collecter n'est pas croire",
          "paragraphText": "Collecter un document ne veut pas dire le croire.\nTous les documents réunis devront ensuite être critiqués, car même un écrit peut être faux ou partial.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p03_q7",
            "type": "mcq",
            "prompt": "« Les faits rapportés par les sources écrites sont toujours vrais. » Cette affirmation est :",
            "options": [
              "Vraie, car un texte écrit ne peut pas mentir",
              "Fausse, car tout document doit être critiqué avant d'être utilisé",
              "Vraie, car seuls les écrits sont des sources",
              "Fausse, car les écrits sont toujours inventés"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un écrit peut être partial ou faux : il doit passer par la critique historique."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p03_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qui fait de l'histoire une science ?",
          "options": [
            "Le fait que l'historien raconte les faits qui lui plaisent",
            "Le fait que l'histoire utilise uniquement des formules mathématiques",
            "Le fait que l'historien suit une démarche rigoureuse et vérifie ses sources",
            "Le fait que l'histoire ne s'intéresse qu'aux rois"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une méthode rigoureuse et la critique des sources font de l'histoire une science."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p03_q2",
          "type": "mcq",
          "prompt": "Quelle étape vient juste après la collecte des données ?",
          "options": [
            "La synthèse historique",
            "Le choix du thème",
            "L'interprétation",
            "Le traitement (la critique) des données"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Après avoir rassemblé les documents, on les critique."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p03_q3",
          "type": "mcq",
          "prompt": "Quelles qualités doit avoir le thème d'une recherche historique ?",
          "options": [
            "Être très vague pour pouvoir tout étudier",
            "Porter uniquement sur l'avenir",
            "Être précis, sans équivoque et digne d'intérêt",
            "Être choisi au hasard sans réflexion"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un thème précis permet de savoir exactement quoi chercher."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p03_q4",
          "type": "mcq",
          "prompt": "Lequel de ces thèmes est le plus précis ?",
          "options": [
            "L'histoire de toute l'Afrique de la préhistoire à nos jours",
            "Les grands événements qui se sont passés autrefois",
            "Tout ce qui concerne le passé des peuples du monde",
            "Le commerce de la kola dans la région de Kong au XVIIIe siècle"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il précise le sujet (la kola), le lieu (Kong) et l'époque (XVIIIe siècle)."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p03_q5",
          "type": "mcq",
          "prompt": "En quoi consiste la collecte des données ?",
          "options": [
            "Rassembler le maximum de documents et d'informations sur le sujet",
            "Écrire directement la conclusion de la recherche",
            "Choisir un seul document et ignorer les autres",
            "Inventer les informations manquantes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Plus l'historien réunit de sources, plus sa reconstitution sera solide."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p03_q6",
          "type": "mcq",
          "prompt": "Pendant la collecte, quelles sources l'historien doit-il utiliser ?",
          "options": [
            "Uniquement les sources écrites",
            "Toutes les sources disponibles, sans en négliger aucune",
            "Uniquement les sources orales",
            "Uniquement les sources les plus récentes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Aucune source n'est à négliger dans la recherche historique."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p03_q7",
          "type": "mcq",
          "prompt": "« Les faits rapportés par les sources écrites sont toujours vrais. » Cette affirmation est :",
          "options": [
            "Vraie, car un texte écrit ne peut pas mentir",
            "Fausse, car tout document doit être critiqué avant d'être utilisé",
            "Vraie, car seuls les écrits sont des sources",
            "Fausse, car les écrits sont toujours inventés"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un écrit peut être partial ou faux : il doit passer par la critique historique."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p04",
      "order": 4,
      "title": "La critique des documents",
      "summary": "La critique externe (la forme) et la critique interne (le fond).",
      "conceptExplanation": "Le traitement des données consiste à apprécier les qualités de chaque document. Cette critique historique se fait sous deux formes.\n\n1. La critique externe porte sur la forme du document : sa nature, son origine, son auteur (qualité, motivations, témoin ou acteur), sa date, son contexte de production. Elle permet d'établir l'authenticité du document. La date est très importante : il faut éviter les anachronismes (attribuer à une époque ce qui appartient à une autre).\n\n2. La critique interne porte sur le fond du document, c'est-à-dire sur l'information qu'il donne. Elle vérifie l'exactitude des informations en comparant plusieurs documents, et la sincérité de leurs auteurs.\n\nCette double critique permet de dégager la véracité des faits. Toute source, écrite, orale ou archéologique, doit y être soumise.",
      "keyRule": "Critique externe = la forme (auteur, date, origine, authenticité) ; critique interne = le fond (exactitude, comparaison, sincérité).",
      "formulas": [],
      "workedExample": {
        "title": "Repérer un anachronisme",
        "statement": "Un récit prétend qu'un roi du XVe siècle a appelé ses alliés par téléphone. Que conclure ?",
        "methodSteps": [
          "Le téléphone a été inventé au XIXe siècle.",
          "Il ne pouvait pas exister au XVe siècle : c'est un anachronisme.",
          "La critique externe montre que le document n'est pas authentique ou a été déformé."
        ],
        "conclusion": "Ce récit ne peut pas être utilisé tel quel."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Pourquoi critiquer ?",
          "stepTheme": "Pourquoi critiquer ?",
          "stepBadge": "Pourquoi critiquer ?",
          "paragraphText": "Le traitement des données consiste à apprécier les qualités de chaque document.\nCette critique historique permet de distinguer le vrai du faux.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p04_q1",
            "type": "mcq",
            "prompt": "Pourquoi l'historien critique-t-il ses documents ?",
            "options": [
              "Pour vérifier leur authenticité et l'exactitude de leurs informations",
              "Pour montrer que tous les documents sont faux",
              "Pour choisir ceux qui confirment son opinion",
              "Pour les détruire après lecture"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La critique sert à établir la véracité des faits."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La critique externe",
          "stepTheme": "La critique externe",
          "stepBadge": "La critique externe",
          "paragraphText": "La critique externe porte sur la forme du document :\n• sa nature et son origine ;\n• son auteur (qui, pourquoi, témoin ou acteur) ;\n• sa date et son contexte.\nElle établit l'authenticité du document.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p04_q2",
            "type": "mcq",
            "prompt": "Sur quoi porte la critique externe ?",
            "options": [
              "Sur le fond du document : l'exactitude des informations",
              "Sur la longueur du document",
              "Sur la beauté de l'écriture du document",
              "Sur la forme du document : auteur, date, origine, authenticité"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Externe = la forme et l'origine du document."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Connaître l'auteur",
          "stepTheme": "Connaître l'auteur",
          "stepBadge": "Connaître l'auteur",
          "paragraphText": "Dans la critique externe, il faut connaître l'auteur : sa qualité, ses motivations, s'il a été témoin ou acteur des faits.\nUn auteur engagé peut présenter les faits de façon partiale.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p04_q3",
            "type": "mcq",
            "prompt": "Pourquoi est-il important de connaître l'auteur d'un document ?",
            "options": [
              "Parce que seuls les auteurs célèbres disent la vérité",
              "Parce que l'auteur détermine la longueur du document",
              "Parce que ses motivations peuvent influencer ce qu'il rapporte",
              "Parce que l'auteur choisit le prix du document"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un auteur peut avoir intérêt à déformer les faits : il faut le savoir."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'anachronisme",
          "stepTheme": "L'anachronisme",
          "stepBadge": "L'anachronisme",
          "paragraphText": "Un anachronisme consiste à attribuer à une époque une chose qui appartient à une autre.\nExemple : parler de téléphone au XVe siècle.\nLa date du document est donc très importante.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p04_q4",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'un anachronisme ?",
            "options": [
              "Raconter les faits dans l'ordre chronologique",
              "Dater précisément un document grâce au carbone 14",
              "Attribuer à une époque une chose qui appartient à une autre",
              "Comparer deux documents de la même époque"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ana-chronisme = « hors du temps » : une erreur de date."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La critique interne",
          "stepTheme": "La critique interne",
          "stepBadge": "La critique interne",
          "paragraphText": "La critique interne porte sur le fond du document, c'est-à-dire sur l'essentiel de l'information qu'il donne.\nElle vérifie l'exactitude des faits en comparant plusieurs documents, et la sincérité de l'auteur.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p04_q5",
            "type": "mcq",
            "prompt": "Sur quoi porte la critique interne ?",
            "options": [
              "Sur le fond du document : l'exactitude de ses informations",
              "Sur la date et l'origine du document",
              "Sur le papier et l'encre utilisés",
              "Sur le nombre de pages du document"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Interne = le contenu, le fond du document."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Comparer les documents",
          "stepTheme": "Comparer les documents",
          "stepBadge": "Comparer les documents",
          "paragraphText": "Pour vérifier une information, on la compare avec d'autres documents.\nSi plusieurs sources indépendantes concordent, l'information est plus sûre.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p04_q6",
            "type": "mcq",
            "prompt": "Comment l'historien vérifie-t-il l'exactitude d'une information ?",
            "options": [
              "En la croyant si elle est bien écrite",
              "En la recopiant plusieurs fois",
              "En demandant l'avis d'un ami",
              "En la comparant avec d'autres documents indépendants"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le croisement des sources est la base de la critique interne."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Toutes les sources",
          "stepTheme": "Toutes les sources",
          "stepBadge": "Toutes les sources",
          "paragraphText": "Quelle que soit leur nature, écrites, orales ou archéologiques, toutes les sources doivent être soumises à la critique historique.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p04_q7",
            "type": "mcq",
            "prompt": "Quelles sources doivent passer par la critique historique ?",
            "options": [
              "Uniquement les sources orales",
              "Toutes les sources, quelle que soit leur nature",
              "Uniquement les sources écrites",
              "Aucune, car toutes les sources sont fiables"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Aucune source n'est automatiquement fiable : toutes sont critiquées."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p04_q1",
          "type": "mcq",
          "prompt": "Pourquoi l'historien critique-t-il ses documents ?",
          "options": [
            "Pour vérifier leur authenticité et l'exactitude de leurs informations",
            "Pour montrer que tous les documents sont faux",
            "Pour choisir ceux qui confirment son opinion",
            "Pour les détruire après lecture"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La critique sert à établir la véracité des faits."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p04_q2",
          "type": "mcq",
          "prompt": "Sur quoi porte la critique externe ?",
          "options": [
            "Sur le fond du document : l'exactitude des informations",
            "Sur la longueur du document",
            "Sur la beauté de l'écriture du document",
            "Sur la forme du document : auteur, date, origine, authenticité"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Externe = la forme et l'origine du document."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p04_q3",
          "type": "mcq",
          "prompt": "Pourquoi est-il important de connaître l'auteur d'un document ?",
          "options": [
            "Parce que seuls les auteurs célèbres disent la vérité",
            "Parce que l'auteur détermine la longueur du document",
            "Parce que ses motivations peuvent influencer ce qu'il rapporte",
            "Parce que l'auteur choisit le prix du document"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un auteur peut avoir intérêt à déformer les faits : il faut le savoir."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p04_q4",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un anachronisme ?",
          "options": [
            "Raconter les faits dans l'ordre chronologique",
            "Dater précisément un document grâce au carbone 14",
            "Attribuer à une époque une chose qui appartient à une autre",
            "Comparer deux documents de la même époque"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ana-chronisme = « hors du temps » : une erreur de date."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p04_q5",
          "type": "mcq",
          "prompt": "Sur quoi porte la critique interne ?",
          "options": [
            "Sur le fond du document : l'exactitude de ses informations",
            "Sur la date et l'origine du document",
            "Sur le papier et l'encre utilisés",
            "Sur le nombre de pages du document"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Interne = le contenu, le fond du document."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p04_q6",
          "type": "mcq",
          "prompt": "Comment l'historien vérifie-t-il l'exactitude d'une information ?",
          "options": [
            "En la croyant si elle est bien écrite",
            "En la recopiant plusieurs fois",
            "En demandant l'avis d'un ami",
            "En la comparant avec d'autres documents indépendants"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le croisement des sources est la base de la critique interne."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p04_q7",
          "type": "mcq",
          "prompt": "Quelles sources doivent passer par la critique historique ?",
          "options": [
            "Uniquement les sources orales",
            "Toutes les sources, quelle que soit leur nature",
            "Uniquement les sources écrites",
            "Aucune, car toutes les sources sont fiables"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Aucune source n'est automatiquement fiable : toutes sont critiquées."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p05",
      "order": 5,
      "title": "Interpréter et faire la synthèse",
      "summary": "Donner un sens aux documents et reconstituer les faits.",
      "conceptExplanation": "4. L'interprétation : elle consiste à tirer de chaque document traité toutes les informations utiles, pour donner un sens aux événements et aux objets du passé. Exemple : une statuette découverte peut représenter un dieu ou n'être qu'un simple objet d'ornement. Pour bien interpréter, il faut comparer et analyser toutes les informations obtenues.\n\n5. La synthèse historique : c'est la reconstitution des faits. L'historien classe les informations :\n- dans l'ordre chronologique, pour établir les dates ;\n- dans l'ordre logique, pour mettre les faits en relation et comprendre leur enchaînement et leurs conséquences.\nLa synthèse est le résultat de toute la démarche : elle est retenue comme vérité historique et peut servir de référence.",
      "keyRule": "Interprétation = donner un sens aux documents (comparer, analyser) ; synthèse = reconstituer les faits dans l'ordre chronologique et logique.",
      "formulas": [],
      "workedExample": {
        "title": "Ordonner la démarche",
        "statement": "Range : interprétation, collecte, synthèse, critique.",
        "methodSteps": [
          "On rassemble d'abord les documents : la collecte.",
          "On les vérifie : la critique.",
          "On leur donne un sens : l'interprétation.",
          "On reconstitue les faits : la synthèse."
        ],
        "conclusion": "Collecte, critique, interprétation, synthèse."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'interprétation",
          "stepTheme": "L'interprétation",
          "stepBadge": "L'interprétation",
          "paragraphText": "L'interprétation consiste à tirer de chaque document toutes les informations utiles, pour donner un sens aux événements et aux objets du passé.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p05_q1",
            "type": "mcq",
            "prompt": "En quoi consiste l'interprétation des documents ?",
            "options": [
              "Rassembler le maximum de documents",
              "Donner un sens aux documents en tirant toutes les informations utiles",
              "Vérifier la date et l'auteur du document",
              "Choisir le thème de la recherche"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interpréter, c'est faire parler le document : lui donner un sens."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La statuette",
          "stepTheme": "La statuette",
          "stepBadge": "La statuette",
          "paragraphText": "Une statuette découverte lors d'une fouille peut représenter un dieu ou n'être qu'un simple objet d'ornement.\nSeule une analyse comparée permet de trancher.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p05_q2",
            "type": "mcq",
            "prompt": "Une statuette ancienne est découverte. Que doit faire l'historien pour savoir si elle représente un dieu ?",
            "options": [
              "Lui donner le sens qui lui paraît le plus beau, sans vérifier",
              "Se fier au seul avis du villageois qui l'a trouvée par hasard",
              "Conclure que tout objet ancien représente forcément un dieu",
              "La comparer avec d'autres objets et informations de la même société"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La comparaison et l'analyse permettent de donner le bon sens à l'objet."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Bien interpréter",
          "stepTheme": "Bien interpréter",
          "stepBadge": "Bien interpréter",
          "paragraphText": "Pour parvenir à une bonne interprétation, il faut comparer et analyser toutes les informations obtenues, et non un seul document isolé.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p05_q3",
            "type": "mcq",
            "prompt": "Que faut-il faire pour parvenir à une bonne interprétation ?",
            "options": [
              "Comparer et analyser toutes les informations obtenues",
              "S'appuyer sur un seul document",
              "Ignorer les informations contradictoires",
              "Interroger uniquement des personnes célèbres"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une interprétation solide s'appuie sur l'ensemble des informations."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La synthèse historique",
          "stepTheme": "La synthèse historique",
          "stepBadge": "La synthèse historique",
          "paragraphText": "La synthèse historique est la reconstitution des faits.\nC'est la dernière étape et le résultat de toute la démarche de l'historien.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p05_q4",
            "type": "mcq",
            "prompt": "Quelle est la dernière étape de la démarche de l'historien ?",
            "options": [
              "La collecte des données",
              "La critique externe",
              "La synthèse historique",
              "Le choix du thème"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La synthèse reconstitue les faits : elle conclut la démarche."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Ordre chronologique et logique",
          "stepTheme": "Ordre chronologique et logique",
          "stepBadge": "Ordre chronologique et logique",
          "paragraphText": "Dans la synthèse, l'historien classe les informations :\n• dans l'ordre chronologique, pour établir les dates ;\n• dans l'ordre logique, pour relier les faits entre eux (causes et conséquences).",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p05_q5",
            "type": "mcq",
            "prompt": "Pourquoi l'historien classe-t-il les faits dans l'ordre logique ?",
            "options": [
              "Pour les ranger par ordre alphabétique",
              "Pour classer les documents par taille",
              "Pour séparer les bons et les mauvais historiens",
              "Pour comprendre leur enchaînement : causes et conséquences"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'ordre logique relie les faits par leurs causes et leurs conséquences."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Une vérité historique",
          "stepTheme": "Une vérité historique",
          "stepBadge": "Une vérité historique",
          "paragraphText": "La synthèse est le résultat vérifié de toute la démarche.\nElle est retenue comme vérité historique et peut servir à son tour de document de référence.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p05_q6",
            "type": "mcq",
            "prompt": "Que devient la synthèse historique une fois réalisée ?",
            "options": [
              "Un brouillon sans valeur",
              "Une légende transmise par les griots",
              "Une vérité historique qui peut servir de référence",
              "Un document à détruire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Fruit d'une démarche rigoureuse, la synthèse devient une référence."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Ranger les étapes",
          "stepTheme": "Ranger les étapes",
          "stepBadge": "Ranger les étapes",
          "paragraphText": "Rappel de l'ordre :\n1. collecte de l'information ;\n2. critique des données ;\n3. interprétation des sources ;\n4. synthèse historique.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p05_q7",
            "type": "mcq",
            "prompt": "Quel est l'ordre correct de la démarche de l'historien ?",
            "options": [
              "Synthèse, collecte, interprétation, critique",
              "Collecte, critique, interprétation, synthèse",
              "Interprétation, synthèse, critique, collecte",
              "Critique, synthèse, collecte, interprétation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On collecte, on critique, on interprète, puis on fait la synthèse."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p05_q1",
          "type": "mcq",
          "prompt": "En quoi consiste l'interprétation des documents ?",
          "options": [
            "Rassembler le maximum de documents",
            "Donner un sens aux documents en tirant toutes les informations utiles",
            "Vérifier la date et l'auteur du document",
            "Choisir le thème de la recherche"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interpréter, c'est faire parler le document : lui donner un sens."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p05_q2",
          "type": "mcq",
          "prompt": "Une statuette ancienne est découverte. Que doit faire l'historien pour savoir si elle représente un dieu ?",
          "options": [
            "Lui donner le sens qui lui paraît le plus beau, sans vérifier",
            "Se fier au seul avis du villageois qui l'a trouvée par hasard",
            "Conclure que tout objet ancien représente forcément un dieu",
            "La comparer avec d'autres objets et informations de la même société"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La comparaison et l'analyse permettent de donner le bon sens à l'objet."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p05_q3",
          "type": "mcq",
          "prompt": "Que faut-il faire pour parvenir à une bonne interprétation ?",
          "options": [
            "Comparer et analyser toutes les informations obtenues",
            "S'appuyer sur un seul document",
            "Ignorer les informations contradictoires",
            "Interroger uniquement des personnes célèbres"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une interprétation solide s'appuie sur l'ensemble des informations."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p05_q4",
          "type": "mcq",
          "prompt": "Quelle est la dernière étape de la démarche de l'historien ?",
          "options": [
            "La collecte des données",
            "La critique externe",
            "La synthèse historique",
            "Le choix du thème"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La synthèse reconstitue les faits : elle conclut la démarche."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p05_q5",
          "type": "mcq",
          "prompt": "Pourquoi l'historien classe-t-il les faits dans l'ordre logique ?",
          "options": [
            "Pour les ranger par ordre alphabétique",
            "Pour classer les documents par taille",
            "Pour séparer les bons et les mauvais historiens",
            "Pour comprendre leur enchaînement : causes et conséquences"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'ordre logique relie les faits par leurs causes et leurs conséquences."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p05_q6",
          "type": "mcq",
          "prompt": "Que devient la synthèse historique une fois réalisée ?",
          "options": [
            "Un brouillon sans valeur",
            "Une légende transmise par les griots",
            "Une vérité historique qui peut servir de référence",
            "Un document à détruire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Fruit d'une démarche rigoureuse, la synthèse devient une référence."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p05_q7",
          "type": "mcq",
          "prompt": "Quel est l'ordre correct de la démarche de l'historien ?",
          "options": [
            "Synthèse, collecte, interprétation, critique",
            "Collecte, critique, interprétation, synthèse",
            "Interprétation, synthèse, critique, collecte",
            "Critique, synthèse, collecte, interprétation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On collecte, on critique, on interprète, puis on fait la synthèse."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p06",
      "order": 6,
      "title": "L'histoire de l'Afrique et ses sources",
      "summary": "Comment reconstituer le passé africain : croiser les sources et les critiquer.",
      "conceptExplanation": "Certains ont prétendu que l'Afrique n'avait pas d'histoire, faute de sources écrites. C'est faux : dès qu'un peuple existe, il développe une civilisation, dont les traces sont multiples.\n\n- Les sources écrites sur l'Afrique existent, mais elles sont rares et inégales : elles viennent surtout d'auteurs arabes, européens et d'Africains lettrés, et ne couvrent pas toutes les régions ni toutes les périodes.\n- La tradition orale est une source majeure en Afrique, continent de l'oralité. Joseph Ki-Zerbo la considère comme une source respectable, même si elle est en général moins précise que les écrits.\n- L'archéologie est très utile, mais elle manque de moyens.\n- Les sciences auxiliaires (carbone 14, linguistique, anthropologie, toponymie) complètent ces sources.\n\nComme toute source, la tradition orale doit passer par la critique historique pour vérifier l'authenticité du document et la réalité des faits. Le bon historien est impartial.",
      "keyRule": "L'Afrique a une histoire : on la reconstitue en croisant tradition orale, écrits, archéologie et sciences auxiliaires, toutes soumises à la critique.",
      "formulas": [],
      "workedExample": {
        "title": "Croiser les sources",
        "statement": "Comment vérifier un récit de griot sur la fondation d'un royaume ?",
        "methodSteps": [
          "Comparer avec d'autres traditions orales de la région.",
          "Chercher des écrits (récits arabes ou européens) qui en parlent.",
          "Rechercher des vestiges archéologiques sur le site et les dater au carbone 14."
        ],
        "conclusion": "Si les sources concordent, le récit gagne en crédibilité."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "piege",
          "stepTitle": "L'Afrique a une histoire",
          "stepTheme": "L'Afrique a une histoire",
          "stepBadge": "L'Afrique a une histoire",
          "paragraphText": "Certains ont prétendu que l'Afrique était « sans histoire » faute d'écrits.\nC'est faux : tout peuple développe une civilisation, dont les traces permettent de reconstituer l'histoire.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p06_q1",
            "type": "mcq",
            "prompt": "« L'Afrique est sans histoire, car les sources écrites y sont rares. » Que répondre ?",
            "options": [
              "C'est faux : tout peuple a une histoire, reconstituée grâce à des sources variées",
              "C'est vrai : sans écrits, il n'y a pas d'histoire",
              "C'est vrai : l'Afrique n'a pas de passé ancien",
              "C'est faux : l'Afrique possède plus d'écrits anciens que l'Europe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'absence d'écrits ne signifie pas absence d'histoire : on utilise d'autres sources."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Des écrits rares et inégaux",
          "stepTheme": "Des écrits rares et inégaux",
          "stepBadge": "Des écrits rares et inégaux",
          "paragraphText": "Les sources écrites sur l'Afrique viennent surtout d'auteurs arabes, européens et d'Africains lettrés.\nElles ne couvrent pas toutes les régions ni toutes les périodes du continent.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p06_q2",
            "type": "mcq",
            "prompt": "D'où proviennent surtout les sources écrites anciennes sur l'Afrique ?",
            "options": [
              "D'auteurs arabes, européens et d'Africains lettrés",
              "Uniquement des archives des royaumes de la côte",
              "Uniquement de journaux du XXe siècle",
              "Des récits des griots mis par écrit au Moyen Âge"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les écrits anciens sur l'Afrique viennent surtout des contacts avec le monde arabe puis l'Europe."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Ki-Zerbo et la tradition orale",
          "stepTheme": "Ki-Zerbo et la tradition orale",
          "stepBadge": "Ki-Zerbo et la tradition orale",
          "paragraphText": "Pour l'historien Joseph Ki-Zerbo, la tradition orale est une source aussi respectable que les écrits, même si elle est en général moins précise.\nLe vrai problème est de trouver une méthode pour sélectionner les traditions dignes de foi.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p06_q3",
            "type": "mcq",
            "prompt": "Selon Joseph Ki-Zerbo, comment considérer la tradition orale ?",
            "options": [
              "Comme une source sans aucune valeur historique",
              "Comme une source respectable, quoique souvent moins précise que les écrits",
              "Comme une source plus précise que tous les écrits",
              "Comme une source à utiliser sans aucune vérification"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ki-Zerbo défend la tradition orale tout en reconnaissant ses limites."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le continent de l'oralité",
          "stepTheme": "Le continent de l'oralité",
          "stepBadge": "Le continent de l'oralité",
          "paragraphText": "L'Afrique est souvent appelée le continent de l'oralité : légendes, récits de griots et proverbes y transmettent le passé.\nLa tradition orale y est donc une source majeure.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p06_q4",
            "type": "mcq",
            "prompt": "Pourquoi la tradition orale est-elle une source majeure en Afrique ?",
            "options": [
              "Parce que l'écriture y était interdite par la loi",
              "Parce que les archéologues refusent d'y travailler",
              "Parce que de nombreuses sociétés africaines ont transmis leur passé oralement",
              "Parce que les sources orales n'ont jamais besoin d'être vérifiées"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Dans les sociétés de l'oralité, la mémoire du passé passe par la parole."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'archéologie en Afrique",
          "stepTheme": "L'archéologie en Afrique",
          "stepBadge": "L'archéologie en Afrique",
          "paragraphText": "L'archéologie apporte beaucoup à l'histoire africaine, mais elle souffre d'un manque de moyens financiers et humains, et le climat humide abîme les vestiges.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p06_q5",
            "type": "mcq",
            "prompt": "De quoi souffre l'archéologie en Afrique ?",
            "options": [
              "D'un excès de chercheurs et de financements",
              "De l'absence totale de vestiges",
              "De l'interdiction des fouilles par l'ONU",
              "D'un manque de moyens financiers et humains"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les fouilles coûtent cher et les moyens manquent."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Critiquer la tradition orale",
          "stepTheme": "Critiquer la tradition orale",
          "stepBadge": "Critiquer la tradition orale",
          "paragraphText": "Comme toute source, la tradition orale doit passer par la critique historique, pour vérifier :\n• l'authenticité du document ;\n• la réalité des faits rapportés.\nUne fois ces deux points vérifiés, le document est utilisable.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p06_q6",
            "type": "mcq",
            "prompt": "Que faut-il faire avant d'utiliser un récit de tradition orale ?",
            "options": [
              "L'utiliser directement, car la parole des anciens est toujours vraie",
              "Le rejeter, car une source orale n'est jamais fiable",
              "Le soumettre à la critique historique pour vérifier son authenticité et les faits",
              "Le réécrire pour le rendre plus intéressant"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Comme les écrits, les sources orales doivent être vérifiées avant d'être utilisées."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le bon historien",
          "stepTheme": "Le bon historien",
          "stepBadge": "Le bon historien",
          "paragraphText": "Le bon historien est impartial : il ne prend pas parti et dit toute la vérité.\nIl croise toutes les sources et les soumet à la critique, sans préférer celles qui flattent son camp.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p06_q7",
            "type": "mcq",
            "prompt": "Quelle qualité doit avoir le bon historien ?",
            "options": [
              "La partialité en faveur de son peuple",
              "La crédulité envers tous les témoignages",
              "Le rejet systématique des sources orales",
              "L'impartialité"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'impartialité est la première qualité de l'historien."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p06_q1",
          "type": "mcq",
          "prompt": "« L'Afrique est sans histoire, car les sources écrites y sont rares. » Que répondre ?",
          "options": [
            "C'est faux : tout peuple a une histoire, reconstituée grâce à des sources variées",
            "C'est vrai : sans écrits, il n'y a pas d'histoire",
            "C'est vrai : l'Afrique n'a pas de passé ancien",
            "C'est faux : l'Afrique possède plus d'écrits anciens que l'Europe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'absence d'écrits ne signifie pas absence d'histoire : on utilise d'autres sources."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p06_q2",
          "type": "mcq",
          "prompt": "D'où proviennent surtout les sources écrites anciennes sur l'Afrique ?",
          "options": [
            "D'auteurs arabes, européens et d'Africains lettrés",
            "Uniquement des archives des royaumes de la côte",
            "Uniquement de journaux du XXe siècle",
            "Des récits des griots mis par écrit au Moyen Âge"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les écrits anciens sur l'Afrique viennent surtout des contacts avec le monde arabe puis l'Europe."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p06_q3",
          "type": "mcq",
          "prompt": "Selon Joseph Ki-Zerbo, comment considérer la tradition orale ?",
          "options": [
            "Comme une source sans aucune valeur historique",
            "Comme une source respectable, quoique souvent moins précise que les écrits",
            "Comme une source plus précise que tous les écrits",
            "Comme une source à utiliser sans aucune vérification"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ki-Zerbo défend la tradition orale tout en reconnaissant ses limites."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p06_q4",
          "type": "mcq",
          "prompt": "Pourquoi la tradition orale est-elle une source majeure en Afrique ?",
          "options": [
            "Parce que l'écriture y était interdite par la loi",
            "Parce que les archéologues refusent d'y travailler",
            "Parce que de nombreuses sociétés africaines ont transmis leur passé oralement",
            "Parce que les sources orales n'ont jamais besoin d'être vérifiées"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Dans les sociétés de l'oralité, la mémoire du passé passe par la parole."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p06_q5",
          "type": "mcq",
          "prompt": "De quoi souffre l'archéologie en Afrique ?",
          "options": [
            "D'un excès de chercheurs et de financements",
            "De l'absence totale de vestiges",
            "De l'interdiction des fouilles par l'ONU",
            "D'un manque de moyens financiers et humains"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les fouilles coûtent cher et les moyens manquent."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p06_q6",
          "type": "mcq",
          "prompt": "Que faut-il faire avant d'utiliser un récit de tradition orale ?",
          "options": [
            "L'utiliser directement, car la parole des anciens est toujours vraie",
            "Le rejeter, car une source orale n'est jamais fiable",
            "Le soumettre à la critique historique pour vérifier son authenticité et les faits",
            "Le réécrire pour le rendre plus intéressant"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Comme les écrits, les sources orales doivent être vérifiées avant d'être utilisées."
        },
        {
          "id": "seconde_a_hg_histoire_l02_methodes_etude_histoire_p06_q7",
          "type": "mcq",
          "prompt": "Quelle qualité doit avoir le bon historien ?",
          "options": [
            "La partialité en faveur de son peuple",
            "La crédulité envers tous les témoignages",
            "Le rejet systématique des sources orales",
            "L'impartialité"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'impartialité est la première qualité de l'historien."
        }
      ]
    }
  ]
};
