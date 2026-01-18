/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logo.debounce.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
