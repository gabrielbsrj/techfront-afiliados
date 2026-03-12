export default function robots() {
  const baseUrl = 'https://sua-url-aqui.com'; // Substituir pelo domínio final

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
