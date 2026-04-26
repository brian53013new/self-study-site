'use client';

import React from 'react';
import { MOCK_CATEGORIES, MOCK_RESOURCES } from "@/lib/mock-data";
import { Compass } from "lucide-react";
import { ClientPageContent } from "@/components/ClientPageContent";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { lang } = useLanguage();

  const t = {
    'zh-TW': {
      title: '自學指南',
      subtitle: '精選學習資源，幫助你高效成長。',
    },
    'en': {
      title: 'Study Guide',
      subtitle: 'Curated learning resources to help you grow efficiently.',
    }
  }[lang];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card dark:bg-zinc-950 border-b border-border/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Compass className="w-12 h-12 text-blue-600 mr-2" />
            <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-6xl">
              {t.title}
            </h1>
          </div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            {t.subtitle}
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <ClientPageContent 
          initialResources={MOCK_RESOURCES} 
          categories={MOCK_CATEGORIES} 
        />
      </main>
    </div>
  );
}
