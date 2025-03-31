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
    <section className="flex justify-center flex-col lg:flex-row gap-[40px] px-[3rem] py-[4rem] lg:px-[3rem] lg:py-24 mx-auto max-w-none min-h-screen max-md:px-10 max-md:py-16 max-md:max-w-[991px] max-sm:px-5 max-sm:py-10 max-sm:max-w-screen-sm bg-gradient-to-b from-[#CBD6FC] to-[#9BAFFF]">
      <header className="mb-0 lg:mb-16 relative w-full lg:max-w-[358px]">
        <h1 className="text-center lg:text-left mb-6 text-5xl font-medium leading-[60px] text-neutral-800 max-sm:text-3xl max-sm:leading-10">
          Why choose Kaas?
        </h1>
        <p className="text-center lg:text-left mb-10 text-2xl text-neutral-800 max-sm:text-xl">
          Kaas helps banks, fintechs, PSPs, and enterprises connect fiat and
          stablecoins effortlessly. Enable global transactions with low fees,
          fast settlement, and full compliance.
        </p>
        <Image
          src="images/image-1.png"
          alt="USD Coin 3D"
          width={415}
          height={415}
          className="absolute left-[-50px] bottom-[-170px] blur-[6px] w-[415px] max-lg:hidden"
          priority
        />
        <Image
          src="images/image-2.png"
          alt="USD Coin 3D"
          width={128}
          height={128}
          className="absolute w-32 h-32 blur-[2px] left-[220px] max-md:hidden max-lg:bottom-[148px] max-lg:left-0"
        />
      </header>

      <div className="grid relative gap-8  auto-rows-fr z-[1] max-md:gap-5 grid-cols-[repeat(2,minmax(200px,1fr))] lg:grid-cols-[repeat(2,minmax(250px,379px))] max-sm:grid-cols-[1fr]">
        <FeatureCard
          icon={<svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={24}
            fill="none"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="m20.862 6.487-.159-.282a2.339 2.339 0 0 0-.835-.825l-7.58-4.371a2.26 2.26 0 0 0-1.13-.305h-.327c-.397 0-.787.106-1.13.305L2.12 5.392a2.26 2.26 0 0 0-.825.824l-.158.283a2.26 2.26 0 0 0-.305 1.13v8.754c.001.397.106.786.305 1.13l.158.282c.204.338.487.622.825.825l7.591 4.371c.342.204.732.31 1.13.305h.316a2.26 2.26 0 0 0 1.13-.305l7.58-4.383c.345-.193.63-.479.824-.824l.17-.283c.196-.344.301-.733.305-1.13V7.618a2.26 2.26 0 0 0-.305-1.13ZM10.83 2.963h.327l6.62 3.818L11 10.69 4.222 6.78l6.609-3.818Zm1.299 17.51 6.608-3.819.17-.282V8.735l-6.778 3.92v7.817Z"
              clipRule="evenodd"
            />
          </svg>}
          title="Faster Transactions"
          description="Cross-border payments settle in minutes, not days"
        />

        <FeatureCard
          icon={<svg
            xmlns="http://www.w3.org/2000/svg"
            width={23}
            height={23}
            fill="none"
          >
            <path
              fill="#fff"
              d="M20.333 15.815h-1.13a1.13 1.13 0 0 0-1.129 1.13v3.388a2.26 2.26 0 0 1-2.26 2.26h-3.388a1.13 1.13 0 0 1-1.13-1.13v-1.13a2.26 2.26 0 0 0-4.518 0v1.13a1.13 1.13 0 0 1-1.13 1.13H2.26A2.26 2.26 0 0 1 0 20.333v-3.389c0-.623.506-1.13 1.13-1.13h1.13a2.26 2.26 0 1 0 0-4.518H1.13A1.13 1.13 0 0 1 0 10.166V6.779a2.26 2.26 0 0 1 2.26-2.26h3.388a1.13 1.13 0 0 0 1.13-1.13V2.26a2.26 2.26 0 1 1 4.518 0v1.13c0 .624.506 1.13 1.13 1.13h3.389a2.26 2.26 0 0 1 2.26 2.259v3.389c0 .623.505 1.13 1.129 1.13h1.13a2.26 2.26 0 1 1 0 4.518Z"
            />
          </svg>}
          title="Easy Integration"
          description="Simple API &amp; SDK for quick enterprise adoption"
        />

        <FeatureCard
          icon={<svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="none"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M10.022 0c-2.51 0-4.796.829-6.149 1.506-.121.061-.236.121-.342.179-.21.114-.388.221-.531.315l1.539 2.265.724.289c2.831 1.428 6.628 1.428 9.46 0l.822-.427L17 2a8.617 8.617 0 0 0-.938-.532C14.715.798 12.484 0 10.022 0Zm-3.58 2.565a13.647 13.647 0 0 1-1.611-.405C6.098 1.597 7.987 1 10.021 1c1.41 0 2.743.287 3.845.65-1.291.182-2.67.49-3.983.87-1.034.299-2.242.266-3.44.045Z"
              clipRule="evenodd"
            />
            <path
              fill="#fff"
              fillRule="evenodd"
              d="m15.31 5.378-.137.069c-3.115 1.571-7.246 1.571-10.36 0l-.13-.066c-4.678 5.134-9.587 14.762 5.339 14.617 14.915-.144 9.93-9.66 5.287-14.62ZM10.855 9H9.144v.8a2.22 2.22 0 0 0-1.49.561c-.4.361-.635.854-.653 1.373-.018.52.18 1.026.555 1.41a2.2 2.2 0 0 0 1.448.652l.14.004h1.712l.077.006a.435.435 0 0 1 .252.138c.064.071.1.162.1.256a.384.384 0 0 1-.1.256.434.434 0 0 1-.252.138l-.077.006H7.433v1.6h1.711v.8h1.712v-.8a2.22 2.22 0 0 0 1.49-.561c.4-.361.635-.854.653-1.373a1.926 1.926 0 0 0-.555-1.41 2.201 2.201 0 0 0-1.448-.652l-.14-.004H9.144l-.077-.006a.435.435 0 0 1-.252-.138.385.385 0 0 1-.1-.256c0-.094.036-.184.1-.256a.435.435 0 0 1 .252-.138l.077-.006h3.423V9.8h-1.711V9Z"
              clipRule="evenodd"
            />
          </svg>}
          title="Lower Costs"
          description="Reduce transaction expenses with low-fee stablecoin settlements"
        />

        <FeatureCard
          icon={<svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={26}
            fill="none"
          >
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.74}
              d="M2 14.222V4.47l2.16-.167a17.778 17.778 0 0 0 5.47-1.314L12 2l2.37.988a17.779 17.779 0 0 0 5.47 1.314L22 4.47v9.753c0 5.523-4.477 10-10 10s-10-4.477-10-10Z"
            />
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.74}
              d="m7.556 13.111 2.777 2.778 6.111-6.111"
            />
          </svg>}
          title="Secure &amp; Compliant"
          description="Integrated KYC/AML, fraud detection, and regulatory safeguards"
        />

        <FeatureCard
          icon={<svg
            xmlns="http://www.w3.org/2000/svg"
            width={19}
            height={23}
            fill="none"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M10.63 4.722h7.342c.312 0 .565.253.565.565v10.167a.565.565 0 0 1-.565.564H10.63a2.26 2.26 0 0 1-2.26-2.259H2.722v8.472a.565.565 0 0 1-.565.565h-1.13a.565.565 0 0 1-.564-.565V.768c0-.312.253-.564.565-.564h1.13c.311 0 .564.252.564.564v1.695H8.37a2.26 2.26 0 0 1 2.26 2.26ZM2.722 11.5H8.37V4.722H2.722V11.5Z"
              clipRule="evenodd"
            />
          </svg>}
          title="Global Reach"
          description="Support for multiple currencies and blockchain networks"
        />

        <CTACard text="Request a demo?" onClick={handleDemoRequest} />
      </div>
    </section>
  );
};
