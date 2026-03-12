import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { ThemeProvider } from "@/components/ThemeProvider";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/config";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: `${dict.site.name} | IA & Futuro`,
    description: dict.site.description,
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RebekaClaw",
    "url": "https://rebekaclaw.com",
    "description": dict.site.description,
    "inLanguage": locale,
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <JsonLd data={websiteJsonLd} />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <div className="page-wrapper">
            <Header locale={locale} dict={dict} />
            <main className="main-content">
              {children}
            </main>
            <Footer locale={locale} dict={dict} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
