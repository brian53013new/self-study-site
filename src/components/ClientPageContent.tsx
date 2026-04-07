'use client';

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { ResourceCard } from "@/components/ResourceCard";

interface ClientPageContentProps {
  initialResources: any[];
  categories: any[];
}

export function ClientPageContent({ initialResources, categories }: ClientPageContentProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = initialResources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category_slug === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input 
            placeholder="搜尋資源名稱或內容..." 
            className="pl-10 shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs 
          defaultValue="all" 
          onValueChange={setActiveCategory}
          className="w-full md:w-auto overflow-hidden border rounded-lg bg-white p-1 shadow-sm"
        >
          <TabsList className="w-full justify-start overflow-x-auto bg-transparent border-0 h-9">
            {categories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.slug}
                className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 transition-all rounded-md px-4"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[400px]">
        {filteredResources.length > 0 ? (
          filteredResources.map(resource => (
            <ResourceCard 
              key={resource.id}
              id={resource.id}
              title={resource.title}
              description={resource.description}
              url={resource.url}
              level={resource.level}
              mediaType={resource.mediaType || resource.media_type}
              likesCount={resource.likesCount || resource.likes_count}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-24 bg-white rounded-2xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400 font-medium">找不到符合條件的資源，換個關鍵字試試看吧！</p>
          </div>
        )}
      </div>
    </>
  );
}
