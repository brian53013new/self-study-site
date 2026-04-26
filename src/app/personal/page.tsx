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
    return <div className="min-h-screen bg-white dark:bg-black" />;
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
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white transition-colors duration-500 pb-40 font-sans">
      {/* 頂部導覽列 */}
      <div className="border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-3xl sticky top-0 z-50">
        <div className="container mx-auto px-10 py-8 flex justify-between items-center max-w-7xl">
          <div>
            <h1 className="text-3xl font-black tracking-tighter">PERSONAL SYSTEM</h1>
            <p className="text-[10px] text-slate-400 dark:text-zinc-600 tracking-[0.4em] font-bold uppercase mt-1">Direct Access Dashboard</p>
          </div>
          {!isUnlocked ? (
            <Button onClick={() => setShowPrompt(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl px-10 h-14 shadow-xl transition-all hover:scale-105 active:scale-95">
              <ShieldCheck className="w-5 h-5 mr-2" /> 解鎖資料
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setIsUnlocked(false)} className="text-red-500 border-red-200 hover:bg-red-500/5 h-14 px-10 rounded-2xl font-bold">
              <Lock className="w-5 h-5 mr-2" /> 鎖定資料
            </Button>
          )}
        </div>
      </div>

      <div className="container mx-auto px-10 py-20 max-w-7xl space-y-20">
        
        {/* 驗證視窗 */}
        {showPrompt && !isUnlocked && (
          <div className="fixed inset-0 bg-slate-900/60 dark:bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-6">
            <Card className="max-w-md w-full bg-white dark:bg-zinc-950 border-none rounded-[3rem] p-16 shadow-2xl text-center">
              <h3 className="text-2xl font-black mb-8 tracking-tight text-slate-900 dark:text-white">身份驗證</h3>
              <form onSubmit={handleUnlock} className="space-y-8">
                <Input
                  type="password"
                  placeholder="PASSWORD"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className={`h-16 text-center text-2xl bg-slate-100 dark:bg-white/5 border-none rounded-2xl text-slate-900 dark:text-white ${passError ? "animate-shake ring-2 ring-red-500" : ""}`}
                  autoFocus
                />
                <div className="flex gap-4">
                  <Button type="button" variant="ghost" className="flex-1 h-14 text-slate-400 dark:text-zinc-600" onClick={() => setShowPrompt(false)}>取消</Button>
                  <Button type="submit" className="flex-1 h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl">確認</Button>
                </div>
              </form>
            </Card>
          </div>
        )}

        {/* --- 第一類別：官方網站與即時進入 (Classrooms & Portals) --- */}

        {/* 1. SOP 官方網站 */}
        <div className="group relative aspect-[2.8/1] w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-rose-700 rounded-[4rem] blur opacity-5 group-hover:opacity-20 transition duration-1000"></div>
          <Card className="relative h-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/5 rounded-[4rem] p-16 flex flex-col items-center justify-center text-center shadow-xl">
            <div className="p-8 bg-rose-50 dark:bg-rose-500/10 rounded-full mb-8 border border-rose-100 dark:border-rose-500/20"><Layout className="w-16 h-16 text-rose-500" /></div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-6">SOP Official Website</h2>
            <a href="https://www.sop.org/" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 text-3xl font-black hover:underline transition-all tracking-tight">瀏覽官方網站</a>
          </Card>
        </div>

        {/* 2. SOP 會員系統 */}
        <div className="group relative aspect-[2.5/1] w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-purple-600 rounded-[4rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
          <Card className="relative h-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/5 rounded-[4rem] p-16 flex flex-col justify-between shadow-xl">
            <div className="flex justify-between items-start">
              <div className="p-5 bg-rose-500/10 rounded-2xl border border-rose-500/20"><ShieldCheck className="w-12 h-12 text-rose-500" /></div>
              <Music className="w-16 h-16 text-rose-500 opacity-5" />
            </div>
            <div className="flex justify-between items-end gap-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">SOP 會員登入</h2>
                <p className="text-slate-500 dark:text-zinc-500 text-lg max-w-xl">讚美之泉內部管理平台。解鎖後可獲取登入資訊。</p>
              </div>
              <div className="flex items-center gap-8">
                {isUnlocked && (
                  <div className="bg-slate-50 dark:bg-zinc-900 p-6 rounded-[2rem] border border-slate-200 dark:border-white/5 font-mono text-left">
                    <div className="text-slate-400 dark:text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Access Info</div>
                    <div className="text-lg text-slate-800 dark:text-white font-bold">{_0xce("su")}</div>
                    <div className="text-3xl font-black text-rose-500 tracking-tighter mt-1">{_0xce("sp")}</div>
                  </div>
                )}
                <a href="https://members.sop.org/" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl text-xl font-bold shadow-lg shadow-rose-600/30 transition-all active:scale-95">進入會員系統</a>
              </div>
            </div>
          </Card>
        </div>

        {/* 3. 歷史專題課程 (Zoom) */}
        <div className="group relative aspect-[2.5/1] w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-[4rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
          <Card className="relative h-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/5 rounded-[4rem] p-16 flex flex-col justify-between shadow-xl">
            <div className="p-5 bg-orange-50 dark:bg-orange-500/10 rounded-2xl border border-orange-100 dark:border-orange-500/20 w-fit"><History className="w-12 h-12 text-orange-500" /></div>
            <div className="flex justify-between items-end gap-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">History Zoom</h2>
                <p className="text-slate-500 dark:text-zinc-500 text-lg">即時互動歷史課程線上教室。</p>
              </div>
              <div className="flex items-center gap-8">
                {isUnlocked && <div className="text-5xl font-black text-orange-500 font-mono bg-slate-50 dark:bg-zinc-900 px-10 py-4 rounded-2xl border border-slate-200 dark:border-white/5 tracking-tighter">{_0xce("zid")}</div>}
                <a href="https://us06web.zoom.us/j/5844221701?pwd=7fz5sBze027txb5MxbFYpC5g8cnN9a.1" target="_blank" rel="noopener noreferrer" className="px-14 py-6 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl text-2xl font-black shadow-xl">進入會議室</a>
              </div>
            </div>
          </Card>
        </div>

        {/* 4. 歷史教材雲端 */}
        <div className="group relative aspect-[2.5/1] w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-[4rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
          <Card className="relative h-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/5 rounded-[4rem] p-16 flex flex-col justify-between shadow-xl">
            <div className="p-5 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl border border-emerald-100 dark:border-emerald-500/20 w-fit"><Cloud className="w-12 h-12 text-emerald-500" /></div>
            <div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">歷史課程雲端教材</h2>
              <p className="text-slate-500 dark:text-zinc-500 text-lg mb-10">存放所有講義、文獻及課堂錄影。</p>
              {isUnlocked ? (
                <a href="https://drive.google.com/drive/folders/1D3GTOwFTenNT1I1v-5SPNu3lD597mRsr" target="_blank" rel="noopener noreferrer" className="block w-full py-8 bg-slate-100 dark:bg-zinc-900 border-2 border-emerald-500/20 text-emerald-600 dark:text-emerald-500 rounded-[2rem] text-3xl font-black text-center transition-all hover:bg-emerald-50 dark:hover:bg-zinc-800 shadow-xl">開啟 GOOGLE DRIVE</a>
              ) : <div className="py-10 border-4 border-dashed border-slate-200 dark:border-white/5 rounded-[2rem] text-center text-slate-300 dark:text-zinc-800 text-3xl font-black tracking-[0.4em] uppercase">Access Locked</div>}
            </div>
          </Card>
        </div>

        {/* 5. 辯論私教課程 */}
        <div className="group relative aspect-[2.5/1] w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-[4rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
          <Card className="relative h-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/5 rounded-[4rem] p-16 flex flex-col justify-between shadow-xl">
            <div className="p-5 bg-violet-50 dark:bg-violet-500/10 rounded-2xl border border-violet-100 dark:border-violet-500/20 w-fit"><MessageSquare className="w-12 h-12 text-violet-500" /></div>
            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <div>
                <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">辯論私教課程 (Brian)</h2>
                <p className="text-slate-500 dark:text-zinc-500 text-lg mt-4">高階辯論實戰培訓入口。</p>
              </div>
              <div className="flex items-center gap-8">
                {isUnlocked && (
                  <div className="bg-slate-50 dark:bg-zinc-900 p-6 rounded-2xl border border-slate-200 dark:border-white/5 font-mono text-right min-w-[240px]">
                    <div className="text-slate-400 dark:text-zinc-600 text-[10px] font-black mb-1 uppercase tracking-widest">Dial: {_0xce("dpu")}</div>
                    <div className="text-3xl font-black text-violet-600 dark:text-violet-500 tracking-tighter">PIN: {_0xce("dpin")}</div>
                  </div>
                )}
                <a href="https://meet.google.com/wae-iqur-pqz" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-violet-600 hover:bg-violet-700 text-white rounded-2xl text-2xl font-black shadow-xl">進入教室</a>
              </div>
            </div>
          </Card>
        </div>

        {/* 6. 辯論專題 NGF */}
        <div className="group relative aspect-[2.5/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/10 rounded-[4rem] p-16 flex flex-col justify-between hover:border-indigo-500/30 transition-all shadow-xl">
            <div className="p-6 bg-indigo-50 dark:bg-indigo-500/10 rounded-[2rem] border border-indigo-100 dark:border-transparent w-fit"><Globe className="w-16 h-16 text-indigo-500 dark:text-indigo-400" /></div>
            <h2 className="text-6xl font-black tracking-tighter text-slate-900 dark:text-white">辯論專題課程 (NGF)</h2>
            <p className="text-slate-500 dark:text-zinc-500 text-lg">國際辯論交流，進入即時會議室。</p>
            <a href="https://us06web.zoom.us/j/84058999858?pwd=KdtAd1z6bbROvcrFybThyu3ijODiDW.1" target="_blank" rel="noopener noreferrer" className="py-10 bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-white/10 text-indigo-600 dark:text-indigo-400 rounded-[2.5rem] text-3xl font-black text-center transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800">進入 ZOOM 會議</a>
          </Card>
        </div>

        {/* 7. 珠心算課程 */}
        <div className="group relative aspect-[2.5/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/10 rounded-[4rem] p-16 flex flex-col justify-between hover:border-emerald-500/30 transition-all shadow-xl">
            <div className="p-6 bg-emerald-50 dark:bg-emerald-500/10 rounded-[2rem] border border-emerald-100 dark:border-transparent w-fit"><Binary className="w-16 h-16 text-emerald-500" /></div>
            <h2 className="text-7xl font-[1000] tracking-tighter uppercase text-slate-900 dark:text-white">Abacus Mind</h2>
            <p className="text-slate-500 dark:text-zinc-500 text-lg">高級珠算培訓視訊連結。</p>
            <a href="https://meet.google.com/znu-vmds-fxi" target="_blank" rel="noopener noreferrer" className="py-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-[2.5rem] text-4xl font-black text-center shadow-xl shadow-emerald-600/30">進入 GOOGLE MEET</a>
          </Card>
        </div>

        {/* 8. 奧數精英課 */}
        <div className="group relative aspect-[2.5/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/10 rounded-[4rem] p-16 flex flex-col justify-between shadow-2xl hover:border-red-500/30 transition-all">
            <div className="p-6 bg-red-50 dark:bg-red-500/10 rounded-[2rem] border border-red-100 dark:border-transparent w-fit"><Sigma className="w-16 h-16 text-red-500" /></div>
            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <div className="space-y-4">
                <h2 className="text-6xl font-black tracking-tighter uppercase text-slate-900 dark:text-white">Olympiad Math</h2>
                <p className="text-slate-500 dark:text-zinc-500 text-lg">數學競賽精英培訓視訊入口。</p>
              </div>
              <div className="flex items-center gap-10">
                {isUnlocked && <div className="text-5xl font-black text-red-600 dark:text-red-500 font-mono bg-slate-50 dark:bg-zinc-900 px-10 py-5 rounded-3xl border border-slate-200 dark:border-white/5 tracking-tighter shadow-inner">{_0xce("omid")}</div>}
                <a href="https://meet.google.com/wjn-atpi-ifx" target="_blank" rel="noopener noreferrer" className="px-16 py-8 bg-red-600 hover:bg-red-700 text-white rounded-[2rem] text-3xl font-black transition-transform active:scale-95 shadow-xl shadow-red-600/30">進入教室</a>
              </div>
            </div>
          </Card>
        </div>

        {/* 9. 慶元數學課程 */}
        <div className="group relative aspect-[2.5/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/10 rounded-[4rem] p-16 flex flex-col justify-between shadow-xl">
            <div className="p-6 bg-blue-50 dark:bg-blue-500/10 rounded-[2rem] border border-blue-100 dark:border-transparent w-fit"><Calculator className="w-16 h-16 text-blue-500" /></div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">慶元數學系統課程入口</h2>
            <a href="https://meet.google.com/ddr-hdrt-eru" target="_blank" rel="noopener noreferrer" className="py-10 bg-blue-600 hover:bg-blue-700 text-white rounded-[2.5rem] text-4xl font-black text-center shadow-xl">進入視訊教室</a>
          </Card>
        </div>

        {/* 10. 英文理化專題 */}
        <div className="group relative aspect-[2.5/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/10 rounded-[4rem] p-16 flex flex-col justify-between shadow-xl">
            <div className="p-6 bg-teal-50 dark:bg-teal-500/10 rounded-[2rem] border border-teal-100 dark:border-transparent w-fit"><Microscope className="w-16 h-16 text-teal-500" /></div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">英文理化專題教室</h2>
            <a href="https://meet.google.com/fzm-ecmz-api" target="_blank" rel="noopener noreferrer" className="py-10 bg-teal-600 hover:bg-teal-700 text-white rounded-[2.5rem] text-4xl font-black text-center shadow-xl">OPEN MEET</a>
          </Card>
        </div>

        {/* 11. EDX Global */}
        <div className="group relative aspect-[2.5/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/5 rounded-[4rem] p-16 flex flex-col items-center justify-center text-center shadow-xl hover:border-red-500/20 transition-all">
            <div className="p-8 bg-red-50 dark:bg-red-600/10 rounded-full mb-10 border border-red-100 dark:border-transparent"><Globe className="w-20 h-20 text-red-600" /></div>
            <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-8">EDX 全球教育平台</h2>
            <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" className="px-20 py-8 bg-red-600 text-white rounded-[2.5rem] text-3xl font-black shadow-xl hover:bg-red-700 active:scale-95 transition-all">VISIT OFFICIAL SITE</a>
          </Card>
        </div>

        {/* --- 第二類別：學習網站與計畫 (Learning Resources) --- */}

        {/* 12. Funday 英語 */}
        <div className="group relative aspect-[2/1] w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[4rem] blur opacity-5 group-hover:opacity-20 transition duration-1000"></div>
          <Card className="relative h-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/10 rounded-[4rem] p-16 flex flex-col justify-between shadow-xl">
            <div className="p-6 bg-blue-50 dark:bg-blue-500/10 rounded-[2rem] w-fit border border-blue-100 dark:border-blue-500/20"><GraduationCap className="w-16 h-16 text-blue-500" /></div>
            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <h2 className="text-7xl font-black tracking-tighter uppercase text-slate-900 dark:text-white italic">Funday</h2>
              <div className="flex items-center gap-8">
                {isUnlocked && (
                  <div className="bg-slate-50 dark:bg-zinc-900 p-8 rounded-[2rem] border border-slate-200 dark:border-white/5 font-mono text-center">
                    <div className="text-slate-400 dark:text-zinc-600 text-[10px] font-black uppercase mb-2 tracking-widest">ID: {_0xce("u")}</div>
                    <div className="text-5xl font-black text-blue-600 dark:text-blue-400 tracking-tighter">{_0xce("p")}</div>
                  </div>
                )}
                <a href="https://funday.asia/" target="_blank" rel="noopener noreferrer" className="px-16 py-7 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] text-2xl font-black shadow-xl">前往平台</a>
              </div>
            </div>
          </Card>
        </div>

        {/* 13. Henry 讀書會 */}
        <div className="group relative aspect-[2.1/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/10 rounded-[4rem] p-16 flex flex-col justify-between shadow-xl">
            <div className="p-6 bg-purple-50 dark:bg-purple-500/10 rounded-[2rem] border border-purple-100 dark:border-transparent w-fit"><BookOpen className="w-16 h-16 text-purple-500" /></div>
            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <div>
                <h2 className="text-6xl font-black tracking-tight uppercase text-slate-900 dark:text-white">Henry Club</h2>
                <p className="text-slate-500 dark:text-zinc-500 text-lg mt-4">專屬學習社群與讀書筆記。</p>
              </div>
              <div className="flex items-center gap-8">
                <a href="https://course.henrypedia.com/login" target="_blank" rel="noopener noreferrer" className="px-16 py-8 bg-purple-600 hover:bg-purple-700 text-white rounded-[2rem] text-3xl font-black shadow-xl">前往登入</a>
                {isUnlocked && (
                  <div className="bg-slate-50 dark:bg-zinc-900 p-8 rounded-3xl border border-slate-200 dark:border-white/5 font-mono text-center min-w-[300px]">
                    <div className="text-slate-400 dark:text-zinc-600 text-[10px] font-black mb-1 uppercase tracking-widest">ID: {_0xce("hu")}</div>
                    <div className="text-4xl font-black text-purple-600 dark:text-purple-400 tracking-tighter">PW: {_0xce("hp")}</div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* 14. Hour of AI */}
        <div className="group relative aspect-[2.5/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/5 rounded-[4rem] p-16 flex flex-col items-center justify-center text-center shadow-xl hover:border-cyan-500/20 transition-all">
            <div className="p-8 bg-cyan-50 dark:bg-cyan-500/10 rounded-full mb-10 border border-cyan-100 dark:border-transparent"><Brain className="w-20 h-20 text-cyan-500" /></div>
            <h2 className="text-7xl font-[1000] text-slate-900 dark:text-white mb-10 uppercase tracking-tighter">Hour of AI</h2>
            <a href="https://code.org/en-US/hour-of-ai" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 text-4xl font-black hover:underline flex items-center gap-6 transition-all hover:scale-105">START STUDY <ExternalLink className="w-12 h-12" /></a>
          </Card>
        </div>

        {/* 15. Kyros AI Program */}
        <div className="group relative aspect-[2.5/1] w-full">
          <Card className="relative h-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/5 rounded-[4rem] p-16 flex flex-col items-center justify-center text-center shadow-xl hover:border-cyan-500/20 transition-all">
            <div className="p-8 bg-cyan-50 dark:bg-cyan-500/10 rounded-full mb-10 border border-cyan-100 dark:border-transparent"><Sparkles className="w-20 h-20 text-cyan-500" /></div>
            <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-10 uppercase tracking-tight">Kyros AI Special Program</h2>
            <a href="https://www.kyros.ai/special-program-detail/22130" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 text-4xl font-black hover:underline flex items-center gap-6 transition-all">VISIT PROGRAM <ExternalLink className="w-12 h-12" /></a>
          </Card>
        </div>

        {/* 底部退出按鈕 */}
        <div className="mt-80 mb-40 flex flex-col items-center gap-10">
          <button 
            onClick={() => {
              sessionStorage.removeItem('personal_access');
              router.push('/');
            }} 
            className="text-slate-300 dark:text-zinc-800 hover:text-red-500 dark:hover:text-red-600 font-black text-5xl tracking-widest transition-all uppercase italic"
          >
            TERMINAL EXIT
          </button>
          <div className="flex items-center gap-6 text-slate-200 dark:text-zinc-900 font-black tracking-[1.5em] text-[10px]">
            <span>SECURE</span>
            <div className="w-2 h-2 bg-slate-200 dark:bg-zinc-900 rounded-full" />
            <span>ENCRYPTED</span>
            <div className="w-2 h-2 bg-slate-200 dark:bg-zinc-900 rounded-full" />
            <span>BRIAN SYSTEM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
