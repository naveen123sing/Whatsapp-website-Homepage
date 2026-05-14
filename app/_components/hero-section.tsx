import { Check, MessageCircle, Sparkles, TrendingUp } from "./icon";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container relative z-10 mx-auto grid min-h-screen px-6 pb-20 pt-32 lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 mb-6 animate-scale-in">
            <Sparkles className="w-4 h-4 text-[#25D366] animate-rotate-slow" />
            <span className="text-sm text-gray-300">
              Official WhatsApp Cloud API
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up animation-delay-100">
            Transform Customer Engagement with WhatsApp
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-xl animate-fade-up animation-delay-200">
            Scale your business with powerful WhatsApp automation,
            campaigns, analytics and customer engagement tools.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-300">
            <button className="px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20b558] transition">
              Start Free Trial
            </button>

            <button className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
              Book Demo
            </button>
          </div>

          <div className="flex gap-8 mt-10 animate-fade-up animation-delay-400">
            <div>
              <h3 className="text-3xl font-bold text-[#25D366]">1200+</h3>
              <p className="text-gray-400 text-sm">Businesses</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#25D366]">98%</h3>
              <p className="text-gray-400 text-sm">Delivery Rate</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#25D366]">24/7</h3>
              <p className="text-gray-400 text-sm">Support</p>
            </div>
          </div>
        </div>

        <div className="relative min-h-155 flex justify-center items-center animate-fade-left">
          <div className="phone-backdrop">
            <div className="phone-glow-box"></div>

            <div className="phone-rotating-ring ring-green"></div>
            <div className="phone-rotating-ring ring-blue"></div>
            <span className="phone-light-ring"></span>
          </div>

          <div className="relative z-10 w-70 h-140 bg-black border-8 border-gray-800 rounded-[40px] overflow-hidden shadow-2xl animate-phone">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>

            <div className="h-full bg-[#0f1119] p-4 flex flex-col justify-between">
              <div className="space-y-4 mt-10">
                <div className="bg-[#1f2c34] p-3 rounded-xl rounded-tl-none w-fit max-w-[80%]">
                  <p className="text-sm">Welcome!</p>
                </div>

                <div className="bg-[#005c4b] p-3 rounded-xl rounded-tr-none ml-auto w-fit max-w-[80%]">
                  <p className="text-sm">Hi there!</p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-28 h-28 bg-[#25D366] rounded-3xl flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-14 h-14 text-white" />
                </div>
              </div>

              <div className="bg-[#1f2c34] rounded-full px-4 py-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></div>
                <span className="text-sm text-gray-400">Typing...</span>
              </div>
            </div>
          </div>

          <div className="glass-card-glow glass-card-glow-purple absolute z-20 top-12 right-0 bg-white/10 border border-purple-400/30 shadow-[0_0_36px_rgba(147,51,234,0.35)] rounded-2xl p-4 animate-float">
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>

              <div>
                <p className="text-sm">98% Delivered</p>
                <p className="text-xs text-gray-400">+2.4K today</p>
              </div>
            </div>
          </div>

          <div className="glass-card-glow glass-card-glow-blue absolute z-20 bottom-16 left-4 bg-white/10 border border-blue-400/30 shadow-[0_0_36px_rgba(59,130,246,0.28)] rounded-2xl p-4 animate-float-delay">
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>

              <div>
                <p className="text-sm">+156% ROI</p>
                <p className="text-xs text-gray-400">This month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
