const FRAME: string[] = [
  "Démonstration académique",
  "Données de démonstration",
  "Validation clinique non réalisée",
  "Décision humaine obligatoire",
  "Cadre réglementaire à formaliser avant tout usage réel",
];

export default function AcademicFrame() {
  return (
    <section id="cadre" className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-24" aria-labelledby="frame-title">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-300">Transparence</p>
            <h2 id="frame-title" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Cadre académique
            </h2>
            <p className="mt-4 max-w-xl text-white/75">
              MediAI Care est présenté ici comme un prototype académique avancé (mémoire de Master en
              Informatique Biomédicale). Les données et scénarios de démonstration sont contrôlés.
              Toute évolution vers un usage réel nécessiterait une validation clinique, une conformité
              réglementaire et un hébergement adapté.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1" data-reveal style={{ transitionDelay: "100ms" }}>
            {FRAME.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
