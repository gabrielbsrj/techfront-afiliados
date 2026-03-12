export default function sitemap() {
  const baseUrl = 'https://sua-url-aqui.com'; // O usuário trocará para o domínio dele

  // Em um app real, buscaríamos as URLs do CMS/Banco de dados
  const routes = [
    '',
    '/futuro-da-ia',
    '/produtividade',
    '/reviews',
    '/reviews/melhor-mouse-produtividade-ia',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
