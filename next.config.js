/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'x8ki-letl-twmt.n7.xano.io',
      },
    ],
  },
}

module.exports = nextConfig
