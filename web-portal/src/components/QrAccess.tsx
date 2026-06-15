import { useEffect, useState } from "react";
import QRCode from "qrcode";

type QrAccessProps = {
  mobileUrl: string;
};

export default function QrAccess({ mobileUrl }: QrAccessProps) {
  const [dataUrl, setDataUrl] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;
    if (!mobileUrl) {
      setDataUrl("");
      return;
    }
    QRCode.toDataURL(mobileUrl, { width: 240, margin: 1, color: { dark: "#173b3e", light: "#ffffff" } })
      .then((url) => {
        if (!cancelled) {
          setDataUrl(url);
          setError(false);
        }
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [mobileUrl]);

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-brand-100 bg-brand-50/40 p-6 text-center">
      <p className="mb-4 text-sm font-semibold text-brand-800">Scanner pour ouvrir l'app mobile</p>
      <div className="rounded-xl bg-white p-3 shadow-sm">
        {dataUrl && !error ? (
          <img src={dataUrl} alt="QR code vers l'application mobile MediAI Care" width={200} height={200} />
        ) : (
          <div className="flex h-[200px] w-[200px] items-center justify-center text-xs text-ink-700/60">
            {error ? "QR indisponible" : "Génération du QR…"}
          </div>
        )}
      </div>
      <p className="mt-4 max-w-[240px] text-xs text-ink-700/70">
        Lien de démonstration Replit temporaire, valable pendant l'exécution du projet. Pointe vers
        l'application mobile (port 5173) — ce n'est pas un téléchargement universel.
      </p>
    </div>
  );
}
