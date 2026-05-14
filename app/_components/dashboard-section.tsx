import Image from "next/image";

import dashboardImage from "../../Graph_Dashboard.png";

export function DashboardSection() {
  return (
    <section id="dashboard" className="container mx-auto px-6 py-20">
      <div className="text-center mb-12 animate-fade-up">
        <h2 className="text-4xl font-bold mb-4">All-in-One Dashboard</h2>

        <p className="text-gray-400">
          Manage campaigns, conversations and analytics.
        </p>
      </div>

      <div className="dashboard-image-card animate-scale-in">
        <Image
          src={dashboardImage}
          alt="Compucom WhatsApp campaign analytics dashboard"
          className="h-auto w-full rounded-[22px] object-cover"
          sizes="(max-width: 768px) 92vw, 1120px"
          priority={false}
        />
      </div>
    </section>
  );
}
