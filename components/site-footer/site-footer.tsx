"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BookDemoModal } from "../book-demo/book-demo-modal";
import { Clock, Facebook, Instagram, Shield } from "../icon";
import styles from "./site-footer.module.css";

const trialModal = {
  title: "Contact Our Team",
  description:
    "Fill in your details and our team will help you activate your trial shortly.",
};

const socialIcons = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/CompuX/61590330130259/",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/compux.official/",
    icon: Instagram,
  },
];

export function SiteFooter() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <footer className={`border-t border-white/10 ${styles.footer}`}>
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-10 md:grid-cols-5">
            <div className={styles.brandColumn}>
              <div className="mb-4 flex items-center gap-2">
                <Link href="/" className={styles.logo} aria-label="CompuX home">
                  <Image
                    src="/CompuLogo5 1.svg"
                    alt="CompuX"
                    width={140}
                    height={98}
                    className={styles.logoImage}
                    priority
                  />
                </Link>
              </div>

              <p className="text-sm text-gray-400">
                Powerful WhatsApp marketing platform for businesses.
              </p>

              <div className="mt-5 flex items-center gap-3">
                {socialIcons.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-label={`${item.label} page`}
                      className={styles.socialIcon}
                      rel="noopener noreferrer"
                      target="_blank"
                      title={item.label}
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Product</h4>

              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="/#features"
                    className="transition hover:text-[#25D366]"
                  >
                    Features
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#pricing"
                    className="transition hover:text-[#25D366]"
                  >
                    Price
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Company</h4>

              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="/about"
                    className="transition hover:text-[#25D366]"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <button
                    type="button"
                    className="cursor-pointer text-left transition hover:text-[#25D366]"
                    onClick={() => setOpenModal(true)}
                  >
                    Help Center
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Legal</h4>

              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="transition hover:text-[#25D366]"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trems-conditions"
                    className="transition hover:text-[#25D366]"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-policy"
                    className="transition hover:text-[#25D366]"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Contect Us</h4>

              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="" className="transition hover:text-[#25D366]">
                    Support: +917300043694
                  </Link>
                </li>
                <li>
                  <Link href="" className="transition hover:text-[#25D366]">
                    Email: contact@compux.in
                  </Link>
                </li>

                <li>
                  <button
                    type="button"
                    className="cursor-pointer text-left transition hover:text-[#25D366]"
                    onClick={() => setOpenModal(true)}
                  >
                    Contact Our Team
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row">
            <p>(@) 2026 Powered By Compucom Software ltd. All rights reserved.</p>

            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#25D366]" />
                <span>Official API</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#25D366]" />
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
