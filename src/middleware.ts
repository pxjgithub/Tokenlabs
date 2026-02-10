import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  const pathname = request.nextUrl.pathname;
  
  // 1. 绝对优先：如果是百度验证文件，不做任何跳转（包括 www 跳转和 HTTPS 跳转）
  if (pathname.includes('baidu_verify_')) {
    return NextResponse.next();
  }

  // 如果无法获取 host，直接放行
  if (!host) {
    return NextResponse.next();
  }

  // 定义允许的域名列表
  // 在这里我们主要关注生产环境的规范域名
  const expectedHost = 'tokenlabs.me';
  
  // 检查是否是本地开发环境或 Vercel 预览环境
  const isDev = host.includes('localhost') || host.includes('127.0.0.1') || host.endsWith('.vercel.app');

  // 如果不是开发环境，且当前 host 不是我们预期的官方域名
  if (!isDev && host !== expectedHost && host !== `www.${expectedHost}`) {
    // 构造新的 URL
    const url = new URL(request.url);
    url.hostname = expectedHost;
    url.protocol = 'https:';
    url.port = ''; // 清除端口，确保使用默认的 443
    
    // 返回 301 永久重定向
    // 这告诉搜索引擎将权重转移到新的域名
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * 匹配所有路径，但排除以下路径：
     * - api (API 路由)
     * - _next/static (静态文件)
     * - _next/image (图片优化)
     * - favicon.ico, sitemap.xml, robots.txt (静态资源)
     * - baidu_verify_*.html (百度验证文件)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|baidu_verify_.*\\.html).*)',
  ],
};
