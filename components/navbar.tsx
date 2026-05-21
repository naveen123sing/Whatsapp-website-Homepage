"use client";

import { useState } from "react";
import { MessageCircle } from "./icon";
import Link from "next/link";
import { BookDemoModal } from "./book-demo/book-demo-modal";

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
      <nav className="navbar navbar-show">
        <div className="navbar-container">
          <Link href="/" className="navbar-logo">
            <div className="logo-icon">
              <MessageCircle strokeWidth={2.5} />
            </div>
            <span className="logo-text">Compucom</span>
          </Link>

          <div className="navbar-menu">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="navbar-link"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="navbar-buttons">
            <button type="button" className="login-btn">
              Login
            </button>

            <button
              type="button"
              className="demo-btn"
              onClick={() => setOpenModal(true)}
            >
              <span>Book Demo</span>
            </button>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? "mobile-menu-open" : ""}`}>
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="mobile-buttons">
            <button type="button" className="mobile-login-btn">
              Login
            </button>

            <button
              type="button"
              className="mobile-demo-btn"
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
