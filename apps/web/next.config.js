/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
