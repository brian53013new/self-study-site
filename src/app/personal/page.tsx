'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ExternalLink, Lock, GraduationCap, ShieldCheck, Video, Cloud, Info, History, BookOpen, Brain, Globe, MessageSquare, Microscope, Languages, Calculator, Sigma, Phone, Binary, Music } from 'lucide-react';

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
        <p className="text-muted-foreground font-bold text-xl">正在驗證權限...</p>
      </div>
    );
  }

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    // 密碼判斷：brian (ASCII 混淆)
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
      "u": "Z2luZ2VybWFuNTMwQGdtYWlsLmNvbQ==", // Funday User
      "p": "MDkzMzM2NTUwNQ==", // Funday Pass
      "su": "YnJpYW41MzAxMy5uZXdAZ21haWwuY29t", // SOP User
      "sp": "YnJpYW4uYmliaWxhYnU=", // SOP Pass
      "zid": "NTg0NDIyMTcw", // History Zoom
      "hu": "aW5lbGVkdUBnbWFpbC5jb20=", // Henry User
      "hp": "QnJpYW41MzBAQA==", // Henry Pass
      "did": "ODQwIDU4OTkgOTg1OA==", // Debate NGF Zoom
      "omid": "d2pnatF0cGlpZng=", // Olympiad Math Code
      "dpu": "K1UpIDEgMzE3LTk2MS0wNjk4", // Private Debate Dial
      "dpin": "MzI0IDA0OSAzODUj" // Private Debate PIN
    };
    return atob(data[_0x5] || "");
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <div className="container mx-auto px-4 py-16">
        <header className="mb-20 border-b border-border/50 pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h1 className="text-6xl font-black mb-4 tracking-tighter bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent">
              個人管理系統
            </h1>
            <p className="text-muted-foreground text-2xl font-medium">歡迎回來，Brian。您的專屬資源已安全加密。</p>
          </div>
          {!isUnlocked ? (
            <Button onClick={() => setShowPrompt(true)} className="bg-blue-600 hover:bg-blue-700 shadow-2xl px-12 py-8 text-2xl rounded-[2rem] transition-all hover:scale-105 active:scale-95 text-white font-black">
              <ShieldCheck className="w-8 h-8 mr-3" /> 解鎖機密資訊
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setIsUnlocked(false)} className="text-red-500 border-red-500/30 hover:bg-red-500/10 py-8 px-12 rounded-[2rem] text-xl font-black">
              <Lock className="w-8 h-8 mr-3" /> 重新鎖定全部
            </Button>
          )}
        </header>

        {/* 驗證視窗 (修正深色模式不可見問題) */}
        {showPrompt && !isUnlocked && (
          <div className="fixed inset-0 bg-zinc-950/90 backdrop-blur-2xl z-[100] flex items-center justify-center p-4">
            <Card className="max-w-md w-full shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] border-white/5 rounded-[3rem] overflow-hidden bg-zinc-900">
              <CardHeader className="bg-white/5 pb-12 pt-12 border-b border-white/5">
                <CardTitle className="text-center text-4xl font-black tracking-tight text-white">身份驗證</CardTitle>
              </CardHeader>
              <CardContent className="pt-16 pb-16 px-10">
                <form onSubmit={handleUnlock} className="space-y-10">
                  <div className="space-y-4">
                    <Input
                      type="password"
                      placeholder="••••••"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      className={`h-20 text-4xl text-center rounded-[1.5rem] bg-black/40 border-white/10 focus:border-blue-600 focus:ring-0 text-white placeholder:text-zinc-800 ${passError ? "border-red-500 animate-shake" : ""}`}
                      autoFocus
                    />
                    {passError && <p className="text-red-500 text-center font-bold">密碼錯誤，請重新輸入</p>}
                  </div>
                  <div className="flex gap-4">
                    <Button type="button" variant="ghost" className="flex-1 h-16 rounded-2xl text-xl text-zinc-400 hover:text-white" onClick={() => setShowPrompt(false)}>取消</Button>
                    <Button type="submit" className="flex-1 h-16 bg-blue-600 hover:bg-blue-700 rounded-2xl text-xl font-black text-white shadow-xl shadow-blue-600/20">驗證</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="grid gap-12 md:grid-cols-2">
          {/* 1. 歷史專題 (整合雲端) */}
          <Card className="overflow-hidden border-none shadow-2xl bg-zinc-950 md:col-span-2 rounded-[3rem]">
            <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-400 w-full" />
            <div className="p-12">
              <div className="flex items-center gap-6 mb-10">
                <div className="p-6 bg-orange-500/10 rounded-[2rem] border border-orange-500/20"><History className="w-16 h-16 text-orange-500" /></div>
                <div>
                  <h2 className="text-5xl font-black tracking-tighter text-white">歷史專題課程</h2>
                  <p className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mt-1">History Program</p>
                </div>
              </div>
              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-zinc-200">線上教室與資源</h3>
                  <a href="https://us06web.zoom.us/j/5844221701?pwd=7fz5sBze027txb5MxbFYpC5g8cnN9a.1" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center justify-center gap-4 w-full py-7 bg-orange-600 text-white rounded-[1.5rem] hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/20 text-3xl font-black">
                    進入 Zoom <ExternalLink className="w-8 h-8" />
                  </a>
                  <div className="bg-zinc-900 p-8 rounded-[2rem] border border-white/5">
                    {isUnlocked ? (
                      <div className="space-y-6">
                        <div>
                          <span className="text-xs text-orange-500/60 uppercase font-black tracking-widest block mb-2">Meeting ID</span>
                          <span className="text-4xl font-black text-orange-500 font-mono tracking-tighter">{_0xce("zid")}</span>
                        </div>
                        <div className="h-px bg-white/5" />
                        <a href="https://drive.google.com/drive/folders/1D3GTOwFTenNT1I1v-5SPNu3lD597mRsr" target="_blank" rel="noopener noreferrer"
                           className="text-emerald-500 font-black hover:underline flex items-center gap-3 text-2xl">
                          <Cloud className="w-8 h-8" /> 歷史課雲端教材
                        </a>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center py-8 text-zinc-600"><Lock className="w-10 h-10 mb-4 opacity-20" /> 資源已安全加密</div>
                    )}
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-10 rounded-[2rem] border border-white/5 flex flex-col justify-center">
                  <h4 className="text-orange-500 font-black text-2xl mb-6 flex items-center gap-3"><Info className="w-8 h-8" /> 課程備註</h4>
                  <ul className="space-y-4 text-zinc-400 text-xl leading-relaxed">
                    <li className="flex gap-3"><span>•</span> 雲端教材包含講義與課堂錄影。</li>
                    <li className="flex gap-3"><span>•</span> 解鎖後可直接開啟 Google Drive。</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* 2. 辯論私教 */}
          <Card className="overflow-hidden border-none shadow-2xl bg-zinc-950 rounded-[3rem]">
            <div className="h-2 bg-violet-600 w-full" />
            <div className="p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-5 bg-violet-500/10 rounded-[1.5rem] border border-violet-500/20"><MessageSquare className="w-12 h-12 text-violet-500" /></div>
                <h2 className="text-3xl font-black text-white">辯論私教課程</h2>
              </div>
              <a href="https://meet.google.com/wae-iqur-pqz" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center justify-center gap-3 w-full py-6 bg-violet-600 text-white rounded-2xl hover:bg-violet-700 transition-all text-2xl font-black mb-6">
                進入 Meet <ExternalLink className="w-6 h-6" />
              </a>
              <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5">
                {isUnlocked ? (
                  <div className="space-y-4 font-mono">
                    <div className="text-white text-lg">Dial: <span className="font-bold">{_0xce("dpu")}</span></div>
                    <div className="text-violet-500 text-2xl font-black">PIN: {_0xce("dpin")}</div>
                  </div>
                ) : (
                  <div className="text-center text-zinc-600 py-4 italic">解鎖查看撥號資訊</div>
                )}
              </div>
            </div>
          </Card>

          {/* 3. 珠心算課程 */}
          <Card className="overflow-hidden border-none shadow-2xl bg-zinc-950 rounded-[3rem]">
            <div className="h-2 bg-emerald-500 w-full" />
            <div className="p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-5 bg-emerald-500/10 rounded-[1.5rem] border border-emerald-500/20"><Binary className="w-12 h-12 text-emerald-500" /></div>
                <h2 className="text-3xl font-black text-white">珠心算課程</h2>
              </div>
              <a href="https://meet.google.com/znu-vmds-fxi" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center justify-center gap-3 w-full py-6 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700 transition-all text-2xl font-black">
                進入 Meet <ExternalLink className="w-6 h-6" />
              </a>
              <p className="text-zinc-500 mt-6 italic text-center">請準備好算盤同步練習。</p>
            </div>
          </Card>

          {/* 4. 奧數 / 慶元數學 (二合一) */}
          <Card className="overflow-hidden border-none shadow-2xl bg-zinc-950 md:col-span-2 rounded-[3rem]">
            <div className="h-2 bg-blue-600 w-full" />
            <div className="p-10 grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Sigma className="w-10 h-10 text-red-500" />
                  <h2 className="text-3xl font-black text-white">奧數精英</h2>
                </div>
                <a href="https://meet.google.com/wjn-atpi-ifx" target="_blank" rel="noopener noreferrer" className="block w-full py-5 bg-red-600 text-white rounded-2xl text-center font-black text-xl hover:bg-red-700">奧數 Meet</a>
                <div className="p-4 bg-zinc-900 rounded-xl border border-white/5 text-center text-red-500 font-mono font-black">{isUnlocked ? _0xce("omid") : "Code Locked"}</div>
              </div>
              <div className="space-y-6 border-l border-white/5 pl-10">
                <div className="flex items-center gap-4">
                  <Calculator className="w-10 h-10 text-blue-500" />
                  <h2 className="text-3xl font-black text-white">慶元數學</h2>
                </div>
                <a href="https://meet.google.com/ddr-hdrt-eru" target="_blank" rel="noopener noreferrer" className="block w-full py-5 bg-blue-600 text-white rounded-2xl text-center font-black text-xl hover:bg-blue-700">慶元 Meet</a>
                <p className="text-zinc-500 text-center italic mt-4">固定上課連結如上。</p>
              </div>
            </div>
          </Card>

          {/* 5. 英文理化 */}
          <Card className="overflow-hidden border-none shadow-2xl bg-zinc-950 rounded-[3rem]">
            <div className="h-2 bg-teal-500 w-full" />
            <div className="p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-5 bg-teal-500/10 rounded-[1.5rem] border border-teal-500/20"><Microscope className="w-12 h-12 text-teal-500" /></div>
                <h2 className="text-3xl font-black text-white">英文理化</h2>
              </div>
              <a href="https://meet.google.com/fzm-ecmz-api" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center justify-center gap-3 w-full py-6 bg-teal-600 text-white rounded-2xl hover:bg-teal-700 transition-all text-2xl font-black">
                進入 Meet <ExternalLink className="w-6 h-6" />
              </a>
            </div>
          </Card>

          {/* 6. Henry 讀書會 */}
          <Card className="overflow-hidden border-none shadow-2xl bg-zinc-950 rounded-[3rem]">
            <div className="h-2 bg-purple-600 w-full" />
            <div className="p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-5 bg-purple-500/10 rounded-[1.5rem] border border-purple-500/20"><BookOpen className="w-12 h-12 text-purple-500" /></div>
                <h2 className="text-3xl font-black text-white">Henry 讀書會</h2>
              </div>
              <a href="https://course.henrypedia.com/login" target="_blank" rel="noopener noreferrer" className="block w-full py-4 bg-purple-600 text-white rounded-xl text-center font-black text-lg mb-6">前往登入</a>
              <div className="bg-zinc-900 p-6 rounded-2xl space-y-2 font-mono">
                {isUnlocked ? (
                  <>
                    <div className="text-zinc-400 text-xs">ID: {_0xce("hu")}</div>
                    <div className="text-white font-bold">PW: {_0xce("hp")}</div>
                  </>
                ) : <div className="text-center text-zinc-700 italic">Login Encrypted</div>}
              </div>
            </div>
          </Card>

          {/* 7. AI 學習與探索 (修復消失問題) */}
          <Card className="overflow-hidden border-none shadow-2xl bg-zinc-950 rounded-[3rem]">
            <div className="h-2 bg-cyan-500 w-full" />
            <div className="p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-5 bg-cyan-500/10 rounded-[1.5rem] border border-cyan-500/20"><Brain className="w-12 h-12 text-cyan-500" /></div>
                <h2 className="text-3xl font-black text-white">AI 學習資源</h2>
              </div>
              <div className="space-y-4">
                <a href="https://code.org/en-US/hour-of-ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 bg-zinc-900 rounded-2xl text-cyan-400 font-black hover:bg-zinc-800 transition-colors">Hour of AI <ExternalLink className="w-5 h-5" /></a>
                <a href="https://www.kyros.ai/special-program-detail/22130" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 bg-zinc-900 rounded-2xl text-cyan-400 font-black hover:bg-zinc-800 transition-colors">Kyros AI <ExternalLink className="w-5 h-5" /></a>
              </div>
            </div>
          </Card>

          {/* 8. 讚美之泉 (特別補回) */}
          <Card className="overflow-hidden border-none shadow-2xl bg-zinc-950 rounded-[3rem]">
            <div className="h-2 bg-rose-500 w-full" />
            <div className="p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-5 bg-rose-500/10 rounded-[1.5rem] border border-rose-500/20"><Music className="w-12 h-12 text-rose-500" /></div>
                <h2 className="text-3xl font-black text-white">讚美之泉</h2>
              </div>
              <a href="https://www.sop.org/" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center justify-center gap-3 w-full py-6 bg-rose-600 text-white rounded-2xl hover:bg-rose-700 transition-all text-2xl font-black">
                開啟官網 <ExternalLink className="w-6 h-6" />
              </a>
              <p className="text-zinc-500 mt-6 text-center italic">Stream of Praise Music Ministries</p>
            </div>
          </Card>

          {/* 9. Funday / SOP (底部資料) */}
          <Card className="overflow-hidden border-none shadow-2xl bg-zinc-950 md:col-span-2 rounded-[3rem]">
            <div className="h-2 bg-zinc-700 w-full" />
            <div className="p-10 grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-white flex items-center gap-3"><GraduationCap className="text-blue-500" /> Funday</h3>
                <div className="bg-zinc-900 p-6 rounded-2xl">
                  {isUnlocked ? (
                    <div className="font-mono text-sm space-y-2">
                      <div className="text-zinc-400">ID: {_0xce("u")}</div>
                      <div className="text-white font-bold">PW: {_0xce("p")}</div>
                    </div>
                  ) : <div className="text-zinc-700 italic">Credentials Hidden</div>}
                </div>
              </div>
              <div className="space-y-4 border-l border-white/5 pl-10">
                <h3 className="text-2xl font-black text-white flex items-center gap-3"><ShieldCheck className="text-slate-400" /> SOP Members</h3>
                <div className="bg-zinc-900 p-6 rounded-2xl">
                  {isUnlocked ? (
                    <div className="font-mono text-sm space-y-2">
                      <div className="text-zinc-400">ID: {_0xce("su")}</div>
                      <div className="text-white font-bold">PW: {_0xce("sp")} (首字大寫)</div>
                    </div>
                  ) : <div className="text-zinc-700 italic">Credentials Hidden</div>}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-32 flex flex-col items-center gap-8">
          <Button variant="ghost" onClick={() => {
            sessionStorage.removeItem('personal_access');
            router.push('/');
          }} className="text-zinc-600 hover:text-red-500 text-2xl font-black transition-all">
            退出系統
          </Button>
          <p className="text-[12px] text-zinc-800 uppercase tracking-[0.5em] font-black">Secure Learning System v4.0 Ultimate</p>
        </div>
      </div>
    </div>
  );
}
