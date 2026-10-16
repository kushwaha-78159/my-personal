import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhishek Kushwaha | Full-Stack Developer",
  description:
    "Portfolio of Abhishek Kushwaha — Full-Stack Developer building web applications, AI-powered tools and database-driven platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#080b16] text-white antialiased">
        <SiteHeader />
        {children}
        <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
          © 2026 Abhishek Kushwaha · Designed and built with Next.js and TypeScript
          <div className="mt-3 flex justify-center gap-5">
            <a href="https://github.com/kushwaha-78159" target="_blank" rel="noreferrer" className="hover:text-cyan-300">GitHub</a>
            <a href="https://www.kaggle.com/abhishek1kushwaha1" target="_blank" rel="noreferrer" className="hover:text-cyan-300">Kaggle</a>
            <a href="https://devpost.com/ABHISHEK78159" target="_blank" rel="noreferrer" className="hover:text-cyan-300">Devpost</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
