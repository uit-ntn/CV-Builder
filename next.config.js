/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Disable traces to prevent file system permission issues
    outputFileTracing: false,
  },
  webpack: (config) => {
    // Add fallbacks for node.js core modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
  images: {
    domains: ['localhost'],
    unoptimized: true
  }
};

module.exports = nextConfig;
