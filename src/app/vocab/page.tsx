'use client'

import React, { useState } from 'react';
import { VOCAB_DATA } from "@/lib/vocab-data";
import { BookOpen, BrainCircuit, ChevronLeft, Search, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { QuizDialog } from "@/components/QuizDialog";

export default function VocabPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLevel, setActiveLevel] = useState<'All' | 'Elementary' | 'Junior' | 'Senior'>('All');
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const filteredVocab = VOCAB_DATA.filter(item => {
    const matchesSearch = item.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.translation.includes(searchTerm);
    const matchesLevel = activeLevel === 'All' || item.level === activeLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background pb-20 text-foreground">
      <header className="bg-card border-b py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-blue-600 mb-6 transition-colors font-medium">
            <ChevronLeft className="w-4 h-4 mr-1" /> 返回資源導航
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-600 rounded-2xl shadow-blue-200/50 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl font-black text-foreground tracking-tight">核心英語單字庫</h1>
              </div>
              <p className="text-muted-foreground text-lg font-medium">內建 3000+ 個核心字彙，並支援離線隨機測驗系統。</p>
            </div>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white gap-2 h-14 px-8 text-lg font-bold shadow-xl shadow-blue-500/20 rounded-2xl" 
              onClick={() => setIsQuizOpen(true)}
            >
              <BrainCircuit className="w-6 h-6" /> 開始隨機單字測驗
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="搜尋單字或中文翻譯..." 
              className="pl-12 h-14 text-lg bg-card border-border rounded-2xl focus:ring-4 focus:ring-blue-500/10 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex bg-card p-1.5 rounded-2xl border border-border shadow-sm">
            {[
              { id: 'All', label: '全部' },
              { id: 'Elementary', label: '小學' },
              { id: 'Junior', label: '國中' },
              { id: 'Senior', label: '高中' }
            ].map((lvl) => (
              <Button
                key={lvl.id}
                variant={activeLevel === lvl.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveLevel(lvl.id as any)}
                className={`h-11 px-6 rounded-xl font-bold transition-all ${activeLevel === lvl.id ? 'shadow-md' : 'text-muted-foreground'}`}
              >
                {lvl.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVocab.map((item) => (
            <div key={item.id} className="group bg-card rounded-3xl border border-border p-8 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl font-black text-blue-600 dark:text-blue-400 tracking-tight group-hover:scale-105 transition-transform origin-left">{item.word}</span>
                <Badge variant="outline" className={`font-bold px-3 py-1 rounded-full ${
                  item.level === 'Elementary' ? 'bg-green-50 text-green-600 border-green-200' : 
                  item.level === 'Junior' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-purple-50 text-purple-600 border-purple-200'
                }`}>
                  {item.level === 'Elementary' ? '小學' : item.level === 'Junior' ? '國中' : '高中'}
                </Badge>
              </div>
              <p className="text-xl font-bold text-foreground mb-4">{item.translation}</p>
              
              <div className="mt-auto space-y-4">
                <div className="p-4 bg-muted/30 rounded-2xl border border-border/50">
                  <p className="text-sm text-muted-foreground italic leading-relaxed">"{item.example}"</p>
                </div>
                <div className="pt-4 border-t border-border flex items-start gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    {item.definition}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {isQuizOpen && (
        <QuizDialog 
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
          resourceTitle="今日單字挑戰"
          resourceDescription="正在從 3000 字庫中為您抽選隨機單字測驗..."
        />
      )}
    </div>
  );
}
