import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "TechFront | IA & Futuro do Trabalho",
  description: "Descubra como a Inteligência Artificial está revolucionando a forma de trabalhar e encontre os melhores equipamentos tecnológicos.",
};

export default function RootLayout({ children }) {
  // Dados de SEO para a organização, atrai Google e IAs que buscam reputação de sites.
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TechFront",
    "url": "https://sua-url-aqui.com",
    "description": "Reviews de tecnologia, equipamentos de produtividade e IA."
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <JsonLd data={websiteJsonLd} />
      </head>
      <body suppressHydrationWarning>
        <div className="page-wrapper">
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
