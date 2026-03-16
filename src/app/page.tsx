import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Proof from "@/components/sections/Proof";
import Offer from "@/components/sections/Offer";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-[#f5f0e8] min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Proof />
      <Offer />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
