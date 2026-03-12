/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Gera build compacto ideal para Hostinger Node.js
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "http2.mlstatic.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
