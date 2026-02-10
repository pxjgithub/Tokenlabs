import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tokenlabs.me"),
  title: {
    default: "TokenLabs | 将每一个 token 转化为用户价值",
    template: "%s | TokenLabs"
  },
  description: "TokenLabs 致力于将每一个 Token 转化为用户价值。我们孵化了 Mermaid AI, 维权问问, BOSS 合同等 AI 产品，探索人工智能的无限可能。",
  keywords: [
    "TokenLabs", 
    "AI", 
    "人工智能", 
    "Mermaid AI", 
    "维权问问", 
    "BOSS合同", 
    "AI实验室", 
    "产品孵化", 
    "LLM", 
    "大模型应用",
    "AIGC",
    "智能体"
  ],
  authors: [{ name: "TokenLabs Team" }],
  creator: "TokenLabs",
  publisher: "TokenLabs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "5Qb4rUe_A8lHhZLP9nBWnVhFpB0HN-BS7gxEQwQcdKQ",
    other: {
      "baidu-site-verification": "d8baa788e04f44c9d4195341486e6177"
    }
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://tokenlabs.me",
    siteName: "TokenLabs",
    title: "TokenLabs | 将每一个 token 转化为用户价值",
    description: "TokenLabs 致力于将每一个 Token 转化为用户价值。我们孵化了 Mermaid AI, 维权问问, BOSS 合同等 AI 产品。",
  },
  twitter: {
    card: "summary_large_image",
    title: "TokenLabs | 将每一个 token 转化为用户价值",
    description: "TokenLabs 致力于将每一个 Token 转化为用户价值。",
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TokenLabs",
    "url": "https://tokenlabs.me",
    "description": "TokenLabs 致力于将每一个 Token 转化为用户价值",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tokenlabs.me/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="zh-CN" className="dark">
      <head>
        <meta name="baidu-site-verification" content="d8baa788e04f44c9d4195341486e6177" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-white/20 min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Global Background Gradients */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-black">
          {/* Base Gradient - Subtle radial glow to break pure black */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-black to-black" />
          
          {/* Noise Texture */}
          <div 
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />

          {/* Fluid Blobs - Apple Intelligence inspired colors */}
          <div className="absolute top-[-10%] left-[10%] w-[40vw] h-[40vw] bg-indigo-500/20 rounded-full blur-[80px] mix-blend-screen animate-blob-1" />
          <div className="absolute top-[-5%] right-[10%] w-[45vw] h-[45vw] bg-fuchsia-500/15 rounded-full blur-[90px] mix-blend-screen animate-blob-2" />
          <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-sky-500/20 rounded-full blur-[85px] mix-blend-screen animate-blob-3" />

          {/* Vignette - Focus attention to center */}
          <div className="absolute inset-0 bg-[radial-gradient(transparent_40%,_black_100%)] opacity-80" />
        </div>

        <Navbar />
        <main className="flex-1 pt-16 flex flex-col relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
