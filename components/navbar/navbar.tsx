"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookDemoModal } from "../book-demo/book-demo-modal";
import styles from "./navbar.module.css";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const menuItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Pro Feature", href: "#profeature" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${styles.show}`}>
        <div className={styles.container}>
          <Link href="/" >
            <Image
              src="/Logo4.png"
              alt="CompuX"
              width={140}
              height={98}
              priority
            />
          </Link>

          <div className={styles.menu}>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={styles.link}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className={styles.buttons}>
            <button type="button" className={styles.loginButton}>
              Login
            </button>

            <button
              type="button"
              className={styles.demoButton}
              onClick={() => setOpenModal(true)}
            >
              <span>Book Demo</span>
            </button>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className={styles.mobileToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>

        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className={styles.mobileButtons}>
            <button type="button" className={styles.mobileLoginButton}>
              Login
            </button>

            <button
              type="button"
              className={styles.mobileDemoButton}
              onClick={() => {
                setIsMenuOpen(false);
                setOpenModal(true);
              }}
            >
              Book Demo
            </button>
          </div>
        </div>
      </nav>

      <BookDemoModal open={openModal} onOpenChange={setOpenModal} />
    </>
  );
}
