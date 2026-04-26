'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ExternalLink, Lock, GraduationCap, ShieldCheck, Video, Cloud, Info, History, BookOpen, Brain, Globe, MessageSquare, Microscope, Languages, Calculator, Sigma, Phone, Binary, Music, Layout } from 'lucide-react';

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
      "omid": "d2pnatF0cGlpZng=",
      "dpu": "K1UpIDEgMzE3LTk2MS0wNjk4",
      "dpin": "MzI0IDA0OSAzODUj"
    };
    return atob(data[_0x5] || "");
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <div className="container mx-auto px-4 py-16">
        <header className="mb-20 border-b border-border/50 pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h1 className="text-6xl font-black mb-4 tracking-tighter bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent text-white">
              個人管理系統
            </h1>
            <p className="text-muted-foreground text-2xl font-medium">歡迎回來，Brian。</p>
          </div>
          {!isUnlocked ? (
            <Button onClick={() => setShowPrompt(true)} className="bg-blue-600 hover:bg-blue-700 shadow-2xl px-12 py-8 text-2xl rounded-[2rem] transition-all hover:scale-105 active:scale-95 text-white font-black">
              <ShieldCheck className="w-8 h-8 mr-3" /> 解鎖機密資訊
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setIsUnlocked(false)} className="text-red-500 border-red-500/30 hover:bg-red-500/10 py-8 px-12 rounded-[2rem] text-xl font-black">
              <Lock className="w-8 h-8 mr-3" /> 重新鎖定資訊
            </Button>
          )}
        </header>

        {showPrompt && !isUnlocked && (
          <div className="fixed inset-0 bg-zinc-950/90 backdrop-blur-2xl z-[100] flex items-center justify-center p-4">
            <Card className="max-w-md w-full shadow-2xl border-white/5 rounded-[3rem] overflow-hidden bg-zinc-900">
              <CardHeader className="bg-white/5 pb-12 pt-12 border-b border-white/5 text-center">
                <CardTitle className="text-4xl font-black tracking-tight text-white">身份驗證</CardTitle>
              </CardHeader>
              <CardContent className="pt-16 pb-16 px-10">
                <form onSubmit={handleUnlock} className="space-y-10">
                  <Input
                    type="password"
                    placeholder="Password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className={`h-20 text-4xl text-center rounded-[1.5rem] bg-black/40 border-white/10 focus:border-blue-600 focus:ring-0 text-white ${passError ? "border-red-500 animate-shake" : ""}`}
                    autoFocus
                  />
                  <div className="flex gap-4">
                    <Button type="button" variant="ghost" className="flex-1 h-16 rounded-2xl text-xl text-zinc-400" onClick={() => setShowPrompt(false)}>取消</Button>
                    <Button type="submit" className="flex-1 h-16 bg-blue-600 hover:bg-blue-700 rounded-2xl text-xl font-black text-white">驗證</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="grid gap-12 md:grid-cols-2">
          {/* 1. SOP (讚美之泉) - 整合版本 */}
          <Card className="overflow-hidden border-none shadow-2xl bg-zinc-950 md:col-span-2 rounded-[3rem]">
            <div className="h-2 bg-gradient-to-r from-rose-500 to-purple-600 w-full" />
            <div className="p-12">
              <div className="flex items-center gap-6 mb-10">
                <div className="p-6 bg-rose-500/10 rounded-[2rem] border border-rose-500/20">
                  <Music className="w-16 h-16 text-rose-500" />
                </div>
                <div>
                  <h2 className="text-5xl font-black tracking-tighter text-white">SOP 讚美之泉</h2>
                  <p className="text-rose-500 font-bold uppercase tracking-[0.2em] text-sm mt-1">Stream of Praise Music Ministries</p>
                </div>
              </div>
              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-zinc-200">快速訪問連結</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <a href="https://www.sop.org/" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center justify-between p-6 bg-zinc-900 rounded-2xl text-white font-black hover:bg-zinc-800 transition-all border border-white/5">
                      SOP 官方網站 <ExternalLink className="w-6 h-6 text-rose-500" />
                    </a>
                    <a href="https://members.sop.org/" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center justify-between p-6 bg-zinc-900 rounded-2xl text-white font-black hover:bg-zinc-800 transition-all border border-white/5">
                      會員系統入口 <Layout className="w-6 h-6 text-purple-500" />
                    </a>
                  </div>
                </div>
                <div className="bg-zinc-900 p-8 rounded-[2.5rem] border border-white/5 flex flex-col justify-center">
                  <h4 className="text-rose-500 font-black text-2xl mb-6 flex items-center gap-3"><ShieldCheck className="w-8 h-8" /> 會員登入資訊</h4>
                  {isUnlocked ? (
                    <div className="space-y-5 font-mono">
                      <div>
                        <span className="text-xs text-zinc-500 uppercase font-black block mb-1">Account Email</span>
                        <span className="text-2xl font-bold text-white">{_0xce("su")}</span>
                      </div>
                      <div className="h-px bg-white/5" />
                      <div>
                        <span className="text-xs text-zinc-500 uppercase font-black block mb-1">Password</span>
                        <div className="flex items-center gap-4">
                          <span className="text-3xl font-black text-rose-500 tracking-tighter">{_0xce("sp")}</span>
                          <span className="text-xs text-zinc-600 italic">(或首字大寫)</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center py-6 text-zinc-600"><Lock className="w-10 h-10 mb-4 opacity-20" /> 帳密已安全加密</div>
                  )}
                </div>
              </div>
            </div>
          </Card>

          {/* 2. 歷史專題 (整合雲端) */}
          <Card className="overflow-hidden border-none shadow-2xl bg-zinc-950 md:col-span-2 rounded-[3rem]">
            <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-400 w-full" />
            <div className="p-12">
              <div className="flex items-center gap-6 mb-10">
                <div className="p-6 bg-orange-500/10 rounded-[2rem] border border-orange-500/20"><History className="w-16 h-16 text-orange-500" /></div>
                <h2 className="text-5xl font-black tracking-tighter text-white">歷史專題課程</h2>
              </div>
              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-6">
                  <a href="https://us06web.zoom.us/j/5844221701?pwd=7fz5sBze027txb5MxbFYpC5g8cnN9a.1" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center justify-center gap-4 w-full py-8 bg-orange-600 text-white rounded-[2rem] hover:bg-orange-700 transition-all shadow-xl text-3xl font-black">
                    進入 Zoom <ExternalLink className="w-8 h-8" />
                  </a>
                  <div className="bg-zinc-900 p-8 rounded-[2rem] border border-white/5">
                    {isUnlocked ? (
                      <div className="space-y-6">
                        <div>
                          <span className="text-xs text-orange-500/60 uppercase font-black block mb-1">Meeting ID</span>
                          <span className="text-4xl font-black text-orange-500 font-mono tracking-tighter">{_0xce("zid")}</span>
                        </div>
                        <div className="h-px bg-white/5" />
                        <a href="https://drive.google.com/drive/folders/1D3GTOwFTenNT1I1v-5SPNu3lD597mRsr" target="_blank" rel="noopener noreferrer"
                           className="text-emerald-500 font-black flex items-center gap-3 text-2xl hover:underline">
                          <Cloud className="w-8 h-8" /> 歷史課雲端教材
                        </a>
                      </div>
                    ) : <div className="text-center text-zinc-700 italic">Resources Encrypted</div>}
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-10 rounded-[2rem] border border-white/5 flex flex-col justify-center">
                  <h4 className="text-orange-500 font-black text-2xl mb-4 flex items-center gap-3"><Info className="w-8 h-8" /> 課程備註</h4>
                  <p className="text-zinc-400 text-xl leading-relaxed">包含歷史課講義、參考文獻與課堂錄影。解鎖後可點擊左側連結開啟。</p>
                </div>
              </div>
            </div>
          </Card>

          {/* 3. 辯論私教 */}
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
              <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5 font-mono">
                {isUnlocked ? (
                  <div className="space-y-2">
                    <div className="text-zinc-400 text-xs">Dial-in: {_0xce("dpu")}</div>
                    <div className="text-violet-500 text-2xl font-black">PIN: {_0xce("dpin")}</div>
                  </div>
                ) : <div className="text-center text-zinc-700 italic py-2">Encrypted Info</div>}
              </div>
            </div>
          </Card>

          {/* 4. Funday 英語 */}
          <Card className="overflow-hidden border-none shadow-2xl bg-zinc-950 rounded-[3rem]">
            <div className="h-2 bg-blue-600 w-full" />
            <div className="p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-5 bg-blue-500/10 rounded-[1.5rem] border border-blue-500/20"><GraduationCap className="w-12 h-12 text-blue-500" /></div>
                <h2 className="text-3xl font-black text-white">Funday 英語</h2>
              </div>
              <a href="https://funday.asia/" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center justify-center gap-3 w-full py-6 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all text-2xl font-black mb-6">
                進入官網 <ExternalLink className="w-6 h-6" />
              </a>
              <div className="bg-zinc-900 p-6 rounded-2xl space-y-2 font-mono">
                {isUnlocked ? (
                  <>
                    <div className="text-zinc-400 text-xs">Account: {_0xce("u")}</div>
                    <div className="text-white font-bold">Password: {_0xce("p")}</div>
                  </>
                ) : <div className="text-center text-zinc-700 italic py-2">Credentials Hidden</div>}
              </div>
            </div>
          </Card>

          {/* 5. 奧數精英 / 慶元數學 */}
          <Card className="overflow-hidden border-none shadow-2xl bg-zinc-950 md:col-span-2 rounded-[3rem]">
            <div className="h-2 bg-blue-400 w-full" />
            <div className="p-10 grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white font-black text-2xl"><Sigma className="text-red-500" /> 奧數精英</div>
                <a href="https://meet.google.com/wjn-atpi-ifx" target="_blank" rel="noopener noreferrer" className="block w-full py-5 bg-red-600 text-white rounded-2xl text-center font-black text-xl">奧數 Meet</a>
                <div className="p-4 bg-zinc-900 rounded-xl text-center text-red-500 font-mono font-black">{isUnlocked ? _0xce("omid") : "Locked"}</div>
              </div>
              <div className="space-y-6 border-l border-white/5 pl-10">
                <div className="flex items-center gap-4 text-white font-black text-2xl"><Calculator className="text-blue-500" /> 慶元數學</div>
                <a href="https://meet.google.com/ddr-hdrt-eru" target="_blank" rel="noopener noreferrer" className="block w-full py-5 bg-blue-600 text-white rounded-2xl text-center font-black text-xl">慶元 Meet</a>
              </div>
            </div>
          </Card>

          {/* 6. AI 學習 & 探索 */}
          <Card className="overflow-hidden border-none shadow-2xl bg-zinc-950 rounded-[3rem]">
            <div className="h-2 bg-cyan-500 w-full" />
            <div className="p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-5 bg-cyan-500/10 rounded-[1.5rem] border border-cyan-500/20"><Brain className="w-12 h-12 text-cyan-500" /></div>
                <h2 className="text-3xl font-black text-white">AI 學習資源</h2>
              </div>
              <div className="space-y-3">
                <a href="https://code.org/en-US/hour-of-ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 bg-zinc-900 rounded-xl text-cyan-400 font-bold hover:bg-zinc-800 transition-colors">Hour of AI <ExternalLink className="w-4 h-4" /></a>
                <a href="https://www.kyros.ai/special-program-detail/22130" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 bg-zinc-900 rounded-xl text-cyan-400 font-bold hover:bg-zinc-800 transition-colors">Kyros AI <ExternalLink className="w-4 h-4" /></a>
              </div>
            </div>
          </Card>

          {/* 7. Henry / EDX */}
          <Card className="overflow-hidden border-none shadow-2xl bg-zinc-950 rounded-[3rem]">
            <div className="h-2 bg-purple-500 w-full" />
            <div className="p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-5 bg-purple-500/10 rounded-[1.5rem] border border-purple-500/20"><BookOpen className="w-12 h-12 text-purple-500" /></div>
                <h2 className="text-3xl font-black text-white">Henry / EDX</h2>
              </div>
              <div className="space-y-4">
                <a href="https://course.henrypedia.com/login" target="_blank" rel="noopener noreferrer" className="block w-full py-4 bg-purple-600 text-white rounded-xl text-center font-bold">Henry Login</a>
                <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" className="block w-full py-4 bg-red-600 text-white rounded-xl text-center font-bold">EDX Global</a>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-40 flex flex-col items-center gap-8">
          <Button variant="ghost" onClick={() => {
            sessionStorage.removeItem('personal_access');
            router.push('/');
          }} className="text-zinc-700 hover:text-red-500 text-xl font-bold">退出個人系統</Button>
          <p className="text-[10px] text-zinc-800 uppercase tracking-[0.5em] font-black italic">Secure Learning System v4.5 Final</p>
        </div>
      </div>
    </div>
  );
}
