// ============================================================================
// MODULE OFFICIEL : SCIENCES DE LA VIE ET DE LA TERRE (SVT) 2de A
// Ministère de l'Éducation Nationale et de l'Alphabétisation (MENA - Côte d'Ivoire)
// Programme complet de Seconde A :
// - Leçon 1 : La transmission d’un message nerveux dans l’organisme (8H)
// - Leçon 2 : La transmission d’un message hormonal (6H)
// - Leçon 3 : Les grands ensembles environnementaux (6H)
// - Leçon 4 : La diversité des comportements alimentaires de l’homme (Leçon 8 MENA - 4H)
// - Leçon 5 : Les habitudes alimentaires et la santé de l’homme (Leçon 9 MENA - 6H)
// Règle absolue : Zéro code brut informatique, pédagogie pas-à-pas, 8 questions QCM par mini-leçon (score 8/8 exigé)
// ============================================================================

import type { CurriculumChapter } from '../../lib/curriculum/types';

// ============================================================================
// LEÇON 1 : LA TRANSMISSION D’UN MESSAGE NERVEUX DANS L’ORGANISME
// ============================================================================
export const svt2deALeMessageNerveuxChapter: CurriculumChapter = {
  id: 'seconde_a_svt_ch1_transmission_message_nerveux',
  subjectId: 'svt',
  gradeLevel: 'seconde_a',
  order: 1,
  officialVolumeHours: 8,
  title: 'Leçon 1 — La transmission d’un message nerveux dans l’organisme',
  summary:
    'Mise en évidence du réflexe unilatéral chez la grenouille, trajet complet du message nerveux (récepteur, nerf sensitif, moelle épinière, nerf moteur, effecteur), organisation structurale du neurone et de la synapse, et mécanisme de transmission synaptique par les neurotransmetteurs.',
  points: [
    // ------------------------------------------------------------------------
    // MINI-LEÇON 1/3 : Trajet de l'influx nerveux et arc réflexe unilatéral
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_svt_ch1_p1',
      order: 1,
      title: 'Trajet du message nerveux et arc réflexe unilatéral',
      summary:
        'Expériences sur la grenouille décérébrée, identification des 5 organes intervenant dans le réflexe unilatéral et notion d’arc réflexe.',
      conceptExplanation: `Lorsqu'une partie du corps subit une agression (piqûre, brûlure, contact avec un acide), l'organisme réagit immédiatement par un mouvement automatique et involontaire appelé mouvement réflexe.

1. Mise en évidence expérimentale chez la grenouille :
- Grenouille décérébrée (cerveau détruit, moelle épinière intacte) : lorsqu'on trempe sa patte gauche dans de l'acide chlorhydrique (ou qu'on la pince), la patte stimulée se fléchit brusquement. C'est un réflexe unilatéral.
- Grenouille décérébrée et démédullée (cerveau et moelle épinière détruits) : aucune réaction de flexion n'est observée.
Conclusion : Le cerveau n'intervient pas dans ce mouvement réflexe ; le centre nerveux responsable est la moelle épinière.

2. Les 5 organes indispensables de l'arc réflexe unilatéral :
Tout acte réflexe nécessite la coordination de cinq structures complémentaires :
1. Le récepteur sensoriel (la peau) : capte le stimulus ou excitant (l'acide ou la piqûre) et fait naître un message nerveux sensitif (centripète).
2. Le conducteur sensitif (le nerf sensitif ou racine postérieure du nerf rachidien) : conduit l'influx nerveux sensitif vers le centre nerveux.
3. Le centre nerveux (la moelle épinière) : reçoit l'influx sensitif, le traite et le transforme en influx nerveux moteur (centrifuge).
4. Le conducteur moteur (le nerf moteur ou racine antérieure du nerf rachidien) : achemine l'influx nerveux moteur vers l'organe qui doit agir.
5. L'effecteur (le muscle de la patte) : reçoit l'ordre moteur et réagit en se contractant, ce qui provoque le retrait protecteur de la patte.

3. Définition de l'arc réflexe :
L'arc réflexe désigne le trajet anatomique continu suivi par l'influx nerveux depuis le récepteur sensoriel jusqu'à l'organe effecteur :
Peau (récepteur) → Nerf sensitif → Moelle épinière (centre nerveux) → Nerf moteur → Muscle (effecteur).`,
      formulas: [
        {
          name: 'Trajet de l’arc réflexe unilatéral',
          formula: 'Peau (Récepteur) → Nerf sensitif → Moelle épinière (Centre) → Nerf moteur → Muscle (Effecteur)',
          note: 'Circuit anatomique obligatoire d’un mouvement réflexe involontaire.'
        }
      ],
      keyRule:
        'Dans un réflexe unilatéral, le centre nerveux est la moelle épinière (réflexe médullaire). Si le nerf moteur est sectionné, l’influx sensitif arrive au centre mais l’ordre n’arrive plus au muscle : la patte ne bouge pas.',
      workedExample: {
        title: 'Situation d’évaluation officielle : Piqûre accidentelle et arc réflexe',
        statement:
          'En marchant pieds nus dans la cour, un élève marche sur un clou pointu. Il retire instantanément et involontairement son pied avant même d’avoir réfléchi. Identifier les organes intervenant dans cette réaction et décrire le trajet du message nerveux.',
        methodSteps: [
          'Étape 1 : Identifier le récepteur et le stimulus : la pointe du clou excite les terminaisons nerveuses de la peau du pied (récepteur), créant un influx sensitif.',
          'Étape 2 : Suivre la conduction centripète : l’influx sensitif remonte le long du nerf sciatique jusqu’à la moelle épinière via la racine postérieure.',
          'Étape 3 : Identifier le centre nerveux : la moelle épinière intègre l’information et émet un influx moteur par la racine antérieure.',
          'Étape 4 : Identifier la conduction centrifuge et l’effecteur : l’influx moteur parvient aux muscles de la cuisse et de la jambe (effecteurs) qui se contractent pour retirer le pied.'
        ],
        conclusion:
          'Le trajet est un arc réflexe médullaire fermé : Peau du pied → Nerf sensitif → Moelle épinière → Nerf moteur → Muscles fléchisseurs du membre inférieur.'
      },
      exercises: [
        {
          id: 'seconde_a_svt_ch1_p1_ex1',
          type: 'mcq',
          prompt: 'Quel est le centre nerveux responsable du réflexe unilatéral de flexion chez une grenouille décérébrée ?',
          options: ['Le cerveau', 'La moelle épinière', 'Le bulbe rachidien', 'Le cervelet'],
          correctAnswerIndex: 1,
          explanation:
            'Chez la grenouille décérébrée, le cerveau est détruit. La réaction réflexe persiste grâce à la moelle épinière qui constitue le centre réflexe médullaire.'
        },
        {
          id: 'seconde_a_svt_ch1_p1_ex2',
          type: 'mcq',
          prompt: 'Dans un mouvement réflexe unilatéral, quel est le rôle joué par la peau stimulée par un acide ?',
          options: [
            'Elle sert de centre nerveux intégrateur',
            'Elle sert de récepteur sensoriel captant l’excitant',
            'Elle sert de conducteur moteur centrifuge',
            'Elle sert d’effecteur produisant le mouvement'
          ],
          correctAnswerIndex: 1,
          explanation:
            'La peau renferme des récepteurs sensoriels sensibles aux stimuli mécaniques, chimiques ou thermiques. Elle capte l’excitant et génère l’influx nerveux sensitif.'
        },
        {
          id: 'seconde_a_svt_ch1_p1_ex3',
          type: 'mcq',
          prompt: 'Quel est l’ordre chronologique exact du parcours de l’influx nerveux lors d’un acte réflexe unilatéral ?',
          options: [
            'Muscle → Nerf moteur → Moelle épinière → Nerf sensitif → Peau',
            'Peau → Nerf moteur → Moelle épinière → Nerf sensitif → Muscle',
            'Peau → Nerf sensitif → Moelle épinière → Nerf moteur → Muscle',
            'Moelle épinière → Peau → Nerf sensitif → Nerf moteur → Muscle'
          ],
          correctAnswerIndex: 2,
          explanation:
            'L’arc réflexe part toujours du récepteur (peau), emprunte la voie sensitive vers le centre (moelle épinière), puis la voie motrice vers l’effecteur (muscle).'
        },
        {
          id: 'seconde_a_svt_ch1_p1_ex4',
          type: 'mcq',
          prompt: 'Si on sectionne le nerf moteur qui innerve la patte d’un animal et qu’on stimule sa peau avec de l’acide, que constate-t-on ?',
          options: [
            'L’animal retire la patte plus rapidement',
            'Il n’y a aucune réaction de la patte car l’ordre moteur ne parvient plus au muscle',
            'Le muscle se contracte sans arrêt',
            'L’influx sensitif est bloqué au niveau de la peau'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Le nerf moteur assure la conduction de l’influx du centre nerveux vers l’effecteur. S’il est sectionné, le muscle ne reçoit aucun signal et ne peut pas se contracter.'
        },
        {
          id: 'seconde_a_svt_ch1_p1_ex5',
          type: 'mcq',
          prompt: 'Quelle expérience prouve que la moelle épinière est indispensable au réflexe unilatéral ?',
          options: [
            'La destruction de la moelle épinière (grenouille démédullée) supprime définitivement le réflexe',
            'La destruction du cerveau augmente la force de flexion',
            'L’application d’eau distillée sur la peau déclenche un réflexe violent',
            'La section de la peau de la patte opposée paralyse les deux membres'
          ],
          correctAnswerIndex: 0,
          explanation:
            'Une grenouille décérébrée et démédullée ne réagit à aucune stimulation, ce qui prouve expérimentalement que la moelle épinière est le centre nerveux indispensable.'
        },
        {
          id: 'seconde_a_svt_ch1_p1_ex6',
          type: 'mcq',
          prompt: 'Dans la moelle épinière, par quelle racine pénètre l’influx nerveux sensitif centripète ?',
          options: [
            'Par la racine antérieure (ventrale)',
            'Par la racine postérieure (dorsale)',
            'Par le canal de l’épendyme',
            'Directement par le muscle'
          ],
          correctAnswerIndex: 1,
          explanation:
            'D’après les expériences de Magendie, les fibres nerveuses sensitives pénètrent dans la moelle épinière exclusivement par la racine postérieure (qui porte un ganglion spinal).'
        },
        {
          id: 'seconde_a_svt_ch1_p1_ex7',
          type: 'mcq',
          prompt: 'Dans un arc réflexe, quel organe joue le rôle d’effecteur ?',
          options: ['Le nerf sensitif', 'La moelle épinière', 'Le muscle', 'La peau'],
          correctAnswerIndex: 2,
          explanation:
            'L’effecteur est l’organe qui exécute la réponse mécanique ordonnée par le centre nerveux : c’est le muscle qui se contracte.'
        },
        {
          id: 'seconde_a_svt_ch1_p1_ex8',
          type: 'mcq',
          prompt: 'Comment qualifie-t-on la réaction de flexion de la même patte que celle ayant reçu l’excitant ?',
          options: [
            'Un réflexe bilatéral',
            'Un réflexe unilatéral',
            'Un mouvement volontaire cérébral',
            'Un réflexe conditionnel'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Le retrait de la seule patte stimulée est nommé réflexe unilatéral. Si les deux pattes arrières fléchissent simultanément, on parle de réflexe bilatéral ou symétrique.'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 2/3 : Organisation du neurone et de la synapse
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_svt_ch1_p2',
      order: 2,
      title: 'Organisation structurale du neurone et de la synapse',
      summary:
        'Les trois parties du neurone (corps cellulaire, axone, arborisation terminale), sens unique de propagation et structure de la synapse.',
      conceptExplanation: `Le tissu nerveux est constitué de cellules hautement spécialisées dans la génération et la conduction des messages électriques : les neurones.

1. Morphologie et parties d'un neurone :
Le neurone est l'unité structurale et fonctionnelle fondamentale du système nerveux. Il comprend 3 parties distinctes :
1. Le corps cellulaire (ou péricaryon) : situé dans la substance grise des centres nerveux ou dans les ganglions rachidiens. Il contient le noyau, le cytoplasme avec des inclusions cytoplasmiques et des prolongements courts et ramifiés appelés dendrites.
2. L'axone (ou cylindraxe) : long prolongement unique à diamètre constant émergeant du corps cellulaire. Il est souvent entouré d'une gaine de myéline isolante (substance blanche) qui accélère la conduction.
3. L'arborisation terminale : extrémité ramifiée de l'axone terminée par de petits renflements appelés boutons synaptiques.

2. Sens unique de conduction de l'influx nerveux :
L'influx nerveux circule toujours dans le même sens à travers le neurone :
Dendrites → Corps cellulaire → Axone → Arborisation terminale.

3. La synapse : zone de jonction intercellulaire :
Deux neurones ne se touchent jamais directement de façon continue. La zone de contact fonctionnel entre deux neurones (ou entre un neurone et une cellule musculaire) s'appelle une synapse.
Une synapse comprend 3 éléments anatomiques :
- L'élément présynaptique : bouton synaptique riche en mitochondries et en vésicules synaptiques remplies de neurotransmetteurs.
- La fente synaptique : espace microscopique liquide (20 à 50 nm) séparant les deux membranes.
- L'élément postsynaptique : membrane plasmique de la cellule réceptrice comportant des récepteurs protéiques spécifiques.`,
      formulas: [
        {
          name: 'Sens de propagation de l’influx dans un neurone',
          formula: 'Dendrites → Corps cellulaire → Axone → Arborisation terminale',
          note: 'Polarisation fonctionnelle obligatoire de la cellule nerveuse.'
        }
      ],
      keyRule:
        'La transmission d’un message au niveau d’une synapse est unidirectionnelle : elle s’effectue toujours de l’élément présynaptique (qui libère le neurotransmetteur) vers l’élément postsynaptique (qui possède les récepteurs).',
      workedExample: {
        title: 'Situation d’évaluation officielle : Analyse ultrastructurale d’une synapse',
        statement:
          'En observant une micrographie électronique de contact inter-neuronal, un élève remarque que le neurone A contient de nombreuses vésicules proches de sa membrane alors que le neurone B possède une membrane lisse sans vésicule. Identifier le sens de transmission.',
        methodSteps: [
          'Étape 1 : Analyser le neurone A : la présence de vésicules synaptiques indique qu’il s’agit du bouton présynaptique émetteur.',
          'Étape 2 : Analyser le neurone B : l’absence de vésicules et la présence d’une membrane postsynaptique réceptrice caractérisent l’élément postsynaptique.',
          'Étape 3 : Identifier l’espace intermédiaire : la zone claire entre A et B est la fente synaptique.'
        ],
        conclusion:
          'Le message nerveux se propage obligatoirement de A vers B (du neurone présynaptique vers le neurone postsynaptique).'
      },
      exercises: [
        {
          id: 'seconde_a_svt_ch1_p2_ex1',
          type: 'mcq',
          prompt: 'Quelles sont les trois parties constitutives d’un neurone ?',
          options: [
            'Noyau, membrane plasmique et vacuole',
            'Corps cellulaire, axone et arborisation terminale',
            'Racine antérieure, ganglion et moelle',
            'Bouton présynaptique, fente et muscle'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Un neurone typique est constitué d’un corps cellulaire (avec dendrites et noyau), d’un axone cylindrique conducteur et d’une arborisation terminale ramifiée.'
        },
        {
          id: 'seconde_a_svt_ch1_p2_ex2',
          type: 'mcq',
          prompt: 'Quel est le sens normal de propagation de l’influx nerveux au sein d’un neurone ?',
          options: [
            'Arborisation terminale → Axone → Corps cellulaire',
            'Corps cellulaire → Dendrites → Axone',
            'Dendrites → Corps cellulaire → Axone → Arborisation terminale',
            'Axone → Corps cellulaire → Dendrites'
          ],
          correctAnswerIndex: 2,
          explanation:
            'L’influx nerveux est capté par les dendrites, converge vers le corps cellulaire, chemine le long de l’axone et atteint l’arborisation terminale.'
        },
        {
          id: 'seconde_a_svt_ch1_p2_ex3',
          type: 'mcq',
          prompt: 'Comment appelle-t-on la zone de jonction et de transmission d’information entre deux neurones ?',
          options: ['Un ganglion', 'Une synapse', 'Un axone', 'Un faisceau de fibres'],
          correctAnswerIndex: 1,
          explanation:
            'La synapse est la structure microscopique spécialisée permettant la communication entre un neurone présynaptique et une cellule postsynaptique.'
        },
        {
          id: 'seconde_a_svt_ch1_p2_ex4',
          type: 'mcq',
          prompt: 'Dans quel compartiment d’une synapse trouve-t-on les vésicules synaptiques contenant les neurotransmetteurs ?',
          options: [
            'Dans la fente synaptique',
            'Dans le bouton présynaptique',
            'Sur la membrane postsynaptique',
            'Dans le noyau du neurone postsynaptique'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Les vésicules synaptiques sont stockées dans le cytoplasme du bouton présynaptique avant d’être libérées par exocytose.'
        },
        {
          id: 'seconde_a_svt_ch1_p2_ex5',
          type: 'mcq',
          prompt: 'Où se situent les corps cellulaires des neurones dans le système nerveux central ?',
          options: [
            'Exclusivement dans la substance blanche',
            'Dans la substance grise et les ganglions nerveux',
            'Dans la gaine de myéline',
            'Dans les fentes synaptiques'
          ],
          correctAnswerIndex: 1,
          explanation:
            'La substance grise des centres nerveux (cerveau et moelle épinière) ainsi que les ganglions spinaux sont formés par les rassemblements de corps cellulaires.'
        },
        {
          id: 'seconde_a_svt_ch1_p2_ex6',
          type: 'mcq',
          prompt: 'Quel élément anatomique de la synapse porte les récepteurs membranaires spécifiques au neuromédiateur ?',
          options: [
            'La membrane présynaptique',
            'La gaine de Schwann',
            'La membrane postsynaptique',
            'Les mitochondries présynaptiques'
          ],
          correctAnswerIndex: 2,
          explanation:
            'La membrane postsynaptique possède des protéines réceptrices spécifiques sur lesquelles se fixent les molécules de neurotransmetteur libérées.'
        },
        {
          id: 'seconde_a_svt_ch1_p2_ex7',
          type: 'mcq',
          prompt: 'Pourquoi la transmission du message nerveux au niveau d’une synapse est-elle strictement unidirectionnelle ?',
          options: [
            'Parce que le sang circule dans un seul sens',
            'Parce que les vésicules sont uniquement dans l’élément présynaptique et les récepteurs sur l’élément postsynaptique',
            'Parce que les dendrites repoussent l’influx électrique',
            'Parce que l’axone est dépourvu de membrane plasmique'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Seul le neurone présynaptique possède des vésicules de neuromédiateur à libérer, et seul le neurone postsynaptique possède les récepteurs correspondants.'
        },
        {
          id: 'seconde_a_svt_ch1_p2_ex8',
          type: 'mcq',
          prompt: 'Qu’est-ce qu’un nerf par rapport au neurone ?',
          options: [
            'Un nerf est une seule cellule géante',
            'Un nerf est un ensemble de prolongements (fibres nerveuses) regroupés en faisceaux',
            'Un nerf est un liquide protecteur entourant le cerveau',
            'Un nerf est l’espace situé entre deux synapses'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Un nerf est un cordon blanchâtre formé par le rassemblement de milliers de fibres nerveuses (axones et dendrites) emballées dans du tissu conjonctif.'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 3/3 : Mécanisme physico-chimique de la transmission synaptique
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_svt_ch1_p3',
      order: 3,
      title: 'Mécanisme de la transmission synaptique et médiateurs chimiques',
      summary:
        'Rôle des ions calcium Ca²⁺, exocytose de l’acétylcholine, fixation sur les récepteurs Na⁺, dépolarisation postsynaptique et hydrolyse par l’acétylcholinestérase.',
      conceptExplanation: `La transmission du message nerveux d'un neurone à un autre à travers la fente synaptique ne se fait pas par un courant électrique continu, mais par l'intermédiaire d'un messager chimique appelé neuromédiateur ou neurotransmetteur.

1. Déroulement chronologique de la transmission synaptique :
Le mécanisme se déroule en 6 étapes successives précises :
1. Arrivée du message nerveux (potentiel d'action) au niveau du bouton présynaptique.
2. Entrée massive d'ions calcium (Ca²⁺) dans le bouton présynaptique à travers des canaux voltage-dépendants.
3. Exocytose des vésicules synaptiques : sous l'action du Ca²⁺, les vésicules migrent vers la membrane plasmique, fusionnent avec elle et libèrent leurs molécules de neurotransmetteur (comme l'acétylcholine) dans la fente synaptique.
4. Fixation du neurotransmetteur sur des récepteurs spécifiques de la membrane postsynaptique.
5. Ouverture des canaux ioniques à sodium (Na⁺) chimio-dépendants : les ions Na⁺ entrent massivement dans la cellule postsynaptique, provoquant une dépolarisation de la membrane et la naissance d'un nouvel influx nerveux.
6. Inactivation et fin du signal :
   - L'acétylcholine est rapidement hydrolysée (découpée) par une enzyme spécifique : l'acétylcholinestérase.
   - Les produits de dégradation sont recapturés par la terminaison présynaptique pour resynthétiser de nouvelles vésicules.
   - Les canaux Na⁺ se referment, rétablissant le repos.

2. Effet des anesthésiques et substances chimiques :
Un anesthésique local (ou un curare) bloque la transmission synaptique soit en empêchant l'entrée de Ca²⁺, soit en bloquant les récepteurs à acétylcholine de la membrane postsynaptique. Le message de douleur n'atteint plus les centres nerveux.`,
      formulas: [
        {
          name: 'Cascade synaptique',
          formula: 'Arrivée influx → Entrée Ca²⁺ → Exocytose Acétylcholine → Fixation récepteur → Entrée Na⁺ → Nouvel influx',
          note: 'Chronologie universelle de la transmission chimique synaptique.'
        }
      ],
      keyRule:
        'Sans entrée d’ions calcium (Ca²⁺), aucune libération de neurotransmetteur n’est possible. L’acétylcholinestérase est l’enzyme indispensable qui détruit le médiateur pour éviter une contraction permanente.',
      workedExample: {
        title: 'Situation d’évaluation officielle : Action d’un anesthésique local',
        statement:
          'Lors d’une suture à l’infirmerie, un élève blessé ne ressent plus la douleur 10 minutes après l’injection d’un anesthésique local. Expliquer pourquoi la douleur a disparu au niveau cellulaire.',
        methodSteps: [
          'Étape 1 : Rappeler l’origine de la douleur : le traumatisme cutané déclenche des influx nerveux qui cheminent le long des fibres sensitives via des synapses jusqu’aux centres nerveux.',
          'Étape 2 : Analyser l’action de l’anesthésique : le produit injecté bloque localement l’ouverture des canaux ioniques ou la fixation des neurotransmetteurs au niveau des synapses des nerfs sensitifs.',
          'Étape 3 : Conclure sur le transfert de l’information : l’influx nerveux sensitif est interrompu et ne parvient plus à la moelle épinière ni au cerveau, ce qui supprime la sensation consciente de douleur.'
        ],
        conclusion:
          'L’anesthésie locale bloque la transmission synaptique de l’influx sensitif, rendant la suture totalement indolore.'
      },
      exercises: [
        {
          id: 'seconde_a_svt_ch1_p3_ex1',
          type: 'mcq',
          prompt: 'Quel ion pénètre massivement dans le bouton présynaptique lors de l’arrivée du potentiel d’action pour déclencher l’exocytose ?',
          options: ['L’ion potassium K⁺', 'L’ion calcium Ca²⁺', 'L’ion chlorure Cl⁻', 'L’ion fer Fe²⁺'],
          correctAnswerIndex: 1,
          explanation:
            'L’arrivée du potentiel d’action ouvre des canaux calciques voltage-dépendants : l’entrée d’ions Ca²⁺ provoque la fusion des vésicules synaptiques avec la membrane.'
        },
        {
          id: 'seconde_a_svt_ch1_p3_ex2',
          type: 'mcq',
          prompt: 'Par quel mécanisme biologique les molécules d’acétylcholine contenues dans les vésicules sont-elles déversées dans la fente synaptique ?',
          options: ['Par endocytose', 'Par exocytose', 'Par osmose', 'Par filtration rénale'],
          correctAnswerIndex: 1,
          explanation:
            'L’exocytose est le processus par lequel les vésicules intracellulaires fusionnent avec la membrane plasmique pour libérer leur contenu à l’extérieur de la cellule.'
        },
        {
          id: 'seconde_a_svt_ch1_p3_ex3',
          type: 'mcq',
          prompt: 'Que provoque la fixation de l’acétylcholine sur les récepteurs spécifiques de la membrane postsynaptique ?',
          options: [
            'La destruction immédiate du neurone postsynaptique',
            'L’ouverture des canaux ioniques à Na⁺ et l’entrée massive d’ions Na⁺',
            'L’arrêt total de la respiration cellulaire',
            'La fermeture définitive de tous les vaisseaux sanguins'
          ],
          correctAnswerIndex: 1,
          explanation:
            'La fixation de l’acétylcholine ouvre des canaux chimio-dépendants à Na⁺, provoquant une entrée d’ions sodium qui dépolarise la membrane et engendre un nouvel influx.'
        },
        {
          id: 'seconde_a_svt_ch1_p3_ex4',
          type: 'mcq',
          prompt: 'Quelle enzyme hydrolyse l’acétylcholine dans la fente synaptique après le passage de l’influx nerveux ?',
          options: ['L’amylase salivaire', 'L’acétylcholinestérase', 'L’ADN polymérase', 'La pepsine gastrique'],
          correctAnswerIndex: 1,
          explanation:
            'L’acétylcholinestérase dégrade l’acétylcholine en acétate et choline afin de fermer les canaux Na⁺ et d’arrêter la transmission synaptique.'
        },
        {
          id: 'seconde_a_svt_ch1_p3_ex5',
          type: 'mcq',
          prompt: 'Que devient l’acétylcholine après son hydrolyse par l’acétylcholinestérase ?',
          options: [
            'Elle est éliminée dans les urines immédiatement',
            'Elle est recapturée par la terminaison présynaptique pour être recyclée',
            'Elle se transforme en gaz carbonique toxique',
            'Elle dissout la gaine de myéline'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Les produits de l’hydrolyse sont recapturés par transport actif dans le bouton présynaptique pour synthétiser à nouveau de l’acétylcholine.'
        },
        {
          id: 'seconde_a_svt_ch1_p3_ex6',
          type: 'mcq',
          prompt: 'Comment qualifie-t-on une substance comme l’acétylcholine qui transmet l’information d’un neurone à un autre ?',
          options: ['Une hormone endocrine', 'Un neurotransmetteur (ou neuromédiateur)', 'Une vitamine liposoluble', 'Un anticorps circulant'],
          correctAnswerIndex: 1,
          explanation:
            'L’acétylcholine est un neurotransmetteur chimique qui convertit le message électrique présynaptique en message chimique dans la fente synaptique.'
        },
        {
          id: 'seconde_a_svt_ch1_p3_ex7',
          type: 'mcq',
          prompt: 'Quelle est la conséquence si une toxine bloque l’action de l’acétylcholinestérase ?',
          options: [
            'L’acétylcholine reste fixée sur les récepteurs, provoquant une stimulation et des contractions musculaires permanentes',
            'Le muscle cesse immédiatement de fonctionner et se relâche',
            'Les os deviennent fragiles',
            'La peau ne ressent plus la chaleur'
          ],
          correctAnswerIndex: 0,
          explanation:
            'Sans acétylcholinestérase, l’acétylcholine n’est plus détruite : les canaux Na⁺ restent ouverts, ce qui entraîne une tétanie ou des spasmes musculaires continus.'
        },
        {
          id: 'seconde_a_svt_ch1_p3_ex8',
          type: 'mcq',
          prompt: 'Comment un produit anesthésique local empêche-t-il la perception de la douleur lors d’une intervention chirurgicale ?',
          options: [
            'Il détruit les os de la zone opérée',
            'Il bloque la transmission de l’influx nerveux sensitif vers les centres nerveux',
            'Il augmente la pression artérielle dans tout le corps',
            'Il supprime la production d’anticorps'
          ],
          correctAnswerIndex: 1,
          explanation:
            'L’anesthésique local interrompt la propagation du potentiel d’action sur les fibres sensitives, empêchant le message douloureux d’atteindre le cerveau.'
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 2 : LA TRANSMISSION D’UN MESSAGE HORMONAL
// ============================================================================
export const svt2deALeMessageHormonalChapter: CurriculumChapter = {
  id: 'seconde_a_svt_ch2_transmission_message_hormonal',
  subjectId: 'svt',
  gradeLevel: 'seconde_a',
  order: 2,
  officialVolumeHours: 6,
  title: 'Leçon 2 — La transmission d’un message hormonal',
  summary:
    'Expériences historiques de castration et d’ovariectomie chez le rat et le coq, double fonction des gonades (exocrine et endocrine), notion d’hormone, transport sanguin, reconnaissance des cellules cibles par récepteurs membranaires spécifiques.',
  points: [
    // ------------------------------------------------------------------------
    // MINI-LEÇON 1/2 : Glandes endocrines et mise en évidence des hormones sexuelles
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_svt_ch2_p1',
      order: 1,
      title: 'Glandes endocrines et mise en évidence des hormones sexuelles',
      summary:
        'Expériences de castration, d’ovariectomie, de greffe et d’injection d’extraits gonadiques montrant l’action endocrine par voie sanguine.',
      conceptExplanation: `Le fonctionnement et le développement des organes reproducteurs ainsi que l'apparition des caractères sexuels secondaires sont sous le contrôle de messagers chimiques circulant dans le sang.

1. Mise en évidence chez le coq et le chapon :
- Castration d'un coq immature (ablation des deux testicules) : l'animal devient un chapon. Ses organes érectiles (crête, barbillons) restent atrophiés, son chant et son instinct sexuel n'apparaissent pas. Cependant, son plumage de coq et ses ergots continuent de pousser.
- Greffe d'un fragment de testicule sous la peau ou injection d'extraits testiculaires au chapon : la crête et les barbillons se développent, le chant et le comportement sexuel réapparaissent.
Conclusion : Le testicule agit sur les caractères sexuels secondaires à distance, par l'intermédiaire de substances chimiques sécrétées dans le sang. Le testicule est une glande endocrine. La fertilité n'est pas restaurée par la greffe car les canaux conducteurs (spermiductes) ne sont pas reconnectés.

2. Mise en évidence chez la rate :
- Ovariectomie d'une rate pubère (ablation des ovaires) : arrêt des cycles œstriens, atrophie de la muqueuse utérine et stérilité.
- Greffe d'ovaires sous la peau ou injection quotidienne d'extraits ovariens : rétablissement du développement de la muqueuse utérine.
Conclusion : L'ovaire contrôle l'utérus par l'intermédiaire de molécules déversées dans le sang.

3. Double fonction des gonades (glandes mixtes) :
- Fonction exocrine : production et libération de cellules reproductrices (gamètes) dans des conduits vers l'extérieur : les testicules produisent les spermatozoïdes ; les ovaires produisent les ovules.
- Fonction endocrine : synthèse et libération d'hormones directement dans la circulation sanguine :
  * Les testicules sécrètent la testostérone.
  * Les ovaires sécrètent les œstrogènes (notamment l'œstradiol) et la progestérone.`,
      formulas: [
        {
          name: 'Double fonction des gonades',
          formula: 'Gonades = Fonction Exocrine (Gamètes) + Fonction Endocrine (Hormones sanguines)',
          note: 'Les testicules produisent spermatozoïdes + testostérone ; les ovaires produisent ovules + œstrogènes / progestérone.'
        }
      ],
      keyRule:
        'Une glande endocrine ne possède pas de canal excréteur : elle déverse directement ses sécrétions (hormones) dans le sang. La greffe d’un testicule rétablit les caractères secondaires par voie sanguine, mais ne guérit jamais la stérilité car les spermatozoïdes ne peuvent pas passer dans le sang.',
      workedExample: {
        title: 'Situation d’évaluation officielle : Expérience de greffe ectopique chez le rat',
        statement:
          'On castre un rat pubère : sa prostate diminue de volume et son instinct sexuel disparaît. On lui greffe ensuite un testicule sous la peau : la prostate retrouve son volume normal et l’instinct sexuel réapparaît, mais le rat demeure définitivement stérile. Expliquer ces résultats.',
        methodSteps: [
          'Étape 1 : Expliquer la régression après castration : la suppression des testicules stoppe la production de testostérone, hormone indispensable au maintien de la prostate et du comportement sexuel.',
          'Étape 2 : Expliquer l’effet de la greffe sous-cutanée : le testicule greffé est vascularisé par les vaisseaux sanguins. Il libère de la testostérone dans le sang, ce qui restaure les caractères secondaires.',
          'Étape 3 : Expliquer la persistance de la stérilité : la procréation exige l’émission de spermatozoïdes vivants via les spermiductes. Le greffon n’étant pas relié aux voies génitales, les spermatozoïdes ne peuvent pas être émis.'
        ],
        conclusion:
          'Le testicule possède une fonction endocrine sanguine (testostérone) assurée par le greffon, et une fonction exocrine (spermatozoïdes) non rétablie.'
      },
      exercises: [
        {
          id: 'seconde_a_svt_ch2_p1_ex1',
          type: 'mcq',
          prompt: 'Qu’appelle-t-on une glande endocrine ?',
          options: [
            'Une glande qui sécrète des sucs digestifs dans l’intestin',
            'Une glande qui déverse des hormones directement dans le sang',
            'Une glande qui produit de la sueur à la surface de la peau',
            'Un nerf reliant la moelle épinière aux muscles'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Par définition, une glande endocrine est un organe vascularisé qui sécrète des messagers chimiques (hormones) directement dans la circulation sanguine.'
        },
        {
          id: 'seconde_a_svt_ch2_p1_ex2',
          type: 'mcq',
          prompt: 'Quelle est la principale hormone sexuelle mâle sécrétée par les testicules ?',
          options: ['La progestérone', 'L’œstradiol', 'La testostérone', 'L’insuline'],
          correctAnswerIndex: 2,
          explanation:
            'Les cellules interstitielles (cellules de Leydig) du testicule sécrètent la testostérone, responsable des caractères sexuels masculins.'
        },
        {
          id: 'seconde_a_svt_ch2_p1_ex3',
          type: 'mcq',
          prompt: 'Quelles sont les deux hormones sécrétées par les ovaires chez la femelle ?',
          options: [
            'La testostérone et l’adrénaline',
            'Les œstrogènes (œstradiol) et la progestérone',
            'L’insuline et le glucagon',
            'L’hormone de croissance et la thyroxine'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Les ovaires ont une fonction endocrine assurée par la production cyclique d’œstrogènes (dont l’œstradiol) et de progestérone.'
        },
        {
          id: 'seconde_a_svt_ch2_p1_ex4',
          type: 'mcq',
          prompt: 'Pourquoi un coq castré auquel on greffe un testicule sous la peau retrouve-t-il sa crête rouge mais reste stérile ?',
          options: [
            'Parce que le testicule greffé ne reçoit pas de sang',
            'Parce que la testostérone passe dans le sang, mais les spermatozoïdes n’ont pas de conduit pour sortir',
            'Parce que le foie détruit immédiatement les spermatozoïdes',
            'Parce que le coq refuse de chanter'
          ],
          correctAnswerIndex: 1,
          explanation:
            'La fonction endocrine s’exerce par voie sanguine (la testostérone rétablit la crête), alors que la fonction exocrine nécessite les canaux déférents non reconnectés.'
        },
        {
          id: 'seconde_a_svt_ch2_p1_ex5',
          type: 'mcq',
          prompt: 'Quel effet direct provoque l’ablation des deux ovaires (ovariectomie) chez une rate adulte ?',
          options: [
            'Une augmentation de la fécondité',
            'L’arrêt du cycle utérin, l’atrophie de la muqueuse utérine et la stérilité',
            'Une accélération de la ponte des ovules',
            'Le développement de testicules'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Sans ovaires, la sécrétion d’œstrogènes et de progestérone disparaît : la muqueuse utérine cesse son développement cyclique et s’atrophie.'
        },
        {
          id: 'seconde_a_svt_ch2_p1_ex6',
          type: 'mcq',
          prompt: 'Parmi les caractères suivants, lequel constitue un caractère sexuel secondaire chez le coq ?',
          options: ['La présence de testicules', 'La crête développée et le chant', 'La présence d’un bec', 'La patte à quatre doigts'],
          correctAnswerIndex: 1,
          explanation:
            'Les testicules sont des caractères primaires. Les caractères secondaires sont les attributs morphologiques et comportementaux (crête, barbillons, chant).'
        },
        {
          id: 'seconde_a_svt_ch2_p1_ex7',
          type: 'mcq',
          prompt: 'Quelle est la fonction exocrine du testicule ?',
          options: [
            'La libération de testostérone dans les capillaires sanguins',
            'La production et l’émission des spermatozoïdes',
            'La fabrication de bile digestive',
            'Le filtrage de l’urée'
          ],
          correctAnswerIndex: 1,
          explanation:
            'La fonction exocrine correspond à la production des gamètes mâles (les spermatozoïdes) évacués vers l’extérieur par les voies génitales.'
        },
        {
          id: 'seconde_a_svt_ch2_p1_ex8',
          type: 'mcq',
          prompt: 'Quelle expérience prouve de manière irréfutable que les ovaires agissent sur l’utérus par voie chimique sanguine ?',
          options: [
            'L’observation au microscope de l’utérus',
            'L’injection d’extraits ovariens solubles à une rate ovariectomisée rétablit la muqueuse utérine',
            'La privation d’eau chez la rate',
            'La section de la moelle épinière'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Puisque de simples extraits liquides ovariens injectés dans le sang rétablissent la muqueuse utérine en l’absence de tout tissu ovarien vivant, l’action est chimique et sanguine.'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 2/2 : Mécanisme d'action hormonale, cellules cibles et récepteurs
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_svt_ch2_p2',
      order: 2,
      title: 'Mécanisme d’action de l’hormone, cellules cibles et récepteurs',
      summary:
        'Définition de l’hormone, transport sanguin, formation du complexe hormone-récepteur, spécificité d’action sur les cellules cibles et inactivation.',
      conceptExplanation: `La communication hormonale permet à des organes éloignés de coordonner leurs activités avec précision à travers tout le corps.

1. Définition scientifique d'une hormone :
Une hormone est une substance chimique informative :
- Sécrétée à très faible dose par une glande endocrine.
- Déversée et transportée par la circulation sanguine.
- Agissant à distance sur des organes ou cellules cibles pour modifier leur activité biologique.

2. Qu'est-ce qu'une cellule cible ?
Toutes les cellules du corps baignent dans le sang porteur d'hormones, mais seules les cellules cibles répondent à une hormone donnée.
Pourquoi ? Parce que la cellule cible possède sur sa membrane plasmique (ou dans son cytoplasme) des protéines réceptrices spécifiques dont la forme s'adapte parfaitement à celle de l'hormone, selon le modèle « clé-serrure ».

3. Les étapes du mécanisme d'action hormonale :
1. Stimulation de la cellule endocrine par un signal physiologique ou nerveux.
2. Sécrétion de l'hormone dans le sang environnant.
3. Transport passif de l'hormone par le flux sanguin dans tout l'organisme.
4. Fixation spécifique de l'hormone sur le récepteur membranaire de la cellule cible : formation du complexe hormone-récepteur. L'hormone ne pénètre généralement pas dans la cellule, elle active un signal intracellulaire.
5. Réponse biologique de la cellule cible : modification de son activité (ex: prolifération des cellules de l'endomètre utérin sous l'effet des œstrogènes).
6. Inactivation rapide : l'hormone est ensuite dégradée (par le foie ou les reins) afin que la stimulation reste temporaire et contrôlée.`,
      formulas: [
        {
          name: 'Complexe Hormone-Récepteur',
          formula: 'Hormone + Récepteur spécifique → Complexe [H-R] → Réponse biologique de la cellule cible',
          note: 'Spécificité moléculaire absolue indispensable à la communication hormonale.'
        }
      ],
      keyRule:
        'L’hormone circule partout dans le sang mais n’agit que sur les cellules qui possèdent ses récepteurs spécifiques. L’intensité de la réponse dépend de la concentration d’hormone dans le sang et du nombre de récepteurs exprimés.',
      workedExample: {
        title: 'Situation d’évaluation officielle : Spécificité des cellules cibles de la testostérone',
        statement:
          'À la puberté, la testostérone libérée par les testicules provoque à la fois le développement de la musculature, le changement de la voix (larynx) et la croissance de la verge, mais n’a aucun effet sur les reins. Expliquer cette sélectivité.',
        methodSteps: [
          'Étape 1 : Analyser le mode de transport : la testostérone est déversée dans le sang et irrigue tous les organes sans exception, y compris les reins.',
          'Étape 2 : Analyser la présence de récepteurs : les cellules musculaires, les cordes vocales et les organes génitaux possèdent des récepteurs spécifiques à la testostérone.',
          'Étape 3 : Analyser l’absence de réponse des reins : les cellules rénales sont dépourvues de récepteurs adaptés à la testostérone ; l’hormone ne peut donc pas s’y fixer ni déclencher de réponse.'
        ],
        conclusion:
          'Seules les cellules équipées de récepteurs complémentaires à l’hormone sont des cellules cibles capables de modifier leur activité.'
      },
      exercises: [
        {
          id: 'seconde_a_svt_ch2_p2_ex1',
          type: 'mcq',
          prompt: 'Quelle est la définition exacte d’une hormone ?',
          options: [
            'Une cellule nerveuse qui conduit des impulsions électriques rapides',
            'Une substance chimique sécrétée par une glande endocrine, véhiculée par le sang et agissant sur des cellules cibles',
            'Un déchet toxique produit par le foie et éliminé par la peau',
            'Une enzyme digestive qui découpe les lipides dans l’estomac'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Une hormone est un messager chimique libéré à dose infime dans le sang par une glande endocrine pour réguler l’activité de cellules cibles distantes.'
        },
        {
          id: 'seconde_a_svt_ch2_p2_ex2',
          type: 'mcq',
          prompt: 'Par quel vecteur l’hormone voyage-t-elle depuis sa glande émettrice jusqu’à ses organes cibles ?',
          options: ['Par les axones des neurones', 'Par les vaisseaux lymphatiques uniquement', 'Par la circulation sanguine', 'Par le canal cholédoque'],
          correctAnswerIndex: 2,
          explanation:
            'Le transport des hormones s’effectue par le sang dans l’ensemble du système circulatoire.'
        },
        {
          id: 'seconde_a_svt_ch2_p2_ex3',
          type: 'mcq',
          prompt: 'Pourquoi une hormone n’agit-elle que sur ses cellules cibles et pas sur toutes les cellules du corps ?',
          options: [
            'Parce que le sang ne va que vers les cellules cibles',
            'Parce que seules les cellules cibles possèdent des récepteurs spécifiques complémentaires de l’hormone',
            'Parce que les autres cellules dorment',
            'Parce que l’hormone est filtrée par le cœur'
          ],
          correctAnswerIndex: 1,
          explanation:
            'La spécificité hormonale dépend de la reconnaissance moléculaire entre l’hormone et son récepteur spécifique présent uniquement sur les cellules cibles.'
        },
        {
          id: 'seconde_a_svt_ch2_p2_ex4',
          type: 'mcq',
          prompt: 'Que forme la liaison entre une molécule d’hormone et son récepteur membranaire ?',
          options: ['Une plaque d’athérome', 'Un complexe hormone-récepteur', 'Une vésicule synaptique', 'Une molécule d’acide chlorhydrique'],
          correctAnswerIndex: 1,
          explanation:
            'La fixation de l’hormone sur son récepteur forme le complexe hormone-récepteur qui active la cascade biochimique intracellulaire.'
        },
        {
          id: 'seconde_a_svt_ch2_p2_ex5',
          type: 'mcq',
          prompt: 'De quoi dépend l’intensité de la réponse cellulaire à un signal hormonal ?',
          options: [
            'De la couleur des cheveux de l’individu',
            'De la concentration plasmatique de l’hormone et du nombre de récepteurs disponibles',
            'De la vitesse de l’influx nerveux le long de l’axone',
            'Du volume d’air contenu dans les poumons'
          ],
          correctAnswerIndex: 1,
          explanation:
            'L’ampleur de la réponse biologique est directement proportionnelle au taux d’hormone dans le sang et à la densité de récepteurs fonctionnels.'
        },
        {
          id: 'seconde_a_svt_ch2_p2_ex6',
          type: 'mcq',
          prompt: 'Pourquoi l’action d’une hormone dans l’organisme est-elle généralement de durée limitée ?',
          options: [
            'Parce que les hormones s’évaporent par la peau',
            'Parce qu’elles sont rapidement dégradées par des enzymes puis éliminées',
            'Parce que le cœur s’arrête de battre après chaque sécrétion',
            'Parce que les cellules cibles meurent dès qu’elles reçoivent une hormone'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Les hormones ont une demi-vie courte car elles sont inactivées enzymatiquement (dans le foie) et excrétées (par les reins) afin d’éviter un signal permanent.'
        },
        {
          id: 'seconde_a_svt_ch2_p2_ex7',
          type: 'mcq',
          prompt: 'Quelle hormone ovarienne agit principalement sur les cellules cibles de la muqueuse utérine pour stimuler son développement vasculaire ?',
          options: ['La testostérone', 'L’œstradiol (œstrogène)', 'L’adrénaline', 'Le glucagon'],
          correctAnswerIndex: 1,
          explanation:
            'L’œstradiol stimule la prolifération des cellules de l’endomètre utérin et prépare la muqueuse à une éventuelle nidation embryonnaire.'
        },
        {
          id: 'seconde_a_svt_ch2_p2_ex8',
          type: 'mcq',
          prompt: 'Quelle est la différence fondamentale entre la communication nerveuse et la communication hormonale ?',
          options: [
            'Le message nerveux est rapide et véhiculé par des neurones ; le message hormonal est plus lent et véhiculé par le sang',
            'Le message hormonal est électrique tandis que le message nerveux est liquide',
            'Le message nerveux ne concerne que les plantes',
            'La communication hormonale n’utilise aucun récepteur cellulaire'
          ],
          correctAnswerIndex: 0,
          explanation:
            'La transmission nerveuse est rapide, ciblée et discontinue le long des fibres nerveuses, alors que la transmission hormonale est diffuse, plus lente et durable via le flux sanguin.'
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 3 : LES GRANDS ENSEMBLES ENVIRONNEMENTAUX
// ============================================================================
export const svt2deALesGrandsEnsemblesEnvironnementauxChapter: CurriculumChapter = {
  id: 'seconde_a_svt_ch3_grands_ensembles_environnementaux',
  subjectId: 'svt',
  gradeLevel: 'seconde_a',
  order: 3,
  officialVolumeHours: 6,
  title: 'Leçon 3 — Les grands ensembles environnementaux',
  summary:
    'Définition et caractéristiques physiques des 4 grandes enveloppes terrestres : l’atmosphère (troposphère, stratosphère et couche d’ozone), l’hydrosphère, la lithosphère et la biosphère. Rôles écologiques et équilibre dynamique de la planète.',
  points: [
    // ------------------------------------------------------------------------
    // MINI-LEÇON 1/2 : Caractéristiques des 4 enveloppes terrestres
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_svt_ch3_p1',
      order: 1,
      title: 'Caractéristiques de l’atmosphère, l’hydrosphère, la lithosphère et la biosphère',
      summary:
        'Structure verticale de l’atmosphère (troposphère, stratosphère, mésosphère, thermosphère), répartition des eaux de l’hydrosphère et limites de la biosphère.',
      conceptExplanation: `Notre planète Terre est un système dynamique constitué de quatre grands ensembles environnementaux superposés qui interagissent en permanence.

1. L'Atmosphère : l'enveloppe gazeuse protectrice :
D'une épaisseur d'environ 500 à 600 km, elle est composée principalement de diazote (78 %), de dioxygène (21 %), d'argon (0,9 %), de dioxyde de carbone (0,04 %) et de vapeur d'eau. Elle est divisée en couches superposées :
- La troposphère (0 à 12 km d'altitude) : couche la plus dense, au contact direct du sol. C'est le siège des vents, des nuages, des pluies et de tous les phénomènes météorologiques.
- La stratosphère (12 à 50 km) : renferme la couche d'ozone (O₃) qui absorbe les rayonnements ultraviolets (UV) nocifs émis par le soleil.
- La mésosphère (50 à 80 km) : zone de chute thermique où brûlent la plupart des météorites.
- La thermosphère (80 à 500 km) et l'ionosphère (> 500 km) : couches ionisées à températures très élevées par absorption directe des rayons solaires.

2. L'Hydrosphère : l'ensemble des eaux de la planète :
Elle regroupe l'eau sous ses trois états physiques (liquide, solide, gazeux) avec une profondeur océanique moyenne de 3 800 m :
- Eau liquide des océans et mers salées : 97,2 % de l'eau totale du globe.
- Eau solide des calottes polaires et glaciers (eau douce solide) : 2,5 %.
- Eau du sol, nappes phréatiques et rivières : 0,3 %.
- Vapeur d'eau atmosphérique : 0,001 %.

3. La Lithosphère : l'enveloppe rocheuse solide :
Constituée de la croûte terrestre (continentale granitique et océanique basaltique) et du manteau supérieur rigide, d'une épaisseur d'environ 100 km. Elle repose sur l'asthénosphère ductile et est formée de roches, de minéraux et de sols.

4. La Biosphère : la mince pellicule de vie :
Elle correspond à la zone du globe où la vie végétale, animale et microbienne est possible. Elle s'étend depuis les fosses océaniques les plus profondes (-11 000 m) jusqu'aux limites supérieures de la vie en montagne (+9 000 m).`,
      formulas: [
        {
          name: 'Répartition de l’hydrosphère',
          formula: 'Océans salés : 97,2 % | Glaciers polaires : 2,5 % | Eaux souterraines et sols : 0,3 % | Atmosphère : 0,001 %',
          note: 'L’eau douce disponible liquide ne représente qu’une infime fraction de l’hydrosphère.'
        }
      ],
      keyRule:
        'La troposphère est la seule couche de l’atmosphère où se déroulent les phénomènes météorologiques (pluie, vent). La couche d’ozone se situe dans la stratosphère et protège la biosphère des rayonnements UV.',
      workedExample: {
        title: 'Situation d’évaluation officielle : Identification des ensembles terrestres',
        statement:
          'Lors d’une randonnée dans une réserve naturelle, des élèves observent un lac entouré de collines rocheuses boisées sous un ciel nuageux où volent des oiseaux. Identifier les 4 grands ensembles environnementaux présents dans ce paysage.',
        methodSteps: [
          'Étape 1 : Identifier l’air et les nuages : l’atmosphère (enveloppe gazeuse, avec la troposphère contenant les nuages).',
          'Étape 2 : Identifier le lac : l’hydrosphère (eau liquide de surface).',
          'Étape 3 : Identifier les roches et le sol des collines : la lithosphère (enveloppe solide superficielle).',
          'Étape 4 : Identifier la forêt, les oiseaux et la faune : la biosphère (êtres vivants végétaux et animaux colonisant ces milieux).'
        ],
        conclusion:
          'Ce paysage naturel illustre la coexistence et l’interpénétration parfaite des 4 grands ensembles terrestres.'
      },
      exercises: [
        {
          id: 'seconde_a_svt_ch3_p1_ex1',
          type: 'mcq',
          prompt: 'Quelle couche de l’atmosphère se situe directement au contact du sol et abrite les phénomènes météorologiques (pluie, vent) ?',
          options: ['La stratosphère', 'La thermosphère', 'La troposphère', 'La mésosphère'],
          correctAnswerIndex: 2,
          explanation:
            'La troposphère (0 à 12 km) est la couche basse de l’atmosphère où se concentrent 80 % de la masse de l’air et la quasi-totalité des nuages et intempéries.'
        },
        {
          id: 'seconde_a_svt_ch3_p1_ex2',
          type: 'mcq',
          prompt: 'Dans quelle couche de l’atmosphère se trouve la couche d’ozone (O₃) filtrant les rayons ultraviolets ?',
          options: ['Dans la troposphère', 'Dans la stratosphère', 'Dans la thermosphère', 'Dans l’ionosphère'],
          correctAnswerIndex: 1,
          explanation:
            'La couche d’ozone protectrice est localisée dans la stratosphère, entre 12 et 50 km d’altitude.'
        },
        {
          id: 'seconde_a_svt_ch3_p1_ex3',
          type: 'mcq',
          prompt: 'Quel pourcentage de la totalité de l’eau du globe terrestre l’eau liquide des océans et des mers représente-t-elle ?',
          options: ['Environ 2,5 %', 'Environ 50 %', 'Environ 97,2 %', 'Moins de 10 %'],
          correctAnswerIndex: 2,
          explanation:
            'Les océans et mers salées constituent l’écrasante majorité de l’hydrosphère, soit 97,2 % du volume d’eau terrestre.'
        },
        {
          id: 'seconde_a_svt_ch3_p1_ex4',
          type: 'mcq',
          prompt: 'Qu’est-ce que la lithosphère ?',
          options: [
            'La couche d’air riche en oxygène',
            'La partie superficielle solide du globe comprenant la croûte terrestre et le manteau supérieur',
            'L’ensemble des animaux marins',
            'Le noyau liquide en fusion de la Terre'
          ],
          correctAnswerIndex: 1,
          explanation:
            'La lithosphère est l’enveloppe rocheuse rigide d’environ 100 km d’épaisseur formée par la croûte et la partie sommitale du manteau supérieur.'
        },
        {
          id: 'seconde_a_svt_ch3_p1_ex5',
          type: 'mcq',
          prompt: 'Quelles sont les limites approximatives d’extension verticale de la biosphère ?',
          options: [
            'De 0 à 100 mètres seulement',
            'De -11 000 m dans les fosses océaniques jusqu’à +9 000 m sur les sommets montagneux',
            'Du centre de la Terre jusqu’à la Lune',
            'Exclusivement dans les déserts chauds'
          ],
          correctAnswerIndex: 1,
          explanation:
            'La biosphère s’étend depuis les abysses océaniques les plus profondes (-11 km) jusqu’à la limite supérieure de vol des oiseaux et des spores (+9 km).'
        },
        {
          id: 'seconde_a_svt_ch3_p1_ex6',
          type: 'mcq',
          prompt: 'Sous quelle forme trouve-t-on la deuxième plus grande réserve d’eau sur Terre (environ 2,5 %) ?',
          options: [
            'Sous forme d’eau gazeuse dans les nuages',
            'Sous forme d’eau solide dans les calottes glaciaires et les glaciers polaires',
            'Dans les piscines municipales',
            'Dans les fleuves tropicaux'
          ],
          correctAnswerIndex: 1,
          explanation:
            'L’eau douce des calottes polaires (Antarctique, Groenland) et des glaciers de montagne représente 2,5 % de toute l’eau terrestre.'
        },
        {
          id: 'seconde_a_svt_ch3_p1_ex7',
          type: 'mcq',
          prompt: 'Quels sont les deux gaz majoritaires composant l’atmosphère terrestre ?',
          options: [
            'Le monoxyde de carbone et le chlore',
            'Le diazote (78 %) et le dioxygène (21 %)',
            'L’hélium et l’ozone',
            'Le méthane et le dioxyde de soufre'
          ],
          correctAnswerIndex: 1,
          explanation:
            'L’air pur et sec est composé à 78 % de diazote (N₂) et à 21 % de dioxygène (O₂), soit 99 % du volume total de l’atmosphère.'
        },
        {
          id: 'seconde_a_svt_ch3_p1_ex8',
          type: 'mcq',
          prompt: 'Pourquoi qualifie-t-on la biosphère de « mince pellicule » par rapport au rayon de la Terre ?',
          options: [
            'Parce qu’elle mesure moins de 20 km d’épaisseur totale face aux 6 400 km de rayon terrestre',
            'Parce qu’elle ne contient aucune plante',
            'Parce qu’elle est faite de plastique',
            'Parce qu’elle disparaît la nuit'
          ],
          correctAnswerIndex: 0,
          explanation:
            'Avec une épaisseur d’environ 20 km comparée aux 6 400 km de rayon du globe terrestre, la biosphère n’est qu’un voile d’une extrême finesse.'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 2/2 : Rôles écologiques et interactions indispensables
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_svt_ch3_p2',
      order: 2,
      title: 'Rôles des ensembles environnementaux et interactions écologiques',
      summary:
        'Rôle vital de l’atmosphère (respiration, effet de serre), de la lithosphère (support végétal et minéraux), de l’hydrosphère (solvant de vie) et de la biosphère (photosynthèse et recyclage).',
      conceptExplanation: `Les quatre grands ensembles environnementaux ne sont pas isolés : ils fonctionnent comme un système unifié et interdépendant indispensable au maintien de la vie.

1. Rôles indispensables de chaque enveloppe :
- L'Atmosphère :
  * Fournit le dioxygène (O₂) nécessaire à la respiration des animaux et végétaux.
  * Fournit le dioxyde de carbone (CO₂) indispensable aux plantes chlorophylliennes pour la photosynthèse.
  * Protège la vie terrestre grâce à l'effet de serre naturel qui maintient une température moyenne clémente (+15 °C au lieu de -18 °C) et grâce à la couche d'ozone.
- La Lithosphère :
  * Sert de support mécanique pour l'enracinement des végétaux et les constructions humaines.
  * Fournit l'eau souterraine et les sels minéraux indispensables à la nutrition des plantes.
  * Recèle des gisements de minerais, d'énergies fossiles et constitue le substrat de formation des sols fertiles.
- L'Hydrosphère :
  * Constitue le solvant fondamental de toutes les réactions biochimiques de la matière vivante.
  * Sert de milieu de vie pour des millions d'espèces aquatiques (algues, plancton, poissons).
  * Joue le rôle de régulateur thermique mondial grâce à la forte capacité calorifique des océans et aux courants marins.
- La Biosphère :
  * Enrichit l'atmosphère en dioxygène par la photosynthèse végétale et en vapeur d'eau par l'évapotranspiration.
  * Participe à la formation et à la fertilisation des sols grâce à la décomposition de la matière organique par les micro-organismes (humus).

2. Les cycles biogéochimiques d'interaction :
Exemple fondamental : le cycle de l'eau :
L'eau de l'hydrosphère s'évapore dans l'atmosphère, retombe sous forme de précipitations sur la lithosphère où elle nourrit la biosphère avant de retourner aux cours d'eau et océans.`,
      formulas: [
        {
          name: 'Interactions environnementales globales',
          formula: 'Atmosphère ↔ Hydrosphère ↔ Lithosphère ↔ Biosphère',
          note: 'Équilibre dynamique planétaire régi par les transferts de matière et d’énergie.'
        }
      ],
      keyRule:
        'Aucun grand ensemble ne peut fonctionner de manière autonome. La détérioration de l’un (ex: pollution de l’atmosphère ou des eaux) perturbe immédiatement les autres et menace la survie de la biosphère.',
      workedExample: {
        title: 'Situation d’évaluation officielle : Interaction sol-plante-atmosphère',
        statement:
          'Un agriculteur constate que ses plants de maïs jaunissent et dépérissent en période de sécheresse prolongée sur un sol sableux dégradé. Expliquer comment les interactions entre lithosphère, hydrosphère et atmosphère expliquent cette situation.',
        methodSteps: [
          'Étape 1 : Analyser l’apport atmosphérique et hydrologique : l’absence prolongée de pluie (déficit de l’hydrosphère) et la forte chaleur atmosphérique augmentent l’évaporation.',
          'Étape 2 : Analyser le comportement de la lithosphère : le sol sableux, pauvre en argile et en humus, ne retient pas l’eau ; les racines ne peuvent plus puiser de solution minérale.',
          'Étape 3 : Analyser l’impact sur la biosphère : privés d’eau et d’azote minéral, les plants de maïs ne peuvent plus réaliser la synthèse de chlorophylle ni la photosynthèse, ce qui provoque leur jaunissement.'
        ],
        conclusion:
          'La plante (biosphère) dépend simultanément de l’eau (hydrosphère), des minéraux du sol (lithosphère) et des gaz de l’atmosphère.'
      },
      exercises: [
        {
          id: 'seconde_a_svt_ch3_p2_ex1',
          type: 'mcq',
          prompt: 'Quel gaz essentiel l’atmosphère fournit-elle aux êtres vivants pour leur respiration cellulaire ?',
          options: ['Le méthane', 'Le dioxygène (O₂)', 'Le dihydrogène', 'Le dioxyde d’azote'],
          correctAnswerIndex: 1,
          explanation:
            'Le dioxygène présent dans l’air est indispensable à la respiration aérobie de la quasi-totalité des organismes vivants.'
        },
        {
          id: 'seconde_a_svt_ch3_p2_ex2',
          type: 'mcq',
          prompt: 'Quel rôle majeur la partie superficielle de la lithosphère (le sol) joue-t-elle pour les végétaux terrestres ?',
          options: [
            'Elle leur fournit la lumière du soleil',
            'Elle leur sert de support d’ancrage et leur apporte l’eau et les sels minéraux indispensables',
            'Elle produit les nuages de pluie',
            'Elle absorbe tous les rayons ultraviolets'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Les racines des végétaux s’ancrent dans la lithosphère pour y puiser l’eau et les ions minéraux dissous essentiels à leur croissance.'
        },
        {
          id: 'seconde_a_svt_ch3_p2_ex3',
          type: 'mcq',
          prompt: 'Comment la biosphère contribue-t-elle activement à la composition de l’atmosphère ?',
          options: [
            'En absorbant tout l’azote disponible',
            'En libérant du dioxygène par la photosynthèse et de la vapeur d’eau par évapotranspiration',
            'En fabriquant des roches granitiques dans l’air',
            'En créant le champ magnétique terrestre'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Les végétaux chlorophylliens rejettent du dioxygène grâce à la photosynthèse et humidifient l’air par l’évapotranspiration foliaire.'
        },
        {
          id: 'seconde_a_svt_ch3_p2_ex4',
          type: 'mcq',
          prompt: 'Quel phénomène régulateur thermique de l’atmosphère permet de maintenir une température moyenne clémente de +15 °C à la surface de la Terre ?',
          options: ['La tectonique des plaques', 'L’effet de serre naturel', 'La marée haute', 'L’érosion éolienne'],
          correctAnswerIndex: 1,
          explanation:
            'L’effet de serre naturel causé par la vapeur d’eau et le CO₂ atmosphériques piège une partie du rayonnement infrarouge, empêchant la Terre d’être un désert glacé à -18 °C.'
        },
        {
          id: 'seconde_a_svt_ch3_p2_ex5',
          type: 'mcq',
          prompt: 'Quel ensemble environnemental sert d’habitat exclusif aux algues marines, au plancton et aux poissons ?',
          options: ['La lithosphère continentale', 'L’hydrosphère', 'La stratosphère', 'La mésosphère'],
          correctAnswerIndex: 1,
          explanation:
            'L’hydrosphère constitue le biotope aquatique fournissant l’eau, les nutriments dissous et l’espace vital pour la faune et la flore aquatiques.'
        },
        {
          id: 'seconde_a_svt_ch3_p2_ex6',
          type: 'mcq',
          prompt: 'Quel gaz indispensable à la photosynthèse des plantes vertes est capté directement dans l’atmosphère ?',
          options: ['Le dioxyde de carbone (CO₂)', 'L’hélium', 'Le néon', 'Le monoxyde d’azote'],
          correctAnswerIndex: 0,
          explanation:
            'Les plantes vertes absorbent le CO₂ atmosphérique par leurs stomates pour fabriquer de la matière organique grâce à l’énergie lumineuse.'
        },
        {
          id: 'seconde_a_svt_ch3_p2_ex7',
          type: 'mcq',
          prompt: 'Comment appelle-t-on le mouvement perpétuel de l’eau entre les océans, l’atmosphère et les continents ?',
          options: ['Le cycle du carbone', 'Le cycle de l’eau', 'La dérive des continents', 'La chaîne trophique'],
          correctAnswerIndex: 1,
          explanation:
            'Le cycle de l’eau relie directement l’hydrosphère, l’atmosphère, la lithosphère et la biosphère par évaporation, condensation et précipitations.'
        },
        {
          id: 'seconde_a_svt_ch3_p2_ex8',
          type: 'mcq',
          prompt: 'Quelle est la conséquence écologique directe de la déforestation massive sur la lithosphère et l’atmosphère ?',
          options: [
            'Une augmentation de la production de diamants',
            'Une aggravation de l’érosion des sols et une hausse du CO₂ atmosphérique',
            'Un refroidissement des océans profonds',
            'Une accélération de la vitesse de rotation de la Terre'
          ],
          correctAnswerIndex: 1,
          explanation:
            'La destruction du couvert végétal prive le sol de protection contre l’érosion pluviale et réduit la captation de dioxyde de carbone, accentuant le réchauffement.'
        }
      ]
    }
  ]
};

// ============================================================================

// ============================================================================
// LEÇON 4 : LA PRODUCTION DE LA MATIÈRE ORGANIQUE
// (Leçon 4 du programme officiel MENA Côte d'Ivoire - 4 Heures)
// ============================================================================
export const svt2deALaProductionMatiereOrganiqueChapter: CurriculumChapter = {
  "id": "seconde_a_svt_ch4_production_matiere_organique",
  "subjectId": "svt",
  "gradeLevel": "seconde_a",
  "order": 4,
  "officialVolumeHours": 4,
  "title": "Leçon 4 — La production de la matière organique",
  "summary": "Mécanisme de la photosynthèse chez les végétaux chlorophylliens (rôles indispensables de la lumière, du CO₂, de l’eau et de la chlorophylle), équation bilan globale, formation de l’amidon, transport par la sève élaborée, stockage dans les organes de réserve (tubercules de manioc, fruits) et rôle écologique de base dans les grands ensembles environnementaux.",
  "points": [
    {
      "id": "seconde_a_svt_ch4_p1",
      "order": 1,
      "title": "Conditions expérimentales et mécanisme de la photosynthèse",
      "summary": "Mise en évidence expérimentale de la production d’amidon (test à l’eau iodée après décoloration à l’alcool) et nécessité absolue de la lumière, du CO₂ et de la chlorophylle.",
      "conceptExplanation": "Pour comprendre comment les plantes fabriquent leur propre nourriture, partons d'un fait concret que tout le monde observe dans les plantations en Côte d'Ivoire : le manioc développe sous la terre de gros tubercules gorgés de fécule (amidon). Pourtant, sous terre, il n'y a ni soleil ni feuilles. D'où vient cette matière organique ? Elle a été entièrement synthétisée dans les feuilles vertes aériennes avant d'être envoyée vers les racines !\n\nCe phénomène biologique fondamental s'appelle la photosynthèse. Trois expériences historiques permettent d'en isoler les facteurs indispensables :\n\n1. Influence de la lumière :\nSi l'on place une plante verte à la lumière et une autre à l'obscurité pendant 24 heures, puis que l'on fait bouillir leurs feuilles dans l'eau puis dans l'alcool pour les décolorer (en extrayant la chlorophylle) et qu'on les plonge dans l'eau iodée (lugol) :\n- La feuille exposée à la lumière se colore en bleu-violacé intense, ce qui prouve la présence d'amidon.\n- La feuille restée à l'obscurité conserve une teinte jaune-brunâtre : aucun amidon n'a été produit. La lumière est donc une source d'énergie indispensable.\n\n2. Influence du dioxyde de carbone (CO₂) :\nSi l'on enferme deux lots de feuilles bien éclairées sous cloche : l'une recevant de l'air normal, l'autre recevant un air dont le CO₂ a été totalement absorbé par une solution de potasse et de l'eau de chaux. Après test à l'eau iodée, seule la feuille ayant reçu du CO₂ contient de l'amidon. Le carbone minéral de l'air est donc la matière première du glucose végétal.\n\n3. Rôle de la chlorophylle :\nSur une feuille panachée (centre vert contenant de la chlorophylle et pourtour blanc sans chlorophylle) exposée à la lumière et au CO₂, seule la zone verte vire au bleu-violacé avec l'eau iodée. La bordure blanche reste négative. C'est la chlorophylle, pigment vert logé dans les chloroplastes, qui capte l'énergie des photons lumineux.\n\nMécanisme biochimique et équation bilan globale :\nLa chlorophylle capte l'énergie lumineuse solaire, qui permet de scinder la molécule d'eau (H₂O) absorbée par les racines. Cette réaction libère du dioxygène (O₂) rejeté dans l'atmosphère et permet de fixer le dioxyde de carbone (CO₂) pour former une molécule organique riche en énergie : le glucose (C₆H₁₂O₆), immédiatement polymérisé en amidon.\n\nL'équation bilan officielle est :\n6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ (en présence de chlorophylle et d'énergie lumineuse).",
      "formulas": [
        {
          "name": "Équation bilan de la photosynthèse",
          "formula": "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂",
          "note": "En présence de chlorophylle et énergie lumineuse"
        },
        {
          "name": "Test de l'amidon",
          "formula": "Amidon + Eau iodée (Lugol) → Teinte bleu-violacée",
          "note": "Test colorimétrique d'assimilation chlorophyllienne"
        }
      ],
      "keyRule": "Au devoir de SVT, retiens bien les étapes de préparation de la feuille : 1. Eau bouillante (tue les cellules et fragilise les parois) ; 2. Alcool bouillant (dissout et extrait le pigment vert de chlorophylle pour décolorer la feuille) ; 3. Eau iodée (réactif coloré spécifique révélant l'amidon en bleu-nuit). Sans décoloration préalable, la couleur verte masquerait totalement le résultat !",
      "workedExample": {
        "title": "Situation d’évaluation officielle : Synthèse d’amidon et feuille masquée",
        "statement": "Un élève de Seconde A prend une feuille d'une plante verte saine ayant passé 24 heures à l'obscurité, masque une bande centrale avec du papier noir opaque, puis expose la feuille à la lumière vive pendant 6 heures. Après décoloration dans l'alcool et immersion dans l'eau iodée, décrivez et justifiez l'aspect des différentes zones de la feuille.",
        "methodSteps": [
          "Identifier les zones de la feuille : les extrémités non masquées exposées à la lumière vs la bande centrale masquée maintenue à l'obscurité par le papier noir.",
          "Appliquer le principe de la photosynthèse : les parties éclairées ont pu capter l'énergie lumineuse et synthétiser de l'amidon à partir de l'eau et du CO₂.",
          "Prédire la réaction à l'eau iodée : les extrémités éclairées prennent une coloration bleu-violacé (présence d'amidon). La bande centrale masquée reste jaune-brunâtre (absence d'amidon)."
        ],
        "conclusion": "La synthèse d'amidon nécessite impérativement la lumière. La zone cachée par le cache noir n'a pas pu réaliser la photosynthèse."
      },
      "exercises": [
        {
          "id": "seconde_a_svt_ch4_p1_ex1",
          "type": "mcq",
          "prompt": "Quel réactif chimique colore spécifiquement l'amidon en bleu-violacé ?",
          "options": [
            "L'eau iodée (ou soluté de Lugol)",
            "La liqueur de Fehling à chaud",
            "Le sulfate de cuivre anhydre",
            "Le réactif de Biuret"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'eau iodée (iode dissous dans l'iodure de potassium) est le réactif spécifique de mise en évidence de l'amidon, se colorant instantanément en bleu-violacé foncé en sa présence."
        },
        {
          "id": "seconde_a_svt_ch4_p1_ex2",
          "type": "mcq",
          "prompt": "Pourquoi fait-on obligatoirement bouillir la feuille dans l'alcool avant d'appliquer l'eau iodée ?",
          "options": [
            "Pour extraire la chlorophylle et décolorer la feuille afin de rendre le test bien visible",
            "Pour injecter artificiellement du glucose dans les nervures de la feuille",
            "Pour détruire les bactéries pathogènes présentes dans l'eau d'arrosage",
            "Pour refroidir la feuille avant de la photographier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'alcool bouillant dissout la chlorophylle verte. Une fois la feuille blanchie/décolorée, le virage au bleu-violacé de l'eau iodée peut être observé sans aucune ambiguïté."
        },
        {
          "id": "seconde_a_svt_ch4_p1_ex3",
          "type": "mcq",
          "prompt": "Que constate-t-on sur une feuille maintenue à l'obscurité pendant 24 heures et traitée à l'eau iodée ?",
          "options": [
            "Elle ne prend pas de teinte bleu-violacée (elle reste jaunâtre car elle ne contient pas d'amidon)",
            "Elle devient totalement noire et dégage une odeur de soufre",
            "Elle produit deux fois plus d'amidon qu'une feuille exposée au soleil",
            "Elle libère d'abondantes bulles de dioxygène gazeux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans lumière, la chlorophylle ne peut pas capter d'énergie. La photosynthèse est stoppée et aucun amidon n'est synthétisé : le test à l'eau iodée est négatif (jaune pâle/brunâtre)."
        },
        {
          "id": "seconde_a_svt_ch4_p1_ex4",
          "type": "mcq",
          "prompt": "Dans quel organite cellulaire végétal est localisée la chlorophylle ?",
          "options": [
            "Dans les chloroplastes",
            "Dans les mitochondries",
            "Dans les lysosomes",
            "Dans les centrioles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La chlorophylle est contenue dans les thylakoïdes des chloroplastes, organites spécifiques des cellules végétales chlorophylliennes."
        },
        {
          "id": "seconde_a_svt_ch4_p1_ex5",
          "type": "mcq",
          "prompt": "Lors de la photosynthèse, quel gaz est absorbé par les feuilles et quel gaz est rejeté dans l'air ?",
          "options": [
            "Le dioxyde de carbone (CO₂) est absorbé et le dioxygène (O₂) est rejeté",
            "Le dioxygène (O₂) est absorbé et le dioxyde de carbone (CO₂) est rejeté",
            "Le diazote (N₂) est absorbé et le méthane (CH₄) est rejeté",
            "Le monoxyde de carbone (CO) est absorbé et l'ozone (O₃) est rejeté"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La photosynthèse consomme le CO₂ atmosphérique pour fixer son carbone dans les glucides et rejette du dioxygène O₂ issu de la photolyse de l'eau."
        },
        {
          "id": "seconde_a_svt_ch4_p1_ex6",
          "type": "mcq",
          "prompt": "Quelle est l'équation bilan chimique globale de la photosynthèse ?",
          "options": [
            "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂",
            "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O",
            "2 H₂ + O₂ → 2 H₂O",
            "CO₂ + H₂O → CH₄ + 2 O₂"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En présence de lumière et de chlorophylle, 6 molécules de dioxyde de carbone réagissent avec 6 molécules d'eau pour produire 1 molécule de glucose (C₆H₁₂O₆) et 6 molécules de dioxygène (O₂)."
        },
        {
          "id": "seconde_a_svt_ch4_p1_ex7",
          "type": "mcq",
          "prompt": "Que prouve l'expérience où une plante verte est placée sous cloche avec une solution de potasse ?",
          "options": [
            "Que le dioxyde de carbone (CO₂) est indispensable à la fabrication de la matière organique",
            "Que la potasse accélère la photosynthèse de 500%",
            "Que la lumière du soleil est nocive pour les feuilles de haricot",
            "Que l'eau d'arrosage doit être totalement supprimée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La potasse a pour propriété chimique d'absorber tout le CO₂ de l'air ambiant. Privée de CO₂, la plante ne produit aucun amidon, ce qui prouve que le CO₂ est indispensable."
        },
        {
          "id": "seconde_a_svt_ch4_p1_ex8",
          "type": "mcq",
          "prompt": "Sur une feuille panachée éclairée, quelle partie se colore en bleu-violacé après test à l'eau iodée ?",
          "options": [
            "Uniquement la partie verte centrale riche en chlorophylle",
            "Uniquement la bordure blanche dépourvue de chlorophylle",
            "L'ensemble de la feuille de façon parfaitement homogène",
            "Aucune partie de la feuille ne change de couleur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seules les cellules contenant de la chlorophylle peuvent capter l'énergie lumineuse pour réaliser la photosynthèse. La zone blanche sans chlorophylle est incapable de synthétiser de l'amidon."
        }
      ]
    },
    {
      "id": "seconde_a_svt_ch4_p2",
      "order": 2,
      "title": "Circulation de la sève élaborée, organes de réserve et équilibre environnemental",
      "summary": "Différence entre sève brute et sève élaborée, accumulation dans les organes de stockage (tubercules, fruits) et rôle clé des végétaux dans les échanges avec l'atmosphère, la lithosphère et l'hydrosphère.",
      "conceptExplanation": "La matière organique fabriquée dans les feuilles vertes ne reste pas confinée dans les cellules foliaires. Elle est mise en circulation dans tout le végétal pour assurer son développement et sa survie :\n\n1. Deux types de sèves complémentaires :\n- La sève brute : solution diluée d'eau et de sels minéraux puisée dans le sol (lithosphère) par les poils absorbants des racines. Elle monte le long de la tige par les vaisseaux du xylème jusqu'aux feuilles.\n- La sève élaborée : liquide riche en glucides solubles (saccharose) et en acides aminés issus de la photosynthèse. Elle circule par les vaisseaux du phloème dans toutes les directions (vers les bourgeons pour la croissance, vers les fleurs pour la floraison, et vers les racines pour l'accumulation).\n\n2. Les organes de stockage et de réserve :\nL'excédent de matière organique synthétisée pendant la journée est transporté et mis en réserve sous forme d'amidon, de lipides ou de protéines dans des organes spécialisés :\n- Les tubercules de racines ou de tiges : manioc, igname, patate douce, pomme de terre.\n- Les graines et fruits : maïs, arachide (riche en lipides), haricot (riche en protéines), banane.\nCes réserves permettront à la plante de repousser ou de nourrir le futur germe, mais servent aussi d'aliment de base à l'être humain et aux herbivores !\n\n3. Les végétaux verts au cœur des grands ensembles environnementaux :\nLa production de matière organique végétale relie étroitement les quatre grandes sphères de la Terre :\n- L'atmosphère fournit le dioxyde de carbone (CO₂) et reçoit en retour le dioxygène (O₂) purificateur.\n- L'hydrosphère fournit l'eau indispensable à la turgescence et à la photolyse de l'eau.\n- La lithosphère (le sol) fournit le support d'ancrage et les éléments minéraux essentiels (Azote N, Phosphore P, Potassium K, Soufre S).\n- La biosphère entière s'appuie sur les plantes vertes : en tant que producteurs primaires autotrophes, elles constituent le premier maillon indispensable de toutes les chaînes alimentaires (réseau trophique).",
      "formulas": [
        {
          "name": "Sève brute (xylème)",
          "formula": "Sève brute = Eau + Sels minéraux dissous",
          "note": "Sens ascendant, des racines vers les feuilles"
        },
        {
          "name": "Sève élaborée (phloème)",
          "formula": "Sève élaborée = Eau + Matières organiques solubles",
          "note": "Sens multidirectionnel vers les organes de stockage"
        }
      ],
      "keyRule": "Pour les épreuves officielles du BAC/devoirs, ne confonds jamais sève brute et sève élaborée ! La sève brute monte des racines (eau + sels minéraux). La sève élaborée descend et irrigue toute la plante avec la matière organique fabriquée par la photosynthèse foliaire.",
      "workedExample": {
        "title": "Situation d’évaluation officielle : Origine de l’amidon dans le tubercule de manioc",
        "statement": "Expliquez pourquoi le tubercule de manioc situé sous terre ne réalise aucune photosynthèse mais contient pourtant une immense quantité d'amidon.",
        "methodSteps": [
          "Constater les conditions du sous-sol : le tubercule est dans l'obscurité et ne possède pas de chlorophylle, il ne peut donc pas réaliser lui-même la photosynthèse.",
          "Identifier la source d'amidon : les feuilles vertes aériennes synthétisent du glucose par photosynthèse en présence de lumière et de CO₂.",
          "Décrire le transfert et la mise en réserve : les glucides solubles descendent via la sève élaborée jusqu'aux racines tubérisées où ils sont stockés sous forme d'amidon dans les amyloplastes."
        ],
        "conclusion": "Le tubercule est un organe de réserve alimenté à distance par la sève élaborée issue des feuilles vertes."
      },
      "exercises": [
        {
          "id": "seconde_a_svt_ch4_p2_ex1",
          "type": "mcq",
          "prompt": "De quoi est principalement constituée la sève brute qui monte des racines vers les feuilles ?",
          "options": [
            "D'eau et de sels minéraux dissous puisés dans le sol",
            "D'huile végétale et de protéines complexes",
            "D'amidon concentré et de cire protectrice",
            "De dioxygène gazeux pur sous haute pression"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La sève brute est la solution minérale absorbée au niveau des poils absorbants racinaires, transportant l'eau et les ions minéraux vers les organes photosynthétiques."
        },
        {
          "id": "seconde_a_svt_ch4_p2_ex2",
          "type": "mcq",
          "prompt": "Quel liquide conducteur transporte les sucres organiques fabriqués par les feuilles vers tous les organes de la plante ?",
          "options": [
            "La sève élaborée",
            "La sève brute minérale",
            "L'eau de condensation foliaire",
            "Le suc vacuolaire acide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La sève élaborée contient la matière organique issue de la photosynthèse (saccharose, acides aminés) et approvisionne l'ensemble de l'organisme végétal."
        },
        {
          "id": "seconde_a_svt_ch4_p2_ex3",
          "type": "mcq",
          "prompt": "Parmi les organes végétaux suivants, lequel constitue l'organe de réserve de matière organique du manioc ?",
          "options": [
            "Le tubercule racinaire souterrain",
            "Le pétiole de la feuille",
            "L'écorce de la tige principale",
            "La cuticule cireuse des bourgeons"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chez le manioc, ce sont les racines tubérisées qui se gorgent d'amidon pour former les gros tubercules consommés par l'homme."
        },
        {
          "id": "seconde_a_svt_ch4_p2_ex4",
          "type": "mcq",
          "prompt": "Comment appelle-t-on les organismes vivants capables de fabriquer leur propre matière organique à partir de matières purement minérales ?",
          "options": [
            "Des organismes autotrophes (producteurs primaires)",
            "Des organismes hétérotrophes (consommateurs)",
            "Des décomposeurs saprophytes stricts",
            "Des parasites intracellulaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les plantes vertes sont dites autotrophes : elles produisent leur matière vivante organique sans dépendre d'autres êtres vivants, constituant la base de la biosphère."
        },
        {
          "id": "seconde_a_svt_ch4_p2_ex5",
          "type": "mcq",
          "prompt": "Quel grand ensemble environnemental fournit les sels minéraux indispensables (N, P, K, S) à la croissance de la plante ?",
          "options": [
            "La lithosphère (le sol)",
            "La stratosphère supérieure",
            "La thermosphère",
            "L'ionosphère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La lithosphère (les roches et le sol issu de leur altération) renferme les sels minéraux dissous absorbés par les racines de la plante."
        },
        {
          "id": "seconde_a_svt_ch4_p2_ex6",
          "type": "mcq",
          "prompt": "Quel rôle majeur les plantes chlorophylliennes jouent-elles vis-à-vis de l'atmosphère terrestre ?",
          "options": [
            "Elles purifient l'air en absorbant le CO₂ et en rejetant du dioxygène (O₂)",
            "Elles détruisent le dioxygène et libèrent de l'acide chlorhydrique",
            "Elles augmentent l'effet de serre de façon continue",
            "Elles arrêtent les chutes de météorites"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les végétaux chlorophylliens sont les poumons verts de la Terre : ils agissent comme des puits de carbone en fixant le CO₂ et approvisionnent l'air en O₂ respirable."
        },
        {
          "id": "seconde_a_svt_ch4_p2_ex7",
          "type": "mcq",
          "prompt": "Pourquoi les animaux et l'Homme sont-ils qualifiés d'hétérotrophes vis-à-vis de la matière organique ?",
          "options": [
            "Parce qu'ils sont incapables de produire leur matière organique et doivent consommer d'autres êtres vivants",
            "Parce qu'ils réalisent la photosynthèse avec leur peau à la plage",
            "Parce qu'ils n'ont besoin d'aucun aliment pour grandir",
            "Parce qu'ils ne consomment que des cailloux et du sable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'Homme et les animaux sont hétérotrophes : ils dépendent entièrement des matières organiques élaborées par les autotrophes végétaux (soit directement en mangeant des plantes, soit indirectement via les herbivores)."
        },
        {
          "id": "seconde_a_svt_ch4_p2_ex8",
          "type": "mcq",
          "prompt": "Que se passerait-il dans un écosystème naturel si tous les végétaux chlorophylliens venaient à disparaître ?",
          "options": [
            "La chaîne trophique s'effondrerait, entraînant la disparition progressive des herbivores puis des carnivores et de l'Homme",
            "Les animaux herbivores commenceraient spontanément à synthétiser de la chlorophylle",
            "Le taux de dioxygène de l'atmosphère augmenterait prodigieusement",
            "Le climat deviendrait subitement plus froid partout"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les végétaux chlorophylliens sont les seuls producteurs primaires à la base de toutes les chaînes alimentaires. Sans eux, aucun être hétérotrophe ne pourrait survivre."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 5 : LE CHANGEMENT CLIMATIQUE
// (Leçon 5 du programme officiel MENA Côte d'Ivoire - 4 Heures)
// ============================================================================
export const svt2deALeChangementClimatiqueChapter: CurriculumChapter = {
  "id": "seconde_a_svt_ch5_changement_climatique",
  "subjectId": "svt",
  "gradeLevel": "seconde_a",
  "order": 5,
  "officialVolumeHours": 4,
  "title": "Leçon 5 — Le changement climatique",
  "summary": "Causes humaines (énergies fossiles, déforestation, CFC, méthane agricole), distinction essentielle entre effet de serre naturel indispensable (+15°C) et effet de serre additionnel provoquant le réchauffement global, destruction de la couche d’ozone, conséquences climatiques (érosion côtière de Grand-Lahou, fonte des calottes) et stratégies de transition vers les énergies renouvelables.",
  "points": [
    {
      "id": "seconde_a_svt_ch5_p1",
      "order": 1,
      "title": "Causes anthropiques et mécanisme de l’effet de serre",
      "summary": "Origines humaines (combustibles fossiles, CFC, déforestation), distinction entre effet de serre naturel (+15°C) et effet de serre anthropique additionnel, et rôle de la couche d’ozone.",
      "conceptExplanation": "Depuis quelques décennies, la communauté scientifique et les conférences internationales (Montréal 1987, Rio 1992, Kyoto, Paris) alertent sur le dérèglement sans précédent du climat mondial. Pour comprendre ce phénomène, il faut distinguer ses moteurs humains et ses mécanismes physiques :\n\n1. Les causes humaines (anthropiques) :\nDepuis la seconde révolution industrielle (vers 1870), l'activité humaine a profondément modifié la composition de l'atmosphère :\n- Extraction et combustion massive des combustibles fossiles (pétrole, charbon, gaz naturel) pour l'industrie, les centrales électriques et les transports routiers et aériens → libération colossale de dioxyde de carbone (CO₂).\n- Destruction des forêts par le feu (déforestation) pour créer des terres agricoles et des pâturages en zone tropicale → suppression des puits de carbone et rejets de CO₂ et de suies.\n- Agriculture intensive et riziculture inondée → fermentation anaérobie dégageant d'immenses volumes de méthane (CH₄), un gaz à effet de serre 25 fois plus puissant que le CO₂.\n- Utilisation des chlorofluorocarbures (CFC) dans les bombes aérosols et fluides frigorigènes → destruction de la couche d'ozone stratosphérique (O₃) et surchauffe thermique.\n\n2. Évolution historique des mesures atmosphériques :\n- De 1860 à 1960, la teneur moyenne en CO₂ est passée de 290 à 320 ppm (parties par million), soit une hausse de 30 ppm en 100 ans.\n- De 1960 à 1985, elle a bondi de 320 à 350 ppm, soit 30 ppm d'augmentation en seulement 25 ans !\n- Parallèlement, l'anomalie de température moyenne globale est passée de −0,4°C en 1860 à +0,2°C en 2000, et continue de s'accélérer.\n\n3. Le mécanisme physique : Effet de serre naturel vs Effet de serre additionnel :\n- L'effet de serre NATUREL est indispensable à la vie ! Le Soleil envoie des rayons lumineux qui réchauffent la surface de la Terre. Le sol réémet cette énergie sous forme de rayonnements infrarouges thermiques. Les gaz à effet de serre naturels (vapeur d'eau H₂O, CO₂, ozone O₃) piègent une fraction de ces infrarouges et les renvoient vers le sol, comme les vitres d'une serre de jardinier. Grâce à lui, la Terre maintient une température moyenne de +15°C. Sans cet effet de serre naturel, la température moyenne chuterait à −20°C, transformant la planète en désert glacé inhabitable !\n- L'effet de serre ADDITIONNEL (humain) : Le surplus artificiel de CO₂, de méthane (CH₄) et de CFC injecté par l'Homme épaissit ce \"manteau\" protecteur, emprisonnant trop de chaleur et provoquant le réchauffement climatique mondial.\n- La couche d'ozone (O₃) dans la stratosphère nous protège des rayons ultraviolets (UV) mutagènes du Soleil. Les CFC détruisent les molécules d'ozone, laissant passer des UV dangereux qui accentuent l'agression radiative sur les écosystèmes.",
      "formulas": [
        {
          "name": "Équilibre thermique naturel",
          "formula": "T_moyenne = +15°C avec effet de serre naturel",
          "note": "Sans effet de serre : T = -20°C (Terre inhabitable)"
        },
        {
          "name": "Gaz à effet de serre majeurs",
          "formula": "H₂O, CO₂, CH₄, N₂O, CFC",
          "note": "Piégeage des rayonnements infrarouges thermiques réémis par la Terre"
        }
      ],
      "keyRule": "Attention au piège classique au devoir ! L'effet de serre n'est pas mauvais en soi : l'effet de serre NATUREL permet la vie sur Terre (+15°C au lieu de −20°C). C'est l'effet de serre ADDITIONNEL, causé par les excès de rejets industriels de l'Homme, qui crée la crise climatique.",
      "workedExample": {
        "title": "Situation d’évaluation officielle : Corrélation CO₂ atmosphérique et température",
        "statement": "En analysant les graphiques historiques de l'atmosphère de 1860 à 2000, décrivez la corrélation existant entre la concentration en CO₂ et la courbe des températures moyennes du globe.",
        "methodSteps": [
          "Observer l'évolution du CO₂ : de 1860 (290 ppm) à 2000 (plus de 360 ppm), la concentration augmente de manière continue et s'accélère après 1960.",
          "Observer l'évolution de la température : la température moyenne mondiale suit exactement la même pente ascendante, passant d'une anomalie de −0,4°C à plus de +0,2°C.",
          "Établir la relation causale : l'augmentation du CO₂ anthropique renforce le piégeage des rayonnements infrarouges terrestres, ce qui induit directement la hausse thermique."
        ],
        "conclusion": "Il existe une corrélation directe et étroite entre l'accumulation de gaz à effet de serre dans l'atmosphère et l'élévation de la température planétaire."
      },
      "exercises": [
        {
          "id": "seconde_a_svt_ch5_p1_ex1",
          "type": "mcq",
          "prompt": "Quelle serait la température moyenne à la surface de la Terre en l'absence totale d'effet de serre naturel ?",
          "options": [
            "Environ −20°C (la Terre serait un désert de glace inhabitable)",
            "Exactement 0°C (température de congélation)",
            "+35°C de canicule permanente",
            "+100°C d'ébullition générale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans l'effet de serre naturel qui piège les rayonnements infrarouges, la Terre rayonnerait toute sa chaleur vers l'espace : sa température moyenne serait de −20°C au lieu des +15°C actuels."
        },
        {
          "id": "seconde_a_svt_ch5_p1_ex2",
          "type": "mcq",
          "prompt": "Quelle est la température moyenne actuelle à la surface du globe grâce à l'effet de serre naturel ?",
          "options": [
            "Environ +15°C",
            "Environ −5°C",
            "Environ +45°C",
            "Environ +1°C"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'effet de serre naturel maintient la température moyenne mondiale à environ +15°C, permettant la présence d'eau liquide et l'épanouissement de la vie."
        },
        {
          "id": "seconde_a_svt_ch5_p1_ex3",
          "type": "mcq",
          "prompt": "Quel est le gaz à effet de serre naturel le plus abondant dans l'atmosphère terrestre ?",
          "options": [
            "La vapeur d'eau (H₂O)",
            "Le gaz xénon",
            "Le monoxyde de carbone",
            "L'hélium"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La vapeur d'eau (nuages, humidité) est le contributeur naturel majoritaire à l'effet de serre, bien avant le CO₂."
        },
        {
          "id": "seconde_a_svt_ch5_p1_ex4",
          "type": "mcq",
          "prompt": "Quelle activité humaine constitue la première source de rejet excessif de dioxyde de carbone (CO₂) ?",
          "options": [
            "L'extraction et la combustion des énergies fossiles (charbon, pétrole, gaz naturel)",
            "La fabrication de briques en terre crue",
            "L'usage de pirogues à rames sur les lagunes",
            "La plantation de parcs arborés dans les villes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La combustion d'énergies fossiles pour les centrales thermiques, les usines et les transports motorisés est la cause humaine numéro un des émissions de CO₂."
        },
        {
          "id": "seconde_a_svt_ch5_p1_ex5",
          "type": "mcq",
          "prompt": "Quel gaz à effet de serre très puissant est rejeté en grande quantité par la riziculture inondée et l'élevage ?",
          "options": [
            "Le méthane (CH₄)",
            "Le dioxygène (O₂)",
            "L'argon pur (Ar)",
            "Le diazote (N₂)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fermentation anaérobie dans les sols inondés des rizières et le système digestif des ruminants génèrent de vastes quantités de méthane (CH₄)."
        },
        {
          "id": "seconde_a_svt_ch5_p1_ex6",
          "type": "mcq",
          "prompt": "Quel groupe de composés chimiques industriels est responsable de la destruction de la couche d'ozone ?",
          "options": [
            "Les chlorofluorocarbures (CFC)",
            "Les carbonates de calcium",
            "Les sulfates de magnésium",
            "Les chlorures de sodium"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les CFC libèrent des atomes de chlore qui catalysent la dissociation de l'ozone stratosphérique (O₃), créant des trous laissant passer les rayons UV nocifs."
        },
        {
          "id": "seconde_a_svt_ch5_p1_ex7",
          "type": "mcq",
          "prompt": "Quel type de rayonnement émis par la Terre réchauffée est absorbé et renvoyé par les gaz à effet de serre ?",
          "options": [
            "Les rayonnements infrarouges thermiques",
            "Les rayonnements ultraviolets solaires",
            "Les rayons X médicaux",
            "Les rayons gamma cosmiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La Terre absorbe l'énergie lumineuse solaire et la réémet sous forme de rayonnement infrarouge (chaleur). Ce sont ces infrarouges qui sont piégés par les gaz à effet de serre."
        },
        {
          "id": "seconde_a_svt_ch5_p1_ex8",
          "type": "mcq",
          "prompt": "De combien la teneur en CO₂ a-t-elle augmenté entre 1960 et 1985 (en seulement 25 ans) ?",
          "options": [
            "De 30 ppm (passant brutalement de 320 à 350 ppm)",
            "De 2000 ppm",
            "Elle a diminué de moitié",
            "Elle est restée parfaitement constante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Alors qu'il avait fallu 100 ans (1860-1960) pour augmenter de 30 ppm, la même hausse de 30 ppm s'est produite en seulement 25 ans après 1960 sous l'effet de l'industrialisation."
        }
      ]
    },
    {
      "id": "seconde_a_svt_ch5_p2",
      "order": 2,
      "title": "Conséquences planétaires, cas de Grand-Lahou et solutions durables",
      "summary": "Manifestations du dérèglement (érosion côtière à Grand-Lahou, fonte des calottes, sécheresses) et mesures d’atténuation (énergies renouvelables, reboisement, protocole de Montréal).",
      "conceptExplanation": "Le dérèglement climatique ne se limite pas à une simple hausse du thermomètre : il bouleverse l'équilibre géophysique et biologique de notre planète avec des conséquences dramatiques déjà visibles :\n\n1. Les conséquences planétaires et régionales :\n- Fonte des calottes glaciaires et des glaciers de montagne : la fonte des glaces polaires (Groenland, Antarctique) combinée à la dilatation thermique des eaux marines chaudes entraîne l'élévation continue du niveau moyen des océans.\n- Submersion et érosion marine sur le littoral ivoirien : l'exemple le plus frappant en Côte d'Ivoire est la ville historique de Grand-Lahou, où l'ancienne cité coloniale et son cimetière ont été littéralement engloutis par les vagues de l'océan Atlantique qui ont fait reculer le rivage de plusieurs centaines de mètres.\n- Perturbations météorologiques extrêmes : recul de la pluviométrie, sécheresses sévères dans les régions sahéliennes et du Nord, feux de brousse destructeurs, vagues de chaleur caniculaire, cyclones et ouragans plus violents et inondations urbaines dévastatrices.\n- Crise sanitaire et agricole : baisse des rendements du café, du cacao et des céréales, pénuries d'eau potable, recrudescence du paludisme et d'autres maladies infectieuses à transmission vectorielle.\n\n2. Les stratégies de lutte et solutions durables :\nFace à cette urgence, des solutions concrètes doivent être adoptées à l'échelle mondiale, nationale et citoyenne :\n- La révolution énergétique vers les énergies renouvelables : remplacer les centrales polluantes au charbon, au fioul et au gaz par des énergies propres et inépuisables :\n  * Énergie solaire photovoltaïque et thermique (abondante en Afrique).\n  * Énergie éolienne (force du vent).\n  * Énergie hydroélectrique (barrages sur les fleuves).\n  * Biomasse durable et biogaz.\n- L'efficacité énergétique et la mobilité propre : promotion des transports en commun, développement des véhicules électriques, élimination des gaspillages d'énergie dans les bâtiments.\n- La protection des forêts et le reboisement : arrêt des feux de brousse anarchiques, création de parcs et réserves naturelles nationales (ex: Parc national de Taï, Comoé), reboisement massif d'arbres pour absorber le CO₂ de l'air.\n- Les conventions internationales : le Protocole de Montréal (1987) a prouvé son efficacité en éliminant les CFC destructeurs d'ozone. Les accords de la COP visent désormais la neutralité carbone pour préserver l'avenir des générations futures.",
      "formulas": [
        {
          "name": "Énergies renouvelables décarbonées",
          "formula": "Énergie solaire + Éolienne + Hydroélectrique",
          "note": "Zéro émission directe de gaz à effet de serre"
        },
        {
          "name": "Accords environnementaux",
          "formula": "Protocole de Montréal (1987) : Élimination des CFC",
          "note": "Protection de la couche d'ozone stratosphérique"
        }
      ],
      "keyRule": "Pour l'examen, cite toujours l'exemple concret ivoirien de Grand-Lahou pour illustrer l'élévation du niveau de la mer et l'érosion côtière. Mentionne aussi les énergies renouvelables (solaire, hydraulique) comme alternative clé aux combustibles fossiles.",
      "workedExample": {
        "title": "Situation d’évaluation officielle : Causes, conséquences et solutions du réchauffement",
        "statement": "Classez les actions suivantes relatives au changement climatique en Causes, Conséquences et Solutions : 1. Combustion du pétrole ; 2. Utilisation de l'énergie solaire ; 3. Submersion de la vieille ville de Grand-Lahou ; 4. Reboisement d'une parcelle forestière ; 5. Sécheresses et feux de brousse.",
        "methodSteps": [
          "Identifier les Causes (activités rejetant des gaz à effet de serre) : 1. Combustion du pétrole.",
          "Identifier les Conséquences (impacts subis par la Terre) : 3. Submersion de Grand-Lahou et 5. Sécheresses et feux de brousse.",
          "Identifier les Solutions (actions d'atténuation et de transition) : 2. Utilisation de l'énergie solaire et 4. Reboisement."
        ],
        "conclusion": "Causes = 1 ; Conséquences = 3, 5 ; Solutions = 2, 4."
      },
      "exercises": [
        {
          "id": "seconde_a_svt_ch5_p2_ex1",
          "type": "mcq",
          "prompt": "Quelle ville côtière de Côte d'Ivoire est l'exemple officiel d'érosion marine et d'inondation causées par la montée des eaux ?",
          "options": [
            "Grand-Lahou",
            "Korhogo",
            "Daloa",
            "Man"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ancienne ville coloniale de Grand-Lahou a subi une érosion marine dramatique, son littoral reculant sous l'assaut de la montée des eaux de l'océan Atlantique."
        },
        {
          "id": "seconde_a_svt_ch5_p2_ex2",
          "type": "mcq",
          "prompt": "Quelle est la cause physique directe de l'élévation du niveau moyen des océans du globe ?",
          "options": [
            "La fonte des calottes glaciaires continentales combinée à la dilatation thermique de l'eau réchauffée",
            "L'accumulation des bouteilles plastiques rejetées à la mer",
            "Le déplacement des grands navires porte-conteneurs",
            "L'assèchement des puits d'eau villageois"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'eau de mer se dilate quand sa température augmente, et la fonte des glaciers et calottes continentales (Groenland, Antarctique) déverse d'immenses volumes d'eau dans les océans."
        },
        {
          "id": "seconde_a_svt_ch5_p2_ex3",
          "type": "mcq",
          "prompt": "Parmi les sources d'énergie suivantes, laquelle est une énergie propre, renouvelable et sans émission directe de gaz à effet de serre ?",
          "options": [
            "L'énergie solaire photovoltaïque",
            "La centrale thermique au charbon de bois",
            "Le fioul lourd issu du raffinage pétrolier",
            "Le gaz de schiste comprimé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'énergie solaire convertit le rayonnement du soleil en électricité sans aucune combustion ni dégagement de gaz à effet de serre."
        },
        {
          "id": "seconde_a_svt_ch5_p2_ex4",
          "type": "mcq",
          "prompt": "Quel protocole international historique signé en 1987 a permis l'interdiction progressive des gaz CFC destructeurs d'ozone ?",
          "options": [
            "Le protocole de Montréal",
            "Le traité de Versailles",
            "Le congrès de Vienne",
            "L'accord de Camp David"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le Protocole de Montréal (1987) a réuni les nations pour éliminer les substances qui appauvrissent la couche d'ozone, notamment les CFC."
        },
        {
          "id": "seconde_a_svt_ch5_p2_ex5",
          "type": "mcq",
          "prompt": "Pourquoi le reboisement constitue-t-il une solution naturelle capitale contre le réchauffement climatique ?",
          "options": [
            "Parce que les arbres absorbent le CO₂ atmosphérique par photosynthèse et le stockent durablement sous forme de bois",
            "Parce que les feuilles d'arbres attirent les météores et arrêtent le vent",
            "Parce que les forêts refroidissent la Terre en supprimant le soleil",
            "Parce que les arbres absorbent le sel de mer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les forêts sont des puits de carbone vitaux : en grandissant, les arbres séquestrent des milliards de tonnes de carbone minéral dans leur tronc et leurs racines."
        },
        {
          "id": "seconde_a_svt_ch5_p2_ex6",
          "type": "mcq",
          "prompt": "Quelle perturbation climatique majeure frappe de plus en plus les zones rurales d'Afrique de l'Ouest ?",
          "options": [
            "La baisse de la pluviométrie, les sécheresses prolongées et la prolifération des feux de brousse",
            "L'apparition de tempêtes de neige sur la lagune Ébrié",
            "La chute brutale de la température nocturne à −30°C",
            "L'arrêt complet des marées océaniques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le dérèglement climatique se traduit en Afrique de l'Ouest par des saisons des pluies plus courtes et irrégulières, des sécheresses et un risque accru de feux de brousse."
        },
        {
          "id": "seconde_a_svt_ch5_p2_ex7",
          "type": "mcq",
          "prompt": "Pourquoi l'utilisation des transports en commun contribue-t-elle à freiner le changement climatique ?",
          "options": [
            "Parce qu'un bus ou train transporte des dizaines de personnes en consommant beaucoup moins de carburant que des dizaines de voitures individuelles",
            "Parce qu'un autobus ne roule qu'avec de l'eau de pluie",
            "Parce que les transports en commun fabriquent de l'ozone dans la ville",
            "Parce qu'ils empêchent les nuages d'inondation d'éclater"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Transporter collectivement les voyageurs permet de réduire massivement le parc de véhicules particuliers et les rejets de CO₂ liés au trafic routier."
        },
        {
          "id": "seconde_a_svt_ch5_p2_ex8",
          "type": "mcq",
          "prompt": "Quel comportement éco-responsable individuel permet à chaque élève de contribuer à la lutte pour le climat ?",
          "options": [
            "Éviter le gaspillage d'électricité, planter des arbres et proscrire les feux de brousse et le brûlage de déchets plastiques",
            "Brûler des pneus usagés dans la rue après les cours",
            "Laisser les appareils allumés 24h sur 24 pour user les batteries",
            "Couper les arbres du quartier pour faire du feu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque geste compte : la sobriété énergétique, la protection des arbres et l'abandon du brûlage à l'air libre protègent directement la qualité de l'atmosphère."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 6 : LA STRUCTURE D’UNE CELLULE ANIMALE
// (Leçon 6 du programme officiel MENA Côte d'Ivoire - 4 Heures)
// ============================================================================
export const svt2deALaStructureCelluleAnimaleChapter: CurriculumChapter = {
  "id": "seconde_a_svt_ch6_structure_cellule_animale",
  "subjectId": "svt",
  "gradeLevel": "seconde_a",
  "order": 6,
  "officialVolumeHours": 4,
  "title": "Leçon 6 — La structure d’une cellule animale",
  "summary": "Ultrastructure de la cellule animale observée au microscope électronique (membrane plasmique, hyaloplasme/cytosol, noyau avec chromatine et nucléole, réticulum endoplasmique, appareil de Golgi, mitochondries, centrosome à centrioles, absence de paroi pectocellulosique), équipement chromosomique humain, garniture diploïde (2n = 46), autosomes vs gonosomes (XX/XY), cellules haploïdes (n = 23) et détermination du sexe par le spermatozoïde.",
  "points": [
    {
      "id": "seconde_a_svt_ch6_p1",
      "order": 1,
      "title": "Ultrastructure de la cellule animale et fonctions des organites",
      "summary": "Description détaillée des constituants cellulaires au microscope électronique : membrane plasmique, cytosol, noyau, ribosomes, ergastoplasme, dictyosomes, mitochondries et centrosome.",
      "conceptExplanation": "Pour comprendre comment le corps humain et tous les animaux fonctionnent, il faut descendre à l'échelle de l'unité fondamentale de la vie : la cellule.\nAu microscope optique ordinaire, une cellule animale apparaît comme un simple sac transparent entouré d'une membrane fine, contenant du cytoplasme et une boule centrale appelée le noyau.\nMais lorsqu'on l'observe au microscope électronique (qui grossit plusieurs centaines de milliers de fois), on découvre une ultrastructure d'une immense précision, organisée en compartiments spécialisés appelés des organites :\n\n1. La membrane plasmique :\nC'est la frontière souple qui délimite la cellule animale et contrôle sélectivement les échanges d'eau, d'ions et de nutriments avec le liquide extérieur.\nATTENTION PIÈGE D'EXAMEN : La cellule animale ne possède JAMAIS de membrane pectocellulosique ni de paroi rigide (la paroi de cellulose est l'apanage exclusif des cellules végétales).\n\n2. Le cytoplasme et le cytosol (hyaloplasme) :\nLe cytoplasme est constitué d'une fraction liquide limpide appelée le cytosol (ou hyaloplasme) dans laquelle baignent tous les organites et molécules dissoutes.\n\n3. Le noyau (centre de commandement génétique) :\nEntouré d'une double membrane nucléaire percée de pores nucléaires qui permettent les échanges avec le cytoplasme. Il renferme :\n- Le nucléole (fabrique les ribosomes).\n- La chromatine (filaments fins d'ADN associés à des protéines histones, qui se condenseront en chromosomes visibles lors de la division cellulaire).\n\n4. Les organites de synthèse, de tri et d'énergie :\n- Les ribosomes : minuscules granules fabriquant les protéines à partir des instructions de l'ADN.\n- Le réticulum endoplasmique (RE) : réseau de canaux membranaires. On distingue le RE lisse (synthèse des lipides) et le RE granuleux (ou ergastoplasme, tapissé de ribosomes et assurant la synthèse des protéines).\n- L'appareil de Golgi (dictyosomes) : empilement de saccules aplatis émettant de petites vésicules à leurs extrémités. Il assure la maturation, le tri et l'expédition des molécules sécrétées.\n- Les mitochondries : véritables centrales énergétiques de la cellule, entourées d'une membrane plissée en crêtes, réalisant la respiration cellulaire et fabriquant l'ATP (énergie vitale).\n- Le centrosome (centrioles) : paire de petits cylindres perpendiculaires d'où partent les microtubules. Il participe activement à la division cellulaire en formant les asters.\n- Les lysosomes et peroxysomes : vésicules remplies d'enzymes digestives assurant le recyclage et la destruction des déchets cellulaires.\n- Les vacuoles : petites vésicules chez l'animal (contrairement à l'immense vacuole unique de la cellule végétale).",
      "formulas": [
        {
          "name": "Organisation fondamentale animale",
          "formula": "Cellule = Membrane plasmique + Cytosol + Noyau + Organites",
          "note": "Absence absolue de paroi pectocellulosique"
        },
        {
          "name": "Organite énergétique central",
          "formula": "Mitochondrie → Respiration cellulaire → Production d'ATP",
          "note": "Centrale énergétique pour les besoins métaboliques"
        }
      ],
      "keyRule": "Pour les questions d'annotation au devoir : ne confonds pas cytosol et cytoplasme ! Le cytoplasme comprend le cytosol (le liquide) PLUS tous les organites qui y baignent. Retiens aussi que l'ergastoplasme est simplement le nom officiel du réticulum endoplasmique granuleux portant des ribosomes.",
      "workedExample": {
        "title": "Situation d’évaluation officielle : Identification comparée d’une cellule animale",
        "statement": "Un élève observe deux cellules A et B au microscope. La cellule A possède des mitochondries, un noyau, une membrane plasmique souple et des centrioles. La cellule B possède un noyau, des chloroplastes verts et une paroi pectocellulosique épaisse. Identifiez la cellule animale et justifiez votre choix.",
        "methodSteps": [
          "Analyser les caractéristiques de la cellule A : membrane plasmique souple, centrioles (centrosome) et absence de chloroplastes ni de paroi rigide.",
          "Analyser les caractéristiques de la cellule B : présence d'une paroi pectocellulosique externe et de chloroplastes (caractéristiques exclusives des cellules végétales).",
          "Conclure : la cellule A est indiscutablement la cellule animale."
        ],
        "conclusion": "La cellule A est une cellule animale car elle possède un centrosome et est délimitée uniquement par une membrane plasmique sans paroi cellulosique."
      },
      "exercises": [
        {
          "id": "seconde_a_svt_ch6_p1_ex1",
          "type": "mcq",
          "prompt": "Quel constituant délimite directement le milieu intérieur d'une cellule animale ?",
          "options": [
            "La membrane plasmique souple",
            "La membrane pectocellulosique rigide",
            "Une coquille de calcaire imperméable",
            "Une enveloppe en cire végétale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La cellule animale est délimitée par une membrane plasmique fluide et souple, sans aucune paroi rigide pectocellulosique."
        },
        {
          "id": "seconde_a_svt_ch6_p1_ex2",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la fraction liquide du cytoplasme dans laquelle baignent les différents organites cellulaires ?",
          "options": [
            "Le cytosol (ou hyaloplasme)",
            "Le suc vacuolaire acide",
            "La sève élaborée",
            "La lymphe sanguine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cytosol (ou hyaloplasme) est la matrice liquide fondamentale intracellulaire contenant de l'eau, des ions, du glucose et des enzymes."
        },
        {
          "id": "seconde_a_svt_ch6_p1_ex3",
          "type": "mcq",
          "prompt": "Quel organite cellulaire est la véritable centrale énergétique de la cellule fabriquant l'ATP ?",
          "options": [
            "La mitochondrie",
            "Le nucléole",
            "Le lysosome",
            "Le centriole"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les mitochondries sont le siège de la respiration cellulaire aérobie, convertissant les molécules nutritives en énergie biochimique utilisable (ATP)."
        },
        {
          "id": "seconde_a_svt_ch6_p1_ex4",
          "type": "mcq",
          "prompt": "Comment appelle-t-on le réticulum endoplasmique tapissé de ribosomes à sa surface assurant la synthèse des protéines ?",
          "options": [
            "L'ergastoplasme (ou réticulum endoplasmique granuleux)",
            "Le réticulum endoplasmique lisse",
            "L'appareil de Golgi externe",
            "Le centrosome nucléaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ergastoplasme (ou REG) doit son aspect granuleux aux ribosomes ancrés sur ses membranes, spécialisés dans la biosynthèse des protéines destinées à l'exportation."
        },
        {
          "id": "seconde_a_svt_ch6_p1_ex5",
          "type": "mcq",
          "prompt": "Quel organite constitué d'un empilement de dictyosomes émet des vésicules à ses extrémités pour expédier les molécules cellulaires ?",
          "options": [
            "L'appareil de Golgi",
            "Le ribosome libre",
            "La mitochondrie interne",
            "Le filament de kératine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'appareil de Golgi reçoit les protéines de l'ergastoplasme, les modifie chimiquement et les emballe dans des vésicules de sécrétion émises par ses extrémités."
        },
        {
          "id": "seconde_a_svt_ch6_p1_ex6",
          "type": "mcq",
          "prompt": "Quel organite spécifique à la cellule animale est formé de deux centrioles et forme les asters pendant la division cellulaire ?",
          "options": [
            "Le centrosome",
            "Le chloroplaste",
            "Le peroxysome",
            "Le nucléole"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le centrosome (composé de deux centrioles perpendiculaires) est le centre organisateur des microtubules chez les cellules animales, formant les asters du fuseau de division."
        },
        {
          "id": "seconde_a_svt_ch6_p1_ex7",
          "type": "mcq",
          "prompt": "Sous quelle forme se présente le matériel génétique dans le noyau d'une cellule animale en dehors des périodes de division ?",
          "options": [
            "Sous forme de chromatine filamenteuse diffuse",
            "Sous forme de cristaux minéraux d'amidon",
            "Sous forme de billes de graisse lipidique",
            "Sous forme de gaz comprimé dans le nucléole"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans un noyau interphasique, l'ADN est décondensé sous forme d'un réseau filamenteux complexe appelé la chromatine, qui se condensera en chromosomes lors de la mitose."
        },
        {
          "id": "seconde_a_svt_ch6_p1_ex8",
          "type": "mcq",
          "prompt": "Laquelle de ces structures est formellement ABSENTE d'une cellule animale saine ?",
          "options": [
            "La membrane pectocellulosique rigide",
            "La mitochondrie",
            "La membrane plasmique",
            "L'appareil de Golgi"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La membrane pectocellulosique est une paroi rigide végétale. Elle n'existe absolument pas chez les animaux."
        }
      ]
    },
    {
      "id": "seconde_a_svt_ch6_p2",
      "order": 2,
      "title": "Équipement chromosomique, caryotype humain et détermination génétique du sexe",
      "summary": "Notion de caryotype, garniture chromosomique diploïde (2n = 46) des cellules somatiques (22 paires d’autosomes + gonosomes XX ou XY), cellules reproductrices haploïdes (n = 23) et rôle du spermatozoïde.",
      "conceptExplanation": "Chaque espèce vivante possède dans le noyau de ses cellules un nombre fixe et caractéristique de chromosomes qui portent l'ensemble des gènes héréditaires : c'est sa garniture chromosomique.\n\n1. Qu'est-ce qu'un caryotype ?\nLe caryotype est la représentation photographique ordonnée de l'ensemble des chromosomes du noyau d'une cellule, bloqués en métaphase, découpés et disposés par paires homologues et par ordre de taille décroissante (de la paire 1 la plus grande à la paire 22 la plus petite).\n\n2. Les cellules somatiques : un équipement diploïde (2n = 46) :\nToutes les cellules du corps humain (cellules de la peau, du foie, des muscles, du sang, des os), appelées cellules somatiques, possèdent 46 chromosomes organisés en 23 paires.\nOn dit qu'elles sont diploïdes, ce que l'on note mathématiquement : 2n = 46.\nDans chaque paire :\n- Un chromosome provient du père (d'origine paternelle).\n- L'autre chromosome homologue provient de la mère (d'origine maternelle).\n\n3. Autosomes vs Gonosomes (chromosomes sexuels) :\n- Les 22 premières paires sont rigoureusement identiques chez l'homme et la femme : on les appelle les autosomes (chromosomes non sexuels).\n- La 23ème paire est différente selon le sexe : ce sont les gonosomes ou chromosomes sexuels :\n  * Chez la femme : deux chromosomes identiques notés XX (formule chromosomique : 44 autosomes + XX, soit 46, XX).\n  * Chez l'homme : deux chromosomes dissemblables, un grand noté X et un petit noté Y (formule chromosomique : 44 autosomes + XY, soit 46, XY).\n\n4. Les cellules reproductrices (gamètes) : un équipement haploïde (n = 23) :\nLes cellules sexuelles de reproduction (le spermatozoïde chez l'homme, l'ovule chez la femme) ne contiennent que la moitié des chromosomes : un seul chromosome de chaque paire, soit 23 chromosomes.\nOn dit que les gamètes sont des cellules haploïdes, notées n = 23.\n- L'ovule porte toujours 22 autosomes + un chromosome sexuel X.\n- Le spermatozoïde porte 22 autosomes + soit un chromosome X (50% des cas), soit un chromosome Y (50% des cas).\nConséquence capitale : C'est le spermatozoïde apporté par le père qui détermine à 100% le sexe biologique de l'enfant lors de la fécondation !",
      "formulas": [
        {
          "name": "Garniture diploïde somatique",
          "formula": "2n = 46 chromosomes (23 paires d'homologues)",
          "note": "44 autosomes + gonosomes sexuels (XX ou XY)"
        },
        {
          "name": "Garniture haploïde des gamètes",
          "formula": "n = 23 chromosomes (cellules reproductrices)",
          "note": "Ovule : 22+X | Spermatozoïde : 22+X ou 22+Y"
        }
      ],
      "keyRule": "Au devoir de SVT, repère tout de suite la 23ème paire sur le caryotype : si les deux chromosomes sont de même taille, c'est une femme (XX). Si l'un est grand et l'autre minuscule en forme de crochet, c'est un homme (XY). Et si le caryotype n'a que 23 chromosomes isolés sans paires, c'est un gamète (cellule sexuelle haploïde) !",
      "workedExample": {
        "title": "Situation d’évaluation officielle : Analyse chromosomique et détermination du sexe",
        "statement": "En observant le caryotype d'une cellule humaine prélevée lors d'une biopsie, on dénombre 23 paires de chromosomes. La 23ème paire montre un chromosome de taille moyenne et un tout petit chromosome noté Y. Déterminez la garniture chromosomique, le sexe de l'individu et le type de cellule.",
        "methodSteps": [
          "Compter les chromosomes : 23 paires = 46 chromosomes. La cellule possède 2 exemplaires de chaque chromosome, c'est donc une cellule diploïde (2n = 46).",
          "Identifier le type de cellule : puisqu'elle est diploïde à 46 chromosomes, c'est une cellule somatique ordinaire (et non un gamète).",
          "Déterminer le sexe génétique : la 23ème paire est hétéromorphe XY (présence du chromosome Y). L'individu est donc de sexe masculin."
        ],
        "conclusion": "Il s'agit d'une cellule somatique diploïde (2n = 46) appartenant à un individu de sexe masculin (formule : 44 autosomes + XY)."
      },
      "exercises": [
        {
          "id": "seconde_a_svt_ch6_p2_ex1",
          "type": "mcq",
          "prompt": "Combien de chromosomes contient le noyau d'une cellule somatique humaine normale ?",
          "options": [
            "46 chromosomes disposés en 23 paires (2n = 46)",
            "23 chromosomes isolés (n = 23)",
            "92 chromosomes disposés en 46 paires",
            "48 chromosomes comme le chimpanzé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toute cellule somatique humaine normale est diploïde et renferme 46 chromosomes organisés en 23 paires d'homologues."
        },
        {
          "id": "seconde_a_svt_ch6_p2_ex2",
          "type": "mcq",
          "prompt": "Comment qualifie-t-on une cellule contenant des paires de chromosomes homologues (notée 2n) ?",
          "options": [
            "Une cellule diploïde",
            "Une cellule haploïde",
            "Une cellule asexuée",
            "Une cellule chimérique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une cellule diploïde (2n) possède deux jeux complets de chromosomes homologues, l'un issu du père et l'autre de la mère."
        },
        {
          "id": "seconde_a_svt_ch6_p2_ex3",
          "type": "mcq",
          "prompt": "Comment appelle-t-on les 22 premières paires de chromosomes non sexuels identiques chez l'homme et la femme ?",
          "options": [
            "Les autosomes",
            "Les gonosomes",
            "Les ribosomes",
            "Les histones"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les autosomes sont tous les chromosomes somatiques ordinaires ne déterminant pas directement le sexe chromosomique."
        },
        {
          "id": "seconde_a_svt_ch6_p2_ex4",
          "type": "mcq",
          "prompt": "Quels sont les chromosomes sexuels (gonosomes) caractéristiques du caryotype d'une femme normale ?",
          "options": [
            "Deux chromosomes X (notés XX)",
            "Un chromosome X et un chromosome Y (XY)",
            "Deux chromosomes Y (YY)",
            "Trois chromosomes X (XXX)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sexe féminin est caractérisé par une paire de gonosomes homologues identiques notée XX (formule 44 + XX)."
        },
        {
          "id": "seconde_a_svt_ch6_p2_ex5",
          "type": "mcq",
          "prompt": "Quels sont les chromosomes sexuels (gonosomes) caractéristiques du caryotype d'un homme normal ?",
          "options": [
            "Un chromosome X et un chromosome Y (notés XY)",
            "Deux chromosomes X (XX)",
            "Deux chromosomes Y (YY)",
            "Un chromosome X sans aucun autre gonosome (XO)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sexe masculin est caractérisé par une paire de gonosomes dissemblables notée XY (formule 44 + XY)."
        },
        {
          "id": "seconde_a_svt_ch6_p2_ex6",
          "type": "mcq",
          "prompt": "Combien de chromosomes contient un gamète humain (spermatozoïde ou ovule) ?",
          "options": [
            "23 chromosomes isolés (n = 23, cellule haploïde)",
            "46 chromosomes en 23 paires",
            "12 chromosomes seulement",
            "2 chromosomes sexuels ensemble"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les cellules reproductrices (gamètes) sont haploïdes (n = 23). Lors de la fécondation, l'union des deux gamètes rétablit le stock diploïde à 46 chromosomes (23 + 23 = 46)."
        },
        {
          "id": "seconde_a_svt_ch6_p2_ex7",
          "type": "mcq",
          "prompt": "Quel gamète parental détermine le sexe génétique de l'enfant lors de la fécondation ?",
          "options": [
            "Le spermatozoïde du père (qui peut apporter soit le chromosome X, soit le chromosome Y)",
            "L'ovule de la mère (qui apporte obligatoirement le chromosome Y)",
            "Les cellules de la peau du nouveau-né",
            "Le placenta utérin"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ovule apporte toujours un chromosome X. C'est le spermatozoïde fécondant qui détermine le sexe : si c'est un spermatozoïde X, le bébé sera une fille (XX) ; si c'est un spermatozoïde Y, ce sera un garçon (XY)."
        },
        {
          "id": "seconde_a_svt_ch6_p2_ex8",
          "type": "mcq",
          "prompt": "Qu'est-ce que la garniture chromosomique d'une cellule eucaryote ?",
          "options": [
            "L'ensemble des chromosomes présents dans le noyau d'une cellule",
            "Le nombre de molécules de glucose dans la vacuole",
            "La quantité d'eau stockée dans le cytoplasme",
            "Le nombre de battements des cils cellulaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La garniture chromosomique désigne la composition et le nombre total de chromosomes constituant le génome du noyau de la cellule."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 7 : LA REPRODUCTION CONFORME OU MITOSE
// (Leçon 7 du programme officiel MENA Côte d'Ivoire - 6 Heures)
// ============================================================================
export const svt2deALaReproductionConformeMitoseChapter: CurriculumChapter = {
  "id": "seconde_a_svt_ch7_reproduction_conforme_mitose",
  "subjectId": "svt",
  "gradeLevel": "seconde_a",
  "order": 7,
  "officialVolumeHours": 6,
  "title": "Leçon 7 — La reproduction conforme ou mitose",
  "summary": "Mécanisme complet de la mitose en 4 phases chronologiques (Prophase avec condensation et asters, Métaphase avec plaque équatoriale, Anaphase avec ascension polaire des chromatides, Télophase et cytodiérèse par étranglement chez l’animal vs nouvelle paroi chez le végétal), conservation intégrale du caryotype (2n), et rôles biologiques capitaux (cicatrisation des plaies, renouvellement tissulaire, croissance continue de l’organisme de la cellule-œuf à 10¹⁷ cellules, et risque tumoral en cas de dérèglement).",
  "points": [
    {
      "id": "seconde_a_svt_ch7_p1",
      "order": 1,
      "title": "Les quatre phases chronologiques de la mitose et la cytodiérèse",
      "summary": "Déroulement continu de la division cellulaire équationnelle : Prophase, Métaphase, Anaphase, Télophase et séparation cytoplasmique chez les cellules animales et végétales.",
      "conceptExplanation": "Pour comprendre comment un corps grandit ou comment une blessure cutanée se referme, il faut observer la multiplication des cellules.\nLa mitose (ou reproduction conforme) est le mode de division cellulaire qui permet à une cellule mère diploïde (2n) de donner naissance à deux cellules filles génétiquement identiques entre elles et rigoureusement identiques à la cellule mère, en conservant le même nombre exact de chromosomes.\n\nBien qu'il s'agisse d'un phénomène biologique continu (qui dure entre 1 et 4 heures), les biologistes le découpent en quatre phases caractéristiques immuables :\n\n1. La Prophase (première phase de préparation) :\n- Le noyau cellulaire gonfle. La membrane nucléaire et les nucléoles se désagrègent progressivement.\n- La chromatine diffuse s'enroule et se condense fortement (spiralisation) : les chromosomes s'individualisent et deviennent nettement visibles. Chaque chromosome est alors constitué de deux chromatides sœurs identiques reliées entre elles au niveau du centromère.\n- Le centrosome se dédouble en deux centrosomes fils qui migrent vers les deux pôles opposés de la cellule, formant les asters (chez la cellule animale) reliés par les fibres du fuseau de division achromatique.\n\n2. La Métaphase (phase courte et spectaculaire) :\n- Les chromosomes atteignent leur condensation maximale.\n- Grâce aux microtubules du fuseau, tous les centromères des chromosomes viennent se positionner au centre de la cellule, sur le plan équatorial du fuseau achromatique.\n- Cette disposition géométrique parfaite forme une figure appelée la plaque équatoriale. C'est le moment idéal pour photographier et établir le caryotype d'une cellule !\n\n3. L'Anaphase (phase de séparation très rapide) :\n- Chaque centromère se fissure et se divise longitudinalement en deux.\n- Les deux chromatides sœurs de chaque chromosome se séparent net et deviennent des chromosomes fils indépendants (chacun à une seule chromatide).\n- Par raccourcissement des fibres du fuseau, les deux lots strictement identiques de chromosomes sont tirés et migrent en sens opposé vers chacun des deux pôles cellulaires : c'est l'ascension polaire.\n\n4. La Télophase et la cytodiérèse (phase de conclusion) :\n- Arrivés aux pôles, les chromosomes se déspiralisent et reprennent l'aspect filamenteux diffus de chromatine.\n- Le fuseau achromatique disparaît. Une nouvelle membrane nucléaire se reconstitue autour de chaque lot de chromosomes ; les nucléoles réapparaissent : les deux noyaux fils sont formés.\n- La cytodiérèse (séparation du cytoplasme) :\n  * Chez la cellule animale : un simple sillon d'étranglement équatorial se creuse dans la membrane plasmique de l'extérieur vers l'intérieur, coupant la cellule en deux.\n  * Chez la cellule végétale : les parois rigides empêchent tout étranglement ; une nouvelle paroi squelettique pectocellulosique s'édifie du centre vers la périphérie.",
      "formulas": [
        {
          "name": "Chronologie des 4 phases",
          "formula": "Prophase → Métaphase → Anaphase → Télophase",
          "note": "Mnémonique officiel : Pour Mon Ami Théodore"
        },
        {
          "name": "Bilan chromosomique mitotique",
          "formula": "1 cellule mère (2n) → 2 cellules filles (2n) identiques",
          "note": "Reproduction conforme conservant intégralement le caryotype"
        }
      ],
      "keyRule": "Pour retenir l'ordre des phases de la mitose sans jamais hésiter, utilise le moyen mnémotechnique classique : « Pour Mon Ami Théodore » → P (Prophase), M (Métaphase), A (Anaphase), T (Télophase). Retiens bien : les chromosomes sont dédoublés à deux chromatides en prophase et métaphase, mais deviennent simples à une chromatide dès l'anaphase !",
      "workedExample": {
        "title": "Situation d’évaluation officielle : Reconnaissance des phases de la mitose",
        "statement": "Lors d'un TP au microscope sur une racine d'ail, des élèves observent trois cellules en division : la cellule 1 montre des chromosomes regroupés au centre de la cellule en plan médian ; la cellule 2 montre deux lots de chromosomes en forme de V s'écartant vers les deux pôles opposés ; la cellule 3 montre une membrane nucléaire en cours de reconstitution avec deux nouveaux noyaux. Nommez la phase de chacune de ces trois cellules.",
        "methodSteps": [
          "Analyser la cellule 1 : alignement au centre sur le plan équatorial = Métaphase (plaque équatoriale).",
          "Analyser la cellule 2 : séparation des chromatides et migration vers les pôles opposés = Anaphase (ascension polaire).",
          "Analyser la cellule 3 : reconstitution de la membrane nucléaire et deux noyaux distincts = Télophase."
        ],
        "conclusion": "Cellule 1 = Métaphase ; Cellule 2 = Anaphase ; Cellule 3 = Télophase."
      },
      "exercises": [
        {
          "id": "seconde_a_svt_ch7_p1_ex1",
          "type": "mcq",
          "prompt": "Quel est l'ordre chronologique exact et rigoureux des 4 phases successives de la mitose ?",
          "options": [
            "Prophase → Métaphase → Anaphase → Télophase",
            "Métaphase → Prophase → Télophase → Anaphase",
            "Anaphase → Prophase → Télophase → Métaphase",
            "Télophase → Anaphase → Métaphase → Prophase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le déroulement immuable de la mitose est : Prophase (condensation), Métaphase (plaque équatoriale), Anaphase (séparation des chromatides) et Télophase (reconstitution des noyaux)."
        },
        {
          "id": "seconde_a_svt_ch7_p1_ex2",
          "type": "mcq",
          "prompt": "À quelle phase de la mitose les chromosomes condensés s'alignent-ils au centre pour former la plaque équatoriale ?",
          "options": [
            "À la métaphase",
            "À la prophase",
            "À l'anaphase",
            "À la télophase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est durant la métaphase que les chromosomes s'alignent par leurs centromères dans le plan équatorial du fuseau achromatique."
        },
        {
          "id": "seconde_a_svt_ch7_p1_ex3",
          "type": "mcq",
          "prompt": "Quel événement mécanique fondamental caractérise l'anaphase de la mitose ?",
          "options": [
            "La division des centromères et la migration des chromatides sœurs vers les pôles opposés (ascension polaire)",
            "La disparition de la membrane plasmique de la cellule",
            "La fusion de deux cellules filles en une seule",
            "La fabrication de vacuoles riches en chlorophylle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'anaphase se caractérise par la rupture du centromère de chaque chromosome : les chromatides sœurs migrent en sens inverse vers chaque pôle grâce aux fibres du fuseau."
        },
        {
          "id": "seconde_a_svt_ch7_p1_ex4",
          "type": "mcq",
          "prompt": "Durant quelle phase la chromatine se condense-t-elle en chromosomes visibles et la membrane nucléaire disparaît-elle ?",
          "options": [
            "La prophase",
            "L'anaphase",
            "La télophase",
            "La cytodiérèse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La prophase est la première phase de la mitose, marquée par la spiralisation de l'ADN en chromosomes individualisés et la disparition de l'enveloppe du noyau."
        },
        {
          "id": "seconde_a_svt_ch7_p1_ex5",
          "type": "mcq",
          "prompt": "Comment s'effectue la division du cytoplasme (cytodiérèse) chez la cellule animale lors de la télophase ?",
          "options": [
            "Par un simple étranglement du cytoplasme (sillon de division)",
            "Par la construction d'une épaisse paroi en bois",
            "Par explosion suivie de reconstitution magique",
            "Par évaporation complète de l'eau cellulaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La membrane souple de la cellule animale se resserre au milieu comme un fil qu'on tire, séparant les deux cellules par un sillon d'étranglement."
        },
        {
          "id": "seconde_a_svt_ch7_p1_ex6",
          "type": "mcq",
          "prompt": "Comment s'effectue la cytodiérèse chez une cellule végétale entourée d'une paroi pectocellulosique ?",
          "options": [
            "Par la construction d'une nouvelle paroi squelettique rigide du centre vers la périphérie",
            "Par étranglement de la membrane comme chez l'animal",
            "Par expulsion du noyau hors de la feuille",
            "Par injection d'acide dans le sol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La paroi rigide de cellulose ne peut pas s'étrangler : les vésicules golgiennes s'accumulent au centre pour bâtir une nouvelle paroi mitoyenne transversale."
        },
        {
          "id": "seconde_a_svt_ch7_p1_ex7",
          "type": "mcq",
          "prompt": "Combien de cellules filles obtient-on à l'issue de la mitose à partir d'une cellule mère diploïde à 2n chromosomes ?",
          "options": [
            "Deux cellules filles diploïdes à 2n chromosomes strictement identiques",
            "Quatre cellules filles haploïdes à n chromosomes",
            "Une seule cellule fille qui a doublé de volume",
            "Huit cellules miniatures sans matériel génétique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La mitose est une division équationnelle : elle engendre 2 cellules filles ayant exactement le même stock chromosomique (2n) que la cellule mère."
        },
        {
          "id": "seconde_a_svt_ch7_p1_ex8",
          "type": "mcq",
          "prompt": "Pourquoi la mitose est-elle qualifiée de reproduction « conforme » ?",
          "options": [
            "Parce qu'elle conserve fidèlement et intégralement le caryotype et l'information génétique de la cellule mère",
            "Parce qu'elle respecte les règles administratives de l'établissement scolaire",
            "Parce qu'elle modifie au hasard 50% des gènes de l'organisme",
            "Parce qu'elle fabrique des spermatozoïdes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On parle de reproduction conforme car chaque cellule fille reçoit une copie exacte et fidèle de l'ADN parental : le caryotype est préservé à 100% sans altération."
        }
      ]
    },
    {
      "id": "seconde_a_svt_ch7_p2",
      "order": 2,
      "title": "Rôles biologiques de la mitose : cicatrisation, croissance et dérèglements tumoraux",
      "summary": "Importance biologique et médicale : régénération des tissus, cicatrisation des plaies, renouvellement des cellules sanguines, édification de l’adulte (10¹⁷ cellules), et conséquences pathologiques de la prolifération anarchique (tumeurs).",
      "conceptExplanation": "La mitose n'est pas seulement un mécanisme cellulaire microscopique : c'est le moteur biologique qui maintient en vie tous les organismes pluricellulaires jour après jour.\n\n1. De la cellule-œuf à l'organisme adulte (la croissance) :\nChez l'être humain et les animaux, toute vie débute par une cellule unique : la cellule-œuf issue de la fusion d'un spermatozoïde et d'un ovule.\nGrâce à des millions de cycles mitotiques successifs et parfaitement programmés, cette cellule unique donne naissance à un être adulte constitué de plus de 10¹⁷ cellules (100 millions de milliards de cellules !), toutes dotées du même patrimoine génétique initial.\nChez les végétaux, la mitose continue tout au long de la vie dans les méristèmes terminaux des tiges et des racines, permettant une croissance végétale ininterrompue.\n\n2. La cicatrisation et la réparation des lésions tissulaires :\nLors d'une coupure, d'une blessure profonde au bras (comme lors d'un cours d'EPS) ou d'une brûlure :\n- Les cellules épithéliales et conjonctives situées aux abords de la plaie sont stimulées par des facteurs de croissance.\n- Elles entrent en mitose accélérée pour fabriquer de nouvelles cellules saines.\n- En quelques semaines, la plaie est comblée, le tissu reconstitué et la peau cicatrisée.\n\n3. Le renouvellement permanent des cellules usées :\nDans notre corps, des millions de cellules meurent chaque minute et doivent être remplacées en permanence :\n- Les globules rouges du sang ont une durée de vie de 120 jours : ils sont renouvelés sans cesse par mitose dans la moelle osseuse.\n- Les cellules de l'épiderme de notre peau desquament chaque jour et sont remplacées par les cellules de la couche basale en mitose active.\n- La paroi de l'intestin se renouvelle intégralement tous les 3 à 5 jours.\n\n4. La reproduction chez les êtres unicellulaires :\nChez les organismes formés d'une seule cellule (amibes, paramécies, levures), la mitose équivaut à la reproduction de l'espèce entière : une cellule donne deux individus indépendants.\n\n5. Dérèglement de la mitose et conséquences médicales (Tumeurs et cancers) :\nNormalement, la division cellulaire est rigoureusement contrôlée par des gènes régulateurs et le système immunitaire.\nSi ce système de contrôle est altéré (par exemple à cause d'une mutation génétique provoquée par le tabac, les rayons ultraviolets solaires ou des polluants chimiques) :\n- Les cellules se divisent de manière anarchique, désordonnée et incontrôlable.\n- Cet amas anormal de cellules forme une tumeur. Si les cellules acquièrent la capacité d'envahir les organes voisins, c'est un cancer.\nLa recherche médicale développe donc des thérapies anticancéreuses visant à bloquer le fuseau de division de la mitose des cellules tumorales.",
      "formulas": [
        {
          "name": "Édification de l'organisme",
          "formula": "1 cellule-œuf fécondée → Plus de 10¹⁷ cellules somatiques",
          "note": "Par vagues successives et contrôlées de mitoses"
        },
        {
          "name": "Renouvellement tissulaire",
          "formula": "Hématies (120 jours) + Peau + Muqueuse intestinale",
          "note": "Remplacement continu et compensateur des cellules usées"
        }
      ],
      "keyRule": "Pour les épreuves écrites : rappelle toujours que la mitose remplit 4 fonctions vitales : 1. Croissance de l'organisme ; 2. Cicatrisation des plaies ; 3. Renouvellement des cellules usées (sang, peau) ; 4. Conservation intégrale du caryotype (2n). Mentionne aussi le risque tumoral en cas de dérèglement du contrôle mitotique.",
      "workedExample": {
        "title": "Situation d’évaluation officielle : Renouvellement cellulaire et intégrité cutanée",
        "statement": "Un élève affirme : « Puisque les cellules de la peau meurent et tombent tous les jours, notre peau devrait disparaître au bout de quelques mois ». Expliquez-lui précisément pourquoi sa conclusion est fausse en faisant intervenir la notion de mitose.",
        "methodSteps": [
          "Reconnaître le fait biologique exact : les cellules superficielles de l'épiderme s'usent et meurent continuellement.",
          "Identifier le mécanisme compensateur : les cellules de la couche basale de l'épiderme se divisent continuellement par mitose conforme.",
          "Relier l'équilibre dynamique : chaque cellule morte tombée est instantanément remplacée par une nouvelle cellule fille identique issue de la mitose."
        ],
        "conclusion": "La peau ne disparaît pas car la mitose assure un renouvellement cellulaire permanent et rigoureusement compensateur tout au long de la vie."
      },
      "exercises": [
        {
          "id": "seconde_a_svt_ch7_p2_ex1",
          "type": "mcq",
          "prompt": "Quel processus biologique permet la cicatrisation et la fermeture progressive d'une plaie profonde de la peau ?",
          "options": [
            "La multiplication active et contrôlée des cellules locales par mitoses conformes",
            "Le rétrécissement spontané des os sous la peau",
            "La disparition définitive de toutes les cellules de la zone blessée",
            "La transformation des globules blancs en cellules végétales"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lors d'une blessure, les cellules bordant la plaie reçoivent un signal de division et entrent en mitose pour fabriquer du tissu cutané neuf et combler la lésion."
        },
        {
          "id": "seconde_a_svt_ch7_p2_ex2",
          "type": "mcq",
          "prompt": "Combien de cellules environ composent le corps d'un être humain adulte formé à partir d'une seule cellule-œuf ?",
          "options": [
            "Environ 10¹⁷ cellules (100 millions de milliards de cellules)",
            "Exactement 46 cellules",
            "Environ 5000 cellules",
            "Moins d'un million de cellules"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À partir de l'unique cellule-œuf initiale, des millions de vagues de mitoses successives bâtissent l'organisme adulte composé de plus de 10¹⁷ cellules."
        },
        {
          "id": "seconde_a_svt_ch7_p2_ex3",
          "type": "mcq",
          "prompt": "Quelle cellule sanguine humaine possédant une durée de vie de 120 jours est renouvelée en continu par mitose dans la moelle osseuse ?",
          "options": [
            "L'hématie (ou globule rouge)",
            "Le fibroblaste osseux mort",
            "L'ovocyte primordial",
            "Le neurone moteur cortical"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les hématies (globules rouges) meurent au bout de 120 jours et sont régénérées à raison de plus de 2 millions par seconde grâce aux divisions mitotiques de la moelle osseuse."
        },
        {
          "id": "seconde_a_svt_ch7_p2_ex4",
          "type": "mcq",
          "prompt": "Chez les organismes unicellulaires tels que la paramécie ou la levure, quel est le rôle direct de la mitose ?",
          "options": [
            "Elle constitue le mode de reproduction asexuée de l'organisme entier",
            "Elle fabrique un squelette en calcaire interne",
            "Elle entraîne obligatoirement la mort immédiate de l'amibe",
            "Elle sert uniquement à changer de couleur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chez un être vivant unicellulaire, la division mitotique de la cellule crée deux individus autonomes complets : elle assure ainsi la reproduction conforme de l'espèce."
        },
        {
          "id": "seconde_a_svt_ch7_p2_ex5",
          "type": "mcq",
          "prompt": "Que se produit-il dans un tissu si les mécanismes de contrôle de la mitose sont altérés et que les cellules se multiplient anarchiquement ?",
          "options": [
            "La formation d'une tumeur (prolifération anarchique pouvant aboutir au cancer)",
            "Le tissu devient magiquement immortel sans aucun problème de santé",
            "Les cellules se transforment instantanément en eau stérile",
            "Le nombre de chromosomes chute à zéro"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une perte de régulation de la mitose engendre une prolifération cellulaire anarchique et incontrôlée, caractéristique des tumeurs et néoplasmes cancéreux."
        },
        {
          "id": "seconde_a_svt_ch7_p2_ex6",
          "type": "mcq",
          "prompt": "Quelle est la durée moyenne approximative d'une mitose dans une cellule eucaryote saine ?",
          "options": [
            "Entre 1 et 4 heures",
            "Exactement 9 mois",
            "Une fraction de milliseconde imperceptible",
            "Une année scolaire complète"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La division mitotique est un processus dynamique rapide qui dure généralement entre 1 et 4 heures chez les cellules eucaryotes en prolifération."
        },
        {
          "id": "seconde_a_svt_ch7_p2_ex7",
          "type": "mcq",
          "prompt": "Chez les végétaux supérieurs, dans quelles zones anatomiques la mitose est-elle particulièrement active pour assurer la croissance ?",
          "options": [
            "Dans les méristèmes terminaux des racines et des bourgeons de tiges",
            "Dans l'écorce de bois mort desséché",
            "Au centre de la sève brute ascendante",
            "Dans les grains de sable du sol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les méristèmes apicaux (racinaires et caulinaires) sont des zones de mitoses perpétuelles assurant l'allongement continu des organes végétaux."
        },
        {
          "id": "seconde_a_svt_ch7_p2_ex8",
          "type": "mcq",
          "prompt": "Pourquoi le caryotype est-il conservé inchangé au cours des millions de mitoses de la vie d'un individu ?",
          "options": [
            "Parce que la séparation égale des chromatides sœurs à l'anaphase transmet une copie exacte du matériel génétique à chaque cellule fille",
            "Parce que le noyau ne contient pas d'ADN pendant la division",
            "Parce que la cellule mère ne donne qu'une seule cellule fille",
            "Parce que les chromosomes sont détruits puis reconstruits au hasard"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Grâce à la duplication préalable de l'ADN et au partage équitable des deux chromatides sœurs identiques lors de l'anaphase, chaque cellule fille hérite du même jeu de 46 chromosomes."
        }
      ]
    }
  ]
};

// LEÇON 4 : LA DIVERSITÉ DES COMPORTEMENTS ALIMENTAIRES DE L’HOMME
// (Leçon 8 du programme officiel MENA Côte d'Ivoire)
// ============================================================================
export const svt2deADiversiteComportementsAlimentairesChapter: CurriculumChapter = {
  id: 'seconde_a_svt_ch8_diversite_comportements_alimentaires',
  subjectId: 'svt',
  gradeLevel: 'seconde_a',
  order: 8,
  officialVolumeHours: 4,
  title: 'Leçon 8 — La diversité des comportements alimentaires de l’homme',
  summary:
    'Habitudes alimentaires des différentes régions et ethnies de Côte d’Ivoire (Nord, Sud, Centre, Est, Ouest) et facteurs explicatifs pédologiques (sols), climatiques, floristiques (végétation) et socioculturels.',
  points: [
    // ------------------------------------------------------------------------
    // MINI-LEÇON 1/2 : Habitudes alimentaires régionales en Côte d'Ivoire
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_svt_ch4_p1',
      order: 1,
      title: 'Habitudes et comportements alimentaires régionaux en Côte d’Ivoire',
      summary:
        'Définitions du comportement et des habitudes alimentaires, spécialités culinaires régionales (Kabato au Nord, Foutou d’igname au Centre, Attiéké au Sud, Riz et Foutou manioc à l’Ouest).',
      conceptExplanation: `En Côte d'Ivoire, les habitudes alimentaires présentent une richesse et une diversité remarquables selon les régions géographiques et les groupes ethniques.

1. Définitions officielles :
- Comportement alimentaire : ensemble des conduites et attitudes d'un individu ou d'une communauté vis-à-vis de l'acquisition, du choix, de la préparation et de la consommation d'aliments.
- Habitude alimentaire : choix récurrent et coutumier que fait une personne ou un groupe social quant aux mets consommés quotidiennement.

2. Les habitudes alimentaires des grandes régions ivoiriennes :
- Au Nord (Sénoufo, Malinké, Koulango, Lobi) :
  * Aliments de base : les céréales (maïs, mil, sorgho, fonio, riz) et l'arachide.
  * Mets traditionnels : le Kabato (pâte cuite de farine de maïs ou de mil), la bouillie de céréales, accompagnés de sauce feuille (feuilles de da, d'épinard, de patate douce) ou de sauce arachide. Boissons locales : tchapalo et dolo.
- Au Sud et sur le Littoral (Adjoukrou, Ébrié, Alladian, Attié, Avikam) :
  * Aliments de base : le manioc et la banane plantain, associés aux poissons et fruits de mer.
  * Mets traditionnels : l'attiéké (semoule de manioc fermentée et cuite à la vapeur) consommé à l'huile rouge avec du poisson et de la sauce claire ; le foutou banane/manioc, le foufou de banane ou d'igname, la sauce biécosseu et la sauce n'troh.
- Au Centre (Baoulé) :
  * Aliments de base : l'igname.
  * Mets traditionnels : le foutou d'igname pilé, le n'gbô (ragoût d'igname mijoté) accompagné de sauce gnangan (aubergines sauvages amères) ou de sauce graine.
- À l'Est (Abron, Agni) :
  * Aliments de base : l'igname, le taro et la banane plantain.
  * Mets traditionnels : le foutou d'igname, le foutou de taro, la sauce tosrodum, la sauce aubergine et la boisson locale koutoukou.
- À l'Ouest (Bété, Wè/Guéré, Dan/Yacouba, Dida) :
  * Aliments de base : le riz, le manioc et la banane plantain.
  * Mets traditionnels : le riz blanc à la sauce graine (palmier à huile), le foutou de manioc pur à la sauce kplé (ou klébâ), le loco soukouè (foutou de banane très mûre) et la sauce tikriti.`,
      formulas: [
        {
          name: 'Piliers régionaux de l’alimentation en Côte d’Ivoire',
          formula: 'Nord : Céréales & Kabato | Sud : Manioc & Attiéké | Centre : Igname & Foutou | Ouest : Riz & Sauce graine',
          note: 'Cartographie culinaire officielle du programme de SVT Seconde A.'
        }
      ],
      keyRule:
        'Le Kabato à la sauce feuille est le plat traditionnel emblématique des Sénoufo et Malinké au Nord ; le foutou d’igname caractérise les Baoulé et Abron au Centre-Est ; l’attiéké au poisson est l’aliment des peuples lagunaires du Sud.',
      workedExample: {
        title: 'Situation d’évaluation officielle : Repas de fête interrégionale',
        statement:
          'Lors d’un déjeuner de retrouvailles, un élève originaire du Nord est ravi de consommer du kabato sauce feuille, tandis que ses camarades Baoulé et Bété réclament respectivement du foutou d’igname et du riz à la sauce graine. Expliquer cette diversité de préférences.',
        methodSteps: [
          'Étape 1 : Définir l’habitude alimentaire : chaque élève manifeste une préférence pour les aliments familiers consommés régulièrement dans sa famille et sa région d’origine.',
          'Étape 2 : Relier chaque élève à son met traditionnel : le kabato est le mets de base de la région des savanes au Nord ; le foutou d’igname est le pilier des cultures du Centre baouléen ; le riz sauce graine domine à l’Ouest.',
          'Étape 3 : Conclure sur le comportement : cette diversité reflète fidèlement les traditions culinaires et les disponibilités vivrières de leurs terroirs respectifs.'
        ],
        conclusion:
          'La diversité des comportements alimentaires d’un individu découle directement des habitudes alimentaires développées au sein de sa communauté.'
      },
      exercises: [
        {
          id: 'seconde_a_svt_ch4_p1_ex1',
          type: 'mcq',
          prompt: 'Quel est le plat traditionnel à base de semoule de maïs ou de mil consommé avec de la sauce feuille par les populations du Nord (Sénoufo) ?',
          options: ['L’attiéké', 'Le kabato', 'Le loco soukouè', 'Le n’gbô'],
          correctAnswerIndex: 1,
          explanation:
            'Le kabato est la pâte de céréales (maïs, mil ou sorgho) emblématique du Nord de la Côte d’Ivoire, traditionnellement servie avec de la sauce feuille ou arachide.'
        },
        {
          id: 'seconde_a_svt_ch4_p1_ex2',
          type: 'mcq',
          prompt: 'Quel aliment traditionnel obtenu par fermentation et cuisson à la vapeur du manioc est caractéristique du Sud lagunaire (Adjoukrou, Ébrié) ?',
          options: ['Le foutou taro', 'L’attiéké', 'Le tchapalo', 'La sauce da'],
          correctAnswerIndex: 1,
          explanation:
            'L’attiéké est une semoule de manioc cuite à la vapeur, aliment de base des peuples lagunaires du Sud ivoirien.'
        },
        {
          id: 'seconde_a_svt_ch4_p1_ex3',
          type: 'mcq',
          prompt: 'Quel tubercule constitue la nourriture principale préparée en foutou ou en ragoût (n’gbô) chez les Baoulé du Centre ?',
          options: ['La pomme de terre', 'L’igname', 'La betterave', 'Le navet'],
          correctAnswerIndex: 1,
          explanation:
            'L’igname est le tubercule central de l’agriculture et des habitudes culinaires du peuple Baoulé et des peuples du Centre.'
        },
        {
          id: 'seconde_a_svt_ch4_p1_ex4',
          type: 'mcq',
          prompt: 'Chez les peuples de l’Ouest forestier (Bété, Wè, Dan), quel féculent est consommé quotidiennement avec de la sauce graine ou de la sauce kplé ?',
          options: ['Le blé dur', 'Le riz et le manioc', 'Le quinoa', 'L’avoine'],
          correctAnswerIndex: 1,
          explanation:
            'L’Ouest ivoirien est la grande région rizicole et de culture du manioc (foutou manioc avec sauce kplé, riz à la sauce graine de palme).'
        },
        {
          id: 'seconde_a_svt_ch4_p1_ex5',
          type: 'mcq',
          prompt: 'Quelle boisson traditionnelle issue de la fermentation de céréales (maïs, mil) rencontre-t-on couramment dans le Nord de la Côte d’Ivoire ?',
          options: ['Le vin de palme', 'Le tchapalo (ou dolo)', 'Le koutoukou', 'Le cidre'],
          correctAnswerIndex: 1,
          explanation:
            'Le tchapalo (ou dolo) est une bière traditionnelle fermentée à base de sorgho, de mil ou de maïs très répandue dans le Nord.'
        },
        {
          id: 'seconde_a_svt_ch4_p1_ex6',
          type: 'mcq',
          prompt: 'Qu’est-ce que le « loco soukouè » préparé dans l’Ouest ivoirien ?',
          options: [
            'Une soupe de poisson séché',
            'Un foutou préparé à partir de banane plantain très mûre',
            'Un rôti de cabri sauvage',
            'Une boisson gazeuse sucrée'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Le loco soukouè est un plat traditionnel de l’Ouest préparé en pilant des bananes plantains très mûres.'
        },
        {
          id: 'seconde_a_svt_ch4_p1_ex7',
          type: 'mcq',
          prompt: 'Comment définit-on scientifiquement la notion d’habitude alimentaire ?',
          options: [
            'Une obligation médicale temporaire de jeûne',
            'Le choix récurrent et coutumier que fait une personne ou une communauté quant aux aliments qu’elle consomme',
            'La digestion complète d’un repas par les sucs gastriques',
            'L’interdiction de consommer du sel de cuisine'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Selon la définition officielle du cours de 2de A, l’habitude alimentaire est le choix récurrent et habituel d’aliments opéré par un groupe humain.'
        },
        {
          id: 'seconde_a_svt_ch4_p1_ex8',
          type: 'mcq',
          prompt: 'Parmi les associations suivantes entre ethnie et plat traditionnel, laquelle est rigoureusement exacte ?',
          options: [
            'Sénoufo → Attiéké à la sauce claire',
            'Adjoukrou → Pâte de maïs kabato',
            'Baoulé → Foutou d’igname à la sauce gnangan ou graine',
            'Bété → Foutou de taro sauce tosrodum'
          ],
          correctAnswerIndex: 2,
          explanation:
            'Le foutou d’igname avec sauce graine ou gnangan est la principale nourriture traditionnelle du peuple Baoulé.'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 2/2 : Facteurs naturels et socioculturels de la diversité
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_svt_ch4_p2',
      order: 2,
      title: 'Facteurs explicatifs de la diversité alimentaire : sols, climat, végétation et culture',
      summary:
        'Rôle des sols (ferrugineux, ferralitiques, hydromorphes), de la végétation (savanes, forêts), du climat (soudanéen, baouléen, attiéen) et des facteurs sociologiques (tabous, croyances).',
      conceptExplanation: `La diversité des habitudes alimentaires observée d'une région à l'autre en Côte d'Ivoire ne relève pas du hasard : elle s'explique par la combinaison de facteurs écologiques et de facteurs socioculturels.

1. Facteurs naturels à l'origine de la diversité alimentaire :
- Les sols (facteurs pédologiques) :
  * Sols ferrugineux tropicaux (au Nord et au Centre) : sols filtrants, adaptés aux céréales résistantes (maïs, mil, sorgho) et à l'arachide.
  * Sols ferralitiques et ferrisols (au Sud, à l'Est et à l'Ouest) : sols profonds et acides des zones forestières humides, très propices aux cultures vivrières pérennes (banane plantain, manioc, taro, palmier à huile) et aux cultures de rente.
  * Sols hydromorphes (sur le littoral marin et les bas-fonds) : sols gorgés d'eau, adaptés à la riziculture inondée, au cocotier et aux cultures maraîchères.
- Le climat et la pluviométrie :
  * Climat soudanéen (Nord) : climat chaud avec une longue saison sèche et une faible pluviométrie (1 000 à 1 200 mm/an), imposant la culture de céréales de cycle court.
  * Climat baouléen (Centre) : pluviométrie moyenne (1 200 mm/an), idéal pour l'igname.
  * Climat attiéen et climat de montagne (Sud et Ouest) : fortes précipitations (> 1 600 mm/an) réparties sur deux saisons des pluies, favorables aux forêts denses et aux plantes tropicales exigeantes en eau.
- La végétation naturelle :
  * Savane herbeuse et savane arborée au Nord et Centre : milieu ouvert des graminées céréalières.
  * Forêt dense et forêt claire au Sud et à l'Ouest : abondance de tubercules forestiers, de régimes de palme et de gibier.

2. Facteurs sociologiques et culturels :
Les habitudes alimentaires sont également modulées par l'héritage social :
- Les croyances religieuses : prescriptions ou interdits alimentaires (ex: porc, alcool).
- Les tabous totémiques : chaque lignage ou clan respecte l'interdiction de consommer certains animaux ou plantes (ex: interdits de l'antilope, du varan, de l'igname précoce).
- Les préjugés et traditions : transmission des recettes familiales et attachement identitaire aux mets ancestraux.`,
      formulas: [
        {
          name: 'Origines de la diversité alimentaire',
          formula: 'Diversité alimentaire = Nature des Sols + Climat & Végétation + Traditions sociologiques & Tabous',
          note: 'Synthèse des 4 piliers explicatifs du programme officiel de SVT 2de A.'
        }
      ],
      keyRule:
        'Les populations consomment en priorité ce que leur environnement naturel produit : les céréales poussent sur les sols ferrugineux du climat soudanéen (Nord), tandis que le manioc et la banane prospèrent sur les sols ferralitiques du climat forestier humide (Sud-Ouest).',
      workedExample: {
        title: 'Situation d’évaluation officielle : Analyse de documents pédologiques et alimentaires',
        statement:
          'En observant une carte des sols de Côte d’Ivoire, un élève remarque que les départements de Korhogo et Ferkessédougou possèdent des sols ferrugineux sous un climat de savane, alors que ceux de Divo et Sassandra possèdent des sols ferralitiques forestiers. Établir le lien avec les aliments consommés.',
        methodSteps: [
          'Étape 1 : Analyser le terroir du Nord : les sols ferrugineux sous climat soudanéen conviennent idéalement aux graminées céréalières (mil, maïs, sorgho) et à l’arachide, ce qui explique la prédominance du kabato.',
          'Étape 2 : Analyser le terroir du Sud : les sols ferralitiques très arrosés favorisent le manioc, la banane plantain et le palmier à huile, d’où la consommation d’attiéké, de foutou et de sauce graine.',
          'Étape 3 : Synthétiser la relation sol-alimentation : les hommes consomment les produits vivriers adaptés aux caractéristiques pédologiques et climatiques de leur milieu de vie.'
        ],
        conclusion:
          'La nature du sol et le climat déterminent les cultures vivrières possibles, forgeant ainsi les habitudes alimentaires régionales.'
      },
      exercises: [
        {
          id: 'seconde_a_svt_ch4_p2_ex1',
          type: 'mcq',
          prompt: 'Quel type de sol prédomine dans le Nord de la Côte d’Ivoire et se prête particulièrement à la culture des céréales (maïs, mil, sorgho) ?',
          options: ['Les sols hydromorphes', 'Les sols ferrugineux', 'Les sols volcaniques récents', 'Les sols calcaires crayeux'],
          correctAnswerIndex: 1,
          explanation:
            'Les sols ferrugineux tropicaux du Nord ivoirien conviennent parfaitement aux cultures de céréales et de légumineuses comme l’arachide.'
        },
        {
          id: 'seconde_a_svt_ch4_p2_ex2',
          type: 'mcq',
          prompt: 'Quels types de sols caractérisent le Sud forestier et favorisent la culture du manioc, de la banane et du palmier à huile ?',
          options: ['Les sols ferralitiques et les ferrisols', 'Les sols désertiques salins', 'La toundra', 'Les sols gelés pergélisols'],
          correctAnswerIndex: 0,
          explanation:
            'Les sols ferralitiques et ferrisols, riches en oxydes de fer et d’aluminium sous forte pluviométrie, soutiennent la forêt dense et ses cultures vivrières.'
        },
        {
          id: 'seconde_a_svt_ch4_p2_ex3',
          type: 'mcq',
          prompt: 'Où rencontre-t-on principalement des sols hydromorphes propices aux cocotiers et au maraîchage en Côte d’Ivoire ?',
          options: ['Sur les hauts sommets du mont Nimba', 'Sur le littoral marin et les zones marécageuses des bas-fonds', 'Dans le désert du Sahara', 'Au centre de la ville de Bouaké'],
          correctAnswerIndex: 1,
          explanation:
            'Les sols hydromorphes sont des sols saturés d’eau situés le long des côtes lagunaires et dans les bas-fonds inondables.'
        },
        {
          id: 'seconde_a_svt_ch4_p2_ex4',
          type: 'mcq',
          prompt: 'Quel type de climat règne sur le Nord de la Côte d’Ivoire, caractérisé par une faible pluviométrie et une longue saison sèche ?',
          options: ['Le climat équatorial pur', 'Le climat soudanéen', 'Le climat montagnard alpin', 'Le climat polaire'],
          correctAnswerIndex: 1,
          explanation:
            'Le climat soudanéen s’étend sur le Nord de la Côte d’Ivoire avec une saison des pluies unique et une végétation de savane.'
        },
        {
          id: 'seconde_a_svt_ch4_p2_ex5',
          type: 'mcq',
          prompt: 'Parmi les facteurs suivants, lequel relève de la diversité sociologique influençant le comportement alimentaire ?',
          options: ['La teneur du sol en silice', 'Les croyances religieuses et les tabous alimentaires ancestraux', 'La pression atmosphérique', 'La hauteur de la nappe phréatique'],
          correctAnswerIndex: 1,
          explanation:
            'Les tabous claniques, les croyances religieuses et les coutumes familiales constituent les facteurs sociologiques déterminants du régime alimentaire.'
        },
        {
          id: 'seconde_a_svt_ch4_p2_ex6',
          type: 'mcq',
          prompt: 'Pourquoi le climat attiéen du Sud est-il propice à la production de banane plantain et de manioc tout au long de l’année ?',
          options: [
            'Parce qu’il y neige en juillet',
            'Parce qu’il bénéficie d’une forte pluviométrie répartie sur deux saisons des pluies',
            'Parce qu’il n’y a jamais de soleil',
            'Parce que le vent du nord y souffle sans arrêt'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Le climat attiéen comporte 4 saisons dont deux saisons des pluies abondantes, assurant une humidité constante indispensable aux tubercules forestiers.'
        },
        {
          id: 'seconde_a_svt_ch4_p2_ex7',
          type: 'mcq',
          prompt: 'Qu’est-ce qu’un tabou alimentaire dans les traditions de nombreuses communautés ivoiriennes ?',
          options: [
            'Un plat servi uniquement aux nouveau-nés',
            'Une interdiction sacrée ou coutumière de chasser ou de consommer une espèce animale ou végétale',
            'Un instrument de musique utilisé pendant les repas',
            'Un marché de vivres ouvert le dimanche'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Un tabou alimentaire est une interdiction stricte imposée par les croyances ou les totems familiaux, excluant certains aliments de la consommation.'
        },
        {
          id: 'seconde_a_svt_ch4_p2_ex8',
          type: 'mcq',
          prompt: 'En conclusion, de quoi résulte la diversité des comportements alimentaires de l’homme en Côte d’Ivoire ?',
          options: [
            'Exclusivement du prix des produits importés d’Europe',
            'De l’action combinée des habitudes alimentaires, des facteurs naturels (sols, climats, végétation) et des facteurs socioculturels',
            'D’un décret gouvernemental',
            'Du hasard sans aucune explication logique'
          ],
          correctAnswerIndex: 1,
          explanation:
            'La diversité alimentaire est le produit équilibré de l’adaptation écologique de l’homme à son milieu et de la transmission de son héritage culturel.'
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 5 : LES HABITUDES ALIMENTAIRES ET LA SANTÉ DE L’HOMME
// (Leçon 9 du programme officiel MENA Côte d'Ivoire)
// ============================================================================
export const svt2deAHabitudesAlimentairesEtSanteChapter: CurriculumChapter = {
  id: 'seconde_a_svt_ch9_habitudes_alimentaires_et_sante',
  subjectId: 'svt',
  gradeLevel: 'seconde_a',
  order: 9,
  officialVolumeHours: 6,
  title: 'Leçon 9 — Les habitudes alimentaires et la santé de l’homme',
  summary:
    'Impact des habitudes alimentaires sur la santé : maladies par carence qualitative (goître endémique, rôle de la thyroïde, aliments goîtrogènes) et maladies par excès quantitatif (obésité, calcul et interprétation de l’IMC, plaques d’athérome et artériosclérose). Principes d’une alimentation variée et équilibrée.',
  points: [
    // ------------------------------------------------------------------------
    // MINI-LEÇON 1/2 : Le goître endémique et les carences alimentaires qualitatives
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_svt_ch5_p1',
      order: 1,
      title: 'Maladies liées à la qualité des aliments : Le goître endémique et la carence en iode',
      summary:
        'Symptômes du goître, rôle de l’iode dans la fabrication des hormones thyroïdiennes, aliments goîtrogènes (manioc, chou) et prévention par le sel iodé.',
      conceptExplanation: `Une alimentation qui ne répond pas aux besoins qualitatifs de l'organisme entraîne des maladies nutritionnelles par carence, même si la quantité d'aliments ingérés est abondante.

1. Qu'est-ce que le goître endémique ?
Le goître endémique est une maladie nutritionnelle caractérisée par une augmentation anormale du volume du cou, causée par l'hypertrophie (gonflement) de la glande thyroïde, située à la base de la face antérieure du cou.
En Côte d'Ivoire, le goître est particulièrement endémique dans les régions montagneuses de l'Ouest (notamment dans la région de Man).

2. Mécanisme d'apparition du goître :
- Rôle de la thyroïde : la glande thyroïde a besoin d'iode (un oligo-élément minéral) pour synthétiser les hormones thyroïdiennes indispensables à la régulation du métabolisme, de la croissance et de la température corporelle.
- Conséquence de la carence en iode :
  * Dans les régions montagneuses, les sols sont fortement lessivés par les pluies et sont donc très pauvres en iode.
  * Les aliments végétaux qui y poussent (particulièrement le manioc) manquent cruellement d'iode.
  * En l'absence d'iode suffisant, la glande thyroïde continue de fabriquer et d'accumuler une protéine précurseur sans pouvoir la transformer en hormones actives.
  * Les follicules de la thyroïde se remplissent d'une substance gélatineuse appelée colloïde : la glande grossit pour tenter de capter le peu d'iode disponible, provoquant l'hypertrophie de la thyroïde et le goître.

3. Rôle aggravant des aliments goîtrogènes :
Certains aliments très consommés, comme le manioc, le chou, la patate douce et les navets, sont qualifiés d'aliments goîtrogènes :
Ils contiennent des composés chimiques (comme les glucosides cyanogénétiques) qui augmentent l'élimination urinaire de l'iode ou inhibent sa fixation par la glande thyroïde. Une alimentation quasi-exclusive à base de manioc accélère l'apparition du goître.

4. Prévention :
- Consommation obligatoire de sel de cuisine enrichi en iode (sel iodé).
- Consommation régulière de poissons marins et fruits de mer naturellement riches en iode.`,
      formulas: [
        {
          name: 'Mécanisme d’apparition du goître',
          formula: 'Carence en Iode + Aliments goîtrogènes → Arrêt synthèse hormones → Accumulation de colloïde → Hypertrophie thyroïde (Goître)',
          note: 'Maladie nutritionnelle qualitative réversible par la supplémentation en iode.'
        }
      ],
      keyRule:
        'Le goître endémique n’est pas dû à un manque de nourriture, mais à un manque d’un nutriment précis : l’iode. Le manioc est un aliment goîtrogène qui aggrave le déficit en iode s’il n’est pas complété par du sel iodé ou des produits marins.',
      workedExample: {
        title: 'Situation d’évaluation officielle : Cas du frère de Koyé à Man',
        statement:
          'De retour d’un séjour prolongé dans la région de Man où l’alimentation quotidienne est dominée par le manioc, un jeune homme présente un énorme gonflement à la base du cou. Nommer la maladie, identifier l’organe atteint et expliquer son mécanisme.',
        methodSteps: [
          'Étape 1 : Nommer la maladie : il s’agit du goître endémique.',
          'Étape 2 : Identifier l’organe touché : la glande thyroïde, située au niveau du cou.',
          'Étape 3 : Expliquer la cause : les sols de Man et le manioc cultivé sont pauvres en iode ; de plus, le manioc contient des substances goîtrogènes qui augmentent la perte d’iode.',
          'Étape 4 : Détailler le mécanisme : privée d’iode, la thyroïde ne produit plus d’hormones thyroïdiennes ; les cellules au repos se gorgent de substances colloïdes, entraînant l’augmentation du volume du cou.'
        ],
        conclusion:
          'Le goître résulte de la carence en iode entretenue par la consommation exclusive d’aliments goîtrogènes.'
      },
      exercises: [
        {
          id: 'seconde_a_svt_ch5_p1_ex1',
          type: 'mcq',
          prompt: 'Quel oligo-élément minéral indispensable à la fabrication des hormones thyroïdiennes est en carence dans le goître endémique ?',
          options: ['Le fer', 'L’iode', 'Le calcium', 'Le sodium'],
          correctAnswerIndex: 1,
          explanation:
            'L’iode est le composant minéral obligatoire des hormones thyroïdiennes. Sa carence dans l’alimentation provoque le goître endémique.'
        },
        {
          id: 'seconde_a_svt_ch5_p1_ex2',
          type: 'mcq',
          prompt: 'Quel organe situé au niveau du cou s’hypertrophie et gonfle de manière anormale lors du goître ?',
          options: ['Le larynx', 'La glande thyroïde', 'La glande parotide salivaire', 'La trachée'],
          correctAnswerIndex: 1,
          explanation:
            'C’est la glande thyroïde qui augmente anormalement de volume pour tenter de compenser le manque d’iode.'
        },
        {
          id: 'seconde_a_svt_ch5_p1_ex3',
          type: 'mcq',
          prompt: 'Dans quelle région de Côte d’Ivoire le goître est-il particulièrement endémique en raison des sols lessivés ?',
          options: [
            'Dans les zones côtières de Grand-Bassam',
            'Dans les régions montagneuses de l’Ouest (comme à Man)',
            'Dans la savane plate de Bouna',
            'Exclusivement sur les lagunes d’Abidjan'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Dans les régions montagneuses comme Man, les pluies intenses lessivent les sols en iode, rendant les eaux et les cultures pauvres en cet élément.'
        },
        {
          id: 'seconde_a_svt_ch5_p1_ex4',
          type: 'mcq',
          prompt: 'Pourquoi qualifie-t-on des aliments comme le manioc ou le chou d’aliments « goîtrogènes » ?',
          options: [
            'Parce qu’ils contiennent trop de sucre rapide',
            'Parce qu’ils favorisent l’élimination de l’iode ou bloquent son utilisation par la thyroïde',
            'Parce qu’ils colorent la peau en jaune',
            'Parce qu’ils détruisent les globules rouges'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Les substances goîtrogènes présentes dans le manioc ou le chou interfèrent avec la captation de l’iode par la thyroïde et augmentent son élimination urinaire.'
        },
        {
          id: 'seconde_a_svt_ch5_p1_ex5',
          type: 'mcq',
          prompt: 'Que se passe-t-il dans les follicules de la thyroïde en cas de carence prolongée en iode ?',
          options: [
            'La thyroïde rétrécit et disparaît',
            'Les follicules se remplissent de substance colloïde précurseur sans pouvoir achever la synthèse des hormones, d’où son gonflement',
            'Elle sécrète du suc pancréatique',
            'Elle se transforme en os dur'
          ],
          correctAnswerIndex: 1,
          explanation:
            'En l’absence d’iode, la protéine précurseur s’accumule sous forme de colloïde dans la glande, provoquant une hypertrophie volumineuse.'
        },
        {
          id: 'seconde_a_svt_ch5_p1_ex6',
          type: 'mcq',
          prompt: 'Quel moyen simple, efficace et obligatoire de santé publique permet de prévenir l’apparition du goître dans les populations ?',
          options: [
            'L’interdiction de boire de l’eau minérale',
            'La consommation exclusive de viande rouge',
            'L’iodation systématique du sel de cuisine de consommation courante',
            'L’arrêt de toute pratique sportive'
          ],
          correctAnswerIndex: 2,
          explanation:
            'L’utilisation universelle de sel de table enrichi en iode (sel iodé) apporte la dose quotidienne nécessaire et prévient le goître.'
        },
        {
          id: 'seconde_a_svt_ch5_p1_ex7',
          type: 'mcq',
          prompt: 'Parmi les aliments suivants, lequel est une excellente source naturelle d’iode alimentaire ?',
          options: ['Le sucre de canne blanc', 'Le poisson de mer et les fruits de mer', 'L’huile de palme raffinée', 'La farine de manioc pure'],
          correctAnswerIndex: 1,
          explanation:
            'Les poissons marins, les crustacés et les algues concentrent naturellement l’iode présent dans l’eau de mer.'
        },
        {
          id: 'seconde_a_svt_ch5_p1_ex8',
          type: 'mcq',
          prompt: 'Le goître endémique est-il une maladie par carence quantitative (manque de calories) ou qualitative (manque de nutriment spécifique) ?',
          options: [
            'Une carence quantitative uniquement',
            'Une carence qualitative liée au manque d’un nutriment minéral précis (l’iode)',
            'Une intoxication bactérienne par l’eau polluée',
            'Une maladie exclusivement héréditaire sans rapport avec l’alimentation'
          ],
          correctAnswerIndex: 1,
          explanation:
            'Le goître est le modèle typique de la carence qualitative : la quantité totale de nourriture peut être suffisante, mais la qualité fait défaut par manque d’iode.'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 2/2 : Maladies par excès : Obésité (calcul de l'IMC) et artériosclérose
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_svt_ch5_p2',
      order: 2,
      title: 'Maladies liées à la quantité des aliments : Obésité, calcul de l’IMC et artériosclérose',
      summary:
        'Calcul et interprétation de l’Indice de Masse Corporelle (IMC), mécanismes de formation des plaques d’athérome, conséquences de l’artériosclérose et règles de nutrition saine.',
      conceptExplanation: `L'excès d'apport énergétique par rapport aux dépenses de l'organisme, combiné à la consommation excessive de graisses saturées et de sucres rapides, est à l'origine de graves maladies métaboliques et cardiovasculaires.

1. L'Obésité et l'Indice de Masse Corporelle (IMC) :
- Mécanisme : lorsque les apports énergétiques dépassent largement les besoins de l'organisme (suralimentation, grignotage de confiseries et boissons sucrées, sédentarité sans activité physique), le surplus de nutriments organiques (lipides, glucides, protides) est transformé en triglycérides et stocké sous forme de masses grasses dans les adipocytes (cellules du tissu adipeux).
- L'évaluation de la corpulence se fait grâce à l'Indice de Masse Corporelle (IMC) selon la formule officielle :
  IMC = masse (kg) / [taille (m)]²
- Grille officielle de diagnostic de l'état pondéral :
  * IMC < 19 : Maigreur
  * 19 ≤ IMC < 25 : Corpulence normale (poids idéal)
  * 25 ≤ IMC < 30 : Surpoids
  * IMC ≥ 30 : Obésité

2. L'Artériosclérose et la formation de la plaque d'athérome :
- Mécanisme de l'athérosclérose / artériosclérose :
  * Une alimentation trop riche en graisses animales et en cholestérol LDL (« mauvais cholestérol ») sature le sang en lipides.
  * Ces lipides en excès s'infiltrent et s'accumulent sous la paroi interne des artères, formant un dépôt graisseux appelé plaque d'athérome.
  * Au niveau de la plaque, du tissu fibreux et du calcium se déposent : la paroi artérielle perd son élasticité, durcit et devient cassante (artériosclérose).
  * La lumière de l'artère se rétrécit progressivement (sténose), réduisant le débit sanguin vers les organes vitaux.
- Conséquences graves :
  * Si la plaque d'athérome se rompt, elle forme un caillot sanguin (thrombose) qui obstrue complètement le vaisseau.
  * L'obstruction d'une artère coronaire prive le muscle cardiaque de sang et d'oxygène, provoquant un infarctus du myocarde (crise cardiaque).
  * L'obstruction d'une artère cérébrale provoque un accident vasculaire cérébral (AVC).

3. Règles d'or d'une alimentation saine et protectrice :
Pour préserver sa santé, l'alimentation doit être variée et équilibrée :
- Répondre à la fois aux besoins quantitatifs (équilibre énergétique apports = dépenses) et qualitatifs (vitamines, fibres, minéraux, protéines).
- Limiter les produits ultratransformés, les graisses animales saturées, le sucre raffiné et l'alcool.
- Pratiquer une activité physique régulière (au moins 30 minutes de marche, vélo ou sport par jour) pour dépenser l'énergie excédentaire.`,
      formulas: [
        {
          name: 'Formule officielle de l’IMC',
          formula: 'IMC = masse (en kg) / [taille (en m)]²',
          note: 'Valeurs normales : 19 à 25 kg/m². Surpoids si 25 à 30, Obésité au-dessus de 30.'
        }
      ],
      keyRule:
        'Pour calculer l’IMC, la taille doit impérativement être exprimée en mètres et élevée au carré (ex: 1,65 m → 1,65 × 1,65 = 2,7225 m²). Une alimentation saine doit satisfaire à la fois les exigences qualitatives et quantitatives.',
      workedExample: {
        title: 'Situation d’évaluation officielle : Diagnostic médical d’un élève de 14 ans',
        statement:
          'Un adolescent de 14 ans mesurant 1,65 m pèse 75 kg. Lors de la visite médicale scolaire, le médecin l’informe qu’il présente un risque d’obésité. Calculer son IMC, déduire son état pondéral et lui proposer des mesures adaptées.',
        methodSteps: [
          'Étape 1 : Poser la formule officielle : IMC = masse (kg) / [taille (m)]².',
          'Étape 2 : Effectuer l’application numérique : IMC = 75 / (1,65)² = 75 / 2,7225 ≈ 27,55 kg/m² (soit environ 28 kg/m²).',
          'Étape 3 : Comparer à la grille officielle : 27,55 est compris entre 25 et 30, ce qui correspond à un état de surpoids.',
          'Étape 4 : Proposer des recommandations : adopter une alimentation équilibrée en réduisant les sucres rapides et les graisses, et pratiquer une activité physique régulière pour rééquilibrer la balance énergétique.'
        ],
        conclusion:
          'Avec un IMC de 27,55 kg/m², l’élève est en surpoids et doit corriger ses habitudes pour éviter l’obésité.'
      },
      exercises: [
        {
          id: 'seconde_a_svt_ch5_p2_ex1',
          type: 'mcq',
          prompt: 'Quelle est la formule officielle utilisée pour calculer l’Indice de Masse Corporelle (IMC) ?',
          options: [
            'IMC = masse (kg) × taille (m)',
            'IMC = masse (kg) / [taille (m)]²',
            'IMC = [taille (m)]² / masse (kg)',
            'IMC = masse (kg) + taille (m)'
          ],
          correctAnswerIndex: 1,
          explanation:
            'L’IMC se calcule en divisant la masse corporelle en kilogrammes par le carré de la taille en mètres.'
        },
        {
          id: 'seconde_a_svt_ch5_p2_ex2',
          type: 'mcq',
          prompt: 'Un élève pèse 60 kg et mesure 1,65 m. Quel est son IMC approximatif et quel est son état selon la grille médicale ?',
          options: [
            'IMC ≈ 15 (état de dénutrition sévère)',
            'IMC ≈ 22 (corpulence normale)',
            'IMC ≈ 35 (obésité massive)',
            'IMC ≈ 28 (obésité morbide)'
          ],
          correctAnswerIndex: 1,
          explanation:
            'IMC = 60 / (1,65 × 1,65) = 60 / 2,7225 ≈ 22,04 kg/m². Situé entre 19 et 25, son poids est parfaitement normal.'
        },
        {
          id: 'seconde_a_svt_ch5_p2_ex3',
          type: 'mcq',
          prompt: 'D’après la grille officielle de l’OMS enseignée en Seconde A, à partir de quelle valeur d’IMC un individu est-il considéré comme obèse ?',
          options: ['Au-dessus de 19', 'Entre 19 et 25', 'Entre 25 et 30', 'Au-dessus de 30'],
          correctAnswerIndex: 3,
          explanation:
            'Un IMC égal ou supérieur à 30 kg/m² correspond au stade d’obésité (entre 25 et 30 correspond au surpoids).'
        },
        {
          id: 'seconde_a_svt_ch5_p2_ex4',
          type: 'mcq',
          prompt: 'Dans quelles cellules spécifiques de l’organisme les graisses excédentaires sont-elles stockées en réserve ?',
          options: ['Dans les globules rouges', 'Dans les neurones du cerveau', 'Dans les adipocytes (cellules du tissu adipeux)', 'Dans les alvéoles pulmonaires'],
          correctAnswerIndex: 2,
          explanation:
            'Les adipocytes sont les cellules spécialisées dans le stockage des lipides sous forme de triglycérides.'
        },
        {
          id: 'seconde_a_svt_ch5_p2_ex5',
          type: 'mcq',
          prompt: 'Qu’est-ce qu’une plaque d’athérome à l’origine de l’artériosclérose ?',
          options: [
            'Un os cassé dans la jambe',
            'Un dépôt graisseux riche en mauvais cholestérol sur la paroi interne des artères',
            'Une infection virale de la gorge',
            'Un muscle artificiel'
          ],
          correctAnswerIndex: 1,
          explanation:
            'La plaque d’athérome est un dépôt lipidique constitué de cholestérol s’accumulant sur l’endothélium artériel, provoquant rétrécissement et durcissement.'
        },
        {
          id: 'seconde_a_svt_ch5_p2_ex6',
          type: 'mcq',
          prompt: 'Quelle est la conséquence directe de l’obstruction complète d’une artère coronaire par un caillot (thrombose) ?',
          options: ['L’infarctus du myocarde (crise cardiaque)', 'Le goître endémique', 'La fracture du fémur', 'La rougeole'],
          correctAnswerIndex: 0,
          explanation:
            'Les artères coronaires irriguent le myocarde (muscle cardiaque). Leur occlusion brutale prive le cœur d’oxygène et cause un infarctus.'
        },
        {
          id: 'seconde_a_svt_ch5_p2_ex7',
          type: 'mcq',
          prompt: 'Pour être qualifiée d’équilibrée et saine, quelles conditions une alimentation doit-elle remplir ?',
          options: [
            'Elle doit satisfaire uniquement les besoins quantitatifs',
            'Elle doit satisfaire uniquement les besoins qualitatifs',
            'Elle doit satisfaire à la fois les besoins qualitatifs et quantitatifs de l’organisme',
            'Elle doit exclure tous les fruits et légumes'
          ],
          correctAnswerIndex: 2,
          explanation:
            'Une alimentation correcte doit apporter la quantité d’énergie appropriée et la qualité de nutriments essentiels (vitamines, minéraux, protéines, fibres).'
        },
        {
          id: 'seconde_a_svt_ch5_p2_ex8',
          type: 'mcq',
          prompt: 'Quel comportement protecteur permet de limiter le risque d’artériosclérose et d’obésité ?',
          options: [
            'Passer 12 heures par jour assis sans bouger en grignotant des sucreries',
            'Adopter une alimentation variée et équilibrée pauvre en graisses animales et pratiquer une activité physique régulière',
            'Supprimer complètement l’eau de boisson',
            'Manger exclusivement des aliments ultra-transformés'
          ],
          correctAnswerIndex: 1,
          explanation:
            'La réduction des graisses saturées et des sucres rapides, associée à un exercice régulier, prévient les dépôts lipidiques et régule la balance calorique.'
        }
      ]
    }
  ]
};
