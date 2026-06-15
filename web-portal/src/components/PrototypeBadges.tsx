const BADGES: { label: string; title: string }[] = [
  { label: "IoMT", title: "Internet of Medical Things — données capteurs centralisées" },
  { label: "IA explicable", title: "Prédictions accompagnées d'explications lisibles (XAI)" },
  { label: "Patient & clinicien", title: "Une expérience pensée pour les deux profils" },
  { label: "Open-loop supervisé", title: "Aide à la décision ; la validation humaine reste requise" },
];

export default function ProductBadges() {
  return (
    <ul className="flex flex-wrap gap-2.5" aria-label="Capacités de la plateforme">
      {BADGES.map((b) => (
        <li
          key={b.label}
          title={b.title}
          className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-brand-800 shadow-sm backdrop-blur transition hover:border-brand-300 hover:bg-white"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
          {b.label}
        </li>
      ))}
    </ul>
  );
}
