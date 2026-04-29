import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "elumalab",
  description: "WhatsApp-basierte SaaS Plattform für Vertrieb und Kundenservice",
};

const nav = [
  ["Home", "/"],
  ["Product", "/product"],
  ["Dashboard", "/dashboard"],
  ["Onboarding", "/onboarding"],
  ["Vision & Mission", "/vision-mission"],
  ["Pricing", "/pricing"],
  ["Login", "/login"],
] as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-semibold text-cyan-300">elumalab</Link>
            <nav className="hidden gap-5 text-sm text-slate-300 md:flex">
              {nav.map(([label, href]) => <Link key={href} href={href} className="hover:text-white">{label}</Link>)}
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-slate-800/70 bg-slate-950/80">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-slate-300">
            <p>© {new Date().getFullYear()} elumalab · hello@elumalab.com</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/">Go back to menu</Link>
              <Link href="/impressum">Impressum</Link>
              <Link href="/imprint">Imprint</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
