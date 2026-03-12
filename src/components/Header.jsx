"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Cpu, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { locales } from "@/i18n/config";
import { useState } from "react";

const localeLabels = { es: "🇨🇱 ES", en: "🇺🇸 EN", pt: "🇧🇷 PT" };

export default function Header({ locale, dict }) {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);

  // Trocar locale mantendo o resto do path
  const switchLocale = (newLocale) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    return `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link href={`/${locale}`} className="logo">
          <Cpu className="text-primary" size={28} />
          <span className="text-gradient">RebekaClaw</span>
        </Link>
        <nav className="nav-links">
          <Link href={`/${locale}/futuro-da-ia`} className="nav-link">{dict.nav.futureAI}</Link>
          <Link href={`/${locale}/produtividade`} className="nav-link">{dict.nav.productivity}</Link>
          <Link href={`/${locale}/reviews`} className="nav-link">{dict.nav.reviews}</Link>
          <Link href={`/${locale}/teste-digitacao`} className="nav-link" style={{ color: "var(--primary)" }}>{dict.nav.typingTest}</Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={theme === "dark" ? dict.nav.lightMode : dict.nav.darkMode}
            title={theme === "dark" ? dict.nav.lightMode : dict.nav.darkMode}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Language Switcher */}
          <div className="lang-switcher" style={{ position: "relative" }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="lang-btn"
              aria-label="Change language"
            >
              <Globe size={18} />
              <span>{localeLabels[locale]}</span>
            </button>
            {langOpen && (
              <div className="lang-dropdown">
                {locales.filter(l => l !== locale).map(l => (
                  <Link key={l} href={switchLocale(l)} className="lang-option" onClick={() => setLangOpen(false)}>
                    {localeLabels[l]}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
        <button className="mobile-menu-btn">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
