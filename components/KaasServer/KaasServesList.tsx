import * as React from "react";

const industries = [
  "PSPs",
  "FinTechs",
  "Banks",
  "Enterprise",
  "Wallets",
  "Remittance",
  "Platforms",
  "FX platforms",
  "Treasuries",
  "Onchain Banks",
];

function KaasServesList() {
  return (
    <div className="flex flex-col">
      <h2 className="mb-8 text-5xl font-medium text-indigo-500 leading-[60px]">
        Kaas serves
      </h2>
      <ul className="flex flex-col gap-2 text-5xl leading-[60px] text-neutral-700">
        {industries.map((industry, index) => (
          <li key={index}>{industry}</li>
        ))}
      </ul>
    </div>
  );
}

export default KaasServesList;
