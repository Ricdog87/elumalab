export default function OnboardingPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-slate-100">
      <h1 className="text-5xl font-semibold">Onboarding in 4 Schritten</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          ["1. Nummer verbinden", "WhatsApp Business in wenigen Minuten verbinden."],
          ["2. Team einladen", "Rollen vergeben, Inbox-Views festlegen."],
          ["3. AI & Automationen", "Templates, Antwortvorschläge, Lead-Workflows aktivieren."],
          ["4. Live gehen", "Innerhalb eines Tages produktiv mit Reporting."],
        ].map(([t, d]) => <article key={t} className="feature-card"><h3 className="text-2xl">{t}</h3><p className="mt-2 text-slate-300">{d}</p></article>)}
      </div>
      <p className="mt-8 text-xl text-cyan-300">Kostennutzen: Schon 1-2 zusätzliche Abschlüsse/Monat decken typischerweise die Plattformkosten.</p>
    </main>
  );
}
