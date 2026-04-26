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
    <div className="min-h-screen bg-black text-zinc-100 pb-32">
      {/* 頂部導覽 */}
      <div className="border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl sticky top-0 z-40">
        <div className="container mx-auto px-6 py-8 flex justify-between items-center">
          <h1 className="text-3xl font-black tracking-tighter text-white">個人學習系統</h1>
          {!isUnlocked ? (
            <Button onClick={() => setShowPrompt(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-black text-lg h-14 px-10 rounded-2xl shadow-lg shadow-blue-600/20">
              <ShieldCheck className="w-6 h-6 mr-2" /> 解鎖資料
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setIsUnlocked(false)} className="text-red-500 border-red-500/20 hover:bg-red-500/10 h-14 px-10 rounded-2xl text-lg font-bold">
              <Lock className="w-6 h-6 mr-2" /> 鎖定資料
            </Button>
          )}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 max-w-6xl">
        
        {/* 驗證視窗 */}
        {showPrompt && !isUnlocked && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-6">
            <Card className="max-w-md w-full bg-zinc-900 border-white/10 rounded-[2.5rem] p-12 shadow-2xl">
              <h3 className="text-3xl font-black mb-8 text-center text-white">身份驗證</h3>
              <form onSubmit={handleUnlock} className="space-y-8">
                <Input
                  type="password"
                  placeholder="Enter Password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className={`h-16 text-center text-2xl bg-black/50 border-white/10 text-white rounded-2xl focus:ring-4 focus:ring-blue-600/50 ${passError ? "border-red-500 animate-shake" : ""}`}
                  autoFocus
                />
                <div className="flex gap-4">
                  <Button type="button" variant="ghost" className="flex-1 h-14 text-xl text-zinc-500" onClick={() => setShowPrompt(false)}>取消</Button>
                  <Button type="submit" className="flex-1 h-14 bg-blue-600 hover:bg-blue-700 text-white text-xl font-black rounded-2xl">確認</Button>
                </div>
              </form>
            </Card>
          </div>
        )}

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          
          {/* 1. SOP 會員系統 */}
          <Card className="bg-zinc-950 border-rose-500/10 rounded-[2rem] p-10 hover:border-rose-500/30 transition-all shadow-xl group">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-rose-500/10 rounded-2xl group-hover:scale-110 transition-transform"><Music className="w-12 h-12 text-rose-500" /></div>
              <h2 className="text-3xl font-black text-white">SOP 會員系統</h2>
            </div>
            <div className="space-y-6">
              <Button className="w-full py-8 text-2xl font-black bg-rose-600 hover:bg-rose-700 text-white rounded-2xl shadow-lg shadow-rose-600/20" asChild>
                <a href="https://members.sop.org/" target="_blank" rel="noopener noreferrer">進入系統 <ExternalLink className="ml-3" /></a>
              </Button>
              {isUnlocked ? (
                <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5 space-y-4 font-mono">
                  <div className="flex flex-col"><span className="text-zinc-500 text-xs font-bold uppercase mb-1">Account Email</span><span className="text-xl text-white">{_0xce("su")}</span></div>
                  <div className="h-px bg-white/5" />
                  <div className="flex flex-col"><span className="text-zinc-500 text-xs font-bold uppercase mb-1">Password</span><span className="text-3xl font-black text-rose-500 tracking-tighter">{_0xce("sp")}</span></div>
                </div>
              ) : <div className="h-32 border-2 border-dashed border-white/5 rounded-2xl flex items-center justify-center text-zinc-700 font-bold italic">Credentials Encrypted</div>}
            </div>
          </Card>

          {/* 2. 歷史 Zoom */}
          <Card className="bg-zinc-950 border-orange-500/10 rounded-[2rem] p-10 hover:border-orange-500/30 transition-all shadow-xl group">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-orange-500/10 rounded-2xl group-hover:scale-110 transition-transform"><History className="w-12 h-12 text-orange-500" /></div>
              <h2 className="text-3xl font-black text-white">歷史專題課程</h2>
            </div>
            <div className="space-y-6">
              <Button className="w-full py-8 text-2xl font-black bg-orange-600 hover:bg-orange-700 text-white rounded-2xl" asChild>
                <a href="https://us06web.zoom.us/j/5844221701?pwd=7fz5sBze027txb5MxbFYpC5g8cnN9a.1" target="_blank" rel="noopener noreferrer">進入 Zoom</a>
              </Button>
              {isUnlocked && (
                <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5 text-center">
                  <span className="text-zinc-500 text-xs font-bold uppercase block mb-2 tracking-widest">Meeting ID</span>
                  <div className="text-5xl font-[1000] text-orange-500 font-mono tracking-tighter">{_0xce("zid")}</div>
                </div>
              )}
            </div>
          </Card>

          {/* 3. 歷史雲端 */}
          <Card className="bg-zinc-950 border-emerald-500/10 rounded-[2rem] p-10 hover:border-emerald-500/30 transition-all shadow-xl group">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-emerald-500/10 rounded-2xl group-hover:scale-110 transition-transform"><Cloud className="w-12 h-12 text-emerald-500" /></div>
              <h2 className="text-3xl font-black text-white">歷史教材雲端</h2>
            </div>
            {isUnlocked ? (
              <a href="https://drive.google.com/drive/folders/1D3GTOwFTenNT1I1v-5SPNu3lD597mRsr" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center justify-center gap-4 py-8 bg-zinc-900 text-emerald-500 text-3xl font-black rounded-2xl border-2 border-emerald-500/20 hover:bg-zinc-800 transition-all">
                開啟 Drive <ExternalLink className="w-8 h-8" />
              </a>
            ) : <div className="h-28 border-2 border-dashed border-white/5 rounded-2xl flex items-center justify-center text-zinc-700 font-bold italic">Access Locked</div>}
          </Card>

          {/* 4. 辯論私教 */}
          <Card className="bg-zinc-950 border-violet-500/10 rounded-[2rem] p-10 hover:border-violet-500/30 transition-all shadow-xl group">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-violet-500/10 rounded-2xl group-hover:scale-110 transition-transform"><MessageSquare className="w-12 h-12 text-violet-500" /></div>
              <h2 className="text-3xl font-black text-white">辯論私教課程</h2>
            </div>
            <div className="space-y-6">
              <Button className="w-full py-8 text-2xl font-black bg-violet-600 hover:bg-violet-700 text-white rounded-2xl" asChild>
                <a href="https://meet.google.com/wae-iqur-pqz" target="_blank" rel="noopener noreferrer">進入教室</a>
              </Button>
              {isUnlocked && (
                <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5 font-mono">
                  <div className="text-zinc-500 text-xs mb-1 uppercase font-bold">Dial: {_0xce("dpu")}</div>
                  <div className="text-4xl font-black text-violet-500 tracking-tighter">PIN: {_0xce("dpin")}</div>
                </div>
              )}
            </div>
          </Card>

          {/* 5. 辯論 NGF */}
          <Card className="bg-zinc-950 border-indigo-500/10 rounded-[2rem] p-10 hover:border-indigo-500/30 transition-all shadow-xl group">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-indigo-500/10 rounded-2xl group-hover:scale-110 transition-transform"><Globe className="w-12 h-12 text-indigo-400" /></div>
              <h2 className="text-3xl font-black text-white">辯論專題 (NGF)</h2>
            </div>
            <a href="https://us06web.zoom.us/j/84058999858?pwd=KdtAd1z6bbROvcrFybThyu3ijODiDW.1" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center py-8 bg-zinc-900 text-indigo-400 text-2xl font-black rounded-2xl border border-white/5 hover:bg-zinc-800">
              OPEN ZOOM
            </a>
          </Card>

          {/* 6. 珠心算 */}
          <Card className="bg-zinc-950 border-emerald-500/10 rounded-[2rem] p-10 hover:border-emerald-500/30 transition-all shadow-xl group">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-emerald-500/10 rounded-2xl group-hover:scale-110 transition-transform"><Binary className="w-12 h-12 text-emerald-500" /></div>
              <h2 className="text-3xl font-black text-white">珠心算課程</h2>
            </div>
            <Button className="w-full py-8 text-2xl font-black bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl" asChild>
              <a href="https://meet.google.com/znu-vmds-fxi" target="_blank" rel="noopener noreferrer">進入 Meet</a>
            </Button>
          </Card>

          {/* 7. 奧數精英 */}
          <Card className="bg-zinc-950 border-red-500/10 rounded-[2rem] p-10 hover:border-red-500/30 transition-all shadow-xl group">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-red-500/10 rounded-2xl group-hover:scale-110 transition-transform"><Sigma className="w-12 h-12 text-red-500" /></div>
              <h2 className="text-3xl font-black text-white">奧數精英課</h2>
            </div>
            <div className="space-y-6">
              <Button className="w-full py-8 text-2xl font-black bg-red-600 hover:bg-red-700 text-white rounded-2xl" asChild>
                <a href="https://meet.google.com/wjn-atpi-ifx" target="_blank" rel="noopener noreferrer">進入教室</a>
              </Button>
              {isUnlocked && <div className="p-6 bg-zinc-900 rounded-2xl text-center text-4xl font-black text-red-500 font-mono tracking-tighter">Code: {_0xce("omid")}</div>}
            </div>
          </Card>

          {/* 8. 慶元數學 */}
          <Card className="bg-zinc-950 border-blue-500/10 rounded-[2rem] p-10 hover:border-blue-500/30 transition-all shadow-xl group">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-blue-500/10 rounded-2xl group-hover:scale-110 transition-transform"><Calculator className="w-12 h-12 text-blue-500" /></div>
              <h2 className="text-3xl font-black text-white">慶元數學課程</h2>
            </div>
            <a href="https://meet.google.com/ddr-hdrt-eru" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center py-8 bg-blue-600 text-white text-2xl font-black rounded-2xl hover:bg-blue-700">進入 Google Meet</a>
          </Card>

          {/* 9. 英文理化 */}
          <Card className="bg-zinc-950 border-teal-500/10 rounded-[2rem] p-10 hover:border-teal-500/30 transition-all shadow-xl group">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-teal-500/10 rounded-2xl group-hover:scale-110 transition-transform"><Microscope className="w-12 h-12 text-teal-500" /></div>
              <h2 className="text-3xl font-black text-white">英文理化專題</h2>
            </div>
            <a href="https://meet.google.com/fzm-ecmz-api" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center py-8 bg-teal-600 text-white text-2xl font-black rounded-2xl hover:bg-teal-700 shadow-lg shadow-teal-600/10">開啟 Meet 連結</a>
          </Card>

          {/* 10. Henry 讀書會 */}
          <Card className="bg-zinc-950 border-purple-500/10 rounded-[2rem] p-10 hover:border-purple-500/30 transition-all shadow-xl group">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-purple-500/10 rounded-2xl group-hover:scale-110 transition-transform"><BookOpen className="w-12 h-12 text-purple-500" /></div>
              <h2 className="text-3xl font-black text-white">Henry 讀書會</h2>
            </div>
            <div className="space-y-6">
              <Button className="w-full py-8 text-2xl font-black bg-purple-600 hover:bg-purple-700 text-white rounded-2xl" asChild>
                <a href="https://course.henrypedia.com/login" target="_blank" rel="noopener noreferrer">登入頁面</a>
              </Button>
              {isUnlocked && (
                <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5 space-y-2 font-mono text-center">
                  <div className="text-zinc-500 text-sm">ID: {_0xce("hu")}</div>
                  <div className="text-2xl font-black text-purple-400">PW: {_0xce("hp")}</div>
                </div>
              )}
            </div>
          </Card>

          {/* 11. Hour of AI */}
          <Card className="bg-zinc-950 border-white/5 rounded-[2rem] p-10 flex flex-col justify-between items-center text-center">
            <div className="p-6 bg-cyan-500/10 rounded-2xl mb-6"><Brain className="w-16 h-16 text-cyan-500" /></div>
            <h2 className="text-3xl font-black text-white mb-8">Hour of AI</h2>
            <a href="https://code.org/en-US/hour-of-ai" target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-xl font-bold hover:underline flex items-center gap-2">START STUDY <ExternalLink /></a>
          </Card>

          {/* 12. Kyros AI */}
          <Card className="bg-zinc-950 border-white/5 rounded-[2rem] p-10 flex flex-col justify-between items-center text-center">
            <div className="p-6 bg-cyan-500/10 rounded-2xl mb-6"><Sparkles className="w-16 h-16 text-cyan-500" /></div>
            <h2 className="text-3xl font-black text-white mb-8 leading-tight">Kyros AI Special Program</h2>
            <a href="https://www.kyros.ai/special-program-detail/22130" target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-xl font-bold hover:underline flex items-center gap-2">OPEN PROGRAM <ExternalLink /></a>
          </Card>

          {/* 13. EDX Global */}
          <Card className="bg-zinc-950 border-white/5 rounded-[2rem] p-10 flex flex-col justify-between items-center text-center">
            <div className="p-6 bg-red-600/10 rounded-2xl mb-6"><Globe className="w-16 h-16 text-red-600" /></div>
            <h2 className="text-3xl font-black text-white mb-8">EDX Global Learning</h2>
            <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-10 py-4 rounded-xl font-black text-xl hover:bg-red-700">VISIT SITE</a>
          </Card>

          {/* 14. Funday 英語 */}
          <Card className="bg-zinc-950 border-blue-500/10 rounded-[2rem] p-10 hover:border-blue-500/30 transition-all group shadow-xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-blue-500/10 rounded-2xl group-hover:scale-110 transition-transform"><GraduationCap className="w-12 h-12 text-blue-500" /></div>
              <h2 className="text-3xl font-black text-white">Funday 英語學習</h2>
            </div>
            <div className="space-y-6">
              <a href="https://funday.asia/" target="_blank" rel="noopener noreferrer" className="block w-full py-6 bg-blue-600 hover:bg-blue-700 text-white text-center font-black text-2xl rounded-2xl">前往平台</a>
              {isUnlocked && (
                <div className="p-6 bg-zinc-900 rounded-2xl font-mono text-center space-y-2">
                  <div className="text-zinc-500 text-sm">{_0xce("u")}</div>
                  <div className="text-3xl font-black text-blue-400 tracking-tighter">{_0xce("p")}</div>
                </div>
              )}
            </div>
          </Card>

          {/* 15. SOP 官方網站 */}
          <Card className="bg-zinc-950 border-rose-500/10 rounded-[2rem] p-10 hover:border-rose-500/30 transition-all flex flex-col items-center text-center">
            <div className="p-6 bg-rose-500/10 rounded-2xl mb-6"><Layout className="w-16 h-16 text-rose-500" /></div>
            <h2 className="text-3xl font-black text-white mb-8">SOP 官方網站</h2>
            <a href="https://www.sop.org/" target="_blank" rel="noopener noreferrer" className="text-rose-500 text-xl font-bold hover:underline">BROWSE WEBSITE</a>
          </Card>

        </div>
      </div>

      <footer className="mt-40 py-20 border-t border-white/5 text-center">
        <button 
          onClick={() => {
            sessionStorage.removeItem('personal_access');
            router.push('/');
          }} 
          className="text-zinc-800 hover:text-red-500 font-black transition-all text-2xl tracking-[0.2em] uppercase"
        >
          Logout System
        </button>
      </footer>
    </div>
  );
}
