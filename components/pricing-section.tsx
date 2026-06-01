"use client"

import { Check } from "./icon";
import { BookDemoModal } from "./book-demo/book-demo-modal";
import { useState } from "react";

const trialModal = {
    title: "Create your account",
    description: "Fill in your details and our team will help you activate your trial shortly.",
};


interface PricingCardProps {
    name: string;
    price: string;
    period: string;
    features: string[];
    highlighted?: boolean;
    badge?: string;
    delay?: number;
}

export function PricingCard({
    name,
    price,
    period,
    features,
    highlighted = false,
    badge,
}: PricingCardProps) {
    const [openModal, setOpenModal] = useState(false);
    const badgeText = highlighted ? "Most Popular" : badge;


    return (
        <>
            <div
                className={`pricing-card relative p-8 rounded-2xl border transition-all duration-300 ${highlighted
                    ? "bg-linear-to-br from-[#25D366]/20 to-white/5 border-[#25D366] shadow-[0_0_40px_rgba(37,211,102,0.3)]"
                    : "bg-linear-to-br from-white/5 to-white/2 border-white/10 hover:border-[#25D366]/50"
                    }`}
            >
                {badgeText && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-linear-to-br from-[#25D366] to-[#20B558] text-xs text-white">
                        {badgeText}
                    </div>
                )}

                {/* HOVER GLOW */}
                <div className="pricing-card-glow absolute inset-0 rounded-2xl bg-linear-to-br from-[#25D366]/5 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                    {/* TITLE */}
                    <h3 className="mb-2 text-white text-2xl font-semibold">
                        {name}
                    </h3>

                    {/* PRICE */}
                    <div className="mb-6">
                        <span className="bg-linear-to-br from-white to-gray-300 bg-clip-text text-transparent text-3xl font-bold">
                            {price}
                        </span>

                        <span className="text-gray-400">
                            /{period}
                        </span>
                    </div>

                    {/* FEATURES */}
                    <ul className="space-y-3 mb-8">
                        {features.map((feature, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3"
                            >
                                <Check className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />

                                <span className="text-sm text-gray-300">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* BUTTON */}
                    <button
                        onClick={() => setOpenModal(true)}

                        className={`w-full py-3 px-6 rounded-xl transition-all duration-300 ${highlighted
                            ? "bg-linear-to-br from-[#25D366] to-[#20B558] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)]"
                            : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-[#25D366]/50"
                            }`}
                    >
                        Get Started
                    </button>
                </div>
            </div>
            <BookDemoModal
                open={openModal}
                onOpenChange={setOpenModal}
                title={trialModal.title}
                description={trialModal.description}
            />
        </>
    );
}
