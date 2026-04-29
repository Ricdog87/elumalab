const features = [
  {
    title: "Gemeinsamer Team-Posteingang",
    text: "Alle WhatsApp-Nachrichten zentral an einem Ort – mit Zuweisungen, Prioritäten und SLAs.",
  },
  {
    title: "KI-Assistenz für Antworten",
    text: "Automatische Antwortvorschläge, Zusammenfassungen und Routing auf Basis des Kundenanliegens.",
  },
  {
    title: "Automationen ohne Code",
    text: "Workflows für Leads, Erinnerungen und Follow-ups in Minuten erstellen.",
  },
  {
    title: "DSGVO- und Audit-Ready",
    text: "Rollen, Protokolle und Datenkontrollen für sichere Kundenkommunikation in der EU.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
          elumalab • WhatsApp SaaS Platform
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          Die WhatsApp-Kommunikationsplattform für wachsende Teams.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-300 md:text-xl">
          Verbinde dein WhatsApp Business mit CRM, Team-Posteingang und KI-Automation. 
          Ziel: schneller antworten, mehr Leads konvertieren und Servicekosten senken.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:founders@elumalab.com?subject=Demo%20elumalab"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
          >
            Demo vereinbaren
          </a>
          <a
            href="#roadmap"
            className="rounded-xl border border-slate-700 px-6 py-3 font-medium transition hover:border-slate-500"
          >
            Produkt-Roadmap ansehen
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-16 md:grid-cols-2">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-medium">{feature.title}</h2>
            <p className="mt-3 text-slate-300">{feature.text}</p>
          </article>
        ))}
      </section>

      <section id="roadmap" className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="text-2xl font-semibold md:text-3xl">MVP-Roadmap (90 Tage)</h3>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            <li className="rounded-xl border border-slate-800 p-5">Phase 1: Foundation (Architektur, CI/CD, Auth, Tenant-Modell)</li>
            <li className="rounded-xl border border-slate-800 p-5">Phase 2: WhatsApp Core (Inbox, Kontakte, Team-Workflows)</li>
            <li className="rounded-xl border border-slate-800 p-5">Phase 3: Automation + Analytics (Rules, Templates, KPI-Dashboard)</li>
            <li className="rounded-xl border border-slate-800 p-5">Phase 4: Hardening + Beta (Security, DSGVO, Pilotkunden)</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
