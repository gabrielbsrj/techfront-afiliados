import Link from "next/link";
import { ArrowRight, Bot, Zap, Cpu } from "lucide-react";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import MLProductGrid from "@/components/MLProductGrid";
import { getDictionary } from "@/i18n/config";

export default async function Home({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title animate-fade-in">
             {dict.hero.title1} <span className="text-gradient">{dict.hero.title2}</span>
          </h1>
          <p className="hero-subtitle animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {dict.hero.subtitle}
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Link href={`/${locale}/artigos/guia-agentes-autonomos-2026`} className="btn-primary">
              {dict.hero.cta} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: "2rem 1.5rem" }}>
         <ScrollRevealImage 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" 
            alt="Futuro da Inteligência Artificial" 
            animationType="parallax"
            speed={0.2}
            caption={locale === "es" ? "El poder de las IAs corriendo localmente sin dependencia de internet." : locale === "en" ? "The power of AI running locally without internet dependency." : "O poder das IAs rodando localmente sem dependência de internet."}
         />
      </section>

      <section className="container" style={{ padding: "4rem 1.5rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem", textAlign: "center" }}>
          {dict.topics.title} <span className="text-gradient-alt">{dict.topics.highlight}</span>
        </h2>
        
        <div className="grid-cards">
          <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ padding: "1rem", background: "rgba(139, 92, 246, 0.1)", borderRadius: "12px", width: "fit-content", color: "var(--secondary)" }}>
              <Bot size={32} />
            </div>
            <h3 style={{ fontSize: "1.5rem" }}>{dict.topics.ai.title}</h3>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>{dict.topics.ai.desc}</p>
            <Link href={`/${locale}/futuro-da-ia`} className="btn-outline" style={{ marginTop: "auto", textAlign: "center" }}>
              {dict.topics.ai.cta}
            </Link>
          </div>

          <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ padding: "1rem", background: "rgba(6, 182, 212, 0.1)", borderRadius: "12px", width: "fit-content", color: "var(--primary)" }}>
              <Zap size={32} />
            </div>
            <h3 style={{ fontSize: "1.5rem" }}>{dict.topics.productivity.title}</h3>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>{dict.topics.productivity.desc}</p>
            <Link href={`/${locale}/produtividade`} className="btn-outline" style={{ marginTop: "auto", textAlign: "center" }}>
              {dict.topics.productivity.cta}
            </Link>
          </div>

          <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ padding: "1rem", background: "rgba(59, 130, 246, 0.1)", borderRadius: "12px", width: "fit-content", color: "var(--accent)" }}>
              <Cpu size={32} />
            </div>
            <h3 style={{ fontSize: "1.5rem" }}>{dict.topics.reviews.title}</h3>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>{dict.topics.reviews.desc}</p>
            <Link href={`/${locale}/reviews`} className="btn-outline" style={{ marginTop: "auto", textAlign: "center" }}>
              {dict.topics.reviews.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: "0 1.5rem 4rem" }}>
        <MLProductGrid 
          searchQuery="laptop IA productividad"
          limit={4}
          title={dict.products.title}
        />
      </section>
    </>
  );
}
