'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  ExternalLink, Lock, GraduationCap, ShieldCheck, Video, Cloud, Info, 
  History, BookOpen, Brain, Globe, MessageSquare, Microscope, 
  Languages, Calculator, Sigma, Phone, Binary, Music, Layout, Eye, Sparkles
} from 'lucide-react';

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
    return <div className="min-h-[60vh] flex items-center justify-center bg-background text-muted-foreground">正在驗證權限...</div>;
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
      "u": "gingerman530@gmail.com", "p": "0933365505",
      "su": "brian53013.new@gmail.com", "sp": "brian.bibilabu",
      "zid": "584422170", "hu": "ineledu@gmail.com", "hp": "Brian530@@",
      "did": "840 5899 9858", "omid": "wjnatpiifx",
      "dpu": "+1 317-961-0698", "dpin": "324 049 385#"
    };
    // 這裡改回 Base64 加密的資料版本 (之前寫好的)
    const encoded: Record<string, string> = {
      "u": "Z2luZ2VybWFuNTMwQGdtYWlsLmNvbQ==", "p": "MDkzMzM2NTUwNQ==",
      "su": "YnJpYW41MzAxMy5uZXdAZ21haWwuY29t", "sp": "YnJpYW4uYmliaWxhYnU=",
      "zid": "NTg0NDIyMTcw", "hu": "aW5lbGVkdUBnbWFpbC5jb20=", "hp": "QnJpYW41MzBAQA==",
      "did": "ODQwIDU4OTkgOTg1OA==", "omid": "d2pnatF0cGlpZng=",
      "dpu": "K1UpIDEgMzE3LTk2MS0wNjk4", "dpin": "MzI0IDA0OSAzODUj"
    };
    return atob(encoded[_0x5] || "");
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <header className="mb-12 border-b pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-bold text-foreground tracking-tight">個人系統</h1>
          <p className="text-muted-foreground text-lg">歡迎回來，Brian。管理您的課程連結與登入帳密。</p>
        </div>
        {!isUnlocked ? (
          <Button onClick={() => setShowPrompt(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-8 rounded-xl shadow-lg transition-all active:scale-95">
            <Lock className="w-5 h-5 mr-2" /> 解鎖資料
          </Button>
        ) : (
          <Button variant="outline" onClick={() => setIsUnlocked(false)} className="text-zinc-500 border-zinc-200 dark:border-zinc-800 h-12 px-8 rounded-xl font-bold">
            <Eye className="w-5 h-5 mr-2" /> 重新鎖定
          </Button>
        )}
      </header>

      {/* 驗證視窗 */}
      {showPrompt && !isUnlocked && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <Card className="max-w-sm w-full bg-white dark:bg-zinc-950 border rounded-3xl p-10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">身份驗證</h3>
            <form onSubmit={handleUnlock} className="space-y-6">
              <Input
                type="password"
                placeholder="請輸入密碼"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className={`h-14 text-center text-2xl bg-slate-50 dark:bg-zinc-900 border-slate-200 text-foreground rounded-xl ${passError ? "border-red-500" : ""}`}
                autoFocus
              />
              <div className="flex gap-4">
                <Button type="button" variant="ghost" className="flex-1 h-12" onClick={() => setShowPrompt(false)}>取消</Button>
                <Button type="submit" className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl">確認</Button>
              </div>
            </form>
          </Card>
        </div>
      )}

      {/* 1. 即時視訊教室 */}
      <div className="mb-16">
        <h2 className="text-2xl font-black mb-8 flex items-center gap-3 border-l-4 border-orange-500 pl-4 uppercase tracking-wider">即時視訊教室</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
          {/* 歷史 Zoom */}
          <Card className="border-orange-100 dark:border-orange-900/30 bg-orange-50/20 dark:bg-orange-950/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center gap-2 font-bold text-orange-600">
                <History className="w-6 h-6" /> 歷史專題課程
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl" asChild>
                <a href="https://us06web.zoom.us/j/5844221701?pwd=7fz5sBze027txb5MxbFYpC5g8cnN9a.1" target="_blank" rel="noopener noreferrer">進入 Zoom 會議</a>
              </Button>
              {isUnlocked && (
                <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border text-center font-mono font-black text-2xl text-orange-600">{_0xce("zid")}</div>
              )}
            </CardContent>
          </Card>

          {/* 辯論私教 */}
          <Card className="border-violet-100 dark:border-violet-900/30 bg-violet-50/20 dark:bg-violet-950/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center gap-2 font-bold text-violet-600">
                <MessageSquare className="w-6 h-6" /> 辯論私教課程
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl" asChild>
                <a href="https://meet.google.com/wae-iqur-pqz" target="_blank" rel="noopener noreferrer">進入教室</a>
              </Button>
              {isUnlocked && (
                <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border font-mono text-sm">
                  <div className="text-zinc-500">Dial: {_0xce("dpu")}</div>
                  <div className="text-2xl font-black text-violet-600">PIN: {_0xce("dpin")}</div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 辯論 NGF */}
          <Card>
            <CardHeader className="pb-3"><CardTitle className="text-xl flex items-center gap-2 font-bold"><Globe className="w-6 h-6 text-indigo-500" /> 辯論專題 (NGF)</CardTitle></CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full font-bold" asChild>
                <a href="https://us06web.zoom.us/j/84058999858?pwd=KdtAd1z6bbROvcrFybThyu3ijODiDW.1" target="_blank" rel="noopener noreferrer">進入 ZOOM 會議</a>
              </Button>
            </CardContent>
          </Card>

          {/* 珠心算 */}
          <Card>
            <CardHeader className="pb-3"><CardTitle className="text-xl flex items-center gap-2 font-bold"><Binary className="w-6 h-6 text-emerald-500" /> 珠心算課程</CardTitle></CardHeader>
            <CardContent>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl" asChild>
                <a href="https://meet.google.com/znu-vmds-fxi" target="_blank" rel="noopener noreferrer">進入 Google Meet</a>
              </Button>
            </CardContent>
          </Card>

          {/* 奧數精英 */}
          <Card className="border-red-100 dark:border-red-900/30 bg-red-50/20 dark:bg-red-950/10">
            <CardHeader className="pb-3"><CardTitle className="text-xl flex items-center gap-2 font-bold text-red-600"><Sigma className="w-6 h-6" /> 奧數精英課</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl" asChild>
                <a href="https://meet.google.com/wjn-atpi-ifx" target="_blank" rel="noopener noreferrer">進入視訊教室</a>
              </Button>
              {isUnlocked && <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl border text-center font-mono font-black text-xl text-red-600">{_0xce("omid")}</div>}
            </CardContent>
          </Card>

          {/* 慶元數學 */}
          <Card>
            <CardHeader className="pb-3"><CardTitle className="text-xl flex items-center gap-2 font-bold"><Calculator className="w-6 h-6 text-blue-500" /> 慶元數學課程</CardTitle></CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full border-blue-200 text-blue-600 font-bold" asChild>
                <a href="https://meet.google.com/ddr-hdrt-eru" target="_blank" rel="noopener noreferrer">進入教室</a>
              </Button>
            </CardContent>
          </Card>

          {/* 英文理化 */}
          <Card>
            <CardHeader className="pb-3"><CardTitle className="text-xl flex items-center gap-2 font-bold"><Microscope className="w-6 h-6 text-teal-500" /> 英文理化專題</CardTitle></CardHeader>
            <CardContent>
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl" asChild>
                <a href="https://meet.google.com/fzm-ecmz-api" target="_blank" rel="noopener noreferrer">開啟視訊連結</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 2. 學習平台 */}
      <div className="mb-16">
        <h2 className="text-2xl font-black mb-8 flex items-center gap-3 border-l-4 border-blue-500 pl-4 uppercase tracking-wider text-blue-600">核心學習平台</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Funday */}
          <Card className="border-blue-100 dark:border-blue-900/30">
            <CardHeader className="pb-3"><CardTitle className="text-xl flex items-center gap-2 font-bold text-blue-600"><GraduationCap className="w-6 h-6" /> Funday 英語</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl" asChild>
                <a href="https://funday.asia/" target="_blank" rel="noopener noreferrer">前往平台</a>
              </Button>
              {isUnlocked && (
                <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border font-mono text-sm space-y-1">
                  <div className="text-zinc-500">Email address: {_0xce("u")}</div>
                  <div className="text-xl font-bold text-blue-600">{_0xce("p")}</div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* SOP 會員 */}
          <Card className="border-rose-100 dark:border-rose-900/30">
            <CardHeader className="pb-3"><CardTitle className="text-xl flex items-center gap-2 font-bold text-rose-600"><ShieldCheck className="w-6 h-6" /> SOP 會員系統</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl" asChild>
                <a href="https://members.sop.org/" target="_blank" rel="noopener noreferrer">進入系統</a>
              </Button>
              {isUnlocked && (
                <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border font-mono text-sm space-y-1">
                  <div className="text-zinc-500">Email address: {_0xce("su")}</div>
                  <div className="text-xl font-bold text-rose-600">{_0xce("sp")}</div>
                  <div className="text-[10px] text-zinc-400 italic">※ 若錯誤首字大寫</div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Henry Club */}
          <Card className="border-purple-100 dark:border-purple-900/30">
            <CardHeader className="pb-3"><CardTitle className="text-xl flex items-center gap-2 font-bold text-purple-600"><BookOpen className="w-6 h-6" /> Henry 讀書會</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl" asChild>
                <a href="https://course.henrypedia.com/login" target="_blank" rel="noopener noreferrer">前往登入</a>
              </Button>
              {isUnlocked && (
                <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border font-mono text-sm space-y-1">
                  <div className="text-zinc-500">Email address: {_0xce("hu")}</div>
                  <div className="text-xl font-bold text-purple-600">{_0xce("hp")}</div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 3. 輔助資源 */}
      <div className="mb-16">
        <h2 className="text-2xl font-black mb-8 flex items-center gap-3 border-l-4 border-emerald-500 pl-4 uppercase tracking-wider text-emerald-600">輔助與官網資源</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
          {/* SOP 官網 */}
          <Card><CardHeader className="pb-3"><CardTitle className="text-xl flex items-center gap-2 font-bold"><Layout className="w-6 h-6 text-rose-500" /> SOP 官方網站</CardTitle></CardHeader><CardContent><Button variant="ghost" className="w-full border font-bold" asChild><a href="https://www.sop.org/" target="_blank" rel="noopener noreferrer">開啟官網 <ExternalLink className="ml-2 w-4 h-4" /></a></Button></CardContent></Card>

          {/* 歷史雲端 */}
          <Card><CardHeader className="pb-3"><CardTitle className="text-xl flex items-center gap-2 font-bold"><Cloud className="w-6 h-6 text-emerald-500" /> 教材雲端庫</CardTitle></CardHeader>
            <CardContent>
              {isUnlocked ? (
                <Button variant="outline" className="w-full border-emerald-200 text-emerald-600 font-bold" asChild><a href="https://drive.google.com/drive/folders/1D3GTOwFTenNT1I1v-5SPNu3lD597mRsr" target="_blank" rel="noopener noreferrer">進入 Google Drive</a></Button>
              ) : <div className="p-3 border border-dashed rounded-xl text-center text-zinc-400 italic">Security Locked</div>}
            </CardContent>
          </Card>

          {/* Hour of AI */}
          <Card><CardHeader className="pb-3"><CardTitle className="text-xl flex items-center gap-2 font-bold"><Brain className="w-6 h-6 text-cyan-500" /> Hour of AI</CardTitle></CardHeader><CardContent><Button variant="ghost" className="w-full border font-bold" asChild><a href="https://code.org/en-US/hour-of-ai" target="_blank" rel="noopener noreferrer">前往資源</a></Button></CardContent></Card>

          {/* Kyros AI */}
          <Card><CardHeader className="pb-3"><CardTitle className="text-xl flex items-center gap-2 font-bold"><Sparkles className="w-6 h-6 text-cyan-500" /> Kyros AI Program</CardTitle></CardHeader><CardContent><Button variant="ghost" className="w-full border font-bold" asChild><a href="https://www.kyros.ai/special-program-detail/22130" target="_blank" rel="noopener noreferrer">查看計畫</a></Button></CardContent></Card>

          {/* EDX */}
          <Card><CardHeader className="pb-3"><CardTitle className="text-xl flex items-center gap-2 font-bold"><Globe className="w-6 h-6 text-red-600" /> EDX 全球課堂</CardTitle></CardHeader><CardContent><Button variant="outline" className="w-full border-red-100 text-red-600 font-bold" asChild><a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer">進入網站</a></Button></CardContent></Card>

        </div>
      </div>

      <footer className="mt-20 py-10 border-t text-center">
        <Button variant="ghost" onClick={() => { sessionStorage.removeItem('personal_access'); router.push('/'); }} className="text-muted-foreground hover:text-red-500 font-bold tracking-widest uppercase">Logout Terminal</Button>
      </footer>
    </div>
  );
}
