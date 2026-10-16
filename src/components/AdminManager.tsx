"use client";

import { useCallback, useEffect, useState } from "react";

type Kind = "projects" | "content" | "contacts";
type Project = {
  id: string; title: string; description: string; technology: string;
  category: string; url: string; published: boolean;
};
type Content = { id: string; key: string; value: string };
type Contact = {
  id: string; name: string; email: string; phone: string;
  projectType: string; budget: string; message: string;
  status: string; createdAt: string;
};

const inputClass = "w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-300";
const buttonClass = "rounded-xl bg-cyan-300 px-4 py-2.5 font-bold text-slate-950 disabled:opacity-50";
const secondaryClass = "rounded-xl border border-white/15 px-4 py-2.5 font-semibold hover:border-cyan-300";

export default function AdminManager({ kind }: { kind: Kind }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [contents, setContents] = useState<Content[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const [editingId, setEditingId] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [technology, setTechnology] = useState("");
  const [category, setCategory] = useState("GitHub Projects");
  const [published, setPublished] = useState(true);
  const [contentKey, setContentKey] = useState("");
  const [contentValue, setContentValue] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setNotice("");
    try {
      const endpoint = kind === "projects" ? "/api/admin/projects" :
        kind === "content" ? "/api/admin/content" : "/api/admin/contacts";
      const response = await fetch(endpoint, { cache: "no-store" });
      if (response.status === 401) {
        window.location.href = "/admin/login";
        return;
      }
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not load data.");
      if (kind === "projects") setProjects(data);
      if (kind === "content") setContents(data);
      if (kind === "contacts") setContacts(data);
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Could not load data.");
    } finally {
      setLoading(false);
    }
  }, [kind]);

  useEffect(() => { void load(); }, [load]);

  function resetProjectForm() {
    setEditingId(""); setTitle(""); setUrl(""); setDescription("");
    setTechnology(""); setCategory("GitHub Projects"); setPublished(true);
  }

  async function saveProject(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true); setNotice("");
    try {
      const response = await fetch(editingId ? `/api/admin/projects/${editingId}` : "/api/admin/projects", {
        method: editingId ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, url, description, technology, category, published }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Project could not be saved.");
      setNotice(editingId ? "Project updated successfully." : "Project added successfully.");
      resetProjectForm();
      await load();
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Save failed.");
    } finally { setBusy(false); }
  }

  function editProject(project: Project) {
    setEditingId(project.id); setTitle(project.title); setUrl(project.url);
    setDescription(project.description); setTechnology(project.technology);
    setCategory(project.category); setPublished(project.published);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function deleteItem(endpoint: string, label: string) {
    if (!window.confirm(`Delete this ${label}? This cannot be undone.`)) return;
    setBusy(true); setNotice("");
    try {
      const response = await fetch(endpoint, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || `Could not delete ${label}.`);
      setNotice(`${label} deleted.`);
      await load();
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Delete failed.");
    } finally { setBusy(false); }
  }

  async function toggleProject(project: Project) {
    setBusy(true); setNotice("");
    try {
      const response = await fetch(`/api/admin/projects/${project.id}`, {
        method: "PATCH", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !project.published }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not update project.");
      setNotice("Publish status updated.");
      await load();
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Update failed.");
    } finally { setBusy(false); }
  }

  async function saveContent(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true); setNotice("");
    try {
      const response = await fetch("/api/admin/content", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: contentKey, value: contentValue }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Content could not be saved.");
      setNotice("Content saved successfully.");
      setContentKey(""); setContentValue("");
      await load();
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Save failed.");
    } finally { setBusy(false); }
  }

  async function updateContact(id: string, status: string) {
    setBusy(true); setNotice("");
    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: "PATCH", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not update enquiry.");
      setNotice("Enquiry status updated.");
      await load();
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Update failed.");
    } finally { setBusy(false); }
  }

  const heading = kind === "projects" ? "Projects manager" :
    kind === "content" ? "Website content" : "Contact enquiries";

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">Administration</p>
          <h1 className="mt-2 text-3xl font-black sm:text-4xl">{heading}</h1>
          <p className="mt-2 text-slate-400">Manage records stored in your portfolio database.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/admin" className={secondaryClass}>← Dashboard</a>
          <form action="/api/admin/logout" method="post">
            <button className={secondaryClass}>Log out</button>
          </form>
        </div>
      </div>

      {notice && <p role="status" className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm">{notice}</p>}

      {kind === "projects" && <>
        <form onSubmit={saveProject} className="mb-10 grid gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-5 sm:grid-cols-2">
          <h2 className="text-xl font-bold sm:col-span-2">{editingId ? "Edit project" : "Add a project"}</h2>
          <input className={inputClass} placeholder="Project title" value={title} onChange={e => setTitle(e.target.value)} required />
          <input className={inputClass} placeholder="Project URL (https://...)" type="url" value={url} onChange={e => setUrl(e.target.value)} required />
          <input className={inputClass} placeholder="Technologies (e.g. Next.js, TypeScript)" value={technology} onChange={e => setTechnology(e.target.value)} />
          <input className={inputClass} placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
          <textarea className={`${inputClass} sm:col-span-2`} placeholder="Project description" rows={3} value={description} onChange={e => setDescription(e.target.value)} />
          <label className="flex items-center gap-3 text-sm"><input type="checkbox" checked={published} onChange={e => setPublished(e.target.checked)} /> Published</label>
          <div className="flex flex-wrap gap-3 sm:col-span-2">
            <button className={buttonClass} disabled={busy}>{busy ? "Saving…" : editingId ? "Save changes" : "Add project"}</button>
            {editingId && <button type="button" className={secondaryClass} onClick={resetProjectForm}>Cancel edit</button>}
          </div>
        </form>
        <div className="grid gap-4">
          {loading ? <p className="text-slate-400">Loading projects…</p> : projects.length === 0 ? <p className="rounded-xl border border-white/10 p-5 text-slate-400">No projects yet. Add your first project above.</p> : projects.map(project =>
            <article key={project.id} className="rounded-2xl border border-white/10 bg-white/[.03] p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="mt-1 break-all text-sm text-cyan-300">{project.url}</p>
                  <p className="mt-2 text-sm text-slate-400">{project.description}</p>
                  <p className="mt-2 text-xs text-slate-500">{project.category} · {project.technology || "No technologies listed"} · {project.published ? "Published" : "Hidden"}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button className={secondaryClass} disabled={busy} onClick={() => editProject(project)}>Edit</button>
                  <button className={secondaryClass} disabled={busy} onClick={() => void toggleProject(project)}>{project.published ? "Unpublish" : "Publish"}</button>
                  <button className="rounded-xl border border-red-400/30 px-4 py-2.5 text-red-300" disabled={busy} onClick={() => void deleteItem(`/api/admin/projects/${project.id}`, "project")}>Delete</button>
                </div>
              </div>
            </article>
          )}
        </div>
      </>}

      {kind === "content" && <>
        <form onSubmit={saveContent} className="mb-10 grid gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-5">
          <h2 className="text-xl font-bold">Create or update a content entry</h2>
          <p className="text-sm text-slate-400">Use a unique key such as hero_title or about_text. Saving an existing key updates its value.</p>
          <input className={inputClass} placeholder="Content key (e.g. hero_title)" value={contentKey} onChange={e => setContentKey(e.target.value)} required />
          <textarea className={inputClass} placeholder="Content value" rows={5} value={contentValue} onChange={e => setContentValue(e.target.value)} required />
          <button className={buttonClass} disabled={busy}>{busy ? "Saving…" : "Save content"}</button>
        </form>
        <div className="grid gap-4">
          {loading ? <p className="text-slate-400">Loading content…</p> : contents.length === 0 ? <p className="rounded-xl border border-white/10 p-5 text-slate-400">No content entries yet.</p> : contents.map(item =>
            <article key={item.id} className="rounded-2xl border border-white/10 bg-white/[.03] p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="font-bold text-cyan-300">{item.key}</h2>
                <button className={secondaryClass} onClick={() => { setContentKey(item.key); setContentValue(item.value); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Edit in form</button>
              </div>
              <p className="mt-3 whitespace-pre-wrap break-words text-sm text-slate-300">{item.value}</p>
            </article>
          )}
        </div>
      </>}

      {kind === "contacts" && <>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-slate-400">{contacts.length} enquiries</p>
          <button className={secondaryClass} onClick={() => void load()}>Refresh</button>
        </div>
        {loading ? <p className="text-slate-400">Loading enquiries…</p> : contacts.length === 0 ? <p className="rounded-xl border border-white/10 p-5 text-slate-400">No enquiries received yet.</p> : <div className="grid gap-4">
          {contacts.map(contact =>
            <article key={contact.id} className="rounded-2xl border border-white/10 bg-white/[.03] p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-bold">{contact.name}</h2>
                  <p className="mt-1 break-all text-sm text-cyan-300">{contact.email}</p>
                  <p className="mt-1 text-sm text-slate-400">{contact.phone || "No phone"} · {contact.projectType || "No project type"} · {contact.budget || "No budget"}</p>
                  <p className="mt-3 whitespace-pre-wrap break-words text-slate-200">{contact.message}</p>
                  <p className="mt-3 text-xs text-slate-500">{new Date(contact.createdAt).toLocaleString()}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <select aria-label={`Status for ${contact.name}`} className={inputClass} value={contact.status} disabled={busy} onChange={e => void updateContact(contact.id, e.target.value)}>
                    <option value="NEW">New</option><option value="READ">Read</option><option value="RESOLVED">Resolved</option>
                  </select>
                  <button className="rounded-xl border border-red-400/30 px-4 py-2.5 text-red-300" disabled={busy} onClick={() => void deleteItem(`/api/admin/contacts/${contact.id}`, "enquiry")}>Delete</button>
                </div>
              </div>
            </article>
          )}
        </div>}
      </>}
    </main>
  );
}
