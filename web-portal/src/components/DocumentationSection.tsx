type DocLink = { label: string; desc: string };

const DOCS: DocLink[] = [
  { label: "Architecture finale", desc: "docs/architecture/FINAL_ARCHITECTURE.md" },
  { label: "Contrats API", desc: "docs/api/API_V1_CONTRACTS.md" },
  { label: "Sécurité", desc: "docs/security/ (RBAC, audit, mobile, tokens)" },
  { label: "Mobile", desc: "docs/mobile/ (app, accès, build device)" },
  { label: "Limites", desc: "LIMITATIONS.md · docs/compliance/" },
  { label: "Soutenance", desc: "docs/demo/SOUTENANCE_SCENARIO.md" },
  { label: "Rapports de phases", desc: "docs/migration/RAPPORT_PHASE_*.md" },
];

type DocumentationSectionProps = {
  apiDocsUrl: string;
};

export default function DocumentationSection({ apiDocsUrl }: DocumentationSectionProps) {
  return (
    <section id="documentation" className="border-y border-brand-100 bg-brand-50/40 py-20 sm:py-24" aria-labelledby="doc-title">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">Référence</p>
          <h2 id="doc-title" className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Documentation &amp; soutenance
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            La documentation de référence est versionnée dans le dépôt (dossier{" "}
            <code className="rounded bg-white px-1.5 py-0.5 font-mono text-sm text-brand-700">docs/</code>).
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DOCS.map((d, i) => (
            <div
              key={d.label}
              data-reveal
              style={{ transitionDelay: `${i * 50}ms` }}
              className="rounded-xl border border-brand-100 bg-white p-5 shadow-sm transition hover:border-brand-200 hover:shadow-md"
            >
              <p className="font-semibold text-ink-900">{d.label}</p>
              <p className="mt-1 font-mono text-xs text-ink-700/70">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 rounded-2xl border border-brand-100 bg-white p-6 shadow-sm" data-reveal>
          <p className="font-semibold text-ink-900">Documentation API interactive (backend)</p>
          <p className="mt-1 text-sm text-ink-700">
            Schéma OpenAPI / Swagger UI exposé par le backend FastAPI (port 8000), valable pendant
            l'exécution du projet.
          </p>
          <a
            href={apiDocsUrl || undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!apiDocsUrl}
            className="mt-3 inline-flex items-center gap-2 rounded-lg border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
          >
            Ouvrir <span className="font-mono">/docs</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
