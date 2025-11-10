/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Netlify + Next 12: disable built-in optimization so static assets in /public are served directly
    unoptimized: true,
    domains: [],
  },
  output: "standalone",
};

module.exports = nextConfig;
