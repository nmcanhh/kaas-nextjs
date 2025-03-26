import React, { ReactNode } from "react";

interface StatItemProps {
  iconSrc: string;
  text: ReactNode;
}

const StatItem: React.FC<StatItemProps> = ({ iconSrc, text }) => {
  return (
    <div className="flex gap-2 items-center self-start mt-6 text-base">
      <img
        src={iconSrc}
        alt="Stat icon"
        className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
      />
      <p className="self-stretch my-auto">{text}</p>
    </div>
  );
};

export default StatItem;
