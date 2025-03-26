"use client";

import React from "react";

interface BlockchainIconRowProps {
  iconUrls: string[];
  altText?: string;
}

const BlockchainIconRow: React.FC<BlockchainIconRowProps> = ({
  iconUrls,
  altText = "blockchain icon",
}) => {
  return (
    <div className="flex gap-8 items-center max-md:flex-wrap max-md:justify-center max-sm:gap-4">
      {iconUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          className="object-contain h-[76px] w-[76px] max-sm:h-[50px] max-sm:w-[50px]"
          alt={altText}
        />
      ))}
    </div>
  );
};

export default BlockchainIconRow;
