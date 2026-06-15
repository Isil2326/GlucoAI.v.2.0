**PHASE 8.5.2 — SÉPARATION DÉFINITIVE PLATEFORME WEB / APPLICATION MOBILE**

Version recadrée — Archivage legacy web + création Web Portal actif indépendant



**Contexte :**

Le projet MediAI Care v1.0 doit être clarifié avant la Phase 9.



**Situation constatée :**

L’ancien dossier `MedAICare\_V.3\_10Patients/` correspond à l’ancienne application web issue du prototype initial. Il a servi historiquement à la démonstration web patient/clinicien, mais il ne doit plus être considéré comme la structure active du produit final.



Replit a confirmé que ce dossier est encore lié à l’infrastructure :

1\. un workflow le lance ;

2\. le déploiement actuel pointe vers son `dist/` ;

3\. plusieurs documents le mentionnent.



Même s’il n’y a pas de collision de code avec `backend/` et `mobile/`, il existe une collision produit/infrastructure :

\- l’ancien web est encore présenté ou publié comme brique principale ;

\- cela contredit la cible actuelle ;

\- cela risque de créer de la confusion en soutenance.



Décision superviseur :

L’ancienne app web doit être archivée proprement.

La publication actuelle doit être désactivée temporairement.

Une nouvelle plateforme web active indépendante doit être créée.

L’app mobile devient l’application principale patient/clinicien.

Le backend reste la source de vérité.



==================================================

0\. DÉCISION OFFICIELLE

==================================================



Choix Replit :

Option 1 — Désactiver la publication pour l’instant.



Raison :

La publication actuelle pointe vers l’ancienne application web.

Il ne faut publier ni :

\- l’ancien web ;

\- le backend seul ;

\- l’app mobile seule.



La publication finale devra pointer vers le nouveau portail web actif indépendant.



Cible finale :



1\. `web-portal/`

&#x20;  = plateforme web publique de présentation, documentation et distribution de l’application mobile.



2\. `mobile/`

&#x20;  = application principale patient/clinicien.



3\. `backend/`

&#x20;  = API source de vérité.



4\. `archive/legacy-web/MedAICare\_V.3\_10Patients/`

&#x20;  = ancienne application web archivée, récupérable mais inactive.



==================================================

1\. RÈGLES NON NÉGOCIABLES

==================================================



Tu NE DOIS PAS :



\- démarrer la Phase 9 ;

\- laisser `MedAICare\_V.3\_10Patients/` comme dossier actif principal ;

\- laisser un workflow principal lancer l’ancien dossier ;

\- laisser le déploiement pointer vers `MedAICare\_V.3\_10Patients/dist`;

\- publier le backend seul ;

\- publier l’app mobile seule ;

\- garder l’ancien login web comme point d’accès principal ;

\- faire dépendre `mobile/` ou `backend/` du dossier archivé ;

\- modifier la logique métier backend ;

\- modifier ML/XAI ;

\- modifier recommandations ;

\- modifier les seuils ;

\- réentraîner les modèles ;

\- introduire des données réelles ;

\- ajouter une dose ;

\- ajouter une décision automatique ;

\- créer une recommandation prescriptive ;

\- contourner les garde-fous de sécurité ;

\- stocker un token dans AsyncStorage/localStorage ;

\- afficher App Store / Google Play / TestFlight comme disponible si ce n’est pas réel ;

\- prétendre à une certification ou validation clinique ;

\- masquer une erreur Expo/Web ;

\- inventer une preuve d’exécution.



Tu DOIS :



\- archiver proprement l’ancien web ;

\- créer un nouveau portail web actif indépendant ;

\- désactiver temporairement la publication actuelle ;

\- préparer la publication future vers le nouveau portail ;

\- conserver l’ancien web récupérable mais inactif ;

\- rendre le mobile réellement accessible et fonctionnel ;

\- documenter tous les workflows Replit ;

\- documenter tous les ports ;

\- vérifier qu’aucun lien actif ne pointe vers l’ancien dossier ;

\- fournir des preuves concrètes ;

\- garder la posture : prototype académique, non certifié, données synthétiques, open-loop strict.



==================================================

2\. ARCHITECTURE PRODUIT CIBLE

==================================================



La cible finale doit être :



WEB PORTAL

Dossier actif :

`web-portal/`



Rôle :

\- plateforme publique ;

\- présentation MediAI Care ;

\- documentation ;

\- limites ;

\- architecture ;

\- distribution mobile ;

\- QR / lien vers l’app mobile ;

\- support soutenance.



Ne contient pas :

\- dashboards patient/clinicien comme cœur produit ;

\- login patient/clinicien principal ;

\- logique ML ;

\- logique recommandation ;

\- stockage token utilisateur ;

\- promesses cliniques.



MOBILE APP

Dossier :

`mobile/`



Rôle :

\- application principale ;

\- login patient ;

\- login clinicien ;

\- dashboards ;

\- données ;

\- ML via API ;

\- XAI via API ;

\- recommandations via API ;

\- validation clinicien.



BACKEND API

Dossier :

`backend/`



Rôle :

\- source de vérité ;

\- auth ;

\- RBAC ;

\- données ;

\- ML ;

\- XAI ;

\- recommandations ;

\- audit.



ARCHIVE

Dossier :

`archive/legacy-web/MedAICare\_V.3\_10Patients/`



Rôle :

\- ancien prototype web ;

\- consultation éventuelle ;

\- récupération historique ;

\- aucune exécution active ;

\- aucun déploiement actif.



==================================================

3\. OBJECTIF PHASE 8.5.2

==================================================



Objectif :

Remédier définitivement aux anomalies d’architecture produit et d’infrastructure :



1\. Archiver l’ancienne application web.

2\. Créer une vraie plateforme web active indépendante.

3\. Désactiver la publication actuelle qui pointe vers l’ancien web.

4\. Configurer les workflows actifs :

&#x20;  - Web Portal ;

&#x20;  - Mobile App ;

&#x20;  - Backend API.

5\. Vérifier que l’application mobile fonctionne réellement.

6\. Vérifier que le portail ouvre correctement l’application mobile.

7\. Préparer la future publication du portail web.

8\. Documenter la séparation finale.



==================================================

4\. ÉTAPE 1 — AUDIT AVANT MODIFICATION

==================================================



Avant toute modification, produire un court audit :



\## 4.1 Références à l’ancien dossier



Lister toutes les références à :



\- `MedAICare\_V.3\_10Patients`

\- ancien chemin web ;

\- ancien `dist`;

\- ancien workflow ;

\- ancien déploiement ;

\- ancien login web.



Chercher dans :



\- `.replit`

\- `replit.md`

\- configs Replit workflows ;

\- fichiers de déploiement ;

\- docs ;

\- README ;

\- scripts ;

\- package.json racine si présent ;

\- CI si présent.



\## 4.2 Dépendances réelles



Confirmer :



\- `backend/` n’importe rien depuis l’ancien dossier ;

\- `mobile/` n’importe rien depuis l’ancien dossier ;

\- le nouveau `web-portal/` ne doit rien importer depuis l’ancien dossier ;

\- seule l’infrastructure / docs pointait encore vers l’ancien dossier.



\## 4.3 Déploiement actuel



Confirmer :



\- ce qui est publié actuellement ;

\- quel dossier est buildé ;

\- quel `dist` est ciblé ;

\- comment désactiver temporairement.



Livrable :

Inclure l’audit dans `docs/migration/RAPPORT\_PHASE\_8\_5\_2.md`.



==================================================

5\. ÉTAPE 2 — ARCHIVER L’ANCIEN WEB

==================================================



Déplacer :



`MedAICare\_V.3\_10Patients/`



vers :



`archive/legacy-web/MedAICare\_V.3\_10Patients/`



Règles :



\- ne pas supprimer le contenu ;

\- conserver l’historique fonctionnel ;

\- ne pas le lancer dans les workflows principaux ;

\- ne pas le publier ;

\- ne pas l’utiliser comme base du nouveau portail ;

\- ajouter un README dans l’archive.



Créer :



`archive/legacy-web/README.md`



Contenu minimal :



```text

\# Legacy Web Archive



Ce dossier contient l’ancienne application web du prototype initial MediAI Care.

Il est conservé pour référence historique et soutenance éventuelle.



Il ne fait plus partie de la structure active du produit MediAI Care v1.0.



Structure active :

\- web-portal/ : plateforme web publique

\- mobile/ : application principale patient/clinicien

\- backend/ : API source de vérité



Ne pas déployer ce dossier.

Ne pas l’utiliser comme point d’accès principal.

```



==================================================

6\. ÉTAPE 3 — DÉSACTIVER LA PUBLICATION ACTUELLE

==================================================



Désactiver le déploiement actuel si celui-ci pointe vers :



`MedAICare\_V.3\_10Patients/dist`



ou vers l’ancien dossier archivé.



Ne pas remplacer temporairement par :

\- backend ;

\- mobile ;

\- ancien web.



Documenter :



\- publication actuelle désactivée ;

\- cible future = `web-portal/dist`;

\- aucun déploiement actif ne pointe vers l’archive.



Si Replit nécessite une config de déploiement, la mettre en état neutre ou documenter clairement qu’elle doit être reconfigurée après création du portail.



==================================================

7\. ÉTAPE 4 — CRÉER LE NOUVEAU WEB PORTAL

==================================================



Créer un nouveau dossier actif :



`web-portal/`



Stack recommandée :

\- React 18 ;

\- TypeScript ;

\- Vite ;

\- CSS/Tailwind si déjà disponible ;

\- pas de dépendance lourde inutile.



Le portail doit être indépendant :

\- ne pas importer l’ancien web ;

\- ne pas dépendre du mobile ;

\- ne pas dépendre du backend pour afficher la page publique ;

\- peut afficher dynamiquement les URLs mobile/API à partir de l’hôte.



Structure recommandée :



```text

web-portal/

├── package.json

├── index.html

├── vite.config.ts

├── tsconfig.json

├── src/

│   ├── main.tsx

│   ├── App.tsx

│   ├── components/

│   │   ├── Hero.tsx

│   │   ├── MobileAccess.tsx

│   │   ├── QrAccess.tsx

│   │   ├── PrototypeBadges.tsx

│   │   ├── LimitsSection.tsx

│   │   ├── ArchitectureSection.tsx

│   │   ├── DocumentationSection.tsx

│   │   └── Footer.tsx

│   ├── utils/

│   │   └── urls.ts

│   └── styles.css

└── README.md

```



==================================================

8\. ÉTAPE 5 — CONTENU OBLIGATOIRE DU WEB PORTAL

==================================================



\## 8.1 Hero



Afficher :



\- MediAI Care ;

\- “Prototype académique IoMT + IA explicable pour le suivi du diabète” ;

\- badges :

&#x20; - Données synthétiques ;

&#x20; - Open-loop strict ;

&#x20; - Non certifié ;

&#x20; - XAI support-only ;

&#x20; - API source de vérité.



CTA principal :

\- “Ouvrir l’application mobile”



CTA secondaire :

\- “Voir les limites”

\- “Documentation”

\- “Démo web legacy” uniquement si nécessaire, en bas ou secondaire.



\## 8.2 Accès mobile



Section centrale :



Titre :

\- “Application mobile MediAI Care”



Texte :

\- “Les espaces patient et clinicien sont accessibles dans l’application mobile.”



Inclure :

\- URL mobile exacte ;

\- bouton ouvrir ;

\- bouton copier le lien ;

\- QR code vers l’app mobile ;

\- instructions Replit/Expo ;

\- mention build natif si non disponible.



Si aucun APK :

\- ne pas afficher “Télécharger APK”.

\- afficher “Build natif non généré dans ce prototype.”



Si EAS guide existe :

\- lien vers le guide device.



\## 8.3 QR code



Le QR doit pointer vers l’app mobile réelle.



Cible préférée :

`https://<host>:5173/`



Si le QR `exps://` est conservé :

\- documenter son usage exact ;

\- ne pas le présenter comme téléchargement universel.



Le portail doit indiquer :

\- “Lien de démonstration Replit temporaire”

\- “Valable pendant l’exécution du projet.”



\## 8.4 Espaces patient / clinicien



Deux blocs :



Patient :

\- données synthétiques ;

\- risque via backend ;

\- XAI affichée ;

\- recommandations approuvées ;

\- aucune dose.



Clinicien :

\- cohorte ;

\- détail patient ;

\- XAI ;

\- suggestions open-loop ;

\- validation/rejet ;

\- audit.



Phrase obligatoire :

“Ces espaces sont dans l’application mobile, pas dans ce portail web.”



\## 8.5 Limites



Mentionner :



\- non certifié ;

\- pas dispositif médical ;

\- pas usage clinique ;

\- pas données réelles ;

\- pas validation clinique ;

\- pas performance clinique ;

\- ML benchmark synthétique ;

\- XAI ≠ causalité ;

\- XAI ≠ justification clinique ;

\- aucune dose ;

\- aucune décision automatique ;

\- conformité RGPD/HDS/MDR/IEC non opérationnelle.



\## 8.6 Architecture



Schéma simple :



```text

Web Portal

&#x20;  ↓

Mobile App

&#x20;  ↓

Backend API

&#x20;  ↓

PostgreSQL + ML + XAI + Recommendations

```



Phrase :

“Le portail présente. Le mobile affiche. Le backend est la source de vérité.”



\## 8.7 Documentation / Soutenance



Liens vers docs :



\- architecture finale ;

\- API contracts ;

\- sécurité ;

\- mobile ;

\- limites ;

\- soutenance ;

\- rapports de phases.



\## 8.8 Footer



Inclure :

\- version ;

\- statut académique ;

\- lien legacy secondaire si conservé ;

\- copyright / proprietary ;

\- non-certification.



==================================================

9\. ÉTAPE 6 — WORKFLOWS REPLIT

==================================================



Mettre à jour les workflows :



\## 9.1 Web Portal



Workflow :

`Web Portal` ou `Start application`



Dossier :

`web-portal/`



Commande :

```bash

cd web-portal \&\& npm install \&\& npm run dev -- --host 0.0.0.0 --port 5000

```



Port :

`5000`



Rôle :

portail public, preview principal.



\## 9.2 Mobile App



Dossier :

`mobile/`



Commande :

```bash

cd mobile \&\& npx expo start --web --port 5173 --clear

```



Port :

`5173`



Rôle :

app patient/clinicien.



\## 9.3 Backend API



Dossier :

`backend/`



Commande existante FastAPI.



Port :

`8000`



Docs :

`/docs`



\## 9.4 Ancien workflow



Supprimer ou désactiver tout workflow lançant :



`archive/legacy-web/MedAICare\_V.3\_10Patients`



ou l’ancien chemin.



==================================================

10\. ÉTAPE 7 — APPLICATION MOBILE FONCTIONNELLE

==================================================



Vérifier que l’app mobile port 5173 fonctionne réellement.



Obligatoire :



\- aucune erreur Expo ;

\- aucune erreur Metro ;

\- aucune erreur alias ;

\- aucun `\_expo-static-error` ;

\- login visible ;

\- login patient fonctionnel ;

\- login clinicien fonctionnel ;

\- espace patient visible ;

\- espace clinicien visible ;

\- UI Phase 8.5 visible ;

\- marqueur “MediAI Care Mobile · UI Phase 8.5” visible.



Corriger toute erreur telle que :



\- `Unable to resolve module`;

\- composant manquant ;

\- import cassé ;

\- alias `@/` cassé ;

\- casse de fichier incorrecte.



==================================================

11\. ÉTAPE 8 — TESTS / VALIDATION

==================================================



\## 11.1 Commandes obligatoires



Exécuter :



```bash

cd web-portal \&\& npm install \&\& npm run build

cd mobile \&\& npx tsc --noEmit

cd mobile \&\& npx jest --ci --runInBand

cd backend \&\& python scripts/validate\_backend.py

```



Résultat attendu :

\- web build OK ;

\- mobile typecheck OK ;

\- mobile tests OK ;

\- backend smoke OK.



\## 11.2 Expo smoke



Exécuter ou vérifier :



```bash

cd mobile \&\& npx expo start --web --port 5173 --clear

```



Puis confirmer :

\- URL accessible ;

\- pas d’erreur Expo ;

\- pas d’erreur module.



\## 11.3 Checklist portail



Créer :



`docs/web/WEB\_PORTAL\_QA\_CHECKLIST.md`



Valider :



\- portail accessible ;

\- CTA mobile visible ;

\- QR visible ;

\- lien mobile fonctionne ;

\- aucun login web principal ;

\- legacy secondaire ;

\- disclaimers visibles ;

\- pas de certification ;

\- pas de performance clinique ;

\- architecture visible ;

\- limites visibles.



\## 11.4 Checklist mobile



Créer ou mettre à jour :



`docs/mobile/MOBILE\_ACCESS\_QA\_CHECKLIST.md`



Valider :



\- login patient ;

\- login clinicien ;

\- espace patient ;

\- espace clinicien ;

\- marqueur UI ;

\- XAI warnings ;

\- recommandations ;

\- aucun calcul local métier ;

\- token sécurisé.



==================================================

12\. DOCUMENTATION À METTRE À JOUR

==================================================



Mettre à jour :



\- `replit.md`

\- `docs/web/WEB\_PORTAL\_STRATEGY.md`

\- `docs/web/MOBILE\_DISTRIBUTION\_STRATEGY.md`

\- `docs/web/WEB\_PORTAL\_QA\_CHECKLIST.md`

\- `docs/mobile/MOBILE\_ACCESS\_QA\_CHECKLIST.md`

\- `docs/demo/E2E\_DEMO\_SCRIPT.md`

\- `docs/demo/SOUTENANCE\_SCENARIO.md`

\- `docs/mobile/PHASE\_8\_5\_UI\_UX\_POLISH.md`

\- `docs/migration/RAPPORT\_PHASE\_8\_5\_2.md`



Ajouter :

\- `archive/legacy-web/README.md`

\- `web-portal/README.md`



==================================================

13\. CRITÈRES D’ACCEPTATION

==================================================



Phase 8.5.2 est validable uniquement si :



\- ancien web déplacé dans `archive/legacy-web/` ;

\- aucun workflow principal ne lance l’ancien web ;

\- publication actuelle désactivée ou ne pointe plus vers l’ancien web ;

\- nouveau `web-portal/` existe ;

\- `web-portal/` s’ouvre sur port 5000 ;

\- portail web clair et moderne ;

\- CTA mobile visible ;

\- QR/lien mobile visible ;

\- lien mobile fonctionne ;

\- app mobile s’ouvre sur port 5173 ;

\- app mobile sans erreur Expo ;

\- login patient fonctionne ;

\- login clinicien fonctionne ;

\- backend `/docs` fonctionne ;

\- web build OK ;

\- mobile typecheck OK ;

\- mobile Jest OK ;

\- backend smoke OK ;

\- docs mises à jour ;

\- aucune logique métier modifiée ;

\- aucune donnée réelle ;

\- open-loop maintenu ;

\- XAI support-only maintenu ;

\- non-certification visible.



Si un point échoue :

ne pas démarrer Phase 9.



==================================================

14\. RAPPORT FINAL ATTENDU

==================================================



Créer :



`docs/migration/RAPPORT\_PHASE\_8\_5\_2.md`



Structure obligatoire :



1\. décision officielle ;

2\. audit initial ;

3\. archivage legacy ;

4\. publication désactivée ;

5\. création web-portal ;

6\. workflows/ports ;

7\. portail web : contenu visible ;

8\. mobile : preuve de fonctionnement ;

9\. QR/lien mobile ;

10\. backend API ;

11\. fichiers modifiés ;

12\. tests exécutés ;

13\. codes de sortie ;

14\. checklists ;

15\. limites restantes ;

16\. confirmations non-régression ;

17\. décision proposée pour Phase 9.



==================================================

15\. SORTIE FINALE DANS LA CONVERSATION

==================================================



À la fin, répondre uniquement avec :



\- Web Portal : OK / KO ;

\- Mobile App : OK / KO ;

\- Backend API : OK / KO ;

\- Legacy Web archivé : OK / KO ;

\- Publication ancienne désactivée : OK / KO ;

\- Lien mobile : OK / KO ;

\- QR mobile : OK / KO ;

\- Tests : OK / KO ;

\- Fichiers principaux modifiés ;

\- Prochaine décision.



Phrase finale obligatoire :



“Phase 8.5.2 livrée. En attente de validation superviseur avant Phase 9.”

