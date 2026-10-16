"use client";


import LiveProjects from "@/components/LiveProjects";
import { useEffect, useState } from "react";

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  fork: boolean;
  archived: boolean;
};

const groups = [
  {
    title: "GitHub Projects",
    intro: "My public repositories, applications, experiments and source code.",
    url: "https://github.com/kushwaha-78159?tab=repositories",
    button: "Explore More on GitHub",
  },
  {
    title: "Kaggle",
    intro: "Explore my Kaggle profile, data science work and public notebooks.",
    url: "https://www.kaggle.com/abhishek1kushwaha1",
    button: "Explore More on Kaggle",
  },
  {
    title: "Hackathon Projects",
    intro: "Discover my hackathon submissions, prototypes and experiments on Devpost.",
    url: "https://devpost.com/ABHISHEK78159",
    button: "Explore More on Devpost",
  },
];

const featuredProjects = [
  {
    title: "HealthAlert",
    description: "An emergency health response project.",
    stack: "Next.js · TypeScript · AI",
    url: "https://github.com/kushwaha-78159/helth-alrt",
  },
  {
    title: "Manya Public School",
    description: "A school website with admissions, fees and gallery features.",
    stack: "Next.js · TypeScript · Prisma",
    url: "https://github.com/kushwaha-78159/mohit-school",
  },
  {
    title: "Quiz Master Pro",
    description: "An interactive quiz and trivia application.",
    stack: "TypeScript · Web application",
    url: "https://github.com/kushwaha-78159/quiz-master-pro.game",
  },
  {
    title: "PadhaiPath",
    description: "A learning and study-support project.",
    stack: "Education · Hackathon",
    url: "https://devpost.com/software/padhaipath",
  },
  {
    title: "RescueMesh AI",
    description: "An AI-focused hackathon project.",
    stack: "AI · Hackathon",
    url: "https://devpost.com/software/rescuemesh-ai-7mil64",
  },
  {
    title: "ClipStack",
    description: "A productivity-focused snippet management project.",
    stack: "Productivity · Web",
    url: "https://devpost.com/software/clipstack",
  },
];

export default function ProjectsPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [repoError, setRepoError] = useState(false);

  useEffect(() => {
    let active = true;

    fetch(
      "https://api.github.com/users/kushwaha-78159/repos?per_page=100&sort=updated"
    )
      .then((response) => {
        if (!response.ok) throw new Error("Could not load repositories");
        return response.json();
      })
      .then((data: GitHubRepo[]) => {
        if (!active) return;

        const publicRepos = data
          .filter((repo) => !repo.fork && !repo.archived)
          .sort((a, b) => a.name.localeCompare(b.name));

        setRepos(publicRepos);
        setLoading(false);
      })
      .catch(() => {
        if (!active) return;
        setRepoError(true);
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
      <p className="text-sm font-bold uppercase tracking-[.25em] text-cyan-300">
        Project gallery
      </p>

      <h1 className="mt-4 text-4xl font-black sm:text-6xl">
        Ideas made <span className="text-cyan-300">real.</span>
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
        Explore my work across GitHub, Kaggle and hackathons. Open any project
        to visit its original page.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        {groups.map((group, index) => (
          <a
            key={group.title}
            href={`#${["github-projects", "kaggle", "hackathon-projects"][index]}`}
            className="rounded-full border border-white/10 bg-white/[.04] px-5 py-3 text-sm font-semibold transition hover:border-cyan-300 hover:text-cyan-200"
          >
            {group.title} ↓
          </a>
        ))}
      </div>

      <section id="github-projects" className="mt-16 scroll-mt-28">
        <div className="mb-7">
          <h2 className="text-2xl font-black sm:text-3xl">GitHub Projects</h2>
          <p className="mt-2 text-slate-400">
            Public repositories loaded directly from my GitHub profile.
          </p>
        </div>

        {loading && (
          <p className="rounded-xl border border-white/10 p-5 text-slate-400">
            Loading public repositories from GitHub…
          </p>
        )}

        {repoError && (
          <p className="rounded-xl border border-white/10 p-5 text-slate-400">
            Repositories could not be loaded right now. You can still view all
            projects on my GitHub profile using the button below.
          </p>
        )}

        {!loading && !repoError && (
          <p className="mb-5 text-sm text-slate-400">
            Showing {repos.length} public repositories.
          </p>
        )}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <article
              key={repo.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.06] to-white/[.015] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold tracking-widest text-cyan-300">
                  GITHUB REPOSITORY
                </span>
                <span className="text-xl text-slate-500">↗</span>
              </div>

              <h3 className="mt-6 break-words text-xl font-bold">{repo.name}</h3>

              <p className="mt-3 flex-1 leading-7 text-slate-400">
                {repo.description || "Explore the source code and project details in this repository."}
              </p>

              <p className="mt-5 border-t border-white/10 pt-4 text-xs text-violet-300">
                {repo.language || "Technology not specified"}
              </p>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="mt-5 font-bold text-cyan-300 hover:text-white"
              >
                View Repository ↗
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={groups[0].url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20"
          >
            Explore More on GitHub ↗
          </a>
        </div>
      </section>

      <section id="kaggle" className="mt-20 scroll-mt-28">
        <div className="mb-7">
          <h2 className="text-2xl font-black sm:text-3xl">Kaggle</h2>
          <p className="mt-2 text-slate-400">{groups[1].intro}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[.03] p-6">
            <h3 className="text-xl font-bold">Kaggle Profile</h3>
            <p className="mt-3 leading-7 text-slate-400">
              Visit my profile to explore my public activity and work.
            </p>
            <a
              href="https://www.kaggle.com/abhishek1kushwaha1"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block font-bold text-cyan-300 hover:text-white"
            >
              View Kaggle Profile ↗
            </a>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[.03] p-6">
            <h3 className="text-xl font-bold">Code & Notebooks</h3>
            <p className="mt-3 leading-7 text-slate-400">
              Browse available public notebooks on Kaggle.
            </p>
            <a
              href="https://www.kaggle.com/abhishek1kushwaha1/code"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block font-bold text-cyan-300 hover:text-white"
            >
              Explore Notebooks ↗
            </a>
          </article>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={groups[1].url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20"
          >
            Explore More on Kaggle ↗
          </a>
        </div>
      </section>

      <section id="hackathon-projects" className="mt-20 scroll-mt-28">
        <div className="mb-7">
          <h2 className="text-2xl font-black sm:text-3xl">Hackathon Projects</h2>
          <p className="mt-2 text-slate-400">{groups[2].intro}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects
            .filter((project) => project.url.includes("devpost.com"))
            .map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.06] to-white/[.015] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40"
              >
                <span className="text-xs font-bold tracking-widest text-cyan-300">
                  HACKATHON PROJECT
                </span>
                <h3 className="mt-6 text-xl font-bold">{project.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-400">
                  {project.description}
                </p>
                <p className="mt-5 border-t border-white/10 pt-4 text-xs text-violet-300">
                  {project.stack}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 font-bold text-cyan-300 hover:text-white"
                >
                  View on Devpost ↗
                </a>
              </article>
            ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={groups[2].url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20"
          >
            Explore More on Devpost ↗
          </a>
        </div>
      </section>
    <LiveProjects />
      </main>
  );
}
