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

  // Se o usuário não passou o script ainda, mostramos um banner falso bem realista para compor o Layout
  if (!scriptUrl) {
    return (
      <div style={{ margin: "2rem 0", width: "100%", display: "flex", justifyContent: "center" }}>
        <a 
            href="https://mercadolivre.cl" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: "block", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--card-border)" }}
        >
            <img 
              src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1711648013915-home-slider_desktop.jpg" 
              alt="Mercado Livre Promoções" 
              style={{ width: "100%", maxWidth: "800px", height: "auto", display: "block" }} 
            />
            <div style={{ padding: "0.5rem", background: "rgba(255, 230, 0, 0.1)", color: "var(--text-muted)", fontSize: "0.8rem", textAlign: "center" }}>
              [Demonstração] Adicione seu script do Mercado Livre Afiliados aqui.
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
