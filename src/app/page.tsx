"use client";

import { useMemo, useState } from "react";

const meetingUrl = "https://meetings-eu1.hubspot.com/r-serrano?uuid=4b1c52ce-75c7-40bb-8504-599ae3529b34";

export default function Home() {
  const [jobs, setJobs] = useState(50);
  const [cost, setCost] = useState(300);
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(50);

  const without = useMemo(() => jobs * (cost + hours * rate), [jobs, cost, hours, rate]);
  const withEluma = 1188;
  const saving = Math.max(0, without - withEluma);

  return (
    <main className="relative overflow-hidden bg-[#020617] text-slate-100">
      <div className="aurora aurora-1" /><div className="aurora aurora-2" /><div className="grid-overlay" /><section className="video-illusion" />

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20">
        <h1 className="max-w-5xl text-5xl font-semibold leading-tight md:text-7xl">WhatsApp-Kommunikation, die Umsatz macht.</h1>
        <p className="mt-6 max-w-3xl text-xl text-slate-300">elumalab vereint KI-Agenten, Team-Inbox und Automationen in einer Plattform. Schnell, klar, DSGVO-ready.</p>
        <div className="mt-8 flex gap-4"><a href={meetingUrl} target="_blank" rel="noreferrer" className="btn-primary">Book a Meeting</a></div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-4xl font-semibold">Wie elumalab funktioniert</h2>
        <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900/70 p-6">
          <div className="mb-4 text-xl font-medium">WhatsApp Recruiting Demo</div>
          <div className="chat-shell">
            <div className="chat-bubble bot">Hallo! Willkommen bei elumalab Recruiting. Wie kann ich helfen?</div>
            <div className="chat-bubble user">Ich möchte den Status meiner Bewerbung prüfen.</div>
            <div className="chat-bubble bot">Gerne! Nennen Sie bitte Ihre Bewerbungs-ID.</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-4xl font-semibold">KI-Agenten für Matching & Support</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["Bewerber-Screening Agent", "FAQ & Ticket Agent", "Terminfindungs-Agent"].map((x) => (
            <article key={x} className="feature-card tilt-card"><h3 className="text-2xl">{x}</h3><p className="mt-2 text-slate-300">Automatisiert Prozesse, reduziert manuelle Arbeit und steigert Servicequalität.</p></article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-4xl font-semibold">Video-Interview UI (Mock)</h2>
        <div className="mt-6 rounded-3xl border border-slate-700 bg-slate-900/70 p-6">
          <div className="video-mock">
            <div className="play-btn">▶</div>
            <div className="rec-badge">REC (Simulation)</div>
          </div>
          <p className="mt-4 text-slate-300">Simulierte Sentiment-Analyse: Positiv 78% · Neutral 15% · Negativ 7%</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <h2 className="text-4xl font-semibold">ROI-Simulation</h2>
        <div className="mt-6 grid gap-6 rounded-3xl border border-slate-700 bg-slate-900/70 p-6 md:grid-cols-2">
          <div className="space-y-4">
            <label className="block">Anzahl Stellen: {jobs}<input type="range" min={10} max={200} value={jobs} onChange={(e)=>setJobs(Number(e.target.value))} className="mt-2 w-full"/></label>
            <label className="block">Kosten pro Stelle (€): {cost}<input type="range" min={100} max={1000} value={cost} onChange={(e)=>setCost(Number(e.target.value))} className="mt-2 w-full"/></label>
            <label className="block">Zeitaufwand pro Stelle (Std.): {hours}<input type="range" min={1} max={30} value={hours} onChange={(e)=>setHours(Number(e.target.value))} className="mt-2 w-full"/></label>
            <label className="block">Interner Stundensatz (€): {rate}<input type="range" min={20} max={120} value={rate} onChange={(e)=>setRate(Number(e.target.value))} className="mt-2 w-full"/></label>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-6">
            <p className="text-2xl">Kosten ohne elumalab: <strong>{without.toLocaleString("de-DE")} €</strong></p>
            <p className="mt-3 text-xl text-cyan-300">Kosten mit elumalab (Business): <strong>{withEluma.toLocaleString("de-DE")} €</strong></p>
            <p className="mt-3 text-3xl font-semibold text-emerald-400">Potenzielle Ersparnis: {saving.toLocaleString("de-DE")} €</p>
            <a href={meetingUrl} target="_blank" rel="noreferrer" className="btn-primary mt-6 inline-block">Book a Meeting</a>
          </div>
        </div>
      </section>
    </main>
  );
}
