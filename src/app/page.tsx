import LiveProjects from "@/components/LiveProjects";
import Link from "next/link";

const projects = [
  {
    n: "01",
    title: "HealthAlert",
    type: "AI · HEALTHCARE · FULL STACK",
    desc: "An emergency-response platform designed to connect people with health assistance, location-aware information and nearby medical support.",
    stack: "Next.js · TypeScript · Tailwind · AI APIs",
    href: "https://github.com/kushwaha-78159/helth-alrt",
  },
  {
    n: "02",
    title: "Manya Public School",
    type: "EDTECH · CMS · DATABASE",
    desc: "A school website with admissions, contact enquiries, gallery, classes and fees, plus an administrative content-management workflow.",
    stack: "Next.js · TypeScript · Prisma · PostgreSQL",
    href: "https://github.com/kushwaha-78159/mohit-school",
  },
  {
    n: "03",
    title: "Quiz Master Pro",
    type: "INTERACTIVE WEB APP",
    desc: "A quiz and trivia experience featuring game-style progression, quizzes, leaderboards and engaging user interactions.",
    stack: "React · TypeScript · JavaScript",
    href: "https://github.com/kushwaha-78159/quiz-master-pro.game",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative border-b border-white/10">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.15fr_.85fr] md:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
              Student · Developer · Lifelong Learner
            </div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[.28em] text-blue-300">
              Hello, I'm Abhishek Kushwaha
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Turning ideas into{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                digital products.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              I'm a Full-Stack Developer with around two years of hands-on
              programming experience. I build modern websites, useful web apps,
              AI-powered concepts and database-driven platforms while continuing
              to learn and improve every day.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/projects" className="rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-white">
                Explore My Work ↗
              </Link>
              <Link href="/contact" className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold transition hover:border-cyan-300 hover:text-cyan-200">
                Let's Build Together
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {["Next.js", "TypeScript", "React", "Python", "PostgreSQL", "AI Apps"].map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-sm text-slate-300">{skill}</span>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/20 via-[#11172a] to-violet-500/20 p-4 shadow-2xl shadow-blue-950/40">
              <div className="absolute -right-3 -top-3 rounded-2xl border border-cyan-300/30 bg-[#10182a] px-4 py-3 text-sm font-bold text-cyan-200">
                Building what's next ↗
              </div>
              <div className="flex min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b1020] p-6 text-center">
                <div className="mb-5 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-4 border-cyan-300/60 bg-gradient-to-br from-blue-500 to-violet-600 text-5xl font-black text-white shadow-xl shadow-blue-500/20">
                  <img
                    src="/images/profile.jpg"
                    alt="Abhishek Kushwaha"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute -z-10">AK</span>
                </div>
                <p className="text-2xl font-bold">Abhishek Kushwaha</p>
                <p className="mt-2 text-slate-400">Full-Stack Developer</p>
                <div className="mt-7 grid w-full grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[.04] p-3">
                    <p className="text-2xl font-black text-cyan-300">2+</p>
                    <p className="mt-1 text-xs text-slate-400">Years learning & building</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[.04] p-3">
                    <p className="text-2xl font-black text-cyan-300">10</p>
                    <p className="mt-1 text-xs text-slate-400">Hackathons joined</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[.04] p-3">
                    <p className="text-2xl font-black text-cyan-300">25+</p>
                    <p className="mt-1 text-xs text-slate-400">GitHub repositories</p>
                  </div>
                </div>
                <p className="mt-5 text-xs text-slate-500">Curiosity → Code → Create → Improve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.25em] text-cyan-300">Selected work</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Projects I'm proud to build.</h2>
            <p className="mt-3 max-w-xl leading-7 text-slate-400">A selection of projects that demonstrate my interest in useful products, full-stack development and solving real problems.</p>
          </div>
          <Link href="/projects" className="text-sm font-bold text-cyan-300 hover:text-white">View all projects ↗</Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.n} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[.06] to-white/[.015] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-cyan-300">{p.n} / PROJECT</span>
                <span className="text-xl text-slate-500 transition group-hover:text-cyan-300">↗</span>
              </div>
              <p className="mt-8 text-xs font-bold tracking-widest text-violet-300">{p.type}</p>
              <h3 className="mt-3 text-2xl font-bold">{p.title}</h3>
              <p className="mt-4 min-h-28 leading-7 text-slate-400">{p.desc}</p>
              <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-6 text-slate-500">{p.stack}</p>
              <a href={p.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex font-bold text-cyan-300 hover:text-white">View repository ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-3xl border border-cyan-300/20 bg-gradient-to-r from-blue-600/20 via-[#11172a] to-violet-600/20 p-8 sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[.25em] text-cyan-300">Have an idea?</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-5xl">Let's turn your next idea into a working project.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-300">Tell me what you want to build. We can discuss the scope, technology, timeline and a budget that fits your needs.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-xl bg-white px-6 py-3.5 font-bold text-slate-950 hover:bg-cyan-200">Discuss Your Project ↗</Link>
        </div>
      </section>
    <LiveProjects />
      </main>
  );
}
