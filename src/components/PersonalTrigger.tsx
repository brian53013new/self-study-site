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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-950 p-8 rounded-3xl shadow-2xl max-w-sm w-full border dark:border-zinc-800 animate-in zoom-in-95 duration-200">
            <h3 className="text-2xl font-black mb-6 text-foreground tracking-tight text-center">身份驗證</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`h-14 text-lg text-center rounded-2xl bg-muted/50 border-transparent focus:border-blue-600 focus:ring-0 ${error ? "border-red-500 bg-red-50 dark:bg-red-950/20" : ""}`}
                autoFocus
              />
              {error && <p className="text-sm text-red-500 text-center font-medium">密碼不正確，請重試</p>}
              <div className="flex space-x-3 pt-2">
                <Button type="button" variant="ghost" className="flex-1 h-12 rounded-xl" onClick={() => setShowPrompt(false)}>
                  取消
                </Button>
                <Button type="submit" className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold shadow-lg shadow-blue-600/20 text-white">
                  驗證
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
