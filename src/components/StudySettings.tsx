'use client'

import React, { useState, useEffect } from 'react';
import { Settings, Key, Moon, Sun, Monitor } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const StudySettings = () => {
  const [apiKey, setApiKey] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedKey = localStorage.getItem('study-guide-api-key');
    if (savedKey) setApiKey(savedKey);
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const handleSave = () => {
    localStorage.setItem('study-guide-api-key', apiKey);
    localStorage.setItem('theme', theme);
    alert('設定已儲存！');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-6 border-b pb-4">
        <Settings className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-bold">個人化設定</h2>
      </div>

      <div className="space-y-6">
        {/* API Key Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <Key className="w-4 h-4 text-slate-500" />
            <Label htmlFor="apiKey">AI API 金鑰 (Gemini / OpenAI)</Label>
          </div>
          <Input
            id="apiKey"
            type="password"
            placeholder="請輸入您的 API 金鑰..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <p className="text-xs text-slate-500">
            * 您的金鑰僅儲存在本地瀏覽器，不會上傳至任何伺服器。
          </p>
        </div>

        {/* Theme Section */}
        <div className="space-y-2">
          <Label>介面主題</Label>
          <div className="flex gap-2">
            <Button 
              variant={theme === 'light' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTheme('light')}
              className="flex items-center gap-2"
            >
              <Sun className="w-4 h-4" /> 淺色
            </Button>
            <Button 
              variant={theme === 'dark' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTheme('dark')}
              className="flex items-center gap-2"
            >
              <Moon className="w-4 h-4" /> 深色
            </Button>
          </div>
        </div>

        <Button onClick={handleSave} className="w-full bg-blue-600 hover:bg-blue-700">
          儲存所有設定
        </Button>
      </div>
    </div>
  );
};
