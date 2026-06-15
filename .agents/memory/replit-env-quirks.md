---
name: Replit env quirks (main agent)
description: Contraintes d'environnement non évidentes rencontrées en travaillant comme main agent sur ce repo.
---

# Quirks environnement Replit (main agent)

- **`git mv` est bloqué** pour le main agent (commande git mutative interdite par le sandbox).
  **Comment appliquer :** pour déplacer/renommer des fichiers, utiliser `mv` simple (opération
  filesystem, non-git). Le commit automatique de fin de tâche prend en charge le versioning.
  **Pourquoi :** les commandes git destructives sont déléguées/protégées au niveau plateforme.

- **Secret applicatif dans `.replit`** : ce repo stocke `JWT_SECRET_KEY` en clair dans
  `[userenv.shared]` de `.replit` (versionné). C'est une variable d'environnement, pas un secret
  géré. **Comment appliquer :** ne jamais y ajouter de secret ; pour les secrets, utiliser le
  store Secrets (global, non versionné) via l'outillage Replit. Toute correction = consentement
  utilisateur (rotation possible → casse le backend en cours).
