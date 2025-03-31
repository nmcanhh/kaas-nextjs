"use client";
import * as React from "react";
import MarqueeText from "./MarqueeText";
import CTAButton from "./CTAButton";
import StatItem from "./StatItem";

function HeroSection() {
  return (
    <section className="flex flex-col items-center px-[3rem] bg-[#D6D7E0] bg-opacity-90">
      <div className="pt-11 w-full max-w-[1440px] max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="self-end mr-5 w-full max-w-[1300px] max-md:mr-2.5 max-md:max-w-full">
            <div className="z-10 mt-0 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col relative">
                <div className="absolute hidden sm:block md:bottom-[-26px] md:left-[376px] lg:bottom-[-40px] lg:left-[412px] xxl:bottom-[-20px] xl:left-[360px] sm:bottom-[-6px] sm:left-[80px] sm:w-[122px] md:w-[178px] lg:w-[220px] xl:w-[282px]">
                  <img
                    src="./images/image-65.png"
                    alt="Stablecoin payment API illustration"
                    className="aspect-square"
                  />
                </div>
                <div className="w-[56%] max-md:ml-0 max-md:w-full">
                  <article className="z-10 mt-14 mr-0 max-md:mt-10 max-md:max-w-full">
                    <h1 className="text-6xl font-semibold leading-[66px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                      Stablecoin Onramp/Offramp Payment APIs for Businesses
                    </h1>
                    <div className="flex flex-col mt-6 w-full text-neutral-700 max-md:max-w-full">
                      <div className="w-full max-md:max-w-full">
                        <div className="flex flex-col w-full max-md:max-w-full">
                          <p className="text-xl font-medium leading-8 max-md:max-w-full text-[#363637] opacity-80">
                            Powering the future of finance with a compliant,
                            fast, and scalable crypto onramp/offramp APIs.
                          </p>
                          <StatItem
                            iconSrc="./icons/global.svg"
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
                        iconSrc="./icons/arrow.svg"
                      />
                    </div>
                  </article>
                </div>
                <div className="hidden sm:block sm:mt-[-146px] sm:ml-[288px] md:mt-[225px] md:ml-0 lg:mt-[40px] w-[56%] lg:w-full">
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
