import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/aboutus', destination: '/about-dr-soma', permanent: true },
      { source: '/blogs', destination: '/blog', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/servicespage', destination: '/treatments', permanent: true },
      { source: '/servicespage/breast-augmentation-implant-in-malaysia', destination: '/breast/breast-augmentation-malaysia', permanent: true },
      { source: '/servicespage/breast-lift', destination: '/breast/breast-lift-malaysia', permanent: true },
      { source: '/servicespage/safe-breast-reduction-in-malaysia', destination: '/breast/breast-reduction-malaysia', permanent: true },
      { source: '/servicespage/fat-transfer', destination: '/breast/fat-transfer-breast-augmentation-malaysia', permanent: true },
      { source: '/servicespage/liposuction-malaysia-remove-unwanted-fat', destination: '/body/liposuction-malaysia', permanent: true },
      { source: '/servicespage/six-pack-enhancement', destination: '/body/six-pack-enhancement-malaysia', permanent: true },
      { source: '/servicespage/tummy-tuck-surgery-in-malaysia', destination: '/body/tummy-tuck-malaysia', permanent: true },
      { source: '/servicespage/blepharoplasty-eyelid-reduction', destination: '/face/eyelid-surgery-malaysia', permanent: true },
      { source: '/servicespage/face-lift-malaysia-to-combat-aging', destination: '/face/face-lift-malaysia', permanent: true },
      { source: '/servicespage/otoplasty-pinnaplasty', destination: '/face/otoplasty-malaysia', permanent: true },
      { source: '/servicespage/rhinoplasty-in-malaysia-enhance-nose-appearance', destination: '/face/rhinoplasty-malaysia', permanent: true },
      { source: '/servicespage/male-breast-reduction', destination: '/male/male-breast-reduction-malaysia', permanent: true },
      { source: '/servicespage/penile-enhancement', destination: '/male/penile-enhancement-malaysia', permanent: true },
      { source: '/servicespage/skin-care', destination: '/aesthetic-treatments', permanent: true },
      { source: '/servicespage/keloid-scar-treatment-in-malaysia', destination: '/aesthetic-treatments/keloid-treatment-malaysia', permanent: true },
      { source: '/servicespage/lip-filler-malaysia-no-surgery-needed', destination: '/aesthetic-treatments/lip-filler-malaysia', permanent: true },
      { source: '/servicespage/safe-thread-lift-in-malaysia', destination: '/aesthetic-treatments/thread-lift-malaysia', permanent: true },
      { source: '/servicespage/cellular-rejuvenation-therapies', destination: '/regenerative-treatments/cellular-rejuvenation-malaysia', permanent: true },
      { source: '/servicespage/exion', destination: '/regenerative-treatments/exion-treatment-malaysia', permanent: true },
      { source: '/servicespage/exosomes-therapy', destination: '/regenerative-treatments/prp-treatment-malaysia', permanent: true },
    ]
  },
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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
