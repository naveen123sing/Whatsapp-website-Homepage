const trustedBrands = ["Shopify", "Meta", "Zapier", "HubSpot", "WooCommerce"];

export function TrustedSection() {
  return (
    <section className="container mx-auto px-6 py-10 text-center animate-fade-up">
      <p className="text-gray-500 mb-8">
        Trusted by 1200+ Businesses Worldwide
      </p>

      <div className="flex flex-wrap justify-center gap-10 text-gray-400 text-xl">
        {trustedBrands.map((item, i) => (
          <div
            key={item}
            className="animate-fade-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
