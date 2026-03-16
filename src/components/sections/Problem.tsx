const problems = [
  {
    number: "01",
    headline: "Your website shows up nowhere on Google.",
    body: "If you're not on page 1 for 'plumber Melbourne' or 'electrician [suburb]', you're invisible. Your competitors are taking every call that should've been yours.",
  },
  {
    number: "02",
    headline: "It looks like it was built in 2009.",
    body: "Customers judge you in 3 seconds. An outdated, slow, or mobile-broken website tells them you're unprofessional — before you've said a word.",
  },
  {
    number: "03",
    headline: "There's no reason to call you over anyone else.",
    body: "Generic websites don't convert. No urgency, no clear offer, no trust signals. Visitors leave and book someone else who made them feel confident.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 px-6 border-b border-white/10">
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <p className="text-[#faff00] text-sm font-bold uppercase tracking-[0.2em] mb-6">
          The Real Problem
        </p>

        <h2 className="text-[clamp(2rem,5vw,4rem)] font-black text-white uppercase leading-[0.95] tracking-tight mb-16 max-w-3xl">
          Why Good Tradies Stay Broke Online.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
          {problems.map((p, i) => (
            <div
              key={i}
              className="p-8 border-b md:border-b-0 md:border-r border-white/10 last:border-0"
            >
              <p className="text-[#faff00] text-5xl font-black mb-6 leading-none">{p.number}</p>
              <h3 className="text-white text-xl font-black uppercase leading-tight mb-4">
                {p.headline}
              </h3>
              <p className="text-white/50 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
