import ProductBadges from "./PrototypeBadges";

type HeroProps = {
  onOpenMobile: () => void;
  mobileUrl: string;
};

export default function Hero({ onOpenMobile, mobileUrl }: HeroProps) {
  return (
    <header className="relative overflow-hidden">
      {/* Fonds décoratifs */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-[#f5f8f8]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-brand-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-48 -left-32 h-96 w-96 rounded-full bg-accent-400/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <nav className="flex items-center justify-between py-6" aria-label="Navigation principale">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-base font-bold text-white shadow-md shadow-brand-600/25">
              M
            </div>
            <span className="text-lg font-semibold tracking-tight text-ink-900">MediAI Care</span>
          </div>
          <div className="hidden items-center gap-7 text-sm font-medium text-ink-700 md:flex">
            <a href="#plateforme" className="transition hover:text-brand-700">Plateforme</a>
            <a href="#mobile" className="transition hover:text-brand-700">Application</a>
            <a href="#architecture" className="transition hover:text-brand-700">Architecture</a>
            <a href="#cadre" className="transition hover:text-brand-700">Cadre académique</a>
            <button
              type="button"
              onClick={onOpenMobile}
              className="rounded-lg bg-brand-600 px-4 py-2 text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Ouvrir l'application
            </button>
          </div>
        </nav>

        <div className="grid items-center gap-12 pt-8 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pt-14 lg:pb-28">
          {/* Colonne texte */}
          <div data-reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-brand-800 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
              Prototype académique — démonstration contrôlée
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.04] tracking-tight text-ink-900 sm:text-6xl">
              Le suivi du diabète,
              <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
                {" "}augmenté par l'IA explicable
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-700 sm:text-xl">
              Plateforme IoMT et IA explicable pour le suivi personnalisé du diabète — un
              environnement patient–clinicien qui centralise les données, estime le risque
              glycémique et rend chaque prédiction compréhensible.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenMobile}
                className="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="7" y="2.5" width="10" height="19" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                  <line x1="10.5" y1="18.5" x2="13.5" y2="18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                Ouvrir l'application mobile
                <span className="transition group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </button>
              <a
                href="#mobile"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-200 bg-white px-6 py-3.5 text-sm font-semibold text-brand-800 transition hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Voir l'app en direct
              </a>
            </div>

            <div className="mt-10">
              <ProductBadges />
            </div>
          </div>

          {/* Colonne visuel produit */}
          <div data-reveal style={{ transitionDelay: "120ms" }} className="relative">
            <HeroVisual />
            <p className="mt-5 break-all text-center text-xs text-ink-700/55">
              Lien de démonstration temporaire&nbsp;: <span className="font-mono">{mobileUrl || "—"}</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

/** Aperçu produit stylisé : signal glycémique, score de risque et explication XAI. */
function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-md">
      <div className="animate-float-soft rounded-3xl border border-brand-100 bg-white/90 p-6 shadow-2xl shadow-brand-900/10 backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-ink-700/60">Patient · démo</p>
            <p className="mt-0.5 text-sm font-semibold text-ink-900">Tendance glycémique · 24 h</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/12 px-2.5 py-1 text-xs font-semibold text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
            En ligne
          </span>
        </div>

        {/* Courbe de signal */}
        <div className="mt-4 rounded-2xl bg-gradient-to-b from-brand-50/70 to-white p-3">
          <svg viewBox="0 0 320 120" className="h-28 w-full" role="img" aria-label="Courbe de tendance glycémique (données de démonstration)">
            <defs>
              <linearGradient id="sigFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#246e72" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#246e72" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 92 L40 78 L80 86 L120 54 L160 66 L200 34 L240 50 L280 28 L320 40 L320 120 L0 120 Z"
              fill="url(#sigFill)"
            />
            <path
              className="signal-path"
              d="M0 92 L40 78 L80 86 L120 54 L160 66 L200 34 L240 50 L280 28 L320 40"
              fill="none"
              stroke="#246e72"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="280" cy="28" r="4" fill="#246e72" />
            <circle cx="280" cy="28" r="8" fill="#246e72" opacity="0.18" />
          </svg>
        </div>

        {/* Score de risque + explication */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-brand-100 bg-white p-4">
            <p className="text-xs font-medium text-ink-700/60">Score de risque</p>
            <p className="mt-1 text-2xl font-bold text-ink-900">
              0,28 <span className="text-sm font-semibold text-brand-600">faible</span>
            </p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-brand-50">
              <div className="h-full w-[28%] rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
            </div>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-white p-4">
            <p className="text-xs font-medium text-ink-700/60">IA explicable</p>
            <ul className="mt-1.5 space-y-1.5">
              <li className="flex items-center justify-between text-xs">
                <span className="text-ink-700">Variabilité</span>
                <span className="font-semibold text-brand-700">+ fort</span>
              </li>
              <li className="flex items-center justify-between text-xs">
                <span className="text-ink-700">Activité</span>
                <span className="font-semibold text-brand-700">− modéré</span>
              </li>
              <li className="flex items-center justify-between text-xs">
                <span className="text-ink-700">Repas</span>
                <span className="font-semibold text-brand-700">+ léger</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-3 text-[11px] leading-snug text-ink-700/55">
          Illustration — données 100&nbsp;% synthétiques. Aide à la décision open-loop, validée par un
          clinicien.
        </p>
      </div>

      {/* Pastille flottante */}
      <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-brand-100 bg-white px-4 py-3 shadow-xl shadow-brand-900/10 sm:block">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div>
            <p className="text-xs font-semibold text-ink-900">Décision supervisée</p>
            <p className="text-[11px] text-ink-700/60">Le clinicien garde la main</p>
          </div>
        </div>
      </div>
    </div>
  );
}
