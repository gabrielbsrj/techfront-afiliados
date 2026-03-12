"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Zap, Clock, Target, BarChart3 } from "lucide-react";
import MLProductGrid from "@/components/MLProductGrid";

const translations = {
  es: { back: "Volver al Inicio", title: "Maximiza tu", highlight: "Productividad", subtitle: "Descubre las mejores estrategias, herramientas y técnicas para multiplicar tu rendimiento usando tecnología e IA.", section1Title: "Automatización inteligente", section1: "Herramientas como Zapier, Make y los agentes de IA pueden automatizar hasta el 70% de tus tareas repetitivas, liberándote para trabajo creativo y estratégico.", section2Title: "Gestión del tiempo", section2: "La técnica Pomodoro combinada con apps de IA para planificación puede aumentar tu productividad en más de 300%. La clave está en automatizar la disciplina.", section3Title: "Métricas y KPIs", section3: "Lo que no se mide no se mejora. Herramientas de tracking personal y dashboards inteligentes te permiten visualizar exactamente dónde pierdes tiempo.", products: "Equipos para Máxima Productividad ⚡" },
  en: { back: "Back to Home", title: "Maximize your", highlight: "Productivity", subtitle: "Discover the best strategies, tools and techniques to multiply your output using technology and AI.", section1Title: "Smart automation", section1: "Tools like Zapier, Make and AI agents can automate up to 70% of your repetitive tasks, freeing you for creative and strategic work.", section2Title: "Time management", section2: "The Pomodoro technique combined with AI planning apps can increase your productivity by over 300%. The key is automating discipline.", section3Title: "Metrics and KPIs", section3: "What isn't measured can't be improved. Personal tracking tools and smart dashboards let you visualize exactly where you're losing time.", products: "Equipment for Maximum Productivity ⚡" },
  pt: { back: "Voltar para Home", title: "Maximize sua", highlight: "Produtividade", subtitle: "Descubra as melhores estratégias, ferramentas e técnicas para multiplicar seu rendimento usando tecnologia e IA.", section1Title: "Automação inteligente", section1: "Ferramentas como Zapier, Make e agentes de IA podem automatizar até 70% das suas tarefas repetitivas, liberando você para trabalho criativo e estratégico.", section2Title: "Gestão do tempo", section2: "A técnica Pomodoro combinada com apps de IA para planejamento pode aumentar sua produtividade em mais de 300%. A chave está em automatizar a disciplina.", section3Title: "Métricas e KPIs", section3: "O que não se mede não se melhora. Ferramentas de tracking pessoal e dashboards inteligentes te permitem visualizar exatamente onde você está perdendo tempo.", products: "Equipamentos para Máxima Produtividade ⚡" }
};

export default function Produtividade() {
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
            <Zap size={32} />
          </div>
          <h3 style={{ fontSize: "1.3rem" }}>{t.section1Title}</h3>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>{t.section1}</p>
        </div>

        <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ padding: "1rem", background: "rgba(139, 92, 246, 0.1)", borderRadius: "12px", width: "fit-content", color: "var(--secondary)" }}>
            <Clock size={32} />
          </div>
          <h3 style={{ fontSize: "1.3rem" }}>{t.section2Title}</h3>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>{t.section2}</p>
        </div>

        <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ padding: "1rem", background: "rgba(59, 130, 246, 0.1)", borderRadius: "12px", width: "fit-content", color: "var(--accent)" }}>
            <BarChart3 size={32} />
          </div>
          <h3 style={{ fontSize: "1.3rem" }}>{t.section3Title}</h3>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>{t.section3}</p>
        </div>
      </div>

      <MLProductGrid searchQuery="monitor ergonomico home office" siteId="MLB" limit={4} title={t.products} />
    </div>
  );
}
