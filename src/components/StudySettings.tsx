'use client'

import React, { useState, useEffect } from 'react';
import { Settings, Key, Moon, Sun, Languages, Check } from 'lucide-react';
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
  const [apiError, setApiError] = useState('');
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('zh-TW');
  const [isOpen, setIsOpen] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // 確保頁面初始化時正確載入
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

  const validateApiKey = (key: string) => {
    if (!key) return true; // 允許為空（不使用 AI 功能）
    
    // 基本檢測：OpenAI (sk-...) 或 Gemini (長度至少 30 的字串)
    const isOpenAI = key.startsWith('sk-');
    const isGemini = key.length >= 30;
    
    // 如果看起來像亂打的（例如重複字元過多或長度太短）
    const isRandomGrep = /(.)\1{4,}/.test(key); // 連續 5 個相同字元
    
    if (isRandomGrep || (!isOpenAI && !isGemini)) {
      return false;
    }
    return true;
  };

  const handleSave = () => {
    if (apiKey && !validateApiKey(apiKey)) {
      setApiError(lang === 'zh-TW' ? '偵測到無效或疑似亂碼的 API 金鑰，請檢查。' : 'Invalid or suspicious API key detected.');
      return;
    }
    
    setApiError('');
    localStorage.setItem('study-guide-api-key', apiKey);
    localStorage.setItem('theme', theme);
    localStorage.setItem('language', lang);
    applyTheme(theme);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setIsOpen(false);
    }, 1000);
  };

  const t = {
    'zh-TW': {
      title: '個人化設定',
      desc: '調整您的學習偏好、AI 功能與介面語言。',
      apiKey: 'AI API 金鑰',
      apiHint: '* 金鑰儲存在您的瀏覽器中，我們無法存取您的隱私資料。',
      apiTesting: '【系統測試中】目前 API 功能處於測試階段，若無法連接或發生錯誤，請及時回報，歡迎隨時提出反饋！',
      theme: '介面風格',
      light: '淺色',
      dark: '深色',
      lang: '介面語言',
      save: '儲存設定',
      cancel: '取消',
      success: '已儲存！'
    },
    'en': {
      title: 'Settings',
      desc: 'Adjust your learning preferences, AI features, and language.',
      apiKey: 'AI API Key',
      apiHint: '* Keys are stored locally in your browser for privacy.',
      apiTesting: '[System Testing] The API feature is in testing. Please report any connection issues or errors immediately. Feedback is welcome!',
      theme: 'Theme Style',
      light: 'Light',
      dark: 'Dark',
      lang: 'Language',
      save: 'Save Changes',
      cancel: 'Cancel',
      success: 'Saved!'
    }
  }[lang as 'zh-TW' | 'en'];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary transition-colors">
          <Settings className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md bg-background border-border shadow-2xl p-6 rounded-2xl overflow-hidden">
        <DialogHeader className="mb-6">
          <DialogTitle className="flex items-center gap-3 text-2xl font-black text-foreground">
            <div className="p-2 bg-blue-600/10 rounded-lg">
              <Settings className="w-6 h-6 text-blue-600" />
            </div>
            {t.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {t.desc}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8">
          {/* Language Selection */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Languages className="w-4 h-4 text-blue-500" />
              <Label className="font-bold text-sm tracking-wide uppercase text-muted-foreground">{t.lang}</Label>
            </div>
            <div className="grid grid-cols-2 gap-3 p-1 bg-muted/30 rounded-xl">
              <Button 
                variant={lang === 'zh-TW' ? 'secondary' : 'ghost'}
                onClick={() => setLang('zh-TW')}
                className={`h-10 rounded-lg ${lang === 'zh-TW' ? 'shadow-sm bg-background' : ''}`}
              >
                繁體中文
              </Button>
              <Button 
                variant={lang === 'en' ? 'secondary' : 'ghost'}
                onClick={() => setLang('en')}
                className={`h-10 rounded-lg ${lang === 'en' ? 'shadow-sm bg-background' : ''}`}
              >
                English
              </Button>
            </div>
          </div>

          <div className="h-px bg-border/50" />

          {/* API Key */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Key className="w-4 h-4 text-blue-500" />
              <Label htmlFor="apiKey" className="font-bold text-sm tracking-wide uppercase text-muted-foreground">{t.apiKey}</Label>
            </div>
            
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/50 p-3 rounded-lg">
              <p className="text-[11px] text-amber-700 dark:text-amber-400 leading-relaxed font-medium">
                {t.apiTesting}
              </p>
            </div>

            <Input
              id="apiKey"
              type="password"
              placeholder="Gemini / OpenAI Key..."
              className={`bg-muted/30 border-border h-12 rounded-xl focus:ring-2 focus:ring-blue-600/20 ${apiError ? 'border-red-500' : ''}`}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            {apiError && (
              <p className="text-xs text-red-500 font-medium">{apiError}</p>
            )}
            <p className="text-[10px] text-muted-foreground leading-relaxed italic">
              {t.apiHint}
            </p>
          </div>

          <div className="h-px bg-border/50" />

          {/* Theme */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Moon className="w-4 h-4 text-blue-500" />
              <Label className="font-bold text-sm tracking-wide uppercase text-muted-foreground">{t.theme}</Label>
            </div>
            <div className="grid grid-cols-2 gap-3 p-1 bg-muted/30 rounded-xl">
              <Button 
                variant={theme === 'light' ? 'secondary' : 'ghost'}
                onClick={() => setTheme('light')}
                className={`flex items-center justify-center gap-2 h-10 rounded-lg ${theme === 'light' ? 'shadow-sm bg-background' : ''}`}
              >
                <Sun className="w-4 h-4" /> {t.light}
              </Button>
              <Button 
                variant={theme === 'dark' ? 'secondary' : 'ghost'}
                onClick={() => setTheme('dark')}
                className={`flex items-center justify-center gap-2 h-10 rounded-lg ${theme === 'dark' ? 'shadow-sm bg-background' : ''}`}
              >
                <Moon className="w-4 h-4" /> {t.dark}
              </Button>
            </div>
          </div>
        </div>

        <DialogFooter className="mt-8 flex gap-3">
          <Button variant="ghost" onClick={() => setIsOpen(false)} className="flex-1 rounded-xl">
            {t.cancel}
          </Button>
          <Button 
            onClick={handleSave} 
            className={`flex-1 rounded-xl transition-all duration-300 ${saved ? 'bg-green-600 hover:bg-green-600' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {saved ? <span className="flex items-center gap-2"><Check className="w-4 h-4" /> {t.success}</span> : t.save}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
