"use client";

import React from "react";
import FeatureCard from "./FeatureCard";
import FeatureCardNew from "./FeatureCardNew";

const KaasKeyFeatures: React.FC = () => {
  const features = [
    {
      title: "Fiat-Stablecoin Onramp & Offramp",
      description:
        "Convert fiat currencies (VND, JPY, KRW, AED) to stablecoins (USDC, USDT, DAI) and vice versa with seamless API integration",
      imageUrl:
        "images/image-4.png",
      imageAlt: "Fiat-Stablecoin icon",
      isLarge: false
    },
    {
      title: "Regulatory Compliance",
      description:
        "Built-in KYC/AML APIs to ensure compliance-first transactions for financial institutions",
      imageUrl:
        "images/image-5.png",
      imageAlt: "Regulatory Compliance icon",
      isLarge: false
    },
    {
      title: "Enterprise-Grade APIs & SDKs",
      description:
        "Plug-and-play solutions for fintechs, neobanks, PSPs, and treasury teams to scale instantly",
      imageUrl:
        "images/image-8.png",
      imageAlt: "Enterprise APIs icon",
      isLarge: true
    },
    {
      title: "Multi-Chain Support",
      description:
        "Operate on Ethereum L2, BSC, Tron, Solana, Stellar for cross-border payments and settlements.",
      imageUrl:
        "images/image-6.png",
      imageAlt: "Multi-Chain Support icon",
      isLarge: false
    },
    {
      title: "Banking & PSP Integrations",
      description:
        "Direct connections with VNPay, MoMo, Napas, VietQR, Zengin, KFTC for smooth fiat settlements",
      imageUrl:
        "images/image-7.png",
      imageAlt: "Banking & PSP icon",
      isLarge: false
    },
  ];

  const renderGridItems = () => {
    // Tạo một bản sao của mảng features để không ảnh hưởng đến state gốc
    const featuresCopy = [...features]
    const largeSizeIndex = featuresCopy.findIndex((f) => f.isLarge)

    // Nếu không có card Enterprise-Grade, hiển thị grid bình thường
    if (largeSizeIndex === -1) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {featuresCopy.map((feature, index) => (
            <div key={index} className="h-full">
              <FeatureCardNew
                title={feature.title}
                description={feature.description}
                imageUrl={feature.imageUrl}
                imageAlt={feature.imageAlt}
                isLarge={feature.isLarge}
              />
            </div>
          ))}
        </div>
      )
    }

    // Nếu có card Enterprise-Grade, tạo layout đặc biệt
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {featuresCopy.map((feature, index) => (
          <div
            key={index}
            className={`h-full ${feature.isLarge ? "md:row-span-2 lg:col-span-1 lg:row-span-2" : ""}`}
          >
            <FeatureCardNew
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              imageAlt={feature.imageAlt}
              isLarge={feature.isLarge}
            />
          </div>
        ))}
      </div>
    )
  }


  return (
    <section className="flex flex-col items-center mx-auto max-w-none bg-[#FFFFFF99] bg-opacity-60 px-[3rem] py-[4rem] lg:px-[3rem] lg:py-24 max-sm:max-w-screen-sm max-md:px-10 max-md:py-16 max-md:max-w-[991px] max-sm:px-5 max-sm:py-10">
      <header className="flex flex-col gap-8 items-center mb-14">
        <h1 className="text-5xl font-medium text-center leading-[60px] text-neutral-800 max-sm:text-3xl max-sm:leading-10">
          Kaas key features
        </h1>
        <h2 className="text-2xl text-center text-neutral-800 max-sm:text-xl font-medium">
          Stablecoin Onramp &amp; Offramp APIs
          <br />
          [ Made for Developers ]
        </h2>
      </header>
      {/* <div className="grid gap-6 w-full grid-cols-[repeat(2,1fr)] max-w-[1200px] max-md:gap-5 max-md:grid-cols-[1fr]">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            imageUrl={feature.imageUrl}
            imageAlt={feature.imageAlt}
          />
        ))}
      </div> */}
      {renderGridItems()}
    </section>
  );
};

export default KaasKeyFeatures;
