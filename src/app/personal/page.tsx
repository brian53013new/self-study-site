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
    return <div className="min-h-screen bg-background" />;
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
      "u": "Z2luZ2VybWFuNTMwQGdtYWlsLmNvbQ==", "p": "MDkzMzM2NTUwNQ==",
      "su": "YnJpYW41MzAxMy5uZXdAZ21haWwuY29t", "sp": "YnJpYW4uYmliaWxhYnU=",
      "zid": "NTg0NDIyMTcw", "hu": "aW5lbGVkdUBnbWFpbC5jb20=", "hp": "QnJpYW41MzBAQA==",
      "did": "ODQwIDU4OTkgOTg1OA==", "omid": "d2pnatF0cGlpZng=",
      "dpu": "K1UpIDEgMzE3LTk2MS0wNjk4", "dpin": "MzI0IDA0OSAzODUj",
      "ndid": "ODQwIDU4OTkgOTg1OA=="
    };
    return atob(data[_0x5] || "");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">個人系統</h1>
          <p className="text-muted-foreground mt-1">歡迎回來，Brian。這裡存放你的私人資源。</p>
        </div>
        {!isUnlocked ? (
          <Button onClick={() => setShowPrompt(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-10 px-6 rounded-lg">
            <Lock className="w-4 h-4 mr-2" /> 解鎖資料
          </Button>
        ) : (
          <Button variant="outline" onClick={() => setIsUnlocked(false)} className="text-muted-foreground h-10 px-6 rounded-lg">
            <Eye className="w-4 h-4 mr-2" /> 重新鎖定
          </Button>
        )}
      </header>

      {/* 驗證視窗 */}
      {showPrompt && !isUnlocked && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <Card className="max-w-sm w-full p-6 shadow-2xl border bg-card rounded-2xl">
            <h3 className="text-xl font-bold mb-6 text-center">身份驗證</h3>
            <form onSubmit={handleUnlock} className="space-y-4">
              <Input
                type="password"
                placeholder="請輸入密碼"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className={`h-12 text-center text-lg rounded-xl dark:bg-zinc-900 ${passError ? "border-red-500" : ""}`}
                autoFocus
              />
              <div className="flex gap-2">
                <Button type="button" variant="ghost" className="flex-1" onClick={() => setShowPrompt(false)}>取消</Button>
                <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold">確認</Button>
              </div>
            </form>
          </Card>
        </div>
      )}

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
        {/* 1. SOP 會員系統 */}
        <Card className="border-rose-100 dark:border-rose-900/30 bg-rose-50/30 dark:bg-rose-950/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-rose-500" /> SOP 會員系統
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-between" asChild>
                <a href="https://members.sop.org/" target="_blank" rel="noopener noreferrer">進入系統 <ExternalLink className="w-4 h-4" /></a>
              </Button>
              {isUnlocked ? (
                <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg border text-sm font-mono space-y-1">
                  <div className="text-zinc-500">Email: {_0xce("su")}</div>
                  <div className="font-bold text-rose-600">PW: {_0xce("sp")}</div>
                  <div className="text-[10px] text-zinc-400 italic">※ 若錯誤首字大寫</div>
                </div>
              ) : <p className="text-xs text-zinc-400 text-center italic py-2">帳密已加密保護</p>}
            </div>
          </CardContent>
        </Card>

        {/* 2. 歷史 Zoom */}
        <Card className="border-orange-100 dark:border-orange-900/30 bg-orange-50/30 dark:bg-orange-950/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <History className="w-5 h-5 text-orange-500" /> 歷史專題課程
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white" asChild>
                <a href="https://us06web.zoom.us/j/5844221701?pwd=7fz5sBze027txb5MxbFYpC5g8cnN9a.1" target="_blank" rel="noopener noreferrer">進入會議</a>
              </Button>
              {isUnlocked && (
                <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg border text-center font-mono font-bold text-orange-600">
                  ID: {_0xce("zid")}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* 3. 歷史雲端 */}
        <Card className="border-emerald-100 dark:border-emerald-900/30 bg-emerald-50/30 dark:bg-emerald-950/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Cloud className="w-5 h-5 text-emerald-500" /> 歷史課教材
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground mb-4">包含所有講義與課程錄影。</p>
            {isUnlocked ? (
              <Button variant="outline" className="w-full border-emerald-200 text-emerald-600" asChild>
                <a href="https://drive.google.com/drive/folders/1D3GTOwFTenNT1I1v-5SPNu3lD597mRsr" target="_blank" rel="noopener noreferrer">開啟雲端硬碟</a>
              </Button>
            ) : <p className="text-center text-zinc-400 text-xs py-2 italic border border-dashed rounded-lg">資源已鎖定</p>}
          </CardContent>
        </Card>

        {/* 4. 辯論私教 */}
        <Card className="border-violet-100 dark:border-violet-900/30 bg-violet-50/30 dark:bg-violet-950/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-violet-500" /> 辯論私教
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white" asChild>
              <a href="https://meet.google.com/wae-iqur-pqz" target="_blank" rel="noopener noreferrer">進入 Google Meet</a>
            </Button>
            {isUnlocked && (
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg border text-xs font-mono">
                <div>Dial: {_0xce("dpu")}</div>
                <div className="font-bold text-violet-600">PIN: {_0xce("dpin")}</div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 5. 辯論 NGF */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Globe className="w-5 h-5 text-indigo-500" /> 辯論專題 (NGF)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full" asChild>
              <a href="https://us06web.zoom.us/j/84058999858?pwd=KdtAd1z6bbROvcrFybThyu3ijODiDW.1" target="_blank" rel="noopener noreferrer">進入會議室</a>
            </Button>
            {isUnlocked && (
              <div className="text-center font-mono font-bold text-indigo-500">ID: {_0xce("ndid")}</div>
            )}
          </CardContent>
        </Card>

        {/* 6. 珠心算 */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Binary className="w-5 h-5 text-emerald-500" /> 珠心算課程
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
              <a href="https://meet.google.com/znu-vmds-fxi" target="_blank" rel="noopener noreferrer">進入 Meet</a>
            </Button>
            <p className="text-[10px] text-center text-zinc-500 mt-3">※ 請準備好算盤</p>
          </CardContent>
        </Card>

        {/* 7. 奧數精英 */}
        <Card className="border-red-100 dark:border-red-900/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Sigma className="w-5 h-5 text-red-500" /> 奧數數學精英課
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
              <a href="https://meet.google.com/wjn-atpi-ifx" target="_blank" rel="noopener noreferrer">進入會議室</a>
            </Button>
            {isUnlocked && (
              <div className="p-2 bg-red-50 dark:bg-red-950/20 text-center font-mono font-bold text-red-600 rounded">Code: {_0xce("omid")}</div>
            )}
          </CardContent>
        </Card>

        {/* 8. 慶元數學 */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Calculator className="w-5 h-5 text-blue-500" /> 慶元數學課程
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-blue-200 text-blue-600" asChild>
              <a href="https://meet.google.com/ddr-hdrt-eru" target="_blank" rel="noopener noreferrer">進入 Google Meet</a>
            </Button>
          </CardContent>
        </Card>

        {/* 9. 英文理化 */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Microscope className="w-5 h-5 text-teal-500" /> 英文理化專題
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white" asChild>
              <a href="https://meet.google.com/fzm-ecmz-api" target="_blank" rel="noopener noreferrer">開啟 Meet 連結</a>
            </Button>
          </CardContent>
        </Card>

        {/* 10. Henry 讀書會 */}
        <Card className="border-purple-100 dark:border-purple-900/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-500" /> Henry 讀書會
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full" asChild>
              <a href="https://course.henrypedia.com/login" target="_blank" rel="noopener noreferrer">前往登入頁面</a>
            </Button>
            {isUnlocked && (
              <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg text-xs font-mono space-y-1">
                <div className="text-zinc-500">ID: {_0xce("hu")}</div>
                <div className="font-bold text-purple-600">PW: {_0xce("hp")}</div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 11. AI Hour of AI */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Brain className="w-5 h-5 text-cyan-500" /> Hour of AI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" className="w-full justify-between border" asChild>
              <a href="https://code.org/en-US/hour-of-ai" target="_blank" rel="noopener noreferrer">開啟資源 <ExternalLink className="w-4 h-4" /></a>
            </Button>
          </CardContent>
        </Card>

        {/* 12. AI Kyros */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-500" /> Kyros AI Program
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" className="w-full justify-between border" asChild>
              <a href="https://www.kyros.ai/special-program-detail/22130" target="_blank" rel="noopener noreferrer">開啟連結 <ExternalLink className="w-4 h-4" /></a>
            </Button>
          </CardContent>
        </Card>

        {/* 13. EDX Global */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Globe className="w-5 h-5 text-red-600" /> EDX 全球課堂
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-red-100 text-red-600" asChild>
              <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer">開啟官網</a>
            </Button>
          </CardContent>
        </Card>

        {/* 14. Funday 英語 */}
        <Card className="border-blue-100 dark:border-blue-900/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-500" /> Funday 英語
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href="https://funday.asia/" target="_blank" rel="noopener noreferrer">前往平台</a>
            </Button>
            {isUnlocked && (
              <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg text-xs font-mono space-y-1">
                <div className="text-zinc-500">ID: {_0xce("u")}</div>
                <div className="font-bold text-blue-600">PW: {_0xce("p")}</div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 15. SOP 官網 */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Layout className="w-5 h-5 text-rose-500" /> SOP 官方網站
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" className="w-full border" asChild>
              <a href="https://www.sop.org/" target="_blank" rel="noopener noreferrer">瀏覽官網</a>
            </Button>
          </CardContent>
        </Card>

      </div>

      <footer className="mt-20 py-10 border-t text-center">
        <Button 
          variant="ghost" 
          onClick={() => {
            sessionStorage.removeItem('personal_access');
            router.push('/');
          }} 
          className="text-muted-foreground hover:text-red-500"
        >
          登出個人系統
        </Button>
      </footer>
    </div>
  );
}
