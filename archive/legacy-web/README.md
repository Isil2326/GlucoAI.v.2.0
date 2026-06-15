# Archive — Ancien portail web (legacy)

Ce dossier contient l'**ancienne application web** MediAI Care, archivée lors de la
**Phase 8.5.2** (séparation définitive de la plateforme web et de l'application mobile).

```text
archive/legacy-web/MedAICare_V.3_10Patients/
```

## Statut

- **Archivé** — conservé pour référence et traçabilité (mémoire de Master).
- **Non actif** — ne fait plus partie de la structure active du projet.
- **Non publié** — la publication ne pointe plus vers ce dossier (cible actuelle :
  `web-portal/dist`).
- **Récupérable** — code et historique Git préservés (déplacement, pas de suppression).

## Pourquoi cette archive

L'ancien web mélangeait présentation institutionnelle **et** logique applicative
(login patient/clinicien, dashboards). La Phase 8.5.2 sépare les responsabilités :

- **`web-portal/`** = nouvelle plateforme web publique (présentation, posture,
  architecture, limites, accès mobile). C'est le web **actif**.
- **`mobile/`** = application principale patient/clinicien.
- **`backend/`** = API, source de vérité.

Ce legacy n'est conservé que comme référence historique. Il **ne doit pas** être
relancé comme web actif ni republié.

## Réactiver localement (référence uniquement)

```bash
cd archive/legacy-web/MedAICare_V.3_10Patients
npm install
npm run dev   # NB : ce dossier n'est plus câblé aux workflows ni au déploiement
```

## Posture (inchangée)

Prototype académique **non certifié**, **données 100 % synthétiques**, **open-loop
strict**, **XAI = support d'affichage/audit** (jamais une justification clinique),
**API backend = source de vérité**. Voir `MedAICare_V.3_10Patients/LIMITATIONS.md`.
