import { ChevronDown } from "./icon";

const faqs = [
  {
    question: "What is CompuX?",
    answer: [
      "CompuX is a WhatsApp Business engagement platform built on WhatsApp Business Cloud API that helps businesses manage customer conversations, run campaigns, send approved WhatsApp templates, automate workflows, and monitor messaging performance through a unified dashboard.",
    ],
  },
  // {
  //   question: "How can I get started?",
  //   answer: [
  //     "You can request a demonstration or contact our team through the Book Demo form, Contact Us page, or support@compux.in.",
  //   ],
  // },
  {
    question:
      "Does CompuX provide or guarantee a WhatsApp verified badge (Blue Tick)?",
    answer: [
      "No. Verification decisions are made exclusively by Meta and WhatsApp. CompuX can assist customers in understanding the process, but cannot guarantee approval or influence Meta's decision.",
    ],
  },
  {
    question: "Can multiple agents use the same WhatsApp number?",
    answer: [
      "Yes. Multiple authorized users can access and manage conversations through the CompuX platform based on assigned roles and permissions.",
    ],
  },
  {
    question: "Does CompuX support campaign analytics?",
    answer: [
      "Yes. CompuX provides reporting and analytics for message delivery, campaign activity, customer engagement, and operational performance.",
    ],
  },
  {
    question: "Can I create WhatsApp message templates through CompuX?",
    answer: [
      "Yes. Businesses can create and submit WhatsApp message templates for approval through the platform.",
      "Template approval is subject to WhatsApp and Meta review processes.",
    ],
  },
  {
    question: "How long does template approval take?",
    answer: [
      "Approval times vary and are determined by Meta. Many templates are reviewed within minutes, while some may require additional review.",
      "Template approvals are solely controlled by Meta and WhatsApp. CompuX cannot guarantee approval of any template submission.",
    ],
  },
  {
    question: "Where is data hosted?",
    answer: [
      "CompuX may utilize trusted cloud infrastructure providers to operate and deliver its services. Hosting environments may vary based on operational requirements and service architecture.",
    ],
  },
  {
    question: "How do I request deletion of my data?",
    answer: [
      "You may submit a data deletion request by contacting privacy@compux.in.",
      "Requests will be reviewed and processed in accordance with our Privacy Policy and applicable legal requirements.",
    ],
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="container mx-auto px-6 py-20">
      <div className="text-center mb-14 animate-fade-up">
        <h2 className="text-4xl font-bold mb-4">FAQ</h2>
        <p className="text-gray-400">Everything you need to know.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <details
            key={faq.question}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 animate-fade-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <summary className="flex items-center justify-between cursor-pointer">
              {faq.question}
              <ChevronDown className="w-5 h-5" />
            </summary>

            <div className="mt-4 space-y-3 text-gray-400">
              {faq.answer.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
