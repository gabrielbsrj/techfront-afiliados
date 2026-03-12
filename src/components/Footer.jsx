import Link from "next/link";
import { Cpu } from "lucide-react";

export default function Footer({ locale, dict }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link href={`/${locale}`} className="logo">
              <Cpu className="text-primary" size={24} />
              <span className="text-gradient">RebekaClaw</span>
            </Link>
            <p>{dict.footer.tagline}</p>
          </div>
          <div className="footer-links">
            <h4>{dict.footer.nav}</h4>
            <ul>
              <li><Link href={`/${locale}/futuro-da-ia`}>{dict.nav.futureAI}</Link></li>
              <li><Link href={`/${locale}/produtividade`}>{dict.nav.productivity}</Link></li>
              <li><Link href={`/${locale}/reviews`}>{dict.nav.reviews}</Link></li>
              <li><Link href={`/${locale}/sobre`}>{dict.footer.about}</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} RebekaClaw. {dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
