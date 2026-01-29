import { ProductsPageClient } from "@/components/products-page-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "产品中心 | TokenLabs - AI 创新工具集合",
  description: "探索 TokenLabs 的 AI 产品矩阵：Mermaid AI 智能图表工具、维权问问法律助手、BOSS 合同助手等。用 AI 赋能工作与生活。",
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: "TokenLabs 产品中心",
    description: "发现最新的 AI 生产力工具，从图表生成到法律咨询。",
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
