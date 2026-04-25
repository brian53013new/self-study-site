'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

export const PersonalTrigger = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = process.env.NEXT_PUBLIC_PERSONAL_PASSWORD || 'brian';
    if (password === correctPassword) {
      setShowPrompt(false);
      setPassword('');
      setError(false);
      // 將密碼存入 sessionStorage 簡單保護
      sessionStorage.setItem('personal_access', 'true');
      router.push('/personal');
    } else {
      setError(true);
    }
  };

  return (
    <>
      <button 
        onClick={() => setShowPrompt(true)}
        className="text-muted-foreground hover:text-blue-600 flex items-center text-sm font-medium"
      >
        <User className="w-4 h-4 mr-1" />
        個人系統
      </button>

      {showPrompt && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full border animate-in zoom-in-95 duration-200">
            <h3 className="text-lg font-bold mb-4">進入個人系統</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="password"
                placeholder="請輸入個人密碼"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={error ? "border-red-500" : ""}
                autoFocus
              />
              {error && <p className="text-xs text-red-500">密碼不正確</p>}
              <div className="flex space-x-2 pt-2">
                <Button type="button" variant="outline" className="flex-1" onClick={() => setShowPrompt(false)}>
                  取消
                </Button>
                <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                  進入
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
