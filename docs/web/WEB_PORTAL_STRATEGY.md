# Stratégie portail web — MediAI Care (Phase 8.5.1 → 8.5.2)

> **Posture inchangée.** Aucun changement backend / ML / XAI / recommandation /
> seuil / données. Prototype académique **non certifié**, **open-loop strict**,
> **données 100 % synthétiques**. Phase 9 non démarrée.

> **Mise à jour Phase 8.5.2 — séparation définitive.** La stratégie ci-dessous est
> désormais **implémentée comme une application web indépendante** : le nouveau
> portail public vit dans **`web-portal/`** (React + TS + Vite, port 5000, sans
> login/ML/token). L'ancien web est **archivé** dans
> `archive/legacy-web/MedAICare_V.3_10Patients/` (non actif, non publié). Le workflow
> « Start application » et la publication statique pointent désormais vers
> `web-portal/`. Voir `web-portal/README.md` et `docs/migration/RAPPORT_PHASE_8_5_2.md`.

## 1. Recadrage produit

| Couche | Rôle **avant** | Rôle **cible (post-8.5.1)** |
|--------|----------------|------------------------------|
| **Web** (legacy `archive/legacy-web/MedAICare_V.3_10Patients/` → actif `web-portal/`, port 5000) | Landing + login patient/clinicien, dashboards web | **Portail institutionnel** (`web-portal/`) : présentation, posture, architecture, limites, accès mobile, documentation |
| **Mobile** (`mobile/`, port 5173, Expo Web) | App mobile | **Application principale** patient & clinicien (login, dashboards, données, risque, XAI, recommandations) |
| **Backend** (`backend/`, port 8000) | Source de vérité | Inchangé — **source de vérité** API / sécurité / ML / XAI / recommandations |

Le web **n'est plus** le point d'accès principal patient/clinicien. L'application
réelle est l'app **mobile**.

## 2. Pourquoi les changements UI n'étaient pas visibles (diagnostic 8.5.1)

- Le preview Replit **principal** est le workflow **« Start application »**
  (avant 8.5.2 : `MedAICare_V.3_10Patients` ; depuis 8.5.2 : `web-portal/`,
  **port 5000**, `externalPort 80`, `outputType = webview`). C'est l'**app web** qui
  s'affiche par défaut.
- Le workflow **« Mobile App »** (Expo Web, **port 5173**) a `outputType = console` :
  il n'apparaît **pas** dans le preview principal.
- Conséquence : les modifications de la Phase 8.5 (UI **mobile**) étaient bien
  livrées mais **invisibles** dans le preview principal, qui montrait l'app web.

**Correction 8.5.1 :** l'app web (port 5000) devient un **portail** qui présente
le projet et **renvoie explicitement vers l'app mobile** (port 5173). Le bon
rendu attendu est donc clair, quel que soit le port ouvert.

## 3. Comment ouvrir chaque preview

| Workflow | Port | Ce qu'on voit | Comment ouvrir |
|----------|------|---------------|----------------|
| **Start application** | 5000 | Portail web institutionnel | Preview principal (webview) |
| **Mobile App** | 5173 | App mobile Expo Web (patient/clinicien) | `https://<REPLIT_DEV_DOMAIN>:5173` (lien « Ouvrir l'app mobile » du portail) |
| **Backend API** | 8000 | API FastAPI (console) | `https://<REPLIT_DEV_DOMAIN>:8000/docs` |

Le portail construit le lien mobile dynamiquement à partir de l'hôte courant
(`window.location.hostname` + `:5173`), donc il reste valable quel que soit le
domaine de preview Replit.

## 4. Contenu du portail (depuis 8.5.2 : `web-portal/src/components/`)

1. **Hero** (refonte premium « Signal clair ») — disposition deux colonnes : à gauche,
   titre orienté valeur (dégradé) + sous-titre IoMT/IA explicable + **mention sobre**
   « Prototype académique — démonstration contrôlée » + badges **produit** + CTA
   **« Ouvrir l'application mobile »** & **« Voir l'app en direct »** ; à droite, un
   **visuel produit stylisé** (signal glycémique animé, score de risque, lecture XAI,
   pastille « décision supervisée ») — illustratif, données synthétiques.
2. **Plateforme** (`ValueSection`) — cartes de valeur produit : centralisation des
   données, estimation du risque glycémique, IA explicable, workflow patient–clinicien.
3. **Application mobile** (`MobileAccess`) — l'app mobile est le **vrai produit** :
   **aperçu live embarqué** (iframe vers l'app réelle, port 5173, dans un cadre
   téléphone) + lien plein écran + QR + note build device. Pas une maquette.
4. **Espaces patient & clinicien** (`SpacesSection`) — capacités présentées comme des
   fonctionnalités produit (et non comme une liste d'avertissements).
5. **Architecture** — API = source de vérité, flux simple (portail présente · mobile
   affiche · backend décide).
6. **Documentation / Soutenance** — pointeurs vers `docs/` + lien `/docs` backend.
7. **Cadre académique** (`AcademicFrame`, ex-`LimitsSection`) — section dédiée, sobre
   et élégante, regroupant **toutes** les limites (démonstration académique, données de
   démonstration, validation clinique non réalisée, décision humaine obligatoire, cadre
   réglementaire à formaliser). **Non répétées** ailleurs.
8. **Footer** — version + mention courte du cadre académique (lien vers la section).
   **Aucun login web** ni lien « démo web legacy ».

> **Règle éditoriale 8.6 (posture produit).** Viser ~80 % valeur produit / 20 % cadre
> académique. Les limites sont **regroupées** (mention sobre dans le hero, section
> dédiée « Cadre académique », rappel court dans le footer) et **ne sont pas répétées**
> dans chaque carte. Aucun claim clinique ni certification inventés.

## 5. Login web : supprimé du portail actif (8.5.2)

> **MAJ Phase 8.5.2.** En 8.5.1, le login web était **démotté** (lien secondaire
> « Démo web (legacy) » dans le footer du même bundle). En **8.5.2**, la séparation
> est **définitive** : le nouveau portail `web-portal/` **ne contient aucun login**,
> dashboard-produit, calcul ML/XAI/reco, ni stockage de token.

- Le login web patient/clinicien **n'existe plus** dans le portail actif `web-portal/`.
- L'ancien web (avec login + dashboards) est **archivé** dans
  `archive/legacy-web/MedAICare_V.3_10Patients/` (non actif, non câblé aux workflows
  ni au déploiement, récupérable pour référence).
- L'**application réelle** patient/clinicien (login, dashboards, données, risque, XAI,
  recommandations) est **l'app mobile** (`mobile/`, port 5173). Le portail y renvoie
  par **lien + QR**.

## 6. Garde-fous éditoriaux (aucune fausse revendication)

Le portail **n'affiche pas** : « validé cliniquement », certification (MDR, IEC
62304, ISO 13485, HDS), statistiques de performance non prouvées, ni promesse
clinique. Les seules métriques citées sont **techniques**. Le cadre académique est
**regroupé** (mention sobre dans le hero + section dédiée + footer) et **non répété**
dans chaque section (règle 8.6).

## 7. Checklist de validation (manuelle, web — 8.5.2)

- [x] Le portail actif `web-portal/` **ne contient aucun** login patient/clinicien.
- [x] Le portail **ne contient aucun** calcul ML/XAI/reco ni stockage de token.
- [x] Les **disclaimers** (synthétique, open-loop, non certifié, pas d'usage clinique) sont visibles.
- [x] Un **CTA mobile** (« Ouvrir l'app mobile ») + **QR** sont présents (lien dérivé de l'hôte).
- [x] Le **mobile** conserve son login et sépare patient/clinicien.
- [x] **Aucun texte web** ne prétend à une certification ou un usage clinique.
- [x] L'ancien web est **archivé** (`archive/legacy-web/…`), non câblé aux workflows ni au déploiement.

## 8. Fichiers concernés (8.5.2)

- **Créés :** application indépendante `web-portal/` (`index.html`, `vite.config.ts`,
  `tsconfig*.json`, `src/main.tsx`, `src/App.tsx`, `src/styles.css`,
  `src/utils/urls.ts`, `src/components/*`, `README.md`) ; `archive/legacy-web/README.md`.
- **Déplacé :** `MedAICare_V.3_10Patients/` → `archive/legacy-web/MedAICare_V.3_10Patients/`.
- **Config :** `.replit` (workflow « Start application » → `web-portal/` ;
  `[deployment]` → `web-portal/dist`).
- **Inchangés :** backend, mobile (métier), posture et limites.
