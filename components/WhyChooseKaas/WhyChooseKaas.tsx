"use client";
import React from "react";
import { FeatureCard } from "./FeatureCard";
import { CTACard } from "./CTACard";
import { BlockchainIcon, FlagIcon, IntegrationIcon } from "./KaasIcons";
import Image from 'next/image';

export const WhyChooseKaas: React.FC = () => {
  const handleDemoRequest = () => {
    // Handle demo request logic here
    console.log("Demo requested");
  };

  return (
    <section className="px-32 py-24 mx-auto max-w-none min-h-screen max-md:px-10 max-md:py-16 max-md:max-w-[991px] max-sm:px-5 max-sm:py-10 max-sm:max-w-screen-sm">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <header className="mb-16 relative max-w-[358px]">
        <h1 className="mb-6 text-5xl font-medium leading-[60px] text-neutral-800 max-sm:text-3xl max-sm:leading-10">
          Why choose Kaas?
        </h1>
        <p className="mb-10 text-2xl text-neutral-800 max-sm:text-xl">
          Kaas helps banks, fintechs, PSPs, and enterprises connect fiat and
          stablecoins effortlessly. Enable global transactions with low fees,
          fast settlement, and full compliance.
        </p>
        <Image
          src="/images/image-1.png"
          alt="USD Coin 3D"
          width={415}
          height={415}
          className="absolute bottom-0 blur-[6px] h-[415px] left-[42px] w-[415px] max-md:hidden"
          priority
        />
        <Image
          src="/images/image-2.png"
          alt="USD Coin 3D"
          width={128}
          height={128}
          className="absolute w-32 h-32 blur-[2px] bottom-[85px] left-[314px] max-md:hidden"
        />
      </header>

      <div className="grid relative gap-8 grid-cols-[repeat(3,379px)] z-[1] max-md:gap-5 max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        <FeatureCard
          icon={<BlockchainIcon />}
          title="Faster Transactions"
          description="Cross-border payments settle in minutes, not days"
        />

        <FeatureCard
          icon={<IntegrationIcon />}
          title="Easy Integration"
          description="Simple API &amp; SDK for quick enterprise adoption"
        />

        <FeatureCard
          icon={<FlagIcon />}
          title="Lower Costs"
          description="Reduce transaction expenses with low-fee stablecoin settlements"
        />

        <FeatureCard
          icon={<BlockchainIcon />}
          title="Secure &amp; Compliant"
          description="Integrated KYC/AML, fraud detection, and regulatory safeguards"
        />

        <FeatureCard
          icon={<FlagIcon />}
          title="Global Reach"
          description="Support for multiple currencies and blockchain networks"
        />

        <CTACard text="Request a demo?" onClick={handleDemoRequest} />
      </div>
    </section>
  );
};
