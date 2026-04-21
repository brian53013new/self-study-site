'use client'

import React, { useState, useEffect } from 'react';
import { Settings, Key, Moon, Sun, Laptop } from 'lucide-react';
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load saved settings
    const savedKey = localStorage.getItem('study-guide-api-key');
    if (savedKey) setApiKey(savedKey);
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    applyTheme(savedTheme);
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
    applyTheme(theme);
    setIsOpen(false);
    // 可選：可以加一個 toast 提示
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-slate-600 hover:text-blue-600">
          <Settings className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md bg-white dark:bg-slate-900 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-600" />
            個人化設定
          </DialogTitle>
          <DialogDescription>
            調整您的學習偏好與 AI 功能設定。
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* API Key Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Key className="w-4 h-4 text-slate-500" />
              <Label htmlFor="apiKey" className="font-bold text-slate-700 dark:text-slate-200">
                AI API 金鑰
              </Label>
            </div>
            <Input
              id="apiKey"
              type="password"
              placeholder="貼上您的 Gemini 或 OpenAI 金鑰..."
              className="bg-slate-50 dark:bg-slate-800"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <p className="text-[11px] text-slate-500 leading-relaxed italic">
              * 金鑰儲存在您的瀏覽器中，我們無法存取您的隱私資料。
            </p>
          </div>

          <div className="h-px bg-slate-100 dark:bg-slate-800" />

          {/* Theme Section */}
          <div className="space-y-3">
            <Label className="font-bold text-slate-700 dark:text-slate-200">介面風格</Label>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant={theme === 'light' ? 'default' : 'outline'}
                onClick={() => setTheme('light')}
                className="flex items-center justify-center gap-2 h-12"
              >
                <Sun className="w-4 h-4" /> 淺色模式
              </Button>
              <Button 
                variant={theme === 'dark' ? 'default' : 'outline'}
                onClick={() => setTheme('dark')}
                className="flex items-center justify-center gap-2 h-12"
              >
                <Moon className="w-4 h-4" /> 深色模式
              </Button>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>取消</Button>
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            儲存設定
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
