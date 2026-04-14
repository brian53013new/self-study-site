'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, Check, BrainCircuit } from "lucide-react";

export const StudySettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedKey = localStorage.getItem('study_api_key');
    if (savedKey) setApiKey(savedKey);
  }, []);

  const handleSave = () => {
    localStorage.setItem('study_api_key', apiKey);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setIsOpen(false);
    }, 1500);
  };

  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => setIsOpen(!isOpen)}
        className="text-slate-500 hover:text-blue-600 flex items-center"
      >
        <BrainCircuit className="w-4 h-4 mr-1" />
        AI 設定
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 p-4 bg-white border rounded-xl shadow-xl z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center mb-4">
            <Settings className="w-4 h-4 mr-2 text-slate-400" />
            <span className="font-bold text-sm">學習設定</span>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-xs">Google Gemini API Key</Label>
              <Input 
                type="password"
                placeholder="在此填入你的 API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="h-8 text-xs"
              />
              <p className="text-[10px] text-slate-400 leading-tight">
                金鑰僅儲存在你的瀏覽器，我們不會上傳。可以用來生成練習題。
              </p>
            </div>
            
            <Button 
              size="sm" 
              className="w-full h-8 text-xs bg-blue-600" 
              onClick={handleSave}
            >
              {saved ? <Check className="w-3 h-3 mr-1" /> : null}
              {saved ? '已儲存' : '儲存設定'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
