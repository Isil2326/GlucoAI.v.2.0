/**
 * Dérivation dynamique des URLs à partir de l'hôte courant.
 *
 * Le portail est SERVI sur le port public (5000 → externalPort 80 en preview
 * Replit). L'application mobile (Expo Web) et le backend FastAPI sont exposés sur
 * d'autres ports du même hôte de preview. On ne CODE EN DUR aucun domaine : on
 * dérive tout de `window.location` pour rester valable sur n'importe quel hôte
 * de preview Replit. Ces liens de port (5173 / 8000) sont des liens de
 * DÉMONSTRATION temporaires, valables uniquement pendant l'exécution du projet.
 */

const MOBILE_PORT = 5173;
const API_PORT = 8000;

function origin(): { protocol: string; hostname: string } | null {
  if (typeof window === "undefined") return null;
  return { protocol: window.location.protocol, hostname: window.location.hostname };
}

/** URL de l'application mobile (Expo Web, port 5173). */
export function getMobileUrl(): string {
  const o = origin();
  if (!o) return "";
  return `${o.protocol}//${o.hostname}:${MOBILE_PORT}`;
}

/** URL de base de l'API backend (FastAPI, port 8000). */
export function getApiBaseUrl(): string {
  const o = origin();
  if (!o) return "";
  return `${o.protocol}//${o.hostname}:${API_PORT}`;
}

/** URL de la documentation OpenAPI interactive du backend. */
export function getApiDocsUrl(): string {
  const base = getApiBaseUrl();
  return base ? `${base}/docs` : "";
}
