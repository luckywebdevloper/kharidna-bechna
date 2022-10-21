/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["imgs.search.brave.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
