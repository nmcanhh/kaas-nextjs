"use client";
import * as React from "react";
import BusinessFeatures from "./BusinessFeatures";
import UserProcess from "./UserProcess";

function HowItWorks() {
  return (
    <section className="w-full max-md:max-w-full">
      <div className="flex flex-col items-center py-10 w-full max-md:max-w-full">
        <BusinessFeatures />
        <UserProcess />
      </div>
    </section>
  );
}

export default HowItWorks;
