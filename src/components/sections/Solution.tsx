const features = [
  {
    title: "Built to rank on Google",
    description:
      "Every page is structured for local SEO from day one. We target the suburbs your customers are actually in.",
  },
  {
    title: "Loads fast on any phone",
    description:
      "Over 70% of your customers will find you on mobile. Slow sites lose jobs. Ours score 95+ on Google PageSpeed.",
  },
  {
    title: "Turns visitors into calls",
    description:
      "Strategic copywriting, clear CTAs, and trust signals that make it obvious why they should choose you.",
  },
  {
    title: "Looks the part",
    description:
      "Professional design that matches your brand and makes you look like the premium option in your area.",
  },
  {
    title: "Done in 14 days",
    description:
      "No 3-month agency timelines. We move fast so you can start winning jobs faster.",
  },
  {
    title: "Zero tech headaches",
    description:
      "We handle hosting, updates, and maintenance. You focus on the tools, we handle the technology.",
  },
];

export default function Solution() {
  return (
    <section className="py-24 px-6 border-b border-white/10">
      <div className="mx-auto max-w-6xl">
        <p className="text-[#faff00] text-sm font-bold uppercase tracking-[0.2em] mb-6">
          What We Build
        </p>

        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black text-white uppercase leading-[0.95] tracking-tight">
              Websites That Work As Hard As You Do.
            </h2>
          </div>
          <div className="lg:w-1/2 flex items-end">
            <p className="text-white/60 text-lg leading-relaxed">
              We specialise in building websites for Melbourne trade and service businesses.
              Not template sites. Not page builders. Custom, fast, and built to get you found.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {features.map((f, i) => (
            <div key={i} className="bg-[#0a0a0a] p-8">
              <div className="w-2 h-2 bg-[#faff00] mb-6" />
              <h3 className="text-white font-black text-lg uppercase mb-3">{f.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
