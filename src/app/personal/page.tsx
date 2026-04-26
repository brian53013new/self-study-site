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
      <div className="border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-10 flex justify-between items-center max-w-6xl">
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

      <div className="container mx-auto px-6 py-20 max-w-6xl space-y-16">
        
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

        <div className="grid gap-16 grid-cols-1">
          
          {/* 1. SOP 會員系統 (2:1 全寬) */}
          <div className="group relative aspect-[2.2/1]">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-purple-600 rounded-[4rem] blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[4rem] p-16 flex flex-col justify-between overflow-hidden shadow-2xl">
              <div className="flex justify-between items-start">
                <div className="p-6 bg-rose-500/10 rounded-[2rem] border border-rose-500/20"><ShieldCheck className="w-16 h-16 text-rose-500" /></div>
                <Music className="w-24 h-24 text-rose-500 opacity-5" />
              </div>
              <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                <div className="space-y-4">
                  <h2 className="text-6xl font-black tracking-tight text-white uppercase">SOP Members</h2>
                  <p className="text-zinc-500 text-2xl font-medium">讚美之泉專屬會員帳務入口</p>
                </div>
                <div className="flex items-center gap-10">
                  {isUnlocked && (
                    <div className="bg-zinc-900 p-8 rounded-3xl border border-white/5 font-mono text-left">
                      <div className="text-zinc-500 text-sm font-black mb-1 uppercase tracking-widest">Login Credentials</div>
                      <div className="text-2xl text-white font-bold">{_0xce("su")}</div>
                      <div className="text-4xl font-black text-rose-500 tracking-tighter mt-1">{_0xce("sp")}</div>
                    </div>
                  )}
                  <a href="https://members.sop.org/" target="_blank" rel="noopener noreferrer" className="px-16 py-8 bg-rose-600 hover:bg-rose-700 text-white rounded-[2rem] text-3xl font-black shadow-2xl transition-all active:scale-95">進入系統</a>
                </div>
              </div>
            </Card>
          </div>

          {/* 2. 歷史專題 (2:1 全寬) */}
          <div className="group relative aspect-[2.2/1]">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-[4rem] blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[4rem] p-16 flex flex-col justify-between shadow-2xl">
              <div className="p-6 bg-orange-500/10 rounded-[2rem] border border-orange-500/20 w-fit"><History className="w-16 h-16 text-orange-500" /></div>
              <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                <h2 className="text-6xl font-[1000] tracking-tighter text-white uppercase">History Zoom</h2>
                <div className="flex items-center gap-10">
                  {isUnlocked && <div className="text-6xl font-black text-orange-500 font-mono bg-zinc-900 px-10 py-5 rounded-3xl border border-white/5 tracking-tighter">{_0xce("zid")}</div>}
                  <a href="https://us06web.zoom.us/j/5844221701?pwd=7fz5sBze027txb5MxbFYpC5g8cnN9a.1" target="_blank" rel="noopener noreferrer" className="px-16 py-8 bg-orange-600 hover:bg-orange-700 text-white rounded-[2rem] text-3xl font-black shadow-2xl">進入 ZOOM</a>
                </div>
              </div>
            </Card>
          </div>

          {/* 3. 歷史雲端教材 (2:1 全寬) */}
          <div className="group relative aspect-[2.2/1]">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-[4rem] blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[4rem] p-16 flex flex-col justify-between">
              <div className="p-6 bg-emerald-500/10 rounded-[2rem] border border-emerald-500/20 w-fit"><Cloud className="w-16 h-16 text-emerald-500" /></div>
              <h2 className="text-6xl font-black tracking-tight">歷史教材雲端資源</h2>
              {isUnlocked ? (
                <a href="https://drive.google.com/drive/folders/1D3GTOwFTenNT1I1v-5SPNu3lD597mRsr" target="_blank" rel="noopener noreferrer" className="py-10 bg-zinc-900 border-2 border-emerald-500/20 text-emerald-500 rounded-[2rem] text-4xl font-[1000] text-center hover:bg-zinc-800 shadow-2xl transition-all">開啟 GOOGLE DRIVE</a>
              ) : <div className="py-10 border-4 border-dashed border-white/5 rounded-[2rem] text-center text-zinc-800 text-4xl font-black tracking-widest">ACCESS ENCRYPTED</div>}
            </Card>
          </div>

          {/* 4. 辯論私教 (2:1 全寬) */}
          <div className="group relative aspect-[2.2/1]">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-[4rem] blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[4rem] p-16 flex flex-col justify-between shadow-2xl">
              <div className="p-6 bg-violet-500/10 rounded-[2rem] border border-violet-500/20 w-fit"><MessageSquare className="w-16 h-16 text-violet-500" /></div>
              <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                <h2 className="text-6xl font-black tracking-tighter text-white uppercase">Debate Private</h2>
                <div className="flex items-center gap-10">
                  {isUnlocked && (
                    <div className="bg-zinc-900 p-8 rounded-3xl border border-white/5 font-mono text-right">
                      <div className="text-zinc-600 text-sm font-black mb-1">DIAL: {_0xce("dpu")}</div>
                      <div className="text-5xl font-black text-violet-500 tracking-tighter">PIN: {_0xce("dpin")}</div>
                    </div>
                  )}
                  <a href="https://meet.google.com/wae-iqur-pqz" target="_blank" rel="noopener noreferrer" className="px-16 py-8 bg-violet-600 hover:bg-violet-700 text-white rounded-[2rem] text-3xl font-black shadow-2xl">進入教室</a>
                </div>
              </div>
            </Card>
          </div>

          {/* 5. 辯論專題 NGF (2:1 全寬) */}
          <div className="group relative aspect-[2.2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[4rem] p-16 flex flex-col justify-between hover:border-indigo-500/30 transition-all shadow-2xl">
              <div className="p-6 bg-indigo-500/10 rounded-[2rem] w-fit"><Globe className="w-16 h-16 text-indigo-400" /></div>
              <h2 className="text-6xl font-black tracking-tighter">辯論專題課程 (NGF)</h2>
              <a href="https://us06web.zoom.us/j/84058999858?pwd=KdtAd1z6bbROvcrFybThyu3ijODiDW.1" target="_blank" rel="noopener noreferrer" className="py-10 bg-zinc-900 border border-white/10 text-indigo-400 rounded-[2rem] text-4xl font-[1000] text-center hover:bg-zinc-800 transition-all">進入 ZOOM 會議</a>
            </Card>
          </div>

          {/* 6. 珠心算課程 (2:1 全寬) */}
          <div className="group relative aspect-[2.2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[4rem] p-16 flex flex-col justify-between hover:border-emerald-500/30 transition-all shadow-2xl">
              <div className="p-6 bg-emerald-500/10 rounded-[2rem] w-fit"><Binary className="w-16 h-16 text-emerald-500" /></div>
              <h2 className="text-7xl font-[1000] tracking-tighter uppercase text-white">Abacus Mind</h2>
              <a href="https://meet.google.com/znu-vmds-fxi" target="_blank" rel="noopener noreferrer" className="py-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-[2rem] text-4xl font-black text-center shadow-xl shadow-emerald-600/30">進入 Google Meet</a>
            </Card>
          </div>

          {/* 7. 奧數精英課 (2:1 全寬) */}
          <div className="group relative aspect-[2.2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[4rem] p-16 flex flex-col justify-between hover:border-red-500/30 transition-all shadow-2xl">
              <div className="p-6 bg-red-500/10 rounded-[2rem] w-fit"><Sigma className="w-16 h-16 text-red-500" /></div>
              <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                <h2 className="text-6xl font-black tracking-tighter uppercase">Olympiad Math</h2>
                <div className="flex items-center gap-10">
                  {isUnlocked && <div className="text-5xl font-black text-red-500 font-mono bg-zinc-900 px-10 py-5 rounded-3xl border border-white/5 tracking-tighter">{_0xce("omid")}</div>}
                  <a href="https://meet.google.com/wjn-atpi-ifx" target="_blank" rel="noopener noreferrer" className="px-16 py-8 bg-red-600 hover:bg-red-700 text-white rounded-[2rem] text-3xl font-black">進入教室</a>
                </div>
              </div>
            </Card>
          </div>

          {/* 8. 慶元數學課程 (2:1 全寬) */}
          <div className="group relative aspect-[2.2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[4rem] p-16 flex flex-col justify-between hover:border-blue-500/30 transition-all shadow-2xl">
              <div className="p-6 bg-blue-500/10 rounded-[2rem] w-fit"><Calculator className="w-16 h-16 text-blue-500" /></div>
              <h2 className="text-6xl font-black tracking-tight">慶元數學系統課程</h2>
              <a href="https://meet.google.com/ddr-hdrt-eru" target="_blank" rel="noopener noreferrer" className="py-10 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] text-4xl font-black text-center shadow-xl">進入視訊教室</a>
            </Card>
          </div>

          {/* 9. 英文理化專題 (2:1 全寬) */}
          <div className="group relative aspect-[2.2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[4rem] p-16 flex flex-col justify-between hover:border-teal-500/30 transition-all shadow-2xl">
              <div className="p-6 bg-teal-500/10 rounded-[2rem] w-fit"><Microscope className="w-16 h-16 text-teal-500" /></div>
              <h2 className="text-6xl font-black tracking-tighter">英文理化專題課程</h2>
              <a href="https://meet.google.com/fzm-ecmz-api" target="_blank" rel="noopener noreferrer" className="py-10 bg-teal-600 hover:bg-teal-700 text-white rounded-[2rem] text-4xl font-black text-center shadow-xl">OPEN MEET</a>
            </Card>
          </div>

          {/* 10. Henry 讀書會 (2:1 全寬) */}
          <div className="group relative aspect-[2.2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[4rem] p-16 flex flex-col justify-between shadow-2xl">
              <div className="p-6 bg-purple-500/10 rounded-[2rem] w-fit"><BookOpen className="w-16 h-16 text-purple-500" /></div>
              <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                <h2 className="text-6xl font-black tracking-tight uppercase">Henry Club</h2>
                <div className="flex items-center gap-10">
                  <a href="https://course.henrypedia.com/login" target="_blank" rel="noopener noreferrer" className="px-16 py-8 bg-purple-600 hover:bg-purple-700 text-white rounded-[2rem] text-3xl font-black">前往登入</a>
                  {isUnlocked && (
                    <div className="bg-zinc-900 p-8 rounded-3xl border border-white/5 font-mono text-center">
                      <div className="text-zinc-500 text-sm font-black mb-1 uppercase">Access ID: {_0xce("hu")}</div>
                      <div className="text-4xl font-black text-purple-400 tracking-tighter">PW: {_0xce("hp")}</div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* 11. Hour of AI (2:1 全寬) */}
          <div className="group relative aspect-[2.2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[4rem] p-16 flex flex-col items-center justify-center hover:border-cyan-500/30 transition-all text-center">
              <div className="p-8 bg-cyan-500/10 rounded-full mb-10 shadow-[0_0_50px_rgba(6,182,212,0.1)]"><Brain className="w-20 h-20 text-cyan-500" /></div>
              <h2 className="text-7xl font-[1000] text-white mb-10 uppercase tracking-tighter">Hour of AI</h2>
              <a href="https://code.org/en-US/hour-of-ai" target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-3xl font-black hover:underline flex items-center gap-4 transition-all">START STUDY <ExternalLink className="w-10 h-10" /></a>
            </Card>
          </div>

          {/* 12. Kyros AI Program (2:1 全寬) */}
          <div className="group relative aspect-[2.2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[4rem] p-16 flex flex-col items-center justify-center hover:border-cyan-500/30 transition-all text-center">
              <div className="p-8 bg-cyan-500/10 rounded-full mb-10 shadow-[0_0_50px_rgba(6,182,212,0.1)]"><Sparkles className="w-20 h-20 text-cyan-500" /></div>
              <h2 className="text-5xl font-black text-white mb-10 leading-tight uppercase tracking-tight">Kyros AI Special Program</h2>
              <a href="https://www.kyros.ai/special-program-detail/22130" target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-3xl font-black hover:underline flex items-center gap-4 transition-all hover:scale-105">VISIT SITE <ExternalLink className="w-10 h-10" /></a>
            </Card>
          </div>

          {/* 13. EDX Global (2:1 全寬) */}
          <div className="group relative aspect-[2.2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[4rem] p-16 flex flex-col items-center justify-center hover:border-red-600/30 transition-all text-center">
              <div className="p-8 bg-red-600/10 rounded-full mb-10 shadow-[0_0_50px_rgba(220,38,38,0.1)]"><Globe className="w-20 h-20 text-red-600" /></div>
              <h2 className="text-7xl font-[1000] text-white mb-10 tracking-tighter uppercase">EDX Global</h2>
              <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" className="px-24 py-10 bg-red-600 text-white rounded-[2.5rem] text-4xl font-[1000] shadow-2xl transition-all hover:bg-red-700 active:scale-95">VISIT OFFICIAL SITE</a>
            </Card>
          </div>

          {/* 14. Funday 英語 (2:1 全寬) */}
          <div className="group relative aspect-[2.2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[4rem] p-16 flex flex-col justify-between shadow-2xl">
              <div className="p-6 bg-blue-500/10 rounded-[2rem] w-fit"><GraduationCap className="w-16 h-16 text-blue-500" /></div>
              <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                <h2 className="text-7xl font-[1000] tracking-tighter uppercase text-white">Funday</h2>
                <div className="flex items-center gap-10">
                  <a href="https://funday.asia/" target="_blank" rel="noopener noreferrer" className="px-16 py-8 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] text-3xl font-black">前往平台</a>
                  {isUnlocked && (
                    <div className="bg-zinc-900 p-8 rounded-3xl border border-white/5 font-mono text-center">
                      <div className="text-zinc-500 text-sm font-black uppercase mb-1">User: {_0xce("u")}</div>
                      <div className="text-5xl font-black text-blue-400 tracking-tighter">{_0xce("p")}</div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* 15. SOP 官方網站 (2:1 全寬) */}
          <div className="group relative aspect-[2.2/1]">
            <Card className="relative h-full bg-zinc-950 border-white/5 rounded-[4rem] p-16 flex flex-col items-center justify-center hover:border-rose-500/30 transition-all text-center">
              <div className="p-8 bg-rose-500/10 rounded-full mb-10"><Layout className="w-20 h-20 text-rose-500" /></div>
              <h2 className="text-6xl font-black text-white mb-10 uppercase tracking-tighter">SOP Official Site</h2>
              <a href="https://www.sop.org/" target="_blank" rel="noopener noreferrer" className="text-rose-500 text-4xl font-black hover:underline transition-all">BROWSE WEBSITE</a>
            </Card>
          </div>

        </div>

        {/* 底部登出 */}
        <div className="mt-60 mb-20 flex flex-col items-center gap-10">
          <button 
            onClick={() => {
              sessionStorage.removeItem('personal_access');
              router.push('/');
            }} 
            className="text-zinc-800 hover:text-red-500 font-[1000] text-5xl tracking-widest transition-all uppercase italic"
          >
            Terminal System
          </button>
          <div className="flex items-center gap-6 text-zinc-900 font-black tracking-[1em] text-xs">
            <span>SECURE</span>
            <div className="w-2 h-2 bg-zinc-900 rounded-full" />
            <span>ENCRYPTED</span>
            <div className="w-2 h-2 bg-zinc-900 rounded-full" />
            <span>AUTHORITATIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
