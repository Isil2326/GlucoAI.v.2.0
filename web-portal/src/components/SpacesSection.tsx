const PATIENT_POINTS = [
  "Vue continue de la glycémie et des tendances",
  "Score de risque personnalisé, lisible en un coup d'œil",
  "Explications claires derrière chaque estimation",
  "Recommandations validées par un clinicien",
  "Suivi des repas, de l'activité et des capteurs",
];

const CLINICIAN_POINTS = [
  "Vue cohorte et détail patient",
  "Explications du modèle pour appuyer la lecture",
  "Suggestions d'aide à la décision, non prescriptives",
  "Validation ou ajustement par le clinicien",
  "Journal d'activité traçable",
];

function Card({
  title,
  subtitle,
  tone,
  points,
  delay,
}: {
  title: string;
  subtitle: string;
  tone: "patient" | "clinician";
  points: string[];
  delay: number;
}) {
  const isPatient = tone === "patient";
  return (
    <div
      data-reveal
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative overflow-hidden rounded-3xl border p-8 shadow-sm transition duration-300 hover:shadow-xl ${
        isPatient
          ? "border-brand-100 bg-white hover:shadow-brand-900/5"
          : "border-ink-800 bg-ink-900 text-white hover:shadow-ink-900/30"
      }`}
    >
      <div className="mb-6 flex items-center gap-3">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${
            isPatient ? "bg-brand-600 text-white" : "bg-white text-ink-900"
          }`}
        >
          {isPatient ? "P" : "C"}
        </span>
        <div>
          <h3 className={`text-lg font-semibold ${isPatient ? "text-ink-900" : "text-white"}`}>{title}</h3>
          <p className={`text-sm ${isPatient ? "text-ink-700/80" : "text-white/65"}`}>{subtitle}</p>
        </div>
      </div>
      <ul className="space-y-3.5">
        {points.map((p) => (
          <li
            key={p}
            className={`flex items-start gap-2.5 text-sm ${isPatient ? "text-ink-700" : "text-white/85"}`}
          >
            <svg
              className={`mt-0.5 h-4 w-4 shrink-0 ${isPatient ? "text-brand-500" : "text-accent-400"}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 10.7a1 1 0 1 1 1.4-1.4l3 3 6.8-6.8a1 1 0 0 1 1.4 0Z"
                clipRule="evenodd"
              />
            </svg>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SpacesSection() {
  return (
    <section id="espaces" className="mx-auto max-w-6xl px-6 py-20 sm:py-24" aria-labelledby="spaces-title">
      <div className="max-w-2xl" data-reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">Deux expériences</p>
        <h2 id="spaces-title" className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          Pensé pour le patient et le clinicien
        </h2>
        <p className="mt-4 text-lg text-ink-700">
          Les deux espaces vivent dans l'application mobile et partagent la même source de vérité.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Card title="Espace patient" subtitle="Comprendre et suivre au quotidien" tone="patient" points={PATIENT_POINTS} delay={0} />
        <Card title="Espace clinicien" subtitle="Décider, avec le contexte complet" tone="clinician" points={CLINICIAN_POINTS} delay={100} />
      </div>
    </section>
  );
}
