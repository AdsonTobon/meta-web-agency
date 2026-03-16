import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-6 border-b border-white/10">
      <div className="mx-auto max-w-6xl w-full">
        {/* Editorial tag */}
        <p className="text-[#faff00] text-sm font-bold uppercase tracking-[0.2em] mb-8">
          Melbourne Web Agency — Est. 2025
        </p>

        {/* Main headline */}
        <h1 className="text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] tracking-tight text-white uppercase mb-8">
          Your Website<br />
          Is Costing<br />
          You Jobs.
        </h1>

        {/* Sub-headline */}
        <div className="max-w-2xl mb-12">
          <p className="text-xl text-white/70 leading-relaxed">
            Most Melbourne tradespeople have a website that does absolutely nothing.
            Ours convert visitors into booked jobs — or you don&apos;t pay.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a
            href="#contact"
            className="bg-[#faff00] text-black font-black text-lg px-8 py-4 uppercase tracking-wide hover:bg-white transition-colors inline-block text-center"
          >
            Get My Free Website Audit →
          </a>
          <a
            href="#proof"
            className="border border-white/30 text-white font-bold text-lg px-8 py-4 uppercase tracking-wide hover:border-white/70 transition-colors inline-block text-center"
          >
            See Results
          </a>
        </div>

        {/* Social proof strip */}
        <div className="flex flex-col sm:flex-row gap-8 border-t border-white/10 pt-8">
          <div>
            <p className="text-3xl font-black text-white">47+</p>
            <p className="text-white/50 text-sm uppercase tracking-wide">Melbourne businesses</p>
          </div>
          <div className="hidden sm:block w-px bg-white/10" />
          <div>
            <p className="text-3xl font-black text-white">3.2x</p>
            <p className="text-white/50 text-sm uppercase tracking-wide">Average lead increase</p>
          </div>
          <div className="hidden sm:block w-px bg-white/10" />
          <div>
            <p className="text-3xl font-black text-white">14 days</p>
            <p className="text-white/50 text-sm uppercase tracking-wide">Avg. delivery time</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl w-full mt-16 flex justify-start">
        <ArrowDown className="text-white/20 animate-bounce" size={24} />
      </div>
    </section>
  );
}
