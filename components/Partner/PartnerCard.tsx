"use client";

import React from "react";

export interface PartnerCardProps {
  profileImage: string;
  profileAlt: string;
  name: string;
  title: string;
  logoImage?: string;
  logoAlt?: string;
  cardTitle: string;
  description: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  profileImage,
  profileAlt,
  name,
  title,
  logoImage,
  logoAlt,
  cardTitle,
  description,
}) => {
  return (
    <article className="relative h-[348px] w-[379px]">
      <section className="relative p-5 bg-[opacity-60] rounded-[32px]">
        <header className="flex gap-3 items-center mb-5">
          <img
            src={profileImage}
            alt={profileAlt}
            className="w-[60px] h-[60px] rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="text-base font-semibold text-neutral-800">{name}</h3>
            <p className="text-sm font-medium text-zinc-500">{title}</p>
          </div>
          {logoImage && (
            <img
              src={logoImage}
              alt={logoAlt || "Company logo"}
              className="w-[60px] h-[60px] rounded-full absolute right-[20px] top-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            />
          )}
        </header>
        <div className="p-5 bg-white rounded-3xl">
          <h2 className="mb-1 text-2xl text-black">{cardTitle}</h2>
          <p className="mt-5 text-base text-neutral-500">{description}</p>
        </div>
      </section>
    </article>
  );
};

export default PartnerCard;
