import Link from "next/link";

const services = [
  ["Business & Portfolio Websites", "Modern responsive websites for individuals, creators, professionals and small businesses."],
  ["Full-Stack Web Applications", "Frontend experiences connected to APIs, databases, authentication and application workflows."],
  ["Admin Panels & Dashboards", "Management interfaces for enquiries, projects, content, records and operational data."],
  ["Database & API Integration", "Structured data models, REST API integrations and practical application backends."],
  ["AI-Powered Web Concepts", "Web experiences that integrate AI APIs where they add meaningful value."],
  ["Website Improvements", "Responsive fixes, UI polish, bug fixes and improvements to existing web projects."],
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
      <p className="text-sm font-bold uppercase tracking-[.25em] text-cyan-300">Build a project</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">Your idea deserves a <span className="text-cyan-300">great execution.</span></h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">Need a website, web application or custom digital solution? Let's discuss your goals and turn your requirements into a clear project plan.</p>
      <div className="mt-10 rounded-2xl border border-cyan-300/20 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 p-7 sm:p-9">
        <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">A straightforward offer</p>
        <h2 className="mt-3 text-3xl font-black">Quality work, mindful pricing.</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-300">My goal is to offer project estimates around 10% below a comparable market estimate where the scope and timeline make that possible. Final pricing depends on features, complexity, integrations and delivery requirements. I will discuss the scope with you before work begins.</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map(([title, desc], i) => <article key={title} className="rounded-2xl border border-white/10 bg-white/[.03] p-6"><span className="text-sm font-bold text-cyan-300">0{i + 1}</span><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-400">{desc}</p></article>)}
      </div>
      <section className="mt-16 grid gap-8 md:grid-cols-2">
        <div><h2 className="text-3xl font-black">How we can work together</h2><div className="mt-6 space-y-4">{[["01", "Tell me your idea", "Share the problem, audience and outcome you want."], ["02", "Agree on the scope", "Discuss features, budget, timeline and technology."], ["03", "Build and review", "Work through milestones and review progress."], ["04", "Deliver and improve", "Test the result and discuss any agreed follow-up." ]].map(([n, t, d]) => <div key={n} className="flex gap-4"><span className="font-bold text-cyan-300">{n}</span><div><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{d}</p></div></div>)}</div></div>
        <div className="rounded-2xl border border-white/10 bg-white/[.03] p-7"><h2 className="text-2xl font-black">Have a project in mind?</h2><p className="mt-3 leading-7 text-slate-400">Send your requirements and I'll use them to understand the project before discussing next steps.</p><Link href="/contact" className="mt-6 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-white">Start a conversation ↗</Link><p className="mt-6 text-sm text-slate-400">Email: kushwahaabhishek72068@gmail.com</p><p className="mt-2 text-sm text-slate-400">Phone: 9310182063</p></div>
      </section>
    </main>
  );
}
