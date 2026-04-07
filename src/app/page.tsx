import React from 'react';
import { MOCK_CATEGORIES, MOCK_RESOURCES } from "@/lib/mock-data";
import { ResourceCard } from "@/components/ResourceCard";
import { Search, Compass } from "lucide-react";
import { Input } from "@/components/ui/input";
import { getResources } from "./actions";

// 我們建立一個單獨的 Client Component 來處理搜尋與分頁邏輯
import { ClientPageContent } from "@/components/ClientPageContent";

export default async function Home() {
  // 嘗試從 GitHub 獲取資料
  const githubData = await getResources();
  const resources = githubData ? githubData.content : MOCK_RESOURCES;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="bg-white border-b py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Compass className="w-12 h-12 text-blue-600 mr-2" />
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              自學指南
            </h1>
          </div>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            我們為你篩選了網路上最優質的 YouTube 頻道、部落格與工具網站，幫助你少走彎路，高效學習。
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <ClientPageContent 
          initialResources={resources} 
          categories={MOCK_CATEGORIES} 
        />
      </main>
    </div>
  );
}
