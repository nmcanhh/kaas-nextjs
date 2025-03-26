"use client";
import * as React from "react";
import FeatureCard from "./FeatureCard";

function BusinessFeatures() {
  const features = [
    {
      title: "Onramp & Offramp",
      description:
        "Convert fiat to stablecoins and vice versa with instant settlement",
    },
    {
      title: "Built-in Compliance & Security",
      description:
        "Integrated KYC/AML ensures regulatory compliance and fraud prevention",
    },
    {
      title: "Multi-Chain & Banking Connectivity",
      description:
        "Supports major blockchains and payment networks for global transactions",
    },
  ];

  return (
    <>
      <h2 className="text-5xl font-medium leading-none text-center text-neutral-800 max-md:max-w-full">
        How it works for businesses?
      </h2>
      <section className="pt-16 pb-5 mt-14 w-full rounded-none max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {features.map((feature, index) => (
            <div key={index} className="w-[33%] max-md:ml-0 max-md:w-full">
              <FeatureCard
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default BusinessFeatures;
