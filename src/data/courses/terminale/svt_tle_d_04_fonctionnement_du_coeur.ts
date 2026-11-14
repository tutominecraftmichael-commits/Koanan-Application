import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const SVT_TLE_D_L04_FONCTIONNEMENT_DU_COEUR: CurriculumChapter = {
  id: "terminale_d_svt_ch05_le_fonctionnement_du_coeur",
  subjectId: "svt",
  gradeLevel: "terminale_d",
  alsoForGrades: ["terminale_c"],
  order: 4,
  title: "Le fonctionnement du cœur (Automatisme cardiaque, révolution cardiaque, régulation nerveuse et chimique)",
  summary: "Étude complète et approfondie de la physiologie cardiaque selon le programme officiel de Côte d'Ivoire : automatisme cardiaque et ultrastructure du tissu nodal (pacemaker sinusal, potentiels d'action et pré-potentiel entraîneur), phénomènes mécaniques (cardiogramme, systoles et diastoles de la révolution cardiaque) et électriques (électrocardiogramme ECG, ondes PQRST), régulation nerveuse autonome réflexe (centres bulbaire et médullaire, nerfs vagues X, nerfs orthosympathiques, baroréflexe sino-aortique des nerfs de Hering et Cyon), et régulation chimique humorale (expérience princeps d'Otto Loewi, acétylcholine, adrénaline, atropine, ergotoxine et acétylcholinestérase).",
  officialVolumeHours: 10,
  contentVersion: 2,
  source: "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC) - SVT Terminale D",
  points: [
    {
      id: "pt1_automatisme_cardiaque_tissu_nodal",
      order: 1,
      title: "L'automatisme cardiaque, le tissu nodal et l'électrophysiologie du myocarde",
      summary: "Mise en évidence expérimentale de l'automatisme cardiaque sur cœur isolé, localisation anatomique du tissu nodal (nœud sinusal pacemaker, nœud septal, faisceau de His, réseau de Purkinje), et bases ioniques du potentiel d'action nodal et myocardique.",
      conceptExplanation: "Le cœur des vertébrés possède la propriété fondamentale de se contracter de manière rythmique et spontanée sans aucune commande nerveuse extrinsèque : c'est l'automatisme cardiaque.\n\n1. Mise en évidence expérimentale de l'automatisme cardiaque :\n- Expérience de destruction des centres nerveux : Chez une grenouille décérébrée et démédullée, la cage thoracique ouverte montre que le cœur continue de battre régulièrement malgré la disparition de l'encéphale et de la moelle épinière.\n- Expérience d'isolement d'organe : Un cœur de grenouille ou de mammifère prélevé, isolé de toute innervation et de toute attache vasculaire, puis perfusé avec un liquide physiologique oxygéné et tiédi (solution de Ringer : NaCl, KCl, CaCl2, NaHCO3, glucose), continue de battre de façon autonome pendant plusieurs heures.\n- Conclusion : Le stimulus déclencheur de la contraction cardiaque prend naissance à l'intérieur même du cœur (origine myogénique / intrinsèque).\n\n2. Le siège de l'automatisme : Le tissu nodal :\nLe tissu nodal est un tissu musculaire embryonnaire non différencié, constitué de cellules myocardiques spécialisées, pauvres en myofibrilles contractiles et riches en glycogène, capables d'auto-excitation rythmique :\n- Le nœud sinusal (ou nœud sino-auriculaire de Keith et Flack) : situé dans la paroi de l'oreillette droite près de l'embouchure de la veine cave supérieure. Il possède la fréquence spontanée la plus rapide (~70 à 80 dépolarisations/min). Il impose son rythme à l'ensemble du myocarde : c'est le stimulateur cardiaque naturel ou pacemaker du cœur. Sa destruction ou cautérisation arrête définitivement les battements cardiaques.\n- Le nœud septal (ou nœud auriculo-ventriculaire d'Aschoff-Tawara) : situé au bas du septum inter-auriculaire près de la valvule tricuspide. Fréquence intrinsèque plus lente (~40 à 50 bat/min).\n- Le faisceau de His (ou faisceau auriculo-ventriculaire) : prend naissance au nœud septal, chemine le long du septum interventriculaire et se divise en deux branches droite et gauche. La section expérimentale du faisceau de His provoque la dissociation auriculo-ventriculaire : les oreillettes conservent le rythme sinusal normal rapide, tandis que les ventricules battent à un rythme idioventriculaire lent et anormal.\n- Le réseau de Purkinje : réseau de fibres ramifiées sous-endocardiques transmettant l'onde de dépolarisation à l'ensemble des cellules musculaires ventriculaires.\n\n3. Électrophysiologie comparée : Tissu nodal vs Myocarde contractile :\n- Potentiel d'action des cellules nodales (pacemaker) : Les cellules du nœud sinusal ne possèdent pas de véritable potentiel de repos stable. Dès la repolarisation achevée (-60 mV), la membrane subit une dépolarisation lente diastolique spontanée appelée pré-potentiel ou potentiel entraîneur. Ce pré-potentiel est dû à une diminution progressive de la perméabilité aux ions K+ (baisse de sortie de K+) couplée à une entrée lente d'ions Na+ (courant 'funny' If). Lorsque le seuil critique (-40 mV) est atteint, des canaux calciques voltage-dépendants s'ouvrent, provoquant une entrée massive d'ions Ca2+ responsable de la phase ascendante de dépolarisation du potentiel d'action (PA). La repolarisation est assurée par l'ouverture retardée des canaux K+ (sortie massive de K+). Ce cycle perpétuel sans temps de repos explique pourquoi le cœur ne s'arrête jamais.\n- Potentiel d'action de la cellule myocardique contractile (ventriculaire) :\n  - Phase 0 : Dépolarisation brusque et rapide due à l'entrée massive et fulgurante d'ions Na+.\n  - Phase 1 : Repolarisation initiale brève (inactivation des canaux Na+ et sortie transitoire de K+).\n  - Phase 2 : Phase de plateau prolongée (durée ~200 à 300 ms) où l'entrée lente d'ions Ca2+ équilibre la sortie d'ions K+. C'est cette entrée de Ca2+ qui déclenche la contraction musculaire.\n  - Phase 3 : Repolarisation terminale rapide due à l'inactivation des canaux Ca2+ et à la sortie massive de K+.\n  - Phase 4 : Potentiel de membrane de repos stable maintenu à -90 mV par la pompe Na+/K+ ATPase.\n- Conséquence physiologique : La période réfractaire absolue du myocarde est exceptionnellement longue (égale à la durée de la contraction mécanique). Il est donc impossible de tétaniser le muscle cardiaque (inexcitabilité périodique protectrice).",
      keyRule: "Le nœud sinusal est le pacemaker du cœur car il possède la fréquence de décharge spontanée la plus élevée. Son pré-potentiel (baisse de perméabilité K+ et entrée de Ca2+) garantit la genèse rythmique ininterrompue des battements.",
      formulas: [
        {
          name: "Trajet de conduction de l'onde d'activation cardiaque",
          formula: "\\text{Nœud sinusal (Pacemaker)} \\longrightarrow \\text{Myocarde auriculaire} \\longrightarrow \\text{Nœud septal} \\longrightarrow \\text{Faisceau de His} \\longrightarrow \\text{Réseau de Purkinje}",
          note: "Le retard physiologique au nœud septal (~0,1 s) permet aux oreillettes de se vider avant la systole ventriculaire"
        }
      ],
      workedExample: {
        title: "Interprétation des ligatures expérimentales de Stannius sur cœur de grenouille",
        statement: "On réalise les célèbres ligatures de Stannius sur un cœur isolé de grenouille : 1. Première ligature placée exactement entre le sinus veineux (contenant le nœud sinusal) et les oreillettes. 2. Deuxième ligature placée dans le sillon auriculo-ventriculaire. Préciser et expliquer les résultats observés sur les oreillettes et les ventricules.",
        methodSteps: [
          "Étape 1 : Analyser la 1ère ligature de Stannius. La ligature isole mécaniquement le sinus veineux du reste du cœur. Le sinus veineux continue de battre à son rythme rapide initial. Les oreillettes et le ventricule s'arrêtent temporairement, car ils sont privés de l'influx excitateur sinusal.",
          "Étape 2 : Analyser la reprise spontanée. Après quelques minutes, les oreillettes et le ventricule recommencent à battre mais à un rythme plus lent, sous le contrôle du centre secondaire (nœud septal / ganglion de Bidder).",
          "Étape 3 : Analyser la 2ème ligature de Stannius. La ligature entre oreillettes et ventricule isole le ventricule. Les oreillettes continuent de battre au rythme du centre septal, tandis que le ventricule s'arrête puis reprend à un rythme idioventriculaire encore plus lent.",
          "Étape 4 : Déduire la hiérarchie du tissu nodal. Il existe un gradient décroissant d'automatisme : Sinus veineux (sinusal) > Oreillettes (septal) > Ventricule (Purkinje)."
        ],
        conclusion: "Le nœud sinusal impose son rythme au reste du cœur car sa fréquence d'auto-excitation est la plus rapide de tout le tissu nodal."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Hiérarchie anatomique et fonctionnelle du tissu nodal cardiaque",
        caption: "Le nœud sinusal (Keith & Flack) génère l'onde d'excitation transmise au nœud septal, au faisceau de His et au réseau de Purkinje.",
        svgContent: `<svg viewBox="0 0 620 350" width="100%" style="max-width:620px;height:auto" class="text-slate-700 dark:text-slate-200" role="img" aria-label="Tissu nodal et automatisme cardiaque">
  <rect x="10" y="10" width="600" height="330" rx="16" fill="currentColor" fill-opacity="0.02" stroke="#CBD5E1" stroke-width="1.5" />
  <path d="M 230 85 C 230 45, 160 45, 150 85 C 130 145, 220 225, 310 295 C 400 225, 490 145, 470 85 C 460 45, 390 45, 390 85 C 390 135, 310 175, 230 85 Z" fill="#EF4444" fill-opacity="0.12" stroke="#DC2626" stroke-width="2.5" />
  <path d="M 310 105 L 310 290" stroke="#991B1B" stroke-width="8" stroke-linecap="round" />
  <ellipse cx="230" cy="110" rx="35" ry="25" fill="#3B82F6" fill-opacity="0.25" stroke="#2563EB" stroke-width="1.5" />
  <text x="230" y="107" font-size="11" font-weight="800" text-anchor="middle" fill="#1D4ED8">Oreillette Droite</text>
  <text x="230" y="120" font-size="9" text-anchor="middle" fill="#1E40AF">(Sang désoxygéné)</text>
  <ellipse cx="390" cy="110" rx="35" ry="25" fill="#EF4444" fill-opacity="0.25" stroke="#DC2626" stroke-width="1.5" />
  <text x="390" y="107" font-size="11" font-weight="800" text-anchor="middle" fill="#B91C1C">Oreillette Gauche</text>
  <text x="390" y="120" font-size="9" text-anchor="middle" fill="#991B1B">(Sang oxygéné)</text>
  <path d="M 205 155 Q 230 235 300 265 Q 295 155 205 155 Z" fill="#3B82F6" fill-opacity="0.18" stroke="#2563EB" stroke-width="1.5" />
  <text x="250" y="205" font-size="12" font-weight="800" text-anchor="middle" fill="#1D4ED8">Ventricule Droit</text>
  <path d="M 415 155 Q 390 235 320 265 Q 325 155 415 155 Z" fill="#EF4444" fill-opacity="0.2" stroke="#DC2626" stroke-width="2" />
  <text x="370" y="205" font-size="12" font-weight="800" text-anchor="middle" fill="#B91C1C">Ventricule Gauche</text>
  <text x="370" y="219" font-size="9" text-anchor="middle" fill="#991B1B">(Paroi épaisse)</text>
  <circle cx="215" cy="95" r="9" fill="#F59E0B" stroke="#B45309" stroke-width="2" />
  <circle cx="215" cy="95" r="4" fill="#FEF3C7" />
  <path d="M 205 92 L 155 65" stroke="#D97706" stroke-width="1.8" />
  <rect x="25" y="42" width="135" height="38" rx="8" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1.5" />
  <text x="92" y="57" font-size="11" font-weight="800" text-anchor="middle" fill="#B45309">1. NŒUD SINUSAL</text>
  <text x="92" y="71" font-size="9.5" text-anchor="middle" fill="#92400E">Pacemaker (70-80/min)</text>
  <path d="M 220 102 Q 260 115 290 130" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="3,3" fill="none" />
  <circle cx="295" cy="135" r="8" fill="#F59E0B" stroke="#B45309" stroke-width="2" />
  <circle cx="295" cy="135" r="3.5" fill="#FEF3C7" />
  <path d="M 285 135 L 155 135" stroke="#D97706" stroke-width="1.8" />
  <rect x="25" y="117" width="135" height="38" rx="8" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1.5" />
  <text x="92" y="132" font-size="11" font-weight="800" text-anchor="middle" fill="#B45309">2. NŒUD SEPTAL</text>
  <text x="92" y="146" font-size="9.5" text-anchor="middle" fill="#92400E">Relais AV (40-50/min)</text>
  <path d="M 302 140 L 310 175" stroke="#F59E0B" stroke-width="4.5" fill="none" />
  <path d="M 310 175 L 295 235" stroke="#F59E0B" stroke-width="3" fill="none" />
  <path d="M 310 175 L 325 235" stroke="#F59E0B" stroke-width="3" fill="none" />
  <path d="M 312 180 L 465 180" stroke="#D97706" stroke-width="1.8" />
  <rect x="460" y="162" width="140" height="38" rx="8" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1.5" />
  <text x="530" y="177" font-size="11" font-weight="800" text-anchor="middle" fill="#B45309">3. FAISCEAU DE HIS</text>
  <text x="530" y="191" font-size="9.5" text-anchor="middle" fill="#92400E">Tronc &amp; branches (35/min)</text>
  <path d="M 295 235 Q 255 250 235 215" stroke="#F59E0B" stroke-width="2" fill="none" />
  <path d="M 295 235 Q 275 260 255 240" stroke="#F59E0B" stroke-width="1.8" fill="none" />
  <path d="M 325 235 Q 365 250 385 215" stroke="#F59E0B" stroke-width="2" fill="none" />
  <path d="M 325 235 Q 345 260 365 240" stroke="#F59E0B" stroke-width="1.8" fill="none" />
  <path d="M 380 230 L 465 245" stroke="#D97706" stroke-width="1.8" />
  <rect x="460" y="230" width="140" height="38" rx="8" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1.5" />
  <text x="530" y="245" font-size="11" font-weight="800" text-anchor="middle" fill="#B45309">4. PURKINJE</text>
  <text x="530" y="259" font-size="9.5" text-anchor="middle" fill="#92400E">Myocarde ventriculaire</text>
  <text x="310" y="325" font-size="11" font-weight="700" text-anchor="middle" fill="currentColor">Trajet de l'excitation : Nœud Sinusal → Nœud Septal → Faisceau de His → Réseau de Purkinje</text>
</svg>`,
        tableData: {
          headers: ["Structure nodale", "Localisation anatomique", "Fréquence spontanée", "Rôle physiologique"],
          rows: [
            ["Nœud sinusal (Keith & Flack)", "Paroi supérieure oreillette droite", "70 - 80 dépolarisations/min", "Pacemaker primaire, initie la contraction des oreillettes"],
            ["Nœud septal (Aschoff-Tawara)", "Bas du septum inter-auriculaire", "40 - 50 dépolarisations/min", "Relais auriculo-ventriculaire, temporisation du flux sanguin"],
            ["Faisceau de His", "Septum interventriculaire", "30 - 40 dépolarisations/min", "Conduction rapide vers les ventricules droit et gauche"],
            ["Réseau de Purkinje", "Parois musculaires ventriculaires", "20 - 30 dépolarisations/min", "Déclenchement synchronisé de la systole ventriculaire"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c05_p1_ex1",
          type: "mcq",
          prompt: "Quelle structure cardiaque est qualifiée de 'pacemaker naturel' du cœur en raison de son automatisme spontané le plus rapide ?",
          options: [
            "Le nœud sinusal (ou sino-auriculaire)",
            "Le nœud septal (ou auriculo-ventriculaire)",
            "Le faisceau de His",
            "Le réseau de Purkinje"
          ],
          correctAnswerIndex: 0,
          explanation: "Le nœud sinusal possède la fréquence de dépolarisation spontanée la plus élevée (70 à 80 bat/min chez l'adulte au repos), imposant ainsi sa cadence à l'ensemble du tissu nodal et du myocarde."
        },
        {
          id: "tle_d_svt_c05_p1_ex2",
          type: "mcq",
          prompt: "Sur le plan ionique, à quel phénomène est principalement dû le pré-potentiel (potentiel entraîneur) des cellules du nœud sinusal ?",
          options: [
            "Une diminution de la perméabilité membranaire aux ions K+ accompagnée d'une entrée lente d'ions",
            "Une sortie massive et brutale d'ions Ca2+",
            "Une pompe sodium-potassium bloquée en permanence",
            "Une entrée exclusive et massive d'ions chlorure Cl-"
          ],
          correctAnswerIndex: 0,
          explanation: "Le pré-potentiel correspond à une dépolarisation diastolique lente causée par une baisse progressive de la sortie d'ions K+, couplée à un courant entrant dépolarisant, conduisant au seuil de déclenchement du potentiel d'action."
        },
        {
          id: "tle_d_svt_c05_p1_ex3",
          type: "mcq",
          prompt: "Quelle phase caractérise spécifiquement le potentiel d'action d'une cellule musculaire contractile ventriculaire, absente dans les fibres squelettiques rapides ?",
          options: [
            "Une phase de plateau prolongée liée à l'entrée d'ions Ca2+",
            "Une absence totale de repolarisation",
            "Une dépolarisation spontanée sans seuil d'excitation",
            "Un potentiel d'action durant moins de 1 milliseconde"
          ],
          correctAnswerIndex: 0,
          explanation: "Le potentiel d'action ventriculaire comporte une phase de plateau (phase 2) durant 200 à 300 ms, entretenue par un influx entrant d'ions calcium Ca2+, indispensable à la contraction mécanique prolongée."
        },
        {
          id: "tle_d_svt_c05_p1_ex4",
          type: "mcq",
          prompt: "Que provoque la section expérimentale du faisceau de His sur un cœur isolé et perfusé de mammifère ?",
          options: [
            "Un rythme normal des oreillettes et un rythme anormalement ralenti des ventricules (dissociation auriculo-ventriculaire)",
            "L'arrêt immédiat et simultané des oreillettes et des ventricules",
            "L'accélération brutale et incontrôlée des ventricules (tachycardie ventriculaire)",
            "La contraction simultanée et inversée du cœur"
          ],
          correctAnswerIndex: 0,
          explanation: "La section du faisceau de His interrompt la transmission de l'influx sinusal vers les ventricules. Les oreillettes continuent de battre au rythme sinusal rapide (~75 bat/min), alors que les ventricules battent au rythme idioventriculaire lent (~30 bat/min)."
        },
        {
          id: "tle_d_svt_c05_p1_ex5",
          type: "mcq",
          prompt: "Pourquoi est-il physiologiquement impossible d'obtenir un tétanos (contraction continue et soutenue) sur le muscle cardiaque ?",
          options: [
            "Parce que la période réfractaire absolue du myocarde est aussi longue que la secousse contractile",
            "Parce que le cœur ne contient pas de filaments d'actine et de myosine",
            "Parce que le sang circulant élimine instantanément l'acide lactique",
            "Parce que le tissu nodal ne peut pas émettre plus de 10 influx par heure"
          ],
          correctAnswerIndex: 0,
          explanation: "La période réfractaire absolue du myocarde dure environ 250 à 300 ms, ce qui couvre la quasi-totalité de la phase de contraction. Une stimulation survenant pendant cette période ne produit aucun effet, protégeant le cœur contre la tétanisation mortelle."
        },
        {
          id: "tle_d_svt_c05_p1_ex6",
          type: "mcq",
          prompt: "Quel liquide physiologique est classiquement utilisé lors des dissections pour maintenir en vie et perfuser un cœur isolé de batracien ?",
          options: [
            "La solution de Ringer",
            "L'eau distillée pure",
            "Une solution de formol à 10%",
            "Le sérum glucosé pur sans sels minéraux"
          ],
          correctAnswerIndex: 0,
          explanation: "La solution de Ringer apporte les proportions ioniques isotoniques physiologiques (Na+, K+, Ca2+, HCO3-) nécessaires au maintien de l'excitabilité et de l'automatisme cardiaque."
        }
      ]
    },
    {
      id: "pt2_phenomenes_mecaniques_electriques_cardiogramme_ecg",
      order: 2,
      title: "Phénomènes mécaniques (Révolution cardiaque) et électriques (Électrocardiogramme ECG)",
      summary: "Enregistrement graphique de la contraction cardiaque (cardiogramme à balancier, phases de la révolution cardiaque) et analyse médicale des ondes de l'électrocardiogramme (P, complexe QRS, T) corrélées aux événements mécaniques.",
      conceptExplanation: "Le fonctionnement du cœur associe étroitement des manifestations mécaniques de pompage sanguin (systoles et diastoles) et des manifestations bioélectriques de propagation d'ondes de dépolarisation.\n\n1. Enregistrement mécanique : Le cardiogramme à balancier :\nLe cardiographe à balancier comprend un stylet inscripteur relié à la pointe du cœur par un fil inextensible et enregistrant sur un cylindre tournant. Le tracé obtenu présente deux ondulations successives d'amplitudes inégales :\n- La première courbe ABC de faible amplitude : correspond à l'activité auriculaire.\n  - Branche ascendante AB : contraction des oreillettes ou systole auriculaire (durée : ~0,1 s). Elle chasse le sang résiduel dans les ventricules.\n  - Branche descendante BC : relâchement des oreillettes ou diastole auriculaire (durée : ~0,7 s).\n- La deuxième courbe CDE de grande amplitude : correspond à l'activité ventriculaire puissante.\n  - Branche ascendante CD : contraction vigoureuse des ventricules ou systole ventriculaire (durée : ~0,3 s). La pression ventriculaire dépasse la pression artérielle, ouvrant les valvules sigmoïdes et éjectant le sang dans l'aorte et l'artère pulmonaire.\n  - Branche descendante DE : relâchement général du cœur ou diastole générale (durée : ~0,4 s). Les ventricules et les oreillettes sont relâchés, les valvules auriculo-ventriculaires s'ouvrent, permettant le remplissage passif des cavités.\n- Durée totale d'une révolution cardiaque : $0,1 + 0,3 + 0,4 = 0,8\\text{ s}$ chez l'homme sain au repos, soit une fréquence cardiaque de $\\frac{60}{0,8} = 75\\text{ battements/minute}$.\n\n2. Phénomènes électriques : L'électrocardiogramme (ECG) :\nL'électrocardiographe capte les courants d'action propagés dans l'organisme à l'aide d'électrodes cutanées (dérivations frontales et précordiales). Le tracé ECG normal présente une série d'accidents électriques standardisés notés P-Q-R-S-T :\n- L'onde P : onde de dépolarisation des oreillettes. Elle précède immédiatement la systole auriculaire mécanique (~0,02 s avant le pic AB).\n- Le segment ou intervalle PQ (ou PR) : traduit le temps de propagation de l'influx électrique des oreillettes aux ventricules à travers le nœud septal et le faisceau de His (durée normale : 0,12 à 0,20 s).\n- Le complexe d'ondes QRS : dépolarisation rapide, puissante et synchrone des ventricules. Il précède immédiatement la contraction mécanique des ventricules (systole ventriculaire CD).\n- L'onde T : onde de repolarisation des ventricules. Elle annonce et accompagne la relaxation ventriculaire et la diastole générale DE.\n\n3. Corrélation stricte entre phénomènes électriques et mécaniques :\nL'événement électrique (dépolarisation membranaire) est la cause causale déclenchante obligatoire de l'événement mécanique (contraction musculaire). L'onde P précède la systole auriculaire, le complexe QRS précède la systole ventriculaire, et l'onde T précède la diastole générale.",
      keyRule: "La révolution cardiaque dure environ 0,8 s (systole auriculaire 0,1 s, systole ventriculaire 0,3 s, diastole générale 0,4 s). Sur l'ECG, l'onde P correspond à la dépolarisation auriculaire, le complexe QRS à la dépolarisation ventriculaire, et l'onde T à la repolarisation ventriculaire.",
      formulas: [
        {
          name: "Bilan temporel de la révolution cardiaque chez l'adulte au repos",
          formula: "T_{\\text{cycle}} = t_{\\text{syst. auriculaire}} (0,1\\text{ s}) + t_{\\text{syst. ventriculaire}} (0,3\\text{ s}) + t_{\\text{diast. générale}} (0,4\\text{ s}) = 0,8\\text{ s}",
          note: "Fréquence cardiaque au repos f = 60 / T_cycle ≈ 75 battements/min"
        }
      ],
      workedExample: {
        title: "Calcul de la fréquence cardiaque et analyse d'une tachycardie sur tracé ECG",
        statement: "Sur un tracé électrocardiographique enregistré à la vitesse standard de défilement du papier de 25 mm/s, la distance séparant deux sommets consécutifs d'ondes R (intervalle R-R) mesure 15 mm. 1. Calculer la durée d'un cycle cardiaque. 2. En déduire la fréquence cardiaque du patient. 3. Qualifier l'état cardiaque du patient.",
        methodSteps: [
          "Étape 1 : Calculer la durée du cycle cardiaque T. Vitesse v = 25 mm/s. Durée T = distance / vitesse = 15 mm / 25 mm/s = 0,60 s.",
          "Étape 2 : Calculer la fréquence cardiaque en battements par minute (bpm). FC = 60 / T = 60 / 0,60 = 100 battements/minute.",
          "Étape 3 : Qualifier le rythme. La fréquence de repos normale se situe entre 60 et 80 bpm. Une fréquence atteignant 100 bpm au repos correspond à une tachycardie modérée."
        ],
        conclusion: "Durée du cycle = 0,60 s ; Fréquence = 100 bpm ; Il s'agit d'une tachycardie."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Correspondance temporelle entre l'Électrocardiogramme (ECG) et le Cardiogramme mécanique",
        caption: "L'onde P précède la systole auriculaire (0,10 s), le complexe QRS précède la systole ventriculaire (0,30 s), et l'onde T annonce la diastole générale (0,40 s).",
        svgContent: `<svg viewBox="0 0 620 300" width="100%" style="max-width:620px;height:auto" class="text-slate-700 dark:text-slate-200" role="img" aria-label="ECG et cycle cardiaque">
  <rect x="10" y="10" width="600" height="280" rx="14" fill="currentColor" fill-opacity="0.02" stroke="#CBD5E1" stroke-width="1.5" />
  <text x="30" y="34" font-size="11" font-weight="800" fill="#0284C7">1. ÉLECTROCARDIOGRAMME (Phénomènes bioélectriques)</text>
  <line x1="40" y1="85" x2="580" y2="85" stroke="#94A3B8" stroke-width="1" stroke-dasharray="2,2" />
  <path d="M 40 85 L 90 85" stroke="#0284C7" stroke-width="2.5" fill="none" />
  <path d="M 90 85 Q 115 60 140 85" stroke="#0284C7" stroke-width="2.5" fill="none" />
  <text x="115" y="55" font-size="12" font-weight="900" text-anchor="middle" fill="#0284C7">P</text>
  <path d="M 140 85 L 175 85" stroke="#0284C7" stroke-width="2.5" fill="none" />
  <path d="M 175 85 L 185 97" stroke="#0284C7" stroke-width="2.5" fill="none" />
  <text x="183" y="110" font-size="11" font-weight="800" text-anchor="middle" fill="#0284C7">Q</text>
  <path d="M 185 97 L 205 24" stroke="#0284C7" stroke-width="2.8" fill="none" />
  <text x="205" y="20" font-size="13" font-weight="900" text-anchor="middle" fill="#0284C7">R</text>
  <path d="M 205 24 L 225 105" stroke="#0284C7" stroke-width="2.8" fill="none" />
  <text x="227" y="117" font-size="11" font-weight="800" text-anchor="middle" fill="#0284C7">S</text>
  <path d="M 225 105 L 235 85 L 275 85" stroke="#0284C7" stroke-width="2.5" fill="none" />
  <path d="M 275 85 Q 315 50 355 85" stroke="#0284C7" stroke-width="2.5" fill="none" />
  <text x="315" y="45" font-size="12" font-weight="900" text-anchor="middle" fill="#0284C7">T</text>
  <path d="M 355 85 L 580 85" stroke="#0284C7" stroke-width="2.5" fill="none" />
  <line x1="30" y1="135" x2="590" y2="135" stroke="#E2E8F0" stroke-width="1.5" />
  <text x="30" y="155" font-size="11" font-weight="800" fill="#059669">2. RÉVOLUTION CARDIAQUE MÉCANIQUE (Cycle complet T = 0,80 s)</text>
  <rect x="80" y="170" width="80" height="40" rx="6" fill="#3B82F6" fill-opacity="0.25" stroke="#2563EB" stroke-width="1.8" />
  <text x="120" y="187" font-size="11" font-weight="800" text-anchor="middle" fill="#1D4ED8">Phase AB</text>
  <text x="120" y="201" font-size="9" text-anchor="middle" fill="#1E40AF">Systole auric. (0,1s)</text>
  <line x1="115" y1="90" x2="115" y2="165" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="3,3" />
  <rect x="165" y="170" width="180" height="40" rx="6" fill="#EF4444" fill-opacity="0.22" stroke="#DC2626" stroke-width="1.8" />
  <text x="255" y="187" font-size="11" font-weight="800" text-anchor="middle" fill="#B91C1C">Phase CD (Systole ventriculaire)</text>
  <text x="255" y="201" font-size="9" text-anchor="middle" fill="#991B1B">Contraction ventriculaire (0,30 s)</text>
  <line x1="205" y1="110" x2="205" y2="165" stroke="#DC2626" stroke-width="1.5" stroke-dasharray="3,3" />
  <rect x="350" y="170" width="220" height="40" rx="6" fill="#10B981" fill-opacity="0.22" stroke="#059669" stroke-width="1.8" />
  <text x="460" y="187" font-size="11" font-weight="800" text-anchor="middle" fill="#047857">Phase DE (Diastole générale)</text>
  <text x="460" y="201" font-size="9" text-anchor="middle" fill="#065F46">Relâchement général du cœur (0,40 s)</text>
  <line x1="355" y1="90" x2="355" y2="165" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,3" />
  <rect x="80" y="222" width="490" height="45" rx="8" fill="currentColor" fill-opacity="0.04" stroke="#CBD5E1" stroke-width="1" />
  <text x="325" y="239" font-size="11" font-weight="700" text-anchor="middle" fill="currentColor">Bilan temporel : 1 cycle = 0,10 s + 0,30 s + 0,40 s = 0,80 s</text>
  <text x="325" y="255" font-size="10" font-weight="600" text-anchor="middle" fill="#64748B">Fréquence cardiaque normale au repos = 60 / 0,80 = 75 bpm</text>
</svg>`,
        tableData: {
          headers: ["Onde ECG", "Signification bioélectrique", "Phase mécanique correspondante", "Durée physiologique"],
          rows: [
            ["Onde P", "Dépolarisation des deux oreillettes", "Précède la systole auriculaire (AB)", "~0,08 à 0,10 s"],
            ["Intervalle PQ (PR)", "Conduction auriculo-ventriculaire (nœud septal)", "Remplissage ventriculaire actif terminal", "~0,12 à 0,20 s"],
            ["Complexe QRS", "Dépolarisation massive des ventricules", "Précède la systole ventriculaire (CD)", "~0,08 à 0,10 s"],
            ["Segment ST & Onde T", "Repolarisation des ventricules", "Fin de systole et début de diastole générale (DE)", "~0,16 à 0,25 s"],
            ["Silence électrique TP", "Repolarisation complète au repos", "Diastole générale (remplissage passif du cœur)", "~0,20 à 0,30 s"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c05_p2_ex1",
          type: "mcq",
          prompt: "Sur un cardiogramme mécanique obtenu au cardiographe à balancier, que représente la phase notée AB ?",
          options: [
            "La contraction des oreillettes ou systole auriculaire",
            "La contraction puissante des ventricules ou systole ventriculaire",
            "Le relâchement général du cœur ou diastole générale",
            "Le temps de latence avant l'arrivée du sang veineux"
          ],
          correctAnswerIndex: 0,
          explanation: "La branche ascendante AB de la première petite ondulation correspond à la systole auriculaire (0,1 s), tandis que CD représente la systole ventriculaire (0,3 s) et DE la diastole générale (0,4 s)."
        },
        {
          id: "tle_d_svt_c05_p2_ex2",
          type: "mcq",
          prompt: "Quelle est la durée moyenne d'une révolution cardiaque complète chez un être humain au repos ayant un rythme de 75 battements par minute ?",
          options: [
            "0,8 seconde",
            "0,3 seconde",
            "1,5 seconde",
            "0,08 seconde"
          ],
          correctAnswerIndex: 0,
          explanation: "La révolution cardiaque dure 60 s / 75 = 0,8 s, décomposée en 0,1 s de systole auriculaire, 0,3 s de systole ventriculaire et 0,4 s de diastole générale."
        },
        {
          id: "tle_d_svt_c05_p2_ex3",
          type: "mcq",
          prompt: "À quel phénomène bioélectrique correspond l'onde P observée sur un électrocardiogramme (ECG) normal ?",
          options: [
            "À la dépolarisation des oreillettes",
            "À la repolarisation des oreillettes",
            "À la dépolarisation des ventricules",
            "À la repolarisation des ventricules"
          ],
          correctAnswerIndex: 0,
          explanation: "L'onde P traduit la dépolarisation électrique des oreillettes initiée par le nœud sinusal. Elle précède immédiatement la systole auriculaire mécanique."
        },
        {
          id: "tle_d_svt_c05_p2_ex4",
          type: "mcq",
          prompt: "Sur l'électrocardiogramme, quel accident électrique précède immédiatement la systole ventriculaire mécanique ?",
          options: [
            "Le complexe d'ondes QRS",
            "L'onde T",
            "L'onde P",
            "L'intervalle TP"
          ],
          correctAnswerIndex: 0,
          explanation: "Le complexe d'ondes QRS correspond à la dépolarisation rapide des ventricules, qui déclenche la systole ventriculaire mécanique (expulsion du sang dans les artères)."
        },
        {
          id: "tle_d_svt_c05_p2_ex5",
          type: "mcq",
          prompt: "Que traduit une prolongation anormale de l'intervalle PQ (ou PR) au-delà de 0,20 seconde sur un ECG ?",
          options: [
            "Un ralentissement de la conduction de l'influx entre oreillettes et ventricules (bloc auriculo-ventriculaire BAV)",
            "Une paralysie complète des ventricules",
            "Une destruction complète de l'aorte thoracique",
            "Une contraction tétanique du réseau de Purkinje"
          ],
          correctAnswerIndex: 0,
          explanation: "L'intervalle PQ mesure le temps de traversée de l'onde de dépolarisation depuis les oreillettes jusqu'aux ventricules à travers le nœud d'Aschoff-Tawara. Son allongement signe un bloc de conduction auriculo-ventriculaire."
        },
        {
          id: "tle_d_svt_c05_p2_ex6",
          type: "mcq",
          prompt: "L'onde T de l'électrocardiogramme correspond physiologiquement à :",
          options: [
            "La repolarisation des ventricules qui entraîne la diastole générale",
            "La dépolarisation des oreillettes",
            "La contraction maximale du septum interventriculaire",
            "L'ouverture forcée des valvules tricuspides"
          ],
          correctAnswerIndex: 0,
          explanation: "L'onde T traduit la repolarisation électrique des ventricules. Elle permet la relaxation du myocarde ventriculaire et coïncide avec le début de la diastole générale."
        }
      ]
    },
    {
      id: "pt3_regulation_nerveuse_rythme_cardiaque_baroreflexe",
      order: 3,
      title: "Régulation nerveuse du cœur : Nerfs autonomes et baroréflexe sino-aortique",
      summary: "Action antagoniste des systèmes parasympathique et orthosympathique, expériences de stimulation et section des nerfs vagues et sympathiques, et mécanisme réflexe de régulation de la pression artérielle par les nerfs de Hering et Cyon.",
      conceptExplanation: "Bien qu'automatique, l'activité cardiaque est en permanence modulée et régulée par le système nerveux végétatif autonome pour adapter le débit sanguin aux besoins de l'organisme et stabiliser la pression artérielle.\n\n1. Les nerfs moteurs cardiaques : L'innervation double antagoniste :\n- Le système parasympathique (nerfs vagues, nerfs pneumogastriques ou nerfs X) :\n  - Origine : Centre cardio-modérateur situé dans le bulbe rachidien.\n  - Trajet et terminaison : Les fibres préganglionnaires cheminent dans le nerf X et font synapse avec un neurone post-ganglionnaire situé dans la paroi cardiaque même (près du nœud sinusal et du nœud septal).\n  - Effets expérimentaux :\n    - La stimulation électrique du nerf X entraîne un ralentissement immédiat des battements (bradycardie) ou un arrêt temporaire du cœur en diastole (relâchement). Si la stimulation est maintenue, le cœur finit par se remettre à battre lentement puis reprend un rythme normal : c'est le phénomène d'échappement vagal.\n    - La section bilatérale des nerfs X entraîne une augmentation immédiate et durable du rythme cardiaque (tachycardie), prouvant que le parasympathique exerce un frein permanent (tonus cardio-modérateur) sur le nœud sinusal au repos.\n- Le système orthosympathique (nerfs sympathiques cardiaques) :\n  - Origine : Centre cardio-accélérateur situé dans la corne latérale de la moelle épinière cervico-dorsale.\n  - Trajet : Emprunte la chaîne ganglionnaire paravertébrale (ganglion stellaire) avant d'innerver le nœud sinusal, le nœud septal et l'ensemble de la masse musculaire ventriculaire.\n  - Effets expérimentaux :\n    - La stimulation des fibres orthosympathiques provoque une accélération de la fréquence cardiaque (tachycardie) et une augmentation de la force contractile du myocarde (effet inotrope positif).\n    - La section des nerfs orthosympathiques entraîne un léger ralentissement de la fréquence cardiaque (bradycardie).\n\n2. Les nerfs sensitifs cardiaques : Les barorécepteurs et les nerfs sino-aortiques :\n- Localisation des récepteurs : Des récepteurs sensibles à l'étirement mécanique de la paroi artérielle causé par la pression sanguine (barorécepteurs) sont situés dans deux zones stratégiques :\n  - Le sinus carotidien (à la bifurcation de l'artère carotide interne et externe).\n  - La crosse aortique (courbure de l'aorte à la sortie du ventricule gauche).\n- Les nerfs afférents sensitifs centripètes :\n  - Le nerf de Hering : naît des barorécepteurs du sinus carotidien et rejoint le bulbe rachidien (via le nerf glosso-pharyngien IX).\n  - Le nerf de Ludwig-Cyon (ou nerf aortique) : naît des barorécepteurs de la crosse aortique et rejoint le bulbe rachidien (via le nerf vague X).\n- Expériences de section et stimulation des bouts :\n  - Section des nerfs sino-aortiques (Hering et Cyon) : Entraîne une accélération immédiate de la fréquence cardiaque (tachycardie) et une hypertension artérielle sévère. Cela prouve que ces nerfs envoient en permanence des influx freinateurs vers les centres bulbaires.\n  - Excitation du bout périphérique (côté organe/artère) : Aucun effet sur le rythme cardiaque (prouve que ces nerfs ne sont pas des nerfs moteurs efférents).\n  - Excitation du bout central (côté centre nerveux/bulbe) : Entraîne un ralentissement immédiat du rythme cardiaque (bradycardie) et une chute de la pression artérielle (hypotension). Cela démontre qu'ils transmettent des influx sensitifs centripètes vers le bulbe rachidien.\n\n3. Le mécanisme réflexe régulateur de la pression artérielle (Le baroréflexe) :\n- Cas d'une élévation de la pression artérielle (hypertension) :\n  1. L'augmentation de pression étire la paroi du sinus carotidien et de la crosse aortique, stimulant fortement les barorécepteurs.\n  2. Les barorécepteurs émettent des trains de potentiels d'action de fréquence élevée véhiculés par les nerfs sensitifs de Hering et de Cyon jusqu'au centre vasomoteur du bulbe rachidien.\n  3. Au niveau du bulbe, ces influx stimulent le centre cardio-modérateur (noyau moteur dorsal du nerf vague) et inhibent simultanément le centre cardio-accélérateur médullaire.\n  4. Le centre cardio-modérateur envoie une salve intense d'influx efférents par les nerfs vagues X.\n  5. La libération d'acétylcholine sur le nœud sinusal ralentit la cadence (bradycardie), diminuant le débit cardiaque et ramenant la pression artérielle à sa valeur de consigne normale.\n- Cas d'une baisse de la pression artérielle (hypotension, hémorragie) : Mécanisme inverse. La baisse de stimulation des barorécepteurs lève l'inhibition bulbaire sur la moelle épinière, activant l'orthosympathique -> tachycardie et vasoconstriction pour remonter la pression.",
      keyRule: "Le nerf parasympathique (nerf X) est cardio-modérateur ; le nerf orthosympathique est cardio-accélérateur. Les nerfs de Hering et Cyon sont des nerfs sensitifs centripètes qui activent le centre cardio-modérateur bulbaire en cas de hausse de pression artérielle.",
      formulas: [
        {
          name: "Boucle réflexe cardio-vasculaire modératrice",
          formula: "\\text{Pression } \\uparrow \\implies \\text{Barorécepteurs} \\xrightarrow{\\text{Nerfs Hering/Cyon}} \\text{Bulbe rachidien (modérateur)} \\xrightarrow{\\text{Nerf X (parasympathique)}} \\text{Cœur (Bradycardie)} \\implies \\text{Pression } \\downarrow",
          note: "Rétroaction négative maintenant l'homéostasie tensionnelle"
        }
      ],
      workedExample: {
        title: "Interprétation de l'effet des sections et stimulations sur les nerfs X et de Cyon chez le mammifère",
        statement: "Chez un chien anesthésié, on sectionne le nerf de Cyon droit et gauche. On constate une élévation brutale de la pression artérielle et une tachycardie. On stimule ensuite électriquement le bout central du nerf de Cyon sectionné, puis le bout périphérique. Interpréter rigoureusement ces résultats.",
        methodSteps: [
          "Étape 1 : Interpréter la section des nerfs de Cyon. L'augmentation du rythme et de la pression prouve qu'à l'état physiologique normal, les nerfs de Cyon exercent une action modératrice continue en transmettant des messages freinateurs.",
          "Étape 2 : Interpréter la stimulation du bout périphérique. Aucune réponse n'est observée, car les influx nerveux ne se propagent pas de manière centrifuge vers les artères ; le nerf de Cyon ne contient pas de fibres motrices vers la paroi artérielle.",
          "Étape 3 : Interpréter la stimulation du bout central. Le ralentissement cardiaque obtenu montre que l'influx gagne le bulbe rachidien de manière centripète (sensitif) et y stimule le centre cardio-modérateur bulbaire qui active le nerf X."
        ],
        conclusion: "Le nerf de Cyon est un nerf sensitif centripète conduisant les messages barosensibles au bulbe rachidien pour freiner le cœur via le nerf pneumogastrique X."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Innervation antagoniste et boucle de régulation réflexe du cœur",
        tableData: {
          headers: ["Type de nerf", "Nom du nerf", "Origine centrale", "Nature de l'influx", "Effet de la stimulation"],
          rows: [
            ["Moteur modérateur", "Nerf pneumogastrique (X ou vague)", "Bulbe rachidien (noyau dorsal)", "Centrifuge efférent", "Bradycardie immédiate ou arrêt en diastole (échappement)"],
            ["Moteur accélérateur", "Nerf orthosympathique cardiaque", "Moelle épinière (cervico-dorsale)", "Centrifuge efférent", "Tachycardie et augmentation de la contractilité"],
            ["Sensitif sino-aortique", "Nerf de Hering", "Barorécepteurs du sinus carotidien", "Centripète afférent", "Bout central : bradycardie ; Bout périphérique : sans effet"],
            ["Sensitif sino-aortique", "Nerf de Ludwig-Cyon", "Barorécepteurs de la crosse aortique", "Centripète afférent", "Bout central : bradycardie ; Bout périphérique : sans effet"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c05_p3_ex1",
          type: "mcq",
          prompt: "Quel effet observe-t-on immédiatement après la section bilatérale des nerfs pneumogastriques (nerfs X) chez un mammifère ?",
          options: [
            "Une accélération marquée et durable du rythme cardiaque (tachycardie)",
            "Un arrêt définitif du cœur en diastole",
            "Un ralentissement extrême du cœur (bradycardie)",
            "Une abolition complète de l'automatisme cardiaque"
          ],
          correctAnswerIndex: 0,
          explanation: "Au repos, les nerfs pneumogastriques X exercent un tonus cardio-modérateur permanent. Leur section lève ce freinage, ce qui provoque une tachycardie immédiate."
        },
        {
          id: "tle_d_svt_c05_p3_ex2",
          type: "mcq",
          prompt: "Où se situe le centre nerveux cardio-modérateur dans l'encéphale ?",
          options: [
            "Dans le bulbe rachidien",
            "Dans la moelle épinière lombo-sacrée",
            "Dans le cervelet",
            "Dans le cortex préfrontal moteur"
          ],
          correctAnswerIndex: 0,
          explanation: "Le centre cardio-modérateur, d'où émergent les fibres du nerf pneumogastrique X, est situé dans le bulbe rachidien. Le centre cardio-accélérateur est situé dans la moelle épinière cervico-dorsale."
        },
        {
          id: "tle_d_svt_c05_p3_ex3",
          type: "mcq",
          prompt: "Quelle est la nature physiologique des nerfs de Hering et de Cyon ?",
          options: [
            "Ce sont des nerfs sensitifs afférents reliant les barorécepteurs artériels au bulbe rachidien",
            "Ce sont des nerfs moteurs efférents contractant directement le myocarde ventriculaire",
            "Ce sont des faisceaux de tissu nodal situés dans le septum interventriculaire",
            "Ce sont des vaisseaux lymphatiques évacuant les toxines cardiaques"
          ],
          correctAnswerIndex: 0,
          explanation: "Les nerfs de Hering (sinus carotidien) et de Cyon (crosse aortique) sont des nerfs sensitifs centripètes qui transmettent les variations de pression artérielle au centre bulbaire."
        },
        {
          id: "tle_d_svt_c05_p3_ex4",
          type: "mcq",
          prompt: "Lorsqu'on stimule électriquement le bout central d'un nerf de Cyon préalablement sectionné, on observe :",
          options: [
            "Un ralentissement de la fréquence cardiaque (bradycardie)",
            "Une absence totale d'effet sur le rythme cardiaque",
            "Une accélération brutale des battements cardiaques (tachycardie)",
            "L'arrêt instantané de la respiration sans modification cardiaque"
          ],
          correctAnswerIndex: 0,
          explanation: "La stimulation du bout central envoie un influx centripète vers le bulbe rachidien, ce qui stimule le centre cardio-modérateur et déclenche une bradycardie réflexe via le nerf X."
        },
        {
          id: "tle_d_svt_c05_p3_ex5",
          type: "mcq",
          prompt: "Qu'appelle-t-on 'phénomène d'échappement vagal' lors de la stimulation prolongée du nerf parasympathique ?",
          options: [
            "La reprise spontanée et lente des battements cardiaques malgré le maintien de la stimulation du nerf X",
            "La fuite du sang des ventricules vers les veines caves",
            "L'inversion du sens de circulation du sang dans les artères coronaires",
            "L'ouverture réflexe des valvules sigmoïdes aortiques"
          ],
          correctAnswerIndex: 0,
          explanation: "Après un arrêt initial en diastole causé par la stimulation du nerf X, le cœur 'échappe' à l'inhibition vagale et se remet à battre, notamment grâce à la dégradation de l'acétylcholine par l'acétylcholinestérase."
        },
        {
          id: "tle_d_svt_c05_p3_ex6",
          type: "mcq",
          prompt: "Lors d'une baisse brutale de la pression artérielle (hypotension orthostatique, hémorragie), quelle est la réponse réflexe de l'organisme ?",
          options: [
            "Inhibition du centre cardio-modérateur bulbaire et activation de l'orthosympathique entraînant une tachycardie compensatrice",
            "Stimulation accrue du nerf X provoquant un arrêt cardiaque",
            "Libération massive d'acétylcholine dans le nœud sinusal",
            "Section spontanée des nerfs de Hering"
          ],
          correctAnswerIndex: 0,
          explanation: "La chute de pression réduit la stimulation des barorécepteurs, ce qui diminue le freinage bulbaire et active le système orthosympathique, accélérant le cœur pour rétablir la pression artérielle."
        }
      ]
    },
    {
      id: "pt4_regulation_chimique_neuromediateurs_loewi",
      order: 4,
      title: "Régulation chimique du cœur : Neuromédiateurs (Otto Loewi) et substances pharmacologiques",
      summary: "Expérience historique d'Otto Loewi démontrant la transmission humorale par neuromédiateurs (substance vagale = acétylcholine, sympathine = adrénaline/noradrénaline), action des poisons et médiateurs chimiques sur l'automatisme cardiaque.",
      conceptExplanation: "La régulation nerveuse du cœur s'effectue par l'intermédiaire de médiateurs chimiques (neuromédiateurs) libérés dans les synapses neuro-effectrices entre les terminaisons nerveuses et les cellules nodales du myocarde.\n\n1. L'expérience historique d'Otto Loewi (1921) :\n- Dispositif expérimental : Deux cœurs de grenouilles (cœur donneur A et cœur receveur B) sont isolés et perfusés avec un liquide physiologique (solution de Ringer). Le cœur A a conservé son innervation par le nerf vague X (ou son nerf orthosympathique). Un tube de raccord permet au liquide ayant irrigué le cœur A de s'écouler directement dans le cœur B.\n- Protocole 1 (Stimulation du nerf vague) :\n  - On stimule électriquement le nerf vague du cœur A : le cœur A ralentit immédiatement et s'arrête en diastole.\n  - Quelques secondes plus tard, le cœur B (qui ne reçoit pourtant aucune excitation nerveuse directe) ralentit à son tour et s'arrête en diastole !\n  - Interprétation : La stimulation du nerf vague a provoqué la libération d'une substance chimique hydrosoluble dans le liquide de perfusion du cœur A, véhiculée jusqu'au cœur B où elle reproduit le même effet modérateur. Loewi appela cette substance la 'substance vagale' (identifiée plus tard comme l'acétylcholine).\n- Protocole 2 (Stimulation du nerf orthosympathique) :\n  - On stimule le nerf orthosympathique du cœur A : le cœur A accélère (tachycardie).\n  - Après un court temps de latence correspondant au transit du liquide, le cœur B accélère également.\n  - Interprétation : L'excitation du nerf orthosympathique libère une substance cardio-accélératrice appelée initialement 'sympathine' (qui est l'adrénaline / noradrénaline).\n\n2. Nature et mode d'action des neuromédiateurs cardiaques :\n- L'acétylcholine (ACh) :\n  - Neuromédiateur du système parasympathique, libéré par les terminaisons du nerf vague X.\n  - Récepteurs cibles : Récepteurs muscariniques (M2) situés sur la membrane des cellules du nœud sinusal.\n  - Mécanisme : L'acétylcholine ouvre des canaux potassiques dépendants (IK-ACh), provoquant une hyperpolarisation de la membrane et ralentissant la pente du pré-potentiel de dépolarisation diastolique. L'activité du nœud sinusal est freinée : substance cardio-modératrice.\n  - Élimination : Dégradée très rapidement dans la fente synaptique par l'enzyme acétylcholinestérase en acétate et choline. Cette hydrolyse rapide explique le phénomène d'échappement vagal lors des stimulations continues.\n- L'adrénaline et la noradrénaline (ADR / NorADR) :\n  - Neuromédiateurs du système orthosympathique (et hormones produites par la médullosurrénale).\n  - Récepteurs cibles : Récepteurs bêta-1 adrénergiques (β1) du nœud sinusal et des cardiomyocytes ventriculaires.\n  - Mécanisme : Activation de l'adénylate cyclase, élévation de l'AMPc intracellulaire et ouverture accrue des canaux calciques Ca2+. Il en résulte une accélération de la dépolarisation spontanée (tachycardie) et une augmentation de la force de contraction (inotropisme positif) : substance cardio-accélératrice.\n\n3. Action des substances chimiques et poisons pharmacologiques :\n- L'atropine : Alcaloïde extrait de la belladone. C'est un antagoniste compétitif spécifique des récepteurs muscariniques de l'acétylcholine. Si l'on traite le cœur B avec de l'atropine avant de stimuler le nerf vague du cœur A, le cœur B ne s'arrête plus : l'atropine bloque l'action de l'acétylcholine et lève le frein parasympathique, provoquant une tachycardie.\n- L'ergotoxine (ou les bêtabloquants comme le propranolol) : Bloquent les récepteurs adrénergiques orthosympathiques. Si le cœur B est traité par l'ergotoxine, la stimulation du nerf orthosympathique du cœur A n'a plus d'effet accélérateur sur le cœur B.\n- Eserine (physostigmine) : Inhibiteur de l'acétylcholinestérase. Elle prolonge et intensifie l'action de l'acétylcholine en empêchant sa dégradation synaptique.",
      keyRule: "L'expérience d'Otto Loewi démontre que les nerfs cardiaques agissent par voie chimique : le nerf parasympathique libère l'acétylcholine (cardio-modératrice), tandis que le nerf orthosympathique libère la noradrénaline/adrénaline (cardio-accélératrice). L'atropine inhibe l'acétylcholine et l'ergotoxine inhibe l'adrénaline.",
      formulas: [
        {
          name: "Inactivation synaptique de l'acétylcholine par l'estérase",
          formula: "\\text{Acétylcholine} + H_2O \\xrightarrow{\\text{Acétylcholinestérase}} \\text{Choline} + \\text{Acétate}",
          note: "Empêche la persistance indue du freinage vagal et permet l'échappement"
        }
      ],
      workedExample: {
        title: "Analyse d'expériences de perfusion médicamenteuse sur cœur isolé de grenouille",
        statement: "On dispose de trois préparations de cœurs isolés de grenouille baignant dans du liquide de Ringer : Préparation 1 : On ajoute dans le perfusat quelques gouttes d'acétylcholine. Préparation 2 : On ajoute de l'acétylcholine sur un cœur préalablement rincé avec une solution d'atropine. Préparation 3 : On perfuse avec de l'adrénaline. Décrire et justifier les tracés mécaniques attendus.",
        methodSteps: [
          "Étape 1 : Analyser la préparation 1 (Acétylcholine seule). L'acétylcholine se fixe sur les récepteurs muscariniques du nœud sinusal, entraînant une bradycardie progressive puis un arrêt du tracé en ligne droite en position de diastole (relâchement).",
          "Étape 2 : Analyser la préparation 2 (Atropine + Acétylcholine). L'atropine s'est liée préalablement aux récepteurs muscariniques et bloque l'accès de l'ACh. L'acétylcholine ne peut plus agir : le rythme cardiaque demeure normal sans aucun ralentissement.",
          "Étape 3 : Analyser la préparation 3 (Adrénaline seule). L'adrénaline active les récepteurs bêta-1 adrénergiques, provoquant une hausse de la fréquence des battements (tachycardie) et une augmentation de l'amplitude des sommets (force contractile accrue)."
        ],
        conclusion: "L'ACh est cardio-modératrice, son effet est bloqué par l'atropine ; l'adrénaline est cardio-accélératrice."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Action comparée des neuromédiateurs et poisons pharmacologiques sur le nœud sinusal",
        tableData: {
          headers: ["Substance chimique", "Système nerveux associé", "Récepteur membranaire", "Effet physiologique cardiaque", "Antagoniste spécifique"],
          rows: [
            ["Acétylcholine (ACh)", "Parasympathique (Nerf vague X)", "Récepteurs muscariniques M2", "Ralentissement (bradycardie) ou arrêt en diastole", "Atropine"],
            ["Adrénaline / Noradrénaline", "Orthosympathique (Moelle épinière)", "Récepteurs bêta-1 (β1) adrénergiques", "Accélération (tachycardie) et force accrue", "Ergotoxine / Bêtabloquants"],
            ["Atropine", "Poison pharmacologique (Belladone)", "Bloqueur compétitif muscarinique", "Lève le frein parasympathique (tachycardie)", "Acétylcholine (à très forte dose)"],
            ["Acétylcholinestérase", "Enzyme de la fente synaptique", "Substrat : Acétylcholine", "Hydrolyse rapide de l'ACh (fin de l'inhibition)", "Ésérine (inhibiteur d'estérase)"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c05_p4_ex1",
          type: "mcq",
          prompt: "Dans la célèbre expérience d'Otto Loewi (1921), pourquoi le cœur B (receveur) ralentit-il lorsque l'on stimule le nerf vague du cœur A (donneur) ?",
          options: [
            "Parce que le nerf vague du cœur A a libéré un médiateur chimique (l'acétylcholine) qui a été transporté par le liquide de perfusion jusqu'au cœur B",
            "Parce qu'un courant électrique a circulé le long du tube en verre reliant les deux cœurs",
            "Parce que le cœur B a été privé d'oxygène par le ralentissement de la pompe péristaltique",
            "Parce que les fibres musculaires du cœur A ont migré mécaniquement dans le cœur B"
          ],
          correctAnswerIndex: 0,
          explanation: "La stimulation du nerf vague du cœur A libère dans le perfusat de l'acétylcholine (substance vagale), qui chemine par le raccord pour agir chimiquement sur les récepteurs du cœur B."
        },
        {
          id: "tle_d_svt_c05_p4_ex2",
          type: "mcq",
          prompt: "Quelle substance chimique sécrétée par les terminaisons des nerfs orthosympathiques stimule l'activité du nœud sinusal et accélère le cœur ?",
          options: [
            "La noradrénaline (ou l'adrénaline)",
            "L'acétylcholine",
            "L'acide chlorhydrique",
            "Le monoxyde d'azote gazeux"
          ],
          correctAnswerIndex: 0,
          explanation: "L'orthosympathique libère la noradrénaline (et la glande médullosurrénale sécrète l'adrénaline), qui se fixe sur les récepteurs bêta-adrénergiques pour provoquer une tachycardie."
        },
        {
          id: "tle_d_svt_c05_p4_ex3",
          type: "mcq",
          prompt: "Quel est l'effet de l'atropine lorsqu'elle est administrée sur le cœur avant une stimulation du nerf parasympathique ?",
          options: [
            "Elle bloque l'action cardio-modératrice de l'acétylcholine en occupant ses récepteurs muscariniques",
            "Elle détruit immédiatement le faisceau de His",
            "Elle stimule massivement la sécrétion d'acétylcholine par le bulbe",
            "Elle accélère la dégradation enzymatique de l'adrénaline"
          ],
          correctAnswerIndex: 0,
          explanation: "L'atropine est un antagoniste des récepteurs muscariniques de l'acétylcholine : elle empêche l'acétylcholine de se fixer, bloquant ainsi l'effet freinateur vagal."
        },
        {
          id: "tle_d_svt_c05_p4_ex4",
          type: "mcq",
          prompt: "Quelle substance pharmacologique est connue pour inhiber spécifiquement l'action accélératrice des substances orthosympathiques ?",
          options: [
            "L'ergotoxine (ou les bêtabloquants)",
            "L'acétylcholine",
            "L'adrénaline pure",
            "Le chlorure de sodium"
          ],
          correctAnswerIndex: 0,
          explanation: "L'ergotoxine et les bêtabloquants bloquent les récepteurs adrénergiques du système orthosympathique, neutralisant ainsi l'effet cardio-accélérateur de la noradrénaline."
        },
        {
          id: "tle_d_svt_c05_p4_ex5",
          type: "mcq",
          prompt: "À quelle enzyme doit-on la destruction rapide de l'acétylcholine dans les fentes synaptiques cardiaques ?",
          options: [
            "L'acétylcholinestérase",
            "L'amylase salivaire",
            "L'ADN polymérase",
            "L'adénylate cyclase"
          ],
          correctAnswerIndex: 0,
          explanation: "L'acétylcholinestérase hydrolyse instantanément l'acétylcholine en acétate et choline, limitant la durée de l'inhibition vagale et permettant au cœur de reprendre ses battements."
        },
        {
          id: "tle_d_svt_c05_p4_ex6",
          type: "mcq",
          prompt: "Lors d'une situation de stress intense ou d'effort physique aigu, quelle hormone circulante renforce puissamment l'action du système nerveux orthosympathique sur le cœur ?",
          options: [
            "L'adrénaline sécrétée par la médullosurrénale",
            "L'insuline sécrétée par le pancréas",
            "L'hormone antidiurétique (ADH)",
            "La prolactine hypophysaire"
          ],
          correctAnswerIndex: 0,
          explanation: "En situation d'urgence ou d'effort, la médullosurrénale déverse de l'adrénaline dans le sang, qui stimule les récepteurs bêta-1 cardiaques, augmentant la fréquence et le volume d'éjection systolique."
        }
      ]
    }
  ]
};

