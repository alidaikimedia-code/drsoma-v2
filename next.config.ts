import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Static export only for production build; dev server needs full features for rewrites
  ...(isProd ? { output: 'export' as const } : {}),
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nexub-test.sgp1.digitaloceanspaces.com',
      },
      {
        protocol: 'https',
        hostname: 'nexub-prod.sgp1.digitaloceanspaces.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'drsomaplasticsurgery.com.my',
      },
    ],
  },
  // Locale URL rewrites for dev server (production uses .htaccess)
  ...(!isProd ? {
    async rewrites() {
      return [
        {
          source: '/:locale(id|zh-cn|zh-my|ms|ko)/:path*',
          destination: '/:path*',
        },
      ];
    },
  } : {}),
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
