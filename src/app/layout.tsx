import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AdminProvider } from "@/lib/AdminContext";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { AdminTrigger } from "@/components/AdminTrigger";

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
        <LanguageProvider>
          <AdminProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <AdminTrigger />
          </AdminProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
