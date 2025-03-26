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
    <article className="px-16 py-5 bg-white rounded-3xl shadow-md h-[266px] max-sm:px-8 max-sm:py-4 max-sm:h-auto">
      <div className="flex flex-col gap-6 items-start">
        <div>{icon}</div>
        <h3 className="mt-6 text-2xl font-semibold text-black">{title}</h3>
        <p className="text-base leading-6 text-neutral-600">{description}</p>
      </div>
    </article>
  );
};
