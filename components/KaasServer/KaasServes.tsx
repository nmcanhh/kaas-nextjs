"use client";
import * as React from "react";
import KaasServesList from "./KaasServesList";

function KaasServes() {
  return (
    <section className="flex relative w-full min-h-[screen]"
      style={{ background: 'linear-gradient(180deg, rgba(230, 230, 244, 0.20) 0%, rgba(190, 188, 200, 0.20) 38.5%, rgba(159, 156, 166, 0.20) 68.5%, rgba(166, 162, 170, 0.20) 100%)' }}
    >
      <div style={{ backgroundImage: "url('images/server-background.png')" }} className="w-full h-max-[1174px] relative px-32 pt-24 pb-64 mx-auto max-md:px-16 max-sm:px-5 bg-right bg-no-repeat">
        <KaasServesList />
      </div>
    </section>
  );
}

export default KaasServes;
