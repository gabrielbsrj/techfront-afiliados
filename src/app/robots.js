export const dynamic = 'force-static';

export default function robots() {
  const baseUrl = 'https://www.rebekaclaw.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
