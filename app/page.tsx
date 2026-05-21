import { AnimatedBackground } from "../components/animated-background";
import { CtaSection } from "../components/cta-section";
import { DashboardSection } from "../components/dashboard-section";
import { FaqSection } from "../components/faq-section";
import { FeatureContentSection } from "../components/feature-content-section";
import { FeaturesSection } from "../components/features-section";
import { HeroSection } from "../components/hero-section";
import { Navbar } from "../components/navbar";
import { PricingCard } from "../components/pricing-section";
import { SiteFooter } from "../components/site-footer";
import { TrustedSection } from "../components/trusted-section";

export default function Home() {
  return (
    <main className="site-scene relative min-h-screen text-white overflow-x-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <TrustedSection />
        <DashboardSection />
        <FeatureContentSection />
        <FeaturesSection />
        <section className="py-24 px-6" id="pricing">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>

            <p className="text-gray-400">
              Choose the perfect plan for your business needs
            </p>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

            <PricingCard
              name="Starter"
              price="Free"
              period=" 7days"
              features={[
                "1 WhatsApp Number",
                "Basic Automation",
                "1000 Messages",
                "Email Support",
              ]}
            />

            <PricingCard
              name="Professional"
              price="$49"
              period="month"
              highlighted={true}
              features={[
                "5 WhatsApp Numbers",
                "Advanced Automation",
                "10000 Messages",
                "Priority Support",
              ]}
            />

            <PricingCard
              name="Enterprise"
              price="$99"
              period="month"
              features={[
                "Unlimited Numbers",
                "Custom Integrations",
                "Unlimited Messages",
                "24/7 Support",
              ]}
            />

          </div>
        </section>
        <FaqSection />
        <CtaSection />
        <SiteFooter />
      </div>
    </main>
  );
}
