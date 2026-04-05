/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.chennaischooldirectory.com',
      },
      {
        protocol: 'https',
        hostname: 'www.nps.acadamis.in',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.netacad.com',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'streak-stats.demolab.com',
      },
    ],
  },
  allowedDevOrigins: ['192.168.0.216'],
};

module.exports = nextConfig;
