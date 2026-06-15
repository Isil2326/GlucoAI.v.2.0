---
name: web-portal publishing constraint
description: Why the portal's live mobile preview/link breaks once published, and what a full publish requires.
---

The `web-portal/` deploys as a **static site** (`web-portal/dist`, single-file). Its
mobile preview iframe and "open app" link are derived at runtime from
`window.location` host + `:5173` (mobile Expo Web) and `:8000` (FastAPI) — see
`web-portal/src/utils/urls.ts`.

**Rule:** those ports only exist while the dev workspace is running. On a published
`.replit.app` static domain (port 443 only) they are unreachable, so the live preview
and link work **only during an active dev/demo session**.

**Why:** Replit gives one deployment target per repl; a static deploy serves files,
not the Expo dev server or the Python backend.

**How to apply:** A fully functional published app needs the mobile app exported as
static web AND the FastAPI+Postgres backend deployed separately (cost implication).
For a soutenance, publishing the portal as a showcase while keeping the workspace
running for the live link is a valid, zero-extra-cost approach. The portal already
degrades gracefully (iframe onError → "Aperçu live indisponible hors session").
