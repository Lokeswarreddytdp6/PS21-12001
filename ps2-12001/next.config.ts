import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false, // Prevents 'canvas' from being used in the browser
    };
    return config;
  },
};

export default nextConfig;
