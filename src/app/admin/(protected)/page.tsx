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
        <h2 className="text-2xl font-extrabold tracking-[-0.02em] text-white sm:text-3xl">Dashboard</h2>
        <p className="mt-2 max-w-2xl text-[#9bb0c3]">
          Static admin overview for Performa Care. Content editing and database wiring can be added later.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <article key={item.label} className="rounded-[18px] border border-[#2a3b4f] bg-[#152536] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#74c1f8]">{item.label}</p>
            <p className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-white">{item.value}</p>
            <p className="mt-2 text-sm text-[#9bb0c3]">{item.note}</p>
          </article>
        ))}
      </div>

      <section className="rounded-[22px] border border-[#2a3b4f] bg-[#152536] p-6 sm:p-8">
        <h3 className="text-xl font-extrabold tracking-[-0.02em] text-white">Quick links</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {quickLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[16px] border border-[#2a3b4f] bg-[#0b1520] p-5 transition hover:border-[#4da3d9]/50 hover:bg-[#121f2e]"
            >
              <p className="font-bold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-[#9bb0c3]">{item.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
