import React from "react";

interface PartnerCardProps {
  imageUrl: string;
  name: string;
  isRounded?: boolean;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  imageUrl,
  name,
  isRounded = false,
}) => {
  return (
    <div className="flex flex-col grow shrink items-center w-24 whitespace-nowrap">
      <img
        src={imageUrl}
        alt={`${name} logo`}
        className={`object-contain max-w-full aspect-square w-[120px] ${
          isRounded ? "rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" : ""
        }`}
      />
      <p className="mt-4 text-2xl font-medium">{name}</p>
    </div>
  );
};

export default PartnerCard;
