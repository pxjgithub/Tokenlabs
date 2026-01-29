import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden min-h-[70vh]">
      <div className="container px-4 z-10 flex flex-col items-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          页面未找到
        </h2>
        <p className="text-white/60 max-w-lg mx-auto text-lg font-light mb-10">
          抱歉，您访问的页面不存在或已被移动。
        </p>

        <Link
          href="/"
          className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-white/90 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
        >
          返回首页
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
    </div>
  );
}
