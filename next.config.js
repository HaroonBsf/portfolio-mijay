/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Use Akamai loader to emit direct public paths on Netlify
    loader: "akamai",
    path: "/",
    domains: [],
  },
  output: "standalone",
};

module.exports = nextConfig;
