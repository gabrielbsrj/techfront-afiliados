export default function JsonLd({ data }) {
  // Apenas renderiza um script JSON-LD seguro que atende SEO do Google
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
