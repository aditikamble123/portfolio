import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow serving local static frames from /public/sequence/ with no transforms
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
