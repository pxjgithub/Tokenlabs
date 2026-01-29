"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";

function GithubIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 98 96"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 12.215.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
      />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "首页" },
    { href: "/products", label: "产品" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-center transition-all duration-300">
      <div className="w-full px-[40px] md:px-[80px] lg:px-[120px] relative flex items-center justify-between z-10">
        <div className="flex items-center gap-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-white/20 to-white/5 ring-1 ring-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_4px_10px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 group-hover:from-white/25 group-hover:to-white/10 group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_8px_20px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <FlaskConical className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" strokeWidth={2.5} />
            </div>
            <span className="text-[22px] font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 drop-shadow-sm group-hover:to-white/90 transition-all duration-300">
              词元实验室
            </span>
          </Link>

          {/* Navigation Links - Left Aligned next to Logo */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[17px] font-bold transition-colors duration-200",
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right side - Optional CTA or Menu */}
        <div className="flex items-center gap-4">
           {/* Mobile Menu Button could go here */}
           <div className="md:hidden text-white/60">
             Menu
           </div>
           
           {/* GitHub Icon Link */}
           <div className="hidden md:block">
             <Link 
               href="https://github.com/pxjgithub/Tokenlabs" 
               target="_blank"
               rel="noopener noreferrer"
               className="text-white/60 hover:text-white transition-colors"
               aria-label="GitHub Repository"
              >
                <GithubIcon style={{ width: 24, height: 24 }} />
              </Link>
            </div>
        </div>
      </div>
    </nav>
  );
}
