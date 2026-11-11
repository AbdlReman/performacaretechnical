const stats = [
  { label: "Quotes", value: "3", note: "Sample quote requests" },
  { label: "Subscribers", value: "5", note: "Sample newsletter list" },
  { label: "Admin language", value: "EN", note: "Admin panel is English only" },
  { label: "Site languages", value: "2", note: "English + Arabic (public site)" },
];

const quickLinks = [
  { href: "/admin/quotes", title: "Quote requests", desc: "Review incoming cleaning and staffing leads." },
  { href: "/admin/subscribers", title: "Subscribers", desc: "View newsletter and contact subscribers." },
];

export default function AdminDashboardPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <h2 className="text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">Dashboard</h2>
        <p className="mt-2 max-w-2xl text-[#5b6b7b]">
          Static admin overview for Performa Care. Content editing and database wiring can be added later.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <article key={item.label} className="rounded-[18px] border border-[#d7e2ec] bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#1a6397]">{item.label}</p>
            <p className="mt-3 text-3xl font-extrabold tracking-[-0.03em]">{item.value}</p>
            <p className="mt-2 text-sm text-[#5b6b7b]">{item.note}</p>
          </article>
        ))}
      </div>

      <section className="rounded-[22px] border border-[#d7e2ec] bg-white p-6 sm:p-8">
        <h3 className="text-xl font-extrabold tracking-[-0.02em]">Quick links</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {quickLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[16px] border border-[#e3eaf1] bg-[#f5f8fb] p-5 transition hover:border-[#1a6397]/40 hover:bg-[#eef6fc]"
            >
              <p className="font-bold text-[#0d2236]">{item.title}</p>
              <p className="mt-2 text-sm text-[#5b6b7b]">{item.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
