const milestones = [
  ["01", "Web fundamentals", "Started with HTML, CSS and JavaScript, learning how websites are structured, styled and made interactive."],
  ["02", "Programming & databases", "Expanded into Python, Flask, REST APIs, SQL and database-backed applications."],
  ["03", "Modern full-stack development", "Started building with React, TypeScript, Next.js, PostgreSQL and Prisma."],
  ["04", "Projects & hackathons", "Built personal projects, explored AI-based ideas and joined hackathon communities to learn through challenges."],
];

const skills = ["HTML & CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Python", "Flask", "REST APIs", "PostgreSQL", "MySQL", "Prisma", "Git & GitHub", "AI integrations"];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
      <p className="text-sm font-bold uppercase tracking-[.25em] text-cyan-300">About me</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">Young, curious, and serious about <span className="text-cyan-300">building with code.</span></h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">I'm Abhishek Kushwaha, an 18-year-old student and aspiring professional Full-Stack Developer. With around two years of hands-on programming experience, I have been learning by creating projects, exploring new technologies and solving practical development problems.</p>
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {[["18", "Years old"], ["2+", "Years hands-on coding"], ["10", "Hackathons joined"]].map(([value, label]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[.04] p-7"><p className="text-4xl font-black text-cyan-300">{value}</p><p className="mt-2 text-slate-400">{label}</p></div>
        ))}
      </div>
      <div className="mt-20 grid gap-12 md:grid-cols-[.8fr_1.2fr]">
        <div><p className="text-sm font-bold uppercase tracking-[.25em] text-violet-300">My learning journey</p><h2 className="mt-3 text-3xl font-black">Progress over perfection.</h2><p className="mt-5 leading-7 text-slate-400">I believe strong developers keep learning. Every project teaches me something new about architecture, user experience, APIs, databases, debugging and delivering a better product.</p></div>
        <div className="space-y-4">{milestones.map(([n, title, desc]) => <article key={n} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[.03] p-5"><span className="pt-1 font-black text-cyan-300">{n}</span><div><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 leading-7 text-slate-400">{desc}</p></div></article>)}</div>
      </div>
      <section className="mt-20"><p className="text-sm font-bold uppercase tracking-[.25em] text-cyan-300">My toolkit</p><h2 className="mt-3 text-3xl font-black">Technologies I work with</h2><div className="mt-7 flex flex-wrap gap-3">{skills.map((skill) => <span key={skill} className="rounded-xl border border-white/10 bg-white/[.04] px-4 py-3 text-slate-300">{skill}</span>)}</div></section>
      <section className="mt-16 rounded-2xl border border-violet-300/20 bg-violet-400/[.06] p-7"><h2 className="text-2xl font-bold">Learning beyond the classroom</h2><p className="mt-3 leading-7 text-slate-400">Hackathons have helped me explore unfamiliar problem statements, prototype ideas and learn from other builders. My Devpost profile documents my projects and hackathon activity.</p><a className="mt-5 inline-block font-bold text-cyan-300 hover:text-white" href="https://devpost.com/ABHISHEK78159" target="_blank" rel="noreferrer">Explore my Devpost profile ↗</a></section>
    </main>
  );
}
