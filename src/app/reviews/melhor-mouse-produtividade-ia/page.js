import ProductShowcase from "@/components/ProductShowcase";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Review: O Melhor Mouse para Produtividade e IA | TechFront",
  description: "Análise completa do Logitech MX Master 3S. Descubra porque este é o melhor mouse para quem trabalha com Inteligência Artificial e Desenvolvimento.",
};

export default function ReviewMouse() {
  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Logitech MX Master 3S",
    "image": "https://http2.mlstatic.com/D_NQ_NP_890835-MLU74481223945_022024-O.webp",
    "description": "O melhor mouse sem fio para desenvolvedores e experts em IA, com software Logi Options+.",
    "品牌": {
      "@type": "Brand",
      "name": "Logitech"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://mercadolivre.com.br/sec/exemplo-afiliado-123",
      "priceCurrency": "BRL",
      "price": "649.00",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Mercado Livre"
      }
    }
  };

  return (
    <article className="container" style={{ padding: "4rem 1.5rem", maxWidth: "800px" }}>
      <JsonLd data={productJsonLd} />
      <Link href="/reviews" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", marginBottom: "2rem", fontWeight: "500" }}>
        <ArrowLeft size={16} /> Voltar para Reviews
      </Link>
      
      <header style={{ marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", lineHeight: "1.2" }}>
          Review: Por que o <span className="text-gradient">MX Master 3S</span> é essencial para quem usa IA?
        </h1>
        <div style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>
          <span>Por: TechFront AI Team</span>
          <span>•</span>
          <span>12 de Março de 2026</span>
          <span>•</span>
          <span>Tempo de leitura: 5 min</span>
        </div>
      </header>

      <div style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--foreground)" }}>
        <p style={{ marginBottom: "1.5rem" }}>
          Quando falamos de produtividade extrema e automações com Inteligência Artificial, muitas vezes o gargalo não está na IA em si, mas na interface física que você usa para operá-la. A transição rápida entre janelas do Claude, terminais, e IDEs requer um hardware à altura.
        </p>
        
        <p style={{ marginBottom: "2rem" }}>
          Hoje, vamos analisar o mouse que se tornou o queridinho dos desenvolvedores e power users de IA em todo o mundo: O <strong>Logitech MX Master 3S</strong>.
        </p>

        <h2 style={{ fontSize: "1.8rem", marginTop: "3rem", marginBottom: "1rem" }}>O Grande Diferencial</h2>
        <p style={{ marginBottom: "1.5rem" }}>
          A verdadeira magia deste mouse não está apenas no seu formato ergonômico, mas no software <em>Logi Options+</em> que permite criar macros específicas por aplicativo. Você pode, por exemplo, mapear um botão lateral para acionar instantaneamente a API Whisper para dictation, ou acionar sua ferramenta WebMCP com um simples clique do polegar.
        </p>

        <h2 style={{ fontSize: "1.8rem", marginTop: "3rem", marginBottom: "1rem" }}>Nossa Vitrine: Onde Encontrar?</h2>
        <p style={{ marginBottom: "1.5rem", color: "var(--text-muted)" }}>
          Abaixo separamos as melhores ofertas no Mercado Livre com envio rápido.
        </p>

        {/* Componente de Afiliado Integrado nativamente */}
        <ProductShowcase 
          title="Mouse Sem Fio Logitech MX Master 3S - Grafite"
          price="R$ 649,00"
          originalPrice="R$ 899,00"
          imageUrl="https://http2.mlstatic.com/D_NQ_NP_890835-MLU74481223945_022024-O.webp"
          affiliateLink="https://mercadolivre.com.br/sec/exemplo-afiliado-123"
          pros={[
            "Cliques 90% mais silenciosos que a versão anterior",
            "Sensor de 8.000 DPI (funciona até em vidro)",
            "Scroll MagSpeed eletromagnético super rápido",
            "Bateria dura até 70 dias"
          ]}
        />

        <h2 style={{ fontSize: "1.8rem", marginTop: "3rem", marginBottom: "1rem" }}>Vale a pena o investimento?</h2>
        <p style={{ marginBottom: "1.5rem" }}>
          Se você passa mais de 6 horas por dia na frente do computador criando prompts, escrevendo código ou gerando conteúdo, a resposta é um sonoro sim. O ganho de tempo acumulado pelas automações de botões se paga em menos de um mês.
        </p>

        <div style={{ background: "rgba(6, 182, 212, 0.1)", border: "1px solid var(--primary)", borderRadius: "8px", padding: "1.5rem", marginTop: "3rem" }}>
          <h4 style={{ color: "var(--primary)", marginBottom: "0.5rem" }}>Nota de Transparência</h4>
          <p style={{ fontSize: "0.9rem", margin: 0 }}>
            Nós compramos este produto para análise de forma independente. Caso você adquira através do link acima, o TechFront recebe uma pequena comissão do Mercado Livre sem nenhum custo adicional para você. Isso nos ajuda a continuar trazendo reviews honestos.
          </p>
        </div>
      </div>
    </article>
  );
}
