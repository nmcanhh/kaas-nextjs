import React from "react";
import StatCard from "./StatCard";

const StatisticsSection: React.FC = () => {
  const stats = [
    { value: "50,000+", label: "Transactions" },
    { value: "18+", label: "BLOCKCHAINS" },
    { value: "5", label: "BANKS" },
    { value: "3", label: "fi COMPANIES" },
  ];

  return (
    <section className="flex flex-wrap gap-10 justify-between items-start self-center mt-11 w-full max-w-[1200px] max-md:mt-10 max-md:max-w-full">
      {stats.map((stat, index) => (
        <StatCard key={index} value={stat.value} label={stat.label} />
      ))}
    </section>
  );
};

export default StatisticsSection;
