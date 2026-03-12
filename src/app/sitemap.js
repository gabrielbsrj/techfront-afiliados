export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://www.rebekaclaw.com';

  const routes = [
    '',
    '/es',
    '/en',
    '/pt',
    '/es/teste-digitacao',
    '/en/teste-digitacao',
    '/pt/teste-digitacao',
    '/es/artigos/ia-revolucao-silenciosa-futuro-trabalho',
    '/en/artigos/ia-revolucao-silenciosa-futuro-trabalho',
    '/pt/artigos/ia-revolucao-silenciosa-futuro-trabalho',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
