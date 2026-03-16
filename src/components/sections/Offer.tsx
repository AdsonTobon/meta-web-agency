const tiers = [
  {
    name: "Starter",
    price: "$100",
    description: "For tradies who need a professional online presence fast.",
    features: [
      "5-page custom website",
      "Mobile-first design",
      "Basic local SEO setup",
      "Contact form + click-to-call",
      "Google My Business integration",
      "14-day delivery",
      "30-day aftercare support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$150",
    description: "For service businesses serious about dominating their local area.",
    features: [
      "Everything in Starter",
      "10-page custom website",
      "Full local SEO + suburb targeting",
      "Conversion copywriting",
      "Review funnel setup",
      "Google Ads landing page",
      "Monthly performance report",
      "3-month priority support",
    ],
    cta: "Most Popular — Get Started",
    highlighted: true,
  },
  {
    name: "Authority",
    price: "Custom",
    description: "For businesses that want to own their market completely.",
    features: [
      "Everything in Growth",
      "Unlimited pages",
      "Ongoing SEO management",
      "Blog / content strategy",
      "Ad campaign management",
      "Monthly strategy calls",
      "Dedicated account manager",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
];

export default function Offer() {
  return (
    <section className="py-24 px-6 border-b border-white/10">
      <div className="mx-auto max-w-6xl">
        <p className="text-[#faff00] text-sm font-bold uppercase tracking-[0.2em] mb-6">
          Pricing
        </p>

        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black text-white uppercase leading-[0.95] tracking-tight">
              Simple Pricing. No Surprises.
            </h2>
          </div>
          <div className="lg:w-1/2 flex items-end">
            <p className="text-white/60 text-lg leading-relaxed">
              One flat price. No hidden retainers. No lock-in contracts.
              If we don&apos;t deliver, we make it right.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`p-8 flex flex-col ${
                tier.highlighted ? "bg-[#faff00]" : "bg-[#0a0a0a]"
              }`}
            >
              <div className="mb-8">
                <p
                  className={`text-sm font-bold uppercase tracking-[0.2em] mb-2 ${
                    tier.highlighted ? "text-black/60" : "text-white/40"
                  }`}
                >
                  {tier.name}
                </p>
                <p
                  className={`text-5xl font-black mb-3 ${
                    tier.highlighted ? "text-black" : "text-white"
                  }`}
                >
                  {tier.price}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    tier.highlighted ? "text-black/70" : "text-white/50"
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span
                      className={`mt-1 text-xs ${
                        tier.highlighted ? "text-black" : "text-[#faff00]"
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={`text-sm ${
                        tier.highlighted ? "text-black/80" : "text-white/60"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-center font-black uppercase tracking-wide py-4 text-sm transition-colors ${
                  tier.highlighted
                    ? "bg-black text-[#faff00] hover:bg-[#111]"
                    : "border border-white/30 text-white hover:border-white/70"
                }`}
              >
                {tier.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
