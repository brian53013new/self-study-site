'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  ExternalLink, Lock, GraduationCap, ShieldCheck, Video, Cloud, Info, 
  History, BookOpen, Brain, Globe, MessageSquare, Microscope, 
  Languages, Calculator, Sigma, Phone, Binary, Music, Layout, Eye, Sparkles,
  Menu, ChevronRight
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white selection:bg-blue-500/30 transition-colors duration-500">
      
      {/* 頂部導覽列 */}
      <div className="border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-3xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-600 rounded-lg text-white"><Layout className="w-5 h-5" /></div>
            <h1 className="text-2xl font-black tracking-tighter uppercase italic">Brian Terminal</h1>
          </div>
          <div className="flex items-center gap-4">
            {!isUnlocked ? (
              <Button onClick={() => setShowPrompt(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-6">
                <ShieldCheck className="w-4 h-4 mr-2" /> 解鎖資料
              </Button>
            ) : (
              <Button variant="outline" onClick={() => setIsUnlocked(false)} className="text-red-500 border-red-500/20 hover:bg-red-500/5 rounded-xl font-bold">
                <Lock className="w-4 h-4 mr-2" /> 鎖定資料
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-7xl flex flex-col lg:flex-row gap-12">
        
        {/* 左側目錄導覽 (Desktop) */}
        <aside className="hidden lg:block w-64 shrink-0 sticky top-32 h-fit">
          <nav className="space-y-2">
            <p className="text-[10px] font-black text-slate-400 dark:text-zinc-600 tracking-[0.3em] uppercase mb-4 ml-4">Directory</p>
            <button onClick={() => scrollToSection('classrooms')} className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-900 transition-all group text-left">
              <span className="font-bold flex items-center gap-3"><Video className="w-4 h-4 text-orange-500" /> 即時教室</span>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button onClick={() => scrollToSection('platforms')} className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-900 transition-all group text-left">
              <span className="font-bold flex items-center gap-3"><Layout className="w-4 h-4 text-blue-500" /> 學習平台</span>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button onClick={() => scrollToSection('resources')} className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-900 transition-all group text-left">
              <span className="font-bold flex items-center gap-3"><Cloud className="w-4 h-4 text-emerald-500" /> 輔助資源</span>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <div className="pt-10 border-t border-slate-200 dark:border-white/5 mt-10">
              <button 
                onClick={() => { sessionStorage.removeItem('personal_access'); router.push('/'); }}
                className="w-full px-4 py-3 rounded-xl text-slate-400 dark:text-zinc-700 hover:text-red-500 transition-colors font-black text-xs tracking-widest uppercase"
              >
                Logout System
              </button>
            </div>
          </nav>
        </aside>

        {/* 右側主內容區 */}
        <main className="flex-1 space-y-32">
          
          {/* Section 1: Classrooms */}
          <section id="classrooms" className="space-y-10 scroll-mt-32">
            <div className="flex items-center gap-4 border-l-4 border-orange-500 pl-6">
              <h2 className="text-4xl font-[1000] tracking-tighter uppercase">即時視訊教室</h2>
            </div>

            <div className="space-y-12">
              {/* 歷史 Zoom */}
              <div className="group relative aspect-[2.5/1]">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-400 rounded-[3rem] blur opacity-5 group-hover:opacity-20 transition duration-1000"></div>
                <Card className="relative h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[3rem] p-12 flex flex-col justify-between shadow-xl">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-orange-50 dark:bg-orange-500/10 rounded-2xl"><History className="w-10 h-10 text-orange-500" /></div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">History Zoom</h3>
                  </div>
                  <div className="flex items-center gap-8">
                    <a href="https://us06web.zoom.us/j/5844221701?pwd=7fz5sBze027txb5MxbFYpC5g8cnN9a.1" target="_blank" rel="noopener noreferrer" className="px-14 py-6 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl text-2xl font-black shadow-xl">進入教室</a>
                    {isUnlocked && <div className="text-5xl font-black text-orange-500 font-mono tracking-tighter bg-slate-50 dark:bg-zinc-900 px-10 py-4 rounded-2xl border dark:border-white/5 shadow-inner">{_0xce("zid")}</div>}
                  </div>
                </Card>
              </div>

              {/* 辯論私教 */}
              <div className="group relative aspect-[2.5/1]">
                <Card className="h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[3rem] p-12 flex flex-col justify-between shadow-xl">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-violet-50 dark:bg-violet-500/10 rounded-2xl"><MessageSquare className="w-10 h-10 text-violet-500" /></div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Debate Private</h3>
                  </div>
                  <div className="flex items-center gap-8">
                    <a href="https://meet.google.com/wae-iqur-pqz" target="_blank" rel="noopener noreferrer" className="px-14 py-6 bg-violet-600 hover:bg-violet-700 text-white rounded-2xl text-2xl font-black shadow-xl">進入教室</a>
                    {isUnlocked && (
                      <div className="bg-slate-50 dark:bg-zinc-900 p-6 rounded-2xl border dark:border-white/5 font-mono text-right flex-1">
                        <div className="text-slate-400 text-xs font-black uppercase">Dial: {_0xce("dpu")}</div>
                        <div className="text-4xl font-[1000] text-violet-600 dark:text-violet-500 tracking-tighter">PIN: {_0xce("dpin")}</div>
                      </div>
                    )}
                  </div>
                </Card>
              </div>

              {/* 辯論 NGF */}
              <div className="group relative aspect-[2.5/1]">
                <Card className="h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[3rem] p-12 flex flex-col justify-between shadow-xl">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl"><Globe className="w-10 h-10 text-indigo-400" /></div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Debate NGF</h3>
                  </div>
                  <a href="https://us06web.zoom.us/j/84058999858?pwd=KdtAd1z6bbROvcrFybThyu3ijODiDW.1" target="_blank" rel="noopener noreferrer" className="py-10 bg-slate-900 text-white dark:bg-zinc-900 border border-white/10 dark:text-indigo-400 rounded-3xl text-3xl font-black text-center shadow-xl">OPEN ZOOM MEET</a>
                </Card>
              </div>

              {/* 珠心算 */}
              <div className="group relative aspect-[2.5/1]">
                <Card className="h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[3rem] p-12 flex flex-col justify-between shadow-xl">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl"><Binary className="w-10 h-10 text-emerald-500" /></div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Abacus Mind</h3>
                  </div>
                  <a href="https://meet.google.com/znu-vmds-fxi" target="_blank" rel="noopener noreferrer" className="py-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-3xl text-3xl font-black text-center shadow-xl">進入 Google Meet</a>
                </Card>
              </div>

              {/* 奧數精英 */}
              <div className="group relative aspect-[2.5/1]">
                <Card className="h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[3rem] p-12 flex flex-col justify-between shadow-xl">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-red-50 dark:bg-red-500/10 rounded-2xl"><Sigma className="w-10 h-10 text-red-500" /></div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Olympiad Math</h3>
                  </div>
                  <div className="flex items-center gap-8">
                    <a href="https://meet.google.com/wjn-atpi-ifx" target="_blank" rel="noopener noreferrer" className="px-14 py-6 bg-red-600 hover:bg-red-700 text-white rounded-2xl text-2xl font-black shadow-xl">進入教室</a>
                    {isUnlocked && <div className="text-5xl font-black text-red-600 font-mono tracking-tighter bg-slate-50 dark:bg-zinc-900 px-10 py-4 rounded-2xl border dark:border-white/5 shadow-inner">{_0xce("omid")}</div>}
                  </div>
                </Card>
              </div>

              {/* 慶元數學 */}
              <div className="group relative aspect-[2.5/1]">
                <Card className="h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[3rem] p-12 flex flex-col justify-between shadow-xl">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-2xl"><Calculator className="w-10 h-10 text-blue-500" /></div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">慶元數學系統</h3>
                  </div>
                  <a href="https://meet.google.com/ddr-hdrt-eru" target="_blank" rel="noopener noreferrer" className="py-10 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl text-3xl font-black text-center shadow-xl">進入視訊教室</a>
                </Card>
              </div>

              {/* 英文理化 */}
              <div className="group relative aspect-[2.5/1]">
                <Card className="h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[3rem] p-12 flex flex-col justify-between shadow-xl">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-teal-50 dark:bg-teal-500/10 rounded-2xl"><Microscope className="w-10 h-10 text-teal-500" /></div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">英文理化專題</h3>
                  </div>
                  <a href="https://meet.google.com/fzm-ecmz-api" target="_blank" rel="noopener noreferrer" className="py-10 bg-teal-600 hover:bg-teal-700 text-white rounded-3xl text-3xl font-black text-center shadow-xl">OPEN MEET</a>
                </Card>
              </div>
            </div>
          </section>

          {/* Section 2: Platforms */}
          <section id="platforms" className="space-y-10 scroll-mt-32">
            <div className="flex items-center gap-4 border-l-4 border-blue-500 pl-6">
              <h2 className="text-4xl font-[1000] tracking-tighter uppercase text-blue-600 dark:text-blue-400">核心學習平台</h2>
            </div>

            <div className="space-y-12">
              {/* Funday */}
              <div className="group relative aspect-[2.5/1]">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur opacity-5 group-hover:opacity-20 transition duration-1000"></div>
                <Card className="relative h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[3rem] p-12 flex flex-col justify-between shadow-xl">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-2xl"><GraduationCap className="w-10 h-10 text-blue-500" /></div>
                    <h3 className="text-6xl font-[1000] text-slate-900 dark:text-white italic tracking-tighter uppercase">Funday</h3>
                  </div>
                  <div className="flex items-center gap-8">
                    <a href="https://funday.asia/" target="_blank" rel="noopener noreferrer" className="px-14 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-2xl font-black shadow-xl">前往平台</a>
                    {isUnlocked && (
                      <div className="bg-slate-50 dark:bg-zinc-900 p-6 rounded-2xl border dark:border-white/5 font-mono flex-1">
                        <div className="text-slate-400 text-xs font-black uppercase">ID: {_0xce("u")}</div>
                        <div className="text-4xl font-black text-blue-600 dark:text-blue-500">{_0xce("p")}</div>
                      </div>
                    )}
                  </div>
                </Card>
              </div>

              {/* SOP 會員 */}
              <div className="group relative aspect-[2.5/1]">
                <Card className="h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[3rem] p-12 flex flex-col justify-between shadow-xl">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-rose-50 dark:bg-rose-500/10 rounded-2xl"><ShieldCheck className="w-10 h-10 text-rose-500" /></div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">SOP 會員系統</h3>
                  </div>
                  <div className="flex items-center gap-8">
                    <a href="https://members.sop.org/" target="_blank" rel="noopener noreferrer" className="px-14 py-6 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl text-2xl font-black shadow-xl">進入系統</a>
                    {isUnlocked && (
                      <div className="bg-slate-50 dark:bg-zinc-900 p-6 rounded-2xl border dark:border-white/5 font-mono flex-1">
                        <div className="text-slate-400 text-xs font-black uppercase">ID: {_0xce("su")}</div>
                        <div className="text-4xl font-black text-rose-600 dark:text-rose-500">{_0xce("sp")}</div>
                      </div>
                    )}
                  </div>
                </Card>
              </div>

              {/* Henry 讀書會 */}
              <div className="group relative aspect-[2.5/1]">
                <Card className="h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[3rem] p-12 flex flex-col justify-between shadow-xl">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-purple-50 dark:bg-purple-500/10 rounded-2xl"><BookOpen className="w-10 h-10 text-purple-500" /></div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Henry Club</h3>
                  </div>
                  <div className="flex items-center gap-8">
                    <a href="https://course.henrypedia.com/login" target="_blank" rel="noopener noreferrer" className="px-14 py-6 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl text-2xl font-black shadow-xl">前往登入</a>
                    {isUnlocked && (
                      <div className="bg-slate-50 dark:bg-zinc-900 p-6 rounded-2xl border dark:border-white/5 font-mono flex-1">
                        <div className="text-slate-400 text-xs font-black uppercase">ID: {_0xce("hu")}</div>
                        <div className="text-4xl font-black text-purple-600 dark:text-purple-400">{_0xce("hp")}</div>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Section 3: Resources */}
          <section id="resources" className="space-y-10 scroll-mt-32">
            <div className="flex items-center gap-4 border-l-4 border-emerald-500 pl-6">
              <h2 className="text-4xl font-[1000] tracking-tighter uppercase text-emerald-600 dark:text-emerald-400">輔助與官網資源</h2>
            </div>

            <div className="space-y-12">
              {/* SOP 官網 */}
              <div className="group relative aspect-[3/1]">
                <Card className="h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[3rem] p-12 flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-8">
                    <div className="p-4 bg-rose-50 dark:bg-rose-500/10 rounded-full"><Layout className="w-12 h-12 text-rose-500" /></div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">SOP Official Site</h3>
                  </div>
                  <a href="https://www.sop.org/" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 text-2xl font-black hover:underline tracking-tight transition-all">BROWSE WEBSITE</a>
                </Card>
              </div>

              {/* 歷史雲端 */}
              <div className="group relative aspect-[3/1]">
                <Card className="h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[3rem] p-12 flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-8">
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-full"><Cloud className="w-12 h-12 text-emerald-500" /></div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">教材雲端教材庫</h3>
                  </div>
                  {isUnlocked ? (
                    <a href="https://drive.google.com/drive/folders/1D3GTOwFTenNT1I1v-5SPNu3lD597mRsr" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-zinc-900 text-emerald-500 border border-emerald-500/20 rounded-2xl text-xl font-black">OPEN DRIVE</a>
                  ) : <div className="text-slate-300 dark:text-zinc-800 text-2xl font-black italic">ENCRYPTED</div>}
                </Card>
              </div>

              {/* AI Hour of AI */}
              <div className="group relative aspect-[3/1]">
                <Card className="h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[3rem] p-12 flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-8">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-500/10 rounded-full"><Brain className="w-12 h-12 text-cyan-500" /></div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase text-cyan-600 dark:text-cyan-400">Hour of AI</h3>
                  </div>
                  <a href="https://code.org/en-US/hour-of-ai" target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-zinc-600 hover:text-cyan-500"><ExternalLink className="w-10 h-10" /></a>
                </Card>
              </div>

              {/* AI Kyros */}
              <div className="group relative aspect-[3/1]">
                <Card className="h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[3rem] p-12 flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-8">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-500/10 rounded-full"><Sparkles className="w-12 h-12 text-cyan-500" /></div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase text-cyan-600 dark:text-cyan-400">Kyros AI Program</h3>
                  </div>
                  <a href="https://www.kyros.ai/special-program-detail/22130" target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-zinc-600 hover:text-cyan-500"><ExternalLink className="w-10 h-10" /></a>
                </Card>
              </div>

              {/* EDX */}
              <div className="group relative aspect-[3/1]">
                <Card className="h-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-white/5 rounded-[3rem] p-12 flex items-center justify-between shadow-xl text-center">
                  <div className="flex items-center gap-8">
                    <div className="p-4 bg-red-50 dark:bg-red-500/10 rounded-full"><Globe className="w-12 h-12 text-red-600" /></div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">EDX Global Learning</h3>
                  </div>
                  <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl">VISIT SITE</a>
                </Card>
              </div>
            </div>
          </section>

        </main>
      </div>

      {/* 驗證彈窗 */}
      {showPrompt && !isUnlocked && (
        <div className="fixed inset-0 bg-slate-900/60 dark:bg-black/98 backdrop-blur-xl z-[100] flex items-center justify-center p-6">
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
    </div>
  );
}
