'use client'

import React, { useState, useEffect } from 'react';
import { Settings, Key, Moon, Sun, Languages } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";

export const StudySettings = () => {
  const [apiKey, setApiKey] = useState('');
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('zh-TW');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load saved settings
    const savedKey = localStorage.getItem('study-guide-api-key');
    if (savedKey) setApiKey(savedKey);
    
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    setTheme(savedTheme);
    applyTheme(savedTheme);

    const savedLang = localStorage.getItem('language') || 'zh-TW';
    setLang(savedLang);
  }, []);

  const applyTheme = (newTheme: string) => {
    const root = window.document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const handleSave = () => {
    localStorage.setItem('study-guide-api-key', apiKey);
    localStorage.setItem('theme', theme);
    localStorage.setItem('language', lang);
    applyTheme(theme);
    setIsOpen(false);
    // Reload or use context to update UI language in a real app
    // window.location.reload(); 
  };

  const t = {
    'zh-TW': {
      title: '個人化設定',
      desc: '調整您的學習偏好與 AI 功能設定。',
      apiKey: 'AI API 金鑰',
      apiHint: '* 金鑰儲存在您的瀏覽器中，我們無法存取您的隱私資料。',
      theme: '介面風格',
      light: '淺色模式',
      dark: '深色模式',
      lang: '介面語言',
      save: '儲存設定',
      cancel: '取消'
    },
    'en': {
      title: 'Settings',
      desc: 'Adjust your learning preferences and AI settings.',
      apiKey: 'AI API Key',
      apiHint: '* Keys are stored locally in your browser for privacy.',
      theme: 'Theme Style',
      light: 'Light Mode',
      dark: 'Dark Mode',
      lang: 'Language',
      save: 'Save Changes',
      cancel: 'Cancel'
    }
  }[lang as 'zh-TW' | 'en'];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-slate-600 hover:text-blue-600">
          <Settings className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
            <Settings className="w-5 h-5 text-blue-600" />
            {t.title}
          </DialogTitle>
          <DialogDescription className="dark:text-slate-400">
            {t.desc}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Language Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Languages className="w-4 h-4 text-slate-500" />
              <Label className="font-bold text-slate-700 dark:text-slate-200">{t.lang}</Label>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant={lang === 'zh-TW' ? 'default' : 'outline'}
                onClick={() => setLang('zh-TW')}
                className="h-10"
              >
                繁體中文
              </Button>
              <Button 
                variant={lang === 'en' ? 'default' : 'outline'}
                onClick={() => setLang('en')}
                className="h-10"
              >
                English
              </Button>
            </div>
          </div>

          <div className="h-px bg-slate-100 dark:bg-slate-800" />

          {/* API Key Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Key className="w-4 h-4 text-slate-500" />
              <Label htmlFor="apiKey" className="font-bold text-slate-700 dark:text-slate-200">
                {t.apiKey}
              </Label>
            </div>
            <Input
              id="apiKey"
              type="password"
              placeholder="Gemini / OpenAI Key..."
              className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <p className="text-[11px] text-slate-500 dark:text-slate-500 leading-relaxed italic">
              {t.apiHint}
            </p>
          </div>

          <div className="h-px bg-slate-100 dark:bg-slate-800" />

          {/* Theme Section */}
          <div className="space-y-3">
            <Label className="font-bold text-slate-700 dark:text-slate-200">{t.theme}</Label>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant={theme === 'light' ? 'default' : 'outline'}
                onClick={() => setTheme('light')}
                className="flex items-center justify-center gap-2 h-10"
              >
                <Sun className="w-4 h-4" /> {t.light}
              </Button>
              <Button 
                variant={theme === 'dark' ? 'default' : 'outline'}
                onClick={() => setTheme('dark')}
                className="flex items-center justify-center gap-2 h-10"
              >
                <Moon className="w-4 h-4" /> {t.dark}
              </Button>
            </div>
          </div>
        </div>

        <DialogFooter className="flex sm:justify-between gap-3 border-t pt-4 dark:border-slate-800">
          <Button variant="ghost" onClick={() => setIsOpen(false)} className="dark:text-slate-400">
            {t.cancel}
          </Button>
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            {t.save}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
