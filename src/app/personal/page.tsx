'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ExternalLink, Lock, Eye, GraduationCap, ShieldCheck } from 'lucide-react';

export default function PersonalPage() {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  const [showPrompt, setShowPrompt] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passError, setPassError] = useState(false);

  useEffect(() => {
    const access = sessionStorage.getItem('personal_access');
    if (access !== 'true') {
      router.push('/');
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (!authorized) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Lock className="w-12 h-12 text-muted-foreground mb-4" />
        <p className="text-muted-foreground">正在驗證權限...</p>
      </div>
    );
  }

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const _0x8b = process.env.NEXT_PUBLIC_PERSONAL_PASSWORD || [0x62, 0x72, 0x69, 0x61, 0x6e].map(_ => String.fromCharCode(_)).join('');
    if (passwordInput === _0x8b) {
      setIsUnlocked(true);
      setShowPrompt(false);
      setPasswordInput('');
      setPassError(false);
    } else {
      setPassError(true);
    }
  };

  const _0xce = (_0x5: string) => {
    const _0x6 = "Z2luZ2VybWFuNTMwQGdtYWlsLmNvbQ==";
    const _0x7 = "MDkzMzM2NTUwNQ==";
    const _0x9 = "YnJpYW41MzAxMy5uZXdAZ21haWwuY29t";
    const _0xa = "YnJpYW4uYmliaWxhYnU=";
    const _0x8 = (_0x5 === "u") ? _0x6 : (_0x5 === "p" ? _0x7 : (_0x5 === "su" ? _0x9 : _0xa));
    return atob(_0x8);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 border-b pb-8 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-foreground mb-2 tracking-tight">個人學習系統</h1>
          <p className="text-muted-foreground text-lg">歡迎回來，Brian。以下是您的專屬課程與資源。</p>
        </div>
        {!isUnlocked ? (
          <Button onClick={() => setShowPrompt(true)} className="bg-blue-600 hover:bg-blue-700 shadow-lg px-6">
            <ShieldCheck className="w-4 h-4 mr-2" /> 解鎖機密資訊
          </Button>
        ) : (
          <Button variant="outline" onClick={() => setIsUnlocked(false)} className="text-red-500 border-red-200 hover:bg-red-50">
            <Lock className="w-4 h-4 mr-2" /> 重新鎖定
          </Button>
        )}
      </header>

      {showPrompt && !isUnlocked && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full shadow-2xl border-2">
            <CardHeader>
              <CardTitle className="text-center">請輸入系統密碼</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUnlock} className="space-y-4">
                <Input
                  type="password"
                  placeholder="Password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className={`h-12 text-lg text-center ${passError ? "border-red-500 animate-shake" : ""}`}
                  autoFocus
                />
                <div className="flex gap-3">
                  <Button type="button" variant="ghost" className="flex-1 h-12" onClick={() => setShowPrompt(false)}>取消</Button>
                  <Button type="submit" className="flex-1 h-12 bg-blue-600 hover:bg-blue-700">解鎖</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-2">
        {/* Funday Card */}
        <Card className="overflow-hidden border-2 hover:border-blue-500/50 transition-all group">
          <div className="h-2 bg-blue-600 w-full" />
          <CardHeader className="pb-4">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <a href="https://funday.asia/" target="_blank" rel="noopener noreferrer" 
                 className="p-2 hover:bg-muted rounded-full transition-colors">
                <ExternalLink className="w-6 h-6 text-muted-foreground" />
              </a>
            </div>
            <CardTitle className="text-2xl font-bold">Funday 英語學習</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">主要的英語線上課程平台，包含聽力、閱讀與一對一教學。</p>
            
            {isUnlocked ? (
              <div className="space-y-4 bg-muted/50 p-6 rounded-2xl font-mono border">
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Account ID</span>
                  <span className="text-xl font-bold text-foreground">{_0xce("u")}</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Access Password</span>
                  <span className="text-xl font-bold text-foreground">{_0xce("p")}</span>
                </div>
              </div>
            ) : (
              <div className="h-[148px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center bg-muted/20">
                <Lock className="w-8 h-8 text-muted-foreground/30 mb-2" />
                <p className="text-sm text-muted-foreground">內容已加密保護</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* SOP Card */}
        <Card className="overflow-hidden border-2 hover:border-blue-500/50 transition-all group">
          <div className="h-2 bg-slate-600 w-full" />
          <CardHeader className="pb-4">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-slate-600 dark:text-slate-400" />
              </div>
              <a href="https://members.sop.org/" target="_blank" rel="noopener noreferrer" 
                 className="p-2 hover:bg-muted rounded-full transition-colors">
                <ExternalLink className="w-6 h-6 text-muted-foreground" />
              </a>
            </div>
            <CardTitle className="text-2xl font-bold">SOP Members</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">專業學習會員系統，提供進階課程資源與會員專屬服務。</p>
            
            {isUnlocked ? (
              <div className="space-y-4 bg-muted/50 p-6 rounded-2xl font-mono border">
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Member Email</span>
                  <span className="text-xl font-bold text-foreground">{_0xce("su")}</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Member Password</span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl font-bold text-foreground">{_0xce("sp")}</span>
                    <span className="text-[10px] text-red-500 font-bold uppercase">(or uppercase first letter)</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-[148px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center bg-muted/20">
                <Lock className="w-8 h-8 text-muted-foreground/30 mb-2" />
                <p className="text-sm text-muted-foreground">內容已加密保護</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="ghost" onClick={() => {
          sessionStorage.removeItem('personal_access');
          router.push('/');
        }} className="text-muted-foreground hover:text-red-500">
          退出個人系統
        </Button>
      </div>
    </div>
  );
}
