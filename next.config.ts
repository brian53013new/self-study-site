import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 移除 output: 'export' 以支援 Server Actions
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
