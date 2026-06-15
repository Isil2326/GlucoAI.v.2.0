import { useState } from "react";
import QrAccess from "./QrAccess";

type MobileAccessProps = {
  mobileUrl: string;
};

export default function MobileAccess({ mobileUrl }: MobileAccessProps) {
  const [copied, setCopied] = useState(false);
  const [frameLoaded, setFrameLoaded] = useState(false);
  const [frameError, setFrameError] = useState(false);

  const handleCopy = async () => {
    if (!mobileUrl) return;
    try {
      await navigator.clipboard.writeText(mobileUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="mobile" className="mx-auto max-w-6xl px-6 py-20 sm:py-24" aria-labelledby="mobile-title">
      {/* Accès natif Expo Go — mis en avant pour la soutenance */}
      <div className="mb-16" data-reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">Application mobile</p>
        <h2 id="mobile-title" className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          Accéder à l'application
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-700">
          L'application est disponible en deux modes : natif via Expo Go (expérience optimale sur téléphone)
          ou directement dans le navigateur web.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-20">
        {/* Carte Expo Go — accès natif recommandé */}
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl bg-ink-900 p-8 text-white shadow-2xl shadow-ink-900/20"
        >
          <div
            className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-500/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-xl font-bold text-white">
                📱
              </div>
              <div>
                <p className="font-bold text-white text-lg">Expo Go</p>
                <p className="text-white/60 text-sm">Accès natif — recommandé pour la soutenance</p>
              </div>
            </div>

            <ol className="space-y-4 mb-6">
              {[
                { n: "1", text: 'Dans Replit, démarrer le workflow « Expo Go (native) »' },
                { n: "2", text: "Installer Expo Go sur votre téléphone (App Store / Play Store)" },
                { n: "3", text: "Scanner le QR code affiché dans la console du workflow" },
                { n: "4", text: "L'application native s'ouvre — utiliser les identifiants de démo" },
              ].map((s) => (
                <li key={s.n} className="flex items-start gap-3 text-sm text-white/90">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                    {s.n}
                  </span>
                  {s.text}
                </li>
              ))}
            </ol>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold text-white/80 mb-2">Identifiants de démonstration</p>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/60">Patient</span>
                  <span className="font-mono text-white/90">patient@demo.fr</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/60">Clinicien</span>
                  <span className="font-mono text-white/90">clinicien@demo.fr</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/60">Mot de passe</span>
                  <span className="font-mono text-white/90">DemoMediAI2026!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carte navigateur web — QR + lien */}
        <div
          data-reveal
          style={{ transitionDelay: "80ms" }}
          className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-xl">
              🌐
            </div>
            <div>
              <p className="font-bold text-ink-900 text-lg">Navigateur web</p>
              <p className="text-ink-700/70 text-sm">Accès instantané sans installation</p>
            </div>
          </div>

          <div className="mb-5">
            <QrAccess mobileUrl={mobileUrl} />
          </div>

          <div className="flex flex-col gap-2">
            <a
              href={mobileUrl || undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!mobileUrl}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-brand-600/20 transition hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Ouvrir en plein écran
              <span aria-hidden="true">↗</span>
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
            >
              {copied ? "Lien copié ✓" : "Copier le lien"}
            </button>
          </div>
        </div>
      </div>

      {/* Aperçu live embarqué */}
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div data-reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            Application en direct
          </span>

          <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink-900">
            Aperçu live de l'app réelle
          </h3>
          <p className="mt-4 max-w-xl text-lg text-ink-700">
            L'aperçu ci-contre n'est pas une maquette — c'est l'application mobile réelle, ses écrans,
            ses parcours patient et clinicien connectés au backend.
          </p>
          <p className="mt-3 text-sm text-ink-700/70">
            Aperçu via Expo Web (port 5173), actif pendant la session de démonstration.
          </p>
          <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50/60 p-3 max-w-sm">
            <p className="text-xs font-mono break-all text-ink-900">{mobileUrl || "—"}</p>
          </div>
        </div>

        {/* Cadre téléphone */}
        <div className="flex justify-center" data-reveal style={{ transitionDelay: "120ms" }}>
          <div className="relative w-[280px]">
            <div
              className="pointer-events-none absolute -inset-6 rounded-[3.5rem] bg-gradient-to-br from-brand-200/40 to-accent-400/20 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative aspect-[9/19] w-full rounded-[2.75rem] border-[10px] border-ink-900 bg-ink-900 shadow-2xl shadow-ink-900/30">
              <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-ink-900" />
              <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-white">
                {mobileUrl && !frameError ? (
                  <>
                    {!frameLoaded && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-brand-50">
                        <span className="text-xs font-medium text-brand-700">Chargement…</span>
                      </div>
                    )}
                    <iframe
                      src={mobileUrl}
                      title="Aperçu en direct de l'application mobile MediAI Care"
                      loading="lazy"
                      onLoad={() => setFrameLoaded(true)}
                      onError={() => setFrameError(true)}
                      className="h-full w-full border-0"
                    />
                  </>
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
                    <p className="text-xs text-ink-700/70">Aperçu live indisponible hors session.</p>
                    {mobileUrl && (
                      <a
                        href={mobileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-700"
                      >
                        Ouvrir l'application
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-ink-700/60">
              Application réelle en cours d'exécution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
