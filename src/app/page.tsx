"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Lang = "de" | "en";
const meetingUrl = "https://meetings-eu1.hubspot.com/r-serrano?uuid=4b1c52ce-75c7-40bb-8504-599ae3529b34";

const copy = {
  de: {
    hero: "elumalab ist die WhatsApp-Plattform für Vertrieb, Service und Operations.",
    sub: "Ein Posteingang. KI-Automation. Volle Kontrolle über Reaktionszeit, Conversion und Kosten.",
    cta: "Book a Meeting",
  },
  en: {
    hero: "elumalab is the WhatsApp platform for sales, support and operations.",
    sub: "One inbox. AI automation. Full control over response speed, conversion and communication cost.",
    cta: "Book a Meeting",
  },
};

const pricing = [
  { name: "Starter", price: "€149", desc: "Für kleine Teams", points: ["1 WhatsApp Nummer", "3 Seats", "Inbox + Basics"] },
  { name: "Growth", price: "€399", desc: "Für skalierende Teams", points: ["3 Nummern", "10 Seats", "AI Copilot + Automationen"] },
  { name: "Scale", price: "Custom", desc: "Für Enterprise", points: ["Unlimitierte Nummern", "SSO + RBAC", "SLA + dedizierter Support"] },
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("de");
  const t = useMemo(() => copy[lang], [lang]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-slate-100">
      <div className="aurora aurora-1" /><div className="aurora aurora-2" /><div className="grid-overlay" />
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <Link href="/" className="text-xl font-semibold">elumalab</Link>
        <nav className="hidden gap-6 text-sm md:flex">
          <Link href="/product">Product</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/onboarding">Onboarding</Link>
          <Link href="/vision-mission">Vision & Mission</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/login">Login</Link>
        </nav>
        <div className="glass rounded-full p-1">
          <button onClick={() => setLang("de")} className={`lang-btn ${lang === "de" ? "active" : ""}`}>DE</button>
          <button onClick={() => setLang("en")} className={`lang-btn ${lang === "en" ? "active" : ""}`}>EN</button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10 reveal is-visible">
        <h1 className="max-w-5xl text-5xl font-semibold leading-tight md:text-7xl">{t.hero}</h1>
        <p className="mt-6 max-w-3xl text-xl text-slate-300">{t.sub}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={meetingUrl} target="_blank" className="btn-primary" rel="noreferrer">{t.cta}</a>
          <Link href="/dashboard" className="btn-secondary">Dashboard Preview</Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-3">
        {pricing.map((p) => (
          <article key={p.name} className="feature-card reveal is-visible">
            <h3 className="text-2xl font-medium">{p.name}</h3>
            <div className="mt-2 text-4xl font-semibold">{p.price}<span className="text-sm text-slate-400"> /mo</span></div>
            <p className="mt-2 text-slate-400">{p.desc}</p>
            <ul className="mt-4 space-y-2 text-slate-300">{p.points.map((x) => <li key={x}>• {x}</li>)}</ul>
          </article>
        ))}
      </section>
    </main>
  );
}
