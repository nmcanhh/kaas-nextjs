"use client";
import * as React from "react";
import KaasServesImages from "./KaasServesImages";
import KaasServesList from "./KaasServesList";

function KaasServes() {
  return (
    <section className="flex relative w-full bg-[linear-gradient(180deg,rgba(230,230,244,0.20)_0%,rgba(190,188,200,0.20)_38.5%,rgba(159,156,166,0.20)_68.5%,rgba(166,162,170,0.20)_100%)] min-h-[screen]">
      <div className="relative px-32 py-24 mx-auto max-w-none max-md:px-16 max-md:max-w-[991px] max-sm:px-5 max-sm:max-w-screen-sm">
        <KaasServesList />
      </div>
      <KaasServesImages />
    </section>
  );
}

export default KaasServes;
