import {
  BarChart3,
  Bot,
  FileText,
  GitBranch,
  Headphones,
  Inbox,
  Send,
  Zap,
} from "./icon";

const features = [
  {
    icon: Send,
    title: "Campaign Manager",
    desc: "Broadcast bulk messages easily.",
    tone: "green",
  },
  {
    icon: Zap,
    title: "API Integration",
    desc: "Integrate with your systems.",
    tone: "blue",
  },
  {
    icon: BarChart3,
    title: "Analytical Dashboard",
    desc: "Track performance with detailed insights and real-time reports.",
    tone: "purple",
  },
  {
    icon: Inbox,
    title: "Chat UI for Helpdesk Agent",
    desc: "Collaborate with your team on customer conversations.",
    tone: "green",
  },
  {
    icon: FileText,
    title: "WhatsApp Form",
    desc: "Collect customer data with interactive forms.",
    tone: "green",
  },
  {
    icon: GitBranch,
    title: "Flow",
    desc: "Build complex automation workflows with drag-and-drop builder.",
    tone: "blue",
  },
  {
    icon: Bot,
    title: "Template Manager with AI",
    desc: "Create and manage templates with AI-powered capabilities.",
    tone: "purple",
  },
  {
    icon: Headphones,
    title: "Dedicated Customer Support",
    desc: "Get expert help anytime from our dedicated support team.",
    tone: "green",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto px-6 py-20">
      <div className="text-center mb-14 animate-fade-up">
        <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>

        <p className="text-gray-400">
          Everything you need for WhatsApp marketing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7">
        {features.map((feature, i) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className={`feature-card feature-card-${feature.tone} animate-fade-up`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="feature-icon">
                <Icon className="w-7 h-7" />
              </div>

              <h3 className="relative z-10 text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="relative z-10 text-gray-400 text-sm leading-6">
                {feature.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
