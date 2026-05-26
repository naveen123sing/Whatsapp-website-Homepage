import { AnimatedBackground } from "../../components/animated-background/animated-background";
import { Navbar } from "../../components/navbar/navbar";
import { SiteFooter } from "../../components/site-footer";

const policySections = [
  {
    title: "1. Information We Collect",
    body: [
      "We may collect your name, phone number, email address, company name, and details you submit through our forms, demo requests, support conversations, or WhatsApp automation workflows.",
      "We may also collect technical information such as browser type, device information, IP address, pages visited, and interaction data to improve website performance and security.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use your information to respond to inquiries, schedule demos, provide WhatsApp Business API services, manage customer support, personalize communication, and improve our platform.",
      "We may also use contact details to send service updates, onboarding information, product announcements, and support messages where permitted by applicable law.",
    ],
  },
  {
    title: "3. WhatsApp And Communication Data",
    body: [
      "If you use our WhatsApp automation or campaign tools, message templates, customer replies, opt-in records, campaign activity, and related delivery data may be processed to provide the service.",
      "You are responsible for ensuring that your customer data, consent records, message content, and campaigns comply with applicable privacy laws and WhatsApp policies.",
    ],
  },
  {
    title: "4. Sharing Of Information",
    body: [
      "We do not sell your personal information. We may share limited data with trusted service providers who help us operate hosting, analytics, communication, payment, support, or security systems.",
      "We may disclose information if required by law, legal process, government request, or to protect our rights, users, systems, and business operations.",
    ],
  },
  {
    title: "5. Cookies And Analytics",
    body: [
      "Our website may use cookies or similar technologies to remember preferences, measure site traffic, understand feature usage, and improve the browsing experience.",
      "You can control cookies through your browser settings, but disabling some cookies may affect certain website features.",
    ],
  },
  {
    title: "6. Data Security",
    body: [
      "We use reasonable technical and organizational measures to protect information from unauthorized access, misuse, loss, alteration, or disclosure.",
      "No online system is completely secure, so we recommend using strong account controls and sharing sensitive information only through trusted channels.",
    ],
  },
  {
    title: "7. Data Retention",
    body: [
      "We retain personal information only for as long as needed to provide services, fulfill business purposes, resolve disputes, comply with legal obligations, and enforce agreements.",
      "When information is no longer required, we may delete, anonymize, or securely archive it according to our operational and legal requirements.",
    ],
  },
  {
    title: "8. Your Choices And Rights",
    body: [
      "You may request access, correction, deletion, or restriction of your personal information where applicable. You may also opt out of promotional communication at any time.",
      "To make a privacy request, contact us through the website form or your assigned Compucom representative.",
    ],
  },
  {
    title: "9. Third-Party Services",
    body: [
      "Our services may integrate with third-party platforms such as WhatsApp, Meta, hosting providers, analytics tools, CRM systems, or payment providers.",
      "These third parties may process information under their own terms and privacy policies, so we recommend reviewing their policies when using connected services.",
    ],
  },
  {
    title: "10. Updates To This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or business practices.",
      "The updated version will be posted on this page with a revised effective date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="site-scene relative min-h-screen overflow-x-hidden text-white">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar />

        <section className="container mx-auto px-6 pb-14 pt-36">
          <div className="">
            <h1 className=" text-5xl font-extrabold leading-tight md:text-7xl">
              Privacy
              <span className="bg-linear-to-r from-green-400 to-emerald-200 bg-clip-text text-transparent">
                {" "}
                Policy
              </span>
            </h1>

            <p className="mt-7  text-lg leading-8 text-gray-400">
              Welcome to Compucom.This Privacy Policy explains how Compucom Software Ltd. collects,
              uses, stores, and protects information when you visit our website
              or use our WhatsApp Business API solutions.
            </p>

            <p className="mt-5 text-sm text-gray-500">
              Effective date: May 26, 2026
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-20">
          <div className=" divide-y divide-white/10 border-y border-white/10">
            {policySections.map((section) => (
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
                If you have questions about this Privacy Policy or want to
                request changes to your personal information, please contact us
                through the website contact form or Book Demo form.
              </p>
            </article>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
