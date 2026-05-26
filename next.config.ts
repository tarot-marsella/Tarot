import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'es.camoin.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/arcanos-mayores',
        destination: '/aprendizaje',
        permanent: true,
      },
      {
        source: '/arcanos-mayores/:slug*',
        destination: '/aprendizaje/:slug*',
        permanent: true,
      },
      {
        source: '/tarot-gratis',
        destination: '/tirada',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
