'use client'

import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  BrainCircuit, 
  Heart, 
  PlayCircle, 
  BookOpen, 
  Wrench, 
  FileText,
  Beaker,
  Languages
} from "lucide-react";
import { QuizDialog } from "./QuizDialog";

interface ResourceCardProps {
  id: string;
  title: string;
  description: string;
  url: string;
  level: string;
  media_type: string;
  category_slug: string;
  likes_count: number;
  language?: string;
  is_experiment?: boolean;
}

export const ResourceCard = ({ 
  id, 
  title, 
  description, 
  url, 
  level, 
  media_type, 
  likes_count,
  language,
  is_experiment
}: ResourceCardProps) => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes_count);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('study-favorites') || '[]');
    setIsLiked(favorites.includes(id));
  }, [id]);

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const favorites = JSON.parse(localStorage.getItem('study-favorites') || '[]');
    let newFavorites;
    
    if (isLiked) {
      newFavorites = favorites.filter((favId: string) => favId !== id);
      setLikeCount(prev => prev - 1);
    } else {
      newFavorites = [...favorites, id];
      setLikeCount(prev => prev + 1);
    }
    
    localStorage.setItem('study-favorites', JSON.stringify(newFavorites));
    setIsLiked(!isLiked);
  };

  const getIcon = () => {
    switch (media_type) {
      case 'YouTube': return <PlayCircle className="w-4 h-4" />;
      case 'Course': return <BookOpen className="w-4 h-4" />;
      case 'Tool': return <Wrench className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getLevelColor = () => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-700 border-green-200';
      case 'Intermediate': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Advanced': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <>
      <div className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
        <div className="p-5 flex-grow">
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className={`flex items-center gap-1 font-medium ${getLevelColor()}`}>
                {level}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1 bg-slate-100 text-slate-600 border-slate-200">
                {getIcon()}
                {media_type}
              </Badge>
              {language && (
                <Badge variant="outline" className="flex items-center gap-1 border-blue-200 text-blue-600 bg-blue-50">
                  <Languages className="w-3 h-3" />
                  {language}
                </Badge>
              )}
              {is_experiment && (
                <Badge variant="outline" className="flex items-center gap-1 border-amber-200 text-amber-600 bg-amber-50">
                  <Beaker className="w-3 h-3" />
                  線上實驗室
                </Badge>
              )}
            </div>
            <button 
              onClick={toggleLike}
              className={`p-2 rounded-full transition-colors ${isLiked ? 'text-red-500 bg-red-50' : 'text-slate-400 hover:bg-slate-50'}`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>

        <div className="px-5 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-slate-600 hover:text-blue-600 gap-2 px-2"
              onClick={() => setIsQuizOpen(true)}
            >
              <BrainCircuit className="w-4 h-4" />
              AI 測驗
            </Button>
          </div>
          <Button 
            size="sm" 
            className="bg-slate-900 hover:bg-slate-800 text-white gap-2"
            asChild
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              查看資源 <ExternalLink className="w-3 h-3" />
            </a>
          </Button>
        </div>
      </div>

      <QuizDialog 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
        resourceTitle={title}
        resourceDescription={description}
      />
    </>
  );
};
