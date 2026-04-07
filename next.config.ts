import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 移除 output: 'export' 以支援 Server Actions 和 Vercel 後端功能
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
