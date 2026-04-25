'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Lock } from 'lucide-react';

export default function PersonalPage() {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

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

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">個人系統</h1>
        <p className="text-muted-foreground">歡迎回來，Brian。這裡存放你的私人學習資源與上課連結。</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border-blue-100 bg-blue-50/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              上課連結
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              等待新增連結...
            </p>
            <div className="space-y-2">
              {/* 這裡之後會放上課連結 */}
              <p className="text-xs italic text-slate-400">目前尚無連結，請貼給我網址後為您新增。</p>
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
