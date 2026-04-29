"use client";

import { useMemo, useState } from "react";

type Lang = "de" | "en";

const content = {
  de: {
    nav: ["Plattform", "Story", "Branchen", "Für wen", "Kontakt"],
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
  },
  en: {
    nav: ["Platform", "Story", "Industries", "Who it's for", "Contact"],
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

  return (
    <main className="relative overflow-hidden bg-[#020617] text-slate-100">
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="grid-overlay" />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8">
        <div className="text-lg font-semibold tracking-wide">elumalab</div>
        <nav className="hidden gap-7 text-sm text-slate-300 md:flex">
          {t.nav.map((item) => (
            <a key={item} href="#" className="transition hover:text-white">{item}</a>
          ))}
        </nav>
        <div className="glass rounded-full p-1">
          <button onClick={() => setLang("de")} className={`lang-btn ${lang === "de" ? "active" : ""}`}>DE</button>
          <button onClick={() => setLang("en")} className={`lang-btn ${lang === "en" ? "active" : ""}`}>EN</button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
        <p className="inline-flex rounded-full border border-cyan-300/50 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">{t.badge}</p>
        <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">{t.title}</h1>
        <p className="mt-8 max-w-3xl text-xl text-slate-300">{t.subtitle}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="mailto:founders@elumalab.com" className="btn-primary">{t.ctaPrimary}</a>
          <a href="#story" className="btn-secondary">{t.ctaSecondary}</a>
        </div>

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10">
          <div className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Live Simulation</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {["Lead from WhatsApp", "AI triages intent", "Auto-routed to sales"].map((step, i) => (
              <div key={step} className="sim-card">
                <span className="sim-dot" />
                <div className="text-sm text-slate-400">0{i + 1}</div>
                <div className="mt-2 text-lg">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 md:grid-cols-2">
        <article className="glass rounded-3xl p-8">
          <h2 className="text-3xl font-medium">{t.whyTitle}</h2>
          <p className="mt-5 text-slate-300">{t.whyText}</p>
        </article>
        <article className="glass rounded-3xl p-8">
          <h2 className="text-3xl font-medium">{t.audienceTitle}</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {t.audiences.map((item) => (
              <li key={item} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-cyan-300" />{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-2">
        {pillars[lang].map(([title, desc]) => (
          <article key={title} className="feature-card">
            <h3 className="text-2xl font-medium">{title}</h3>
            <p className="mt-3 text-slate-300">{desc}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
