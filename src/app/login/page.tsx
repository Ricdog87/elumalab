import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md px-6 py-20 text-slate-100">
      <h1 className="text-4xl font-semibold">Login</h1>
      <p className="mt-3 text-slate-300">Sign in to your elumalab workspace.</p>
      <form className="mt-8 space-y-4 rounded-2xl border border-slate-800 p-6">
        <input className="w-full rounded-lg bg-slate-900 p-3" placeholder="Work email" />
        <input type="password" className="w-full rounded-lg bg-slate-900 p-3" placeholder="Password" />
        <button type="button" className="btn-primary w-full">Continue</button>
      </form>
      <Link href="/" className="mt-6 inline-block text-cyan-300">← Back</Link>
    </main>
  );
}
