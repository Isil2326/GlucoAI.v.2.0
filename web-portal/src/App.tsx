import { useMemo } from "react";
import Hero from "./components/Hero";
import ValueSection from "./components/ValueSection";
import MobileAccess from "./components/MobileAccess";
import SpacesSection from "./components/SpacesSection";
import ArchitectureSection from "./components/ArchitectureSection";
import DocumentationSection from "./components/DocumentationSection";
import AcademicFrame from "./components/LimitsSection";
import Footer from "./components/Footer";
import { getApiDocsUrl, getMobileUrl } from "./utils/urls";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  const mobileUrl = useMemo(() => getMobileUrl(), []);
  const apiDocsUrl = useMemo(() => getApiDocsUrl(), []);

  useReveal();

  const openMobile = () => {
    if (mobileUrl) window.open(mobileUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen">
      <a
        href="#mobile"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Aller à l'accès mobile
      </a>

      <Hero onOpenMobile={openMobile} mobileUrl={mobileUrl} />

      <main>
        <ValueSection />
        <MobileAccess mobileUrl={mobileUrl} />
        <SpacesSection />
        <ArchitectureSection />
        <DocumentationSection apiDocsUrl={apiDocsUrl} />
        <AcademicFrame />
      </main>

      <Footer />
    </div>
  );
}
