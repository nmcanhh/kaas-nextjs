import React from "react";

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center whitespace-nowrap min-w-60">
      <h3 className="text-7xl font-semibold text-indigo-500 max-md:text-4xl">
        {value}
      </h3>
      <p className="mt-4 text-2xl font-medium uppercase text-slate-800">
        {label}
      </p>
    </div>
  );
};

export default StatCard;
