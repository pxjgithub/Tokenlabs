import { ProductsPageClient } from "@/components/products-page-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "产品中心 | TokenLabs - Mermaid AI, 维权问问, BOSS 合同",
  description: "探索 TokenLabs (词元实验室) 孵化的 AI 产品系列：Mermaid AI (AI 自动生成图表)、维权问问 (智能法律助手)、BOSS 合同 (AI 合同审查) 等。用 AI 技术赋能生产力。",
  keywords: [
    "Mermaid AI",
    "维权问问",
    "BOSS 合同",
    "Memory AI",
    "TokenLabs 产品",
    "AI 工具集",
    "智能生产力工具",
    "AI 法律助手",
    "AI 合同助手",
    "文本转图表",
    "AI思维导图",
    "Markdown画图",
    "流程图自动生成",
    "AI律师",
    "免费法律咨询",
    "合同风险审查",
    "AI办公神器"
  ],
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: "TokenLabs AI 产品矩阵 | 赋能每一个 Token",
    description: "从 Mermaid AI 到维权问问，探索 TokenLabs 孵化的系列创新 AI 工具。",
    url: '/products',
  },
};

export default function ProductsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SoftwareApplication",
        "position": 1,
        "name": "Mermaid AI",
        "description": "专业的 AI 驱动图表工具，让想法表达更简单。",
        "applicationCategory": "ProductivityApplication",
        "operatingSystem": "Web",
        "url": "https://mermaid.tokenlabs.me/"
      },
      {
        "@type": "SoftwareApplication",
        "position": 2,
        "name": "维权问问",
        "description": "让既懂法律法规，又懂你的 AI 助手给你专业的维权建议吧。",
        "applicationCategory": "LegalApplication",
        "operatingSystem": "Web"
      },
      {
        "@type": "SoftwareApplication",
        "position": 3,
        "name": "BOSS 合同",
        "description": "替老板省力又赚钱的 AI 合同助手，才是好助手。",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web"
      },
      {
        "@type": "SoftwareApplication",
        "position": 4,
        "name": "Memory AI",
        "description": "让 AI 先了解你，再帮你解决问题。",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Web"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductsPageClient />
    </>
  );
}
