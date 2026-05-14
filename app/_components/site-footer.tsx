import { Clock, MessageCircle, Shield } from "./icon";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>

              <span className="text-xl font-semibold">Compucom</span>
            </div>

            <p className="text-sm text-gray-400">
              Powerful WhatsApp marketing platform for businesses.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Features</li>
              <li>Pricing</li>
              <li>API Docs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Privacy Policy</li>
              <li>Terms</li>
              <li>GDPR</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">
          <p>(c) 2026 Compucom. All rights reserved.</p>

          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#25D366]" />
              <span>Official API</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#25D366]" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
