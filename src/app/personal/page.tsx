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
      {/* 頂部導覽列 */}
      <div className="border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-widest uppercase">Personal System</h1>
          {!isUnlocked ? (
            <Button onClick={() => setShowPrompt(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-8 h-12 shadow-lg shadow-blue-600/20 transition-all active:scale-95">
              <Lock className="w-4 h-4 mr-2" /> 解鎖資料
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setIsUnlocked(false)} className="text-zinc-500 border-zinc-800 hover:bg-zinc-900 rounded-xl px-8 h-12 transition-all">
              <Eye className="w-4 h-4 mr-2" /> 重新鎖定
            </Button>
          )}
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-5xl space-y-6">
        
        {/* 驗證視窗 */}
        {showPrompt && !isUnlocked && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-6">
            <Card className="max-w-md w-full bg-zinc-900 border-white/10 rounded-3xl p-10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">身份驗證</h3>
              <form onSubmit={handleUnlock} className="space-y-6">
                <Input
                  type="password"
                  placeholder="Enter Password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className={`h-14 text-center text-2xl bg-black/50 border-white/10 text-white rounded-xl ${passError ? "border-red-500 animate-shake" : ""}`}
                  autoFocus
                />
                <div className="flex gap-4">
                  <Button type="button" variant="ghost" className="flex-1 h-12 text-zinc-500" onClick={() => setShowPrompt(false)}>取消</Button>
                  <Button type="submit" className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl">確認</Button>
                </div>
              </form>
            </Card>
          </div>
        )}

        {/* --- 長方形板塊清單 --- */}

        {/* 1. SOP 會員系統 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl overflow-hidden hover:border-rose-500/30 transition-all">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-2 self-stretch bg-rose-600" />
            <div className="p-8 flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-rose-500/10 rounded-xl"><ShieldCheck className="w-10 h-10 text-rose-500" /></div>
                <div>
                  <h2 className="text-2xl font-bold text-white">SOP 會員登入系統</h2>
                  <p className="text-zinc-500 text-sm">讚美之泉內部管理入口</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                {isUnlocked && (
                  <div className="bg-zinc-900 px-6 py-3 rounded-xl border border-white/5 font-mono text-sm space-y-1">
                    <div className="text-zinc-400">ID: {_0xce("su")}</div>
                    <div className="text-rose-500 font-bold">PW: {_0xce("sp")}</div>
                  </div>
                )}
                <a href="https://members.sop.org/" target="_blank" rel="noopener noreferrer" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-rose-600/10">進入系統</a>
              </div>
            </div>
          </div>
        </Card>

        {/* 2. 歷史專題 (Zoom) */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-2 self-stretch bg-orange-600" />
            <div className="p-8 flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-orange-500/10 rounded-xl"><History className="w-10 h-10 text-orange-500" /></div>
                <h2 className="text-2xl font-bold text-white">歷史專題課程 (Zoom)</h2>
              </div>
              <div className="flex items-center gap-6">
                {isUnlocked && <div className="text-3xl font-mono font-black text-orange-500 bg-zinc-900 px-6 py-3 rounded-xl border border-white/5">{_0xce("zid")}</div>}
                <a href="https://us06web.zoom.us/j/5844221701?pwd=7fz5sBze027txb5MxbFYpC5g8cnN9a.1" target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-xl font-black text-xl shadow-lg">進入會議</a>
              </div>
            </div>
          </div>
        </Card>

        {/* 3. 歷史課教材雲端 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-2 self-stretch bg-emerald-600" />
            <div className="p-8 flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-emerald-500/10 rounded-xl"><Cloud className="w-10 h-10 text-emerald-500" /></div>
                <h2 className="text-2xl font-bold text-white">歷史課教材雲端 (Drive)</h2>
              </div>
              {isUnlocked ? (
                <a href="https://drive.google.com/drive/folders/1D3GTOwFTenNT1I1v-5SPNu3lD597mRsr" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 text-emerald-400 border border-emerald-500/20 px-8 py-3 rounded-xl font-bold hover:bg-zinc-800">開啟 Google Drive</a>
              ) : <div className="text-zinc-800 font-bold italic">RESOURCES LOCKED</div>}
            </div>
          </div>
        </Card>

        {/* 4. 辯論私教課程 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-2 self-stretch bg-violet-600" />
            <div className="p-8 flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-violet-500/10 rounded-xl"><MessageSquare className="w-10 h-10 text-violet-500" /></div>
                <h2 className="text-2xl font-bold text-white">辯論私教課程 (Brian)</h2>
              </div>
              <div className="flex items-center gap-6">
                {isUnlocked && (
                  <div className="text-right font-mono bg-zinc-900 px-6 py-2 rounded-xl border border-white/5">
                    <div className="text-zinc-500 text-[10px]">{_0xce("dpu")}</div>
                    <div className="text-xl font-bold text-violet-400">PIN: {_0xce("dpin")}</div>
                  </div>
                )}
                <a href="https://meet.google.com/wae-iqur-pqz" target="_blank" rel="noopener noreferrer" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-xl font-bold">進入教室</a>
              </div>
            </div>
          </div>
        </Card>

        {/* 5. 辯論專題 (NGF) */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-2 self-stretch bg-indigo-600" />
            <div className="p-8 flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-indigo-500/10 rounded-xl"><Globe className="w-10 h-10 text-indigo-400" /></div>
                <h2 className="text-2xl font-bold text-white">辯論專題課程 (NGF)</h2>
              </div>
              <a href="https://us06web.zoom.us/j/84058999858?pwd=KdtAd1z6bbROvcrFybThyu3ijODiDW.1" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 text-indigo-400 border border-white/5 px-8 py-3 rounded-xl font-bold hover:bg-zinc-800">OPEN ZOOM</a>
            </div>
          </div>
        </Card>

        {/* 6. 珠心算課程 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-2 self-stretch bg-emerald-500" />
            <div className="p-8 flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-emerald-500/10 rounded-xl"><Binary className="w-10 h-10 text-emerald-500" /></div>
                <h2 className="text-2xl font-bold text-white">珠心算課程</h2>
              </div>
              <a href="https://meet.google.com/znu-vmds-fxi" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold">進入 Meet</a>
            </div>
          </div>
        </Card>

        {/* 7. 奧數數學精英課 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-2 self-stretch bg-red-600" />
            <div className="p-8 flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-red-500/10 rounded-xl"><Sigma className="w-10 h-10 text-red-500" /></div>
                <h2 className="text-2xl font-bold text-white">奧數數學精英課</h2>
              </div>
              <div className="flex items-center gap-6">
                {isUnlocked && <div className="text-2xl font-mono font-bold text-red-500 bg-zinc-900 px-6 py-2 rounded-xl border border-white/5">{_0xce("omid")}</div>}
                <a href="https://meet.google.com/wjn-atpi-ifx" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold">進入教室</a>
              </div>
            </div>
          </div>
        </Card>

        {/* 8. 慶元數學課程 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-2 self-stretch bg-blue-600" />
            <div className="p-8 flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-blue-500/10 rounded-xl"><Calculator className="w-10 h-10 text-blue-500" /></div>
                <h2 className="text-2xl font-bold text-white">慶元數學課程</h2>
              </div>
              <a href="https://meet.google.com/ddr-hdrt-eru" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold">進入 Meet</a>
            </div>
          </div>
        </Card>

        {/* 9. 英文理化專題 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl overflow-hidden hover:border-teal-500/30 transition-all">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-2 self-stretch bg-teal-500" />
            <div className="p-8 flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-teal-500/10 rounded-xl"><Microscope className="w-10 h-10 text-teal-500" /></div>
                <h2 className="text-2xl font-bold text-white">英文理化專題</h2>
              </div>
              <a href="https://meet.google.com/fzm-ecmz-api" target="_blank" rel="noopener noreferrer" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-xl font-bold">開啟連結</a>
            </div>
          </div>
        </Card>

        {/* 10. Henry 讀書會 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-2 self-stretch bg-purple-600" />
            <div className="p-8 flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-purple-500/10 rounded-xl"><BookOpen className="w-10 h-10 text-purple-500" /></div>
                <h2 className="text-2xl font-bold text-white">Henry 讀書會</h2>
              </div>
              <div className="flex items-center gap-6">
                {isUnlocked && (
                  <div className="bg-zinc-900 px-6 py-2 rounded-xl border border-white/5 font-mono text-sm">
                    <div className="text-zinc-500">ID: {_0xce("hu")}</div>
                    <div className="text-purple-400 font-bold">PW: {_0xce("hp")}</div>
                  </div>
                )}
                <a href="https://course.henrypedia.com/login" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-bold">前往登入</a>
              </div>
            </div>
          </div>
        </Card>

        {/* 11. Hour of AI */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-2 self-stretch bg-cyan-500" />
            <div className="p-8 flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-cyan-500/10 rounded-xl"><Brain className="w-10 h-10 text-cyan-500" /></div>
                <h2 className="text-2xl font-bold text-white">Hour of AI</h2>
              </div>
              <a href="https://code.org/en-US/hour-of-ai" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-bold hover:underline flex items-center gap-2">START STUDY <ExternalLink className="w-4 h-4" /></a>
            </div>
          </div>
        </Card>

        {/* 12. Kyros AI */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-2 self-stretch bg-cyan-500" />
            <div className="p-8 flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-cyan-500/10 rounded-xl"><Sparkles className="w-10 h-10 text-cyan-500" /></div>
                <h2 className="text-2xl font-bold text-white">Kyros AI Special Program</h2>
              </div>
              <a href="https://www.kyros.ai/special-program-detail/22130" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-bold hover:underline flex items-center gap-2">OPEN <ExternalLink className="w-4 h-4" /></a>
            </div>
          </div>
        </Card>

        {/* 13. EDX 全球課堂 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl overflow-hidden hover:border-red-600/30 transition-all">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-2 self-stretch bg-red-600" />
            <div className="p-8 flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-red-600/10 rounded-xl"><Globe className="w-10 h-10 text-red-600" /></div>
                <h2 className="text-2xl font-bold text-white">EDX 全球課堂</h2>
              </div>
              <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold">VISIT SITE</a>
            </div>
          </div>
        </Card>

        {/* 14. Funday 英語學習 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-2 self-stretch bg-blue-600" />
            <div className="p-8 flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-blue-500/10 rounded-xl"><GraduationCap className="w-10 h-10 text-blue-500" /></div>
                <h2 className="text-2xl font-bold text-white uppercase">Funday</h2>
              </div>
              <div className="flex items-center gap-6">
                {isUnlocked && (
                  <div className="bg-zinc-900 px-6 py-2 rounded-xl border border-white/5 font-mono text-sm">
                    <div className="text-zinc-500">ID: {_0xce("u")}</div>
                    <div className="text-blue-400 font-bold">PW: {_0xce("p")}</div>
                  </div>
                )}
                <a href="https://funday.asia/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold">前往平台</a>
              </div>
            </div>
          </div>
        </Card>

        {/* 15. SOP 讚美之泉官網 */}
        <Card className="bg-zinc-950 border-white/5 rounded-2xl overflow-hidden hover:border-rose-500/30 transition-all">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-2 self-stretch bg-rose-600" />
            <div className="p-8 flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-rose-500/10 rounded-xl"><Layout className="w-10 h-10 text-rose-500" /></div>
                <h2 className="text-2xl font-bold text-white">SOP 讚美之泉官方網站</h2>
              </div>
              <a href="https://www.sop.org/" target="_blank" rel="noopener noreferrer" className="text-rose-500 font-bold hover:underline">BROWSE WEBSITE</a>
            </div>
          </div>
        </Card>

        {/* 底部登出 */}
        <div className="mt-20 py-10 flex justify-center">
          <button 
            onClick={() => {
              sessionStorage.removeItem('personal_access');
              router.push('/');
            }} 
            className="text-zinc-800 hover:text-red-500 font-black text-xl tracking-[0.2em] transition-all uppercase"
          >
            Logout System
          </button>
        </div>
      </div>
    </div>
  );
}
