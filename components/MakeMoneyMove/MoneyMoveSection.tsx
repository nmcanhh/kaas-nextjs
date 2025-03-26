"use client";

import React from "react";
import TestimonialCard from "./TestimonialCard";
import CircularBackground from "./CircularBackground";
import ProfileImage from "./ProfileImage";

const MoneyMoveSection: React.FC = () => {
  return (
    <section className="relative px-16 py-16 w-full bg-white min-h-[screen] max-md:px-8 max-sm:px-4">
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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8bcc9227efaa4c2ca72b073a71ba72c0816a8a0"
          className="absolute left-[275px] top-[114px] max-md:left-[50px] max-sm:left-2.5 max-sm:top-[50px]"
          size="large"
        />

        {/* Left testimonial */}
        <div className="absolute left-0 top-[258px] max-md:left-5 max-sm:left-2.5 max-sm:top-[150px]">
          <TestimonialCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f8bcc9227efaa4c2ca72b073a71ba72c0816a8a0"
            text="Sending money home with stablecoins is cheaper and arrives in minutes, unlike slow and costly bank transfers"
          />
        </div>

        {/* Right testimonial */}
        <div className="absolute right-[275px] top-[68px] max-md:right-[50px] max-sm:right-2.5 max-sm:top-[50px]">
          <TestimonialCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a9133ecc88959f0b29969a02c1a4f74f854e91b8"
            text="Getting paid in stablecoins means I receive money instantly, with lower fees and no bank delays"
            imageClassName="rounded-[4px]"
          />
        </div>

        {/* Right profile image */}
        <ProfileImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9563541d6a8d353bd151fdc41c960d3f1bec13e"
          className="absolute right-[130px] top-[298px] max-md:right-5 max-sm:right-2.5 max-sm:top-[150px]"
          size="large"
        />

        {/* Bottom testimonial */}
        <div className="absolute left-2/4 -translate-x-2/4 bottom-[170px] max-md:bottom-[100px]">
          <TestimonialCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b9563541d6a8d353bd151fdc41c960d3f1bec13e"
            text="I use stablecoins to pay globally without worrying about exchange rates or hidden fees—fast and hassle-free"
          />
        </div>
      </div>
    </section>
  );
};

export default MoneyMoveSection;
