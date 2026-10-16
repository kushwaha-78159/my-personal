"use client";

import { useEffect, useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  technology: string;
  category: string;
  url: string;
};

export default function LiveProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadProjects() {
      try {
        const response = await fetch("/api/projects", { cache: "no-store" });
        if (!response.ok) throw new Error("Could not load projects");
        const data = await response.json();
        if (active && Array.isArray(data)) {
          setProjects(data);
          setError(false);
        }
      } catch {
        if (active) setError(true);
      }
    }

    void loadProjects();
    const interval = window.setInterval(loadProjects, 15000);
    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section id="live-projects" className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.22em] text-cyan-300">Built & published</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Latest Projects</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-400">
            Projects published from the admin panel appear here automatically.
          </p>
        </div>
        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
          {projects.length} published
        </span>
      </div>

      {error ? (
        <p className="rounded-2xl border border-red-300/20 p-5 text-slate-300">
          Projects are temporarily unavailable. Please refresh the page later.
        </p>
      ) : projects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/15 p-8 text-slate-400">
          No admin-published projects yet. Add a project in Admin → Projects and mark it Published.
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="flex flex-col rounded-2xl border border-white/10 bg-white/[.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-cyan-200">
                  {project.category}
                </span>
                <span className="text-xs text-emerald-300">Published</span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{project.title}</h3>
              <p className="mt-3 flex-1 whitespace-pre-wrap break-words leading-7 text-slate-400">
                {project.description || "Explore this project."}
              </p>
              {project.technology && (
                <p className="mt-4 text-sm text-slate-500">{project.technology}</p>
              )}
              <a href={project.url} target="_blank" rel="noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 font-bold text-cyan-300 hover:text-white">
                View project <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
