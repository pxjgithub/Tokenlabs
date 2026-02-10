import { HomePageClient } from "@/components/home-page-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TokenLabs - 词元实验室 | Mermaid AI 官方孵化器",
  description: "TokenLabs (词元实验室) 是一家专注于 AI 产品孵化的实验室，成功孵化 Mermaid AI, 维权问问, BOSS 合同等智能工具。我们致力于通过大模型技术将每一个 Token 转化为实际的用户价值。",
  keywords: [
    "TokenLabs",
    "词元实验室",
    "Mermaid AI",
    "Mermaid AI 官网",
    "AI 流程图生成",
    "维权问问",
    "BOSS 合同",
    "AI 产品孵化器",
    "人工智能实验室",
    "LLM 应用开发",
    "AIGC",
    "Generative AI",
    "AI Agent",
    "智能体",
    "AI 效率工具"
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TokenLabs - 词元实验室 | 探索 AI 的无限可能",
    description: "发现由 TokenLabs 孵化的 Mermaid AI、维权问问等领先 AI 工具。我们专注于大模型应用落地，为用户创造价值。",
    url: '/',
  },
};

export default function Home() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TokenLabs",
    "url": "https://tokenlabs.me",
    "logo": "https://tokenlabs.me/icon.png",
    "description": "将每一个 token 转化为用户价值",
    "sameAs": [
      "https://github.com/pxjgithub/Tokenlabs"
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "TokenLabs 是什么？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TokenLabs (词元实验室) 是一家专注于 AI 产品孵化的实验室，致力于将每一个 token 转化为用户价值。我们探索人工智能的无限可能，开发各类 AI 驱动的实用工具。"
        }
      },
      {
        "@type": "Question",
        "name": "TokenLabs 有哪些产品？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TokenLabs 目前推出了多款 AI 产品，包括：Mermaid AI（AI 流程图生成工具）、维权问问（智能法律维权助手）、BOSS 合同（AI 合同审查助手）以及 Memory AI（个人记忆助手）。"
        }
      },
      {
        "@type": "Question",
        "name": "Mermaid AI 有什么用？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mermaid AI 是一款专业的 AI 驱动图表工具，用户只需通过自然语言描述，即可自动生成流程图、时序图、甘特图等，让想法表达更简单。"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomePageClient />
    </>
  );
}
