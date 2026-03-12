"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Bot, Sparkles, Lightbulb, Rocket } from "lucide-react";
import MLProductGrid from "@/components/MLProductGrid";

const translations = {
  es: { back: "Volver al Inicio", title: "El Futuro de la", highlight: "Inteligencia Artificial", subtitle: "Cómo la IA está transformando industrias enteras y creando nuevas oportunidades para profesionales del siglo XXI.", section1Title: "¿Qué viene después?", section1: "La próxima ola de innovación en IA incluye agentes autónomos, modelos multimodales y asistentes que trabajan 24/7. Profesionales que dominen estas herramientas tendrán una ventaja competitiva enorme.", section2Title: "IA en el trabajo diario", section2: "Desde automatización de emails hasta generación de código y análisis de datos complejos, la IA ya está integrada en las rutinas de millones de profesionales alrededor del mundo.", section3Title: "Oportunidades emergentes", section3: "Prompt Engineering, AI Training, Machine Learning Operations y AI Ethics son algunas de las carreras más demandadas y mejor pagadas en el mercado tecnológico actual.", products: "Herramientas para Trabajar con IA 🤖" },
  en: { back: "Back to Home", title: "The Future of", highlight: "Artificial Intelligence", subtitle: "How AI is transforming entire industries and creating new opportunities for 21st century professionals.", section1Title: "What comes next?", section1: "The next wave of AI innovation includes autonomous agents, multimodal models, and assistants that work 24/7. Professionals who master these tools will have a massive competitive advantage.", section2Title: "AI in daily work", section2: "From email automation to code generation and complex data analysis, AI is already integrated into the routines of millions of professionals around the world.", section3Title: "Emerging opportunities", section3: "Prompt Engineering, AI Training, Machine Learning Operations and AI Ethics are some of the most in-demand and highest-paid careers in today's tech market.", products: "Tools for Working with AI 🤖" },
  pt: { back: "Voltar para Home", title: "O Futuro da", highlight: "Inteligência Artificial", subtitle: "Como a IA está transformando indústrias inteiras e criando novas oportunidades para profissionais do século XXI.", section1Title: "O que vem pela frente?", section1: "A próxima onda de inovação em IA inclui agentes autônomos, modelos multimodais e assistentes que trabalham 24/7. Profissionais que dominarem essas ferramentas terão uma vantagem competitiva enorme.", section2Title: "IA no trabalho diário", section2: "Da automação de e-mails à geração de código e análise de dados complexos, a IA já está integrada nas rotinas de milhões de profissionais ao redor do mundo.", section3Title: "Oportunidades emergentes", section3: "Engenharia de Prompt, Treinamento de IA, Machine Learning Operations e Ética em IA são algumas das carreiras mais demandadas e bem pagas no mercado de tecnologia atual.", products: "Ferramentas para Trabalhar com IA 🤖" }
};

export default function FuturoIA() {
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
          <div style={{ padding: "1rem", background: "rgba(139, 92, 246, 0.1)", borderRadius: "12px", width: "fit-content", color: "var(--secondary)" }}>
            <Sparkles size={32} />
          </div>
          <h3 style={{ fontSize: "1.3rem" }}>{t.section1Title}</h3>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>{t.section1}</p>
        </div>

        <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ padding: "1rem", background: "rgba(6, 182, 212, 0.1)", borderRadius: "12px", width: "fit-content", color: "var(--primary)" }}>
            <Lightbulb size={32} />
          </div>
          <h3 style={{ fontSize: "1.3rem" }}>{t.section2Title}</h3>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>{t.section2}</p>
        </div>

        <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ padding: "1rem", background: "rgba(59, 130, 246, 0.1)", borderRadius: "12px", width: "fit-content", color: "var(--accent)" }}>
            <Rocket size={32} />
          </div>
          <h3 style={{ fontSize: "1.3rem" }}>{t.section3Title}</h3>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>{t.section3}</p>
        </div>
      </div>

      <MLProductGrid searchQuery="laptop inteligencia artificial" siteId="MLB" limit={4} title={t.products} />
    </div>
  );
}
