# MediAI Care — Web Portal

Plateforme web **publique** et **active** de MediAI Care : présentation, posture
(prototype non certifié, données synthétiques, open-loop), architecture, limites,
documentation et **accès à l'application mobile** (lien + QR).

Ce portail est **indépendant** :

- il n'importe **pas** l'ancien web (`archive/legacy-web/MedAICare_V.3_10Patients/`) ;
- il ne dépend **pas** du dossier `mobile/` ;
- il ne dépend **pas** du backend pour afficher la page publique ;
- il dérive dynamiquement les URLs mobile/API à partir de l'hôte courant
  (`src/utils/urls.ts`).

Il ne contient **pas** : login patient/clinicien, dashboards comme cœur produit,
logique ML, logique de recommandation, stockage de token utilisateur, promesses
cliniques.

## Stack

React 19 · TypeScript · Vite 7 · Tailwind 4 (`@tailwindcss/vite`) ·
`vite-plugin-singlefile` (build single-file pour déploiement statique) · `qrcode`.

## Commandes

```bash
cd web-portal
npm install
npm run dev        # serveur dev, port 5000 (preview principal Replit)
npm run build      # build statique → web-portal/dist/index.html (single-file)
npm run preview    # prévisualiser le build
npm run typecheck  # tsc --noEmit
```

## Structure

```text
web-portal/
├── index.html
├── package.json
├── vite.config.ts            # port 5000, allowedHosts, singlefile
├── tsconfig.json
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── styles.css            # Tailwind 4 + thème
│   ├── utils/urls.ts         # dérivation URLs mobile (5173) / API (8000) depuis l'hôte
│   └── components/
│       ├── Hero.tsx
│       ├── PrototypeBadges.tsx
│       ├── MobileAccess.tsx
│       ├── QrAccess.tsx
│       ├── SpacesSection.tsx
│       ├── LimitsSection.tsx
│       ├── ArchitectureSection.tsx
│       ├── DocumentationSection.tsx
│       └── Footer.tsx
└── README.md
```

## Déploiement

Cible de publication future : `web-portal/dist` (déploiement statique). La
publication doit être (ré)initiée manuellement par l'utilisateur depuis Replit
après validation. Les liens vers le mobile (port 5173) et l'API (port 8000) sont
des liens de **démonstration Replit temporaires**, valables uniquement pendant
l'exécution du projet.
