"use client";
import * as React from "react";

function TechBuildersHeader() {
  return (
    <header className="flex flex-col justify-center items-center px-5 w-full">
      <h1 className="mb-5 text-5xl font-medium text-center leading-[60px] text-neutral-800 max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-10">
        Tech builders
      </h1>
      <p className="text-2xl text-center max-w-[655px] text-neutral-800 max-md:text-xl max-sm:text-lg">
        Innotech partners with Napa Global to develop Kaas, delivering a secure,
        scalable, and compliant stablecoin payment platform
      </p>
    </header>
  );
}

export default TechBuildersHeader;
