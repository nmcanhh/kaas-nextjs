"use client";
import React from "react";
import { ArrowIcon } from "./KaasIcons";

interface CTACardProps {
  text: string;
  onClick?: () => void;
}

export const CTACard: React.FC<CTACardProps> = ({ text, onClick }) => {
  return (
    <article className="flex justify-center items-center bg-[#596BD8] rounded-3xl shadow-md max-sm:h-auto px-[5.5rem] max-md:px-[1.5rem] lg:px-0">
      <button
        className="flex justify-between gap-2.5 items-center py-1.5 pr-1.5 pl-8 text-lg bg-white rounded-[122px] text-neutral-700 w-full md:w-[255px] md:h-[61px]"
        onClick={onClick}
        aria-label={text}
      >
        <span>{text}</span>
        <div className="flex justify-center items-center bg-[#596BD8] rounded-full h-[49px] w-[49px]">
          <ArrowIcon />
        </div>
      </button>
    </article>
  );
};
