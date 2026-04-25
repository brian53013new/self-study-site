'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ExternalLink, Lock, Eye } from 'lucide-react';

export default function PersonalPage() {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  // Funday 帳密解鎖狀態
  const [showFundayPrompt, setShowFundayPrompt] = useState(false);
  const [fundayPasswordInput, setFundayPasswordInput] = useState('');
  const [fundayUnlocked, setFundayUnlocked] = useState(false);
  const [fundayError, setFundayError] = useState(false);

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
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Lock className="w-12 h-12 text-muted-foreground mb-4" />
        <p className="text-muted-foreground">正在驗證權限...</p>
      </div>
    );
  }

  const handleUnlockFunday = (e: React.FormEvent) => {
    e.preventDefault();
    const _0x8b = process.env.NEXT_PUBLIC_PERSONAL_PASSWORD || [102, 114, 105, 97, 110].map(x => String.fromCharCode(x-1)).join('');
    if (fundayPasswordInput === _0x8b) {
      setFundayUnlocked(true);
      setShowFundayPrompt(false);
      setFundayPasswordInput('');
      setFundayError(false);
    } else {
      setFundayError(true);
    }
  };

  const _0xaf = (_0x1: string, _0x2: number) => {
    let _0x3 = "";
    for (let _0x4 = 0; _0x4 < _0x1.length; _0x4++) {
      _0x3 += String.fromCharCode(_0x1.charCodeAt(_0x4) ^ (_0x2 % (_0x4 + 1)));
    }
    return _0x3;
  };

  const _0xce = (_0x5: string) => {
    const _0x6 = "Z2luZ2VybWFuNTMwQEdtYWlsLmNvbQ==";
    const _0x7 = "MDkzMzM2NTUwNQ==";
    const _0x8 = (_0x5 === "u") ? _0x6 : _0x7;
    return atob(_0x8);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">個人系統</h1>
        <p className="text-muted-foreground">歡迎回來，Brian。</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border-blue-100 bg-blue-50/30 dark:bg-blue-900/10 dark:border-blue-800/50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              上課連結
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-blue-600 dark:text-blue-400">Funday</h3>
                  <a 
                    href="https://funday.asia/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                {fundayUnlocked ? (
                  <div className="space-y-2 bg-slate-50 dark:bg-slate-800/50 p-3 rounded text-sm font-mono">
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground shrink-0">ID:</span>
                      <span className="font-bold break-all">
                        {_0xce("u")}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground shrink-0">PW:</span>
                      <span className="font-bold break-all">
                        {_0xce("p")}
                      </span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full mt-2 h-7 text-xs text-muted-foreground hover:text-red-500"
                      onClick={() => setFundayUnlocked(false)}
                    >
                      Lock
                    </Button>
                  </div>
                ) : (
                  <div>
                    {!showFundayPrompt ? (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full flex items-center gap-2"
                        onClick={() => setShowFundayPrompt(true)}
                      >
                        <Eye className="w-4 h-4" />
                        查看登入資訊
                      </Button>
                    ) : (
                      <form onSubmit={handleUnlockFunday} className="space-y-2 mt-2">
                        <Input
                          type="password"
                          placeholder="請輸入系統密碼解鎖"
                          value={fundayPasswordInput}
                          onChange={(e) => setFundayPasswordInput(e.target.value)}
                          className={`h-8 text-sm ${fundayError ? "border-red-500" : ""}`}
                          autoFocus
                        />
                        {fundayError && <p className="text-[10px] text-red-500">密碼不正確</p>}
                        <div className="flex gap-2">
                          <Button type="button" variant="ghost" size="sm" className="flex-1 h-7 text-xs" onClick={() => {
                            setShowFundayPrompt(false);
                            setFundayError(false);
                            setFundayPasswordInput('');
                          }}>
                            取消
                          </Button>
                          <Button type="submit" size="sm" className="flex-1 h-7 text-xs bg-blue-600 hover:bg-blue-700">
                            解鎖
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                )}
              </div>

            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">個人筆記</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              這裡可以放置你的個人學習筆記或代辦事項。
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Button variant="outline" onClick={() => {
          sessionStorage.removeItem('personal_access');
          router.push('/');
        }}>
          登出個人系統
        </Button>
      </div>
    </div>
  );
}
