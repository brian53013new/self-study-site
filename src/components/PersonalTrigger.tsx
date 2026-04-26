'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { GraduationCap, Lock, ShieldCheck } from 'lucide-react';

export const PersonalTrigger = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 使用與個人頁面一致的解密邏輯或環境變數
    const _0x8b = process.env.NEXT_PUBLIC_PERSONAL_PASSWORD || [0x62, 0x72, 0x69, 0x61, 0x6e].map(_ => String.fromCharCode(_)).join('');
    if (password === _0x8b) {
      setShowPrompt(false);
      setPassword('');
      setError(false);
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
        className="group relative flex items-center gap-3 px-6 py-2.5 bg-white dark:bg-white/5 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-full transition-all duration-500 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex items-center gap-2.5">
          <div className="p-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:bg-white/20 transition-colors duration-500">
            <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-500" />
          </div>
          <span className="text-sm font-black tracking-widest text-slate-700 dark:text-zinc-200 group-hover:text-white transition-colors duration-500 uppercase">個人系統</span>
        </div>
      </button>

      {showPrompt && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4 transition-all animate-in fade-in duration-300">
          <div className="bg-white dark:bg-zinc-950 p-10 rounded-[2.5rem] shadow-2xl max-w-sm w-full border dark:border-white/5 animate-in zoom-in-95 duration-300">
            <div className="flex justify-center mb-8">
              <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-[1.5rem] border border-blue-100 dark:border-blue-800/30">
                <Lock className="w-10 h-10 text-blue-600 dark:text-blue-500" />
              </div>
            </div>
            <h3 className="text-2xl font-black mb-8 text-slate-900 dark:text-white tracking-tight text-center">身份驗證</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`h-16 text-center text-2xl rounded-2xl bg-slate-50 dark:bg-white/5 border-transparent focus:ring-4 focus:ring-blue-600/20 transition-all text-slate-900 dark:text-white ${error ? "ring-2 ring-red-500 bg-red-50 dark:bg-red-950/20" : ""}`}
                  autoFocus
                />
                {error && <p className="text-sm text-red-500 text-center font-bold animate-pulse">密碼不正確</p>}
              </div>
              <div className="flex space-x-3">
                <Button type="button" variant="ghost" className="flex-1 h-14 rounded-2xl text-slate-400 dark:text-zinc-500" onClick={() => setShowPrompt(false)}>
                  取消
                </Button>
                <Button type="submit" className="flex-1 h-14 bg-blue-600 hover:bg-blue-700 rounded-2xl font-black text-white shadow-xl shadow-blue-600/30 transition-transform active:scale-95">
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
