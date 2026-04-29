import Link from "next/link";
const meetingUrl = "https://meetings-eu1.hubspot.com/r-serrano?uuid=4b1c52ce-75c7-40bb-8504-599ae3529b34";
export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 text-slate-100">
      <h1 className="text-5xl font-semibold">Pricing</h1>
      <p className="mt-3 text-slate-300">Transparente Pakete. Upgrade jederzeit möglich.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {["Starter · €149", "Growth · €399", "Scale · Custom"].map((x) => <div key={x} className="feature-card text-2xl">{x}</div>)}
      </div>
      <a className="btn-primary mt-8 inline-block" href={meetingUrl} target="_blank" rel="noreferrer">Book a Meeting</a>
      <div><Link href="/" className="mt-6 inline-block text-cyan-300">← Back</Link></div>
    </main>
  );
}
