'use client'

import React, { useState } from 'react';
import { VOCAB_DATA, VocabWord } from "@/lib/vocab-data";
import { BookOpen, BrainCircuit, ChevronLeft, Search, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { QuizDialog } from "@/components/QuizDialog";

export default function VocabPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLevel, setActiveLevel] = useState<'All' | 'Basic' | 'Intermediate' | 'Advanced'>('All');
  const [quizWord, setQuizWord] = useState<{title: string, desc: string} | null>(null);

  const filteredVocab = VOCAB_DATA.filter(item => {
    const matchesSearch = item.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.translation.includes(searchTerm);
    const matchesLevel = activeLevel === 'All' || item.level === activeLevel;
    return matchesSearch && matchesLevel;
  });

  const startVocabQuiz = () => {
    // 隨機選一個目前的單字來出題
    const randomWord = filteredVocab[Math.floor(Math.random() * filteredVocab.length)];
    if (randomWord) {
      setQuizWord({
        title: `單字挑戰：${randomWord.word}`,
        desc: `這是一個關於單字「${randomWord.word}」的意義與用法的測驗。定義：${randomWord.definition}`
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-card border-b py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-blue-600 mb-6 transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" /> 返回資源導航
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-foreground tracking-tight">核心英語單字庫</h1>
              </div>
              <p className="text-muted-foreground text-lg">內建會考、學測、多益等級單字，並支援 AI 智能測驗。</p>
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 gap-2 h-14 px-8 text-lg shadow-lg" onClick={startVocabQuiz}>
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
              className="pl-12 h-14 text-lg bg-card border-border"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex bg-card p-1 rounded-xl border border-border">
            {['All', 'Basic', 'Intermediate', 'Advanced'].map((lvl) => (
              <Button
                key={lvl}
                variant={activeLevel === lvl ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveLevel(lvl as any)}
                className="h-12 px-6"
              >
                {lvl === 'All' ? '全部' : lvl}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVocab.map((item, idx) => (
            <div key={idx} className="group bg-card rounded-2xl border border-border p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl font-black text-blue-600 dark:text-blue-400">{item.word}</span>
                <Badge variant="outline" className={`font-bold ${
                  item.level === 'Basic' ? 'border-green-200 text-green-600' : 
                  item.level === 'Intermediate' ? 'border-blue-200 text-blue-600' : 'border-purple-200 text-purple-600'
                }`}>
                  {item.level}
                </Badge>
              </div>
              <p className="text-xl font-bold text-foreground mb-3">{item.translation}</p>
              <div className="space-y-4">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground italic leading-relaxed">"{item.example}"</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    <GraduationCap className="w-4 h-4 inline mr-2" />
                    {item.definition}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {quizWord && (
        <QuizDialog 
          isOpen={!!quizWord}
          onClose={() => setQuizWord(null)}
          resourceTitle={quizWord.title}
          resourceDescription={quizWord.desc}
        />
      )}
    </div>
  );
}
