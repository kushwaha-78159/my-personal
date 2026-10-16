"use client";

import { useState } from "react";

const field = "w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-cyan-300";

export default function ContactForm() {
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const [success, setSuccess] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setNotice("");
    setSuccess(false);

    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Message could not be sent.");
      setSuccess(true);
      setNotice("Thanks! Your message was saved. I will get back to you soon.");
      form.reset();
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-slate-300">Your name *
          <input className={`${field} mt-2`} name="name" placeholder="Full name" maxLength={120} required />
        </label>
        <label className="block text-sm text-slate-300">Email address *
          <input className={`${field} mt-2`} name="email" type="email" placeholder="you@example.com" maxLength={254} required />
        </label>
        <label className="block text-sm text-slate-300">Phone
          <input className={`${field} mt-2`} name="phone" type="tel" placeholder="Optional phone number" maxLength={40} />
        </label>
        <label className="block text-sm text-slate-300">Project type
          <select className={`${field} mt-2`} name="projectType" defaultValue="">
            <option value="">Choose a project type</option>
            <option>Website development</option><option>Web application</option>
            <option>AI / automation</option><option>Consultation</option><option>Other</option>
          </select>
        </label>
        <label className="block text-sm text-slate-300 sm:col-span-2">Budget
          <input className={`${field} mt-2`} name="budget" placeholder="Optional budget" maxLength={120} />
        </label>
      </div>
      <label className="block text-sm text-slate-300">Your message *
        <textarea className={`${field} mt-2`} name="message" rows={5} placeholder="Tell me about your idea..." maxLength={10000} required />
      </label>
      {notice && (
        <p role="status" className={`rounded-xl border p-4 text-sm ${success ? "border-emerald-300/30 text-emerald-200" : "border-red-300/30 text-red-200"}`}>
          {notice}
        </p>
      )}
      <button type="submit" disabled={busy}
        className="rounded-xl bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60">
        {busy ? "Sending…" : "Send message →"}
      </button>
      <p className="text-xs text-slate-500">Your message will be saved securely for review by the site administrator.</p>
    </form>
  );
}
