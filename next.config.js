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
    ],
  },
};

module.exports = nextConfig;
