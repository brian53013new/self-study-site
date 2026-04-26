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
      "dpu": "K1UpIDEgMzE3LTk2MS0wNjk4", "dpin": "MzI0IDA0OSAzODUj"
    };
    return atob(data[_0x5] || "");
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 pb-20">
      {/* Header */}
      <div className="border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl sticky top-0 z-40">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">個人學習系統</h1>
          {!isUnlocked ? (
            <Button onClick={() => setShowPrompt(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-6 h-11">
              <ShieldCheck className="w-4 h-4 mr-2" /> 解鎖資料
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setIsUnlocked(false)} className="text-zinc-400 border-zinc-800 hover:bg-zinc-900 rounded-xl px-6 h-11">
              <Lock className="w-4 h-4 mr-2" /> 鎖定資料
            </Button>
          )}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 space-y-6">
        
        {/* 驗證彈窗 */}
        {showPrompt && !isUnlocked && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <Card className="max-w-sm w-full bg-zinc-900 border-zinc-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-center">身份驗證</h3>
              <form onSubmit={handleUnlock} className="space-y-4">
                <Input
                  type="password"
                  placeholder="Password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className={`h-12 text-center bg-black/40 border-zinc-800 text-white rounded-xl ${passError ? "border-red-500" : ""}`}
                  autoFocus
                />
                <div className="flex gap-3">
                  <Button type="button" variant="ghost" className="flex-1 text-zinc-500" onClick={() => setShowPrompt(false)}>取消</Button>
                  <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold">確認</Button>
                </div>
              </form>
            </Card>
          </div>
        )}

        {/* 1. SOP 會員登入 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl overflow-hidden p-8 hover:border-rose-500/20 transition-colors">
          <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-rose-500/10 rounded-xl"><Music className="w-8 h-8 text-rose-500" /></div>
              <h2 className="text-xl font-bold">SOP 會員登入系統</h2>
            </div>
            <a href="https://members.sop.org/" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 hover:bg-zinc-800 px-6 py-2 rounded-lg text-sm font-bold border border-white/5">開啟連結</a>
            {isUnlocked && (
              <div className="flex flex-col md:flex-row gap-6 bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-sm">
                <div><span className="text-zinc-500 mr-2">Email:</span>{_0xce("su")}</div>
                <div><span className="text-zinc-500 mr-2">PW:</span><span className="text-rose-400 font-bold">{_0xce("sp")}</span></div>
              </div>
            )}
          </div>
        </Card>

        {/* 2. 歷史 Zoom */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl p-8 hover:border-orange-500/20 transition-colors">
          <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-orange-500/10 rounded-xl"><History className="w-8 h-8 text-orange-500" /></div>
              <h2 className="text-xl font-bold">歷史專題課程 (Zoom)</h2>
            </div>
            <a href="https://us06web.zoom.us/j/5844221701?pwd=7fz5sBze027txb5MxbFYpC5g8cnN9a.1" target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-xl text-sm font-black">進入會議</a>
            {isUnlocked && <div className="text-2xl font-mono font-bold text-orange-500">ID: {_0xce("zid")}</div>}
          </div>
        </Card>

        {/* 3. 歷史雲端 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl p-8 hover:border-emerald-500/20 transition-colors text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-emerald-500/10 rounded-xl"><Cloud className="w-8 h-8 text-emerald-500" /></div>
              <h2 className="text-xl font-bold">歷史課教材雲端 (Google Drive)</h2>
            </div>
            {isUnlocked ? (
              <a href="https://drive.google.com/drive/folders/1D3GTOwFTenNT1I1v-5SPNu3lD597mRsr" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">開啟資料夾</a>
            ) : <span className="text-zinc-700 italic">Encrypted</span>}
          </div>
        </Card>

        {/* 4. 辯論私教 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl p-8 hover:border-violet-500/20 transition-colors">
          <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-violet-500/10 rounded-xl"><MessageSquare className="w-8 h-8 text-violet-500" /></div>
              <h2 className="text-xl font-bold">辯論私教課程 (Brian)</h2>
            </div>
            <a href="https://meet.google.com/wae-iqur-pqz" target="_blank" rel="noopener noreferrer" className="bg-violet-600 hover:bg-violet-700 px-8 py-3 rounded-xl text-sm font-black">進入 Meet</a>
            {isUnlocked && (
              <div className="text-right text-xs font-mono text-zinc-500">
                <div>Dial: {_0xce("dpu")}</div>
                <div className="text-violet-400 text-lg font-bold">PIN: {_0xce("dpin")}</div>
              </div>
            )}
          </div>
        </Card>

        {/* 5. 辯論 NGF */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl p-8 hover:border-indigo-500/20 transition-colors">
          <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-indigo-500/10 rounded-xl"><Globe className="w-8 h-8 text-indigo-400" /></div>
              <h2 className="text-xl font-bold">辯論專題課程 (NGF)</h2>
            </div>
            <a href="https://us06web.zoom.us/j/84058999858?pwd=KdtAd1z6bbROvcrFybThyu3ijODiDW.1" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 border border-white/10 px-8 py-3 rounded-xl text-sm font-bold">進入 Zoom</a>
            {isUnlocked && <div className="font-mono font-bold text-indigo-400">ID: {_0xce("did")}</div>}
          </div>
        </Card>

        {/* 6. 珠心算 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl p-8 hover:border-emerald-500/20 transition-colors flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="p-3 bg-emerald-500/10 rounded-xl"><Binary className="w-8 h-8 text-emerald-500" /></div>
            <h2 className="text-xl font-bold">珠心算課程</h2>
          </div>
          <a href="https://meet.google.com/znu-vmds-fxi" target="_blank" rel="noopener noreferrer" className="text-emerald-500 font-bold hover:underline">進入 Google Meet</a>
        </Card>

        {/* 7. 奧數精英 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl p-8 hover:border-red-500/20 transition-colors">
          <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-red-500/10 rounded-xl"><Sigma className="w-8 h-8 text-red-500" /></div>
              <h2 className="text-xl font-bold">奧數數學精英課</h2>
            </div>
            <a href="https://meet.google.com/wjn-atpi-ifx" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl text-sm font-black">進入 Meet</a>
            {isUnlocked && <div className="font-mono font-bold text-red-400">Code: {_0xce("omid")}</div>}
          </div>
        </Card>

        {/* 8. 慶元數學 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl p-8 hover:border-blue-500/20 transition-colors flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="p-3 bg-blue-500/10 rounded-xl"><Calculator className="w-8 h-8 text-blue-500" /></div>
            <h2 className="text-xl font-bold">慶元數學課程</h2>
          </div>
          <a href="https://meet.google.com/ddr-hdrt-eru" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold hover:underline">進入 Google Meet</a>
        </Card>

        {/* 9. 英文理化 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl p-8 hover:border-teal-500/20 transition-colors flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="p-3 bg-teal-500/10 rounded-xl"><Microscope className="w-8 h-8 text-teal-500" /></div>
            <h2 className="text-xl font-bold">英文理化專題</h2>
          </div>
          <a href="https://meet.google.com/fzm-ecmz-api" target="_blank" rel="noopener noreferrer" className="text-teal-500 font-bold hover:underline">開啟 Meet 連結</a>
        </Card>

        {/* 10. Henry 讀書會 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl p-8 hover:border-purple-500/20 transition-colors">
          <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-purple-500/10 rounded-xl"><BookOpen className="w-8 h-8 text-purple-500" /></div>
              <h2 className="text-xl font-bold">Henry 讀書會</h2>
            </div>
            <a href="https://course.henrypedia.com/login" target="_blank" rel="noopener noreferrer" className="bg-purple-600 px-6 py-2 rounded-lg text-xs font-bold">登入頁面</a>
            {isUnlocked && (
              <div className="bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-xs">
                <div>ID: {_0xce("hu")}</div>
                <div>PW: <span className="text-purple-400 font-bold">{_0xce("hp")}</span></div>
              </div>
            )}
          </div>
        </Card>

        {/* 11. AI Hour of AI */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl p-8 hover:border-cyan-500/20 transition-colors flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div className="p-3 bg-cyan-500/10 rounded-xl"><Brain className="w-8 h-8 text-cyan-500" /></div>
            <h2 className="text-xl font-bold text-cyan-400">Hour of AI</h2>
          </div>
          <a href="https://code.org/en-US/hour-of-ai" target="_blank" rel="noopener noreferrer"><ExternalLink className="w-5 h-5 text-zinc-600 hover:text-white" /></a>
        </Card>

        {/* 12. AI Kyros */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl p-8 hover:border-cyan-500/20 transition-colors flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div className="p-3 bg-cyan-500/10 rounded-xl"><Sparkles className="w-8 h-8 text-cyan-500" /></div>
            <h2 className="text-xl font-bold text-cyan-400">Kyros AI Special Program</h2>
          </div>
          <a href="https://www.kyros.ai/special-program-detail/22130" target="_blank" rel="noopener noreferrer"><ExternalLink className="w-5 h-5 text-zinc-600 hover:text-white" /></a>
        </Card>

        {/* 13. EDX Global */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl p-8 hover:border-red-600/20 transition-colors flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div className="p-3 bg-red-600/10 rounded-xl"><Globe className="w-8 h-8 text-red-600" /></div>
            <h2 className="text-xl font-bold">EDX Global Learning</h2>
          </div>
          <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" className="text-red-500 font-bold">開啟官網</a>
        </Card>

        {/* 14. Funday 英語 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl p-8 hover:border-blue-500/20 transition-colors">
          <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-blue-500/10 rounded-xl"><GraduationCap className="w-8 h-8 text-blue-500" /></div>
              <h2 className="text-xl font-bold">Funday 英語學習</h2>
            </div>
            <a href="https://funday.asia/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 px-6 py-2 rounded-lg text-xs font-bold">前往平台</a>
            {isUnlocked && (
              <div className="bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-xs">
                <div>ID: {_0xce("u")}</div>
                <div>PW: <span className="text-blue-400 font-bold">{_0xce("p")}</span></div>
              </div>
            )}
          </div>
        </Card>

        {/* 15. SOP 官方網站 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl p-8 hover:border-rose-500/20 transition-colors flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div className="p-3 bg-rose-500/10 rounded-xl"><Layout className="w-8 h-8 text-rose-500" /></div>
            <h2 className="text-xl font-bold">SOP 讚美之泉官方網站</h2>
          </div>
          <a href="https://www.sop.org/" target="_blank" rel="noopener noreferrer" className="text-rose-500 font-bold">VISIT SITE</a>
        </Card>

      </div>

      {/* Footer Exit */}
      <div className="mt-24 flex justify-center">
        <button 
          onClick={() => {
            sessionStorage.removeItem('personal_access');
            router.push('/');
          }} 
          className="text-zinc-800 hover:text-zinc-500 font-bold transition-all text-sm tracking-widest uppercase"
        >
          Logout System
        </button>
      </div>
    </div>
  );
}
