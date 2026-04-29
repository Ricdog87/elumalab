export default function ProductPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 text-slate-100">
      <h1 className="text-5xl font-semibold">Was genau macht elumalab?</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          ["Team Inbox", "Zentrale WhatsApp Inbox mit Zuweisung und Priorisierung."],
          ["AI Copilot", "Antwortvorschläge, Zusammenfassungen und Intent-Erkennung."],
          ["Automationen", "No-Code Flows für Follow-ups, Terminierung, Eskalationen."],
          ["Analytics", "Antwortzeiten, Conversion, Umsatzbeitrag, Teamleistung."],
        ].map(([t,d]) => <article key={t} className="feature-card"><h2 className="text-2xl">{t}</h2><p className="mt-2 text-slate-300">{d}</p></article>)}
      </div>
    </main>
  );
}
