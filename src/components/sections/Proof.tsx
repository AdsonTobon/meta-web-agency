const testimonials = [
  {
    quote:
      "Within 6 weeks of the new site going live I had to hire another apprentice. The calls don't stop.",
    name: "Dave M.",
    business: "Plumber — Ringwood",
    result: "+180% enquiries",
  },
  {
    quote:
      "I was spending $2k/month on ads with nothing to show. The new site converted my organic traffic immediately.",
    name: "Sarah K.",
    business: "Electrician — Northcote",
    result: "First #1 Google ranking",
  },
  {
    quote:
      "Looked like a fly-by-night operation online. Now clients tell me my website is why they chose us over bigger companies.",
    name: "Tony R.",
    business: "HVAC — Frankston",
    result: "3x avg. job value",
  },
];

export default function Proof() {
  return (
    <section id="proof" className="py-24 px-6 border-b border-white/10">
      <div className="mx-auto max-w-6xl">
        <p className="text-[#faff00] text-sm font-bold uppercase tracking-[0.2em] mb-6">
          Results
        </p>

        <h2 className="text-[clamp(2rem,5vw,4rem)] font-black text-white uppercase leading-[0.95] tracking-tight mb-16 max-w-3xl">
          Real Melbourne Businesses. Real Numbers.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 mb-16">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#0a0a0a] p-8 flex flex-col justify-between">
              <div>
                <p className="text-[#faff00] text-4xl font-black mb-6 leading-none">&ldquo;</p>
                <p className="text-white/80 text-lg leading-relaxed mb-8 italic">{t.quote}</p>
              </div>
              <div className="border-t border-white/10 pt-6 flex items-end justify-between">
                <div>
                  <p className="text-white font-black">{t.name}</p>
                  <p className="text-white/40 text-sm">{t.business}</p>
                </div>
                <p className="text-[#faff00] text-sm font-black uppercase tracking-wide">
                  {t.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="border border-white/10 p-12 text-center">
          <p className="text-[clamp(1.5rem,4vw,3rem)] font-black text-white uppercase leading-tight">
            &ldquo;The average Melbourne tradie leaves{" "}
            <span className="text-[#faff00]">$80,000+</span> on the table<br />
            every year with a bad website.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
