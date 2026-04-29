"use client";

const meetingUrl = "https://meetings-eu1.hubspot.com/r-serrano?uuid=4b1c52ce-75c7-40bb-8504-599ae3529b34";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#020617] text-slate-100">
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="grid-overlay" />
      <section className="video-illusion" />

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20">
        <p className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">elumalab • WhatsApp Revenue OS</p>
        <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-tight md:text-7xl">
          Stop losing leads in chat chaos.
          <span className="block text-cyan-300">Turn WhatsApp into a revenue engine.</span>
        </h1>
        <p className="mt-7 max-w-3xl text-xl text-slate-300">
          Unternehmen verlieren Deals durch langsame Antwortzeiten, fehlende Prozesse und zu viele Tools. elumalab bündelt Inbox, KI, Automationen und Analytics in einer Plattform.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={meetingUrl} className="btn-primary" target="_blank" rel="noreferrer">Book a Meeting</a>
          <a href="#pricing" className="btn-secondary">See Pricing</a>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-20 md:grid-cols-3">
        {["⏱ Reaktionszeit zu langsam", "📉 Leads brechen im Chat ab", "🧩 CRM & WhatsApp sind getrennt"].map((p) => (
          <article key={p} className="feature-card tilt-card"><h3 className="text-xl">{p}</h3></article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-4xl font-semibold md:text-5xl">USP: Warum elumalab?</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {[
            ["AI-native Inbox", "Priorisiert automatisch, fasst zusammen und schlägt die nächste beste Aktion vor."],
            ["Sales + Service + Ops", "Eine Plattform statt 5 Tools – damit Teams schneller und konsistenter arbeiten."],
            ["Revenue-first Analytics", "Nicht nur Tickets: wir messen Umsatzbeitrag, Conversion und Cost per Conversation."],
            ["Go-live in 1 Tag", "Nummer verbinden, Team einladen, Templates aktivieren – fertig."],
          ].map(([t, d]) => (
            <article key={t} className="feature-card tilt-card">
              <h3 className="text-2xl font-medium">{t}</h3>
              <p className="mt-3 text-slate-300">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-4xl font-semibold md:text-5xl">Storytelling: Vom Chat-Problem zur Pipeline-Maschine</h2>
        <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900/55 p-8">
          <ol className="space-y-5 text-lg text-slate-200">
            <li><strong>1.</strong> Lead schreibt über WhatsApp: „Ich brauche ein Angebot“.</li>
            <li><strong>2.</strong> elumalab erkennt Intent + Priorität in Sekunden.</li>
            <li><strong>3.</strong> AI Copilot erstellt Antwort + Follow-up Sequenz.</li>
            <li><strong>4.</strong> Deal wird im CRM aktualisiert, Dashboard zeigt Umsatzwirkung live.</li>
          </ol>
        </div>
      </section>

      <section id="pricing" className="mx-auto grid max-w-6xl gap-6 px-6 pb-28 md:grid-cols-3">
        {[
          ["Starter", "€149/mo", ["1 Nummer", "3 Seats", "Inbox + Basis-Automation"]],
          ["Growth", "€399/mo", ["3 Nummern", "10 Seats", "AI Copilot + Flows"]],
          ["Scale", "Custom", ["Unlimited", "SSO + RBAC", "Enterprise SLA"]],
        ].map(([name, price, items]) => (
          <article key={String(name)} className="feature-card tilt-card">
            <h3 className="text-2xl font-medium">{String(name)}</h3>
            <p className="mt-2 text-4xl font-semibold">{String(price)}</p>
            <ul className="mt-4 space-y-2 text-slate-300">
              {(items as string[]).map((i) => <li key={i}>• {i}</li>)}
            </ul>
            <a href={meetingUrl} target="_blank" rel="noreferrer" className="btn-primary mt-6 inline-block">Book a Meeting</a>
          </article>
        ))}
      </section>
    </main>
  );
}
