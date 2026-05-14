export function CtaSection() {
  return (
    <section id="cta" className="container mx-auto px-6 py-20">
      <div className="rounded-3xl p-12 bg-linear-to-r from-[#25D366]/20 to-purple-500/20 border border-white/10 text-center animate-scale-in">
        <h2 className="text-5xl font-bold mb-6">Start Growing Today</h2>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses scaling customer engagement with
          WhatsApp automation.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20b558] transition">
            Start Free Trial
          </button>

          <button className="px-8 py-4 rounded-xl bg-white text-black hover:bg-gray-200 transition">
            Talk to Sales
          </button>
        </div>
      </div>
    </section>
  );
}
