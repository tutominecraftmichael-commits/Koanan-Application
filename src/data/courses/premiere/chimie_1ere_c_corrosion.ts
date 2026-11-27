import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Corrosion et protection des métaux » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Corrosion et protection des métaux » (document PDF officiel, Physique-Chimie 1ère C, lot P09)
export const CHIMIE_1ERE_C_L15_CORROSION: CurriculumChapter = {
  "id": "premiere_c_chimie_l15_corrosion_protection_metaux",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 15,
  "title": "Leçon 15 : Corrosion et protection des métaux",
  "summary": "Dans le thème de l’oxydoréduction, la leçon définit la corrosion des métaux, distingue la corrosion chimique et la corrosion électrochimique par micro-piles, puis présente les méthodes de protection : aciers spéciaux, modification et recouvrement de la surface, dépôts métalliques et protection cathodique.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Corrosion et protection des métaux » (document PDF officiel, Physique-Chimie 1ère C, lot P09)",
  "points": [
    {
      "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p01",
      "order": 1,
      "title": "La corrosion des métaux : définition et comportements",
      "summary": "Définir la corrosion et comparer le comportement du fer, des métaux nobles et des métaux protégés par leur oxyde.",
      "conceptExplanation": "Les pierres et les métaux sont altérés par le milieu qui les entoure : l’ensemble des actions physico-chimiques qui produit la détérioration de ces matériaux porte le nom de corrosion.\nLes métaux ne résistent pas de la même façon à la corrosion : les métaux nobles, comme l’or et le platine, y sont pratiquement insensibles.\nCertains métaux, comme l’aluminium et le zinc, sont protégés par une mince couche d’oxyde imperméable à la plupart des agents extérieurs, car ils ne s’oxydent qu’en surface.\nEn revanche, sous l’action de l’air humide, le fer rouille : la rouille formée est poreuse, elle ne protège pas le métal et l’attaque continue en profondeur, jusqu’à la destruction totale de la pièce.",
      "keyRule": "Le fer se corrode en profondeur car sa rouille est poreuse, tandis qu’une couche d’oxyde imperméable protège certains métaux en surface.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la machette rouillée (situation d’apprentissage)",
        "statement": "Un élève retrouve une machette oubliée dans le champ de son père, recouverte de rouille. Explique ce phénomène.",
        "methodSteps": [
          "La machette est en fer, un métal altéré par le milieu qui l’entoure, en particulier l’air humide.",
          "L’ensemble des actions physico-chimiques qui détériorent le métal est la corrosion : le fer rouille.",
          "La rouille est poreuse : elle ne protège pas la machette et l’attaque peut continuer en profondeur."
        ],
        "conclusion": "La rouille de la machette est le résultat de la corrosion du fer."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de la corrosion",
          "stepTheme": "La définition de la corrosion",
          "stepBadge": "La définition de la corrosion",
          "paragraphText": "• Corrosion : l’ensemble des actions physico-chimiques qui produit la détérioration des matériaux, pierres et métaux, altérés par le milieu qui les entoure.\nLa machette oubliée dans le champ et recouverte de rouille, dans la situation d’apprentissage, en est un exemple.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p01_q1",
            "type": "mcq",
            "prompt": "La corrosion est :",
            "options": [
              "L’ensemble des actions physico-chimiques qui produit la détérioration des matériaux",
              "Une méthode de protection des métaux",
              "La formation volontaire d’une peinture",
              "Une réaction uniquement nucléaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition de la leçon, reprise dans la correction de la situation d’évaluation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les métaux nobles résistent",
          "stepTheme": "Les métaux nobles résistent",
          "stepBadge": "Les métaux nobles résistent",
          "paragraphText": "• Remarque de la leçon : les métaux ne résistent pas de la même façon à la corrosion.\nLes métaux nobles, comme l’or et le platine, y sont pratiquement insensibles.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p01_q2",
            "type": "mcq",
            "prompt": "Les métaux pratiquement insensibles à la corrosion sont :",
            "options": [
              "Le fer et ses alliages",
              "Les métaux nobles, comme l’or et le platine",
              "Le zinc et le cuivre",
              "Tous les métaux sans exception"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La remarque de la leçon cite l’or et le platine comme pratiquement insensibles à la corrosion."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La couche d’oxyde protectrice",
          "stepTheme": "La couche d’oxyde protectrice",
          "stepBadge": "La couche d’oxyde protectrice",
          "paragraphText": "Certains métaux, comme l’aluminium et le zinc, sont protégés par une mince couche d’oxyde imperméable à la plupart des agents extérieurs.\nCes métaux ne s’oxydent qu’en surface : la couche formée bloque la poursuite de l’attaque.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p01_q3",
            "type": "mcq",
            "prompt": "L’aluminium et le zinc sont protégés contre la corrosion parce que :",
            "options": [
              "Ils sont des métaux nobles",
              "Ils ne réagissent jamais avec l’air",
              "Une mince couche d’oxyde imperméable les recouvre",
              "Ils sont toujours peints"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Leur oxydation reste superficielle et la couche d’oxyde formée est imperméable : elle protège le reste du métal."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le fer rouille en profondeur",
          "stepTheme": "Le fer rouille en profondeur",
          "stepBadge": "Le fer rouille en profondeur",
          "paragraphText": "Sous l’action de l’air humide, le fer rouille.\nLa rouille formée est poreuse : elle ne protège donc pas le métal, et l’attaque continue en profondeur, jusqu’à la destruction totale de la pièce.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p01_q4",
            "type": "mcq",
            "prompt": "Pourquoi la rouille ne protège-t-elle pas le fer ?",
            "options": [
              "Parce qu’elle est imperméable",
              "Parce qu’elle est trop mince",
              "Parce qu’elle dissout le fer instantanément",
              "Parce qu’elle est poreuse et laisse l’attaque continuer en profondeur"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Contrairement à la couche d’oxyde de l’aluminium, la rouille est poreuse : l’attaque se poursuit jusqu’à la destruction de la pièce."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Tous les métaux ne se corrodent pas pareil",
          "stepTheme": "Tous les métaux ne se corrodent pas pareil",
          "stepBadge": "Tous les métaux ne se corrodent pas pareil",
          "paragraphText": "• Piège : croire que la corrosion attaque tous les métaux de la même façon est faux.\nEntre les métaux nobles insensibles, les métaux protégés par leur oxyde de surface et le fer détruit en profondeur, les comportements sont très différents.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p01_q5",
            "type": "mcq",
            "prompt": "Quel métal voit sa corrosion se poursuivre en profondeur sous l’action de l’air humide ?",
            "options": [
              "Le fer",
              "L’or",
              "Le platine",
              "L’aluminium protégé par son oxyde"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le fer rouille et sa rouille poreuse ne le protège pas : l’attaque continue en profondeur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Expliquer la machette rouillée",
          "stepTheme": "Expliquer la machette rouillée",
          "stepBadge": "Expliquer la machette rouillée",
          "paragraphText": "• Situation d’apprentissage : la machette oubliée dans le champ est recouverte de rouille.\nOn l’explique par la corrosion du fer au contact du milieu extérieur, notamment l’air humide : c’est le phénomène que le voisin de classe nomme corrosion.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p01_q6",
            "type": "mcq",
            "prompt": "La machette oubliée dans le champ et recouverte de rouille illustre :",
            "options": [
              "La protection cathodique",
              "La corrosion du fer sous l’action du milieu qui l’entoure",
              "La parkérisation",
              "Le zincage électrolytique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La rouille sur le fer exposé au milieu extérieur est la manifestation visible de la corrosion."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p01_q1",
          "type": "mcq",
          "prompt": "La corrosion est :",
          "options": [
            "L’ensemble des actions physico-chimiques qui produit la détérioration des matériaux",
            "Une méthode de protection des métaux",
            "La formation volontaire d’une peinture",
            "Une réaction uniquement nucléaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition de la leçon, reprise dans la correction de la situation d’évaluation."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p01_q2",
          "type": "mcq",
          "prompt": "Les métaux pratiquement insensibles à la corrosion sont :",
          "options": [
            "Le fer et ses alliages",
            "Les métaux nobles, comme l’or et le platine",
            "Le zinc et le cuivre",
            "Tous les métaux sans exception"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La remarque de la leçon cite l’or et le platine comme pratiquement insensibles à la corrosion."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p01_q3",
          "type": "mcq",
          "prompt": "L’aluminium et le zinc sont protégés contre la corrosion parce que :",
          "options": [
            "Ils sont des métaux nobles",
            "Ils ne réagissent jamais avec l’air",
            "Une mince couche d’oxyde imperméable les recouvre",
            "Ils sont toujours peints"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Leur oxydation reste superficielle et la couche d’oxyde formée est imperméable : elle protège le reste du métal."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p01_q4",
          "type": "mcq",
          "prompt": "Pourquoi la rouille ne protège-t-elle pas le fer ?",
          "options": [
            "Parce qu’elle est imperméable",
            "Parce qu’elle est trop mince",
            "Parce qu’elle dissout le fer instantanément",
            "Parce qu’elle est poreuse et laisse l’attaque continuer en profondeur"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Contrairement à la couche d’oxyde de l’aluminium, la rouille est poreuse : l’attaque se poursuit jusqu’à la destruction de la pièce."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p01_q5",
          "type": "mcq",
          "prompt": "Quel métal voit sa corrosion se poursuivre en profondeur sous l’action de l’air humide ?",
          "options": [
            "Le fer",
            "L’or",
            "Le platine",
            "L’aluminium protégé par son oxyde"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le fer rouille et sa rouille poreuse ne le protège pas : l’attaque continue en profondeur."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p01_q6",
          "type": "mcq",
          "prompt": "La machette oubliée dans le champ et recouverte de rouille illustre :",
          "options": [
            "La protection cathodique",
            "La corrosion du fer sous l’action du milieu qui l’entoure",
            "La parkérisation",
            "Le zincage électrolytique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La rouille sur le fer exposé au milieu extérieur est la manifestation visible de la corrosion."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p02",
      "order": 2,
      "title": "Les causes de la corrosion : chimique et électrochimique",
      "summary": "Distinguer la corrosion chimique de la corrosion électrochimique et prévoir quel métal se dissout dans une micro-pile.",
      "conceptExplanation": "La corrosion chimique est due à l’action directe des liquides et des gaz sur les parois du récipient qui les contient.\nLa corrosion électrochimique commence quand la vapeur d’eau de l’atmosphère se condense à la surface froide des métaux : les gaz et les poussières de l’air se dissolvent dans cette eau et le métal se recouvre d’une solution ionique. S’il existe des couples oxydo-réducteurs différents, il se forme une pile électrochimique, avec dissolution, à la borne négative, du métal le plus réducteur.\nAvec une inclusion de cuivre, moins réducteur que le fer, le fer est oxydé selon $Fe \\rightarrow Fe^{2+} + 2e^-$ et se corrode ; avec une inclusion de zinc, plus réducteur, le zinc est oxydé selon $Zn \\rightarrow Zn^{2+} + 2e^-$ et le fer est protégé.",
      "keyRule": "Dans une micro-pile, c’est toujours le métal le plus réducteur qui est oxydé et se dissout.",
      "formulas": [
        {
          "name": "Oxydation du fer",
          "formula": "Fe \\rightarrow Fe^{2+} + 2e^-",
          "note": "Le fer, plus réducteur que le cuivre, est oxydé."
        },
        {
          "name": "Oxydation du zinc",
          "formula": "Zn \\rightarrow Zn^{2+} + 2e^-",
          "note": "Le zinc, plus réducteur que le fer, est oxydé à sa place."
        }
      ],
      "workedExample": {
        "title": "Prévoir l’effet d’une inclusion de cuivre puis de zinc (exemples de la leçon)",
        "statement": "Une pièce de fer présente une inclusion de cuivre, puis, dans un second cas, une inclusion de zinc. Dans chaque cas, quel métal est oxydé et le fer est-il corrodé ?",
        "methodSteps": [
          "Avec le cuivre, moins réducteur que le fer, les couples en présence font du fer le métal le plus réducteur : le fer est oxydé et se dissout, il se corrode.",
          "Avec le zinc, plus réducteur que le fer, c’est le zinc qui est oxydé.",
          "Le fer est alors protégé à la surface de contact : pas de corrosion du fer."
        ],
        "conclusion": "Tout dépend de la place du métal de l’inclusion par rapport au fer : moins réducteur, le fer se corrode ; plus réducteur, le fer est protégé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La corrosion chimique",
          "stepTheme": "La corrosion chimique",
          "stepBadge": "La corrosion chimique",
          "paragraphText": "• Corrosion chimique : elle est due à l’action directe des liquides et des gaz sur les parois du récipient qui les contient.\nC’est la première des deux causes présentées dans la leçon.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p02_q1",
            "type": "mcq",
            "prompt": "La corrosion chimique est due à :",
            "options": [
              "L’action directe des liquides et des gaz sur les parois",
              "La formation d’une pile électrochimique",
              "La présence d’une impureté métallique",
              "La condensation de la vapeur d’eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La définition de la leçon insiste sur l’action directe des liquides et des gaz."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La corrosion électrochimique",
          "stepTheme": "La corrosion électrochimique",
          "stepBadge": "La corrosion électrochimique",
          "paragraphText": "• Corrosion électrochimique : la vapeur d’eau de l’atmosphère se condense à la surface froide des métaux et les gaz et poussières de l’air se dissolvent dans cette eau.\nLe métal se recouvre alors d’une solution ionique : s’il existe des couples oxydo-réducteurs différents, il se forme une pile électrochimique.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p02_q2",
            "type": "mcq",
            "prompt": "Dans la corrosion électrochimique, la solution ionique qui recouvre le métal provient :",
            "options": [
              "D’un bain d’acide phosphorique",
              "De la vapeur d’eau condensée où se dissolvent gaz et poussières de l’air",
              "D’une peinture liquéfiée",
              "Du métal fondu"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’eau condensée à la surface dissout les gaz et les poussières : elle devient une solution ionique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le métal le plus réducteur se dissout",
          "stepTheme": "Le métal le plus réducteur se dissout",
          "stepBadge": "Le métal le plus réducteur se dissout",
          "paragraphText": "Quand une pile électrochimique se forme, il y a dissolution, à la borne négative, du métal le plus réducteur.\nCe type de corrosion s’applique en particulier au fer et à ses alliages ; il suffit d’une petite impureté, ou inclusion, à la surface pour que l’attaque commence.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p02_q3",
            "type": "mcq",
            "prompt": "Dans la pile de corrosion électrochimique, le métal qui se dissout à la borne négative est :",
            "options": [
              "Le métal le moins réducteur",
              "Le métal noble",
              "Le métal le plus réducteur",
              "Le métal le plus léger"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est le métal le plus réducteur qui est oxydé et se dissout à la borne négative de la micro-pile."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Inclusion de cuivre : le fer se corrode",
          "stepTheme": "Inclusion de cuivre : le fer se corrode",
          "stepBadge": "Inclusion de cuivre : le fer se corrode",
          "paragraphText": "Premier exemple de la leçon : l’inclusion est un métal moins réducteur que le fer, comme le cuivre. Les couples en présence sont $Cu^{2+}$ et $Cu$, puis $Fe^{2+}$ et $Fe$.\nLe fer, plus réducteur, est oxydé : il y a dissolution du fer à la surface de contact, donc corrosion du fer. L’oxydation s’écrit $Fe \\rightarrow Fe^{2+} + 2e^-$.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p02_q4",
            "type": "mcq",
            "prompt": "Avec une inclusion de cuivre, moins réducteur que le fer, quel métal est oxydé ?",
            "options": [
              "Le cuivre",
              "Aucun des deux",
              "Le zinc",
              "Le fer"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Entre les couples du cuivre et du fer, le fer est le plus réducteur : c’est lui qui est oxydé et qui se dissout."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Inclusion de zinc : le fer est protégé",
          "stepTheme": "Inclusion de zinc : le fer est protégé",
          "stepBadge": "Inclusion de zinc : le fer est protégé",
          "paragraphText": "Deuxième exemple de la leçon : l’inclusion est un métal plus réducteur que le fer, comme le zinc. Les couples en présence sont $Fe^{2+}$ et $Fe$, puis $Zn^{2+}$ et $Zn$.\nLe zinc, plus réducteur, est oxydé selon $Zn \\rightarrow Zn^{2+} + 2e^-$ : le fer est protégé à la surface de contact, il n’y a pas de corrosion du fer.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p02_q5",
            "type": "mcq",
            "prompt": "Avec une inclusion de zinc, plus réducteur que le fer, quel métal est oxydé ?",
            "options": [
              "Le zinc",
              "Le fer",
              "Le cuivre",
              "Aucun, la pile ne se forme pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le zinc est le plus réducteur des deux métaux : il est oxydé à la place du fer, qui est protégé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une micro-pile suffit à démarrer l’attaque",
          "stepTheme": "Une micro-pile suffit à démarrer l’attaque",
          "stepBadge": "Une micro-pile suffit à démarrer l’attaque",
          "paragraphText": "• Micro-pile : l’exercice 1 de la leçon la définit comme la pile électrochimique responsable de la corrosion.\n• Piège : pas besoin d’une grosse pile visible ; une petite impureté à la surface du fer suffit à créer la micro-pile et à commencer l’attaque.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p02_q6",
            "type": "mcq",
            "prompt": "D’après l’exercice 1 de la leçon, une micro-pile est :",
            "options": [
              "Une très petite peinture de protection",
              "La pile électrochimique responsable de la corrosion",
              "Un dépôt de zinc par électrolyse",
              "Une pile de stockage électrique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La micro-pile est la pile électrochimique locale dont la formation explique la corrosion électrochimique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p02_q1",
          "type": "mcq",
          "prompt": "La corrosion chimique est due à :",
          "options": [
            "L’action directe des liquides et des gaz sur les parois",
            "La formation d’une pile électrochimique",
            "La présence d’une impureté métallique",
            "La condensation de la vapeur d’eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La définition de la leçon insiste sur l’action directe des liquides et des gaz."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p02_q2",
          "type": "mcq",
          "prompt": "Dans la corrosion électrochimique, la solution ionique qui recouvre le métal provient :",
          "options": [
            "D’un bain d’acide phosphorique",
            "De la vapeur d’eau condensée où se dissolvent gaz et poussières de l’air",
            "D’une peinture liquéfiée",
            "Du métal fondu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’eau condensée à la surface dissout les gaz et les poussières : elle devient une solution ionique."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p02_q3",
          "type": "mcq",
          "prompt": "Dans la pile de corrosion électrochimique, le métal qui se dissout à la borne négative est :",
          "options": [
            "Le métal le moins réducteur",
            "Le métal noble",
            "Le métal le plus réducteur",
            "Le métal le plus léger"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est le métal le plus réducteur qui est oxydé et se dissout à la borne négative de la micro-pile."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p02_q4",
          "type": "mcq",
          "prompt": "Avec une inclusion de cuivre, moins réducteur que le fer, quel métal est oxydé ?",
          "options": [
            "Le cuivre",
            "Aucun des deux",
            "Le zinc",
            "Le fer"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Entre les couples du cuivre et du fer, le fer est le plus réducteur : c’est lui qui est oxydé et qui se dissout."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p02_q5",
          "type": "mcq",
          "prompt": "Avec une inclusion de zinc, plus réducteur que le fer, quel métal est oxydé ?",
          "options": [
            "Le zinc",
            "Le fer",
            "Le cuivre",
            "Aucun, la pile ne se forme pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le zinc est le plus réducteur des deux métaux : il est oxydé à la place du fer, qui est protégé."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p02_q6",
          "type": "mcq",
          "prompt": "D’après l’exercice 1 de la leçon, une micro-pile est :",
          "options": [
            "Une très petite peinture de protection",
            "La pile électrochimique responsable de la corrosion",
            "Un dépôt de zinc par électrolyse",
            "Une pile de stockage électrique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La micro-pile est la pile électrochimique locale dont la formation explique la corrosion électrochimique."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p03",
      "order": 3,
      "title": "Protéger par la composition, la surface traitée ou un revêtement isolant",
      "summary": "Présenter les aciers spéciaux, la modification chimique de la surface, dont la parkérisation, et le recouvrement isolant.",
      "conceptExplanation": "À chaque type de corrosion, il faut trouver la solution la plus simple et la plus économique.\nLes aciers spéciaux et inoxydables sont obtenus par addition de chrome, de nickel, de titane, de molybdène : ils présentent une bonne résistance à la corrosion, mais ils sont assez coûteux.\nLa modification chimique de la surface consiste à plonger la pièce dans un bain pour former une pellicule imperméable : passivité de l’acide nitrique, ou parkérisation par l’acide phosphorique pour les carrosseries d’automobiles. La parkérisation est une phosphatation superficielle de l’acier, destinée à ralentir la corrosion.\nLe recouvrement de la surface utilise des peintures, des vernis, des laques, des matières plastiques, de l’émail, pour isoler la surface métallique de l’atmosphère oxydante.",
      "keyRule": "Trois logiques : changer l’acier, traiter sa surface dans un bain, ou l’isoler sous un revêtement.",
      "formulas": [],
      "workedExample": {
        "title": "Classer des protections (situation d’évaluation)",
        "statement": "Un camarade cite trois protections : recouvrement de la surface à protéger, immersion de la pièce dans un métal fondu, recouvrement électrolytique. Laquelle de ces méthodes correspond au recouvrement isolant par peinture ou vernis ?",
        "methodSteps": [
          "Le recouvrement de la surface à protéger utilise des peintures, des vernis, des laques, des matières plastiques ou de l’émail.",
          "Ces produits isolent la surface métallique de l’atmosphère oxydante.",
          "Les deux autres méthodes citées relèvent des dépôts métalliques, traités dans le point suivant."
        ],
        "conclusion": "Le recouvrement de la surface est la méthode d’isolation par peinture, vernis, laque, plastique ou émail."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Les aciers spéciaux et inoxydables",
          "stepTheme": "Les aciers spéciaux et inoxydables",
          "stepBadge": "Les aciers spéciaux et inoxydables",
          "paragraphText": "• Aciers spéciaux : par addition de chrome, de nickel, de titane, de molybdène, on obtient des produits présentant une bonne résistance à la corrosion.\nLimite de la leçon : ces aciers spéciaux et inoxydables sont assez coûteux.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p03_q1",
            "type": "mcq",
            "prompt": "Les aciers inoxydables sont obtenus par addition notamment de :",
            "options": [
              "Chrome et nickel",
              "Peinture et vernis",
              "Étain fondu seulement",
              "Acide phosphorique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon cite le chrome, le nickel, le titane et le molybdène comme additions donnant une bonne résistance, à un coût élevé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La modification chimique de la surface",
          "stepTheme": "La modification chimique de la surface",
          "stepBadge": "La modification chimique de la surface",
          "paragraphText": "• Modification chimique : on plonge la pièce dans un bain, de façon à former une pellicule imperméable.\nLa leçon cite la passivité de l’acide nitrique et la parkérisation par l’acide phosphorique, utilisée pour les carrosseries d’automobiles.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p03_q2",
            "type": "mcq",
            "prompt": "La modification chimique de la surface consiste à :",
            "options": [
              "Recouvrir la pièce de peinture",
              "Plonger la pièce dans un bain pour former une pellicule imperméable",
              "Relier la pièce à une anode de zinc",
              "Ajouter du chrome dans la masse de l’acier"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le bain crée une pellicule imperméable directement à la surface de la pièce."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La parkérisation",
          "stepTheme": "La parkérisation",
          "stepBadge": "La parkérisation",
          "paragraphText": "• Parkérisation : procédé de protection des pièces métalliques par phosphatation superficielle de l’acier, destinée à ralentir le processus de corrosion.\nElle se fait par l’acide phosphorique et sert notamment pour les carrosseries d’automobiles.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p03_q3",
            "type": "mcq",
            "prompt": "La parkérisation est une protection par :",
            "options": [
              "Électrolyse à anode soluble",
              "Immersion dans le zinc fondu",
              "Phosphatation superficielle de l’acier",
              "Addition de titane à l’acier"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la définition de la leçon : une phosphatation superficielle qui ralentit la corrosion."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le recouvrement isolant de la surface",
          "stepTheme": "Le recouvrement isolant de la surface",
          "stepBadge": "Le recouvrement isolant de la surface",
          "paragraphText": "• Recouvrement de la surface : on utilise des peintures, des vernis, des laques, des matières plastiques, de l’émail pour isoler la surface métallique de l’atmosphère oxydante.\nL’exercice 2 de la leçon le résume : revêtir la surface métallique d’une couche imperméable de vernis ou de peinture à huile évite la corrosion.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p03_q4",
            "type": "mcq",
            "prompt": "Le recouvrement de la surface protège le métal en :",
            "options": [
              "Changeant sa composition dans la masse",
              "Le rendant plus réducteur",
              "Formant une pellicule d’oxyde par bain acide",
              "L’isolant de l’atmosphère oxydante par une peinture, un vernis ou une laque"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ces produits forment une barrière physique entre le métal et l’atmosphère oxydante."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Choisir la solution simple et économique",
          "stepTheme": "Choisir la solution simple et économique",
          "stepBadge": "Choisir la solution simple et économique",
          "paragraphText": "• Principe de la leçon : à chaque type de corrosion, il faut trouver la solution la plus simple et la plus économique.\n• Piège : les aciers inoxydables résistent très bien, mais leur coût élevé ne les rend pas adaptés à toutes les pièces.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p03_q5",
            "type": "mcq",
            "prompt": "Quel est l’inconvénient des aciers spéciaux et inoxydables signalé par la leçon ?",
            "options": [
              "Ils sont assez coûteux",
              "Ils se corrodent plus vite",
              "Ils ne résistent pas à l’air humide",
              "Ils exigent une anode sacrifiée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon les dit efficaces mais coûteux : le choix d’une protection tient compte du prix."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Associer chaque méthode à son principe",
          "stepTheme": "Associer chaque méthode à son principe",
          "stepBadge": "Associer chaque méthode à son principe",
          "paragraphText": "• Méthode : classer les protections selon leur principe. Composition modifiée pour les aciers spéciaux, pellicule formée dans un bain pour la modification chimique, barrière posée pour le recouvrement isolant.\nCe classement évite de confondre la parkérisation, qui traite la surface dans un bain, avec une simple peinture.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p03_q6",
            "type": "mcq",
            "prompt": "La passivité de l’acide nitrique appartient à quelle famille de protection ?",
            "options": [
              "Le recouvrement par peinture",
              "La modification chimique de la surface",
              "La protection cathodique",
              "L’immersion dans un métal fondu"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La pièce est plongée dans un bain qui forme une pellicule imperméable : c’est la modification chimique de la surface."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p03_q1",
          "type": "mcq",
          "prompt": "Les aciers inoxydables sont obtenus par addition notamment de :",
          "options": [
            "Chrome et nickel",
            "Peinture et vernis",
            "Étain fondu seulement",
            "Acide phosphorique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon cite le chrome, le nickel, le titane et le molybdène comme additions donnant une bonne résistance, à un coût élevé."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p03_q2",
          "type": "mcq",
          "prompt": "La modification chimique de la surface consiste à :",
          "options": [
            "Recouvrir la pièce de peinture",
            "Plonger la pièce dans un bain pour former une pellicule imperméable",
            "Relier la pièce à une anode de zinc",
            "Ajouter du chrome dans la masse de l’acier"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le bain crée une pellicule imperméable directement à la surface de la pièce."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p03_q3",
          "type": "mcq",
          "prompt": "La parkérisation est une protection par :",
          "options": [
            "Électrolyse à anode soluble",
            "Immersion dans le zinc fondu",
            "Phosphatation superficielle de l’acier",
            "Addition de titane à l’acier"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la définition de la leçon : une phosphatation superficielle qui ralentit la corrosion."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p03_q4",
          "type": "mcq",
          "prompt": "Le recouvrement de la surface protège le métal en :",
          "options": [
            "Changeant sa composition dans la masse",
            "Le rendant plus réducteur",
            "Formant une pellicule d’oxyde par bain acide",
            "L’isolant de l’atmosphère oxydante par une peinture, un vernis ou une laque"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ces produits forment une barrière physique entre le métal et l’atmosphère oxydante."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p03_q5",
          "type": "mcq",
          "prompt": "Quel est l’inconvénient des aciers spéciaux et inoxydables signalé par la leçon ?",
          "options": [
            "Ils sont assez coûteux",
            "Ils se corrodent plus vite",
            "Ils ne résistent pas à l’air humide",
            "Ils exigent une anode sacrifiée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon les dit efficaces mais coûteux : le choix d’une protection tient compte du prix."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p03_q6",
          "type": "mcq",
          "prompt": "La passivité de l’acide nitrique appartient à quelle famille de protection ?",
          "options": [
            "Le recouvrement par peinture",
            "La modification chimique de la surface",
            "La protection cathodique",
            "L’immersion dans un métal fondu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La pièce est plongée dans un bain qui forme une pellicule imperméable : c’est la modification chimique de la surface."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p04",
      "order": 4,
      "title": "Protéger par un dépôt métallique : immersion et électrolyse",
      "summary": "Expliquer l’immersion dans un métal fondu plus réducteur et le recouvrement électrolytique, avec le zincage.",
      "conceptExplanation": "Dans l’immersion, la pièce à protéger est plongée dans un métal liquide, plus réducteur que le fer, qui recouvre la surface : il se forme une pile électrochimique qui entraîne la dissolution de ce métal. On utilise soit le zinc, pour le fer galvanisé, soit l’étain, pour le fer blanc.\nLe dépôt protecteur peut aussi être obtenu par une électrolyse dite à anode soluble : c’est le recouvrement électrolytique.\nExemple du zincage : à l’anode, le zinc est oxydé selon $Zn \\rightarrow Zn^{2+} + 2e^-$ ; à la cathode, les ions zinc sont réduits selon $Zn^{2+} + 2e^- \\rightarrow Zn$, et ce zinc se dépose sur la pièce à protéger.",
      "keyRule": "Un dépôt de métal plus réducteur protège le fer car il s’oxyde à sa place ; en électrolyse, oxydation à l’anode et réduction à la cathode.",
      "formulas": [
        {
          "name": "Oxydation du zinc à l’anode",
          "formula": "Zn \\rightarrow Zn^{2+} + 2e^-"
        },
        {
          "name": "Réduction des ions zinc à la cathode",
          "formula": "Zn^{2+} + 2e^- \\rightarrow Zn"
        }
      ],
      "workedExample": {
        "title": "Décrire le zincage électrolytique (exemple de la leçon)",
        "statement": "Décris le principe du zincage d’une pièce en fer, en donnant la réaction à chaque électrode.",
        "methodSteps": [
          "À l’anode, le zinc est oxydé : $Zn \\rightarrow Zn^{2+} + 2e^-$.",
          "À la cathode, les ions zinc sont réduits : $Zn^{2+} + 2e^- \\rightarrow Zn$.",
          "Le zinc formé se dépose sur la pièce à protéger."
        ],
        "conclusion": "Le zincage est une électrolyse à anode soluble qui dépose une couche de zinc protectrice sur la pièce."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’immersion dans un métal fondu",
          "stepTheme": "L’immersion dans un métal fondu",
          "stepBadge": "L’immersion dans un métal fondu",
          "paragraphText": "• Immersion : la pièce à protéger est plongée dans un métal liquide, plus réducteur que le fer, qui recouvre la surface.\nIl se forme une pile électrochimique qui entraîne la dissolution de ce métal protecteur plutôt que celle du fer.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p04_q1",
            "type": "mcq",
            "prompt": "Dans l’immersion, le métal fondu utilisé pour recouvrir la pièce doit être :",
            "options": [
              "Moins réducteur que le fer",
              "Plus réducteur que le fer",
              "Un métal noble",
              "Identique au fer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Plus réducteur que le fer, il sera oxydé à sa place si une pile se forme : c’est le principe du deuxième exemple de corrosion électrochimique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Fer galvanisé et fer blanc",
          "stepTheme": "Fer galvanisé et fer blanc",
          "stepBadge": "Fer galvanisé et fer blanc",
          "paragraphText": "On utilise soit le zinc, ce qui donne le fer galvanisé, soit l’étain, ce qui donne le fer blanc.\nCes deux noms de la vie courante désignent du fer recouvert par immersion dans un métal fondu.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p04_q2",
            "type": "mcq",
            "prompt": "Le fer galvanisé est du fer recouvert de :",
            "options": [
              "Étain",
              "Nickel",
              "Zinc",
              "Chrome"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La galvanisation est le recouvrement par le zinc ; l’étain donne le fer blanc."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le recouvrement électrolytique",
          "stepTheme": "Le recouvrement électrolytique",
          "stepBadge": "Le recouvrement électrolytique",
          "paragraphText": "• Recouvrement électrolytique : le dépôt protecteur de métal peut aussi être obtenu par une électrolyse, dite à anode soluble.\nL’exemple de la leçon est le zincage, où le zinc se dépose sur la pièce à protéger.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p04_q3",
            "type": "mcq",
            "prompt": "Le recouvrement électrolytique réalise le dépôt protecteur par :",
            "options": [
              "Une immersion dans un bain fondu",
              "Une peinture au pistolet",
              "Un bain d’acide phosphorique",
              "Une électrolyse dite à anode soluble"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est une électrolyse : le métal de l’anode soluble passe en solution puis se dépose à la cathode."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le zincage : l’oxydation à l’anode",
          "stepTheme": "Le zincage : l’oxydation à l’anode",
          "stepBadge": "Le zincage : l’oxydation à l’anode",
          "paragraphText": "Au zincage, l’anode est en zinc : le zinc y est oxydé et passe en solution.\nLa demi-équation équilibrée est $Zn \\rightarrow Zn^{2+} + 2e^-$ : les charges et les atomes sont conservés.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p04_q4",
            "type": "mcq",
            "prompt": "La demi-équation d’oxydation du zinc à l’anode du zincage est :",
            "options": [
              "$Zn \\rightarrow Zn^{2+} + 2e^-$",
              "$Zn^{2+} + 2e^- \\rightarrow Zn$",
              "$Zn \\rightarrow Zn^{+} + e^-$",
              "$Zn + 2e^- \\rightarrow Zn^{2-}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une oxydation libère des électrons : le zinc métal donne un ion zinc et deux électrons, équation équilibrée en atomes et en charges."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le zincage : la réduction à la cathode",
          "stepTheme": "Le zincage : la réduction à la cathode",
          "stepBadge": "Le zincage : la réduction à la cathode",
          "paragraphText": "À la cathode, les ions zinc de la solution sont réduits : $Zn^{2+} + 2e^- \\rightarrow Zn$.\nCe zinc se dépose sur la pièce à protéger, qui joue le rôle de cathode.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p04_q5",
            "type": "mcq",
            "prompt": "À la cathode du zincage, il se produit :",
            "options": [
              "L’oxydation du fer de la pièce",
              "La réduction des ions $Zn^{2+}$ qui se déposent en zinc sur la pièce",
              "La dissolution de la pièce",
              "La formation de rouille"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La réduction consomme les électrons : les ions zinc deviennent du zinc métal déposé sur la pièce."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser anode et cathode",
          "stepTheme": "Ne pas inverser anode et cathode",
          "stepBadge": "Ne pas inverser anode et cathode",
          "paragraphText": "• Piège : à l’anode a lieu une oxydation, à la cathode une réduction.\nDans le zincage, confondre les deux demi-équations inverse le sens du dépôt : c’est bien à la cathode, sur la pièce, que le zinc apparaît.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p04_q6",
            "type": "mcq",
            "prompt": "Dans une électrolyse de zincage, la pièce à protéger est placée à la cathode parce que :",
            "options": [
              "Le zinc y est oxydé",
              "Elle doit se dissoudre",
              "Le zinc y est réduit et s’y dépose",
              "Les électrons y sont produits par le zinc"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le dépôt se fait là où la réduction a lieu : à la cathode, les ions zinc deviennent du zinc solide sur la pièce."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p04_q1",
          "type": "mcq",
          "prompt": "Dans l’immersion, le métal fondu utilisé pour recouvrir la pièce doit être :",
          "options": [
            "Moins réducteur que le fer",
            "Plus réducteur que le fer",
            "Un métal noble",
            "Identique au fer"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Plus réducteur que le fer, il sera oxydé à sa place si une pile se forme : c’est le principe du deuxième exemple de corrosion électrochimique."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p04_q2",
          "type": "mcq",
          "prompt": "Le fer galvanisé est du fer recouvert de :",
          "options": [
            "Étain",
            "Nickel",
            "Zinc",
            "Chrome"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La galvanisation est le recouvrement par le zinc ; l’étain donne le fer blanc."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p04_q3",
          "type": "mcq",
          "prompt": "Le recouvrement électrolytique réalise le dépôt protecteur par :",
          "options": [
            "Une immersion dans un bain fondu",
            "Une peinture au pistolet",
            "Un bain d’acide phosphorique",
            "Une électrolyse dite à anode soluble"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est une électrolyse : le métal de l’anode soluble passe en solution puis se dépose à la cathode."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p04_q4",
          "type": "mcq",
          "prompt": "La demi-équation d’oxydation du zinc à l’anode du zincage est :",
          "options": [
            "$Zn \\rightarrow Zn^{2+} + 2e^-$",
            "$Zn^{2+} + 2e^- \\rightarrow Zn$",
            "$Zn \\rightarrow Zn^{+} + e^-$",
            "$Zn + 2e^- \\rightarrow Zn^{2-}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une oxydation libère des électrons : le zinc métal donne un ion zinc et deux électrons, équation équilibrée en atomes et en charges."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p04_q5",
          "type": "mcq",
          "prompt": "À la cathode du zincage, il se produit :",
          "options": [
            "L’oxydation du fer de la pièce",
            "La réduction des ions $Zn^{2+}$ qui se déposent en zinc sur la pièce",
            "La dissolution de la pièce",
            "La formation de rouille"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La réduction consomme les électrons : les ions zinc deviennent du zinc métal déposé sur la pièce."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p04_q6",
          "type": "mcq",
          "prompt": "Dans une électrolyse de zincage, la pièce à protéger est placée à la cathode parce que :",
          "options": [
            "Le zinc y est oxydé",
            "Elle doit se dissoudre",
            "Le zinc y est réduit et s’y dépose",
            "Les électrons y sont produits par le zinc"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le dépôt se fait là où la réduction a lieu : à la cathode, les ions zinc deviennent du zinc solide sur la pièce."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p05",
      "order": 5,
      "title": "La protection cathodique et l’anode sacrifiée",
      "summary": "Expliquer la protection cathodique : pièce en fer comme cathode, anode de zinc ou d’aluminium sacrifiée.",
      "conceptExplanation": "La protection cathodique consiste à réaliser une pile électrochimique dans laquelle la cathode est la pièce en fer à protéger, et dont l’anode, en zinc ou en aluminium par exemple, sera sacrifiée.\nPremier exemple : la protection d’une canalisation enterrée, ou d’un rail, ou d’un pylône ; l’anode, qui se dissout, protège le fer.\nDeuxième exemple : la protection d’une coque de navire, où le zinc est oxydé à la place de l’acier de la coque.\nLa documentation de la leçon complète : le métal relié au fer a un potentiel plus faible, il se corrode à sa place et il suffit de le changer périodiquement ; une mole d’électrons correspond à une quantité d’électricité de $96500$ C, le faraday.",
      "keyRule": "Rends le fer cathode et sacrifie un métal plus réducteur : l’anode disparaît, la pièce reste.",
      "formulas": [
        {
          "name": "Oxydation de l’anode de zinc",
          "formula": "Zn \\rightarrow Zn^{2+} + 2e^-"
        },
        {
          "name": "Le faraday (documentation)",
          "formula": "1\\ \\mathrm{F} = 96500\\ \\mathrm{C}",
          "note": "Quantité d’électricité d’une mole d’électrons."
        }
      ],
      "workedExample": {
        "title": "Expliquer la plaque de zinc d’une coque de bateau (exercice 4 de la leçon)",
        "statement": "Sur un chantier naval, on fixe une plaque de zinc sur la coque en acier d’un bateau. La masse de la plaque diminue de $20$ kg au cours d’un voyage. Explique cette diminution et le nom d’anode sacrificielle.",
        "methodSteps": [
          "La plaque de zinc et la coque forment une pile : la coque est la cathode protégée et la plaque est l’anode.",
          "Le zinc, plus réducteur que le fer, est oxydé et se dissout : sa masse diminue.",
          "La plaque est donc sacrifiée à la place de la coque."
        ],
        "conclusion": "La plaque de zinc est une anode sacrificielle : elle est oxydée pour protéger la coque du bateau."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le principe de la protection cathodique",
          "stepTheme": "Le principe de la protection cathodique",
          "stepBadge": "Le principe de la protection cathodique",
          "paragraphText": "• Protection cathodique : on réalise une pile électrochimique dans laquelle la cathode est la pièce en fer à protéger.\nL’anode, en zinc ou en aluminium par exemple, sera sacrifiée : c’est elle qui se dissout et protège le fer.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p05_q1",
            "type": "mcq",
            "prompt": "Dans la protection cathodique, la pièce en fer à protéger joue le rôle de :",
            "options": [
              "Cathode",
              "Anode sacrifiée",
              "Électrolyte",
              "Borne qui se dissout"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La pièce est la cathode de la pile réalisée : elle est protégée, et c’est l’anode qui est sacrifiée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’anode sacrifiée s’oxyde",
          "stepTheme": "L’anode sacrifiée s’oxyde",
          "stepBadge": "L’anode sacrifiée s’oxyde",
          "paragraphText": "L’anode est un métal plus réducteur que le fer, comme le zinc : elle est oxydée selon $Zn \\rightarrow Zn^{2+} + 2e^-$ et se dissout progressivement.\nPour une plaque de zinc fixée à une coque de bateau, la diminution de masse constatée au cours d’un voyage s’explique par cette oxydation du zinc.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p05_q2",
            "type": "mcq",
            "prompt": "La masse d’une plaque de zinc fixée à la coque d’un bateau diminue au cours du voyage parce que :",
            "options": [
              "Le zinc s’évapore",
              "Le zinc est oxydé et se dissout en protégeant la coque",
              "La coque absorbe le zinc",
              "Le zinc se transforme en fer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’explication de l’exercice 4 de la leçon : le zinc est oxydé, sa masse diminue pendant qu’il protège la coque."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Protéger une canalisation enterrée",
          "stepTheme": "Protéger une canalisation enterrée",
          "stepBadge": "Protéger une canalisation enterrée",
          "paragraphText": "Premier exemple de la leçon : la protection d’une canalisation enterrée, ou d’un rail, ou d’un pylône.\nL’anode, qui se dissout, protège le fer de l’ouvrage : on la remplace quand elle est consommée.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p05_q3",
            "type": "mcq",
            "prompt": "Pour une canalisation enterrée en fer, la protection cathodique utilise :",
            "options": [
              "Une anode qui se dissout et protège le fer",
              "Une couche de rouille épaisse",
              "Un acier contenant du molybdène",
              "Une peinture intérieure"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’anode sacrificielle se dissout à la place du fer de la canalisation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Protéger une coque de navire",
          "stepTheme": "Protéger une coque de navire",
          "stepBadge": "Protéger une coque de navire",
          "paragraphText": "Deuxième exemple de la leçon : la protection d’une coque de navire.\nDes plaques d’un métal comme le zinc sont fixées à la coque : le zinc est oxydé, et la coque en acier est protégée.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p05_q4",
            "type": "mcq",
            "prompt": "Sur la coque d’un navire protégée cathodiquement, le métal qui est oxydé est :",
            "options": [
              "Le fer de la coque",
              "Le zinc des plaques fixées à la coque",
              "Le cuivre de l’hélice seulement",
              "Aucun métal"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les plaques de zinc jouent le rôle d’anodes : le zinc est oxydé pendant que la coque est protégée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le nom d’anode sacrificielle",
          "stepTheme": "Le nom d’anode sacrificielle",
          "stepBadge": "Le nom d’anode sacrificielle",
          "paragraphText": "• Anode sacrificielle : l’exercice 4 de la leçon justifie ce nom.\nL’anode de zinc a été sacrifiée, c’est-à-dire oxydée, pour protéger la coque : elle disparaît à la place de la pièce protégée.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p05_q5",
            "type": "mcq",
            "prompt": "On appelle ces plaques des anodes sacrificielles parce qu’elles :",
            "options": [
              "Sont jetées avant usage",
              "Protègent sans jamais changer",
              "Sont oxydées à la place de la pièce protégée",
              "Sont en métal noble"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elles se sacrifient : leur oxydation consomme l’attaque qui aurait corrodé la pièce en fer."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L’anode doit être plus réductrice que le fer",
          "stepTheme": "L’anode doit être plus réductrice que le fer",
          "stepBadge": "L’anode doit être plus réductrice que le fer",
          "paragraphText": "• Piège : une anode faite d’un métal moins réducteur que le fer ne protégerait rien ; elle ferait au contraire du fer le métal oxydé, comme l’inclusion de cuivre du point sur les causes.\nLa documentation de la leçon le confirme : on relie le métal à protéger à un métal de potentiel plus faible, qui se corrode à sa place et que l’on change périodiquement.",
          "exercise": {
            "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p05_q6",
            "type": "mcq",
            "prompt": "Le métal d’une anode sacrifiée doit être, par rapport au fer :",
            "options": [
              "Moins réducteur",
              "Plus noble",
              "Identique",
              "Plus réducteur"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Seul un métal plus réducteur que le fer est oxydé préférentiellement : c’est la condition de la protection cathodique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p05_q1",
          "type": "mcq",
          "prompt": "Dans la protection cathodique, la pièce en fer à protéger joue le rôle de :",
          "options": [
            "Cathode",
            "Anode sacrifiée",
            "Électrolyte",
            "Borne qui se dissout"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La pièce est la cathode de la pile réalisée : elle est protégée, et c’est l’anode qui est sacrifiée."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p05_q2",
          "type": "mcq",
          "prompt": "La masse d’une plaque de zinc fixée à la coque d’un bateau diminue au cours du voyage parce que :",
          "options": [
            "Le zinc s’évapore",
            "Le zinc est oxydé et se dissout en protégeant la coque",
            "La coque absorbe le zinc",
            "Le zinc se transforme en fer"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’explication de l’exercice 4 de la leçon : le zinc est oxydé, sa masse diminue pendant qu’il protège la coque."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p05_q3",
          "type": "mcq",
          "prompt": "Pour une canalisation enterrée en fer, la protection cathodique utilise :",
          "options": [
            "Une anode qui se dissout et protège le fer",
            "Une couche de rouille épaisse",
            "Un acier contenant du molybdène",
            "Une peinture intérieure"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’anode sacrificielle se dissout à la place du fer de la canalisation."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p05_q4",
          "type": "mcq",
          "prompt": "Sur la coque d’un navire protégée cathodiquement, le métal qui est oxydé est :",
          "options": [
            "Le fer de la coque",
            "Le zinc des plaques fixées à la coque",
            "Le cuivre de l’hélice seulement",
            "Aucun métal"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les plaques de zinc jouent le rôle d’anodes : le zinc est oxydé pendant que la coque est protégée."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p05_q5",
          "type": "mcq",
          "prompt": "On appelle ces plaques des anodes sacrificielles parce qu’elles :",
          "options": [
            "Sont jetées avant usage",
            "Protègent sans jamais changer",
            "Sont oxydées à la place de la pièce protégée",
            "Sont en métal noble"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elles se sacrifient : leur oxydation consomme l’attaque qui aurait corrodé la pièce en fer."
        },
        {
          "id": "premiere_c_chimie_l15_corrosion_protection_metaux_p05_q6",
          "type": "mcq",
          "prompt": "Le métal d’une anode sacrifiée doit être, par rapport au fer :",
          "options": [
            "Moins réducteur",
            "Plus noble",
            "Identique",
            "Plus réducteur"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Seul un métal plus réducteur que le fer est oxydé préférentiellement : c’est la condition de la protection cathodique."
        }
      ]
    }
  ]
};
