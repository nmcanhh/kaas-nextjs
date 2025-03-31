import React, { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="px-16 py-5 h-auto bg-white rounded-3xl shadow-md lg:px-[26px] lg:py-[16px] xl:px-[62px] xl:py-[32.5px]">
      <div className="flex flex-col gap-4 items-start">
        <div className="flex justify-center items-center w-[61px] h-[61px] rounded-full bg-gradient-to-b from-[#CBD6FC] to-[#9BAFFF] shadow-[0_7.6px_25.34px_rgba(157,159,253,0.65)]">{icon}</div>
        <h3 className="text-2xl font-semibold text-black">{title}</h3>
        <p className="text-base leading-6 text-neutral-600">{description}</p>
      </div>
    </article>
  );
};
