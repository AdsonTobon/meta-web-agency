export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-lg font-black tracking-tight text-white uppercase">
          Melb<span className="text-[#faff00]">Web</span>
        </span>
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} MelbWeb. Melbourne, VIC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
