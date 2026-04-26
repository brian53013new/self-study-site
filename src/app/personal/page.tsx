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
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white selection:bg-blue-600/30 font-sans transition-colors duration-500">
      {/* 頂部 Header */}
      <div className="border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-3xl sticky top-0 z-50">
        <div className="container mx-auto px-8 py-10 flex justify-between items-center max-w-6xl">
          <div>
            <h1 className="text-5xl font-[1000] tracking-tighter bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-zinc-500 bg-clip-text text-transparent italic">
              BRIAN COMMAND
            </h1>
            <p className="text-slate-500 dark:text-zinc-500 font-bold tracking-[0.3em] text-xs mt-2 uppercase">Authorized Access Only</p>
          </div>
          {!isUnlocked ? (
            <Button onClick={() => setShowPrompt(true)} className="bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-slate-800 dark:hover:bg-zinc-200 px-12 py-8 text-xl rounded-full font-black shadow-2xl dark:shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all hover:scale-105">
              <Lock className="w-6 h-6 mr-3" /> 解鎖資料
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setIsUnlocked(false)} className="text-red-500 border-red-200 dark:border-red-500/30 hover:bg-red-50 dark:hover:bg-red-500/10 px-12 py-8 text-xl rounded-full font-black bg-white dark:bg-transparent">
              <Eye className="w-6 h-6 mr-3" /> 鎖定資料
            </Button>
          )}
        </div>
      </div>

      <div className="container mx-auto px-8 py-24 max-w-6xl space-y-24">
        
        {/* 驗證視窗 */}
        {showPrompt && !isUnlocked && (
          <div className="fixed inset-0 bg-slate-900/40 dark:bg-black/98 backdrop-blur-2xl z-[100] flex items-center justify-center p-6">
            <div className="max-w-md w-full p-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-white/20 dark:to-transparent rounded-[3rem]">
              <Card className="bg-white dark:bg-zinc-950 rounded-[2.9rem] p-16 shadow-2xl text-center border-none">
                <h3 className="text-4xl font-black mb-10 text-slate-900 dark:text-white tracking-tighter uppercase">Identity Verify</h3>
                <form onSubmit={handleUnlock} className="space-y-10">
                  <Input
                    type="password"
                    placeholder="CODE"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className={`h-24 text-center text-5xl bg-slate-100 dark:bg-white/5 border-none text-slate-900 dark:text-white rounded-3xl focus:ring-4 focus:ring-blue-600/50 ${passError ? "animate-shake ring-2 ring-red-500" : ""}`}
                    autoFocus
                  />
                  <div className="flex gap-4">
                    <Button type="button" variant="ghost" className="flex-1 h-16 text-2xl text-slate-500 dark:text-zinc-600 hover:bg-slate-100 dark:hover:bg-white/5" onClick={() => setShowPrompt(false)}>取消</Button>
                    <Button type="submit" className="flex-1 h-16 bg-blue-600 hover:bg-blue-700 text-white font-black text-2xl rounded-2xl shadow-xl shadow-blue-600/30">確認</Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        )}

        {/* --- 2:1 華麗大板塊清單 (完整支援深淺色) --- */}

        {/* 1. SOP 會員系統 */}
        <div className="group relative aspect-[2/1] w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-purple-500 rounded-[4rem] blur opacity-20 dark:opacity-10 group-hover:opacity-40 transition duration-1000"></div>
          <Card className="relative h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[4rem] p-16 flex flex-col justify-between overflow-hidden shadow-2xl">
            <div className="flex justify-between items-start">
              <div className="p-6 bg-rose-50 dark:bg-rose-500/10 rounded-[2rem] border border-rose-100 dark:border-rose-500/20"><ShieldCheck className="w-16 h-16 text-rose-500" /></div>
              <Music className="w-24 h-24 text-rose-500 opacity-10 dark:opacity-5" />
            </div>
            <div>
              <h2 className="text-6xl font-black tracking-tighter mb-4 text-slate-900 dark:text-white">SOP 會員系統</h2>
              <p className="text-slate-500 dark:text-zinc-500 text-2xl font-medium mb-10 max-w-2xl">讚美之泉內部管理與資源存取平台。解鎖後可查看專屬登入帳號與加密密碼。</p>
              <div className="flex items-center gap-10">
                <a href="https://members.sop.org/" target="_blank" rel="noopener noreferrer" className="px-16 py-8 bg-rose-600 hover:bg-rose-700 text-white rounded-[2rem] text-3xl font-black shadow-2xl shadow-rose-600/30 transition-all active:scale-95">進入系統</a>
                {isUnlocked && (
                  <div className="flex-1 bg-slate-50 dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 font-mono">
                    <div className="text-slate-400 dark:text-zinc-600 text-sm font-black mb-1 tracking-widest uppercase">Member Credentials</div>
                    <div className="text-3xl text-slate-800 dark:text-white font-bold">{_0xce("su")}</div>
                    <div className="text-5xl font-black text-rose-500 tracking-tighter mt-1">{_0xce("sp")} <span className="text-xs text-slate-400 dark:text-zinc-700 italic ml-2">(或首字大寫)</span></div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* 2. 歷史專題課程 (Zoom) */}
        <div className="group relative aspect-[2/1] w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-[4rem] blur opacity-20 dark:opacity-10 group-hover:opacity-40 transition duration-1000"></div>
          <Card className="relative h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[4rem] p-16 flex flex-col justify-between shadow-2xl">
            <div className="p-6 bg-orange-50 dark:bg-orange-500/10 rounded-[2rem] border border-orange-100 dark:border-orange-500/20 w-fit"><History className="w-16 h-16 text-orange-500" /></div>
            <div>
              <h2 className="text-6xl font-black tracking-tighter mb-4 text-slate-900 dark:text-white uppercase">History Zoom</h2>
              <p className="text-slate-500 dark:text-zinc-500 text-2xl font-medium mb-10">歷史脈絡解析與深度專題討論線上教室。提供即時互動與課堂答疑。</p>
              <div className="flex items-center gap-10">
                <a href="https://us06web.zoom.us/j/5844221701?pwd=7fz5sBze027txb5MxbFYpC5g8cnN9a.1" target="_blank" rel="noopener noreferrer" className="px-20 py-10 bg-orange-600 hover:bg-orange-700 text-white rounded-[2.5rem] text-4xl font-[1000] shadow-2xl shadow-orange-600/30">進入 ZOOM</a>
                {isUnlocked && <div className="text-7xl font-[1000] text-orange-500 font-mono tracking-tighter bg-slate-50 dark:bg-zinc-900 px-12 py-6 rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-inner">{_0xce("zid")}</div>}
              </div>
            </div>
          </Card>
        </div>

        {/* 3. 歷史課教材雲端 */}
        <div className="group relative aspect-[2/1] w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-[4rem] blur opacity-20 dark:opacity-10 group-hover:opacity-40 transition duration-1000"></div>
          <Card className="relative h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[4rem] p-16 flex flex-col justify-between shadow-2xl">
            <div className="p-6 bg-emerald-50 dark:bg-emerald-500/10 rounded-[2rem] border border-emerald-100 dark:border-emerald-500/20 w-fit"><Cloud className="w-16 h-16 text-emerald-500" /></div>
            <div>
              <h2 className="text-6xl font-black tracking-tighter mb-4 text-slate-900 dark:text-white">歷史教材雲端</h2>
              <p className="text-slate-500 dark:text-zinc-500 text-2xl font-medium mb-10">存放歷史課程所有講義、參考文獻、地圖資料及課堂錄影存檔。</p>
              {isUnlocked ? (
                <a href="https://drive.google.com/drive/folders/1D3GTOwFTenNT1I1v-5SPNu3lD597mRsr" target="_blank" rel="noopener noreferrer" className="py-12 bg-slate-50 dark:bg-zinc-900 border-4 border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-500 rounded-[3rem] text-5xl font-[1000] text-center hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all shadow-xl">OPEN GOOGLE DRIVE</a>
              ) : <div className="py-12 border-4 border-dashed border-slate-200 dark:border-white/5 rounded-[3rem] text-center text-slate-400 dark:text-zinc-800 text-4xl font-black tracking-[0.5em] uppercase">Security Locked</div>}
            </div>
          </Card>
        </div>

        {/* 4. 辯論私教課程 */}
        <div className="group relative aspect-[2/1] w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-[4rem] blur opacity-20 dark:opacity-10 group-hover:opacity-40 transition duration-1000"></div>
          <Card className="relative h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[4rem] p-16 flex flex-col justify-between shadow-2xl">
            <div className="p-6 bg-violet-50 dark:bg-violet-500/10 rounded-[2rem] border border-violet-100 dark:border-violet-500/20 w-fit"><MessageSquare className="w-16 h-16 text-violet-500" /></div>
            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <div>
                <h2 className="text-6xl font-black tracking-tighter text-slate-900 dark:text-white">辯論私教課程</h2>
                <p className="text-slate-500 dark:text-zinc-500 text-2xl font-medium mt-4">專為 Brian 設計的高階辯論實戰培訓。包含批判思考與公開演說技巧。</p>
              </div>
              <div className="flex items-center gap-10 min-w-fit">
                {isUnlocked && (
                  <div className="bg-slate-50 dark:bg-zinc-900 p-8 rounded-3xl border border-slate-200 dark:border-white/5 font-mono text-right">
                    <div className="text-slate-400 dark:text-zinc-600 text-sm font-black mb-1 uppercase tracking-widest">Dial-in: {_0xce("dpu")}</div>
                    <div className="text-5xl font-black text-violet-600 dark:text-violet-500 tracking-tighter">PIN: {_0xce("dpin")}</div>
                  </div>
                )}
                <a href="https://meet.google.com/wae-iqur-pqz" target="_blank" rel="noopener noreferrer" className="px-16 py-8 bg-violet-600 hover:bg-violet-700 text-white rounded-[2rem] text-3xl font-black shadow-2xl shadow-violet-600/30">進入教室</a>
              </div>
            </div>
          </Card>
        </div>

        {/* 5. 辯論專題 NGF */}
        <div className="group relative aspect-[2/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/10 rounded-[4rem] p-16 flex flex-col justify-between hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all shadow-2xl">
            <div className="p-6 bg-indigo-50 dark:bg-indigo-500/10 rounded-[2rem] border border-indigo-100 dark:border-transparent w-fit"><Globe className="w-16 h-16 text-indigo-500 dark:text-indigo-400" /></div>
            <h2 className="text-6xl font-black tracking-tighter text-slate-900 dark:text-white">辯論專題課程 (NGF)</h2>
            <p className="text-slate-500 dark:text-zinc-500 text-2xl font-medium max-w-3xl">Nexus Global Forum 國際辯論交流，探討全球時事與多元觀點。</p>
            <a href="https://us06web.zoom.us/j/84058999858?pwd=KdtAd1z6bbROvcrFybThyu3ijODiDW.1" target="_blank" rel="noopener noreferrer" className="py-10 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/10 text-indigo-600 dark:text-indigo-400 rounded-[2.5rem] text-4xl font-[1000] text-center hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all">進入 ZOOM 會議</a>
          </Card>
        </div>

        {/* 6. 珠心算課程 */}
        <div className="group relative aspect-[2/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/10 rounded-[4rem] p-16 flex flex-col justify-between hover:border-emerald-500/30 transition-all shadow-2xl">
            <div className="p-6 bg-emerald-50 dark:bg-emerald-500/10 rounded-[2rem] border border-emerald-100 dark:border-transparent w-fit"><Binary className="w-16 h-16 text-emerald-500" /></div>
            <h2 className="text-7xl font-[1000] tracking-tighter uppercase text-slate-900 dark:text-white">Abacus Mind</h2>
            <p className="text-slate-500 dark:text-zinc-500 text-2xl font-medium">心算與珠算高級培訓。請準備好您的算盤進入教室。</p>
            <a href="https://meet.google.com/znu-vmds-fxi" target="_blank" rel="noopener noreferrer" className="py-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-[2.5rem] text-4xl font-black text-center shadow-xl shadow-emerald-600/30">進入 GOOGLE MEET</a>
          </Card>
        </div>

        {/* 7. 奧數精英課 */}
        <div className="group relative aspect-[2/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/10 rounded-[4rem] p-16 flex flex-col justify-between shadow-2xl hover:border-red-500/30 transition-all">
            <div className="p-6 bg-red-50 dark:bg-red-500/10 rounded-[2rem] border border-red-100 dark:border-transparent w-fit"><Sigma className="w-16 h-16 text-red-500" /></div>
            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <div>
                <h2 className="text-6xl font-black tracking-tighter uppercase text-slate-900 dark:text-white">Olympiad Math</h2>
                <p className="text-slate-500 dark:text-zinc-500 text-2xl font-medium mt-4 tracking-tight">數學競賽邏輯與解題策略。包含深度幾何與代數運算。</p>
              </div>
              <div className="flex items-center gap-10">
                {isUnlocked && <div className="text-6xl font-black text-red-600 dark:text-red-500 font-mono bg-slate-50 dark:bg-zinc-900 px-12 py-6 rounded-[2rem] border border-slate-200 dark:border-white/5 tracking-tighter shadow-inner">{_0xce("omid")}</div>}
                <a href="https://meet.google.com/wjn-atpi-ifx" target="_blank" rel="noopener noreferrer" className="px-16 py-8 bg-red-600 hover:bg-red-700 text-white rounded-[2rem] text-3xl font-black transition-transform active:scale-95 shadow-xl shadow-red-600/30">進入教室</a>
              </div>
            </div>
          </Card>
        </div>

        {/* 8. 慶元數學課程 */}
        <div className="group relative aspect-[2.1/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/10 rounded-[4rem] p-16 flex flex-col justify-between hover:border-blue-500/30 transition-all shadow-2xl">
            <div className="p-6 bg-blue-50 dark:bg-blue-500/10 rounded-[2rem] border border-blue-100 dark:border-transparent w-fit"><Calculator className="w-16 h-16 text-blue-500" /></div>
            <h2 className="text-6xl font-black tracking-tight text-slate-900 dark:text-white">慶元數學系統課程</h2>
            <p className="text-slate-500 dark:text-zinc-500 text-2xl font-medium">系統化數學觀念建立與解題訓練。點擊下方進入視訊教室。</p>
            <a href="https://meet.google.com/ddr-hdrt-eru" target="_blank" rel="noopener noreferrer" className="py-10 bg-blue-600 hover:bg-blue-700 text-white rounded-[2.5rem] text-4xl font-black text-center shadow-xl shadow-blue-600/30">進入視訊教室</a>
          </Card>
        </div>

        {/* 9. 英文理化專題 */}
        <div className="group relative aspect-[2.1/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/10 rounded-[4rem] p-16 flex flex-col justify-between hover:border-teal-500/30 transition-all shadow-2xl">
            <div className="p-6 bg-teal-50 dark:bg-teal-500/10 rounded-[2rem] border border-teal-100 dark:border-transparent w-fit"><Microscope className="w-16 h-16 text-teal-500" /></div>
            <h2 className="text-6xl font-black tracking-tighter text-slate-900 dark:text-white">英文理化專題課程</h2>
            <p className="text-slate-500 dark:text-zinc-500 text-2xl font-medium">全英文環境探討科學概念，強化專業英文詞彙與邏輯表達。</p>
            <a href="https://meet.google.com/fzm-ecmz-api" target="_blank" rel="noopener noreferrer" className="py-10 bg-teal-600 hover:bg-teal-700 text-white rounded-[2.5rem] text-4xl font-black text-center shadow-xl shadow-teal-600/30">OPEN MEET</a>
          </Card>
        </div>

        {/* 10. Henry 讀書會 */}
        <div className="group relative aspect-[2.1/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/10 rounded-[4rem] p-16 flex flex-col justify-between shadow-2xl">
            <div className="p-6 bg-purple-50 dark:bg-purple-500/10 rounded-[2rem] border border-purple-100 dark:border-transparent w-fit"><BookOpen className="w-16 h-16 text-purple-500" /></div>
            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <div>
                <h2 className="text-6xl font-black tracking-tight uppercase text-slate-900 dark:text-white">Henry Club</h2>
                <p className="text-slate-500 dark:text-zinc-500 text-2xl font-medium mt-4">專屬讀書會平台。解鎖以查看登入帳號與密碼。</p>
              </div>
              <div className="flex items-center gap-10">
                <a href="https://course.henrypedia.com/login" target="_blank" rel="noopener noreferrer" className="px-16 py-8 bg-purple-600 hover:bg-purple-700 text-white rounded-[2rem] text-3xl font-black shadow-xl shadow-purple-600/30">前往登入</a>
                {isUnlocked && (
                  <div className="bg-slate-50 dark:bg-zinc-900 p-8 rounded-3xl border border-slate-200 dark:border-white/5 font-mono text-center min-w-[300px]">
                    <div className="text-slate-400 dark:text-zinc-600 text-sm font-black mb-1 uppercase tracking-widest">Login ID: {_0xce("hu")}</div>
                    <div className="text-4xl font-black text-purple-600 dark:text-purple-400 tracking-tighter">PW: {_0xce("hp")}</div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* 11. Hour of AI */}
        <div className="group relative aspect-[2.3/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[4rem] p-16 flex flex-col items-center justify-center hover:border-cyan-500/30 transition-all text-center shadow-2xl">
            <div className="p-8 bg-cyan-50 dark:bg-cyan-500/10 rounded-full mb-10 border border-cyan-100 dark:border-transparent"><Brain className="w-20 h-20 text-cyan-500" /></div>
            <h2 className="text-7xl font-[1000] text-slate-900 dark:text-white mb-10 uppercase tracking-tighter">Hour of AI</h2>
            <a href="https://code.org/en-US/hour-of-ai" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 text-4xl font-black hover:underline flex items-center gap-6 transition-all hover:scale-105">START STUDY <ExternalLink className="w-12 h-12" /></a>
          </Card>
        </div>

        {/* 12. Kyros AI Program */}
        <div className="group relative aspect-[2.3/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[4rem] p-16 flex flex-col items-center justify-center hover:border-cyan-500/30 transition-all text-center shadow-2xl">
            <div className="p-8 bg-cyan-50 dark:bg-cyan-500/10 rounded-full mb-10 border border-cyan-100 dark:border-transparent"><Sparkles className="w-20 h-20 text-cyan-500" /></div>
            <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-10 uppercase tracking-tight">Kyros AI Special Program</h2>
            <a href="https://www.kyros.ai/special-program-detail/22130" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 text-4xl font-black hover:underline flex items-center gap-6 transition-all">VISIT PROGRAM <ExternalLink className="w-12 h-12" /></a>
          </Card>
        </div>

        {/* 13. EDX Global */}
        <div className="group relative aspect-[2.3/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[4rem] p-16 flex flex-col items-center justify-center hover:border-red-600/30 transition-all text-center shadow-2xl">
            <div className="p-10 bg-red-50 dark:bg-red-600/10 rounded-full mb-10 border border-red-100 dark:border-transparent"><Globe className="w-24 h-24 text-red-600" /></div>
            <h2 className="text-7xl font-[1000] text-slate-900 dark:text-white mb-12 tracking-tighter uppercase">EDX Global</h2>
            <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" className="px-24 py-12 bg-red-600 text-white rounded-[3rem] text-4xl font-[1000] shadow-2xl shadow-red-600/30 transition-all hover:bg-red-700 active:scale-95">VISIT OFFICIAL SITE</a>
          </Card>
        </div>

        {/* 14. Funday 英語 */}
        <div className="group relative aspect-[2/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/10 rounded-[4rem] p-16 flex flex-col justify-between shadow-2xl">
            <div className="p-8 bg-blue-50 dark:bg-blue-500/10 rounded-[2rem] w-fit border border-blue-100 dark:border-blue-500/20"><GraduationCap className="w-20 h-20 text-blue-500" /></div>
            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <div>
                <h2 className="text-8xl font-[1000] tracking-tighter uppercase text-slate-900 dark:text-white italic">Funday</h2>
                <p className="text-slate-500 dark:text-zinc-500 text-3xl font-medium mt-4 uppercase tracking-[0.2em]">English Learning</p>
              </div>
              <div className="flex items-center gap-10">
                <a href="https://funday.asia/" target="_blank" rel="noopener noreferrer" className="px-20 py-10 bg-blue-600 hover:bg-blue-700 text-white rounded-[2.5rem] text-4xl font-black shadow-2xl shadow-blue-600/30">前往平台</a>
                {isUnlocked && (
                  <div className="bg-slate-50 dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 font-mono text-center">
                    <div className="text-slate-400 dark:text-zinc-600 text-sm font-black uppercase mb-2 tracking-widest">ID: {_0xce("u")}</div>
                    <div className="text-5xl font-black text-blue-600 dark:text-blue-400 tracking-tighter">{_0xce("p")}</div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* 15. SOP 官方網站 */}
        <div className="group relative aspect-[2.2/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/10 rounded-[4rem] p-16 flex flex-col items-center justify-center hover:border-rose-500/30 transition-all text-center shadow-2xl">
            <div className="p-10 bg-rose-50 dark:bg-rose-500/10 rounded-full mb-10 border border-rose-100 dark:border-rose-500/20"><Layout className="w-24 h-24 text-rose-500" /></div>
            <h2 className="text-7xl font-[1000] text-slate-900 dark:text-white mb-10 uppercase tracking-tighter">SOP Official Site</h2>
            <a href="https://www.sop.org/" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-500 text-4xl font-black hover:underline tracking-tight transition-all">BROWSE WEBSITE</a>
          </Card>
        </div>

        {/* 底部退出按鈕 */}
        <div className="mt-80 mb-40 flex flex-col items-center gap-12">
          <button 
            onClick={() => {
              sessionStorage.removeItem('personal_access');
              router.push('/');
            }} 
            className="text-slate-400 dark:text-zinc-800 hover:text-red-500 dark:hover:text-red-500 font-[1000] text-6xl tracking-widest transition-all uppercase italic"
          >
            TERMINAL EXIT
          </button>
          <div className="flex items-center gap-8 text-slate-300 dark:text-zinc-900 font-black tracking-[1.5em] text-xs">
            <span>SECURE</span>
            <div className="w-3 h-3 bg-slate-300 dark:bg-zinc-900 rounded-full" />
            <span>ENCRYPTED</span>
            <div className="w-3 h-3 bg-slate-300 dark:bg-zinc-900 rounded-full" />
            <span>BRIAN COMMAND</span>
          </div>
        </div>
      </div>
    </div>
  );
}
