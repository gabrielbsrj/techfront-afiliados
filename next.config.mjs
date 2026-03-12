/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Gera HTML/CSS estático para Hostinger Shared Hosting
  trailingSlash: true, // Força a criação de pastas com index.html dentro para cada rota, evitando erro 403 no Apache
  images: {
    unoptimized: true, // Imagens não otimizadas via SSR pois não há servidor Node
    remotePatterns: [
      { protocol: "https", hostname: "http2.mlstatic.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
