import { AnimatedBackground } from "../../components/animated-background/animated-background";
import { Navbar } from "../../components/navbar/navbar";
import { SiteFooter } from "../../components/site-footer/site-footer";

type TermsBlock =
  | {
    type: "paragraph";
    text: string;
  }
  | {
    type: "heading";
    text: string;
  }
  | {
    type: "list";
    items: string[];
  };

const termsSections: Array<{
  title: string;
  blocks: TermsBlock[];
}> = [
    {
      title: "1. Acceptance Of Terms",
      blocks: [
        {
          type: "paragraph",
          text: "By accessing or using CompuX services, you agree to be bound by these Terms & Conditions.",
        },
        {
          type: "paragraph",
          text: "If you are accepting these terms on behalf of an organization, you represent that you have authority to bind that organization.",
        },
      ],
    },
    {
      title: "2. Services",
      blocks: [
        {
          type: "paragraph",
          text: "CompuX provides software and related services including:",
        },
        {
          type: "list",
          items: [
            "WhatsApp Business Platform integration",
            "Campaign management",
            "Broadcast messaging",
            "Automation workflows",
            "Customer engagement tools",
            "Analytics and reporting",
            "Template management",
            "Contact management",
            "Support services",
          ],
        },
        {
          type: "paragraph",
          text: "Service availability may depend on third-party providers.",
        },
      ],
    },
    {
      title: "3. Customer Accounts",
      blocks: [
        {
          type: "paragraph",
          text: "Customers are responsible for:",
        },
        {
          type: "list",
          items: [
            "Maintaining accurate information",
            "Protecting account credentials",
            "Restricting access to authorized users",
            "Activities occurring under their accounts",
          ],
        },
        {
          type: "paragraph",
          text: "Customers must promptly notify CompuX of unauthorized account activity.",
        },
      ],
    },
    {
      title: "4. WhatsApp And Meta Compliance",
      blocks: [
        {
          type: "paragraph",
          text: "Customers must comply with:",
        },
        {
          type: "list",
          items: [
            "WhatsApp Business Platform Terms",
            "WhatsApp Messaging Policies",
            "Meta Platform Terms",
            "Commerce Policies",
            "Applicable laws and regulations",
          ],
        },
        {
          type: "paragraph",
          text: "Customers acknowledge that Meta may independently suspend, restrict, or terminate WhatsApp assets for policy violations.",
        },
      ],
    },
    {
      title: "4.1 WhatsApp Verified Badge Disclaimer",
      blocks: [
        {
          type: "paragraph",
          text: "CompuX does not control, guarantee, influence, approve, or expedite the granting of any WhatsApp Verified Badge, Official Business Account (OBA) status, Meta Verified status, display name approval, quality rating, messaging limits, or other platform designations.",
        },
        {
          type: "paragraph",
          text: "All decisions regarding verification, account status, display names, messaging permissions, quality ratings, account reviews, and policy enforcement are made solely by Meta Platforms, Inc. and WhatsApp in accordance with their internal policies and procedures.",
        },
        {
          type: "paragraph",
          text: "Submission of information through CompuX, use of the CompuX platform, payment of fees, or use of WhatsApp Business Platform services does not guarantee approval of any verification request or special account status.",
        },
        {
          type: "paragraph",
          text: "CompuX shall not be liable for any rejection, delay, suspension, limitation, removal, or modification of verification status, messaging privileges, or account features imposed by Meta or WhatsApp.",
        },
      ],
    },
    {
      title: "5. Customer Consent Responsibilities",
      blocks: [
        {
          type: "paragraph",
          text: "Customers are solely responsible for:",
        },
        {
          type: "list",
          items: [
            "Obtaining valid recipient consent",
            "Maintaining opt-in records",
            "Processing opt-outs",
            "Managing communication preferences",
            "Ensuring lawful messaging activities",
          ],
        },
        {
          type: "paragraph",
          text: "CompuX does not verify customer consent records.",
        },
      ],
    },
    {
      title: "6. Prohibited Activities",
      blocks: [
        {
          type: "paragraph",
          text: "Customers may not use the platform for:",
        },
        {
          type: "list",
          items: [
            "Spam",
            "Fraudulent activity",
            "Misleading communications",
            "Illegal products or services",
            "Harassment",
            "Malware distribution",
            "Unauthorized data collection",
            "Violations of WhatsApp or Meta policies",
          ],
        },
      ],
    },
    {
      title: "7. Fees And Payments",
      blocks: [
        {
          type: "paragraph",
          text: "Fees may include:",
        },
        {
          type: "list",
          items: [
            "Subscription charges",
            "Setup fees",
            "Usage-based charges",
            "Messaging fees",
            "Professional services",
          ],
        },
        {
          type: "paragraph",
          text: "Failure to pay applicable charges may result in suspension or termination.",
        },
      ],
    },
    {
      title: "8. Customer Data Ownership",
      blocks: [
        {
          type: "paragraph",
          text: "Customers retain ownership of all:",
        },
        {
          type: "list",
          items: [
            "Contacts",
            "Customer records",
            "Messages",
            "Templates",
            "Campaign information",
            "Workflow configurations",
          ],
        },
        {
          type: "paragraph",
          text: "CompuX receives only the rights necessary to operate and provide services.",
        },
      ],
    },
    {
      title: "9. Intellectual Property",
      blocks: [
        {
          type: "paragraph",
          text: "CompuX, its software, trademarks, branding, website content, documentation, and platform features remain the property of Compucom Software Ltd. or its licensors.",
        },
        {
          type: "paragraph",
          text: "No ownership rights are transferred to customers.",
        },
      ],
    },
    {
      title: "10. Service Availability",
      blocks: [
        {
          type: "paragraph",
          text: "CompuX strives to maintain service availability but does not guarantee uninterrupted service.",
        },
        {
          type: "paragraph",
          text: "Availability may be affected by:",
        },
        {
          type: "list",
          items: [
            "Maintenance activities",
            "Infrastructure issues",
            "Internet outages",
            "Third-party service interruptions",
            "Meta or WhatsApp platform limitations",
          ],
        },
      ],
    },
    {
      title: "11. Message Delivery Disclaimer",
      blocks: [
        {
          type: "paragraph",
          text: "Message delivery depends on factors outside CompuX's control, including:",
        },
        {
          type: "list",
          items: [
            "WhatsApp platform availability",
            "Recipient device status",
            "Network conditions",
            "Customer configurations",
            "Third-party service availability",
          ],
        },
        {
          type: "paragraph",
          text: "CompuX does not guarantee delivery, timing, or receipt of any message.",
        },
      ],
    },
    {
      title: "12. Data Processing",
      blocks: [
        {
          type: "paragraph",
          text: "CompuX may process customer information solely for:",
        },
        {
          type: "list",
          items: [
            "Service delivery",
            "Support",
            "Security",
            "Analytics",
            "Platform maintenance",
          ],
        },
        {
          type: "paragraph",
          text: "Customers remain responsible for lawful collection and use of personal information.",
        },
      ],
    },
    {
      title: "13. Suspension And Termination",
      blocks: [
        {
          type: "paragraph",
          text: "We may suspend or terminate access if:",
        },
        {
          type: "list",
          items: [
            "Terms are violated",
            "Fees remain unpaid",
            "Security risks arise",
            "Legal compliance requires action",
            "Platform misuse occurs",
          ],
        },
        {
          type: "paragraph",
          text: "Customers may discontinue use at any time.",
        },
      ],
    },
    {
      title: "14. Limitation Of Liability",
      blocks: [
        {
          type: "paragraph",
          text: "To the maximum extent permitted by law, CompuX shall not be liable for indirect, incidental, special, consequential, or lost-profit damages arising from use of the services.",
        },
        {
          type: "paragraph",
          text: "Our total liability shall not exceed the amount paid by the customer for the affected services during the twelve months preceding the claim.",
        },
      ],
    },
    {
      title: "15. Indemnification",
      blocks: [
        {
          type: "paragraph",
          text: "Customers agree to indemnify and hold harmless Compucom Software Ltd., its employees, officers, and affiliates from claims arising from:",
        },
        {
          type: "list",
          items: [
            "Customer content",
            "Messaging activities",
            "Policy violations",
            "Unlawful communications",
            "Breach of these Terms",
          ],
        },
      ],
    },
    {
      title: "16. Governing Law",
      blocks: [
        {
          type: "paragraph",
          text: "These Terms shall be governed by and construed in accordance with the laws of India.",
        },
        {
          type: "paragraph",
          text: "Courts having jurisdiction at Jaipur, Rajasthan, India shall have exclusive jurisdiction over disputes arising from these Terms.",
        },
      ],
    },
    {
      title: "17. Changes To Terms",
      blocks: [
        {
          type: "paragraph",
          text: "We may modify these Terms from time to time.",
        },
        {
          type: "paragraph",
          text: "Updated versions will be published with a revised effective date.",
        },
        {
          type: "paragraph",
          text: "Continued use of services constitutes acceptance of revised terms.",
        },
      ],
    },
    {
      title: "18. Contact Us",
      blocks: [
        {
          type: "paragraph",
          text: "General Support : support@compux.in",
        },
        {
          type: "paragraph",
          text: "Privacy Requests : privacy@compux.in",
        },
        {
          type: "paragraph",
          text: "Grievance Officer : grievance@compux.in",
        },
        {
          type: "paragraph",
          text: "Website : https://compux.in",
        },
      ],
    },
  ];

function renderBlock(block: TermsBlock) {
  if (block.type === "heading") {
    return (
      <h3 key={block.text} className="pt-2 text-md font-semibold text-white">
        {block.text}
      </h3>
    );
  }

  if (block.type === "list") {
    return (
      <ul key={block.items.join("|")} className="pl-7">
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

export default function TermsConditionsPage() {
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
              Terms &
              <span className="bg-linear-to-r from-green-400 to-emerald-200 bg-clip-text text-transparent">
                {" "}
                Conditions
              </span>
            </h1>

            <p className="mt-7 text-md text-gray-400">
              These Terms & Conditions explain the rules for accessing and
              using CompuX services, including WhatsApp Business Platform
              integration, campaign management, automation workflows, and
              customer engagement tools.
            </p>

            <p className="mt-5 text-sm text-gray-500">
              Effective date: May 27, 2026
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {termsSections.map((section) => (
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
