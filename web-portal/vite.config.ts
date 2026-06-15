import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Portail web public MediAI Care. Build single-file (dist/index.html) pour un
// déploiement statique simple, identique au tooling éprouvé du projet.
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
    // Preview Replit proxifié (iframe d'origine différente) : autoriser tous les hôtes.
    allowedHosts: true,
  },
});
