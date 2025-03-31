import config from "@/utils/config";
import Link from "next/link";
import React from "react";

interface CTAButtonProps {
  text: string;
  iconSrc: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, iconSrc }) => {
  return (
    <Link href={config.letsStartHref} className="flex gap-2.5 justify-center items-center self-start py-1.5 pr-1.5 pl-8 mt-8 text-lg text-center bg-white bg-opacity-50 rounded-[122px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pl-5">
      <span className="self-stretch my-auto">{text}</span>
      <img
        src={iconSrc}
        alt="Arrow"
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[49px]"
      />
    </Link>
  );
};

export default CTAButton;
