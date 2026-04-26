'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ExternalLink, Lock, GraduationCap, ShieldCheck, Video, Cloud, Info, History, BookOpen, Brain, Globe, MessageSquare, Microscope, Languages } from 'lucide-react';

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
    const data: Record<string, string> = {
      "u": "Z2luZ2VybWFuNTMwQGdtYWlsLmNvbQ==",
      "p": "MDkzMzM2NTUwNQ==",
      "su": "YnJpYW41MzAxMy5uZXdAZ21haWwuY29t",
      "sp": "YnJpYW4uYmliaWxhYnU=",
      "zid": "NTg0NDIyMTcw",
      "hu": "aW5lbGVkdUBnbWFpbC5jb20=",
      "hp": "QnJpYW41MzBAQA==",
      "did": "ODQwIDU4OTkgOTg1OA=="
    };
    return atob(data[_0x5] || "");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 border-b pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black text-foreground mb-2 tracking-tight">個人學習系統</h1>
          <p className="text-muted-foreground text-lg">歡迎回來，Brian。以下是您的專屬課程與資源。</p>
        </div>
        {!isUnlocked ? (
          <Button onClick={() => setShowPrompt(true)} className="bg-blue-600 hover:bg-blue-700 shadow-lg px-8 py-6 text-lg rounded-2xl transition-all hover:scale-105 active:scale-95">
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
              <CardTitle className="text-center text-2xl font-black">身份驗證</CardTitle>
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

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {/* English Science Course Card */}
        <Card className="overflow-hidden border-2 border-teal-200 dark:border-teal-900/30 hover:border-teal-500/50 transition-all group shadow-md hover:shadow-2xl md:col-span-2">
          <div className="h-3 bg-gradient-to-r from-teal-500 to-cyan-400 w-full" />
          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-teal-100 dark:bg-teal-900/40 rounded-3xl group-hover:rotate-12 transition-transform">
                <div className="relative">
                  <Microscope className="w-12 h-12 text-teal-600 dark:text-teal-400" />
                  <Languages className="w-6 h-6 text-cyan-600 dark:text-cyan-300 absolute -bottom-1 -right-1 bg-background rounded-full p-0.5" />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-black text-foreground tracking-tight">英文理化專題</h2>
                <p className="text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest text-sm mt-1">English for Physical Science</p>
              </div>
            </div>
            <p className="text-muted-foreground text-xl leading-relaxed mb-8 max-w-4xl">
              結合科學知識與英語能力培養的跨領域課程。透過全英文環境探討物理與化學核心概念。
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Video className="w-6 h-6 text-teal-500" /> 線上教室入口
                </h3>
                <a href="https://meet.google.com/fzm-ecmz-api" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center justify-center gap-3 w-full py-5 bg-teal-600 text-white rounded-2xl hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/20 text-2xl font-black">
                  進入 Google Meet <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <div className="bg-teal-50/50 dark:bg-teal-900/10 p-6 rounded-3xl border border-teal-100 dark:border-teal-900/20 flex flex-col justify-center">
                <h4 className="text-teal-700 dark:text-teal-400 font-black text-xl mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6" /> 課程備註
                </h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  本課程固定使用 Google Meet 進行，請點擊上方按鈕直接進入。建議使用 Chrome 瀏覽器以獲得最佳體驗。
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Debate Course Card */}
        <Card className="overflow-hidden border-2 border-indigo-200 dark:border-indigo-900/30 hover:border-indigo-500/50 transition-all group shadow-md hover:shadow-2xl md:col-span-2">
          <div className="h-3 bg-gradient-to-r from-indigo-600 to-blue-500 w-full" />
          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-3xl group-hover:rotate-12 transition-transform">
                <MessageSquare className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h2 className="text-4xl font-black text-foreground tracking-tight">辯論專題課程 (NGF)</h2>
                <p className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-sm mt-1">Nexus Global Forum Debate</p>
              </div>
            </div>
            <p className="text-muted-foreground text-xl leading-relaxed mb-8 max-w-4xl">
              由 Nexus Global Forum 主辦的專業辯論課程，旨在提升批判性思維與演講表達能力。
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Video className="w-6 h-6 text-indigo-500" /> 線上教室入口
                </h3>
                <a href="https://us06web.zoom.us/j/84058999858?pwd=KdtAd1z6bbROvcrFybThyu3ijODiDW.1" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center justify-center gap-3 w-full py-5 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/20 text-2xl font-black">
                  進入 Zoom 會議 <ExternalLink className="w-5 h-5" />
                </a>
                <div className="bg-muted/30 p-6 rounded-2xl border border-dashed border-muted-foreground/30 mt-4">
                  {isUnlocked ? (
                    <div className="space-y-1">
                      <span className="text-xs text-indigo-600/60 uppercase block font-bold">Meeting ID</span>
                      <span className="text-3xl font-black text-indigo-700 dark:text-indigo-300 tracking-tight">{_0xce("did")}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-4">
                      <Lock className="w-6 h-6 text-muted-foreground/30 mb-2" />
                      <p className="text-sm text-muted-foreground font-medium italic">解鎖以查看會議 ID</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-indigo-50/50 dark:bg-indigo-900/10 p-6 rounded-3xl border border-indigo-100 dark:border-indigo-900/20 flex flex-col justify-center">
                <h4 className="text-indigo-700 dark:text-indigo-400 font-black text-xl mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6" /> 課程提示
                </h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  點擊藍色按鈕即可直接帶入密碼加入會議。若系統要求手動輸入 ID，請使用左側顯示的號碼。
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* History Course Large Card */}
        <Card className="overflow-hidden border-2 border-orange-200 dark:border-orange-900/30 hover:border-orange-500/50 transition-all group shadow-md hover:shadow-2xl md:col-span-2">
          <div className="h-3 bg-gradient-to-r from-orange-500 to-amber-400 w-full" />
          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-orange-100 dark:bg-orange-900/40 rounded-3xl group-hover:rotate-12 transition-transform">
                <History className="w-12 h-12 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h2 className="text-4xl font-black text-foreground tracking-tight">歷史專題課程</h2>
                <p className="text-orange-600 dark:text-orange-400 font-bold uppercase tracking-widest text-sm mt-1">History Specialist Program</p>
              </div>
            </div>
            <p className="text-muted-foreground text-xl leading-relaxed mb-8 max-w-4xl">
              專注於歷史脈絡解析與深度專題討論。所有資源已整合於下方，解鎖後即可查看會議 ID 與雲端附帶資源。
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Video className="w-6 h-6 text-orange-500" /> 線上教室入口
                </h3>
                <a href="https://us06web.zoom.us/j/5844221701?pwd=7fz5sBze027txb5MxbFYpC5g8cnN9a.1" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center justify-center gap-3 w-full py-5 bg-orange-600 text-white rounded-2xl hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/20 text-2xl font-black">
                  進入 Zoom 會議 <ExternalLink className="w-5 h-5" />
                </a>
                <div className="bg-muted/30 p-6 rounded-2xl border border-dashed border-muted-foreground/30 mt-4">
                  {isUnlocked ? (
                    <div className="space-y-4 font-mono">
                      <div>
                        <span className="text-xs text-orange-600/60 uppercase block mb-1 font-bold">Meeting ID</span>
                        <span className="text-3xl font-black text-orange-700 dark:text-orange-300 tracking-tight">{_0xce("zid")}</span>
                      </div>
                      <div className="h-px bg-orange-200 dark:bg-orange-800/30" />
                      <div>
                        <span className="text-xs text-emerald-600/60 uppercase block mb-2 font-bold flex items-center gap-1">
                          <Cloud className="w-3 h-3" /> 附帶資源 (歷史課雲端)
                        </span>
                        <a href="https://drive.google.com/drive/folders/1D3GTOwFTenNT1I1v-5SPNu3lD597mRsr" target="_blank" rel="noopener noreferrer"
                           className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline flex items-center gap-2 text-lg">
                          開啟 Google Drive <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-4">
                      <Lock className="w-6 h-6 text-muted-foreground/30 mb-2" />
                      <p className="text-sm text-muted-foreground font-medium italic">解鎖以查看會議 ID 與附帶資源</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-orange-50/50 dark:bg-orange-900/10 p-6 rounded-3xl border border-orange-100 dark:border-orange-900/20 flex flex-col justify-center">
                <h4 className="text-orange-700 dark:text-orange-400 font-black text-xl mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6" /> 課程備註
                </h4>
                <ul className="space-y-3 text-muted-foreground text-lg leading-relaxed">
                  <li>• 雲端教材連結已整合於左側 ID 欄位下方。</li>
                  <li>• 若要求 ID，請解鎖後複製號碼。</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Henry Card */}
        <Card className="overflow-hidden border-2 hover:border-purple-500/50 transition-all group shadow-sm hover:shadow-xl">
          <div className="h-2 bg-purple-600 w-full" />
          <CardHeader className="pb-4">
            <div className="flex justify-between items-start">
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-10 h-10 text-purple-600 dark:text-purple-400" />
              </div>
              <a href="https://course.henrypedia.com/login" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-bold">
                進入登入頁面 <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <CardTitle className="text-3xl font-black">Henry 讀書會</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg mb-8">專屬學習社群，包含精選書單、讀書筆記與深度討論內容。</p>
            {isUnlocked ? (
              <div className="space-y-4 bg-purple-50/50 dark:bg-purple-900/10 p-6 rounded-3xl border border-purple-100 dark:border-purple-900/30 font-mono">
                <div className="flex flex-col">
                  <span className="text-xs text-purple-600/60 uppercase tracking-widest mb-1">Email</span>
                  <span className="text-xl font-bold text-foreground">{_0xce("hu")}</span>
                </div>
                <div className="h-px bg-purple-200/50 dark:bg-orange-800/30" />
                <div className="flex flex-col">
                  <span className="text-xs text-purple-600/60 uppercase tracking-widest mb-1">Password</span>
                  <span className="text-xl font-bold text-foreground">{_0xce("hp")}</span>
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

        {/* AI Card */}
        <Card className="overflow-hidden border-2 hover:border-cyan-500/50 transition-all group shadow-sm hover:shadow-xl">
          <div className="h-2 bg-cyan-500 w-full" />
          <CardHeader className="pb-4">
            <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl mb-4 w-fit group-hover:scale-110 transition-transform">
              <Brain className="w-10 h-10 text-cyan-600 dark:text-cyan-400" />
            </div>
            <CardTitle className="text-3xl font-black">AI 學習與探索</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg mb-8">掌握人工智慧最前沿技術，包含基礎知識與進階應用專案。</p>
            <div className="space-y-3">
              <a href="https://code.org/en-US/hour-of-ai" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center justify-between p-4 bg-cyan-50/50 dark:bg-cyan-900/10 border border-cyan-100 dark:border-cyan-900/30 rounded-2xl hover:bg-cyan-100 transition-colors font-bold text-cyan-700 dark:text-cyan-300">
                Hour of AI <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://www.kyros.ai/special-program-detail/22130" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center justify-between p-4 bg-cyan-50/50 dark:bg-cyan-900/10 border border-cyan-100 dark:border-cyan-900/30 rounded-2xl hover:bg-cyan-100 transition-colors font-bold text-cyan-700 dark:text-cyan-300">
                Kyros AI Special Program <ExternalLink className="w-4 h-4" />
              </a>
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

        {/* EDX Card */}
        <Card className="overflow-hidden border-2 hover:border-red-500/50 transition-all group shadow-sm hover:shadow-xl">
          <div className="h-2 bg-red-600 w-full" />
          <CardHeader className="pb-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-2xl mb-4 w-fit group-hover:scale-110 transition-transform">
              <Globe className="w-10 h-10 text-red-600 dark:text-red-400" />
            </div>
            <CardTitle className="text-3xl font-black">EDX 全球課堂</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg mb-8">存取來自哈佛、麻省理工等世界頂尖大學的線上課程與學位。</p>
            <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center gap-3 w-full py-4 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition-all shadow-lg font-black text-xl">
              開啟 EDX 官網 <ExternalLink className="w-5 h-5" />
            </a>
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
        <p className="text-[10px] text-slate-400 uppercase tracking-widest">Secure Learning System v2.2</p>
      </div>
    </div>
  );
}
