import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

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

export async function GET() {
  const offers = getOffers();
  
  const response = {
    _meta: {
      provider: "RebekaClaw Affiliates",
      protocol: "WebMCP",
      version: "1.0",
      description: "Ofertas rastreáveis de tecnologia e periféricos no Mercado Livre."
    },
    data: offers
  };

  return NextResponse.json(response);
}
