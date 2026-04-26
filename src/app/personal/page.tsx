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
      {/* 頂部 Header */}
      <header className="border-b border-white/5 bg-zinc-950/80 backdrop-blur-2xl sticky top-0 z-40">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 className="text-4xl font-black tracking-tighter uppercase italic">Personal Dashboard</h1>
          {!isUnlocked ? (
            <Button onClick={() => setShowPrompt(true)} className="bg-white text-black hover:bg-zinc-200 px-12 py-7 text-xl rounded-full font-black shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <ShieldCheck className="w-6 h-6 mr-3" /> 解鎖資料
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setIsUnlocked(false)} className="text-red-500 border-red-500/30 hover:bg-red-500/10 px-12 py-7 text-xl rounded-full font-black">
              <Lock className="w-6 h-6 mr-3" /> 鎖定資料
            </Button>
          )}
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 space-y-12 max-w-5xl">
        
        {/* 驗證彈窗 */}
        {showPrompt && !isUnlocked && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-zinc-900 p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <h3 className="text-3xl font-black mb-8 text-center">身份驗證</h3>
              <form onSubmit={handleUnlock} className="space-y-8">
                <Input
                  type="password"
                  placeholder="Enter Code"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className={`h-16 text-center text-3xl rounded-2xl bg-black/40 border-white/10 text-white ${passError ? "border-red-500 animate-shake" : ""}`}
                  autoFocus
                />
                <div className="flex gap-4">
                  <Button type="button" variant="ghost" className="flex-1 h-14 text-xl" onClick={() => setShowPrompt(false)}>取消</Button>
                  <Button type="submit" className="flex-1 h-14 bg-blue-600 hover:bg-blue-700 text-white text-xl font-black rounded-2xl">驗證</Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* 1. SOP 會員登入 (大板塊) */}
        <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] p-12 hover:border-rose-500/30 transition-all shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            <div className="flex items-center gap-8">
              <div className="p-6 bg-rose-500/10 rounded-3xl"><ShieldCheck className="w-12 h-12 text-rose-500" /></div>
              <div>
                <h2 className="text-4xl font-black tracking-tight">SOP 會員登入系統</h2>
                <p className="text-zinc-500 text-lg mt-1 font-medium">讚美之泉內部管理入口</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-4 w-full md:w-auto">
              <a href="https://members.sop.org/" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl text-2xl font-black shadow-xl">進入系統</a>
              {isUnlocked && (
                <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5 font-mono text-center">
                  <div className="text-zinc-400 text-sm mb-1">ID: {_0xce("su")}</div>
                  <div className="text-3xl font-black text-rose-500">{_0xce("sp")}</div>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* 2. 歷史 Zoom */}
        <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] p-12 hover:border-orange-500/30 transition-all shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            <div className="flex items-center gap-8">
              <div className="p-6 bg-orange-500/10 rounded-3xl"><History className="w-12 h-12 text-orange-500" /></div>
              <h2 className="text-4xl font-black tracking-tight uppercase">歷史專題 (Zoom)</h2>
            </div>
            <div className="flex flex-col items-center gap-4">
              <a href="https://us06web.zoom.us/j/5844221701?pwd=7fz5sBze027txb5MxbFYpC5g8cnN9a.1" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl text-3xl font-[1000]">進入 ZOOM</a>
              {isUnlocked && <div className="text-4xl font-black text-orange-500 font-mono tracking-tighter bg-zinc-900 px-6 py-2 rounded-xl border border-white/5">{_0xce("zid")}</div>}
            </div>
          </div>
        </Card>

        {/* 3. 歷史雲端 */}
        <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] p-12 hover:border-emerald-500/30 transition-all shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            <div className="flex items-center gap-8">
              <div className="p-6 bg-emerald-500/10 rounded-3xl"><Cloud className="w-12 h-12 text-emerald-500" /></div>
              <h2 className="text-4xl font-black tracking-tight">歷史課教材雲端</h2>
            </div>
            {isUnlocked ? (
              <a href="https://drive.google.com/drive/folders/1D3GTOwFTenNT1I1v-5SPNu3lD597mRsr" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-zinc-900 border-2 border-emerald-500/20 text-emerald-500 rounded-2xl text-2xl font-black hover:bg-zinc-800">開啟 Drive</a>
            ) : <div className="text-zinc-800 text-2xl font-black italic">ENCRYPTED</div>}
          </div>
        </Card>

        {/* 4. 辯論私教 */}
        <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] p-12 hover:border-violet-500/30 transition-all shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            <div className="flex items-center gap-8">
              <div className="p-6 bg-violet-500/10 rounded-3xl"><MessageSquare className="w-12 h-12 text-violet-500" /></div>
              <h2 className="text-4xl font-black tracking-tight">辯論私教 (Brian)</h2>
            </div>
            <div className="flex flex-col items-center gap-4">
              <a href="https://meet.google.com/wae-iqur-pqz" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-violet-600 hover:bg-violet-700 text-white rounded-2xl text-2xl font-black">進入 MEET</a>
              {isUnlocked && (
                <div className="p-4 bg-zinc-900 rounded-xl text-center">
                  <div className="text-zinc-500 text-xs font-bold">{_0xce("dpu")}</div>
                  <div className="text-2xl font-black text-violet-400">PIN: {_0xce("dpin")}</div>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* 5. 辯論 NGF */}
        <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] p-12 hover:border-indigo-500/30 transition-all shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            <div className="flex items-center gap-8">
              <div className="p-6 bg-indigo-500/10 rounded-3xl"><Globe className="w-12 h-12 text-indigo-400" /></div>
              <h2 className="text-4xl font-black tracking-tight">辯論專題 (NGF)</h2>
            </div>
            <a href="https://us06web.zoom.us/j/84058999858?pwd=KdtAd1z6bbROvcrFybThyu3ijODiDW.1" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-zinc-900 border border-white/10 text-white rounded-2xl text-2xl font-black hover:bg-zinc-800">OPEN ZOOM</a>
          </div>
        </Card>

        {/* 6. 珠心算 */}
        <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] p-12 hover:border-emerald-500/30 transition-all shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            <div className="flex items-center gap-8">
              <div className="p-6 bg-emerald-500/10 rounded-3xl"><Binary className="w-12 h-12 text-emerald-500" /></div>
              <h2 className="text-4xl font-black tracking-tight uppercase">Abacus Mind</h2>
            </div>
            <a href="https://meet.google.com/znu-vmds-fxi" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-emerald-600 text-white rounded-2xl text-2xl font-black shadow-lg shadow-emerald-600/20">進入教室</a>
          </div>
        </Card>

        {/* 7. 奧數精英 */}
        <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] p-12 hover:border-red-500/30 transition-all shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            <div className="flex items-center gap-8">
              <div className="p-6 bg-red-500/10 rounded-3xl"><Sigma className="w-12 h-12 text-red-500" /></div>
              <h2 className="text-4xl font-black tracking-tight">奧數數學精英課</h2>
            </div>
            <div className="flex flex-col items-center gap-4">
              <a href="https://meet.google.com/wjn-atpi-ifx" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-red-600 text-white rounded-2xl text-2xl font-black">進入 MEET</a>
              {isUnlocked && <div className="text-3xl font-black text-red-500 font-mono bg-zinc-900 px-6 py-2 rounded-xl border border-white/5">{_0xce("omid")}</div>}
            </div>
          </div>
        </Card>

        {/* 8. 慶元數學 */}
        <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] p-12 hover:border-blue-500/30 transition-all shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            <div className="flex items-center gap-8">
              <div className="p-6 bg-blue-500/10 rounded-3xl"><Calculator className="w-12 h-12 text-blue-500" /></div>
              <h2 className="text-4xl font-black tracking-tight">慶元數學課程</h2>
            </div>
            <a href="https://meet.google.com/ddr-hdrt-eru" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-blue-600 text-white rounded-2xl text-2xl font-black">進入教室</a>
          </div>
        </Card>

        {/* 9. 英文理化 */}
        <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] p-12 hover:border-teal-500/30 transition-all shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            <div className="flex items-center gap-8">
              <div className="p-6 bg-teal-500/10 rounded-3xl"><Microscope className="w-12 h-12 text-teal-500" /></div>
              <h2 className="text-4xl font-black tracking-tight">英文理化專題</h2>
            </div>
            <a href="https://meet.google.com/fzm-ecmz-api" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-teal-600 text-white rounded-2xl text-2xl font-black shadow-lg shadow-teal-600/20">開啟連結</a>
          </div>
        </Card>

        {/* 10. Henry 讀書會 */}
        <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] p-12 hover:border-purple-500/30 transition-all shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            <div className="flex items-center gap-8">
              <div className="p-6 bg-purple-500/10 rounded-3xl"><BookOpen className="w-12 h-12 text-purple-500" /></div>
              <h2 className="text-4xl font-black tracking-tight">Henry 讀書會</h2>
            </div>
            <div className="flex flex-col items-end gap-4 w-full md:w-auto">
              <a href="https://course.henrypedia.com/login" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-purple-600 text-white rounded-xl text-xl font-bold">登入頁面</a>
              {isUnlocked && (
                <div className="p-5 bg-zinc-900 rounded-xl border border-white/5 font-mono text-right">
                  <div className="text-zinc-500 text-xs">{_0xce("hu")}</div>
                  <div className="text-xl font-black text-purple-400">{_0xce("hp")}</div>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* 11. Hour of AI */}
        <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] p-12 hover:border-cyan-500/30 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            <div className="flex items-center gap-8">
              <div className="p-6 bg-cyan-500/10 rounded-3xl"><Brain className="w-12 h-12 text-cyan-500" /></div>
              <h2 className="text-4xl font-black tracking-tight text-cyan-400">Hour of AI</h2>
            </div>
            <a href="https://code.org/en-US/hour-of-ai" target="_blank" rel="noopener noreferrer" className="text-white bg-zinc-900 px-10 py-5 rounded-2xl text-xl font-black hover:bg-zinc-800 border border-white/5 flex items-center gap-3">START <ExternalLink /></a>
          </div>
        </Card>

        {/* 12. Kyros AI */}
        <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] p-12 hover:border-cyan-500/30 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            <div className="flex items-center gap-8">
              <div className="p-6 bg-cyan-500/10 rounded-3xl"><Sparkles className="w-12 h-12 text-cyan-500" /></div>
              <h2 className="text-4xl font-black tracking-tight text-cyan-400">Kyros AI Program</h2>
            </div>
            <a href="https://www.kyros.ai/special-program-detail/22130" target="_blank" rel="noopener noreferrer" className="text-white bg-zinc-900 px-10 py-5 rounded-2xl text-xl font-black hover:bg-zinc-800 border border-white/5 flex items-center gap-3">OPEN <ExternalLink /></a>
          </div>
        </Card>

        {/* 13. EDX Global */}
        <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] p-12 hover:border-red-600/30 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            <div className="flex items-center gap-8">
              <div className="p-6 bg-red-600/10 rounded-3xl"><Globe className="w-12 h-12 text-red-600" /></div>
              <h2 className="text-4xl font-black tracking-tight">EDX 全球課堂</h2>
            </div>
            <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-red-600 text-white rounded-2xl text-2xl font-black">VISIT EDX</a>
          </div>
        </Card>

        {/* 14. Funday 英語 */}
        <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] p-12 hover:border-blue-500/30 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            <div className="flex items-center gap-8">
              <div className="p-6 bg-blue-500/10 rounded-3xl"><GraduationCap className="w-12 h-12 text-blue-500" /></div>
              <h2 className="text-4xl font-black tracking-tight uppercase">Funday</h2>
            </div>
            <div className="flex flex-col items-end gap-4 w-full md:w-auto">
              <a href="https://funday.asia/" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-blue-600 text-white rounded-2xl text-2xl font-black">前往平台</a>
              {isUnlocked && (
                <div className="p-5 bg-zinc-900 rounded-xl border border-white/5 font-mono text-right">
                  <div className="text-zinc-500 text-xs">{_0xce("u")}</div>
                  <div className="text-2xl font-black text-blue-400">{_0xce("p")}</div>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* 15. SOP 官網 */}
        <Card className="bg-zinc-950 border-white/5 rounded-[2.5rem] p-12 hover:border-rose-500/30 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            <div className="flex items-center gap-8">
              <div className="p-6 bg-rose-500/10 rounded-3xl"><Layout className="w-12 h-12 text-rose-500" /></div>
              <h2 className="text-4xl font-black tracking-tight">讚美之泉官方網站</h2>
            </div>
            <a href="https://www.sop.org/" target="_blank" rel="noopener noreferrer" className="text-rose-500 text-2xl font-black hover:underline">BROWSE SITE</a>
          </div>
        </Card>

        {/* 退出 */}
        <div className="pt-20 pb-10 flex justify-center">
          <button 
            onClick={() => {
              sessionStorage.removeItem('personal_access');
              router.push('/');
            }} 
            className="text-zinc-800 hover:text-red-500 font-black text-2xl tracking-[0.3em] transition-all uppercase"
          >
            Terminal
          </button>
        </div>
      </div>
    </div>
  );
}
