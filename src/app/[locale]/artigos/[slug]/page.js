import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import AdSenseWidget from "@/components/AdSenseWidget";
import ProductShowcase from "@/components/ProductShowcase";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getDictionary } from "@/i18n/config";
import { locales } from "@/i18n/config";

export async function generateStaticParams() {
  const posts = getAllPosts();
  const params = [];
  for (const locale of locales) {
    for (const post of posts) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const { meta } = getPostBySlug(slug);
  return {
    title: `${meta.title} | RebekaClaw`,
    description: meta.description,
  };
}

const components = {
  AdSenseWidget,
  ProductShowcase,
  ScrollRevealImage,
};

export default async function BlogPost({ params }) {
  const { locale, slug } = await params;
  const { meta, content } = getPostBySlug(slug);
  const dict = await getDictionary(locale);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    author: {
      "@type": "Person",
      name: meta.author || "RebekaClaw",
    },
    datePublished: meta.date,
  };

  return (
    <article className="container" style={{ padding: "4rem 1.5rem", maxWidth: "800px" }}>
      <JsonLd data={articleLd} />
      
      <Link href={`/${locale}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", marginBottom: "2rem", fontWeight: "500" }}>
        <ArrowLeft size={16} /> {dict.back}
      </Link>
      
      <header style={{ marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", lineHeight: "1.2" }}>
          {meta.title}
        </h1>
        <div style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", fontSize: "0.9rem", flexWrap: "wrap" }}>
          <span>{meta.date}</span>
          {meta.author && <><span>•</span><span>{meta.author}</span></>}
          {meta.readTime && <><span>•</span><span>{meta.readTime}</span></>}
        </div>
      </header>

      <div className="prose" style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--foreground)" }}>
        <MDXRemote source={content} components={components} />
      </div>
    </article>
  );
}
