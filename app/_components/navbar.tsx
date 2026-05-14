"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "./icon";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
   <nav className="navbar navbar-show">
      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-logo">
          <div className="logo-icon">
            <MessageCircle  strokeWidth={2.5} />
          </div>

          <span className="logo-text">Compucom</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="navbar-menu">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} className="navbar-link">
              {item.label}
            </a>
          ))}
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="navbar-buttons">
          <button className="login-btn">
            Login
          </button>

          <button className="demo-btn">
            <span>Book Demo</span>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
        
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${isMenuOpen ? "mobile-menu-open" : ""}`}>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}

        <div className="mobile-buttons">
          <button className="mobile-login-btn">
            Login
          </button>

          <button className="mobile-demo-btn">
            Book Demo
          </button>
        </div>
      </div>
    </nav>
  );
}