"use client";

import React from "react";
import TestimonialCard from "./TestimonialCard";
import CircularBackground from "./CircularBackground";
import ProfileImage from "./ProfileImage";

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
          <CircularBackground />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a756caf641c09d1a4db6325326cc0dea3d8a3a97"
            alt="Money movement illustration"
            className="absolute w-[802px] h-[671px] max-lg:w-[600px] max-lg:h-[500px] max-sm:w-[300px] max-sm:h-[250px]"
          />
        </div>

        {/* Left profile image */}
        <ProfileImage
          src="/images/image-63.png"
          className="hidden sm:block absolute left-[418px] top-[120px] md:left-[34px] lg:left-[26px] xl:left-[150px] 2xl:left-[278px] max-md:left-[50px] max-sm:left-2.5 max-sm:top-[50px]"
          size="medium"
        />

        {/* Left testimonial */}
        <div className="absolute right-0 top-[266px] sm:left-0 sm:top-[-60px] md:top-[-28px] md:left-[-112px] lg:top-[252px] lg:left-[-115px] xl:left-[-114px] 2xl:left-0">
          <TestimonialCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f8bcc9227efaa4c2ca72b073a71ba72c0816a8a0"
            text="Sending money home with stablecoins is cheaper and arrives in minutes, unlike slow and costly bank transfers"
          />
        </div>
        {/* xl:top-[64px] max-md:right-[50px] max-sm:right-2.5 max-sm:top-[50px] */}
        {/* Right testimonial */}
        <div className="absolute top-[-68px] right-[-12px] md:top-0 md:right-[-110px] lg:right-[-80px] lg:top-[90px] xl:right-[50px] xl:top-[50px] 2xl:right-[164px]">
          <TestimonialCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a9133ecc88959f0b29969a02c1a4f74f854e91b8"
            text="Getting paid in stablecoins means I receive money instantly, with lower fees and no bank delays"
            imageClassName="rounded-[4px]"
          />
        </div>

        {/* Right profile image */}
        <ProfileImage
          src="/images/image-62.png"
          className="absolute right-2.5 top-[122px] sm:right-0 sm:top-[114px] md:right-0 md:top-[230px] lg:right-[14px] lg:top-[300px] xl:right-[120px] xl:top-[218px] max-md:right-5  "
          size="large"
        />

        {/* Bottom testimonial */}
        <div className="absolute hidden sm:block right-[378px] -translate-x-2/4 bottom-[6px] sm:right-[-90px] sm:bottom-[-20px] md:right-[-208px] max-md:bottom-[100px] lg:right-[-34px] xl:right-[80px] 2xl:right-[200px]">
          <TestimonialCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b9563541d6a8d353bd151fdc41c960d3f1bec13e"
            text="I use stablecoins to pay globally without worrying about exchange rates or hidden fees—fast and hassle-free"
          />
        </div>

        {/* Bottom profile image */}
        <ProfileImage
          src="/images/image-64.jfif"
          className="absolute right-[400px] bottom-[10px] max-sm:right-[274px] md:right-[340px] md:bottom-100px lg:right-[460px] xl:right-[700px] 2xl:right-[846px] 3xl:right-[768px] -translate-x-2/4 "
          size="small"
        />
      </div>
    </section>
  );
};

export default MoneyMoveSection;
