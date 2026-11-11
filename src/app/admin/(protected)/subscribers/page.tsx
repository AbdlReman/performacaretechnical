const subscribers = [
  {
    id: "S-2001",
    name: "Fatima Noor",
    email: "fatima.noor@example.com",
    source: "Website footer",
    status: "Active",
    joined: "2026-03-12",
  },
  {
    id: "S-2002",
    name: "James Carter",
    email: "james.carter@example.com",
    source: "Quote form",
    status: "Active",
    joined: "2026-03-18",
  },
  {
    id: "S-2003",
    name: "Layla Hassan",
    email: "layla.hassan@example.com",
    source: "Website footer",
    status: "Active",
    joined: "2026-03-22",
  },
  {
    id: "S-2004",
    name: "Ravi Patel",
    email: "ravi.patel@example.com",
    source: "Landing page",
    status: "Unsubscribed",
    joined: "2026-02-08",
  },
  {
    id: "S-2005",
    name: "Nora Al Suwaidi",
    email: "nora.alsuwaidi@example.com",
    source: "Quote form",
    status: "Active",
    joined: "2026-04-01",
  },
];

export default function AdminSubscribersPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">Subscribers</h2>
        <p className="mt-2 text-[#5b6b7b]">
          Static subscriber list for layout only. Real signup data can be connected later.
        </p>
      </div>

      <div className="overflow-hidden rounded-[18px] border border-[#d7e2ec] bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-[#f5f8fb] text-xs uppercase tracking-[0.08em] text-[#5b6b7b]">
              <tr>
                <th className="px-4 py-3 font-bold">ID</th>
                <th className="px-4 py-3 font-bold">Name</th>
                <th className="px-4 py-3 font-bold">Email</th>
                <th className="px-4 py-3 font-bold">Source</th>
                <th className="px-4 py-3 font-bold">Joined</th>
                <th className="px-4 py-3 font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((item) => (
                <tr key={item.id} className="border-t border-[#eef3f8]">
                  <td className="px-4 py-3.5 font-semibold text-[#0d2236]">{item.id}</td>
                  <td className="px-4 py-3.5 font-semibold text-[#0d2236]">{item.name}</td>
                  <td className="px-4 py-3.5 text-[#5b6b7b]">{item.email}</td>
                  <td className="px-4 py-3.5 text-[#5b6b7b]">{item.source}</td>
                  <td className="px-4 py-3.5 text-[#5b6b7b]">{item.joined}</td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${
                        item.status === "Active"
                          ? "bg-[#e8f3fc] text-[#1a6397]"
                          : "bg-[#f3f4f6] text-[#6b7280]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
