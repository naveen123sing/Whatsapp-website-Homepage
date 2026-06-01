import { AnimatedBackground } from "../../components/animated-background/animated-background";
import { Navbar } from "../../components/navbar/navbar";
import { SiteFooter } from "../../components/site-footer/site-footer";

type RefundBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

const refundSections: Array<{
  title: string;
  blocks: RefundBlock[];
}> = [
  {
    title: "1. Overview",
    blocks: [
      {
        type: "paragraph",
        text: "This Refund Policy describes the conditions under which refunds may or may not be provided for CompuX products and services.",
      },
      {
        type: "paragraph",
        text: "By purchasing or subscribing to CompuX services, you agree to this Refund Policy.",
      },
    ],
  },
  {
    title: "2. Subscription Fees",
    blocks: [
      {
        type: "paragraph",
        text: "Unless otherwise agreed in writing, subscription fees paid for access to the CompuX platform are generally non-refundable once the subscription period has started.",
      },
      {
        type: "paragraph",
        text: "Customers may choose not to renew future subscription periods by providing notice before the next billing cycle.",
      },
    ],
  },
  {
    title: "3. Setup And Onboarding Services",
    blocks: [
      {
        type: "paragraph",
        text: "Setup fees, implementation charges, onboarding assistance, configuration services, migration services, consulting services, and training services are non-refundable once work has commenced.",
      },
    ],
  },
  {
    title: "4. WhatsApp And Meta Decisions",
    blocks: [
      {
        type: "paragraph",
        text: "CompuX does not control decisions made by Meta or WhatsApp, including:",
      },
      {
        type: "list",
        items: [
          "WhatsApp Business Account approvals",
          "Display name approvals",
          "Template approvals or rejections",
          "Messaging limits",
          "Quality ratings",
          "Official Business Account (Verified Badge) approvals",
          "Account restrictions or suspensions",
        ],
      },
      {
        type: "paragraph",
        text: "Refunds will not be provided solely because Meta or WhatsApp rejects, delays, limits, suspends, or modifies any approval, verification, messaging capability, or platform feature.",
      },
      {
        type: "paragraph",
        text: "Meta and WhatsApp approval decisions are outside CompuX's control and are not grounds for a refund.",
      },
    ],
  },
  {
    title: "5. Usage-Based Charges",
    blocks: [
      {
        type: "paragraph",
        text: "Charges relating to:",
      },
      {
        type: "list",
        items: [
          "WhatsApp conversation fees",
          "Messaging fees",
          "Meta charges",
          "Third-party usage fees",
        ],
      },
      {
        type: "paragraph",
        text: "are generally non-refundable once incurred.",
      },
    ],
  },
  {
    title: "6. Duplicate Payments",
    blocks: [
      {
        type: "paragraph",
        text: "If a customer is charged more than once for the same transaction due to a billing error, CompuX will investigate and issue an appropriate refund where applicable.",
      },
    ],
  },
  {
    title: "7. Service Unavailability",
    blocks: [
      {
        type: "paragraph",
        text: "In the event of a significant service disruption caused solely by CompuX, refund requests may be reviewed on a case-by-case basis.",
      },
      {
        type: "paragraph",
        text: "Compensation, credits, or refunds, if any, shall be at CompuX's discretion unless otherwise required by law.",
      },
    ],
  },
  {
    title: "8. Cancellation",
    blocks: [
      {
        type: "paragraph",
        text: "Customers may cancel their subscription at any time.",
      },
      {
        type: "paragraph",
        text: "Cancellation will prevent future billing but will not automatically result in a refund for fees already paid.",
      },
    ],
  },
  {
    title: "9. Contact Us",
    blocks: [
      {
        type: "paragraph",
        text: "For billing or refund-related questions:",
      },
      {
        type: "paragraph",
        text: "Email : support@compux.in",
      },
    ],
  },
];

function renderBlock(block: RefundBlock) {
  if (block.type === "list") {
    return (
      <ul key={block.items.join("|")} className="pl-5">
        {block.items.map((item) => (
          <li key={item} className="list-disc marker:text-[#25D366]">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return <p key={block.text}>{block.text}</p>;
}

export default function RefundPolicyPage() {
  return (
    <main className="site-scene relative min-h-screen overflow-x-hidden text-white">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar />

        <section className="container mx-auto px-6 pb-14 pt-36">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#25D366]">
              CompuX - A Product of Compucom Software Ltd.
            </p>

            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
              Refund
              <span className="bg-linear-to-r from-green-400 to-emerald-200 bg-clip-text text-transparent">
                {" "}
                Policy
              </span>
            </h1>

            <p className="mt-7 text-md text-gray-400">
              This Refund Policy describes the conditions under which refunds
              may or may not be provided for CompuX products and services.
            </p>

            <p className="mt-5 text-sm text-gray-500">
              Effective date: May 27, 2026
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {refundSections.map((section) => (
              <article key={section.title} className="py-8">
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-1 text-base text-gray-400">
                  {section.blocks.map(renderBlock)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
