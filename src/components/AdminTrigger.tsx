'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useAdmin } from '@/lib/AdminContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const AdminTrigger = () => {
  const { isAdmin, toggleAdmin, logout } = useAdmin();
  const [showPrompt, setShowPrompt] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  
  // 用於長按處理
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startLongPress = () => {
    timerRef.current = setTimeout(() => {
      setShowPrompt(true);
    }, 2000); // 長按 2 秒
  };

  const cancelLongPress = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (toggleAdmin(password)) {
      setShowPrompt(false);
      setPassword('');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <footer className="border-t py-8 mt-auto bg-slate-50 dark:bg-slate-900/50 dark:border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div 
          onMouseDown={startLongPress}
          onMouseUp={cancelLongPress}
          onMouseLeave={cancelLongPress}
          onTouchStart={startLongPress}
          onTouchEnd={cancelLongPress}
          className="text-slate-400 dark:text-slate-500 text-xs cursor-default select-none transition-opacity hover:opacity-100 opacity-60 inline-block py-2 px-4 rounded"
        >
          © 2026 自學指南 · v1.2.0
          {isAdmin && (
            <Badge variant="outline" className="ml-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
              開發者模式已開啟
            </Badge>
          )}
        </div>

        {isAdmin && (
          <div className="mt-4">
            <Button variant="ghost" size="sm" onClick={logout} className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
              登出開發者模式
            </Button>
          </div>
        )}

        {showPrompt && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-2xl max-w-sm w-full border dark:border-slate-800 animate-in zoom-in-95 duration-200">
              <h3 className="text-lg font-bold mb-4 text-foreground">解鎖開發者模式</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="password"
                  placeholder="請輸入管理密碼"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={error ? "border-red-500" : "bg-background"}
                  autoFocus
                />
                {error && <p className="text-xs text-red-500">密碼不正確，請再試一次</p>}
                <div className="flex space-x-2 pt-2">
                  <Button type="button" variant="outline" className="flex-1" onClick={() => setShowPrompt(false)}>
                    取消
                  </Button>
                  <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    驗證
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};
