import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import AdSenseWidget from "@/components/AdSenseWidget";
import ProductShowcase from "@/components/ProductShowcase";
import ScrollRevealImage from "@/components/ScrollRevealImage";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolveParams = await params;
  const { meta } = getPostBySlug(resolveParams.slug);
  return {
    title: `${meta.title} | TechFront`,
    description: meta.description,
  };
}

// Componentes que podemos usar de forma genérica DENTRO do arquivo Markdown (MDX)
const components = {
  AdSenseWidget,
  ProductShowcase,
  ScrollRevealImage
};

export default async function BlogPost({ params }) {
  const resolveParams = await params;
  const { slug, meta, content } = getPostBySlug(resolveParams.slug);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    author: {
      "@type": "Organization",
      name: "TechFront",
    },
    datePublished: meta.date,
  };

  return (
    <article className="container" style={{ padding: "4rem 1.5rem", maxWidth: "800px" }}>
      <JsonLd data={articleLd} />
      
      <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", marginBottom: "2rem", fontWeight: "500" }}>
        <ArrowLeft size={16} /> Voltar para a Home
      </Link>
      
      <header style={{ marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", lineHeight: "1.2" }}>
          {meta.title}
        </h1>
        <div style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>
          <span>{meta.date}</span>
          <span>•</span>
          <span>Escrito pela Redação Tech</span>
        </div>
      </header>

      {/* Conteúdo Renderizado pelo MDX (Aceita Tags React e CSS Puro) */}
      <div 
        className="prose" 
        style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--foreground)" }}
      >
        <MDXRemote source={content} components={components} />
      </div>

    </article>
  );
}
