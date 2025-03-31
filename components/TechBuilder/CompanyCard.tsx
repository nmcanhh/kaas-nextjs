"use client";

import React from "react";

interface CompanyCardProps {
  logoImage: string;
  companyName: string;
  website: string;
  title: string;
  description: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  logoImage,
  companyName,
  website,
  title,
  description,
}) => {
  return (
    <article className="flex relative flex-col px-5 py-3 min-h-[380px] max-md:mt-10">
      <section style={{ backgroundImage: "url('images/builder-subtract.png')", backgroundSize: '100% 100%' }} className="w-[469px] max-sm:w-[400px] bg-no-repeat bg-center relative p-[19px] pt-[13px] bg-[opacity-60] rounded-[32px]">
        <header className="flex relative gap-4 items-center self-start ml-5 max-md:ml-2.5">
          <img
            src={logoImage}
            alt={`${companyName} logo`}
            className="object-contain shrink-0 self-stretch my-auto w-20 rounded-full aspect-square shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          />
          <div className="self-stretch my-auto">
            <h2 className="text-2xl font-semibold leading-none text-neutral-800">
              {companyName}
            </h2>
            <p className="mt-1 text-lg font-medium text-zinc-500">{website}</p>
          </div>
        </header>
        <section className="relative px-[20px] py-[24px] mt-2 bg-white rounded-3xl max-md:max-w-full min-h-[272px]">
          <h3 className="text-2xl leading-8 text-black">{title}</h3>
          <p className="mt-[16px] text-base leading-6 text-neutral-500">
            {description}
          </p>
        </section>
      </section>
    </article>
  );
};

export default CompanyCard;
