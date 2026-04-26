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
      {/* Header */}
      <div className="border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-8 flex justify-between items-center">
          <h1 className="text-3xl font-black tracking-tight">個人學習系統</h1>
          {!isUnlocked ? (
            <Button onClick={() => setShowPrompt(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl px-10 h-14 shadow-lg transition-all active:scale-95 text-lg">
              <Lock className="w-5 h-5 mr-2" /> 解鎖資料
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setIsUnlocked(false)} className="text-zinc-500 border-zinc-800 hover:bg-zinc-900 rounded-2xl px-10 h-14 text-lg">
              <Eye className="w-5 h-5 mr-2" /> 重新鎖定
            </Button>
          )}
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-7xl">
        
        {/* 驗證視窗 */}
        {showPrompt && !isUnlocked && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-6">
            <Card className="max-w-md w-full bg-zinc-900 border-white/10 rounded-[3rem] p-12 shadow-2xl text-center">
              <h3 className="text-3xl font-black mb-10 text-white">身份驗證</h3>
              <form onSubmit={handleUnlock} className="space-y-10">
                <Input
                  type="password"
                  placeholder="Enter Password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className={`h-16 text-center text-3xl bg-black/50 border-white/10 text-white rounded-2xl ${passError ? "border-red-500 animate-shake" : ""}`}
                  autoFocus
                />
                <div className="flex gap-4">
                  <Button type="button" variant="ghost" className="flex-1 h-14 text-xl text-zinc-500" onClick={() => setShowPrompt(false)}>取消</Button>
                  <Button type="submit" className="flex-1 h-14 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl">確認</Button>
                </div>
              </form>
            </Card>
          </div>
        )}

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
          {/* 1. SOP 會員系統 (3:2) */}
          <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] aspect-[3/2] flex flex-col p-10 hover:border-rose-500/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity"><Music className="w-20 h-20 text-rose-500" /></div>
            <div className="flex-1">
              <div className="p-4 bg-rose-500/10 rounded-2xl w-fit mb-6"><ShieldCheck className="w-10 h-10 text-rose-500" /></div>
              <h2 className="text-3xl font-black text-white leading-tight">SOP 會員<br/>登入系統</h2>
            </div>
            <div className="space-y-4">
              {isUnlocked && (
                <div className="bg-zinc-900 p-4 rounded-xl border border-white/5 font-mono text-sm">
                  <div className="text-zinc-500">ID: {_0xce("su")}</div>
                  <div className="text-rose-500 font-bold">PW: {_0xce("sp")}</div>
                </div>
              )}
              <a href="https://members.sop.org/" target="_blank" rel="noopener noreferrer" className="block w-full py-5 bg-rose-600 hover:bg-rose-700 text-white text-center text-xl font-black rounded-2xl shadow-xl shadow-rose-600/10 transition-all">進入系統</a>
            </div>
          </Card>

          {/* 2. 歷史專題 (3:2) */}
          <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] aspect-[3/2] flex flex-col p-10 hover:border-orange-500/30 transition-all group relative">
            <div className="flex-1">
              <div className="p-4 bg-orange-500/10 rounded-2xl w-fit mb-6"><History className="w-10 h-10 text-orange-500" /></div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter">History<br/>Core Zoom</h2>
            </div>
            <div className="space-y-4 text-center">
              {isUnlocked && <div className="text-4xl font-black text-orange-500 font-mono bg-zinc-900 py-3 rounded-xl border border-white/5">{_0xce("zid")}</div>}
              <a href="https://us06web.zoom.us/j/5844221701?pwd=7fz5sBze027txb5MxbFYpC5g8cnN9a.1" target="_blank" rel="noopener noreferrer" className="block w-full py-5 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl text-xl font-black shadow-lg">進入會議</a>
            </div>
          </Card>

          {/* 3. 歷史教材雲端 (3:2) */}
          <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] aspect-[3/2] flex flex-col p-10 hover:border-emerald-500/30 transition-all group">
            <div className="flex-1">
              <div className="p-4 bg-emerald-500/10 rounded-2xl w-fit mb-6"><Cloud className="w-10 h-10 text-emerald-500" /></div>
              <h2 className="text-3xl font-black text-white leading-tight">歷史教材<br/>雲端儲存</h2>
            </div>
            {isUnlocked ? (
              <a href="https://drive.google.com/drive/folders/1D3GTOwFTenNT1I1v-5SPNu3lD597mRsr" target="_blank" rel="noopener noreferrer" className="block w-full py-6 bg-zinc-900 border-2 border-emerald-500/20 text-emerald-500 text-center text-xl font-black rounded-2xl hover:bg-zinc-800">開啟 DRIVE</a>
            ) : <div className="py-6 border-2 border-dashed border-white/5 rounded-2xl text-center text-zinc-800 font-black tracking-widest uppercase">Locked</div>}
          </Card>

          {/* 4. 辯論私教 (3:2) */}
          <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] aspect-[3/2] flex flex-col p-10 hover:border-violet-500/30 transition-all group">
            <div className="flex-1">
              <div className="p-4 bg-violet-500/10 rounded-2xl w-fit mb-6"><MessageSquare className="w-10 h-10 text-violet-500" /></div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Debate<br/>Private</h2>
            </div>
            <div className="space-y-4">
              {isUnlocked && (
                <div className="p-4 bg-zinc-900 rounded-xl border border-white/5 font-mono text-center">
                  <div className="text-zinc-600 text-xs">{_0xce("dpu")}</div>
                  <div className="text-2xl font-black text-violet-400">PIN: {_0xce("dpin")}</div>
                </div>
              )}
              <a href="https://meet.google.com/wae-iqur-pqz" target="_blank" rel="noopener noreferrer" className="block w-full py-5 bg-violet-600 hover:bg-violet-700 text-white text-center text-xl font-black rounded-2xl">進入教室</a>
            </div>
          </Card>

          {/* 5. 辯論 NGF (3:2) */}
          <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] aspect-[3/2] flex flex-col p-10 hover:border-indigo-500/30 transition-all group">
            <div className="flex-1">
              <div className="p-4 bg-indigo-500/10 rounded-2xl w-fit mb-6"><Globe className="w-10 h-10 text-indigo-400" /></div>
              <h2 className="text-3xl font-black text-white leading-tight">辯論專題<br/>(NGF)</h2>
            </div>
            <a href="https://us06web.zoom.us/j/84058999858?pwd=KdtAd1z6bbROvcrFybThyu3ijODiDW.1" target="_blank" rel="noopener noreferrer" className="block w-full py-8 bg-zinc-900 border border-white/5 text-indigo-400 text-center text-2xl font-black rounded-2xl hover:bg-zinc-800">OPEN ZOOM</a>
          </Card>

          {/* 6. 珠心算課程 (3:2) */}
          <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] aspect-[3/2] flex flex-col p-10 hover:border-emerald-500/30 transition-all group">
            <div className="flex-1">
              <div className="p-4 bg-emerald-500/10 rounded-2xl w-fit mb-6"><Binary className="w-10 h-10 text-emerald-500" /></div>
              <h2 className="text-3xl font-black text-white uppercase">Abacus<br/>Mind</h2>
            </div>
            <a href="https://meet.google.com/znu-vmds-fxi" target="_blank" rel="noopener noreferrer" className="block w-full py-8 bg-emerald-600 hover:bg-emerald-700 text-white text-center text-3xl font-black rounded-2xl shadow-xl shadow-emerald-600/20">進入 MEET</a>
          </Card>

          {/* 7. 奧數精英課 (3:2) */}
          <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] aspect-[3/2] flex flex-col p-10 hover:border-red-500/30 transition-all group">
            <div className="flex-1">
              <div className="p-4 bg-red-500/10 rounded-2xl w-fit mb-6"><Sigma className="w-10 h-10 text-red-500" /></div>
              <h2 className="text-3xl font-black text-white uppercase">Olympiad<br/>Math</h2>
            </div>
            <div className="space-y-4">
              {isUnlocked && <div className="text-3xl font-black text-red-500 font-mono text-center bg-zinc-900 py-2 rounded-xl border border-white/5">{_0xce("omid")}</div>}
              <a href="https://meet.google.com/wjn-atpi-ifx" target="_blank" rel="noopener noreferrer" className="block w-full py-5 bg-red-600 hover:bg-red-700 text-white text-center text-xl font-black rounded-2xl">進入 MEET</a>
            </div>
          </Card>

          {/* 8. 慶元數學 (3:2) */}
          <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] aspect-[3/2] flex flex-col p-10 hover:border-blue-500/30 transition-all group">
            <div className="flex-1">
              <div className="p-4 bg-blue-500/10 rounded-2xl w-fit mb-6"><Calculator className="w-10 h-10 text-blue-500" /></div>
              <h2 className="text-3xl font-black text-white leading-tight text-center">慶元數學<br/>課程</h2>
            </div>
            <a href="https://meet.google.com/ddr-hdrt-eru" target="_blank" rel="noopener noreferrer" className="block w-full py-10 bg-blue-600 hover:bg-blue-700 text-white text-center text-2xl font-black rounded-2xl">進入視訊教室</a>
          </Card>

          {/* 9. 英文理化專題 (3:2) */}
          <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] aspect-[3/2] flex flex-col p-10 hover:border-teal-500/30 transition-all group">
            <div className="flex-1">
              <div className="p-4 bg-teal-500/10 rounded-2xl w-fit mb-6"><Microscope className="w-10 h-10 text-teal-500" /></div>
              <h2 className="text-3xl font-black text-white leading-tight">英文理化<br/>專題課程</h2>
            </div>
            <a href="https://meet.google.com/fzm-ecmz-api" target="_blank" rel="noopener noreferrer" className="block w-full py-8 bg-teal-600 hover:bg-teal-700 text-white text-center text-2xl font-black rounded-2xl">OPEN MEET</a>
          </Card>

          {/* 10. Henry 讀書會 (3:2) */}
          <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] aspect-[3/2] flex flex-col p-10 hover:border-purple-500/30 transition-all group">
            <div className="flex-1">
              <div className="p-4 bg-purple-500/10 rounded-2xl w-fit mb-6"><BookOpen className="w-10 h-10 text-purple-500" /></div>
              <h2 className="text-3xl font-black text-white leading-tight uppercase">Henry<br/>Reading</h2>
            </div>
            <div className="space-y-4">
              {isUnlocked && (
                <div className="p-4 bg-zinc-900 rounded-xl border border-white/5 font-mono text-center">
                  <div className="text-zinc-600 text-xs">{_0xce("hu")}</div>
                  <div className="text-xl font-bold text-purple-400">{_0xce("hp")}</div>
                </div>
              )}
              <a href="https://course.henrypedia.com/login" target="_blank" rel="noopener noreferrer" className="block w-full py-5 bg-purple-600 text-white text-center text-xl font-black rounded-2xl">前往登入</a>
            </div>
          </Card>

          {/* 11. Hour of AI (3:2) */}
          <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] aspect-[3/2] flex flex-col items-center justify-center p-10 hover:border-cyan-500/30 transition-all">
            <div className="p-6 bg-cyan-500/10 rounded-full mb-6"><Brain className="w-14 h-14 text-cyan-500" /></div>
            <h2 className="text-3xl font-black text-white mb-6 uppercase">Hour of AI</h2>
            <a href="https://code.org/en-US/hour-of-ai" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-bold hover:underline flex items-center gap-2 text-xl">START NOW <ExternalLink /></a>
          </Card>

          {/* 12. Kyros AI (3:2) */}
          <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] aspect-[3/2] flex flex-col items-center justify-center p-10 hover:border-cyan-500/30 transition-all text-center">
            <div className="p-6 bg-cyan-500/10 rounded-full mb-6"><Sparkles className="w-14 h-14 text-cyan-500" /></div>
            <h2 className="text-3xl font-black text-white mb-6 leading-tight">Kyros AI<br/>Program</h2>
            <a href="https://www.kyros.ai/special-program-detail/22130" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-bold hover:underline flex items-center gap-2 text-xl">VISIT <ExternalLink /></a>
          </Card>

          {/* 13. EDX Global (3:2) */}
          <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] aspect-[3/2] flex flex-col items-center justify-center p-10 hover:border-red-600/30 transition-all">
            <div className="p-6 bg-red-600/10 rounded-full mb-6"><Globe className="w-14 h-14 text-red-600" /></div>
            <h2 className="text-3xl font-black text-white mb-6">EDX Global</h2>
            <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-10 py-5 rounded-2xl font-black text-2xl shadow-xl shadow-red-600/20">VISIT SITE</a>
          </Card>

          {/* 14. Funday 英語 (3:2) */}
          <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] aspect-[3/2] flex flex-col p-10 hover:border-blue-500/30 transition-all group">
            <div className="flex-1">
              <div className="p-4 bg-blue-500/10 rounded-2xl w-fit mb-6"><GraduationCap className="w-10 h-10 text-blue-500" /></div>
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter text-center">Funday</h2>
            </div>
            <div className="space-y-4">
              {isUnlocked && (
                <div className="p-4 bg-zinc-900 rounded-xl border border-white/5 font-mono text-center">
                  <div className="text-zinc-600 text-xs">{_0xce("u")}</div>
                  <div className="text-2xl font-black text-blue-400">{_0xce("p")}</div>
                </div>
              )}
              <a href="https://funday.asia/" target="_blank" rel="noopener noreferrer" className="block w-full py-5 bg-blue-600 hover:bg-blue-700 text-white text-center text-xl font-black rounded-2xl">前往平台</a>
            </div>
          </Card>

          {/* 15. SOP 官方網站 (3:2) */}
          <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] aspect-[3/2] flex flex-col items-center justify-center p-10 hover:border-rose-500/30 transition-all text-center">
            <div className="p-6 bg-rose-500/10 rounded-full mb-6"><Layout className="w-14 h-14 text-rose-500" /></div>
            <h2 className="text-3xl font-black text-white mb-6 uppercase">SOP Official</h2>
            <a href="https://www.sop.org/" target="_blank" rel="noopener noreferrer" className="text-rose-500 font-bold hover:underline text-xl">BROWSE WEBSITE</a>
          </Card>

        </div>

        {/* 底部登出 */}
        <div className="mt-40 mb-20 flex justify-center">
          <button 
            onClick={() => {
              sessionStorage.removeItem('personal_access');
              router.push('/');
            }} 
            className="text-zinc-800 hover:text-red-500 font-black text-3xl tracking-widest transition-all uppercase italic"
          >
            Terminal System
          </button>
        </div>
      </div>
    </div>
  );
}
