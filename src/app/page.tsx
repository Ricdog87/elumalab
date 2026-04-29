"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Lang = "de" | "en";

const content = {
  de: {
    nav: [
      ["Plattform", "#platform"],
      ["Story", "#story"],
      ["Branchen", "#industries"],
      ["Für wen", "#audience"],
      ["Kontakt", "#contact"],
    ] as const,
    badge: "elumalab · WhatsApp Intelligence OS",
    title: "Jede Kundenanfrage in 10 Sekunden verstehen. Jede Antwort in Minuten liefern.",
    subtitle:
      "elumalab verbindet WhatsApp, KI und Teams zu einem Kommunikationssystem, das wie ein Apple-Produkt wirkt: klar, schnell, präzise.",
    ctaPrimary: "Live Demo starten",
    ctaSecondary: "Story entdecken",
    whyTitle: "Warum elumalab heute wichtiger ist denn je",
    whyText:
      "Kunden erwarten sofortige Antworten. Unternehmen verlieren täglich Umsatz durch langsame Reaktionszeiten, Tool-Chaos und fehlende Automationen. elumalab orchestriert Vertrieb, Service und Operations in einer Plattform.",
    audienceTitle: "Für wen ist elumalab?",
    audiences: ["E-Commerce & D2C", "Immobilien & Beratung", "Kliniken & Praxen", "Lokale Multi-Standort-Teams"],
    contact: "Kontakt aufnehmen",
  },
  en: {
    nav: [
      ["Platform", "#platform"],
      ["Story", "#story"],
      ["Industries", "#industries"],
      ["Who it's for", "#audience"],
      ["Contact", "#contact"],
    ] as const,
    badge: "elumalab · WhatsApp Intelligence OS",
    title: "Understand every customer request in 10 seconds. Ship every answer in minutes.",
    subtitle:
      "elumalab combines WhatsApp, AI and teams into one communication system that feels like an Apple product: clear, fast, precise.",
    ctaPrimary: "Start live demo",
    ctaSecondary: "Explore story",
    whyTitle: "Why elumalab matters more than ever",
    whyText:
      "Customers expect instant answers. Companies lose revenue every day due to slow response times, tool fragmentation and missing automations. elumalab orchestrates sales, service and operations in one platform.",
    audienceTitle: "Who is elumalab for?",
    audiences: ["E-commerce & D2C", "Real estate & advisory", "Clinics & healthcare", "Local multi-location teams"],
    contact: "Get in touch",
  },
};

const pillars = {
  de: [
    ["Inbox OS", "Alle Konversationen in einem intelligenten Feed mit Priorisierung und SLA-Layer."],
    ["AI Copilot", "Antwortvorschläge, Zusammenfassungen und Intent-Routing auf Knopfdruck."],
    ["Automation Engine", "No-Code-Flows für Leads, Follow-ups, Termine und Eskalationen."],
    ["Revenue Analytics", "Messbar: Erstreaktion, Conversion, Kosten pro Abschluss, Team-Performance."],
  ],
  en: [
    ["Inbox OS", "All conversations in one intelligent feed with priority and SLA layers."],
    ["AI Copilot", "Reply suggestions, summaries and intent routing in one click."],
    ["Automation Engine", "No-code flows for leads, follow-ups, appointments and escalations."],
    ["Revenue Analytics", "Measurable outcomes: first response, conversion, cost per closure, team performance."],
  ],
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("de");
  const t = useMemo(() => content[lang], [lang]);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.16 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative overflow-hidden bg-[#020617] text-slate-100">
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="grid-overlay" />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8">
        <div className="text-lg font-semibold tracking-wide">elumalab</div>
        <nav className="hidden gap-7 text-sm text-slate-300 md:flex">
          {t.nav.map(([item, href]) => (
            <a key={item} href={href} className="transition hover:text-white">{item}</a>
          ))}
        </nav>
        <div className="glass rounded-full p-1">
          <button onClick={() => setLang("de")} className={`lang-btn ${lang === "de" ? "active" : ""}`}>DE</button>
          <button onClick={() => setLang("en")} className={`lang-btn ${lang === "en" ? "active" : ""}`}>EN</button>
        </div>
      </header>

      <section id="platform" className="reveal mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
        <p className="inline-flex rounded-full border border-cyan-300/50 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">{t.badge}</p>
        <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">{t.title}</h1>
        <p className="mt-8 max-w-3xl text-xl text-slate-300">{t.subtitle}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="mailto:hello@elumalab.com" className="btn-primary">{t.ctaPrimary}</a>
          <a href="#story" className="btn-secondary">{t.ctaSecondary}</a>
        </div>

        <div className="reveal mt-14 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10">
          <div className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Live Simulation</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {["Lead from WhatsApp", "AI triages intent", "Auto-routed to sales"].map((step, i) => (
              <div key={step} className="sim-card floating" style={{ animationDelay: `${i * 0.2}s` }}>
                <span className="sim-dot" />
                <div className="text-sm text-slate-400">0{i + 1}</div>
                <div className="mt-2 text-lg">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 md:grid-cols-2">
        <article className="reveal glass rounded-3xl p-8">
          <h2 className="text-3xl font-medium">{t.whyTitle}</h2>
          <p className="mt-5 text-slate-300">{t.whyText}</p>
        </article>
        <article id="audience" className="reveal glass rounded-3xl p-8">
          <h2 className="text-3xl font-medium">{t.audienceTitle}</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {t.audiences.map((item) => (
              <li key={item} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-cyan-300" />{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section id="industries" className="mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-2">
        {pillars[lang].map(([title, desc], idx) => (
          <article key={title} className="reveal feature-card" style={{ transitionDelay: `${idx * 80}ms` }}>
            <h3 className="text-2xl font-medium">{title}</h3>
            <p className="mt-3 text-slate-300">{desc}</p>
          </article>
        ))}
      </section>

      <footer id="contact" className="border-t border-slate-800/70 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-slate-300">
          <p>© {new Date().getFullYear()} elumalab · hello@elumalab.com</p>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-white">Impressum</Link>
            <Link href="/imprint" className="hover:text-white">Imprint</Link>
            <a href="mailto:hello@elumalab.com" className="hover:text-white">{t.contact}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
