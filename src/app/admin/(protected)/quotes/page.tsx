const sampleQuotes = [
  {
    id: "Q-1001",
    name: "Ahmed Al Maktoum",
    service: "Office cleaning",
    location: "Business Bay",
    status: "New",
  },
  {
    id: "Q-1002",
    name: "Sara Khan",
    service: "Staff supply",
    location: "JLT",
    status: "Contacted",
  },
  {
    id: "Q-1003",
    name: "Omar Hassan",
    service: "Hospitality staffing",
    location: "Dubai Marina",
    status: "Closed",
  },
];

export default function AdminQuotesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold tracking-[-0.02em] text-white sm:text-3xl">Quotes</h2>
        <p className="mt-2 text-[#9bb0c3]">
          Static sample leads for layout only. Real quote submissions can be connected later.
        </p>
      </div>

      <div className="grid gap-4">
        {sampleQuotes.map((quote) => (
          <article key={quote.id} className="rounded-[18px] border border-[#2a3b4f] bg-[#152536] p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#74c1f8]">{quote.id}</p>
                <h3 className="mt-1 text-lg font-extrabold tracking-[-0.02em] text-white">{quote.name}</h3>
                <p className="mt-1 text-sm text-[#9bb0c3]">
                  {quote.service} · {quote.location}
                </p>
              </div>
              <span className="rounded-full bg-[#0b1520] px-3 py-1 text-xs font-bold text-[#e8eef4]">
                {quote.status}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
