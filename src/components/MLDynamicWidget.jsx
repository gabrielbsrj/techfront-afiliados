"use client";

import { useEffect, useRef } from "react";

export default function MLDynamicWidget({ scriptUrl, scriptId }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Remove scripts antigos caso ocorra re-renderização
    containerRef.current.innerHTML = "";

    // O Mercado Livre costuma fornecer tags <script> com atributos 'src' ou scripts inline para os widgets de afiliados
    const script = document.createElement("script");
    
    if (scriptUrl) {
      script.src = scriptUrl;
      script.async = true;
    }
    
    if (scriptId) {
      script.id = scriptId;
    }

    // Configurando o componente de acordo com as diretrizes do ML
    containerRef.current.appendChild(script);

    return () => {
      // Cleanup para evitar duplicação no React Strict Mode
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [scriptUrl, scriptId]);

  // Se o usuário não passou o script ainda, mostramos um banner substituto bonito
  if (!scriptUrl) {
    return (
      <div style={{ margin: "2rem 0", width: "100%", display: "flex", justifyContent: "center" }}>
        <a 
            href="https://lista.mercadolivre.com.br/teclado-mouse-gamer" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: "block", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--card-border)", position: "relative" }}
        >
            <img 
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80" 
              alt="Produtividade Tech - Ofertas Mercado Livre" 
              style={{ width: "100%", maxWidth: "800px", height: "auto", display: "block", filter: "brightness(0.85)" }} 
            />
            <div style={{ position: "absolute", bottom: 0, width: "100%", padding: "1rem", background: "linear-gradient(transparent, rgba(0,0,0,0.8))", color: "#fff", textAlign: "center", fontWeight: "bold" }}>
              🛒 Descubra os Melhores Periféricos no Mercado Livre
            </div>
        </a>
      </div>
    );
  }

  // Comportamento normal de injetar o script na DOM
  return (
    <div style={{ margin: "2rem 0", width: "100%", display: "flex", justifyContent: "center" }}>
      <div ref={containerRef} style={{ minHeight: "250px", width: "100%", maxWidth: "800px" }}></div>
    </div>
  );
}
