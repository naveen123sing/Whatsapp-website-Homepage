"use client";

import intlTelInput, { type Iti } from "intl-tel-input";
import type { FormEvent } from "react";
import { useEffect, useId, useRef, useState } from "react";
import styles from "./book-demo-form.module.css";

export function BookDemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const idPrefix = useId();
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const phoneInstanceRef = useRef<Iti | null>(null);

  useEffect(() => {
    if (!phoneInputRef.current) {
      return;
    }

    const phoneInstance = intlTelInput(phoneInputRef.current, {
      initialCountry: "in",
      separateDialCode: true,
      strictMode: true,
      loadUtils: () => import("intl-tel-input/utils"),
    });

    phoneInstanceRef.current = phoneInstance;
 
    return () => {
      phoneInstance.destroy();
      phoneInstanceRef.current = null;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const phoneInstance = phoneInstanceRef.current;

    if (phoneInstance) {
      await phoneInstance.promise;

      if (!phoneInstance.isValidNumber()) {
        setPhoneError("Please enter a valid phone number.");
        return;
      }

      const formData = new FormData(event.currentTarget);
      formData.set("phone", phoneInstance.getNumber());
    }

    event.currentTarget.reset();
    setSubmitted(true);
    setPhoneError("");
  }

  return (
    <>
      {submitted && (
        <div className="mb-5 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-3 text-sm font-medium text-[#137c3c]">
          Thanks! Your demo request has been captured on this page.
        </div>
      )}

      <form
        className="space-y-5"
        onChange={() => {
          if (submitted) {
            setSubmitted(false);
          }

          if (phoneError) {
            setPhoneError("");
          }
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor={`${idPrefix}-name`}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>

          <input
            id={`${idPrefix}-name`}
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Enter your name"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-[#25D366]"
          />
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-email`}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>

          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-[#25D366]"
          />
        </div>

        <div className={styles.phoneField}>
          <label
            htmlFor={`${idPrefix}-phone`}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>

          <input
            id={`${idPrefix}-phone`}
            ref={phoneInputRef}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Enter your phone number"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-[#25D366]"
            aria-invalid={Boolean(phoneError)}
            aria-describedby={phoneError ? `${idPrefix}-phone-error` : undefined}
          />

          {phoneError && (
            <p
              id={`${idPrefix}-phone-error`}
              className="mt-2 text-sm font-medium text-red-600"
            >
              {phoneError}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-company`}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Company Name
          </label>

          <input
            id={`${idPrefix}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Enter company name"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-[#25D366]"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#25D366] py-3 font-semibold text-white transition-all hover:bg-[#1ebe5d]"
        >
          Submit
        </button>
      </form>
    </>
  );
}
