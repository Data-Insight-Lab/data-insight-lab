/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'lh6.googleusercontent.com',
      'lh4.googleusercontent.com',
      'lh5.googleusercontent.com',
    ],
  },
  headers: [{ key: 'Cache-Control', value: 'no-cache, max-age=0' }],
};

module.exports = nextConfig;
