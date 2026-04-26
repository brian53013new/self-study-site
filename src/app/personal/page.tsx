'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
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
    return <div className="min-h-screen bg-black" />;
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
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* 華麗 Header */}
      <div className="border-b border-white/5 bg-zinc-950/50 backdrop-blur-2xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-10 flex justify-between items-center">
          <h1 className="text-4xl font-black tracking-tighter italic">Personal Dashboard</h1>
          {!isUnlocked ? (
            <Button onClick={() => setShowPrompt(true)} className="bg-white text-black hover:bg-zinc-200 px-10 py-7 text-xl rounded-full font-black shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all active:scale-95">
              <ShieldCheck className="w-6 h-6 mr-2" /> 解鎖資料
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setIsUnlocked(false)} className="text-red-500 border-red-500/30 hover:bg-red-500/10 px-10 py-7 text-xl rounded-full font-black">
              <Lock className="w-6 h-6 mr-2" /> 鎖定資料
            </Button>
          )}
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-7xl">
        
        {/* 驗證視窗 */}
        {showPrompt && !isUnlocked && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-6">
            <Card className="max-w-md w-full bg-zinc-950 border-white/10 rounded-[3rem] p-16 shadow-2xl text-center">
              <h3 className="text-4xl font-black mb-10">身份驗證</h3>
              <form onSubmit={handleUnlock} className="space-y-8">
                <Input
                  type="password"
                  placeholder="Enter Password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className={`h-20 text-center text-4xl bg-white/5 border-none text-white rounded-2xl focus:ring-2 focus:ring-blue-600 ${passError ? "animate-shake border-2 border-red-500" : ""}`}
                  autoFocus
                />
                <div className="flex gap-4">
                  <Button type="button" variant="ghost" className="flex-1 h-16 text-2xl text-zinc-500" onClick={() => setShowPrompt(false)}>取消</Button>
                  <Button type="submit" className="flex-1 h-16 bg-blue-600 hover:bg-blue-700 text-white font-black text-2xl rounded-2xl">確認</Button>
                </div>
              </form>
            </Card>
          </div>
        )}

        <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
          
          {/* 1. SOP 會員系統 (2:1) */}
          <div className="group relative aspect-[2/1]">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-purple-600 rounded-[3rem] blur opacity-10 group-hover:opacity-25 transition duration-500"></div>
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[3rem] p-12 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-start">
                <div className="p-5 bg-rose-500/10 rounded-[1.5rem] border border-rose-500/20"><ShieldCheck className="w-12 h-12 text-rose-500" /></div>
                <Music className="w-16 h-16 text-rose-500 opacity-5" />
              </div>
              <div>
                <h2 className="text-4xl font-black tracking-tight mb-4">SOP 會員系統</h2>
                <div className="flex items-center gap-6">
                  <a href="https://members.sop.org/" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl text-xl font-black shadow-xl transition-all">進入系統</a>
                  {isUnlocked && (
                    <div className="flex-1 bg-black/40 p-5 rounded-2xl border border-white/5 font-mono">
                      <div className="text-zinc-500 text-xs">ID: {_0xce("su")}</div>
                      <div className="text-2xl font-black text-rose-500">PW: {_0xce("sp")}</div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* 2. 歷史專題課程 (2:1) */}
          <div className="group relative aspect-[2/1]">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-[3rem] blur opacity-10 group-hover:opacity-25 transition duration-500"></div>
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[3rem] p-12 flex flex-col justify-between">
              <div className="p-5 bg-orange-500/10 rounded-[1.5rem] border border-orange-500/20 w-fit"><History className="w-12 h-12 text-orange-500" /></div>
              <div>
                <h2 className="text-4xl font-black tracking-tight mb-6 uppercase">History Zoom</h2>
                <div className="flex items-center gap-6">
                  <a href="https://us06web.zoom.us/j/5844221701?pwd=7fz5sBze027txb5MxbFYpC5g8cnN9a.1" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl text-2xl font-black shadow-xl">進入 ZOOM</a>
                  {isUnlocked && <div className="text-4xl font-black text-orange-500 font-mono bg-zinc-900 px-8 py-3 rounded-2xl border border-white/5">{_0xce("zid")}</div>}
                </div>
              </div>
            </Card>
          </div>

          {/* 3. 歷史教材雲端 (2:1) */}
          <div className="group relative aspect-[2/1]">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-[3rem] blur opacity-10 group-hover:opacity-25 transition duration-500"></div>
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[3rem] p-12 flex flex-col justify-between">
              <div className="p-5 bg-emerald-500/10 rounded-[1.5rem] border border-emerald-500/20 w-fit"><Cloud className="w-12 h-12 text-emerald-500" /></div>
              <h2 className="text-4xl font-black tracking-tight">歷史教材雲端</h2>
              {isUnlocked ? (
                <a href="https://drive.google.com/drive/folders/1D3GTOwFTenNT1I1v-5SPNu3lD597mRsr" target="_blank" rel="noopener noreferrer" className="py-6 bg-zinc-900 border-2 border-emerald-500/20 text-emerald-500 rounded-2xl text-3xl font-black text-center hover:bg-zinc-800 transition-all">開啟 Google Drive</a>
              ) : <div className="py-6 border-2 border-dashed border-white/5 rounded-2xl text-center text-zinc-800 text-2xl font-black tracking-widest">ACCESS LOCKED</div>}
            </Card>
          </div>

          {/* 4. 辯論私教課程 (2:1) */}
          <div className="group relative aspect-[2/1]">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-[3rem] blur opacity-10 group-hover:opacity-25 transition duration-500"></div>
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[3rem] p-12 flex flex-col justify-between">
              <div className="p-5 bg-violet-500/10 rounded-[1.5rem] border border-violet-500/20 w-fit"><MessageSquare className="w-12 h-12 text-violet-500" /></div>
              <h2 className="text-4xl font-black tracking-tight">辯論私教課程</h2>
              <div className="flex items-center gap-6">
                <a href="https://meet.google.com/wae-iqur-pqz" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-violet-600 hover:bg-violet-700 text-white rounded-2xl text-xl font-black shadow-xl">進入教室</a>
                {isUnlocked && (
                  <div className="bg-zinc-900 p-4 rounded-2xl border border-white/5 font-mono text-center flex-1">
                    <div className="text-zinc-500 text-[10px]">{_0xce("dpu")}</div>
                    <div className="text-2xl font-black text-violet-400">PIN: {_0xce("dpin")}</div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* 5. 辯論專題 NGF (2:1) */}
          <div className="group relative aspect-[2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[3rem] p-12 flex flex-col justify-between hover:border-indigo-500/30 transition-all">
              <div className="p-5 bg-indigo-500/10 rounded-[1.5rem] w-fit"><Globe className="w-12 h-12 text-indigo-400" /></div>
              <h2 className="text-4xl font-black tracking-tight">辯論專題 (NGF)</h2>
              <a href="https://us06web.zoom.us/j/84058999858?pwd=KdtAd1z6bbROvcrFybThyu3ijODiDW.1" target="_blank" rel="noopener noreferrer" className="py-6 bg-zinc-900 border border-white/10 text-indigo-400 rounded-2xl text-2xl font-black text-center hover:bg-zinc-800">進入 ZOOM</a>
            </Card>
          </div>

          {/* 6. 珠心算課程 (2:1) */}
          <div className="group relative aspect-[2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[3rem] p-12 flex flex-col justify-between hover:border-emerald-500/30 transition-all">
              <div className="p-5 bg-emerald-500/10 rounded-[1.5rem] w-fit"><Binary className="w-12 h-12 text-emerald-500" /></div>
              <h2 className="text-4xl font-black tracking-tight uppercase">Abacus Mind</h2>
              <a href="https://meet.google.com/znu-vmds-fxi" target="_blank" rel="noopener noreferrer" className="py-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-2xl font-black text-center shadow-lg shadow-emerald-600/20">進入 MEET</a>
            </Card>
          </div>

          {/* 7. 奧數精英課 (2:1) */}
          <div className="group relative aspect-[2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[3rem] p-12 flex flex-col justify-between hover:border-red-500/30 transition-all">
              <div className="p-5 bg-red-500/10 rounded-[1.5rem] w-fit"><Sigma className="w-12 h-12 text-red-500" /></div>
              <h2 className="text-4xl font-black tracking-tight uppercase">Olympiad Math</h2>
              <div className="flex items-center gap-6">
                <a href="https://meet.google.com/wjn-atpi-ifx" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white rounded-2xl text-xl font-black">進入教室</a>
                {isUnlocked && <div className="text-3xl font-black text-red-500 font-mono bg-zinc-900 px-6 py-3 rounded-2xl border border-white/5">{_0xce("omid")}</div>}
              </div>
            </Card>
          </div>

          {/* 8. 慶元數學課程 (2:1) */}
          <div className="group relative aspect-[2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[3rem] p-12 flex flex-col justify-between hover:border-blue-500/30 transition-all">
              <div className="p-5 bg-blue-500/10 rounded-[1.5rem] w-fit"><Calculator className="w-12 h-12 text-blue-500" /></div>
              <h2 className="text-4xl font-black tracking-tight">慶元數學課程</h2>
              <a href="https://meet.google.com/ddr-hdrt-eru" target="_blank" rel="noopener noreferrer" className="py-8 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-2xl font-black text-center">進入 Google Meet</a>
            </Card>
          </div>

          {/* 9. 英文理化專題 (2:1) */}
          <div className="group relative aspect-[2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[3rem] p-12 flex flex-col justify-between hover:border-teal-500/30 transition-all">
              <div className="p-5 bg-teal-500/10 rounded-[1.5rem] w-fit"><Microscope className="w-12 h-12 text-teal-500" /></div>
              <h2 className="text-4xl font-black tracking-tight">英文理化專題</h2>
              <a href="https://meet.google.com/fzm-ecmz-api" target="_blank" rel="noopener noreferrer" className="py-8 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl text-2xl font-black text-center shadow-xl shadow-teal-600/10">開啟連結</a>
            </Card>
          </div>

          {/* 10. Henry 讀書會 (2:1) */}
          <div className="group relative aspect-[2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[3rem] p-12 flex flex-col justify-between">
              <div className="p-5 bg-purple-500/10 rounded-[1.5rem] w-fit"><BookOpen className="w-12 h-12 text-purple-500" /></div>
              <h2 className="text-4xl font-black tracking-tight">Henry 讀書會</h2>
              <div className="flex items-center gap-6">
                <a href="https://course.henrypedia.com/login" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-purple-600 text-white rounded-2xl text-xl font-black shadow-xl">前往登入</a>
                {isUnlocked && (
                  <div className="bg-zinc-900 p-4 rounded-2xl border border-white/5 font-mono text-center flex-1">
                    <div className="text-zinc-500 text-[10px]">{_0xce("hu")}</div>
                    <div className="text-2xl font-black text-purple-400">{_0xce("hp")}</div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* 11. Hour of AI (2:1) */}
          <div className="group relative aspect-[2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[3rem] p-12 flex flex-col items-center justify-center hover:border-cyan-500/30 transition-all text-center">
              <div className="p-6 bg-cyan-500/10 rounded-full mb-4"><Brain className="w-14 h-14 text-cyan-500" /></div>
              <h2 className="text-4xl font-[1000] text-white mb-6 uppercase">Hour of AI</h2>
              <a href="https://code.org/en-US/hour-of-ai" target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-2xl font-black hover:underline flex items-center gap-3">START <ExternalLink className="w-8 h-8" /></a>
            </Card>
          </div>

          {/* 12. Kyros AI Program (2:1) */}
          <div className="group relative aspect-[2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[3rem] p-12 flex flex-col items-center justify-center hover:border-cyan-500/30 transition-all text-center">
              <div className="p-6 bg-cyan-500/10 rounded-full mb-4"><Sparkles className="w-14 h-14 text-cyan-500" /></div>
              <h2 className="text-3xl font-black text-white mb-6 leading-tight uppercase">Kyros AI Special</h2>
              <a href="https://www.kyros.ai/special-program-detail/22130" target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-2xl font-black hover:underline flex items-center gap-3">VISIT SITE <ExternalLink className="w-8 h-8" /></a>
            </Card>
          </div>

          {/* 13. EDX Global (2:1) */}
          <div className="group relative aspect-[2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[3rem] p-12 flex flex-col items-center justify-center hover:border-red-600/30 transition-all text-center">
              <div className="p-6 bg-red-600/10 rounded-full mb-4"><Globe className="w-14 h-14 text-red-600" /></div>
              <h2 className="text-4xl font-black text-white mb-6">EDX GLOBAL</h2>
              <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-red-600 text-white rounded-2xl text-2xl font-[1000] shadow-2xl shadow-red-600/20 transition-all active:scale-95">VISIT SITE</a>
            </Card>
          </div>

          {/* 14. Funday 英語 (2:1) */}
          <div className="group relative aspect-[2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[3rem] p-12 flex flex-col justify-between">
              <div className="p-5 bg-blue-500/10 rounded-[1.5rem] w-fit"><GraduationCap className="w-12 h-12 text-blue-500" /></div>
              <h2 className="text-4xl font-black tracking-tight uppercase text-center md:text-left">Funday</h2>
              <div className="flex items-center gap-6">
                <a href="https://funday.asia/" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xl font-black shadow-xl">前往平台</a>
                {isUnlocked && (
                  <div className="bg-zinc-900 p-4 rounded-2xl border border-white/5 font-mono text-center flex-1">
                    <div className="text-zinc-500 text-[10px]">{_0xce("u")}</div>
                    <div className="text-2xl font-black text-blue-400">{_0xce("p")}</div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* 15. SOP 官方網站 (2:1) */}
          <div className="group relative aspect-[2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[3rem] p-12 flex flex-col items-center justify-center hover:border-rose-500/30 transition-all text-center">
              <div className="p-6 bg-rose-500/10 rounded-full mb-4"><Layout className="w-14 h-14 text-rose-500" /></div>
              <h2 className="text-3xl font-black text-white mb-6">SOP 官方網站</h2>
              <a href="https://www.sop.org/" target="_blank" rel="noopener noreferrer" className="text-rose-500 text-2xl font-black hover:underline">BROWSE WEBSITE</a>
            </Card>
          </div>

        </div>

        {/* 底部登出 */}
        <div className="mt-40 mb-20 flex justify-center">
          <button 
            onClick={() => {
              sessionStorage.removeItem('personal_access');
              router.push('/');
            }} 
            className="text-zinc-800 hover:text-red-500 font-[1000] text-3xl tracking-widest transition-all uppercase italic"
          >
            Terminal System
          </button>
        </div>
      </div>
    </div>
  );
}
