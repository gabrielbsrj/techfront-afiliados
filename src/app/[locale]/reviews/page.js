"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Star, Monitor, Headphones, Keyboard } from "lucide-react";
import MLProductGrid from "@/components/MLProductGrid";

const translations = {
  es: { back: "Volver al Inicio", title: "Reviews de", highlight: "Tecnología", subtitle: "Análisis honestos y detallados de los mejores periféricos, laptops y herramientas para profesionales de tecnología.", cat1: "Periféricos", cat1desc: "Análisis de los mejores mouse, teclados y headsets para productividad y gaming.", cat2: "Monitores", cat2desc: "Comparativas de monitores ultrawide, 4K y de alta frecuencia para trabajo y entretenimiento.", cat3: "Audio", cat3desc: "Reviews de audífonos, speakers y micrófonos para videollamadas, podcasts y música.", products: "Los Más Vendidos del Momento ⭐" },
  en: { back: "Back to Home", title: "Tech", highlight: "Reviews", subtitle: "Honest and detailed analysis of the best peripherals, laptops and tools for technology professionals.", cat1: "Peripherals", cat1desc: "Analysis of the best mice, keyboards and headsets for productivity and gaming.", cat2: "Monitors", cat2desc: "Comparisons of ultrawide, 4K and high-refresh monitors for work and entertainment.", cat3: "Audio", cat3desc: "Reviews of headphones, speakers and microphones for video calls, podcasts and music.", products: "Best Sellers Right Now ⭐" },
  pt: { back: "Voltar para Home", title: "Reviews de", highlight: "Tecnologia", subtitle: "Análises honestas e detalhadas dos melhores periféricos, laptops e ferramentas para profissionais de tecnologia.", cat1: "Periféricos", cat1desc: "Análise dos melhores mouses, teclados e headsets para produtividade e gaming.", cat2: "Monitores", cat2desc: "Comparativos de monitores ultrawide, 4K e de alta frequência para trabalho e entretenimento.", cat3: "Áudio", cat3desc: "Reviews de fones, caixas de som e microfones para videochamadas, podcasts e música.", products: "Mais Vendidos do Momento ⭐" }
};

export default function Reviews() {
  const params = useParams();
  const locale = params.locale || "es";
  const t = translations[locale] || translations.es;

  return (
    <div className="container" style={{ padding: "4rem 1.5rem" }}>
      <Link href={`/${locale}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", marginBottom: "2rem", fontWeight: "500" }}>
        <ArrowLeft size={16} /> {t.back}
      </Link>

      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          {t.title} <span className="text-gradient">{t.highlight}</span>
        </h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>{t.subtitle}</p>
      </div>

      <div className="grid-cards" style={{ marginBottom: "4rem" }}>
        <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ padding: "1rem", background: "rgba(6, 182, 212, 0.1)", borderRadius: "12px", width: "fit-content", color: "var(--primary)" }}>
            <Keyboard size={32} />
          </div>
          <h3 style={{ fontSize: "1.3rem" }}>{t.cat1}</h3>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>{t.cat1desc}</p>
        </div>

        <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ padding: "1rem", background: "rgba(139, 92, 246, 0.1)", borderRadius: "12px", width: "fit-content", color: "var(--secondary)" }}>
            <Monitor size={32} />
          </div>
          <h3 style={{ fontSize: "1.3rem" }}>{t.cat2}</h3>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>{t.cat2desc}</p>
        </div>

        <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ padding: "1rem", background: "rgba(59, 130, 246, 0.1)", borderRadius: "12px", width: "fit-content", color: "var(--accent)" }}>
            <Headphones size={32} />
          </div>
          <h3 style={{ fontSize: "1.3rem" }}>{t.cat3}</h3>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>{t.cat3desc}</p>
        </div>
      </div>

      <MLProductGrid searchQuery="mouse gamer logitech" siteId="MLB" limit={4} title={t.products} />
    </div>
  );
}
