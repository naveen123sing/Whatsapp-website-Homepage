"use client";

import { useEffect } from "react";
import { BookDemoForm } from "./book-demo-form";
import { CloseIcon } from "../icon";

interface BookDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
}

export function BookDemoModal({
  open,
  onOpenChange,
  title = "Book a Demo",
  description = "Fill in your details and our team will contact you shortly.",
}: BookDemoModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onOpenChange, open]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onOpenChange(false);
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-demo-title"
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-8 text-gray-900 shadow-2xl animate-scale-in"
      >
        <button
          type="button"
          aria-label="Close book demo form"
          onClick={() => onOpenChange(false)}
          className="absolute right-5 top-5 text-gray-500 transition hover:text-black"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <div className="mb-8 pr-8">
          <h2 id="book-demo-title" className="mb-2 text-3xl font-bold">
            {title}
          </h2>

          <p className="text-gray-500">
            {description}
          </p>
        </div>

        <BookDemoForm />
      </div>
    </div>
  );
}
