import { AnimatedBackground } from "../../components/animated-background/animated-background";
import { Navbar } from "../../components/navbar/navbar";
import { SiteFooter } from "../../components/site-footer";

const termsSections = [
  {
    title: "1. Acceptance Of Terms",
    body: [
      "By accessing this website or using Compucom Software Ltd. products, demos, support, WhatsApp Business API tools, campaign features, or related services, you agree to these Terms & Conditions.",
      "If you are using the services on behalf of a company, you confirm that you are authorized to accept these terms for that company.",
    ],
  },
  {
    title: "2. Services We Provide",
    body: [
      "Compucom provides WhatsApp automation, campaign management, business messaging tools, customer engagement workflows, analytics, forms, templates, and related implementation or support services.",
      "Some services may depend on third-party platforms such as WhatsApp, Meta, hosting providers, payment providers, and other integrations. Their rules and availability may affect how the service works.",
    ],
  },
  {
    title: "3. Account And Business Information",
    body: [
      "You agree to provide accurate, current, and complete information when requesting a demo, creating an account, activating a plan, or using our services.",
      "You are responsible for keeping login credentials secure and for all activity that happens through your account or connected WhatsApp Business assets.",
    ],
  },
  {
    title: "4. Customer Consent And Message Compliance",
    body: [
      "You are responsible for collecting valid customer opt-ins, maintaining consent records, respecting opt-outs, and ensuring that your message content complies with applicable law and WhatsApp or Meta policies.",
      "You must not use the platform for spam, misleading messages, illegal activity, harassment, abusive content, prohibited products, or any communication that violates platform rules.",
    ],
  },
  {
    title: "5. Payments, Plans, And Usage",
    body: [
      "Paid plans, setup fees, add-ons, usage charges, message credits, support packages, or custom services will be billed according to the pricing, invoice, order form, or agreement shared with you.",
      "You are responsible for paying all applicable fees, taxes, and charges related to your selected plan or usage. Service access may be limited, suspended, or cancelled if payments are delayed.",
    ],
  },
  {
    title: "6. Intellectual Property",
    body: [
      "All website content, software, dashboards, workflows, designs, graphics, logos, documentation, and platform features are owned by Compucom or its licensors unless stated otherwise.",
      "You may not copy, resell, modify, reverse engineer, or distribute our platform, designs, or materials without written permission.",
    ],
  },
  {
    title: "7. Service Availability",
    body: [
      "We aim to keep services stable and available, but we do not guarantee uninterrupted access at all times. Maintenance, upgrades, third-party outages, internet issues, or platform restrictions may affect availability.",
      "We may update, improve, suspend, or discontinue parts of the service when required for security, compliance, performance, or business reasons.",
    ],
  },
  {
    title: "8. Limitation Of Liability",
    body: [
      "To the maximum extent permitted by law, Compucom will not be liable for indirect, incidental, special, consequential, or loss-of-profit damages related to use of the website or services.",
      "Our total liability for any claim will be limited to the amount paid by you for the affected service during the period directly related to the claim, unless applicable law requires otherwise.",
    ],
  },
  {
    title: "9. Termination",
    body: [
      "You may stop using the services at any time. We may suspend or terminate access if you violate these terms, misuse the platform, fail to pay fees, or create legal, security, or operational risk.",
      "After termination, your access to the platform may stop and certain data may be retained or deleted according to our Privacy Policy and operational requirements.",
    ],
  },
  {
    title: "10. Updates To Terms",
    body: [
      "We may update these Terms & Conditions from time to time. Updated terms will be posted on this page with a revised effective date.",
      "Continued use of the website or services after changes are posted means you accept the updated terms.",
    ],
  },
];

export default function TermsConditionsPage() {
  return (
    <main className="site-scene relative min-h-screen overflow-x-hidden text-white">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar />

        <section className="container mx-auto px-6 pb-14 pt-36">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
              Terms &
              <span className="bg-linear-to-r from-green-400 to-emerald-200 bg-clip-text text-transparent">
                {" "}
                Conditions
              </span>
            </h1>

            <p className="mt-7 text-lg leading-8 text-gray-400">
              Welcome to Compucom. These Terms & Conditions explain the rules
              for accessing our website and using our WhatsApp Business API,
              automation, campaign, and customer engagement services.
            </p>

            <p className="mt-5 text-sm text-gray-500">
              Effective date: May 27, 2026
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-20">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {termsSections.map((section) => (
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
                If you have questions about these Terms & Conditions, please
                contact us through the website contact form or Book Demo form.
              </p>
            </article>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
