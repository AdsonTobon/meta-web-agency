"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build my website?",
    a: "Our Starter and Growth packages are delivered in 14 days from when we receive your content. We'll send you a simple checklist — logo, photos, and a few details about your business. We handle everything else.",
  },
  {
    q: "Do I need to provide content and photos?",
    a: "If you have them, great. If not, we can source stock photography and write your copy for you as part of the Growth package. For Starter, we need your logo and basic business details.",
  },
  {
    q: "Will my website rank on Google?",
    a: "We set up every website with proper local SEO foundations — schema markup, Google My Business integration, suburb-targeted pages, and fast load times. Rankings take time, but you'll be starting on the right foot from day one.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "We do unlimited revisions until you're satisfied during the build process. After launch, you have 30 days of support included. We won't disappear on you.",
  },
  {
    q: "Do I own the website?",
    a: "Yes — 100%. Once we deliver, you own the code, the design, the domain, everything. No ongoing fees unless you choose our Authority plan or ongoing support.",
  },
  {
    q: "Can you help with Google Ads too?",
    a: "Yes. The Growth package includes a dedicated Google Ads landing page. We also offer ad management as an add-on or as part of the Authority plan.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white font-bold text-lg">{q}</span>
        {open ? (
          <Minus className="text-[#faff00] flex-shrink-0" size={20} />
        ) : (
          <Plus className="text-[#faff00] flex-shrink-0" size={20} />
        )}
      </button>
      {open && (
        <p className="text-white/60 leading-relaxed pb-6">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 px-6 border-b border-white/10">
      <div className="mx-auto max-w-6xl">
        <p className="text-[#faff00] text-sm font-bold uppercase tracking-[0.2em] mb-6">
          FAQ
        </p>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-white uppercase leading-[0.95] tracking-tight sticky top-24">
              Questions We Get Every Day.
            </h2>
          </div>

          <div className="lg:w-2/3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
