"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatedBackground } from "../../components/animated-background/animated-background";
import { BookDemoModal } from "../../components/book-demo/book-demo-modal";
import { Navbar } from "../../components/navbar/navbar";
import { TrustedSection } from "../../components/trusted-section/trusted-section";
import { SiteFooter } from "../../components/site-footer";

const trialModal = {
    title: "Start Your Free Trial",
    description: "Fill in your details and our team will help you activate your trial shortly.",
};

export default function AboutUs() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <main className="site-scene relative min-h-screen text-white overflow-x-hidden">
            <AnimatedBackground />
            <Navbar />

            <section className="relative z-10 container mx-auto px-6 pt-36 pb-24">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div>
                        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
                            About
                            <span className="bg-linear-to-r from-green-400 to-emerald-200 bg-clip-text text-transparent">
                                {" "}
                                Compucom
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
                            We help businesses automate customer conversations, generate leads,
                            and increase sales using powerful WhatsApp Business API solutions.
                            Trusted by growing brands and enterprises for smarter engagement.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-5">
                            <button className="rounded-2xl bg-linear-to-r from-green-500 to-emerald-400 px-7 py-4 font-semibold text-black transition hover:scale-[1.03]">
                                Know More
                            </button>

                            <button className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10">
                                Explore Features
                            </button>
                        </div>
                    </div>

                    {/* HERO IMAGE */}
                    <div className="relative">
                        <div className="absolute inset-0 rounded-[40px] bg-linear-to-br from-green-500/20 to-emerald-300/10 blur-3xl" />

                        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                            <Image
                                src="/aboutimg/About-Dashboard.png"
                                alt="dashboard"
                                width={1400}
                                height={900}
                                quality={95}
                                className="rounded-[28px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <TrustedSection />

            {/* STATS */}
            {/* <section className="relative z-10 container mx-auto px-6 pb-24">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item) => (
                        <div
                            key={item.label}
                            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
                        >
                            <h3 className="text-5xl font-bold text-green-400">
                                {item.value}
                            </h3>
                            <p className="mt-3 text-gray-400">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* MISSION */}
            {/* <section className="relative z-10 container mx-auto px-6 py-28">
                <div className="grid items-center gap-20 lg:grid-cols-2">

                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
                            Our Mission
                        </p>

                        <h2 className="text-5xl font-bold leading-tight">
                            Helping Brands Grow Through
                            <span className="text-green-400"> WhatsApp Automation</span>
                        </h2>

                        <p className="mt-8 text-lg leading-8 text-gray-400">
                            Our goal is to simplify customer communication using intelligent
                            automation, AI-powered workflows, and scalable messaging systems.
                        </p>

                        <div className="mt-10 space-y-5">
                            {features.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                                >
                                    <CheckCircle2 className="h-6 w-6 text-green-400" />
                                    <p className="text-gray-300">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-green-500/20 blur-[120px]" />

                        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                            <Image
                                src="/workspace.png"
                                alt="workspace"
                                width={1200}
                                height={900}
                                quality={95}
                                className="rounded-[28px]"
                            />
                        </div>
                    </div>
                </div>
            </section> */}

            {/* WHY CHOOSE US */}
            {/* <section className="relative z-10 container mx-auto px-6 py-28">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
                        Why Choose Us
                    </p>

                    <h2 className="text-5xl font-bold">
                        Built for Modern
                        <span className="text-green-400"> Businesses</span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        Everything you need to scale customer communication and automate
                        workflows in one platform.
                    </p>
                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        "AI Powered Templates",
                        "Advanced Analytics",
                        "Multi-Team Inbox",
                        "Lightning Fast Broadcasts",
                        "Secure Cloud Platform",
                        "24/7 Smart Automation",
                    ].map((item) => (
                        <div
                            key={item}
                            className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-2 hover:border-green-400/30"
                        >
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-400">
                                <MessageCircle className="h-7 w-7" />
                            </div>

                            <h3 className="text-2xl font-semibold">{item}</h3>

                            <p className="mt-4 leading-7 text-gray-400">
                                Powerful WhatsApp tools designed to increase engagement,
                                conversions, and automation efficiency.
                            </p>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* TIMELINE */}
            {/* <section className="relative z-10 container mx-auto px-6 py-28">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
                        Journey
                    </p>

                    <h2 className="text-5xl font-bold">
                        Our Growth Timeline
                    </h2>
                </div>

                <div className="relative mx-auto mt-20 max-w-4xl border-l border-white/10 pl-10">
                    {timeline.map((item) => (
                        <div key={item.year} className="relative mb-16">
                            <div className="absolute -left-[50px] top-1 h-6 w-6 rounded-full border-4 border-[#070819] bg-green-400" />

                            <span className="text-sm font-semibold tracking-[0.25em] text-green-400">
                                {item.year}
                            </span>

                            <h3 className="mt-3 text-3xl font-bold">{item.title}</h3>

                            <p className="mt-4 leading-8 text-gray-400">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* CTA */}
            <section className="relative z-10 container mx-auto px-6 pb-32">
                <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-linear-to-br from-green-500/10 to-emerald-300/5 px-10 py-20 text-center backdrop-blur-xl">

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,211,102,0.2),transparent_60%)]" />

                    <div className="relative z-10">
                        <h2 className="text-5xl font-bold">
                            Ready to Automate
                            <span className="text-green-400"> Your Business?</span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                            Start building smarter WhatsApp experiences with AI-powered
                            automation and campaigns.
                        </p>

                        <button
                            type="button"
                            className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-linear-to-r from-green-500 to-emerald-400 px-8 py-4 font-semibold text-black transition hover:scale-[1.03]"
                            onClick={() => setOpenModal(true)}
                        >
                            Start Free Trial
                            {/* <ArrowRight className="h-5 w-5" /> */}
                        </button>
                    </div>
                </div>
            </section>
            <SiteFooter />
            <BookDemoModal
                open={openModal}
                onOpenChange={setOpenModal}
                title={trialModal.title}
                description={trialModal.description}
            />
        </main>
    );
}
