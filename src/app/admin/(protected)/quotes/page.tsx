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
        <h2 className="text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">Quotes</h2>
        <p className="mt-2 text-[#5b6b7b]">
          Static sample leads for layout only. Real quote submissions can be connected later.
        </p>
      </div>

      <div className="grid gap-4">
        {sampleQuotes.map((quote) => (
          <article key={quote.id} className="rounded-[18px] border border-[#d7e2ec] bg-white p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#1a6397]">{quote.id}</p>
                <h3 className="mt-1 text-lg font-extrabold tracking-[-0.02em]">{quote.name}</h3>
                <p className="mt-1 text-sm text-[#5b6b7b]">
                  {quote.service} · {quote.location}
                </p>
              </div>
              <span className="rounded-full bg-[#f5f8fb] px-3 py-1 text-xs font-bold text-[#0d2236]">
                {quote.status}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
