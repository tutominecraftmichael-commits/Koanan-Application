# 🎓 KONAN AI — Plateforme Intelligente d'Excellence & de Réussite Académique

<div align="center">

![KONAN AI Banner](https://img.shields.io/badge/KONAN%20AI-Académie%202.0-6366f1?style=for-the-badge&logo=openai&logoColor=white)
<br/>

[![React](https://img.shields.io/badge/React%2019-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript%205-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite%208-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%204-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Google%20Gemini%202.5%20Flash-4285F4?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev/)
[![Firebase](https://img.shields.io/badge/Firebase%2012-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Mobile Ready](https://img.shields.io/badge/Mobile-100%25%20Responsive-10B981?style=flat-square&logo=apple&logoColor=white)](#-compatibilit%C3%A9-universelle-multi-appareils)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

<br/>

**Transformez votre emploi du temps universitaire, technique ou secondaire en un plan de travail neuro-optimisé, sans stress et sans surcharge mentale.**

[Fonctionnalités](#-fonctionnalit%C3%A9s-cl%C3%A9s) • [Architecture](#-architecture--stack-technique) • [Formats d'Emplois du Temps](#-formats-demplois-du-temps-support%C3%A9s) • [Installation](#-installation--d%C3%A9marrage-rapide) • [Auteur](#-auteur--cr%C3%A9dits)

</div>

---

## 🌟 Vision & Proposition de Valeur

Les étudiants du supérieur (Universités LMD, Écoles d'Ingénieurs, BTS) comme du secondaire (Lycée, Prépa) font face à un défi permanent : **l'éparpillement, les cours denses, le manque de visibilité sur les coefficients réels et le risque de surmenage (burnout)**.

**KONAN AI** a été conçu pour résoudre ce problème à la racine :
1. **Numérisation Instantanée** : Vous prenez en photo votre emploi du temps ou importez votre PDF. Le modèle multimodal **Google Gemini 2.5 Flash** extrait et aligne instantanément chaque cours avec ses heures exactes.
2. **Source de Vérité Intangible** : Respect absolu des créneaux officiels (aucune heure n'est modifiée ou coupée arbitrairement).
3. **Pédagogie Cognitive & Pacing** : Génération d'un planning de révision sur-mesure utilisant l'Active Recall, la Répétition Espacée, la technique Feynman et le Time Blocking.
4. **Synchronisation Universelle** : Retrouvez votre planning et vos matières en direct sur PC, Mac, iPhone, Android et tablettes via Cloud Firestore.

---

## 🚀 Fonctionnalités Clés

### 📸 1. Scanner Multimodal Intelligent (Gemini 2.5 Flash + Vision 2D)
- **Support Universel PDF & Photo** : Importez un document PDF numérique ou prenez directement une photo avec l'appareil de votre smartphone.
- **Compression & Optimisation Mobile-First** : Redimensionnement automatique pour éviter les dépassements de mémoire sur mobile et téléversement en moins d'une seconde sur réseau 3G/4G.
- **Tolérance Zéro aux Hallucinations** : Les heures de cours réelles (ex: `07:30 - 10:00`) sont extraites fidèlement sans altération ni décalage.
- **Moteur Local de Secours** : En cas de coupure réseau, un moteur vectoriel local (PDF.js + Tesseract OCR) prend le relais de manière transparente.

### 📐 2. Détection Automatique des 3 Systèmes d'Étude
- **Format LMD (Université / Grandes Écoles)** : Détection des codes ECUE (`[1MTH3350]`, `[1INF3350]`), des amphithéâtres, des professeurs et des coefficients.
- **Format BTS / Technique** : Prise en charge des mentions explicites `CM`, `TD`, `TP` et des ateliers/laboratoires techniques.
- **Format Scolaire (Lycée / Collège / Prépa)** : Gestion épurée des matières générales avec horaires sans surcharge d'informations.

### 🧠 3. Moteur Neuro-Pédagogique de Révision (Pacing)
- **Active Recall & Répétition Espacée** : Planification automatique de séances de rappel actif avant les évaluations.
- **Profil Chronobiologique** : Adaptation selon votre chronotype (profil *Matinal*, *Équilibré* ou *Oiseau de Nuit*).
- **Stratégie Feynman & Pomodoro Adaptatif** : Sessions fractionnées intégrant des pauses cognitives scientifiquement calibrées.
- **Matrice des Risques de Burnout** : Diagnostic en temps réel de votre charge hebdomadaire pour prévenir l'épuisement.

### ☁️ 4. Synchronisation Cloud & Continuité Multi-Appareils
- **Cloud Firestore Persistant** : Sauvegarde automatique de votre état complet (matières, créneaux fixes, sessions d'étude, notes visées).
- **Protection Anti-Écrasement** : Mécanisme de garde empêchant un appareil vierge d'écraser des données déjà enregistrées dans le cloud.
- **Authentification Sécurisée** : Connexion Google One-Tap ou par e-mail via Firebase Auth.

### 🖨️ 5. Mode Éco-Encre & Export PDF Haute Définition
- **Éco-Encre Intelligent** : En un clic, l'interface sombre bascule en fond blanc pur avec bordures grises optimisées, réduisant à zéro la consommation d'encre sombre lors de l'impression papier.

---

## 📱 Compatibilité Universelle Multi-Appareils

KONAN AI est conçu pour fonctionner **sans distinction sur 100% des ordinateurs et téléphones** :

| Type d'Appareil | Compatibilité | Optimisations Embarquées |
|---|:---:|---|
| **iPhone & iPad (iOS Safari)** | ✅ 100% | Support HEIC/JPEG, gestion optimisée du canvas pour éviter tout rechargement d'onglet, zone safe-area iOS (`pt-safe`, `pb-safe`). |
| **Smartphones Android** | ✅ 100% | Accès direct à la caméra arrière (`capture="environment"`), compression adaptative d'images pour téléphones d'entrée et milieu de gamme. |
| **PC Windows & Linux** | ✅ 100% | Raccourcis clavier, glisser-déposer de PDF, interface dense et professionnelle. |
| **Mac (macOS Safari & Chrome)** | ✅ 100% | Support écran Retina, transitions 60/120 fps accélérées par GPU. |

---

## 🏛️ Architecture & Stack Technique

```text
src/
├── app/                  # Configuration racine et point d'entrée
├── components/           # Composants UI réutilisables (Button, Badge, Card, Modal, FormControls)
├── features/
│   ├── schedule/         # Vue principale d'importation PDF/Photo et Source de Vérité
│   ├── dashboard/        # Tableau de bord étudiant, analytics & métriques cognitives
│   ├── study/            # Sessions d'étude, révision active et chronomètre Pomodoro
│   └── settings/         # Préférences, profil académique et connexion Cloud
├── lib/
│   ├── firebase.ts       # Initialisation Firebase Auth & Firestore avec synchronisation
│   ├── pacingStrategies.ts # Algorithmes neuro-pédagogiques et calcul de charge
│   └── utils.ts          # Utilitaires de conversion temps, identifiants et helpers
├── services/
│   ├── geminiExtractionService.ts # Moteur multimodal IA basé sur @google/genai (Gemini 2.5 Flash)
│   ├── pdfParserService.ts        # Analyse vectorielle spatiale 2D, déduplication et gabarits
│   ├── ocrService.ts              # Moteur OCR local avec masque de netteté convolutionnel
│   └── aiAcademicAnalyzer.ts      # Génération du bilan cognitif et diagnostic d'équilibre
└── types/                # Définitions TypeScript strictes pour tout le domaine métier
```

### Technologies Utilisées :
- **Frontend** : [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
- **Styling** : [Tailwind CSS v4](https://tailwindcss.com/) + CSS Grid / Flexbox + Vanilla CSS tokens
- **Vision IA** : [Google GenAI SDK (`@google/genai`)](https://www.npmjs.com/package/@google/genai) avec **Gemini 2.5 Flash**
- **Vision Locale (Secours)** : [PDF.js](https://mozilla.github.io/pdf.js/) + [Tesseract.js](https://tesseract.projectnaptha.com/)
- **Backend & Données** : [Firebase Firestore](https://firebase.google.com/docs/firestore) + [Firebase Authentication](https://firebase.google.com/docs/auth)
- **Micro-Interactions** : Canvas Confetti + Web Audio API synthétisée (Audio FX natifs)

---

## 📋 Formats d'Emplois du Temps Supportés

Le moteur de KONAN AI reconnaît trois formats officiels standardisés :

### 1. Format LMD (Université / Grandes Écoles)
```text
LUNDI :
07:30 - 10:00 | Algèbres 2 [1MTH3350] | Amphi ESATIC | Dr KOIVOGUI MOUSSA
10:15 - 12:45 | Anglais [1LAN3350] | Salle 204 | M. YEO NICODEME
14:30 - 17:00 | Développement d'Applications 1 [1INF3350] | Lab Info | M. KONE ZANA
```

### 2. Format BTS / Technique
```text
LUNDI :
08:00 - 10:00 CM Électronique Analogique | Amphi 1
10:15 - 12:15 TD Mathématiques Appliquées | Salle 302
14:00 - 17:00 TP Informatique Industrielle | Labo Info
```

### 3. Format Scolaire (Lycée / Collège)
```text
LUNDI :
08:00 - 10:00 Mathématiques
10:15 - 12:00 Physique-Chimie
14:00 - 16:00 Français
```

---

## 🛠️ Installation & Démarrage Rapide

### Prérequis
- [Node.js](https://nodejs.org/) version 18 ou supérieure
- Gestionnaire de paquets `npm`

### 1. Cloner le Dépôt
```bash
git clone https://github.com/tutominecraftmichael-commits/Koanan-Application.git
cd Koanan-Application
```

### 2. Installer les Dépendances
```bash
npm install
```

### 3. Configurer les Variables d'Environnement
Créez un fichier `.env` à la racine (ou copiez `.env.example`) :
```bash
cp .env.example .env
```

Renseignez vos identifiants Firebase et votre clé Gemini :
```env
# Clé Gemini pour l'extraction vision IA
GEMINI_API_KEY=votre_cle_gemini_ici
VITE_GEMINI_API_KEY=votre_cle_gemini_ici

# Configuration Firebase
VITE_FIREBASE_API_KEY=votre_api_key_firebase
VITE_FIREBASE_AUTH_DOMAIN=votre-projet.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=votre-projet-id
VITE_FIREBASE_STORAGE_BUCKET=votre-projet.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=votre_sender_id
VITE_FIREBASE_APP_ID=votre_app_id
```

### 4. Lancer le Serveur de Développement
```bash
npm run dev
```
L'application est accessible immédiatement sur `http://localhost:5173`.

### 5. Compiler pour la Production
```bash
npm run build
```

---

## 🔒 Confidentialité & Sécurité des Données

- **Zéro Revente de Données** : Les données académiques et les emplois du temps restent la propriété exclusive de l'étudiant.
- **Chiffrement en Transit** : Tous les échanges avec l'API Gemini et Cloud Firestore sont chiffrés via HTTPS / TLS 1.3.
- **Règles Firestore Sécurisées** : Seul l'utilisateur authentifié peut lire ou écrire ses propres données via les règles strictes `request.auth.uid == userId`.

---

## 🤝 Contribution

Les contributions pour améliorer KONAN AI sont les bienvenues !
1. Forkez le projet.
2. Créez votre branche de fonctionnalité (`git checkout -b feature/amelioration-vision`).
3. Commitez vos modifications (`git commit -m 'feat: amélioration de la détection des amphis'`).
4. Poussez sur votre branche (`git push origin feature/amelioration-vision`).
5. Ouvrez une Pull Request détaillée.

---

## 📄 Licence & Crédits

Ce projet est sous licence libre **MIT** — voir le fichier [LICENSE](LICENSE) pour plus de détails.

Conçu et développé avec passion par **Christ Boni** & l'équipe d'ingénierie cognitive de **KONAN AI**.
