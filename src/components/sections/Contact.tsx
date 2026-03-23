"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, businessType, websiteUrl }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-[#faff00] text-sm font-bold uppercase tracking-[0.2em] mb-6">
          Free Audit
        </p>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black text-white uppercase leading-[0.95] tracking-tight mb-6">
              Get Your Free Website Audit.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              We&apos;ll review your current website (or lack of one), your Google presence,
              and your top 3 competitors — then show you exactly what&apos;s costing you jobs.
            </p>
            <p className="text-white/40 text-sm uppercase tracking-wide font-bold">
              No obligation. No pushy sales call. Just honest feedback.
            </p>
          </div>

          <div className="lg:w-1/2">
            {submitted ? (
              <div className="border border-[#faff00]/30 bg-[#faff00]/5 p-12 text-center">
                <p className="text-[#faff00] text-4xl font-black mb-4">Done.</p>
                <p className="text-white/70 text-lg">
                  We&apos;ll review your website and send your audit within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-wide mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dave Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/20 px-4 py-3 focus:outline-none focus:border-[#faff00] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-wide mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="04xx xxx xxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/20 px-4 py-3 focus:outline-none focus:border-[#faff00] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-wide mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="dave@example.com.au"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/20 px-4 py-3 focus:outline-none focus:border-[#faff00] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-wide mb-2">
                    Business Type
                  </label>
                  <select
                    required
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#faff00] transition-colors appearance-none"
                  >
                    <option value="" disabled className="bg-[#0a0a0a]">
                      Select your trade...
                    </option>
                    <option value="plumber" className="bg-[#0a0a0a]">Plumber</option>
                    <option value="electrician" className="bg-[#0a0a0a]">Electrician</option>
                    <option value="hvac" className="bg-[#0a0a0a]">HVAC / Air Conditioning</option>
                    <option value="builder" className="bg-[#0a0a0a]">Builder / Renovations</option>
                    <option value="landscaping" className="bg-[#0a0a0a]">Landscaping / Gardens</option>
                    <option value="cleaning" className="bg-[#0a0a0a]">Cleaning Services</option>
                    <option value="other" className="bg-[#0a0a0a]">Other service business</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-wide mb-2">
                    Current Website URL (if any)
                  </label>
                  <input
                    type="url"
                    placeholder="https://yoursite.com.au"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/20 px-4 py-3 focus:outline-none focus:border-[#faff00] transition-colors"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#faff00] text-black font-black text-lg py-4 uppercase tracking-wide hover:bg-white transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Me My Free Audit →"}
                </button>

                <p className="text-white/30 text-xs text-center">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
