"use client";

import { useEffect, useRef, useState } from "react";
import { BarChart3, Bot, Check, MessageCircle } from "./icon";

const featuresData = [
  {
    icon: MessageCircle,
    title: "Campaign Manager",
    eyebrow: "Smart conversations",
    description:
      "Automate your WhatsApp business with smart replies, broadcasts, and follow-ups that feel personal.",
    features: ["Auto Reply", "Bulk Messaging", "Analytics Dashboard"],
    tone: "green",
  },
  {
    icon: Bot,
    title: "WhatsApp Form",
    eyebrow: "Shared workspace",
    description:
      "Manage every customer chat with your team in one clean inbox, without losing context.",
    features: ["Shared Inbox", "Assign Chats", "Live Sync"],
    tone: "blue",
  },
  {
    icon: BarChart3,
    title: "Template Manager with AI",
    eyebrow: "Performance clarity",
    description:
      "Track campaign growth, engagement, and conversion signals while your WhatsApp flows run.",
    features: ["Conversion Reports", "Growth Tracking", "Campaign Insights"],
    tone: "purple",
  },
] as const;

export function FeatureCSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pinState, setPinState] = useState<"before" | "pinned" | "after">(
    "before"
  );

  useEffect(() => {
    let frame = 0;

    const updateFromScroll = () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableDistance = rect.height - window.innerHeight;
      const rawProgress =
        scrollableDistance > 0 ? -rect.top / scrollableDistance : 0;
      const boundedProgress = Math.min(Math.max(rawProgress, 0), 1);
      const nextIndex = Math.min(
        featuresData.length - 1,
        Math.floor(boundedProgress * featuresData.length)
      );
      const nextPinState =
        rect.top > 0
          ? "before"
          : rect.bottom <= viewportHeight
            ? "after"
            : "pinned";

      setActiveIndex(nextIndex);
      setPinState(nextPinState);
      setScrollProgress(boundedProgress);
    };

    const queueUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateFromScroll);
    };

    updateFromScroll();
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
    };
  }, []);

  return (
    <section
      id="feature-content"
      ref={sectionRef}
      className="feature-scroll-section"
      style={{ height: `${(featuresData.length + 1) * 100}vh` }}
    >
      <div className={`feature-scroll-sticky is-${pinState}`}>
        <div className="container mx-auto px-6">
          <div className="feature-scroll-heading animate-fade-up">
            {/* <p className="mb-3 text-sm font-medium text-[#25D366]">
              Scroll Experience
            </p> */}
            <h2 className="text-4xl font-bold">Built for WhatsApp Growth</h2>
            <p className="mt-4 text-gray-400">
              Keep scrolling. Each feature stays pinned, changes smoothly, and
              then hands off to the next section.
            </p>
          </div>

          <div className="feature-scroll-progress">
            <span style={{ width: `${Math.round(scrollProgress * 100)}%` }} />
          </div>

          <div className="feature-scroll-stage">
            {featuresData.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeIndex;
              const isReversed = index % 2 === 1;

              return (
                <div
                  key={feature.title}
                  className={[
                    "feature-scroll-scene",
                    `feature-scroll-${feature.tone}`,
                    isActive ? "is-active" : "",
                    isReversed ? "is-reversed" : "",
                  ].join(" ")}
                  aria-hidden={!isActive}
                >
                  <div className="feature-scroll-content">
                    <div className="feature-scroll-badge">
                      <Icon className="h-5 w-5" />
                      <span>{feature.eyebrow}</span>
                    </div>

                    <h3 className="mt-6 text-4xl font-bold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-lg leading-8 text-gray-400">
                      {feature.description}
                    </p>

                    <div className="mt-8 space-y-3">
                      {feature.features.map((item) => (
                        <div key={item} className="feature-scroll-list-item">
                          <span>
                            <Check className="h-4 w-4" />
                          </span>
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="feature-scroll-visual">
                    <div className="feature-scroll-glow"></div>
                    <div className="feature-scroll-radar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="feature-scroll-icon">
                      <Icon className="h-16 w-16" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="feature-scroll-dots" aria-hidden="true">
            {featuresData.map((feature, index) => (
              <span
                key={feature.title}
                className={index === activeIndex ? "is-active" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
