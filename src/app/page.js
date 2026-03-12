import Link from "next/link";
import { ArrowRight, Bot, Zap, Cpu } from "lucide-react";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import MLProductGrid from "@/components/MLProductGrid";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title animate-fade-in">
             A Inteligência Artificial já mudou <span className="text-gradient">a forma de trabalhar.</span>
          </h1>
          <p className="hero-subtitle animate-fade-in" style={{ animationDelay: "0.1s" }}>
            As ferramentas certas podem aumentar sua produtividade em 10x. Descubra guias, reviews de equipamentos e como usar IA a seu favor.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Link href="/artigos/guia-agentes-autonomos-2026" className="btn-primary">
              Começar por aqui <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Demonstração de Scrollytelling */}
      <section className="container" style={{ padding: "2rem 1.5rem" }}>
         <ScrollRevealImage 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" 
            alt="Futuro da Inteligência Artificial em Computação" 
            animationType="parallax"
            speed={0.2}
            caption="O poder das IAs rodando localmente sem dependência de internet."
         />
      </section>

      <section className="container" style={{ padding: "4rem 1.5rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem", textAlign: "center" }}>
          Explore nossos <span className="text-gradient-alt">Tópicos</span>
        </h2>
        
        <div className="grid-cards">
          <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ padding: "1rem", background: "rgba(139, 92, 246, 0.1)", borderRadius: "12px", width: "fit-content", color: "var(--secondary)" }}>
              <Bot size={32} />
            </div>
            <h3 style={{ fontSize: "1.5rem" }}>Futuro da IA</h3>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
              Entenda como LLMs, Agentes Autônomos e IA Generativa estão reformulando carreiras e indústrias inteiras.
            </p>
            <Link href="/futuro-da-ia" className="btn-outline" style={{ marginTop: "auto", textAlign: "center" }}>
              Ler artigos
            </Link>
          </div>

          <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ padding: "1rem", background: "rgba(6, 182, 212, 0.1)", borderRadius: "12px", width: "fit-content", color: "var(--primary)" }}>
              <Zap size={32} />
            </div>
            <h3 style={{ fontSize: "1.5rem" }}>Produtividade</h3>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
              Ferramentas de automação, prompts avançados e fluxos de trabalho que poupam horas do seu dia.
            </p>
            <Link href="/produtividade" className="btn-outline" style={{ marginTop: "auto", textAlign: "center" }}>
              Ser Produtivo
            </Link>
          </div>

          <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ padding: "1rem", background: "rgba(59, 130, 246, 0.1)", borderRadius: "12px", width: "fit-content", color: "var(--accent)" }}>
              <Cpu size={32} />
            </div>
            <h3 style={{ fontSize: "1.5rem" }}>Reviews Setup</h3>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
              Os melhores notebooks para IA, teclados ergonômicos e acessórios cruciais (Achadinhos do Mercado Livre).
            </p>
            <Link href="/reviews" className="btn-outline" style={{ marginTop: "auto", textAlign: "center" }}>
              Ver Equipamentos
            </Link>
          </div>
        </div>
      </section>

      {/* Vitrine Dinâmica: Produtos Reais do Mercado Livre Chile */}
      <section className="container" style={{ padding: "0 1.5rem 4rem" }}>
        <MLProductGrid 
          searchQuery="laptop IA productividad"
          limit={4}
          title="🛒 Ofertas del Mercado Libre para potenciar tu trabajo"
        />
      </section>
    </>
  );
}
