"use client";

import React from "react";
import GetStartedButton from "./GetStartedButton";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-indigo-100">
      <div className="pt-24 pr-20 pb-10 pl-2 w-full bg-white bg-opacity-60 max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <figure className="w-[55%] max-md:ml-0 max-md:w-full">
            <img
              src="images/image-55.png"
              alt="Stablecoin services illustration"
              className="object-contain grow w-full aspect-[1.38] max-md:mt-10 max-md:max-w-full"
            />
          </figure>
          <article className="ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
              <div className="max-w-full text-stone-950 w-[720px]">
                <h1 className="text-5xl font-medium max-md:max-w-full max-md:text-4xl">
                  Unlock the Future of Stablecoins services with Kaas
                </h1>
                <p className="mt-5 text-xl leading-8 max-md:max-w-full">
                  Whether you're a PSP, FinTech, Bank, Enterprise Wallet,
                  Remittance Provider, FX Platform, Treasury Team, or Onchain
                  Bank, Kaas helps you seamlessly integrate stablecoin
                  transactions with speed, security, and compliance.
                </p>
              </div>
              <GetStartedButton
                text="get started"
                iconSrc="images/arrow-left.png"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
