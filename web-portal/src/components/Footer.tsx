const VERSION = "MediAI Care v1.0.0-prototype";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
                M
              </div>
              <span className="text-base font-semibold tracking-tight">{VERSION}</span>
            </div>
            <p className="mt-3 text-sm text-white/60">
              Prototype académique (mémoire de Master, Informatique Biomédicale) — démonstration
              contrôlée.{" "}
              <a href="#cadre" className="font-medium text-brand-300 hover:underline">
                Cadre académique &amp; limites
              </a>
              .
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/70" aria-label="Liens de pied de page">
            <a href="#plateforme" className="transition hover:text-white">Plateforme</a>
            <a href="#mobile" className="transition hover:text-white">Application</a>
            <a href="#architecture" className="transition hover:text-white">Architecture</a>
            <a href="#cadre" className="transition hover:text-white">Cadre académique</a>
          </nav>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} MediAI Care — usage académique. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
