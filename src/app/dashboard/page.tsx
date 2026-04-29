export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 text-slate-100">
      <h1 className="text-5xl font-semibold">elumalab Dashboard (Simulation)</h1>
      <p className="mt-4 text-slate-300">So sieht ein typischer Arbeitstag aus: Priorisierte Inbox, AI-Antworten und Umsatzwirkung in Echtzeit.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {[["Open Conversations", "128"], ["Avg. First Response", "1m 42s"], ["AI Deflection", "37%"], ["Won Revenue", "€42,800"]].map(([k,v]) => (
          <div key={k} className="feature-card"><p className="text-slate-400">{k}</p><p className="mt-2 text-3xl font-semibold">{v}</p></div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-slate-800 p-6">
        <h2 className="text-2xl">Inbox Stream</h2>
        <ul className="mt-4 space-y-3 text-slate-300">
          <li>🔵 New Lead: &quot;Brauche Angebot bis morgen&quot; → AI erkennt Intent &quot;Sales&quot;</li>
          <li>🟣 Follow-up automatisch nach 30 Min gesendet</li>
          <li>🟢 Team übernimmt, Angebot gesendet, Deal in CRM aktualisiert</li>
        </ul>
      </div>
    </main>
  );
}
