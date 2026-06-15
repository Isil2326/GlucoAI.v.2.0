const LAYERS = [
  { name: "Portail web", role: "Présente", detail: "Vitrine publique : présentation de la plateforme et accès à l'application." },
  { name: "Application mobile", role: "Affiche", detail: "Le produit patient/clinicien : connexion, tableaux de bord, IA explicable, recommandations." },
  { name: "Backend API", role: "Source de vérité", detail: "Authentification, données, modèles ML, explicabilité, recommandations, audit." },
  { name: "PostgreSQL · ML · XAI · Recommandations", role: "Socle", detail: "Persistance et calculs réalisés côté serveur." },
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="mx-auto max-w-6xl px-6 py-20 sm:py-24" aria-labelledby="arch-title">
      <div className="max-w-2xl" data-reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">Sous le capot</p>
        <h2 id="arch-title" className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          Une architecture claire
        </h2>
        <p className="mt-4 text-lg text-ink-700">
          Le portail présente, l'application affiche, le backend décide. Les calculs restent côté
          serveur, source de vérité unique.
        </p>
      </div>

      <ol className="mt-12 space-y-3">
        {LAYERS.map((layer, i) => (
          <li key={layer.name} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
            <div className="flex items-stretch gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-sm transition hover:border-brand-200 hover:shadow-md">
              <div className="flex w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-500 text-sm font-bold text-white">
                {i + 1}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-ink-900">{layer.name}</span>
                  <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-medium text-brand-800">
                    {layer.role}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-700">{layer.detail}</p>
              </div>
            </div>
            {i < LAYERS.length - 1 && (
              <div className="flex justify-center py-1" aria-hidden="true">
                <svg className="h-5 w-5 text-brand-300" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14m0 0-5-5m5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
