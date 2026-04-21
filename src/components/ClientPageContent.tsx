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
            variant={showSettings ? "default" : "outline"}
            onClick={() => setShowSettings(!showSettings)}
            className="gap-2 shrink-0 border-border"
          >
            <Sparkles className="w-4 h-4" /> AI 設定
          </Button>
        </div>
      </div>

      {showSettings ? (
        <StudySettings />
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
