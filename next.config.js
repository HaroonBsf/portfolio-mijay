/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    loader: "akamai",
    path: "/",
    unoptimized: true,
    domains: [],
  },
};

module.exports = nextConfig;
