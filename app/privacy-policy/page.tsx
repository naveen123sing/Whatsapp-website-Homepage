import { AnimatedBackground } from "../../components/animated-background/animated-background";
import { Navbar } from "../../components/navbar/navbar";
import { SiteFooter } from "../../components/site-footer/site-footer";

type PolicyBlock =
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

const policySections: Array<{
  title: string;
  blocks: PolicyBlock[];
}> = [
  {
    title: "1. Introduction",
    blocks: [
      {
        type: "paragraph",
        text: 'CompuX ("CompuX", "we", "our", or "us"), a product developed and operated by Compucom Software Ltd., respects your privacy and is committed to protecting personal information entrusted to us.',
      },
      {
        type: "paragraph",
        text: "This Privacy Policy explains how we collect, use, process, store, disclose, and protect information when you access our website, request demonstrations, communicate with us, or use our WhatsApp Business Platform solutions, automation services, campaign management tools, customer engagement features, and related services.",
      },
      {
        type: "paragraph",
        text: "By accessing our website or using our services, you acknowledge and agree to the practices described in this Privacy Policy.",
      },
    ],
  },
  {
    title: "2. Information We Collect",
    blocks: [
      {
        type: "paragraph",
        text: "We may collect the following categories of information:",
      },
      { type: "heading", text: "A. Information You Provide" },
      {
        type: "list",
        items: [
          "Name",
          "Email address",
          "Phone number",
          "Company name",
          "Business information",
          "Billing information",
          "Support requests",
          "Demo requests",
          "Account registration information",
        ],
      },
      { type: "heading", text: "B. Customer Data" },
      {
        type: "paragraph",
        text: "When customers use CompuX services, we may process:",
      },
      {
        type: "list",
        items: [
          "Customer contact information",
          "WhatsApp communication records",
          "Message templates",
          "Campaign information",
          "Opt-in records",
          "Customer interaction history",
          "Automation workflow data",
          "Analytics and reporting information",
        ],
      },
      { type: "heading", text: "C. Technical Information" },
      {
        type: "paragraph",
        text: "We may automatically collect:",
      },
      {
        type: "list",
        items: [
          "IP address",
          "Browser type",
          "Device information",
          "Operating system",
          "Referring URLs",
          "Website activity",
          "Session information",
          "Diagnostic and performance information",
        ],
      },
    ],
  },
  {
    title: "3. How We Use Information",
    blocks: [
      {
        type: "paragraph",
        text: "We may use information to:",
      },
      {
        type: "list",
        items: [
          "Provide and maintain our services",
          "Process account registrations",
          "Deliver WhatsApp Business Platform functionality",
          "Manage customer onboarding",
          "Respond to support requests",
          "Improve platform performance",
          "Monitor service reliability",
          "Provide training and implementation support",
          "Send service notifications",
          "Communicate product updates",
          "Detect fraud, abuse, and security incidents",
          "Comply with legal obligations",
        ],
      },
    ],
  },
  {
    title: "4. WhatsApp And Meta Compliance",
    blocks: [
      {
        type: "paragraph",
        text: "Customers must comply with all applicable:",
      },
      {
        type: "list",
        items: [
          "WhatsApp Business Platform Terms",
          "WhatsApp Business Messaging Policies",
          "WhatsApp Commerce Policies",
          "Meta Platform Terms",
          "Applicable privacy, telecommunications, anti-spam, consumer protection, and marketing laws",
        ],
      },
      {
        type: "paragraph",
        text: "Customers acknowledge that Meta and WhatsApp may independently review, restrict, suspend, or terminate WhatsApp Business Accounts, phone numbers, templates, messaging privileges, or other assets for policy violations.",
      },
      {
        type: "paragraph",
        text: "CompuX has no control over decisions made by Meta or WhatsApp and shall not be liable for restrictions, suspensions, messaging limitations, quality rating changes, or enforcement actions imposed by Meta or WhatsApp.",
      },
    ],
  },
  {
    title: "5. WhatsApp And Communication Data",
    blocks: [
      {
        type: "paragraph",
        text: "CompuX integrates with the WhatsApp Business Platform and related Meta services.",
      },
      {
        type: "paragraph",
        text: "When customers use WhatsApp messaging features, we may process:",
      },
      {
        type: "list",
        items: [
          "Message content",
          "Delivery status information",
          "Template data",
          "Contact information",
          "Campaign activity",
          "Automation workflow events",
          "Customer responses",
        ],
      },
      {
        type: "paragraph",
        text: "Processing occurs solely to provide platform functionality and customer-requested services.",
      },
      {
        type: "paragraph",
        text: "Use of WhatsApp and Meta services is additionally governed by their respective terms and privacy policies.",
      },
    ],
  },
  {
    title: "5.1 Customer Compliance Responsibilities",
    blocks: [
      {
        type: "paragraph",
        text: "Customers using CompuX are responsible for ensuring that their use of the WhatsApp Business Platform complies with all applicable laws, regulations, and platform requirements.",
      },
      {
        type: "paragraph",
        text: "Customers are solely responsible for:",
      },
      {
        type: "list",
        items: [
          "Obtaining valid customer consent and opt-ins before sending messages.",
          "Maintaining records of customer consent where required.",
          "Honoring opt-out and unsubscribe requests.",
          "Ensuring message content complies with applicable laws.",
          "Complying with WhatsApp Business Platform Terms, Messaging Policies, Commerce Policies, and Meta Platform Terms.",
        ],
      },
      {
        type: "paragraph",
        text: "Customers represent and warrant that they have obtained all necessary permissions, consents, and legal authorizations required to collect, store, process, and communicate with individuals through the platform.",
      },
      {
        type: "paragraph",
        text: "CompuX provides technology services and does not independently verify customer consent, message content, or compliance with applicable legal and platform requirements.",
      },
    ],
  },
  {
    title: "6. Sharing Of Information",
    blocks: [
      {
        type: "paragraph",
        text: "We do not sell personal information.",
      },
      {
        type: "paragraph",
        text: "We may share information with:",
      },
      { type: "heading", text: "Service Providers" },
      {
        type: "paragraph",
        text: "Including providers that support:",
      },
      {
        type: "list",
        items: [
          "Cloud hosting",
          "Infrastructure",
          "Analytics",
          "Customer support",
          "Payment processing",
          "Security monitoring",
          "Communication services",
        ],
      },
      { type: "heading", text: "Business Transfers" },
      {
        type: "paragraph",
        text: "Information may be transferred during:",
      },
      {
        type: "list",
        items: [
          "Mergers",
          "Acquisitions",
          "Corporate restructuring",
          "Asset transfers",
        ],
      },
      { type: "heading", text: "Legal Requirements" },
      {
        type: "paragraph",
        text: "We may disclose information when required to:",
      },
      {
        type: "list",
        items: [
          "Comply with applicable laws",
          "Respond to legal requests",
          "Protect our rights",
          "Prevent fraud",
          "Investigate security incidents",
        ],
      },
    ],
  },
  {
    title: "7. Third-Party Services",
    blocks: [
      {
        type: "paragraph",
        text: "Our services may integrate with third-party providers including:",
      },
      {
        type: "list",
        items: [
          "Meta Platforms, Inc.",
          "WhatsApp Business Platform",
          "Amazon Web Services (AWS)",
          "Vercel",
          "Cloudflare",
          "CRM systems",
          "Payment providers",
          "Analytics providers",
        ],
      },
      {
        type: "paragraph",
        text: "Such providers may process information under their own privacy policies and terms.",
      },
      {
        type: "paragraph",
        text: "We encourage users to review the privacy policies of third-party services before using connected integrations.",
      },
    ],
  },
  {
    title: "8. Cookies And Similar Technologies",
    blocks: [
      {
        type: "paragraph",
        text: "We may use cookies and similar technologies to:",
      },
      {
        type: "list",
        items: [
          "Maintain user sessions",
          "Improve website functionality",
          "Analyze website traffic",
          "Understand feature usage",
          "Enhance user experience",
        ],
      },
      {
        type: "paragraph",
        text: "Users may control cookies through browser settings. Disabling cookies may affect certain website features and functionality.",
      },
    ],
  },
  {
    title: "9. Security & Data Protection",
    blocks: [
      {
        type: "paragraph",
        text: "CompuX is committed to protecting customer information and maintaining appropriate security measures for our platform and services.",
      },
      {
        type: "paragraph",
        text: "We implement reasonable technical and organizational safeguards designed to protect information against unauthorized access, loss, misuse, alteration, disclosure, or destruction.",
      },
      {
        type: "paragraph",
        text: "Such measures may include:",
      },
      {
        type: "list",
        items: [
          "HTTPS/TLS encryption for data in transit",
          "Authentication and access controls",
          "Role-based permissions",
          "Infrastructure security controls",
          "Activity logging and monitoring",
          "Secure cloud hosting environments",
          "Periodic maintenance and security updates",
        ],
      },
      {
        type: "paragraph",
        text: "Customers are responsible for:",
      },
      {
        type: "list",
        items: [
          "Maintaining secure account credentials",
          "Restricting access to authorized personnel",
          "Protecting connected WhatsApp Business assets",
          "Managing customer consent and communications",
        ],
      },
      {
        type: "paragraph",
        text: "While we take reasonable measures to protect information, no internet-based service or electronic storage system can guarantee absolute security.",
      },
    ],
  },
  {
    title: "10. Data Retention",
    blocks: [
      {
        type: "paragraph",
        text: "We retain information only as long as reasonably necessary to:",
      },
      {
        type: "list",
        items: [
          "Provide services",
          "Fulfill contractual obligations",
          "Resolve disputes",
          "Maintain security",
          "Comply with legal requirements",
          "Enforce agreements",
        ],
      },
      {
        type: "paragraph",
        text: "When information is no longer required, we may delete, anonymize, or securely archive it according to operational, contractual, and legal requirements.",
      },
    ],
  },
  {
    title: "11. Customer Data Ownership",
    blocks: [
      {
        type: "paragraph",
        text: "Customers retain ownership of:",
      },
      {
        type: "list",
        items: [
          "Contact records",
          "Customer information",
          "Message content",
          "Campaign data",
          "Templates",
          "Workflows",
          "Business information",
        ],
      },
      {
        type: "paragraph",
        text: "CompuX does not claim ownership of customer data and processes such information solely for the purpose of providing contracted services.",
      },
    ],
  },
  {
    title: "12. Your Rights",
    blocks: [
      {
        type: "paragraph",
        text: "Subject to applicable law, individuals may request:",
      },
      {
        type: "list",
        items: [
          "Access to personal information",
          "Correction of inaccurate information",
          "Deletion of information",
          "Restriction of processing",
          "Withdrawal of consent where applicable",
        ],
      },
      {
        type: "paragraph",
        text: "Requests may be submitted using the contact information provided below.",
      },
    ],
  },
  {
    title: "13. Data Deletion Requests",
    blocks: [
      {
        type: "paragraph",
        text: "Users may request deletion of their personal information by contacting:",
      },
      {
        type: "paragraph",
        text: "Email: privacy@compux.in",
      },
      {
        type: "paragraph",
        text: "To help us process the request efficiently, please provide:",
      },
      {
        type: "list",
        items: [
          "Full Name",
          "Email Address",
          "Company Name (if applicable)",
          "Phone Number",
          "Description of the request",
        ],
      },
      {
        type: "paragraph",
        text: "We may request additional information to verify identity before processing a deletion request.",
      },
      {
        type: "paragraph",
        text: "Valid requests will generally be reviewed and processed within 30 days, unless a longer retention period is required for:",
      },
      {
        type: "list",
        items: [
          "Legal compliance",
          "Regulatory obligations",
          "Security investigations",
          "Fraud prevention",
          "Financial or tax records",
          "Contractual obligations",
        ],
      },
      { type: "heading", text: "Customer-Controlled Data" },
      {
        type: "paragraph",
        text: "Where CompuX processes information on behalf of a business customer, the customer remains responsible for directing deletion requests relating to their customer data.",
      },
      {
        type: "paragraph",
        text: "In such cases, requests may need to be submitted through the relevant business account administrator.",
      },
    ],
  },
  {
    title: "14. International Data Transfers",
    blocks: [
      {
        type: "paragraph",
        text: "Information may be processed and stored in locations where our service providers operate.",
      },
      {
        type: "paragraph",
        text: "By using our services, you acknowledge that information may be transferred, processed, and stored outside your local jurisdiction where permitted by law.",
      },
    ],
  },
  {
    title: "15. Children's Privacy",
    blocks: [
      {
        type: "paragraph",
        text: "Our services are intended for businesses and are not directed toward children.",
      },
      {
        type: "paragraph",
        text: "We do not knowingly collect personal information from children under the age required by applicable law.",
      },
      {
        type: "paragraph",
        text: "If we become aware that such information has been collected unintentionally, we will take reasonable steps to remove it.",
      },
    ],
  },
  {
    title: "16. Grievance Officer",
    blocks: [
      {
        type: "paragraph",
        text: "For privacy concerns, complaints, grievances, or requests relating to personal information:",
      },
      {
        type: "paragraph",
        text: "Grievance Officer: Compucom Software Ltd.",
      },
      {
        type: "paragraph",
        text: "Email : grievance@compux.in",
      },
      {
        type: "paragraph",
        text: "We aim to acknowledge and respond to valid requests within a reasonable period and in accordance with applicable law.",
      },
    ],
  },
  {
    title: "17. Contact Information",
    blocks: [
      {
        type: "paragraph",
        text: "For privacy-related requests-",
      },
      {
        type: "paragraph",
        text: "Email : privacy@compux.in",
      },
      {
        type: "paragraph",
        text: "For general support-",
      },
      {
        type: "paragraph",
        text: "Email : support@compux.in",
      },
      {
        type: "paragraph",
        text: "Website : https://compux.in",
      },
    ],
  },
  {
    title: "18. Changes To This Policy",
    blocks: [
      {
        type: "paragraph",
        text: "We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, technology, or business practices.",
      },
      {
        type: "paragraph",
        text: "Updated versions will be published on this page with a revised effective date.",
      },
      {
        type: "paragraph",
        text: "Continued use of our website or services after changes are posted constitutes acceptance of the updated Privacy Policy.",
      },
    ],
  },
];

function renderBlock(block: PolicyBlock) {
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

export default function PrivacyPolicyPage() {
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
              Privacy
              <span className="bg-linear-to-r from-green-400 to-emerald-200 bg-clip-text text-transparent">
                {" "}
                Policy
              </span>
            </h1>

            <p className="mt-7 text-md text-gray-400">
              This Privacy Policy explains how CompuX collects, uses, processes,
              stores, discloses, and protects information when you access our
              website or use our WhatsApp Business Platform solutions.
            </p>

            <p className="mt-5 text-sm text-gray-500">
              Effective date: May 27, 2026
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 ">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {policySections.map((section) => (
              <article key={section.title} className="py-5">
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
