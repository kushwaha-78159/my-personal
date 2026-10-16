"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Login failed");
      router.replace("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-[75vh] max-w-md items-center px-5 py-16">
      <form onSubmit={submit} className="w-full rounded-3xl border border-white/10 bg-white/[.04] p-8">
        <p className="text-sm font-bold uppercase tracking-[.25em] text-cyan-300">Private area</p>
        <h1 className="mt-3 text-3xl font-black">Admin sign in</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">Sign in with the server-configured admin credentials.</p>
        <label className="mt-7 block text-sm font-semibold">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required autoComplete="username" className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-300" />
        <label className="mt-5 block text-sm font-semibold">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required autoComplete="current-password" className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-300" />
        {error && <p role="alert" className="mt-4 text-sm text-red-300">{error}</p>}
        <button disabled={busy} className="mt-6 w-full rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 disabled:opacity-50">{busy ? "Signing in…" : "Sign in securely"}</button>
      </form>
    </main>
  );
}
