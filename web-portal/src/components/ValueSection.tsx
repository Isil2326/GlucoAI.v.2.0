const FEATURES = [
  {
    title: "Centralisation des données",
    desc: "Glycémie, capteurs IoMT, repas et activité réunis dans une vue patient continue.",
    icon: (
      <path d="M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Estimation du risque glycémique",
    desc: "Des scores de risque calculés côté serveur à partir de la trajectoire du patient.",
    icon: (
      <path d="M3 17l5-6 4 4 4-7 5 6M3 21h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "IA explicable",
    desc: "Chaque prédiction est accompagnée d'explications lisibles, pensées pour la confiance.",
    icon: (
      <path d="M12 3a7 7 0 0 0-4 12.7V18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3A7 7 0 0 0 12 3ZM9.5 22h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Workflow patient–clinicien",
    desc: "Le clinicien garde la main : les suggestions sont validées avant toute action.",
    icon: (
      <path d="M16 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-6 9c0-2.8 2.7-5 6-5m12 5c0-2.8-2.7-5-6-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function ValueSection() {
  return (
    <section id="plateforme" className="mx-auto max-w-6xl px-6 py-20 sm:py-24" aria-labelledby="value-title">
      <div className="max-w-2xl" data-reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">La plateforme</p>
        <h2 id="value-title" className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          Une expérience produit pour le suivi du diabète
        </h2>
        <p className="mt-4 text-lg text-ink-700">
          MediAI Care relie les données du patient, l'estimation du risque et l'IA explicable dans un
          parcours fluide, conçu autour de la décision du clinicien.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            data-reveal
            style={{ transitionDelay: `${i * 80}ms` }}
            className="group relative overflow-hidden rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5"
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent opacity-0 transition group-hover:opacity-100"
              aria-hidden="true"
            />
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {f.icon}
              </svg>
            </div>
            <h3 className="mt-4 text-base font-semibold text-ink-900">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
