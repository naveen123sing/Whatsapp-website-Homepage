import { ChevronDown } from "./icon";

const faqs = [
  "Is this official WhatsApp API?",
  "Can I integrate CRM?",
  "Do you provide support?",
  "Is free trial available?",
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
            key={faq}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 animate-fade-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <summary className="flex items-center justify-between cursor-pointer">
              {faq}
              <ChevronDown className="w-5 h-5" />
            </summary>

            <p className="text-gray-400 mt-4">
              Yes, absolutely. Our platform supports complete business
              automation and integrations.
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
