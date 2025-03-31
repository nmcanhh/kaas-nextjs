"use client";

import React from "react";

interface GetStartedButtonProps {
  text: string;
  iconSrc: string;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  text,
  iconSrc,
}) => {
  return (
    <button
      className="flex overflow-hidden gap-2.5 items-center py-4 pr-6 pl-7 mt-10 text-xl font-medium leading-snug uppercase shadow-sm bg-[linear-gradient(104deg,#CBD6FC_0%,#9BAFFF_101.74%,rgba(0,64,57,0.00)_101.75%)] rounded-[99999px] text-neutral-800 max-md:px-5 hover:opacity-90 transition-opacity"
      aria-label={text}
      onClick={() => window.location.href = '/'}
    >
      <span className="self-stretch my-auto">{text}</span>
      <img
        src={iconSrc}
        className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
        alt="Arrow icon"
      />
    </button>
  );
};

export default GetStartedButton;
