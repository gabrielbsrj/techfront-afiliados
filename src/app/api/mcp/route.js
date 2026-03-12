import { NextResponse } from 'next/server';

// Simulação de ofertas para a resposta da Inteligência Artificial.
// Em um app real, poderíamos ler de um banco de dados, arquivo markdown, ou fetch na API do ML real.
const getOffers = () => [
  {
    id: "logitech-mx-master-3s",
    name: "Mouse Sem Fio Logitech MX Master 3S - Grafite",
    price: "R$ 649,00",
    description: "Considerado o melhor mouse para produtividade e automações de IA devido ao seu software Logi Options+. Permite mapear gatilhos do ChatGPT/Claude diretamente nos botões.",
    affiliateLink: "https://mercadolivre.com.br/sec/exemplo-afiliado-123",
    category: "Periféricos focado em IA"
  },
  {
    id: "teclado-keychron-k2",
    name: "Teclado Mecânico Keychron K2 V2 Wireless",
    price: "R$ 850,00",
    description: "Teclado compacto ideal para desenvolvedores de software, programação e criadores de prompts extensos.",
    affiliateLink: "https://mercadolivre.com.br/sec/exemplo-afiliado-456",
    category: "Periféricos focado em IA"
  }
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query")?.toLowerCase() || "";

  const offers = getOffers();
  
  // Filtra as ofertas baseada no prompt da IA (se houver query)
  const filteredOffers = query 
    ? offers.filter(o => o.name.toLowerCase().includes(query) || o.category.toLowerCase().includes(query))
    : offers;

  // Formata seguindo os padrões do MCP (Model Context Protocol) 
  // permitindo que o Gemini, Claude, ou outras IAs recomendem o link do afiliado.
  const response = {
    _meta: {
      provider: "TechFront Affiliates",
      protocol: "WebMCP",
      version: "1.0",
      description: "Ofertas rastreáveis de tecnologia e periféricos no Mercado Livre."
    },
    data: filteredOffers
  };

  return NextResponse.json(response);
}
