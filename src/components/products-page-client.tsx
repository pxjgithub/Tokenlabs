"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ShieldCheck, Brain, Command, type LucideIcon, ReceiptText } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  status: string;
  href?: string;
  color: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Mermaid AI",
    description: "专业的 AI 驱动图表工具，文本一键生成流程图、思维导图、甘特图。",
    icon: Command,
    status: "已上线",
    href: "https://mermaid.tokenlabs.me/",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "维权问问",
    description: "您的智能法律顾问，提供专业的劳动维权、合同纠纷与法律咨询建议。",
    icon: ShieldCheck,
    status: "即将上线",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    id: 3,
    title: "BOSS 合同",
    description: "AI 合同审查助手，智能识别合同风险，替老板省力又赚钱。",
    icon: ReceiptText,
    status: "研发中",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "Memory AI",
    description: "让 AI 先了解你，再帮你解决问题。",
    icon: Brain,
    status: "研发中",
    color: "from-green-500/20 to-emerald-500/20",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  },
};

export function ProductsPageClient() {
  return (
    <div className="flex-1 container mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">TokenLabs 产品系列</h1>
        <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
          探索我们正在孵化的创新项目，体验 AI 带来的无限可能。
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl"
      >
        {products.map((product) => {
          const isLink = !!product.href;
          const Component = isLink ? motion.a : motion.div;
          
          return (
            <Component
              key={product.id}
              variants={item}
              {...(isLink ? { href: product.href, target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10 hover:border-white/20 block text-left"
            >
            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100", product.color)} />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-xl bg-white/10 text-white">
                  <product.icon className="w-6 h-6" />
                </div>
                <span className={cn(
                  "px-3 py-1 text-xs font-medium rounded-full border",
                  product.status === "已上线" 
                    ? "bg-green-500/10 text-green-400 border-green-500/20" 
                    : "bg-white/5 text-white/40 border-white/10"
                )}>
                  {product.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                {product.title}
              </h3>
              
              <p className="text-white/60 mb-8 leading-relaxed flex-grow">
                {product.description}
              </p>
              
              <div className="flex items-center text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                了解更多
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </Component>
        )})}
      </motion.div>
    </div>
  );
}
