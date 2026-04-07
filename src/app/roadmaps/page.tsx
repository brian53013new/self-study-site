import React from 'react';
import RoadmapFlow from "@/components/RoadmapFlow";
import { Map } from "lucide-react";

export default function RoadmapsPage() {
  // 定義路徑圖節點
  const initialNodes = [
    {
      id: '1',
      type: 'custom',
      data: { 
        label: 'HTML 基礎', 
        category: '入門第一步', 
        description: '學習網頁的骨架，理解標籤與語義化。',
        url: 'https://developer.mozilla.org/zh-TW/docs/Learn/HTML'
      },
      position: { x: 250, y: 0 },
    },
    {
      id: '2',
      type: 'custom',
      data: { 
        label: 'CSS 排版與美化', 
        category: '視覺設計', 
        description: '學習 Flexbox, Grid 與響應式設計。',
        url: 'https://www.youtube.com/results?search_query=CSS+tutorial'
      },
      position: { x: 250, y: 150 },
    },
    {
      id: '3',
      type: 'custom',
      data: { 
        label: 'JavaScript 核心', 
        category: '邏輯與互動', 
        description: '學習變數、函數、DOM 操作與非同步處理。',
        url: 'https://zh.javascript.info/'
      },
      position: { x: 250, y: 300 },
    },
    {
      id: '4',
      type: 'custom',
      data: { 
        label: 'React 框架', 
        category: '現代化開發', 
        description: '學習組件化開發、Hooks 與狀態管理。',
        url: 'https://react.dev'
      },
      position: { x: 250, y: 450 },
    },
  ];

  // 定義節點連線
  const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
    { id: 'e3-4', source: '3', target: '4', animated: true },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <header className="bg-white border-b py-12 mb-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Map className="w-10 h-10 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              視覺化學習路徑
            </h1>
          </div>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            不知道從何開始？跟著專家規劃的路徑一步步前進，我們幫你挑選了每個階段最合適的教學連結。
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold">前端網頁開發路徑</h2>
              <p className="text-sm text-slate-500">從 HTML 到 React 的完整成長路線</p>
            </div>
            <div className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
              4 個學習階段
            </div>
          </div>
          
          <RoadmapFlow initialNodes={initialNodes} initialEdges={initialEdges} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl border border-dashed flex flex-col items-center justify-center py-12 text-center">
            <h3 className="font-bold text-slate-400 mb-2">Python 數據分析路徑</h3>
            <p className="text-sm text-slate-300">即將推出，敬請期待...</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-dashed flex flex-col items-center justify-center py-12 text-center">
            <h3 className="font-bold text-slate-400 mb-2">UI/UX 設計路徑</h3>
            <p className="text-sm text-slate-300">即將推出，敬請期待...</p>
          </div>
        </div>
      </main>
    </div>
  );
}
