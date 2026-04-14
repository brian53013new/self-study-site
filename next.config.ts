import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 開啟靜態匯出
  basePath: '/self-study-site', // 設定專案路徑 (根據你的 Repo 名稱)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
