import Link from "next/link";
import { Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <Cpu className="text-primary" size={24} />
              <span className="text-gradient">TechFront</span>
            </Link>
            <p>Sua fonte definitiva sobre Inteligência Artificial, o futuro do trabalho e como se preparar para o que está por vir.</p>
          </div>
          <div className="footer-links">
            <h4>Navegação</h4>
            <ul>
              <li><Link href="/futuro-da-ia">O Futuro da IA</Link></li>
              <li><Link href="/produtividade">Produtividade Tech</Link></li>
              <li><Link href="/reviews">Reviews (Achadinhos)</Link></li>
              <li><Link href="/sobre">Sobre Nós</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TechFront. Todos os direitos reservados. Parte de nosso conteúdo pode conter links de afiliados do Mercado Livre.</p>
        </div>
      </div>
    </footer>
  );
}
