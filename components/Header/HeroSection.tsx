"use client";
import * as React from "react";
import MarqueeText from "./MarqueeText";
import CTAButton from "./CTAButton";
import StatItem from "./StatItem";

function HeroSection() {
  return (
    <section className="flex flex-col items-end px-20 max-md:pl-5">
      <div className="pt-11 w-full max-w-[1440px] max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="self-end mr-5 w-full max-w-[1300px] max-md:mr-2.5 max-md:max-w-full">
            <div className="z-10 mt-0 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-[44%] max-md:ml-0 max-md:w-full">
                  <article className="z-10 mt-14 mr-0 max-md:mt-10 max-md:max-w-full">
                    <h1 className="text-6xl font-semibold leading-[66px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                      Stablecoin Onramp/Offramp Payment APIs for Businesses
                    </h1>
                    <div className="flex flex-col mt-6 w-full text-neutral-700 max-md:max-w-full">
                      <div className="w-full max-md:max-w-full">
                        <div className="flex flex-col w-full max-md:max-w-full">
                          <p className="text-xl font-medium leading-8 max-md:max-w-full">
                            Powering the future of finance with a compliant,
                            fast, and scalable crypto onramp/offramp APIs.
                          </p>
                          <StatItem
                            iconSrc="./images/image-12.png"
                            text={
                              <>
                                58,0000+
                                <br />
                                Onramp & Offramp transactions
                              </>
                            }
                          />
                        </div>
                      </div>
                      <CTAButton
                        text="Let's start"
                        iconSrc="./images/image-13.png"
                      />
                    </div>
                  </article>
                </div>
                <div className="ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                  <img
                    src="./images/image-3.png"
                    alt="Stablecoin payment API illustration"
                    className="object-contain grow w-full aspect-square max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <MarqueeText />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
