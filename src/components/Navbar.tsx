'use client';

import Link from "next/link";
import { Compass, Map, BookOpen, Layout } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { PersonalTrigger } from "@/components/PersonalTrigger";
import { StudySettings } from "@/components/StudySettings";

export const Navbar = () => {
  const { lang } = useLanguage();

  const t = {
    'zh-TW': {
      brand: '自學指南',
      nav1: '資源導航',
      nav2: '單字庫',
      nav3: '學習路徑',
    },
    'en': {
      brand: 'Study Guide',
      nav1: 'Resources',
      nav2: 'Vocabulary',
      nav3: 'Roadmaps',
    }
  }[lang];

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center font-bold text-xl text-blue-600">
          <Compass className="w-6 h-6 mr-2" />
          {t.brand}
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-muted-foreground hover:text-blue-600 flex items-center text-sm font-medium">
            <Compass className="w-4 h-4 mr-1" />
            {t.nav1}
          </Link>
          <Link href="/vocab" className="text-muted-foreground hover:text-blue-600 flex items-center text-sm font-medium">
            <BookOpen className="w-4 h-4 mr-1" />
            {t.nav2}
          </Link>
          <Link href="/roadmaps" className="text-muted-foreground hover:text-blue-600 flex items-center text-sm font-medium">
            <Map className="w-4 h-4 mr-1" />
            {t.nav3}
          </Link>
          <PersonalTrigger />
          <div className="pl-2 border-l border-border">
            <div className="flex items-center gap-2">
              <StudySettings />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
