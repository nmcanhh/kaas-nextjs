"use client";
import React from "react";
import PartnerInfo from "./PartnerInfo";
import PartnerGrid from "./PartnerGrid";
import StatisticsSection from "./StatisticsSection";

const StrategicPartners: React.FC = () => {
  return (
    <section className="flex flex-col px-20 py-16 max-md:px-5">
      <div className="self-end w-full max-w-[1255px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[37%] max-md:ml-0 max-md:w-full">
            <PartnerInfo />
          </div>
          <div className="ml-5 w-[63%] max-md:ml-0 max-md:w-full">
            <PartnerGrid />
          </div>
        </div>
      </div>
      <StatisticsSection />
    </section>
  );
};

export default StrategicPartners;
