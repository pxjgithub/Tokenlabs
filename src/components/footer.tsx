import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-6 text-center text-sm text-white/40 z-10 relative">
      <div className="container mx-auto px-4">
        <p>
          Copyright © 2026 词元实验室 -{" "}
          <Link 
            href="https://beian.miit.gov.cn/#/Integrated/index" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white/80 transition-colors"
          >
            滇ICP备20003972号-7
          </Link>
        </p>
      </div>
    </footer>
  );
}
