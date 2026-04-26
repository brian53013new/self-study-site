import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Compass, Map, BookOpen } from "lucide-react";
import { AdminProvider } from "@/lib/AdminContext";
import { AdminTrigger } from "@/components/AdminTrigger";
import { StudySettings } from "@/components/StudySettings";
import { PersonalTrigger } from "@/components/PersonalTrigger";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "自學指南 - 高品質資源導覽站",
  description: "精選 YouTube 頻道、部落格與工具網站，幫助自學者少走彎路。",
  icons: {
    icon: [
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg?v=2',
    apple: '/favicon.svg?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <AdminProvider>
          <nav className="bg-background border-b sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
              <Link href="/" className="flex items-center font-bold text-xl text-blue-600">
                <Compass className="w-6 h-6 mr-2" />
                自學指南
              </Link>
              
              <div className="flex items-center space-x-6">
                <Link href="/" className="text-muted-foreground hover:text-blue-600 flex items-center text-sm font-medium">
                  <Compass className="w-4 h-4 mr-1" />
                  資源導航
                </Link>
                <Link href="/vocab" className="text-muted-foreground hover:text-blue-600 flex items-center text-sm font-medium">
                  <BookOpen className="w-4 h-4 mr-1" />
                  單字庫
                </Link>
                <Link href="/roadmaps" className="text-muted-foreground hover:text-blue-600 flex items-center text-sm font-medium">
                  <Map className="w-4 h-4 mr-1" />
                  學習路徑
                </Link>
                <PersonalTrigger />
                <div className="pl-2 border-l border-border">
                  <StudySettings />
                </div>
              </div>            </div>
          </nav>
          <main className="flex-grow">
            {children}
          </main>
          <AdminTrigger />
        </AdminProvider>
      </body>
    </html>
  );
}
