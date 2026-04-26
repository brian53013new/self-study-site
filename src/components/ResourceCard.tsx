'use client'

import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Video, 
  FileText, 
  Wrench, 
  Zap, 
  BookOpen, 
  Heart,
  Languages,
  Beaker
} from "lucide-react";
import { useLanguage } from '@/lib/LanguageContext';

interface ResourceCardProps {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  media_type: 'YouTube' | 'Blog' | 'Tool' | 'Interactive' | 'Course';
  language?: string;
  is_experiment?: boolean;
  like_count?: number;
}

export const ResourceCard = ({ 
  title, 
  description, 
  url, 
  level, 
  media_type, 
  language,
  is_experiment,
  like_count: initialLikeCount = 0 
}: ResourceCardProps) => {
  const { lang } = useLanguage();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikeCount);

  useEffect(() => {
    const favorites = JSON.parse(typeof window !== 'undefined' ? localStorage.getItem('study-favorites') || '[]' : '[]');
    setIsLiked(favorites.includes(title));
  }, [title]);

  const toggleLike = () => {
    const favorites = JSON.parse(localStorage.getItem('study-favorites') || '[]');
    let newFavorites;
    if (isLiked) {
      newFavorites = favorites.filter((fav: string) => fav !== title);
      setLikeCount(prev => prev - 1);
    } else {
      newFavorites = [...favorites, title];
      setLikeCount(prev => prev + 1);
    }
    localStorage.setItem('study-favorites', JSON.stringify(newFavorites));
    setIsLiked(!isLiked);
  };

  const getIcon = () => {
    switch (media_type) {
      case 'YouTube': return <Video className="w-3.5 h-3.5 text-red-500" />;
      case 'Blog': return <FileText className="w-3.5 h-3.5 text-blue-500" />;
      case 'Tool': return <Wrench className="w-3.5 h-3.5 text-orange-500" />;
      case 'Interactive': return <Zap className="w-3.5 h-3.5 text-yellow-500" />;
      default: return <BookOpen className="w-3.5 h-3.5 text-blue-500" />;
    }
  };

  const getLevelColor = () => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-700 border-green-200 dark:bg-green-950/30 dark:text-green-400 dark:border-green-900/30';
      case 'Intermediate': return 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-900/30';
      case 'Advanced': return 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-400 dark:border-purple-900/30';
      default: return 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800';
    }
  };

  return (
    <div className="group bg-white dark:bg-zinc-950 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-blue-500/20 transition-all duration-300 overflow-hidden flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-5">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className={`flex items-center gap-1 font-bold tracking-tight px-3 py-1 rounded-full ${getLevelColor()}`}>
              {level}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1.5 bg-slate-100 dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border-slate-200 dark:border-zinc-800 px-3 py-1 rounded-full font-medium">
              {getIcon()}
              {media_type}
            </Badge>
            {language && (
              <Badge variant="outline" className="flex items-center gap-1.5 border-blue-200 dark:border-blue-900/30 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-3 py-1 rounded-full font-medium">
                <Languages className="w-3.5 h-3.5" />
                {language}
              </Badge>
            )}
          </div>
          <button 
            onClick={toggleLike}
            className={`p-2.5 rounded-full transition-all duration-300 ${isLiked ? 'text-red-500 bg-red-50 dark:bg-red-500/10' : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-zinc-900'}`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>

        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 font-medium">
          {description}
        </p>
      </div>

      <div className="px-6 py-5 bg-slate-50/50 dark:bg-zinc-900/30 border-t border-slate-100 dark:border-white/5 flex items-center justify-between mt-auto">
        <span className="text-xs font-bold text-slate-400 dark:text-zinc-600 uppercase tracking-widest">
          {likeCount} {lang === 'zh-TW' ? '人收藏' : 'Likes'}
        </span>
        <Button 
          size="sm" 
          className="bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white gap-2 font-bold px-4 py-2 rounded-xl"
          asChild
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            {lang === 'zh-TW' ? '查看資源' : 'Open'} <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </Button>
      </div>
    </div>
  );
};
