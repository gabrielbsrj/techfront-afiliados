"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { locales, defaultLocale } from "@/i18n/config";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Detectar idioma no browser do usuário
    const userLang = navigator.language || navigator.userLanguage;
    let targetLocale = defaultLocale;

    if (userLang) {
      const match = locales.find(locale => userLang.toLowerCase().includes(locale));
      if (match) targetLocale = match;
    }

    // Redireciona para o idioma detectado (substituindo a Home no histórico)
    router.replace(`/${targetLocale}`);
  }, [router]);

  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#09090b", color: "#06b6d4" }}>
      <div style={{ fontSize: "2rem", animation: "spin 1s linear infinite" }}>⌛</div>
    </div>
  );
}
