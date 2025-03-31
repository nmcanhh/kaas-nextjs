"use client";

import Image from "next/image";
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
    <article className="relative w-[379px]">
      <section style={{ backgroundSize: '100% 100%' }} className="bg-[url(/images/Subtract.png)] bg-no-repeat bg-center relative p-[20px] pt-[13px] bg-[opacity-60] rounded-[32px]">
        <header className="flex gap-3 mb-[10px] items-center">
          <Image
            src={profileImage}
            alt={profileAlt}
            className="w-[60px] h-[60px] rounded-full"
            width={60}
            height={60}
          />
          <div className="flex flex-col">
            <h3 className="text-base font-semibold text-neutral-800">{name}</h3>
            <p className="text-sm font-medium text-zinc-500">{title}</p>
          </div>
        </header>
        {logoImage && (
          <Image
            src={logoImage}
            width={60}
            height={60}
            alt={logoAlt || "Company logo"}
            className="w-[60px] h-[60px] rounded-full absolute right-[12px] top-[5px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          />
        )}
        <div className="px-[20px] py-[24px] bg-white rounded-3xl">
          <h2 className="flex flex-wrap mb-1 text-2xl text-black">
            <span>
              {cardTitle.split(' ').slice(0, -1).join(' ')}
            </span>
            <span className="w-full">
              {cardTitle.split(' ').pop()}
            </span>
          </h2>
          <p className="mt-5 text-base text-neutral-500">{description}</p>
        </div>
      </section>
    </article>
  );
};

export default PartnerCard;
