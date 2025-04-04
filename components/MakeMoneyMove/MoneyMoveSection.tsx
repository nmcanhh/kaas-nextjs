"use client";

import React from "react";
import TestimonialCard from "./TestimonialCard";
import CircularBackground from "./CircularBackground";
import ProfileImage from "./ProfileImage";
import { FeedbackCard } from "./FeedbackCard";
import { MobileFeedback } from "./MobileFeedback";
import animationData from './bridge.json'; // Nếu đặt trong public, import không được — xem lưu ý dưới
import LottieAnimation from "./LottieAnimation";

interface LottieViewProps {
  animationData: object;
  className?: string;
}

const MoneyMoveSection: React.FC = () => {
  return (
    <section className="relative px-32 py-24 w-full bg-white min-h-[screen] max-md:px-8 max-sm:px-4">
      <header className="flex flex-col items-center mb-16 text-center">
        <h1 className="mb-5 text-5xl font-medium leading-[60px] text-neutral-800 max-md:text-4xl max-sm:text-3xl max-sm:leading-10">
          Make money move
        </h1>
        <p className="text-2xl leading-normal max-w-[655px] text-neutral-800 max-md:text-xl max-sm:text-base">
          An entirely new payments platform, built with stablecoins, to simplify
          global money movement.
        </p>
      </header>

      <div className="relative w-full">
        <div className="flex relative justify-center items-center">
          {/* Desktop */}
          <div className="hidden lg:block">
            <LottieAnimation width={802} height="auto" animationData={animationData} />
          </div>

          {/* Tablet */}
          <div className="hidden sm:block lg:hidden">
            <LottieAnimation width={600} height="auto" animationData={animationData} />
          </div>

          {/* Mobile */}
          <div className="block sm:hidden">
            <LottieAnimation width="100%" height="100%" animationData={animationData} />
          </div>
        </div>

        {/* Left profile image */}
        <ProfileImage
          src="images/make-money-move/avatar-men-1.png"
          className="hidden md:block absolute left-[418px] top-[120px] md:left-[34px] lg:left-[26px] xl:left-[150px] 2xl:left-[278px] max-md:left-[50px] max-sm:left-2.5 max-sm:top-[50px]"
          size="medium"
        />

        {/* Left testimonial */}
        <div className="hidden md:block absolute right-0 top-[266px] sm:left-0 sm:top-[-60px] md:top-[-28px] md:left-[-112px] lg:top-[252px] lg:left-[-115px] xl:left-[-114px] 2xl:left-0">
          <TestimonialCard
            imageSrc="images/make-money-move/flag-japan.png"
            text="Sending money home with stablecoins is cheaper and arrives in minutes, unlike slow and costly bank transfers"
          />
        </div>
        {/* xl:top-[64px] max-md:right-[50px] max-sm:right-2.5 max-sm:top-[50px] */}
        {/* Right testimonial */}
        <div className="hidden md:block absolute top-[-68px] right-[-12px] md:top-0 md:right-[-110px] lg:right-[-80px] lg:top-[90px] xl:right-[50px] xl:top-[50px] 2xl:right-[164px]">
          <TestimonialCard
            imageSrc="images/make-money-move/flag-uae.png"
            text="Getting paid in stablecoins means I receive money instantly, with lower fees and no bank delays"
            imageClassName="rounded-[4px]"
          />
        </div>

        {/* Right profile image */}
        <ProfileImage
          src="images/make-money-move/avatar-woman-1.png"
          className="hidden md:block absolute right-2.5 top-[122px] sm:right-0 sm:top-[114px] md:right-0 md:top-[230px] lg:right-[14px] lg:top-[300px] xl:right-[120px] xl:top-[218px] max-md:right-5  "
          size="large"
        />

        {/* Bottom testimonial */}
        <div className="hidden md:block absolute right-[378px] -translate-x-2/4 bottom-[6px] sm:right-[-90px] sm:bottom-[-20px] md:right-[-208px] max-md:bottom-[100px] lg:right-[-34px] xl:right-[80px] 2xl:right-[200px]">
          <TestimonialCard
            imageSrc="images/make-money-move/flag-vietnam.png"
            text="I use stablecoins to pay globally without worrying about exchange rates or hidden fees—fast and hassle-free"
          />
        </div>

        {/* Bottom profile image */}
        <ProfileImage
          src="images/make-money-move/avatar-woman-2.png"
          className="hidden md:block absolute right-[400px] bottom-[10px] max-sm:right-[274px] md:right-[340px] md:bottom-100px lg:right-[460px] xl:right-[700px] 2xl:right-[846px] 3xl:right-[768px] -translate-x-2/4 "
          size="small"
        />

        <MobileFeedback />
      </div>
    </section>
  );
};

export default MoneyMoveSection;
