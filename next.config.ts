import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/self-study-site',
  assetPrefix: '/self-study-site',
};

export default nextConfig;
