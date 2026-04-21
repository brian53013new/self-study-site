'use client'

import React, { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, Star, Sparkles, LayoutGrid } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ResourceCard } from "./ResourceCard";
import { VOCAB_DATA } from "@/lib/vocab-data";
import { StudySettings } from "./StudySettings";

interface ClientPageContentProps {
  initialResources: any[];
  categories: any[];
}

export const ClientPageContent = ({ initialResources, categories }: ClientPageContentProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [showVocab, setShowVocab] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const filteredResources = useMemo(() => {
    let result = initialResources;

    // Filter by search term
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(r => 
        r.title.toLowerCase().includes(lowerSearch) || 
        r.description.toLowerCase().includes(lowerSearch)
      );
    }

    // Filter by category
    if (activeTab !== 'all') {
      if (activeTab === 'favorites') {
        const favorites = JSON.parse(typeof window !== 'undefined' ? localStorage.getItem('study-favorites') || '[]' : '[]');
        result = result.filter(r => favorites.includes(r.id));
      } else {
        result = result.filter(r => r.category_slug === activeTab);
      }
    }

    return result;
  }, [searchTerm, activeTab, initialResources]);

  return (
    <div className="space-y-8">
      {/* Top Bar: Search and Tools */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input 
            placeholder="搜尋課程、實驗室或工具..." 
            className="pl-10 bg-card border-border"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <Button 
            variant={showVocab ? "default" : "outline"} 
            onClick={() => { setShowVocab(!showVocab); setShowSettings(false); }}
            className="gap-2 shrink-0 border-border"
          >
            <BookOpen className="w-4 h-4" /> 內建單字庫
          </Button>
          <Button 
            variant={showSettings ? "default" : "outline"}
            onClick={() => { setShowSettings(!showSettings); setShowVocab(false); }}
            className="gap-2 shrink-0 border-border"
          >
            <Sparkles className="w-4 h-4" /> AI 設定
          </Button>
        </div>
      </div>

      {showSettings ? (
        <StudySettings />
      ) : showVocab ? (
        <section className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">核心英語單字庫</h2>
              <p className="text-muted-foreground">內建國中、高中、多益核心字彙</p>
            </div>
            <Button variant="ghost" onClick={() => setShowVocab(false)}>關閉</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VOCAB_DATA.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{item.word}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    item.level === 'Basic' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 
                    item.level === 'Intermediate' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600' : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600'
                  }`}>
                    {item.level}
                  </span>
                </div>
                <p className="text-sm font-bold text-foreground mb-1">{item.translation}</p>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed italic">"{item.example}"</p>
                <p className="text-[11px] text-muted-foreground/60 border-t border-border pt-2">{item.definition}</p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div className="space-y-6">
          <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
            <div className="flex items-center justify-between mb-4 overflow-x-auto">
              <TabsList className="bg-card border border-border p-1 h-auto flex-nowrap md:flex-wrap">
                <TabsTrigger value="all" className="gap-2 shrink-0">
                  <LayoutGrid className="w-4 h-4" /> 全部
                </TabsTrigger>
                {categories.filter(c => c.slug !== 'all').map(cat => (
                  <TabsTrigger key={cat.id} value={cat.slug} className="shrink-0">
                    {cat.name}
                  </TabsTrigger>
                ))}
                <TabsTrigger value="favorites" className="gap-2 text-amber-600 shrink-0">
                  <Star className="w-4 h-4 fill-current" /> 我的收藏
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0 focus-visible:outline-none">
              {filteredResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.map(resource => (
                    <ResourceCard key={resource.id} {...resource} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-card rounded-2xl border border-dashed border-border">
                  <p className="text-muted-foreground">找不到相關資源，請嘗試其他關鍵字或分類。</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
};
