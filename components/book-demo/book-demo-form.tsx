"use client";

import type { FormEvent } from "react";
import { useId, useState } from "react";

export function BookDemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const idPrefix = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
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
        onChange={() => submitted && setSubmitted(false)}
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

        <div>
          <label
            htmlFor={`${idPrefix}-phone`}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>

          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Enter your phone number"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-[#25D366]"
          />
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
          Submit Demo Request
        </button>
      </form>
    </>
  );
}
