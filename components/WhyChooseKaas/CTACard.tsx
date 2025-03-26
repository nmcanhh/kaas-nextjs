"use client";
import React from "react";
import { ArrowIcon } from "./KaasIcons";

interface CTACardProps {
  text: string;
  onClick?: () => void;
}

export const CTACard: React.FC<CTACardProps> = ({ text, onClick }) => {
  return (
    <article className="flex justify-center items-center px-16 py-5 bg-indigo-500 rounded-3xl shadow-md h-[266px] max-sm:px-8 max-sm:py-4 max-sm:h-auto">
      <button
        className="flex gap-2.5 items-center py-1.5 pr-1.5 pl-8 text-lg bg-white rounded-[122px] text-neutral-700 max-sm:justify-center max-sm:w-full"
        onClick={onClick}
        aria-label={text}
      >
        <span>{text}</span>
        <div className="flex justify-center items-center bg-indigo-500 rounded-full h-[49px] w-[49px]">
          <ArrowIcon />
        </div>
      </button>
    </article>
  );
};
