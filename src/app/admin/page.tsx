import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

export const instant = false;

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");

  const [projects, published, inquiries, newInquiries] = await Promise.all([
    prisma.project.count(),
    prisma.project.count({ where: { published: true } }),
    prisma.contactInquiry.count(),
    prisma.contactInquiry.count({ where: { status: "NEW" } }),
  ]);

  const cards = [
    ["Total projects", projects],
    ["Published projects", published],
    ["Total messages", inquiries],
    ["New messages", newInquiries],
  ];

  return (
    <main className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.25em] text-cyan-300">Administration</p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Portfolio dashboard</h1>
          <p className="mt-3 text-slate-400">Manage published projects and visitor messages.</p>
        </div>
        <form action="/api/admin/logout" method="post">
          <button className="rounded-full border border-white/15 px-5 py-3 font-semibold hover:border-cyan-300">Log out</button>
        </form>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(([label, count]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-3 text-3xl font-black text-cyan-300">{count}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Link href="/admin/projects" className="rounded-2xl border border-white/10 bg-white/[.04] p-7 transition hover:border-cyan-300/50">
          <h2 className="text-xl font-bold">Projects manager</h2>
          <p className="mt-2 leading-7 text-slate-400">Add, edit, publish, hide or delete projects. Published projects appear on the public site.</p>
          <span className="mt-5 inline-block font-bold text-cyan-300">Manage projects →</span>
        </Link>
        <Link href="/admin/contacts" className="rounded-2xl border border-white/10 bg-white/[.04] p-7 transition hover:border-cyan-300/50">
          <h2 className="text-xl font-bold">Visitor messages</h2>
          <p className="mt-2 leading-7 text-slate-400">Read contact form submissions, update their status, or delete messages.</p>
          <span className="mt-5 inline-block font-bold text-cyan-300">View messages →</span>
        </Link>
      </div>
    </main>
  );
}
