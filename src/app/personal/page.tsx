'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ExternalLink, Lock, GraduationCap, ShieldCheck, Video, Cloud, Info } from 'lucide-react';

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
    const _0xb = "NTg0NDIyMTcw"; // Zoom ID
    const _0x8 = (_0x5 === "u") ? _0x6 : (_0x5 === "p" ? _0x7 : (_0x5 === "su" ? _0x9 : (_0x5 === "sp" ? _0xa : _0xb)));
    return atob(_0x8);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 border-b pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black text-foreground mb-2 tracking-tight">個人學習系統</h1>
          <p className="text-muted-foreground text-lg">歡迎回來，Brian。以下是您的專屬課程與資源。</p>
        </div>
        {!isUnlocked ? (
          <Button onClick={() => setShowPrompt(true)} className="bg-blue-600 hover:bg-blue-700 shadow-lg px-8 py-6 text-lg rounded-2xl">
            <ShieldCheck className="w-5 h-5 mr-2" /> 解鎖機密資訊
          </Button>
        ) : (
          <Button variant="outline" onClick={() => setIsUnlocked(false)} className="text-red-500 border-red-200 hover:bg-red-50 py-6 px-8 rounded-2xl">
            <Lock className="w-5 h-5 mr-2" /> 重新鎖定
          </Button>
        )}
      </header>

      {showPrompt && !isUnlocked && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full shadow-2xl border-2 rounded-3xl overflow-hidden">
            <CardHeader className="bg-muted/50 pb-8">
              <CardTitle className="text-center text-2xl">身分驗證</CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <form onSubmit={handleUnlock} className="space-y-6">
                <Input
                  type="password"
                  placeholder="Enter Password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className={`h-14 text-xl text-center rounded-2xl ${passError ? "border-red-500 animate-shake" : ""}`}
                  autoFocus
                />
                <div className="flex gap-4">
                  <Button type="button" variant="ghost" className="flex-1 h-12 rounded-xl" onClick={() => setShowPrompt(false)}>取消</Button>
                  <Button type="submit" className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl">驗證解鎖</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-2">
        {/* Zoom Card */}
        <Card className="overflow-hidden border-2 hover:border-orange-500/50 transition-all group shadow-sm hover:shadow-xl">
          <div className="h-2 bg-orange-500 w-full" />
          <CardHeader className="pb-4">
            <div className="flex justify-between items-start">
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Video className="w-10 h-10 text-orange-600 dark:text-orange-400" />
              </div>
              <a href="https://us06web.zoom.us/j/5844221701?pwd=7fz5sBze027txb5MxbFYpC5g8cnN9a.1" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors font-bold">
                進入會議 <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <CardTitle className="text-3xl font-black">Zoom 線上教室</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg mb-8">即時互動課程入口，點擊上方按鈕可直接加入會議。</p>
            
            {isUnlocked ? (
              <div className="bg-orange-50/50 dark:bg-orange-900/10 p-6 rounded-3xl border border-orange-100 dark:border-orange-900/30">
                <div className="flex items-center gap-3 text-orange-700 dark:text-orange-400 font-bold mb-4">
                  <Info className="w-5 h-5" /> 登入資訊
                </div>
                <div className="flex flex-col space-y-2 font-mono">
                  <span className="text-xs text-orange-600/60 uppercase tracking-widest">Meeting ID</span>
                  <span className="text-2xl font-black text-orange-700 dark:text-orange-300 tracking-tighter">
                    {_0xce("zid")}
                  </span>
                  <p className="text-sm text-orange-600/80 mt-2 font-sans italic">※ 若系統要求輸入 ID，請使用上方號碼。</p>
                </div>
              </div>
            ) : (
              <div className="h-[140px] border-2 border-dashed rounded-3xl flex flex-col items-center justify-center bg-muted/20">
                <Lock className="w-8 h-8 text-muted-foreground/30 mb-2" />
                <p className="text-sm text-muted-foreground font-medium">會議 ID 已隱藏</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Cloud Storage Card */}
        <Card className="overflow-hidden border-2 hover:border-emerald-500/50 transition-all group shadow-sm hover:shadow-xl">
          <div className="h-2 bg-emerald-500 w-full" />
          <CardHeader className="pb-4">
            <div className="flex justify-between items-start">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Cloud className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
              </div>
              <a href="https://drive.google.com/drive/folders/1D3GTOwFTenNT1I1v-5SPNu3lD597mRsr" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-bold">
                開啟雲端 <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <CardTitle className="text-3xl font-black">課程雲端資源</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg mb-8">存放所有上課教材、講義與錄影存檔的 Google Drive 空間。</p>
            <div className="p-6 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-3xl border border-emerald-100 dark:border-emerald-900/30">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold">
                <ShieldCheck className="w-5 h-5" /> 存取權限已開放
              </div>
              <p className="text-sm text-emerald-600/70 mt-1 font-sans">此連結僅限 Brian 本人使用，請勿外流。</p>
            </div>
          </CardContent>
        </Card>

        {/* Funday Card */}
        <Card className="overflow-hidden border-2 hover:border-blue-500/50 transition-all group shadow-sm hover:shadow-xl">
          <div className="h-2 bg-blue-600 w-full" />
          <CardHeader className="pb-4">
            <div className="flex justify-between items-start">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <a href="https://funday.asia/" target="_blank" rel="noopener noreferrer" 
                 className="p-2 hover:bg-muted rounded-full transition-colors">
                <ExternalLink className="w-7 h-7 text-muted-foreground" />
              </a>
            </div>
            <CardTitle className="text-3xl font-black">Funday 英語學習</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg mb-8">主要的英語線上課程平台，包含聽力、閱讀與一對一教學。</p>
            
            {isUnlocked ? (
              <div className="space-y-4 bg-blue-50/50 dark:bg-blue-900/10 p-6 rounded-3xl border border-blue-100 dark:border-blue-900/30 font-mono">
                <div className="flex flex-col">
                  <span className="text-xs text-blue-600/60 uppercase tracking-widest mb-1">Account ID</span>
                  <span className="text-xl font-bold text-foreground">{_0xce("u")}</span>
                </div>
                <div className="h-px bg-blue-200/50 dark:bg-blue-800/50" />
                <div className="flex flex-col">
                  <span className="text-xs text-blue-600/60 uppercase tracking-widest mb-1">Access Password</span>
                  <span className="text-xl font-bold text-foreground">{_0xce("p")}</span>
                </div>
              </div>
            ) : (
              <div className="h-[148px] border-2 border-dashed rounded-3xl flex flex-col items-center justify-center bg-muted/20">
                <Lock className="w-8 h-8 text-muted-foreground/30 mb-2" />
                <p className="text-sm text-muted-foreground font-medium">登入資訊已加密</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* SOP Card */}
        <Card className="overflow-hidden border-2 hover:border-slate-500/50 transition-all group shadow-sm hover:shadow-xl">
          <div className="h-2 bg-slate-600 w-full" />
          <CardHeader className="pb-4">
            <div className="flex justify-between items-start">
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-10 h-10 text-slate-600 dark:text-slate-400" />
              </div>
              <a href="https://members.sop.org/" target="_blank" rel="noopener noreferrer" 
                 className="p-2 hover:bg-muted rounded-full transition-colors">
                <ExternalLink className="w-7 h-7 text-muted-foreground" />
              </a>
            </div>
            <CardTitle className="text-3xl font-black">SOP Members</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg mb-8">專業學習會員系統，提供進階課程資源與會員專屬服務。</p>
            
            {isUnlocked ? (
              <div className="space-y-4 bg-slate-50 dark:bg-slate-900/10 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 font-mono">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-600/60 uppercase tracking-widest mb-1">Member Email</span>
                  <span className="text-xl font-bold text-foreground">{_0xce("su")}</span>
                </div>
                <div className="h-px bg-slate-200/50 dark:bg-slate-800/50" />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-600/60 uppercase tracking-widest mb-1">Member Password</span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl font-bold text-foreground">{_0xce("sp")}</span>
                    <span className="text-[10px] text-red-500 font-bold uppercase">(or uppercase first letter)</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-[148px] border-2 border-dashed rounded-3xl flex flex-col items-center justify-center bg-muted/20">
                <Lock className="w-8 h-8 text-muted-foreground/30 mb-2" />
                <p className="text-sm text-muted-foreground font-medium">登入資訊已加密</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="mt-20 flex flex-col items-center gap-4">
        <Button variant="ghost" onClick={() => {
          sessionStorage.removeItem('personal_access');
          router.push('/');
        }} className="text-muted-foreground hover:text-red-500 text-lg">
          退出個人系統
        </Button>
        <p className="text-[10px] text-slate-400 uppercase tracking-widest">Secure Learning System v2.0</p>
      </div>
    </div>
  );
}
