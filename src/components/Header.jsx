"use client";

import Link from "next/link";
import { Menu, Cpu } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="logo">
          <Cpu className="text-primary" size={28} />
          <span className="text-gradient">TechFront</span>
        </Link>
        <nav className="nav-links">
          <Link href="/futuro-da-ia" className="nav-link">O Futuro da IA</Link>
          <Link href="/produtividade" className="nav-link">Produtividade</Link>
          <Link href="/reviews" className="nav-link">Reviews</Link>
          <Link href="/teste-digitacao" className="nav-link" style={{ color: "var(--primary)" }}>Teste WPM ⌨️</Link>
        </nav>
        <button className="mobile-menu-btn">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
