'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  ExternalLink, Lock, GraduationCap, ShieldCheck, Video, Cloud, Info, 
  History, BookOpen, Brain, Globe, MessageSquare, Microscope, 
  Languages, Calculator, Sigma, Phone, Binary, Music, Layout, Sparkles
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
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <div className="animate-spin-slow mb-8">
          <Sparkles className="w-16 h-16 text-blue-500 opacity-50" />
        </div>
        <p className="text-zinc-500 font-black text-2xl tracking-[0.2em] animate-pulse">SYSTEM SECURING...</p>
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
      "dpin": "MzI0IDA0OSAzODUj",
      "ndid": "ODQwIDU4OTkgOTg1OA=="
    };
    return atob(data[_0x5] || "");
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden">
      {/* 頂部華麗 Header */}
      <div className="relative border-b border-white/5 bg-zinc-950/50 backdrop-blur-3xl sticky top-0 z-40">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="relative">
            <h1 className="text-7xl font-[1000] tracking-tighter bg-gradient-to-br from-white via-white to-white/20 bg-clip-text text-transparent">
              BRIAN'S COMMAND
            </h1>
            <div className="h-1 w-1/3 bg-blue-600 mt-2 rounded-full" />
          </div>
          {!isUnlocked ? (
            <Button 
              onClick={() => setShowPrompt(true)} 
              className="bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_rgba(255,255,255,0.1)] px-14 py-10 text-3xl rounded-full transition-all hover:scale-105 active:scale-95 font-black border-4 border-white/10"
            >
              <ShieldCheck className="w-10 h-10 mr-4" /> 解鎖最高權限
            </Button>
          ) : (
            <Button 
              variant="outline" 
              onClick={() => setIsUnlocked(false)} 
              className="text-red-500 border-red-500/50 hover:bg-red-500/10 py-10 px-14 rounded-full text-2xl font-black shadow-[0_0_30px_rgba(239,68,68,0.1)]"
            >
              <Lock className="w-8 h-8 mr-4" /> 鎖定機密
            </Button>
          )}
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 space-y-24">
        
        {/* 驗證視窗 */}
        {showPrompt && !isUnlocked && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[100] flex items-center justify-center p-6">
            <div className="max-w-2xl w-full p-1 border-2 border-white/10 rounded-[4rem] bg-gradient-to-br from-white/10 to-transparent">
              <div className="bg-zinc-950 rounded-[3.8rem] p-16 flex flex-col items-center">
                <h3 className="text-6xl font-black mb-12 tracking-tight">身分驗證</h3>
                <form onSubmit={handleUnlock} className="w-full space-y-12">
                  <Input
                    type="password"
                    placeholder="ENTER CODE"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className={`h-24 text-6xl text-center rounded-3xl bg-white/5 border-none focus:ring-4 focus:ring-blue-600/50 text-white placeholder:text-zinc-800 ${passError ? "border-2 border-red-500 animate-shake" : ""}`}
                    autoFocus
                  />
                  <div className="flex gap-6">
                    <Button type="button" variant="ghost" className="flex-1 h-20 rounded-3xl text-3xl text-zinc-500 hover:text-white" onClick={() => setShowPrompt(false)}>取消</Button>
                    <Button type="submit" className="flex-1 h-20 bg-blue-600 hover:bg-blue-700 rounded-3xl text-3xl font-black text-white shadow-2xl shadow-blue-600/40">確認</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* --- 第一板塊：SOP 會員系統 --- */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-purple-600 rounded-[4rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
          <Card className="relative bg-zinc-950 border-white/10 rounded-[4rem] overflow-hidden">
            <div className="p-16">
              <div className="flex flex-col md:flex-row justify-between gap-12">
                <div className="flex-1">
                  <div className="flex items-center gap-8 mb-10">
                    <div className="p-8 bg-rose-500/10 rounded-[2.5rem] border border-rose-500/20"><Music className="w-20 h-20 text-rose-500" /></div>
                    <h2 className="text-7xl font-[1000] tracking-tighter">SOP MEMBERS</h2>
                  </div>
                  <p className="text-zinc-500 text-3xl font-medium leading-tight mb-12">讚美之泉專屬會員帳務與資源管理平台。</p>
                  <a href="https://members.sop.org/" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center gap-6 px-16 py-8 bg-rose-600 text-white rounded-[2rem] text-4xl font-black hover:bg-rose-700 transition-all shadow-2xl shadow-rose-600/30">
                    進入系統 <ExternalLink className="w-10 h-10" />
                  </a>
                </div>
                <div className="w-full md:w-[500px] bg-zinc-900/50 rounded-[3rem] p-12 border border-white/5">
                  <h4 className="text-zinc-500 font-black text-2xl uppercase tracking-widest mb-10 flex items-center gap-4">
                    <ShieldCheck className="w-8 h-8 text-rose-500" /> Secure Data
                  </h4>
                  {isUnlocked ? (
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <span className="text-zinc-600 font-black text-lg">EMAIL</span>
                        <div className="text-3xl font-bold text-white break-all">{_0xce("su")}</div>
                      </div>
                      <div className="h-px bg-white/5" />
                      <div className="space-y-2">
                        <span className="text-zinc-600 font-black text-lg">PASSWORD</span>
                        <div className="text-5xl font-black text-rose-500 tracking-tighter">{_0xce("sp")}</div>
                      </div>
                    </div>
                  ) : <div className="h-40 flex items-center justify-center border-4 border-dashed border-white/5 rounded-3xl text-zinc-800 text-3xl font-black italic">ENCRYPTED</div>}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* --- 第二板塊：歷史專題課程 --- */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-[4rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
          <Card className="relative bg-zinc-950 border-white/10 rounded-[4rem] overflow-hidden">
            <div className="p-16">
              <div className="flex items-center gap-8 mb-16">
                <div className="p-8 bg-orange-500/10 rounded-[2.5rem] border border-orange-500/20"><History className="w-20 h-20 text-orange-500" /></div>
                <h2 className="text-7xl font-[1000] tracking-tighter text-white uppercase">History Core</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <a href="https://us06web.zoom.us/j/5844221701?pwd=7fz5sBze027txb5MxbFYpC5g8cnN9a.1" target="_blank" rel="noopener noreferrer" 
                   className="flex flex-col items-center justify-center p-16 bg-orange-600 hover:bg-orange-700 rounded-[3rem] transition-all group/btn shadow-2xl">
                  <Video className="w-24 h-24 mb-6 group-hover/btn:scale-110 transition-transform" />
                  <span className="text-5xl font-black">進入 ZOOM 教室</span>
                </a>
                <div className="bg-zinc-900 p-12 rounded-[3rem] border border-white/5 flex flex-col justify-center">
                  <span className="text-zinc-600 font-black text-2xl mb-4 tracking-widest uppercase">Meeting ID Status</span>
                  {isUnlocked ? (
                    <div className="text-7xl font-[1000] text-orange-500 tracking-tighter font-mono">{_0xce("zid")}</div>
                  ) : <div className="text-5xl font-black text-zinc-800 italic">LOCKED</div>}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* --- 第三板塊：歷史課雲端資源 --- */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-[4rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
          <Card className="relative bg-zinc-950 border-white/10 rounded-[4rem] overflow-hidden">
            <div className="p-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex items-center gap-10">
                <div className="p-8 bg-emerald-500/10 rounded-[2.5rem] border border-emerald-500/20"><Cloud className="w-24 h-24 text-emerald-500" /></div>
                <div>
                  <h2 className="text-6xl font-black tracking-tighter">歷史課教材雲端</h2>
                  <p className="text-zinc-500 text-3xl font-bold mt-2 italic">Google Drive Storage</p>
                </div>
              </div>
              {isUnlocked ? (
                <a href="https://drive.google.com/drive/folders/1D3GTOwFTenNT1I1v-5SPNu3lD597mRsr" target="_blank" rel="noopener noreferrer" 
                   className="px-20 py-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-[2.5rem] text-4xl font-[1000] shadow-2xl transition-all">
                  開啟雲端 <ExternalLink className="w-10 h-10 ml-4 inline" />
                </a>
              ) : <div className="text-zinc-800 text-4xl font-black tracking-widest">ACCESS ENCRYPTED</div>}
            </div>
          </Card>
        </div>

        {/* --- 第四板塊：辯論私教 --- */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-[4rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
          <Card className="relative bg-zinc-950 border-white/10 rounded-[4rem] overflow-hidden">
            <div className="p-16">
              <div className="flex items-center gap-8 mb-12">
                <div className="p-8 bg-violet-500/10 rounded-[2.5rem] border border-violet-500/20"><MessageSquare className="w-20 h-20 text-violet-500" /></div>
                <h2 className="text-7xl font-[1000] tracking-tighter text-white">DEBATE PRIVATE</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <a href="https://meet.google.com/wae-iqur-pqz" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center justify-center gap-6 py-10 bg-violet-600 hover:bg-violet-700 rounded-[2.5rem] text-4xl font-black shadow-2xl">
                  進入 MEET <Video className="w-10 h-10" />
                </a>
                <div className="bg-zinc-900 p-10 rounded-[2.5rem] border border-white/5 flex flex-col justify-center">
                  {isUnlocked ? (
                    <div className="space-y-6">
                      <div className="text-white text-3xl font-bold">Dial-in: <span className="text-zinc-400 font-mono">{_0xce("dpu")}</span></div>
                      <div className="text-violet-500 text-6xl font-[1000] tracking-tighter">PIN: {_0xce("dpin")}</div>
                    </div>
                  ) : <div className="text-center text-zinc-800 text-4xl font-black italic">SECRET INFO</div>}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* --- 第五板塊：珠心算課程 --- */}
        <div className="group relative">
          <Card className="relative bg-zinc-950 border-white/10 rounded-[4rem] overflow-hidden hover:border-emerald-500/30 transition-all">
            <div className="p-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex items-center gap-8">
                <div className="p-8 bg-emerald-500/10 rounded-[2.5rem] border border-emerald-500/20"><Binary className="w-24 h-24 text-emerald-500" /></div>
                <h2 className="text-7xl font-[1000] tracking-tighter text-white uppercase">Abacus Mind</h2>
              </div>
              <a href="https://meet.google.com/znu-vmds-fxi" target="_blank" rel="noopener noreferrer" 
                 className="px-24 py-12 bg-zinc-900 hover:bg-zinc-800 text-emerald-500 border-2 border-emerald-500/20 rounded-[3rem] text-5xl font-black transition-all shadow-[0_0_50px_rgba(16,185,129,0.05)]">
                JOIN CLASS
              </a>
            </div>
          </Card>
        </div>

        {/* --- 第六板塊：奧數精英 --- */}
        <div className="group relative">
          <Card className="relative bg-zinc-950 border-white/10 rounded-[4rem] overflow-hidden hover:border-red-500/30 transition-all">
            <div className="p-16">
              <div className="flex items-center gap-8 mb-16">
                <div className="p-8 bg-red-500/10 rounded-[2.5rem] border border-red-500/20"><Sigma className="w-20 h-20 text-red-500" /></div>
                <h2 className="text-7xl font-[1000] tracking-tighter text-white">OLYMPIAD MATH</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-12">
                <a href="https://meet.google.com/wjn-atpi-ifx" target="_blank" rel="noopener noreferrer" 
                   className="flex-1 py-12 bg-red-600 hover:bg-red-700 text-white rounded-[3rem] text-5xl font-black text-center shadow-2xl">
                  GO TO MEET
                </a>
                <div className="w-full md:w-[400px] bg-zinc-900 p-12 rounded-[3rem] text-center">
                  <span className="text-zinc-600 font-black text-xl block mb-4 uppercase tracking-widest">Meeting Code</span>
                  {isUnlocked ? <span className="text-6xl font-black text-red-500 font-mono tracking-tighter">{_0xce("omid")}</span> : <span className="text-4xl font-black text-zinc-800 italic">LOCKED</span>}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* --- 其餘所有板塊比照辦理... (分開且放大) --- */}
        
        {/* 慶元數學 */}
        <div className="group relative">
          <Card className="relative bg-zinc-950 border-white/10 rounded-[4rem] overflow-hidden hover:border-blue-500/30 transition-all">
            <div className="p-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex items-center gap-8">
                <div className="p-8 bg-blue-500/10 rounded-[2.5rem] border border-blue-500/20"><Calculator className="w-24 h-24 text-blue-500" /></div>
                <h2 className="text-6xl font-black tracking-tighter text-white">慶元數學課程</h2>
              </div>
              <a href="https://meet.google.com/ddr-hdrt-eru" target="_blank" rel="noopener noreferrer" 
                 className="px-20 py-10 bg-blue-600 text-white rounded-[2.5rem] text-4xl font-black hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/30">
                進入教室
              </a>
            </div>
          </Card>
        </div>

        {/* 英文理化 */}
        <div className="group relative">
          <Card className="relative bg-zinc-950 border-white/10 rounded-[4rem] overflow-hidden hover:border-teal-500/30 transition-all">
            <div className="p-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex items-center gap-8">
                <div className="p-8 bg-teal-500/10 rounded-[2.5rem] border border-teal-500/20"><Microscope className="w-24 h-24 text-teal-500" /></div>
                <h2 className="text-6xl font-black tracking-tighter text-white">英文理化專題</h2>
              </div>
              <a href="https://meet.google.com/fzm-ecmz-api" target="_blank" rel="noopener noreferrer" 
                 className="px-20 py-10 bg-teal-600 text-white rounded-[2.5rem] text-4xl font-black hover:bg-teal-700 transition-all shadow-2xl">
                OPEN MEET
              </a>
            </div>
          </Card>
        </div>

        {/* Henry 讀書會 */}
        <div className="group relative">
          <Card className="relative bg-zinc-950 border-white/10 rounded-[4rem] overflow-hidden">
            <div className="p-16 flex flex-col md:flex-row justify-between gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-8 mb-10">
                  <div className="p-8 bg-purple-500/10 rounded-[2.5rem] border border-purple-500/20"><BookOpen className="w-20 h-20 text-purple-500" /></div>
                  <h2 className="text-6xl font-black tracking-tighter">HENRY CLUB</h2>
                </div>
                <a href="https://course.henrypedia.com/login" target="_blank" rel="noopener noreferrer" 
                   className="inline-block px-16 py-8 bg-purple-600 text-white rounded-[2rem] text-4xl font-black hover:bg-purple-700 transition-all">
                  前往登入
                </a>
              </div>
              <div className="w-full md:w-[450px] bg-zinc-900 p-10 rounded-[2.5rem] border border-white/5">
                <span className="text-zinc-600 font-black text-xl block mb-6">LOGIN ACCESS</span>
                {isUnlocked ? (
                  <div className="space-y-4 font-mono">
                    <div className="text-white text-xl">ID: {_0xce("hu")}</div>
                    <div className="text-purple-400 text-4xl font-black">PW: {_0xce("hp")}</div>
                  </div>
                ) : <div className="text-zinc-800 text-3xl font-black italic">ENCRYPTED</div>}
              </div>
            </div>
          </Card>
        </div>

        {/* AI Hour of AI */}
        <div className="group relative">
          <Card className="relative bg-zinc-950 border-white/10 rounded-[4rem] overflow-hidden hover:border-cyan-500/30 transition-all">
            <div className="p-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex items-center gap-8">
                <div className="p-8 bg-cyan-500/10 rounded-[2.5rem] border border-cyan-500/20"><Brain className="w-24 h-24 text-cyan-500" /></div>
                <h2 className="text-6xl font-black tracking-tighter text-white">HOUR OF AI</h2>
              </div>
              <a href="https://code.org/en-US/hour-of-ai" target="_blank" rel="noopener noreferrer" 
                 className="px-20 py-10 bg-cyan-600 text-white rounded-[2.5rem] text-4xl font-black shadow-2xl">
                START STUDY
              </a>
            </div>
          </Card>
        </div>

        {/* AI Kyros Special */}
        <div className="group relative">
          <Card className="relative bg-zinc-950 border-white/10 rounded-[4rem] overflow-hidden hover:border-cyan-500/30 transition-all">
            <div className="p-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex items-center gap-8">
                <div className="p-8 bg-cyan-500/10 rounded-[2.5rem] border border-cyan-500/20"><Sparkles className="w-24 h-24 text-cyan-500" /></div>
                <h2 className="text-6xl font-black tracking-tighter text-white uppercase">Kyros Program</h2>
              </div>
              <a href="https://www.kyros.ai/special-program-detail/22130" target="_blank" rel="noopener noreferrer" 
                 className="px-20 py-10 border-2 border-cyan-500 text-cyan-500 rounded-[2.5rem] text-4xl font-black hover:bg-cyan-500 hover:text-white transition-all">
                OPEN KYROS
              </a>
            </div>
          </Card>
        </div>

        {/* EDX Global */}
        <div className="group relative">
          <Card className="relative bg-zinc-950 border-white/10 rounded-[4rem] overflow-hidden hover:border-red-600/30 transition-all">
            <div className="p-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex items-center gap-8">
                <div className="p-8 bg-red-600/10 rounded-[2.5rem] border border-red-600/20"><Globe className="w-24 h-24 text-red-600" /></div>
                <h2 className="text-7xl font-[1000] tracking-tighter text-white uppercase">EDX GLOBAL</h2>
              </div>
              <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" 
                 className="px-24 py-12 bg-red-600 text-white rounded-[3rem] text-5xl font-black shadow-2xl">
                VISIT EDX
              </a>
            </div>
          </Card>
        </div>

        {/* Funday English */}
        <div className="group relative">
          <Card className="relative bg-zinc-950 border-white/10 rounded-[4rem] overflow-hidden">
            <div className="p-16 flex flex-col md:flex-row justify-between gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-8 mb-10">
                  <div className="p-8 bg-blue-500/10 rounded-[2.5rem] border border-blue-500/20"><GraduationCap className="w-20 h-20 text-blue-500" /></div>
                  <h2 className="text-7xl font-black tracking-tighter uppercase">Funday</h2>
                </div>
                <a href="https://funday.asia/" target="_blank" rel="noopener noreferrer" 
                   className="inline-block px-16 py-8 bg-blue-600 text-white rounded-[2rem] text-4xl font-black hover:bg-blue-700 shadow-2xl">
                  GO STUDY
                </a>
              </div>
              <div className="w-full md:w-[500px] bg-zinc-900 p-12 rounded-[3.5rem] border border-white/5">
                <span className="text-zinc-600 font-black text-xl block mb-6">LOGIN DATA</span>
                {isUnlocked ? (
                  <div className="space-y-6 font-mono">
                    <div className="text-white text-2xl">ID: {_0xce("u")}</div>
                    <div className="text-blue-400 text-5xl font-[1000] tracking-tighter">PW: {_0xce("p")}</div>
                  </div>
                ) : <div className="text-zinc-800 text-4xl font-black italic">ENCRYPTED</div>}
              </div>
            </div>
          </Card>
        </div>

        {/* SOP Official */}
        <div className="group relative">
          <Card className="relative bg-zinc-950 border-white/10 rounded-[4rem] overflow-hidden hover:border-rose-500/30 transition-all">
            <div className="p-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex items-center gap-8">
                <div className="p-8 bg-rose-500/10 rounded-[2.5rem] border border-rose-500/20"><Layout className="w-24 h-24 text-rose-500" /></div>
                <h2 className="text-6xl font-black tracking-tighter text-white uppercase text-center md:text-left">SOP Official Website</h2>
              </div>
              <a href="https://www.sop.org/" target="_blank" rel="noopener noreferrer" 
                 className="px-20 py-10 bg-zinc-900 text-white border-2 border-rose-500/30 rounded-[2.5rem] text-4xl font-black hover:bg-rose-600 transition-all shadow-xl">
                VISIT SITE
              </a>
            </div>
          </Card>
        </div>

        {/* 退出按鈕 */}
        <div className="mt-40 mb-20 flex flex-col items-center gap-12">
          <button 
            onClick={() => {
              sessionStorage.removeItem('personal_access');
              router.push('/');
            }} 
            className="text-zinc-800 hover:text-red-500 text-5xl font-[1000] transition-all tracking-tighter uppercase"
          >
            Terminal System
          </button>
          <div className="flex items-center gap-4 text-zinc-900 font-black tracking-[0.8em] text-xs">
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
