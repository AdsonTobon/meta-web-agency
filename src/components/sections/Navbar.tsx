export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <span className="text-lg font-black tracking-tight text-white uppercase">
          Melb<span className="text-[#faff00]">Web</span>
        </span>
        <a
          href="#contact"
          className="bg-[#faff00] text-black text-sm font-bold px-5 py-2 uppercase tracking-wide hover:bg-white transition-colors"
        >
          Get a Free Audit
        </a>
      </div>
    </nav>
  );
}
