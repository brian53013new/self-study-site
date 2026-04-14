import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 產生靜態 index.html 檔案
  images: {
    unoptimized: true, // GitHub Pages 不支援圖片優化
  },
  // 重要：請確保這裡的名稱與你的 GitHub 專案名稱完全一致
  basePath: '/self-study-site', 
  assetPrefix: '/self-study-site',
};

export default nextConfig;
