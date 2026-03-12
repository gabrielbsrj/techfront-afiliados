"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function AdSenseWidget({ defaultSlot = "8668478950" }) {
  // O ID do AdSense oficial para RebekaClaw
  const adClientId = "ca-pub-9128096848918189";

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense Injection Error:", err);
    }
  }, []);

  return (
    <div className="adsense-container" style={{ margin: "2rem 0", textAlign: "center", minHeight: "100px" }}>
      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Publicidade</div>
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClientId}`}
      />
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adClientId}
        data-ad-slot={defaultSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
