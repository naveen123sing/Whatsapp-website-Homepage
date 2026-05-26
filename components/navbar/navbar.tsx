"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookDemoModal } from "../book-demo/book-demo-modal";
import { ChevronDown, CloseIcon } from "../icon";
import styles from "./navbar.module.css";

const coachingPdfUrl = "/pdfs/Whatsapp_CoachingInstt_graphics.pdf";

const industryUseCases = [
  {
    label: "Education",
    description: "Admissions, fee reminders, and student support.",
    pdfUrl: coachingPdfUrl,
  },
  {
    label: "Healthcare",
    description: "Appointments, reports, and patient follow-ups.",
    pdfUrl: coachingPdfUrl,
  },
  {
    label: "Real Estate",
    description: "Lead nurturing, site visits, and project updates.",
    pdfUrl: coachingPdfUrl,
  },
  {
    label: "Retail & D2C",
    description: "Offers, order updates, and customer reactivation.",
    pdfUrl: coachingPdfUrl,
  },
  {
    label: "Travel",
    description: "Booking alerts, itineraries, and support flows.",
    pdfUrl: coachingPdfUrl,
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<
    (typeof industryUseCases)[number] | null
  >(null);

  const menuItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Pro Feature", href: "#profeature" },
    { label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    if (!selectedPdf) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPdf(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPdf]);

  return (
    <>
      <nav className={`${styles.navbar} ${styles.show}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/Logo4.png"
              alt="CompuX"
              width={140}
              height={98}
              className={styles.logoImage}
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

            <div className={styles.dropdown}>
              <button
                type="button"
                className={styles.dropdownTrigger}
                aria-haspopup="true"
              >
                <span>Industries</span>
                <ChevronDown className={styles.dropdownIcon} />
              </button>

              <div className={styles.dropdownPanel}>
                <div className={styles.dropdownHeader}>
                  <p>Industry Wise Use Cases</p>
                  <span>Choose workflows built for your business type.</span>
                </div>

                <div className={styles.dropdownGrid}>
                  {industryUseCases.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      className={styles.dropdownItem}
                      onClick={() => setSelectedPdf(item)}
                    >
                      <strong>{item.label}</strong>
                      <span>{item.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
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

          <div className={styles.mobileGroup}>
            <p>Industries</p>

            {industryUseCases.map((item) => (
              <button
                key={item.label}
                type="button"
                className={styles.mobileSubItem}
                onClick={() => {
                  setIsMenuOpen(false);
                  setSelectedPdf(item);
                }}
              >
                <strong>{item.label}</strong>
                <span>{item.description}</span>
              </button>
            ))}
          </div>

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

      {selectedPdf ? (
        <div
          className={styles.pdfOverlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby="industry-pdf-title"
          onClick={() => setSelectedPdf(null)}
        >
          <div
            className={styles.pdfModal}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.pdfHeader}>
              <div>
                <p>Industry Use Case</p>
                <h2 id="industry-pdf-title">{selectedPdf.label}</h2>
              </div>

              <button
                type="button"
                className={styles.pdfCloseButton}
                aria-label="Close PDF preview"
                onClick={() => setSelectedPdf(null)}
              >
                <CloseIcon className={styles.pdfCloseIcon} />
              </button>
            </div>

            <iframe
              title={`${selectedPdf.label} PDF`}
              src={selectedPdf.pdfUrl}
              className={styles.pdfFrame}
            />
          </div>
        </div>
      ) : null}

      <BookDemoModal open={openModal} onOpenChange={setOpenModal} />
    </>
  );
}
