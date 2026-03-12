"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Tag, TrendingDown } from "lucide-react";

// =====================================================
// CONFIGURAÇÃO DO AFILIADO - Lida do .env.local automaticamente
// NEXT_PUBLIC_ML_AFFILIATE_ID = ARIDELSONBARRETO
// NEXT_PUBLIC_ML_SITE_ID      = MLC (Chile)
// =====================================================
const AFFILIATE_ID = process.env.NEXT_PUBLIC_ML_AFFILIATE_ID || "ARIDELSONBARRETO";
const DEFAULT_SITE  = process.env.NEXT_PUBLIC_ML_SITE_ID      || "MLC";

// Construtor de Link com Tag de Afiliado
function buildAffiliateLink(mlProductUrl, affiliateId) {
  if (!mlProductUrl) return "#";
  // O ML Afiliados adiciona o parâmetro de rastreio ao final da URL do produto
  return `${mlProductUrl}?affId=${affiliateId}`;
}

// Produtos de fallback caso a API do ML bloqueie (CORS/403)
const FALLBACK_PRODUCTS = [
  {
    id: "fb1",
    title: "Mouse Sem Fio Logitech MX Master 3S",
    price: 649900,
    original_price: 799900,
    currency_id: "BRL",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_810474-MLU72554380023_112023-F.webp",
    permalink: "https://www.mercadolivre.com.br/mouse-sem-fio-logitech-mx-master-3s/p/MLB21236769",
    shipping: { free_shipping: true }
  },
  {
    id: "fb2",
    title: "Teclado Mecânico Redragon Kumara RGB",
    price: 189900,
    original_price: 249900,
    currency_id: "BRL",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_756564-MLU72725009093_112023-F.webp",
    permalink: "https://www.mercadolivre.com.br/teclado-mecanico-redragon-kumara/p/MLB19876543",
    shipping: { free_shipping: true }
  },
  {
    id: "fb3",
    title: "Headset Gamer HyperX Cloud II Wireless",
    price: 599900,
    original_price: 749900,
    currency_id: "BRL",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_626072-MLU72018286329_092023-F.webp",
    permalink: "https://www.mercadolivre.com.br/headset-hyperx-cloud-ii-wireless/p/MLB18765432",
    shipping: { free_shipping: true }
  },
  {
    id: "fb4",
    title: "Monitor Gamer LG UltraGear 27\" 144Hz IPS",
    price: 1299900,
    original_price: 1599900,
    currency_id: "BRL",
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_879723-MLU72396581037_102023-F.webp",
    permalink: "https://www.mercadolivre.com.br/monitor-lg-ultragear-27-144hz/p/MLB20123456",
    shipping: { free_shipping: true }
  }
];

export default function MLProductGrid({ 
  searchQuery = "laptop inteligencia artificial",
  siteId,
  limit = 4,
  title = "Productos Recomendados 🔥"
}) {
  const activeSiteId = siteId || DEFAULT_SITE;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const encodedQuery = encodeURIComponent(searchQuery);
        const res = await fetch(
          `https://api.mercadolibre.com/sites/${activeSiteId}/search?q=${encodedQuery}&limit=${limit}`
        );
        if (!res.ok) throw new Error("API bloqueada");
        const data = await res.json();
        const results = data.results || [];
        setProducts(results.length > 0 ? results : FALLBACK_PRODUCTS.slice(0, limit));
      } catch (err) {
        // Usa produtos de fallback quando a API do ML retorna 403 (CORS)
        setProducts(FALLBACK_PRODUCTS.slice(0, limit));
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery, activeSiteId, limit]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}>
        <div style={{ fontSize: "2rem", animation: "spin 1s linear infinite", display: "inline-block" }}>⌛</div>
        <p style={{ marginTop: "1rem" }}>Buscando ofertas...</p>
      </div>
    );
  }

  return (
    <div style={{ margin: "2rem 0" }}>
      {title && (
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {title}
        </h2>
      )}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", 
        gap: "1.5rem" 
      }}>
        {products.map((product) => {
          const hasDiscount = product.original_price && product.original_price > product.price;
          const discountPct = hasDiscount 
            ? Math.round(100 - (product.price / product.original_price) * 100) 
            : null;

          return (
            <a
              key={product.id}
              href={buildAffiliateLink(product.permalink, AFFILIATE_ID)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="product-card"
              style={{ 
                textDecoration: "none", 
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer"
              }}
            >
              {/* Badge de Desconto */}
              {hasDiscount && discountPct > 5 && (
                <div style={{ 
                  position: "absolute", top: "12px", left: "12px",
                  background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                  color: "#000", fontWeight: "bold", fontSize: "0.75rem",
                  padding: "0.25rem 0.6rem", borderRadius: "999px",
                  zIndex: "1"
                }}>
                  -{discountPct}%
                </div>
              )}

              {/* Imagem */}
              <div style={{ 
                background: "#fff", 
                borderRadius: "8px 8px 0 0", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                padding: "1rem",
                height: "180px",
                overflow: "hidden"
              }}>
                <img 
                  src={product.thumbnail?.replace("I.jpg", "O.jpg")} 
                  alt={product.title} 
                  style={{ 
                    maxHeight: "160px", 
                    maxWidth: "100%", 
                    objectFit: "contain"
                  }} 
                />
              </div>

              {/* Informações */}
              <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <p style={{ 
                  fontSize: "0.85rem", 
                  color: "var(--foreground)", 
                  lineHeight: "1.3",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden"
                }}>
                  {product.title}
                </p>

                {hasDiscount && (
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", textDecoration: "line-through" }}>
                    CLP {product.original_price?.toLocaleString("es-CL")}
                  </p>
                )}
                
                <p style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--primary)" }}>
                  CLP {product.price?.toLocaleString("es-CL")}
                </p>

                {product.shipping?.free_shipping && (
                  <span style={{ 
                    fontSize: "0.75rem", color: "#22c55e", 
                    display: "flex", alignItems: "center", gap: "0.25rem" 
                  }}>
                    ✓ Envío gratis
                  </span>
                )}

                <div style={{ 
                  marginTop: "auto",
                  padding: "0.5rem 0.75rem",
                  background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                  borderRadius: "8px",
                  textAlign: "center",
                  fontWeight: "bold", fontSize: "0.85rem", color: "#000",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem"
                }}>
                  Ver oferta <ExternalLink size={14} />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
