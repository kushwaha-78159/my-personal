import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[.22em] text-cyan-300">Let us connect</p>
        <h1 className="mt-4 text-4xl font-black sm:text-6xl">Have a project in mind?</h1>
        <p className="mt-5 text-lg leading-8 text-slate-400">
          Share your idea, ask a question, or tell me what you would like to build.
          Send a message using the form and it will appear in the admin panel.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <aside className="rounded-3xl border border-white/10 bg-white/[.04] p-7 sm:p-9">
          <h2 className="text-2xl font-bold">Contact details</h2>
          <p className="mt-3 leading-7 text-slate-400">Prefer email? You can contact me directly as well.</p>
          <div className="mt-8 space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</p>
              <a className="mt-2 block break-all font-semibold text-cyan-300 hover:text-white"
                href="mailto:kushwahaabhishek72068@gmail.com">kushwahaabhishek72068@gmail.com</a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Phone</p>
              <a className="mt-2 block font-semibold text-cyan-300 hover:text-white" href="tel:9310182063">9310182063</a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Response</p>
              <p className="mt-2 leading-7 text-slate-300">Messages submitted here are stored in the portfolio admin dashboard.</p>
            </div>
          </div>
        </aside>

        <section className="rounded-3xl border border-white/10 bg-white/[.04] p-6 sm:p-9">
          <h2 className="text-2xl font-bold">Send a message</h2>
          <p className="mb-7 mt-2 text-slate-400">Fields marked * are required.</p>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
