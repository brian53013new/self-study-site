'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ExternalLink, Lock, GraduationCap, ShieldCheck, Video, Cloud, Info, History, BookOpen, Brain, Globe, MessageSquare, Microscope, Languages, Calculator, Sigma, Phone, Binary } from 'lucide-react';

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
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-background">
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
    const data: Record<string, string> = {
      "u": "Z2luZ2VybWFuNTMwQGdtYWlsLmNvbQ==",
      "p": "MDkzMzM2NTUwNQ==",
      "su": "YnJpYW41MzAxMy5uZXdAZ21haWwuY29t",
      "sp": "YnJpYW4uYmliaWxhYnU=",
      "zid": "NTg0NDIyMTcw",
      "hu": "aW5lbGVkdUBnbWFpbC5jb20=",
      "hp": "QnJpYW41MzBAQA==",
      "did": "ODQwIDU4OTkgOTg1OA==",
      "omid": "d2pnatF0cGlpZng=","dpu": "K1UpIDEgMzE3LTk2MS0wNjk4","dpin": "MzI0IDA0OSAzODUj"
    };
    return atob(data[_0x5] || "");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-16 border-b border-border/50 pb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-5xl font-black mb-3 tracking-tighter bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">個人學習系統</h1>
            <p className="text-muted-foreground text-xl">歡迎回來，Brian。管理您的專屬課程與機密資源。</p>
          </div>
          {!isUnlocked ? (
            <Button onClick={() => setShowPrompt(true)} className="bg-blue-600 hover:bg-blue-700 shadow-xl px-10 py-7 text-xl rounded-2xl transition-all hover:scale-105 active:scale-95 text-white font-black">
              <ShieldCheck className="w-6 h-6 mr-2" /> 解鎖機密資訊
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setIsUnlocked(false)} className="text-red-500 border-red-500/30 hover:bg-red-500/10 py-7 px-10 rounded-2xl text-lg font-bold">
              <Lock className="w-5 h-5 mr-2" /> 重新鎖定資訊
            </Button>
          )}
        </header>

        {showPrompt && !isUnlocked && (
          <div className="fixed inset-0 bg-background/90 backdrop-blur-xl z-50 flex items-center justify-center p-4">
            <Card className="max-w-md w-full shadow-2xl border-border/50 rounded-[2.5rem] overflow-hidden bg-card">
              <CardHeader className="bg-muted/30 pb-10 pt-10 border-b border-border/50">
                <CardTitle className="text-center text-3xl font-black tracking-tight text-foreground">身份驗證</CardTitle>
              </CardHeader>
              <CardContent className="pt-12 pb-12 px-8">
                <form onSubmit={handleUnlock} className="space-y-8">
                  <Input
                    type="password"
                    placeholder="Enter System Password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className={`h-16 text-2xl text-center rounded-2xl bg-muted/50 border-transparent focus:border-blue-600 focus:ring-0 text-foreground placeholder:text-muted-foreground/30 ${passError ? "border-red-500 animate-shake" : ""}`}
                    autoFocus
                  />
                  <div className="flex gap-4">
                    <Button type="button" variant="ghost" className="flex-1 h-14 rounded-2xl text-lg" onClick={() => setShowPrompt(false)}>取消</Button>
                    <Button type="submit" className="flex-1 h-14 bg-blue-600 hover:bg-blue-700 rounded-2xl text-lg font-black text-white shadow-lg shadow-blue-600/20">驗證並解鎖</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="grid gap-10 md:grid-cols-2">
          {/* Abacus Math Card */}
          <Card className="overflow-hidden border-2 border-emerald-500/10 hover:border-emerald-500/40 transition-all group shadow-2xl bg-zinc-950 md:col-span-2 rounded-[2rem]">
            <div className="h-2 bg-emerald-500 w-full" />
            <div className="p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-5 bg-emerald-500/10 rounded-3xl group-hover:rotate-12 transition-transform border border-emerald-500/20">
                  <Binary className="w-14 h-14 text-emerald-500" />
                </div>
                <div>
                  <h2 className="text-4xl font-black tracking-tight text-white">珠心算課程</h2>
                  <p className="text-emerald-500 font-bold uppercase tracking-widest text-sm mt-1">Abacus & Mental Arithmetic</p>
                </div>
              </div>
              <p className="text-zinc-400 text-xl leading-relaxed mb-10 max-w-4xl">培養極速運算能力與專注力的專業課程。強化大腦對數字的空間感與邏輯處理。</p>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-zinc-200"><Video className="w-6 h-6 text-emerald-500" /> 教室入口</h3>
                  <a href="https://meet.google.com/znu-vmds-fxi" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center justify-center gap-3 w-full py-6 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/20 text-2xl font-black">
                    進入 Google Meet <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
                <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 flex flex-col justify-center">
                  <h4 className="text-emerald-500 font-black text-xl mb-4 flex items-center gap-2"><Info className="w-6 h-6" /> 備註</h4>
                  <p className="text-zinc-400 text-lg leading-relaxed font-medium italic">點擊按鈕直接加入教室。請準備好您的算盤。</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Private Debate Card */}
          <Card className="overflow-hidden border-2 border-violet-500/10 hover:border-violet-500/40 transition-all group shadow-2xl bg-zinc-950 md:col-span-2 rounded-[2rem]">
            <div className="h-2 bg-violet-600 w-full" />
            <div className="p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-5 bg-violet-500/10 rounded-3xl group-hover:rotate-12 transition-transform border border-violet-500/20">
                  <MessageSquare className="w-14 h-14 text-violet-500" />
                </div>
                <div>
                  <h2 className="text-4xl font-black tracking-tight text-white">辯論私教課程</h2>
                  <p className="text-violet-500 font-bold uppercase tracking-widest text-sm mt-1">Brian's Private Debate Class</p>
                </div>
              </div>
              <p className="text-zinc-400 text-xl leading-relaxed mb-10 max-w-4xl">專注於演講技巧、批判性思維以及競賽策略的深度培訓。</p>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-zinc-200"><Video className="w-6 h-6 text-violet-500" /> 教室入口</h3>
                  <a href="https://meet.google.com/wae-iqur-pqz" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center justify-center gap-3 w-full py-6 bg-violet-600 text-white rounded-2xl hover:bg-violet-700 transition-all shadow-lg hover:shadow-violet-500/20 text-2xl font-black">
                    進入 Google Meet <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
                <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5">
                  {isUnlocked ? (
                    <div className="space-y-5 font-mono">
                      <div>
                        <span className="text-xs text-violet-500/60 uppercase block font-black mb-1 tracking-widest">Dial-in (US)</span>
                        <span className="text-xl font-bold text-white tracking-wider">{_0xce("dpu")}</span>
                      </div>
                      <div className="h-px bg-white/5" />
                      <div>
                        <span className="text-xs text-violet-500/60 uppercase block font-black mb-1 tracking-widest">PIN Code</span>
                        <span className="text-3xl font-black text-violet-500 tracking-tighter">{_0xce("dpin")}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full py-6">
                      <Lock className="w-10 h-10 text-zinc-700 mb-3" />
                      <p className="text-zinc-500 font-bold italic">解鎖以查看機密撥號資訊</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>

          {/* Olympiad Math Card */}
          <Card className="overflow-hidden border-2 border-red-500/10 hover:border-red-500/40 transition-all group shadow-2xl bg-zinc-950 md:col-span-2 rounded-[2rem]">
            <div className="h-2 bg-red-600 w-full" />
            <div className="p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-5 bg-red-500/10 rounded-3xl group-hover:rotate-12 transition-transform border border-red-500/20">
                  <Sigma className="w-14 h-14 text-red-500" />
                </div>
                <div>
                  <h2 className="text-4xl font-black tracking-tight text-white">奧數數學精英課</h2>
                  <p className="text-red-500 font-bold uppercase tracking-widest text-sm mt-1">Olympiad Mathematics</p>
                </div>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-zinc-200"><Video className="w-6 h-6 text-red-500" /> 教室入口</h3>
                  <a href="https://meet.google.com/wjn-atpi-ifx" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center justify-center gap-3 w-full py-6 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/20 text-2xl font-black">
                    進入 Google Meet <ExternalLink className="w-6 h-6" />
                  </a>
                  <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                    {isUnlocked ? (
                      <div className="space-y-1">
                        <span className="text-xs text-red-500/60 uppercase block font-black">Meeting Code</span>
                        <span className="text-3xl font-black text-red-500 tracking-tighter font-mono">{_0xce("omid")}</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center py-4 text-zinc-500 gap-2"><Lock className="w-5 h-5 opacity-30" /> 代碼已加密</div>
                    )}
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 flex flex-col justify-center">
                  <h4 className="text-red-500 font-black text-xl mb-4 flex items-center gap-2"><Info className="w-6 h-6" /> 提示</h4>
                  <p className="text-zinc-400 text-lg leading-relaxed">本課程若要求手動輸入代碼，請解鎖後複製號碼。</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Qing-Yuan Math Card */}
          <Card className="overflow-hidden border-2 border-blue-500/10 hover:border-blue-500/40 transition-all group shadow-2xl bg-zinc-950 md:col-span-2 rounded-[2rem]">
            <div className="h-2 bg-blue-600 w-full" />
            <div className="p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-5 bg-blue-500/10 rounded-3xl group-hover:rotate-12 transition-transform border border-blue-500/20">
                  <Calculator className="w-14 h-14 text-blue-500" />
                </div>
                <h2 className="text-4xl font-black tracking-tight text-white">慶元數學課程</h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <a href="https://meet.google.com/ddr-hdrt-eru" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center justify-center gap-3 w-full py-6 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20 text-2xl font-black">
                  進入 Google Meet <ExternalLink className="w-6 h-6" />
                </a>
                <div className="p-8 bg-zinc-900/50 rounded-3xl border border-white/5 text-zinc-400 text-lg font-medium italic">固定上課連結如上。</div>
              </div>
            </div>
          </Card>

          {/* History Card */}
          <Card className="overflow-hidden border-2 border-orange-500/10 hover:border-orange-500/40 transition-all group shadow-2xl bg-zinc-950 md:col-span-2 rounded-[2rem]">
            <div className="h-2 bg-orange-600 w-full" />
            <div className="p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-5 bg-orange-500/10 rounded-3xl group-hover:rotate-12 transition-transform border border-orange-500/20">
                  <History className="w-14 h-14 text-orange-500" />
                </div>
                <h2 className="text-4xl font-black tracking-tight text-white">歷史專題課程</h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <a href="https://us06web.zoom.us/j/5844221701?pwd=7fz5sBze027txb5MxbFYpC5g8cnN9a.1" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center justify-center gap-3 w-full py-6 bg-orange-600 text-white rounded-2xl hover:bg-orange-700 transition-all shadow-lg text-2xl font-black">
                    進入 Zoom 會議 <ExternalLink className="w-6 h-6" />
                  </a>
                  <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5">
                    {isUnlocked ? (
                      <div className="space-y-6">
                        <div>
                          <span className="text-xs text-orange-500/60 uppercase block font-black mb-1">Meeting ID</span>
                          <span className="text-3xl font-black text-orange-500 font-mono tracking-tight">{_0xce("zid")}</span>
                        </div>
                        <div className="h-px bg-white/5" />
                        <a href="https://drive.google.com/drive/folders/1D3GTOwFTenNT1I1v-5SPNu3lD597mRsr" target="_blank" rel="noopener noreferrer"
                           className="text-emerald-500 font-black hover:underline flex items-center gap-2 text-xl tracking-tight">
                          <Cloud className="w-6 h-6" /> 開啟歷史課雲端
                        </a>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center py-6 text-zinc-500"><Lock className="w-8 h-8 opacity-30 mb-2" /> 資源已加密</div>
                    )}
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 flex flex-col justify-center">
                  <h4 className="text-orange-500 font-black text-xl mb-4 flex items-center gap-2"><Info className="w-6 h-6" /> 課程備註</h4>
                  <ul className="space-y-3 text-zinc-400 text-lg">
                    <li>• 雲端連結位於左側 ID 下方。</li>
                    <li>• 若要求 ID，請解鎖後複製。</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-24 flex flex-col items-center gap-8">
          <Button variant="ghost" onClick={() => {
            sessionStorage.removeItem('personal_access');
            router.push('/');
          }} className="text-zinc-500 hover:text-red-500 text-xl font-bold transition-colors">
            退出個人系統
          </Button>
          <p className="text-[11px] text-zinc-700 uppercase tracking-[0.3em] font-black">Secure Learning Environment v3.0</p>
        </div>
      </div>
    </div>
  );
}
