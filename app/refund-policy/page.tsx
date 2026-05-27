import { AnimatedBackground } from "../../components/animated-background/animated-background";
import { Navbar } from "../../components/navbar/navbar";
import { SiteFooter } from "../../components/site-footer";

const refundSections = [
  {
    title: "1. General Refund Policy",
    body: [
      "This Refund Policy applies to payments made for Compucom Software Ltd. services, including WhatsApp Business API solutions, subscription plans, setup support, campaign tools, automation services, add-ons, and related service packages.",
      "Refund eligibility depends on the type of service purchased, usage status, third-party charges, and the terms shared in your invoice, order form, proposal, or service agreement.",
    ],
  },
  {
    title: "2. Subscription Plans",
    body: [
      "Subscription fees are generally billed in advance and are non-refundable once the billing period has started or the service has been activated.",
      "If you cancel a subscription, access may continue until the end of the active billing period unless your agreement states otherwise. Future renewals will stop after cancellation is confirmed.",
    ],
  },
  {
    title: "3. Setup, Onboarding, And Custom Work",
    body: [
      "Setup fees, onboarding charges, custom integration work, template setup, training, implementation, and consulting fees are non-refundable once work has started.",
      "If a project is cancelled before work begins, we may review the request and provide a partial or full refund at our discretion after deducting any committed costs.",
    ],
  },
  {
    title: "4. Message Credits And Third-Party Charges",
    body: [
      "Charges related to WhatsApp conversations, message usage, Meta fees, telecom charges, payment gateway charges, or other third-party costs are generally non-refundable once consumed or billed by the provider.",
      "Unused credits may be handled according to the plan, invoice, or agreement applicable to your account.",
    ],
  },
  {
    title: "5. Duplicate Or Incorrect Payments",
    body: [
      "If you believe you made a duplicate payment or were charged incorrectly, please contact us with payment proof, invoice details, transaction ID, registered email, and company name.",
      "After verification, eligible duplicate or incorrect payments may be refunded to the original payment method or adjusted against future invoices.",
    ],
  },
  {
    title: "6. Service Issues",
    body: [
      "If you experience a service issue, please contact our support team first so we can investigate and resolve the problem.",
      "Refunds are not issued for issues caused by incorrect setup details, unsupported use cases, lack of required approvals, third-party restrictions, policy violations, customer-side technical issues, or delayed information from your side.",
    ],
  },
  {
    title: "7. Refund Request Timeline",
    body: [
      "Refund requests should be submitted within 7 days of the payment date unless your written agreement specifies a different timeline.",
      "Requests submitted after this period may be declined, but we may still review exceptional cases at our discretion.",
    ],
  },
  {
    title: "8. Refund Processing",
    body: [
      "Approved refunds are usually processed to the original payment method. Processing time may vary depending on bank, payment gateway, card network, or financial institution timelines.",
      "Any gateway fees, taxes, transaction charges, currency conversion charges, or third-party deductions may be deducted where applicable.",
    ],
  },
  {
    title: "9. Cancellation",
    body: [
      "You can request cancellation of future renewals by contacting our team before the next billing cycle starts.",
      "Cancellation does not automatically create refund eligibility for already activated services, consumed usage, setup work, or current billing periods.",
    ],
  },
  {
    title: "10. Policy Updates",
    body: [
      "We may update this Refund Policy from time to time to reflect changes in services, payment processes, legal requirements, or business practices.",
      "The updated policy will be posted on this page with a revised effective date.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="site-scene relative min-h-screen overflow-x-hidden text-white">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar />

        <section className="container mx-auto px-6 pb-14 pt-36">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
              Refund
              <span className="bg-linear-to-r from-green-400 to-emerald-200 bg-clip-text text-transparent">
                {" "}
                Policy
              </span>
            </h1>

            <p className="mt-7 text-lg leading-8 text-gray-400">
              This Refund Policy explains how cancellation, refund requests,
              subscription fees, setup charges, message usage, and third-party
              costs are handled for Compucom services.
            </p>

            <p className="mt-5 text-sm text-gray-500">
              Effective date: May 27, 2026
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-20">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {refundSections.map((section) => (
              <article key={section.title} className="py-8">
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4 text-base leading-8 text-gray-400">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}

            <article className="py-8">
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>

              <p className="mt-5 text-base leading-8 text-gray-400">
                To request a refund review, please contact us through the
                website contact form or Book Demo form with your invoice,
                transaction ID, company name, and payment details.
              </p>
            </article>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
