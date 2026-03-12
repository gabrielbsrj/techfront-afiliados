"use client";

import { ExternalLink, Check, ShoppingCart } from "lucide-react";

export default function ProductShowcase({ 
  title, 
  price, 
  originalPrice, 
  imageUrl, 
  affiliateLink, 
  pros = [], 
  cons = [] 
}) {
  return (
    <div className="glass-panel" style={{ padding: "1.5rem", margin: "2rem 0", display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {/* Product Image */}
        <div style={{ flex: "1 1 200px", minWidth: "200px", maxWidth: "300px", background: "white", borderRadius: "8px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {imageUrl ? (
            <img src={imageUrl} alt={title} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
          ) : (
            <div style={{ padding: "3rem", color: "#ccc" }}>Sem Imagem</div>
          )}
        </div>

        {/* Product Details */}
        <div style={{ flex: "2 1 300px", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <span style={{ background: "var(--primary)", color: "white", padding: "0.2rem 0.5rem", borderRadius: "4px", fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase" }}>
              Achadinho 🔥
            </span>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Recomendações TechFront</span>
          </div>

          <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>{title}</h3>
          
          <div style={{ marginBottom: "1.5rem" }}>
            {originalPrice && (
              <span style={{ textDecoration: "line-through", color: "var(--text-muted)", fontSize: "0.9rem", marginRight: "0.5rem" }}>
                {originalPrice}
              </span>
            )}
            <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "var(--primary)" }}>
              {price}
            </span>
          </div>

          {pros.length > 0 && (
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem", fontSize: "0.9rem" }}>
              {pros.map((pro, index) => (
                 <li key={index} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "var(--foreground)" }}>
                    <Check size={16} style={{ color: "var(--primary)", marginTop: "2px" }} /> {pro}
                 </li>
              ))}
            </ul>
          )}

          <div style={{ marginTop: "auto" }}>
            <a 
              href={affiliateLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary" 
              style={{ width: "100%", padding: "1rem" }}
            >
              <ShoppingCart size={20} /> Comprar no Mercado Livre <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
