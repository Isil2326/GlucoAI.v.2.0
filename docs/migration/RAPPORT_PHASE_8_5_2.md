# Rapport Phase 8.5.2 — Séparation définitive plateforme web / application mobile

> **Posture inchangée.** Aucun changement backend / ML / XAI / recommandation / seuil /
> données. Prototype académique **non certifié**, **open-loop strict**, **données 100 %
> synthétiques**, **XAI = support d'affichage/audit**, **API backend = source de vérité**.
> **Phase 9 non démarrée.**

## 1. Objectif

Séparer proprement la **plateforme web** (présentation) de l'**application mobile**
(produit patient/clinicien), conformément à l'option **A** validée :

1. **Archiver** l'ancien web legacy → `archive/legacy-web/MedAICare_V.3_10Patients/`.
2. **Créer** une nouvelle plateforme web indépendante `web-portal/` (présentation,
   posture, architecture, limites, **accès mobile** via lien + QR ; **sans** login,
   dashboards-produit, ML, recommandation, ni stockage de token).
3. **Désactiver** la publication qui pointait vers l'ancien web.
4. **Reconfigurer** les workflows (web-portal port 5000 ; Mobile 5173 ; Backend 8000).
5. **Mettre à jour** la documentation + produire ce rapport.

## 2. Étape 1 — Audit lecture seule (résumé)

- **Aucune dépendance de code** : `backend/` et `mobile/` ne référencent jamais le
  dossier legacy (seules des **docs/README** le mentionnaient).
- **Workflow** : « Start application » lançait le legacy
  (`cd MedAICare_V.3_10Patients && npm run dev`, port 5000, `webview`) ; parent
  « Project » orchestre les 3 workflows.
- **Déploiement** : `.replit [deployment]` = `static`, build
  `cd MedAICare_V.3_10Patients && npm run build`, `publicDir =
  MedAICare_V.3_10Patients/dist` → **pointait vers le legacy**.
- **Références doc** (corrigées en étape 2) : `replit.md`,
  `docs/web/WEB_PORTAL_STRATEGY.md`, `docs/frontend/REACT_APP_ARCHITECTURE.md`,
  `backend/README.md`, `docs/compliance/COMPLIANCE_SCOPE.md`,
  `docs/migration/RAPPORT_PHASE_5.md`, `docs/architecture/FINAL_ARCHITECTURE.md`.
- **Tooling legacy** (mirrorré) : React 19 · Vite 7 · Tailwind 4 ·
  `vite-plugin-singlefile` · lib `qrcode`.

## 3. Étape 2 — Exécution

### 3.1 Archivage du legacy

- Déplacement (non destructif, historique préservé) :
  `MedAICare_V.3_10Patients/` → `archive/legacy-web/MedAICare_V.3_10Patients/`.
- Intégrité vérifiée (`package.json`, `vite.config.ts`, `LIMITATIONS.md`, `src/`,
  `dist/` présents).
- `archive/legacy-web/README.md` créé (statut archivé / non actif / non publié /
  récupérable + posture).

### 3.2 Nouveau portail `web-portal/`

- App **React 19 + TypeScript + Vite 7 + Tailwind 4** indépendante, build single-file
  (`vite-plugin-singlefile`) pour déploiement statique.
- **Aucun** login, dashboard-produit, calcul ML/XAI/reco, ni stockage de token.
- URLs **dérivées dynamiquement** de l'hôte courant (`src/utils/urls.ts`) :
  mobile `:5173`, API `:8000`, docs API `/docs` — valables sur n'importe quel hôte
  de preview Replit, **liens de démonstration temporaires**.
- Sections : Hero + badges posture · Accès mobile (lien + **QR** + copie) · Espaces
  patient/clinicien (rappel : **dans l'app mobile, pas le portail**) · Limites &
  posture · Architecture (portail présente / mobile affiche / backend = vérité) ·
  Documentation (+ lien `/docs` backend) · Footer (version, non-dispositif-médical).
- **Build natif non généré** : aucun APK/IPA — mention explicite dans le portail.

### 3.3 Désactivation / repointage de la publication

- `.replit [deployment]` mis à jour via l'outillage Replit :
  - `deploymentTarget = static`
  - `build = bash -c "cd web-portal && npm run build"`
  - `publicDir = web-portal/dist`
- La publication **ne pointe plus vers l'ancien web**. La (re)publication reste
  **manuelle**, à l'initiative de l'utilisateur, après validation.

### 3.4 Workflows

| Workflow | Commande | Port | Sortie | État |
|----------|----------|------|--------|------|
| **Start application** | `cd web-portal && npm run dev` | 5000 | webview | running |
| **Mobile App** | `cd mobile && … expo start --web --port 5173` | 5173 | console | running |
| **Backend API** | `cd backend && … uvicorn … --port 8000` | 8000 | console | running |

- **Aucun workflow** ne lance plus le legacy. Le nom « Start application » est
  conservé (référencé par le parent « Project »), désormais branché sur `web-portal/`.

## 4. Étape 3 — Validation

| Élément | Statut |
|---------|--------|
| **Web Portal** (port 5000, HTTP 200, rendu vérifié) | **OK** |
| **Mobile App** (port 5173, HTTP 200, 10 suites / 79 tests verts) | **OK** |
| **Backend API** (port 8000, `/health` 200, smoke contractuel OK) | **OK** |
| **Legacy Web archivé** (`archive/legacy-web/…`, intégrité vérifiée) | **OK** |
| **Publication ancienne désactivée** (ne pointe plus vers le legacy) | **OK** |
| **Lien mobile** (dérivé de l'hôte, `:5173`) | **OK** |
| **QR mobile** (généré client-side vers l'URL mobile) | **OK** |
| **Tests** (web build/tsc, mobile tsc/jest, backend validate) | **OK** |

### 4.1 Détail des tests (codes de sortie)

| Test | Commande | Résultat |
|------|----------|----------|
| web-portal build | `cd web-portal && npm run build` | **rc=0** — `dist/index.html` single-file |
| web-portal typecheck | `cd web-portal && npm run typecheck` | **rc=0** |
| mobile typecheck | `cd mobile && npx tsc --noEmit` | **rc=0** |
| mobile tests | `cd mobile && npx jest --ci --runInBand` | **rc=0** — 10 suites / 79 tests |
| backend smoke | `cd backend && python scripts/validate_backend.py` | **rc=0** — RESULTAT : OK |

### 4.2 Fichiers principaux modifiés / créés

- **Créés** : `web-portal/` (app complète : `index.html`, `vite.config.ts`,
  `tsconfig*.json`, `src/main.tsx`, `src/App.tsx`, `src/styles.css`,
  `src/utils/urls.ts`, `src/components/*`, `README.md`) ;
  `archive/legacy-web/README.md` ; `docs/migration/RAPPORT_PHASE_8_5_2.md`.
- **Déplacé** : `MedAICare_V.3_10Patients/` → `archive/legacy-web/MedAICare_V.3_10Patients/`.
- **Config** : `.replit` (workflow « Start application » → `web-portal/` ;
  `[deployment]` → `web-portal/dist`).
- **Docs MAJ** : `replit.md`, `docs/web/WEB_PORTAL_STRATEGY.md`,
  `docs/frontend/REACT_APP_ARCHITECTURE.md`, `docs/architecture/FINAL_ARCHITECTURE.md`,
  `backend/README.md`, `docs/compliance/COMPLIANCE_SCOPE.md`,
  `docs/migration/RAPPORT_PHASE_5.md`.

## 5. Limites restantes

- **Liens mobile/API = démonstration Replit temporaire** (ports 5173/8000), valables
  pendant l'exécution du projet ; non pertinents sur un déploiement statique pur.
- **Build natif non généré** (pas d'APK/IPA, pas d'EAS) — limite Expo Web sur Replit,
  inchangée.
- **Publication non ré-effectuée** : repointée vers `web-portal/dist`, mais la mise en
  ligne reste **manuelle** (à l'initiative de l'utilisateur).
- **`docs/frontend/REACT_APP_ARCHITECTURE.md`** décrit désormais le **legacy archivé**
  (document historique, conservé pour référence).
- Posture et limites métier **inchangées** (cf. `LIMITATIONS.md`, `COMPLIANCE_SCOPE.md`).

## 6. Décision proposée pour la Phase 9

**Ne pas démarrer la Phase 9** sans validation explicite du superviseur. La Phase 8.5.2
est **livrée, à valider**. Pistes Phase 9 inchangées (open-loop, synthétiques, sans
changement ML/XAI) : exécution réelle des checklists device (EAS dev/preview, audit
VoiceOver/TalkBack), durcissement natif (prebuild + TLS pinning si requis),
visualisations lecture seule supplémentaires sans calcul local, formalisation d'un
dossier de validation si un cadre réglementaire était envisagé.
