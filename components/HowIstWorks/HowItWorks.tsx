"use client";
import * as React from "react";
import BusinessFeatures from "./BusinessFeatures";
import UserProcess from "./UserProcess";

function HowItWorks() {
  return (
    <section className="flex justify-center gap-[40px] px-[3rem] py-[4rem] lg:px-[3rem] lg:py-24 mx-auto max-w-none min-h-screen max-md:px-10 max-md:py-16 max-md:max-w-[991px] max-sm:px-5 max-sm:py-10 max-sm:max-w-screen-sm bg-[#D6D7E0] bg-opacity-90">
      <div className="flex flex-col items-center py-10 w-full max-md:max-w-full">
        <BusinessFeatures />
        <UserProcess />
      </div>
    </section>
  );
}

export default HowItWorks;
