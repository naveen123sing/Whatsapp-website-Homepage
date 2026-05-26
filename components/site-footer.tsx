"use client";

import { useState } from "react";
import { Clock, MessageCircle, Shield } from "./icon";
import Link from "next/link";
import { BookDemoModal } from "./book-demo/book-demo-modal";

const trialModal = {
  title: "Contact Our Team",
  description: "Fill in your details and our team will help you activate your trial shortly.",
};

export function SiteFooter() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
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
                <li>
                  <Link
                    href="/#features"
                    className="hover:text-[#25D366] transition"
                  >
                    Features
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#pricing"
                    className="hover:text-[#25D366] transition"
                  >
                    Price
                  </Link>
                </li>
                <li>API Docs</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>

              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#25D366] transition"
                  >
                    About
                  </Link>
                </li>

                {/* <li>
                  <Link
                    href="/careers"
                    className="hover:text-[#25D366] transition"
                  >
                    Careers
                  </Link>
                </li> */}

                <li>
                  <button
                    type="button"
                    className="cursor-pointer text-left transition hover:text-[#25D366]"
                    onClick={() => setOpenModal(true)}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>

              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-[#25D366] transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>Terms</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">
            <p>(@) 2026 Powered By Compucom Software ltd. All rights reserved.</p>

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

      <BookDemoModal
        open={openModal}
        onOpenChange={setOpenModal}
        title={trialModal.title}
        description={trialModal.description}
      />
    </>
  );
}
